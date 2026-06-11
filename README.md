# 📦 @worldsdev/Tools

Angular utility library for arrays, text formatting, HTML transformation, and file downloads.

---

## English

### 📋 Project Summary

**@worldsdev/Tools** is a production-ready Angular utility library that provides robust, reusable utilities for common programming tasks. The library is designed for developers who need reliable, well-tested utilities for array manipulation, string operations, HTML formatting, and browser-based file downloads. This package can be built and published to npm for seamless integration into other Angular projects.

### 🎯 Project Overview

The Tools library encapsulates five core utility classes, each solving specific programming challenges:

- **Array Operations**: Move, remove, combine, and shuffle array elements with a fluent API
- **String Manipulation**: Insert, replace, extract, and remove text segments with precision
- **Rule-Based Transformations**: Apply bulk replacements and removals using declarative rule objects
- **HTML Formatting**: Transform user input into safe, displayable HTML with support for custom tags, code blocks, images, and embedded media
- **File Downloads**: Export JavaScript objects directly to JSON files in the browser

### ✨ Key Features

- ✅ **ArraysTool**: Move elements left/right, remove items, combine arrays, shuffle with Fisher-Yates algorithm
- ✅ **TextTool**: Replace, insert, and extract text with selection-aware positioning
- ✅ **RemoveReplaceOption**: Bulk text operations using declarative rule-based configuration
- ✅ **HtmlTextTool**: Safe HTML display with custom tag conversion, code formatting, image/video embedding
- ✅ **DownloadTool**: Browser-based JSON export functionality
- ✅ **Inheritance-based Architecture**: Clean separation of concerns with extensible class hierarchy
- ✅ **TypeScript**: Full type safety with strict null checking
- ✅ **Framework-Agnostic Core**: Utilities can be used independently

### 📂 Project Structure

```
projects/tools/
├── src/
│   ├── lib/
│   │   ├── arrays-tool/          # Array manipulation utilities
│   │   ├── text-tool/            # Base text manipulation
│   │   ├── remove-replace-option/ # Rule-based transformation
│   │   ├── html-tool/            # HTML-specific formatting
│   │   ├── download-tool/        # Browser download utilities
│   │   └── tools.module.ts       # Angular module export
│   ├── public-api.ts             # Public barrel export
│   └── test.ts                   # Test entry point
├── ng-package.json               # ng-packagr configuration
└── package.json                  # Package metadata
```

### 🏗️ Architecture Highlights

The library uses an **inheritance-based hierarchy** for code reuse:

```
TextTool (base string operations)
    ↓
RemoveReplaceOption (rule-based bulk operations)
    ↓
HtmlTextTool (HTML-safe transformations)
```

**Patterns Used**:
- **Inheritance**: Reusable base functionality in parent classes
- **Composition**: Rule objects (`RemoveReplaceOptions`, `ReplaceStrings`) for flexible configuration
- **Strategy Pattern**: Different formatting rules for code, images, and videos
- **Immutable Operations**: Methods return new strings without mutating originals (where applicable)

### 🛠️ Technology Stack

- **Angular** (`^21.2.14`) — Framework for module integration and testing
- **TypeScript** (`^6.0.3`) — Type-safe implementation
- **ng-packagr** (`^21.2.3`) — Library bundling and distribution
- **Karma** (`~6.4.0`) — Test runner
- **Jasmine** (`~5.1.0`) — Unit testing framework
- **RxJS** (`^7.8.2`) — Reactive utilities (Angular compatibility)

### 💻 Code Quality & Engineering Practices

This library demonstrates professional software engineering:

- **Type Safety**: Full TypeScript strict mode with explicit types
- **Separation of Concerns**: Single Responsibility Principle with focused utility classes
- **Extensibility**: Base classes designed for inheritance and composition
- **Testability**: Isolated, pure functions with clear contracts
- **Documentation**: Self-documenting method names and clear parameter intent
- **Maintainability**: Clean code structure with logical grouping in separate files

