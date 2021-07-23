import React from 'react';
import { HtagProps } from './Htag.props';
import styles from './Htag.module.css';

export const Htag = ({ tag, children } : HtagProps): JSX.Element => {
  if (tag === 'h1') return <h1 className={styles.h1}>{children}</h1>;
  if (tag === 'h2') return <h2 className={styles.h2}>{children}</h2>;
  if (tag === 'h3') return <h3 className={styles.h3}>{children}</h3>;

  return <p>{children}</p>;
};
