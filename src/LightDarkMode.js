"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Settings = exports.Main = exports.App = void 0;
const react_1 = __importStar(require("react"));
const App = () => {
    return react_1.default.createElement(exports.Main, null);
};
exports.App = App;
const Main = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(exports.Settings, null)));
};
exports.Main = Main;
const Settings = () => {
    const [dark, setDark] = react_1.useState(false);
    const toggleMode = react_1.default.useCallback(() => {
        setDark((prev) => !prev);
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("button", { onClick: toggleMode }, "toggle light/dark mode"),
        react_1.default.createElement("div", { style: {
                color: `${dark ? 'white' : 'black'}`,
                backgroundColor: `${dark ? 'black' : 'white'}`,
            } },
            react_1.default.createElement("p", null, "Hello"))));
};
exports.Settings = Settings;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlnaHREYXJrTW9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkxpZ2h0RGFya01vZGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSwrQ0FBd0M7QUFFakMsTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFO0lBQ3RCLE9BQU8sOEJBQUMsWUFBSSxPQUFHLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBRlcsUUFBQSxHQUFHLE9BRWQ7QUFFSyxNQUFNLElBQUksR0FBRyxHQUFHLEVBQUU7SUFDdkIsT0FBTyxDQUNMO1FBQ0UsOEJBQUMsZ0JBQVEsT0FBRyxDQUNSLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQU5XLFFBQUEsSUFBSSxRQU1mO0FBRUssTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO0lBQzNCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsZ0JBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV4QyxNQUFNLFVBQVUsR0FBRyxlQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRTtRQUN4QyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsT0FBTyxDQUNMO1FBQ0UsMENBQVEsT0FBTyxFQUFFLFVBQVUsNkJBQWlDO1FBQzVELHVDQUNFLEtBQUssRUFBRTtnQkFDTCxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFO2dCQUNwQyxlQUFlLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFO2FBQy9DO1lBRUQsaURBQVksQ0FDUixDQUNMLENBQ0osQ0FBQztBQUNKLENBQUMsQ0FBQztBQXBCVyxRQUFBLFFBQVEsWUFvQm5CIiwic291cmNlc0NvbnRlbnQiOlsiLy9JIGRvbid0IHVuZGVyc3RhbmQgdGhlIGZ1bGwgcmVxdWlyZW1lbnQgb2YgdGhpcyBleGVyY2lzZS5cbi8vIEFsbCBpIGNhbiBwaWNrIG91dCBpcyB0aGF0IHdlIG5lZWQgdGhlIHN0YXRlIHRvIGJlIHRvZ2dsZWQgYmV0d2VlbiBsaWdodCBhbmQgZGFyayBtb2RlXG4vL05vIGNsYXJpdHkgb2YgZXhwZWN0ZWQgaW1wbGVtZW50YXRpb25cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IEFwcCA9ICgpID0+IHtcbiAgcmV0dXJuIDxNYWluIC8+O1xufTtcblxuZXhwb3J0IGNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxTZXR0aW5ncyAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFNldHRpbmdzID0gKCkgPT4ge1xuICBjb25zdCBbZGFyaywgc2V0RGFya10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdG9nZ2xlTW9kZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXREYXJrKChwcmV2KSA9PiAhcHJldik7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZU1vZGV9PnRvZ2dsZSBsaWdodC9kYXJrIG1vZGU8L2J1dHRvbj5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBjb2xvcjogYCR7ZGFyayA/ICd3aGl0ZScgOiAnYmxhY2snfWAsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHtkYXJrID8gJ2JsYWNrJyA6ICd3aGl0ZSd9YCxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPHA+SGVsbG88L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG4iXX0=