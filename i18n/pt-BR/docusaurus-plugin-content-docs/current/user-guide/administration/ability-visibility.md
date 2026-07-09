---
title: Visibilidade de Habilidade
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Visibilidade de Habilidade {#ability-visibility}

O Superdav AI Agent v1.12.0 introduz os controles de **Visibilidade de Habilidade** (Ability Visibility), que governam quais interfaces expõem cada habilidade. Isso permite que os administradores ajustem quais capacidades do agente estão disponíveis através de REST APIs, servidores MCP, integrações WooCommerce e outras interfaces.

## O que é Visibilidade de Habilidade? {#what-is-ability-visibility}

Visibilidade de Habilidade é um sistema de permissões que controla:

- **Quais habilidades** estão disponíveis para os agentes
- **Onde elas são expostas** (REST API, MCP, WooCommerce, etc.)
- **Quem pode acessá-las** (via listas de permissão de parceiros)
- **Como elas são classificadas** (reconhecidas vs. não classificadas)

Cada habilidade carrega um nível de visibilidade que determina sua disponibilidade em diferentes interfaces.

## Níveis de Visibilidade {#visibility-levels}

### Público {#public}

**Habilidades Públicas** estão disponíveis em todos os lugares:

- Endpoints da REST API
- Servidores MCP
- Integrações WooCommerce
- Interfaces de Chat
- Todos os papéis de usuário (com permissões apropriadas)

Exemplo: `scaffold-block-theme`, `activate-theme`, `send-email`

### Interno {#internal}

**Habilidades Internas** estão disponíveis apenas dentro da sua instalação WordPress:

- Interfaces de Chat
- Painéis de administração
- Apenas para usuários logados
- Não expostas via REST API ou integrações externas

Exemplo: `manage-settings`, `view-analytics`, `export-data`

### Parceiro {#partner}

**Habilidades de Parceiro** estão disponíveis apenas para parceiros em lista branca:

- Requer entrada explícita na lista de permissão do parceiro
- Disponível via REST API com credenciais de parceiro
- Disponível via MCP com autenticação de parceiro
- Não disponível para usuários comuns

Exemplo: `bulk-import-users`, `modify-billing`, `access-analytics`

### Desativado {#disabled}

**Habilidades Desativadas** não estão disponíveis em lugar nenhum:

- Não expostas por nenhuma interface
- Não disponíveis no chat
- Não disponíveis em painéis de administração
- Útil para habilidades obsoletas ou experimentais

## Gerenciando a Visibilidade de Habilidade {#managing-ability-visibility}

### Acessando as Configurações de Visibilidade de Habilidade {#accessing-ability-visibility-settings}

1. Vá para **Admin do WordPress** → **Superdav AI Agent** → **Settings**
2. Clique na aba **Abilities**
3. Você verá uma lista de todas as habilidades instaladas com seus respectivos níveis de visibilidade

### Visualizando Detalhes da Habilidade {#viewing-ability-details}

Clique em qualquer habilidade para ver:

- **Name**: O identificador da habilidade
- **Description**: O que a habilidade faz
- **Current visibility**: Público, Interno, Parceiro ou Desativado
- **Partner allow-list**: Quais parceiros podem acessar (se for visibilidade de Parceiro)
- **Last updated**: Quando a visibilidade foi alterada pela última vez
- **Status**: Reconhecida ou Não Classificada

### Alterando Níveis de Visibilidade {#changing-visibility-levels}

Para alterar a visibilidade de uma habilidade:

1. Clique na habilidade na lista
2. Selecione um novo nível de visibilidade no menu suspenso
3. Se selecionar "Partner", adicione os identificadores dos parceiros à lista de permissão
4. Clique em **Save**

Exemplo:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Operações em Massa {#bulk-operations}

Para alterar a visibilidade de várias habilidades:

1. Marque as caixas de seleção ao lado das habilidades
2. Selecione um novo nível de visibilidade no menu suspenso de ações em massa
3. Clique em **Apply**

## Lista de Permissão de Parceiros {#partner-allow-list}

A **lista de permissão de parceiros** (partner allow-list) controla quais parceiros externos podem acessar habilidades de nível Parceiro.

### Adicionando Parceiros {#adding-partners}

1. Vá para **Superdav AI Agent** → **Settings** → **Partners**
2. Clique em **Add Partner**
3. Insira o identificador do parceiro (geralmente uma chave API ou ID de organização)
4. Opcionalmente, adicione um nome e descrição do parceiro
5. Clique em **Save**

### Atribuindo Habilidades aos Parceiros {#assigning-abilities-to-partners}

Após adicionar um parceiro:

1. Vá para a aba **Abilities**
2. Encontre uma habilidade com visibilidade de Parceiro
3. Clique para editar
4. Na seção "Partner allow-list", marque as caixas de seleção dos parceiros que devem ter acesso
5. Clique em **Save**

### Revogando Acesso de Parceiro {#revoking-partner-access}

Para remover o acesso de um parceiro:

1. Edite a habilidade
2. Desmarque a caixa do parceiro na lista de permissão
3. Clique em **Save**

O parceiro perderá imediatamente o acesso a essa habilidade.

## Habilidades Não Classificadas {#unclassified-abilities}

Quando você instala uma habilidade de terceiros que o Superdav AI Agent não reconhece, ela é marcada como **Não Classificada** (Unclassified).

### Aviso do Administrador para Habilidades Não Classificadas {#admin-notice-for-unclassified-abilities}

Você verá um aviso do administrador:

```
⚠️ Habilidades Não Classificadas Detectadas

As seguintes habilidades foram instaladas, mas não são reconhecidas:
- custom-import-tool
- external-api-wrapper

Essas habilidades podem apresentar riscos de segurança ou compatibilidade.
Por favor, revise e classifique-as.

[Review Abilities] [Dismiss]
```

### Revisando Habilidades Não Classificadas {#reviewing-unclassified-abilities}

1. Clique em **Review Abilities** no aviso
2. Para cada habilidade não classificada, você verá:
   - Nome e descrição da habilidade
   - Fonte (qual plugin/addon a instalou)
   - Nível de visibilidade sugerido
   - Avaliação de segurança

3. Escolha um nível de visibilidade:
   - **Public**: Confie na habilidade; exponha-a em todos os lugares
   - **Internal**: Restrinja apenas para uso interno
   - **Partner**: Restrinja para parceiros específicos
   - **Disabled**: Não use esta habilidade

4. Clique em **Classify** para salvar sua decisão

### Por que Classificar Habilidades Não Classificadas? {#why-classify-unclassified-abilities}

Classificar habilidades:

- **Melhora a segurança**: Você aprova explicitamente o que está exposto
- **Previne acidentes**: Habilidades não classificadas são desativadas por padrão
- **Permite recursos**: Uma vez classificadas, as habilidades ficam disponíveis
- **Documenta decisões**: Suas escolhas são registradas para fins de auditoria

## Visibilidade em Diferentes Interfaces {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Habilidades Públicas** estão disponíveis via endpoints REST:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Habilidades Internas e de Parceiro** não estão disponíveis via REST API.

### Servidores MCP {#mcp-servers}

**Habilidades Públicas** estão disponíveis via MCP:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**Habilidades Internas** não são expostas via MCP.

**Habilidades de Parceiro** estão disponíveis apenas com credenciais de parceiro.

### Integração WooCommerce {#woocommerce-integration}

**Habilidades Públicas** relacionadas ao WooCommerce estão disponíveis:

- Gerenciamento de produtos
- Processamento de pedidos
- Comunicação com clientes

**Habilidades Internas** não são expostas ao WooCommerce.

### Interface de Chat {#chat-interface}

**Todas as habilidades** (Públicas, Internas, Parceiras) estão disponíveis no chat, dependendo das permissões do usuário:

- Administradores veem todas as habilidades
- Usuários comuns veem apenas habilidades Públicas
- Parceiros veem habilidades Públicas + Parceiras (se estiverem na lista branca)

## Melhores Práticas de Segurança {#security-best-practices}

### Princípio do Menor Privilégio {#principle-of-least-privilege}

- Defina as habilidades para o nível de visibilidade mais restritivo que ainda permita seu uso
- Use visibilidade de Parceiro para operações sensíveis
- Desative as habilidades que você não usa

### Auditorias Regulares {#regular-audits}

- Revise a visibilidade das habilidades mensalmente
- Verifique habilidades não classificadas
- Remova o acesso para parceiros não utilizados

### Registro e Monitoramento {#logging-and-monitoring}

- Monitore quais habilidades são mais usadas
- Acompanhe os padrões de acesso dos parceiros
- Alerte sobre uso incomum de habilidades

### Habilidades de Terceiros {#third-party-abilities}

- Revise as habilidades de terceiros antes de ativar
- Classifique-as explicitamente
- Comece com visibilidade Interna ou de Parceiro
- Promova para Público somente após avaliação

## Solução de Problemas {#troubleshooting}

**Uma habilidade não está aparecendo na lista**
- Verifique se a habilidade está instalada e ativa
- Confirme se o plugin/addon está habilitado
- Atualize a página

**Não consigo alterar a visibilidade de uma habilidade**
- Verifique se você tem permissões de administrador
- Confirme se a habilidade não está bloqueada por um plugin
- Tente desativar plugins conflitantes

**Um parceiro não consegue acessar uma habilidade**
- Verifique se o parceiro está na lista de permissão
- Confirme se a visibilidade da habilidade está definida como Parceiro
- Confirme se as credenciais do parceiro estão corretas
- Verifique os logs da API em busca de erros de autenticação

**Habilidades não classificadas continuam aparecendo**
- Revise e classifique-as no aviso do administrador
- Verifique se sua classificação foi salva
- Confirme se o plugin que fornece a habilidade está atualizado

## Migração do Modo Legado {#migration-from-legacy-mode}

Se você estiver atualizando de uma versão mais antiga do Superdav AI Agent:

- Todas as habilidades existentes são automaticamente classificadas como Públicas
- Revise e ajuste a visibilidade conforme necessário
- Nenhuma ação é necessária, a menos que você queira restringir o acesso

Consulte **Third-Party Mode Migration** para mais detalhes sobre a transição para a integração nativa da API de Habilidades.

## Próximos Passos {#next-steps}

Após configurar a visibilidade das habilidades:

1. **Revise suas habilidades**: Audite todas as habilidades instaladas
2. **Classifique habilidades não classificadas**: Responda aos avisos do administrador
3. **Configure parceiros**: Adicione parceiros se estiver usando visibilidade de Parceiro
4. **Monitore o uso**: Acompanhe quais habilidades são mais usadas
5. **Documente decisões**: Mantenha notas sobre por que você escolheu cada nível de visibilidade
