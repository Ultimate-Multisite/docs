---
title: Configurações do Agente de IA Gratuito
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Configurações do Agente AI Gratis

A tela **Configurações → Avançado** do Gratis AI Agent fornece configurações de nível administrador para integrações de backend introduzidas na v1.5.0. Esta página documenta os campos do **Endpoint de Feedback** e o formato esperado para eles.

## Acessando as Configurações

1. No painel de administração do WordPress, vá para **Gratis AI Agent → Configurações**.
2. Clique na aba **Avançado**.

## Configuração do Endpoint de Feedback

O endpoint de feedback recebe requisições POST do agente AI sempre que um usuário envia um feedback através do botão de polegar para baixo, do banner de prompt automático ou do comando `/report-issue`.

| Campo | Descrição |
|---|---|
| **Feedback Endpoint URL** | A URL que recebe os envios de feedback como requisições HTTP POST com um corpo JSON. |
| **Feedback API Key** | Um bearer token enviado no cabeçalho `Authorization` de cada requisição de feedback. Deixe em branco se o seu endpoint não exigir autenticação. |

### Payload JSON Esperado

Seu endpoint de feedback deve aceitar um corpo JSON com pelo menos os seguintes campos:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "A resposta estava incorreta sobre preços.",
  "triage_category": "factual_error"
}
```

Campos adicionais podem estar presentes no payload dependendo do contexto da conversa.

### Valores de `triage_category`

A camada de triagem AI atribui um dos seguintes valores a `triage_category` antes de encaminhar o payload:

| Valor | Significado |
|---|---|
| `factual_error` | O assistente forneceu informações factuais incorretas. |
| `unhelpful_answer` | A resposta estava tecnicamente correta, mas não foi útil. |
| `inappropriate_content` | A resposta continha conteúdo que não deveria ser mostrado aos usuários. |
| `other` | O feedback não correspondeu a uma categoria conhecida. |

### Autenticação

Se o seu endpoint exigir autenticação, defina o campo **Feedback API Key** com o seu bearer token. O agente envia:

```
Authorization: Bearer <sua-api-key>
```

Se o campo **Feedback API Key** estiver vazio, nenhum cabeçalho `Authorization` é enviado.

### Desabilitando a Coleta de Feedback

Deixe os campos **Feedback Endpoint URL** e **Feedback API Key** em branco. O botão de polegar para baixo e a interface de feedback permanecem visíveis para os usuários, mas os envios não são encaminhados para nenhum serviço externo.

## Chave API do Brave Search

Também na aba **Avançado**, o campo **Brave Search API Key** habilita a capacidade de [Pesquisa na Internet](../configuration/internet-search).

| Campo | Descrição |
|---|---|
| **Brave Search API Key** | Sua chave API do painel de desenvolvedor Brave Search. É obrigatório para habilitar a pesquisa na internet no assistente AI. |

O rótulo do campo inclui um link clicável para a página de cadastro da Brave Search API. Deixe em branco para desabilitar a pesquisa na internet.

Consulte [Pesquisa na Internet](../configuration/internet-search) para a documentação do usuário final sobre este recurso.

## Feature Flags (Flags de Funcionalidade)

Também introduzido na v1.9.0, a aba **Configurações → Feature Flags** fornece chaves de alternância (toggle switches) para funcionalidades opcionais. Cada flag é ativada ou desativada em nível de rede; não há substituição por site neste momento.

### Acessando as Feature Flags

1. No painel de administração do WordPress, vá para **Gratis AI Agent → Configurações**.
2. Clique na aba **Feature Flags**.

### Flags de Controle de Acesso

| Flag | Padrão | Descrição |
|---|---|---|
| **Restrict to Administrators** | Desligado | Quando ativado, apenas usuários com o papel `administrator` podem abrir o painel de chat do AI Agent. Todos os outros papéis verão a mensagem "Contate seu administrador". |
| **Restrict to Network Admins** | Desligado | Quando ativado em uma rede multisite, apenas Super Admins podem usar o agente. Administradores de sites individuais são bloqueados. Tem precedência sobre "Restrict to Administrators" se ambos estiverem ativados. |
| **Allow Subscriber Access** | Desligado | Quando ativado, usuários com o papel `subscriber` podem usar a interface de chat, mas estão limitados a capacidades de somente leitura (sem criação de posts ou alterações de configurações). |
| **Disable for Non-Members** | Desligado | Integra-se com o status de membros do Ultimate Multisite. Quando ativado, o chat é ocultado para sites que não possuem uma associação ativa. |

### Flags de Branding

| Flag | Padrão | Descrição |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Desligado | Remove a linha de atribuição de marca exibida na parte inferior do widget de chat. Recomendado para implantações white-label. |
| **Custom Agent Name** | *(em branco)* | Substitui o rótulo padrão "Gratis AI Agent" no cabeçalho do chat e no menu de administração pelo nome do seu produto. Deixe em branco para usar o padrão. |
| **Hide Agent Picker** | Desligado | Quando ativado, os usuários não podem alternar entre os cinco agentes embutidos. O agente atual fica fixado no que for configurado como padrão em Configurações → Geral. |
| **Use Site Icon as Chat Avatar** | Desligado | Substitui o ícone AI padrão no cabeçalho do widget de chat pelo ícone do site WordPress (definido em Aparência → Personalizar → Identidade do Site). |

### Aplicando Alterações

Clique em **Save Settings** após alternar qualquer flag. As alterações entram em vigor imediatamente — não é necessário limpar o cache ou reativar o plugin.
