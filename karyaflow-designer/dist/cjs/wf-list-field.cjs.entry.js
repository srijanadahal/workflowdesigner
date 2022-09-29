'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dca4a942.js');

const listFieldCss = "";

const ListField = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const name = this.name;
        const label = this.label;
        const items = this.items;
        return (index.h(index.Host, null, index.h("label", { htmlFor: name }, label), index.h("input", { id: name, name: name, type: "text", class: "form-control", value: items }), index.h("small", { class: "form-text text-muted" }, this.hint)));
    }
};
ListField.style = listFieldCss;

exports.wf_list_field = ListField;
