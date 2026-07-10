---
title: 'Lezione 5: Progettare i tuoi piani'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Lezione 5: Progettare i tuoi piani {#lesson-5-designing-your-plans}

I tuoi livelli di piani non sono solo fasce di prezzo, ma riflettono il modo in cui i tuoi clienti di nicchia operano realmente. In questa lezione, progetterai dei livelli di prodotto che corrispondano alle reali esigenze delle attività di fitness in diverse fasi.

## Dove ci eravamo lasciati {#where-we-left-off}

FitSite ha tre modelli pronti (Studio Essential, Gym Pro, Fitness Chain). Ora creeremo i piani che determinano a cosa i clienti hanno accesso e quanto devono pagare.

## Pensare per Segmenti di Clienti {#thinking-in-customer-segments}

L'errore che la maggior parte delle persone fa è progettare i piani basandosi su funzionalità tecniche (archiviazione, larghezza di banda, numero di pagine). I tuoi clienti di nicchia non pensano in questi termini. Un proprietario di palestra pensa a ciò di cui ha bisogno per gestire la propria attività.

Per gli studi di fitness, esistono tre segmenti naturali:

| Segmento | Chi sono | Di cosa hanno bisogno |
|---------|-------------|----------------|
| **I singoli istruttori / piccoli studi** | 1-3 dipendenti, singola sede, all'inizio | Un sito professionale, informazioni sui corsi, modulo di contatto |
| **Palestre consolidate** | 5-20 dipendenti, singola sede, in crescita | Tutto quanto sopra più prenotazioni, blog, galleria, dominio personalizzato |
| **Catene di fitness** | Più sedi, marchio consolidato | Tutto quanto sopra più multisito, pagine delle sedi, elenco personale |

I tuoi piani dovrebbero essere collegati a questi segmenti, non a pacchetti di funzionalità arbitrari.

## Creare i Piani FitSite {#creating-the-fitsite-plans}

Vai su **Ultimate Multisite > Products > Add Product** per ogni piano.

### Piano 1: FitSite Starter -- $49/mese {#plan-1-fitsite-starter----49month}

**Target**: I singoli istruttori e i piccoli studi

**Scheda Descrizione**:
- Nome: FitSite Starter
- Descrizione: "Tutto ciò di cui un personal trainer o un piccolo studio ha bisogno per apparire professionale online."

**Scheda Generale**:
- Tipo di prodotto: Piano
- Ruolo del cliente: Amministratore

**Scheda Modelli Sito**:
- Consentire modelli sito: Attivato
- Modelli disponibili: Solo Studio Essential

**Limitazioni**:
- Siti: 1
- Spazio su disco: 1 GB
- Dominio personalizzato: Disattivato (usa `studioname.fitsite.com`)

**Scheda Plugin**:
- Plugin modulo di contatto: Forza Attiva
- Plugin SEO: Forza Attiva
- Plugin prenotazioni: Non disponibile (incentivo di upgrade)

**Scheda Temi**:
- Tema selezionato: Forza Attiva
- Tutti gli altri temi: Nascosto

### Piano 2: FitSite Growth -- $99/mese {#plan-2-fitsite-growth----99month}

**Target**: Palestre consolidate con sede unica

**Scheda Descrizione**:
- Nome: FitSite Growth
- Descrizione: "Per le palestre consolidate pronte a far crescere la loro presenza online e ad attrarre nuovi membri."

**Scheda Modelli Sito**:
- Modelli disponibili: Studio Essential e Gym Pro

**Limitazioni**:
- Siti: 1
- Spazio su disco: 5 GB
- Dominio personalizzato: Attivato

**Scheda Plugin**:
- Tutto quello presente in Starter, più:
- Plugin prenotazioni: Forza Attiva
- Plugin galleria: Forza Attiva
- Funzionalità blog: Disponibile

**Scheda Upgrade e Downgrade**:
- Gruppo piani: FitSite Plans
- Ordine prodotto: 2

### Piano 3: FitSite Pro -- $199/mese {#plan-3-fitsite-pro----199month}

**Target**: Catene di fitness con più sedi

**Scheda Descrizione**:
- Nome: FitSite Pro
- Descrizione: "La piattaforma completa per i marchi di fitness con più sedi."

**Scheda Modelli Sito**:
- Modelli disponibili: Tutti e tre i modelli

**Limitazioni**:
- Siti: 5 (uno per sede)
- Spazio su disco: 20 GB
- Dominio personalizzato: Attivato

**Scheda Plugin**:
- Tutto quello presente in Growth, più:
- Tutti i plugin premium: Forza Attiva

**Scheda Upgrade e Downgrade**:
- Gruppo piani: FitSite Plans
- Ordine prodotto: 3

## Impostare il Gruppo Piani {#setting-up-the-plan-group}

Il gruppo piani assicura che i clienti possano effettuare upgrade o downgrade solo all'interno della famiglia di piani FitSite. Su ogni scheda **Upgrade e Downgrade** del piano:

1. Imposta il **Gruppo piani** su "FitSite Plans" per tutti e tre i piani
2. Imposta l'**Ordine prodotto** su 1 (Starter), 2 (Growth), 3 (Pro)

Questo crea un percorso di upgrade chiaro: Starter → Growth → Pro.

## Aggiungere Aggiunte all'Ordine (Order Bumps) {#adding-order-bumps}

Le aggiunte all'ordine sono prodotti extra offerti durante il checkout. Per FitSite, considera:

- **Pacchetto archiviazione extra** ($19/mese) -- 5 GB di spazio su disco aggiuntivi
- **Supporto prioritario** ($29/mese) -- tempi di risposta più rapidi
- **Sito aggiuntivo** ($39/mese) -- per i clienti che necessitano di più siti di quanti ne consenta il loro piano

Crea questi come prodotti di tipo **Package** in Ultimate Multisite e associali ai piani pertinenti.

## Perché questa struttura funziona {#why-this-structure-works}

- **Starter** rimuove le barriere all'ingresso -- prezzo basso, offerta semplice, permette agli istruttori di andare online rapidamente
- **Growth** aggiunge le funzionalità che le palestre richiedono realmente -- prenotazioni, gallerie, domini personalizzati
- **Pro** serve il segmento ad alto valore che necessita di supporto multi-sede
- **Aggiunte all'ordine** permettono ai clienti di personalizzare senza complicare i piani principali
- **Percorso di upgrade chiaro** significa che i clienti crescono con te anziché andarsene

## La Rete FitSite finora {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (modalità sottodominio)
├── Ultimate Multisite (configurato)
├── Hosting con SSL wildcard + mappatura dominio
├── Modelli Sito (Studio Essential, Gym Pro, Fitness Chain)
├── Prodotti
│   ├── FitSite Starter ($49/mese) → modello Studio Essential
│   ├── FitSite Growth ($99/mese) → modelli Studio Essential + Gym Pro
│   ├── FitSite Pro ($199/mese) → tutti i modelli
│   └── Aggiunte all'ordine (Extra Storage, Priority Support, Additional Site)
└── Pronto per la configurazione del checkout (prossima lezione)
```

## Cosa abbiamo costruito in questa lezione {#what-we-built-this-lesson}

- **Tre livelli di piani** collegati a reali segmenti di attività di fitness
- **Controllo delle funzionalità** utilizzando i controlli di plugin e modello di Ultimate Multisite
- **Un gruppo piani** con un percorso di upgrade chiaro
- **Prodotti aggiuntivi all'ordine** per entrate extra
- **Una struttura di prezzi** basata sul valore per il cliente, non sulle specifiche tecniche

---

**Prossimo:** [Lezione 6: L'esperienza di iscrizione](lesson-6-checkout) -- costruiremo un flusso di checkout che converta i proprietari di studi di fitness in clienti paganti.
