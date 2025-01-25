"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  // Environment,
  OrbitControls,
  useAnimations,
  useGLTF,
  Html,
  useProgress,
} from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";

function Phoenix() {
  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [20, 50, -25], fov: 50 }}>
        <Suspense fallback={<Loader />}>
          <PhoenixModel />
          <OrbitControls />
          {/* <Environment preset="sunset" /> */}
        </Suspense>
      </Canvas>
    </div>
  );
}

// Phoenix model component with animation and movement
function PhoenixModel() {
  const phoenixRef = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(
    "/gltf/phoenix_bird.glb"
  ) as unknown as {
    scene: THREE.Group;
    animations: THREE.AnimationClip[];
  };
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    actions["Take 001"]?.play();
  }, [actions]);

  useFrame((state) => {
    if (phoenixRef.current) {
      const { position } = phoenixRef.current;
      const time = state.clock.getElapsedTime();
      const movePosition = Move(time);

      // Set model position from Move function output
      position.set(movePosition.x, movePosition.y, movePosition.z);
    }
  });

  return <primitive ref={phoenixRef} object={scene} scale={0.025} />;
}

// Move function for generating a smooth, continuous curved path
function Move(time: number) {
  const frequency = 1;
  const amplitude = 5;

  // Generate smooth, continuous movement using sine and cosine functions
  const x = 10 * Math.sin((time * frequency) / 20) * amplitude;
  const y = Math.cos(time * frequency * 0.5) * (amplitude / 2) + amplitude;
  const z = Math.sin(time * frequency * 0.3) * amplitude - 10;

  return { x, y, z };
}

// Loader component for loading progress
function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(2)} % loaded</Html>;
}

export default Phoenix;
