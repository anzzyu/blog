import { Command } from 'lucide-react';

export function SearchButton() {
  return (
    <div className="rounded p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700">
      <Command size={20} strokeWidth={1.5} />
    </div>
  );
}
