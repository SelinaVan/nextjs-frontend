'use client';
import React, { useState } from 'react';
import { XMarkIcon, PencilSquareIcon } from '@heroicons/react/24/solid';
import { Editor } from '@tiptap/react';
import { FormattedPost } from '@/app/type';


type Props = {
    isEditable: boolean,
    editor: Editor | null
    handleEditableState: (isEditable: boolean) => void,
    title: string,
    setTitle: (title: string) => void,
    tempTitle: string,
    setTempTitle: (tempTitle: string) => void,
    tempContent: string,
    setTempContent: (tempContent: string) => void,
    post: FormattedPost

}

const CategoryAndEdit = ({
  isEditable,
  handleEditableState,
  title,
  setTitle,
  tempTitle,
  setTempTitle,
  tempContent,
  setTempContent,
  editor,
  post,
}: Props) => {
  const handleEnableEdit = () => {
    handleEditableState(!isEditable);
    setTempTitle(title);
    setTempContent(editor?.getHTML() || '');
  };
  const handleCancelEdit = () => {
    handleEditableState(!isEditable);
    setTitle(tempTitle);
    editor?.commands.setContent(tempContent);
  };
  return (
    <div className='flex justify-between items-center'>
      <h4 className='bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold'>{post.category}</h4>
      <div className='mt-4'>
        {isEditable ? (
          <div className='flex justify-between gap-3'>
            <button onClick={handleCancelEdit}>
              <XMarkIcon className='h-6 w-6 text-accent-red' />
            </button>
          </div>
        ) : (
          <button onClick={handleEnableEdit}>
            <PencilSquareIcon className='h-6 w-6 text-accent-red' />
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoryAndEdit