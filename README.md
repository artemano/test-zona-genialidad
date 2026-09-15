# Test de Zonas de Genialidad

Bono 3 del *Sistema Mente Imbatible*. Micro-app de autoconocimiento (modelo de estilos de pensamiento de Katherine Benziger, simplificado) pensada como el primer módulo de un futuro hub de tests.

**Estado:** herramienta funcional en local — las 32 afirmaciones, la lógica de puntuación (incluyendo las reglas de empate por banda y perfil parejo), la rueda de resultado y el ensamblaje de textos ya están implementados (ver `openspec/changes/build-test-zonas-genialidad/`). Pendiente: publicación en GitHub Pages, entrega en Hotmart Club, y el piloto con Rafa + 2-3 personas del perfil de Camilo antes de publicar (grupos 5 y 6 de `tasks.md`).

## Documentos de referencia

- [`prd-test-zonas-genialidad.md`](./prd-test-zonas-genialidad.md) — qué es, para quién, alcance, arquitectura, decisiones tomadas con Rafa.
- [`diseno-contenido-test-zonas-genialidad.md`](./diseno-contenido-test-zonas-genialidad.md) — las 32 afirmaciones, lógica de puntuación, textos de resultado por zona, sistema visual.

Estos dos documentos son la fuente de verdad del contenido. El código debe seguirlos, no al revés.

## Estructura

```
test-genialidad/
├── index.html                        # Hub — pantalla de entrada, hoy con un solo test
└── tests/
    └── estilo-pensamiento/
        └── index.html                # Módulo del test (autocontenido: HTML+CSS+JS)
```

- **`index.html`** es el "shell": header/estilo visual reutilizable, y una tarjeta por cada test disponible (hoy solo una). Al sumar un test nuevo, se agrega una carpeta en `tests/` y una tarjeta acá — no se reconstruye el shell.
- **`tests/estilo-pensamiento/index.html`** es el test en sí, autocontenido (sin dependencias de servidor, todo el cálculo en el cliente). Las 4 pantallas del flujo (portada → cuestionario → transición → resultado) están completas: las 32 afirmaciones reales, el cálculo de puntaje por zona, las reglas de dominancia/co-dominancia/empate por banda/perfil parejo, la rueda de resultado en SVG, y el ensamblaje de los 3 tipos de resultado (estándar, D1 perfil plano, D2 piso plano).

## Sistema visual

Paleta y tipografía tomadas de `../recursos/diario-de-hallazgos-fuente.html` (crema + naranja quemado, Bricolage Grotesque / DM Sans / DM Mono) — ver Sección 7bis del documento de diseño de contenido para el detalle completo. Es la misma familia visual de los recursos descargables del sistema (Hoja de Ruta, Diario de Hallazgos), no la paleta oscuro + verde lima de la landing.

## Próximos pasos

Ver `openspec/changes/build-test-zonas-genialidad/tasks.md` para el detalle. Queda pendiente:

1. Conectar el repo a un remoto en GitHub y habilitar GitHub Pages como URL canónica.
2. Confirmar con Rafa si Hotmart Club permite embeber esa URL por iframe, o si hace falta subir una copia de respaldo del HTML directamente.
3. Piloto con Rafa + 2-3 personas del perfil de Camilo sobre la URL publicada, y ajustar los umbrales de empate (4/5 puntos) o el copy según lo que se observe.
