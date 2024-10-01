import { mergeApplicationConfig } from '@angular/core';
import { appConfig } from './app.config';

// Asumiendo que `serverConfig` ya está definido y contiene `providers`
export const serverConfig = {
  providers: [
    // Agrega aquí cualquier configuración específica para el servidor
  ]
};

// Combina las configuraciones en un solo objeto que incluye `providers`
export const config = mergeApplicationConfig(appConfig, serverConfig);
