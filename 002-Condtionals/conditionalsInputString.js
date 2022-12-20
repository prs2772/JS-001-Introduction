export function solution(article) {
  let response = "Artículo no encontrado";
  let answers = [
    {
      article: "computadora",
      respuesta: "Con mi computadora puedo programar usando JavaScript",
    },
    {
      article: "celular",
      respuesta: "En mi celular puedo aprender usando la app de Platzi",
    },
    {
      article: "cable",
      respuesta: "¡Hay un cable en mi bota!",
    },
  ];
  answers.forEach(
    (e) => (response = e["article"] === article ? e["respuesta"] : response)
  );
  return response;
}
