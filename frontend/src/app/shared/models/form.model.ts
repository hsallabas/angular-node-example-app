export interface ICustomControl {
  id: string;
  type?: string;
  label?: string;
  value?: string;
  errors?: ICustomErrors;
  pattern?: string;
  minLength?: number;
  validators?: string[];
}

export interface ICustomErrors {
  min?: string;
  max?: string;
  required?: string;
  requiredTrue?: string;
  email?: string;
  minLength?: string;
  maxLength?: string;
  pattern?: string;
  nullValidator?: string;
  compose?: string;
  composeAsync?: string;
}