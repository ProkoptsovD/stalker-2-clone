export type PreviewDetails = {
  src: string;
  className?: string;
};

export type VideoPreviewDetails = PreviewDetails &
  Partial<{
    loop: boolean;
    autoPlay: boolean;
    playsInline: boolean;
    muted: boolean;
    controls: boolean;
    width: string;
    height: string;
  }>;
