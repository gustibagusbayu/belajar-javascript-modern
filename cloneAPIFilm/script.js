// $('.search-button').on('click', function() {
//   $.ajax({
//     url: "http://www.omdbapi.com/?apikey=4c0c6cce&s=" + $('.input-keyword').val(),
//     success: (result) => {
//       const movies = result.Search;
//       let cards = "";
//       movies.forEach((movie) => {
//         cards += showCards(movie);
//       });
//       $(".movie-container").html(cards);
//       // ketika tombol detail di klik (arrow function tidak punya this)
//       $('.modal-detail-button').on('click', function () {
//         $.ajax({
//           url: "http://www.omdbapi.com/?apikey=4c0c6cce&i=" + $(this).data('imdbid'),
//           success: movie => {
//             console.log($(this));
//             const movieDetail = showModal(movie);
//             $('.modal-body').html(movieDetail)
//           },
//           error: (e) => {
//             console.log(e.responseText);
//           },
//         })
//       });
//     },
//     error: (e) => {
//       console.log(e.responseText);
//     },
//   });
// })

// pakai fetch
// const searchButton = document.querySelector('.search-button')
// searchButton.addEventListener('click', function() {
//   const inputKeyword = document.querySelector('.input-keyword')
//   fetch("http://www.omdbapi.com/?apikey=4c0c6cce&s=" + inputKeyword.value)
//     .then(response => response.json())
//     .then(response => {
//       const movies = response.Search;
//       let cards = '';
//       movies.forEach(movie => cards += showCards(movie))
//       const movieContainer = document.querySelector('.movie-container')
//       movieContainer.innerHTML = cards;

//       // ketika tombol detail di klik
//       const modalDetailButton = document.querySelectorAll('.modal-detail-button')
//       modalDetailButton.forEach(btn => {
//         btn.addEventListener('click', function() {
//           const imdbid = this.dataset.imdbid; //mengambil atribut yang ada tulisan data diawalnya kalau js biasa pakai 'dataset'
//           fetch('http://www.omdbapi.com/?apikey=4c0c6cce&i=' + imdbid)
//             .then(response => response.json())
//             .then(movie => {
//               const movieDetail = showModal(movie)
//               const modalBody = document.querySelector('.modal-body')
//               modalBody.innerHTML = movieDetail;
//             })
//         })
//       })
//     })
// })

const searchButton = document.querySelector('.search-button')
searchButton.addEventListener('click', async function() {
  try{
    const inputKeyword = document.querySelector('.input-keyword')
    const movies = await getMovies(inputKeyword.value)
    updateUI(movies)
  } catch(error){ //fetch akan selalu reject jika networknya error
    alert(error);
  }
})

function getMovies(keyword){
  return fetch("http://www.omdbapi.com/?apikey=4c0c6cce&s=" + keyword)
    .then(response => {
      if(!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
    .then(response => {
      if(response.Response === "False") {
        throw new Error(response.Error)
      }
      return response.Search
    })
}

function updateUI(movies) {
    let cards = '';
    movies.forEach(movie => cards += showCards(movie))
    const movieContainer = document.querySelector('.movie-container')
    movieContainer.innerHTML = cards;
}
// event binding (jalanin event yang awalnya eventnya belum ada)
// tombol detail diklik
document.addEventListener('click', async function(elemen) {
  if( elemen.target.classList.contains('modal-detail-button') ) { //kalau elemen yang diklik mengandung kelas yang dituju
    const imdbid = elemen.target.dataset.imdbid; //mengambil atribut yang awalannya <data- class=""></data->
    const movieDetail = await getMovieDetail(imdbid)
    updateUIDetail(movieDetail)
  }
})

function getMovieDetail(imdbid) {
  return fetch('http://www.omdbapi.com/?apikey=4c0c6cce&i=' + imdbid)
    .then(response => response.json())
    .then(movie => movie)
}

function updateUIDetail(movie) {
    const movieDetail = showModal(movie)
    const modalBody = document.querySelector('.modal-body')
    modalBody.innerHTML = movieDetail;
}


function showCards(movie){
  return `<div class="col-md-4 my-3">
    <div class="card">
      <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
      <div class="card-body">
          <h5 class="card-title">${movie.Title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
          <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal"data-imdbid="${movie.imdbID}">Show Details</a>
      </div>
    </div>
  </div>`
}

function showModal(movie) {
  return `
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <img src="${movie.Poster}" class="img-fluid" alt="">
      </div>
      <div class="col-md">
        <ul class="list-group">
          <li class="list-group-item"><h4>${movie.Title} (${movie.Year})</h4></li>
          <li class="list-group-item"><strong>Director : </strong>${movie.Director}</li>
          <li class="list-group-item"><strong>Actors : </strong>${movie.Actors}</li>
          <li class="list-group-item"><strong>Writer : </strong>${movie.Writer}</li>
          <li class="list-group-item"><strong>Plot : </strong><br>${movie.Plot}</li>
        </ul>
      </div>
    </div>
  </div>`
}