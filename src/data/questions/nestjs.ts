import { QuestionBlock } from "@/types/question";

export const nestjsBlock: QuestionBlock = {
  meta: {
    icon: '🐈',
    color: '#e0234e',
    ru: {title: 'NestJS', desc: 'Controllers, Services, DI, Guards, Pipes, Modules'},
    en: {title: 'NestJS', desc: 'Controllers, Services, DI, Guards, Pipes, Modules'}
  },
  topics: {
    core: {
      icon: '🏗️', ru: {title: 'Core'}, en: {title: 'Core'}, questions: [
        {
          id: 'nest1',
          ru: {
            q: 'Что такое архитектура NestJS?',
            options: ['MVC + DI: Controllers (роутинг), Services (бизнес-логика), Modules (организация). Похожа на Angular', 'REST-фреймворк без архитектуры', 'Аналог Express без типизации'],
            correct: 0,
            explanation: 'NestJS = Angular на сервере. Decorators, DI, Modules. Под капотом Express или Fastify.',
            theory: '<h4>NestJS Architecture</h4><pre><code>@Module({\n  imports: [TypeOrmModule.forFeature([User])],\n  controllers: [UserController],\n  providers: [UserService],\n  exports: [UserService]\n})\nexport class UserModule {}\n\n@Controller("users")\nexport class UserController {\n  constructor(private users: UserService) {}\n  @Get() findAll() { return this.users.findAll(); }\n}\n\n@Injectable()\nexport class UserService {\n  findAll() { return []; }\n}</code></pre>'
          },
          en: {
            q: 'What is NestJS architecture?',
            options: ['MVC + DI: Controllers (routing), Services (business logic), Modules (organization). Like Angular', 'REST framework without architecture', 'Express analog without typing'],
            correct: 0,
            explanation: 'NestJS = Angular on server. Decorators, DI, Modules. Under the hood: Express or Fastify.',
            theory: '<h4>NestJS Architecture</h4><pre><code>@Controller("users")\nclass UserController {\n  constructor(private us: UserService) {}\n  @Get() findAll() { return this.us.findAll(); }\n}\n\n@Injectable()\nclass UserService { findAll() { return []; } }</code></pre>'
          }
        },
        {
          id: 'nest2',
          ru: {
            q: 'Что такое Pipes в NestJS?',
            options: ['Трансформация и валидация входящих данных. ValidationPipe работает с class-validator', 'Middleware для логирования', 'HTTP-фильтры'],
            correct: 0,
            explanation: 'ValidationPipe + class-validator: DTO автоматически валидируется по декораторам.',
            theory: '<h4>Pipes</h4><pre><code>// DTO\nclass CreateUserDto {\n  @IsString() @MinLength(2) name: string;\n  @IsEmail() email: string;\n  @IsInt() @Min(0) age: number;\n}\n\n// Controller\n@Post()\ncreate(@Body() dto: CreateUserDto) {\n  return this.users.create(dto);\n}\n\n// main.ts\napp.useGlobalPipes(new ValidationPipe({ whitelist:true }));</code></pre>'
          },
          en: {
            q: 'What are Pipes in NestJS?',
            options: ['Transform and validate incoming data. ValidationPipe works with class-validator', 'Logging middleware', 'HTTP filters'],
            correct: 0,
            explanation: 'ValidationPipe + class-validator: DTO auto-validates via decorators.',
            theory: '<h4>Pipes</h4><pre><code>class CreateUserDto {\n  @IsString() name: string;\n  @IsEmail() email: string;\n}\napp.useGlobalPipes(new ValidationPipe());</code></pre>'
          }
        },
        {
          id: 'nest3',
          ru: {
            q: 'Что такое Guards в NestJS?',
            options: ['Определяют может ли запрос быть обработан (authentication/authorization). Реализуют canActivate()', 'Middleware для логирования', 'Валидация данных'],
            correct: 0,
            explanation: 'Guard: canActivate() → true/false. Часто используется с JWT через @UseGuards(AuthGuard("jwt")).',
            theory: '<h4>Guards</h4><pre><code>@Injectable()\nexport class AuthGuard implements CanActivate {\n  constructor(private jwt: JwtService) {}\n\n  canActivate(ctx: ExecutionContext): boolean {\n    const req = ctx.switchToHttp().getRequest();\n    const token = req.headers.authorization?.split(" ")[1];\n    try {\n      req.user = this.jwt.verify(token);\n      return true;\n    } catch { return false; }\n  }\n}\n\n@Get("profile")\n@UseGuards(AuthGuard)\ngetProfile(@Request() req) { return req.user; }</code></pre>'
          },
          en: {
            q: 'What are Guards in NestJS?',
            options: ['Determine if request can be handled (auth). Implement canActivate()', 'Logging middleware', 'Data validation'],
            correct: 0,
            explanation: 'Guard: canActivate() → true/false. Often used with JWT via @UseGuards(AuthGuard("jwt")).',
            theory: '<h4>Guards</h4><pre><code>@Injectable()\nclass AuthGuard implements CanActivate {\n  canActivate(ctx: ExecutionContext) {\n    const req = ctx.switchToHttp().getRequest();\n    return !!req.headers.authorization;\n  }\n}</code></pre>'
          }
        },
        {
          id: 'nest4',
          ru: {
            q: 'Что такое Interceptors в NestJS?',
            options: ['AOP-слой вокруг метода: трансформация response, логирование, кэширование, timeout', 'Аналог middleware только для HTTP', 'Декораторы полей'],
            correct: 0,
            explanation: 'Interceptors: до и после handler. Трансформируют ответ, измеряют время, добавляют кэш.',
            theory: '<h4>Interceptors</h4><pre><code>@Injectable()\nexport class LoggingInterceptor implements NestInterceptor {\n  intercept(ctx: ExecutionContext, next: CallHandler): Observable<any> {\n    const start = Date.now();\n    return next.handle().pipe(\n      tap(() => console.log(`${Date.now()-start}ms`))\n    );\n  }\n}\n\n// Transform response\nreturn next.handle().pipe(\n  map(data => ({ success:true, data }))\n);</code></pre>'
          },
          en: {
            q: 'What are Interceptors in NestJS?',
            options: ['AOP layer around method: transform response, logging, caching, timeout', 'HTTP-only middleware analog', 'Field decorators'],
            correct: 0,
            explanation: 'Interceptors: before and after handler. Transform response, measure time, add cache.',
            theory: '<h4>Interceptors</h4><pre><code>class LogInterceptor implements NestInterceptor {\n  intercept(ctx: ExecutionContext, next: CallHandler) {\n    const t = Date.now();\n    return next.handle().pipe(tap(()=>console.log(Date.now()-t)));\n  }\n}</code></pre>'
          }
        },
        {
          id: 'nest5',
          ru: {
            q: 'Что такое Exception Filters в NestJS?',
            options: ['Перехватывают исключения и формируют HTTP-ответ с нужным статусом и сообщением', 'Фильтры для валидации', 'Middleware для ошибок'],
            correct: 0,
            explanation: '@Catch(HttpException) — перехватывает конкретный тип. @Catch() — все ошибки. Формирует стандартный ответ.',
            theory: '<h4>Exception Filters</h4><pre><code>@Catch(HttpException)\nexport class HttpFilter implements ExceptionFilter {\n  catch(exception: HttpException, host: ArgumentsHost) {\n    const ctx = host.switchToHttp();\n    const res = ctx.getResponse();\n    const status = exception.getStatus();\n    res.status(status).json({\n      statusCode: status,\n      message: exception.message,\n      timestamp: new Date().toISOString()\n    });\n  }\n}</code></pre>'
          },
          en: {
            q: 'What are Exception Filters in NestJS?',
            options: ['Intercept exceptions and form HTTP response with correct status and message', 'Validation filters', 'Error middleware'],
            correct: 0,
            explanation: '@Catch(HttpException) — specific type. @Catch() — all errors. Forms standard response.',
            theory: '<h4>Exception Filter</h4><pre><code>@Catch(HttpException)\nclass HttpFilter implements ExceptionFilter {\n  catch(ex: HttpException, host: ArgumentsHost) {\n    host.switchToHttp().getResponse()\n      .status(ex.getStatus()).json({message:ex.message});\n  }\n}</code></pre>'
          }
        },
      ]
    }
  }
}