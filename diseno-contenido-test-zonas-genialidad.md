# Diseño de Contenido — Test de Zonas de Genialidad

**Estado:** borrador v1 para revisión de Rafa
**Fecha:** 2026-09-14
**Depende de:** `test-genialidad/prd-test-zonas-genialidad.md` (PRD ya aprobado)

---

## 0. Cómo está armado este documento

Sistema modular, no combinatorio: en vez de un texto único por cada combinación posible de perfil, hay 4 "paquetes de zona" (uno por cada zona: Procesos, Grupo, Visión, Resultados). Cada paquete tiene sus afirmaciones, su bloque de fortalezas y su bloque de "esto te cuesta / niebla mental vs. sobreesfuerzo". El resultado final del usuario se arma combinando el paquete de su zona dominante con el de su zona más baja, según la plantilla de la Sección 4.

Decisión tomada en este documento (avisa si no cuadra): se elimina la "Parte A" del original (autocalificación de párrafo antes de las 15 afirmaciones) — no encaja con la decisión de mezclar las preguntas entre zonas en pantalla. El test queda como un solo bloque de 32 afirmaciones cortas, mezcladas, con escala de 4 niveles.

---

## 1. Las 32 afirmaciones (8 por zona)

Redacción propia (no son copia del cuestionario original), en primera persona, tono conversacional — pensadas para leerse rápido desde el celular. En la herramienta real se presentan **mezcladas**, no agrupadas por zona como aparecen aquí.

Escala de respuesta para cada una: **No me describe / Un poco / Bastante / Totalmente** (0 / 1 / 2 / 3 puntos).

### Zona Procesos (orden, método, detalle)
1. Me siento más tranquilo cuando tengo un método claro para hacer las cosas, paso a paso.
2. Si algo no tiene una instrucción clara, prefiero pedirla antes que improvisar sobre la marcha.
3. Me doy cuenta rápido cuando algo está desordenado o fuera de lugar, y me incomoda dejarlo así.
4. Disfruto terminar tareas repetitivas bien hechas más que empezar algo completamente nuevo.
5. Cumplir con los plazos y los detalles acordados me importa más que improvisar sobre la marcha.
6. Me cuesta rendir bien cuando las reglas del juego cambian todo el tiempo.
7. Prefiero revisar la letra pequeña antes de lanzarme a hacer algo.
8. Cuando algo funciona bien, prefiero repetir la fórmula antes que reinventarla.

### Zona Grupo (conexión, empatía, armonía)
1. Antes de decidir algo importante, me pregunto cómo se va a sentir la gente involucrada.
2. Se me hace fácil notar cuando alguien está incómodo o tenso, aunque no lo diga.
3. Disfruto genuinamente escuchar lo que le pasa a los demás, no solo por cortesía.
4. Prefiero un ambiente de trabajo armonioso, aunque eso signifique evitar un conflicto necesario.
5. Me nace motivar y animar a otros cuando los veo desanimados.
6. Las conversaciones tensas o los conflictos abiertos me cuestan más energía que a la mayoría.
7. Mido el éxito de algo también por cómo se sintió la gente en el proceso, no solo por el resultado.
8. Conecto con la música, el ritmo o el ambiente de un grupo de una forma que a otros no les pasa tanto.

### Zona Visión (ideas, imaginación, panorama)
1. Se me ocurren ideas nuevas con facilidad, aunque no siempre sepa cómo ejecutarlas.
2. Me aburro rápido con tareas repetitivas o rutinarias, sin importar qué tan bien las haga.
3. Pienso mejor en imágenes o metáforas que en pasos numerados.
4. Prefiero tener varias cosas abiertas al mismo tiempo que enfocarme en una sola de principio a fin.
5. Confío en mi intuición para resolver problemas, incluso cuando no puedo explicar del todo por qué.
6. Algunas de mis mejores ideas me llegan cuando no estoy "trabajando" en nada en particular.
7. Me cuesta seguir un procedimiento exactamente como está escrito — siempre le veo una forma mejor.
8. Tengo un sentido del humor un poco distinto al del resto, que no todos entienden igual.

