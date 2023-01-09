/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import * as B from "../../components/base/Buttons";
import * as T from "../../components/base/Text";
import { InputPassword } from "../../components/Inputs/InputPassword";
import { InputBase } from "../../components/Inputs/InputText";
import { api } from "../../services/api";
import { login } from "../../services/auth";
import { setLoading, setToastMessage } from "../../store/ducks/Utils/actions";
import { useAppDispatch } from "../../store/hooks";
import * as S from "./styles";

type FormDataLogin = {
  email: string;
  password: string;
};

export function LoginPage() {
  const { handleSubmit, control } = useForm<FormDataLogin>();

  const navegate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormDataLogin> = async (body) => {
    try {
      dispatch(setLoading(true));
      const { email, password } = body;
      const { data } = await api.post("auth/login", { email, password });
      login(data.access_token);
      navegate("/");
    } catch (err: any) {
      const error = err.response.data;
      dispatch(setToastMessage({ type: "error", message: error.message }));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <S.conteiner>
      <S.Content>
        <T.H3 textAlign="center">Acesse a Plataforma</T.H3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          style={{ width: "100%" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputBase
                control={control}
                id="email"
                label="Email"
                name="email"
                type="email"
                required
                rules={{
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email inválido",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <InputPassword
                control={control}
                id="password"
                label="Senha"
                name="password"
                required
                rules={{
                  minLength: {
                    value: 6,
                    message: "A senha deve ter no mínimo 6 caracteres",
                  },
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              style={{ display: "flex" }}
              justifyContent="flex-end"
            >
              <S.LinkForgotPassword
                onClick={() => navegate("/recuperar-senha")}
              >
                Esqueceu a senha?
              </S.LinkForgotPassword>
            </Grid>
            <Grid item xs={12}>
              <B.ButtonPrimary type="submit" style={{ width: "100%" }}>
                Entrar
              </B.ButtonPrimary>
            </Grid>
          </Grid>
        </form>
        <Grid item xs={12}>
          <B.ButtonSecondary
            style={{ width: "100%" }}
            onClick={() => navegate("/regiter")}
          >
            Criar conta
          </B.ButtonSecondary>
        </Grid>
      </S.Content>
    </S.conteiner>
  );
}
