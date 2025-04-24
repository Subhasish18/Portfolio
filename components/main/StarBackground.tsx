"use client";

import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StarBackground = (props: any) => {
    const ref: any = useRef();
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(999), { radius: 1.2 })
      );
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 5;
        ref.current.rotation.y -= delta / 7;
    })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
        <Points 
        ref={ref} 
        positions={sphere} 
        stride={3} 
        frustumCulled 
        {...props}
        >
            <PointMaterial 
            transparent 
            color="$fff" 
            size={0.003} 
            sizeAttenuation={true} 
            depthWrite={false} 
            toneMapped={true}
            />
        </Points>
    </group>
  )
};

const StarsCanvas =() => (
    <div className='w-full h-auto fixed inset-0 z-[20]'>
        <Canvas camera={{position: [0, 0, 1]}}>
            <Suspense fallback={null}>
                <StarBackground />
                <Preload all />
            </Suspense>
        </Canvas>
    </div>
)
export default StarsCanvas;
