package org.vaadin.artur.parkingdemo;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.slf4j.LoggerFactory;
import org.vaadin.artur.parkingdemo.backend.Backend;
import org.vaadin.artur.parkingdemo.data.Location;
import org.vaadin.artur.parkingdemo.data.Ticket;
import org.vaadin.artur.parkingdemo.data.Violation;

import com.vaadin.flow.component.ClientCallable;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.router.Route;

import elemental.json.JsonArray;
import elemental.json.JsonObject;

@Route(value = "", layout = MainLayout.class)
@JsModule("view/ticket-view.js")
@Tag("ticket-view")
public class TicketView extends Component {

    public TicketView() {
        getElement().setPropertyJson("areas", Util.toJson(Arrays.asList(Backend.AREAS)));
        List<String> violations = Stream.of(Violation.values()).map(v -> v.getCaption()).collect(Collectors.toList());
        getElement().setPropertyJson("violations", Util.toJson(violations));
    }

    @ClientCallable
    public void save(JsonObject data) {
        Ticket t = new Ticket();
        Location l = new Location();

        JsonArray locationData = data.getArray("location");

        l.setLatitude(locationData.getNumber(0));
        l.setLongitude(locationData.getNumber(1));

        t.setArea(data.getString("area"));
        t.setLocation(l);
        t.setNotes(data.getString("notes"));
        t.setTimeStamp(System.currentTimeMillis());
        t.setVehicleId(data.getString("vehicleId"));
        t.setViolation(data.getString("violation"));

        String msg = "Ticket " + t + " stored";
        LoggerFactory.getLogger(getClass()).info(msg);
        Notification.show(msg);
    }

}
