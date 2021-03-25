

export const displayDate = (date) => {
   const array = date.split("-")
   const displayDate = array.slice(1).concat(array[0]).join("/")
   return (
      displayDate
   )
}