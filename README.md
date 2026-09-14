# Test de Zonas de Genialidad

Bono 3 del *Sistema Mente Imbatible*. Micro-app de autoconocimiento (modelo de estilos de pensamiento de Katherine Benziger, simplificado) pensada como el primer módulo de un futuro hub de tests.

**Estado:** scaffolding inicial — estructura de carpetas y pantallas creada, contenido del cuestionario (32 afirmaciones, lógica de puntuación, textos de resultado) todavía no está implementado en código.

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
- **`tests/estilo-pensamiento/index.html`** es el test en sí, autocontenido (sin dependencias de servidor, todo el cálculo en el cliente). Ahora mismo solo tiene la estructura de las 4 pantallas del flujo (portada → cuestionario → transición → resultado) con navegación funcional; falta cargar las 32 afirmaciones reales, la lógica de puntuación y los textos de resultado por zona (ver Sección 8 del PRD y Secciones 1–6 del documento de diseño de contenido).

## Sistema visual

Paleta y tipografía tomadas de `../recursos/diario-de-hallazgos-fuente.html` (crema + naranja quemado, Bricolage Grotesque / DM Sans / DM Mono) — ver Sección 7bis del documento de diseño de contenido para el detalle completo. Es la misma familia visual de los recursos descargables del sistema (Hoja de Ruta, Diario de Hallazgos), no la paleta oscuro + verde lima de la landing.

## Próximos pasos

Ver Sección 13 del PRD y Sección 7 del documento de diseño de contenido. En código, lo que sigue después de este scaffolding es:

1. Cargar las 32 afirmaciones (mezcladas) en la pantalla de cuestionario, con la escala de 4 niveles.
2. Implementar la lógica de puntuación por zona y la determinación de dominancia/co-dominancia/zona más baja.
3. Construir la rueda de resultado (gráfico de área polar de 4 cuadrantes).
4. Ensamblar los textos de resultado según la plantilla de la Sección 4 del documento de diseño.
5. Piloto con Rafa + 2-3 personas del perfil de Camilo antes de publicar.
