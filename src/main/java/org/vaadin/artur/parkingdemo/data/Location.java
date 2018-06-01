package org.vaadin.artur.parkingdemo.data;

import java.io.Serializable;

public class Location implements Serializable {
    private double longitude;
    private double latitude;

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

    @Override
    public String toString() {
        return "[longitude=" + longitude + ", latitude=" + latitude + "]";
    }

}
