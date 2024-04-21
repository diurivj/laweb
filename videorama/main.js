const movies = [
  {
    name: 'Oppenheimer',
    duration: 180,
    director: 'Christopher Nolan',
    rating: 8.3,
    releaseYear: 2023,
    genres: ['Biography', 'Drama', 'History'],
    image: 'https://images.indianexpress.com/2023/05/nolan-movie.jpg',
  },
  {
    name: "A Knight's Tale",
    duration: 132,
    director: 'Brian Helgeland',
    rating: 7.0,
    releaseYear: 2001,
    genres: ['Action', 'Adventure', 'Romance'],
    image:
      'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABc_4qtlGY0UOuxUoVAWd4pZIY2CUaPlo45YU13WOPbzfk2ScufE_QA-I5YwZO8mo0PbzMlaYRL2CFYnuuMtAbUsuTQSgViZunSpk.jpg?r=37a',
  },
  {
    name: 'Top Gun: Maverick',
    duration: 130,
    director: 'Joseph Kosinski',
    rating: 8.2,
    releaseYear: 2022,
    genres: ['Action', 'Drama'],
    image: 'https://i.ytimg.com/vi/zzBIzYmxatU/maxresdefault.jpg',
  },
  {
    name: 'Fast & Furious 4',
    duration: 107,
    director: 'Justin Lin',
    rating: 6.5,
    releaseYear: 2009,
    genres: ['Action', 'Crime', 'Thriller'],
    image:
      'https://i.ytimg.com/vi/8wJt5opJsDA/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGGUgZShlMA8=&rs=AOn4CLDjdg7IE2-8ZwsSSrcB7aawOTX8hg',
  },
  {
    name: 'Shutter Island',
    duration: 138,
    director: 'Martin Scorsese',
    rating: 8.2,
    releaseYear: 2010,
    genres: ['Drama', 'Mystery', 'Thriller'],
    image:
      'https://media.licdn.com/dms/image/D4E12AQEkI2dxBjMviw/article-cover_image-shrink_720_1280/0/1704984476447?e=2147483647&v=beta&t=RK95DWU54AaAwynrAbJFIGqhlXETT9fBvd2yGAD8ppI',
  },
  {
    name: 'Fighting Club',
    duration: 139,
    director: 'David Fincher',
    rating: 8.8,
    releaseYear: 1999,
    genres: ['Drama'],
    image:
      'https://media.newyorker.com/photos/5dbafcc91b4a6700085a7a9b/master/pass/Baker-FightClub.jpg',
  },
  {
    name: 'Interstellar',
    duration: 169,
    director: 'Christopher Nolan',
    rating: 8.7,
    releaseYear: 2014,
    genres: ['Adventure', 'Drama', 'Sci-Fi'],
    image: 'https://i.ytimg.com/vi/YF1eYbfbH5k/maxresdefault.jpg',
  },
  {
    name: 'The Lord of the Rings: The Return of the King',
    duration: 201,
    director: 'Peter Jackson',
    rating: 9.0,
    releaseYear: 2003,
    genres: ['Action', 'Adventure', 'Drama', 'Fantasy'],
    image:
      'https://m.media-amazon.com/images/S/pv-target-images/2c70c38075924358afbbf210cab6ddf9ebed7a9d47c87713c8759d5758b7dadb.jpg',
  },
  {
    name: 'Scarface',
    duration: 170,
    director: 'Brian De Palma',
    rating: 8.3,
    releaseYear: 1983,
    genres: ['Crime', 'Drama'],
    image:
      'https://www.hollywoodreporter.com/wp-content/uploads/2018/11/scarface_-_h_-_1983.jpg?w=1296',
  },
  {
    name: 'The Pianist',
    duration: 150,
    director: 'Roman Polanski',
    rating: 8.5,
    releaseYear: 2002,
    genres: ['Biography', 'Drama', 'Music', 'War'],
    image:
      'https://static1.squarespace.com/static/53b1bfcae4b0ddc840e4f18c/597a672f2994ca0d709d41d0/602668e02910cb4bf3b42add/1617030518325/the_pianist.jpg?format=1500w',
  },
  {
    name: 'The Help',
    duration: 146,
    director: 'Tate Taylor',
    rating: 8.1,
    releaseYear: 2011,
    genres: ['Drama'],
    image:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2E1F7E8BF292A5B575C606F15C1C7FB069C808F87656A1CD8B1DEB7D29E85B8C/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp',
  },
  {
    name: 'Forgotten',
    duration: 108,
    director: 'Jang Hang-jun',
    rating: 7.4,
    releaseYear: 2017,
    genres: ['Crime', 'Mystery', 'Thriller'],
    image: 'https://i.ytimg.com/vi/CRbTjxe0j6Y/maxresdefault.jpg',
  },
];

