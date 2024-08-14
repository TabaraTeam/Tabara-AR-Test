import React from "react";
import {
  ViroARScene,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
} from "@reactvision/react-viro";
import { objects_3D } from "../../assets/viroRes/resources";

export default function ARscreens() {
  return (
    <ViroARScene>
      <ViroAmbientLight color="#ffffff" intensity={200} />

      <Viro3DObject
        source={objects_3D.dragon_anim.obj}
        resources={objects_3D.dragon_anim.resources}
        position={[0, -1, -3]}
        scale={objects_3D.dragon_anim.scale}
        type={objects_3D.dragon_anim.type}
        animation={objects_3D.dragon_anim.animation}
      />
      <ViroSpotLight
        innerAngle={5}
        outerAngle={90}
        direction={[0, -1, 0]}
        position={[0, 4, -3]}
        color="#ffffff"
        castsShadow={true}
        shadowMapSize={2048}
        shadowNearZ={0.1}
        shadowFarZ={5}
        shadowOpacity={0.7}
      />

      <Viro3DObject
        source={objects_3D.turkeyman_anim.obj}
        resources={objects_3D.turkeyman_anim.resources}
        position={[1, -1, -3]}
        scale={[0.5, 0.5, 0.5]}
        type={objects_3D.turkeyman_anim.type}
        animation={objects_3D.turkeyman_anim.animation}
      />
      <ViroSpotLight
        innerAngle={5}
        outerAngle={90}
        direction={[0, -1, 0]}
        position={[1.5, 4, -3]}
        color="#ffffff"
        castsShadow={true}
        shadowMapSize={2048}
        shadowNearZ={0.1}
        shadowFarZ={5}
        shadowOpacity={0.7}
      />

      <Viro3DObject
        source={objects_3D.pug_animated.obj}
        resources={objects_3D.pug_animated.resources}
        position={[-0.8, -1, -3]}
        scale={[0.5, 0.5, 0.5]}
        type={objects_3D.pug_animated.type}
        animation={objects_3D.pug_animated.animation}
      />
      <ViroSpotLight
        innerAngle={5}
        outerAngle={90}
        direction={[0, -1, 0]}
        position={[-1.5, 4, -3]}
        color="#ffffff"
        castsShadow={true}
        shadowMapSize={2048}
        shadowNearZ={0.1}
        shadowFarZ={5}
        shadowOpacity={0.7}
      />
    </ViroARScene>
  );
}
