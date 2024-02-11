import React, { useState } from 'react';
import ComboboxField, { Option } from '@/app/ui/form/combobox';
import Select from '@/app/ui/form/select';
import Textbox from '@/app/ui/form/textbox';
import SubmitButton from '@/app/ui/form/button';
import { createPost } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export interface Element {
  id: number;
  type: string;
  label: string;
  name?: string | '';
  value?: string | '';
  textType?: string | 'text';
  options?: { id: number; label: string }[] | '';
  placeholder?: string | '';
  necessary?: boolean | false;
}

interface Props {
  elements: Element[];
}

export default function Form({ elements }: Props) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createPost, initialState);

  return (
    <form action={dispatch} className="w-full flex flex-col items-center justify-center sm:w-3/5 md:w-1/2">
      {elements.map((element: Element) => {
        if (element.type === 'select') {
          return (
            <Select
              key={element.id}
              name={element.name}
              label={element.label}
              options={element.options || []}
              errors={state.errors?.[element.name] || []}
            />
          );
        } else if (element.type === 'text') {
          return (
            <Textbox
              key={element.id}
              name={element.name}
							textType={element.textType}
              label={element.label}
              placeholder={element.placeholder || ''}
              errors={state.errors?.[element.name] || []}
            />
          );
        }
        return null;
      })}

      <SubmitButton label="Создать" />
    </form>
  );
}
