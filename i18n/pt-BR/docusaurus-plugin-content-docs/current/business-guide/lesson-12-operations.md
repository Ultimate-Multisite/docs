---
title: 'Lição 12: Administrando o Negócio'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Lição 12: Gerenciando o Negócio

Uma plataforma não é um projeto que se finaliza; é um negócio que precisa ser gerenciado continuamente. Esta lição aborda as operações diárias de gerenciamento do FitSite: suporte, cobrança, manutenção e como manter os clientes satisfeitos.

## Onde Paramos

O FitSite está no ar e os clientes estão se cadastrando. Agora você precisa fazer a operação funcionar de forma sustentável.

## Operações Diárias

### Monitoramento

Verifique estes itens diariamente (ou configure alertas):

- **Uptime**: A plataforma está acessível? Use um serviço de monitoramento de uptime.
- **Novos cadastros**: Quantos clientes novos se cadastraram hoje?
- **Pagamentos falhos**: Há falhas de pagamento que precisam de atenção?
- **Solicitações de suporte**: Há perguntas de clientes sem resposta?

### Suporte ao Cliente

Seu foco em um nicho é uma vantagem aqui. Como todos os seus clientes são estúdios de fitness, você verá as mesmas perguntas repetidamente:

**Perguntas comuns que você receberá:**

- "Como atualizo minha grade de aulas?"
- "Posso mudar as cores do meu site?"
- "Como adiciono um novo instrutor no meu site?"
- "Meu domínio não está funcionando"
- "Como cancelo/atualizo meu plano?"

Crie sua base de conhecimento (começada na Lição 8) em torno dessas perguntas recorrentes. Todo ticket de suporte que poderia ser um artigo na base de conhecimento é um sinal para escrever esse artigo.

### Níveis de Suporte

À medida que você cresce, estruture o suporte de acordo com o plano:

| Plano | Nível de Suporte | Tempo de Resposta |
|------|--------------|---------------|
| Starter | Base de conhecimento + e-mail | 48 horas |
| Growth | Suporte por e-mail | 24 horas |
| Pro | E-mail prioritário + chamada de onboarding | 4 horas |

O [Addon de Tickets de Suporte](/addons/support-tickets) pode ajudar a gerenciar as solicitações de suporte dentro da plataforma.

## Operações de Cobrança

### Pagamentos Recorrentes

O Ultimate Multisite gerencia a cobrança recorrente automaticamente através do seu gateway de pagamento. Seu trabalho é monitorar:

- **Pagamentos falhos**: Faça o acompanhamento prontamente. A maioria das falhas são cartões expirados, e não cancelamentos intencionais.
- **Dunning**: Configure uma lógica de repetição automática através do seu gateway de pagamento (o Stripe faz isso muito bem).
- **Solicitações de cancelamento**: Entenda por que os clientes saem. Cada cancelamento é um feedback.

### Gerenciamento de Assinaturas (Memberships)

Navegue até **Ultimate Multisite > Memberships** para:

- Visualizar todas as assinaturas ativas
- Lidar com solicitações de upgrade e downgrade
- Processar reembolsos quando necessário
- Gerenciar expirações de testes

Veja [Gerenciamento de Assinaturas](/user-guide/administration/managing-memberships) para a referência completa.

### Faturamento (Invoicing)

Certifique-se de que as faturas sejam geradas corretamente para cada pagamento. Os clientes podem precisar de faturas para relatórios de despesas comerciais. Veja [Gerenciamento de Pagamentos e Faturas](/user-guide/administration/managing-payments-and-invoices).

## Manutenção da Plataforma

### Atualizações do WordPress e Plugins

Como administrador da rede, você é responsável por:

- **Atualizações do core do WordPress**: Testar em um site de *staging* antes de aplicar em produção
- **Atualizações de plugins**: O mesmo — testar primeiro e depois aplicar em toda a rede
- **Atualizações de temas**: Verificar se os templates ainda parecem corretos após as atualizações de tema
- **Atualizações do Ultimate Multisite**: Siga o *changelog* e teste antes de atualizar

