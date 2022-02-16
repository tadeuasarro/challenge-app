const registerCitizen = async params => {
  console.log(params);

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

  console.log(result);
};

export default registerCitizen;
