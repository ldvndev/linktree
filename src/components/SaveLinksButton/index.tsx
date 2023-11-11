import { ButtonHTMLAttributes } from 'react';
import { FaSave } from 'react-icons/fa';

interface SaveLinksButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function SaveLinksButton(props: SaveLinksButtonProps) {
  return (
    <button
      {...props}
      className="flex items-center justify-center border-0 h-9 rounded-md outline-none text-gray-300 px-2 mt-2 text-base bg-purple-900  hover:bg-purple-950"
    >
      <span className="mr-2">Save</span> <FaSave />
    </button>
  );
}
