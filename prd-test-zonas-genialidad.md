# PRD — Test de Zonas de Genialidad (Bono 3, Sistema Mente Imbatible)

**Estado:** v1.1 — decisiones abiertas resueltas con Rafa, listo para pasar a diseño de contenido
**Fecha:** 2026-09-14
**Contexto:** Bono 3 del value stack de *Sistema Mente Imbatible* (curso DIY, $27 USD, Hotmart). Basado en el modelo de Katherine Benziger (estilos de pensamiento / dominancia cerebral), simplificado de forma honesta, y diseñado como el primer módulo de una micro-app que más adelante sumará otros tests de autoconocimiento.

---

## 1. Resumen y propósito

Camilo (el avatar del cliente) ya pagó $27 por un sistema para recuperar el enfoque mental. El Test de Zonas de Genialidad es uno de los tres bonos que hacen esa oferta más irresistible en la landing, y su trabajo específico dentro del sistema es distinto al de los módulos: no enseña una técnica, **da un diagnóstico sobre sí mismo** — en qué tipo de tareas su cerebro rinde con naturalidad y en cuáles va a estar remando contracorriente por más esfuerzo que le ponga. Ese "ajá, por eso me cuesta tanto esto" es lo que hace que el bono se sienta valioso por sí solo, y no solo como relleno del value stack.

El PRD cubre la primera versión de la herramienta (un solo test: estilo de pensamiento, modelo Benziger) y dexa la puerta abierta, en su arquitectura, para sumar tests adicionales sin rehacer la app.

---

## 2. Contexto de negocio (de lo ya definido en el proyecto)

- **Producto madre:** Sistema Mente Imbatible — curso pregrabado DIY, $27 USD, 10 módulos + 4 audios + manual + hoja de ruta + 3 bonos.
- **Este bono en la oferta:** listado en la sección "Bonus" de la landing junto al audio de 3 minutos y el ebook "Silencia la Vocecita". No es lo que bloquea el lanzamiento — puede desarrollarse en paralelo.
- **Avatar:** Camilo Restrepo, 42, gerente/profesional con "cerebro frito" al final del día. Escéptico de lo esotérico ("hipnosis", "sanación"), responde bien a lenguaje de neurociencia, sistema y datos. Ya probó de todo (meditación, Pomodoro, terapia esporádica) y nada le resolvió la raíz — así que cualquier promesa que suene a "otro test más de internet" pierde credibilidad rápido.
- **Consigna explícita del brief original:** version simplificada y honesta del modelo Benziger, **sin sobre-prometer validez clínica que el test original no tiene del todo respaldada**. Esto no es un detalle legal menor — es la diferencia entre que Camilo confíe en la herramienta o la cierre a los 30 segundos.
- **Identidad visual — decisión actualizada 2026-09-14:** la nota original del proyecto apuntaba a la paleta oscuro + verde lima de la landing como la de "la herramienta", pero Rafa pidió expresamente que este test mantenga consistencia con el ebook y los materiales del sistema, no con la landing. Dentro de esas piezas conviven dos paletas (ver `estado-proyecto-mente-imbatible.md`, sección "Reconciliar identidad visual"): la del ebook/Manual Maestro (grabado científico vintage) y la de los recursos descargables prácticos (Hoja de Ruta, Diario de Hallazgos, Tarjeta de Enfoque Láser, Mi Rutina Imbatible, Kit de Infraestructura Física). Se eligió la segunda — crema + naranja quemado — por ser la familia de "herramienta de uso práctico", más cercana en función a este test que un libro de lectura. Paleta y tipografía exactas en Sección 7bis del documento de diseño de contenido. La paleta oscuro + verde lima queda reservada para landing/marketplace, sin cambios ahí.

---

## 3. Objetivos

**Para el usuario (Camilo):**
1. Entender en menos de 5 minutos cuál es su forma natural de pensar y resolver problemas.
2. Recibir un resultado que se sienta *personal y accionable* — no un horóscopo genérico — con actividades/roles concretos donde rinde bien y otros donde probablemente sufre.
3. Sentir que la herramienta es honesta sobre sus límites (no es un diagnóstico clínico, es un mapa de autoconocimiento).

**Para el negocio:**
1. Reforzar la percepción de valor del value stack ($210 de valor listado por $27) con un bono que se sienta premium y "hecho a la medida", no genérico.
2. Generar un momento de conexión emocional temprano ("esto me describe exactamente") que aumente la probabilidad de que Camilo consuma el resto del sistema y no pida el reembolso de los 30 días.
3. Sentar la base técnica y de contenido para una futura suite de tests de autoconocimiento (posible producto o bono independiente más adelante) sin tener que reconstruir la app desde cero cada vez.

