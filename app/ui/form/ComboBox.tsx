import React, { Fragment, useState, useEffect } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

interface Option {
  id: number;
  label: string;
}

interface Props {
  id: number;
  label: string;
  options: Option[];
  value: Option | undefined;
  onChange: (id: number, selectedOption: Option) => void;
}

function ComboboxField({ id, label, options, value, onChange }: Props) {
  const [query, setQuery] = useState('');
  const [selectedValue, setSelectedValue] = useState<Option | undefined>(value);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

	const filteredOptions = options.filter(option =>
		option.label.toLowerCase().includes((query ? query.trim().toLowerCase() : ''))
	);

  return (
    <div className="relative my-6">
      <label className='text-xs ml-3'>{label}:</label>
      <Combobox
        value={selectedValue}
        onChange={(selectedOption) => {
          setSelectedValue(selectedOption);
          onChange(id, selectedOption);
        }}
      >
        <div className="mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none sm:text-sm">
            <Combobox.Input
              className="w-full h-9 rounded-lg border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-1 focus:ring-inset focus:ring-blue-500"
              onChange={(event) => setQuery(event.target.value)}
              value={query}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Combobox.Options className="absolute z-10 text-xs mt-1 max-h-60 w-full overflow-auto rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm bottom-auto">
              {filteredOptions.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredOptions.map((option) => (
                  <Combobox.Option
                    key={option.id}
                    className={({ active }) =>
                      `relative cursor-default rounded select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-blue-600 text-white' : 'text-gray-900'
                      }`
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {option.label}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

export default ComboboxField;
