package com.dp.service;

import com.dp.model.MyResult;
import com.dp.model.User;

public interface UserService {
    MyResult login(User user);

    MyResult register(User user);
}
