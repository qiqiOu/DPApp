package com.dp.dao;

import com.dp.model.Mark;

import java.util.List;

public interface MarkMapper {
    int deleteByPrimaryKey(String markid);

    int insert(Mark record);

    int insertSelective(Mark record);

    Mark selectByPrimaryKey(String markid);

    int updateByPrimaryKeySelective(Mark record);

    int updateByPrimaryKey(Mark record);

    List<Mark> select();
}