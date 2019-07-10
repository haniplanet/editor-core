import * as React from 'react';

interface IMovie {
  id: string;
  src: string;
}

interface IMovieExtensionProps {
  type: string;
  key: string;
}

const Extension = React.memo<IMovieExtensionProps>(({ type, key }) => {
  const movie: IMovie = {} as IMovie;

  switch (type) {
    case 'youtube':
      movie.id = key;
      movie.src = '//www.youtube.com/embed/';
      break;
    case 'vimeo':
      movie.id = key;
      movie.src = '//player.vimeo.com/video/';
      break;
    default:
      return null;
  }

  return (
    <div>
      <iframe
        title={`movie-${movie.id}`}
        width="560"
        height="315"
        src={movie.src + movie.id}
      />
    </div>
  );
});

export default Extension;
