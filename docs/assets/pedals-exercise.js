'use strict';



;define("pedals-exercise/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("pedals-exercise/app", ["exports", "ember-resolver", "ember-load-initializers", "pedals-exercise/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("pedals-exercise/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("pedals-exercise/components/-dynamic-element-alt", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // avoiding reexport directly here because in some circumstances (ember-engines
  // for example) a simple reexport is transformed to `define.alias`,
  // unfortunately at the moment (ember-source@3.13) there is no _actual_
  // `@ember/component` module to alias so this causes issues
  //
  // tldr; we can replace this with a simple reexport when we can rely on Ember
  // actually providing a `@ember/component` module
  var _default = Ember.Component.extend();

  _exports.default = _default;
});
;define("pedals-exercise/components/-dynamic-element", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // avoiding reexport directly here because in some circumstances (ember-engines
  // for example) a simple reexport is transformed to `define.alias`,
  // unfortunately at the moment (ember-source@3.13) there is no _actual_
  // `@ember/component` module to alias so this causes issues
  //
  // tldr; we can replace this with a simple reexport when we can rely on Ember
  // actually providing a `@ember/component` module
  var _default = Ember.Component.extend();

  _exports.default = _default;
});
;define("pedals-exercise/components/bs-accordion", ["exports", "ember-bootstrap/components/bs-accordion"], function (_exports, _bsAccordion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
;define("pedals-exercise/components/bs-accordion/item", ["exports", "ember-bootstrap/components/bs-accordion/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("pedals-exercise/components/bs-accordion/item/body", ["exports", "ember-bootstrap/components/bs-accordion/item/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
;define("pedals-exercise/components/bs-accordion/item/title", ["exports", "ember-bootstrap/components/bs-accordion/item/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
;define("pedals-exercise/components/bs-alert", ["exports", "ember-bootstrap/components/bs-alert"], function (_exports, _bsAlert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
;define("pedals-exercise/components/bs-button-group", ["exports", "ember-bootstrap/components/bs-button-group"], function (_exports, _bsButtonGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
;define("pedals-exercise/components/bs-button-group/button", ["exports", "ember-bootstrap/components/bs-button-group/button"], function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
;define("pedals-exercise/components/bs-button", ["exports", "ember-bootstrap/components/bs-button"], function (_exports, _bsButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
;define("pedals-exercise/components/bs-carousel", ["exports", "ember-bootstrap/components/bs-carousel"], function (_exports, _bsCarousel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
;define("pedals-exercise/components/bs-carousel/slide", ["exports", "ember-bootstrap/components/bs-carousel/slide"], function (_exports, _slide) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
;define("pedals-exercise/components/bs-collapse", ["exports", "ember-bootstrap/components/bs-collapse"], function (_exports, _bsCollapse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
;define("pedals-exercise/components/bs-dropdown", ["exports", "ember-bootstrap/components/bs-dropdown"], function (_exports, _bsDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
;define("pedals-exercise/components/bs-dropdown/button", ["exports", "ember-bootstrap/components/bs-dropdown/button"], function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
;define("pedals-exercise/components/bs-dropdown/menu", ["exports", "ember-bootstrap/components/bs-dropdown/menu"], function (_exports, _menu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
;define("pedals-exercise/components/bs-dropdown/menu/divider", ["exports", "ember-bootstrap/components/bs-dropdown/menu/divider"], function (_exports, _divider) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
;define("pedals-exercise/components/bs-dropdown/menu/item", ["exports", "ember-bootstrap/components/bs-dropdown/menu/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("pedals-exercise/components/bs-dropdown/menu/link-to", ["exports", "ember-bootstrap/components/bs-dropdown/menu/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define("pedals-exercise/components/bs-dropdown/toggle", ["exports", "ember-bootstrap/components/bs-dropdown/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
;define("pedals-exercise/components/bs-form", ["exports", "ember-bootstrap/components/bs-form"], function (_exports, _bsForm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
;define("pedals-exercise/components/bs-form/element", ["exports", "ember-bootstrap/components/bs-form/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("pedals-exercise/components/bs-form/element/control", ["exports", "ember-bootstrap/components/bs-form/element/control"], function (_exports, _control) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
;define("pedals-exercise/components/bs-form/element/control/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/control/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("pedals-exercise/components/bs-form/element/control/input", ["exports", "ember-bootstrap/components/bs-form/element/control/input"], function (_exports, _input) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
;define("pedals-exercise/components/bs-form/element/control/radio", ["exports", "ember-bootstrap/components/bs-form/element/control/radio"], function (_exports, _radio) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _radio.default;
    }
  });
});
;define("pedals-exercise/components/bs-form/element/control/textarea", ["exports", "ember-bootstrap/components/bs-form/element/control/textarea"], function (_exports, _textarea) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
;define("pedals-exercise/components/bs-form/element/errors", ["exports", "ember-bootstrap/components/bs-form/element/errors"], function (_exports, _errors) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
;define("pedals-exercise/components/bs-form/element/feedback-icon", ["exports", "ember-bootstrap/components/bs-form/element/feedback-icon"], function (_exports, _feedbackIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
;define("pedals-exercise/components/bs-form/element/help-text", ["exports", "ember-bootstrap/components/bs-form/element/help-text"], function (_exports, _helpText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
;define("pedals-exercise/components/bs-form/element/label", ["exports", "ember-bootstrap/components/bs-form/element/label"], function (_exports, _label) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
;define("pedals-exercise/components/bs-form/element/layout/horizontal", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal"], function (_exports, _horizontal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
;define("pedals-exercise/components/bs-form/element/layout/horizontal/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("pedals-exercise/components/bs-form/element/layout/inline", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline"], function (_exports, _inline) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
;define("pedals-exercise/components/bs-form/element/layout/inline/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("pedals-exercise/components/bs-form/element/layout/vertical", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical"], function (_exports, _vertical) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
;define("pedals-exercise/components/bs-form/element/layout/vertical/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("pedals-exercise/components/bs-form/element/legend", ["exports", "ember-bootstrap/components/bs-form/element/legend"], function (_exports, _legend) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _legend.default;
    }
  });
});
;define("pedals-exercise/components/bs-form/group", ["exports", "ember-bootstrap/components/bs-form/group"], function (_exports, _group) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
;define("pedals-exercise/components/bs-modal-simple", ["exports", "ember-bootstrap/components/bs-modal-simple"], function (_exports, _bsModalSimple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
;define("pedals-exercise/components/bs-modal", ["exports", "ember-bootstrap/components/bs-modal"], function (_exports, _bsModal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
;define("pedals-exercise/components/bs-modal/body", ["exports", "ember-bootstrap/components/bs-modal/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
;define("pedals-exercise/components/bs-modal/dialog", ["exports", "ember-bootstrap/components/bs-modal/dialog"], function (_exports, _dialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
;define("pedals-exercise/components/bs-modal/footer", ["exports", "ember-bootstrap/components/bs-modal/footer"], function (_exports, _footer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
;define("pedals-exercise/components/bs-modal/header", ["exports", "ember-bootstrap/components/bs-modal/header"], function (_exports, _header) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
;define("pedals-exercise/components/bs-modal/header/close", ["exports", "ember-bootstrap/components/bs-modal/header/close"], function (_exports, _close) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
;define("pedals-exercise/components/bs-modal/header/title", ["exports", "ember-bootstrap/components/bs-modal/header/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
;define("pedals-exercise/components/bs-nav", ["exports", "ember-bootstrap/components/bs-nav"], function (_exports, _bsNav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
;define("pedals-exercise/components/bs-nav/item", ["exports", "ember-bootstrap/components/bs-nav/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("pedals-exercise/components/bs-nav/link-to", ["exports", "ember-bootstrap/components/bs-nav/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define("pedals-exercise/components/bs-navbar", ["exports", "ember-bootstrap/components/bs-navbar"], function (_exports, _bsNavbar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
;define("pedals-exercise/components/bs-navbar/content", ["exports", "ember-bootstrap/components/bs-navbar/content"], function (_exports, _content) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
;define("pedals-exercise/components/bs-navbar/link-to", ["exports", "ember-bootstrap/components/bs-navbar/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define("pedals-exercise/components/bs-navbar/nav", ["exports", "ember-bootstrap/components/bs-navbar/nav"], function (_exports, _nav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
;define("pedals-exercise/components/bs-navbar/toggle", ["exports", "ember-bootstrap/components/bs-navbar/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
;define("pedals-exercise/components/bs-popover", ["exports", "ember-bootstrap/components/bs-popover"], function (_exports, _bsPopover) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
;define("pedals-exercise/components/bs-popover/element", ["exports", "ember-bootstrap/components/bs-popover/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("pedals-exercise/components/bs-progress", ["exports", "ember-bootstrap/components/bs-progress"], function (_exports, _bsProgress) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
;define("pedals-exercise/components/bs-progress/bar", ["exports", "ember-bootstrap/components/bs-progress/bar"], function (_exports, _bar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
;define("pedals-exercise/components/bs-tab", ["exports", "ember-bootstrap/components/bs-tab"], function (_exports, _bsTab) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
;define("pedals-exercise/components/bs-tab/pane", ["exports", "ember-bootstrap/components/bs-tab/pane"], function (_exports, _pane) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
;define("pedals-exercise/components/bs-tooltip", ["exports", "ember-bootstrap/components/bs-tooltip"], function (_exports, _bsTooltip) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
;define("pedals-exercise/components/bs-tooltip/element", ["exports", "ember-bootstrap/components/bs-tooltip/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("pedals-exercise/components/ember-popper-targeting-parent", ["exports", "ember-popper/components/ember-popper-targeting-parent"], function (_exports, _emberPopperTargetingParent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
;define("pedals-exercise/components/ember-popper", ["exports", "ember-popper/components/ember-popper"], function (_exports, _emberPopper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
;define("pedals-exercise/components/pedals-position-chart", ["exports", "@glimmer/component", "plotly.js"], function (_exports, _component, _plotly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div {{did-insert (action this.setupPlot)}}>
  </div>
  */
  {
    "id": "7+JELsKF",
    "block": "{\"symbols\":[],\"statements\":[[11,\"div\"],[4,[38,1],[[30,[36,0],[[32,0],[32,0,[\"setupPlot\"]]],null]],null],[12],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"action\",\"did-insert\"]}",
    "meta": {
      "moduleName": "pedals-exercise/components/pedals-position-chart.hbs"
    }
  });

  let PlChartComponent = (_dec = Ember.inject.service, _dec2 = Ember._action, (_class = (_temp = class PlChartComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "gamepad", _descriptor, this);

      _defineProperty(this, "acc", [Math.random() * 2]);

      _defineProperty(this, "brake", [Math.random() * 2]);

      _defineProperty(this, "time", [new Date()]);
    }

    setupPlot(element) {
      setInterval(this._getLastPositins.bind(this), 25);
      setInterval(this._replot.bind(this, element), 100);
    }

    _replot(element) {
      let now = Date.now();
      let start = new Date(now - 10000);
      let end = new Date(now + 10000);
      let layout = {
        xaxis: {
          range: [start, end]
        },
        yaxis: {
          range: [0, 260]
        },
        margin: {
          t: 0
        }
      };

      _plotly.default.newPlot(element, [{
        x: this.time,
        y: this.acc
      }], layout);
    }

    _getLastPositins() {
      // let lastValues = this.gamepad.getLastPositions();
      // let lastAcc = this.acc[this.acc.length - 1];
      // let lastBrake = this.brake[this.brake.length - 1];
      // let lastAcc = this.acc[this.acc.length-1];
      this.acc.push(this.gamepad.accValue);
      this.brake.push(this.gamepad.brakeValue);
      this.time.push(new Date()); // let brake = Math.random() * 100;
      // let time = new Date();
      // positions.push({ acc, brake, time })

      this.acc = this.acc.slice(-500);
      this.brake = this.brake.slice(-500);
      this.time = this.time.slice(-500);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "gamepad", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "setupPlot", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "setupPlot"), _class.prototype)), _class));
  _exports.default = PlChartComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, PlChartComponent);
});
;define("pedals-exercise/components/pedals-settings", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <BsForm {{on 'submit' this.submit}} as |form|>
      <form.group>
          <label for="gamepadSelect">GamepadID</label>
          <select class="form-control" id="gamepadSelect" value={{this.settings.gamepadId}} {{on 'change'
        this.changeGamepadId}}>
              <option></option>
              {{#each-in this.gamepad.controllers as |key|}}
                  <option>{{key}}</option>
              {{/each-in}}
              <option>1</option>
          </select>
      </form.group>
      <form.group>
          <label for="AccAxeSelect">Acceleration Axe</label>
          <select class="form-control" id="AccAxeSelect" value={{this.settings.accAxis}} {{on 'change' this.changeAccAxis}}>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
          </select>
      </form.group>
      <form.group>
          <label for="BrakeAxeSelect">Brake Axe</label>
          <select class="form-control" id="BrakeAxeSelect" value={{this.settings.brakeAxis}} {{on 'change'
        this.changeBrakeAxis}}>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
          </select>
      </form.group>
      <form.submitButton>Save</form.submitButton>
  </BsForm>
  {{this.gamepad.accValue}} - {{this.gamepad.accValue}}
  */
  {
    "id": "D0wI3dx2",
    "block": "{\"symbols\":[\"form\",\"( unused value )\",\"key\"],\"statements\":[[8,\"bs-form\",[[4,[38,0],[\"submit\",[32,0,[\"submit\"]]],null]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[8,[32,1,[\"group\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[10,\"label\"],[14,\"for\",\"gamepadSelect\"],[12],[2,\"GamepadID\"],[13],[2,\"\\n        \"],[11,\"select\"],[24,0,\"form-control\"],[24,1,\"gamepadSelect\"],[16,2,[32,0,[\"settings\",\"gamepadId\"]]],[4,[38,0],[\"change\",[32,0,[\"changeGamepadId\"]]],null],[12],[2,\"\\n            \"],[10,\"option\"],[12],[13],[2,\"\\n\"],[6,[37,2],[[30,[36,1],[[32,0,[\"gamepad\",\"controllers\"]]],null]],null,[[\"default\"],[{\"statements\":[[2,\"                \"],[10,\"option\"],[12],[1,[32,3]],[13],[2,\"\\n\"]],\"parameters\":[2,3]}]]],[2,\"            \"],[10,\"option\"],[12],[2,\"1\"],[13],[2,\"\\n        \"],[13],[2,\"\\n    \"]],\"parameters\":[]}]]],[2,\"\\n    \"],[8,[32,1,[\"group\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[10,\"label\"],[14,\"for\",\"AccAxeSelect\"],[12],[2,\"Acceleration Axe\"],[13],[2,\"\\n        \"],[11,\"select\"],[24,0,\"form-control\"],[24,1,\"AccAxeSelect\"],[16,2,[32,0,[\"settings\",\"accAxis\"]]],[4,[38,0],[\"change\",[32,0,[\"changeAccAxis\"]]],null],[12],[2,\"\\n            \"],[10,\"option\"],[12],[2,\"0\"],[13],[2,\"\\n            \"],[10,\"option\"],[12],[2,\"1\"],[13],[2,\"\\n            \"],[10,\"option\"],[12],[2,\"2\"],[13],[2,\"\\n            \"],[10,\"option\"],[12],[2,\"3\"],[13],[2,\"\\n            \"],[10,\"option\"],[12],[2,\"4\"],[13],[2,\"\\n            \"],[10,\"option\"],[12],[2,\"5\"],[13],[2,\"\\n            \"],[10,\"option\"],[12],[2,\"6\"],[13],[2,\"\\n            \"],[10,\"option\"],[12],[2,\"7\"],[13],[2,\"\\n            \"],[10,\"option\"],[12],[2,\"8\"],[13],[2,\"\\n            \"],[10,\"option\"],[12],[2,\"9\"],[13],[2,\"\\n            \"],[10,\"option\"],[12],[2,\"10\"],[13],[2,\"\\n        \"],[13],[2,\"\\n    \"]],\"parameters\":[]}]]],[2,\"\\n    \"],[8,[32,1,[\"group\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[10,\"label\"],[14,\"for\",\"BrakeAxeSelect\"],[12],[2,\"Brake Axe\"],[13],[2,\"\\n        \"],[11,\"select\"],[24,0,\"form-control\"],[24,1,\"BrakeAxeSelect\"],[16,2,[32,0,[\"settings\",\"brakeAxis\"]]],[4,[38,0],[\"change\",[32,0,[\"changeBrakeAxis\"]]],null],[12],[2,\"\\n            \"],[10,\"option\"],[12],[2,\"0\"],[13],[2,\"\\n            \"],[10,\"option\"],[12],[2,\"1\"],[13],[2,\"\\n            \"],[10,\"option\"],[12],[2,\"2\"],[13],[2,\"\\n            \"],[10,\"option\"],[12],[2,\"3\"],[13],[2,\"\\n            \"],[10,\"option\"],[12],[2,\"4\"],[13],[2,\"\\n            \"],[10,\"option\"],[12],[2,\"5\"],[13],[2,\"\\n            \"],[10,\"option\"],[12],[2,\"6\"],[13],[2,\"\\n            \"],[10,\"option\"],[12],[2,\"7\"],[13],[2,\"\\n            \"],[10,\"option\"],[12],[2,\"8\"],[13],[2,\"\\n            \"],[10,\"option\"],[12],[2,\"9\"],[13],[2,\"\\n            \"],[10,\"option\"],[12],[2,\"10\"],[13],[2,\"\\n        \"],[13],[2,\"\\n    \"]],\"parameters\":[]}]]],[2,\"\\n    \"],[8,[32,1,[\"submitButton\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"Save\"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"\\n\"],[1,[32,0,[\"gamepad\",\"accValue\"]]],[2,\" - \"],[1,[32,0,[\"gamepad\",\"accValue\"]]]],\"hasEval\":false,\"upvars\":[\"on\",\"-each-in\",\"each\"]}",
    "meta": {
      "moduleName": "pedals-exercise/components/pedals-settings.hbs"
    }
  });

  let PlSettingsComponent = (_dec = Ember.inject.service, _dec2 = Ember._action, _dec3 = Ember._action, _dec4 = Ember._action, _dec5 = Ember._action, (_class = (_temp = class PlSettingsComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "gamepad", _descriptor, this);
    }

    get settings() {
      return this.gamepad.settings;
    }

    get gamepadAxis() {
      let gamepadId = this.settings.gamepadId;
      return this.gamepad.controller[gamepadId].axes;
    }

    submit() {
      return false;
    }

    changeGamepadId(event) {
      this.settings.gamepadId = Number(event.target.value);
    }

    changeAccAxis(event) {
      this.settings.accAxis = Number(event.target.value);
    }

    changeBrakeAxis(event) {
      this.settings.brakeAxis = Number(event.target.value);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "gamepad", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "submit", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "submit"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeGamepadId", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "changeGamepadId"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeAccAxis", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "changeAccAxis"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeBrakeAxis", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "changeBrakeAxis"), _class.prototype)), _class));
  _exports.default = PlSettingsComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, PlSettingsComponent);
});
;define("pedals-exercise/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("pedals-exercise/controllers/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ApplicationController = (_dec = Ember.inject.service, (_class = (_temp = class ApplicationController extends Ember.Controller {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "gamepad", _descriptor, this);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "gamepad", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ApplicationController;
});
;define("pedals-exercise/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("pedals-exercise/helpers/-element", ["exports", "ember-element-helper/helpers/-element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("pedals-exercise/helpers/-has-block-params", ["exports", "ember-named-blocks-polyfill/helpers/-has-block-params"], function (_exports, _hasBlockParams) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasBlockParams.default;
    }
  });
});
;define("pedals-exercise/helpers/-has-block", ["exports", "ember-named-blocks-polyfill/helpers/-has-block"], function (_exports, _hasBlock) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasBlock.default;
    }
  });
});
;define("pedals-exercise/helpers/-is-named-block-invocation", ["exports", "ember-named-blocks-polyfill/helpers/-is-named-block-invocation"], function (_exports, _isNamedBlockInvocation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isNamedBlockInvocation.default;
    }
  });
});
;define("pedals-exercise/helpers/-named-block-invocation", ["exports", "ember-named-blocks-polyfill/helpers/-named-block-invocation"], function (_exports, _namedBlockInvocation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _namedBlockInvocation.default;
    }
  });
});
;define("pedals-exercise/helpers/app-version", ["exports", "pedals-exercise/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("pedals-exercise/helpers/bs-contains", ["exports", "ember-bootstrap/helpers/bs-contains"], function (_exports, _bsContains) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(_exports, "bsContains", {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
;define("pedals-exercise/helpers/bs-default", ["exports", "ember-bootstrap/helpers/bs-default"], function (_exports, _bsDefault) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsDefault.default;
    }
  });
});
;define("pedals-exercise/helpers/bs-eq", ["exports", "ember-bootstrap/helpers/bs-eq"], function (_exports, _bsEq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
});
;define("pedals-exercise/helpers/bs-size-class", ["exports", "ember-bootstrap/helpers/bs-size-class"], function (_exports, _bsSizeClass) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsSizeClass.default;
    }
  });
});
;define("pedals-exercise/helpers/bs-type-class", ["exports", "ember-bootstrap/helpers/bs-type-class"], function (_exports, _bsTypeClass) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTypeClass.default;
    }
  });
});
;define("pedals-exercise/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
;define("pedals-exercise/helpers/did-insert", ["exports", "ember-render-helpers/helpers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
;define("pedals-exercise/helpers/did-update", ["exports", "ember-render-helpers/helpers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
;define("pedals-exercise/helpers/element", ["exports", "ember-element-helper/helpers/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("pedals-exercise/helpers/on-document", ["exports", "ember-on-helper/helpers/on-document"], function (_exports, _onDocument) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onDocument.default;
    }
  });
});
;define("pedals-exercise/helpers/on-window", ["exports", "ember-on-helper/helpers/on-window"], function (_exports, _onWindow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onWindow.default;
    }
  });
});
;define("pedals-exercise/helpers/on", ["exports", "ember-on-helper/helpers/on"], function (_exports, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _on.default;
    }
  });
});
;define("pedals-exercise/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
;define("pedals-exercise/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("pedals-exercise/helpers/ref-to", ["exports", "ember-ref-bucket/helpers/ref-to"], function (_exports, _refTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _refTo.default;
    }
  });
  Object.defineProperty(_exports, "refTo", {
    enumerable: true,
    get: function () {
      return _refTo.default;
    }
  });
});
;define("pedals-exercise/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("pedals-exercise/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
;define("pedals-exercise/helpers/will-destroy", ["exports", "ember-render-helpers/helpers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
;define("pedals-exercise/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "pedals-exercise/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("pedals-exercise/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("pedals-exercise/initializers/ember-concurrency", ["exports", "ember-concurrency/initializers/ember-concurrency"], function (_exports, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
;define("pedals-exercise/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("pedals-exercise/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("pedals-exercise/initializers/export-application-global", ["exports", "pedals-exercise/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("pedals-exercise/initializers/load-bootstrap-config", ["exports", "pedals-exercise/config/environment", "ember-bootstrap/config"], function (_exports, _environment, _config) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize()
  /* container, application */
  {
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  var _default = {
    name: 'load-bootstrap-config',
    initialize
  };
  _exports.default = _default;
});
;define("pedals-exercise/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("pedals-exercise/modifiers/create-ref", ["exports", "ember-ref-bucket/modifiers/create-ref"], function (_exports, _createRef) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _createRef.default;
    }
  });
});
;define("pedals-exercise/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
;define("pedals-exercise/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
;define("pedals-exercise/modifiers/focus-trap", ["exports", "ember-focus-trap/modifiers/focus-trap"], function (_exports, _focusTrap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _focusTrap.default;
    }
  });
});
;define("pedals-exercise/modifiers/style", ["exports", "ember-style-modifier/modifiers/style"], function (_exports, _style) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _style.default;
    }
  });
});
;define("pedals-exercise/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
;define("pedals-exercise/router", ["exports", "pedals-exercise/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('settings');
  });
});
;define("pedals-exercise/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class IndexRoute extends Ember.Route {}

  _exports.default = IndexRoute;
});
;define("pedals-exercise/routes/settings", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class SettingsRoute extends Ember.Route {}

  _exports.default = SettingsRoute;
});
;define("pedals-exercise/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("pedals-exercise/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("pedals-exercise/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("pedals-exercise/services/gamepad", ["exports", "ember-local-storage"], function (_exports, _emberLocalStorage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _descriptor2, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let GamepadService = (_dec = Ember._tracked, _dec2 = Ember._tracked, (_class = (_temp = class GamepadService extends Ember.Service {
    get accValue() {
      let result = 0;

      if (typeof this.settings.gamepadId == 'number' && typeof this.settings.accAxis == 'number') {
        result = this.controllers[this.settings.gamepadId].axes[this.settings.accAxis];
      }

      return result;
    }

    get brakeValue() {
      let result = 0;

      if (typeof this.settings.gamepadId == 'number' && typeof this.settings.accAxis == 'number') {
        result = this.controllers[this.settings.gamepadId].axes[this.settings.brakeAxis];
      }

      return result;
    }

    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "settings", _descriptor, this);

      _initializerDefineProperty(this, "controllers", _descriptor2, this);

      window.addEventListener("gamepadconnected", this.connecthandler.bind(this));
      window.addEventListener("gamepaddisconnected", this.disconnecthandler.bind(this));
    }

    connecthandler(e) {
      let gamepad = e.gamepad;
      this.controllers[gamepad.index] = gamepad;

      if (typeof this.updateInterval == 'undefined') {
        this.updateInterval = setInterval(this.scangamepads.bind(this), 20);
      }
    }

    disconnecthandler(e) {
      let deletedControllerId = e.gamepad.index;
      delete this.controller[deletedControllerId];

      if (length(Object.keys(this.controller)) == 0) {
        clearInterval(this.updateInterval);
        delete this.updateInterval;
      }
    }

    scangamepads() {
      var gamepads = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : [];

      for (var i = 0; i < gamepads.length; i++) {
        if (gamepads[i] && gamepads[i].index in this.controllers) {
          this.controllers[gamepads[i].index] = gamepads[i];
        }
      }
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "settings", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return (0, _emberLocalStorage.storageFor)('settings');
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "controllers", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return {};
    }
  })), _class));
  _exports.default = GamepadService;
});
;define("pedals-exercise/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("pedals-exercise/storages/settings", ["exports", "ember-local-storage/local/object"], function (_exports, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const Storage = _object.default.extend(); // Uncomment if you would like to set initialState


  Storage.reopenClass({
    initialState() {
      return {
        gamepadId: undefined,
        accAxis: 0,
        brakeAxis: 0
      };
    }

  });
  var _default = Storage;
  _exports.default = _default;
});
;define("pedals-exercise/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "utJcQ+0P",
    "block": "{\"symbols\":[\"nav\"],\"statements\":[[8,\"bs-nav\",[],[[\"@type\"],[\"pills\"]],[[\"default\"],[{\"statements\":[[2,\"\\n  \"],[8,[32,1,[\"item\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[8,[32,1,[\"linkTo\"]],[],[[\"@route\"],[\"index\"]],[[\"default\"],[{\"statements\":[[2,\"\\n      Main Page\\n    \"]],\"parameters\":[]}]]],[2,\"\\n  \"]],\"parameters\":[]}]]],[2,\"\\n  \"],[8,[32,1,[\"item\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[8,[32,1,[\"linkTo\"]],[],[[\"@route\"],[\"settings\"]],[[\"default\"],[{\"statements\":[[2,\"\\n      Settings\\n    \"]],\"parameters\":[]}]]],[2,\"\\n  \"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"\\n\"],[1,[30,[36,1],[[30,[36,0],null,null]],null]]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "pedals-exercise/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("pedals-exercise/templates/components/ember-popper-targeting-parent", ["exports", "ember-popper/templates/components/ember-popper-targeting-parent"], function (_exports, _emberPopperTargetingParent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
;define("pedals-exercise/templates/components/ember-popper", ["exports", "ember-popper/templates/components/ember-popper"], function (_exports, _emberPopper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
;define("pedals-exercise/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "F1Vgv68N",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,1],[[30,[36,0],null,null]],null]],[2,\"\\n\"],[8,\"pedals-position-chart\",[],[[],[]],null],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "pedals-exercise/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("pedals-exercise/templates/settings", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "WpRYoSc1",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,1],[[30,[36,0],null,null]],null]],[2,\"\\n\"],[8,\"pedals-settings\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "pedals-exercise/templates/settings.hbs"
    }
  });

  _exports.default = _default;
});
;define("pedals-exercise/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("pedals-exercise/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("pedals-exercise/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("pedals-exercise/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('pedals-exercise/config/environment', [], function() {
  var prefix = 'pedals-exercise';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("pedals-exercise/app")["default"].create({"name":"pedals-exercise","version":"0.0.0+a5cfc4e4"});
          }
        
//# sourceMappingURL=pedals-exercise.map
