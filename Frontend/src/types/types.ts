export interface MyContextData {
  hamburgerState: boolean;
  toggleHamburger: () => void;
}

export interface InputData {
  label: string;
  type?: string;
  value: string | number;
  style: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
