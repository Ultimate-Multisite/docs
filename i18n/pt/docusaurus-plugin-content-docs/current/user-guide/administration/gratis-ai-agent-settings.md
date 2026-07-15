---
title: Definições do Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Configurações do Gratis AI Agent

O ecrã **Configurações → Avançado** no Gratis AI Agent fornece configuração de nível de administrador para integrações de backend. Esta página documenta o encaminhamento de feedback, chaves de fornecedores de pesquisa, configuração do serviço Superdav gerido, controlos do Google Calendar, definições de SMS TextBee e sinalizadores de funcionalidades em toda a rede.

## Aceder às configurações {#accessing-settings}

1. No administrador do WordPress, vá a **Gratis AI Agent → Configurações**.
2. Clique no separador **Avançado**.

## Configuração do endpoint de feedback {#feedback-endpoint-configuration}

O endpoint de feedback recebe pedidos POST do AI agent sempre que um utilizador envia feedback através do botão de polegar para baixo, do banner de prompt automático ou do comando `/report-issue`.

| Campo | Descrição |
|---|---|
| **URL do endpoint de feedback** | O URL que recebe submissões de feedback como pedidos HTTP POST com um corpo JSON. |
| **Feedback API Key** | Um bearer token enviado no `Authorization` header de cada pedido de feedback. Deixe em branco se o seu endpoint não exigir autenticação. |

### Payload JSON esperado {#expected-json-payload}

O seu endpoint de feedback deve aceitar um corpo JSON com, pelo menos, os seguintes campos:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Podem estar presentes campos adicionais no payload, dependendo do contexto da conversa.

### Valores de `triage_category` {#triagecategory-values}

A camada de triagem de IA atribui um dos seguintes valores a `triage_category` antes de encaminhar o payload:

| Valor | Significado |
|---|---|
| `factual_error` | O assistente forneceu informações factuais incorretas. |
| `unhelpful_answer` | A resposta estava tecnicamente correta, mas não foi útil. |
| `inappropriate_content` | A resposta continha conteúdo que não deve ser mostrado aos utilizadores. |
| `other` | O feedback não correspondia a uma categoria conhecida. |

### Autenticação {#authentication}

Se o seu endpoint exigir autenticação, defina o campo **Feedback API Key** para o seu bearer token. O agent envia:

```
Authorization: Bearer <your-api-key>
```

Se o campo **Feedback API Key** estiver vazio, nenhum `Authorization` header é enviado.

### Desativar a recolha de feedback {#disabling-feedback-collection}

Deixe os campos **URL do endpoint de feedback** e **Feedback API Key** em branco. O botão de polegar para baixo e a interface de feedback permanecem visíveis para os utilizadores, mas as submissões não são encaminhadas para qualquer serviço externo.

## Brave Search API Key {#brave-search-api-key}

Também no separador **Avançado**, o campo **Brave Search API Key** ativa a capacidade [Pesquisa na Internet](../configuration/internet-search).

| Campo | Descrição |
|---|---|
| **Brave Search API Key** | A sua chave de API do dashboard de programador do Brave Search. Necessária para ativar a pesquisa na internet no assistente de IA. |

O rótulo do campo inclui uma ligação clicável para a página de inscrição da API do Brave Search. Deixe em branco para desativar a pesquisa na internet.

Consulte [Pesquisa na Internet](../configuration/internet-search) para documentação do utilizador final sobre esta funcionalidade.

## Serviço Superdav gerido {#managed-superdav-service}

Superdav AI Agent v1.18.0 adiciona endpoints de serviço Superdav gerido e provisionamento automático de ligação para sites suportados. Utilize estes controlos quando o seu site deve ligar-se ao fornecedor alojado em vez de a um endpoint de serviço configurado manualmente.

| Campo | Descrição |
|---|---|
| **Serviço Superdav gerido** | Ativa a ligação ao serviço Superdav alojado para sites suportados. |
| **Provisionar ligação** | Inicia o provisionamento automático de endpoint e credenciais. Utilize isto depois de confirmar que o site deve usar o fornecedor gerido. |
| **Endpoint do serviço / Estado da ligação** | Mostra o endpoint atual ou o estado da ligação após o provisionamento. |

Após o provisionamento, guarde as configurações e verifique o estado da ligação antes de depender de fluxos de trabalho do serviço gerido. Se o provisionamento falhar, reveja a orientação de nova tentativa apresentada e confirme que o site tem permissão para usar o fornecedor alojado.

## Configuração do Google Calendar {#google-calendar-configuration}

Quando as funcionalidades de calendário do Superdav AI Agent v1.18.0 estão ativadas, o agent pode ler calendários configurados e detalhes de eventos. As ferramentas de calendário são orientadas para leitura e são úteis para lembretes sensíveis ao horário, acompanhamento de participantes e correspondência de contactos.

| Campo | Descrição |
|---|---|
| **Credenciais do Google Calendar** | Armazena as credenciais ou a ligação por token necessárias para ler dados de calendário. |
| **Seleção de calendário** | Limita quais calendários configurados o agent pode inspecionar. |
| **Estado da ligação do calendário** | Confirma se as credenciais atuais podem ler calendários e eventos. |

