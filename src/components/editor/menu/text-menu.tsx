import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Editor, useEditorState } from '@tiptap/react';
import { useCallback } from 'react';
import { MemoAlignPicker } from './align-picker';
import { MemoColorPicker } from './color-picker';
import { MemoContentTypePicker } from './content-type-picker';
import { Divider } from './divider';
import { Icon } from './icon';
import { MemoImageUploader } from './image-uploader';
import { MemoLinkEditor } from './link-editor';
import { ToggleButton } from './toggle-button';

export const TextMenu = ({ editor }: { editor: Editor }) => {
  const states: {
    currentColor: string;
    currentHighlight: string;
    isBold: boolean;
    isItalic: boolean;
    isStrike: boolean;
    isUnderline: boolean;
    isCode: boolean;
    isCodeBlock: boolean;
    isSuperscript: boolean;
    isSubscript: boolean;
  } = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        currentColor: ctx.editor.getAttributes('textStyle')?.color || '#000000',
        currentHighlight:
          ctx.editor.getAttributes('highlight')?.color || undefined,
        isBold: ctx.editor.isActive('bold'),
        isItalic: ctx.editor.isActive('italic'),
        isStrike: ctx.editor.isActive('strike'),
        isUnderline: ctx.editor.isActive('underline'),
        isCode: ctx.editor.isActive('code'),
        isCodeBlock: ctx.editor.isActive('codeBlock'),
        isSuperscript: ctx.editor.isActive('superscript'),
        isSubscript: ctx.editor.isActive('subscript'),
      };
    },
  });

  const onResetColor = useCallback(() => {
    editor.chain().unsetColor().run();
  }, [editor]);

  const onChangeColor = useCallback(
    (color: string) => {
      editor.chain().setColor(color).run();
    },
    [editor]
  );

  const onChangeHighlight = useCallback(
    (color: string) => {
      editor.chain().setHighlight({ color }).run();
    },
    [editor]
  );

  const onResetHighlight = useCallback(() => {
    editor.chain().unsetHighlight().run();
  }, [editor]);

  const onEditLink = useCallback(
    (url: string, openInNewTab: boolean) => {
      editor
        .chain()
        .focus()
        .setLink({ href: url, target: openInNewTab ? '_blank' : '' })
        .run();
    },
    [editor]
  );

  const onUploadImage = useCallback(
    (url: string) => {
      editor.chain().focus().setImage({ src: url }).run();
    },
    [editor]
  );

  return (
    <div className="flex flex-row items-center gap-1 rounded-md border bg-white p-1 dark:bg-zinc-800">
      <MemoContentTypePicker editor={editor} />
      <Divider />
      <MemoAlignPicker editor={editor} />
      <Divider />
      <ToggleButton
        onPressedChange={(pressed) => {
          if (pressed) {
            editor.chain().focus().toggleBold().run();
          } else {
            editor.chain().focus().unsetBold().run();
          }
        }}
        pressed={states.isBold}
        tooltip="加粗"
      >
        <Icon name="Bold" />
      </ToggleButton>
      <ToggleButton
        onPressedChange={(pressed) => {
          if (pressed) {
            editor.chain().focus().toggleItalic().run();
          } else {
            editor.chain().focus().unsetItalic().run();
          }
        }}
        pressed={states.isItalic}
        tooltip="斜体"
      >
        <Icon name="Italic" />
      </ToggleButton>
      <ToggleButton
        onPressedChange={(pressed) => {
          if (pressed) {
            editor.chain().focus().toggleStrike().run();
          } else {
            editor.chain().focus().unsetStrike().run();
          }
        }}
        pressed={states.isStrike}
        tooltip="删除线"
      >
        <Icon name="Strikethrough" />
      </ToggleButton>
      <ToggleButton
        onPressedChange={(pressed) => {
          if (pressed) {
            editor.chain().focus().toggleUnderline().run();
          } else {
            editor.chain().focus().unsetUnderline().run();
          }
        }}
        pressed={states.isUnderline}
        tooltip="下划线"
      >
        <Icon name="Underline" />
      </ToggleButton>
      <ToggleButton
        onPressedChange={(pressed) => {
          if (pressed) {
            editor.chain().focus().toggleCode().run();
          } else {
            editor.chain().focus().unsetCode().run();
          }
        }}
        pressed={states.isCode}
        tooltip="内联代码"
      >
        <Icon name="Code" />
      </ToggleButton>
      <ToggleButton
        onPressedChange={() => {
          editor.chain().focus().toggleCodeBlock().run();
        }}
        pressed={states.isCodeBlock}
        tooltip="代码块"
      >
        <Icon name="FileCode" />
      </ToggleButton>
      <ToggleButton
        onPressedChange={() => {
          editor.chain().focus().toggleSuperscript().run();
        }}
        pressed={states.isSuperscript}
        tooltip="上标"
      >
        <Icon name="Superscript" />
      </ToggleButton>
      <ToggleButton
        onPressedChange={() => {
          editor.chain().focus().toggleSubscript().run();
        }}
        pressed={states.isSubscript}
        tooltip="下标"
      >
        <Icon name="Subscript" />
      </ToggleButton>
      <MemoLinkEditor onConfirm={onEditLink} />
      <Divider />
      <Popover>
        <PopoverTrigger asChild>
          <div>
            <ToggleButton
              pressed={states.currentColor !== '#000000'}
              tooltip="文字颜色"
            >
              <Icon name="Palette" />
            </ToggleButton>
          </div>
        </PopoverTrigger>
        <PopoverContent
          asChild
          align="center"
          sideOffset={8}
          className="w-[200px_+_0.5rem] bg-white p-1 dark:bg-zinc-800"
        >
          <div>
            <MemoColorPicker
              color={states.currentColor}
              onChange={onChangeColor}
              onReset={onResetColor}
            />
          </div>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <div>
            <ToggleButton
              pressed={states.currentHighlight !== undefined}
              tooltip="文字背景"
            >
              <Icon name="Highlighter" />
            </ToggleButton>
          </div>
        </PopoverTrigger>
        <PopoverContent
          asChild
          align="center"
          sideOffset={8}
          className="w-[200px_+_0.5rem] bg-white p-1 dark:bg-zinc-800"
        >
          <div>
            <MemoColorPicker
              color={states.currentHighlight}
              onChange={onChangeHighlight}
              onReset={onResetHighlight}
            />
          </div>
        </PopoverContent>
      </Popover>
      <Divider />
      <MemoImageUploader onConfirm={onUploadImage} />
      <Divider />
      <ToggleButton
        onPressedChange={() => {
          editor.chain().focus().clearNodes().unsetAllMarks().run();
        }}
        pressed={false}
        tooltip="清除格式"
      >
        <Icon name="Eraser" />
      </ToggleButton>
    </div>
  );
};
