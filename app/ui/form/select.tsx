import React from 'react';

interface Option {
	id: number;
	label: string;
}

interface Props {
	name: string | '';
	placeholder: string | '';
	options: Option[];
	errors: string[];
	onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField: React.FC<Props> = ({ name, placeholder, options, errors, onChange }) => {
	return (
		<React.Fragment>
			<div className='w-full p-2'>
				<select
					name={name}
					id={name}
					defaultValue=""
					aria-describedby="error"
					onChange={onChange}
					className='w-full p-2 rounded-md shadow-md'
				>
					<option value="" disabled>
						{placeholder}
					</option>
					{options.map((option) => (
						<option key={option.id} value={option.id}>
							{option.label}
						</option>
					))}
				</select>
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

export default SelectField;
