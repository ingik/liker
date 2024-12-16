'use client';

import { forwardRef, ElementType } from 'react';

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  variant?: 'primary' | 'outline';
  asChild?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLElement, ButtonProps>(
  (
    { variant = 'primary', className = '', asChild, children, ...props },
    ref
  ) => {
    const Comp = asChild ? ('div' as ElementType) : 'button';
    const baseStyles =
      'inline-flex w-full items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
    const variantStyles = {
      primary:
        'bg-primary text-white hover:bg-primary-dark active:bg-primary-dark/90',
      outline:
        'border border-primary text-primary hover:bg-primary/10 active:bg-primary/20',
    };
    const sizeStyles = 'min-h-[40px] px-4 py-2';
    const contentStyles = 'w-full text-left';

    return (
      <Comp
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles} ${className} w-full flex-1`}
        {...props}
      >
        <span className={contentStyles}>{children}</span>
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export default Button;
