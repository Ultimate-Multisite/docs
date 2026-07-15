---
title: 'Lección 10: Día do lanzamento'
sidebar_position: 11
_i18n_hash: 49ba467b8efba57e92cf072bcec53969
---
# Lección 10: Día do lanzamento

Todo está construído. Antes de abrir as portas, esta lección percorre a lista de comprobación previa ao lanzamento para asegurarte de que nada está roto, falta ou resulta embarazoso.

## Onde o deixamos {#where-we-left-off}

FitSite ten modelos, plans, fluxo de compra, marca, incorporación e prezos todo configurado. Agora verificamos que todo funciona e poñémolo en marcha.

## Lista de comprobación previa ao lanzamento {#pre-launch-checklist}

Revisa cada elemento. Non saltes ningún.

### Infraestrutura da plataforma {#platform-infrastructure}

- [ ] O aloxamento é estable e rende ben baixo carga
- [ ] O SSL comodín está activo e todos os subdominios se serven por HTTPS
- [ ] A asignación de dominios funciona -- proba a crear un sitio e asignar un dominio personalizado
- [ ] As copias de seguridade están configuradas e probadas (restaura polo menos unha para verificalo)
- [ ] A monitorización está en marcha -- saberás se a plataforma cae

### Modelos {#templates}

- [ ] Os tres modelos cargan correctamente en sitios novos
- [ ] O contido de marcador de posición é útil e non ten erros tipográficos
- [ ] Todas as imaxes teñen licenza axeitada (sen marcas de auga de fotos de stock)
- [ ] A adaptabilidade móbil funciona en cada páxina do modelo
- [ ] A velocidade de carga das páxinas é aceptable (proba cunha ferramenta como GTmetrix ou PageSpeed Insights)
- [ ] Non hai ligazóns rotas nin recursos ausentes en ningún modelo

### Plans e produtos {#plans-and-products}

- [ ] Os tres plans están activos e visibles
- [ ] As descricións dos plans son precisas e específicas do nicho
- [ ] Os prezos son correctos (mensuais e anuais)
- [ ] As taxas de configuración están configuradas nos plans correctos
- [ ] O período de proba funciona no plan Starter
- [ ] As ofertas adicionais aparecen correctamente durante o fluxo de compra
- [ ] As limitacións de complementos e temas aplícanse correctamente por plan

### Fluxo de compra {#checkout-flow}

- [ ] Completa un rexistro de proba completo en cada plan (usa o modo de pagamento de proba)
- [ ] A selección de modelos mostra os modelos correctos por plan
- [ ] O pagamento procésase correctamente
- [ ] O cliente recibe o correo de benvida despois de rexistrarse
- [ ] Créase o sitio novo co modelo correcto
- [ ] O cliente pode iniciar sesión no seu novo sitio inmediatamente
- [ ] Os códigos de desconto funcionan correctamente

### Marca {#branding}

- [ ] A páxina de inicio de sesión mostra a marca de FitSite
- [ ] O Dashboard de administración mostra a marca de FitSite
- [ ] Todos os correos do sistema usan a marca de FitSite e linguaxe específica de fitness
- [ ] As facturas móstranse correctamente cos datos da túa empresa
- [ ] O sitio de marketing está activo e enlaza co formulario de compra

### Incorporación {#onboarding}

- [ ] O widget de Inicio rápido aparece nos Dashboards dos novos clientes
- [ ] Todas as ligazóns de Inicio rápido apuntan ás páxinas correctas
- [ ] A secuencia de correos de benvida está configurada e probada
- [ ] Os artigos da base de coñecemento están publicados e accesibles
- [ ] A páxina Account mostra a información correcta do plan e as opcións de mellora

### Legal e negocio {#legal-and-business}

- [ ] Os termos do servizo están publicados e enlazados desde o fluxo de compra
- [ ] A política de privacidade está publicada e accesible
- [ ] A política de reembolsos está definida e documentada
- [ ] A entidade empresarial está configurada para recibir pagamentos
- [ ] A pasarela de pagamento está en modo en vivo (non en modo de proba)
- [ ] A configuración fiscal é correcta para a túa xurisdición

## Lanzamento suave vs. lanzamento duro {#soft-launch-vs-hard-launch}

Considera un lanzamento en dúas fases:

### Fase 1: Lanzamento suave {#phase-1-soft-launch}

Convida 5-10 propietarios de estudos de fitness a rexistrarse antes do lanzamento público. Estes son os teus clientes beta. Ofrécelles un desconto significativo (50% de desconto de por vida, ou 3 meses gratis) a cambio de:

- Comentarios honestos sobre a experiencia de rexistro e incorporación
- Permiso para usar o seu sitio como exemplo de escaparate
- Informar de calquera erro ou problema que atopen

Isto dáche comentarios reais de clientes e sitios en vivo para mostrar antes de abrir ao público.

### Fase 2: Lanzamento público {#phase-2-public-launch}

Unha vez incorporados os comentarios do lanzamento suave:

- Cambia a pasarela de pagamento ao modo en vivo
- Publica o teu sitio de marketing
- Comeza a captación de clientes (Lección 11)
- Anuncia en canles relevantes da industria do fitness

## Accións do día do lanzamento {#launch-day-actions}

O día que saias ao público:

1. **Cambia a pagamentos en vivo** -- desactiva o modo de proba na túa pasarela de pagamento
2. **Verifica unha vez máis** -- fai un rexistro de proba completo cun pagamento real (reembólsate despois)
3. **Monitoriza de preto** -- observa erros, rexistros fallidos ou problemas de pagamento
4. **Está dispoñible** -- os teus primeiros clientes reais poden necesitar axuda, e unha resposta rápida xera confianza
5. **Celebra brevemente** -- logo volve ao traballo

## Que pode saír mal {#what-can-go-wrong}

Prepárate para:

- **Problemas coa pasarela de pagamento**: Ten listo o contacto de soporte do teu provedor da pasarela
- **Problemas co certificado SSL**: Sabe como comprobar e renovar certificados
- **Fallos na entrega de correos**: Proba que os correos realmente chegan (comproba os cartafoles de spam)
- **Rendemento baixo carga**: Se recibes un pico de tráfico, sabe como escalar o teu aloxamento
- **Confusión dos clientes**: Ten preparados a túa base de coñecemento e as canles de soporte

## A rede FitSite ata agora {#the-fitsite-network-so-far}

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

## O que construímos nesta lección {#what-we-built-this-lesson}

- **Unha lista de comprobación previa ao lanzamento completa** que cobre infraestrutura, contido, pagamentos e legalidade
- **Unha estratexia de lanzamento suave** para obter comentarios reais antes de saír ao público
- **Procedementos para o día do lanzamento** para poñerte en vivo con confianza
- **Un plan de continxencia** para problemas habituais do día do lanzamento

---

**Seguinte:** [Lección 11: Atopar clientes](lesson-11-customers) -- agora que FitSite está en vivo, como consegues que os propietarios de estudos de fitness se rexistren?
