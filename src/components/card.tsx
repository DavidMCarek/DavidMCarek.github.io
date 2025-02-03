import { ElementType, ReactNode } from 'react';
import styles from './card.module.scss';

type Props = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

const Card: React.FC<Props> = ({
  as: Component = 'div',
  children,
  className,
  ...props
}) => {
  const classes = className ? `${styles.card} ${className}` : styles.card;
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

export default Card;
