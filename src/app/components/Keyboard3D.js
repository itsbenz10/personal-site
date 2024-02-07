import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { Link } from 'react-router-dom';
const Keyboard3D = () => {
  const keyboardRef = useRef();

  useFrame(() => {
    // Rotate the keyboard slowly
    keyboardRef.current.rotation.y += 0.005;
  });

  // Load the GLTF model
  const loader = new GLTFLoader();
  const [yourGLTFModel] = useLoader(GLTFLoader, '@/app/public/3d_keyboard.glb');

  return (
    <mesh ref={keyboardRef}>
      {/* Use the loaded GLTF model */}
      <primitive object={yourGLTFModel.scene} />
    </mesh>
  );
};

export default Keyboard3D;
