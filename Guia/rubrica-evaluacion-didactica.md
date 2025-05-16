# RÚBRICA DE EVALUACIÓN: PROYECTO INTEGRADOR
## Explorador de Países con Vue.js, AG Grid y Tailwind CSS

Esta rúbrica está diseñada para evaluar de manera didáctica y comprensiva los conocimientos y habilidades adquiridos en el desarrollo de una aplicación web utilizando Vue.js, AG Grid y Tailwind CSS.

## INFORMACIÓN GENERAL

**Nombre del proyecto:** Explorador de Países  
**Objetivo:** Desarrollar una aplicación web que visualice y permita explorar información sobre países del mundo  
**Tecnologías requeridas:** Vue.js, AG Grid, Tailwind CSS, API REST Countries  
**Tiempo de desarrollo:** 4 semanas  
**Valor en la calificación final:** 10 puntos (10% de la nota final)  
**Distribución de calificación total:** 
- Primer parcial: 15 puntos
- Segundo parcial: 15 puntos
- Proyecto integrador: 10 puntos
- Otros criterios de evaluación: 60 puntos

---

## SECCIÓN 1: CONOCIMIENTOS FUNDAMENTALES DE VUE.JS (30 PUNTOS)

### 1.1 Comprensión y aplicación de conceptos básicos (10 puntos)

| Nivel | Descripción | Puntos |
|-------|-------------|--------|
| **Excelente** | Demuestra comprensión profunda de la reactividad y el flujo de datos en Vue. Implementa correctamente múltiples directivas y la conexión entre componentes es clara y eficiente. | 9-10 |
| **Bueno** | Comprende los conceptos básicos de Vue y los implementa correctamente en la mayoría de casos. La aplicación es funcional pero puede mostrar algunas inconsistencias menores. | 7-8 |
| **Satisfactorio** | Implementa conceptos básicos de Vue pero con comprensión limitada. La aplicación funciona pero muestra inconsistencias en la implementación. | 5-6 |
| **Insuficiente** | No demuestra comprensión básica de Vue o la implementación tiene errores fundamentales que afectan la funcionalidad. | 0-4 |

### 1.2 Uso de directivas de Vue (10 puntos)

| Directiva | Descripción | Puntos máx. |
|-----------|-------------|------------|
| **v-model** | Implementa enlace bidireccional para campos de entrada (inputs, selects) | 2 |
| **v-if/v-else/v-show** | Utiliza renderizado condicional para mostrar/ocultar elementos | 2 |
| **v-for** | Itera correctamente sobre colecciones de datos con uso apropiado de `:key` | 2 |
| **@eventos y modificadores** | Maneja eventos del DOM correctamente (@click, @input, etc.) | 2 |
| **:bind y clases dinámicas** | Enlaza atributos y clases CSS de forma dinámica | 2 |

### 1.3 Estructura de componentes (10 puntos)

| Aspecto | Descripción | Puntos máx. |
|---------|-------------|------------|
| **Componentización** | Divide la aplicación en al menos 3 componentes lógicos y reutilizables | 3 |
| **Comunicación** | Implementa correctamente la comunicación entre componentes (props y eventos) | 3 |
| **Propiedades computadas/watchers** | Utiliza propiedades computadas o watchers cuando es apropiado | 2 |
| **Ciclo de vida** | Aprovecha métodos del ciclo de vida de Vue (mounted, created, etc.) | 2 |

---

## SECCIÓN 2: IMPLEMENTACIÓN DE AG GRID (20 PUNTOS)

### 2.1 Configuración básica de AG Grid (8 puntos)

| Aspecto | Descripción | Puntos máx. |
|---------|-------------|------------|
| **Integración con Vue** | Integra correctamente AG Grid con Vue.js | 2 |
| **Definición de columnas** | Define apropiadamente las columnas y sus propiedades | 2 |
| **Datos en la tabla** | Muestra correctamente los datos de países en la tabla | 2 |
| **Temas y estilos** | Aplica temas o estilos consistentes con el diseño general | 2 |

### 2.2 Funcionalidades interactivas (12 puntos)

