import { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputField(props: InputFieldProps) {
  return (
    <input
      className="border-0 h-9 rounded-md outline-none px-4 py-3 mb-3 placeholder-neutral-500/50 text-neutral-400 bg-zinc-800/50"
      {...props}
    />
  );
}
