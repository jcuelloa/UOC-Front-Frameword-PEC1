# PEC1_Ej1 - solucion

## **1. La aparición de HTML5/CSS3/JS ha supuesto el nacimiento del desarrollo front-end moderno.**

### **¿Cuál es la ventaja del uso de etiquetas semánticas? Nombra y explica al menos 3 de estas ventajas.**

La primera y más importante sería la *accesibilidad*. Al dotar de semántica a las etiquetas, la gente con problemas de accesibilidad puede entender mejor el contenido de una web, ya que dicha semántica proporciona una descripción más precisa del contenido.

La segunda podría ser *posicionamiento*. Los buscadores buscarán etiquetas semánticas para el posicionamiento SEO

La última sería *practicidad*, pues un código semántico es más fácil de entender.

### **Cita al menos 3 APIs HTML5 y explica brevemente su funcionalidad.**

- DOM API: permite manipular la estructura de tu HTML de una forma dinámica.
- Canvas y WebGL API: crear gráficos 2D y 3D.
- Geolocation API: permite averiguar la posición del usuario.


### **Cita qué opción ofrece CSS3 para conseguir que se apliquen diferentes estilos CSS sobre el mismo elemento en su visualización en diferentes dispositivos (diferentes tamaños de pantalla).**

Para hacer una página *responsive* y que se adapta a varios tamaños se usan las media queries. Permiten indicar que estilos se aplican para ciertos tamaños de pantalla, medidas en pixeles.
Por ejemmplo, en el caso de que quisieramos aplicar un estilo espécifico cuando la pantalla no supere los 600pixeles, usaríamos la siguiete media query.

```typescript
@media (max-width: 600px) {
 lista de reglas CSS a aplicar
}
```

### **Cita al menos 4 de las características principales de TypeScript (importante superset de JavaScript que trataremos en el siguiente capítulo).**
- tipado
- compilado
- soporta POO
- es portable  

<br />
<br />

## **2. El lenguaje CSS es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema se han creado los preprocesadores CSS, que ofrecen evidentes ventajas (0.5 puntos)**

### **Cita al menos 2 de estos preprocesadores.**
- SASS
- LESS
- Stylus

### **Cita al menos 4 ventajas que ofrecen estos preprocesadores.**
- Agilidad en la codificacion
- Hacer codigo más legible
- Uso de varibles
- Anidación de reglas

### **Explica brevemente en qué consisten los sourcemaps.**
Permiten mapear o encontrar el origen del CSS mostrado por el navegador con el código original del preprocesador. Esto nos ayuda a depurar más facilmente el código.  
Por ejemplo, cuando inspeccionamos un elmento usando las herramientas de desarrolladores, al ver un regla CSS, nos indicará el archivo y linea donde se ha generado dicha regla. 

### **Explica qué es un transpilador.**
Permite cambiar o traducir código escrito en un lenguaje a otro lenguaje. Incluso, traducir codigo de una versión a otra versión, para asegurarnos la compatibilidad.  
Por ejmplo, podemos eescribir codigo Javascript ES6, pero transpilarlo a ES5 por compatibilidad. Otro ejemplo muy claro seria la transpilación de TypeScript a JavaScript. 


## **3. El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas como controles de versiones y herramientas de gestión de módulos (0.75 puntos).**

### **Cita al menos dos sistemas de control de versiones y dos herramientas de gestión de módulos.**

Como herramientas de control de versiones
- Git
- Subversion

Como herramientas de gestión de módulos
- Webpack
- Parcel

### **Cita y explica al menos 3 comandos de Git.**

```typescript
git add .
```
La opción *add* se usa para indicar los ficheros que han cambiado. Podemos indicar un fichero concreto o incluso indicar una carpeta. Al indicar la carpeta ".", si estamos en el raíz de nuestro repositorio, se añadirán todos los cambios que hayamos realizado. 

```typescript
git commit -m "mensaje"
```
La opción *commit* se usa para hacer efectivos los cambios en el proyecto. Hace una "foto" de tu proyecto en ese punto y nos va a permitir en el futuro volver a esos puntos. El parámetro "-m" es para indicar un mensaje, normalmente indicando el trabajo realizado.

```typescript
git push
```
La opción *push* la usamos para subir nuestro repositorio a un repositorio remoto, por ejemplo, a un repositorio de GitHub. Previamente, habría que haber inicializado dicho repositorio con el comando *git init*


### **Cita y explica brevemente las características más definitorias de WebPack.**
- Gestión de dependencias
- Ejecución de tareas
- Conversión de formatos 


