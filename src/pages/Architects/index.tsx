/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

import { ButtonPrimary } from "../../components/base/Buttons";
import * as T from "../../components/base/Text";
import { MenuLeft } from "../../components/Menu";
import { ModalSendSolicitation } from "../../components/ModalsComponents/SendSolicitation";
import { api } from "../../services/api";
import { setArchitectListAction } from "../../store/ducks/Architects/actions";
import { ArchitectObjectTypes } from "../../store/ducks/Architects/types";
import { setToastMessage } from "../../store/ducks/Utils/actions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import * as S from "./styles";

export function ArchitectsPage() {
  const [architect, setArchitect] = useState({} as ArchitectObjectTypes);
  const [modalSendSolicitation, setModalSendSolicitation] = useState(false);
  const onCloseModalSendSolicitation = () => setModalSendSolicitation(false);

  const dispatch = useAppDispatch();
  const { architectList } = useAppSelector(({ Architects }) => Architects);

  const getListArchitects = async () => {
    try {
      const { data } = await api.get("architect");
      dispatch(setArchitectListAction(data));
    } catch (err: any) {
      const error = err.response.data;
      dispatch(setToastMessage({ type: "error", message: error.message }));
    }
  };

  useEffect(() => {
    if (!architectList.length) getListArchitects();
  }, []);

  return (
    <S.Container>
      <MenuLeft active="Arquitetos" />
      <S.Content>
        <T.H2>
          Escolha um arquiteto <br /> e envie uma solicitação com seu projeto
        </T.H2>
        <S.ContainerList>
          {architectList.length
            ? architectList.map((architect) => (
                <S.Item key={architect.id}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>
                      <T.H3>{architect.user.name}</T.H3>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <T.Paragraph>{architect.user.email}</T.Paragraph>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <T.Paragraph>{architect.type}</T.Paragraph>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <T.Paragraph>{architect.description}</T.Paragraph>
                    </Grid>
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
                          setArchitect(architect);
                          setModalSendSolicitation(true);
                        }}
                      >
                        Enviar solicitação
                      </ButtonPrimary>
                    </Grid>
                  </Grid>
                </S.Item>
              ))
            : null}
        </S.ContainerList>
      </S.Content>
      <ModalSendSolicitation
        isOpen={modalSendSolicitation}
        onClose={onCloseModalSendSolicitation}
        architect={architect}
      />
    </S.Container>
  );
}
