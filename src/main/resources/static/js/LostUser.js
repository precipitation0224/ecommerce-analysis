$(document).ready(function() {
    var LostUser_Element_Model = new Vue({
        el:"#Lost_user_table",
        mounted:function (){
            console.log("Lost_user_table")
            //挂载后就加载图表 只加载一次
            var myChart = echarts.init(document.getElementById('Lost_user_table'));
            var option = {
                title: {
                    text: '用户流失情况'
                },
                tooltip: {},
                legend: {
                    data: ['当日用户流失量']
                },
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series: [{
                    name: '当日用户流失量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            };


            myChart.showLoading(); // 开启 loading 效果
            $.ajax({
                type: "post",
                url: "/GetLostUser",

                dataType: "json",
                success: function(response) {
                    console.log(response);
                    option.series[0].data = [];
                    option.xAxis.data = [];
                    for (let index = 0; index < response.length; index++) {
                        const element = response[index];
                        option.series[0].data.push(element.total);
                        option.xAxis.data.push(element.dt);
                    }
                    myChart.hideLoading(); // 隐藏 loading 效果
                    myChart.setOption(option);


                }
            });
        },
        methods: {


        }
    });


});