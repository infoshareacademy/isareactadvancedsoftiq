import { ChangeEvent } from "react";

type Props = {
  setData: (data: { [key: string]: string }) => void;
  name: string;
};

export const Input = ({ name, setData }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({
      [event.target.name]: event.target.value,
    });
  };
  return <input name={name} onChange={handleChange} />;
};
