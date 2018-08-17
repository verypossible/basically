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
import * as React from 'react';
import styled from 'styled-components';
export var TextInput = function (props) {
    return React.createElement("input", __assign({ type: 'text' }, props));
};
var StyledTextInput = styled(TextInput)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: #FFF;\n  width: 90%;\n  height: 2rem;\n  border: .09375rem solid #F2F2F2;\n  border-radius: 2px;\n  outline: none;\n  padding: 0.6rem;\n  margin-bottom: 0.5rem;\n  color: #222;\n  font-size: 0.9rem;\n  &::placeholder {\n    color: rgba(0, 0, 0, 0.3);\n  }\n  &:focus {\n    border: .09375rem solid #CCC;\n  }\n\n  @media (min-width: 500px) {\n    width: 95%;\n  }\n\n  @media (min-width: 800px) {\n    max-width: 30rem;\n  }\n"], ["\n  background-color: #FFF;\n  width: 90%;\n  height: 2rem;\n  border: .09375rem solid #F2F2F2;\n  border-radius: 2px;\n  outline: none;\n  padding: 0.6rem;\n  margin-bottom: 0.5rem;\n  color: #222;\n  font-size: 0.9rem;\n  &::placeholder {\n    color: rgba(0, 0, 0, 0.3);\n  }\n  &:focus {\n    border: .09375rem solid #CCC;\n  }\n\n  @media (min-width: 500px) {\n    width: 95%;\n  }\n\n  @media (min-width: 800px) {\n    max-width: 30rem;\n  }\n"])));
export default StyledTextInput;
var templateObject_1;
//# sourceMappingURL=index.js.map