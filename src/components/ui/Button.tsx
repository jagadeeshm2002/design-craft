import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';
import React from 'react';

interface ButtonProps extends VariantProps<typeof ButtonVariants> {
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;

}
const ButtonVariants = cva('px-4 py-2 rounded-lg',{
    variants:{
        type:{
            primary:'bg-white text-black',
            secondary:'bg-secondary text-white',
       
            outline:'bg-transparent border border-primary text-primary',
        }
    },
    defaultVariants:{
        type:'primary'

    }
})


const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={cn(ButtonVariants(), props.className)}
    >
      {props.children}
    </button>
  );
};

export default Button;
