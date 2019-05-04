package com.dp.service.impl;

import com.dp.dao.UserMapper;
import com.dp.model.MyResult;
import com.dp.model.User;
import com.dp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.UUID;

@Service(value = "userService")
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;
    @Override
    public MyResult login(User user){
        User u = userMapper.login(user);
        MyResult result = new MyResult();
        if(u != null){
            result.setCode(0);
            u.setStatus(1);//更改状态
            userMapper.updateByPrimaryKeySelective(u);
            result.setMsg("登录成功！");
            result.setObj(u.getId());
        }else {
            result.setCode(1);
            result.setMsg("登录失败！");
        }

        return result;
    }

    @Override
    public MyResult register(User user){
        MyResult result = new MyResult();
        //生成32位id
        UUID uuid=UUID.randomUUID();
        String uuidStr=uuid.toString();
        user.setId(uuidStr);
        User u = userMapper.isregister(user.getTel());
        if(u != null){
            result.setCode(2);
            result.setMsg("该号码已注册！");
        }else{
            int insertnum = userMapper.insertSelective(user);
            if(insertnum != 0){
                result.setCode(0);
                result.setMsg("注册成功！");
                result.setObj(insertnum);
            }else {
                result.setCode(1);
                result.setMsg("注册失败！");
            }
        }

        return result;
    }
}
