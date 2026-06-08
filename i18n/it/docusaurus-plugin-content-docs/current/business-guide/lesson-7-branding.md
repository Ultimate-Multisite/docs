---
title: 'Lezione 7: Rendilo tuo'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Lezione 7: Rendilo Tuo

I tuoi clienti non dovrebbero mai sentire di usare "un plugin WordPress". Devono sentire di usare FitSite: una piattaforma costruita per il loro settore. Questa lezione copre il branding, il white-labeling e come far sembrare la piattaforma un prodotto autonomo.

## Dove ci eravamo lasciati

FitSite ha un flusso di checkout funzionante che porta i proprietari di studi fitness dalla selezione del piano fino al sito attivo. Ora facciamo in modo che l'intera esperienza sembri un prodotto coeso e con un brand definito.

## Il Dominio della Tua Piattaforma

Il fondamento del tuo brand è il tuo dominio. Per FitSite:

- **Dominio principale**: `fitsite.com` (il tuo sito di marketing e la radice della rete)
- **Siti clienti**: `studioname.fitsite.com` (sottodomini)
- **Domini personalizzati**: I clienti con i piani Growth e Pro possono collegare il proprio dominio

### Configurare il Dominio

1. Registra il dominio della tua piattaforma
2. Puntalo al tuo provider di hosting
3. Configura il DNS wildcard (`*.fitsite.com`) per i sottodomini dei clienti
4. Assicurati che il SSL wildcard sia attivo

Consulta [Come configurare il mapping dei domini](/user-guide/domain-mapping/how-to-configure-domain-mapping) per istruzioni dettagliate.

## White-Labeling dell'Esperienza Amministrativa

Quando un proprietario di studio fitness accede alla dashboard del proprio sito, dovrebbe vedere il tuo brand, non il branding di WordPress o Ultimate Multisite.

### Pagina di Login Personalizzata

Personalizza la pagina di login di WordPress per mostrare:

- Il tuo logo FitSite
- Immagini di sfondo adatte al settore fitness
- I colori del tuo brand

### Branding della Dashboard

Usa l'addon [Admin Page Creator](/addons/admin-page-creator) o CSS personalizzato per:

- Sostituire il logo di WordPress con il tuo logo FitSite
- Personalizzare lo schema colori dell'admin per farlo corrispondere al tuo brand
- Aggiungere un widget personalizzato alla dashboard con collegamenti rapidi e risorse di aiuto specifiche per il fitness

### Pagine Amministrative Personalizzate

Considera di creare pagine amministrative personalizzate che mettano in risalto le azioni più rilevanti per i proprietari di studi fitness:

- "Modifica il tuo programma di lezioni"
- "Aggiorna i profili degli istruttori"
- "Visualizza il tuo sito"

Questo riduce la curva di apprendimento mettendo le azioni rilevanti per il settore in primo piano, invece di nasconderle nel menu standard di WordPress.

## Branding delle Comunicazioni

Ogni email, fattura e notifica dovrebbe rafforzare il tuo brand.

### Email di Sistema

Vai su **Ultimate Multisite > Settings > Emails** e personalizza tutte le email di sistema:

- **Nome mittente**: FitSite
- **Email mittente**: hello@fitsite.com
- **Modelli email**: Usa i colori e il logo del tuo brand
- **Lingua**: Specifica per il fitness in tutto il testo

Email chiave da personalizzare:

| Email | Versione generica | Versione FitSite |
|-------|----------------|-----------------|
| Benvenuto | "Il tuo nuovo sito è pronto" | "Il tuo sito web dello studio fitness è attivo" |
| Ricevuta pagamento | "Pagamento ricevuto" | "Pagamento abbonamento FitSite confermato" |
| Prova in scadenza | "La tua prova sta per scadere" | "La tua prova FitSite scade tra 3 giorni – mantieni il tuo sito dello studio attivo" |

### Fatture

Personalizza i modelli di fattura con:

- Il tuo logo FitSite e i colori del brand
- I dettagli della tua attività
- Nomi di prodotti specifici per il fitness (non ID di piani generici)

## Il Sito Visibile al Cliente

Il tuo dominio principale (`fitsite.com`) ha bisogno di un sito di marketing che venda la piattaforma. Questo è separato dall'admin della rete Ultimate Multisite: è il volto pubblico della tua attività.

Pagine chiave:

- **Homepage**: Proposta di valore chiara per le attività fitness
- **Funzionalità**: Cosa fa FitSite, in termini fitness
- **Prezzi**: I tuoi tre piani con confronti di funzionalità specifici per il settore
- **Esempi**: Mostra siti costruiti sulla piattaforma
- **Iscrizione**: Link al tuo modulo di checkout

:::tip Il tuo sito di marketing può essere un sito di rete
Crea il tuo sito di marketing come un sito all'interno della tua rete. Questo ti permette di gestirlo dalla stessa dashboard e dimostra le capacità della tua piattaforma.
:::

## Dominio Personalizzato per i Clienti

Per i clienti che utilizzano piani che includono domini personalizzati, documenta il processo in modo chiaro:

1. Il cliente registra o trasferisce il proprio dominio a un registrar
2. Il cliente aggiorna il DNS per puntare alla tua piattaforma (fornire i record esatti)
3. Ultimate Multisite gestisce il mapping del dominio e l'SSL

Crea un articolo di aiuto o un entry nella knowledge base specificamente per questo processo, scritto per proprietari di studi fitness non tecnici.

## La Rete FitSite Finora

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

## Cosa abbiamo costruito in questa lezione

- **Dominio della piattaforma e DNS** configurati per un'esperienza con brand
- **Admin white-labeled** con branding FitSite in tutto
- **Comunicazioni personalizzate** – email, fatture e notifiche tutte con il brand
- **Un sito di marketing** che vende FitSite ai proprietari di studi fitness
- **Documentazione sui domini personalizzati** per i clienti che desiderano il proprio dominio

---

**Prossimo:** [Lezione 8: Onboarding del Cliente](lesson-8-onboarding) -- progettiamo l'esperienza che trasforma una nuova iscrizione in un cliente attivo e felice.
