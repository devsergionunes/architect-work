/* eslint-disable @typescript-eslint/no-explicit-any */
import DeleteIcon from "@mui/icons-material/Delete";
import { Grid, IconButton, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";

import { ButtonPrimary, ButtonSecondary } from "../../components/base/Buttons";
import * as T from "../../components/base/Text";
import { MenuLeft } from "../../components/Menu";
import { ModalUpdateSolicitation } from "../../components/ModalsComponents/UpdateSolicitation";
import { api } from "../../services/api";
import { setSolicitationListAction } from "../../store/ducks/Solicitations/actions";
import { SolicitationObjectTypes } from "../../store/ducks/Solicitations/types";
import { setToastMessage } from "../../store/ducks/Utils/actions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { serializeBrDate, statuSolicitation } from "../../Utils/utils";
import * as S from "./styles";

export function SolicitationsPage() {
  const [solicitation, setSolicitation] = useState(
    {} as SolicitationObjectTypes
  );
  const [modalUpdateSolicitation, setModalUpdateSolicitation] = useState(false);
  const onCloseModalUpdateSolicitation = () =>
    setModalUpdateSolicitation(false);

  const dispatch = useAppDispatch();
  const {
    Solicitations: { solicitationList },
    User: { user },
  } = useAppSelector((state) => state);

  const getListSolicitations = async () => {
    try {
      const { data } = await api.get("solicitation");
      dispatch(setSolicitationListAction(data));
    } catch (err: any) {
      const error = err.response.data;
      dispatch(setToastMessage({ type: "error", message: error.message }));
    }
  };

  const handleDeleteSolicitation = async (id: string) => {
    try {
      await api.delete(`solicitation/${id}`);
      dispatch(
        setToastMessage({
          type: "success",
          message: "Solicitação excluída com sucesso",
        })
      );
      getListSolicitations();

      return;
    } catch (err: any) {
      const error = err.response.data;
      dispatch(setToastMessage({ type: "error", message: error.message }));
    }
  };

  const hendleUpdateStatusSolicitation = async (
    idSolicitation: string,
    status: number
  ) => {
    try {
      await api.put(`solicitation/${idSolicitation}`, {
        status,
      });
      dispatch(
        setToastMessage({
          type: "success",
          message:
            status === 1
              ? "Solicitação aceita com sucesso"
              : "Solicitação rejeitada com sucesso",
        })
      );
      getListSolicitations();
    } catch (err: any) {
      const error = err.response.data;
      dispatch(setToastMessage({ type: "error", message: error.message }));
    }
  };

  useEffect(() => {
    getListSolicitations();
  }, []);

  return (
    <S.Container>
      <MenuLeft active="Solicitações" />
      <S.Content>
        <T.H2>
          Solicitações <T.Span>({solicitationList.length})</T.Span>
        </T.H2>
        <S.ContainerList>
          {solicitationList.length
            ? solicitationList.map((sol) => (
                <S.Item key={sol.id}>
                  <Grid container spacing={1}>
                    <Grid item xs={11} sm={11}>
                      <T.H3>{sol.user.name}</T.H3>
                    </Grid>
                    <Grid
                      item
                      xs={1}
                      sm={1}
                      display="flex"
                      alignItems="flex-end"
                      justifyContent="flex-end"
                    >
                      <Tooltip title="Excluir">
                        <IconButton
                          onClick={() => handleDeleteSolicitation(sol.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <T.Paragraph>
                        {sol.dtInitial && serializeBrDate(sol.dtInitial)}
                      </T.Paragraph>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <S.BoxStatus status={sol.status}>
                        <T.Span>{statuSolicitation(sol.status)}</T.Span>
                      </S.BoxStatus>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <T.Paragraph>{sol.description}</T.Paragraph>
                    </Grid>
                    {sol.status === 1 && user.typeProfile === 1 && (
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        display="flex"
                        alignItems="flex-end"
                        justifyContent="flex-end"
                      >
                        <ButtonPrimary
                          onClick={() => {
                            setSolicitation(sol);
                            setModalUpdateSolicitation(true);
                          }}
                        >
                          Atualiza Solicitação
                        </ButtonPrimary>
                      </Grid>
                    )}
                    {sol.status === 1 && user.typeProfile === 2 && (
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        display="flex"
                        alignItems="flex-end"
                        justifyContent="flex-end"
                        gap={2}
                      >
                        <ButtonSecondary
                          onClick={() =>
                            hendleUpdateStatusSolicitation(sol.id, 3)
                          }
                        >
                          Recusar
                        </ButtonSecondary>
                        <ButtonPrimary
                          onClick={() =>
                            hendleUpdateStatusSolicitation(sol.id, 2)
                          }
                        >
                          Aceitar
                        </ButtonPrimary>
                      </Grid>
                    )}
                  </Grid>
                </S.Item>
              ))
            : null}
        </S.ContainerList>
      </S.Content>
      <ModalUpdateSolicitation
        isOpen={modalUpdateSolicitation}
        onClose={onCloseModalUpdateSolicitation}
        solicitation={solicitation}
        getListSolicitations={getListSolicitations}
      />
    </S.Container>
  );
}