| Funcionalidad | Descripción | Puntos máx. |
|--------------|-------------|------------|
| **Ordenación** | Implementa ordenación de columnas funcional | 2 |
| **Filtrado** | Permite filtrar datos con filtros de AG Grid o personalizados | 3 |
| **Paginación** | Implementa paginación para navegar por grandes conjuntos de datos | 2 |
| **Renderizado personalizado** | Utiliza cellRenderer para personalizar la visualización (como banderas) | 3 |
| **Eventos de tabla** | Maneja eventos de AG Grid (selección de filas, etc.) | 2 |

---

## SECCIÓN 3: DISEÑO CON TAILWIND CSS (15 PUNTOS)

### 3.1 Uso básico de Tailwind (7 puntos)

| Aspecto | Descripción | Puntos máx. |
|---------|-------------|------------|
| **Clases utilitarias** | Utiliza correctamente las clases de Tailwind | 2 |
| **Consistencia** | Mantiene un uso consistente de espaciado, colores y tipografía | 2 |
| **Personalización** | Personaliza o extiende Tailwind según necesidades del proyecto | 3 |

### 3.2 Diseño responsive (8 puntos)

| Aspecto | Descripción | Puntos máx. |
|---------|-------------|------------|
| **Breakpoints** | Implementa diseño que se adapta a diferentes tamaños de pantalla | 3 |
| **Contenedores y grid** | Utiliza contenedores y sistema de grid de forma efectiva | 3 |
| **Elementos responsive** | Adapta elementos específicos según el tamaño de pantalla | 2 |

---

## SECCIÓN 4: CONEXIÓN CON API Y MANEJO DE DATOS (20 PUNTOS)

### 4.1 Obtención y procesamiento de datos (10 puntos)

| Aspecto | Descripción | Puntos máx. |
|---------|-------------|------------|
| **Conexión a API** | Implementa correctamente peticiones a la API REST Countries | 3 |
| **Manejo de respuestas** | Procesa y formatea adecuadamente los datos recibidos | 3 |
| **Estados de carga** | Muestra indicadores apropiados durante la carga de datos | 2 |
| **Manejo de errores** | Implementa captura y visualización de errores | 2 |

### 4.2 Manipulación y filtrado de datos (10 puntos)

| Aspecto | Descripción | Puntos máx. |
|---------|-------------|------------|
| **Filtrado de datos** | Permite filtrar países por región, nombre u otros criterios | 3 |
| **Búsqueda** | Implementa funcionalidad de búsqueda en tiempo real | 3 |
| **Transformación de datos** | Transforma datos para su visualización cuando es necesario | 2 |
| **Persistencia** | Implementa alguna forma de persistencia (opcional) | 2 |

---

## SECCIÓN 5: FUNCIONALIDAD Y EXPERIENCIA DE USUARIO (15 PUNTOS)

### 5.1 Características principales (8 puntos)

| Funcionalidad | Descripción | Puntos máx. |
|--------------|-------------|------------|
| **Visualización de países** | Muestra información clara y completa sobre los países | 2 |
| **Filtros combinados** | Permite combinar diferentes criterios de filtrado | 2 |
| **Detalles de país** | Permite ver información detallada de un país específico | 2 |
| **Características adicionales** | Implementa funcionalidades extra (favoritos, comparación, etc.) | 2 |

### 5.2 Experiencia de usuario (7 puntos)

| Aspecto | Descripción | Puntos máx. |
|---------|-------------|------------|
| **Usabilidad** | La aplicación es intuitiva y fácil de usar | 2 |
| **Feedback al usuario** | Proporciona retroalimentación clara sobre acciones y estados | 2 |
| **Consistencia visual** | Mantiene un diseño visual coherente en toda la aplicación | 1 |
| **Accesibilidad** | Implementa características básicas de accesibilidad | 2 |

---

## BONIFICACIONES (Hasta 10 puntos extra)

