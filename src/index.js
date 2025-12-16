"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var blur_1 = require("@react-native-community/blur");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_linear_gradient_1 = require("react-native-linear-gradient");
var react_native_raw_bottom_sheet_1 = require("react-native-raw-bottom-sheet");
var ThemeProvider_1 = require("../utils/ThemeProvider");
var UniversalBottomSheet = (0, react_1.forwardRef)(function (_a, ref) {
    var children = _a.children, passedMode = _a.mode;
    // theme
    var systemMode = (0, ThemeProvider_1.useTheme)().mode;
    var isDark = (passedMode || systemMode) === "dark";
    var height = react_native_1.Dimensions.get("window").height * 0.5;
    var isAndroid = react_native_1.Platform.OS === "android";
    // Android background colors
    var androidDarkBg = "#151824";
    var androidLightBg = "#FFFFFF";
    return (<react_native_raw_bottom_sheet_1.default ref={ref} height={height} openDuration={300} customStyles={{
            container: {
                backgroundColor: "transparent",
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                overflow: "hidden",
            },
            wrapper: {
                backgroundColor: "rgba(0,0,0,0.3)",
            },
            draggableIcon: {
                backgroundColor: isDark
                    ? "rgba(255, 255, 255, 0.3)"
                    : "rgba(0, 0, 0, 0.2)",
                width: 40,
            },
        }} closeOnDragDown={true}>
        <react_native_1.View style={styles.container}>
          {/* Background: Platform Conditional */}
          {isAndroid ? (<react_native_1.View style={[
                react_native_1.StyleSheet.absoluteFill,
                {
                    backgroundColor: isDark ? androidDarkBg : androidLightBg,
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                },
            ]}/>) : (<react_native_1.View style={react_native_1.StyleSheet.absoluteFill}>
              <blur_1.BlurView style={react_native_1.StyleSheet.absoluteFill} blurType={isDark ? "dark" : "light"} blurAmount={20} reducedTransparencyFallbackColor={isDark ? "black" : "white"}/>
              <react_native_linear_gradient_1.default colors={isDark
                ? ["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.05)"]
                : ["rgba(255, 255, 255, 0.4)", "rgba(255, 255, 255, 0.1)"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.gradientBorder}/>
              {/* Border Overlay */}
              <react_native_1.View style={[
                react_native_1.StyleSheet.absoluteFill,
                {
                    borderWidth: 1,
                    borderColor: isDark
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(255,255,255,0.3)",
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                },
            ]}/>
            </react_native_1.View>)}

          {/* Content */}
          <react_native_1.View style={styles.sheetContentContainer}>{children}</react_native_1.View>
        </react_native_1.View>
      </react_native_raw_bottom_sheet_1.default>);
});
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
    gradientBorder: __assign(__assign({}, react_native_1.StyleSheet.absoluteFillObject), { opacity: 0.5 }),
    sheetContentContainer: {
        flex: 1,
        padding: 24,
        alignItems: "center",
    },
});
exports.default = UniversalBottomSheet;
