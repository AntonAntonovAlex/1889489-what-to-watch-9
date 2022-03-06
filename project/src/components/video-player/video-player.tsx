import { useEffect, useRef } from 'react';

const timerDelay = 1000;

type VideoPlayerProps = {
  previewVideoLink: string;
  previewImage: string;
  isActive: boolean;
}

function VideoPlayer({previewVideoLink, previewImage, isActive }: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timer;
    if (videoRef.current !== null && isActive) {
      timer = setTimeout(() => videoRef.current?.play(), timerDelay);
    }
    if (videoRef.current !== null && !isActive) {
      videoRef.current.pause();
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isActive]);

  return (
    <video src={isActive ? previewVideoLink : ''}
      poster={previewImage}
      width={280}
      height={175}
      loop
      muted
      ref={videoRef}
    />
  );
}

export default VideoPlayer;