---

## 4. Alcance

**V1 (este PRD):**
- Un solo test: **Estilo de Pensamiento**, basado en el modelo de 4 modos de Benziger.
- Resultado individual (perfil dominante + subdominancias) con texto interpretativo y actividades/roles sugeridos.
- Sin login, sin backend obligatorio, uso inmediato desde el celular (así es como Camilo compra y consume contenido).

**Fuera de alcance en V1 (roadmap):**
- Tests adicionales de autoconocimiento (por definir con Rafa más adelante — candidatos típicos en este espacio son cosas como estilo de comunicación, cronotipo/ritmo de energía, o inteligencias múltiples, pero **no se está decidiendo esto ahora**, solo dejando la arquitectura lista para que quepan).
- Cuentas de usuario / historial de resultados entre sesiones.
- Panel de administración o analítica propia (se puede apoyar en lo que ya use Hotmart/landing).

La arquitectura (Sección 9) está pensada como un "hub" — una pantalla de entrada que hoy presenta un solo test y mañana puede presentar varios, cada uno como un módulo autocontenido con sus propias preguntas, lógica de puntuación y textos de resultado.

---

## 5. El modelo Benziger — cómo funciona (base para la simplificación)

Del cuestionario original (© Katherine Benziger, fuente benziger.org) que ya leí en detalle. Lo resumo aquí porque es la base técnica de la V1; el contenido final que verá el usuario será una versión propia y simplificada, no una copia del cuestionario original (ver Sección 6).

**4 modos de pensamiento, uno por cuadrante cerebral:**

| Modo | Región | Nombre corto | Caracterización |
|---|---|---|---|
| Modo I | Hemisferio Posterior Izquierdo (HPI) | **Procesos** | Ordenado, basado en procedimientos, metódico, detallista, fiable, conservador, prefiere rutinas y pasos claros. |
| Modo II | Hemisferio Posterior Derecho (HPD) | **Grupo** | Espiritual/emocional, lee señales no verbales, empático, busca armonía y conexión, motiva a otros, valora la cooperación. |
| Modo III | Hemisferio Frontal Derecho (HFD) | **Visión** | Visual, espacial, metafórico, se aburre con lo rutinario, integra ideas nuevas, imaginativo, humor peculiar. |
| Modo IV | Hemisferio Frontal Izquierdo (HFI) | **Resultados** | Lógico-matemático, analítico, orientado a diagnóstico y decisión, competitivo, valora la eficacia y el "beneficio neto". |

**Mecánica de puntuación original (por cada uno de los 4 modos):**
- **Parte A:** el usuario lee un párrafo descriptivo del modo y se autocalifica de 0 (nada identificado) a 5 (completamente identificado).
- **Parte B:** lee 15 afirmaciones específicas de ese modo y marca las que lo describen; 1 punto por cada una marcada (0–15).
- **Total por modo = Parte A + Parte B**, rango 0–20. Se repite para los 4 modos (máximo teórico 80 puntos repartidos en 4 ejes).

**Interpretación por banda de puntaje (igual para los 4 modos):**

| Rango | Significado |
|---|---|
| **20** | Compromiso total con esa forma de pensar — la persona la considera "la mejor manera de pensar" y puede asumir (sin darse cuenta) que todo el mundo debería pensar igual. |
| **13–19** | Preferencia clara, o una competencia no preferida pero muy desarrollada que funciona como recurso auxiliar — "un truco más en la caja". |
| **6–12** | Competencia moderada, no preferida pero desarrollada como apoyo: se puede usar por elección consciente, especialmente si el objetivo lo justifica, pero sostenerla mucho tiempo cansa. |
| **0–5** | Falta de preferencia: tendencia a evitar ese modo. Las tareas que lo exigen generan resistencia, fastidio, procrastinación, o directamente se delegan/evitan. |

**Visualización original:** los 4 puntajes se grafican en una rueda de 4 cuadrantes (como un dial de 0 a 20 por eje), lo que produce un "mapa" visual de perfil — no solo un número por modo, sino una figura reconocible de un vistazo. Esto es clave para la experiencia de resultado (ver Sección 7).

