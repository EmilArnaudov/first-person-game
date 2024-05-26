import { useFrame, useThree } from '@react-three/fiber';
import { ActiveControls, PlayerControls } from 'components';

import { useEffect, useState } from 'react';

const PLAYER_SPEED = 1;

const usePlayerControls = () => {
  const [activeControls, setActiveControls] = useState<ActiveControls>({});
  const { camera } = useThree();

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      const pressedKey = e.key.toUpperCase();
      switch (pressedKey) {
        case 'W':
          setActiveControls((prev) => ({
            ...prev,
            [PlayerControls.FORWARD]: true,
          }));
          break;
        case 'A':
          setActiveControls((prev) => ({
            ...prev,
            [PlayerControls.LEFT]: true,
          }));
          break;
        case 'S':
          setActiveControls((prev) => ({
            ...prev,
            [PlayerControls.BACKWARDS]: true,
          }));
          break;
        case 'D':
          setActiveControls((prev) => ({
            ...prev,
            [PlayerControls.RIGHT]: true,
          }));
          break;
        default:
          console.log(pressedKey, ' RANDOM pressed');
      }
    });

    window.addEventListener('keyup', (e) => {
      const pressedKey = e.key.toUpperCase();
      switch (pressedKey) {
        case 'W':
          setActiveControls((prev) => ({
            ...prev,
            [PlayerControls.FORWARD]: false,
          }));
          break;
        case 'A':
          setActiveControls((prev) => ({
            ...prev,
            [PlayerControls.LEFT]: false,
          }));
          break;
        case 'S':
          setActiveControls((prev) => ({
            ...prev,
            [PlayerControls.BACKWARDS]: false,
          }));
          break;
        case 'D':
          setActiveControls((prev) => ({
            ...prev,
            [PlayerControls.RIGHT]: false,
          }));
          break;
        default:
          console.log(pressedKey, ' RANDOM pressed');
      }
    });
  }, []);

  useFrame(() => {
    if (activeControls[PlayerControls.FORWARD]) {
      camera.translateZ(-PLAYER_SPEED);
    }
    if (activeControls[PlayerControls.LEFT]) {
      camera.translateX(-PLAYER_SPEED);
    }
    if (activeControls[PlayerControls.RIGHT]) {
      camera.translateX(PLAYER_SPEED);
    }
    if (activeControls[PlayerControls.BACKWARDS]) {
      // camera.position.add(cameraDirection.negate());
      camera.translateZ(PLAYER_SPEED);
    }
  });
};

export { usePlayerControls };