### Zona Resultados (lógica, decisión, eficacia)
1. Cuando algo no funciona, mi primer instinto es analizar los datos, no las emociones detrás.
2. Prefiero tener la última palabra en una decisión importante a que la tome otra persona por mí.
3. Mido si algo valió la pena por el resultado concreto que dio, más que por cómo se sintió el proceso.
4. Disfruto debatir y que me lleven la contraria, si el argumento es bueno.
5. Se me da bien detectar la falla técnica o el error de lógica que otros pasan por alto.
6. Prefiero trabajos donde pueda tomar decisiones rápidas basadas en números claros.
7. Me interesa más ser eficaz que agradar si tengo que elegir entre las dos cosas.
8. Delegar y dar instrucciones claras se me da más natural que seguir las de alguien más.

---

## 2. Lógica de puntuación

**Cálculo por zona:** suma de los puntos de las 8 afirmaciones de esa zona (0–3 cada una) → rango 0–24 por zona. Se calculan las 4 zonas en paralelo con las mismas 32 respuestas.

**Bandas de interpretación** (adaptadas proporcionalmente de las bandas del modelo original, que iban de 0–20):

| Puntaje (0–24) | % del máximo | Significado |
|---|---|---|
| 0–6 | 0–25% | **Zona que evitas** — te genera resistencia, fastidio o directamente la delegas/pospones. |
| 7–14 | 29–58% | **Zona de apoyo** — la puedes usar por elección consciente cuando hace falta, pero sostenerla mucho tiempo cansa. |
| 15–20 | 63–83% | **Zona natural** — tu forma de pensar preferida, te sale con relativamente poco esfuerzo. |
| 21–24 | 88–100% | **Zona de identidad** — no solo la prefieres, la consideras "la forma correcta" de pensar (con el riesgo de asumir que todos deberían pensar igual). |

**Determinación del perfil del usuario:**
- **Zona dominante:** la de mayor puntaje.
- **Co-dominancia:** si la segunda zona más alta está a 4 puntos o menos de la primera **y** ambas caen en "zona natural" o "zona de identidad", se presentan las dos como dominantes combinadas (igual que las combinaciones del modelo original, ej. HPI+HFI).
- **Zona más baja:** la de menor puntaje — es la que dispara el bloque "esto te cuesta más esfuerzo" + niebla mental vs. sobreesfuerzo.
- **Caso "zona de identidad" (21–24):** si la dominante cae en este rango, se agrega una línea de autoconciencia (ver plantilla, Sección 4) sobre el riesgo de asumir que todo el mundo debería pensar igual.

---

## 3. Bloques de resultado por zona

Cada zona tiene 3 bloques reutilizables: **fortaleza/fluye**, **cuesta**, y **niebla mental vs. sobreesfuerzo** (este último solo se usa cuando esa zona es la más baja del usuario).

### Zona Procesos

**Fortaleza (1 línea, para cuando es dominante):**
Tu cerebro rinde con más eficiencia cuando el terreno es claro: reglas definidas, pasos ordenados, un sistema que se puede repetir sin reinventarlo cada vez.

**Esto te va a fluir:**
Organizar información y procesos; mantener el control de calidad y los detalles; cumplir cronogramas y compromisos con precisión; construir y sostener rutinas (propias o de un equipo); trabajar con datos, documentos o sistemas que necesitan orden.

**Esto te va a costar más esfuerzo:**
Ambientes sin reglas claras o que cambian todo el tiempo; improvisar una solución sin un procedimiento de referencia; tomar decisiones rápidas con información incompleta; arrancar algo completamente nuevo sin un punto de partida conocido.

**Niebla mental vs. sobreesfuerzo (cuando Procesos es tu zona más baja):**
Si tu zona más baja es Procesos, cuidado con confundir dos cosas. La niebla mental que resuelve el sistema es no poder concentrarte porque tu mente está saturada. Pero si te ves obligado a ser ultra-organizado, seguir procedimientos rígidos o manejar el detalle fino durante mucho tiempo, lo que sientes después no es niebla — es el cansancio de tu cerebro operando fuera de su modo natural. Sostenido en el tiempo, ese esfuerzo "invisible" es un camino directo al agotamiento, aunque en el momento se sienta solo como "estrés normal de trabajo detallista".

