import styles from './game-features.module.css';

function GameFeatures({ className = '', features }: GameFeaturesProps) {
  return (
    <ul className={`${styles.features_list} ${className}`}>
      {features.map((feature) => (
        <li key={feature} className={styles.list_item}>
          {feature}
        </li>
      ))}
    </ul>
  );
}

export default GameFeatures;

export type GameFeaturesProps = {
  className?: string;
  features: string[];
};
