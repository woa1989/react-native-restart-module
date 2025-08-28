import { restart } from '../index';

// Mock the native module
jest.mock('../NativeRestartModule', () => ({
  restart: jest.fn(),
}));

import RestartModule from '../NativeRestartModule';

describe('RestartModule', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('restart', () => {
    it('should call native restart method', () => {
      restart();
      expect(RestartModule.restart).toHaveBeenCalledTimes(1);
      expect(RestartModule.restart).toHaveBeenCalledWith();
    });

    it('should not throw error when called multiple times', () => {
      expect(() => {
        restart();
        restart();
        restart();
      }).not.toThrow();
      expect(RestartModule.restart).toHaveBeenCalledTimes(3);
    });
  });

  describe('integration', () => {
    it('should export restart function', () => {
      expect(typeof restart).toBe('function');
    });
  });
});
