'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dca4a942.js');

const expressionFieldCss = "wf-expression-field .input-group>.form-control:not(:last-child){border-top-left-radius:0.25rem;border-bottom-left-radius:0.25rem}";

const ExpressionField = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.selectSyntax = (syntax) => this.syntax = syntax;
        this.onSyntaxOptionClick = (e, syntax) => {
            e.preventDefault();
            this.selectSyntax(syntax);
        };
        this.renderInputField = () => {
            const name = this.name;
            const value = this.value;
            if (this.multiline)
                return index.h("textarea", { id: name, name: `${name}.expression`, class: "form-control", rows: 3 }, value);
            return index.h("input", { id: name, name: `${name}.expression`, value: value, type: "text", class: "form-control" });
        };
    }
    render() {
        const name = this.name;
        const label = this.label;
        const hint = this.hint;
        const syntaxes = ['Literal', 'JavaScript', 'Liquid'];
        const selectedSyntax = this.syntax || 'Literal';
        return (index.h("host", null, index.h("label", { htmlFor: name }, label), index.h("div", { class: "input-group" }, index.h("input", { name: `${name}.syntax`, value: selectedSyntax, type: "hidden" }), this.renderInputField(), index.h("div", { class: "input-group-append" }, index.h("button", { class: "btn btn-primary dropdown-toggle", type: "button", id: `${name}_dropdownMenuButton`, "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, selectedSyntax), index.h("div", { class: "dropdown-menu", "aria-labelledby": `${name}_dropdownMenuButton` }, syntaxes.map(x => index.h("a", { onClick: e => this.onSyntaxOptionClick(e, x), class: "dropdown-item", href: "#" }, x))))), index.h("small", { class: "form-text text-muted" }, hint)));
    }
};
ExpressionField.style = expressionFieldCss;

exports.wf_expression_field = ExpressionField;