**Combinaciones de dominancia → actividades/roles:** el original incluye una tabla que cruza combinaciones de cuadrantes dominantes (ej. "HPI", "HFD", "HFI-HFD", "HI con HFI dominante") con posibles profesiones (abogados, ingenieros, terapeutas, diseñadores, etc.). Para nuestro público esto se debe traducir de "profesión" a **"tipo de tareas donde rindes bien / tipo de tareas que te van a costar"**, porque Camilo ya tiene una carrera — no está eligiendo profesión, está tratando de entender por qué ciertas partes de su trabajo le fluyen y otras lo agotan. Esta traducción es contenido pendiente de desarrollar (Sección 8).

---

## 6. Principios de simplificación honesta

Esto es lo que hace que el bono no se sienta ni como un test de Buzzfeed ni como algo que promete más de lo que puede sostener.

1. **Menos ítems, mismo espíritu.** 15 afirmaciones × 4 modos (60 en total) + 4 autocalificaciones es demasiado para un bono de "úsalo en minutos". Meta de diseño: **6–8 afirmaciones por modo** (24–32 en total), redactadas de cero por nosotros (no copiadas del cuestionario original), manteniendo el mismo concepto de cada modo pero en lenguaje más cotidiano y menos "cuestionario clínico". Se conserva o se simplifica la autocalificación de párrafo inicial (Parte A) según cómo quede el flujo — a decidir en la fase de diseño de contenido.
2. **Reescalar el puntaje.** Si se reduce el número de ítems, las bandas de interpretación (0–5 / 6–12 / 13–19 / 20) se reescalan proporcionalmente al nuevo máximo — no se pueden dejar los mismos cortes con menos preguntas.
3. **Disclaimer explícito y visible, no letra pequeña.** En la intro y en el resultado: esto es una herramienta de autoconocimiento inspirada en modelos de estilos cognitivos, no un test psicométrico validado ni un diagnóstico clínico. Mismo criterio que ya se usó en el ebook (afirmaciones respaldadas en evidencia real, sin esoterismo) — aquí es al revés: dejar claro dónde el respaldo *no* es tan fuerte.
4. **Lenguaje de "modo natural", no de "tipo fijo".** Evitar el efecto MBTI de "yo soy un Visión" como etiqueta de identidad cerrada. El marco de Benziger habla de preferencias y competencias desarrollables, no de cajas fijas — eso es honesto con el modelo y además es más útil para Camilo (le da margen de acción, no una etiqueta).
5. **Resultado 100% en el momento, sin fricción de registro.** Nada de "déjanos tu correo para ver tu resultado" — Camilo ya pagó, esto es un bono, la fricción de captura de datos en este punto juega en contra de la sensación de "sistema premium". (Si más adelante se quiere usar el test como imán de leads *fuera* del curso, sería una versión/flujo distinto, no este.)

---

## 7. Experiencia de usuario (flujo)

**Pantalla 1 — Portada del test**
Nombre del bono ("Test de Zonas de Genialidad"), promesa en una línea ("Descubre en qué tareas tu cerebro rinde mejor — y en cuáles no vas a ser competitivo por más que te esfuerces"), tiempo estimado ("~4 minutos"), botón de inicio. Disclaimer corto y visible de qué es y qué no es esta herramienta.

**Pantalla 2 — Cuestionario**
Las afirmaciones simplificadas, agrupadas por modo pero **presentadas mezcladas** (no en bloques "Modo I / Modo II..." como el original) para evitar que el usuario adivine el patrón y sesgue sus respuestas. Barra de progreso visible. Formato simple: sí me describe / no me describe / a veces (o escala corta de 3–4 puntos — a definir en diseño de contenido junto con la lógica de puntuación final).

**Pantalla 3 — Cálculo / transición**
Micro-momento de anticipación (1–2 segundos, animación breve) antes de mostrar el resultado — refuerza que "se está procesando algo", no es solo un salto instantáneo de pantalla.

