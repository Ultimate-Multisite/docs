---
title: 'Lição 7: Tornando-o Seu'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Lição 7: Tornando o Site Seu

Seus clientes nunca devem sentir que estão usando "algum plugin do WordPress". Eles devem sentir que estão usando o FitSite — uma plataforma construída para o setor deles. Esta lição aborda branding, white-labeling e como fazer com que a plataforma pareça um produto próprio.

## Onde Paramos {#where-we-left-off}

O FitSite tem um fluxo de checkout funcional que leva os proprietários de estúdios de fitness desde a seleção de planos até um site ativo. Agora, vamos fazer com que toda a experiência pareça um produto coeso e com a sua marca.

## O Domínio da Sua Plataforma {#your-platform-domain}

O alicerce da sua marca é o seu domínio. Para o FitSite:

- **Domínio principal**: `fitsite.com` (seu site de marketing e raiz da rede)
- **Sites dos clientes**: `nomedostudio.fitsite.com` (subdomínios)
- **Domínios personalizados**: Clientes nos planos Growth e Pro podem mapear o próprio domínio

### Configurando Seu Domínio {#setting-up-your-domain}

1. Registre o domínio da sua plataforma
2. Apontá-lo para o seu provedor de hospedagem
3. Configure o DNS wildcard (`*.fitsite.com`) para subdomínios dos clientes
4. Garanta que o SSL wildcard esteja ativo

Consulte [Como Configurar o Mapeamento de Domínio](/user-guide/domain-mapping/how-to-configure-domain-mapping) para instruções detalhadas.

## White-Labeling a Experiência do Admin {#white-labeling-the-admin-experience}

Quando um proprietário de estúdio de fitness faz login no dashboard do site, ele deve ver a sua marca, e não o branding do WordPress ou do Ultimate Multisite.

### Página de Login Personalizada {#custom-login-page}

Personalize a página de login do WordPress para exibir:

- O logo do seu FitSite
- Imagens de fundo apropriadas para fitness
- As cores da sua marca

### Branding do Dashboard {#dashboard-branding}

Use o addon [Admin Page Creator](/addons/admin-page-creator) ou CSS personalizado para:

- Substituir o logo do WordPress pelo logo do seu FitSite
- Personalizar o esquema de cores do admin para combinar com a sua marca
- Adicionar um widget de dashboard personalizado com links rápidos e recursos de ajuda específicos para fitness

### Páginas de Admin Personalizadas {#custom-admin-pages}

Considere criar páginas de admin personalizadas que exibam as ações mais relevantes para os proprietários de estúdios de fitness:

- "Editar Sua Programação de Aulas"
- "Atualizar Perfis de Treinadores"
- "Visualizar Seu Site"

Isso reduz a curva de aprendizado, colocando ações relevantes para o nicho em destaque, em vez de escondê-las no menu padrão do WordPress.

## Branding das Suas Comunicações {#branding-your-communications}

Cada e-mail, fatura e notificação deve reforçar a sua marca.

### E-mails do Sistema {#system-emails}

Navegue até **Ultimate Multisite > Settings > Emails** e personalize todos os e-mails do sistema:

- **Nome de remetente**: FitSite
- **E-mail de remetente**: hello@fitsite.com
- **Modelos de e-mail**: Use as cores e o logo da sua marca
- **Idioma**: Específico para fitness em todo o conteúdo

E-mails importantes para personalizar:

| E-mail | Versão Genérica | Versão FitSite |
|-------|----------------|-----------------|
| Boas-vindas | "Seu novo site está pronto" | "Seu site de estúdio de fitness está no ar" |
| Recibo de pagamento | "Pagamento recebido" | "Pagamento de assinatura FitSite confirmado" |
| Teste expirando | "Seu teste está acabando em breve" | "Seu teste FitSite termina em 3 dias — mantenha seu site de estúdio ativo" |

### Faturas {#invoices}

Personalize os modelos de fatura com:

- O logo e as cores da sua marca FitSite
- Os detalhes do seu negócio
- Nomes de produtos específicos para fitness (e não IDs de planos genéricos)

## O Site do Cliente {#the-customer-facing-site}

O seu domínio principal (`fitsite.com`) precisa de um site de marketing que venda a plataforma. Este é separado do admin da rede Ultimate Multisite — é a face pública do seu negócio.

Páginas principais:

- **Página inicial**: Proposta de valor clara para negócios de fitness
- **Funcionalidades**: O que o FitSite faz, em termos de fitness
- **Preços**: Seus três planos com comparações de recursos específicas para o nicho
- **Exemplos**: Exiba sites construídos na plataforma
- **Cadastro**: Links para o seu formulário de checkout

:::tip Seu Site de Marketing Pode Ser um Site de Rede
Crie seu site de marketing como um site dentro da sua própria rede. Isso permite que você o gerencie a partir do mesmo dashboard e demonstra as capacidades da sua própria plataforma.
:::

## Domínio Personalizado para Clientes {#custom-domain-for-customers}

Para clientes em planos que incluem domínios personalizados, documente o processo claramente:

1. O cliente registra ou transfere o domínio para um registrador
2. O cliente atualiza o DNS para apontar para a sua plataforma (forneça os registros exatos)
3. O Ultimate Multisite cuida do mapeamento do domínio e do SSL

Crie um artigo de ajuda ou uma entrada na base de conhecimento especificamente para este processo, escrito para proprietários de estúdios de fitness não técnicos.

## A Rede FitSite Até Agora {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding
│   ├── Custom login page
│   ├── Branded admin dashboard
│   ├── Niche-specific system emails
│   ├── Branded invoices
│   └── Marketing site on fitsite.com
└── Ready for onboarding flow (next lesson)
```

## O Que Construímos Nesta Lição {#what-we-built-this-lesson}

- **Domínio da plataforma e DNS** configurados para uma experiência com marca própria
- **Admin white-labeled** com branding FitSite em todo o lugar
- **Comunicações personalizadas** — e-mails, faturas e notificações todos com a marca
- **Um site de marketing** que vende o FitSite para proprietários de estúdios de fitness
- **Documentação de domínio personalizado** para clientes que desejam o próprio domínio

---

**Próximo:** [Lição 8: Onboarding do Cliente](lesson-8-onboarding) — vamos desenhar a experiência que transforma um novo cadastro em um cliente ativo e feliz.
