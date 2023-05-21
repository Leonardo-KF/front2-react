import { FormEvent } from "react";
import { Button, ButtonType } from "../components/button/button";
import { Form, InputProps } from "../components/form/form";
import { useLoading } from "../hooks/useLoading";
import { Box } from "./style";
import { useThemeStore } from "../store/themeStore";

export function App() {
  const { changeLoading, loading } = useLoading();
  const { theme } = useThemeStore();

  function submitEvent(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(loading);
    changeLoading(true);

    const payload = {
      nome: event.currentTarget.nome.value,
      email: event.currentTarget.email.value,
    };
    setTimeout(() => {
      console.log(loading);
      changeLoading(false);
    }, 1000);
  }

  const inputs: InputProps[] = [
    {
      label: "Nome",
      name: "nome",
      type: "text",
    },
    {
      label: "Email",
      name: "email",
      type: "text",
    },
  ];

  return (
    <Box isLightMode={theme === "light" ? true : false} textColor="red">
      <h2>Hello World</h2>
      <h3>Change Theme</h3>

      <Form submitName={"enviar"} inputs={inputs} submit={submitEvent} />
      <Button
        color="green"
        name="teste"
        onSubmit={() => console.log("teste")}
        type={ButtonType.MEDIUM}
      />
    </Box>
  );
}
