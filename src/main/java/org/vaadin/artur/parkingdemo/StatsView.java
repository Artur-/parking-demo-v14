package org.vaadin.artur.parkingdemo;

import org.vaadin.artur.parkingdemo.StatsView.StatsViewModel;

import com.vaadin.flow.component.AttachEvent;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.HtmlImport;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.templatemodel.TemplateModel;

@Route(value = "stats", layout = MainLayout.class)
@HtmlImport("view/stats-view.html")
@Tag("stats-view")
public class StatsView extends PolymerTemplate<StatsViewModel> {

    public interface StatsViewModel extends TemplateModel {
    }

    public StatsView() {
    }

    @Override
    protected void onAttach(AttachEvent attachEvent) {
        super.onAttach(attachEvent);
    }

}
