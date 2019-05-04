package com.dp.model;

public class Mark {
    private String markid;

    private String name;

    private String bgimg;

    public String getMarkid() {
        return markid;
    }

    public void setMarkid(String markid) {
        this.markid = markid == null ? null : markid.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getBgimg() {
        return bgimg;
    }

    public void setBgimg(String bgimg) {
        this.bgimg = bgimg == null ? null : bgimg.trim();
    }
}