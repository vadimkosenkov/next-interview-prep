import { QuestionBlock } from "@/types/question";

export const reactBlock: QuestionBlock = {
  meta: {
    icon: '⚛️',
    color: '#61dafb',
    ru: {title: 'React', desc: 'Hooks, Virtual DOM, Context, Redux, RSC...'},
    en: {title: 'React', desc: 'Hooks, Virtual DOM, Context, Redux, RSC...'}
  },
  topics: {
    core: {
      icon: '⚛️', ru: {title: 'Core & Hooks'}, en: {title: 'Core & Hooks'}, questions: [
        {
          id: 'rc1',
          ru: {
            q: 'Что такое Virtual DOM?',
            options: ['JS-представление реального DOM. React сравнивает деревья (reconciliation) и применяет только diff', 'DOM, скрытый от пользователя', 'Аналог Shadow DOM'],
            correct: 0,
            explanation: 'React создаёт vDOM в JS. При изменении состояния — новый vDOM → diffing → применение изменений.',
            theory: '<h4>Virtual DOM</h4><ol><li>render() → Virtual DOM</li><li>Изменение state → новый vDOM</li><li>Diffing (reconciliation)</li><li>Apply minimal changes to real DOM</li></ol><h4>React Fiber</h4><p>С React 16: прерываемый рендеринг с приоритетами задач.</p>'
          },
          en: {
            q: 'What is Virtual DOM?',
            options: ['JS representation of real DOM. React compares trees (reconciliation) and applies only diff', 'DOM hidden from users', 'Shadow DOM analog'],
            correct: 0,
            explanation: 'React creates vDOM in JS. On state change — new vDOM → diffing → applying changes.',
            theory: '<h4>Virtual DOM</h4><ol><li>render() → vDOM</li><li>State change → new vDOM</li><li>Diff → update real DOM</li></ol>'
          }
        },
        {
          id: 'rc2',
          ru: {
            q: 'useEffect vs useLayoutEffect?',
            options: ['useEffect — после paint (асинхронно); useLayoutEffect — до paint (синхронно, для DOM-измерений)', 'useLayoutEffect только для SSR', 'Нет разницы'],
            correct: 0,
            explanation: 'useLayoutEffect: используй для getBoundingClientRect, предотвращения мигания. Иначе — useEffect.',
            theory: '<h4>useEffect vs useLayoutEffect</h4><pre><code>// useEffect — после paint, не блокирует UI\nuseEffect(() => { fetchData(); }, []);\n\n// useLayoutEffect — до paint, СИНХРОННО\nuseLayoutEffect(() => {\n  const h = ref.current.getBoundingClientRect().height;\n  setHeight(h); // без мигания\n}, []);</code></pre>'
          },
          en: {
            q: 'useEffect vs useLayoutEffect?',
            options: ['useEffect: after paint (async); useLayoutEffect: before paint (sync, for DOM measurements)', 'useLayoutEffect for SSR only', 'No difference'],
            correct: 0,
            explanation: 'useLayoutEffect: use for getBoundingClientRect, prevent flicker. Otherwise — useEffect.',
            theory: '<h4>useEffect vs useLayoutEffect</h4><pre><code>useEffect(() => { fetchData(); }, []);\nuseLayoutEffect(() => {\n  const h = ref.current.getBoundingClientRect().height;\n}, []);</code></pre>'
          }
        },
        {
          id: 'rc3',
          ru: {
            q: 'useMemo vs useCallback?',
            options: ['useMemo — кэширует значение; useCallback — кэширует функцию', 'useMemo кэширует компоненты', 'Нет разницы'],
            correct: 0,
            explanation: 'useCallback(fn, deps) = useMemo(() => fn, deps). Оба пересчитываются при изменении deps.',
            theory: '<h4>useMemo vs useCallback</h4><pre><code>// useMemo — кэш значения\nconst sorted = useMemo(() =>\n  items.sort((a,b) => b.score-a.score), [items]);\n\n// useCallback — кэш функции\nconst handleClick = useCallback(() => {\n  dispatch(addItem(item));\n}, [dispatch, item]);\n\n// Одно и то же:\nconst fn = useMemo(() => () => doSomething(), []);\nconst fn = useCallback(() => doSomething(), []);</code></pre>'
          },
          en: {
            q: 'useMemo vs useCallback?',
            options: ['useMemo: caches value; useCallback: caches function', 'useMemo caches components', 'No difference'],
            correct: 0,
            explanation: 'useCallback(fn, deps) = useMemo(() => fn, deps). Both recompute on deps change.',
            theory: '<h4>useMemo vs useCallback</h4><pre><code>const sorted = useMemo(() => items.sort(...), [items]);\nconst fn = useCallback(() => dispatch(action), [dispatch]);</code></pre>'
          }
        },
        {
          id: 'rc4',
          ru: {
            q: 'Что такое React.memo?',
            options: ['HOC, пропускающий ре-рендер если props не изменились (поверхностное сравнение)', 'useMemo для компонентов в классах', 'Глобальная мемоизация'],
            correct: 0,
            explanation: 'React.memo делает shallow compare props. Нужен useCallback для стабильных колбэков иначе смысл теряется.',
            theory: '<h4>React.memo</h4><pre><code>const Btn = React.memo(({ label, onClick }) => (\n  &lt;button onClick={onClick}&gt;{label}&lt;/button&gt;\n));\n\n// Кастомная функция сравнения\nconst Comp = React.memo(MyComp, (prev, next) =>\n  prev.id === next.id\n);\n\n// Без useCallback — memo бесполезен!\nconst handler = useCallback(() => {}, []);\n&lt;Btn onClick={handler} /&gt;</code></pre>'
          },
          en: {
            q: 'What is React.memo?',
            options: ['HOC skipping re-render if props unchanged (shallow comparison)', 'useMemo for class components', 'Global memoization'],
            correct: 0,
            explanation: 'React.memo shallow-compares props. Need useCallback for stable callbacks or memo is useless.',
            theory: '<h4>React.memo</h4><pre><code>const Btn = React.memo(({ label, onClick }) => (\n  &lt;button onClick={onClick}&gt;{label}&lt;/button&gt;\n));\nconst handler = useCallback(() => {}, []);</code></pre>'
          }
        },
        {
          id: 'rc5',
          ru: {
            q: 'Что такое useReducer и когда использовать?',
            options: ['useState + Redux паттерн для сложного состояния со множеством действий', 'Устаревший аналог useState', 'Только для classных компонентов'],
            correct: 0,
            explanation: 'useReducer лучше когда: следующий state зависит от предыдущего, много связанных обновлений.',
            theory: '<h4>useReducer</h4><pre><code>type Action = {type:"INC"}|{type:"RESET"};\n\nconst reducer = (state:number, action:Action) => {\n  switch(action.type) {\n    case "INC": return state + 1;\n    case "RESET": return 0;\n    default: return state;\n  }\n};\n\nconst [count, dispatch] = useReducer(reducer, 0);\ndispatch({type:"INC"});</code></pre>'
          },
          en: {
            q: 'What is useReducer and when to use it?',
            options: ['useState + Redux pattern for complex state with many actions', 'Deprecated useState analog', 'Class components only'],
            correct: 0,
            explanation: 'useReducer better when: next state depends on previous, many related updates.',
            theory: '<h4>useReducer</h4><pre><code>const [state, dispatch] = useReducer(reducer, initialState);\ndispatch({type:"INCREMENT"});</code></pre>'
          }
        },
        {
          id: 'rc6',
          ru: {
            q: 'Что такое React Context и когда НЕ использовать?',
            options: ['API для передачи данных без prop drilling. НЕ использовать для часто меняющихся данных — все потребители ре-рендерятся', 'Замена Redux', 'Только для темы оформления'],
            correct: 0,
            explanation: 'Context: при изменении ре-рендерятся ВСЕ потребители. Для часто меняемых данных — Zustand/Jotai.',
            theory: '<h4>React Context</h4><pre><code>const ThemeCtx = createContext("light");\n\nfunction App() {\n  const [theme, setTheme] = useState("dark");\n  return (\n    &lt;ThemeCtx.Provider value={{theme, setTheme}}&gt;\n      &lt;Child /&gt;\n    &lt;/ThemeCtx.Provider&gt;\n  );\n}\n\nconst {theme} = useContext(ThemeCtx);</code></pre><h4>Когда не Context</h4><ul><li>Частые обновления (каждый кадр)</li><li>Большое дерево с разными потребителями</li><li>→ Zustand / Jotai / Redux Toolkit</li></ul>'
          },
          en: {
            q: 'What is React Context and when NOT to use it?',
            options: ['API for passing data without prop drilling. NOT for frequently changing data — all consumers re-render', 'Redux replacement', 'Theme only'],
            correct: 0,
            explanation: 'Context: on change ALL consumers re-render. For frequently changed data — Zustand/Jotai.',
            theory: '<h4>React Context</h4><pre><code>const Ctx = createContext("light");\n&lt;Ctx.Provider value={value}&gt;&lt;Child /&gt;&lt;/Ctx.Provider&gt;\nconst value = useContext(Ctx);</code></pre>'
          }
        },
        {
          id: 'rc7',
          ru: {
            q: 'Что такое useRef?',
            options: ['Хранит мутируемое значение без ре-рендера при изменении. Также для доступа к DOM-элементу', 'Аналог useState', 'Только для DOM-доступа'],
            correct: 0,
            explanation: 'ref.current = значение. Изменение не вызывает ре-рендер. Применение: DOM, предыдущее значение, таймеры.',
            theory: '<h4>useRef</h4><pre><code>// DOM доступ\nconst inputRef = useRef<HTMLInputElement>(null);\n&lt;input ref={inputRef} /&gt;\nfocus() { inputRef.current?.focus(); }\n\n// Предыдущее значение\nconst prevValue = useRef(value);\nuseEffect(() => { prevValue.current = value; });\n\n// Стабильный ID без ре-рендера\nconst timerId = useRef<ReturnType<typeof setTimeout>>();</code></pre>'
          },
          en: {
            q: 'What is useRef?',
            options: ['Stores mutable value without re-render on change. Also for DOM element access', 'useState analog', 'DOM access only'],
            correct: 0,
            explanation: 'ref.current = value. Changes do not trigger re-render. Uses: DOM, previous value, timers.',
            theory: '<h4>useRef</h4><pre><code>const ref = useRef<HTMLInputElement>(null);\n&lt;input ref={ref} /&gt;\nref.current?.focus();</code></pre>'
          }
        },
      ]
    },
    state: {
      icon: '🗃️', ru: {title: 'State Management'}, en: {title: 'State Management'}, questions: [
        {
          id: 'rc_s1',
          ru: {
            q: 'Что такое Redux Toolkit?',
            options: ['Официальный Redux: createSlice (без бойлерплейта), Immer (мутации), RTK Query (серверное состояние)', 'Старая версия Redux', 'Аналог MobX'],
            correct: 0,
            explanation: 'RTK = Redux без бойлерплейта. createSlice генерирует actions и reducer. Immer позволяет писать "мутации".',
            theory: '<h4>Redux Toolkit</h4><pre><code>const slice = createSlice({\n  name:"counter",\n  initialState:{value:0},\n  reducers:{\n    increment: state => { state.value++; }, // Immer!\n    decrement: state => { state.value--; },\n    setCount: (state, action) => { state.value=action.payload; }\n  }\n});\nexport const {increment} = slice.actions;\nexport default slice.reducer;</code></pre>'
          },
          en: {
            q: 'What is Redux Toolkit?',
            options: ['Official Redux: createSlice (no boilerplate), Immer (mutations), RTK Query (server state)', 'Old Redux version', 'MobX analog'],
            correct: 0,
            explanation: 'RTK = Redux without boilerplate. createSlice generates actions/reducer. Immer allows "mutations".',
            theory: '<h4>Redux Toolkit</h4><pre><code>const slice = createSlice({\n  name:"counter",\n  initialState:{value:0},\n  reducers:{ increment: state => { state.value++; } }\n});</code></pre>'
          }
        },
        {
          id: 'rc_s2',
          ru: {
            q: 'Чем TanStack Query отличается от Redux?',
            options: ['TanStack Query — для серверного состояния (fetch/cache/sync); Redux — для клиентского UI-состояния', 'TanStack Query заменяет Redux полностью', 'TanStack Query только для GET'],
            correct: 0,
            explanation: 'Разные задачи: TanStack Query управляет кэшем сервера. Redux — локальный UI стейт.',
            theory: '<h4>TanStack Query</h4><pre><code>const { data, isLoading } = useQuery({\n  queryKey:["users"],\n  queryFn: () => fetch("/api/users").then(r=>r.json()),\n  staleTime: 5 * 60 * 1000\n});\n\nconst mutation = useMutation({\n  mutationFn: (user) => api.createUser(user),\n  onSuccess: () => queryClient.invalidateQueries(["users"])\n});</code></pre>'
          },
          en: {
            q: 'How does TanStack Query differ from Redux?',
            options: ['TanStack Query: server state (fetch/cache/sync); Redux: client UI state', 'TanStack Query fully replaces Redux', 'TanStack Query for GET only'],
            correct: 0,
            explanation: 'Different roles: TanStack Query manages server cache. Redux — local UI state.',
            theory: '<h4>TanStack Query</h4><pre><code>const { data } = useQuery({\n  queryKey:["users"],\n  queryFn: () => fetch("/api/users").then(r=>r.json())\n});</code></pre>'
          }
        },
        {
          id: 'rc_s3',
          ru: {
            q: 'Что такое Zustand?',
            options: ['Минималистичная библиотека управления состоянием без бойлерплейта, не требует Provider', 'Фреймворк на основе Redux', 'Версия MobX для React'],
            correct: 0,
            explanation: 'Zustand: create(set => ({state, action})), useStore(s => s.value). Нет Provider, нет Redux DevTools (но можно подключить).',
            theory: '<h4>Zustand</h4><pre><code>const useStore = create<State>()((set) => ({\n  count: 0,\n  increment: () => set(s => ({count:s.count+1})),\n  reset: () => set({count:0})\n}));\n\n// Использование\nconst count = useStore(s => s.count);\nconst inc = useStore(s => s.increment);</code></pre><p>Не перерендеривает компонент если выбранное значение не изменилось.</p>'
          },
          en: {
            q: 'What is Zustand?',
            options: ['Minimalistic state management without boilerplate, no Provider required', 'Redux-based framework', 'MobX for React'],
            correct: 0,
            explanation: 'Zustand: create(set => ({state, action})), useStore(s => s.value). No Provider needed.',
            theory: '<h4>Zustand</h4><pre><code>const useStore = create((set) => ({\n  count: 0,\n  inc: () => set(s => ({count:s.count+1}))\n}));\nconst count = useStore(s => s.count);</code></pre>'
          }
        },
      ]
    },
    advanced: {
      icon: '🚀', ru: {title: 'Advanced React'}, en: {title: 'Advanced React'}, questions: [
        {
          id: 'rc_a1',
          ru: {
            q: 'Что такое React Server Components?',
            options: ['Компоненты, рендерящиеся на сервере с доступом к БД. Нет клиентского JS, нет useState', 'Устаревший SSR-подход', 'Аналог Angular Universal'],
            correct: 0,
            explanation: 'RSC: прямой доступ к БД, нулевой bundle на клиенте. Client компоненты — "use client".',
            theory: '<h4>React Server Components</h4><pre><code>// ServerComponent.tsx (нет "use client")\nasync function UserList() {\n  const users = await db.users.findAll(); // прямо к БД!\n  return &lt;ul&gt;{users.map(u=>&lt;li&gt;{u.name}&lt;/li&gt;)}&lt;/ul&gt;;\n}\n\n// ClientComponent.tsx\n"use client";\nfunction Counter() {\n  const [n, setN] = useState(0);\n  return &lt;button onClick={()=>setN(n+1)}&gt;{n}&lt;/button&gt;;\n}</code></pre>'
          },
          en: {
            q: 'What are React Server Components?',
            options: ['Components rendered on server with DB access. No client JS, no useState', 'Deprecated SSR approach', 'Angular Universal analog'],
            correct: 0,
            explanation: 'RSC: direct DB access, zero bundle on client. Client components — "use client".',
            theory: '<h4>RSC</h4><pre><code>// Server\nasync function UserList() {\n  const users = await db.users.findAll();\n  return &lt;ul&gt;{users.map(u=>&lt;li&gt;{u.name}&lt;/li&gt;)}&lt;/ul&gt;;\n}\n// Client\n"use client";\nfunction Counter() { const [n,setN]=useState(0); }</code></pre>'
          }
        },
        {
          id: 'rc_a2',
          ru: {
            q: 'Что такое Suspense и Concurrent Features в React 18?',
            options: ['Suspense: fallback при асинхронной загрузке; Concurrent: прерываемый рендеринг (startTransition, useDeferredValue)', 'Инструменты тестирования', 'Аналог Angular CD'],
            correct: 0,
            explanation: 'startTransition помечает обновление как низкоприоритетное. useDeferredValue откладывает обновление.',
            theory: '<h4>React 18 Features</h4><pre><code>&lt;Suspense fallback={&lt;Spinner /&gt;}&gt;\n  &lt;LazyChart /&gt;\n&lt;/Suspense&gt;\n\n// startTransition — не блокирует UI\nstartTransition(() => setFilter(value));\n\n// useDeferredValue\nconst deferred = useDeferredValue(searchQuery);\n\n// useTransition\nconst [isPending, startTransition] = useTransition();</code></pre>'
          },
          en: {
            q: 'What are Suspense and Concurrent Features in React 18?',
            options: ['Suspense: fallback on async load; Concurrent: interruptible rendering (startTransition, useDeferredValue)', 'Testing tools', 'Angular CD analog'],
            correct: 0,
            explanation: 'startTransition marks update as low priority. useDeferredValue defers an update.',
            theory: '<h4>React 18</h4><pre><code>&lt;Suspense fallback={&lt;Spinner /&gt;}&gt;&lt;LazyChart /&gt;&lt;/Suspense&gt;\nstartTransition(() => setFilter(v));\nconst deferred = useDeferredValue(query);</code></pre>'
          }
        },
        {
          id: 'rc_a3',
          ru: {
            q: 'Что такое Custom Hooks?',
            options: ['Функции начинающиеся с use, инкапсулирующие логику с хуками для переиспользования', 'Специальные хуки React для классов', 'Хуки Angular'],
            correct: 0,
            explanation: 'Custom hooks позволяют вынести повторяющуюся логику useEffect, useState и т.д.',
            theory: '<h4>Custom Hooks</h4><pre><code>function useFetch<T>(url: string) {\n  const [data, setData] = useState<T|null>(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState<Error|null>(null);\n\n  useEffect(() => {\n    fetch(url)\n      .then(r => r.json())\n      .then(setData)\n      .catch(setError)\n      .finally(() => setLoading(false));\n  }, [url]);\n\n  return { data, loading, error };\n}\n\n// Использование\nconst { data: users } = useFetch&lt;User[]&gt;("/api/users");</code></pre>'
          },
          en: {
            q: 'What are Custom Hooks?',
            options: ['Functions starting with "use", encapsulating hook logic for reuse', 'Special React hooks for classes', 'Angular hooks'],
            correct: 0,
            explanation: 'Custom hooks extract reusable logic with useEffect, useState, etc.',
            theory: '<h4>Custom Hook</h4><pre><code>function useFetch<T>(url:string) {\n  const [data,setData] = useState<T|null>(null);\n  useEffect(() => {\n    fetch(url).then(r=>r.json()).then(setData);\n  }, [url]);\n  return data;\n}</code></pre>'
          }
        },
      ]
    }
  }
}
