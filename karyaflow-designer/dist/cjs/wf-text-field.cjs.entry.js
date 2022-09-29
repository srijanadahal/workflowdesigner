'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dca4a942.js');

const textFieldCss = "";

const TextField = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const name = this.name;
        return (index.h("host", null, index.h("label", { htmlFor: name }, this.label), index.h("input", { id: name, name: name, type: "text", class: "form-control", value: this.value }), index.h("small", { class: "form-text text-muted" }, this.hint)));
    }
};
TextField.style = textFieldCss;

exports.wf_text_field = TextField;
