const moviesMock = [
  {
    title: 'Troya',
    year: '2010',
    cover:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Farticulo.mercadolibre.com.mx%2FMLM-577314947-troya-brad-pitt-pelicula-dvd-_JM&psig=AOvVaw279xEzbZquQK5DFNgfU7w1&ust=1582555456221000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMis_dD05-cCFQAAAAAdAAAAABAD',
    description: 'troya movie',
    duration: 190,
    contentRating: '8',
    source: 'http://video.mp4',
    tags: ['accion', 'nada mas']
  }
];

function filteredMoviesMock(tag) {
  return moviesMock.filter(movie => movie.tags.includes(tag));
}
class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = { moviesMock, filteredMoviesMock, MoviesServiceMock };
