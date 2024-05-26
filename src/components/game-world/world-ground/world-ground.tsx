import { useTexture } from '@react-three/drei';

const WorldGroundComponent = () => {
  const texture = useTexture('/ground.jpg');
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const WorldGround = WorldGroundComponent;

export { WorldGround };
