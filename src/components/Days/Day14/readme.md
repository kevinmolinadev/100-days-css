# Solución de Problemas de Referencia con Temporizadores en React

Este README documenta el problema que enfrenté al intentar limpiar los temporizadores en React y cómo lo resolví.

## Problema

Cuando intentaba limpiar los temporizadores, enfrenté un problema con la pérdida de referencia de las variables de temporización (`timerStart` y `timerEnd`). Esto se debió a que estaba cambiando el estado de `animate` dentro de los temporizadores, lo que provocaba una nueva renderización del componente y resultaba en comportamientos inesperados en la aplicación.

## Solución

La solución a este problema fue utilizar el hook `useRef` de React para crear referencias mutables para las variables de temporización. De esta manera, las referencias se mantuvieron estables entre las renderizaciones del componente.

## Conclusiones

Utilizando `useRef`, pude resolver el problema de pérdida de referencia con temporizadores en React y lograr que mi código funcione correctamente.

¡`useRef` salvando el día! 🗿