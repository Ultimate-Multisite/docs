---
title: 'Lezione 9: Prezzi per il profitto'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Lezione 9: Prezzi per il Profitto

Nella Lezione 5 abbiamo impostato i prezzi iniziali per i piani FitSite. Ora affineremo la strategia di prezzo con tecniche che aumentano i ricavi, incoraggiano gli upgrade e riducono il tasso di abbandono (churn).

## Dove ci eravamo lasciati {#where-we-left-off}

FitSite ha piani, template, checkout, branding e onboarding pronti. Il prezzo iniziale era di $49/$99/$199 al mese. Ora facciamo in modo che questo prezzo lavori ancora di più.

## Principi di Prezzo per Piattaforme di Nicchia {#pricing-principles-for-niche-platforms}

### Prezzare in Base al Valore, Non al Costo {#price-on-value-not-cost}

I tuoi costi di hosting potrebbero essere di $5-$15 per sito cliente. Questo non significa che il tuo prezzo debba essere di $20. Non stai vendendo l'hosting. Stai vendendo:

- Un sito web professionale per il fitness che costerebbe $2.000-$5.000 da costruire su misura
- Manutenzione, aggiornamenti e sicurezza continui di cui non devono preoccuparsi
- Funzionalità specifiche per la nicchia che i builder generici non offrono
- La credibilità di una piattaforma costruita per il loro settore

Prezza in base al valore che offri, non al costo per fornirlo.

### Ancorare alle Alternative {#anchor-to-alternatives}

Quando un proprietario di studio fitness valuta FitSite, lo confronta con:

- **Assumare uno sviluppatore web**: $2.000-$5.000 iniziali + $50-$100/mese di manutenzione
- **Wix/Squarespace**: $16-$45/mese ma senza funzionalità specifiche per il fitness, lo costruiscono da soli
- **Non fare nulla**: Membri persi che non possono trovare online

A $49-$199/mese, FitSite è più economico di uno sviluppatore, più capace dei builder generici e infinitamente meglio di non avere un sito web.

## Implementare le Variazioni di Prezzo {#implementing-price-variations}

I prezzi annuali incoraggiano l'impegno e riducono il tasso di abbandono. Vai alla scheda **Variazioni di Prezzo** di ogni piano e aggiungi le opzioni annuali:

| Plan | Monthly | Annual (per month) | Annual Total | Savings |
|------|---------|-------------------|--------------|---------|
| Starter | $49/mo | $39/mo | $468/year | 20% off |
| Growth | $99/mo | $79/mo | $948/year | 20% off |
| Pro | $199/mo | $159/mo | $1,908/year | 20% off |

Aggiungi un campo **Selezione Periodo** al tuo modulo di checkout in modo che i clienti possano passare tra fatturazione mensile e annuale. Vedi [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### Perché i Prezzi Annuali Funzionano {#why-annual-pricing-works}

- **Per te**: Cassa immediata, minor tasso di abbandono (i clienti che pagano annualmente sono meno propensi a cancellare a metà percorso)
- **Per loro**: Risparmi reali, prevedibilità del budget

## Costi di Configurazione {#setup-fees}

Considera un costo di configurazione una tantum per i piani che includono configurazione pratica:

- **Starter**: Nessun costo di configurazione (rimuovi le barriere all'ingresso)
- **Growth**: Costo di configurazione di $99 (copre la configurazione del dominio personalizzato e la consulenza iniziale)
- **Pro**: Costo di configurazione di $299 (copre l'impostazione multi-sede e la chiamata di onboarding)

Configura i costi di configurazione nella sezione prezzi di ogni piano. Vedi [Creating Your First Subscription Product](/user-guide/configuration/creating-your-first-subscription-product) per i dettagli.

## Periodi di Prova {#trial-periods}

Offrire una prova riduce l'attrito all'iscrizione, ma introduce il rischio di non conversione. Per FitSite:

- **Prova gratuita di 7 giorni** solo sul piano Starter
- Nessuna prova su Growth e Pro (questi clienti sono più impegnati e si aspettano di pagare)

Configura la prova nella sezione prezzi del piano Starter abilitando l'interruttore **Offer Trial** e impostando la durata su 7 giorni.

### Far Convertire le Prove {#making-trials-convert}

Una prova funziona solo se il cliente ne sperimenta il valore durante il periodo di prova. La tua sequenza di onboarding (Lezione 8) è fondamentale: le email di benvenuto dovrebbero essere programmate per stimolare l'interazione entro la finestra di 7 giorni.

## Codici Sconto {#discount-codes}

Crea codici sconto strategici per scopi specifici:

- **FITLAUNCH** -- 30% di sconto sui primi 3 mesi (per la promozione di lancio)
- **ANNUAL20** -- 20% di sconto sui piani annuali (se non già scontati)
- **REFERRAL** -- 1 mese gratuito (per i referral dei clienti)

Vai su **Ultimate Multisite > Discount Codes** per crearli. Vedi [Creating Discount Codes](/user-guide/configuration/creating-discount-codes) per la guida completa.

:::tip Non Scontare di Default
Gli sconti dovrebbero essere strumenti strategici, non elementi permanenti. Se tutti ricevono uno sconto, non è uno sconto, è il tuo prezzo reale. Usali per campagne specifiche, referral e promozioni a tempo limitato.
:::

## Gestione delle Imposte {#tax-handling}

Se operi in una giurisdizione che richiede la riscossione delle tasse:

1. Configura i tassi di imposta in **Ultimate Multisite > Settings > Taxes**
2. Applica categorie fiscali ai tuoi piani
3. Assicurati che le fatture visualizzino correttamente le imposte

Vedi [Tax Handling](/user-guide/payment-gateways/tax-handling) per la configurazione dettagliata. Se servi clienti a livello internazionale, considera l'addon [VAT addon](/addons/vat) per la conformità UE.

## Revisione dei Prezzi {#reviewing-your-pricing}

Dopo il lancio, rivedi i prezzi ogni trimestre. Guarda:

- **Tasso di conversione per piano**: Se Starter converte bene ma Growth no, il divario tra loro potrebbe essere troppo grande
- **Tasso di upgrade**: Se pochi clienti passano da Starter a Growth, il piano Growth potrebbe non offrire abbastanza valore aggiuntivo
- **Tasso di abbandono per piano**: Se i clienti annuali abbandonano meno, spingi di più sui prezzi annuali
- **Prezzi dei concorrenti**: Cosa addebitano le alternative? Sei posizionato correttamente?

## La Rete FitSite Finora {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo or $468/yr) + 7-day trial
│   ├── FitSite Growth ($99/mo or $948/yr) + $99 setup fee
│   ├── FitSite Pro ($199/mo or $1,908/yr) + $299 setup fee
│   └── Order Bumps + Discount Codes
├── Checkout Flow (with period selection toggle)
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

## Cosa abbiamo costruito in questa lezione {#what-we-built-this-lesson}

- **Prezzi annuali** con sconto del 20% per incoraggiare l'impegno
- **Costi di configurazione** sui livelli più alti per coprire lo sforzo di onboarding
- **Un periodo di prova** sul piano di ingresso per ridurre l'attrito all'iscrizione
- **Codici sconto strategici** per lanci, referral e campagne
- **Configurazione fiscale** per una fatturazione conforme
- **Un framework di revisione dei prezzi** per un'ottimizzazione continua

---

**Prossimo:** [Lesson 10: Launch Day](lesson-10-launch) -- la checklist pre-lancio e il go live.
