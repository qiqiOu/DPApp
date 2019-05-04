package com.dp.dao;

import com.dp.model.Work;

public interface WorkMapper {
    int deleteByPrimaryKey(String workid);

    int insert(Work record);

    int insertSelective(Work record);

    Work selectByPrimaryKey(String workid);

    int updateByPrimaryKeySelective(Work record);

    int updateByPrimaryKey(Work record);
}