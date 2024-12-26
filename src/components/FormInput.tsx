import { FC } from 'react';

import { cn } from '../lib/utils';

interface Props {
  id: string;
  type: string;
  value?: string;
  placeholder?: string;
  label: string;
  error: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: FC<Props> = ({
  label,
  id,
  type,
  value = '',
  placeholder = '',
  error,
  className,
  onChange,
}) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <label
        className="text-[13px] desktop:text-[16px] text-primary"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={cn(
          'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-secondary placeholder:text-[15px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm rounded-[15px] h-[50px]',
          className,
        )}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {error && <p className="text-[12px] text-destructive">{error}</p>}
    </div>
  );
};

export default FormInput;
