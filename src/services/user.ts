import { Endpoints } from '../types/enums';
import requestHandler from '../lib/request';

const getUser = (userId: string) => {
  return requestHandler(Endpoints.USER + userId);
};
const updateUser = (userId: string, _: any) => {
  return requestHandler(Endpoints.USER + userId);
};

export const userService = {
  getUser,
  updateUser,
};
