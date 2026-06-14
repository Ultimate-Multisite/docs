---
title: Entendendo o Painel
sidebar_position: 7
_i18n_hash: 4869a2f03eb529c49c821a22eb6b9647
---
# Entendendo o Dashboard Ultimate Multisite

Antes de mergulharmos em opções de configuração mais avançadas e nos aspectos operacionais do Ultimate Multisite, vamos dar uma olhada no dashboard.

Assim como muitos plugins do WordPress, o Ultimate Multisite cria uma entrada de menu no nível da rede chamada **Ultimate Multisite** com várias entradas de submenu abaixo dela.

## Widgets do Dashboard da Rede

O Ultimate Multisite injeta alguns widgets úteis no dashboard de nível da rede. Este dashboard é encontrado navegando em **Meus Sites → Administração da Rede → Dashboard**. Os widgets são projetados para fornecer acesso fácil a informações e operações comuns para o administrador da rede.

![Network Dashboard with Ultimate Multisite widgets](/img/admin/network-dashboard-full.png)

### Primeiros Passos

![First Steps widget](/img/admin/network-dashboard-first-steps.png)

Este widget aparece em uma instalação nova do Ultimate Multisite e lembra o administrador da rede de concluir tarefas adicionais, como configurar um método de pagamento e criar uma conta de teste.

### Resumo

![Summary widget](/img/admin/network-dashboard-summary.png)

O widget Resumo relata o número de inscrições e a receita delas para o dia. O MRR (Receita Recorrente Mensal) indica um total projetado em clientes com membros geradores de receita.

### Feed de Atividades

![Activity Stream widget](/img/admin/network-dashboard-activity-stream.png)

Este widget relata eventos em todo o Ultimate Multisite. Os eventos incluem inscrições, cancelamentos, criação de sites, exclusões e outras atividades.

Consulte a seção Eventos da documentação para uma descrição mais detalhada.

### Agora

![Right Now widget](/img/admin/network-dashboard-right-now.png)

Este widget de utilidade exibe um resumo rápido dos usuários e sites na rede. Atalhos práticos no topo permitem acesso com um clique para criar novos sites ou usuários.

### Notícias e Discussões

![Widget Notícias e Discussões](/img/admin/network-dashboard-news.png)

Este widget busca e exibe as últimas notícias do Ultimate Multisite. Fique de olho neste widget para obter informações sobre atualizações, bugs críticos e correções de segurança.

## Dashboard Ultimate Multisite

Enquanto o dashboard de nível de rede apresenta informações holísticas sobre a rede, o dashboard Ultimate Multisite (localizado no topo do menu Ultimate Multisite) exibe informações sobre o serviço.

![Dashboard Ultimate Multisite](/img/admin/um-dashboard-top.png)

### Crescimento da Receita Recorrente Mensal (MRR)

O gráfico de MRR mostra um detalhamento mensal da receita ao longo de um período de calendário de 12 meses.

![Gráfico de Crescimento de MRR](/img/admin/um-dashboard-mrr.png)

Novas receitas são rastreadas em azul, enquanto cancelamentos são refletidos em vermelho.

### Suporte a Intervalo de Datas

Dependendo do número de clientes e da atividade, as estatísticas podem ficar esmagadoras. O suporte a intervalo de datas integrado ao dashboard permite que o administrador da rede se concentre apenas nas informações e no período de tempo necessários.

![Seletor de intervalo de datas e estatísticas](/img/admin/um-dashboard-date-range.png)

O intervalo de datas governa o período das informações exibidas pelos widgets logo abaixo, incluindo receita, novas assinaturas, cadastros por país, cadastros por formulário e os sites mais visitados.

![Widgets de estatísticas do Dashboard](/img/admin/um-dashboard-stats.png)

:::tip
Para fazer o widget **Sites Mais Visitados** funcionar, ative a contagem de visitas em **Ultimate Multisite → Configurações → Sites → Habilitar Limitação e Contagem de Visitas**.
:::
