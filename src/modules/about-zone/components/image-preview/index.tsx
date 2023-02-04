import React from 'react';
import { PreviewDetails } from '../../types/preview.type';

function ImagePreview({
  src,
  ...restProps
}: PreviewDetails & React.HTMLAttributes<HTMLImageElement>) {
  return <img src={src} alt="preview" {...restProps} />;
}

export default ImagePreview;
