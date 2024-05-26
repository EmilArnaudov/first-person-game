import { useFrame, useThree } from '@react-three/fiber';
import { PhysicsProps } from './physics.types';
import * as CANNON from 'cannon-es';
import { useEffect, useRef } from 'react';
import { Euler, Quaternion } from 'three';
import { useStore } from 'stores';

const PhysicsComponent = (_: PhysicsProps): null => {
  const world = useRef<CANNON.World>(
    new CANNON.World({
      gravity: new CANNON.Vec3(0, -9.82, 0), // m/s²
    }),
  );
  const { testPropterty } = useStore();

  const sphereBody = useRef<CANNON.Body>();
  const groundBody = useRef<CANNON.Body>();

  const { camera } = useThree();

  useEffect(() => {
    const groundBody = new CANNON.Body({
      type: CANNON.Body.STATIC,
      shape: new CANNON.Plane(),
    });
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0); // make it face up
    world.current.addBody(groundBody);

    const radius = 1; // m
    sphereBody.current = new CANNON.Body({
      mass: 5, // kg
      shape: new CANNON.Sphere(radius),
    });
    sphereBody.current.position.set(0, 10, 0); // m
    world.current.addBody(sphereBody.current);
  }, []);

  useFrame(() => {
    world.current.fixedStep();
    if (sphereBody.current) {
      camera.position.copy(sphereBody.current.position);
      const quaternion = new Quaternion(
        sphereBody.current.quaternion.x,
        sphereBody.current.quaternion.y,
        sphereBody.current.quaternion.z,
        sphereBody.current.quaternion.w,
      );
      camera.rotation.copy(new Euler().setFromQuaternion(quaternion));
    }
  });
  return null;
};

const Physics = PhysicsComponent;
export { Physics };
