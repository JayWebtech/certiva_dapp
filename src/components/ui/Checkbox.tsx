import * as React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  indeterminate?: boolean;
  checked?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, indeterminate, checked, ...props }, ref) => {
    return (
      <div className='relative flex items-center justify-center'>
        <input
          type='checkbox'
          ref={ref}
          className={`h-4 w-4 rounded border border-gray-300 focus:ring-2 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 appearance-none checked:bg-none checked:border-primary focus:ring-primary/25 peer ${className}`}
          {...props}
          checked={checked}
        />
        <svg
          className='absolute h-3 w-3 text-primary opacity-0 peer-checked:opacity-100 pointer-events-none'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='4'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <polyline points='20 6 9 17 4 12' />
        </svg>
        {label && <span className='ml-2 text-sm'>{label}</span>}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
