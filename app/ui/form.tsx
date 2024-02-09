import React, { useState } from 'react';
import ComboboxField, { Option } from '@/app/ui/form/combo-box';
import TextField from '@/app/ui/form/TextBox';
import SubmitButton from '@/app/ui/form/Button';
import { saveFormDataAsJSON } from '@/app/lib/data';

interface Element {
  id: number;
  type: string;
  label: string;
  options?: Option[];
  placeholder?: string;
	necessary?: boolean;
}

interface DynamicFormProps {
  elements: Element[];
}

function DynamicForm({ elements }: DynamicFormProps) {
  const [formData, setFormData] = useState<{ [key: number]: string }>({});

  const handleChange = (id: number, value: string) => {
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveFormDataAsJSON(formData);
    setFormData({});
  };

  return (
    <form onSubmit={handleSubmit} className='w-5667px sm:w-full'>
      {elements.map((element) => {
        if (element.type === 'select') {
          return (
            <ComboboxField
              key={element.id}
              label={element.label}
              options={element.options || []}
              necessary={element.necessary || false}
            />
          );
        } else if (element.type === 'text') {
          return (
            <TextField
              key={element.id}
              id={element.id}
              label={element.label}
              placeholder={element.placeholder || ''}
              value={formData[element.id] || ''}
              onChange={handleChange}
            />
          );
        }
        return null;
      })}
      <SubmitButton label="Применить" />
    </form>
  );
}

export default DynamicForm;
