# AutoZelo

Base de um catálogo informativo de produtos para cuidar de carros e motocicletas. A página inicial informa se a API está respondendo.

## Requisitos

- Node.js 22.17 ou superior na linha 22, ou Node.js 24 ou superior, com npm.
- .NET SDK 10.
- Git.
- PostgreSQL para o trabalho com persistência. A página inicial e a sonda da API funcionam sem um banco instalado.

| Componente | Versão verificada |
| --- | --- |
| Node.js, npm e Git | 22.17.1, 10.5.0 e 2.50.1.windows.1 |
| SvelteKit, Svelte e TypeScript | 3.4.0, 5.59.1 e 6.0.3 |
| Vite, Tailwind CSS e adaptador Node | 8.3.8, 4.3.5 e 6.0.5 |
| CLI shadcn-svelte usada para validar a configuração | 1.8.1 |
| SDK .NET, ASP.NET Core e OpenAPI | 10.0.401, 10.0.12 e 10.0.12 |
| EF Core e provider Npgsql para EF Core | 10.0.4 e 10.0.1 |

## Executar localmente

No primeiro terminal, a partir da raiz do projeto:

```powershell
dotnet run --project backend/AutoZelo.Api --launch-profile http
```

A API responde em `http://127.0.0.1:5080/health`. O documento OpenAPI está em `http://127.0.0.1:5080/openapi/v1.json` no ambiente `Development`.

No segundo terminal, a partir da raiz do projeto:

```powershell
Set-Location frontend
npm ci --include=dev
npm run dev -- --host 127.0.0.1 --port 5173 --strictPort
```

A página inicial está em `http://127.0.0.1:5173`. Os padrões funcionam sem arquivos locais. Para trocar o nome exibido ou a URL da API, copie `frontend/.env.example` para `frontend/.env` e ajuste `PUBLIC_APP_NAME` ou `API_BASE_URL`.

## Configurar PostgreSQL

O exemplo na raiz mostra a chave `ConnectionStrings__Catalog`. Exporte essa variável no terminal da API ou use o Secret Manager com a chave `ConnectionStrings:Catalog` no projeto `backend/AutoZelo.Api`. O ASP.NET Core lê a configuração pelo ambiente e pelo Secret Manager em desenvolvimento. O arquivo `.env.example` serve como referência.

Quando a chave é preenchida, a API registra `CatalogDbContext` com Npgsql. A Etapa 1 deixa o contexto vazio e a sonda verifica somente a disponibilidade do processo. A conectividade e o esquema serão verificados quando houver um banco e um modelo de dados.

## Verificar

Na raiz, compile a API:

```powershell
dotnet build backend/AutoZelo.slnx
```

Dentro de `frontend/`, verifique os tipos e compile o frontend. Mantenha os dois servidores locais em execução ao rodar os testes de integração HTTP:

```powershell
npm run check
npm run build
npm test
```

Os testes usam as URLs padrão acima. Se mudar as portas, defina `API_BASE_URL` e `FRONTEND_URL` no ambiente do terminal de testes.

## Documentação

- [Especificação provisória e escopo da Etapa 1](docs/ESPECIFICACAO.md)
- [Arquitetura e estratégia de dados](docs/ARQUITETURA.md)
- [Instruções para o Codex](AGENTS.md)
