import "./styles.css";

import "react-toastify/dist/ReactToastify.min.css";

import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

import { setToastMessage } from "../../store/ducks/Utils/actions";
import { useAppSelector, useAppDispatch } from "../../store/hooks";

export function ToastContainerCustom() {
  const { message, type, ...props } = useAppSelector(
    ({ Utils }) => Utils.toast
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (message) {
      toast(<div>{message}</div>, {
        type,
        autoClose: 3000,
        ...props,
      });
      dispatch(
        setToastMessage({
          message: "",
          type: "info",
        })
      );
    }
  }, [message, type]);

  return <ToastContainer autoClose={3000} pauseOnHover />;
}
