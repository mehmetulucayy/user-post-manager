// src/components/layout/Container.tsx

import React from 'react';
import styles from './Container.module.css';

// ContainerProps arayüzünü React.HTMLAttributes<HTMLDivElement> arayüzünden türetiyoruz
// Bu, bir div'in alabileceği tüm standart HTML özelliklerini (onClick, id, role vb.)
// otomatik olarak Container bileşenine ekler.
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  // className ve style artık HTMLAttributes içinde zaten tanımlı,
  // ancak daha spesifik tip sağlamak veya üzerine yazmak isterseniz tutulabilir.
  // Bu örnekte, className ve style'ı kendimiz yönettiğimiz için onları tutabiliriz.
  className?: string;
  style?: React.CSSProperties;
}

const Container: React.FC<ContainerProps> = ({ children, className, style, ...rest }) => {
  // `...rest` operatörü, children, className ve style dışındaki tüm prop'ları toplar
  return (
    <div className={`${styles.container} ${className || ''}`} style={style} {...rest}>
      {children}
    </div>
  );
};

export default Container;