// Important: update the version each time you change any of the files listed below
var version = 14;
// define your offline-page and assets used by it
var manifest = 'app.webmanifest';
var offlinePage = 'offline.html';
var offlineAssets = [
  'frontend/bower_components/webcomponentsjs/webcomponents-loader.js',
  'frontend/view/main-menu.html',
  'frontend/view/main-layout.html',
  'frontend/view/ticket-view.html',
  'frontend/view/map-view.html',
  'frontend/view/stats-view.html',
  'frontend/view/shifts-view.html',
  'frontend/bower_components/polymer/polymer.html',
  'frontend/bower_components/vaadin-button/vaadin-button.html',
  'frontend/bower_components/vaadin-ordered-layout/vaadin-horizontal-layout.html',
  'frontend/bower_components/vaadin-ordered-layout/vaadin-vertical-layout.html',
  'frontend/bower_components/vaadin-checkbox/vaadin-checkbox.html',
  'frontend/bower_components/vaadin-date-picker/vaadin-date-picker.html',
  'frontend/bower_components/vaadin-text-field/vaadin-text-field.html',
  'frontend/bower_components/vaadin-combo-box/vaadin-combo-box.html',
  'frontend/bower_components/vaadin-text-field/vaadin-text-area.html',
  'frontend/bower_components/polymer/lib/legacy/legacy-element-mixin.html',
'frontend/bower_components/polymer/lib/legacy/polymer-fn.html',
'frontend/bower_components/polymer/lib/legacy/templatizer-behavior.html',
'frontend/bower_components/polymer/lib/elements/dom-bind.html',
'frontend/bower_components/polymer/lib/elements/dom-repeat.html',
'frontend/bower_components/polymer/lib/elements/dom-if.html',
'frontend/bower_components/polymer/lib/elements/array-selector.html',
'frontend/bower_components/polymer/lib/elements/custom-style.html',
'frontend/bower_components/polymer/lib/legacy/mutable-data-behavior.html',
'frontend/bower_components/polymer/lib/utils.html',
'frontend/bower_components/vaadin-button/theme/lumo/vaadin-button.html',
'frontend/bower_components/vaadin-ordered-layout/theme/lumo/vaadin-horizontal-layout.html',
'frontend/bower_components/vaadin-ordered-layout/theme/lumo/vaadin-vertical-layout.html',
'frontend/bower_components/vaadin-checkbox/theme/lumo/vaadin-checkbox.html',
'frontend/bower_components/vaadin-date-picker/theme/lumo/vaadin-date-picker.html',
'frontend/bower_components/vaadin-text-field/theme/lumo/vaadin-text-field.html',
'frontend/bower_components/vaadin-combo-box/theme/lumo/vaadin-combo-box.html',
'frontend/bower_components/vaadin-text-field/theme/lumo/vaadin-text-area.html',
'frontend/bower_components/polymer/lib/legacy/legacy-element-mixin.html',
'frontend/bower_components/polymer/lib/legacy/polymer-fn.html',
'frontend/bower_components/polymer/lib/legacy/templatizer-behavior.html',
'frontend/bower_components/polymer/lib/elements/dom-bind.html',
'frontend/bower_components/polymer/lib/elements/dom-repeat.html',
'frontend/bower_components/polymer/lib/elements/dom-if.html',
'frontend/bower_components/polymer/lib/elements/array-selector.html',
'frontend/bower_components/polymer/lib/elements/custom-style.html',
'frontend/bower_components/polymer/lib/legacy/mutable-data-behavior.html',
'frontend/bower_components/polymer/lib/utils.html',
'frontend/bower_components/vaadin-button/theme/lumo/vaadin-button.html',
'frontend/bower_components/vaadin-ordered-layout/theme/lumo/vaadin-horizontal-layout.html',
'frontend/bower_components/vaadin-ordered-layout/theme/lumo/vaadin-vertical-layout.html',
'frontend/bower_components/vaadin-checkbox/theme/lumo/vaadin-checkbox.html',
'frontend/bower_components/vaadin-date-picker/theme/lumo/vaadin-date-picker.html',
'frontend/bower_components/vaadin-text-field/theme/lumo/vaadin-text-field.html',
'frontend/bower_components/vaadin-combo-box/theme/lumo/vaadin-combo-box.html',
'frontend/bower_components/vaadin-text-field/theme/lumo/vaadin-text-area.html',
'frontend/bower_components/polymer/lib/utils/html-tag.html',
'frontend/bower_components/shadycss/apply-shim.html',
'frontend/bower_components/polymer/lib/mixins/element-mixin.html',
'frontend/bower_components/polymer/lib/mixins/gesture-event-listeners.html',
'frontend/bower_components/polymer/lib/mixins/dir-mixin.html',
'frontend/bower_components/polymer/lib/utils/mixin.html',
'frontend/bower_components/polymer/lib/utils/import-href.html',
'frontend/bower_components/polymer/lib/utils/render-status.html',
'frontend/bower_components/polymer/lib/utils/unresolved.html',
'frontend/bower_components/polymer/lib/legacy/polymer.dom.html',
'frontend/bower_components/polymer/lib/legacy/class.html',
'frontend/bower_components/polymer/lib/utils/templatize.html',
'frontend/bower_components/polymer/lib/utils/boot.html',
'frontend/bower_components/polymer/lib/mixins/property-effects.html',
'frontend/bower_components/polymer/lib/mixins/mutable-data.html',
'frontend/bower_components/polymer/polymer-element.html',
'frontend/bower_components/polymer/lib/utils/debounce.html',
'frontend/bower_components/polymer/lib/utils/flush.html',
'frontend/bower_components/polymer/lib/utils/array-splice.html',
'frontend/bower_components/shadycss/custom-style-interface.html',
'frontend/bower_components/polymer/lib/utils/style-gather.html',
'frontend/bower_components/vaadin-button/src/vaadin-button.html',
'frontend/bower_components/vaadin-lumo-styles/color.html',
'frontend/bower_components/vaadin-lumo-styles/sizing.html',
'frontend/bower_components/vaadin-lumo-styles/spacing.html',
'frontend/bower_components/vaadin-lumo-styles/style.html',
'frontend/bower_components/vaadin-lumo-styles/typography.html',
'frontend/bower_components/vaadin-ordered-layout/src/vaadin-horizontal-layout.html',
'frontend/bower_components/vaadin-ordered-layout/theme/lumo/vaadin-ordered-layout.html',
'frontend/bower_components/vaadin-ordered-layout/src/vaadin-vertical-layout.html',
'frontend/bower_components/vaadin-checkbox/src/vaadin-checkbox.html',
'frontend/bower_components/vaadin-lumo-styles/font-icons.html',
'frontend/bower_components/vaadin-lumo-styles/mixins/field-button.html',
'frontend/bower_components/vaadin-date-picker/theme/lumo/vaadin-date-picker-overlay.html',
'frontend/bower_components/vaadin-date-picker/theme/lumo/vaadin-date-picker-overlay-content.html',
'frontend/bower_components/vaadin-date-picker/theme/lumo/vaadin-month-calendar.html',
'frontend/bower_components/vaadin-date-picker/src/vaadin-date-picker.html',
'frontend/bower_components/vaadin-text-field/src/vaadin-text-field.html',
'frontend/bower_components/vaadin-combo-box/theme/lumo/vaadin-combo-box-dropdown.html',
'frontend/bower_components/vaadin-combo-box/theme/lumo/vaadin-combo-box-item.html',
'frontend/bower_components/vaadin-combo-box/src/vaadin-combo-box.html',
'frontend/bower_components/vaadin-text-field/src/vaadin-text-area.html',
'frontend/bower_components/shadycss/apply-shim.min.js',
'frontend/bower_components/polymer/lib/utils/settings.html',
'frontend/bower_components/polymer/lib/utils/resolve-url.html',
'frontend/bower_components/polymer/lib/elements/dom-module.html',
'frontend/bower_components/polymer/lib/mixins/properties-mixin.html',
'frontend/bower_components/polymer/lib/utils/gestures.html',
'frontend/bower_components/polymer/lib/mixins/property-accessors.html',
'frontend/bower_components/polymer/lib/utils/flattened-nodes-observer.html',
'frontend/bower_components/polymer/lib/utils/path.html',
'frontend/bower_components/polymer/lib/utils/case-map.html',
'frontend/bower_components/polymer/lib/mixins/template-stamp.html',
'frontend/bower_components/polymer/lib/utils/async.html',
'frontend/bower_components/shadycss/custom-style-interface.min.js',
'frontend/bower_components/vaadin-themable-mixin/vaadin-themable-mixin.html',
'frontend/bower_components/vaadin-control-state-mixin/vaadin-control-state-mixin.html',
'frontend/bower_components/vaadin-element-mixin/vaadin-element-mixin.html',
'frontend/bower_components/vaadin-lumo-styles/version.html',
'frontend/bower_components/vaadin-lumo-styles/mixins/menu-overlay.html',
'frontend/bower_components/vaadin-date-picker/src/vaadin-date-picker-overlay.html',
'frontend/bower_components/vaadin-date-picker/src/vaadin-date-picker-overlay-content.html',
'frontend/bower_components/vaadin-date-picker/src/vaadin-month-calendar.html',
'frontend/bower_components/iron-media-query/iron-media-query.html',
'frontend/bower_components/vaadin-date-picker/src/vaadin-date-picker-mixin.html',
'frontend/bower_components/vaadin-date-picker/src/vaadin-date-picker-helper.html',
'frontend/bower_components/vaadin-text-field/src/vaadin-text-field-mixin.html',
'frontend/bower_components/vaadin-overlay/theme/lumo/vaadin-overlay.html',
'frontend/bower_components/vaadin-combo-box/src/vaadin-combo-box-dropdown.html',
'frontend/bower_components/vaadin-item/theme/lumo/vaadin-item.html',
'frontend/bower_components/iron-a11y-announcer/iron-a11y-announcer.html',
'frontend/bower_components/vaadin-combo-box/src/vaadin-combo-box-mixin.html',
'frontend/bower_components/vaadin-combo-box/src/vaadin-combo-box-dropdown-wrapper.html',
'frontend/bower_components/polymer/lib/mixins/properties-changed.html',
'frontend/bower_components/vaadin-development-mode-detector/vaadin-development-mode-detector.html',
'frontend/bower_components/vaadin-lumo-styles/mixins/overlay.html',
'frontend/bower_components/vaadin-overlay/src/vaadin-overlay.html',
'frontend/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html',
'frontend/bower_components/vaadin-date-picker/src/vaadin-infinite-scroller.html',
'frontend/bower_components/vaadin-date-picker/src/vaadin-date-picker-styles.html',
'frontend/bower_components/iron-resizable-behavior/iron-resizable-behavior.html',
'frontend/bower_components/vaadin-item/src/vaadin-item.html',
'frontend/bower_components/iron-list/iron-list.html',
'frontend/bower_components/vaadin-combo-box/src/vaadin-combo-box-item.html',
'frontend/bower_components/iron-overlay-behavior/iron-focusables-helper.html',
'frontend/bower_components/vaadin-item/src/vaadin-item-mixin.html',
'frontend/bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html',
'frontend/bower_components/vaadin-usage-statistics/vaadin-usage-statistics.html',
]

function updateCache() {
  return caches.open('static' + version)
    .then(function (cache) {
      cache.add(manifest);
      cache.add(offlinePage);
      cache.addAll(offlineAssets);
    });
}

self.addEventListener('install', function (event) {
  event.waitUntil(updateCache());
});

var doesRequestAcceptHtml = function (request) {
  return request.headers.get('Accept')
    .split(',')
    .some(function (type) {
      return type === 'text/html';
    });
};

self.addEventListener('fetch', function (event) {
  var request = event.request;
  if (doesRequestAcceptHtml(request)) {
    // HTML pages fallback to offline page
    event.respondWith(
      fetch(request)
        .catch(function () {
          return caches.match(offlinePage);
        })
    );
  } else {
    if (request.cache === 'only-if-cached' && request.mode !== 'same-origin') {
      return;
    }
    event.respondWith(
      caches.match(request)
        .then(function (response) {
          return response || fetch(request);
        })
    );
  }
});