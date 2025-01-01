'use client';

import '@/app/css/editor.css';

// import Mathematics from '@tiptap-pro/extension-mathematics';
import { Color } from '@tiptap/extension-color';
import FontFamily from '@tiptap/extension-font-family';
import Highlight from '@tiptap/extension-highlight';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { TooltipProvider } from '../ui/tooltip';
import { TextMenu } from './menu';
import { LinkMenu } from './menu/link-menu';

type TiptapEditorProps = {
  onChange: (content: string) => void;
  initialContent?: string;
};

const TiptapEditor = ({ onChange, initialContent }: TiptapEditorProps) => {
  const editor = useEditor({
    immediatelyRender: false,
    shouldRerenderOnTransaction: false,
    autofocus: true,
    extensions: [
      StarterKit,
      Underline,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: 'https',
      }),
      //   Mathematics.configure({
      //     shouldRender: (state, pos, node) => {
      //       const $pos = state.doc.resolve(pos);
      //       return (
      //         node.type.name === 'text' &&
      //         $pos.parent.type.name !== 'codeBlock' &&
      //         $pos.parent.type.name !== 'heading'
      //       );
      //     },
      //   }),
      Superscript,
      Subscript,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      TextStyle,
      FontFamily,
      Color,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Highlight.configure({
        HTMLAttributes: {
          class: 'rounded-sm',
        },
        multicolor: true,
      }),
      Image,
    ],
    content: initialContent,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <TooltipProvider>
      <div className="flex flex-col gap-5">
        {editor && (
          <>
            <TextMenu editor={editor} />
            <LinkMenu editor={editor} />
          </>
        )}
        <EditorContent editor={editor} />
      </div>
    </TooltipProvider>
  );
};

export default TiptapEditor;
