package net.suncaper.ecommerceanalysis.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Map;

@RestController
public class LostUserController {
    @Autowired
    private JdbcTemplate jdbcTemplate;
    @PostMapping("/GetLostUser")
    public ArrayList<Map<String,Object>> LostUser(){
        System.out.println("GetLostUser");
       return (ArrayList<Map<String, Object>>) jdbcTemplate.queryForList("SELECT * FROM dws_ua_lost_user order by dt;");
    }
}
