import React from 'react';
import {Outlet} from 'react-router';

// Определите интерфейс для пропсов
interface LayoutProps {
  children?: React.ReactNode; // Используйте React.ReactNode для поддержки всех типов дочерних элементов
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({children, className = ''}) => (
  <div className={`container ${className}`.trim()}>
    {children}
    <Outlet />
  </div>
);
