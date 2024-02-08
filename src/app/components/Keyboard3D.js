import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

const Keyboard3D = () => {
  const keyboardRef = useRef();

  useFrame(() => {
    // Rotate the keyboard slowly
    keyboardRef.current.rotation.y += 0.005;
  });

  // Load the GLB model
  const loader = new GLTFLoader();
  const { scene } = useLoader(GLTFLoader, '/3d_keyboard.glb');

  scene.traverse((node) => {
    if (node.isMesh) {
      // You can set different colors or textures here
      node.material.color.set('#FF0000'); // Red color
    }
  });

  return (
    <mesh ref={keyboardRef}>
      {/* Use the loaded GLB model */}
      <primitive object={scene} />
    </mesh>
  );
};

export default Keyboard3D;
