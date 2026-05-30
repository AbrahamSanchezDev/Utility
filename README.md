# Tools

## English

Utility is a small Angular utility library for array operations, text/HTML formatting, and JSON file downloads.

> This repository contains an Angular library package that can be built and published to npm for reuse in other projects.

**Publish to npm**
- When a new version is about to be publish the package.json inside of projects/tools should be updated

```bash
  "version": "0.0.3", <--- THIS ONE
```


- in order to publish to npm you have to have the console path in tools then run the publish command
```bash
cd projects/tools

npm publish
```

**Summary**
- **ArraysTool**: move, remove, combine, and shuffle array elements.
- **TextTool**: generic string operations (replace, insert, extract, remove segments).
- **RemoveReplaceOption**: utilities for rule-based replacements and bulk removal.
- **HtmlTextTool**: formats text for safe HTML display, converts custom tags, code blocks, images, and videos.
- **DownloadTool**: exports data to a downloadable JSON file in the browser.

**Relevant structure**
- Library source: `projects/tools/src/lib/`
- Public exports: `projects/tools/src/public-api.ts`

**How to use this repository (development and testing)**

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run start
```

3. Build the workspace or the library:

- Build the full project:

```bash
npm run build
```

- Build only the `tools` library:

```bash
ng build tools
```

4. Run unit tests:

```bash
npm run test
```

5. Run the linter:

```bash
npm run lint
```

**`package.json` scripts**
- **`npm run start`**: runs `ng serve` and starts the development server.
- **`npm run build`**: runs `ng build`. Use `ng build tools` to build only the library.
- **`npm run test`**: runs `ng test` (Karma + Jasmine).
- **`npm run lint`**: runs `ng lint`.

**Usage examples (after publishing or building the library)**

The package name in `projects/tools/package.json` is `@worldsdev/tools`.

```ts
import { ArraysTool, DownloadTool, HtmlTextTool } from '@worldsdev/tools';

const a = new ArraysTool();
console.log(a.shuffle([1, 2, 3, 4]));

const d = new DownloadTool();
d.DownloadTextToFileAsJson({ hello: 'world' }, 'my-data');

const h = new HtmlTextTool();
console.log(h.formatAllText('<app-root>Hello</app-root>'));
```

If you work inside the monorepo without publishing, import from `projects/tools/src/public-api.ts` or build the library and consume it from `dist/`.

**Class details**
- `ArraysTool` — methods: `moveElementInArray`, `moveElementAtIndexLeft/Right`, `moveElementLeft/Right`, `removeFromArray`, `combine`, `shuffle`.
- `TextTool` — methods: `replaceTextAt`, `replaceText`, `insertText`, `insertAfter`, `insertBefore`, `getTextBetween`, `removeAllTextFromTo`, `removeTextFromTo`.
- `RemoveReplaceOption` — methods: `removeAllOptions`, `replaceTextOptions`, `removeFromToOptions`; uses `RemoveReplaceOptions` and `ReplaceStrings`.
- `HtmlTextTool` — extends `RemoveReplaceOption`, adds code formatting, images, video handling, and HTML-safe transformations.
- `DownloadTool` — method `DownloadTextToFileAsJson(theText, fileName)` creates and downloads a JSON blob.

**Contributing**
- Open an issue or submit a pull request.
- Run `npm run lint` and `npm run test` before contributing.

---

## Español

Utility es una pequeña librería de utilidades Angular para operaciones con arrays, formateo de texto/HTML y descargas de archivos JSON.

> Este repositorio contiene una librería Angular que puede construirse y publicarse en npm para reutilizarse desde otros proyectos.

**Resumen**
- **ArraysTool**: mover, eliminar, combinar y barajar elementos de un array.
- **TextTool**: operaciones genéricas sobre cadenas (reemplazar, insertar, extraer, eliminar segmentos).
- **RemoveReplaceOption**: utilidades para reemplazos basados en reglas y eliminación masiva.
- **HtmlTextTool**: formatea texto para mostrar HTML seguro, convierte etiquetas personalizadas, bloques de código, imágenes y vídeos.
- **DownloadTool**: exporta datos como un archivo JSON descargable en el navegador.

**Estructura relevante**
- Código fuente de la librería: `projects/tools/src/lib/`
- Exportaciones públicas: `projects/tools/src/public-api.ts`

**Cómo usar este repositorio (desarrollo y pruebas)**

1. Instala dependencias:

```bash
npm install
```

2. Ejecuta el servidor de desarrollo:

```bash
npm run start
```

3. Compila el workspace o la librería:

- Compila el proyecto completo:

```bash
npm run build
```

- Compila solo la librería `tools`:

```bash
ng build tools
```

4. Ejecuta tests unitarios:

```bash
npm run test
```

5. Ejecuta el linter:

```bash
npm run lint
```

**Scripts de `package.json`**
- **`npm run start`**: ejecuta `ng serve` y arranca el servidor de desarrollo.
- **`npm run build`**: ejecuta `ng build`. Usa `ng build tools` para compilar solo la librería.
- **`npm run test`**: ejecuta `ng test` (Karma + Jasmine).
- **`npm run lint`**: ejecuta `ng lint`.

**Ejemplos de uso (después de publicar o compilar la librería)**

El nombre del paquete en `projects/tools/package.json` es `@worldsdev/tools`.

```ts
import { ArraysTool, DownloadTool, HtmlTextTool } from '@worldsdev/tools';

const a = new ArraysTool();
console.log(a.shuffle([1, 2, 3, 4]));

const d = new DownloadTool();
d.DownloadTextToFileAsJson({ hello: 'world' }, 'mi-datos');

const h = new HtmlTextTool();
console.log(h.formatAllText('<app-root>Hola</app-root>'));
```

Si trabajas dentro del monorepo sin publicar, importa desde `projects/tools/src/public-api.ts` o construye la librería y consúmela desde `dist/`.

**Detalles de cada clase**
- `ArraysTool` — métodos: `moveElementInArray`, `moveElementAtIndexLeft/Right`, `moveElementLeft/Right`, `removeFromArray`, `combine`, `shuffle`.
- `TextTool` — métodos: `replaceTextAt`, `replaceText`, `insertText`, `insertAfter`, `insertBefore`, `getTextBetween`, `removeAllTextFromTo`, `removeTextFromTo`.
- `RemoveReplaceOption` — métodos: `removeAllOptions`, `replaceTextOptions`, `removeFromToOptions`; usa `RemoveReplaceOptions` y `ReplaceStrings`.
- `HtmlTextTool` — extiende `RemoveReplaceOption`, añade formateo de código, manejo de imágenes y vídeo, y transformaciones para HTML seguro.
- `DownloadTool` — método `DownloadTextToFileAsJson(theText, fileName)` crea y descarga un blob JSON.

**Contribuir**
- Abre un issue o envía un pull request.
- Ejecuta `npm run lint` y `npm run test` antes de contribuir.

Si quieres, puedo añadir también un ejemplo específico para cada clase en Angular.