### 🚀 How to Build & Run Locally

**Prerequisites**: Node.js >= 18, npm >= 9, Angular CLI >= 21

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server** (for testing and development):
   ```bash
   npm run start
   ```

3. **Build the library**:
   ```bash
   # Build full workspace
   npm run build
   
   # Or build only the tools library
   ng build tools
   ```

4. **Run tests**:
   ```bash
   npm run test
   ```

5. **Lint code**:
   ```bash
   npm run lint
   ```

6. **Publish to npm** (after building):
   ```bash
   cd dist/@worldsdev/tools
   npm publish
   ```

### 📖 Usage Examples

**After publishing to npm or importing from source**:

```ts
import { ArraysTool, DownloadTool, HtmlTextTool, TextTool } from '@worldsdev/tools';

// Array utilities
const arrayTool = new ArraysTool();
const shuffled = arrayTool.shuffle([1, 2, 3, 4, 5]);
const moved = [...shuffled];
arrayTool.moveElementRight(moved, 3); // Move element 3 to the right

// Text utilities
const textTool = new TextTool();
const inserted = textTool.insertAfter('Hello World', 'Hello', '✨ ');
// Result: "Hello✨ World"

// HTML formatting
const htmlTool = new HtmlTextTool();
const safe = htmlTool.formatAllText('<app-root>My Component</app-root>');
// Converts tags to safe HTML entities: &lt;app-root&gt;My Component&lt;/app-root&gt;

// File downloads
const downloadTool = new DownloadTool();
downloadTool.DownloadTextToFileAsJson({ name: 'John', age: 30 }, 'user-data');
// Downloads: user-data.json
```

### 📚 Class Reference

| Class | Purpose | Key Methods |
|-------|---------|-------------|
| `ArraysTool` | Array manipulation | `shuffle`, `moveElementInArray`, `removeFromArray`, `combine` |
| `TextTool` | String operations | `replaceText`, `insertText`, `getTextBetween`, `removeAllTextFromTo` |
| `RemoveReplaceOption` | Bulk transformations | `removeAllOptions`, `replaceTextOptions` |
| `HtmlTextTool` | HTML formatting | `formatAllText`, `formatTextToCode`, `setToTag`, `removeAllTags` |
| `DownloadTool` | Browser downloads | `DownloadTextToFileAsJson` |

### 💡 Development Insights

- **Modular Design**: Each utility can be used independently without dependencies on others
- **Performance**: Efficient string algorithms with configurable limits on replacement iterations
- **Browser Compatibility**: Works with modern browsers supporting Blob API and DOM selections
- **Angular Integration**: Designed as an Angular library using ng-packagr standard

### 🎓 Learning Outcomes

This project demonstrates:
- Building production-grade npm packages with Angular CLI
- TypeScript strict mode and type system best practices
- Library architecture with inheritance and composition
- Unit testing with Jasmine/Karma
- String manipulation algorithms and edge case handling
- HTML sanitization and safe text formatting

### 👨‍💼 Author

**Abraham Sanchez** — Full-stack developer focused on Angular utilities and reusable components.

---

---

## Español

### 📋 Resumen del Proyecto

**@worldsdev/Tools** es una librería de utilidades Angular lista para producción que proporciona herramientas robustas y reutilizables para tareas comunes. La librería está diseñada para desarrolladores que necesitan utilidades confiables y bien probadas para manipulación de arrays, operaciones con cadenas, formateo HTML y descargas de archivos en el navegador. Este paquete puede compilarse y publicarse en npm para integrarse sin problemas en otros proyectos Angular.

### 🎯 Descripción General del Proyecto

La librería Tools encapsula cinco clases de utilidades principales, cada una resolviendo desafíos de programación específicos:

