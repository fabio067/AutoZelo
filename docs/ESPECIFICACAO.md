# Especificação do AutoZelo

> Referência provisória. A especificação mestre mencionada no anexo não estava disponível no workspace ou nos anexos acessíveis. Este arquivo preserva o texto fornecido para a Etapa 1. Inclua a especificação mestre antes de planejar as próximas etapas.

# ETAPA 1 — PLANEJAMENTO E INICIALIZAÇÃO DO PROJETO

Você atuará como um engenheiro de software sênior, especializado em arquitetura web, SvelteKit, TypeScript, ASP.NET Core, PostgreSQL, acessibilidade e otimização de desempenho.

## 1. CONTEXTO DO PROJETO

Estou desenvolvendo do zero uma aplicação web de catálogo informativo de produtos para limpeza, conservação, proteção e cuidados automotivos.

O público-alvo são proprietários de carros e motocicletas que procuram produtos adequados para limpar, preservar e cuidar das peças, materiais e superfícies de seus veículos.

A aplicação terá busca, filtros, cards de produtos, páginas detalhadas e navegação hierárquica por marcas e categorias.

A experiência deve ser moderna, responsiva, acessível e funcionar adequadamente em computadores e celulares com poucos recursos de processamento.

A especificação mestre fornecida anteriormente nesta conversa deverá ser armazenada em `docs/ESPECIFICACAO.md`. Caso o arquivo já exista, leia-o antes de executar qualquer alteração.

## 2. TECNOLOGIAS OBRIGATÓRIAS

Frontend:
- SvelteKit.
- TypeScript com tipagem rigorosa.
- Tailwind CSS.
- shadcn-svelte, utilizando Bits UI quando necessário.
- CSS nativo para animações simples.

Backend:
- C#.
- ASP.NET Core Web API.
- Entity Framework Core.
- PostgreSQL com provider Npgsql.
- OpenAPI para documentação da API.

Ferramentas:
- Git.
- npm.
- .NET SDK.
- Scripts para ambiente de desenvolvimento.
- Testes automatizados compatíveis com a stack.

Utilize versões estáveis e compatíveis disponíveis no ambiente. Identifique as versões selecionadas e justifique escolhas importantes. Não instale dependências opcionais nesta etapa sem necessidade.

## 3. OBJETIVOS DESTA ETAPA

### 3.1 Análise e planejamento

1. Analise a especificação completa.
2. Proponha uma arquitetura inicial adequada para o sistema.
3. Identifique os módulos e responsabilidades do frontend e backend.
4. Defina como ocorrerá a comunicação entre SvelteKit e ASP.NET Core.
5. Defina a estratégia inicial de integração com PostgreSQL.
6. Considere a possibilidade de milhares ou milhões de registros no futuro, evitando complexidade prematura.
7. Escolha um nome curto e memorável relacionado a cuidados automotivos. Evite nomes que sugiram ser uma oficina ou loja virtual. Mantenha o nome facilmente configurável.

### 3.2 Estrutura de pastas

Crie uma organização semelhante a:

- `frontend/` — Aplicação SvelteKit.
- `backend/` — Solução ASP.NET Core.
- `docs/` — Documentação técnica e especificações.
- `README.md` — Instruções gerais.
- `AGENTS.md` — Regras permanentes para o Codex.
- `.gitignore` — Arquivos ignorados pelo Git.

Organize as pastas internas seguindo os padrões recomendados de cada tecnologia. Não crie camadas ou projetos que ainda não tenham uma finalidade concreta.

### 3.3 Inicialização

1. Inicialize o frontend com SvelteKit e TypeScript.
2. Configure Tailwind CSS.
3. Configure a base de estilos globais.
4. Inicialize uma API ASP.NET Core.
5. Prepare a integração com PostgreSQL por meio de configurações externas.
6. Configure OpenAPI no backend.
7. Configure CORS de forma restrita para o ambiente de desenvolvimento, caso necessário.
8. Crie arquivos `.env.example` sem informações sensíveis.
9. Configure scripts ou comandos documentados para inicialização local.
10. Configure o repositório Git caso ainda não exista, sem sobrescrever configurações existentes.

### 3.4 Regras permanentes do projeto

Crie um `AGENTS.md` contendo instruções objetivas para futuras execuções do Codex:

- Sempre consultar `docs/ESPECIFICACAO.md`.
- Respeitar a arquitetura e tecnologias definidas.
- Não inventar dados técnicos de produtos.
- Não adicionar funcionalidades fora do escopo.
- Não instalar dependências desnecessárias.
- Priorizar código legível, tipado, seguro e reutilizável.
- Priorizar desempenho em dispositivos modestos.
- Executar verificações compatíveis com as alterações realizadas.
- Não modificar arquivos sem necessidade.
- Registrar limitações e problemas não resolvidos.

## 4. RESTRIÇÕES

- Não desenvolver ainda a página de catálogo.
- Não implementar cards, filtros ou a árvore de navegação.
- Não criar entidades completas, migrations ou endpoints de produtos nesta etapa.
- Não adicionar autenticação, área administrativa, sistema de compras ou pagamentos.
- Não utilizar Redis, microsserviços ou filas.
- Não gerar dados fictícios de produtos nesta etapa.
- Não configurar serviços pagos ou publicar a aplicação.
- Não declarar comandos ou testes como bem-sucedidos sem executá-los.

É permitido criar uma página inicial simples para verificar que o frontend está funcionando e um endpoint básico de saúde para verificar a execução do backend.

## 5. CRITÉRIOS DE ACEITE

A etapa estará concluída quando:

- O frontend iniciar corretamente.
- O backend iniciar corretamente.
- O frontend conseguir realizar uma requisição simples ao backend, caso ambos estejam executáveis no ambiente.
- A estrutura de pastas estiver organizada.
- O Tailwind CSS estiver configurado.
- As configurações iniciais do PostgreSQL estiverem preparadas, sem necessidade de modelagem completa.
- O projeto possuir `.gitignore`, `.env.example`, `README.md`, `AGENTS.md` e especificação mestre.
- Os comandos de build e verificação disponíveis forem executados.
- Não houver erros de configuração conhecidos que impeçam a inicialização básica.

## 6. ENTREGA ESPERADA

Primeiro, apresente resumidamente a arquitetura proposta e as tecnologias selecionadas.

Depois, execute somente esta etapa.

Ao finalizar, informe:

1. Estrutura final das pastas.
2. Arquivos e projetos criados.
3. Tecnologias e versões utilizadas.
4. Comandos necessários para iniciar frontend e backend.
5. Verificações executadas e respectivos resultados.
6. Pendências e limitações.
7. Preparação necessária para iniciar a Etapa 2.

Não avance automaticamente para a Etapa 2.

Não faça commits sem minha autorização explícita.