---
title: Visibilidade da Capacidade
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Visibilidade de Habilidade

O Superdav AI Agent v1.12.0 introduz os controles **Visibilidade de Habilidade** que definem quais superfícies expõem cada habilidade. Isso permite que os administradores ajustem com precisão quais capacidades do agente estão disponíveis através de REST APIs, servidores MCP, integrações WooCommerce e outras interfaces.

## O que é Visibilidade de Habilidade? {#what-is-ability-visibility}

A Visibilidade de Habilidade é um sistema de permissões que controla:

- **Quais habilidades** estão disponíveis para os agentes
- **Onde elas são expostas** (REST API, MCP, WooCommerce, etc.)
- **Quem pode acessá-las** (via listas de permissão de parceiros)
- **Como elas são classificadas** (reconhecidas vs. não classificadas)

Cada habilidade carrega um nível de visibilidade que determina sua disponibilidade em diferentes superfícies.

## Níveis de Visibilidade {#visibility-levels}

### Público {#public}

As **habilidades públicas** estão disponíveis em todos os lugares:

- Endpoints da REST API
- Servidores MCP
- Integrações WooCommerce
- Interfaces de chat
- Todos os papéis de usuário (com permissões apropriadas)

Exemplo: `scaffold-block-theme`, `activate-theme`, `send-email`

### Interno {#internal}

As **habilidades internas** estão disponíveis apenas dentro da sua instalação do WordPress:

- Interfaces de chat
- Painéis de administração
- Apenas usuários logados
- Não expostas via REST API ou integrações externas

Exemplo: `manage-settings`, `view-analytics`, `export-data`

### Parceiro {#partner}

As **habilidades parceiras** estão disponíveis apenas para parceiros na lista branca (whitelisted):

- Requer entrada explícita na lista de permissões do parceiro
- Disponível via REST API com credenciais de parceiro
- Disponível via MCP com autenticação de parceiro
- Não disponível para usuários regulares

Exemplo: `bulk-import-users`, `modify-billing`, `access-analytics`

### Desabilitado {#disabled}

As **habilidades desabilitadas** não estão disponíveis em lugar nenhum:

- Não expostas por nenhuma superfície
- Não disponíveis no chat
- Não disponíveis nos painéis de administração
- Útil para habilidades obsoletas ou experimentais

## Gerenciando a Visibilidade das Habilidades {#managing-ability-visibility}

### Acessando as Configurações de Visibilidade das Habilidades {#accessing-ability-visibility-settings}

1. Vá para **WordPress Admin** → **Superdav AI Agent** → **Settings** (Configurações)
2. Clique na aba **Abilities** (Habilidades)
3. Você verá uma lista de todas as habilidades instaladas com seus respectivos níveis de visibilidade.

### Visualizando Detalhes da Habilidade {#viewing-ability-details}

Clique em qualquer habilidade para ver:

- **Name** (Nome): O identificador da habilidade.
- **Description** (Descrição): O que a habilidade faz.
- **Current visibility** (Visibilidade atual): Público, Interno, Parceiro ou Desabilitado.
- **Partner allow-list** (Lista de permissões de parceiros): Quais parceiros podem acessar (se for visibilidade de Parceiro).
- **Last updated** (Última atualização): Quando a visibilidade foi alterada pela última vez.
- **Status**: Reconhecida ou Não Classificada.

### Alterando os Níveis de Visibilidade {#changing-visibility-levels}

Para mudar a visibilidade de uma habilidade:

1. Clique na habilidade na lista.
2. Selecione um novo nível de visibilidade no menu suspenso (dropdown).
3. Se selecionar "Partner" (Parceiro), adicione os identificadores dos parceiros à lista de permissões (allow-list).
4. Clique em **Save** (Salvar).

