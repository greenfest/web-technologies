// Task1
let guessFavoriteMovie = prompt("Введите мой любимый фильм")
checkMovie(guessFavoriteMovie)


function checkMovie(guessFavoriteMovie) {
  const favoriteMovie = "Один дома"
  if (guessFavoriteMovie !== favoriteMovie) {
    alert("Попробуйте еще раз")
  }
  if (guessFavoriteMovie === favoriteMovie) {
    alert("Правильно!")
  }
}

// Task2
let arr = ['a', 'b', 'c']
arr[0] = "word"
arr[1] = "this is an example of sentence"
arr[2] = "d"
console.log(arr)