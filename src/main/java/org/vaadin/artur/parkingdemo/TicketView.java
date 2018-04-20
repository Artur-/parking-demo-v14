package org.vaadin.artur.parkingdemo;

import org.vaadin.artur.parkingdemo.TicketView.TicketViewModel;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.HtmlImport;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.templatemodel.TemplateModel;

@Route(value = "", layout = MainLayout.class)
@HtmlImport("view/ticket-view.html")
@Tag("ticket-view")
public class TicketView extends PolymerTemplate<TicketViewModel> {

    public interface TicketViewModel extends TemplateModel {
    }

    public TicketView() {

    }

}
