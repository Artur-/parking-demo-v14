package org.vaadin.artur.parkingdemo.data;

import java.io.Serializable;

public class Ticket implements Serializable {
    private Location location = new Location();
    private double timeStamp = 0;
    private String vehicleId;
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

    public String getVehicleId() {
        return vehicleId;
    }

    public void setVehicleId(String registerPlateNumber) {
        vehicleId = registerPlateNumber;
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

    public double getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(double timeStamp) {
        this.timeStamp = timeStamp;
    }

    @Override
    public String toString() {
        return "Ticket [location=" + location + ", timeStamp=" + timeStamp
                + ", vehicleId=" + vehicleId + ", violation=" + violation
                + ", area=" + area + ", imageUrl=" + imageUrl
                + ", thumbnailUrl=" + thumbnailUrl + ", notes=" + notes
                + ", imageIncluded=" + imageIncluded + ", myTicket=" + myTicket
                + "]";
    }

}