### Zona Grupo

**Fortaleza:**
Tu cerebro rinde con más eficiencia cuando hay personas de por medio: leer el ambiente, conectar genuinamente, sostener la moral de un equipo.

**Esto te va a fluir:**
Mentoría, acompañamiento o desarrollo de personas; resolver tensiones de equipo antes de que escalen; comunicar y motivar; roles donde el vínculo humano es parte del trabajo, no un extra; detectar cómo está la gente antes de que lo digan en voz alta.

**Esto te va a costar más esfuerzo:**
Decisiones frías basadas solo en números, sin espacio para el factor humano; conflicto directo y sostenido; trabajar aislado durante periodos largos; dar noticias duras sin poder suavizar el mensaje.

**Niebla mental vs. sobreesfuerzo (cuando Grupo es tu zona más baja):**
Si te ves obligado a sostener conversaciones tensas, mediar conflictos o estar "disponible emocionalmente" para otros por periodos largos sin que sea tu forma natural de operar, el agotamiento que sientes después no es la niebla mental típica — es tu cerebro gastando el doble de energía en regular algo que a otros les sale con menos esfuerzo. Confundir esto con "simplemente estrés" te hace más propenso a un desgaste relacional sin entender bien por qué.

### Zona Visión

**Fortaleza:**
Tu cerebro rinde con más eficiencia cuando puede imaginar, conectar ideas sueltas y ver el panorama completo antes que el detalle.

**Esto te va a fluir:**
Generar ideas nuevas o soluciones poco obvias; ver conexiones que otros no ven; adaptarte rápido cuando todo cambia; proyectos abiertos donde no hay un solo camino correcto; comunicar con metáforas o imágenes que hacen clic.

**Esto te va a costar más esfuerzo:**
Tareas repetitivas sin variación; seguir un procedimiento exactamente como está escrito sin poder ajustarlo; sostener el enfoque en un solo tema por mucho tiempo; reglas rígidas que no dejan espacio para tu forma de pensar.

**Niebla mental vs. sobreesfuerzo (cuando Visión es tu zona más baja):**
Si te ves forzado a hacer trabajo repetitivo, seguir instrucciones al pie de la letra o sostener el mismo enfoque sin variación por mucho tiempo, la sensación de "cerebro apagado" que viene después no es solo niebla mental — es tu cerebro resistiéndose activamente a operar fuera de su modo natural. Ese desgaste se acumula más rápido de lo que parece, porque en el momento no se siente como "trabajo duro", sino como aburrimiento.

### Zona Resultados

**Fortaleza:**
Tu cerebro rinde con más eficiencia cuando hay un problema que resolver, una decisión que tomar y un resultado medible al final.

**Esto te va a fluir:**
Análisis y diagnóstico de problemas técnicos o financieros; tomar decisiones rápidas con datos; liderar y asumir la responsabilidad de un resultado; debatir y defender una postura con argumentos; optimizar procesos para que rindan más con menos.

**Esto te va a costar más esfuerzo:**
Decisiones que dependen solo del clima emocional del equipo; procesos lentos sin métricas claras de avance; suavizar un mensaje directo por sensibilidad ajena; ceder el control de una decisión a alguien más sin poder cuestionarla.

**Niebla mental vs. sobreesfuerzo (cuando Resultados es tu zona más baja):**
Si te ves obligado a sostener el enfoque analítico, tomar decisiones difíciles o liderar bajo presión por periodos largos sin que sea tu forma natural de operar, lo que sientes no es solo el "cerebro frito" de la niebla mental cotidiana — es el costo de operar en un modo que te exige mucho más esfuerzo consciente que a otros. Ignorar esa diferencia es una forma común de terminar agotado sin entender por qué, si "en teoría" no estabas haciendo nada tan distinto a lo de siempre.

