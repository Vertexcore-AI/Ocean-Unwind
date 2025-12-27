/* eslint-disable react/no-unknown-property */
'use client';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface PictureFrameProps {
  size: number;
  frameWidthPercent?: number;
  isActive: boolean;
  mouseX: React.MutableRefObject<number>;
  mouseY: React.MutableRefObject<number>;
}

export function PictureFrame({
  size = 70,
  frameWidthPercent = 0.03,
  isActive,
  mouseX,
  mouseY,
}: PictureFrameProps) {
  const frameGroupRef = useRef<THREE.Group>(null);

  // Load textures
  const textures = useTexture({
    map: '/textures/wood/wood-diffuse.jpg',
    normalMap: '/textures/wood/wood-normal.jpg',
    roughnessMap: '/textures/wood/wood-roughness.jpg',
  });

  // Configure textures
  useMemo(() => {
    Object.values(textures).forEach((texture) => {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(2, 2);
    });
  }, [textures]);

  // Dimensions
  const frameWidth = size * frameWidthPercent;
  const frameDepth = frameWidth * 1.5;
  const outerSize = size + frameWidth;

  // Mouse rotation (active slide only)
  useFrame(() => {
    if (!frameGroupRef.current || !isActive) return;

    const rotationIntensity = 0.00015;
    const targetRotationY = mouseX.current * rotationIntensity;
    const targetRotationX = -mouseY.current * rotationIntensity;

    frameGroupRef.current.rotation.y = THREE.MathUtils.lerp(
      frameGroupRef.current.rotation.y,
      targetRotationY,
      0.1
    );
    frameGroupRef.current.rotation.x = THREE.MathUtils.lerp(
      frameGroupRef.current.rotation.x,
      targetRotationX,
      0.1
    );
  });

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* Debug: Test cube to verify rendering */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[10, 10, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>

      {/* Frame */}
      <group ref={frameGroupRef}>
        {/* Top bar */}
        <mesh position={[0, outerSize / 2 - frameWidth / 2, -frameDepth / 2]}>
          <boxGeometry args={[outerSize, frameWidth, frameDepth]} />
          <meshStandardMaterial
            {...textures}
            color="#A0826D"
            roughness={0.7}
            metalness={0.0}
            normalScale={[0.5, 0.5]}
          />
        </mesh>

        {/* Bottom bar */}
        <mesh position={[0, -(outerSize / 2 - frameWidth / 2), -frameDepth / 2]}>
          <boxGeometry args={[outerSize, frameWidth, frameDepth]} />
          <meshStandardMaterial
            {...textures}
            color="#A0826D"
            roughness={0.7}
            metalness={0.0}
            normalScale={[0.5, 0.5]}
          />
        </mesh>

        {/* Left bar */}
        <mesh position={[-(outerSize / 2 - frameWidth / 2), 0, -frameDepth / 2]}>
          <boxGeometry args={[frameWidth, size, frameDepth]} />
          <meshStandardMaterial
            {...textures}
            color="#A0826D"
            roughness={0.7}
            metalness={0.0}
            normalScale={[0.5, 0.5]}
          />
        </mesh>

        {/* Right bar */}
        <mesh position={[outerSize / 2 - frameWidth / 2, 0, -frameDepth / 2]}>
          <boxGeometry args={[frameWidth, size, frameDepth]} />
          <meshStandardMaterial
            {...textures}
            color="#A0826D"
            roughness={0.7}
            metalness={0.0}
            normalScale={[0.5, 0.5]}
          />
        </mesh>
      </group>
    </>
  );
}
