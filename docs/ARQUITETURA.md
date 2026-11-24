# Arquitetura inicial do AutoZelo

O AutoZelo é um catálogo informativo para proprietários de carros e motocicletas. A base tem dois aplicativos no mesmo repositório e um PostgreSQL externo. O nome exibido é configurável com `PUBLIC_APP_NAME`.

## Aplicações e responsabilidades

| Área | Responsabilidade |
| --- | --- |
| SvelteKit | Renderizar páginas no servidor. Conforme o catálogo evoluir, manter busca e filtros na URL, compor a navegação e exibir detalhes e estados de interface acessíveis. |
| ASP.NET Core | Expor contratos HTTP em JSON e documentá-los com OpenAPI. Organizar os recursos futuros por funcionalidade, como produtos, marcas e categorias. Validar parâmetros e manter DTOs separados das entidades de persistência. |
| EF Core e Npgsql | Centralizar acesso relacional em um contexto por escopo. Receber a conexão pelo ambiente ou Secret Manager. A configuração inicial permite subir a API mesmo quando o banco ainda está sendo provisionado. |

## Comunicação e desenvolvimento

O navegador acessa o SvelteKit. O `+page.server.ts` consulta `GET /health` na API com a URL privada `API_BASE_URL`. A página recebe somente o estado da API. Esse fluxo usa SSR e mantém a URL da API no servidor, sem exigir CORS. A sonda informa se o processo da API responde. Uma futura verificação de prontidão poderá testar as dependências de dados.

A API usa Minimal APIs no .NET 10 para manter pequeno o ponto de entrada. O OpenAPI integrado é servido em desenvolvimento. O frontend usa SvelteKit e TypeScript estrito para verificação estática, Tailwind 4 para estilos e convenções do shadcn-svelte para tokens, aliases e componentes locais. Adicione Bits UI quando um componente precisar de seus primitivos de interação. Prefira animações em CSS nativo com suporte a `prefers-reduced-motion`. O Node executa SSR pelo adaptador oficial.

## Dados e escala

- Planeje restrições e índices a partir dos relacionamentos e das consultas reais. Para listas, projete campos necessários em DTOs, use consultas de leitura sem rastreamento e limite a página no servidor.
- Para grandes volumes, use ordenação determinística com desempate por identificador. Avalie paginação por cursor e índices compostos conforme os filtros se consolidarem.
- Meça consultas com volumes representativos. Avalie busca textual nativa e índices GIN do PostgreSQL quando houver requisitos de relevância e medições que justifiquem seu uso.
- Preserve SSR e progressive enhancement quando introduzir interações. Otimize imagens e mantenha pequeno o JavaScript enviado ao celular.
