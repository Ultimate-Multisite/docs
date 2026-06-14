---
title: Configuración de Agente IA gratis
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Configuración Gratuita del Agente de IA

La pantalla **Configuración → Avanzado** en Gratis AI Agent te da la configuración de nivel administrador para las integraciones del backend introducidas en v1.5.0. Esta página documenta los campos del **Feedback Endpoint** y su formato esperado.

## Acceso a la Configuración

1. En el panel de administración de WordPress, ve a **Gratis AI Agent → Configuración**.
2. Haz clic en la pestaña **Avanzado**.

## Configuración del Feedback Endpoint

El feedback endpoint recibe peticiones POST del agente de IA cada vez que un usuario envía comentarios a través del botón de pulgar hacia abajo (thumbs-down), el banner de autocompletado o el comando `/report-issue`.

| Campo | Descripción |
|---|---|
| **Feedback Endpoint URL** | La URL que recibe los envíos de feedback como peticiones HTTP POST con un cuerpo JSON. |
| **Feedback API Key** | Un token de portador (bearer token) enviado en la cabecera `Authorization` de cada solicitud de feedback. Déjalo en blanco si tu endpoint no requiere autenticación. |

### Carga Útil Esperada (JSON Payload)

Tu feedback endpoint debe aceptar un cuerpo JSON con al menos los siguientes campos:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "La respuesta fue incorrecta sobre la precios.",
  "triage_category": "factual_error"
}
```

Pueden estar presentes campos adicionales en la carga útil dependiendo del contexto de la conversación.

### Valores de `triage_category`

La capa de triaje de IA asigna uno de los siguientes valores a `triage_category` antes de reenviar la carga útil:

| Valor | Significado |
|---|---|
| `factual_error` | El asistente proporcionó información fáctica incorrecta. |
| `unhelpful_answer` | La respuesta era técnicamente correcta pero no útil. |
| `inappropriate_content` | La respuesta contenía contenido que no debe mostrarse a los usuarios. |
| `other` | El feedback no coincidió con una categoría conocida. |

### Autenticación

Se o seu endpoint requere authentication, ponha a **Feedback API Key** no seu bearer token. O agente envia:

```
Authorization: Bearer <sua-api-key>
```

Se o campo **Feedback API Key** estiver vazio, nenhum cabeçalho `Authorization` é enviado.

### Desativar a Recolha de Feedback

Deixe tanto o campo **Feedback Endpoint URL** como o **Feedback API Key** em branco. O botão de polegar para baixo e a interface de feedback continuam visíveis aos utilizadores, mas os envios não são encaminhados a ningún serviço externo.

## Brave Search API Key

Também na aba **Advanced**, o campo **Brave Search API Key** permite a funcionalidade de [Internet Search](../configuration/internet-search).

| Campo | Descrição |
|---|---|
| **Brave Search API Key** | A sua chave de API do painel de desenvolvedor Brave Search. Necessária para ativar a pesquisa na internet no assistente de IA. |

O rótulo do campo inclui um link clicável para a página de inscrição da API Brave Search. Deixe em branco para desativar a pesquisa na internet.

Veja [Internet Search](../configuration/internet-search) para documentação para o utilizador final sobre esta funcionalidade.

## Feature Flags (Sinalizadores de Funcionalidade)

Também introduzido na v1.9.0, a aba **Settings → Feature Flags** fornece interruptores para funcionalidades opcionais. Cada *flag* está ativado ou desativado em toda a rede; neste momento, não há sobrescrita por site.

### Aceder aos Feature Flags

1. No admin do WordPress, vá a **Gratis AI Agent → Settings**.
2. Clique na aba **Feature Flags**.

### Feature Flags de Controlo de Acceso

| Flag | Default | Descripción |
|---|---|---|
| **Restringir a Administradores** | Desligado (Off) | Quando ativado, só os utilizadores com o papel `administrator` podem abrir o painel de chat do Agente de IA. Todos os outros papéis veem uma mensagem de "Contacte o seu administrador". |
| **Restringir a Administradores da Rede** | Desligado (Off) | Quando ativado numa rede multisite, apenas Super Administradores podem usar o agente. Os administradores dos sites individuais são bloqueados. Tem precedência sobre "Restringir a Administradores" se ambos estiverem ativos. |
| **Permitir Acesso de Subscritor** | Desligado (Off) | Quando ativado, os utilizadores com o papel `subscriber` podem usar a interface de chat, mas estão limitados a capacidades de leitura (sem criação de posts ou alterações de configurações). |
| **Desativar para Não-Membros** | Desligado (Off) | Integra-se com o estado de membro do Ultimate Multisite. Quando ativado, o chat fica oculto para os sites que não têm uma adesão ativa. |

### Bandeiras de Marca (Branding Flags)

| Flag | Default | Descripción |
|---|---|---|
| **Ocultar Rodapé "Powered by Gratis AI Agent"** | Desligado (Off) | Remove a linha de atribuição de marca mostrada no final do widget de chat. Recomendado para implementações white-label. |
| **Nome Personalizado do Agente** | *(vazio)* | Substitui o rótulo padrão "Gratis AI Agent" no cabeçalho do chat e no menu de administração pelo seu nome de produto. Deixe em branco para usar o padrão. |
| **Ocultar Seletor de Agentes** | Desligado (Off) | Quando ativado, os utilizadores não podem mudar entre os cinco agentes integrados. O agente atual fica fixo no que estiver configurado como padrão em Settings → General. |
| **Usar Ícone do Site como Avatar do Chat** | Desligado (Off) | Substitui o ícone de IA padrão no cabeçalho do widget de chat pelo ícone do site WordPress (definido em Appearance → Customize → Site Identity). |

### Aplicar Alterações

Clique em **Guardar Configurações** após alternar qualquer bandeira. As alterações têm efeito imediato — não é necessário limpar o cache ou reagir o plugin.
