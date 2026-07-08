import { QuestionBlock } from "@/types/question";

export const nodejsBlock: QuestionBlock = {
  meta: {
    icon: '🟢',
    color: '#339933',
    ru: {title: 'Node.js', desc: 'Event Loop, Streams, Modules, HTTP, Performance'},
    en: {title: 'Node.js', desc: 'Event Loop, Streams, Modules, HTTP, Performance'}
  },
  topics: {
    core: {
      icon: '⚙️', ru: {title: 'Core Node.js'}, en: {title: 'Core Node.js'}, questions: [
        {
          id: 'nd1',
          ru: {
            q: 'Как работает Event Loop в Node.js?',
            options: ['6 фаз: timers, pending callbacks, idle, poll, check, close. Microtasks (Promise/nextTick) между фазами', 'Аналогичен браузерному Event Loop', 'Одна очередь для всех задач'],
            correct: 0,
            explanation: 'Node Event Loop: timers → pending → poll → check (setImmediate) → close. process.nextTick — до следующей фазы.',
            theory: '<h4>Node.js Event Loop Phases</h4><ol><li><b>timers</b> — setTimeout, setInterval</li><li><b>pending callbacks</b> — IO callbacks</li><li><b>idle/prepare</b> — внутреннее</li><li><b>poll</b> — ожидание IO</li><li><b>check</b> — setImmediate</li><li><b>close</b> — socket.close</li></ol><pre><code>// process.nextTick — до следующей фазы\nsetTimeout(() => console.log("timer"), 0);\nsetImmediate(() => console.log("immediate"));\nprocess.nextTick(() => console.log("nextTick"));\n// Вывод: nextTick → timer/immediate (порядок зависит от IO)</code></pre>'
          },
          en: {
            q: 'How does the Event Loop work in Node.js?',
            options: ['6 phases: timers, pending callbacks, idle, poll, check, close. Microtasks between phases', 'Same as browser Event Loop', 'Single queue for all tasks'],
            correct: 0,
            explanation: 'Node Event Loop: timers → pending → poll → check (setImmediate) → close. process.nextTick — before next phase.',
            theory: '<h4>Node.js Event Loop</h4><ol><li>timers: setTimeout/setInterval</li><li>poll: waiting for IO</li><li>check: setImmediate</li></ol><pre><code>process.nextTick(() => console.log("first"));\nsetImmediate(() => console.log("second"));</code></pre>'
          }
        },
        {
          id: 'nd2',
          ru: {
            q: 'Что такое Streams в Node.js?',
            options: ['Работа с данными по кускам (chunks) без загрузки всего файла в память. Readable, Writable, Duplex, Transform', 'Аналог Array.map для асинхронности', 'WebSocket-соединения'],
            correct: 0,
            explanation: 'Streams: piping, backpressure. Эффективно для больших файлов, HTTP, gzip.',
            theory: '<h4>Node.js Streams</h4><pre><code>// Чтение большого файла\nfs.createReadStream("bigfile.csv")\n  .pipe(csvParser())\n  .pipe(transform)\n  .pipe(fs.createWriteStream("out.json"));\n\n// HTTP\napp.get("/video", (req, res) => {\n  fs.createReadStream("video.mp4").pipe(res);\n});\n\n// Transform stream\nconst upper = new Transform({\n  transform(chunk, enc, cb) {\n    cb(null, chunk.toString().toUpperCase());\n  }\n});</code></pre>'
          },
          en: {
            q: 'What are Streams in Node.js?',
            options: ['Working with data in chunks without loading entire file into memory. Readable, Writable, Duplex, Transform', 'Async Array.map analog', 'WebSocket connections'],
            correct: 0,
            explanation: 'Streams: piping, backpressure. Efficient for large files, HTTP, gzip.',
            theory: '<h4>Node.js Streams</h4><pre><code>fs.createReadStream("big.csv")\n  .pipe(parser())\n  .pipe(fs.createWriteStream("out.json"));</code></pre>'
          }
        },
        {
          id: 'nd3',
          ru: {
            q: 'CommonJS vs ES Modules в Node.js?',
            options: ['CJS: require/module.exports, синхронный, динамический; ESM: import/export, статический, поддерживает tree-shaking', 'Нет разницы', 'ESM только в браузерах'],
            correct: 0,
            explanation: 'Node.js 12+ поддерживает ESM через .mjs или "type":"module". ESM — стандарт для будущего.',
            theory: '<h4>CJS vs ESM</h4><pre><code>// CommonJS\nconst fs = require("fs");\nmodule.exports = { myFn };\n\n// ES Modules (.mjs или type:module)\nimport fs from "fs";\nexport const myFn = () => {};\n\n// Dynamic import в ESM\nconst mod = await import("./heavy.js");</code></pre><h4>Разница</h4><ul><li>CJS: синхронный require, dynamic</li><li>ESM: статический анализ, tree-shaking, top-level await</li></ul>'
          },
          en: {
            q: 'CommonJS vs ES Modules in Node.js?',
            options: ['CJS: require/module.exports, sync, dynamic; ESM: import/export, static, tree-shakeable', 'No difference', 'ESM in browsers only'],
            correct: 0,
            explanation: 'Node.js 12+ supports ESM via .mjs or "type":"module". ESM is the future standard.',
            theory: '<h4>CJS vs ESM</h4><pre><code>// CJS\nconst fs = require("fs");\nmodule.exports = { fn };\n\n// ESM\nimport fs from "fs";\nexport const fn = () => {};</code></pre>'
          }
        },
        {
          id: 'nd4',
          ru: {
            q: 'Что такое cluster module в Node.js?',
            options: ['Запуск нескольких экземпляров Node.js на всех CPU-ядрах через fork для использования многоядерности', 'npm-кластер', 'Менеджер процессов'],
            correct: 0,
            explanation: 'Node.js однопоточный, но cluster позволяет создать дочерние процессы. Альтернатива: PM2.',
            theory: '<h4>Cluster</h4><pre><code>import cluster from "cluster";\nimport os from "os";\n\nif (cluster.isPrimary) {\n  const cpus = os.cpus().length;\n  for(let i=0; i<cpus; i++) cluster.fork();\n  cluster.on("exit", () => cluster.fork()); // restart on crash\n} else {\n  // worker процесс — запускаем HTTP сервер\n  app.listen(3000);\n}</code></pre>'
          },
          en: {
            q: 'What is the cluster module in Node.js?',
            options: ['Running multiple Node.js instances on all CPU cores via fork to use multicore', 'npm cluster', 'Process manager'],
            correct: 0,
            explanation: 'Node.js is single-threaded, but cluster creates child processes. Alternative: PM2.',
            theory: '<h4>Cluster</h4><pre><code>if(cluster.isPrimary) {\n  os.cpus().forEach(() => cluster.fork());\n} else {\n  app.listen(3000);\n}</code></pre>'
          }
        },
        {
          id: 'nd5',
          ru: {
            q: 'Что такое middleware в Express/Node.js?',
            options: ['Функции (req, res, next) выполняемые последовательно до обработчика маршрута', 'HTTP-фильтры на уровне ОС', 'Плагины npm'],
            correct: 0,
            explanation: 'Middleware цепочка: каждая функция вызывает next() или возвращает ответ.',
            theory: '<h4>Middleware</h4><pre><code>// Custom middleware\napp.use((req, res, next) => {\n  console.log(`${req.method} ${req.url}`);\n  next();\n});\n\n// Error middleware (4 аргумента)\napp.use((err, req, res, next) => {\n  res.status(500).json({error: err.message});\n});\n\n// Порядок важен!\napp.use(express.json()); // body parser\napp.use(cors());         // CORS\napp.use(authMiddleware); // auth\napp.use(router);         // routes</code></pre>'
          },
          en: {
            q: 'What is middleware in Express/Node.js?',
            options: ['Functions (req, res, next) executed sequentially before route handler', 'OS-level HTTP filters', 'npm plugins'],
            correct: 0,
            explanation: 'Middleware chain: each function calls next() or returns response.',
            theory: '<h4>Middleware</h4><pre><code>app.use((req, res, next) => {\n  console.log(req.method, req.url);\n  next();\n});\napp.use((err, req, res, next) => {\n  res.status(500).json({error:err.message});\n});</code></pre>'
          }
        },
      ]
    }
  }
}