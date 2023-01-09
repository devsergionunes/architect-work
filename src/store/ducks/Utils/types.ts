export enum UtilsTypes {
  SET_LOADING = "@loading/SET_LOADING",
  SET_TOAST = "@toast/SET_TOAST",
  DEVICE_TYPE = "@device/DEVICE_TYPE",
}

export type ToasMessageTypes = {
  type: "info" | "success" | "warning" | "error" | "default";
  message: string;
  position?:
    | "top-right"
    | "top-center"
    | "top-left"
    | "bottom-right"
    | "bottom-center"
    | "bottom-left";
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  progress?: number;
  autoClose?: number;
};

export type DeviceTypes = "desktop" | "mobile";

export type UtilsState = {
  readonly loading: boolean;
  readonly toast: ToasMessageTypes;
  readonly device: DeviceTypes;
};
