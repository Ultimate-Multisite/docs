---
title: 'Lezione 8: Onboarding del cliente'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Lezione 8: Onboarding del Cliente

Far iscrivere un cliente è solo metà del lavoro. Se accede, si sente sopraffatto e non torna più, l'hai perso. Questa lezione ti guiderà nella creazione dell'esperienza che trasforma una nuova iscrizione in un cliente attivo e coinvolto.

## Dove ci eravamo lasciati {#where-we-left-off}

FitSite è completamente personalizzato e dispone di un flusso di checkout funzionante. Ora ci concentriamo su cosa succede dopo che il proprietario di uno studio di fitness completa l'iscrizione e atterra sul suo nuovo sito per la prima volta.

## Perché è importante l'onboarding {#why-onboarding-matters}

I primi 30 minuti dopo l'iscrizione determinano se un cliente rimane o se abbandona il servizio. Un proprietario di studio di fitness che:

- Accede e vede un sito che sembra già un sito di fitness → rimane
- Sa esattamente cosa fare dopo → rimane
- Si sente perso in un generico dashboard di WordPress → se ne va

I tuoi template di nicchia (Lezione 4) gestiscono il primo punto. Questa lezione gestisce il secondo.

## L'esperienza del primo accesso {#the-first-login-experience}

### Widget Dashboard di Benvenuto {#welcome-dashboard-widget}

Crea un widget dashboard personalizzato che saluti i nuovi clienti e li guidi nella configurazione. Questo dovrebbe apparire in modo prominente quando accedono per la prima volta.

**Quick Start di FitSite:**

1. **Aggiungi il nome e il logo del tuo studio** -- Link alle impostazioni di Customizer o Identità del Sito
2. **Aggiorna il tuo programma di lezioni** -- Link diretto all'editor della pagina Classi
3. **Aggiungi i tuoi istruttori** -- Link all'editor della pagina Istruttori
4. **Imposta i tuoi contatti** -- Link all'editor della pagina Contatti
5. **Anteprima il tuo sito** -- Link al frontend

Ogni passaggio linka direttamente alla pagina o all'impostazione pertinente. Niente ricerche nei menu.

### Semplificare il Dashboard {#simplify-the-dashboard}

I nuovi clienti non devono vedere ogni elemento del menu di WordPress. Considera di:

- Nascondere gli elementi del menu non rilevanti per la gestione di un sito di fitness (ad esempio, Commenti se non sono utilizzati)
- Riordinare il menu per mettere per primi gli elementi più utilizzati
- Aggiungere etichette di menu personalizzate che abbiano senso per la nicchia ("Il tuo Studio" invece di "Aspetto")

L'addon [Plugin & Theme Manager](/addons/plugin-and-theme-manager) può aiutare a controllare ciò che vedono i clienti.

## Sequenza di email di benvenuto {#welcome-email-sequence}

Un'unica email di benvenuto non è sufficiente. Imposta una sequenza che guidi i clienti durante la prima settimana:

### Email 1: Benvenuto (Immediatamente dopo l'iscrizione) {#email-1-welcome-immediately-after-signup}

- Oggetto: "Benvenuto in FitSite -- il sito web del tuo studio è attivo"
- Contenuto: Link di accesso, passaggi di avvio rapido, link alle risorse di aiuto
- Tono: Entusiasta, incoraggiante, specifico per il fitness

### Email 2: Prime Vittorie (Giorno 1) {#email-2-quick-wins-day-1}

- Oggetto: "3 cose da fare per prime sul tuo FitSite"
- Contenuto: Aggiungi il tuo logo, aggiorna l'immagine hero della homepage, aggiungi il programma di lezioni
- Includi screenshot che mostrano esattamente dove cliccare

### Email 3: Rendilo tuo (Giorno 3) {#email-3-make-it-yours-day-3}

- Oggetto: "Rendi unico il tuo sito di fitness"
- Contenuto: Personalizza i colori, aggiungi foto degli istruttori, scrivi la storia del tuo studio
- Link ad esempi di ottimi siti di fitness sulla piattaforma

