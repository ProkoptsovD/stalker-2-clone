import React from 'react';

export function WithLoadingScreen({
  Component,
  LoadingComponent,
  delay = 1500
}: WithLoadingScreenProps) {
  const [shouldReturnComponent, setShouldReturnComponent] = React.useState(false);

  React.useEffect(() => {
    const timeoutID = setTimeout(() => setShouldReturnComponent(true), delay);

    return () => clearTimeout(timeoutID);
  }, [shouldReturnComponent]);

  if (!shouldReturnComponent) return <LoadingComponent />;

  return <Component />;
}

type WithLoadingScreenProps = {
  Component: React.FunctionComponent<any>;
  LoadingComponent: React.FunctionComponent<any>;
} & Partial<{
  delay: number;
}>;
