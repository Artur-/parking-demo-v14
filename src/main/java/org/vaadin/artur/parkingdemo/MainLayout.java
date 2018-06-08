package org.vaadin.artur.parkingdemo;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.HtmlImport;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.router.RouterLayout;
import com.vaadin.flow.server.InitialPageSettings;
import com.vaadin.flow.server.InitialPageSettings.Position;
import com.vaadin.flow.server.InitialPageSettings.WrapMode;
import com.vaadin.flow.server.PageConfigurator;
import com.vaadin.flow.templatemodel.TemplateModel;

@Tag("main-layout")
@HtmlImport("frontend://main-layout.html")
public class MainLayout extends PolymerTemplate<MainLayout.MainLayoutModel>
        implements RouterLayout, PageConfigurator {

    public interface MainLayoutModel extends TemplateModel {

    }

    @Override
    public void configurePage(InitialPageSettings settings) {
        settings.addLink(Position.PREPEND, "manifest", "app.webmanifest");
        settings.addInlineWithContents(
                "if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');",
                WrapMode.JAVASCRIPT);

    }

}
