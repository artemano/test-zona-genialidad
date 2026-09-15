/*
 * Genera la versión publicada (ofuscada) del test a partir de la fuente legible.
 * Fuente:    tests/estilo-pensamiento/src/index.html   (editar aquí)
 * Publicado: tests/estilo-pensamiento/index.html        (lo sirve GitHub Pages / lo embebe Hotmart — no cambia de ruta)
 *
 * Uso: npm run build
 */

var fs = require('fs');
var path = require('path');
var JavaScriptObfuscator = require('javascript-obfuscator');

var SRC = path.join(__dirname, 'tests', 'estilo-pensamiento', 'src', 'index.html');
var OUT = path.join(__dirname, 'tests', 'estilo-pensamiento', 'index.html');

var html = fs.readFileSync(SRC, 'utf8');

var scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
if (!scriptMatch) {
  throw new Error('No se encontró un bloque <script> en ' + SRC);
}
var sourceJs = scriptMatch[1];

var obfuscated = JavaScriptObfuscator.obfuscate(sourceJs, {
  compact: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 0.75,
  numbersToExpressions: true,
  simplify: true,
  stringArray: true,
  stringArrayEncoding: ['base64'],
  stringArrayThreshold: 0.75,
  splitStrings: true,
  splitStringsChunkLength: 8,
  transformObjectKeys: true,
  identifierNamesGenerator: 'hexadecimal',
  renameGlobals: false,
  selfDefending: false,
  debugProtection: false,
  disableConsoleOutput: false,
  target: 'browser'
}).getObfuscatedCode();

var outHtml = html.replace(scriptMatch[0], '<script>\n' + obfuscated + '\n</script>');

fs.writeFileSync(OUT, outHtml);
console.log('Build listo -> ' + path.relative(__dirname, OUT));
