import { QuestionBlock } from "@/types/question";

export const nextjsBlock: QuestionBlock = {
  meta: {
    icon: '▲',
    color: '#000000',
    ru: {title: 'Next.js', desc: 'App Router, SSR, SSG, RSC, API Routes'},
    en: {title: 'Next.js', desc: 'App Router, SSR, SSG, RSC, API Routes'}
  },
  topics: {
    core: {
      icon: '▲', ru: {title: 'Core Concepts'}, en: {title: 'Core Concepts'}, questions: [
        {
          id: 'nx1',
          ru: {
            q: 'Что такое App Router в Next.js 13+?',
            options: ['Файловый роутинг на основе папки app/ с поддержкой Server Components, Layouts, Loading UI и Error Boundaries', 'Роутинг через pages/ директорию', 'npm-пакет для роутинга'],
            correct: 0,
            explanation: 'App Router: layout.tsx — общий layout, page.tsx — страница, loading.tsx — Suspense, error.tsx — ErrorBoundary.',
            theory: '<h4>App Router</h4><pre><code>app/\n  layout.tsx      // root layout\n  page.tsx        // homepage /\n  blog/\n    layout.tsx    // blog layout\n    page.tsx      // /blog\n    [slug]/\n      page.tsx    // /blog/my-post\n  api/\n    users/\n      route.ts    // /api/users</code></pre>'
          },
          en: {
            q: 'What is App Router in Next.js 13+?',
            options: ['File-based routing in app/ folder with Server Components, Layouts, Loading UI, Error Boundaries', 'Routing via pages/ directory', 'npm routing package'],
            correct: 0,
            explanation: 'App Router: layout.tsx — shared layout, page.tsx — page, loading.tsx — Suspense, error.tsx — ErrorBoundary.',
            theory: '<h4>App Router</h4><pre><code>app/\n  layout.tsx  // root\n  page.tsx    // /\n  blog/[slug]/page.tsx  // /blog/:slug\n  api/users/route.ts    // /api/users</code></pre>'
          }
        },
        {
          id: 'nx2',
          ru: {
            q: 'SSR vs SSG vs ISR в Next.js?',
            options: ['SSR — рендер на сервере при каждом запросе; SSG — при сборке; ISR — SSG с периодическим обновлением', 'Нет разницы', 'SSG только для статических сайтов'],
            correct: 0,
            explanation: 'SSR: свежие данные всегда, медленнее. SSG: быстро, данные могут устареть. ISR: компромисс.',
            theory: '<h4>Rendering strategies</h4><pre><code>// SSR — всегда свежее (App Router)\nasync function Page() {\n  const data = await fetch(url, {cache:"no-store"});\n}\n\n// SSG — при сборке\nasync function Page() {\n  const data = await fetch(url); // кэш по умолчанию\n}\n\n// ISR — обновление каждые N секунд\nasync function Page() {\n  const data = await fetch(url, {next:{revalidate:60}});\n}</code></pre>'
          },
          en: {
            q: 'SSR vs SSG vs ISR in Next.js?',
            options: ['SSR: render on server per request; SSG: at build time; ISR: SSG with periodic revalidation', 'No difference', 'SSG for static sites only'],
            correct: 0,
            explanation: 'SSR: always fresh, slower. SSG: fast, may be stale. ISR: compromise.',
            theory: '<h4>Rendering</h4><pre><code>// SSR\nawait fetch(url, {cache:"no-store"});\n// SSG\nawait fetch(url);\n// ISR\nawait fetch(url, {next:{revalidate:60}});</code></pre>'
          }
        },
        {
          id: 'nx3',
          ru: {
            q: 'Что такое Server Actions в Next.js?',
            options: ['Async функции с "use server", выполняемые на сервере. Прямая мутация данных без API-роута', 'Серверные WebSocket', 'API Routes нового поколения'],
            correct: 0,
            explanation: 'Server Actions: form submit или кнопка вызывает серверную функцию напрямую. Работает с revalidatePath.',
            theory: '<h4>Server Actions</h4><pre><code>// actions.ts\n"use server";\nexport async function createUser(formData: FormData) {\n  const name = formData.get("name") as string;\n  await db.users.create({data:{name}});\n  revalidatePath("/users");\n}\n\n// page.tsx\n&lt;form action={createUser}&gt;\n  &lt;input name="name" /&gt;\n  &lt;button type="submit"&gt;Create&lt;/button&gt;\n&lt;/form&gt;</code></pre>'
          },
          en: {
            q: 'What are Server Actions in Next.js?',
            options: ['Async functions with "use server" running on server. Direct data mutation without API route', 'Server WebSockets', 'Next-gen API Routes'],
            correct: 0,
            explanation: 'Server Actions: form submit calls server function directly. Works with revalidatePath.',
            theory: '<h4>Server Actions</h4><pre><code>"use server";\nexport async function create(fd: FormData) {\n  await db.users.create({data:{name:fd.get("name")}});\n  revalidatePath("/users");\n}</code></pre>'
          }
        },
        {
          id: 'nx4',
          ru: {
            q: 'Что такое Middleware в Next.js?',
            options: ['Функция, выполняемая перед каждым запросом. Для auth, редиректов, A/B тестов', 'HTTP-interceptor для API', 'CSS middleware'],
            correct: 0,
            explanation: 'middleware.ts в корне: interceptor до рендеринга. Быстро работает в Edge Runtime.',
            theory: '<h4>Next.js Middleware</h4><pre><code>// middleware.ts\nexport function middleware(request: NextRequest) {\n  const token = request.cookies.get("token");\n  if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {\n    return NextResponse.redirect(new URL("/login", request.url));\n  }\n  return NextResponse.next();\n}\n\nexport const config = {\n  matcher: ["/dashboard/:path*"]\n};</code></pre>'
          },
          en: {
            q: 'What is Middleware in Next.js?',
            options: ['Function running before each request. For auth, redirects, A/B tests', 'HTTP interceptor for API', 'CSS middleware'],
            correct: 0,
            explanation: 'middleware.ts at root: interceptor before rendering. Runs fast in Edge Runtime.',
            theory: '<h4>Next.js Middleware</h4><pre><code>export function middleware(req: NextRequest) {\n  if(!req.cookies.get("token")) {\n    return NextResponse.redirect(new URL("/login", req.url));\n  }\n  return NextResponse.next();\n}</code></pre>'
          }
        },
        {
          id: 'nx5',
          ru: {
            q: 'Как работает кэширование в Next.js App Router?',
            options: ['4 уровня: Request Memoization, Data Cache, Full Route Cache, Router Cache — каждый можно настроить', 'Только HTTP-кэш', 'Нет кэширования'],
            correct: 0,
            explanation: 'Data Cache: fetch кэшируется между запросами. revalidate, no-store — управление. Router Cache — клиентский.',
            theory: '<h4>Next.js Caching</h4><ul><li><b>Request Memoization</b>: дедупликация fetch в одном рендере</li><li><b>Data Cache</b>: кэш между запросами. force-cache (default) / no-store / revalidate:60</li><li><b>Full Route Cache</b>: статические страницы на диск</li><li><b>Router Cache</b>: клиентский кэш префетченных страниц</li></ul><pre><code>// Инвалидация\nrevalidatePath("/users");\nrevalidateTag("users");\n\nfetch(url, {next:{tags:["users"]}});</code></pre>'
          },
          en: {
            q: 'How does caching work in Next.js App Router?',
            options: ['4 levels: Request Memoization, Data Cache, Full Route Cache, Router Cache — each configurable', 'HTTP cache only', 'No caching'],
            correct: 0,
            explanation: 'Data Cache: fetch cached between requests. revalidate, no-store — control. Router Cache — client side.',
            theory: '<h4>Next.js Caching</h4><ul><li>Request Memoization: dedup fetch in one render</li><li>Data Cache: between requests</li><li>Full Route Cache: static pages on disk</li><li>Router Cache: client prefetch cache</li></ul><pre><code>revalidatePath("/users");\nfetch(url, {next:{revalidate:60}});</code></pre>'
          }
        },
      ]
    }
  }
}