# GUÍA DE APIS PÚBLICAS PARA PROYECTOS DE DESARROLLO WEB

## APIs DE INFORMACIÓN GEOGRÁFICA Y PAÍSES

### 1. REST Countries
- **URL**: https://restcountries.com/
- **Descripción**: Información completa sobre países
- **Características**:
  - Datos de todos los países del mundo
  - Información detallada: población, capital, idiomas, banderas
  - Sin autenticación
  - Formato JSON
- **Ejemplo de endpoint**: 
  ```
  https://restcountries.com/v3.1/all
  https://restcountries.com/v3.1/name/{nombre}
  ```

## CATEGORÍAS DE APIS PÚBLICAS

### 2. APIs DE ENTRETENIMIENTO

#### 2.1 The Movie Database (TMDb)
- **URL**: https://www.themoviedb.org/documentation/api
- **Descripción**: Información de películas y series
- **Características**:
  - Requiere registro para obtener API key
  - Detalles de películas, series, actores
  - Imágenes y pósters
- **Ejemplo de uso**: 
  - Crear un catálogo de películas
  - Dashboard de tendencias cinematográficas

#### 2.2 PokeAPI
- **URL**: https://pokeapi.co/
- **Descripción**: Información completa sobre Pokémon
- **Características**:
  - Sin autenticación
  - Datos de todos los Pokémon
  - Información de tipos, habilidades, estadísticas
- **Ejemplo de uso**:
  - Pokédex interactiva
  - Aplicación de comparación de Pokémon

### 3. APIs DE DATOS CIENTÍFICOS

#### 3.1 NASA API
- **URL**: https://api.nasa.gov/
- **Descripción**: Datos astronómicos y de la NASA
- **Características**:
  - Requiere API key (gratuita)
  - Imágenes del día
  - Datos de misiones espaciales
- **Ejemplo de uso**:
  - Galería de imágenes astronómicas
  - Dashboard de información espacial

#### 3.2 OpenWeatherMap
- **URL**: https://openweathermap.org/api
- **Descripción**: Datos meteorológicos
- **Características**:
  - Requiere API key
  - Pronósticos actuales y a futuro
  - Información de múltiples ciudades
- **Ejemplo de uso**:
  - Aplicación de clima
  - Dashboard de condiciones meteorológicas

### 4. APIs DE DATOS PÚBLICOS

#### 4.1 JSONPlaceholder
- **URL**: https://jsonplaceholder.typicode.com/
- **Descripción**: API de datos falsos para prototipado
- **Características**:
  - Sin autenticación
  - Datos de posts, usuarios, comentarios
  - Ideal para proyectos de prueba
- **Ejemplo de uso**:
  - Simulación de aplicación de blog
  - Práctica de consumo de APIs

#### 4.2 Rick and Morty API
- **URL**: https://rickandmortyapi.com/
- **Descripción**: Información sobre personajes de Rick and Morty
- **Características**:
  - Sin autenticación
  - Datos de personajes, ubicaciones, episodios
- **Ejemplo de uso**:
  - Catálogo de personajes
  - Aplicación de información de serie

### 5. APIs DE DATOS EDUCATIVOS

#### 5.1 Universidades API
- **URL**: http://universities.hipolabs.com/
- **Descripción**: Listado de universidades por país
- **Características**:
  - Sin autenticación
  - Información de universidades globales
- **Ejemplo de uso**:
  - Buscador de universidades
  - Dashboard educativo

### 6. APIs DE DATOS ECONÓMICOS

#### 6.1 Exchange Rates API
- **URL**: https://exchangeratesapi.io/
- **Descripción**: Tipos de cambio de monedas
- **Características**:
  - Requiere API key (plan gratuito disponible)
  - Tasas de cambio actualizadas
- **Ejemplo de uso**:
  - Convertidor de monedas
  - Dashboard financiero

## CONSIDERACIONES AL ELEGIR UNA API

### Factores a Evaluar
1. **Documentación**: Claridad y completitud
2. **Límites de Uso**: Número de peticiones permitidas
3. **Autenticación**: 
   - Sin autenticación
   - API key gratuita
   - Requiere plan de pago
4. **Formato de Datos**: JSON, XML
5. **Actualización**: Frecuencia de actualización de datos
6. **Complejidad**: Nivel de dificultad para consumirla

### Consejos Prácticos
- Leer la documentación completamente
- Probar endpoints en Postman
- Verificar los límites de uso
- Considerar el propósito de tu proyecto
- Tener un plan de contingencia si la API falla

## HERRAMIENTAS ÚTILES PARA TRABAJAR CON APIS

1. **Postman**: Probar endpoints
2. **Axios**: Librería para hacer peticiones HTTP
3. **Fetch API**: Método nativo de JavaScript
4. **Insomnia**: Alternativa a Postman
5. **JSON Viewer**: Extensiones para visualizar JSON

## RECURSOS ADICIONALES

- [Public APIs GitHub](https://github.com/public-apis/public-apis)
- [Rapid API](https://rapidapi.com/)
- [API List](https://apilist.fun/)

---

**NOTA IMPORTANTE**: 
Siempre verifica los términos de uso de cada API. Algunas pueden tener restricciones de uso comercial o requerir atribución.

¡Elige la API que mejor se adapte a tus objetivos de aprendizaje y proyecto!
