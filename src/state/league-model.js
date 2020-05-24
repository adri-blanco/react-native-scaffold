import leagueServices from '../services/league-services';

export default {
  state: {
    leagues: [],
  },
  reducers: {
    addLeagues(state, payload) {
      return {
        ...state,
        leagues: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async getLeagues() {
      const values = await leagueServices.getLeagues();
      dispatch.leagueModel.addLeagues(values);
    },
  }),
};
