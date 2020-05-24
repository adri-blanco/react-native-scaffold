import { init } from '@rematch/core';
import leagueModel from './league-model';

const store = init({
  models: {
    leagueModel,
  },
});

export default store;
