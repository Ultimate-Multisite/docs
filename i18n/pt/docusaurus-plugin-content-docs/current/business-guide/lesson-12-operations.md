---
title: 'Lição 12: Gerir o Negócio'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Lição 12: Gerir o Negócio {#lesson-12-running-the-business}

Uma plataforma não é um projeto que se termina -- é um negócio que se gere. Esta lição aborda as operações do dia a dia na gestão do FitSite: suporte, faturação, manutenção e manter os clientes satisfeitos.

## Onde Ficámos {#where-we-left-off}

O FitSite está online e os clientes estão a registar-se. Agora precisa de gerir a operação de forma sustentável.

## Operações Diárias {#daily-operations}

### Monitorização {#monitoring}

Verifique estes pontos diariamente (ou configure alertas):

- **Uptime**: A plataforma está acessível? Use um serviço de monitorização de uptime.
- **Novos registos**: Quantos novos clientes se registaram hoje?
- **Pagamentos falhados**: Há falhas de pagamento que precisem de atenção?
- **Pedidos de suporte**: Há perguntas de clientes sem resposta?

### Suporte ao Cliente {#customer-support}

O seu foco de nicho é uma vantagem aqui. Como todos os seus clientes são estúdios de fitness, verá as mesmas perguntas repetidamente:

**Perguntas comuns que irá receber:**

- "Como atualizo o horário das minhas aulas?"
- "Posso alterar as cores do meu site?"
- "Como adiciono um novo treinador ao meu site?"
- "O meu domínio não está a funcionar"
- "Como cancelo/faço upgrade do meu plano?"

Construa a sua base de conhecimento (iniciada na Lição 8) em torno destas perguntas recorrentes. Cada ticket de suporte que poderia ter sido um artigo da base de conhecimento é um sinal para escrever esse artigo.

### Níveis de Suporte {#support-tiers}

À medida que cresce, estruture o suporte por plano:

| Plano | Nível de Suporte | Tempo de Resposta |
|------|--------------|---------------|
| Starter | Base de conhecimento + email | 48 horas |
| Growth | Suporte por email | 24 horas |
| Pro | Email prioritário + chamada de onboarding | 4 horas |

O [addon Support Tickets](/addons/support-tickets) pode ajudar a gerir pedidos de suporte dentro da plataforma.

## Operações de Faturação {#billing-operations}

### Pagamentos Recorrentes {#recurring-payments}

Ultimate Multisite gere a faturação recorrente automaticamente através do seu gateway de pagamento. O seu trabalho é monitorizar:

- **Pagamentos falhados**: Faça seguimento rapidamente. A maioria das falhas são cartões expirados, não cancelamentos intencionais.
- **Dunning**: Configure lógica de novas tentativas automatizadas através do seu gateway de pagamento (Stripe lida bem com isto)
- **Pedidos de cancelamento**: Entenda porque os clientes saem. Cada cancelamento é feedback.

### Gerir Memberships {#managing-memberships}

Navegue até **Ultimate Multisite > Memberships** para:

- Ver todas as subscrições ativas
- Tratar pedidos de upgrade e downgrade
- Processar reembolsos quando necessário
- Gerir expirações de períodos de teste

Consulte [Gerir Memberships](/user-guide/administration/managing-memberships) para a referência completa.

### Faturação {#invoicing}

Garanta que as faturas são geradas corretamente para cada pagamento. Os clientes podem precisar de faturas para declaração de despesas empresariais. Consulte [Gerir Pagamentos e Faturas](/user-guide/administration/managing-payments-and-invoices).

## Manutenção da Plataforma {#platform-maintenance}

### Atualizações do WordPress e de Plugins {#wordpress-and-plugin-updates}

Como administrador da rede, é responsável por:

- **Atualizações do núcleo do WordPress**: Teste num site de staging antes de aplicar em produção
- **Atualizações de plugins**: O mesmo -- teste primeiro e depois aplique em toda a rede
- **Atualizações de temas**: Verifique se os templates continuam com aspeto correto após atualizações do tema
- **Atualizações do Ultimate Multisite**: Siga o changelog e teste antes de atualizar

:::warning Nunca Atualize em Produção Sem Testar
Uma atualização com problemas afeta todos os sites de clientes na sua rede. Teste sempre as atualizações primeiro numa cópia de staging da sua rede.
:::

### Segurança {#security}

- Mantenha todo o software atualizado
- Use palavras-passe fortes e autenticação de dois fatores para contas de administrador
- Monitorize atividade suspeita
- Tenha um plano para incidentes de segurança

### Desempenho {#performance}

À medida que a sua rede cresce, monitorize:

- **Tempos de carregamento das páginas**: Os sites dos clientes são rápidos?
- **Utilização de recursos do servidor**: CPU, memória, espaço em disco
- **Desempenho da base de dados**: Redes grandes precisam de otimização da base de dados ao longo do tempo

Considere implementar cache (cache de página, cache de objetos) e uma CDN se ainda não o fez. A [integração com Cloudflare](/user-guide/host-integrations/cloudflare) trata de grande parte disto.

## Gestão do Ciclo de Vida do Cliente {#customer-lifecycle-management}

### Reduzir o Churn {#reducing-churn}

Churn é a percentagem de clientes que cancela todos os meses. Para um negócio de subscrição, reduzir o churn é tão importante como adquirir novos clientes.

**Razões comuns pelas quais clientes de estúdios de fitness fazem churn:**

- Não conseguiram perceber como usar a plataforma → melhore o onboarding
- O site não tinha um aspeto suficientemente bom → melhore os templates
- Não viram valor → melhore as funcionalidades ou a comunicação
- Encontraram uma alternativa mais barata → reforce o seu valor de nicho
- O negócio deles fechou → inevitável, mas acompanhe isto separadamente

### Incentivar Upgrades {#encouraging-upgrades}

Os clientes no Starter que estão a ter sucesso devem ser incentivados a fazer upgrade:

- Quando atingirem os limites do plano (sites, armazenamento), mostre prompts de upgrade
- Envie emails direcionados destacando funcionalidades do plano Growth das quais beneficiariam
- Mostre o que os clientes Growth/Pro construíram

### Campanhas de Recuperação {#win-back-campaigns}

Quando um cliente cancela:

1. Pergunte porquê (inquérito de saída ou email)
2. Responda à preocupação dele, se possível
3. Ofereça um desconto para regressar (30-60 dias após o cancelamento)

## Rotinas Semanais e Mensais {#weekly-and-monthly-routines}

### Semanalmente {#weekly}

- Reveja novos registos e cancelamentos
- Responda a todos os tickets de suporte abertos
- Verifique o desempenho e o uptime da plataforma
- Reveja quaisquer pagamentos falhados

### Mensalmente {#monthly}

- Analise métricas principais (MRR, churn, novos clientes, upgrades)
- Aplique atualizações do WordPress e de plugins (após teste em staging)
- Reveja e atualize a base de conhecimento com base em padrões de suporte
- Envie uma newsletter ou atualização aos clientes (novas funcionalidades, dicas, notícias da indústria de fitness)

### Trimestralmente {#quarterly}

- Reveja os preços face aos concorrentes e ao feedback dos clientes
- Avalie os designs dos templates -- precisam de ser renovados?
- Avalie a capacidade de alojamento -- precisa de escalar?
- Reveja e melhore o onboarding com base nos dados de ativação

## O Que Construímos Nesta Lição {#what-we-built-this-lesson}

- **Rotinas diárias de monitorização** para disponibilidade, inscrições, pagamentos e suporte
- **Uma estrutura de suporte por níveis** alinhada com os níveis do plano
- **Operações de faturação** incluindo cobrança de pagamentos em atraso e gestão de cancelamentos
- **Procedimentos de manutenção** para atualizações, segurança e desempenho
- **Estratégias de redução de churn** específicas para o nicho de fitness
- **Rotinas operacionais semanais, mensais e trimestrais**

---

**Seguinte:** [Lição 13: Escalar](lesson-13-growth) -- fazer crescer o FitSite de uma pequena operação para um negócio real.
