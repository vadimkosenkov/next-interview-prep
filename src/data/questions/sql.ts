import { QuestionBlock } from "@/types/question";

export const sqlBlock: QuestionBlock = {
  meta: {
    icon: '🗄️',
    color: '#336791',
    ru: {title: 'SQL & Databases', desc: 'SQL, индексы, JOIN, транзакции, ORM'},
    en: {title: 'SQL & Databases', desc: 'SQL, indexes, JOIN, transactions, ORM'}
  },
  topics: {
    core: {
      icon: '🗃️', ru: {title: 'SQL Core'}, en: {title: 'SQL Core'}, questions: [
        {
          id: 'sql1',
          ru: {
            q: 'Разница между INNER JOIN, LEFT JOIN, RIGHT JOIN?',
            options: ['INNER: только совпадающие строки; LEFT: все из левой + совпадения из правой; RIGHT: обратно', 'Нет разницы', 'LEFT JOIN медленнее'],
            correct: 0,
            explanation: 'INNER JOIN — пересечение. LEFT JOIN — все записи левой таблицы, NULL для несовпавших правых.',
            theory: '<h4>JOINs</h4><pre><code>-- INNER JOIN\nSELECT u.name, o.total\nFROM users u INNER JOIN orders o ON u.id = o.user_id;\n\n-- LEFT JOIN (все пользователи, даже без заказов)\nSELECT u.name, COUNT(o.id) as orders\nFROM users u LEFT JOIN orders o ON u.id = o.user_id\nGROUP BY u.id;\n\n-- FULL OUTER JOIN (все из обеих таблиц)</code></pre>'
          },
          en: {
            q: 'Difference between INNER JOIN, LEFT JOIN, RIGHT JOIN?',
            options: ['INNER: matching rows only; LEFT: all from left + matches from right; RIGHT: opposite', 'No difference', 'LEFT JOIN is slower'],
            correct: 0,
            explanation: 'INNER JOIN — intersection. LEFT JOIN — all left table records, NULL for unmatched right.',
            theory: '<h4>JOINs</h4><pre><code>-- INNER: only matches\nSELECT * FROM users u INNER JOIN orders o ON u.id=o.user_id;\n-- LEFT: all users, even without orders\nSELECT * FROM users u LEFT JOIN orders o ON u.id=o.user_id;</code></pre>'
          }
        },
        {
          id: 'sql2',
          ru: {
            q: 'Что такое индексы в SQL и когда их использовать?',
            options: ['Структуры данных (B-Tree, Hash) ускоряющие поиск за счёт дополнительного места. По полям WHERE, JOIN, ORDER BY', 'Ограничения уникальности', 'Автоинкремент'],
            correct: 0,
            explanation: 'Индекс = телефонная книга. Без него — full table scan. По PRIMARY KEY создаётся автоматически.',
            theory: '<h4>Indexes</h4><pre><code>-- Создание\nCREATE INDEX idx_user_email ON users(email);\nCREATE UNIQUE INDEX idx_unique_email ON users(email);\nCREATE INDEX idx_composite ON orders(user_id, created_at);\n\n-- EXPLAIN — анализ запроса\nEXPLAIN SELECT * FROM users WHERE email = "test@test.com";\n-- Seq Scan vs Index Scan</code></pre><h4>Когда индекс помогает</h4><ul><li>WHERE по полю с высокой кардинальностью</li><li>JOIN ON</li><li>ORDER BY / GROUP BY</li></ul><h4>Когда мешает</h4><ul><li>INSERT/UPDATE/DELETE становятся медленнее</li><li>Маленькие таблицы — full scan быстрее</li></ul>'
          },
          en: {
            q: 'What are SQL indexes and when to use them?',
            options: ['Data structures (B-Tree, Hash) speeding up search at cost of extra space. On WHERE, JOIN, ORDER BY fields', 'Uniqueness constraints', 'Auto-increment'],
            correct: 0,
            explanation: 'Index = phone book. Without it — full table scan. Created automatically for PRIMARY KEY.',
            theory: '<h4>Indexes</h4><pre><code>CREATE INDEX idx_email ON users(email);\nEXPLAIN SELECT * FROM users WHERE email="a@b.com";</code></pre><p>Helps: WHERE high-cardinality, JOIN, ORDER BY.<br>Hurts: INSERT/UPDATE/DELETE slower.</p>'
          }
        },
        {
          id: 'sql3',
          ru: {
            q: 'Что такое транзакции и ACID?',
            options: ['Атомарность (всё или ничего), Консистентность, Изоляция, Долговечность — гарантии целостности данных', 'Способ оптимизации запросов', 'Индексирование данных'],
            correct: 0,
            explanation: 'BEGIN → operations → COMMIT/ROLLBACK. ACID гарантирует что данные не будут испорчены при сбое.',
            theory: '<h4>Transactions & ACID</h4><pre><code>BEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;\n-- Если ошибка:\nROLLBACK;</code></pre><h4>ACID</h4><ul><li><b>A</b>tomicity — всё или ничего</li><li><b>C</b>onsistency — БД в консистентном состоянии</li><li><b>I</b>solation — транзакции не видят друг друга</li><li><b>D</b>urability — данные сохранены после commit</li></ul>'
          },
          en: {
            q: 'What are transactions and ACID?',
            options: ['Atomicity (all or nothing), Consistency, Isolation, Durability — data integrity guarantees', 'Query optimization', 'Data indexing'],
            correct: 0,
            explanation: 'BEGIN → operations → COMMIT/ROLLBACK. ACID guarantees data is not corrupted on failure.',
            theory: '<h4>ACID</h4><ul><li>Atomicity: all or nothing</li><li>Consistency: DB stays consistent</li><li>Isolation: transactions do not see each other</li><li>Durability: data persists after commit</li></ul>'
          }
        },
        {
          id: 'sql4',
          ru: {
            q: 'Что такое N+1 проблема и как решить?',
            options: ['N запросов для N записей вместо одного JOIN-запроса. Решение: JOIN или eager loading в ORM', 'Проблема с индексами', 'Переполнение буфера'],
            correct: 0,
            explanation: 'N+1: 1 запрос для получения списка + N запросов для деталей каждого. Убивает производительность.',
            theory: '<h4>N+1 Problem</h4><pre><code>// Плохо — N+1\nconst users = await User.findAll();\nfor(const user of users) {\n  user.orders = await Order.findAll({where:{userId:user.id}});\n}\n\n// Хорошо — JOIN (Sequelize)\nconst users = await User.findAll({\n  include: [{ model: Order }] // LEFT JOIN автоматически\n});\n\n// Prisma\nconst users = await prisma.user.findMany({\n  include: { orders: true }\n});</code></pre>'
          },
          en: {
            q: 'What is N+1 problem and how to solve?',
            options: ['N queries for N records instead of one JOIN query. Solution: JOIN or eager loading in ORM', 'Index problem', 'Buffer overflow'],
            correct: 0,
            explanation: 'N+1: 1 query for list + N queries for each record\'s details. Kills performance.',
            theory: '<h4>N+1 Solution</h4><pre><code>// Bad: N+1\nfor(const u of users) { u.orders = await Order.find(u.id); }\n\n// Good: JOIN\nawait User.findAll({ include:[Order] });\nawait prisma.user.findMany({ include:{orders:true} });</code></pre>'
          }
        },
        {
          id: 'sql5',
          ru: {
            q: 'SQL vs NoSQL — когда что выбирать?',
            options: ['SQL: структурированные данные, ACID, сложные запросы. NoSQL: гибкая схема, горизонтальное масштабирование, высокая нагрузка', 'NoSQL всегда быстрее', 'SQL устарел'],
            correct: 0,
            explanation: 'SQL: реляционные данные, транзакции, сложные JOIN. NoSQL (MongoDB, Redis): гибкость, scale.',
            theory: '<h4>SQL vs NoSQL</h4><h4>SQL (PostgreSQL, MySQL)</h4><ul><li>Структурированная схема</li><li>ACID-транзакции</li><li>Сложные JOIN-запросы</li><li>Финансы, ERP, CRM</li></ul><h4>NoSQL</h4><ul><li>MongoDB: документы, гибкая схема</li><li>Redis: кэш, сессии, очереди</li><li>Cassandra: горизонтальное масштабирование</li><li>Elasticsearch: полнотекстовый поиск</li></ul>'
          },
          en: {
            q: 'SQL vs NoSQL — when to choose?',
            options: ['SQL: structured data, ACID, complex queries. NoSQL: flexible schema, horizontal scaling, high load', 'NoSQL is always faster', 'SQL is outdated'],
            correct: 0,
            explanation: 'SQL: relational data, transactions, complex JOINs. NoSQL (MongoDB, Redis): flexibility, scale.',
            theory: '<h4>SQL: structured, ACID, JOINs</h4><h4>NoSQL</h4><ul><li>MongoDB: documents, flexible schema</li><li>Redis: cache, sessions</li><li>Cassandra: horizontal scale</li></ul>'
          }
        },
      ]
    }
  }
}