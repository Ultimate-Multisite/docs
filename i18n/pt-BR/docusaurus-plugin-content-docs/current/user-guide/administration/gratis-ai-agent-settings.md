---
title: Configurações do Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Configurações do Gratis AI Agent {#gratis-ai-agent-settings}

A tela **Configurações → Avançado** no Gratis AI Agent fornece configuração em nível de administrador para integrações de backend. Esta página documenta encaminhamento de feedback, chaves de provedores de pesquisa, configuração do serviço gerenciado Superdav, controles do Google Calendar, configurações de SMS do TextBee e sinalizadores de recursos em toda a rede.

## Acessando as configurações {#accessing-settings}

1. No admin do WordPress, vá para **Gratis AI Agent → Configurações**.
2. Clique na aba **Avançado**.

## Configuração do ponto de extremidade de feedback {#feedback-endpoint-configuration}

O ponto de extremidade de feedback recebe solicitações POST do AI agent sempre que um usuário envia feedback pelo botão de polegar para baixo, pelo banner de aviso automático ou pelo comando `/report-issue`.

| Campo | Descrição |
|---|---|
| **URL do ponto de extremidade de feedback** | A URL que recebe envios de feedback como solicitações HTTP POST com um corpo JSON. |
| **Feedback API Key** | Um bearer token enviado no `Authorization` header de cada solicitação de feedback. Deixe em branco se seu ponto de extremidade não exigir autenticação. |

### Payload JSON esperado {#expected-json-payload}

Seu ponto de extremidade de feedback deve aceitar um corpo JSON com pelo menos os seguintes campos:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Campos adicionais podem estar presentes no payload dependendo do contexto da conversa.

### Valores de `triage_category` {#triagecategory-values}

A camada de triagem de IA atribui um dos seguintes valores a `triage_category` antes de encaminhar o payload:

| Valor | Significado |
|---|---|
| `factual_error` | O assistente forneceu informações factuais incorretas. |
| `unhelpful_answer` | A resposta estava tecnicamente correta, mas não foi útil. |
| `inappropriate_content` | A resposta continha conteúdo que não deve ser mostrado aos usuários. |
| `other` | O feedback não correspondeu a uma categoria conhecida. |

### Autenticação {#authentication}

Se seu ponto de extremidade exigir autenticação, defina o campo **Feedback API Key** como seu bearer token. O agente envia:

```
Authorization: Bearer <your-api-key>
```

Se o campo **Feedback API Key** estiver vazio, nenhum `Authorization` header será enviado.

### Desativando a coleta de feedback {#disabling-feedback-collection}

Deixe os campos **URL do ponto de extremidade de feedback** e **Feedback API Key** em branco. O botão de polegar para baixo e a interface de feedback permanecem visíveis para os usuários, mas os envios não são encaminhados para nenhum serviço externo.

## Brave Search API Key {#brave-search-api-key}

Também na aba **Avançado**, o campo **Brave Search API Key** habilita o recurso [Pesquisa na internet](../configuration/internet-search).

| Campo | Descrição |
|---|---|
| **Brave Search API Key** | Sua chave de API do Dashboard de desenvolvedor do Brave Search. Obrigatória para habilitar a pesquisa na internet no assistente de IA. |

O rótulo do campo inclui um link clicável para a página de cadastro da API do Brave Search. Deixe em branco para desativar a pesquisa na internet.

Consulte [Pesquisa na internet](../configuration/internet-search) para ver a documentação de usuário final sobre este recurso.

## Serviço gerenciado Superdav {#managed-superdav-service}

Superdav AI Agent v1.18.0 adiciona pontos de extremidade de serviço gerenciado Superdav e provisionamento automático de conexão para sites compatíveis. Use estes controles quando seu site deve se conectar ao provedor hospedado em vez de a um ponto de extremidade de serviço configurado manualmente.

| Campo | Descrição |
|---|---|
| **Serviço gerenciado Superdav** | Habilita a conexão com o serviço Superdav hospedado para sites compatíveis. |
| **Provisionar conexão** | Inicia o provisionamento automático de ponto de extremidade e credenciais. Use isto depois de confirmar que o site deve usar o provedor gerenciado. |
| **Ponto de extremidade do serviço / Status da conexão** | Mostra o ponto de extremidade ou o estado de conexão atual após o provisionamento. |

Após o provisionamento, salve as configurações e verifique o status da conexão antes de depender de fluxos de trabalho de serviço gerenciado. Se o provisionamento falhar, revise a orientação de nova tentativa exibida e confirme que o site tem permissão para usar o provedor hospedado.

## Configuração do Google Calendar {#google-calendar-configuration}

Quando os recursos de calendário do Superdav AI Agent v1.18.0 estão habilitados, o agente pode ler calendários configurados e detalhes de eventos. As ferramentas de calendário são orientadas à leitura e são úteis para lembretes cientes da agenda, acompanhamento de participantes e correspondência de contatos.

| Campo | Descrição |
|---|---|
| **Credenciais do Google Calendar** | Armazena as credenciais ou a conexão de token necessárias para ler dados de calendário. |
| **Seleção de calendário** | Limita quais calendários configurados o agente pode inspecionar. |
| **Status da conexão do calendário** | Confirma se as credenciais atuais podem ler calendários e eventos. |

Mantenha as credenciais de calendário limitadas aos calendários de que o agente precisa. Reconecte ou alterne as credenciais se o status indicar um token expirado.

## Notificações por SMS do TextBee {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 adiciona TextBee como provedor de SMS para fluxos de trabalho de notificação configurados. Notificações por SMS devem ser combinadas com etapas de aprovação humana para mensagens sensíveis ou voltadas ao usuário.

| Campo | Descrição |
|---|---|
| **Chave de API do TextBee** | Autentica solicitações ao provedor de SMS TextBee. |
| **Dispositivo / Remetente do TextBee** | Seleciona o remetente ou dispositivo TextBee usado para mensagens enviadas, quando exigido pelo provedor. |
| **Notificações por SMS habilitadas** | Permite que fluxos de trabalho aprovados enviem notificações por mensagem de texto. Deixe desabilitado para impedir envios de SMS. |

Envie uma mensagem de teste apenas para um número pertencente a um administrador e, em seguida, confirme o comportamento das etapas de aprovação antes de habilitar lembretes agendados ou voltados a participantes.

## Sinalizadores de recursos {#feature-flags}

Também introduzida na v1.9.0, a aba **Configurações → Sinalizadores de recursos** fornece alternadores para funcionalidades opcionais. Cada sinalizador fica habilitado ou desabilitado em toda a rede; não há substituição por site neste momento.

### Acessando os sinalizadores de recursos {#accessing-feature-flags}

1. No admin do WordPress, vá para **Gratis AI Agent → Configurações**.
2. Clique na aba **Sinalizadores de recursos**.

### Sinalizadores de controle de acesso {#access-control-flags}

| Sinalizador | Padrão | Descrição |
|---|---|---|
| **Restringir a administradores** | Desativado | Quando ativado, apenas usuários com a função `administrator` podem abrir o painel de chat do AI Agent. Todas as outras funções veem uma mensagem "Entre em contato com seu administrador". |
| **Restringir a Network Admins** | Desativado | Quando ativado em uma rede multisite, apenas Super Admins podem usar o agent. Administradores de sites individuais são bloqueados. Tem precedência sobre "Restringir a administradores" se ambos estiverem ativados. |
| **Permitir acesso de Subscriber** | Desativado | Quando ativado, usuários com a função `subscriber` podem usar a interface de chat, mas ficam limitados a recursos somente leitura (sem criação de posts ou alterações de configurações). |
| **Desativar para não membros** | Desativado | Integra-se ao status de membership do Ultimate Multisite. Quando ativado, o chat fica oculto para sites que não têm uma membership ativa. |

### Sinalizadores de branding {#branding-flags}

| Sinalizador | Padrão | Descrição |
|---|---|---|
| **Ocultar rodapé "Powered by Gratis AI Agent"** | Desativado | Remove a linha de atribuição de branding exibida na parte inferior do widget de chat. Recomendado para implantações white-label. |
| **Nome personalizado do agent** | *(em branco)* | Substitui o rótulo padrão "Gratis AI Agent" no cabeçalho do chat e no menu de administração pelo seu próprio nome de produto. Deixe em branco para usar o padrão. |
| **Ocultar seletor de agent** | Desativado | Quando ativado, os usuários não podem alternar entre os cinco agents integrados. O agent atual fica fixo no que estiver configurado como padrão em Settings → General. |
| **Usar ícone do site como avatar do chat** | Desativado | Substitui o ícone padrão de AI no cabeçalho do widget de chat pelo ícone do site WordPress (definido em Appearance → Customize → Site Identity). |

### Sinalizadores de segurança de automação {#automation-safety-flags}

Superdav AI Agent v1.18.0 introduz etapas de aprovação humana e registros de lembretes para execuções de automação mais seguras. Esses controles podem aparecer nos sinalizadores de recurso ou nas configurações avançadas de automação, dependendo do pacote instalado.

| Sinalizador | Padrão | Descrição |
|---|---|---|
| **Exigir aprovação humana** | Recomendado ativado | Pausa automações sensíveis até que um usuário autorizado revise e confirme a ação proposta. |
| **Deduplicação de lembretes** | Ativado | Registra lembretes enviados para que novas tentativas ou execuções agendadas não enviem notificações duplicadas. |
| **Ativar ferramentas de calendário** | Desativado até ser configurado | Permite que o agent leia calendários e eventos do Google configurados. |
| **Ativar notificações por SMS** | Desativado até ser configurado | Permite que fluxos de trabalho aprovados enviem notificações por SMS do TextBee depois que as credenciais forem salvas. |

### Aplicando alterações {#applying-changes}

Clique em **Salvar configurações** depois de alternar qualquer sinalizador. As alterações entram em vigor imediatamente — não é necessário limpar cache nem reativar o plugin.
