export const displayDate = (date) => {
  const array = date.split("-");
  const displayDate = array.slice(1).concat(array[0]).join("/");
  return displayDate;
};

export const dateStringToObject = (date) => {
  const dateArray = date.split("-").map((n) => parseInt(n));
  return new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
};
