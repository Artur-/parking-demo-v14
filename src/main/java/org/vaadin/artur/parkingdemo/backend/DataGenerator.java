package org.vaadin.artur.parkingdemo.backend;

import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Random;

import org.vaadin.artur.parkingdemo.data.Location;
import org.vaadin.artur.parkingdemo.data.Names;
import org.vaadin.artur.parkingdemo.data.Shift;
import org.vaadin.artur.parkingdemo.data.Ticket;
import org.vaadin.artur.parkingdemo.data.Violation;

public class DataGenerator {
    private static final int HOUR_IN_MILLIS = 1000 * 60 * 60;
    private static Random random = new Random();

    public static List<Shift> generateRandomShifts(int count) {

        List<Shift> result = new ArrayList<>();
        for (int i = 0; i < count; i++) {
            Shift shift = new Shift();

            shift.setArea(getRandomArea());

            Calendar cal = Calendar.getInstance();
            cal.add(Calendar.HOUR, random.nextInt(1000));
            cal.set(Calendar.MINUTE, 0);
            shift.setDate(LocalDateTime.ofEpochSecond(
                    cal.getTime().getTime() / 1000, 0, ZoneOffset.UTC));

            shift.ssetDurationMillis(
                    HOUR_IN_MILLIS + random.nextInt(8) * HOUR_IN_MILLIS);

            Names names = new Names();
            shift.setName(names.getRandomFirstName() + " "
                    + names.getRandomLastName());

            result.add(shift);
        }
        return result;
    }

    private static String getRandomArea() {
        return Backend.AREAS[random.nextInt(Backend.AREAS.length)];
    }

    public static List<Ticket> generateDummyTickets(int count) {

        final List<Location> locations = new ArrayList<>();

        locations.add(createLocation(60.453917, 22.298506));
        locations.add(createLocation(60.447885, 22.295459));
        locations.add(createLocation(60.451673, 22.285459));
        locations.add(createLocation(60.456943, 22.295115));
        locations.add(createLocation(60.463735, 22.294472));
        locations.add(createLocation(60.454488, 22.273057));
        locations.add(createLocation(60.453895, 22.263015));
        locations.add(createLocation(60.441576, 22.30829));
        locations.add(createLocation(60.451419, 22.32065));
        locations.add(createLocation(60.442571, 22.274259));
        locations.add(createLocation(60.452139, 22.255848));
        locations.add(createLocation(60.462634, 22.275761));
        locations.add(createLocation(60.462084, 22.284945));
        locations.add(createLocation(60.455081, 22.305329));

        List<Ticket> result = new ArrayList<>();
        for (Location location : locations) {
            result.add(createRandomTicket(location));
        }

        for (int i = 0; i < count; i++) {
            result.add(createRandomTicket(null));
        }

        return result;
    }

    private static Ticket createRandomTicket(final Location location) {
        final Random random = new Random();
        final Ticket ticket = new Ticket();

        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.HOUR, -random.nextInt(24 * 7));

        if (location == null) {
            ticket.setNotes("Dummy notes");
            ticket.setLocation(createDummyLocation());
        } else {
            ticket.setLocation(location);
            ticket.setNotes("Notes for " + location);
        }
        cal.set(Calendar.MINUTE, 0);
        ticket.setTimeStamp(cal.getTime().getTime());

        ticket.setImageUrl("VAADIN/themes/parking/tickets/" + 1 + ".jpg");
        ticket.setThumbnailUrl(
                "VAADIN/themes/parking/tickets/" + 1 + "thumbnail.jpg");
        ticket.setImageIncluded(true);
        ticket.setVehicleId("ABC-" + (random.nextInt(800) + 100));

        ticket.setViolation(
                Violation.values()[random.nextInt(Violation.values().length)]);

        ticket.setMyTicket(random.nextDouble() < 0.3);

        ticket.setArea(getRandomArea());
        return ticket;
    }

    private static Location createDummyLocation() {
        final Random random = new Random();
        double lat = 60.43;
        double lon = 22.34;
        Location location = new Location();

        double latitude = lat + (random.nextDouble() - 0.5) * 0.1;
        double longitude = lon + (random.nextDouble() - 0.5) * 0.1;
        location.setLatitude(latitude);
        location.setLongitude(longitude);

        return location;
    }

    private static Location createLocation(final double latitude,
            final double longitude) {
        Location location = new Location();
        location.setLatitude(latitude);
        location.setLongitude(longitude);
        return location;
    }

}
