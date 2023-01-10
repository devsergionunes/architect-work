/* eslint-disable @typescript-eslint/no-explicit-any */
import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import * as B from "../../components/base/Buttons";
import * as T from "../../components/base/Text";
import { InputPassword } from "../../components/Inputs/InputPassword";
import { InputBase } from "../../components/Inputs/InputText";
import { api } from "../../services/api";
import { setLoading, setToastMessage } from "../../store/ducks/Utils/actions";
import { useAppDispatch } from "../../store/hooks";
import * as S from "./styles";

type FormDataRegister = {
  name: string;
  email: string;
  password: string;
  passwordReapeat: string;
  description?: string;
  type?: string;
};

export function RegisterPage() {
  const [isArchitect, setIsArchitect] = useState(false);
  const { handleSubmit, control } = useForm<FormDataRegister>();

  const navegate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormDataRegister> = async (formData) => {
    try {
      const { password, passwordReapeat, email, name, description, type } =
        formData;
      if (password !== passwordReapeat) {
        dispatch(
          setToastMessage({ type: "error", message: "Senhas diferentes" })
        );
        return;
      }
      dispatch(setLoading(true));
      const body = {
        name,
        email,
        password,
        typeProfile: isArchitect ? 2 : 1,
        ...(isArchitect && { description, type }),
      };

      const response = await api.post("user", body);
      if (response.status === 201) {
        dispatch(
          setToastMessage({
            type: "success",
            message: "Conta criada com sucesso!",
          })
        );
        navegate("/login");
      } else {
        dispatch(
          setToastMessage({
            type: "error",
            message: "Erro ao criar conta",
          })
        );
      }
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
        <T.H3 textAlign="center">Criar Conta</T.H3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          style={{ width: "100%" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <InputBase
                control={control}
                id="name"
                label="Nome"
                name="name"
                type="text"
                required
              />
            </Grid>
            <Grid item xs={6}>
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
            <Grid item xs={6}>
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
            <Grid item xs={6}>
              <InputPassword
                control={control}
                id="passwordReapeat"
                label="Repita a senha"
                name="passwordReapeat"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="typeProfile"
                      value={isArchitect}
                      onChange={(e) => {
                        setIsArchitect(e.target.checked);
                      }}
                    />
                  }
                  label="Criar conta como arquiteto"
                  color="#555"
                />
              </FormGroup>
            </Grid>
            {isArchitect && (
              <>
                <Grid item xs={12}>
                  <InputBase
                    control={control}
                    id="description"
                    label="Descrição"
                    name="description"
                    type="text"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputBase
                    control={control}
                    id="type"
                    label="Tipo de arquiteto"
                    name="type"
                    type="text"
                    required
                  />
                </Grid>
              </>
            )}
            <Grid item xs={6}>
              <B.ButtonSecondary
                style={{ width: "100%" }}
                onClick={() => navegate("/login")}
              >
                Entrar
              </B.ButtonSecondary>
            </Grid>
            <Grid item xs={6}>
              <B.ButtonPrimary type="submit" style={{ width: "100%" }}>
                Criar conta
              </B.ButtonPrimary>
            </Grid>
          </Grid>
        </form>
      </S.Content>
    </S.conteiner>
  );
}
