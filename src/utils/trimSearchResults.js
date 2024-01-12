export const trimSearchResults = (list, searchQuery) => {
  const results = list.filter((item) => {
    return (
      item.substr(0, searchQuery.length).toLowerCase() ===
      searchQuery.toLowerCase()
    );
  });
  return results;
};
