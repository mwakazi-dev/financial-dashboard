import React, { FC, useRef } from 'react';

import { ReactComponent as PencilIcon } from '../assets/icons/pencil.svg';
import UserImage from '../assets/user.jpg';

interface Props {
  image: File | null;
  preview: string | null;
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageEditor: FC<Props> = ({ preview, handleImageChange }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col items-center  ">
      <div className="relative size-[90px]">
        <img
          src={preview || UserImage}
          className="size-full rounded-full object-cover"
          alt="User Pic"
        />
        <button
          className="size-[30px] flex items-center justify-center bg-foreground absolute bottom-0 -right-2 rounded-full text-card"
          type="button"
          onClick={() => fileInputRef.current?.click()}
          aria-label="Edit profile picture"
        >
          <PencilIcon />
        </button>

        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
};

export default ImageEditor;
