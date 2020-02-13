const monthsPortuguese = {
  0: "Janeiro",
  1: "Fevereiro",
  2: "Março",
  3: "Abril",
  4: "Maio",
  5: "Junho",
  6: "Julho",
  7: "Agosto",
  8: "Setembro",
  9: "Outubro",
  10: "Novembro",
  11: "Dezembro"
};

function formatDate(dateString) {
  const elementsOfDate = dateString.split("/");
  const day = elementsOfDate[0];
  const month = parseInt(elementsOfDate[1]);
  const year = elementsOfDate[2];

  return `${day} de ${monthsPortuguese[month]} de ${year}`;
}

export { formatDate };
