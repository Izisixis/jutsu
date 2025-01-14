import React, { ButtonHTMLAttributes, memo } from 'react';
import cls from './Button.module.scss';
import { classNames, ClassNamesMods } from '../../lib/classNames/classNames.ts';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  lastSeries?: boolean;
  allSeries?: boolean;
  followingSeries?: boolean;
  previousSeries?: boolean;
  className?: string;
}

export const Button = memo((props: ButtonProps) => {
  const { 
    className, 
    children, 
    lastSeries, 
    allSeries,
    followingSeries,
    previousSeries,
    ...properties 
  } = props;

  const mods: ClassNamesMods = {
    [cls.lastSeries]: lastSeries,
    [cls.followingSeries]: followingSeries,
    [cls.allSeries]: allSeries,
    [cls.previousSeries]: previousSeries,
  }
  
  return <button 
    {...properties} 
    className={classNames(cls.Button, mods, [className,])}
  >
    {children}
  </button>;
});