Mantenha as credenciais do calendário limitadas aos calendários de que o agent precisa. Volte a ligar ou rode as credenciais se o estado indicar um token expirado.

## Notificações SMS TextBee {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 adiciona TextBee como fornecedor de SMS para fluxos de trabalho de notificação configurados. As notificações SMS devem ser combinadas com pontos de aprovação humana para mensagens sensíveis ou direcionadas a utilizadores.

| Campo | Descrição |
|---|---|
| **TextBee API Key** | Autentica pedidos ao fornecedor de SMS TextBee. |
| **Dispositivo / remetente TextBee** | Seleciona o remetente ou dispositivo TextBee usado para mensagens enviadas, quando exigido pelo fornecedor. |
| **Notificações SMS ativadas** | Permite que fluxos de trabalho aprovados enviem notificações por mensagem de texto. Deixe desativado para impedir envios de SMS. |

Envie uma mensagem de teste apenas para um número pertencente a um administrador e, em seguida, confirme o comportamento dos pontos de aprovação antes de ativar lembretes agendados ou direcionados a participantes.

## Sinalizadores de funcionalidades {#feature-flags}

Também introduzido na v1.9.0, o separador **Configurações → Sinalizadores de funcionalidades** fornece interruptores para funcionalidades opcionais. Cada sinalizador está ativado ou desativado em toda a rede; neste momento, não existe substituição por site.

### Aceder aos sinalizadores de funcionalidades {#accessing-feature-flags}

1. No administrador do WordPress, vá a **Gratis AI Agent → Configurações**.
2. Clique no separador **Sinalizadores de funcionalidades**.

### Sinalizadores de controlo de acesso {#access-control-flags}

| Sinalizador | Predefinição | Descrição |
|---|---|---|
| **Restringir a Administradores** | Desativado | Quando ativado, apenas utilizadores com a função `administrator` podem abrir o painel de chat do AI Agent. Todas as outras funções veem uma mensagem "Contacte o seu administrador". |
| **Restringir a Network Admins** | Desativado | Quando ativado numa rede multisite, apenas Super Admins podem usar o agent. Administradores de sites individuais são bloqueados. Tem precedência sobre "Restringir a Administradores" se ambos estiverem ativados. |
| **Permitir Acesso a Subscritores** | Desativado | Quando ativado, utilizadores com a função `subscriber` podem usar a interface de chat, mas ficam limitados a capacidades apenas de leitura (sem criação de publicações ou alterações de definições). |
| **Desativar para Não Membros** | Desativado | Integra-se com o estado de membership do Ultimate Multisite. Quando ativado, o chat fica oculto para sites que não têm uma membership ativa. |

### Sinalizadores de Branding {#branding-flags}

| Sinalizador | Predefinição | Descrição |
|---|---|---|
| **Ocultar Rodapé "Powered by Gratis AI Agent"** | Desativado | Remove a linha de atribuição de branding mostrada no fundo do widget de chat. Recomendado para implementações white-label. |
| **Nome de Agent Personalizado** | *(em branco)* | Substitui a etiqueta predefinida "Gratis AI Agent" no cabeçalho do chat e no menu de administração pelo nome do seu próprio produto. Deixe em branco para usar a predefinição. |
| **Ocultar Seletor de Agent** | Desativado | Quando ativado, os utilizadores não podem alternar entre os cinco agents incorporados. O agent atual fica fixo ao que estiver configurado como predefinição em Settings → General. |
| **Usar Ícone do Site como Avatar do Chat** | Desativado | Substitui o ícone de AI predefinido no cabeçalho do widget de chat pelo ícone do site WordPress (definido em Appearance → Customize → Site Identity). |

### Sinalizadores de Segurança da Automatização {#automation-safety-flags}

Superdav AI Agent v1.18.0 introduz etapas de aprovação humana e registos de lembretes para execuções de automatização mais seguras. Estes controlos podem aparecer nos sinalizadores de funcionalidades ou nas definições avançadas de automatização, dependendo do pacote instalado.

| Sinalizador | Predefinição | Descrição |
|---|---|---|
| **Exigir Aprovação Humana** | Recomendado ativado | Pausa automatizações sensíveis até que um utilizador autorizado reveja e confirme a ação proposta. |
| **Desduplicação de Lembretes** | Ativado | Regista lembretes enviados para que novas tentativas ou execuções agendadas não enviem notificações duplicadas. |
| **Ativar Ferramentas de Calendário** | Desativado até ser configurado | Permite que o agent leia calendários e eventos do Google configurados. |
| **Ativar Notificações por SMS** | Desativado até ser configurado | Permite que fluxos de trabalho aprovados enviem notificações SMS TextBee depois de as credenciais serem guardadas. |

### Aplicar Alterações {#applying-changes}

Clique em **Guardar Definições** depois de alternar qualquer sinalizador. As alterações entram em vigor imediatamente — não é necessário limpar a cache nem reativar o plugin.
