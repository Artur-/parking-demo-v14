// Important: update the version each time you change any of the files listed below
var version = 7;
// define your offline-page and assets used by it
var manifest = 'app.webmanifest';
var offlinePage = 'offline.html';
var offlineAssets = [
  'frontend/bower_components/webcomponentsjs/webcomponents-loader.js',
  'frontend/view/ticket-view.html',
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