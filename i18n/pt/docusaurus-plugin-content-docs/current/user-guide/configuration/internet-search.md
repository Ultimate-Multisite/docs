---
title: Busca na Internet
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Busca na Internet

O Gratis AI Agent v1.5.0 adiciona a capacidade de **Busca na Internet**, que permite ao assistente de IA recuperar informações atualizadas da web durante uma conversa. Isso é alimentado pela [Brave Search API](https://brave.com/search/api/) ou pela [Tavily API](https://tavily.com/).

## Como Funciona

Quando a busca na internet está ativada, o assistente pode consultar automaticamente seu provedor de busca configurado quando determina que uma pergunta requer informações atuais ou externas — por exemplo, notícias recentes, preços em tempo real ou documentação que possa ter mudado desde o corte de treinamento do modelo.

Os resultados são recuperados em tempo real e injetados no contexto do assistente antes que ele gere uma resposta. O assistente indica quando usou resultados de busca para responder a uma pergunta.

## Habilitando a Busca na Internet

A busca na internet requer uma chave de API do provedor de busca escolhido. Para configurá-la:

1. Vá em **Gratis AI Agent → Settings → Advanced** (Configurações → Avançado).
2. Localize o menu suspenso **Internet Search Provider** e selecione **Brave Search** ou **Tavily**.
3. Insira sua chave de API no campo correspondente. Links de inscrição são exibidos ao lado de cada campo.
4. Clique em **Save Settings** (Salvar Configurações).

Assim que a chave for salva, a capacidade de Busca na Internet estará automaticamente disponível para o assistente.

## Brave Search

### Obtendo uma Chave de API do Brave Search

1. Visite a [página da Brave Search API](https://brave.com/search/api/).
2. Cadastre-se em um plano. Há um nível gratuito com um limite de requisições mensal.
3. Copie sua chave de API no painel de desenvolvedor do Brave Search.
4. Cole-a no campo **Brave Search API Key** nas configurações do Gratis AI Agent.

### Limites de Uso

O uso é cobrado pelo Brave Search com base no número de consultas feitas. Cada resposta da IA que aciona uma busca conta como uma consulta. Monitore seu uso no [painel do desenvolvedor do Brave Search](https://brave.com/search/api/) para evitar cobranças inesperadas.

## Tavily

O Superdav AI Agent v1.10.0 adiciona o **Tavily** como um provedor de busca na internet alternativo, oferecendo resultados de busca mais ricos e capacidades de pesquisa avançadas.

### Obtendo uma Chave de API do Tavily

1. Visite a [página da API do Tavily](https://tavily.com/).
2. Crie uma conta. Há um nível gratuito disponível com um limite mensal de requisições.
3. Copie sua chave de API no painel do Tavily.
4. Cole-a no campo **Tavily API Key** nas configurações do Gratis AI Agent.

### Limites de Uso

O uso é cobrado pelo Tavily com base no número de chamadas de API feitas. Cada resposta da IA que aciona uma busca conta como uma chamada. Monitore seu uso no [painel do Tavily](https://tavily.com/) para evitar cobranças inesperadas.

## Desabilitando a Busca na Internet

Remova a chave de API do campo do provedor de busca ativo e salve. A capacidade de Busca na Internet não será mais oferecida ao assistente.

:::note
A busca na internet adiciona latência às respostas porque o assistente precisa esperar pelos resultados da busca antes de gerar uma resposta. Para casos de uso sensíveis ao tempo, considere se a busca em tempo real é necessária ou se o conhecimento embutido do assistente é suficiente.
:::
