package org.vaadin.artur.parkingdemo;

import org.vaadin.artur.parkingdemo.backend.Backend;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.router.Route;

@Route(value = "stats", layout = MainLayout.class)
@JsModule("view/stats-view.js")
@Tag("stats-view")
public class StatsView extends Component {

    public StatsView() {
        getElement().setPropertyJson("tickets", Util.toJson(Backend.get().getTickets()));
    }

}
