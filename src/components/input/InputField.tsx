import { ChangeEventHandler, HTMLInputTypeAttribute, ReactNode } from 'react';

interface InputProps {
  id?: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  icon?: ReactNode; 
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

const InputField = ({
  id,
  type,
  placeholder,
  icon,
  value,
  onChange,
  className = '',
}: InputProps) => {
  return (
    <div className={`flex  items-center gap-4 bg-white border border-gray-300  overflow-hidden ${className}`}>
      {icon && <span className="pl-2">{icon}</span>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="p-2 flex-grow focus:outline-none"
      />
    </div>
  );
};

export default InputField;
