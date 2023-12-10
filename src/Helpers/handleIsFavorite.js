const handleIsFavorite = (arr, item) => {
  const isFavorite = arr.some((fav) => fav.id === item.id);
  return isFavorite;
};
export default handleIsFavorite;
