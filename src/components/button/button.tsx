import { useLoading } from "../../hooks/useLoading";
import "./button.css";

export enum ButtonType {
  LARGE = "large",
  MEDIUM = "medium",
  SMALL = "small",
}

export interface ButtonProps {
  name: string;
  color: string;
  type: ButtonType;
  onSubmit: () => void;
}

export function Button({ name, color, type, onSubmit }: ButtonProps) {
  const { changeLoading } = useLoading();

  const width =
    type === ButtonType.LARGE
      ? "200px"
      : type === ButtonType.MEDIUM
      ? "150px"
      : "100px";
  const height =
    type === ButtonType.LARGE
      ? "80px"
      : type === ButtonType.MEDIUM
      ? "60px"
      : "30px";
  return (
    <button
      style={{
        backgroundColor: color,
        width: width,
        height: height,
      }}
      onClick={() => {
        changeLoading(true);
        onSubmit();
        setTimeout(() => {
          changeLoading(false);
        }, 1000);
      }}
      className="customButton"
    >
      {name}
    </button>
  );
}
