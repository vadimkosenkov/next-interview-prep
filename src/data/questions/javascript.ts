import { QuestionBlock } from "@/types/question";

export const javascriptBlock: QuestionBlock = {
  meta: {
    icon: '🟡',
    color: '#f7df1e',
    ru: {title: 'JavaScript', desc: 'Core JS, ES6+, async, прототипы, паттерны'},
    en: {title: 'JavaScript', desc: 'Core JS, ES6+, async, prototypes, patterns'}
  },
  topics: {
    core: {
      icon: '⚙️', ru: {title: 'Core JS'}, en: {title: 'Core JS'}, questions: [
        {
          id: 'js1',
          ru: {
            q: 'Что такое замыкание (closure)?',
            options: ['Функция, сохраняющая доступ к переменным внешней области видимости даже после её завершения', 'Способ наследования классов', 'Метод создания объектов'],
            correct: 0,
            explanation: 'Closure: внутренняя функция «помнит» лексическое окружение места создания.',
            theory: '<h4>Closure</h4><pre><code>function counter() {\n  let count = 0;\n  return () => ++count;\n}\nconst inc = counter();\ninc(); // 1\ninc(); // 2\n// count недоступна снаружи, но живёт в замыкании</code></pre><h4>Применение</h4><ul><li>Инкапсуляция (private state)</li><li>Фабричные функции</li><li>Модульный паттерн</li><li>Мемоизация</li></ul>'
          },
          en: {
            q: 'What is a closure?',
            options: ['A function retaining access to outer scope variables even after outer function returns', 'Class inheritance method', 'Object creation method'],
            correct: 0,
            explanation: 'Closure: inner function "remembers" the lexical environment of where it was created.',
            theory: '<h4>Closure</h4><pre><code>function counter() {\n  let count = 0;\n  return () => ++count;\n}\nconst inc = counter();\ninc(); // 1</code></pre>'
          }
        },
        {
          id: 'js2',
          ru: {
            q: 'Что такое прототипное наследование?',
            options: ['Объекты наследуют свойства через цепочку прототипов (__proto__/Object.getPrototypeOf)', 'Наследование только через class extends', 'Копирование свойств объекта'],
            correct: 0,
            explanation: 'Каждый объект имеет [[Prototype]]. При обращении к свойству JS идёт по цепочке прототипов.',
            theory: '<h4>Prototype Chain</h4><pre><code>const animal = { breathe() { return "breathing"; } };\nconst dog = Object.create(animal);\ndog.bark = () => "woof";\ndog.breathe(); // "breathing" — из прототипа\n\n// class — синтаксический сахар над прототипами\nclass Dog extends Animal {}</code></pre>'
          },
          en: {
            q: 'What is prototypal inheritance?',
            options: ['Objects inherit properties via prototype chain (__proto__/Object.getPrototypeOf)', 'Inheritance only via class extends', 'Copying object properties'],
            correct: 0,
            explanation: 'Every object has [[Prototype]]. JS traverses the chain when looking up properties.',
            theory: '<h4>Prototype Chain</h4><pre><code>const animal = { breathe() {} };\nconst dog = Object.create(animal);\ndog.breathe(); // inherited</code></pre>'
          }
        },
        {
          id: 'js3',
          ru: {
            q: 'Разница между == и ===?',
            options: ['== — сравнение с приведением типов; === — строгое сравнение без приведения', 'Нет разницы', '=== быстрее'],
            correct: 0,
            explanation: '"2" == 2 → true (приведение). "2" === 2 → false (разные типы). Всегда используй ===.',
            theory: '<h4>== vs ===</h4><pre><code>0 == false   // true\n"" == false  // true\nnull == undefined // true\n\n0 === false  // false\nnull === undefined // false</code></pre><p>Используй === за исключением случаев когда нужно сравнить null/undefined: val == null</p>'
          },
          en: {
            q: 'Difference between == and ===?',
            options: ['== compares with type coercion; === strict comparison without coercion', 'No difference', '=== is faster'],
            correct: 0,
            explanation: '"2" == 2 → true (coercion). "2" === 2 → false (different types). Always use ===.',
            theory: '<h4>== vs ===</h4><pre><code>0 == false   // true\n0 === false  // false</code></pre>'
          }
        },
        {
          id: 'js4',
          ru: {
            q: 'Что такое this в JavaScript?',
            options: ['Контекст выполнения функции, определяемый в момент вызова (не определения)', 'Всегда указывает на window', 'Ссылка на текущий файл'],
            correct: 0,
            explanation: 'this зависит от способа вызова: obj.method() → obj. fn() → window/undefined (strict). call/apply/bind — явно.',
            theory: '<h4>this</h4><pre><code>// Метод объекта\nobj.method() → this = obj\n\n// Обычная функция\nfn() → this = window (/ undefined strict)\n\n// Arrow function — берёт this из лексики\nconst fn = () => this; // this родительского scope\n\n// call/apply/bind\nfn.call(ctx, a, b);\nfn.apply(ctx, [a, b]);\nconst bound = fn.bind(ctx);</code></pre>'
          },
          en: {
            q: 'What is "this" in JavaScript?',
            options: ['Execution context of a function, determined at call time (not definition)', 'Always points to window', 'Reference to current file'],
            correct: 0,
            explanation: 'this depends on call: obj.method() → obj. fn() → window/undefined (strict). call/apply/bind — explicit.',
            theory: '<h4>this</h4><pre><code>obj.method()    // this = obj\nfn()            // this = window/undefined\n;(() => this)() // lexical this\nfn.call(ctx)    // explicit this</code></pre>'
          }
        },
        {
          id: 'js5',
          ru: {
            q: 'Что такое Promise и как работает цепочка .then()?',
            options: ['Объект для работы с асинхронными операциями. .then() возвращает новый Promise', 'Callback-функция', 'Синхронный паттерн'],
            correct: 0,
            explanation: 'Promise: pending → fulfilled/rejected. .then(onFulfilled, onRejected) возвращает новый Promise — образуется цепочка.',
            theory: '<h4>Promise</h4><pre><code>fetch("/api/user")\n  .then(res => res.json())\n  .then(user => console.log(user))\n  .catch(err => console.error(err))\n  .finally(() => setLoading(false));\n\n// Promise.all — параллельно, ждёт все\nconst [a,b] = await Promise.all([fetch(u1), fetch(u2)]);\n\n// Promise.race — первый победитель\nconst first = await Promise.race([p1, p2]);</code></pre>'
          },
          en: {
            q: 'What is a Promise and how does .then() chaining work?',
            options: ['Object for async operations. .then() returns a new Promise', 'Callback function', 'Sync pattern'],
            correct: 0,
            explanation: 'Promise: pending → fulfilled/rejected. .then() returns new Promise — enabling chaining.',
            theory: '<h4>Promise</h4><pre><code>fetch("/api")\n  .then(r => r.json())\n  .catch(console.error)\n  .finally(() => setLoading(false));\n\nawait Promise.all([p1, p2]);</code></pre>'
          }
        },
        {
          id: 'js6',
          ru: {
            q: 'Что такое async/await?',
            options: ['Синтаксический сахар над Promise, позволяющий писать асинхронный код синхронно', 'Новый тип асинхронности, заменяющий Promise', 'Только для NodeJS'],
            correct: 0,
            explanation: 'async функция всегда возвращает Promise. await приостанавливает выполнение до resolve. Обработка: try/catch.',
            theory: '<h4>async/await</h4><pre><code>async function loadUser(id) {\n  try {\n    const res = await fetch(`/api/users/${id}`);\n    if (!res.ok) throw new Error("Not found");\n    return await res.json();\n  } catch (err) {\n    console.error(err);\n  } finally {\n    setLoading(false);\n  }\n}</code></pre><p>Параллельно: await Promise.all([f1(), f2()])</p>'
          },
          en: {
            q: 'What is async/await?',
            options: ['Syntactic sugar over Promise for synchronous-looking async code', 'New async type replacing Promise', 'Node.js only'],
            correct: 0,
            explanation: 'async function always returns Promise. await suspends until resolve. Error handling: try/catch.',
            theory: '<h4>async/await</h4><pre><code>async function load(id) {\n  try {\n    const r = await fetch(`/api/${id}`);\n    return r.json();\n  } catch(e) { console.error(e); }\n}\nawait Promise.all([f1(), f2()]); // parallel</code></pre>'
          }
        },
        {
          id: 'js7',
          ru: {
            q: 'Что такое деструктуризация в ES6?',
            options: ['Синтаксис для извлечения значений из объектов/массивов в переменные', 'Удаление свойств объекта', 'Клонирование объекта'],
            correct: 0,
            explanation: 'const {a, b} = obj; const [x, y] = arr; Поддерживает значения по умолчанию и переименование.',
            theory: '<h4>Destructuring</h4><pre><code>// Object\nconst {name, age=18, role:r} = user;\n\n// Array\nconst [first, , third] = [1,2,3];\n\n// Function params\nfunction greet({name, age=18}) { ... }\n\n// Nested\nconst {address: {city}} = user;</code></pre>'
          },
          en: {
            q: 'What is ES6 destructuring?',
            options: ['Syntax for extracting values from objects/arrays into variables', 'Deleting object properties', 'Object cloning'],
            correct: 0,
            explanation: 'const {a, b} = obj; const [x, y] = arr; Supports defaults and renaming.',
            theory: '<h4>Destructuring</h4><pre><code>const {name, age=18, role:r} = user;\nconst [first, , third] = [1,2,3];</code></pre>'
          }
        },
        {
          id: 'js8',
          ru: {
            q: 'Что делает оператор spread (...)?',
            options: ['Разворачивает итерируемое в отдельные элементы. Для копирования, слияния и передачи аргументов', 'Создаёт rest-параметр', 'Удаляет null-значения'],
            correct: 0,
            explanation: '[...arr1, ...arr2] — слияние. {...obj1, ...obj2} — слияние объектов. fn(...args) — аргументы.',
            theory: '<h4>Spread operator</h4><pre><code>// Массивы\nconst all = [...a, ...b, 42];\nconst copy = [...original];\n\n// Объекты\nconst merged = {...defaults, ...overrides};\nconst clone = {...obj};\n\n// Функции\nMath.max(...[1,2,3]);\n\n// Rest (сбор)\nconst [first, ...rest] = arr;</code></pre>'
          },
          en: {
            q: 'What does the spread operator (...) do?',
            options: ['Expands iterable into individual elements. For copying, merging, passing arguments', 'Creates rest parameter', 'Removes null values'],
            correct: 0,
            explanation: '[...arr1, ...arr2] merge. {...obj1, ...obj2} merge objects. fn(...args) — arguments.',
            theory: '<h4>Spread</h4><pre><code>const all = [...a, ...b];\nconst merged = {...defaults, ...overrides};\nMath.max(...[1,2,3]);</code></pre>'
          }
        },
        {
          id: 'js9',
          ru: {
            q: 'Что такое Map и Set? Отличия от Object и Array?',
            options: ['Map: ключи любого типа, порядок вставки; Set: уникальные значения. Оба лучше для частых add/delete', 'Устаревшие структуры данных', 'Только для серверного JS'],
            correct: 0,
            explanation: 'Map vs Object: ключи любого типа, нет prototype-проблем. Set vs Array: уникальность, O(1) has().',
            theory: '<h4>Map</h4><pre><code>const m = new Map();\nm.set(objKey, "value");\nm.get(objKey);\nm.has(objKey);\nfor(const [k,v] of m) {}</code></pre><h4>Set</h4><pre><code>const s = new Set([1,2,2,3]);\n// s: {1,2,3}\ns.has(2); // O(1)\n// Уникальные из массива:\n[...new Set(arr)]</code></pre>'
          },
          en: {
            q: 'What are Map and Set? Differences from Object and Array?',
            options: ['Map: any key type, insertion order; Set: unique values. Both better for frequent add/delete', 'Deprecated data structures', 'Server-side JS only'],
            correct: 0,
            explanation: 'Map vs Object: any key type, no prototype issues. Set vs Array: uniqueness, O(1) has().',
            theory: '<h4>Map & Set</h4><pre><code>const m = new Map();\nm.set(objKey, "value");\n\nconst s = new Set([1,2,2,3]); // {1,2,3}\ns.has(2); // O(1)\n[...new Set(arr)]; // unique array</code></pre>'
          }
        },
        {
          id: 'js10',
          ru: {
            q: 'Что такое генераторы (function*)?',
            options: ['Функции, выполнение которых можно приостанавливать через yield и возобновлять', 'Асинхронные генераторы Promise', 'Фабричные функции'],
            correct: 0,
            explanation: 'function* с yield — ленивый итератор. Генератор возвращает итератор, .next() двигает его вперёд.',
            theory: '<h4>Generators</h4><pre><code>function* range(start, end) {\n  for(let i=start; i<=end; i++) yield i;\n}\nconst r = range(1, 5);\nr.next(); // {value:1, done:false}\n\nfor(const n of range(1,5)) console.log(n);\n\n// Бесконечный счётчик\nfunction* infinite() {\n  let i = 0;\n  while(true) yield i++;\n}</code></pre>'
          },
          en: {
            q: 'What are generators (function*)?',
            options: ['Functions whose execution can be paused via yield and resumed', 'Async Promise generators', 'Factory functions'],
            correct: 0,
            explanation: 'function* with yield — lazy iterator. Returns iterator, .next() advances it.',
            theory: '<h4>Generators</h4><pre><code>function* range(s, e) {\n  for(let i=s; i<=e; i++) yield i;\n}\nfor(const n of range(1,5)) console.log(n);</code></pre>'
          }
        },
        {
          id: 'js11',
          ru: {
            q: 'Что такое WeakMap и WeakRef?',
            options: ['WeakMap хранит объекты как ключи со слабыми ссылками — GC может их удалить', 'Версии Map без методов', 'Устаревшие API'],
            correct: 0,
            explanation: 'WeakMap: ключи-объекты не мешают GC. Не итерируем. Применение: метаданные объектов.',
            theory: '<h4>WeakMap</h4><pre><code>const cache = new WeakMap();\n\nfunction process(obj) {\n  if(cache.has(obj)) return cache.get(obj);\n  const result = heavyCalc(obj);\n  cache.set(obj, result); // не мешает GC\n  return result;\n}</code></pre><p>Когда obj удалится — cache тоже очистится автоматически.</p>'
          },
          en: {
            q: 'What are WeakMap and WeakRef?',
            options: ['WeakMap stores objects as keys with weak references — GC can collect them', 'Map versions without methods', 'Deprecated APIs'],
            correct: 0,
            explanation: 'WeakMap: object keys do not prevent GC. Not iterable. Use: object metadata.',
            theory: '<h4>WeakMap</h4><pre><code>const cache = new WeakMap();\nfunction process(obj) {\n  if(cache.has(obj)) return cache.get(obj);\n  const r = heavy(obj);\n  cache.set(obj, r);\n  return r;\n}</code></pre>'
          }
        },
      ]
    },
    async: {
      icon: '🔄', ru: {title: 'Async & Patterns'}, en: {title: 'Async & Patterns'}, questions: [
        {
          id: 'js12',
          ru: {
            q: 'Что такое паттерн Observer?',
            options: ['Объект (subject) уведомляет подписчиков (observers) об изменениях состояния', 'Создание объектов через фабрику', 'Цепочка ответственности'],
            correct: 0,
            explanation: 'Observer = EventEmitter/EventBus. Слабая связанность: издатель не знает подписчиков.',
            theory: '<h4>Observer Pattern</h4><pre><code>class EventEmitter {\n  #listeners = new Map();\n  on(event, fn) {\n    const fns = this.#listeners.get(event) || [];\n    this.#listeners.set(event, [...fns, fn]);\n  }\n  emit(event, ...args) {\n    (this.#listeners.get(event)||[]).forEach(fn=>fn(...args));\n  }\n  off(event, fn) { /* filter */ }\n}</code></pre>'
          },
          en: {
            q: 'What is the Observer pattern?',
            options: ['Object (subject) notifies subscribers (observers) of state changes', 'Object creation via factory', 'Chain of responsibility'],
            correct: 0,
            explanation: 'Observer = EventEmitter/EventBus. Loose coupling: publisher does not know subscribers.',
            theory: '<h4>Observer Pattern</h4><pre><code>emitter.on("change", handler);\nemitter.emit("change", data);\nemitter.off("change", handler);</code></pre>'
          }
        },
        {
          id: 'js13',
          ru: {
            q: 'Что такое паттерн Module?',
            options: ['Инкапсуляция кода через замыкание или ES6 export/import для создания приватного состояния', 'Способ создания классов', 'Паттерн наследования'],
            correct: 0,
            explanation: 'IIFE-модуль или ES6 модуль. Публичный API через return или export, приватное через замыкание.',
            theory: '<h4>Module Pattern</h4><pre><code>// ES6 module\n// counter.js\nlet _count = 0; // private\nexport const increment = () => ++_count;\nexport const getCount = () => _count;\n\n// IIFE module (legacy)\nconst Counter = (() => {\n  let _count = 0;\n  return { increment: ()=>++_count, get:()=>_count };\n})();</code></pre>'
          },
          en: {
            q: 'What is the Module pattern?',
            options: ['Code encapsulation via closure or ES6 export/import for private state', 'Class creation method', 'Inheritance pattern'],
            correct: 0,
            explanation: 'IIFE module or ES6 module. Public API via return/export, private via closure.',
            theory: '<h4>Module Pattern</h4><pre><code>// ES6\nlet _count = 0;\nexport const increment = () => ++_count;</code></pre>'
          }
        },
        {
          id: 'js14',
          ru: {
            q: 'Чем var отличается от let и const?',
            options: ['var — функциональная область видимости, hoisting, можно переопределить; let/const — блочная область, TDZ', 'Нет разницы в modern JS', 'const нельзя использовать в циклах'],
            correct: 0,
            explanation: 'let/const: блочный scope {}, TDZ (нельзя использовать до объявления). const — нельзя переназначить ссылку.',
            theory: '<h4>var vs let vs const</h4><pre><code>// var — hoisting\nconsole.log(x); // undefined\nvar x = 5;\n\n// let — TDZ\nconsole.log(y); // ReferenceError\nlet y = 5;\n\n// const — нельзя переназначить\nconst obj = {};\nobj.name = "ok"; // можно мутировать\nobj = {};        // TypeError!</code></pre>'
          },
          en: {
            q: 'How does var differ from let and const?',
            options: ['var: function scope, hoisting; let/const: block scope, TDZ', 'No difference in modern JS', 'const cannot be used in loops'],
            correct: 0,
            explanation: 'let/const: block scope {}, TDZ. const — cannot reassign reference.',
            theory: '<h4>var vs let vs const</h4><pre><code>var x; // hoisted, undefined\nlet y; // TDZ until declaration\nconst z = {}; z.a = 1; // OK, z = {} — Error</code></pre>'
          }
        },
        {
          id: 'js15',
          ru: {
            q: 'Что такое Symbol?',
            options: ['Примитивный тип для создания уникальных идентификаторов, которые никогда не совпадут', 'Строки с особым синтаксисом', 'Числовые константы'],
            correct: 0,
            explanation: 'Symbol(): каждый символ уникален. Применение: приватные ключи объектов, итераторы (Symbol.iterator).',
            theory: '<h4>Symbol</h4><pre><code>const id = Symbol("id");\nconst id2 = Symbol("id");\nid === id2; // false — всегда уникальны!\n\n// Как ключ объекта\nconst user = { [id]: 42 };\nObject.keys(user); // [] — символы скрыты\n\n// Well-known symbols\n[Symbol.iterator], [Symbol.toPrimitive]</code></pre>'
          },
          en: {
            q: 'What is a Symbol?',
            options: ['Primitive type for creating unique identifiers that never collide', 'Special strings', 'Numeric constants'],
            correct: 0,
            explanation: 'Symbol(): each is unique. Use: private object keys, iterators (Symbol.iterator).',
            theory: '<h4>Symbol</h4><pre><code>const id = Symbol("id");\nSymbol("id") === Symbol("id"); // false\nObject.keys({[id]:1}); // []</code></pre>'
          }
        },
      ]
    }
  }
}