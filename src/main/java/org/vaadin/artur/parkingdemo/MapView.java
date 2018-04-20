package org.vaadin.artur.parkingdemo;

import java.util.List;

import org.vaadin.artur.parkingdemo.MapView.MapViewModel;
import org.vaadin.artur.parkingdemo.data.DataUtil;
import org.vaadin.artur.parkingdemo.data.Ticket;

import com.vaadin.flow.component.AttachEvent;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.HtmlImport;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.templatemodel.TemplateModel;

@Route(value = "map", layout = MainLayout.class)
@HtmlImport("view/map-view.html")
@Tag("map-view")
public class MapView extends PolymerTemplate<MapViewModel> {

    public interface MapViewModel extends TemplateModel {
        void setTickets(List<Ticket> tickets);

    }

    public MapView() {
    }

    @Override
    protected void onAttach(AttachEvent attachEvent) {
        super.onAttach(attachEvent);

        getModel().setTickets(DataUtil.generateDummyTickets());
    }
}
