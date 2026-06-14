---
title: Búsqueda na Internet
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Busca na Internet

O Gratis AI Agent v1.5.0 adiciona a capacidade de **Busca na Internet**, que permite ao assistente de IA obter informação atual da web durante uma conversa. Isto é impulsionado pela [Brave Search API](https://brave.com/search/api/) ou pela [Tavily API](https://tavily.com/).

## Como Funciona

Quando a busca na internet está ativada, o assistente pode consultar automaticamente o seu provedor de pesquisa configurado quando determina que uma pergunta requer informação atual ou externa — por exemplo, notícias recentes, preços em tempo real ou documentação que possa ter mudado desde o corte do treino do modelo.

Os resultados são recuperados em tempo real e injetados no contexto do assistente antes que ele gere uma resposta. O assistente indica quando usou resultados de pesquisa para responder a uma pergunta.

## Ativar a Busca na Internet

A busca na internet requer uma chave de API do seu provedor de pesquisa escolhido. Para a configurar:

1. Vá a **Gratis AI Agent → Settings → Advanced**.
2. Localize o menu suspenso **Internet Search Provider** e selecione **Brave Search** ou **Tavily**.
3. Insira a sua chave de API no campo correspondente. Os links de inscrição são exibidos ao lado de cada campo.
4. Clique em **Save Settings** (Guardar Configurações).

Assim que a chave for guardada, a capacidade de Busca na Internet estará automaticamente disponível para o assistente.

## Brave Search

### Obter uma Chave de API do Brave Search

1. Visite a [página da Brave Search API](https://brave.com/search/api/).
2. Registe-se para um plano. Existe um nível gratuito com um limite mensal de pedidos.
3. Copie a sua chave de API no painel de desenvolvimento do Brave Search.
4. Cole-a no campo **Brave Search API Key** nas configurações do Gratis AI Agent.

### Limites de Utilização

O uso é cobrado pelo Brave Search com base no número de consultas feitas. Cada resposta da IA que desencadeia uma pesquisa conta como uma consulta. Monitore o seu uso no [painel do desenvolvedor do Brave Search](https://brave.com/search/api/) para evitar cobranças inesperadas.

## Tavily

O Superdav AI Agent v1.10.0 adiciona o **Tavily** como provedor de pesquisa na internet alternativo, oferecendo resultados de pesquisa mais ricos e capacidades avançadas de investigação.

### Obter uma Chave API do Tavily

1. Visite a [página da API do Tavily](https://tavily.com/).
2. Registe-se numa conta. Há um nível gratuito com um limite mensal de pedidos.
3. Copie a sua chave de API no painel do Tavily.
4. Cole-a no campo **Tavily API Key** nas configurações do Gratis AI Agent.

### Limites de Uso

O uso é cobrado pelo Tavily com base no número de chamadas de API feitas. Cada resposta da IA que desencadeia uma pesquisa conta como uma chamada. Monitore o seu uso no [painel do Tavily](https://tavily.com/) para evitar cobranças inesperadas.

## Desativar a Pesquisa na Internet

Remova a chave de API do campo do provedor de pesquisa ativo e guarde as alterações. A capacidade de Pesquisa na Internet não será mais oferecida ao assistente.

:::note
A pesquisa na internet adiciona latência às respostas porque o assistente tem de esperar pelos resultados da pesquisa antes de gerar uma resposta. Para casos de uso sensíveis ao tempo, considere se a pesquisa em tempo real é necessária ou se o conhecimento incorporado do assistente é suficiente.
:::
