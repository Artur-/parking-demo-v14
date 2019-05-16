import { html, css, LitElement } from "lit-element";

import "@vaadin/vaadin-tabs";
import "@vaadin/vaadin-tabs/vaadin-tab";
import "@polymer/iron-icon";

import './online-detector';

class MainMenu extends LitElement {
  static get properties() {
    return {
      route: {
        type: String
      }
    };
  }

  static get styles() {
    return css``;
  }
  render() {
    return html`
      <online-detector id="detector"></online-detector>
      <vaadin-tabs id="menu">
        <a @click="${e => this.maybeNavigate(e)}" router-link href="">
          <vaadin-tab selected="[[_equals(route, '')]]">
            <iron-icon icon="vaadin:ticket"></iron-icon>Ticket</vaadin-tab
          >
        </a>
        <a @click="${e => this.maybeNavigate(e)}" router-link href="map">
          <vaadin-tab selected="[[_equals(route, 'map')]]">
            <iron-icon icon="vaadin:map-marker"></iron-icon>24h Map</vaadin-tab
          >
        </a>
        <a @click="${e => this.maybeNavigate(e)}" router-link href="shifts">
          <vaadin-tab selected="[[_equals(route, 'shifts')]]">
            <iron-icon icon="vaadin:table"></iron-icon>Shifts</vaadin-tab
          >
        </a>
        <a @click="${e => this.maybeNavigate(e)}" router-link href="stats">
          <vaadin-tab selected="[[_equals(route, 'stats')]]">
            <iron-icon icon="vaadin:chart"></iron-icon>Stats</vaadin-tab
          >
        </a>
      </vaadin-tabs>
    `;
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateRoute();
    this.hackPushState();
    if (!this.$detector.appOnline) {
      this.navigateOffline(window.location.href);
    }
  }
  get $detector() {
    return this.shadowRoot.querySelector("#detector");
  }
  _equals(route, viewName) {
    return route == viewName;
  }
  maybeNavigate(e) {
    if (!this.$detector.appOnline) {
      e.stopPropagation();
      e.preventDefault();
      this.navigateOffline(e.currentTarget.href);
    }
  }
  navigateOffline(targetHref) {
    const targetView = targetHref.replace(document.baseURI, "");
    if (targetView == "map") return;
    this.dispatchEvent(
      new CustomEvent("navigate", { detail: { view: targetView } })
    );
  }
  updateRoute() {
    var p = window.location.pathname;
    if (p.indexOf("/") == 0) {
      p = p.substring(1);
    }
    this.route = p;
  }
  hackPushState() {
    // No browser gives navigation eventgs
    // Flow does not give navigation events
    // Rely on pushState being used for navigation

    var self = this;
    var pushState = history.pushState;
    window.history.pushState = function(state) {
      pushState.apply(window.history, arguments);
      self.updateRoute();
    };
  }
}
customElements.define("main-menu", MainMenu);
