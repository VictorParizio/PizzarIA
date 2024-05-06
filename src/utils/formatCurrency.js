export function formatCurrency(currency) {
  return Number(currency).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
