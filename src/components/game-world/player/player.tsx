import { PointerLockControls } from '@react-three/drei';
import { PointerLockControls as PointerLockControlsImpl } from 'three-stdlib';
import { PlayerProps } from './player.types';
import { useRef } from 'react';
import { usePlayerControls } from 'hooks';
import { useThree } from '@react-three/fiber';

const PlayerComponent = (_: PlayerProps): JSX.Element => {
  const ref = useRef<PointerLockControlsImpl>(null);
  const { camera } = useThree();
  usePlayerControls();

  return (
    <>
      <PointerLockControls ref={ref} />
      <mesh position={camera.position}>
        <cylinderGeometry args={[5, 5, 20, 32]} />
        <meshStandardMaterial transparent opacity={0} />
      </mesh>
    </>
  );
};

const Player = PlayerComponent;
export { Player };
