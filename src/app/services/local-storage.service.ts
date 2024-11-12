import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  // Método para guardar datos en `localStorage`
  setItem(key: string, value: any): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  // Método para obtener datos de `localStorage`
  getItem(key: string): any {
    if (this.isLocalStorageAvailable()) {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }
    return null;
  }

  // Método para eliminar un elemento de `localStorage`
  removeItem(key: string): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem(key);
    }
  }

  // Método para limpiar todos los elementos de `localStorage`
  clear(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.clear();
    }
  }

  // Verificar si `localStorage` está disponible
  private isLocalStorageAvailable(): boolean {
    return typeof localStorage !== 'undefined';
  }
}
