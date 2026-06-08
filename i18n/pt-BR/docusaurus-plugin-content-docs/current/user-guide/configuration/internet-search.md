---
title: Busca na Internet
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Busca na Internet

O Gratis AI Agent v1.5.0 adiciona uma funcionalidade de **Busca na Internet** que permite ao assistente de IA recuperar informações atualizadas da web durante uma conversa. Isso é alimentado pela [Brave Search API](https://brave.com/search/api/) ou pela [Tavily API](https://tavily.com/).

## Como Funciona

Quando a busca na internet está ativada, o assistente pode consultar automaticamente o provedor de busca configurado quando determinar que uma pergunta exige informações atuais ou externas — por exemplo, notícias recentes, preços em tempo real ou documentação que possa ter mudado desde o corte de treinamento do modelo.

Os resultados são recuperados em tempo real e injetados no contexto do assistente antes que ele gere uma resposta. O assistente indica quando usou resultados de busca para responder a uma pergunta.

## Ativando a Busca na Internet

A busca na internet exige uma chave de API do provedor de busca escolhido. Para configurar:

1. Vá para **Gratis AI Agent → Settings → Advanced**.
2. Localize o menu suspenso **Internet Search Provider** e selecione **Brave Search** ou **Tavily**.
3. Insira sua chave API no campo correspondente. Links de cadastro são exibidos ao lado de cada campo.
4. Clique em **Save Settings**.

Assim que a chave é salva, a funcionalidade de Busca na Internet fica automaticamente disponível para o assistente.

## Brave Search

### Obtendo uma Chave API do Brave Search

1. Visite a [Brave Search API page](https://brave.com/search/api/).
2. Cadastre-se em um plano. Há um nível gratuito disponível com um limite de requisições mensal.
3. Copie sua chave API do painel de desenvolvedor do Brave Search.
4. Cole-a no campo **Brave Search API Key** nas configurações do Gratis AI Agent.

### Limites de Uso

O uso é cobrado pelo Brave Search com base no número de consultas feitas. Cada resposta de IA que aciona uma busca conta como uma consulta. Monitore seu uso no [Brave Search developer dashboard](https://brave.com/search/api/) para evitar cobranças inesperadas.

## Tavily

O Superdav AI Agent v1.10.0 adiciona o **Tavily** como um provedor alternativo de busca na internet, oferecendo resultados de busca mais ricos e recursos avançados de pesquisa.

### Obtendo uma Chave API do Tavily

1. Visite a [Tavily API page](https://tavily.com/).
2. Cadastre-se em uma conta. Há um nível gratuito disponível com um limite de requisições mensal.
3. Copie sua chave API do painel do Tavily.
4. Cole-a no campo **Tavily API Key** nas configurações do Gratis AI Agent.

### Limites de Uso

O uso é cobrado pelo Tavily com base no número de chamadas de API feitas. Cada resposta de IA que aciona uma busca conta como uma chamada. Monitore seu uso no [Tavily dashboard](https://tavily.com/) para evitar cobranças inesperadas.

## Desativando a Busca na Internet

Remova a chave API do campo do provedor de busca ativo e salve. A funcionalidade de Busca na Internet não será mais oferecida ao assistente.

:::note
A busca na internet adiciona latência às respostas porque o assistente precisa esperar pelos resultados da busca antes de gerar uma resposta. Para casos de uso sensíveis ao tempo, considere se a busca em tempo real é necessária ou se o conhecimento embutido do assistente é suficiente.
:::