---

## 4. Plantilla de ensamblaje del resultado

```
[TÍTULO]
Tu Zona de Genialidad: {Zona Dominante} [+ {Zona co-dominante} si aplica]

[INTRO]
{Fortaleza de la zona dominante}
[Si hay co-dominancia: + fortaleza de la segunda zona, unidas en una frase]
[Si la dominante está en banda "zona de identidad" 21-24: agregar línea de
autoconciencia — ver nota abajo]

[BLOQUE "ESTO TE VA A FLUIR"]
{Lista "esto te va a fluir" de la zona dominante}
[+ de la co-dominante si aplica]

[BLOQUE "ESTO TE VA A COSTAR MÁS ESFUERZO"]
{Lista "esto te va a costar más esfuerzo" de la zona más baja}

[BLOQUE NIEBLA MENTAL VS. SOBREESFUERZO]
{Texto de niebla mental vs. sobreesfuerzo de la zona más baja}

[CIERRE + DISCLAIMER + CTA]
(ver Secciones 5 y 6)
```

**Línea de autoconciencia (solo si la zona dominante puntuó 21–24):**
> Tu puntaje en {Zona} es tan alto que probablemente no solo la prefieres — la consideras la forma "correcta" de pensar. Vale la pena notar cuando das por hecho que los demás deberían resolver las cosas igual que tú: no siempre es así, y no tiene por qué serlo.

---

## 5. Copy del CTA de coaching 1:1 (cierre del resultado)

Versión sugerida, tono sutil, sin venta dura. Mecánica confirmada: enlace directo a Google Calendar (`https://calendar.app.google/eGo7DDmGYsSyC9V69`).