:::warning Nunca Atualize em Produção Sem Testar
Uma atualização quebrada afeta todos os sites dos clientes na sua rede. Sempre teste as atualizações em uma cópia de *staging* da sua rede primeiro.
:::

### Segurança

- Mantenha todos os softwares atualizados
- Use senhas fortes e autenticação de dois fatores para contas de administrador
- Monitore atividades suspeitas
- Tenha um plano para incidentes de segurança

### Desempenho

À medida que sua rede cresce, monitore:

- **Tempos de carregamento das páginas**: Os sites dos clientes estão rápidos?
- **Uso de recursos do servidor**: CPU, memória, espaço em disco
- **Desempenho do banco de dados**: Redes grandes precisam de otimização do banco de dados com o tempo

Considere implementar cache (cache de página, cache de objeto) e uma CDN se ainda não o fez. A [integração Cloudflare](/user-guide/host-integrations/cloudflare) cuida de grande parte disso.

## Gerenciamento do Ciclo de Vida do Cliente

### Reduzindo o Churn (Taxa de Cancelamento)

Churn é a porcentagem de clientes que cancelam a cada mês. Para um negócio de assinatura, reduzir o churn é tão importante quanto adquirir novos clientes.

**Motivos comuns pelos quais os clientes de estúdios de fitness cancelam:**

- Eles não conseguiram descobrir como usar a plataforma → melhorar o *onboarding*
- O site não parecia bom o suficiente → melhorar os templates
- Eles não viram valor → melhorar os recursos ou a comunicação
- Eles encontraram uma alternativa mais barata → reforçar o valor do seu nicho
- O negócio deles fechou → inevitável, mas rastreie isso separadamente

### Incentivando Upgrades

Clientes no plano Starter que estão tendo sucesso devem ser incentivados a fazer um upgrade:

- Quando eles atingirem limites de plano (sites, armazenamento), mostre prompts de upgrade
- Envie e-mails direcionados destacando os recursos do plano Growth que eles se beneficiariam
- Mostre o que os clientes Growth/Pro construíram

### Campanhas de Reengajamento (Win-Back)

Quando um cliente cancela:

1. Pergunte o motivo (pesquisa de saída ou e-mail)
2. Aborde a preocupação dele, se possível
3. Ofereça um desconto para retornar (30-60 dias após o cancelamento)

## Rotinas Semanais e Mensais

### Semanal

- Revisar novos cadastros e cancelamentos
- Responder a todos os tickets de suporte abertos
- Verificar o desempenho e o uptime da plataforma
- Revisar quaisquer pagamentos falhos

### Mensal

- Analisar métricas chave (MRR, churn, novos clientes, upgrades)
- Aplicar atualizações do WordPress e plugins (após teste em *staging*)
- Revisar e atualizar a base de conhecimento com base nos padrões de suporte
- Enviar um boletim informativo ou atualização para os clientes (novos recursos, dicas, notícias da indústria fitness)

### Trimestral

- Revisar preços em comparação com concorrentes e feedback dos clientes
- Avaliar os designs de templates — eles precisam de renovação?
- Avaliar a capacidade de hospedagem — você precisa escalar?
- Revisar e melhorar o *onboarding* com base nos dados de ativação

## O Que Construímos Nesta Lição

- **Rotinas de monitoramento diário** para uptime, cadastros, pagamentos e suporte
- **Uma estrutura de suporte em níveis** alinhada aos planos
- **Operações de cobrança** incluindo *dunning* e tratamento de cancelamentos
- **Procedimentos de manutenção** para atualizações, segurança e desempenho
- **Estratégias de redução de churn** específicas para o nicho fitness
- **Rotinas operacionais semanais, mensais e trimestrais**

---

**Próximo:** [Lição 13: Escalando](lesson-13-growth) — crescendo o FitSite de uma operação pequena para um negócio real.
