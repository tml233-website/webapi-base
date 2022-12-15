export interface EndpointConfig {
    port: number;
    httpsEnabled: boolean;
    httpsKeys: KeysConfig;
}
export interface KeysConfig {
    privatePath: string;
    publicPath: string;
}