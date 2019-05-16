import { html, css, LitElement } from "lit-element";

import "@vaadin/vaadin-button";
import "@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout";
import "@vaadin/vaadin-ordered-layout/vaadin-vertical-layout";
import "@vaadin/vaadin-checkbox";
import "@vaadin/vaadin-date-picker";
import "@vaadin/vaadin-text-field";
import "@vaadin/vaadin-combo-box";
import "@vaadin/vaadin-text-field/vaadin-text-area";

class TicketView extends LitElement {
  static get properties() {
    return {
      location: {
        type: Array,
        value: [-1, -1]
      },
      locationText: {
        type: String,
        value: ""
      }
    };
  }
  static get styles() {
    return css``;
  }
  render() {
    return html`
      <vaadin-vertical-layout>
        <vaadin-horizontal-layout
          style="width:100%;justify-content: space-between;align-items: center"
        >
          <vaadin-button @click="${e => this.clear()}">
            Clear
          </vaadin-button>
          <span>New Ticket</span>
          <vaadin-button @click="${e => this.save()}">
            Save
          </vaadin-button>
        </vaadin-horizontal-layout>
        <vaadin-form-layout style="width: 100%" theme="spacing margin">
          <div>Information</div>
          <vaadin-checkbox
            @change="${e => this.myLocationChange()}"
            id="myLocation"
          >
            My location {{locationText}}
          </vaadin-checkbox>
          <vaadin-date-picker
            id="time"
            style="width:100%"
            label="Time"
          ></vaadin-date-picker>
          <vaadin-text-field
            id="vehicleId"
            style="width:100%"
            label="Vehicle ID"
          ></vaadin-text-field>
          <vaadin-combo-box
            id="violation"
            items="[[violations]]"
            style="width:100%"
            label="Violation"
          ></vaadin-combo-box>
          <vaadin-combo-box
            id="area"
            items="[[areas]]"
            style="width:100%"
            label="Area"
          ></vaadin-combo-box>
          <vaadin-text-area
            id="notes"
            style="width:100%"
            label="Notes"
          ></vaadin-text-area>
        </vaadin-form-layout>
      </vaadin-vertical-layout>
    `;
  }
  get $time() {
    return this.shadowRoot.querySelector("#time");
  }
  get $myLocation() {
    return this.shadowRoot.querySelector("#myLocation");
  }
  get $vehicleId() {
    return this.shadowRoot.querySelector("#vehicleId");
  }
  get $notes() {
    return this.shadowRoot.querySelector("#notes");
  }
  get $myLocation() {
    return this.shadowRoot.querySelector("#myLocation");
  }
  get $violation() {
    return this.shadowRoot.querySelector("#violation");
  }
  get $area() {
    return this.shadowRoot.querySelector("#area");
  }
  connectedCallback() {
    super.connectedCallback();
  }
  myLocationChange() {
    if (this.$myLocation.checked) {
      this.locationText = " (locating...)";
      navigator.geolocation.getCurrentPosition(position => {
        this.location = [position.coords.latitude, position.coords.longitude];
        this.locationText = " (" + this.location.map(n => n.toFixed(2)) + ")";
      });
    } else {
      this.locationText = "";
    }
  }
  save() {
    const ticket = this.getCurrentFormTicket();
    this.saveTicket(ticket);
    this.clear();
  }
  getCurrentFormTicket() {
    const timeStamp = this.$time._selectedDate
      ? this.$time._selectedDate.getTime()
      : 0;
    return {
      location: this.location,
      timeStamp: timeStamp,
      vehicleId: this.$vehicleId.value,
      violation: this.$violation.value,
      area: this.$area.value,
      notes: this.$notes.value
    };
  }
  clear() {
    const fields = [this.$vehicleId, this.$violation, this.$area, this.$notes];
    fields.forEach(field => (field.value = ""));

    this.$time._selectedDate = new Date();
  }
  saveTicket(ticket) {
    this.$server.save(ticket);
  }
}
customElements.define("ticket-view", TicketView);
