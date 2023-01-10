/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { api } from "../../../services/api";
import { ArchitectObjectTypes } from "../../../store/ducks/Architects/types";
import {
  setLoading,
  setToastMessage,
} from "../../../store/ducks/Utils/actions";
import { useAppDispatch } from "../../../store/hooks";
import { ButtonPrimary } from "../../base/Buttons";
import * as T from "../../base/Text";
import { InputDate } from "../../Inputs/InputDate";
import { InputBase } from "../../Inputs/InputText";
import Modal from "../index";
import * as S from "./styles";

interface IModalSendSolicitation {
  isOpen: boolean;
  onClose: () => void;
  architect: ArchitectObjectTypes;
}

type FormDataSendSolicitation = {
  dtInitial: string;
  description: string;
};

export function ModalSendSolicitation({
  isOpen,
  onClose,
  architect,
}: IModalSendSolicitation) {
  const { handleSubmit, control, reset } = useForm<FormDataSendSolicitation>();

  const navegate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormDataSendSolicitation> = async (body) => {
    try {
      dispatch(setLoading(true));
      const { description, dtInitial } = body;
      await api.post("solicitation", {
        description,
        dtInitial,
        idArchitect: architect.id,
      });

      dispatch(
        setToastMessage({
          type: "success",
          message: "Solicitação criada com sucesso",
        })
      );
      navegate("/solicitations");
    } catch (err: any) {
      const error = err.response.data;
      dispatch(setToastMessage({ type: "error", message: error.message }));
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    reset();
  }, [isOpen]);

  return (
    <Modal title="Enviar Solictação" isOpen={isOpen} onClose={onClose}>
      <S.ModalBody>
        <T.H3>{architect.user?.name}</T.H3>
        <T.Paragraph margin="1rem 0">
          Descreva com detalhes o que você precisa e aguarde a resposta do seu
          arquiteto.
        </T.Paragraph>
        <T.Paragraph margin="1rem 0">
          <strong>Obs:</strong> A data inicial é a data que você deseja começar
          a obra. Caso não tenha uma data definida, coloque a data atual.
        </T.Paragraph>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          style={{ width: "100%" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputBase
                control={control}
                id="description"
                label="Descrição da solicitação"
                name="description"
                type="text"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <InputDate
                control={control}
                id="dtInitial"
                label="Data Inicial"
                name="dtInitial"
                required
              />
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="flex-end">
              <div>
                <ButtonPrimary type="submit">Enviar Solicitação</ButtonPrimary>
              </div>
            </Grid>
          </Grid>
        </form>
      </S.ModalBody>
    </Modal>
  );
}
