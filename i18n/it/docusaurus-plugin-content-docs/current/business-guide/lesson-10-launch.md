---
title: 'Lezione 10: Giorno del lancio'
sidebar_position: 11
_i18n_hash: 49ba467b8efba57e92cf072bcec53969
---
# Lezione 10: Il Giorno del Lancio

Tutto è costruito. Prima di aprire le porte, questa lezione ti guiderà attraverso la checklist pre-lancio per assicurarti che nulla sia rotto, mancante o imbarazzante.

## Dove ci eravamo lasciati {#where-we-left-off}

FitSite ha template, piani, checkout, branding, onboarding e prezzi tutti configurati. Ora verifichiamo che tutto funzioni e andiamo online.

## Checklist Pre-Lancio {#pre-launch-checklist}

Lavora su ogni elemento. Non saltarne nessuno.

### Infrastruttura della Piattaforma {#platform-infrastructure}

- [ ] L'hosting è stabile e performante sotto carico
- [ ] SSL Wildcard è attivo e tutti i sottodomini sono serviti tramite HTTPS
- [ ] Il mapping dei domini funziona: testa la creazione di un sito e l'associazione di un dominio personalizzato
- [ ] I backup sono configurati e testati (ripristina almeno uno per verificare)
- [ ] Il monitoraggio è attivo: saprai se la piattaforma va giù

### Template {#templates}

- [ ] Tutti e tre i template vengono caricati correttamente sui nuovi siti
- [ ] Il contenuto segnaposto è utile e privo di refusi
- [ ] Tutte le immagini sono correttamente licenziate (nessun watermark di foto stock)
- [ ] La responsività mobile funziona su ogni pagina del template
- [ ] La velocità di caricamento della pagina è accettabile (testa con uno strumento come GTmetrix o PageSpeed Insights)
- [ ] Nessun link rotto o asset mancante su alcun template

### Piani e Prodotti {#plans-and-products}

- [ ] Tutti e tre i piani sono attivi e visibili
- [ ] Le descrizioni dei piani sono accurate e specifiche per la nicchia
- [ ] I prezzi sono corretti (mensili e annuali)
- [ ] Le spese di configurazione sono configurate sui piani corretti
- [ ] Il periodo di prova funziona sul piano Starter
- [ ] Gli "order bumps" (aggiunte all'ordine) appaiono correttamente durante il checkout
- [ ] I limiti di plugin e tema sono applicati correttamente per piano

### Flusso di Checkout {#checkout-flow}

- [ ] Completa un test di iscrizione completo su ogni piano (usa la modalità di pagamento di test)
- [ ] La selezione del template mostra i template corretti per piano
- [ ] Il pagamento avviene con successo
- [ ] Il cliente riceve l'email di benvenuto dopo l'iscrizione
- [ ] Viene creato un nuovo sito con il template corretto
- [ ] Il cliente può accedere al suo nuovo sito immediatamente
- [ ] I codici sconto funzionano correttamente

### Branding {#branding}

- [ ] La pagina di login mostra il branding FitSite
- [ ] La dashboard admin mostra il branding FitSite
- [ ] Tutte le email di sistema utilizzano il branding FitSite e un linguaggio specifico per il fitness
- [ ] Le fatture vengono visualizzate correttamente con i tuoi dettagli aziendali
- [ ] Il sito di marketing è attivo e linka al modulo di checkout

### Onboarding {#onboarding}

- [ ] Il widget Quick Start appare nelle dashboard dei nuovi clienti
- [ ] Tutti i link Quick Start puntano alle pagine corrette
- [ ] La sequenza di email di benvenuto è configurata e testata
- [ ] Gli articoli della knowledge base sono pubblicati e accessibili
- [ ] La pagina account mostra le informazioni corrette sul piano e le opzioni di upgrade

### Legale e Aziendale {#legal-and-business}

- [ ] I Termini di servizio sono pubblicati e linkati dal checkout
- [ ] L'informativa sulla privacy è pubblicata e accessibile
- [ ] La politica di rimborso è definita e documentata
- [ ] L'entità aziendale è impostata per ricevere pagamenti
- [ ] Il payment gateway è in modalità live (non in modalità test)
- [ ] La configurazione fiscale è corretta per la tua giurisdizione

## Soft Launch vs. Hard Launch {#soft-launch-vs-hard-launch}

Considera un lancio in due fasi:

### Fase 1: Soft Launch {#phase-1-soft-launch}

Invita 5-10 proprietari di studi fitness a registrarsi prima del lancio pubblico. Questi sono i tuoi clienti beta. Offri loro uno sconto significativo (50% per sempre, o 3 mesi gratuiti) in cambio di:

- Feedback onesto sull'esperienza di iscrizione e onboarding
- Il permesso di usare il loro sito come esempio di vetrina
- La segnalazione di bug o problemi riscontrati

Questo ti fornisce feedback reali dai clienti e siti attivi da mostrare prima di aprirti al pubblico.

### Fase 2: Public Launch {#phase-2-public-launch}

Una volta incorporati i feedback del soft launch:

- Passa il payment gateway in modalità live
- Pubblica il tuo sito di marketing
- Inizia l'acquisizione clienti (Lezione 11)
- Annuncia sui canali rilevanti dell'industria fitness

## Azioni per il Giorno del Lancio {#launch-day-actions}

Il giorno in cui diventi pubblico:

1. **Passa ai pagamenti live** -- disabilita la modalità test sul tuo payment gateway
2. **Verifica ancora una volta** -- fai un test di iscrizione completo con un pagamento reale (rimborsati dopo)
3. **Monitora attentamente** -- fai attenzione a errori, iscrizioni fallite o problemi di pagamento
4. **Sii disponibile** -- i tuoi primi clienti reali potrebbero aver bisogno di aiuto, e una risposta rapida costruisce fiducia
5. **Festeggia brevemente** -- poi torna al lavoro

## Cosa può andare storto {#what-can-go-wrong}

Sii preparato per:

- **Problemi con il payment gateway**: Tieni pronto il contatto di supporto del tuo provider di gateway
- **Problemi con il certificato SSL**: Sapere come controllare e rinnovare i certificati
- **Fallimenti di consegna email**: Testa che le email arrivino effettivamente (controlla le cartelle spam)
- **Performance sotto carico**: Se hai un picco di traffico, sapere come scalare l'hosting
- **Confusione del cliente**: Tieni pronti la tua knowledge base e i canali di supporto

## La Rete FitSite finora {#the-fitsite-network-so-far}

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

## Cosa abbiamo costruito in questa lezione {#what-we-built-this-lesson}

- **Una checklist pre-lancio completa** che copre infrastruttura, contenuti, pagamenti e aspetti legali
- **Una strategia di soft launch** per ottenere feedback reali prima di andare online
- **Procedure per il giorno del lancio** per operare con sicurezza
- **Un piano di emergenza** per i problemi comuni del giorno del lancio

---

**Prossimo:** [Lesson 11: Finding Customers](lesson-11-customers) -- ora che FitSite è attivo, come fai a far iscrivere i proprietari di studi fitness?