### Email 4: Vai online (Giorno 7) {#email-4-go-live-day-7}

- Oggetto: "Pronto per condividere il tuo FitSite con il mondo?"
- Contenuto: Checklist di ciò che verificare prima di condividere, come collegare un dominio personalizzato (se si è su Growth/Pro), consigli per la condivisione sui social

:::tip Automazione Email
Usa [Webhooks](/user-guide/integrations/webhooks) o [Zapier](/user-guide/integrations/zapier) per attivare queste email tramite la tua piattaforma di email marketing. Questo ti dà più controllo sui tempi e ti permette di tracciare il coinvolgimento.
:::

## Risorse di aiuto {#help-resources}

Crea contenuti di aiuto specifici per la nicchia che rispondano alle domande che i proprietari di studi di fitness fanno realmente:

### Articoli della Knowledge Base {#knowledge-base-articles}

- "Come aggiornare il programma di lezioni"
- "Aggiungere e modificare i profili degli istruttori"
- "Cambiare il logo e i colori dello studio"
- "Collegare il proprio nome di dominio" (per clienti Growth/Pro)
- "Aggiungere un widget di prenotazione al sito"

Scrivili per utenti non tecnici. Usa screenshot. Evita il gergo di WordPress.

### Video Tutorial {#video-walkthroughs}

Registrazioni dello schermo brevi (2-3 minuti) che mostrano:

- Primo accesso e orientamento
- Modifica della homepage
- Aggiornamento del programma di lezioni
- Aggiunta di un nuovo istruttore

Non devono essere produzioni patinate. Ciò che conta è che siano chiari, utili e specifici per la nicchia.

## La Pagina Account {#the-account-page}

Ultimate Multisite include una [Pagina Account](/user-guide/client-management/account-page) visibile al cliente dove i clienti gestiscono il loro abbonamento. Personalizzala per:

- Mostrare il loro attuale piano FitSite
- Visualizzare opzioni di upgrade con benefici specifici per il fitness
- Fornire la cronologia delle fatture e il download delle ricevute
- Linkare alle risorse di aiuto

## Misurare il successo dell'onboarding {#measuring-onboarding-success}

Traccia questi indicatori per sapere se il tuo onboarding sta funzionando:

- **Tasso di attivazione**: Quale percentuale di iscrizioni personalizza effettivamente il proprio sito entro la prima settimana?
- **Accessi nella prima settimana**: Quante volte un nuovo cliente accede durante la prima settimana?
- **Ticket di supporto dai nuovi clienti**: Un volume elevato significa che il tuo onboarding ha lacune
- **Conversione da prova a pagante**: Se offri prove gratuite, quale percentuale converte?

## La Rete FitSite finora {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (modalità sottodominio)
├── Ultimate Multisite (configurato + brandizzato)
├── Platform Domain (fitsite.com + SSL wildcard)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (specifico per nicchia, testato)
├── Branding (login, dashboard, email, fatture, sito marketing)
├── Customer Onboarding
│   ├── Quick Start dashboard widget
│   ├── Simplified dashboard for fitness site management
│   ├── 4-email welcome sequence
│   ├── Niche-specific knowledge base
│   ├── Video walkthroughs
│   └── Customized account page
└── Pronto per la strategia di prezzi (prossima lezione)
```

## Cosa abbiamo costruito in questa lezione {#what-we-built-this-lesson}

- **Un'esperienza di primo accesso guidata** con un widget Quick Start
- **Un dashboard semplificato** focalizzato sui compiti di gestione del sito di fitness
- **Una sequenza di email di benvenuto** che guida i clienti durante la prima settimana
- **Risorse di aiuto specifiche per la nicchia** scritte per proprietari di studi di fitness non tecnici
- **Metriche di onboarding** per tracciare e migliorare l'esperienza

---

**Prossimo:** [Lezione 9: Prezzi per il profitto](lesson-9-pricing) -- affineremo la strategia di prezzi per massimizzare i ricavi e minimizzare l'abbandono.
