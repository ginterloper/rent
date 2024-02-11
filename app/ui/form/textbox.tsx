import React from 'react';

interface Props {
  name: string;
	textType?: string | 'text';
  placeholder?: string;
  errors: string[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<Props> = ({ name, textType, placeholder, errors, onChange }) => {
  return (
    <React.Fragment>
			<div className='w-full p-2'>
				<input
					name={name}
					id={name}
					type={textType}
					placeholder={placeholder}
					aria-describedby="error"
					onChange={onChange}
					className='w-full p-2 pl-3 rounded-md shadow-md'
				/>
				<div id="error" aria-live="polite" aria-atomic="true" className='ml-3'>
					{errors.map((error) => (
						<p className="mt-2 text-sm text-red-500" key={error}>
							{error}
						</p>
					))}
				</div>
			</div>
    </React.Fragment>
  );
};

export default TextField;
