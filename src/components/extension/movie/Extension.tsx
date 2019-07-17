import * as React from 'react';

interface IMovie {
  id: string;
  src: string;
}

interface IMovieExtensionProps {
  movieType: string;
  movieKey: string;
}

const Extension = React.memo<IMovieExtensionProps>(
  ({ movieType, movieKey }) => {
    const [{ id, src }, setMovie] = React.useState<IMovie>({ id: '', src: '' });

    React.useEffect(() => {
      if (movieType === 'youtube') {
        setMovie({ id: movieKey, src: '//www.youtube.com/embed/' });
      } else if (movieType === 'vimeo') {
        setMovie({ id: movieKey, src: '//player.vimeo.com/video/' });
      }
    },              []);

    return (
      <div>
        <iframe title={`movie-${id}`} width="560" height="315" src={src + id} />
      </div>
    );
  },
);

export default Extension;