**Pantalla 4 — Resultado**
- **La rueda de 4 cuadrantes** (adaptada del diagrama original) con el perfil del usuario visualizado — esto es el elemento más "wow" del bono, se comparte bien como captura de pantalla.
- Modo(s) dominante(s) nombrado(s) en lenguaje llano ("Tu cerebro rinde mejor en modo Visión + Resultados").
- Texto interpretativo por combinación (ver Sección 8).
- 2 bloques cortos: "Esto te va a fluir" (actividades/roles afines) y "Esto te va a costar más esfuerzo" (honesto, no alarmista — con un tip de cómo manejarlo, no solo "evítalo").
- **Bloque "niebla mental vs. sobreesfuerzo cognitivo"** (decidido con Rafa, ver Sección 12): explica que la fatiga de operar en la zona de menor genialidad del usuario puede *sentirse* igual que la niebla mental que trata el curso, pero es un fenómeno distinto — el cerebro forzando el doble o más de esfuerzo en un modo que no le es natural, camino al agotamiento/burnout si se sostiene. Ayuda al usuario a distinguir cuál de las dos cosas le está pasando y conecta (en términos generales, sin citar número de módulo) con cómo el sistema ya lo ayuda a resolver ambas.
- Disclaimer de cierre.
- **CTA de cierre con insinuación de coaching 1:1** (decidido con Rafa): sin ser una oferta dura ni un formulario de venta, el resultado insinúa que profundizar este tema en una sesión con el instructor puede ayudar a lograr mayor eficacia — texto y mecánica exactos (link, WhatsApp, calendario) pendientes de definir en la fase de copy.

**Consideraciones transversales:**
- Mobile-first (Camilo compra y consume desde el celular).
- Sin cuenta ni login.
- Reintentable (puede repetirlo si quiere).
- Accesible desde el área de miembros de Hotmart Club como uno de los bonos.

---

## 8. Contenido pendiente de desarrollar (no incluido en este PRD)

Este documento define el *qué* y el *cómo* de la herramienta; falta, como siguiente fase, desarrollar:

1. **Las afirmaciones simplificadas finales** (6–8 por modo, redacción propia, escala de 3–4 niveles de acuerdo — ver Sección 12).
2. **La lógica de puntuación final** (reescalado de bandas para la escala de 3–4 niveles, cómo se determinan dominancia y subdominancia cuando hay puntajes cercanos).
3. **Los textos de resultado** por perfil dominante/combinación — adaptando la tabla de "combinación de hemisferios → profesiones" del original a "combinación de modos → tipo de tareas/roles donde rindes bien y cuáles te cuestan", en el tono de voz del proyecto (cercano, basado en ciencia aplicada, sin esoterismo).
4. **El bloque "niebla mental vs. sobreesfuerzo cognitivo"** por perfil (ver Sección 7) — probablemente necesita una versión de texto por cada modo de menor preferencia, ya que la forma en que se manifiesta el sobreesfuerzo varía según el modo evitado.
5. **El copy del CTA de coaching 1:1** al cierre del resultado — tono sutil, no venta dura (ver Sección 12).
6. **Copys de UI** (microcopys de cada pantalla, textos de disclaimer definitivos).

Esto se puede trabajar en una conversación separada, como ya está previsto en el plan maestro del proyecto.

---

## 9. Arquitectura técnica recomendada

**Formato:** página web autocontenida (HTML/CSS/JS en un solo archivo, sin dependencias de servidor) — coherente con que sea una "microapp" ligera, embebible dentro del área de miembros de Hotmart Club (iframe o enlace directo) sin depender de infraestructura propia para un bono que no es el producto core.

**Diseño modular para permitir más tests después:**
- Una capa de "shell" (portada del hub, navegación, header/footer, estilo visual) reutilizable.
- Cada test como un módulo independiente definido por datos: su lista de afirmaciones, su lógica de puntuación, y sus textos de resultado — no lógica de interfaz distinta por test.
- Así, sumar un segundo test más adelante es agregar un nuevo módulo de contenido, no reconstruir la app.

**Estado y datos:**
- Todo el cálculo ocurre en el cliente (sin backend): las respuestas nunca necesitan salir del navegador del usuario para calcular el resultado.
- No se requiere captura de datos personales para V1 (ver Sección 6, punto 5). Si en el futuro se decide capturar correo (para email marketing o para una versión "imán de leads" fuera del curso), es una decisión de negocio aparte que cambiaría este punto.

**Entrega:** dado que ya existe una paleta y estilo de "herramienta" aprobados para este proyecto, se recomienda construir esto como página interactiva persistida (reutilizable, actualizable, sin depender de reenviar un archivo cada vez que se ajuste contenido) en lugar de un archivo suelto — facilita iterar los textos de resultado sin tener que "re-entregar" el bono cada vez.

---

## 10. Métricas de éxito

Dado que no hay backend propio, estas métricas dependen de qué tan sofisticado se quiera hacer el tracking (a decidir según prioridad):

