---
title: Entendendo o Painel
sidebar_position: 7
_i18n_hash: 4869a2f03eb529c49c821a22eb6b9647
---
# Entendendo o Painel do Ultimate Multisite

Antes de nos aprofundarmos nas opções de configuração mais avançadas e nos aspectos operacionais do Ultimate Multisite, vamos dar uma olhada no painel.

Como muitos plugins do WordPress, o Ultimate Multisite cria uma entrada de menu de nível de rede intitulada **Ultimate Multisite** com vários itens de submenu abaixo.

## Widgets do Painel de Rede

O Ultimate Multisite injeta alguns widgets úteis no painel de rede. Este painel pode ser acessado navegando até **My Sites → Network Admin → Dashboard**. Os widgets são projetados para fornecer acesso fácil a informações e operações comuns para o administrador da rede.

![Painel de Rede com widgets do Ultimate Multisite](/img/admin/network-dashboard-full.png)

### Primeiros Passos

![Widget Primeiros Passos](/img/admin/network-dashboard-first-steps.png)

Este widget aparece em uma instalação nova do Ultimate Multisite e lembra o administrador da rede de concluir tarefas adicionais, como configurar um método de pagamento e criar uma conta de teste.

### Resumo

![Widget Resumo](/img/admin/network-dashboard-summary.png)

O widget Resumo relata o número de inscrições e sua receita no dia. O MRR (Monthly Recurring Revenue) indica um total projetado entre clientes com assinaturas geradoras de receita.

### Fluxo de Atividades

![Widget Fluxo de Atividades](/img/admin/network-dashboard-activity-stream.png)

Este widget relata eventos em todo o Ultimate Multisite. Os eventos incluem inscrições, cancelamentos, criação de sites, exclusões e outras atividades.

Consulte a seção Eventos da documentação para uma descrição mais detalhada.

### Agora

![Widget Agora](/img/admin/network-dashboard-right-now.png)

Este widget utilitário exibe um resumo curto de usuários e sites na rede. Atalhos práticos no topo permitem acesso com um clique para criar novos sites ou usuários.

### Notícias e Discussões

![Widget Notícias e Discussões](/img/admin/network-dashboard-news.png)

Este widget busca e exibe as últimas notícias do Ultimate Multisite. Fique de olho neste widget para informações sobre atualizações, bugs críticos e correções de segurança.

## Painel do Ultimate Multisite

Enquanto o painel de nível de rede apresenta informações holísticas sobre a rede, o painel do Ultimate Multisite (localizado no nível superior do menu Ultimate Multisite) apresenta informações sobre o serviço.

![Painel do Ultimate Multisite](/img/admin/um-dashboard-top.png)

### Crescimento do Receita Recorrente Mensal

O gráfico MRR (Monthly Recurring Revenue) exibe uma divisão mensal da receita ao longo de um período de 12 meses no calendário.

![Gráfico Crescimento MRR](/img/admin/um-dashboard-mrr.png)

Nova receita é rastreada em azul, enquanto cancelamentos são refletidos em vermelho.

### Suporte a Intervalo de Datas

Dependendo do número de clientes e da atividade, as estatísticas podem ficar sobrecarregadas. O suporte a intervalo de datas incorporado ao painel permite que o administrador da rede se concentre apenas nas informações e no período de tempo necessário.

![Seletor de intervalo de datas e estatísticas](/img/admin/um-dashboard-date-range.png)

O intervalo de datas governa o período das informações exibidas pelos widgets diretamente abaixo, incluindo receita, novas assinaturas, inscrições por país, inscrições por formulário e sites mais visitados.

![Widgets de estatísticas do painel](/img/admin/um-dashboard-stats.png)

:::tip
Para fazer o widget **Most Visited Sites** funcionar, habilite a contagem de visitas em **Ultimate Multisite → Settings → Sites → Enable Visits Limitation and Counting**.
:::
