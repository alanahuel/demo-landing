// Declaraciones globales para funciones de navegación
declare global {
  interface Window {
    scrollToSection: (targetId: string) => void;
    openCalendlyPopup: () => void;
  }
}

export {};
