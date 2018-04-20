package org.vaadin.artur.parkingdemo.data;

import java.io.Serializable;

public class Ticket implements Serializable {
    private Location location = new Location();
    // private Date timeStamp = new Date();
    private String registerPlateNumber;
    private String violation;
    private String area;

    private String imageUrl;
    private String thumbnailUrl;
    private String notes;
    private boolean imageIncluded;
    private boolean myTicket;

    public boolean isImageIncluded() {
        return imageIncluded;
    }

    public void setImageIncluded(boolean imageIncluded) {
        this.imageIncluded = imageIncluded;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    // public Date getTimeStamp() {
    // return timeStamp;
    // }
    //
    // public void setTimeStamp(Date timeStamp) {
    // this.timeStamp = timeStamp;
    // }

    public String getRegisterPlateNumber() {
        return registerPlateNumber;
    }

    public void setRegisterPlateNumber(String registerPlateNumber) {
        this.registerPlateNumber = registerPlateNumber;
    }

    public String getViolation() {
        return violation;
    }

    public void setViolation(Violation violation) {
        setViolation(violation.getCaption());
    }

    public void setViolation(String violation) {
        this.violation = violation;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public boolean isMyTicket() {
        return myTicket;
    }

    public void setMyTicket(boolean myTicket) {
        this.myTicket = myTicket;
    }

    public String getThumbnailUrl() {
        return thumbnailUrl;
    }

    public void setThumbnailUrl(String thumbnailUrl) {
        this.thumbnailUrl = thumbnailUrl;
    }

}