Exemplo:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Operações em Massa (Bulk Operations) {#bulk-operations}

Para mudar a visibilidade de várias habilidades:

1. Marque as caixas ao lado das habilidades que deseja alterar.
2. Selecione um novo nível de visibilidade no menu suspenso de ação em massa.
3. Clique em **Apply** (Aplicar).

## Lista de Permissões de Parceiros (Partner Allow-List) {#partner-allow-list}

A **lista de permissões de parceiros** controla quais parceiros externos podem acessar habilidades com nível de Visibilidade de Parceiro.

### Adicionando Parceiros {#adding-partners}

1. Vá para **Superdav AI Agent** → **Settings** (Configurações) → **Partners** (Parceiros).
2. Clique em **Add Partner** (Adicionar Parceiro).
3. Insira o identificador do parceiro (geralmente uma chave de API ou ID da organização).
4. Opcionalmente, adicione um nome e uma descrição do parceiro.
5. Clique em **Save** (Salvar).

### Atribuindo Habilidades aos Parceiros {#assigning-abilities-to-partners}

Após adicionar um parceiro:

1. Vá para a aba **Abilities** (Habilidades)
2. Encontre uma habilidade com visibilidade de Parceiro (Partner visibility)
3. Clique para editar
4. Na seção "Partner allow-list" (Lista de permissões de parceiros), marque as caixas dos parceiros que devem ter acesso
5. Clique em **Salvar**

### Revogando Acesso do Parceiro {#revoking-partner-access}

Para remover o acesso de um parceiro:

1. Edite a habilidade
2. Desmarque a caixa do parceiro na lista de permissões (allow-list)
3. Clique em **Salvar**

O parceiro perderá imediatamente o acesso a essa habilidade.

## Habilidades Não Classificadas (Unclassified Abilities) {#unclassified-abilities}

Quando você instala uma habilidade de terceiros que o Superdav AI Agent não reconhece, ela é marcada como **Não Classificada** (Unclassified).

### Aviso do Administrador para Habilidades Não Classificadas {#admin-notice-for-unclassified-abilities}

Você verá um aviso do administrador:

```
⚠️ Habilidades Não Classificadas Detectadas

As seguintes habilidades foram instaladas, mas não são reconhecidas:
- custom-import-tool
- external-api-wrapper

Essas habilidades podem representar riscos de segurança ou compatibilidade.
Por favor, revise e classifique-as.

[Revisar Habilidades] [Descartar]
```

### Revisando Habilidades Não Classificadas {#reviewing-unclassified-abilities}

1. Clique em **Review Abilities** (Revisar Habilidades) no aviso
2. Para cada habilidade não classificada, você verá:
   - Nome e descrição da habilidade
   - Fonte (qual plugin/addon a instalou)
   - Nível de visibilidade sugerido
   - Avaliação de segurança

3. Escolha um nível de visibilidade:
   - **Public** (Público): Confie na habilidade; exponha em todos os lugares
   - **Internal** (Interno): Restrinja ao uso interno apenas
   - **Partner** (Parceiro): Restrinja a parceiros específicos
   - **Disabled** (Desabilitado): Não use esta habilidade

4. Clique em **Classify** (Classificar) para salvar sua decisão

### Por que Classificar Habilidades Não Classificadas? {#why-classify-unclassified-abilities}

Classificar habilidades:

- **Melhora a segurança**: Você aprova explicitamente o que será exposto
- **Evita acidentes**: Habilidades não classificadas são desabilitadas por padrão
- **Habilita recursos**: Uma vez classificadas, a habilidade se torna disponível
- **Documenta decisões**: Suas escolhas são registradas para fins de auditoria

## Visibilidade em Diferentes Superfícies {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Habilidades públicas** estão disponíveis através dos endpoints REST:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Habilidades internas e de parceiros** não estão disponíveis via REST API.

### Servidores MCP {#mcp-servers}

**Habilidades públicas** estão disponíveis via MCP:

```
Servidor MCP: Superdav AI Agent
Habilidades disponíveis:
- scaffold-block-theme
- activate-theme
- send-email
```

**Habilidades internas** não são expostas via MCP.

**Habilidades de parceiros** só estão disponíveis com credenciais de parceiro.

### Integração WooCommerce {#woocommerce-integration}

**Habilidades públicas** relacionadas ao WooCommerce estão disponíveis:

- Gerenciamento de produtos
- Processamento de pedidos
- Comunicação com o cliente

**Habilidades internas** não são expostas ao WooCommerce.

### Interface de Chat {#chat-interface}

**Todas as habilidades** (Públicas, Internas, de Parceiros) estão disponíveis no chat, dependendo das permissões do usuário:

- Administradores veem todas as habilidades
- Usuários regulares veem apenas habilidades Públicas
- Parceiros veem Habilidades Públicas + de Parceiros (se estiverem na lista branca/whitelist)

## Melhores Práticas de Segurança {#security-best-practices}

### Princípio do Menor Privilégio {#principle-of-least-privilege}

- Defina as habilidades com a visibilidade mais restritiva que ainda permita o uso delas.
- Use a visibilidade de Parceiro para operações sensíveis.
- Desative as habilidades que você não usa.

### Auditorias Regulares {#regular-audits}

- Revise a visibilidade das habilidades mensalmente.
- Verifique se há habilidades não classificadas.
- Remova o acesso de parceiros não utilizados.

### Logs e Monitoramento {#logging-and-monitoring}

- Monitore quais habilidades são usadas com mais frequência.
- Rastreie os padrões de acesso dos parceiros.
- Alerte sobre o uso incomum das habilidades.

### Habilidades de Terceiros {#third-party-abilities}

- Revise as habilidades de terceiros antes de habilitá-las.
- Classifique-as explicitamente.
- Comece com a visibilidade Interna ou de Parceiro.
- Promova para Pública somente após a verificação (vetting).

## Solução de Problemas {#troubleshooting}

**Uma habilidade não está aparecendo na lista**
- Verifique se a habilidade está instalada e ativa
- Confirme se o plugin/addon está habilitado
- Atualize a página

**Não consigo mudar a visibilidade de uma habilidade**
- Verifique se você tem permissões de administrador
- Verifique se a habilidade não está bloqueada por algum plugin
- Tente desabilitar plugins conflitantes

**Um parceiro não consegue acessar uma habilidade**
- Verifique se o parceiro está na lista de permissão (allow-list)
- Confirme se a visibilidade da habilidade está definida como Parceiro (Partner)
- Confirme se as credenciais do parceiro estão corretas
- Verifique os logs da API em busca de erros de autenticação

**Habilidades não classificadas continuam aparecendo**
- Revise e classifique-as nas notificações do admin
- Verifique se a sua classificação foi salva
- Verifique se o plugin que fornece a habilidade está atualizado
