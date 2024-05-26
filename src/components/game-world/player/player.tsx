import { PointerLockControls } from '@react-three/drei';
import { PointerLockControls as PointerLockControlsImpl } from 'three-stdlib';
import { PlayerProps } from './player.types';
import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { Vector3 } from 'three';
import { usePlayerControls } from 'hooks';

const PlayerComponent = (_: PlayerProps): JSX.Element => {
  const ref = useRef<PointerLockControlsImpl>(null);
  usePlayerControls();

  // useEffect(() => {
  //   window.addEventListener('keydown', (e) => {
  //     const cameraDirection = new Vector3();
  //     camera.getWorldDirection(cameraDirection);
  //     const pressedKey = e.key.toUpperCase();

  //     switch (pressedKey) {
  //       case 'W':
  //         camera.position.add(cameraDirection);
  //         console.log(pressedKey, ' w pressed');
  //         break;
  //       case 'A':
  //         camera.position.add(cameraDirection);
  //         camera.translateX(-1);
  //         console.log(pressedKey, ' A pressed');
  //         break;
  //       case 'S':
  //         camera.position.add(cameraDirection.negate());
  //         console.log(pressedKey, ' S pressed');
  //         break;
  //       case 'D':
  //         camera.translateX(1);
  //         console.log(pressedKey, ' D pressed');
  //         break;
  //       case 'C':
  //         camera.position.y += 1;
  //         console.log(pressedKey, ' D pressed');
  //         break;
  //       case 'Z':
  //         camera.position.y -= 1;
  //         console.log(pressedKey, ' D pressed');
  //         break;
  //       default:
  //         console.log(pressedKey, ' RANDOM pressed');
  //     }
  //   });
  // }, []);

  return <PointerLockControls ref={ref} />;
};

const Player = PlayerComponent;
export { Player };
