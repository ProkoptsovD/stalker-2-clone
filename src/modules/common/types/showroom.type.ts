export type ShowroomProps<T> = {
  styling?: Partial<{
    showroom: string;
    headerWrapper: string;
    header: string;
    listItem: string;
    headerItem: string;
    activeButton: string;
  }>;
  headerInitialSlide?: number;
  indicatorAccuracyCorrection?: number;
  RenderHeaderItem?: React.FunctionComponent<DefaultHeaderProps<T>>;
  headerItems: T[];
  children?: React.ReactNode;
  keyExtractor: KeyExtractor<T>;
};

export type KeyExtractor<T> = (item: T) => T | T[keyof T];

export type DefaultHeaderProps<T> = {
  className?: string;
  item: T | T[keyof T];
  onClick?: (item: T | T[keyof T]) => void;
};
