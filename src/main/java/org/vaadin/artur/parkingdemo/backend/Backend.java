package org.vaadin.artur.parkingdemo.backend;

import java.util.List;

import org.vaadin.artur.parkingdemo.data.Shift;
import org.vaadin.artur.parkingdemo.data.Ticket;

public class Backend {
    public static final String[] AREAS = new String[] { "A1", "A2", "A3", "A4",
            "B1", "B2", "B3", "B4", "C1", "C2", "C3", "C4" };
    private static final Backend INSTANCE = new Backend();
    private static List<Shift> shifts;

    public static Backend get() {
        return INSTANCE;
    }

    private List<Ticket> tickets;

    public Backend() {
        tickets = DataGenerator.generateDummyTickets(50);
        shifts = DataGenerator.generateRandomShifts(500);
    }

    public List<Ticket> getTickets() {
        return tickets;
    }

    public static List<Shift> getShifts() {
        return shifts;
    }

}
