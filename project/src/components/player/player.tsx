import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getFilms } from '../../store/film-data/selectors';
import { Film } from '../../types/film';
import { TailSpin } from  'react-loader-spinner';

function Player(): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const filmsList: Film[] = useAppSelector(getFilms);
  const params = useParams();
  const selectedFilm = filmsList.find((film) => film.id === Number(params.id));

  function onPlayButtonClick() {
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }

  function getTime(second: number) {
    const hours = Math.floor(second / 60 / 60);
    const minutes = Math.floor(second / 60) - (hours * 60);
    const seconds = second % 60;

    return hours === 0 ? `${minutes}:${seconds}`: `${hours}:${minutes}:${seconds}`;
  }

  function getPlaybackPercent (second: number) {
    return videoRef.current ? Math.round((videoRef.current.duration - second)/videoRef.current.duration * 100) : 0;
  }

  useEffect(() => {
    let intervalId:  NodeJS.Timer;
    if (isPlaying) {
      intervalId = setInterval(() => {
        if (videoRef.current) {
          setCount(Math.round(videoRef.current.duration - videoRef.current.currentTime));
        }
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.onloadeddata = () => setIsLoading(false);
    }

    return () => {
      if (videoRef.current !== null) {
        videoRef.current.onloadeddata = null;
        videoRef.current = null;
      }
    };
  }, [selectedFilm]);

  return (
    <div className="player" onClick={onPlayButtonClick}>
      {isLoading ?
        <div style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
          {<TailSpin color="#00BFFF" height={80} width={80} />}
        </div> :
        ''}
      <video
        src={selectedFilm?.videoLink}
        className="player__video"
        poster={selectedFilm?.previewImage}
        autoPlay
        muted
        ref={videoRef}
      />
      <button
        onClick={() => navigate(`${'/films/'}${selectedFilm?.id}`)}
        type="button"
        className="player__exit"
      >
        Exit
      </button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={getPlaybackPercent(count)} max={100} />
            <div className="player__toggler" style={{ left: `${getPlaybackPercent(count)}%` }}>
          Toggler
            </div>
          </div>
          <div className="player__time-value">-{getTime(count)}</div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play"
            onClick={onPlayButtonClick}
          >
            <svg viewBox="0 0 19 19" width={19} height={19}>
              <use xlinkHref={isPlaying ? '#pause' : '#play-s'} />
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{selectedFilm?.name}</div>
          <button type="button" className="player__full-screen"
            onClick={(evt: { currentTarget:  HTMLElement }) => {
              if (videoRef.current) {
                videoRef.current.requestFullscreen();
              }
            }}
          >
            <svg viewBox="0 0 27 27" width={27} height={27}>
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
