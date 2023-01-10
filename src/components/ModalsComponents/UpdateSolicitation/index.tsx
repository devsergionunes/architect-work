/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { api } from "../../../services/api";
import { ArchitectObjectTypes } from "../../../store/ducks/Architects/types";
import { SolicitationObjectTypes } from "../../../store/ducks/Solicitations/types";
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

interface IModalUpdateSolicitation {
  isOpen: boolean;
  onClose: () => void;
  solicitation: SolicitationObjectTypes;
  getListSolicitations: () => Promise<void>;
}

type FormDataUpdateSolicitation = {
  dtInitial: string;
  description: string;
};

export function ModalUpdateSolicitation({
  isOpen,
  onClose,
  solicitation,
  getListSolicitations,
}: IModalUpdateSolicitation) {
  const [architect, setArchitect] = useState<ArchitectObjectTypes>(
    {} as ArchitectObjectTypes
  );
  const { handleSubmit, control, reset } =
    useForm<FormDataUpdateSolicitation>();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormDataUpdateSolicitation> = async (body) => {
    try {
      dispatch(setLoading(true));
      const { description, dtInitial } = body;
      await api.put(`solicitation/${solicitation.id}`, {
        description,
        dtInitial,
      });

      dispatch(
        setToastMessage({
          type: "success",
          message: "Solicitação atualizada com sucesso",
        })
      );
      onClose();
      getListSolicitations();
    } catch (err: any) {
      const error = err.response.data;
      dispatch(setToastMessage({ type: "error", message: error.message }));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const getArchitect = async () => {
    try {
      dispatch(setLoading(true));
      const { data } = await api.get(`architect/${solicitation.architect.id}`);
      setArchitect(data);
    } catch (err: any) {
      const error = err.response.data;
      dispatch(setToastMessage({ type: "error", message: error.message }));
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    reset({ ...solicitation });
    if (solicitation.id) getArchitect();
  }, [isOpen]);

  return (
    <Modal title="Atualiza Solictação" isOpen={isOpen} onClose={onClose}>
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
                <ButtonPrimary type="submit">Atualizar</ButtonPrimary>
              </div>
            </Grid>
          </Grid>
        </form>
      </S.ModalBody>
    </Modal>
  );
}
