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
      // Change the color of the material
      // node.material.color.set('#00FF00'); // Green color

      // Optionally, change the size of the model
      node.scale.set(1.5, 1.5, 1.5); // Adjust the scale as needed
    }
  });

  return (
    <mesh ref={keyboardRef} position={[0, -1, 0]} >
      {/* Use the loaded GLB model */}
      <primitive object={scene} />
    </mesh>
  );
};

export default Keyboard3D;
