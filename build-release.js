const Bundler = require('parcel-bundler');
const Path = require('path');

// Definizione del file entry-point
const file = Path.join(__dirname, './pages/abbos/basic.html');

process.env.Statics="";

// Opzioni del Bundler
const options = {
  outDir: './release/assets/appchk/front/it/abbos', // La directory nella quale posizionare l'output del bundle, di default "dist"
  outFile: 'index.html', // Il nome dell' outputFile
  publicUrl: '/assets/appchk/front/it/abbos', // L'url del server, di default '/'
  watch: false, // Se effettuare o meno il watch dei file, di default la configurazione é process.env.NODE_ENV !== 'production'
  cache: true, // Attiva o disattiva la cache, di default true
  cacheDir: '.cache', // La directory nella quale la cache é salvata, di default é .cache
  minify: true, // Minifica i files, abilitata se process.env.NODE_ENV === 'production'
  target: 'browser', // browser/node/electron, di default é browser
  https: false, // Protocollo del server: https o http, di default é false
  logLevel: 3, // 3 = tutti i log, 2 = log di avvisi & errori, 1 = log degli errori
  hmrPort: 0, // La porta sulla quale gira l'hmr, di default é una porta casuale libera (0 in node.js restituisce una porta casuale libera)
  sourceMaps: false, // Attiva o disattiva le sourcemaps, di default é attivata (non sono ancora supportate nelle build minificate)
  hmrHostname: '', // Un hostname per l'hot module reload, di default é ''
  detailedReport: false, // Restituisce un report dettagliato dei bundles, assets, dimensione dei file e timestamps, di default é false, i report vengono generati solo se il watch é disattivato
};

// Inizializza un bundle utilizzando la posizione dell'entry point e le opzioni fornite
const bundler = new Bundler(file, options);

// Esegue il bundle, questo restituisce il bundle principale
// Utilizza gli eventi se stai usando la modalità watch, perché questa promise si eseguirà solo una volta e non per ogni rebuild.
bundler.bundle().then(function(bundle) {
   // console.log(bundle);
});