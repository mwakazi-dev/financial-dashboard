import { FC } from 'react';

import { cn } from '../lib/utils';
import { inputFields } from '../constants/inputFields';
import ImageEditor from './ImageEditor';
import FormInput from './FormInput';
import { Button } from './Button';

interface Props {
  image: File | null;
  preview: string;
  values: any;
  isPending: boolean | undefined;
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChange: (name: string, value: string) => void;
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

const EditProfile: FC<Props> = ({
  image,
  preview,
  values,
  handleImageChange,
  onChange,
  submitHandler,
  isPending,
}) => {
  return (
    <form
      className="gap-y-4 desktop:gap-y-10 flex flex-col"
      onSubmit={submitHandler}
    >
      <div
        className={cn(
          'flex flex-col items-center gap-[22px] pt-[45px]',
          'desktop:flex-row desktop:gap-[57px] desktop:pl-[30px] desktop:pt-10 desktop:items-start',
        )}
      >
        <ImageEditor
          image={image}
          preview={preview}
          handleImageChange={handleImageChange}
        />
        <div
          className={cn(
            'grid gap-y-[16px] w-full',
            'desktop:grid-cols-2 desktop:gap-x-[29px] desktop:gap-y-[22px] desktop:flex-1 desktop:w-auto',
          )}
        >
          {inputFields.map((field) => (
            <FormInput
              key={field?.id}
              {...field}
              error={values?.error[field?.id][0]}
              onChange={(e) => onChange(field.id, e.target?.value)}
              value={values?.value[field.id] as any}
            />
          ))}
        </div>
      </div>
      <div className="desktop:flex desktop:justify-end w-full mobile:mt-[16px] desktop:mt-0">
        <Button
          className="mobile:w-full desktop:w-[190px] mr-6"
          disabled={isPending}
          type="submit"
        >
          {isPending ? 'Saving...' : 'Save'}
        </Button>
      </div>
    </form>
  );
};

export default EditProfile;
