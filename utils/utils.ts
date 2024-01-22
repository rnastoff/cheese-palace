
export function formatCurrentPage(currentPage:  string | string[] | undefined)  {
  return typeof currentPage === "string" ? Number(currentPage) : 1;
}