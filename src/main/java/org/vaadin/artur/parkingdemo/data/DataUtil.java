package org.vaadin.artur.parkingdemo.data;

import java.util.List;

import com.vaadin.flow.component.UI;

public class DataUtil {

    private static final int RANDOM_SHIFT_COUNT = 700;

    public static void persistTickets(final List<Ticket> tickets) {
        for (Ticket ticket : tickets) {
            if (ticket != null) {
                DataUtil.persistTicket(ticket);
            }
        }
        StringBuilder sb = new StringBuilder(tickets.size() + " ");
        sb.append("ticket");
        if (tickets.size() > 1) {
            sb.append("s");
        }
        sb.append(" saved");
        UI.getCurrent().getPage().executeJavaScript("window.alert($0)",
                sb.toString());
    }

    public static void persistTicket(final Ticket ticket) {
        ticket.setMyTicket(true);
        // ParkingUI.getTicketContainer().addItem(ticket);
    }

}