> Este test te da un mapa rápido de por dónde vas. Si quieres ir más a fondo — entender con precisión en qué se te está yendo la energía día a día y armar una estrategia hecha a tu medida, no genérica — eso es exactamente el tipo de trabajo que hacemos en una sesión 1:1. [Agenda aquí](https://calendar.app.google/eGo7DDmGYsSyC9V69).

---

## 6. Microcopy de UI y disclaimers

**Portada del test:**
- Título: "Test de Zonas de Genialidad"
- Promesa: "Descubre en qué tareas tu cerebro rinde mejor — y en cuáles no vas a ser competitivo por más que te esfuerces."
- Meta de tiempo: "Toma unos 4 minutos."
- Botón: "Empezar"
- Disclaimer de portada (visible, no letra pequeña): "Esta es una herramienta de autoconocimiento inspirada en modelos de estilos cognitivos — no es un test psicométrico validado ni un diagnóstico clínico. Tómalo como un mapa, no como una sentencia."

**Durante el cuestionario:**
- Barra de progreso: "Pregunta {n} de 32"
- Opciones de respuesta: "No me describe" / "Un poco" / "Bastante" / "Totalmente"

**Transición (1-2 segundos antes del resultado):**
- "Calculando tu mapa cerebral..."

**Resultado (footer):**
- Disclaimer de cierre: "Recuerda: esto es un mapa de tendencias, no una etiqueta fija. Todas las zonas son entrenables — algunas simplemente te van a costar más energía que otras, y eso también es información útil."
- Botón secundario: "Volver a hacer el test"

---

## 7bis. Sistema visual del test

**Decisión actualizada 2026-09-14:** el test sigue la identidad visual de los **recursos descargables** del sistema (Hoja de Ruta de 30 días, Diario de Hallazgos, Tarjeta de Enfoque Láser, Mi Rutina Imbatible, Kit de Infraestructura Física) — no la paleta oscuro + verde lima de la landing. Rafa pidió esta consistencia explícitamente: el test debe sentirse parte de la misma familia de materiales del sistema, no de la landing/marketplace. Paleta y patrones tomados directamente de `recursos/diario-de-hallazgos-fuente.html`, que ya es la fuente de verdad de este sistema visual en el proyecto.

**Paleta (tokens exactos, ya en uso en el proyecto):**

| Token | Hex | Uso |
|---|---|---|
| `--cream` | `#F4F1EA` | Fondo general (con textura de grid sutil encima, ver abajo) |
| `--card` | `#E9E3D6` | Fondo de tarjetas/paneles |
| `--navy` | `#1D3557` | Títulos, callouts, texto de énfasis |
| `--orange` | `#D35400` | Acento único — bordes, subrayados, números, elementos interactivos |
| `--text` | `#3E3B33` | Texto de cuerpo |
| `--muted` | `#8A8578` | Texto secundario/etiquetas |
| `--line` | `#C7B99A` | Bordes, líneas divisorias, anillos de referencia |
| `--white` | `#FBFAF6` | Blanco cálido (cajas destacadas, íconos) |

**Tipografía (Google Fonts ya cargadas en el proyecto):** Bricolage Grotesque (peso 700-800, títulos), DM Sans (400-700, cuerpo y opciones de respuesta), DM Mono (400-500, mayúsculas, etiquetas, contador de progreso, puntajes numéricos).

**Patrones de composición a reutilizar** (mismos que Hoja de Ruta / Diario de Hallazgos): fondo con textura de grid sutil (líneas finas `rgba(138,133,120,0.16)`), tarjetas con borde inferior de 3px en `--orange`, callouts en caja `--navy` con texto claro, línea de acento (`rule`) bajo los títulos, cajas "howto" con borde punteado para los disclaimers. Reutilizar estos patrones (no inventar unos nuevos) es lo que hace que el test se sienta parte del mismo sistema y no una pieza aparte.

### La rueda de resultado

El original de Benziger no es un radar de líneas clásico: es un círculo dividido en cruz en 4 cuadrantes, con anillos concéntricos (5/10/15/20) que van del centro hacia afuera, y cada cuadrante se "rellena" hasta el punto que corresponde al puntaje de esa zona — un gráfico de área polar (tipo "coxcomb"), no un radar de puntos conectados. Los cuadrantes están ubicados donde físicamente estaría esa zona del cerebro (arriba = frontal, abajo = posterior, izquierda/derecha = cada hemisferio), así que el gráfico funciona como un mapa cerebral, no solo como una forma abstracta — vale la pena conservar esa metáfora en la versión propia.

**Layout adaptado a las 4 zonas del test:**
- Arriba-izquierda: **Resultados**
- Arriba-derecha: **Visión**
- Abajo-izquierda: **Procesos**
- Abajo-derecha: **Grupo**

**Mecánica:** cada cuadrante se rellena de forma proporcional al puntaje 0–24 de esa zona (radio del relleno = puntaje / 24 del radio total del círculo). El resultado es una figura irregular, distinta para cada persona, que se lee de un vistazo.

**Estilo (con la paleta de esta sección):** fondo `--cream` o `--white`, anillos de referencia en `--line` (sutiles, como las líneas punteadas de las tablas del Diario de Hallazgos), relleno de cada cuadrante en `--orange` con distinta opacidad por zona para diferenciarlas visualmente (o los 4 en el mismo tono si se prefiere más sobriedad), etiquetas de zona y puntaje en `--navy` con Bricolage Grotesque/DM Mono. El centro del círculo puede llevar un ícono simple, siguiendo el patrón ya usado en las tarjetas `.legend` del Diario de Hallazgos.

**Nota técnica para la fase de construcción:** el detalle fino de este gráfico (accesibilidad, especificación exacta de marcas) se resuelve siguiendo la guía de visualización de datos del proyecto en el momento de construir la herramienta interactiva — aquí solo se deja clara la mecánica, el layout y la paleta.

---

## 7. Próximos pasos

1. Revisión de este documento con Rafa (afirmaciones, tono, lógica de puntuación, bloques de resultado).
2. Ajustes según feedback.
3. Construir la herramienta interactiva con este contenido, siguiendo la arquitectura técnica ya definida en el PRD (Sección 9).
4. Piloto con Rafa + 2-3 personas del perfil de Camilo antes de publicar.
