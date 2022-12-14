import { r as registerInstance, h } from './index-2a5a73f0.js';
var booleanFieldCss = "";
var BooleanField = /** @class */ (function () {
    function BooleanField(hostRef) {
        registerInstance(this, hostRef);
    }
    BooleanField.prototype.render = function () {
        var name = this.name;
        return (h("div", { class: "form-group" }, h("div", { class: "form-check" }, h("input", { id: name, name: name, class: "form-check-input", type: "checkbox", value: 'true', checked: this.checked }), h("label", { class: "form-check-label", htmlFor: name }, this.label)), h("small", { class: "form-text text-muted" }, this.hint)));
    };
    return BooleanField;
}());
BooleanField.style = booleanFieldCss;
export { BooleanField as wf_boolean_field };
