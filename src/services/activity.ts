import { Endpoints } from '../types/enums';
import requestHandler from '../lib/request';

const getWeeklyActivity = () => {
  return requestHandler(Endpoints.WEEKLY_ACTIVITY);
};

export const activityService = {
  getWeeklyActivity,
};
