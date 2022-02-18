const citizenShow = async (citizenId) => {
  const url = `http://localhost:4000/citizen/${citizenId}`;

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

export default citizenShow;
