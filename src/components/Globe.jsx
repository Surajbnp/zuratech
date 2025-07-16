import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Stars } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import { Box } from "@chakra-ui/react";


const RotatingGlobe = () => {
  const ref = React.useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002;
    }
  });

  return (
    <Sphere ref={ref} args={[1.5, 64, 64]}>
      <meshStandardMaterial
        color="#1E90FF"
        roughness={0.5}
        metalness={0.3}
        wireframe={true}
      />
    </Sphere>
  );
};

const Globe = () => {
  return (
    <Box w="100%" h="100%">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Stars radius={100} depth={50} count={5000} factor={4} fade />
          <RotatingGlobe />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate />
      </Canvas>
    </Box>
  );
};

export default Globe;
