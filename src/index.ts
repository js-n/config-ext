import { IConfig } from 'config'

export function getOrElse<T>(config: IConfig, path: string, fallback: T): string | T {
  if (config.has(path)) return config.get(path)
  return fallback
}

export function assert(config: IConfig, path: string, message?: string): void {
  if (!config.has(path)) {
    throw new Error('missing required config: ' + path + message ? '. ' +message : '')
  }
}
