package com.dp.service.impl;

import com.dp.dao.WorkMapper;
import com.dp.model.MyResult;
import com.dp.model.Work;
import com.dp.service.WorkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Date;
import java.util.UUID;

@Service(value = "workService")
public class WorkServiceImpl implements WorkService {
    @Autowired
    private WorkMapper workMapper;

    @Override
    public MyResult addwork(Work work){
        MyResult result = new MyResult();
        //生成32位id
        UUID uuid=UUID.randomUUID();
        String uuidStr=uuid.toString();
        work.setWorkid(uuidStr);

        Date date = new Date();
        Timestamp timestamp = new Timestamp(date.getTime()); //2013-01-14 22:45:36.484
        work.setPublishtime(timestamp);
        work.setStatus(1);

        int addnum = workMapper.insertSelective(work);
        if(addnum != 0){
            result.setCode(0);
            result.setMsg("发布成功！");
            result.setObj(work.getWorkid());
        }else {
            result.setCode(1);
            result.setMsg("发布失败！");
        }
        return result;
    }
}
