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

  if (result.error) {
    return { status: 'error', message: 'Não foi possível atualizar o cadastro, verifique seus dados e tente novamente!' };
  }

  return { status: 'success', message: 'Cadastro atualizado com sucesso!' };
};

export default update;
