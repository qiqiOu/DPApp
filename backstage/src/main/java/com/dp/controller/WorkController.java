package com.dp.controller;

import com.dp.model.MyResult;
import com.dp.model.Work;
import com.dp.service.WorkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "/work")
public class WorkController {
    @Autowired
    private WorkService workService;

    @ResponseBody
    @PostMapping("/addwork")
    public MyResult addwork(@RequestBody Work work){
        return workService.addwork(work);
    }
}
