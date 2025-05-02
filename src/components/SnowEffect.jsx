import { useEffect } from 'react';
import copo from '../assets/copo.png'; // Asegúrate de que esta ruta sea correcta

export default function SnowEffect() {
  useEffect(() => {
    const container = document.createElement('div');
    container.classList.add('snow-container');
    document.body.appendChild(container);

    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');

      // Estilos dinámicos
      const size = Math.random() * 10 + 10;
      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
      snowflake.style.backgroundImage = `url(${copo})`;

      container.appendChild(snowflake);

      setTimeout(() => snowflake.remove(), 10000); // Remover después de 10s
    };

    const interval = setInterval(createSnowflake, 200);

    return () => {
      clearInterval(interval);
      container.remove(); // Limpieza del contenedor
    };
  }, []);

  return null;
}
