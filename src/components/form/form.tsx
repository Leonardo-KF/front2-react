import { ChangeEvent, FormEvent } from "react";

export interface InputProps {
  name: string;
  label: string;
  value?: string;
  type: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface FormProps {
  submitName: string;
  inputs: InputProps[];
  submit: (event: FormEvent<HTMLFormElement>) => void;
}
export function Form({ inputs, submit, submitName }: FormProps) {
  return (
    <form onSubmit={submit}>
      {inputs.map((input, index) => {
        return (
          <div key={index}>
            <label htmlFor={input.name}>{input.label}: </label>
            <input
              type={input.type}
              onChange={input.onChange}
              name={input.name}
              value={input.value}
            />
          </div>
        );
      })}
      <button type="submit">{submitName}</button>
    </form>
  );
}
