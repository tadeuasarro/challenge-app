const citizenCreate = async (params) => {
  const url = 'http://localhost:4000/citizen';
  const config = {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  };

  const res = await fetch(url, config);
  const result = await res.json();

  return result;
};

export default citizenCreate;
