import { r as registerInstance, h } from './index-2a5a73f0.js';
var expressionFieldCss = "wf-expression-field .input-group>.form-control:not(:last-child){border-top-left-radius:0.25rem;border-bottom-left-radius:0.25rem}";
var ExpressionField = /** @class */ (function () {
    function ExpressionField(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.selectSyntax = function (syntax) { return _this.syntax = syntax; };
        this.onSyntaxOptionClick = function (e, syntax) {
            e.preventDefault();
            _this.selectSyntax(syntax);
        };
        this.renderInputField = function () {
            var name = _this.name;
            var value = _this.value;
            if (_this.multiline)
                return h("textarea", { id: name, name: name + ".expression", class: "form-control", rows: 3 }, value);
            return h("input", { id: name, name: name + ".expression", value: value, type: "text", class: "form-control" });
        };
    }
    ExpressionField.prototype.render = function () {
        var _this = this;
        var name = this.name;
        var label = this.label;
        var hint = this.hint;
        var syntaxes = ['Literal', 'JavaScript', 'Liquid'];
        var selectedSyntax = this.syntax || 'Literal';
        return (h("host", null, h("label", { htmlFor: name }, label), h("div", { class: "input-group" }, h("input", { name: name + ".syntax", value: selectedSyntax, type: "hidden" }), this.renderInputField(), h("div", { class: "input-group-append" }, h("button", { class: "btn btn-primary dropdown-toggle", type: "button", id: name + "_dropdownMenuButton", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, selectedSyntax), h("div", { class: "dropdown-menu", "aria-labelledby": name + "_dropdownMenuButton" }, syntaxes.map(function (x) { return h("a", { onClick: function (e) { return _this.onSyntaxOptionClick(e, x); }, class: "dropdown-item", href: "#" }, x); })))), h("small", { class: "form-text text-muted" }, hint)));
    };
    return ExpressionField;
}());
ExpressionField.style = expressionFieldCss;
export { ExpressionField as wf_expression_field };
