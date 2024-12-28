import { Endpoints } from '../types/enums';
import requestHandler from '../lib/request';

const getCards = () => {
  return requestHandler(Endpoints.CARDS);
};

export const cardService = {
  getCards,
};