- **Operaciones con Arrays**: Mover, eliminar, combinar y barajar elementos de un array con una API fluida
- **Manipulación de Cadenas**: Insertar, reemplazar, extraer y eliminar segmentos de texto con precisión
- **Transformaciones Basadas en Reglas**: Aplicar reemplazos y eliminaciones masivas usando objetos de reglas declarativos
- **Formateo HTML**: Transformar entrada de usuario en HTML seguro y mostrable con soporte para etiquetas personalizadas, bloques de código, imágenes y medios integrados
- **Descargas de Archivos**: Exportar objetos JavaScript directamente a archivos JSON en el navegador

### ✨ Características Principales

- ✅ **ArraysTool**: Mover elementos izquierda/derecha, eliminar elementos, combinar arrays, barajar con algoritmo Fisher-Yates
- ✅ **TextTool**: Reemplazar, insertar y extraer texto con posicionamiento consciente de la selección
- ✅ **RemoveReplaceOption**: Operaciones de texto masivas usando configuración declarativa basada en reglas
- ✅ **HtmlTextTool**: Visualización segura de HTML con conversión de etiquetas personalizadas, formateo de código, incrustación de imágenes/vídeo
- ✅ **DownloadTool**: Funcionalidad de exportación JSON basada en navegador
- ✅ **Arquitectura Basada en Herencia**: Separación clara de responsabilidades con jerarquía de clases extensible
- ✅ **TypeScript**: Seguridad de tipos completa con verificación de nulidad estricta
- ✅ **Núcleo Agnóstico de Framework**: Las utilidades pueden usarse independientemente

### 📂 Estructura del Proyecto

```
projects/tools/
├── src/
│   ├── lib/
│   │   ├── arrays-tool/          # Utilidades de manipulación de arrays
│   │   ├── text-tool/            # Manipulación base de texto
│   │   ├── remove-replace-option/ # Transformación basada en reglas
│   │   ├── html-tool/            # Formateo específico de HTML
│   │   ├── download-tool/        # Utilidades de descarga en navegador
│   │   └── tools.module.ts       # Exportación del módulo Angular
│   ├── public-api.ts             # Exportación barrel pública
│   └── test.ts                   # Punto de entrada de tests
├── ng-package.json               # Configuración de ng-packagr
└── package.json                  # Metadatos del paquete
```

### 🏗️ Aspectos Destacados de la Arquitectura

La librería usa una **jerarquía basada en herencia** para reutilización de código:

```
TextTool (operaciones base de cadenas)
    ↓
RemoveReplaceOption (operaciones masivas basadas en reglas)
    ↓
HtmlTextTool (transformaciones seguras para HTML)
```

**Patrones Utilizados**:
- **Herencia**: Funcionalidad base reutilizable en clases padre
- **Composición**: Objetos de reglas (`RemoveReplaceOptions`, `ReplaceStrings`) para configuración flexible
- **Patrón Strategy**: Diferentes reglas de formateo para código, imágenes y vídeos
- **Operaciones Inmutables**: Los métodos devuelven nuevas cadenas sin mutar originales (donde aplica)

### 🛠️ Stack Tecnológico

- **Angular** (`^21.2.14`) — Framework para integración de módulos y testing
- **TypeScript** (`^6.0.3`) — Implementación con seguridad de tipos
- **ng-packagr** (`^21.2.3`) — Empaquetado y distribución de librerías
- **Karma** (`~6.4.0`) — Ejecutor de tests
- **Jasmine** (`~5.1.0`) — Framework de testing unitario
- **RxJS** (`^7.8.2`) — Utilidades reactivas (compatibilidad Angular)

### 💻 Calidad de Código y Prácticas de Ingeniería

Esta librería demuestra ingeniería de software profesional:

- **Seguridad de Tipos**: TypeScript en modo estricto completo con tipos explícitos
- **Separación de Responsabilidades**: Principio de Responsabilidad Única con clases de utilidades enfocadas
- **Extensibilidad**: Clases base diseñadas para herencia y composición
- **Testabilidad**: Funciones aisladas y puras con contratos claros
- **Documentación**: Nombres de métodos auto-documentados e intención clara de parámetros
- **Mantenibilidad**: Estructura de código limpia con agrupación lógica en archivos separados

