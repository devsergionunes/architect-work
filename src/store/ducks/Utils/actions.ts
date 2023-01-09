import { action } from "typesafe-actions";

import { ToasMessageTypes, UtilsTypes, DeviceTypes } from "./types";

export const setToastMessage = (data: ToasMessageTypes) =>
  action(UtilsTypes.SET_TOAST, data);

export const setLoading = (loading: boolean) =>
  action(UtilsTypes.SET_LOADING, loading);

export const setdDeviceAction = (device: DeviceTypes) =>
  action(UtilsTypes.DEVICE_TYPE, device);
