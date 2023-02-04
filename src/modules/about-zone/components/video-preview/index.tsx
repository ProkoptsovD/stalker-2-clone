import React from 'react';

import type { VideoPreviewDetails } from '../../types/preview.type';

const defaultOptions: Omit<VideoPreviewDetails, 'src'> = {
  autoPlay: false,
  playsInline: false,
  muted: true,
  loop: true,
  controls: false
};

const VideoPreview = React.forwardRef<HTMLVideoElement, VideoPreviewDetails>(function (
  { src, ...options }: VideoPreviewDetails,
  ref
) {
  const config = { ...defaultOptions, ...options };

  return <video ref={ref} src={src} {...config} />;
});

export default VideoPreview;
