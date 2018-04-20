package org.vaadin.artur.parkingdemo.data;

import java.io.Serializable;

public class Location implements Serializable {
    private double longitude;
    private double latitude;
    private String address;

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

}