### 🚀 Cómo Compilar y Ejecutar Localmente

**Requisitos Previos**: Node.js >= 18, npm >= 9, Angular CLI >= 21

1. **Instala dependencias**:
   ```bash
   npm install
   ```

2. **Ejecuta el servidor de desarrollo** (para testing y desarrollo):
   ```bash
   npm run start
   ```

3. **Compila la librería**:
   ```bash
   # Compila el workspace completo
   npm run build
   
   # O compila solo la librería tools
   ng build tools
   ```

4. **Ejecuta tests**:
   ```bash
   npm run test
   ```

5. **Ejecuta el linter**:
   ```bash
   npm run lint
   ```

6. **Publica en npm** (después de compilar):
   ```bash
   cd dist/@worldsdev/tools
   npm publish
   ```

### 📖 Ejemplos de Uso

**Después de publicar en npm o importar desde la fuente**:

```ts
import { ArraysTool, DownloadTool, HtmlTextTool, TextTool } from '@worldsdev/tools';

// Utilidades de array
const arrayTool = new ArraysTool();
const barajado = arrayTool.shuffle([1, 2, 3, 4, 5]);
const movido = [...barajado];
arrayTool.moveElementRight(movido, 3); // Mover elemento 3 a la derecha

// Utilidades de texto
const textTool = new TextTool();
const insertado = textTool.insertAfter('Hola Mundo', 'Hola', '✨ ');
// Resultado: "Hola✨ Mundo"

// Formateo HTML
const htmlTool = new HtmlTextTool();
const seguro = htmlTool.formatAllText('<app-root>Mi Componente</app-root>');
// Convierte etiquetas a entidades HTML seguras: &lt;app-root&gt;Mi Componente&lt;/app-root&gt;

// Descargas de archivos
const downloadTool = new DownloadTool();
downloadTool.DownloadTextToFileAsJson({ nombre: 'Juan', edad: 30 }, 'datos-usuario');
// Descarga: datos-usuario.json
```

### 📚 Referencia de Clases

| Clase | Propósito | Métodos Principales |
|-------|-----------|-------------------|
| `ArraysTool` | Manipulación de arrays | `shuffle`, `moveElementInArray`, `removeFromArray`, `combine` |
| `TextTool` | Operaciones de cadenas | `replaceText`, `insertText`, `getTextBetween`, `removeAllTextFromTo` |
| `RemoveReplaceOption` | Transformaciones masivas | `removeAllOptions`, `replaceTextOptions` |
| `HtmlTextTool` | Formateo de HTML | `formatAllText`, `formatTextToCode`, `setToTag`, `removeAllTags` |
| `DownloadTool` | Descargas en navegador | `DownloadTextToFileAsJson` |

### 💡 Insights de Desarrollo

- **Diseño Modular**: Cada utilidad puede usarse independientemente sin dependencias en otras
- **Rendimiento**: Algoritmos eficientes de cadenas con límites configurables en iteraciones de reemplazo
- **Compatibilidad del Navegador**: Funciona con navegadores modernos que soportan Blob API y selecciones de DOM
- **Integración Angular**: Diseñado como una librería Angular usando estándares de ng-packagr

### 🎓 Resultados de Aprendizaje

Este proyecto demuestra:
- Construcción de paquetes npm listos para producción con Angular CLI
- Mejores prácticas de TypeScript en modo estricto y sistema de tipos
- Arquitectura de librerías con herencia y composición
- Testing unitario con Jasmine/Karma
- Algoritmos de manipulación de cadenas y manejo de casos límite
- Sanitización de HTML y formateo seguro de texto

### 👨‍💼 Autor

**Abraham Sanchez** — Desarrollador full-stack enfocado en utilidades Angular y componentes reutilizables.
