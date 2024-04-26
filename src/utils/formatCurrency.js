export function formatCurrency(currency) {
  return currency.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
