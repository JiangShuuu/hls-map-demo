import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface HLSPlayerProps {
  src: string;
  title: string;
}

function HLSPlayer({ src, title }: HLSPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });

      hlsRef.current = hls;
      hls.loadSource(src);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        // 準備好播放
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              console.error('Network error', data);
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.error('Media error', data);
              hls.recoverMediaError();
              break;
            default:
              console.error('Fatal error', data);
              break;
          }
        }
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Safari 原生支援 HLS
      video.src = src;
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
    };
  }, [src]);

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
      <video
        ref={videoRef}
        controls
        muted
        className="w-full h-full object-cover"
        style={{ aspectRatio: '16/9' }}
      />
      <div className="p-3 bg-gray-800">
        <h3 className="text-white text-sm font-semibold truncate">{title}</h3>
      </div>
    </div>
  );
}

export default HLSPlayer;