const nameOrderedAZ = movies.toSorted((a, b) => {
  return a.name.localeCompare(b.name);
});

// MANIPULACION DEL DOM
// 1. Manipular el contenedor de vista de lista
const moviesList = document.getElementById('movies_list');
const movieDetails = document.getElementById('movie_details');
const orderBy = document.getElementsByName('order-by')[0];
const form = document.getElementById('add-movie');

// Form submission
form.onsubmit = event => {
  // 1. prevenir el comportamiento default
  event.preventDefault();
  // 2. Obtener todos los valores
  const name = document.getElementById('movie-title').value;
  const duration = document.getElementById('movie-duration').value;
  const director = document.getElementById('movie-director').value;
  const rating = document.getElementById('movie-rating').value;
  const releaseDate = document.getElementById('movie-release-year').value;
  let genres = document.getElementById('movie-genres').value;
  const image = document.getElementById('movie-image').value;

  const releaseYear = releaseDate.split('-')[0];
  genres = genres.split(', ');

  if (
    name === '' ||
    duration === '' ||
    director === '' ||
    rating === '' ||
    releaseDate === '' ||
    genres === '' ||
    image === ''
  ) {
    alert('Por favor, llena todos los campos');
    return;
  }

  const movie = {
    name, // name: name
    duration,
    director,
    rating,
    releaseYear,
    genres,
    image,
  };

  renderMovie(movie, 'prepend');
  movies.push(movie);

  // 3. Limpiar el form
  const form = event.target;
  form.reset();
};

// Order by
orderBy.onchange = event => {
  // 1. delete everything
  moviesList.innerHTML = ``;

  const nameOrderedAZ = movies.toSorted((a, b) => {
    return a.name.localeCompare(b.name);
  });

  const nameOrderedZA = movies.toSorted((a, b) => {
    return b.name.localeCompare(a.name);
  });

  const ratingOrderedLower = movies.toSorted((a, b) => {
    return a.rating - b.rating;
  });

  const ratingOrderedHigher = movies.toSorted((a, b) => {
    return b.rating - a.rating;
  });

  // 2. tomamos el valor del select
  const selectValue = event.target.value;
  if (selectValue === 'a-z') {
    renderMoviesList(nameOrderedAZ);
  } else if (selectValue === 'z-a') {
    renderMoviesList(nameOrderedZA);
  } else if (selectValue === 'rating-lower') {
    renderMoviesList(ratingOrderedLower);
  } else {
    renderMoviesList(ratingOrderedHigher);
  }
};

function renderMovieGenres(movie) {
  return movie.genres.map(genre => genre).join(', ');
}

function renderRating(movie) {
  const stars = Array.from(Array(Math.round(movie.rating)).keys());
  return stars.map(star => `⭐️`).join('');
}

function renderMovie(movie, addStrategy) {
  // 2. Crear el elemento, el node, el hijo, el card
  const card = document.createElement('div');
  card.setAttribute(
    'class',
    'border border-black h-96 space-y-2 cursor-pointer'
  );

  card.innerHTML = `
			<img src="${movie.image}" alt="${movie.name}" class="aspect-video object-cover" />
			<p class="text-2xl px-2 font-medium">${movie.name}</p>
			<p class="text-2xl px-2 font-light">Duracion: ${movie.duration} mins</p>
			<p class="text-2xl px-2 font-light">Rating: ${movie.rating}</p>	
		`;

  // Listener -> Acciones que performea el usuario
  card.onclick = function (event) {
    movieDetails.innerHTML = `
				<img src="${movie.image}" alt="${movie.name}" class="aspect-video object-cover" />
        <div class="flex justify-between">
				  <p class="text-4xl px-2 font-medium">${movie.name} <span class="font-light text-3xl">(${movie.director})</span></p>
          <p class="text-4xl px-2 font-medium">${renderRating(movie)}</p>
        </div>
        <div class="flex justify-between">
				  <p class="text-4xl px-2 font-medium">${movie.duration} mins</p>
          <p class="text-4xl px-2 font-medium">${movie.releaseYear}</p>
        </div>
        <p class="text-4xl px-2 font-medium">${renderMovieGenres(movie)}</p>
			`;

    const movieDetailsCoordinates = movieDetails.getBoundingClientRect();
    const offset = 1000;
    const top =
      movieDetailsCoordinates.bottom + movieDetailsCoordinates.height + offset;

    window.scrollTo({
      behavior: 'smooth',
      top: top,
    });
  };

  // 3. Apendar elementos al container
  if (addStrategy === 'append') {
    moviesList.appendChild(card);
  } else if (addStrategy === 'prepend') {
    moviesList.prepend(card);
  } else {
    moviesList.appendChild(card);
  }
}

function renderMoviesList(arr) {
  arr.forEach(movie => {
    renderMovie(movie);
  });
}

renderMoviesList(nameOrderedAZ);
