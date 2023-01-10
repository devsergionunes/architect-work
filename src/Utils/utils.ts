export const statuSolicitation = (status: number) => {
  switch (status) {
    case 1:
      return "Enviada";
    case 2:
      return "Aceita";
    case 3:
      return "Recusada";
    default:
      return "";
  }
};

export const serializeBrDate = (date: string) => {
  const newDate = new Date(date);
  return Intl.DateTimeFormat("pt-BR").format(newDate);
};
