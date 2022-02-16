const citizenIndex = async () => {
  const url = 'http://localhost:4000/citizen?offset=1';

  const config = {
    mode: 'cors',
    method: 'GET',
    header: {
      'Content-Type': 'application/json',
    },
  };

  const res = await fetch(url, config);

  const result = await (res.json());

  return (result);
};

export default citizenIndex;
