import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from '../redux/Greetings/Greeting';

const Greeting = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  return <h1>{data.greetings.message}</h1>;
};

export default Greeting;
