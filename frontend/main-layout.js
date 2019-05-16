import { html, css, LitElement } from "lit-element";
import './main-menu'
class MainLayout extends LitElement {
  static get styles() {
    return css`
      ::slotted(*) {
        flex: 1;
        width: 100%;
      }

      #menu {
        width: 100%;
      }
    `;
  }
  render() {
    return html`
      <vaadin-vertical-layout style="width: 100%; height: 100%;">
        <slot></slot>
        <main-menu @navigate="${e => this.showView(e)}"></main-menu>
      </vaadin-vertical-layout>
    `;
  }
  showView(e) {
    const url = e.detail.view;
    var view;
    if (url == "") {
      view = "ticket-view";
    } else {
      view = url + "-view";
    }
    var self = this;
    // 1. Ensure import is loaded
    Polymer.importHref("frontend/view/" + view + ".html", e => {
      // 2. Replace content
      self.removeChild(self.firstElementChild);
      const newView = document.createElement(view);
      self.appendChild(newView);
      // 3. Update URL
      window.history.pushState({}, "", url);
    });
  }
}
customElements.define("main-layout", MainLayout);
