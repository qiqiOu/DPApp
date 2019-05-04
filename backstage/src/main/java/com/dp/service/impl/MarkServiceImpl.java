package com.dp.service.impl;

import com.dp.dao.MarkMapper;
import com.dp.model.Mark;
import com.dp.model.MyResult;
import com.dp.service.MarkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service(value = "markService")
public class MarkServiceImpl implements MarkService {
    @Autowired
    private MarkMapper markMapper;

    @Override
    public MyResult getmark(){
        MyResult result = new MyResult();
        List<Mark> list = new ArrayList<>();
        list = markMapper.select();
        if(list.size() > 0){
            result.setCode(0);
            result.setObj(list);
        }else{
            result.setCode(1);
        }
        return result;
    }
}
