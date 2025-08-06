import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon: Icon,
  onClick,
  className = '',
  href
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white shadow-lg hover:shadow-xl focus:ring-blue-500 hover:bg-blue-700',
    secondary: 'bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 hover:border-blue-700 focus:ring-blue-500',
    outline: 'bg-transparent hover:bg-blue-50 text-blue-600 border-2 border-blue-200 hover:border-blue-300 focus:ring-blue-500'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const content = (
    <>
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {children}
    </>
  );
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
};