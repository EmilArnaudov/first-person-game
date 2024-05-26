import { WorldLightProps } from './world-light.types';

const WorldLightComponent = (_: WorldLightProps): JSX.Element => {
  return (
    <>
      <pointLight position={[5, 5, 5]} decay={0} intensity={Math.PI} />
      <ambientLight intensity={Math.PI / 3} />
    </>
  );
};

const WorldLight = WorldLightComponent;
export { WorldLight };
