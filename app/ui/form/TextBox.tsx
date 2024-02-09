'use client';
import React from 'react';

interface Props {
  id: number;
  label: string;
  value: string;
  placeholder: string;
  onChange: (id: number, value: string) => void;
}

function TextField({ id, label, placeholder, value, onChange }: Props) {
  return (
    <div className='my-6'>
      <label className='text-xs ml-3'>{label}:</label>
      <input
        type="text"
        value={value || ''}
				placeholder={placeholder}
        onChange={(e) => onChange(id, e.target.value)}
				className='block h-9 text-sm w-full rounded-lg border-none p-1.5 pl-3 text-gray-900 shadow-md placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-500'
      />
    </div>
  );
}

export default TextField;
