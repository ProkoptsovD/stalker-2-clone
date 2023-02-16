export const REVERSE_ANIMATION_SPEED = 0.55;

export const getPreoderLink = (edition: string) => {
  const capitalizedFirstLetter = edition[0].toUpperCase();
  const virsion = capitalizedFirstLetter + edition.split('').slice(1).join('') + 'Edition';

  return `https://purchase.xsolla.com/pages/buy?project_id=142214&type=unit&sku=${virsion}&mode=sandbox&ui_settings=eyJ0aGVtZSI6ImRhcmsifQ%3D%3D`;
};

export const digitalEditionPreorderLinkMap = {
  'standart edition': 'base',
  'deluxe edition': 'deluxe',
  'ultimate edition': 'ultimate '
};
