import { QuestionBlock } from "@/types/question";

export const frontendBlock: QuestionBlock = {
  meta: {
    icon: '🌐',
    color: '#06b6d4',
    ru: {title: 'Basic Frontend', desc: 'HTML, CSS, Browser API, Security, Performance'},
    en: {title: 'Basic Frontend', desc: 'HTML, CSS, Browser API, Security, Performance'}
  },
  topics: {
    html: {
      icon: '📄', ru: {title: 'HTML'}, en: {title: 'HTML'}, questions: [
        {
          id: 'h1',
          ru: {
            q: 'Что такое семантический HTML?',
            options: ['Использование тегов по смысловому значению', 'Написание HTML без CSS', 'Минификация HTML-кода'],
            correct: 0,
            explanation: 'Семантический HTML — использование тегов по смыслу: <article>, <nav>, <header> вместо <div>.',
            theory: '<h4>Семантический HTML</h4><p>Теги описывают <b>смысл</b> контента, а не внешний вид.</p><ul><li><code>&lt;header&gt;</code> — шапка</li><li><code>&lt;nav&gt;</code> — навигация</li><li><code>&lt;main&gt;</code> — основной контент</li><li><code>&lt;article&gt;</code> — независимая единица</li><li><code>&lt;section&gt;</code> — тематическая секция</li><li><code>&lt;aside&gt;</code> — боковой контент</li><li><code>&lt;footer&gt;</code> — подвал</li></ul><h4>Зачем</h4><ul><li>SEO — поисковики понимают структуру</li><li>Доступность — скринридеры навигируют по тегам</li><li>Читаемость кода</li></ul>'
          },
          en: {
            q: 'What is semantic HTML?',
            options: ['Using tags by their meaning', 'Writing HTML without CSS', 'Minifying HTML code'],
            correct: 0,
            explanation: 'Semantic HTML means using tags by meaning: <article>, <nav>, <header> instead of <div>.',
            theory: '<h4>Semantic HTML</h4><ul><li><code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;footer&gt;</code></li></ul><p>Benefits: SEO, accessibility, readable code.</p>'
          }
        },
        {
          id: 'h2',
          ru: {
            q: 'Разница между async и defer у тега <script>?',
            options: ['async — параллельная загрузка и немедленное выполнение; defer — параллельная загрузка и выполнение после парсинга HTML', 'Нет разницы', 'defer блокирует рендеринг'],
            correct: 0,
            explanation: 'async выполняет скрипт сразу после загрузки. defer — после полного парсинга HTML, сохраняя порядок.',
            theory: '<h4>Script loading</h4><ul><li><code>&lt;script&gt;</code> — блокирует парсинг</li><li><code>async</code> — загрузка параллельно, выполнение прерывает парсинг</li><li><code>defer</code> — загрузка параллельно, выполнение после DOM, порядок сохранён</li></ul><p><b>Рекомендация:</b> defer для большинства скриптов, async для независимых (аналитика).</p>'
          },
          en: {
            q: 'Difference between async and defer on <script>?',
            options: ['async — parallel load, executes immediately; defer — parallel load, executes after HTML parsing', 'No difference', 'defer blocks rendering'],
            correct: 0,
            explanation: 'async executes the script immediately after loading. defer — after full HTML parsing, preserving order.',
            theory: '<h4>Script loading</h4><ul><li>async: parallel load, immediate execution</li><li>defer: parallel load, post-parse execution, order preserved</li></ul>'
          }
        },
        {
          id: 'h3',
          ru: {
            q: 'Что такое data-* атрибуты?',
            options: ['Атрибуты для хранения произвольных данных в HTML-элементах, доступных через dataset', 'CSS-атрибуты для анимаций', 'Служебные атрибуты браузера'],
            correct: 0,
            explanation: 'data-* позволяют встраивать кастомные данные в элементы. Доступ через el.dataset.myKey.',
            theory: '<h4>data-* атрибуты</h4><pre><code>&lt;div data-user-id="42" data-role="admin"&gt;\nel.dataset.userId // "42"\nel.dataset.role   // "admin"</code></pre>'
          },
          en: {
            q: 'What are data-* attributes?',
            options: ['Attributes for storing custom data in HTML elements, accessible via dataset', 'CSS attributes for animations', 'Browser service attributes'],
            correct: 0,
            explanation: 'data-* allows embedding custom data into elements. Access via el.dataset.myKey.',
            theory: '<h4>data-* attributes</h4><pre><code>el.dataset.userId // "42"</code></pre>'
          }
        },
        {
          id: 'h4',
          ru: {
            q: 'Что такое Shadow DOM?',
            options: ['Инкапсулированное DOM-дерево внутри веб-компонента, изолированное от основного документа', 'Скрытый DOM для SEO-ботов', 'Устаревший аналог Virtual DOM'],
            correct: 0,
            explanation: 'Shadow DOM создаёт изолированное поддерево со своими стилями, не пересекающимися с глобальными.',
            theory: '<h4>Shadow DOM</h4><pre><code>const shadow = el.attachShadow({mode:"open"});\nshadow.innerHTML=`&lt;style&gt;p{color:red}&lt;/style&gt;&lt;p&gt;Hi&lt;/p&gt;`;</code></pre><p>Применение: Web Components, Angular ShadowDom encapsulation, нативные элементы (input, video).</p>'
          },
          en: {
            q: 'What is Shadow DOM?',
            options: ['An encapsulated DOM tree inside a web component, isolated from the main document', 'Hidden DOM for SEO bots', 'A deprecated Virtual DOM analog'],
            correct: 0,
            explanation: 'Shadow DOM creates an isolated subtree with own styles that do not intersect with global ones.',
            theory: '<h4>Shadow DOM</h4><pre><code>el.attachShadow({mode:"open"})</code></pre>'
          }
        },
        {
          id: 'h5',
          ru: {
            q: 'Зачем rel="noopener noreferrer" на ссылках с target="_blank"?',
            options: ['Безопасность: предотвращает доступ открытой страницы к window.opener родителя', 'SEO-оптимизация', 'Ускорение загрузки'],
            correct: 0,
            explanation: 'Без noopener открытая вкладка может управлять родительской страницей через window.opener — это уязвимость.',
            theory: '<h4>rel="noopener noreferrer"</h4><p><b>noopener</b> — убирает доступ к window.opener.<br><b>noreferrer</b> — не передаёт Referer и имплицитно включает noopener.</p><p>Всегда используй на внешних ссылках с target="_blank".</p>'
          },
          en: {
            q: 'Why use rel="noopener noreferrer" on target="_blank" links?',
            options: ['Security: prevents the opened page from accessing parent\'s window.opener', 'SEO optimization', 'Faster loading'],
            correct: 0,
            explanation: 'Without noopener the opened tab can control the parent page via window.opener.',
            theory: '<h4>rel="noopener noreferrer"</h4><p>noopener: removes window.opener access. noreferrer: no Referer header.</p>'
          }
        },
        {
          id: 'h6',
          ru: {
            q: 'Что такое Critical Rendering Path?',
            options: ['Последовательность шагов браузера от HTML/CSS до пикселей на экране', 'Алгоритм кратчайшего пути в DOM', 'Процесс компиляции шаблонов'],
            correct: 0,
            explanation: 'CRP: HTML → DOM → CSS → CSSOM → Render Tree → Layout → Paint.',
            theory: '<h4>Critical Rendering Path</h4><ol><li>HTML → DOM</li><li>CSS → CSSOM</li><li>DOM + CSSOM → Render Tree</li><li>Layout — позиции и размеры</li><li>Paint — пиксели</li><li>Composite — слои GPU</li></ol><h4>Оптимизация</h4><ul><li>defer/async для JS</li><li>Инлайн критический CSS</li><li>Минимизировать блокирующие ресурсы</li></ul>'
          },
          en: {
            q: 'What is the Critical Rendering Path?',
            options: ['Steps from HTML/CSS to pixels on screen', 'Shortest path algorithm in DOM', 'Template compilation process'],
            correct: 0,
            explanation: 'CRP: HTML → DOM → CSS → CSSOM → Render Tree → Layout → Paint.',
            theory: '<h4>CRP Steps</h4><ol><li>HTML → DOM</li><li>CSS → CSSOM</li><li>Render Tree → Layout → Paint</li></ol>'
          }
        },
        {
          id: 'h7',
          ru: {
            q: 'Чем отличаются блочные элементы от строчных?',
            options: ['Блочные занимают всю ширину строки и начинаются с новой строки; строчные — только своё содержимое', 'Нет разницы в HTML5', 'Строчные быстрее отрисовываются'],
            correct: 0,
            explanation: 'Block: div, p, h1 — новая строка, полная ширина. Inline: span, a, img — в потоке текста.',
            theory: '<h4>Block vs Inline</h4><ul><li><b>Block</b>: div, p, h1-h6, ul, table — новая строка, задаётся width/height</li><li><b>Inline</b>: span, a, strong, em — в потоке, нельзя задать width</li><li><b>Inline-block</b>: как inline, но можно задать размеры</li></ul>'
          },
          en: {
            q: 'Difference between block and inline elements?',
            options: ['Block: full width, new line; Inline: only content width, in text flow', 'No difference in HTML5', 'Inline renders faster'],
            correct: 0,
            explanation: 'Block: div, p, h1 — new line, full width. Inline: span, a — in text flow.',
            theory: '<h4>Block vs Inline</h4><ul><li>Block: new line, width/height settable</li><li>Inline: in text flow, no width</li><li>Inline-block: inline but sizable</li></ul>'
          }
        },
        {
          id: 'h8',
          ru: {
            q: 'Что такое ARIA-атрибуты и зачем они нужны?',
            options: ['Дополнительная семантика для вспомогательных технологий (скринридеров)', 'Атрибуты для анимации', 'Директивы Angular'],
            correct: 0,
            explanation: 'ARIA (Accessible Rich Internet Applications) добавляет роли и состояния для доступности. aria-label, aria-hidden, role и т.д.',
            theory: '<h4>ARIA</h4><pre><code>&lt;button aria-label="Закрыть" aria-expanded="false"&gt;\n&lt;div role="alert" aria-live="polite"&gt;\n&lt;input aria-describedby="hint-id"&gt;</code></pre><h4>Правило</h4><p>Используй нативные семантические теги — они уже содержат ARIA. ARIA нужна там, где нативных тегов недостаточно.</p>'
          },
          en: {
            q: 'What are ARIA attributes and why are they needed?',
            options: ['Extra semantics for assistive technologies (screen readers)', 'Animation attributes', 'Angular directives'],
            correct: 0,
            explanation: 'ARIA adds roles and states for accessibility: aria-label, aria-hidden, role, etc.',
            theory: '<h4>ARIA</h4><pre><code>&lt;button aria-label="Close" aria-expanded="false"&gt;</code></pre><p>Prefer native semantic tags. ARIA fills the gap where native tags are insufficient.</p>'
          }
        },
        {
          id: 'h9',
          ru: {
            q: 'Что такое мета-тег viewport и зачем он нужен?',
            options: ['Управляет масштабированием страницы на мобильных устройствах', 'Указывает язык страницы', 'Задаёт кодировку документа'],
            correct: 0,
            explanation: '<meta name="viewport" content="width=device-width, initial-scale=1"> — обязателен для адаптивной вёрстки.',
            theory: '<h4>Viewport meta</h4><pre><code>&lt;meta name="viewport"\n  content="width=device-width, initial-scale=1"&gt;</code></pre><p>Без этого тега мобильный браузер рендерит страницу как desktop и масштабирует вниз — текст крошечный.</p>'
          },
          en: {
            q: 'What is the viewport meta tag and why is it needed?',
            options: ['Controls scaling on mobile devices', 'Specifies page language', 'Sets document encoding'],
            correct: 0,
            explanation: '"viewport" meta is required for responsive design. Without it mobile browsers render desktop width and zoom out.',
            theory: '<h4>Viewport meta</h4><pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code></pre>'
          }
        },
        {
          id: 'h10',
          ru: {
            q: 'Что такое прогрессивное улучшение (Progressive Enhancement)?',
            options: ['Стратегия: базовый контент доступен всем, улучшения добавляются для поддерживающих браузеров', 'Постепенная загрузка изображений', 'Метод оптимизации CSS'],
            correct: 0,
            explanation: 'Сначала рабочий HTML, потом CSS, потом JS. Каждый слой добавляет возможности, но базовый контент доступен всегда.',
            theory: '<h4>Progressive Enhancement</h4><ol><li><b>HTML</b> — контент доступен всем</li><li><b>CSS</b> — оформление для поддерживающих</li><li><b>JS</b> — интерактивность</li></ol><p>Противоположность: Graceful Degradation — начинаем с полной версии, деградируем для старых браузеров.</p>'
          },
          en: {
            q: 'What is Progressive Enhancement?',
            options: ['Strategy: base content accessible to all, enhancements added for supporting browsers', 'Gradual image loading', 'CSS optimization method'],
            correct: 0,
            explanation: 'Start with working HTML, add CSS, then JS. Each layer adds capabilities but base content is always accessible.',
            theory: '<h4>Progressive Enhancement</h4><ol><li>HTML — content for all</li><li>CSS — styling</li><li>JS — interactivity</li></ol>'
          }
        },
      ]
    },
    css: {
      icon: '🎨', ru: {title: 'CSS'}, en: {title: 'CSS'}, questions: [
        {
          id: 'c1',
          ru: {
            q: 'Что такое специфичность (specificity) в CSS?',
            options: ['Система приоритетов для определения, какое CSS-правило применится', 'Порядок подключения стилей', 'Свойство для z-index'],
            correct: 0,
            explanation: 'Inline > #id > .class > tag. Вычисляется как (a,b,c,d).',
            theory: '<h4>CSS Specificity</h4><ul><li>Inline style: 1000</li><li>#id: 100</li><li>.class / [attr] / :pseudo-class: 10</li><li>tag / ::pseudo-element: 1</li></ul><pre><code>#nav .item a → (0,1,1,1)=111\n.nav a       → (0,0,1,1)=11</code></pre><p>!important перебивает всё, но избегай его использования.</p>'
          },
          en: {
            q: 'What is CSS specificity?',
            options: ['Priority system determining which CSS rule applies', 'Order of stylesheet loading', 'Property for z-index'],
            correct: 0,
            explanation: 'Inline > #id > .class > tag. Calculated as (a,b,c,d).',
            theory: '<h4>CSS Specificity</h4><ul><li>Inline: 1000</li><li>#id: 100</li><li>.class: 10</li><li>tag: 1</li></ul>'
          }
        },
        {
          id: 'c2',
          ru: {
            q: 'Что такое CSS Box Model?',
            options: ['Прямоугольник вокруг элемента: content → padding → border → margin', 'Модель для grid-раскладок', 'Метод центрирования'],
            correct: 0,
            explanation: 'box-sizing: border-box включает padding и border в width.',
            theory: '<h4>Box Model</h4><pre><code>margin > border > padding > content</code></pre><h4>box-sizing</h4><ul><li><code>content-box</code> — width = только контент (default)</li><li><code>border-box</code> — width включает padding+border</li></ul><p>Рекомендация: * { box-sizing: border-box }</p>'
          },
          en: {
            q: 'What is the CSS Box Model?',
            options: ['A rectangle around an element: content → padding → border → margin', 'A model for grid layouts', 'Centering method'],
            correct: 0,
            explanation: 'box-sizing: border-box includes padding and border in width.',
            theory: '<h4>Box Model</h4><p>content → padding → border → margin</p><ul><li>content-box (default)</li><li>border-box: width includes padding+border</li></ul>'
          }
        },
        {
          id: 'c3',
          ru: {
            q: 'Что такое BEM?',
            options: ['Block Element Modifier — методология именования CSS-классов', 'Browser Event Model', 'Build Environment Manager'],
            correct: 0,
            explanation: 'BEM структурирует CSS: .card (блок), .card__title (элемент), .card--active (модификатор).',
            theory: '<h4>BEM</h4><pre><code>.card {}\n.card__title {}\n.card__title--large {}\n.card--featured {}</code></pre><h4>Плюсы</h4><ul><li>Нет конфликтов имён</li><li>Самодокументируемость</li><li>Переиспользуемость</li></ul>'
          },
          en: {
            q: 'What is BEM?',
            options: ['Block Element Modifier — CSS class naming methodology', 'Browser Event Model', 'Build Environment Manager'],
            correct: 0,
            explanation: 'BEM: .card (block), .card__title (element), .card--active (modifier).',
            theory: '<h4>BEM</h4><pre><code>.card {}\n.card__title {}\n.card--featured {}</code></pre>'
          }
        },
        {
          id: 'c4',
          ru: {
            q: 'Flexbox vs CSS Grid — в чём разница?',
            options: ['Flexbox — одномерная раскладка (ряд ИЛИ колонка), Grid — двумерная (ряды И колонки)', 'Grid только для мобильных', 'Нет разницы'],
            correct: 0,
            explanation: 'Flexbox = 1D, Grid = 2D. Flexbox для компонентов, Grid для макета страницы.',
            theory: '<h4>Flexbox</h4><pre><code>.flex { display:flex; justify-content:space-between; align-items:center; }</code></pre><h4>Grid</h4><pre><code>.grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }</code></pre>'
          },
          en: {
            q: 'Flexbox vs CSS Grid — what is the difference?',
            options: ['Flexbox is 1D (row OR column), Grid is 2D (rows AND columns)', 'Grid is for mobile only', 'No difference'],
            correct: 0,
            explanation: 'Flexbox = 1D, Grid = 2D. Flexbox for components, Grid for page layout.',
            theory: '<h4>When to use</h4><ul><li>Flexbox: nav, card content, button groups</li><li>Grid: page layout, galleries, complex 2D</li></ul>'
          }
        },
        {
          id: 'c5',
          ru: {
            q: 'Что такое CSS Custom Properties (переменные)?',
            options: ['Нативные переменные CSS через -- и var()', 'Переменные Sass/Less', 'Динамические стили JS'],
            correct: 0,
            explanation: '--color: red; color: var(--color). Работают в рантайме, наследуются, каскадируются.',
            theory: '<h4>CSS Variables</h4><pre><code>:root { --primary:#7c3aed; --radius:8px; }\n.btn { background:var(--primary); border-radius:var(--radius); }</code></pre><h4>Vs Sass</h4><ul><li>CSS vars: рантайм, наследование, JS доступ</li><li>Sass vars: компайл-тайм, нет наследования</li></ul>'
          },
          en: {
            q: 'What are CSS Custom Properties?',
            options: ['Native CSS variables via -- and var()', 'Sass/Less variables', 'Dynamic JS styles'],
            correct: 0,
            explanation: '--color: red; used as var(--color). Runtime, inherited, cascade-aware.',
            theory: '<h4>CSS Variables</h4><pre><code>:root { --primary: #7c3aed; }\n.btn { background: var(--primary); }</code></pre>'
          }
        },
        {
          id: 'c6',
          ru: {
            q: 'Что такое z-index и stacking context?',
            options: ['z-index — порядок элементов по оси Z только для позиционированных; stacking context ограничивает область действия', 'z-index работает на всех элементах', 'z-index — порядок в DOM'],
            correct: 0,
            explanation: 'z-index требует position != static. Stacking context создаётся при position+z-index, opacity<1, transform, filter.',
            theory: '<h4>z-index</h4><p>Требует: position relative|absolute|fixed|sticky.</p><h4>Stacking Context</h4><p>Новый контекст: position+z-index, opacity<1, transform, filter, will-change.<br>Дочерние z-index не конкурируют с внешними элементами.</p>'
          },
          en: {
            q: 'What are z-index and stacking context?',
            options: ['z-index is Z-axis order for positioned elements; stacking context limits scope', 'z-index works on all elements', 'z-index is DOM order'],
            correct: 0,
            explanation: 'z-index requires position != static. Stacking context is created by position+z-index, opacity<1, transform, filter.',
            theory: '<h4>Stacking Context</h4><p>Created by: position+z-index, opacity<1, transform, filter, will-change.</p>'
          }
        },
        {
          id: 'c7',
          ru: {
            q: 'Что такое CSS-анимации и чем transition отличается от animation?',
            options: ['transition — плавный переход между двумя состояниями; animation — ключевые кадры для сложных анимаций', 'Нет разницы', 'animation только для JS'],
            correct: 0,
            explanation: 'transition реагирует на смену состояния (:hover, класс). animation — @keyframes с полным контролем.',
            theory: '<h4>Transition</h4><pre><code>.btn { transition: background .3s ease; }\n.btn:hover { background: red; }</code></pre><h4>Animation</h4><pre><code>@keyframes spin { from{transform:rotate(0)} to{transform:rotate(360deg)} }\n.loader { animation: spin 1s linear infinite; }</code></pre>'
          },
          en: {
            q: 'transition vs animation in CSS?',
            options: ['transition: smooth change between two states; animation: keyframes for complex motion', 'No difference', 'animation is only for JS'],
            correct: 0,
            explanation: 'transition reacts to state change. animation uses @keyframes for full control.',
            theory: '<h4>Transition</h4><pre><code>.btn { transition: background .3s ease; }</code></pre><h4>Animation</h4><pre><code>@keyframes spin { to { transform:rotate(360deg) } }</code></pre>'
          }
        },
        {
          id: 'c8',
          ru: {
            q: 'Что такое псевдоэлементы ::before и ::after?',
            options: ['Генерируют виртуальный первый/последний дочерний элемент через CSS без изменения HTML', 'Псевдоклассы для первого/последнего дочернего элемента', 'JavaScript-хуки'],
            correct: 0,
            explanation: '::before/::after создают контент через content: "" только через CSS. Нужен display не inline для размеров.',
            theory: '<h4>::before / ::after</h4><pre><code>.card::before {\n  content: "";\n  display: block;\n  width: 4px;\n  background: var(--accent);\n}</code></pre><p>Применение: декоративные элементы, счётчики, иконки, clearfix.</p>'
          },
          en: {
            q: 'What are ::before and ::after pseudo-elements?',
            options: ['Generate virtual first/last child via CSS without changing HTML', 'Pseudo-classes for first/last child', 'JavaScript hooks'],
            correct: 0,
            explanation: '::before/::after create content via CSS content property without touching HTML.',
            theory: '<h4>::before / ::after</h4><pre><code>.card::before { content:""; display:block; }</code></pre>'
          }
        },
        {
          id: 'c9',
          ru: {
            q: 'Что такое CSS-препроцессоры (Sass, Less)?',
            options: ['Расширяют CSS переменными, вложенностью, миксинами, функциями и компилируются в чистый CSS', 'Замена CSS на JS-стили', 'Постпроцессоры типа PostCSS'],
            correct: 0,
            explanation: 'Sass добавляет $variables, &nesting, @mixin, @extend, @function. Компилируется в CSS.',
            theory: '<h4>Sass</h4><pre><code>$primary: #7c3aed;\n.card {\n  background: $primary;\n  &:hover { opacity: .9; }\n  &__title { font-size: 1.2rem; }\n}\n@mixin flex-center {\n  display:flex; align-items:center; justify-content:center;\n}</code></pre>'
          },
          en: {
            q: 'What are CSS preprocessors (Sass, Less)?',
            options: ['Extend CSS with variables, nesting, mixins, functions and compile to plain CSS', 'Replace CSS with JS styles', 'PostCSS postprocessors'],
            correct: 0,
            explanation: 'Sass adds $variables, &nesting, @mixin, @extend. Compiles to CSS.',
            theory: '<h4>Sass</h4><pre><code>$primary: #7c3aed;\n.card { &:hover { opacity:.9; } }</code></pre>'
          }
        },
        {
          id: 'c10',
          ru: {
            q: 'Что такое CSS-модули?',
            options: ['Локально-скопированные CSS-классы (компилятор генерирует уникальные имена) для избежания конфликтов', 'CSS-файлы в npm-пакетах', 'Встроенные стили React'],
            correct: 0,
            explanation: 'CSS Modules: .title → .title_abc123 автоматически. Нет конфликтов глобальных имён.',
            theory: '<h4>CSS Modules</h4><pre><code>// Button.module.css\n.btn { background: blue; }\n\n// Button.tsx\nimport s from "./Button.module.css";\n&lt;button className={s.btn}&gt;</code></pre><p>Класс .btn компилируется в уникальный хэш — нет конфликтов между компонентами.</p>'
          },
          en: {
            q: 'What are CSS Modules?',
            options: ['Locally-scoped CSS classes (compiler generates unique names) to avoid conflicts', 'CSS files in npm packages', 'Inline React styles'],
            correct: 0,
            explanation: 'CSS Modules: .title → .title_abc123 automatically. No global name conflicts.',
            theory: '<h4>CSS Modules</h4><pre><code>import s from "./Button.module.css";\n&lt;button className={s.btn}&gt;</code></pre>'
          }
        },
      ]
    },
    browser: {
      icon: '🔧', ru: {title: 'Browser API'}, en: {title: 'Browser API'}, questions: [
        {
          id: 'b1',
          ru: {
            q: 'Что такое Event Loop?',
            options: ['Механизм выполнения асинхронного кода: Call Stack + Microtask Queue + Macrotask Queue', 'Цикл перебора событий DOM', 'Планировщик браузера'],
            correct: 0,
            explanation: 'Event Loop: синхронный код → Call Stack. Promise → Microtask Queue (приоритет). setTimeout → Macrotask Queue.',
            theory: '<h4>Event Loop</h4><pre><code>console.log(1);\nsetTimeout(() => console.log(2), 0);\nPromise.resolve().then(() => console.log(3));\nconsole.log(4);\n// Вывод: 1 → 4 → 3 → 2</code></pre><ol><li>Sync: 1, 4</li><li>Microtasks (Promise): 3</li><li>Macrotasks (setTimeout): 2</li></ol>'
          },
          en: {
            q: 'What is the Event Loop?',
            options: ['Mechanism for async code: Call Stack + Microtask Queue + Macrotask Queue', 'DOM event iteration loop', 'Browser scheduler'],
            correct: 0,
            explanation: 'Event Loop: sync code → Call Stack. Promise → Microtask Queue (priority). setTimeout → Macrotask Queue.',
            theory: '<h4>Event Loop</h4><pre><code>// Output: 1, 4, 3, 2\nconsole.log(1);\nsetTimeout(() => console.log(2), 0);\nPromise.resolve().then(() => console.log(3));\nconsole.log(4);</code></pre>'
          }
        },
        {
          id: 'b2',
          ru: {
            q: 'Разница между localStorage, sessionStorage и cookies?',
            options: ['localStorage — постоянно ~5MB; sessionStorage — до закрытия вкладки ~5MB; cookies — ~4KB, отправляются на сервер', 'Все хранят данные одинаково', 'sessionStorage доступна между вкладками'],
            correct: 0,
            explanation: 'Ключевое отличие: cookies отправляются с каждым HTTP-запросом. localStorage/sessionStorage — только JS.',
            theory: '<h4>Браузерные хранилища</h4><ul><li><b>localStorage</b>: ~5MB, постоянно, только клиент</li><li><b>sessionStorage</b>: ~5MB, вкладка, только клиент</li><li><b>cookies</b>: ~4KB, expires, отправляются на сервер, httpOnly/Secure</li><li><b>IndexedDB</b>: ~GB, async, для больших данных</li></ul>'
          },
          en: {
            q: 'Difference between localStorage, sessionStorage and cookies?',
            options: ['localStorage — permanent ~5MB; sessionStorage — tab lifetime ~5MB; cookies — ~4KB, sent to server', 'All store data the same', 'sessionStorage is accessible between tabs'],
            correct: 0,
            explanation: 'Key: cookies sent with every HTTP request. localStorage/sessionStorage — JS only.',
            theory: '<h4>Browser Storage</h4><ul><li>localStorage: ~5MB, permanent</li><li>sessionStorage: ~5MB, tab</li><li>cookies: ~4KB, sent to server, httpOnly</li><li>IndexedDB: ~GB, async</li></ul>'
          }
        },
        {
          id: 'b3',
          ru: {
            q: 'Что такое делегирование событий?',
            options: ['Паттерн: один обработчик на родителе вместо множества на детях, используя всплытие', 'Передача события вручную', 'removeEventListener'],
            correct: 0,
            explanation: 'Событие всплывает от child к parent. Один обработчик на ul вместо 1000 на li.',
            theory: '<h4>Event Delegation</h4><pre><code>list.addEventListener("click", e => {\n  if (e.target.matches(".item")) handler(e);\n});</code></pre><h4>Преимущества</h4><ul><li>Меньше памяти</li><li>Работает для динамически добавленных элементов</li></ul>'
          },
          en: {
            q: 'What is Event Delegation?',
            options: ['Pattern: one handler on parent instead of many on children, using event bubbling', 'Manual event passing', 'removeEventListener'],
            correct: 0,
            explanation: 'Events bubble from child to parent. One handler on ul instead of 1000 on li.',
            theory: '<h4>Event Delegation</h4><pre><code>list.addEventListener("click", e => {\n  if (e.target.matches(".item")) handler(e);\n});</code></pre>'
          }
        },
        {
          id: 'b4',
          ru: {
            q: 'Что такое CORS?',
            options: ['Механизм браузера для контроля cross-origin запросов через HTTP-заголовки', 'Алгоритм сжатия', 'CSS-фреймворк'],
            correct: 0,
            explanation: 'Браузер блокирует cross-origin запросы если сервер не вернул Access-Control-Allow-Origin.',
            theory: '<h4>CORS</h4><p>Simple requests (GET/POST с базовыми заголовками) — без preflight.<br>Non-simple — браузер сначала шлёт OPTIONS.</p><pre><code>Access-Control-Allow-Origin: https://mysite.com\nAccess-Control-Allow-Methods: GET,POST\nAccess-Control-Allow-Credentials: true</code></pre>'
          },
          en: {
            q: 'What is CORS?',
            options: ['Browser mechanism for cross-origin request control via HTTP headers', 'Compression algorithm', 'CSS framework'],
            correct: 0,
            explanation: 'Browser blocks cross-origin requests unless server returns Access-Control-Allow-Origin.',
            theory: '<h4>CORS Headers</h4><pre><code>Access-Control-Allow-Origin: https://mysite.com\nAccess-Control-Allow-Methods: GET,POST</code></pre>'
          }
        },
        {
          id: 'b5',
          ru: {
            q: 'Что такое Web Workers?',
            options: ['Фоновые JS-потоки, не блокирующие UI, без доступа к DOM', 'Service Workers для кэширования', 'Angular-компоненты'],
            correct: 0,
            explanation: 'Web Workers — параллельные потоки для тяжёлых вычислений. Общение через postMessage.',
            theory: '<h4>Web Workers</h4><pre><code>const w = new Worker("worker.js");\nw.postMessage({data});\nw.onmessage = e => console.log(e.data);\n\n// worker.js\nself.onmessage = e => self.postMessage(heavyCalc(e.data));</code></pre><p>Нет доступа к DOM, window.</p>'
          },
          en: {
            q: 'What are Web Workers?',
            options: ['Background JS threads not blocking UI, no DOM access', 'Service Workers for caching', 'Angular components'],
            correct: 0,
            explanation: 'Web Workers: parallel threads for heavy computations. Communicate via postMessage.',
            theory: '<h4>Web Workers</h4><pre><code>const w = new Worker("worker.js");\nw.postMessage(data);\nw.onmessage = e => console.log(e.data);</code></pre>'
          }
        },
        {
          id: 'b6',
          ru: {
            q: 'Что такое Service Worker?',
            options: ['Прокси-скрипт, работающий между браузером и сетью. Основа PWA: кэширование, офлайн, push-уведомления', 'Аналог Web Worker для тяжёлых вычислений', 'Middleware для SSR'],
            correct: 0,
            explanation: 'Service Worker перехватывает fetch-запросы, работает как прокси. Требует HTTPS. Основа PWA.',
            theory: '<h4>Service Worker</h4><pre><code>// sw.js\nself.addEventListener("fetch", e => {\n  e.respondWith(\n    caches.match(e.request)\n      .then(r => r || fetch(e.request))\n  );\n});</code></pre><h4>Lifecycle</h4><p>install → waiting → activate → fetch</p>'
          },
          en: {
            q: 'What is a Service Worker?',
            options: ['A proxy script between browser and network. PWA foundation: caching, offline, push notifications', 'Web Worker analog for computation', 'SSR middleware'],
            correct: 0,
            explanation: 'Service Worker intercepts fetch requests, acts as a proxy. Requires HTTPS. PWA foundation.',
            theory: '<h4>Service Worker</h4><pre><code>self.addEventListener("fetch", e => {\n  e.respondWith(caches.match(e.request));\n});</code></pre>'
          }
        },
        {
          id: 'b7',
          ru: {
            q: 'Разница между event.stopPropagation() и event.preventDefault()?',
            options: ['stopPropagation — останавливает всплытие события; preventDefault — отменяет действие браузера по умолчанию', 'Это одно и то же', 'preventDefault останавливает всплытие'],
            correct: 0,
            explanation: 'stopPropagation: event не идёт к родителям. preventDefault: нет перехода по ссылке, не отправится форма.',
            theory: '<h4>Event control</h4><pre><code>// Не перейдёт по ссылке\na.addEventListener("click", e => e.preventDefault());\n\n// Клик не дойдёт до document\nbtn.addEventListener("click", e => e.stopPropagation());\n\n// Оба сразу\ne.stopImmediatePropagation(); // + другие обработчики на том же элементе</code></pre>'
          },
          en: {
            q: 'Difference between stopPropagation() and preventDefault()?',
            options: ['stopPropagation: stops bubbling; preventDefault: cancels default browser action', 'They are the same', 'preventDefault stops bubbling'],
            correct: 0,
            explanation: 'stopPropagation: event does not reach parents. preventDefault: no link follow, no form submit.',
            theory: '<h4>Event control</h4><pre><code>e.preventDefault();    // cancel default\ne.stopPropagation();   // stop bubbling\ne.stopImmediatePropagation(); // + others on same el</code></pre>'
          }
        },
        {
          id: 'b8',
          ru: {
            q: 'Что такое Intersection Observer?',
            options: ['API для отслеживания видимости элемента в viewport без scroll-обработчика', 'Полифил для async/await', 'API для работы с DOM-мутациями'],
            correct: 0,
            explanation: 'IntersectionObserver эффективнее чем scroll event. Используют для lazy loading, infinite scroll, анимаций при появлении.',
            theory: '<h4>Intersection Observer</h4><pre><code>const obs = new IntersectionObserver((entries) => {\n  entries.forEach(e => {\n    if (e.isIntersecting) {\n      e.target.classList.add("visible");\n      obs.unobserve(e.target);\n    }\n  });\n}, { threshold: 0.1 });\n\nobs.observe(document.querySelector(".lazy"));</code></pre>'
          },
          en: {
            q: 'What is Intersection Observer?',
            options: ['API for tracking element visibility in viewport without scroll handler', 'async/await polyfill', 'DOM mutation API'],
            correct: 0,
            explanation: 'IntersectionObserver is more efficient than scroll events. Used for lazy loading, infinite scroll, animations.',
            theory: '<h4>Intersection Observer</h4><pre><code>const obs = new IntersectionObserver(entries => {\n  entries.forEach(e => {\n    if (e.isIntersecting) obs.unobserve(e.target);\n  });\n}, { threshold: 0.1 });\nobs.observe(el);</code></pre>'
          }
        },
      ]
    },
    security: {
      icon: '🔒', ru: {title: 'Security'}, en: {title: 'Security'}, questions: [
        {
          id: 's1',
          ru: {
            q: 'Что такое XSS и как защититься?',
            options: ['Инъекция вредоносного скрипта в страницу. Защита: санитизация, CSP, HttpOnly cookies', 'Атака перебором паролей', 'Атака на DNS'],
            correct: 0,
            explanation: 'XSS: злоумышленник внедряет <script>. Защита: экранирование вывода, CSP, textContent вместо innerHTML.',
            theory: '<h4>XSS</h4><h4>Типы</h4><ul><li>Stored — в БД</li><li>Reflected — в URL</li><li>DOM-based — манипуляция DOM</li></ul><h4>Защита</h4><ul><li>Экранировать HTML: & → &amp;amp;</li><li>Content-Security-Policy</li><li>HttpOnly cookies</li><li>textContent вместо innerHTML</li></ul>'
          },
          en: {
            q: 'What is XSS and how to defend?',
            options: ['Malicious script injection into a page. Defense: sanitization, CSP, HttpOnly cookies', 'Brute force attack', 'DNS attack'],
            correct: 0,
            explanation: 'XSS: attacker injects <script>. Defense: output escaping, CSP, textContent instead of innerHTML.',
            theory: '<h4>XSS Defense</h4><ul><li>Escape HTML output</li><li>Content-Security-Policy</li><li>HttpOnly cookies</li><li>textContent instead of innerHTML</li></ul>'
          }
        },
        {
          id: 's2',
          ru: {
            q: 'Что такое CSRF?',
            options: ['Подделка межсайтовых запросов: злоумышленник заставляет браузер жертвы выполнить запрос с её куками', 'Атака на SSL', 'XSS через CSS'],
            correct: 0,
            explanation: 'CSRF: пользователь зашёл на evil.com, который шлёт POST на bank.com — браузер прицепит куки. Защита: SameSite, CSRF-токены.',
            theory: '<h4>CSRF</h4><ol><li>Жертва залогинена в bank.com</li><li>Открывает evil.com</li><li>evil.com → POST /transfer → bank.com</li><li>Браузер прицепляет куки → успех!</li></ol><h4>Защита</h4><ul><li>SameSite=Strict/Lax на куках</li><li>CSRF-токен в заголовке/форме</li><li>Проверка Origin/Referer</li></ul>'
          },
          en: {
            q: 'What is CSRF?',
            options: ['Cross-Site Request Forgery: attacker tricks browser to send request with victim\'s cookies', 'SSL attack', 'XSS via CSS'],
            correct: 0,
            explanation: 'CSRF: victim visits evil.com which sends POST to bank.com — browser attaches cookies.',
            theory: '<h4>CSRF Defense</h4><ul><li>SameSite=Strict/Lax cookies</li><li>CSRF token</li><li>Check Origin/Referer headers</li></ul>'
          }
        },
        {
          id: 's3',
          ru: {
            q: 'Что такое Content Security Policy?',
            options: ['HTTP-заголовок, ограничивающий источники загружаемых ресурсов', 'CSS-политика именования', 'Алгоритм сжатия'],
            correct: 0,
            explanation: 'CSP — основная защита от XSS. Указывает откуда можно грузить скрипты, стили, изображения.',
            theory: '<h4>CSP Header</h4><pre><code>Content-Security-Policy:\n  default-src \'self\';\n  script-src \'self\' cdn.example.com;\n  style-src \'self\' \'unsafe-inline\';\n  img-src *;</code></pre>'
          },
          en: {
            q: 'What is Content Security Policy?',
            options: ['HTTP header restricting resource load sources', 'CSS naming policy', 'Compression algorithm'],
            correct: 0,
            explanation: 'CSP — main XSS defense. Specifies allowed sources for scripts, styles, images.',
            theory: '<h4>CSP</h4><pre><code>Content-Security-Policy: default-src \'self\'; script-src cdn.example.com;</code></pre>'
          }
        },
        {
          id: 's4',
          ru: {
            q: 'Что такое JWT?',
            options: ['JSON Web Token: header.payload.signature — самодостаточный токен для аутентификации', 'Протокол на основе сессий', 'Алгоритм хэширования'],
            correct: 0,
            explanation: 'JWT: base64(header).base64(payload).signature. Сервер верифицирует подпись без обращения к БД.',
            theory: '<h4>JWT</h4><pre><code>// Structure\neyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI0MiJ9.abc123\n//  header              payload              signature</code></pre><h4>Плюсы</h4><ul><li>Stateless</li><li>Работает между сервисами</li></ul><h4>Минусы</h4><ul><li>Нельзя отозвать без blacklist</li><li>Payload виден (только подписан)</li></ul>'
          },
          en: {
            q: 'What is JWT?',
            options: ['JSON Web Token: header.payload.signature — self-contained auth token', 'Session-based protocol', 'Hashing algorithm'],
            correct: 0,
            explanation: 'JWT: base64(header).base64(payload).signature. Server verifies signature without DB lookup.',
            theory: '<h4>JWT</h4><pre><code>header.payload.signature</code></pre><ul><li>Stateless</li><li>Cannot revoke without blacklist</li></ul>'
          }
        },
        {
          id: 's5',
          ru: {
            q: 'Что такое HTTPS и TLS Handshake?',
            options: ['HTTPS = HTTP + TLS. Handshake устанавливает зашифрованный канал через сертификаты', 'HTTPS просто быстрее HTTP', 'HTTPS обязателен только для платёжных форм'],
            correct: 0,
            explanation: 'TLS: клиент и сервер обмениваются сертификатами, согласуют ключи, затем шифруют трафик.',
            theory: '<h4>TLS Handshake</h4><ol><li>Client Hello (поддерживаемые алгоритмы)</li><li>Server Hello + Certificate</li><li>Клиент проверяет сертификат у CA</li><li>Key Exchange (ECDHE)</li><li>Шифрованный канал установлен</li></ol><h4>Зачем</h4><ul><li>Шифрование данных</li><li>Аутентификация сервера</li><li>Целостность данных</li></ul>'
          },
          en: {
            q: 'What is HTTPS and TLS Handshake?',
            options: ['HTTPS = HTTP + TLS. Handshake establishes encrypted channel via certificates', 'HTTPS is just faster', 'Only needed for payment forms'],
            correct: 0,
            explanation: 'TLS: client and server exchange certificates, negotiate keys, then encrypt all traffic.',
            theory: '<h4>TLS Handshake</h4><ol><li>Client Hello</li><li>Server Hello + Certificate</li><li>Key Exchange</li><li>Encrypted channel</li></ol>'
          }
        },
        {
          id: 's6',
          ru: {
            q: 'Что такое SQL Injection и как её предотвратить во фронтенде?',
            options: ['Фронтенд не выполняет SQL, но должен валидировать входные данные. Основная защита — параметризованные запросы на бэкенде', 'Атака только на фронтенд', 'Можно защититься только на клиенте'],
            correct: 0,
            explanation: 'SQL Injection — на стороне БД/сервера. Фронтенд: валидация и санитизация входных данных как первый рубеж.',
            theory: '<h4>SQL Injection</h4><pre><code>// Уязвимо:\nconst q = `SELECT * FROM users WHERE name = "${input}"`;\n// Ввод: \' OR 1=1 --\n\n// Защита (бэкенд):\ndb.query("SELECT * FROM users WHERE name = ?", [input]);</code></pre><p>На фронтенде: валидация форматов, ограничение типов данных, не передавать SQL-подобные строки.</p>'
          },
          en: {
            q: 'What is SQL Injection and how to prevent it on frontend?',
            options: ['Frontend does not execute SQL, but must validate input. Main defense: parameterized queries on backend', 'Frontend-only attack', 'Client-side only defense'],
            correct: 0,
            explanation: 'SQL Injection hits the DB. Frontend: input validation as first line of defense.',
            theory: '<h4>SQL Injection</h4><pre><code>// Vulnerable:\n`SELECT * FROM users WHERE name = "${input}"`\n// Defense (backend):\ndb.query("SELECT * FROM users WHERE name = ?", [input]);</code></pre>'
          }
        },
      ]
    },
    performance: {
      icon: '⚡', ru: {title: 'Performance'}, en: {title: 'Performance'}, questions: [
        {
          id: 'p1',
          ru: {
            q: 'Что такое Debounce и Throttle?',
            options: ['Debounce — выполняет функцию после паузы; Throttle — не чаще N мс', 'Алгоритмы сортировки', 'CSS-анимации'],
            correct: 0,
            explanation: 'Debounce: ждёт паузу (поиск). Throttle: ограничивает частоту (скролл, resize).',
            theory: '<h4>Debounce</h4><pre><code>const debounce=(fn,ms)=>{ let t; return (...a)=>{ clearTimeout(t); t=setTimeout(()=>fn(...a),ms); }; };</code></pre><h4>Throttle</h4><pre><code>const throttle=(fn,ms)=>{ let last=0; return (...a)=>{ if(Date.now()-last>=ms){ last=Date.now(); fn(...a); } }; };</code></pre>'
          },
          en: {
            q: 'What are Debounce and Throttle?',
            options: ['Debounce: execute after pause; Throttle: no more than once per N ms', 'Sorting algorithms', 'CSS animations'],
            correct: 0,
            explanation: 'Debounce: waits for pause (search). Throttle: limits frequency (scroll, resize).',
            theory: '<h4>Debounce</h4><pre><code>const debounce=(fn,ms)=>{ let t; return (...a)=>{ clearTimeout(t); t=setTimeout(()=>fn(...a),ms); }; };</code></pre>'
          }
        },
        {
          id: 'p2',
          ru: {
            q: 'Что такое Lazy Loading?',
            options: ['Отложенная загрузка ресурсов (изображений, модулей) до момента, когда они нужны', 'Агрессивное кэширование', 'Предварительная загрузка'],
            correct: 0,
            explanation: 'Уменьшает начальный бандл и время загрузки. img loading="lazy", dynamic import().',
            theory: '<h4>Lazy Loading</h4><pre><code>&lt;img src="photo.jpg" loading="lazy" /&gt;\n\n// JS\nconst mod = await import("./heavy.js");\n\n// React\nconst Chart = React.lazy(() => import("./Chart"));\n\n// Angular\n{ path:"admin", loadChildren: ()=>import("./admin.module").then(m=>m.AdminModule) }</code></pre>'
          },
          en: {
            q: 'What is Lazy Loading?',
            options: ['Deferred loading of resources until needed', 'Aggressive caching', 'Preloading everything'],
            correct: 0,
            explanation: 'Reduces initial bundle and load time. img loading="lazy", dynamic import().',
            theory: '<h4>Lazy Loading</h4><pre><code>&lt;img loading="lazy" /&gt;\nconst mod = await import("./heavy.js");</code></pre>'
          }
        },
        {
          id: 'p3',
          ru: {
            q: 'Что такое Core Web Vitals?',
            options: ['Ключевые метрики Google: LCP, INP, CLS для ранжирования в поиске', 'Инструменты Chrome DevTools', 'Протоколы HTTP/2'],
            correct: 0,
            explanation: 'LCP <2.5s (загрузка), INP <200ms (интерактивность), CLS <0.1 (стабильность).',
            theory: '<h4>Core Web Vitals</h4><ul><li><b>LCP</b> (Largest Contentful Paint): &lt;2.5s — оптимизируй изображения, SSR, CDN</li><li><b>INP</b> (Interaction to Next Paint): &lt;200ms — убирай долгие задачи с main thread</li><li><b>CLS</b> (Cumulative Layout Shift): &lt;0.1 — резервируй размеры изображений</li></ul>'
          },
          en: {
            q: 'What are Core Web Vitals?',
            options: ['Google key metrics: LCP, INP, CLS for search ranking', 'Chrome DevTools', 'HTTP/2 protocols'],
            correct: 0,
            explanation: 'LCP <2.5s (loading), INP <200ms (interactivity), CLS <0.1 (stability).',
            theory: '<h4>Core Web Vitals</h4><ul><li>LCP &lt;2.5s: optimize images, SSR, CDN</li><li>INP &lt;200ms: remove long tasks from main thread</li><li>CLS &lt;0.1: reserve image dimensions</li></ul>'
          }
        },
        {
          id: 'p4',
          ru: {
            q: 'Что такое мемоизация?',
            options: ['Кэширование результата функции при одинаковых аргументах', 'Хранение данных в Redis', 'Оптимизация памяти'],
            correct: 0,
            explanation: 'Memoize: если аргументы те же — возвращаем кэш. В React: useMemo, useCallback, React.memo.',
            theory: '<h4>Мемоизация</h4><pre><code>const memo=fn=>{ const c=new Map(); return a=>{ if(c.has(a)) return c.get(a); const r=fn(a); c.set(a,r); return r; }; };</code></pre><h4>React</h4><ul><li>React.memo — компонент</li><li>useMemo — значение</li><li>useCallback — функция</li></ul>'
          },
          en: {
            q: 'What is memoization?',
            options: ['Caching function results for identical arguments', 'Storing data in Redis', 'Memory optimization'],
            correct: 0,
            explanation: 'Memoize: same args → return cache. In React: useMemo, useCallback, React.memo.',
            theory: '<h4>Memoization</h4><pre><code>const memo=fn=>{ const c=new Map(); return a=>c.has(a)?c.get(a):(c.set(a,fn(a)),fn(a)); };</code></pre>'
          }
        },
        {
          id: 'p5',
          ru: {
            q: 'Что такое Tree Shaking?',
            options: ['Удаление неиспользуемого кода из бандла при сборке (bundler анализирует ES-модули)', 'Алгоритм DOM-манипуляций', 'Удаление CSS-классов'],
            correct: 0,
            explanation: 'Tree shaking работает только с ES modules (import/export). Webpack/Rollup/Vite удаляют dead code.',
            theory: '<h4>Tree Shaking</h4><pre><code>// ES modules — tree-shakeable\nexport const a = () => {};\nexport const b = () => {};\n\n// Если импортируешь только a:\nimport { a } from "./utils";\n// b не попадёт в бандл!</code></pre><p>Не работает с CommonJS (require). Используй named exports.</p>'
          },
          en: {
            q: 'What is Tree Shaking?',
            options: ['Removing unused code from bundle at build time (bundler analyzes ES modules)', 'DOM manipulation algorithm', 'Removing CSS classes'],
            correct: 0,
            explanation: 'Tree shaking works only with ES modules. Webpack/Rollup/Vite remove dead code.',
            theory: '<h4>Tree Shaking</h4><pre><code>// Only imported code included in bundle\nimport { a } from "./utils"; // b excluded</code></pre>'
          }
        },
      ]
    }
  }
}