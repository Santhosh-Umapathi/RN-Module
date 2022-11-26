"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = __importDefault(require("react"));
var react_native_ui_lib_1 = require("react-native-ui-lib");
var ButtonComp = function (props) {
    return (<react_native_1.View>
      <react_native_ui_lib_1.Button label="Press" backgroundColor="salmon"/>
    </react_native_1.View>);
};
exports["default"] = ButtonComp;
