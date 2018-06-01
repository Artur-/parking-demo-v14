package org.vaadin.artur.parkingdemo.data;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Shift {

    private String name;
    private String area;
    private LocalDateTime date;
    private long durationMillis;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public String getDate() {
        return date.format(DateTimeFormatter.ISO_DATE);
    }

    public void ssetDurationMillis(long durationMillis) {
        this.durationMillis = durationMillis;
    }

    public int getStart() {
        return date.getHour();
    }

    public int getEnd() {
        int durationHours = (int) (durationMillis / 1000 / 60 / 60 / 24);
        return (getStart() + durationHours) % 24;
    }

}
