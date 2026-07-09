---
title: 'Lição 7: Torná-lo seu'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Lição 7: Torná-lo Seu

Os seus clientes nunca devem sentir que estão a usar "algum plugin WordPress." Devem sentir que estão a usar FitSite -- uma plataforma criada para o seu setor. Esta lição aborda branding, white-labeling e como fazer a plataforma parecer um produto.

## Onde Ficámos

FitSite tem um fluxo de checkout funcional que leva proprietários de estúdios de fitness desde a seleção do plano até um site ativo. Agora vamos fazer com que toda a experiência pareça um produto coeso e com branding.

## O Domínio da Sua Plataforma

A base da sua marca é o seu domínio. Para FitSite:

- **Domínio principal**: `fitsite.com` (o seu site de marketing e raiz da rede)
- **Sites de clientes**: `studioname.fitsite.com` (subdomínios)
- **Domínios personalizados**: Clientes nos planos Growth e Pro podem mapear o seu próprio domínio

### Configurar o Seu Domínio

1. Registe o domínio da sua plataforma
2. Aponte-o para o seu fornecedor de alojamento
3. Configure DNS wildcard (`*.fitsite.com`) para subdomínios de clientes
4. Garanta que o SSL wildcard está ativo

Consulte [Como Configurar o Mapeamento de Domínios](/user-guide/domain-mapping/how-to-configure-domain-mapping) para instruções detalhadas.

## White-Labeling da Experiência de Administração

Quando um proprietário de estúdio de fitness inicia sessão no dashboard do seu site, deve ver a sua marca, não branding de WordPress ou Ultimate Multisite.

### Página de Login Personalizada

Personalize a página de login do WordPress para mostrar:

- O seu logótipo FitSite
- Imagens de fundo adequadas ao fitness
- As cores da sua marca

### Branding do Dashboard

Use o addon [Admin Page Creator](/addons/admin-page-creator) ou CSS personalizado para:

- Substituir o logótipo WordPress pelo seu logótipo FitSite
- Personalizar o esquema de cores de administração para corresponder à sua marca
- Adicionar um widget personalizado ao dashboard com links rápidos específicos de fitness e recursos de ajuda

### Páginas de Administração Personalizadas

Considere criar páginas de administração personalizadas que mostrem as ações mais relevantes para proprietários de estúdios de fitness:

- "Editar o Seu Horário de Aulas"
- "Atualizar Perfis de Treinadores"
- "Ver o Seu Site"

Isto reduz a curva de aprendizagem ao colocar ações relevantes para o nicho em destaque, em vez de as enterrar no menu padrão do WordPress.

## Branding das Suas Comunicações

Cada email, fatura e notificação deve reforçar a sua marca.

### Emails do Sistema

Navegue até **Ultimate Multisite > Settings > Emails** e personalize todos os emails do sistema:

- **Nome do remetente**: FitSite
- **Email do remetente**: hello@fitsite.com
- **Modelos de email**: Use as cores e o logótipo da sua marca
- **Linguagem**: Específica de fitness em todos os pontos

Emails principais a personalizar:

| Email | Versão Genérica | Versão FitSite |
|-------|----------------|-----------------|
| Boas-vindas | "O seu novo site está pronto" | "O website do seu estúdio de fitness está ativo" |
| Recibo de pagamento | "Pagamento recebido" | "Pagamento da subscrição FitSite confirmado" |
| Fim do período experimental | "O seu período experimental termina em breve" | "O seu período experimental FitSite termina em 3 dias -- mantenha o website do seu estúdio ativo" |

### Faturas

Personalize modelos de fatura com:

- O seu logótipo FitSite e as cores da marca
- Os detalhes da sua empresa
- Nomes de produtos específicos de fitness (não IDs de planos genéricos)

## O Site Voltado para o Cliente

O seu domínio principal (`fitsite.com`) precisa de um site de marketing que venda a plataforma. Isto é separado da administração de rede do Ultimate Multisite -- é a face pública do seu negócio.

Páginas principais:

- **Página inicial**: Proposta de valor clara para negócios de fitness
- **Funcionalidades**: O que FitSite faz, em termos de fitness
- **Preços**: Os seus três planos com comparações de funcionalidades específicas do nicho
- **Exemplos**: Mostre sites criados na plataforma
- **Inscrição**: Links para o seu formulário de checkout

:::tip O Seu Site de Marketing Pode Ser um Site da Rede
Crie o seu site de marketing como um site dentro da sua própria rede. Isto permite-lhe geri-lo a partir do mesmo dashboard e demonstra as capacidades da sua própria plataforma.
:::

## Domínio Personalizado para Clientes

Para clientes em planos que incluem domínios personalizados, documente claramente o processo:

1. O cliente regista ou transfere o seu domínio para um registador
2. O cliente atualiza o DNS para apontar para a sua plataforma (forneça os registos exatos)
3. Ultimate Multisite trata do mapeamento do domínio e do SSL

Crie um artigo de ajuda ou uma entrada na base de conhecimento especificamente para este processo, escrito para proprietários de estúdios de fitness não técnicos.

## A Rede FitSite Até Agora

```
Rede FitSite
├── WordPress Multisite (modo de subdomínio)
├── Ultimate Multisite (configurado + com branding)
├── Domínio da Plataforma (fitsite.com + SSL wildcard)
├── Modelos de Site (Studio Essential, Gym Pro, Fitness Chain)
├── Produtos (Starter, Growth, Pro + Order Bumps)
├── Fluxo de Checkout (específico do nicho, testado)
├── Branding
│   ├── Página de login personalizada
│   ├── Dashboard de administração com branding
│   ├── Emails do sistema específicos do nicho
│   ├── Faturas com branding
│   └── Site de marketing em fitsite.com
└── Pronto para o fluxo de onboarding (próxima lição)
```

## O Que Construímos Nesta Lição

- **Domínio da plataforma e DNS** configurados para uma experiência com branding
- **Admin em white-label** com branding FitSite em todos os pontos
- **Comunicações personalizadas** -- emails, faturas e notificações todas alinhadas com a marca
- **Um site de marketing** que vende FitSite a proprietários de estúdios de fitness
- **Documentação de domínio personalizado** para clientes que querem o seu próprio domínio

---

**Seguinte:** [Lição 8: Onboarding de Clientes](lesson-8-onboarding) -- desenhamos a experiência que transforma uma nova inscrição num cliente ativo e satisfeito.
