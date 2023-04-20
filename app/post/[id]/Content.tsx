'use client';
import { FormattedPost } from 'app/type';
import React, { useState } from 'react';
import Image from 'next/image';
import SocialLinks from '@/app/(shared)/SocialLinks';
import { Editor, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CategoryAndEdit from './Category';
import Article from './Article';

type Props = {
  post: FormattedPost;
};

const Content = ({ post }: Props) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const [title, setTitle] = useState<string>(post?.title);
  const [titleError, setTitleError] = useState<string>('');
  const [tempTitle, setTempTitle] = useState<string>('');

  const [content, setContent] = useState<string>(post?.content);
  const [contentError, setContentError] = useState<string>('');
  const [tempContent, setTempContent] = useState<string>('');

  const handleOnTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (title) setTitleError('');
    setTitle(e.target.value);
  };
  const handleOnChangeContent = ({ editor }: any) => {
    if (!(editor as Editor).isEmpty) setContentError('');
    setContent((editor as Editor).getHTML());
  };
  const editor = useEditor({
    extensions: [StarterKit],
    onUpdate: handleOnChangeContent,
    content: content,
    editable: isEditable,
    editorProps: {
      attributes: {
        class: 'prose prose-sm xl:prose-2xl leading-8 focus:outline-none w-full max-w-full',
      },
    },
  });
  const handleEditableState = (bool: boolean) => {
    setIsEditable(bool);
    editor?.setEditable(bool);
  };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if  (title === '') setTitleError('This field is required')
        if (editor?.isEmpty) setContentError('This field is required');
        if (title === '' || editor?.isEmpty) return;
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/post/${post?.id}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({title, content})
        });
        const data = await response.json()
        handleEditableState(false)
        setTempTitle('')
        setTempContent('')
        setTitle(data?.title)
        setContent(data?.content)
        editor?.commands.setContent(data?.content)
  };
  return (
    <div className='prose w-full max-w-full mb-10'>
      <h5 className='text-wh-300'>{`Home > ${post.category} > ${post.title}`}</h5>
      {/* category and edit */}
      <CategoryAndEdit
        isEditable={isEditable}
        handleEditableState={handleEditableState}
        title={title}
        setTitle={setTitle}
        tempTitle={tempTitle}
        setTempTitle={setTempTitle}
        tempContent={tempContent}
        setTempContent={setTempContent}
        editor={editor}
        post={post}
      />
      <form onSubmit={handleSubmit}>
        {/* Header */}
        <>
          {isEditable ? (
            <div>
              <textarea
                className='border-2 rounded-md bg-wh-50 p-3 w-full'
                placeholder='title'
                onChange={handleOnTitleChange}
                value={title}
              />

              {titleError && <p className='mt-1 text-wh-900'>{titleError}</p>}
            </div>
          ) : (
            <h3 className='font-bold text-3xl mt-3'>{title}</h3>
          )}
          <div className='flexgap-3'>
            <h5 className='font-semibold text-xs'>By{post.author}</h5>
            <h6 className='text-wh-300 text-xs'>{new Date(post.createdAt).toLocaleDateString()}</h6>
          </div>
        </>
        {/* Image */}
        <div className='relative w-auto mt-2 mb-16 h-96'>
          <Image
            fill
            src={post.image}
            alt={post.title}
            style={{ objectFit: 'cover' }}
            sizes='(max-width:480px) 100vw,
                    (max-width: 768px) 85vw,
                    (max-width: 1060px) 75vw,
                    60vw
                      '
          />
        </div>
        {/* content editor*/}
        <Article
          editor={editor}
          isEditable={isEditable}
          setIsEditable={setIsEditable}
          contentError={contentError}
          setContent={setContent}
          title={title}
        />
        {/* submit button */}
        {isEditable && (
          <div className='flex justify-end'>
            <button
              type='submit'
              className='bg-accent-red hover:bg-wh-500 text-wh-10 font-semibold py-2 px-5 mt-'
            >
              SUBMIT
            </button>
          </div>
        )}
      </form>

      {/* sociallink */}
      <div className='hidden md:block w-1/3'>
        <SocialLinks isDark />
      </div>
    </div>
  );
};

export default Content;
