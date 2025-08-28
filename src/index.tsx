import RestartModule from './NativeRestartModule';

/**
 * 重启React Native应用
 *
 * 在iOS上，这会重新加载React Native bundle
 * 在Android上，这会重启整个应用进程
 */
export function restart(): void {
  try {
    RestartModule.restart();
  } catch (error) {
    throw error;
  }
}
