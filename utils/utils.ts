export function formatPrice(price: number) {
  return "$" + price / 100;
}

export const itemsPerPage = 10;

export function getPaginationIndexes(itemsPerPage:number, currentPage: number) {
  const startIndex = currentPage * itemsPerPage - itemsPerPage;
  const endIndex = startIndex + (itemsPerPage - 1);
  return { startIndex, endIndex }
}

export function formatCurrentPage(currentPage:  string | string[] | undefined)  {
  return typeof currentPage === "string" ? Number(currentPage) : 1;
}