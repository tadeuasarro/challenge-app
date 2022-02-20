const create = async (model, params) => {
  const url = `http://localhost:4000/${model}`;

  const formData = new FormData();

  Object.keys(params).forEach((key) => {
    formData.append(`${key}`, params[key]);
  });

  const config = {
    mode: 'cors',
    method: 'POST',
    body: formData,
  };

  const res = await fetch(url, config);
  const result = await res.json();

  if (result.error) {
    return { status: 'error', message: 'Não foi possível fazer o cadastro, verifique seus dados e tente novamente!' };
  }

  return { status: 'success', message: 'Cadastro realizado com sucesso!' };
};

export default create;
