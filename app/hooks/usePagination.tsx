export default function usePagination(currentPage: number) {
  const itemsPerPage = 10;

  const startIndex = currentPage * itemsPerPage - itemsPerPage;
  const endIndex = startIndex + (itemsPerPage - 1);

  return { itemsPerPage, startIndex, endIndex };
}
