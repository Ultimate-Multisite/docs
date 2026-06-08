---
title: 'Lição 10: Dia do Lançamento'
sidebar_position: 11
_i18n_hash: 49ba467b8efba57e92cf072bcec53969
---
# Lição 10: Dia do Lançamento

Tudo foi construído. Antes de abrir as portas, esta lição passa por um checklist de pré-lançamento para garantir que nada esteja quebrado, faltando ou embaraçoso.

## Onde Paramos

O FitSite tem templates, planos, checkout, branding, onboarding e preços todos configurados. Agora, vamos verificar se tudo funciona e lançar o produto.

## Checklist de Pré-Lançamento

Trabalhe em cada item. Não pule nenhum.

### Infraestrutura da Plataforma

- [ ] A hospedagem está estável e performando bem sob carga
- [ ] O SSL Wildcard está ativo e todos os subdomínios são servidos via HTTPS
- [ ] O mapeamento de domínio funciona — teste criar um site e mapear um domínio personalizado
- [ ] Os backups estão configurados e testados (restaure pelo menos um para verificar)
- [ ] O monitoramento está implementado — você saberá se a plataforma cair

### Templates

- [ ] Os três templates carregam corretamente em novos sites
- [ ] O conteúdo de preenchimento é útil e livre de erros de digitação
- [ ] Todas as imagens têm licença adequada (sem marcas d'água de fotos de banco de imagens)
- [ ] A responsividade móvel funciona em todas as páginas do template
- [ ] A velocidade de carregamento da página é aceitável (teste com uma ferramenta como GTmetrix ou PageSpeed Insights)
- [ ] Não há links quebrados ou ativos faltando em nenhum template

### Planos e Produtos

- [ ] Os três planos estão ativos e visíveis
- [ ] As descrições dos planos são precisas e específicas do nicho
- [ ] Os preços estão corretos (mensal e anual)
- [ ] As taxas de configuração estão configuradas nos planos corretos
- [ ] O período de teste funciona no plano Starter
- [ ] Os adicionais de pedido aparecem corretamente durante o checkout
- [ ] As limitações de plugin e tema são aplicadas corretamente por plano

### Fluxo de Checkout

- [ ] Complete um teste completo de cadastro em cada plano (use o modo de pagamento de teste)
- [ ] A seleção de templates mostra os templates corretos por plano
- [ ] O pagamento é processado com sucesso
- [ ] O cliente recebe o e-mail de boas-vindas após o cadastro
- [ ] Um novo site é criado com o template correto
- [ ] O cliente pode fazer login no novo site imediatamente
- [ ] Os códigos de desconto funcionam corretamente

### Branding

- [ ] A página de login mostra o branding do FitSite
- [ ] O dashboard de administrador mostra o branding do FitSite
- [ ] Todos os e-mails do sistema usam o branding do FitSite e linguagem específica de fitness
- [ ] As faturas são exibidas corretamente com os detalhes do seu negócio
- [ ] O site de marketing está ativo e linka para o formulário de checkout

### Onboarding

- [ ] O widget Quick Start aparece nos dashboards de novos clientes
- [ ] Todos os links Quick Start apontam para as páginas corretas
- [ ] A sequência de e-mail de boas-vindas está configurada e testada
- [ ] Os artigos da base de conhecimento estão publicados e acessíveis
- [ ] A página de conta mostra as informações corretas do plano e opções de upgrade

### Legal e Negócios

- [ ] Os termos de serviço estão publicados e linkados no checkout
- [ ] A política de privacidade está publicada e acessível
- [ ] A política de reembolso está definida e documentada
- [ ] A entidade comercial está configurada para receber pagamentos
- [ ] O gateway de pagamento está em modo live (não em modo de teste)
- [ ] A configuração fiscal está correta para sua jurisdição

## Soft Launch vs. Hard Launch

Considere um lançamento em duas fases:

### Fase 1: Soft Launch

Convide 5 a 10 proprietários de estúdios de fitness para se cadastrarem antes do lançamento público. Estes são seus clientes beta. Ofereça a eles um desconto significativo (50% de desconto vitalício ou 3 meses grátis) em troca de:

- Feedback honesto sobre a experiência de cadastro e onboarding
- Permissão para usar o site deles como exemplo de vitrine
- Relatar quaisquer bugs ou problemas que encontrarem

Isso lhe dará feedback real de clientes e sites ativos para exibir antes de abrir ao público.

### Fase 2: Public Launch

Depois que o feedback do soft launch for incorporado:

- Mude o gateway de pagamento para modo live
- Publique seu site de marketing
- Comece a aquisição de clientes (Lição 11)
- Anuncie em canais relevantes da indústria fitness

## Ações no Dia do Lançamento

No dia em que você se torna público:

1. **Mude para pagamentos live** — desative o modo de teste no seu gateway de pagamento
2. **Verifique mais uma vez** — faça um teste de cadastro completo com um pagamento real (reembolse-se depois)
3. **Monitore de perto** — fique atento a erros, cadastros falhos ou problemas de pagamento
4. **Esteja disponível** — seus primeiros clientes reais podem precisar de ajuda, e uma resposta rápida constrói confiança
5. **Comemore brevemente** — e depois volte ao trabalho

## O Que Pode Dar Errado

Esteja preparado para:

- **Problemas com o gateway de pagamento**: Tenha o contato de suporte do provedor do gateway pronto
- **Problemas com o certificado SSL**: Saiba como verificar e renovar certificados
- **Falhas na entrega de e-mail**: Teste se os e-mails realmente chegam (verifique as pastas de spam)
- **Performance sob carga**: Se você receber um pico de tráfego, saiba como escalar sua hospedagem
- **Confusão do cliente**: Tenha sua base de conhecimento e canais de suporte prontos

## A FitSite Network Até Agora

```
FitSite Network
├── WordPress Multisite (subdomain mode) ✓
├── Ultimate Multisite (configured + branded) ✓
├── Platform Domain (fitsite.com + wildcard SSL) ✓
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain) ✓
├── Products (Starter, Growth, Pro + Order Bumps + Discounts) ✓
├── Checkout Flow (tested end-to-end) ✓
├── Branding (complete) ✓
├── Customer Onboarding (Quick Start, emails, help resources) ✓
├── Pricing Strategy (annual, trials, setup fees, discounts) ✓
├── Pre-Launch Checklist (verified) ✓
├── Soft Launch (beta customers onboarded) ✓
└── LIVE ✓
```

## O Que Construímos Nesta Lição

- **Um checklist de pré-lançamento abrangente** cobrindo infraestrutura, conteúdo, pagamentos e aspectos legais
- **Uma estratégia de soft launch** para obter feedback real antes de ir ao público
- **Procedimentos para o dia do lançamento** para ir ao ar com confiança
- **Um plano de contingência** para problemas comuns do dia do lançamento

---

**Próximo:** [Lição 11: Encontrando Clientes](lesson-11-customers) — agora que o FitSite está ativo, como você faz para que os proprietários de estúdios de fitness se cadastrem?
