// Task1
let guessFavoriteMovie = prompt("Введите мой любимый фильм")
checkMovie(guessFavoriteMovie)


function checkMovie(guessFavoriteMovie) {
  const favoriteMovie = "Один дома"
  if (guessFavoriteMovie !== favoriteMovie) {
    alert("Попробуйте еще раз")
  }
}

// Task2
let arr = ['a', 'b', 'c']
arr[0] = "word"
arr[1] = "sentence"
arr[2] = "d"
console.log(arr)