import { html, css, LitElement } from "lit-element";
import "@vaadin/vaadin-ordered-layout/vaadin-vertical-layout";
import "@vaadin/vaadin-grid";

class ShiftsView extends LitElement {
  static get properties() {
    return {
      shifts: {
        type: Array,
        value: undefined,
        observer: "shiftsChanged" //FIXME
      }
    };
  }

  static get styles() {
    return css`
      vaadin-vertical-layout {
        height: 100%;
      }

      #shifts {
        height: 100%;
      }
    `;
  }
  render() {
    return html`
      <vaadin-vertical-layout>
        <vaadin-grid id="shifts" items="[[shifts]]">
          <vaadin-grid-column>
            <template class="header"
              >Name</template
            >
            <template
              >[[item.name]]</template
            >
          </vaadin-grid-column>

          <vaadin-grid-column>
            <template class="header"
              >Area</template
            >
            <template
              >[[item.area]]</template
            >
          </vaadin-grid-column>

          <vaadin-grid-column>
            <template class="header"
              >Date</template
            >
            <template
              >[[item.date]]</template
            >
          </vaadin-grid-column>
          <vaadin-grid-column>
            <template class="header"
              >Start</template
            >
            <template
              >[[item.start]]:00</template
            >
          </vaadin-grid-column>
          <vaadin-grid-column>
            <template class="header"
              >End</template
            >
            <template
              >[[item.end]]:00</template
            >
          </vaadin-grid-column>
        </vaadin-grid>
      </vaadin-vertical-layout>
    `;
  }
  connectedCallback() {
    super.connectedCallback();
    if (!this.shifts) {
      this.shifts = JSON.parse(localStorage.getItem("shifts")) || [];
    }
  }

  shiftsChanged() {
    localStorage.setItem("shifts", JSON.stringify(this.shifts));
  }
}
customElements.define("shifts-view", ShiftsView);
