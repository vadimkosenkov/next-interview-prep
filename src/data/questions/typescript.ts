import { QuestionBlock } from "@/types/question";

export const typescriptBlock: QuestionBlock = {
  meta: {
    icon: '🔷',
    color: '#3178c6',
    ru: {title: 'TypeScript', desc: 'Типизация, generics, utility types, декораторы'},
    en: {title: 'TypeScript', desc: 'Types, generics, utility types, decorators'}
  },
  topics: {
    types: {
      icon: '📐', ru: {title: 'Types & Interfaces'}, en: {title: 'Types & Interfaces'}, questions: [
        {
          id: 'ts1',
          ru: {
            q: 'Разница между interface и type в TypeScript?',
            options: ['interface — расширяем через extends/declaration merging; type — можно union/intersection/mapped types', 'Нет разницы, синонимы', 'type быстрее компилируется'],
            correct: 0,
            explanation: 'interface: extends, implements, declaration merging. type: union |, intersection &, mapped types, conditional.',
            theory: '<h4>interface vs type</h4><pre><code>// interface — можно расширить позже\ninterface User { id: number; }\ninterface User { name: string; } // OK — merging\n\n// type — нельзя переопределить\ntype User = { id: number };\ntype Admin = User & { role: string }; // intersection\ntype ID = string | number; // union</code></pre><h4>Правило</h4><p>Используй interface для public API и классов. type для утилитарных типов и сложных комбинаций.</p>'
          },
          en: {
            q: 'Difference between interface and type in TypeScript?',
            options: ['interface: extends/declaration merging; type: union/intersection/mapped types', 'No difference, synonyms', 'type compiles faster'],
            correct: 0,
            explanation: 'interface: extends, implements, declaration merging. type: union |, intersection &, mapped, conditional.',
            theory: '<h4>interface vs type</h4><pre><code>interface User { id: number; }\ninterface User { name: string; } // OK — merging\n\ntype ID = string | number;\ntype Admin = User & { role: string };</code></pre>'
          }
        },
        {
          id: 'ts2',
          ru: {
            q: 'Что такое Generics в TypeScript?',
            options: ['Параметры типа, делающие код переиспользуемым для разных типов', 'Глобальные типы', 'Анонимные типы'],
            correct: 0,
            explanation: 'Generics: <T> — тип как параметр. function identity<T>(x: T): T. Constraints: T extends SomeType.',
            theory: '<h4>Generics</h4><pre><code>function identity<T>(x: T): T { return x; }\n\ninterface Repository<T> {\n  findById(id: number): Promise<T>;\n  save(item: T): Promise<T>;\n}\n\n// Constraints\nfunction getLength<T extends { length: number }>(x: T) {\n  return x.length;\n}</code></pre>'
          },
          en: {
            q: 'What are Generics in TypeScript?',
            options: ['Type parameters making code reusable for different types', 'Global types', 'Anonymous types'],
            correct: 0,
            explanation: 'Generics: <T> — type as parameter. Constraints: T extends SomeType.',
            theory: '<h4>Generics</h4><pre><code>function identity<T>(x: T): T { return x; }\n\nfunction getLength<T extends {length:number}>(x: T) {\n  return x.length;\n}</code></pre>'
          }
        },
        {
          id: 'ts3',
          ru: {
            q: 'Что такое Utility Types? Приведи примеры.',
            options: ['Встроенные в TS трансформации типов: Partial, Required, Pick, Omit, Record, Readonly...', 'Сторонние библиотеки типов', 'Типы для async-операций'],
            correct: 0,
            explanation: 'Partial<T>, Required<T>, Pick<T,K>, Omit<T,K>, Record<K,V>, Readonly<T>, ReturnType<F>.',
            theory: '<h4>Utility Types</h4><pre><code>interface User { id:number; name:string; email:string; }\n\ntype PartialUser = Partial<User>; // все поля опциональны\ntype UserPreview = Pick<User, "id"|"name">;\ntype UserNoId = Omit<User, "id">;\ntype ReadonlyUser = Readonly<User>;\ntype Dict = Record<string, number>;\ntype Fn = (x:number)=>string;\ntype R = ReturnType<Fn>; // string</code></pre>'
          },
          en: {
            q: 'What are Utility Types? Give examples.',
            options: ['Built-in TS type transformations: Partial, Required, Pick, Omit, Record, Readonly...', 'Third-party type libraries', 'Types for async operations'],
            correct: 0,
            explanation: 'Partial<T>, Required<T>, Pick<T,K>, Omit<T,K>, Record<K,V>, Readonly<T>, ReturnType<F>.',
            theory: '<h4>Utility Types</h4><pre><code>Partial<User>   // all optional\nRequired<User>  // all required\nPick<User,"id"|"name">\nOmit<User,"id">\nRecord<string,number>\nReadonly<User></code></pre>'
          }
        },
        {
          id: 'ts4',
          ru: {
            q: 'Что такое Union и Intersection типы?',
            options: ['Union (|): одно из типов; Intersection (&): все типы одновременно', 'Union: все типы, Intersection: один из', 'Union только для примитивов'],
            correct: 0,
            explanation: 'string | number — строка ИЛИ число. Admin & User — объект с полями ОБОИХ типов.',
            theory: '<h4>Union & Intersection</h4><pre><code>// Union — одно из\ntype ID = string | number;\nfunction padLeft(val: string|number) {}\n\n// Intersection — комбинация\ntype Admin = User & { role: "admin" };\n\n// Discriminated Union\ntype Shape =\n  | { kind:"circle"; radius:number }\n  | { kind:"rect"; w:number; h:number };\n\nfunction area(s: Shape) {\n  if(s.kind==="circle") return Math.PI*s.radius**2;\n}</code></pre>'
          },
          en: {
            q: 'What are Union and Intersection types?',
            options: ['Union (|): one of types; Intersection (&): all types simultaneously', 'Union: all, Intersection: one', 'Union for primitives only'],
            correct: 0,
            explanation: 'string | number — string OR number. Admin & User — object with fields of BOTH types.',
            theory: '<h4>Union & Intersection</h4><pre><code>type ID = string | number;\ntype Admin = User & { role: "admin" };\n\n// Discriminated Union\ntype Shape =\n  | { kind:"circle"; radius:number }\n  | { kind:"rect"; w:number; h:number };</code></pre>'
          }
        },
        {
          id: 'ts5',
          ru: {
            q: 'Что такое Type Guards?',
            options: ['Выражения, сужающие тип внутри условного блока (typeof, instanceof, in, user-defined)', 'Инструмент для проверки типов в рантайме автоматически', 'Декораторы TS'],
            correct: 0,
            explanation: 'typeof, instanceof, in, is — позволяют TypeScript сузить тип в ветке кода.',
            theory: '<h4>Type Guards</h4><pre><code>// typeof\nfunction pad(x: string|number) {\n  if(typeof x === "string") return x.trim(); // x: string\n  return x.toFixed(2); // x: number\n}\n\n// instanceof\nif(err instanceof HttpError) { err.statusCode; }\n\n// User-defined\nfunction isUser(x: any): x is User {\n  return typeof x.name === "string";\n}\n\n// in\nif("email" in obj) { obj.email; }</code></pre>'
          },
          en: {
            q: 'What are Type Guards?',
            options: ['Expressions narrowing types inside conditional blocks (typeof, instanceof, in, user-defined)', 'Automatic runtime type checker', 'TS decorators'],
            correct: 0,
            explanation: 'typeof, instanceof, in, is — let TypeScript narrow the type in code branches.',
            theory: '<h4>Type Guards</h4><pre><code>if(typeof x === "string") { x.trim(); }\nif(err instanceof HttpError) { err.statusCode; }\nfunction isUser(x:any): x is User { return !!x.name; }</code></pre>'
          }
        },
        {
          id: 'ts6',
          ru: {
            q: 'Что такое декораторы в TypeScript?',
            options: ['Функции, добавляющие метаданные или модифицирующие классы/методы/свойства', 'Синтаксический сахар для interface', 'Аналог generics'],
            correct: 0,
            explanation: '@Decorator — применяется к классу/методу/свойству. Широко используется в Angular и NestJS.',
            theory: '<h4>Decorators</h4><pre><code>// Class decorator\nfunction sealed(constructor: Function) {\n  Object.seal(constructor);\n}\n\n@sealed\nclass BugReport { ... }\n\n// Method decorator (Angular-style)\n@Component({ selector: "app-root", template: "..." })\nclass AppComponent {}\n\n// NestJS\n@Injectable()\nclass UserService {}\n\n@Controller("users")\nclass UserController {\n  @Get(":id")\n  findOne(@Param("id") id: string) {}\n}</code></pre>'
          },
          en: {
            q: 'What are decorators in TypeScript?',
            options: ['Functions adding metadata or modifying classes/methods/properties', 'Syntactic sugar for interface', 'Generics analog'],
            correct: 0,
            explanation: '@Decorator applied to class/method/property. Widely used in Angular and NestJS.',
            theory: '<h4>Decorators</h4><pre><code>@Component({ selector:"app-root" })\nclass AppComponent {}\n\n@Injectable()\nclass UserService {}\n\n@Controller("users")\nclass UserController {\n  @Get(":id") findOne(@Param("id") id:string) {}\n}</code></pre>'
          }
        },
        {
          id: 'ts7',
          ru: {
            q: 'Что такое keyof и typeof в TypeScript?',
            options: ['keyof — получить union ключей типа; typeof — получить тип значения/переменной', 'Аналоги JS-операторов без разницы', 'Только для примитивных типов'],
            correct: 0,
            explanation: 'keyof User = "id" | "name" | "email". typeof obj — тип объекта.',
            theory: '<h4>keyof & typeof</h4><pre><code>interface User { id:number; name:string; }\ntype Keys = keyof User; // "id" | "name"\n\nfunction get<T, K extends keyof T>(obj:T, key:K): T[K] {\n  return obj[key];\n}\n\nconst config = { debug:true, port:3000 };\ntype Config = typeof config; // {debug:boolean, port:number}\n\n// Комбо\ntype Values = typeof config[keyof typeof config]; // boolean|number</code></pre>'
          },
          en: {
            q: 'What are keyof and typeof in TypeScript?',
            options: ['keyof: get union of type keys; typeof: get type of value/variable', 'JS operators without difference', 'Primitives only'],
            correct: 0,
            explanation: 'keyof User = "id" | "name". typeof obj — type of the object.',
            theory: '<h4>keyof & typeof</h4><pre><code>type Keys = keyof User; // "id" | "name"\n\nconst config = { debug:true };\ntype Config = typeof config;</code></pre>'
          }
        },
        {
          id: 'ts8',
          ru: {
            q: 'Что такое Conditional Types?',
            options: ['T extends U ? X : Y — типы, зависящие от условия (как тернарный оператор для типов)', 'if/else на уровне JS', 'Аналог switch'],
            correct: 0,
            explanation: 'Conditional types позволяют создавать типы в зависимости от условия: T extends string ? "да" : "нет".',
            theory: '<h4>Conditional Types</h4><pre><code>type IsString<T> = T extends string ? true : false;\nIsString<"hello"> // true\nIsString<42>      // false\n\n// infer\ntype Unwrap<T> = T extends Promise<infer U> ? U : T;\nUnwrap<Promise<string>> // string\nUnwrap<number>          // number\n\n// Встроенный\ntype NonNullable<T> = T extends null|undefined ? never : T;</code></pre>'
          },
          en: {
            q: 'What are Conditional Types?',
            options: ['T extends U ? X : Y — types depending on condition (ternary for types)', 'if/else at JS level', 'switch analog'],
            correct: 0,
            explanation: 'Conditional types create types based on conditions: T extends string ? "yes" : "no".',
            theory: '<h4>Conditional Types</h4><pre><code>type IsString<T> = T extends string ? true : false;\ntype Unwrap<T> = T extends Promise<infer U> ? U : T;</code></pre>'
          }
        },
      ]
    },
    advanced_ts: {
      icon: '🚀', ru: {title: 'Advanced TS'}, en: {title: 'Advanced TS'}, questions: [
        {
          id: 'ts9',
          ru: {
            q: 'Что такое Mapped Types?',
            options: ['Создание нового типа путём трансформации всех ключей существующего типа', 'Маппинг данных через Array.map', 'Типы для Redux'],
            correct: 0,
            explanation: '{ [K in keyof T]: ... } — трансформируем каждый ключ. Основа Partial, Readonly, Required.',
            theory: '<h4>Mapped Types</h4><pre><code>// Реализация Partial\ntype MyPartial<T> = { [K in keyof T]?: T[K] };\n\n// Readonly\ntype MyReadonly<T> = { readonly [K in keyof T]: T[K] };\n\n// Трансформация значений\ntype Stringify<T> = { [K in keyof T]: string };\n\n// Conditional mapped\ntype Nullify<T> = {\n  [K in keyof T]: T[K] extends string ? null : T[K]\n};</code></pre>'
          },
          en: {
            q: 'What are Mapped Types?',
            options: ['Creating new type by transforming all keys of existing type', 'Data mapping via Array.map', 'Redux types'],
            correct: 0,
            explanation: '{ [K in keyof T]: ... } — transform each key. Foundation of Partial, Readonly, Required.',
            theory: '<h4>Mapped Types</h4><pre><code>type MyPartial<T> = { [K in keyof T]?: T[K] };\ntype MyReadonly<T> = { readonly [K in keyof T]: T[K] };</code></pre>'
          }
        },
        {
          id: 'ts10',
          ru: {
            q: 'Что такое strictNullChecks?',
            options: ['Режим TS, при котором null и undefined не входят в другие типы автоматически', 'Строгая проверка производительности', 'Запрет any'],
            correct: 0,
            explanation: 'С strictNullChecks: string не принимает null. Нужно писать string | null явно. Находит кучу ошибок.',
            theory: '<h4>strictNullChecks</h4><pre><code>// Без strictNullChecks (плохо)\nlet s: string = null; // OK, но ошибка в рантайме\n\n// С strictNullChecks\nlet s: string = null; // Error!\nlet s: string|null = null; // OK\n\n// Optional chaining + nullish coalescing\nconst name = user?.profile?.name ?? "Anonymous";</code></pre>'
          },
          en: {
            q: 'What is strictNullChecks?',
            options: ['TS mode where null and undefined are not assignable to other types automatically', 'Performance strictness', 'Disabling any'],
            correct: 0,
            explanation: 'With strictNullChecks: string does not accept null. Must write string | null explicitly.',
            theory: '<h4>strictNullChecks</h4><pre><code>let s: string = null; // Error with strict!\nlet s: string|null = null; // OK\n\nconst name = user?.profile?.name ?? "Anonymous";</code></pre>'
          }
        },
      ]
    }
  }
}
