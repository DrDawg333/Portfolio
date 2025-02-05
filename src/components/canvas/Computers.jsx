import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Suspense,useEffect,useState } from "react";
import CanvasLoader from '../Loader';
const Computers = ({isMobile}) => {
  const { scene } = useGLTF("/desktop_pc/scene.gltf", true);
  return (
    <mesh>
      <hemisphereLight intensity={2.15}
      groundColor="black"/>
      <pointLight intensity={12}/>
      <spotLight
        position={[-20,20,10]}
        angle={1.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-maSize={1024}
      />
      <primitive
      object={scene}
      scale={isMobile?0.7:0.8}
      position={isMobile? [0,-3,-2,2]:[0, -3.25, -1.5]}
      rotation={[-0.01, 11.5, -0.1]}
      />
    </mesh>
  );
};

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) =>{
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change',
    handleMediaQueryChange);
  
    return () => {
      mediaQuery.removeEventListener('change', 
      handleMediaQueryChange);
    }

  },[])

  return (
    <Canvas camera={{ position: [5, 5, 10], fov: 50 }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2} // Limit vertical rotation
          minPolarAngle={Math.PI / 2} // Lock vertical rotation
          />
        <Computers />
      </Suspense>
      <Preload/>
    </Canvas>
  );
};

export default App;
