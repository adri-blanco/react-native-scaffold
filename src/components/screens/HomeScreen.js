import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch.leagueModel.getLeagues();
  }, []);
  const { leagues } = useSelector((state) => state.leagueModel);

  return (
    <>
      <Text>Welcome to react native</Text>
      {leagues.map((l) => (
        <Text>{l.country}</Text>
      ))}
    </>
  );
};

export default HomeScreen;
