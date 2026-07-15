---
title: 'Lição 10: Dia de Lançamento'
sidebar_position: 11
_i18n_hash: 49ba467b8efba57e92cf072bcec53969
---
# Lição 10: Dia de Lançamento

Tudo está construído. Antes de abrir as portas, esta lição percorre a lista de verificação pré-lançamento para garantir que nada está partido, em falta ou embaraçoso.

## Onde Ficámos {#where-we-left-off}

FitSite tem templates, planos, finalização de compra, branding, integração e preços todos configurados. Agora verificamos se tudo funciona e lançamos.

## Lista de Verificação Pré-Lançamento {#pre-launch-checklist}

Passe por todos os itens. Não salte nenhum.

### Infraestrutura da Plataforma {#platform-infrastructure}

- [ ] O alojamento está estável e com bom desempenho sob carga
- [ ] O SSL wildcard está ativo e todos os subdomínios são servidos por HTTPS
- [ ] O mapeamento de domínios funciona -- teste criar um site e mapear um domínio personalizado
- [ ] As cópias de segurança estão configuradas e testadas (restaure pelo menos uma para verificar)
- [ ] A monitorização está implementada -- saberá se a plataforma ficar indisponível

### Templates {#templates}

- [ ] Todos os três templates carregam corretamente em novos sites
- [ ] O conteúdo de placeholder é útil e não tem erros ortográficos
- [ ] Todas as imagens estão devidamente licenciadas (sem marcas de água de fotografias de stock)
- [ ] A responsividade móvel funciona em todas as páginas de template
- [ ] A velocidade de carregamento das páginas é aceitável (teste com uma ferramenta como GTmetrix ou PageSpeed Insights)
- [ ] Não há links quebrados nem recursos em falta em nenhum template

### Planos e Produtos {#plans-and-products}

- [ ] Todos os três planos estão ativos e visíveis
- [ ] As descrições dos planos são precisas e específicas do nicho
- [ ] Os preços estão corretos (mensais e anuais)
- [ ] As taxas de configuração estão configuradas nos planos certos
- [ ] O período experimental funciona no plano Starter
- [ ] As ofertas adicionais no pedido aparecem corretamente durante a finalização de compra
- [ ] As limitações de plugins e temas são aplicadas corretamente por plano

### Fluxo de Finalização de Compra {#checkout-flow}

- [ ] Conclua uma inscrição de teste completa em cada plano (use o modo de pagamento de teste)
- [ ] A seleção de template mostra os templates corretos por plano
- [ ] O pagamento é processado com sucesso
- [ ] O cliente recebe um email de boas-vindas após a inscrição
- [ ] O novo site é criado com o template correto
- [ ] O cliente consegue iniciar sessão no seu novo site imediatamente
- [ ] Os códigos de desconto funcionam corretamente

### Branding {#branding}

- [ ] A página de login mostra o branding da FitSite
- [ ] O admin dashboard mostra o branding da FitSite
- [ ] Todos os emails do sistema usam o branding da FitSite e linguagem específica de fitness
- [ ] As faturas são apresentadas corretamente com os detalhes da sua empresa
- [ ] O site de marketing está online e liga ao formulário de finalização de compra

### Integração {#onboarding}

- [ ] O widget Início Rápido aparece nos dashboards de novos clientes
- [ ] Todos os links do Início Rápido apontam para as páginas corretas
- [ ] A sequência de emails de boas-vindas está configurada e testada
- [ ] Os artigos da base de conhecimento estão publicados e acessíveis
- [ ] A página Account mostra as informações corretas do plano e opções de upgrade

### Legal e Negócio {#legal-and-business}

- [ ] Os termos de serviço estão publicados e ligados a partir da finalização de compra
- [ ] A política de privacidade está publicada e acessível
- [ ] A política de reembolso está definida e documentada
- [ ] A entidade empresarial está configurada para receber pagamentos
- [ ] O gateway de pagamento está em modo live (não em modo de teste)
- [ ] A configuração fiscal está correta para a sua jurisdição

## Lançamento Suave vs. Lançamento Completo {#soft-launch-vs-hard-launch}

Considere um lançamento em duas fases:

### Fase 1: Lançamento Suave {#phase-1-soft-launch}

Convide 5-10 proprietários de estúdios de fitness a inscreverem-se antes do lançamento público. Estes são os seus clientes beta. Ofereça-lhes um desconto significativo (50% de desconto vitalício, ou 3 meses grátis) em troca de:

- Feedback honesto sobre a experiência de inscrição e integração
- Permissão para usar o site deles como exemplo de montra
- Comunicação de quaisquer bugs ou problemas que encontrem

Isto dá-lhe feedback real de clientes e sites live para mostrar antes de abrir ao público.

### Fase 2: Lançamento Público {#phase-2-public-launch}

Depois de incorporar o feedback do lançamento suave:

- Mude o gateway de pagamento para modo live
- Publique o seu site de marketing
- Comece a aquisição de clientes (Lição 11)
- Anuncie em canais relevantes da indústria de fitness

## Ações no Dia de Lançamento {#launch-day-actions}

No dia em que se torna público:

1. **Mude para pagamentos live** -- desative o modo de teste no seu gateway de pagamento
2. **Verifique mais uma vez** -- faça uma inscrição de teste completa com um pagamento real (reembolse-se depois)
3. **Monitorize de perto** -- observe erros, inscrições falhadas ou problemas de pagamento
4. **Esteja disponível** -- os seus primeiros clientes reais podem precisar de ajuda, e uma resposta rápida gera confiança
5. **Celebre brevemente** -- depois volte ao trabalho

## O Que Pode Correr Mal {#what-can-go-wrong}

Esteja preparado para:

- **Problemas no gateway de pagamento**: Tenha à mão o contacto de suporte do seu fornecedor de gateway
- **Problemas com certificados SSL**: Saiba como verificar e renovar certificados
- **Falhas na entrega de emails**: Teste se os emails chegam mesmo (verifique as pastas de spam)
- **Desempenho sob carga**: Se tiver um pico de tráfego, saiba como escalar o seu alojamento
- **Confusão dos clientes**: Tenha a sua base de conhecimento e canais de suporte prontos

## A Rede FitSite Até Agora {#the-fitsite-network-so-far}

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

## O Que Construímos Nesta Lição {#what-we-built-this-lesson}

- **Uma lista de verificação pré-lançamento abrangente** que cobre infraestrutura, conteúdo, pagamentos e questões legais
- **Uma estratégia de lançamento suave** para obter feedback real antes de se tornar público
- **Procedimentos para o dia de lançamento** para lançar com confiança
- **Um plano de contingência** para problemas comuns no dia de lançamento

---

**Seguinte:** [Lição 11: Encontrar Clientes](lesson-11-customers) -- agora que FitSite está live, como consegue que proprietários de estúdios de fitness se inscrevam?
