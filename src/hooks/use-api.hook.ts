import React from 'react';

export function useApi<T>(apiCall: () => Promise<NonNullable<T>>) {
  const [responseData, setResponseData] = React.useState<NonNullable<T>>();

  React.useEffect(() => {
    apiCall().then((data) => {
      setResponseData(data as NonNullable<T>);
    });
  }, []);

  return responseData;
}
