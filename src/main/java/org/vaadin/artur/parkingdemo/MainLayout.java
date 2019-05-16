package org.vaadin.artur.parkingdemo;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.router.RouterLayout;
import com.vaadin.flow.server.InitialPageSettings;
import com.vaadin.flow.server.InitialPageSettings.Position;
import com.vaadin.flow.server.InitialPageSettings.WrapMode;
import com.vaadin.flow.server.PageConfigurator;

@Tag("main-layout")
@JsModule("main-layout.js")
public class MainLayout extends Component implements RouterLayout, PageConfigurator {

    @Override
    public void configurePage(InitialPageSettings settings) {
        settings.addLink(Position.PREPEND, "manifest", "app.webmanifest");
        settings.addInlineWithContents("if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');",
                WrapMode.JAVASCRIPT);

    }

}
