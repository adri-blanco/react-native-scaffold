// import axiosInstance from './axios';
// import backendPaths from '../constants/backend-paths';

const MOCK = [
  {
    country: 'Spain',
  },
  {
    country: 'France',
  },
  {
    country: 'Italian',
  },
];

export default {
  async getLeagues() {
    try {
      // const leagues = await axiosInstance.get(backendPaths.leagues);
      const leagues = await new Promise((resolve) => setTimeout(() => resolve(MOCK), 1000));
      return leagues;
    } catch (err) {
      return [];
    }
  },
};
