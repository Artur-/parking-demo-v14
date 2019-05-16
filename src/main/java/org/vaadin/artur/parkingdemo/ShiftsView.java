package org.vaadin.artur.parkingdemo;

import java.util.List;

import org.vaadin.artur.parkingdemo.backend.Backend;
import org.vaadin.artur.parkingdemo.data.Shift;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.templatemodel.TemplateModel;

@Route(value = "shifts", layout = MainLayout.class)
@JsModule("view/shifts-view.js")
@Tag("shifts-view")
public class ShiftsView extends Component {

    public interface ShiftsViewModel extends TemplateModel {
        public List<Shift> getShifts();

        public void setShifts(List<Shift> shifts);
    }

    public ShiftsView() {
        getElement().setPropertyJson("shifts", Util.toJson(Backend.getShifts()));
    }

}
