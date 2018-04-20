package org.vaadin.artur.parkingdemo;

import com.vaadin.flow.component.HasElement;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.HtmlImport;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.page.Viewport;
import com.vaadin.flow.component.polymertemplate.Id;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.router.RouterLayout;
import com.vaadin.flow.templatemodel.TemplateModel;

@Tag("main-layout")
@HtmlImport("frontend://main-layout.html")
@Viewport(value = "width=device-width, initial-scale=1, minimum-scale=1")
public class MainLayout extends PolymerTemplate<MainLayout.MainLayoutModel>
        implements RouterLayout {

    @Id
    private Div content;

    public interface MainLayoutModel extends TemplateModel {

    }

    @Override
    public void showRouterLayoutContent(HasElement child) {
        content.getElement().removeAllChildren();
        content.getElement().appendChild(child.getElement());
    }
}
