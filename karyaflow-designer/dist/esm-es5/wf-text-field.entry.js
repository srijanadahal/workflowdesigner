import { r as registerInstance, h } from './index-2a5a73f0.js';
var textFieldCss = "";
var TextField = /** @class */ (function () {
    function TextField(hostRef) {
        registerInstance(this, hostRef);
    }
    TextField.prototype.render = function () {
        var name = this.name;
        return (h("host", null, h("label", { htmlFor: name }, this.label), h("input", { id: name, name: name, type: "text", class: "form-control", value: this.value }), h("small", { class: "form-text text-muted" }, this.hint)));
    };
    return TextField;
}());
TextField.style = textFieldCss;
export { TextField as wf_text_field };