| Aspecto | Descripción | Puntos máx. |
|---------|-------------|------------|
| **Dashboard estadístico** | Implementa visualizaciones o dashboard con estadísticas | 3 |
| **Modo oscuro** | Añade funcionalidad de cambio entre tema claro/oscuro | 2 |
| **Exportación de datos** | Permite exportar datos filtrados a CSV u otro formato | 2 |
| **Optimización de rendimiento** | Implementa técnicas para mejorar el rendimiento | 2 |
| **Tests** | Incluye pruebas unitarias o de integración | 3 |

---

## EVALUACIÓN PRÁCTICA: DEMOSTRACIÓN DE CONOCIMIENTOS

Durante la presentación del proyecto, se evaluará la comprensión de los conceptos mediante preguntas específicas:

### Sobre Vue.js:
1. Explica cómo funciona la reactividad en Vue y cómo la has implementado en tu proyecto.
2. ¿Qué diferencia hay entre v-if y v-show? ¿Dónde usaste cada uno y por qué?
3. Explica el flujo de comunicación entre tus componentes.

### Sobre AG Grid:
1. ¿Cómo configuraste las columnas en AG Grid y por qué elegiste esas propiedades?
2. Explica cómo implementaste el renderizado personalizado para las banderas.
3. ¿Cómo manejas la actualización de datos en la tabla cuando se aplican filtros?

### Sobre Tailwind:
1. ¿Cómo implementaste el diseño responsive usando Tailwind?
2. ¿Qué ventajas encuentras en usar Tailwind frente a CSS tradicional?
3. ¿Cómo personalizaste Tailwind para tu proyecto?

### Sobre APIs y manejo de datos:
1. Explica el proceso de obtención y transformación de datos en tu aplicación.
2. ¿Cómo manejas los estados de carga y posibles errores?
3. Explica la implementación de los filtros y búsqueda.

---

## REQUISITOS DE ENTREGA

1. **Repositorio GitHub** con código fuente completo
2. **URL del proyecto desplegado** (si aplica)
3. **Documentación básica** en README.md:
   - Descripción del proyecto
   - Instrucciones de instalación y uso
   - Características implementadas
   - Tecnologías utilizadas
4. **Presentación** (7-10 minutos) demostrando el funcionamiento del proyecto

---

## GUÍA DE CALIFICACIÓN FINAL

| Rango | Calificación | Descripción |
|-------|--------------|-------------|
| 90-100 | **EXCELENTE (9-10)** | Dominio excepcional de Vue.js, AG Grid y Tailwind. Implementación completa con características adicionales. |
| 80-89 | **MUY BUENO (8-8.9)** | Buena implementación de todos los componentes con algunas características adicionales. |
| 70-79 | **BUENO (7-7.9)** | Proyecto funcional con implementación correcta de la mayoría de los requisitos. |
| 60-69 | **SATISFACTORIO (6-6.9)** | Implementación básica funcional con algunas limitaciones o inconsistencias. |
| 50-59 | **APROBADO (5-5.9)** | Implementación mínima que cumple con los requisitos básicos. |
| 0-49 | **INSUFICIENTE (0-4.9)** | No cumple con los requisitos mínimos. |

---

## OBSERVACIONES DIDÁCTICAS PARA EL DOCENTE

- Esta rúbrica está diseñada para evaluar tanto el resultado final como el proceso de aprendizaje.
- Las preguntas de evaluación práctica buscan verificar la comprensión genuina de los conceptos, no solo la capacidad de seguir tutoriales.
- Es recomendable revisar el código fuente para verificar que los estudiantes comprenden lo que implementaron.
- El proyecto debe demostrar progresión desde los conceptos básicos hasta una implementación integrada y funcional.
- Valorar positivamente las soluciones creativas y la capacidad de resolver problemas, incluso si difieren del enfoque estándar.
- Durante la presentación, es útil pedir pequeñas modificaciones al código para evaluar la comprensión real.

Esta rúbrica combina la evaluación de habilidades técnicas específicas con la comprensión conceptual, permitiendo evaluar de manera integral el aprendizaje del estudiante en el desarrollo de aplicaciones web modernas con Vue.js, AG Grid y Tailwind CSS.
