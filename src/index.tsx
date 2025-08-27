import RestartModule from './NativeRestartModule';

export function multiply(a: number, b: number): number {
  return RestartModule.multiply(a, b);
}
