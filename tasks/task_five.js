const food = ['beans', 'pap', 'rice', 'pap', 'garri', 'corn', 'potato', 'yam', 'pap', 'soup']
const foodFilter = food.filter(function (items) {
  if (items === 'pap') {
    return items
  }
})
console.log(foodFilter)
