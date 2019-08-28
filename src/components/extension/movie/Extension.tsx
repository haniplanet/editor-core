import * as React from 'react';

interface IMovie {
  id: string;
  src: string;
}

interface IMovieExtensionProps {
  movieType: string;
  movieKey: string;
}

class Extension extends React.Component<IMovieExtensionProps, IMovie> {
  constructor(props) {
    super(props);

    this.state = {id: '', src: ''};
  }

  componentDidMount() {
    const {movieType, movieKey} = this.props;

    if (movieType === 'youtube') {
      this.setState({id: movieKey, src: '//www.youtube.com/embed/'});
    } else if (movieType === 'vimeo') {
      this.setState({id: movieKey, src: '//player.vimeo.com/video/'});
    }
  }

  render() {
    const {id, src} = this.state;

    return (
      <div>
        <iframe title={`movie-${id}`} width="560" height="315" src={src + id}/>
      </div>
    );
  }
}

export default Extension;
