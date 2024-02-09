import React, { useState } from 'react';
import ComboboxField, { Option } from '@/app/ui/form/combo-box';
import TextField from '@/app/ui/form/textbox';
import SubmitButton from '@/app/ui/form/button';
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
  const [formError, setFormError] = useState(true); // Начальное значение ошибки - форма не заполнена

  const handleChange = (id: number, value: string) => {
    setFormData({
      ...formData,
      [id]: value
    });

    // Проверяем, есть ли хотя бы одно заполненное поле
    const isFormFilled = Object.values({ ...formData, [id]: value }).some(value => value.trim() !== '');
    setFormError(!isFormFilled);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formError) {
      saveFormDataAsJSON(formData);
      setFormData({});
    }
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
							onChange={handleChange}
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
      <SubmitButton label="Создать" disabled={formError} />
			{formError && <div className="text-sm text-red-500">Пожалуйста, заполните все обязательные поля</div>}
    </form>
  );
}

export default DynamicForm;
