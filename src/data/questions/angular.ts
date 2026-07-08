import { QuestionBlock } from "@/types/question";

export const angularBlock: QuestionBlock = {
  meta: {
    icon: '🔴',
    color: '#dd0031',
    ru: {title: 'Angular', desc: 'DI, RxJS, Change Detection, Signals, Routing...'},
    en: {title: 'Angular', desc: 'DI, RxJS, Change Detection, Signals, Routing...'}
  },
  topics: {
    core: {
      icon: '🏗️', ru: {title: 'Core Concepts'}, en: {title: 'Core Concepts'}, questions: [
        {
          id: 'ng1',
          ru: {
            q: 'Что такое Dependency Injection в Angular?',
            options: ['Система где Angular создаёт и предоставляет зависимости через инжектор, не компонент создаёт их сам', 'Встроенный HTTP-клиент', 'Способ импорта модулей'],
            correct: 0,
            explanation: 'DI: сервисы регистрируются в провайдерах. Angular-инжектор создаёт и передаёт их через конструктор.',
            theory: '<h4>Angular DI</h4><pre><code>@Injectable({ providedIn:"root" })\nclass UserService { getUsers(){}  }\n\n@Component({})\nclass AppComponent {\n  constructor(private users: UserService) {}\n}</code></pre><h4>Провайдеры</h4><ul><li>providedIn:"root" — синглтон на всё приложение</li><li>providers в модуле — на модуль</li><li>providers в компоненте — на компонент и детей</li></ul>'
          },
          en: {
            q: 'What is Dependency Injection in Angular?',
            options: ['System where Angular creates and provides dependencies via injector, component does not create them', 'Built-in HTTP client', 'Module import method'],
            correct: 0,
            explanation: 'DI: services registered in providers. Angular injector creates and passes them via constructor.',
            theory: '<h4>Angular DI</h4><pre><code>@Injectable({ providedIn:"root" })\nclass UserService {}\n\nclass AppComponent {\n  constructor(private us: UserService) {}\n}</code></pre>'
          }
        },
        {
          id: 'ng2',
          ru: {
            q: 'Что такое Change Detection и стратегия OnPush?',
            options: ['Default проверяет всё дерево при любом событии; OnPush — только при изменении @Input-ссылок или async', 'Алгоритм диффинга шаблонов', 'HTTP-polling'],
            correct: 0,
            explanation: 'OnPush значительно ускоряет приложение. Работает с Signals автоматически.',
            theory: '<h4>Change Detection</h4><h4>Default</h4><p>Любое событие → проверка всего дерева.</p><h4>OnPush</h4><pre><code>@Component({ changeDetection: ChangeDetectionStrategy.OnPush })</code></pre><p>Срабатывает при:</p><ul><li>Изменении ссылки @Input</li><li>DOM-событии внутри компонента</li><li>async pipe / markForCheck()</li><li>Signal изменился</li></ul>'
          },
          en: {
            q: 'What is Change Detection and OnPush strategy?',
            options: ['Default checks entire tree on any event; OnPush — only on @Input reference changes or async', 'Template diffing algorithm', 'HTTP polling'],
            correct: 0,
            explanation: 'OnPush significantly speeds up app. Works with Signals automatically.',
            theory: '<h4>Change Detection</h4><p>Default: any event → full tree check.</p><pre><code>@Component({ changeDetection: ChangeDetectionStrategy.OnPush })</code></pre>'
          }
        },
        {
          id: 'ng3',
          ru: {
            q: 'Что такое Angular Signals?',
            options: ['Реактивный примитив (signal/computed/effect) заменяющий часть RxJS. Angular 16+', 'WebSocket события', 'Сигналы жизненного цикла'],
            correct: 0,
            explanation: 'Signals — synchronous reactive state. signal() создаёт значение, computed() — вычисляемое, effect() — побочный эффект.',
            theory: '<h4>Angular Signals</h4><pre><code>const count = signal(0);\nconst doubled = computed(() => count() * 2);\n\neffect(() => console.log("Count:", count()));\n\ncount.set(5);\ncount.update(v => v + 1);\n\n// В шаблоне\n// {{ count() }}</code></pre><h4>Vs RxJS</h4><ul><li>Проще в освоении</li><li>Синхронны по умолчанию</li><li>Автотрекинг зависимостей</li></ul>'
          },
          en: {
            q: 'What are Angular Signals?',
            options: ['Reactive primitive (signal/computed/effect) replacing parts of RxJS. Angular 16+', 'WebSocket events', 'Lifecycle signals'],
            correct: 0,
            explanation: 'Signals — synchronous reactive state. signal(), computed(), effect().',
            theory: '<h4>Angular Signals</h4><pre><code>const count = signal(0);\nconst doubled = computed(() => count() * 2);\neffect(() => console.log(count()));\ncount.set(5);</code></pre>'
          }
        },
        {
          id: 'ng4',
          ru: {
            q: 'Чем @Component отличается от @Directive?',
            options: ['@Component = @Directive + шаблон. Директива добавляет поведение без шаблона', 'Нет разницы', '@Directive создаёт сервисы'],
            correct: 0,
            explanation: 'Attribute Directive: изменяет существующий элемент. Structural (*ngIf, *ngFor): изменяет структуру DOM.',
            theory: '<h4>Directive types</h4><h4>Attribute</h4><pre><code>@Directive({ selector:"[highlight]" })\nclass HighlightDirective {\n  @HostBinding("style.background") bg = "yellow";\n  @HostListener("click") onClick() { this.bg = "red"; }\n}</code></pre><h4>Structural</h4><pre><code>*ngIf, *ngFor, *ngSwitch\n// Custom\n@Directive({ selector:"[appIf]" })\nclass IfDirective {\n  constructor(private vcr:ViewContainerRef, private tpl:TemplateRef<any>) {}\n  @Input() set appIf(v:boolean) {\n    v ? this.vcr.createEmbeddedView(this.tpl) : this.vcr.clear();\n  }\n}</code></pre>'
          },
          en: {
            q: 'How does @Component differ from @Directive?',
            options: ['@Component = @Directive + template. Directive adds behavior without template', 'No difference', '@Directive creates services'],
            correct: 0,
            explanation: 'Attribute Directive: modifies existing element. Structural (*ngIf, *ngFor): changes DOM structure.',
            theory: '<h4>Attribute Directive</h4><pre><code>@Directive({ selector:"[highlight]" })\nclass HighlightDir {\n  @HostBinding("style.background") bg = "yellow";\n}</code></pre>'
          }
        },
        {
          id: 'ng5',
          ru: {
            q: 'Что такое Standalone Components?',
            options: ['Компоненты без NgModule: standalone:true, сами объявляют imports', 'Компоненты без стилей', 'Компоненты для тестов'],
            correct: 0,
            explanation: 'Angular 14+. Standalone компоненты сами импортируют зависимости. Рекомендуемый подход с Angular 17.',
            theory: '<h4>Standalone Components</h4><pre><code>@Component({\n  standalone: true,\n  imports: [CommonModule, RouterModule, FormsModule],\n  template: `...`\n})\nexport class HeroComponent {}\n\n// Bootstrap\nbootstrapApplication(AppComponent, {\n  providers: [provideRouter(routes), provideHttpClient()]\n});</code></pre>'
          },
          en: {
            q: 'What are Standalone Components?',
            options: ['Components without NgModule: standalone:true, declare own imports', 'Components without styles', 'Test components'],
            correct: 0,
            explanation: 'Angular 14+. Standalone components import their own dependencies. Recommended since Angular 17.',
            theory: '<h4>Standalone</h4><pre><code>@Component({ standalone:true, imports:[CommonModule], template:"..." })\nexport class HeroComponent {}\n\nbootstrapApplication(AppComponent, { providers:[provideRouter(routes)] });</code></pre>'
          }
        },
        {
          id: 'ng6',
          ru: {
            q: 'Что такое NgZone и зачем он нужен?',
            options: ['Сервис для отслеживания асинхронных операций. CD запускается автоматически при их завершении', 'Модуль для работы с временными зонами', 'HTTP-interceptor'],
            correct: 0,
            explanation: 'NgZone патчит браузерные async-API (setTimeout, Promise) и запускает CD по завершении. Можно выйти через runOutsideAngular.',
            theory: '<h4>NgZone</h4><pre><code>// Тяжёлые вычисления вне зоны (нет CD)\nthis.zone.runOutsideAngular(() => {\n  setInterval(() => { this.compute(); }, 10);\n});\n\n// Вернуться в зону когда нужен CD\nthis.zone.run(() => {\n  this.result = data;\n});\n\n// Современная альтернатива: zoneless + Signals</code></pre>'
          },
          en: {
            q: 'What is NgZone and why is it needed?',
            options: ['Service for tracking async operations. CD runs automatically on completion', 'Timezone module', 'HTTP interceptor'],
            correct: 0,
            explanation: 'NgZone patches browser async APIs and triggers CD on completion. Escape via runOutsideAngular.',
            theory: '<h4>NgZone</h4><pre><code>this.zone.runOutsideAngular(() => {\n  // no CD triggered\n  setInterval(() => this.compute(), 10);\n});\nthis.zone.run(() => { this.result = data; });</code></pre>'
          }
        },
      ]
    },
    rxjs: {
      icon: '🌊', ru: {title: 'RxJS'}, en: {title: 'RxJS'}, questions: [
        {
          id: 'rxjs1',
          ru: {
            q: 'switchMap vs mergeMap vs concatMap vs exhaustMap?',
            options: ['switch — отменяет предыдущий; merge — параллельно; concat — очередь; exhaust — игнорирует новые пока текущий активен', 'Все делают одно и то же', 'switch и merge одинаковы'],
            correct: 0,
            explanation: 'switchMap: поиск. mergeMap: загрузка файлов. concatMap: последовательность. exhaustMap: submit формы.',
            theory: '<h4>Higher-order operators</h4><pre><code>// switchMap — отменяет предыдущий\nsearch$.pipe(switchMap(q => api.search(q)))\n\n// mergeMap — параллельно\nfiles$.pipe(mergeMap(f => upload(f)))\n\n// concatMap — очередь (дожидается предыдущего)\nclicks$.pipe(concatMap(() => saveAction()))\n\n// exhaustMap — игнорирует пока активен\nsubmit$.pipe(exhaustMap(() => api.post(data)))</code></pre>'
          },
          en: {
            q: 'switchMap vs mergeMap vs concatMap vs exhaustMap?',
            options: ['switch: cancel prev; merge: parallel; concat: queue; exhaust: ignore new while current active', 'All do the same', 'switch and merge are equal'],
            correct: 0,
            explanation: 'switchMap: search. mergeMap: file uploads. concatMap: sequence. exhaustMap: form submit.',
            theory: '<h4>Higher-order operators</h4><pre><code>search$.pipe(switchMap(q => api.search(q))) // search\nfiles$.pipe(mergeMap(f => upload(f)))        // parallel\nclicks$.pipe(concatMap(() => save()))        // queue\nsubmit$.pipe(exhaustMap(() => api.post()))   // no double</code></pre>'
          }
        },
        {
          id: 'rxjs2',
          ru: {
            q: 'Subject vs BehaviorSubject vs ReplaySubject?',
            options: ['Subject — нет прошлого; BehaviorSubject — хранит последнее значение; ReplaySubject — буфер N значений', 'Нет разницы', 'BehaviorSubject только для HTTP'],
            correct: 0,
            explanation: 'BehaviorSubject: новый подписчик сразу получает последнее значение. ReplaySubject: буферизует N последних.',
            theory: '<h4>Subjects</h4><pre><code>// Subject\nconst s = new Subject<number>();\n\n// BehaviorSubject — начальное значение обязательно\nconst bs = new BehaviorSubject<number>(0);\nbs.getValue(); // синхронно\n\n// ReplaySubject — буфер\nconst rs = new ReplaySubject<number>(3);\n\n// AsyncSubject — только последнее значение при complete\nconst as = new AsyncSubject<number>();</code></pre>'
          },
          en: {
            q: 'Subject vs BehaviorSubject vs ReplaySubject?',
            options: ['Subject: no history; BehaviorSubject: stores last value; ReplaySubject: buffers N values', 'No difference', 'BehaviorSubject for HTTP only'],
            correct: 0,
            explanation: 'BehaviorSubject: new subscriber immediately gets last value. ReplaySubject: buffers N last.',
            theory: '<h4>Subjects</h4><pre><code>new Subject()             // no history\nnew BehaviorSubject(0)    // has current value\nnew ReplaySubject(3)      // last 3 values\nnew AsyncSubject()        // last value on complete</code></pre>'
          }
        },
        {
          id: 'rxjs3',
          ru: {
            q: 'Как правильно отписаться от Observable?',
            options: ['takeUntilDestroyed(), takeUntil(destroy$), async pipe — три главных способа', 'Никогда не нужно', 'Только unsubscribe()'],
            correct: 0,
            explanation: 'Утечки памяти опасны. async pipe автоотписывается. takeUntilDestroyed — Angular 16+.',
            theory: '<h4>Unsubscribe patterns</h4><pre><code>// 1. async pipe — автоотписка\n{{ data$ | async }}\n\n// 2. takeUntilDestroyed (Angular 16+)\ndata$.pipe(takeUntilDestroyed()).subscribe();\n\n// 3. takeUntil + Subject\nclass Cmp implements OnDestroy {\n  destroy$ = new Subject<void>();\n  ngOnInit() {\n    data$.pipe(takeUntil(this.destroy$)).subscribe();\n  }\n  ngOnDestroy() { this.destroy$.next(); this.destroy$.complete(); }\n}</code></pre>'
          },
          en: {
            q: 'How to properly unsubscribe from Observable?',
            options: ['takeUntilDestroyed(), takeUntil(destroy$), async pipe — three main ways', 'Never needed', 'Only unsubscribe()'],
            correct: 0,
            explanation: 'Memory leaks are dangerous. async pipe auto-unsubscribes. takeUntilDestroyed — Angular 16+.',
            theory: '<h4>Unsubscribe</h4><pre><code>// async pipe\n{{ data$ | async }}\n\n// takeUntilDestroyed (Angular 16+)\ndata$.pipe(takeUntilDestroyed()).subscribe();\n\n// takeUntil\ndata$.pipe(takeUntil(this.destroy$)).subscribe();</code></pre>'
          }
        },
        {
          id: 'rxjs4',
          ru: {
            q: 'Что делает оператор catchError?',
            options: ['Перехватывает ошибку Observable и возвращает новый Observable (например of([]))', 'Логирует ошибку и пробрасывает дальше', 'Работает только с HTTP-запросами'],
            correct: 0,
            explanation: 'catchError: можно вернуть of(defaultValue) для продолжения потока или throwError для повторного бросания.',
            theory: '<h4>catchError</h4><pre><code>this.http.get("/api/users").pipe(\n  catchError(err => {\n    console.error(err);\n    return of([]); // поток продолжается\n  })\n);\n\n// retry\nthis.http.get("/api").pipe(\n  retry(3),\n  catchError(err => of({error:true}))\n);\n\n// retryWhen с задержкой\n.pipe(retryWhen(e => e.pipe(delay(1000), take(3))))</code></pre>'
          },
          en: {
            q: 'What does catchError operator do?',
            options: ['Catches Observable error and returns new Observable (e.g. of([]))', 'Logs error and rethrows', 'Only for HTTP requests'],
            correct: 0,
            explanation: 'catchError: return of(defaultValue) to continue stream or throwError to rethrow.',
            theory: '<h4>catchError</h4><pre><code>api.get("/users").pipe(\n  retry(3),\n  catchError(err => of([]))\n);</code></pre>'
          }
        },
        {
          id: 'rxjs5',
          ru: {
            q: 'Observable vs Promise — ключевые отличия?',
            options: ['Observable: ленивый, отменяемый, много значений, операторы; Promise: жадный, не отменяемый, одно значение', 'Нет разницы', 'Observable всегда асинхронный'],
            correct: 0,
            explanation: 'Observable выполняется только при подписке (lazy). Unsubscribe() отменяет. Эмитирует N значений.',
            theory: '<h4>Observable vs Promise</h4><table style="width:100%;font-size:.8rem"><tr><th>Observable</th><th>Promise</th></tr><tr><td>Lazy</td><td>Eager</td></tr><tr><td>Cancelable</td><td>Not cancelable</td></tr><tr><td>N values</td><td>1 value</td></tr><tr><td>Operators</td><td>.then/.catch</td></tr><tr><td>Sync/Async</td><td>Always async</td></tr></table>'
          },
          en: {
            q: 'Observable vs Promise — key differences?',
            options: ['Observable: lazy, cancelable, many values, operators; Promise: eager, not cancelable, one value', 'No difference', 'Observable is always async'],
            correct: 0,
            explanation: 'Observable executes only on subscribe (lazy). Unsubscribe cancels. Emits N values.',
            theory: '<h4>Observable vs Promise</h4><ul><li>Observable: lazy, cancelable, N values</li><li>Promise: eager, not cancelable, 1 value</li></ul>'
          }
        },
      ]
    },
    routing: {
      icon: '🗺️', ru: {title: 'Routing & Forms & HTTP'}, en: {title: 'Routing & Forms & HTTP'}, questions: [
        {
          id: 'ng_r1',
          ru: {
            q: 'Template-driven vs Reactive Forms?',
            options: ['Template-driven: логика в шаблоне через ngModel; Reactive: FormControl/FormGroup в классе — мощнее и тестируемее', 'Нет разницы', 'Reactive только для Angular Material'],
            correct: 0,
            explanation: 'Reactive Forms: типизированы (TypedForms в Angular 14+), programmatic control, проще тестировать.',
            theory: '<h4>Reactive Forms</h4><pre><code>this.form = new FormGroup({\n  name: new FormControl("", [Validators.required, Validators.minLength(3)]),\n  email: new FormControl("", Validators.email)\n});\n\n// Кастомный валидатор\nconst noSpaces = (c:AbstractControl) =>\n  c.value?.includes(" ") ? {noSpaces:true} : null;</code></pre>'
          },
          en: {
            q: 'Template-driven vs Reactive Forms?',
            options: ['Template-driven: logic in template via ngModel; Reactive: FormControl/FormGroup in class — more powerful', 'No difference', 'Reactive for Angular Material only'],
            correct: 0,
            explanation: 'Reactive Forms: typed (TypedForms in Angular 14+), programmatic control, easier to test.',
            theory: '<h4>Reactive Forms</h4><pre><code>this.form = new FormGroup({\n  name: new FormControl("", Validators.required)\n});</code></pre>'
          }
        },
        {
          id: 'ng_r2',
          ru: {
            q: 'Что такое Route Guards?',
            options: ['Интерфейсы для контроля навигации: canActivate, canDeactivate, canMatch, resolve', 'CSS для активных ссылок', 'Middleware HTTP'],
            correct: 0,
            explanation: 'canActivate — вход на маршрут (auth). canDeactivate — уход (несохранённые данные). resolve — предзагрузка.',
            theory: '<h4>Route Guards (Angular 14+)</h4><pre><code>// Functional guard\nexport const authGuard = () => {\n  const auth = inject(AuthService);\n  const router = inject(Router);\n  return auth.isLoggedIn() || router.navigate(["/login"]);\n};\n\n{ path:"admin", canActivate:[authGuard], component:AdminCmp }\n\n// resolve — данные перед рендером\nexport const userResolver = (route: ActivatedRouteSnapshot) => {\n  return inject(UserService).getUser(route.params["id"]);\n};</code></pre>'
          },
          en: {
            q: 'What are Route Guards?',
            options: ['Interfaces for navigation control: canActivate, canDeactivate, canMatch, resolve', 'CSS for active links', 'HTTP middleware'],
            correct: 0,
            explanation: 'canActivate: route entry (auth). canDeactivate: leaving (unsaved data). resolve: preload data.',
            theory: '<h4>Route Guards</h4><pre><code>const authGuard = () => {\n  const auth = inject(AuthService);\n  return auth.isLoggedIn();\n};</code></pre>'
          }
        },
        {
          id: 'ng_r3',
          ru: {
            q: 'Что такое HTTP Interceptors?',
            options: ['Middleware для HttpClient: перехватывают все запросы/ответы для токенов, логирования, ошибок', 'Фильтры для шаблонов', 'WebSocket сервисы'],
            correct: 0,
            explanation: 'Interceptors позволяют централизованно добавить Authorization header, обработать 401/403, retry.',
            theory: '<h4>HTTP Interceptor (Angular 15+)</h4><pre><code>export const authInterceptor: HttpInterceptorFn = (req, next) => {\n  const token = inject(AuthService).token;\n  const authReq = req.clone({\n    setHeaders: { Authorization:`Bearer ${token}` }\n  });\n  return next(authReq).pipe(\n    catchError(err => {\n      if(err.status === 401) inject(Router).navigate(["/login"]);\n      return throwError(()=>err);\n    })\n  );\n};\n\nproviders:[provideHttpClient(withInterceptors([authInterceptor]))]</code></pre>'
          },
          en: {
            q: 'What are HTTP Interceptors?',
            options: ['Middleware for HttpClient: intercept all requests/responses for tokens, logging, errors', 'Template filters', 'WebSocket services'],
            correct: 0,
            explanation: 'Interceptors: add Authorization header, handle 401/403, retry — all centrally.',
            theory: '<h4>HTTP Interceptor</h4><pre><code>const authInterceptor: HttpInterceptorFn = (req, next) => {\n  const token = inject(AuthService).token;\n  return next(req.clone({ setHeaders:{Authorization:`Bearer ${token}`} }));\n};</code></pre>'
          }
        },
      ]
    }
  }
}