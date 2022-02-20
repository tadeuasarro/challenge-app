const index = async (model, page) => {
  const url = `http://localhost:4000/${model}?offset=${page}`;

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

export default index;
