package org.vaadin.artur.parkingdemo;

import java.util.List;

import org.vaadin.artur.parkingdemo.ShiftsView.ShiftsViewModel;
import org.vaadin.artur.parkingdemo.backend.Backend;
import org.vaadin.artur.parkingdemo.data.Shift;

import com.vaadin.flow.component.AttachEvent;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.HtmlImport;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.templatemodel.TemplateModel;

@Route(value = "shifts", layout = MainLayout.class)
@HtmlImport("view/shifts-view.html")
@Tag("shifts-view")
public class ShiftsView extends PolymerTemplate<ShiftsViewModel> {

    public interface ShiftsViewModel extends TemplateModel {
        public List<Shift> getShifts();

        public void setShifts(List<Shift> shifts);
    }

    public ShiftsView() {
    }

    @Override
    protected void onAttach(AttachEvent attachEvent) {
        super.onAttach(attachEvent);
        getModel().setShifts(Backend.getShifts());
    }

}
