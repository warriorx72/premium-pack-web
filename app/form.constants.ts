export const patterns = {
  name: /^[A-Za-z]+$/i,
  email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  phone: /^[0-9]+$/i,
};

export const messages = {
  req: "Este campo es obligatorio",
  name: "El formato introducido no es el correcto",
  mail: "Debes introducir una dirección correcta",
  phone: "Debes introducir un número correcto",
};
