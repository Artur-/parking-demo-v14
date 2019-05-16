package org.vaadin.artur.parkingdemo;

import org.vaadin.artur.parkingdemo.backend.Backend;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.router.Route;

@Route(value = "map", layout = MainLayout.class)
@JsModule("view/map-view.js")
@Tag("map-view")
public class MapView extends Component {

    public MapView() {
        getElement().setPropertyJson("tickets", Util.toJson(Backend.get().getTickets()));
    }
}
