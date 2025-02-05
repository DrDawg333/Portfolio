import React, {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from '@react-three/drei'
import CanvasLoader from '../Loader';


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1}
    floatIntensity={8}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0,0,0.1]}/>
      <mesh castShadow receiveShadow scale={4} rotation={[0, Math.PI / 6, 0]}>
        <icosahedronGeometry args={[1,1]}/>
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0,0,1]}
          rotation={[2*Math.PI, 0, 6.25]}
          flatShading
          map={decal}

        />
      </mesh>

    </Float>
  )
}

const BallCanvas = ({icon}) => {
  return(
    <Canvas camera={{ position: [5, 5, 10], fov: 50 }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false}/>
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload/>
    </Canvas>
  ) 
}

export default BallCanvas