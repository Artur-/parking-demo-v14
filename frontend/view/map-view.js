import { html, css, LitElement } from "lit-element";

class MapView extends LitElement {
  static get styles() {
    return css``;
  }
  render() {
    return html`
      <geo-location
        id="geo"
        latitude="{{latitude}}"
        longitude="{{longitude}}"
      ></geo-location>

      <google-map
        api-key="foo"
        latitude="[[latitude]]"
        longitude="[[longitude]]"
      >
        <template is="dom-repeat" items="{{tickets}}">
          <google-map-marker
            latitude="[[item.location.latitude]]"
            longitude="[[item.location.longitude]]"
          ></google-map-marker>
        </template>
      </google-map>
    `;
  }
}
customElements.define("map-view", MapView);
