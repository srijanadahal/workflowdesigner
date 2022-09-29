'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dca4a942.js');

const booleanFieldCss = "";

const BooleanField = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const name = this.name;
        return (index.h("div", { class: "form-group" }, index.h("div", { class: "form-check" }, index.h("input", { id: name, name: name, class: "form-check-input", type: "checkbox", value: 'true', checked: this.checked }), index.h("label", { class: "form-check-label", htmlFor: name }, this.label)), index.h("small", { class: "form-text text-muted" }, this.hint)));
    }
};
BooleanField.style = booleanFieldCss;

exports.wf_boolean_field = BooleanField;
