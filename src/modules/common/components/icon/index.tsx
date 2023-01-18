import { forwardRef } from 'react';
import iconSprite from '../../../../assets/icons/icons-sprite.svg';
import { ICON_NAME } from '../../types/icon.type';

const Icon = forwardRef<SVGSVGElement, IconProps>(({ name, ...restProps }, ref) => {
  return (
    <svg {...restProps} ref={ref}>
      <use href={`${iconSprite}#${name}`} />
    </svg>
  );
});

export default Icon;

interface IconProps extends React.HTMLAttributes<SVGSVGElement> {
  name: ICON_NAME;
}
