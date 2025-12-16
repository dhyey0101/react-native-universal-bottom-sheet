# react-native-universal-bottom-sheet

✨ **A modern, universal bottom sheet for React Native** with glassmorphism effects, blur, gradients, and automatic light/dark theme support.

Built on top of `react-native-raw-bottom-sheet`, this component provides a **polished iOS glass-style experience** while remaining **fully compatible with Android**.

---

## ✨ Features

- 🌈 **Glassmorphism UI** (Blur + Gradient)
- 🌗 **Automatic Light / Dark Mode support**
- 📱 **iOS & Android compatible**
- 🧩 **Simple & flexible API**
- 🎯 **Ref-based control (open / close)**
- ⚡ Smooth animations
- 🧼 Clean & customizable styles

---

## 📸 Preview

> iOS glass-style blur + Android native background

_(Add GIF or screenshots here for better visibility)_

---

## 📦 Installation

```bash
npm install react-native-universal-bottom-sheet
```

or

```bash
yarn add react-native-universal-bottom-sheet
```

### Install peer dependencies

```bash
npm install react-native-raw-bottom-sheet react-native-linear-gradient @react-native-community/blur
```

```bash
cd ios && pod install
```

---

## 🚀 Usage

### Basic Example

```tsx
import React, { useRef } from "react";
import { View, Button, Text } from "react-native";
import UniversalBottomSheet from "react-native-universal-bottom-sheet";

export default function App() {
  const sheetRef = useRef(null);

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button title="Open Sheet" onPress={() => sheetRef.current?.open()} />

      <UniversalBottomSheet ref={sheetRef}>
        <Text>Hello from Universal Bottom Sheet 👋</Text>
      </UniversalBottomSheet>
    </View>
  );
}
```

---

## 🎨 Theme Support

The sheet automatically adapts to **system theme**.
You can also **force a mode** manually.

```tsx
<UniversalBottomSheet mode="dark">
  <Text>Dark Mode Sheet</Text>
</UniversalBottomSheet>
```

Supported values:

- `"light"`
- `"dark"`

---

## 🧠 Props

| Prop       | Type        | Default | Description   |                  |
| ---------- | ----------- | ------- | ------------- | ---------------- |
| `children` | `ReactNode` | —       | Sheet content |                  |
| `mode`     | `"light"    | "dark"` | System        | Force theme mode |

---

## 🎯 Ref Methods

| Method    | Description             |
| --------- | ----------------------- |
| `open()`  | Opens the bottom sheet  |
| `close()` | Closes the bottom sheet |

---

## 🛠 Built With

- `react-native-raw-bottom-sheet`
- `@react-native-community/blur`
- `react-native-linear-gradient`

---

## 🧪 Platform Behavior

| Platform | Background                   |
| -------- | ---------------------------- |
| iOS      | Blur + Gradient + Border     |
| Android  | Solid background (optimized) |

---

## 📌 Requirements

- React Native `>= 0.64`
- React `>= 17`

---

## 📄 License

MIT © CompileX

---

⭐ **If you like this package, don’t forget to star the repo!**
