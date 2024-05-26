import { Canvas } from '@react-three/fiber';
import styles from './game-world.module.scss';
import { Sky, Stats } from '@react-three/drei';
import { WorldGround } from './world-ground';
import { WorldLight } from './world-light';
import { Player } from './player';
import { Physics } from './physics';

const Skybox = () => {
  return (
    <Sky
      distance={450000} // Camera distance (default=450000)
      sunPosition={[1, 1, 1]} // Sun position
      inclination={0} // Sun inclination (default=0)
      azimuth={0.25} // Sun azimuth (default=0.25)
    />
  );
};

const GameWorldComponent = () => {
  return (
    <div className={styles.container}>
      <Canvas>
        <Player />
        <WorldLight />
        <WorldGround />
        <Physics />
        <Skybox />
        <Stats />
      </Canvas>
    </div>
  );
};

const GameWorld = GameWorldComponent;

export default GameWorld;
