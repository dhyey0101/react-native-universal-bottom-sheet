import { BlurView } from "@react-native-community/blur";
import React, { forwardRef } from "react";
import {
  Dimensions,
  Platform,
  StyleSheet,
  View,
  useColorScheme,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import RBSheet from "react-native-raw-bottom-sheet";

interface UniversalBottomSheetProps {
  children?: React.ReactNode;
  mode?: string;
}

const UniversalBottomSheet = forwardRef<any, UniversalBottomSheetProps>(
  ({ children, mode: passedMode }, ref) => {
    // theme
    const systemMode = useColorScheme();
    const isDark = (passedMode || systemMode) === "dark";
    const height = Dimensions.get("window").height * 0.5;
    const isAndroid = Platform.OS === "android";

    // Android background colors
    const androidDarkBg = "#151824";
    const androidLightBg = "#FFFFFF";

    return (
      <RBSheet
        ref={ref}
        height={height}
        openDuration={300}
        customStyles={{
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
        }}
        draggable={true}
      >
        <View style={styles.container}>
          {/* Background: Platform Conditional */}
          {isAndroid ? (
            <View
              style={[
                StyleSheet.absoluteFill,
                {
                  backgroundColor: isDark ? androidDarkBg : androidLightBg,
                  borderTopLeftRadius: 24,
                  borderTopRightRadius: 24,
                },
              ]}
            />
          ) : (
            <View style={StyleSheet.absoluteFill}>
              <BlurView
                style={StyleSheet.absoluteFill}
                blurType={isDark ? "dark" : "light"}
                blurAmount={20}
                reducedTransparencyFallbackColor={isDark ? "black" : "white"}
              />
              <LinearGradient
                colors={
                  isDark
                    ? ["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.05)"]
                    : ["rgba(255, 255, 255, 0.4)", "rgba(255, 255, 255, 0.1)"]
                }
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradientBorder}
              />
              {/* Border Overlay */}
              <View
                style={[
                  StyleSheet.absoluteFill,
                  {
                    borderWidth: 1,
                    borderColor: isDark
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(255,255,255,0.3)",
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                  },
                ]}
              />
            </View>
          )}

          {/* Content */}
          <View style={styles.sheetContentContainer}>{children}</View>
        </View>
      </RBSheet>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBorder: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.5,
  },
  sheetContentContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
});

export default UniversalBottomSheet;
