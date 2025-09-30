"use client";

import { FC } from "react";
import { Canvas } from "@react-three/fiber";
import ThreeDModel from "@/components/ThreeDModel"; 

const ContactExp: FC = () => {
    return(
        <Canvas camera={{ position: [-1.5, 1.5, 5] }}>
            <ambientLight intensity={2} />
            <directionalLight position={[-5, 5, 5]} intensity={5} color={"#804000"} />
            <group rotation={[0, -0.5, 0]} position={[-0.7, -0.5, 0]} scale={2}>
                <ThreeDModel />
            </group>
        </Canvas>

)
}

export default ContactExp;