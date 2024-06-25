export const mockResizeObserver = () => {
  const mockResizeObserver = jest.fn();

  mockResizeObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });

  window.ResizeObserver = mockResizeObserver;
};
