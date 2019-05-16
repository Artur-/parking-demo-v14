import { html, css, LitElement } from "lit-element";

class OnlineDetector extends LitElement {
  static get properties() {
    return {
      networkOnline: {
        type: Boolean,
        value: navigator.onLine,
        notify: true
      },
      appOnline: {
        type: Boolean,
        computed: "isAppOnline(networkOnline)",
        notify: true
      }
    };
  }
  static get styles() {
    return css`
      :host {
        display: none;
      }
    `;
  }
  render() {
    return html``;
  }
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("online", e => {
      this.networkOnline = navigator.onLine;
    });
    window.addEventListener("offline", e => {
      this.networkOnline = navigator.onLine;
    });
  }

  isAppOnline(networkOnline) {
    return networkOnline && this.flowStarted();
  }

  flowStarted() {
    return !!window.Vaadin.Flow;
  }
}
customElements.define("online-detector", OnlineDetector);
