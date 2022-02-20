const update = async (model, params) => {
  const url = `http://localhost:4000/${model}/${params.id}`;
  const config = {
    mode: 'cors',
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  };

  const res = await fetch(url, config);
  const result = await res.json();

  if (result.id) {
    return { status: 'success', message: 'Cadastro atualizado com sucesso!' };
  }

  return { status: 'error', message: result };
};

export default update;
