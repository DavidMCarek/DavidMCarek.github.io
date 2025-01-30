import styles from './card.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<Props> = ({ children, className }) => {
  const classes = className ? `${styles.card} ${className}` : styles.card;
  return <div className={classes}>{children}</div>;
};

export default Card;
