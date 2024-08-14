import React from "react";
import { ViroARSceneNavigator } from "@reactvision/react-viro";
import ARscreens from "../screens/ar/ARscreens";

export default function ARScreenNavigation() {
  return (
    <ViroARSceneNavigator
      autofocus
      initialScene={{
        scene: ARscreens,
      }}
    />
  );
}
