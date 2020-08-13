const signupForm = [
  {
    name: "name",
    type: "text",
    label: "Qual o seu nome?",
    pattern: "[A-Za-zçÇ0-9 .]{5,}",
    title: "Mínimo 5 caracteres",
  },
  {
    name: "nickname",
    type: "text",
    label: "Qual o seu apelido?",
    pattern: "[A-Za-zçÇ0-9]{5,}",
    title: "Mínimo 5 caracteres",
  },
  {
    name: "email",
    type: "email",
    label: "Coloque seu email ",
    title: "Digite um email válido",
  },
  {
    name: "password",
    type: "password",
    label: "Coloque sua senha ",
    pattern: "[A-Za-zçÇ0-9]{6,}",
    title: "Mínimo 6 caracteres",
  },
];

export default signupForm;
