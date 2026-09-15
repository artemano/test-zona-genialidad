# Test de Zonas de Genialidad

Bono 3 del *Sistema Mente Imbatible*. Micro-app de autoconocimiento (modelo de estilos de pensamiento de Katherine Benziger, simplificado) pensada como el primer módulo de un futuro hub de tests.

**Estado:** publicado y embebido — la herramienta está en [GitHub Pages](https://artemano.github.io/test-zona-genialidad/tests/estilo-pensamiento/index.html) y embebida en Hotmart Club. Las 32 afirmaciones, la lógica de puntuación (incluyendo las reglas de empate por banda y perfil parejo), la rueda de resultado y el ensamblaje de textos ya están implementados (ver `openspec/changes/build-test-zonas-genialidad/`). El JS publicado está ofuscado (ver Sección "Build" abajo). Pendiente: el piloto con Rafa + 2-3 personas del perfil de Camilo (grupo 6 de `tasks.md`).

## Documentos de referencia

- [`prd-test-zonas-genialidad.md`](./prd-test-zonas-genialidad.md) — qué es, para quién, alcance, arquitectura, decisiones tomadas con Rafa.
- [`diseno-contenido-test-zonas-genialidad.md`](./diseno-contenido-test-zonas-genialidad.md) — las 32 afirmaciones, lógica de puntuación, textos de resultado por zona, sistema visual.

Estos dos documentos son la fuente de verdad del contenido. El código debe seguirlos, no al revés.

## Estructura

```
test-genialidad/
├── index.html                        # Hub — pantalla de entrada, hoy con un solo test
├── build.js                          # Genera el index.html publicado (ofuscado) desde src/
├── package.json                      # Dependencia de build: javascript-obfuscator
└── tests/
    └── estilo-pensamiento/
        ├── src/index.html            # FUENTE — edita siempre aquí
        └── index.html                # PUBLICADO — generado por `npm run build`, no editar a mano
```

- **`index.html`** (raíz) es el "shell": header/estilo visual reutilizable, y una tarjeta por cada test disponible (hoy solo una). Al sumar un test nuevo, se agrega una carpeta en `tests/` y una tarjeta acá — no se reconstruye el shell.
- **`tests/estilo-pensamiento/src/index.html`** es el test en sí, en texto legible (autocontenido, sin dependencias de servidor, todo el cálculo en el cliente). Las 4 pantallas del flujo (portada → cuestionario → transición → resultado) están completas: las 32 afirmaciones reales, el cálculo de puntaje por zona, las reglas de dominancia/co-dominancia/empate por banda/perfil parejo, la rueda de resultado en SVG, y el ensamblaje de los 3 tipos de resultado (estándar, D1 perfil plano, D2 piso plano).
- **`tests/estilo-pensamiento/index.html`** es la versión publicada — mismo HTML/CSS, pero con el `<script>` ofuscado por `build.js`. Es la que sirve GitHub Pages y la que está embebida en Hotmart; no se edita directamente.

## Build (ofuscación del JS publicado)

El HTML/CSS y el texto de las preguntas siguen siendo visibles para cualquiera (son contenido, no lógica) — lo que se ofusca es el algoritmo de puntuación (bandas, umbrales de empate, determinación de dominancia/perfil parejo), para que no sea trivial de leer con "Ver código fuente". No es protección absoluta — nada que corre en el navegador del usuario puede serlo — sube el costo de copiar la lógica, no lo elimina.

```bash
npm install   # una sola vez
npm run build # regenera tests/estilo-pensamiento/index.html desde src/
```

Flujo de trabajo: edita siempre `tests/estilo-pensamiento/src/index.html`, corre `npm run build`, y sube (commit + push) tanto el `src/` como el `index.html` generado. `node_modules/` no se versiona.

## Sistema visual

Paleta y tipografía tomadas de `../recursos/diario-de-hallazgos-fuente.html` (crema + naranja quemado, Bricolage Grotesque / DM Sans / DM Mono) — ver Sección 7bis del documento de diseño de contenido para el detalle completo. Es la misma familia visual de los recursos descargables del sistema (Hoja de Ruta, Diario de Hallazgos), no la paleta oscuro + verde lima de la landing.

## Próximos pasos

Ver `openspec/changes/build-test-zonas-genialidad/tasks.md` para el detalle. Queda pendiente:

1. Conectar el repo a un remoto en GitHub y habilitar GitHub Pages como URL canónica.
2. Confirmar con Rafa si Hotmart Club permite embeber esa URL por iframe, o si hace falta subir una copia de respaldo del HTML directamente.
3. Piloto con Rafa + 2-3 personas del perfil de Camilo sobre la URL publicada, y ajustar los umbrales de empate (4/5 puntos) o el copy según lo que se observe.
