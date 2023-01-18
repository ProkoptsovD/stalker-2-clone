function useIsMobileDevice() {
  const isMobileDevice = window.navigator.userAgent.toLowerCase().includes('mobi');

  return isMobileDevice;
}

export default useIsMobileDevice;
