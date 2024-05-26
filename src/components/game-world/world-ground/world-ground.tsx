import { useTexture } from '@react-three/drei';
import { DoubleSide } from 'three';

const WorldGroundComponent = () => {
  const texture = useTexture('/ground.jpg');
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial map={texture} side={DoubleSide} />
    </mesh>
  );
};

const WorldGround = WorldGroundComponent;

export { WorldGround };
