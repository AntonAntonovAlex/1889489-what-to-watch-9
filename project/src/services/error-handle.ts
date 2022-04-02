import request from 'axios';
import { AppRoute, HTTP_CODE } from '../const';
import { ErrorType } from '../types/error';
import {toast} from 'react-toastify';
import { store } from '../store';
import { redirectToRoute } from '../store/action';

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const {response} = error;

  if (response) {
    switch (response.status) {
      case HTTP_CODE.BAD_REQUEST:
        toast.info(response.data.error);
        break;
      case HTTP_CODE.NOT_FOUND:
        toast.info(response.data.error);
        store.dispatch(redirectToRoute(AppRoute.NotFoundScreen));
        break;
    }
  }
};
