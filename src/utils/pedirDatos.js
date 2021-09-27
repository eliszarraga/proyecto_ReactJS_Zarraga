import { stock } from "../Stock/Stock";

export const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stock);
    }, 2000);
  });
};