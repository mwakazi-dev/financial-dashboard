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
    <div className="grid w-full max-w-sm items-center gap-y-[9px]">
      <label
        className="mobile:text-[13px] mobile:leading-[15.73px] mobile:font-[400] font-sans desktop:text-[16px] text-primary"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={cn(
          'mobile:h-[40px] mobile:rounded-[10px] flex w-full border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-secondary mobile:placeholder:text-[12px] mobile:placeholder:leading-[14.52px] desktop:placeholder:text-[15px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm rounded-[15px] font-sans font-[400]',
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
