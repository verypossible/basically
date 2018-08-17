var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from 'react';
import styled from 'styled-components';
export var Card = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return React.createElement("div", __assign({}, props), children);
};
var StyledCard = styled(Card)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-shadow: rgb(243, 243, 243) 0px 5px 10px;\n  border: 1px solid rgb(229, 229, 229);\n  background: #FFF;\n  border-radius: 3px;\n  padding: 10px;\n"], ["\n  box-shadow: rgb(243, 243, 243) 0px 5px 10px;\n  border: 1px solid rgb(229, 229, 229);\n  background: #FFF;\n  border-radius: 3px;\n  padding: 10px;\n"])));
export default StyledCard;
var templateObject_1;
//# sourceMappingURL=index.js.map