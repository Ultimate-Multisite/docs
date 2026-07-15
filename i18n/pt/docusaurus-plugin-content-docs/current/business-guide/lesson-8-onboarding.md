---
title: 'Lição 8: Integração de Clientes'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Lição 8: Onboarding de clientes

Conseguir que um cliente se inscreva é apenas metade do trabalho. Se ele iniciar sessão, se sentir sobrecarregado e nunca voltar, você o perdeu. Esta lição desenha a experiência que transforma uma nova inscrição num cliente ativo e envolvido.

## Onde ficámos {#where-we-left-off}

FitSite está totalmente com marca e com um fluxo de checkout funcional. Agora focamo-nos no que acontece depois de um proprietário de estúdio de fitness concluir a inscrição e chegar ao seu novo site pela primeira vez.

## Porque o onboarding é importante {#why-onboarding-matters}

Os primeiros 30 minutos após a inscrição determinam se um cliente fica ou abandona. Um proprietário de estúdio de fitness que:

- Inicia sessão e vê um site que já parece um site de fitness → fica
- Sabe exatamente o que fazer a seguir → fica
- Se sente perdido num Dashboard genérico do WordPress → vai embora

Os seus modelos de nicho (Lição 4) tratam do primeiro ponto. Esta lição trata do segundo.

## A experiência do primeiro login {#the-first-login-experience}

### Widget de boas-vindas do Dashboard {#welcome-dashboard-widget}

Crie um widget de Dashboard personalizado que cumprimente os novos clientes e os guie pela configuração. Isto deve aparecer em destaque quando iniciarem sessão pela primeira vez.

**Início rápido do FitSite:**

1. **Adicione o nome e o logótipo do seu estúdio** -- Link para o Personalizador ou para as configurações de Identidade do Site
2. **Atualize o horário das suas aulas** -- Link direto para o editor da página Aulas
3. **Adicione os seus treinadores** -- Link para o editor da página Treinadores
4. **Defina os seus detalhes de contacto** -- Link para o editor da página Contacto
5. **Pré-visualize o seu site** -- Link para o frontend

Cada passo liga diretamente à página ou configuração relevante. Sem procurar pelos menus.

### Simplifique o Dashboard {#simplify-the-dashboard}

Os novos clientes não precisam de ver todos os itens de menu do WordPress. Considere:

- Ocultar itens de menu que não sejam relevantes para a gestão de um site de fitness (por exemplo, Comentários se não forem usados)
- Reordenar o menu para colocar primeiro os itens mais usados
- Adicionar rótulos de menu personalizados que façam sentido para o nicho ("O seu estúdio" em vez de "Aparência")

O addon [Plugin & Theme Manager](/addons/plugin-and-theme-manager) pode ajudar a controlar o que os clientes veem.

## Sequência de emails de boas-vindas {#welcome-email-sequence}

Um único email de boas-vindas não é suficiente. Configure uma sequência que guie os clientes durante a primeira semana:

### Email 1: Boas-vindas (imediatamente após a inscrição) {#email-1-welcome-immediately-after-signup}

- Assunto: "Bem-vindo ao FitSite -- o site do seu estúdio está online"
- Conteúdo: link de login, passos de início rápido, link para recursos de ajuda
- Tom: entusiasmado, encorajador, específico para fitness

### Email 2: Ganhos rápidos (Dia 1) {#email-2-quick-wins-day-1}

- Assunto: "3 coisas para fazer primeiro no seu FitSite"
- Conteúdo: adicione o seu logótipo, atualize a imagem principal da página inicial, adicione o horário das suas aulas
- Inclua capturas de ecrã que mostrem exatamente onde clicar

### Email 3: Torne-o seu (Dia 3) {#email-3-make-it-yours-day-3}

- Assunto: "Faça o seu site de fitness destacar-se"
- Conteúdo: personalize cores, adicione fotos dos treinadores, escreva a história do seu estúdio
- Link para exemplos de excelentes sites de fitness na plataforma

### Email 4: Entrar em funcionamento (Dia 7) {#email-4-go-live-day-7}

- Assunto: "Pronto para partilhar o seu FitSite com o mundo?"
- Conteúdo: lista de verificação do que confirmar antes de partilhar, como ligar um domínio personalizado (se estiver no Growth/Pro), dicas de partilha social

:::tip Email Automation
Use [Webhooks](/user-guide/integrations/webhooks) or [Zapier](/user-guide/integrations/zapier) to trigger these emails through your email marketing platform. This gives you more control over timing and allows you to track engagement.
:::

## Recursos de ajuda {#help-resources}

Crie conteúdo de ajuda específico para o nicho que responda às perguntas que os proprietários de estúdios de fitness realmente fazem:

### Artigos da base de conhecimento {#knowledge-base-articles}

- "Como atualizar o horário das suas aulas"
- "Adicionar e editar perfis de treinadores"
- "Alterar o logótipo e as cores do seu estúdio"
- "Ligar o seu próprio nome de domínio" (para clientes Growth/Pro)
- "Adicionar um widget de reservas ao seu site"

Escreva estes artigos para utilizadores não técnicos. Use capturas de ecrã. Evite jargão do WordPress.

### Guias em vídeo {#video-walkthroughs}

Gravações curtas de ecrã (2-3 minutos) que mostrem:

- Primeiro login e orientação
- Edição da página inicial
- Atualização do horário das aulas
- Adição de um novo treinador

Estas não precisam de ser produções polidas. O que importa é serem claras, úteis e específicas para o nicho.

## A página Account {#the-account-page}

Ultimate Multisite inclui uma [página Account](/user-guide/client-management/account-page) voltada para o cliente, onde os clientes gerem a sua subscrição. Personalize-a para:

- Mostrar o plano FitSite atual
- Apresentar opções de upgrade com benefícios específicos para fitness
- Disponibilizar histórico de faturação e downloads de faturas
- Ligar a recursos de ajuda

## Medir o sucesso do onboarding {#measuring-onboarding-success}

Acompanhe estes indicadores para saber se o seu onboarding está a funcionar:

- **Taxa de ativação**: Que percentagem de inscrições realmente personaliza o seu site na primeira semana?
- **Logins na primeira semana**: Quantas vezes um novo cliente inicia sessão durante a primeira semana?
- **Tickets de suporte de novos clientes**: Um volume elevado significa que o seu onboarding tem lacunas
- **Conversão de teste para pago**: Se oferece períodos de teste, que percentagem converte?

## A rede FitSite até agora {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding
│   ├── Quick Start dashboard widget
│   ├── Simplified dashboard for fitness site management
│   ├── 4-email welcome sequence
│   ├── Niche-specific knowledge base
│   ├── Video walkthroughs
│   └── Customized account page
└── Ready for pricing strategy (next lesson)
```

## O que construímos nesta lição {#what-we-built-this-lesson}

- **Uma experiência guiada de primeiro login** com um widget de Início rápido
- **Um Dashboard simplificado** focado nas tarefas de gestão de sites de fitness
- **Uma sequência de emails de boas-vindas** que guia os clientes durante a primeira semana
- **Recursos de ajuda específicos para o nicho** escritos para proprietários de estúdios de fitness não técnicos
- **Métricas de onboarding** para acompanhar e melhorar a experiência

---

**A seguir:** [Lição 9: Preços para Lucro](lesson-9-pricing) -- refinamos a estratégia de preços para maximizar a receita e minimizar o churn.
