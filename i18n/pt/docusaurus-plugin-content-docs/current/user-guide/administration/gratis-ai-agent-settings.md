---
title: Configurações do Agente de IA Gratuito
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Configurações Gratuitas do Agente de IA

A tela **Configurações → Avançado** no Gratis AI Agent oferece configurações de nível de administrador para as integrações de backend introduzidas na versão v1.5.0. Esta página documenta os campos do **Feedback Endpoint** e seus formatos esperados.

## Acessando as Configurações

1. No painel de administração do WordPress, vá para **Gratis AI Agent → Configurações**.
2. Clique na aba **Avançado**.

## Configuração do Feedback Endpoint

O feedback endpoint recebe requisições POST do agente de IA sempre que um usuário envia feedback através do botão de polegar para baixo (thumbs-down), da faixa de auto-prompt ou do comando `/report-issue`.

| Campo | Descrição |
|---|---|
| **Feedback Endpoint URL** | A URL que recebe os envios de feedback como requisições HTTP POST com um corpo JSON. |
| **Feedback API Key** | Um token bearer enviado no cabeçalho `Authorization` de cada solicitação de feedback. Deixe em branco se o seu endpoint não exigir autenticação. |

### Payload JSON Esperado

Seu feedback endpoint deve aceitar um corpo JSON com pelo menos os seguintes campos:

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

A camada de triagem da IA atribui um dos seguintes valores a `triage_category` antes de encaminhar o payload:

| Valor | Significado |
|---|---|
| `factual_error` | O assistente forneceu informações factuais incorretas. |
| `unhelpful_answer` | A resposta estava tecnicamente correta, mas não foi útil. |
| `inappropriate_content` | A resposta continha conteúdo que não deve ser mostrado aos usuários. |
| `other` | O feedback não corresponde a uma categoria conhecida. |

### Autenticação

Se o seu endpoint exigir autenticação, defina o campo **Feedback API Key** com o seu bearer token. O agente enviará:

```
Authorization: Bearer <sua-api-key>
```

Se o campo **Feedback API Key** estiver vazio, nenhum cabeçalho `Authorization` será enviado.

### Desabilitando a Coleta de Feedback

Deixe os campos **Feedback Endpoint URL** e **Feedback API Key** em branco. O botão de polegar para baixo e a interface de feedback permanecem visíveis aos usuários, mas os envios não são encaminhados a nenhum serviço externo.

## Chave da Brave Search API

Também na aba **Avançado**, o campo **Brave Search API Key** habilita a funcionalidade de [Busca na Internet](../configuration/internet-search).

| Campo | Descrição |
|---|---|
| **Brave Search API Key** | Sua chave de API do painel de desenvolvedor da Brave Search. Necessária para habilitar a busca na internet no assistente de IA. |

O rótulo do campo inclui um link clicável para a página de inscrição da API da Brave Search. Deixe em branco para desabilitar a busca na internet.

Veja [Busca na Internet](../configuration/internet-search) para a documentação do usuário final sobre este recurso.

## Feature Flags (Bandeiras de Recurso)

Também introduzido na v1.9.0, a aba **Configurações → Feature Flags** fornece interruptores para funcionalidades opcionais. Cada flag está habilitada ou desabilitada em toda a rede; no momento, não há sobrescrita por site.

### Acessando as Feature Flags

1. No painel de administração do WordPress, vá para **Gratis AI Agent → Configurações**.
2. Clique na aba **Feature Flags**.

### Flags de Controle de Acesso

| Flag | Padrão | Descrição |
|---|---|---|
| **Restringir a Administradores** | Desligado | Quando ativado, apenas usuários com o papel `administrator` podem abrir o painel de chat do Agente de IA. Outros papéis verão uma mensagem de "Entre em contato com seu administrador". |
| **Restringir a Administradores da Rede** | Desligado | Quando ativado em uma rede multisite, apenas Super Administradores podem usar o agente. Administradores de sites individuais são bloqueados. Tem precedência sobre "Restringir a Administradores" se ambos estiverem ativos. |
| **Permitir Acesso de Assinantes** | Desligado | Quando ativado, usuários com o papel `subscriber` podem usar a interface de chat, mas estão limitados a capacidades de leitura (sem criação de posts ou alterações nas configurações). |
| **Desabilitar para Não-Membros** | Desligado | Integra-se ao status de associação do Ultimate Multisite. Quando ativado, o chat fica oculto para sites que não possuem uma assinatura ativa. |

### Bandeiras de Marca (Branding Flags)

| Flag | Padrão | Descrição |
|---|---|---|
| **Ocultar Rodapé "Powered by Gratis AI Agent"** | Desligado | Remove a linha de atribuição de marca mostrada na parte inferior do widget de chat. Recomendado para implementações white-label (marca própria). |
| **Nome Personalizado do Agente** | *(vazio)* | Substitui o rótulo padrão "Gratis AI Agent" no cabeçalho do chat e no menu de administração pelo seu nome de produto. Deixe em branco para usar o padrão. |
| **Ocultar Seletor de Agentes** | Desligado | Quando ativado, os usuários não podem alternar entre os cinco agentes integrados. O agente atual é fixo no que estiver configurado como padrão em Configurações → Geral. |
| **Usar Ícone do Site como Avatar do Chat** | Desligado | Substitui o ícone de IA padrão no cabeçalho do widget de chat pelo ícone do site WordPress (definido em Aparência → Personalizar → Identidade do Site). |

### Aplicando Alterações

Clique em **Salvar Configurações** após alternar qualquer bandeira. As alterações entram em vigor imediatamente — não é necessário limpar o cache ou reagir ao plugin.
