export function toggleInfo(element: HTMLElement): void {
    const container = element.parentElement;
    const infoBox = container?.querySelector('.info-box') as HTMLElement | null;
  
    if (infoBox) {
      // Cierra todos los cuadros antes de abrir uno nuevo
      document.querySelectorAll('.info-box').forEach((box) => {
        if (box !== infoBox) (box as HTMLElement).style.display = 'none';
      });
  
      // Alternar visibilidad del cuadro de información
      infoBox.style.display = infoBox.style.display === 'block' ? 'none' : 'block';
    }
  }
  
  // Cerrar el cuadro si se hace clic fuera
  document.addEventListener('click', (event: MouseEvent) => {
    if (!(event.target as HTMLElement).closest('.button-container')) {
      document.querySelectorAll('.info-box').forEach((box) => {
        (box as HTMLElement).style.display = 'none';
      });
    }
  });