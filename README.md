# config-ext

helpful extension methods for [`config`](https://www.npmjs.com/package/config)

## this is a work in progress

## api
#### `getOrElse<T>(config: IConfig, path: string, fallback: T): string | T`
safely access a configuration path and provide
a fallback value if not defined

#### `assert(config: IConfig, path: string, message?: string): void`
throws if configuration path does not exist
