function useHasTouchScreen(): boolean {
  return 'ontouchstart' in document.documentElement;
}

export default useHasTouchScreen;
