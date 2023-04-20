import { Editor } from '@tiptap/react';

import ListItem from '@tiptap/extension-list-item';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';

const buttonStyled = {
  active: {
    border: '1px solid black',
    color:'red',
    padding: '5px',
    margin: '5px',
    },
    normal:{
        border: '1px solid black',
    padding:'5px',
    margin: '5px'
    }
};
type Props = {
  editor: Editor | null;
};
const EditorMenuBar = ({ editor }: Props) => {
  if (!editor) {
    return null;
  }

  return (
    <>
      <button
        style={editor.isActive('bold') ? buttonStyled.active : buttonStyled.normal}
        type='button'
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
      >
        <b>B</b>
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        style={editor.isActive('italic') ? buttonStyled.active : buttonStyled.normal}
      >
        <i>I</i>
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        style={editor.isActive('strike') ? buttonStyled.active : buttonStyled.normal}
      >
        <span style={{textDecoration: 'line-through'}}>strike</span>
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        style={editor.isActive('code') ? buttonStyled.active : buttonStyled.normal}
      >
        code
      </button>
      <button
        type='button' 
        onClick={() => editor.chain().focus().setParagraph().run()}
        style={editor.isActive('paragraph') ? buttonStyled.active : buttonStyled.normal}
      >
        paragraph
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        style={editor.isActive('heading', { level: 1 }) ? buttonStyled.active : buttonStyled.normal}
      >
        H1
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        style={editor.isActive('heading', { level: 2 }) ? buttonStyled.active : buttonStyled.normal}
      >
        H2
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        style={editor.isActive('heading', { level: 3 }) ? buttonStyled.active : buttonStyled.normal}
      >
        H3
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        style={editor.isActive('heading', { level: 4 }) ? buttonStyled.active : buttonStyled.normal}
      >
        H4
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
        style={editor.isActive('italic') ? buttonStyled.active : buttonStyled.normal}
      >
        H5
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        style={editor.isActive('heading', { level: 6 }) ? buttonStyled.active : buttonStyled.normal}
      >
        H6
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        style={editor.isActive('bulletList') ? buttonStyled.active : buttonStyled.normal}
      >
        bullet list
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        style={editor.isActive('orderedList') ? buttonStyled.active : buttonStyled.normal}
      >
        ordered list
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        style={editor.isActive('blockquote') ? buttonStyled.active : buttonStyled.normal}
      >
        blockquote
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        style={ buttonStyled.normal}
      >
        undo
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        style={ buttonStyled.normal}

      >
        redo
      </button>
    </>
  );
};

export default EditorMenuBar;
