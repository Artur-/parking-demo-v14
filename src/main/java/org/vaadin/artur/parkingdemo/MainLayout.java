package org.vaadin.artur.parkingdemo;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.HtmlImport;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.router.RouterLayout;
import com.vaadin.flow.templatemodel.TemplateModel;

@Tag("main-layout")
@HtmlImport("frontend://main-layout.html")
public class MainLayout extends PolymerTemplate<MainLayout.MainLayoutModel>
        implements RouterLayout, PageConfigurator {

    public interface MainLayoutModel extends TemplateModel {

    }
}
