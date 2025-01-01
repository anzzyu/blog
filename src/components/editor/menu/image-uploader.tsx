import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { memo, useState } from 'react';
import { Icon } from './icon';
import { ToggleButton } from './toggle-button';

export const Imageploader = ({
  onConfirm,
}: {
  onConfirm?: (url: string) => void;
}) => {
  const [url, setUrl] = useState('');

  const handleConfirm = () => {
    onConfirm?.(url);
    setUrl('');
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <ToggleButton pressed={false}>
          <Icon name="ImageUp" />
        </ToggleButton>
      </PopoverTrigger>
      <PopoverContent asChild sideOffset={8}>
        <div className="flex flex-col gap-2">
          <Input
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button
            className="mt-2"
            variant="outline"
            size="sm"
            onClick={handleConfirm}
          >
            确定
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export const MemoImageUploader = memo(Imageploader);
