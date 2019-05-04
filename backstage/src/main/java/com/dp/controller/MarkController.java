package com.dp.controller;

import com.dp.model.MyResult;
import com.dp.service.MarkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "/mark")
public class MarkController {
    @Autowired
    private MarkService markService;

    @ResponseBody
    @GetMapping("/getmark")
    public MyResult getmark(){
        return markService.getmark();
    }
}
