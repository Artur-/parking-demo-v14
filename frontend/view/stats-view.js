import { html, css, LitElement } from "lit-element";
import "@vaadin/vaadin-ordered-layout/vaadin-vertical-layout";
import "@vaadin/vaadin-charts";

class StatsView extends LitElement {
  static get properties() {
    return {
      categories: {
        type: Array
      },
      myTickets: {
        type: Array,
        computed: "_myTickets(tickets,categories)"
      },
      otherTickets: {
        type: Array,
        computed: "_otherTickets(tickets,categories)"
      }
    };
  }
  static get styles() {
    return css`
      #header {
        width: 100%;
        height: 3em;
        align-items: center;
        justify-content: center;
      }
    `;
  }
  render() {
    return html`
      <vaadin-vertical-layout>
        <vaadin-horizontal-layout id="header">
          <div>Stats</div>
        </vaadin-horizontal-layout>
        <vaadin-chart
          title="Tickets / day"
          categories="{{categories}}"
          additional-options='{
				"yAxis": {
              		"min": 0,
              		"title": "Total tickets"
				  },
				"xAxis": {
					type: "datetime"
				}

				}'
        >
          <vaadin-chart-series
            stack="1"
            stacking="normal"
            type="column"
            title="My tickets"
            type="column"
            values="{{myTickets}}"
          ></vaadin-chart-series>
          <vaadin-chart-series
            stack="1"
            stacking="normal"
            title="Other tickets"
            type="column"
            values="{{otherTickets}}"
          ></vaadin-chart-series>
        </vaadin-chart>
      </vaadin-vertical-layout>
    `;
  }
  connectedCallback() {
    super.connectedCallback();
    const today = new Date();
    var cats = [];
    for (var daysBack = 6; daysBack >= 0; daysBack--) {
      cats.push(new Date(today - daysBack * 24 * 3600 * 1000));
    }
    this.set("categories", cats);
  }
  _myTickets(tickets, categories) {
    if (!tickets || !categories) return;
    return this._asDateMap(tickets.filter(ticket => ticket.myTicket));
  }
  _otherTickets(tickets, categories) {
    if (!tickets || !categories) return;
    return this._asDateMap(tickets.filter(ticket => !ticket.myTicket));
  }

  _asDateMap(tickets) {
    const myTicketDates = tickets.map(ticket =>
      new Date(ticket.timeStamp).toLocaleDateString()
    );
    const dateMap = myTicketDates.reduce((map, date) => {
      if (map[date]) map[date]++;
      else map[date] = 1;

      return map;
    }, {});
    const result = [];
    this.categories.forEach(date => {
      const dateString = date.toLocaleDateString();
      result.push([dateString, dateMap[dateString]]);
    });

    return result;
  }
}
customElements.define("stats-view", StatsView);
