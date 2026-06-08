---
title: 'Lliçó 9: Prebació per profit'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Aula 9: Preu per a generar beneficis

A l'Aula 5 vam establir els preus inicials per als plans de FitSite. Ara, refinejem l'estratègia de preus amb tècniques que augmenten els ingressos, incentiven les actualitzacions i redueixen l'abandó (churn).

## On acab vam

FitSite té plans, templates, checkout, branding i onboarding configurats. El preu inicial era de $49/$99/$199 al mes. Ara, fem que aquest preu treballi més.

## Princpis de preu per a plataformes de ni

### Preu basat en el valor, no en el cost

Els teus costos d'hosting poden ser de $5-$15 per site de client. Això no significa que el teu preu hagi de ser de $20. Tu no estem vendent hosting. Estem venent:

- Un lloc web professional de fitness que costaria entre $2.000 i $5.000 de construir a mida
- Manteniment, actualitzacions i seguretat constants que no han de preocupar-se
- Funcionalitats específiques del sector que els constructors genèrics no ofereixen
- La credibilitat d'una plataforma construïda per la seva indústria

Preula basat en el valor que ofereixes, no en el cost de l'ofereix.

### Ancrejar-se a les alternatives

Quan un propietari d'estudi de fitness avalua FitSite, el compara amb:

- **Contractar un desenvolupador web**: $2.000-$5.000 inicials + $50-$100/mes de manteniment
- **Wix/Squarespace**: $16-$45/mes però sense funcionalitats específiques de fitness, ho construeixen ells mateixos
- **No fer res**: Membres perduts que no poden trobar-los en línia

Amb $49-$199/mes, FitSite és més barat que un desenvolupador, més capacitador que els constructors genèrics i infinitament millor que no tenir un lloc web.

## Implementació de variacions de preu

El preu anual incentiva l'compromís i redueix l'abandó. Navega a la pestanya **Price Variations** de cada plan i afegeix les opcions anuals:

| Plan | Monthly | Annual (per month) | Annual Total | Savings |
|------|---------|-------------------|--------------|---------|
| Starter | $49/mo | $39/mo | $468/year | 20% off |
| Growth | $99/mo | $79/mo | $948/year | 20% off |
| Pro | $199/mo | $159/mo | $1,908/year | 20% off |

Afegeix un camp de **Period Selection** al teu formulari de checkout perquè els clients puguin alternar entre la facturació mensual i la anual. Veure [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### Per què funciona el preu anual

- **Per a tu**: Efectiu caixa inicial, menor abandó (els clients que paguen anualment són menys propens a cancelar a mitjà de període)
- **Per a ells**: Estalvis reals, previsible per al pressupost

## Comissions de configuració

Considera una comissió de configuració de pagament únic per als plans que inclouen configuració manual:

- **Starter**: Sense comissió de configuració (elimina barreres d'entrada)
- **Growth**: Comissió de configuració de $99 (cobre la configuració de domini personalitzat i la consulta inicial)
- **Pro**: Comissió de configuració de $299 (cobre la configuració de múltiples ubicacions i la crida d'onboarding)

Configura les comissions de configuració a la secció de preus de cada plan. Veure [Creating Your First Subscription Product](/user-guide/configuration/creating-your-first-subscription-product) per detalls.

## Periodes d'essai

Ofrecer un period d'essai redueix la fricció d'inscripció, però introdueix el risc de no conversió. Per a FitSite:

- **Period d'essai gratuït de 7 dies** només al plan Starter
- Sense period d'essai al Growth i Pro (aquests clients estan més comprometuts i esperen pagar)

Configura el period d'essai a la secció de preus del plan Starter activant el toggle **Offer Trial** i establint la durada a 7 dies.

### Fes que els periodes d'essai converteixin

Un period d'essai només funciona si el client experimenta valor durant aquest període. La teva seqüència d'onboarding (Aula 8) és crítica aquí: els correus de benvinguda han de ser programats per impulsar l'engatjament durant la finestra de 7 dies.

## Códigos de descompte

Crea códigos de descompte estratègics per a propòsits específics:

- **FITLAUNCH** -- 30% de descompte els 3 primers mesos (per promoció de llançament)
- **ANNUAL20** -- 20% de descompte als plans anuals (si encara no estan descomptejats)
- **REFERRAL** -- 1 mes gratis (per referències de clients)

Navega a **Ultimate Multisite > Discount Codes** per crear-hi. Veure [Creating Discount Codes](/user-guide/configuration/creating-discount-codes) per la guia completa.

:::tip No descomptejar per defecte
Els descomptes han de ser eines estratègiques, no elements permanents. Si tothom reben un descompte, no és un descompte: és el teu preu real. Ús-hi per campanyes específiques, referències i promocions limitades en el temps.
:::

## Gestió de impostos

Si operes en una jurisdicció que exigeix la recollida d'impostos:

1. Configura les taxes a **Ultimate Multisite > Settings > Taxes**
2. Aplica categories d'impostos als teus plans
3. Assegura que les factures mostrin els impostos correctament

Veure [Tax Handling](/user-guide/payment-gateways/tax-handling) per a una configuració detallada. Si serveixes clients internacionalment, considera l'addon [VAT addon](/addons/vat) per al compliment de la UE.

## Revisió del teu preu

Després del llançament, revisa els preus trimestralment. Observa:

- **Tasa de conversió per plan**: Si Starter converteix bé però Growth no, el buit entre ells pot ser massa gran
- **Tasa d'actualització**: Si pocs clients actualitzen de Starter a Growth, el plan Growth pot no oferir prou valor addicional
- **Abandó per plan**: Si els clients anuals abandonen menys, impulsa el preu anual més fort
- **Preus de la competència**: Què estan cobrant les alternatives? Estàs posicionat correctament?

## La xarxa FitSite fins ara

```
FitSite Network
├── WordPress Multisite (mode de subdomain)
├── Ultimate Multisite (configurat + branditzat)
├── Platform Domain (fitsite.com + SSL wildcard)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo o $468/yr) + 7-day trial
│   ├── FitSite Growth ($99/mo o $948/yr) + $99 setup fee
│   ├── FitSite Pro ($199/mo o $1,908/yr) + $299 setup fee
│   └── Order Bumps + Discount Codes
├── Checkout Flow (amb toggle de selecció de període)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding (Quick Start, emails, help resources)
├── Pricing Strategy
│   ├── Annual discounts (20% off)
│   ├── Strategic setup fees
│   ├── 7-day trial on Starter
│   ├── Discount codes for campaigns and referrals
│   └── Tax configuration
└── Ready for launch (next lesson)
```

## El que vam construir en aquesta aula

- **Preu anual** amb un descompte del 20% per incentivar l'compromís
- **Comissions de configuració** als nivells més alts per cobrir l'esforç d'onboarding
- **Un period d'essai** al plan d'entrada per reduir la fricció d'inscripció
- **Códigos de descompte estratègics** per llançament, referències i campanyes
- **Configuració d'impostos** per a una facturació compliant
- **Un marc de revisió de preus** per a l'optimització contínua

---

**Pròxima:** [Aula 10: Dia del llançament](lesson-10-launch) — la llista de revisió prèvia al llançament i la posada en operació.