- **Tasa de finalización** del test (empieza vs. termina) — señal de si la duración/fricción está bien calibrada.
- **Tiempo promedio de completado** vs. el estimado (~4 min).
- Si se agrega tracking básico (ej. analítica de eventos): distribución de perfiles resultantes, para detectar si el reescalado de bandas está generando resultados razonablemente variados (si el 90% de la gente cae en el mismo perfil, algo está mal calibrado).
- Señal cualitativa: si el equipo de soporte/comentarios de Hotmart menciona el bono espontáneamente en reseñas o mensajes — indicador indirecto de que se sintió valioso.

---

## 11. Riesgos y consideraciones

- **Riesgo de sobre-promesa:** si el copy de marketing (landing, nombre del bono) suena más a "test científico" de lo que el disclaimer interno permite, hay una discrepancia que un usuario escéptico como Camilo puede notar y que le resta credibilidad a todo el sistema. Vale la pena revisar el copy actual del bono en la landing junto con los disclaimers de esta herramienta para que digan lo mismo.
- **Uso indebido del modelo original:** el cuestionario de Benziger es material con derechos de autor (© Katherine Benziger / benziger.org). La V1 debe usar afirmaciones y textos de resultado de redacción propia, inspirados en la estructura conceptual del modelo (4 modos, lógica de puntuación por bandas), no una copia de las 60 afirmaciones ni de los párrafos originales.
- **Determinismo psicológico percibido:** el bloque "esto te va a costar más esfuerzo" debe evitar sonar a sentencia fija ("nunca vas a poder con esto") — el modelo mismo es explícito en que las zonas de baja preferencia son *desarrollables* con esfuerzo consciente, solo que con más costo energético. El copy final debe reflejar eso.

---

## 12. Decisiones tomadas con Rafa (resuelven las preguntas abiertas de la v1)

1. **Nombre:** "Test de Zonas de Genialidad" queda como el nombre de este test específicamente (coincide con lo ya prometido en el copy de landing — no se toca). El nombre "Benziger"/"Benzinger" nunca aparece de cara al usuario; es solo referencia interna del modelo en los documentos de planeación. Cuando se sumen más tests, se creará un nombre de "hub" aparte que los agrupe (ej. algo como "Mapa de Genialidad") — pendiente de definir en ese momento, no ahora.
2. **Cruce con el contenido del curso:** el resultado se mantiene autocontenido, **sin citar módulos ni números específicos** (así no se rompe si el curso cambia de estructura). Sin embargo, sí debe incluir un bloque conceptual clave: advertir que la fatiga de operar en la zona de menor genialidad del usuario puede confundirse con la niebla mental que trata el curso, cuando en realidad es un tipo de sobreesfuerzo distinto (el cerebro forzando el doble o más de esfuerzo en un modo no natural, camino al burnout si se sostiene) — y ayudar al usuario a distinguir cuál de las dos cosas le está pasando, conectando en términos generales con cómo el sistema ya lo ayuda a resolver ambas. Detalle en Sección 7 (flujo) y Sección 8 (contenido pendiente).
3. **Escala de respuesta:** escala de 3–4 niveles de acuerdo (ej. "no me describe / un poco / bastante / totalmente"), no binaria. Más fiel al espíritu del original (que combinaba autocalificación 0–5 con marcas sí/no) y da resultados más matizados. La lógica de puntuación y el reescalado de bandas para esta escala quedan pendientes de definir en la fase de diseño de contenido.
4. **Captura de datos:** confirmado cero fricción — sin pedir correo, resultado inmediato. Se mantiene abierta la puerta a una versión standalone como imán de leads fuera del curso más adelante, como flujo/versión distinta. Adicionalmente, el resultado debe cerrar insinuando (sin venta dura ni formulario) que profundizar el tema en una sesión 1:1 con el instructor puede ayudar a lograr mayor eficacia — mecánica exacta (enlace, WhatsApp, calendario) pendiente para la fase de copy.

---

## 13. Próximos pasos sugeridos

1. ~~Revisión y ajustes de este PRD con Rafa.~~ ✅ Cerrado 2026-09-14 (ver Sección 12).
2. Diseño de contenido: afirmaciones simplificadas + lógica de puntuación final (escala 3–4 niveles) + textos de resultado por perfil + bloque niebla mental vs. sobreesfuerzo + copy del CTA de coaching (siguiente conversación dedicada, como ya está previsto en el plan maestro).
3. Definir copys de UI y disclaimers definitivos.
4. Construir la herramienta interactiva siguiendo la arquitectura de la Sección 9.
5. Piloto: que el propio Rafa (y idealmente 2–3 personas del perfil de Camilo) hagan el test antes de publicarlo, para validar que los resultados se sienten certeros y que el tiempo de completado es el esperado.
