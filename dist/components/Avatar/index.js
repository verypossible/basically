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
var placeholder = 'https://placeimg.com/640/480/animals';
export var Avatar = function (_a) {
    var src = _a.src, props = __rest(_a, ["src"]);
    return React.createElement("div", __assign({}, props));
};
var roundStyles = "\n  border-radius: 50%;\n";
var StyledAvatar = styled(Avatar)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 5rem;\n  height: 5rem;\n  background-image: url('", "');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  ", "\n"], ["\n  width: 5rem;\n  height: 5rem;\n  background-image: url('", "');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  ", "\n"])), function (props) { return props.src && props.src || placeholder; }, function (props) { return props.round && roundStyles; });
export default StyledAvatar;
var templateObject_1;
//# sourceMappingURL=index.js.map