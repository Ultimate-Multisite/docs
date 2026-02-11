---
title: Gestione dei siti
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Gestione dei siti

I siti (o sottositi) sono il cuore del tuo business WaaS. Ultimate Multisite ha 3 tipi di siti:

- **Di proprietà del cliente** — Siti appartenenti a clienti specifici
- **Modelli di sito** — Siti predefiniti che i clienti possono selezionare come punto di partenza
- **Sito principale** — Il tuo sito principale di rete

## Visualizzazione dei siti

Naviga su **Ultimate Multisite → Sites** per vedere tutti i sottositi nella tua rete. Ogni sito è etichettato per tipo e puoi filtrare per Tutti i siti, Di proprietà del cliente, Modelli, o In attesa.

![Sites list page](/img/admin/sites-list.png)

## Aggiunta di un nuovo sito

Fai clic sul pulsante **Aggiungi sito** per creare un nuovo sito. Dovrai fornire:

- **Titolo del sito** — Il nome del nuovo sito
- **URL del sito** — Il dominio/percorso per il sito
- **Tipo di sito** — Se è un sito cliente, un modello o un sito regolare

L'opzione **Copia sito** ti consente di creare un nuovo sito basato su un modello di sito esistente. Quando è abilitata, puoi selezionare quale modello utilizzare come punto di partenza. Assicurati che **Copia media sulla duplicazione** sia abilitata per includere i file multimediali.

## Gestione di un sito esistente

Fai clic su **Gestisci** su qualsiasi sito per aprire la pagina **Modifica sito**. Qui troverai:

### Informazioni di base

Il nome del sito, il tipo, l'ID del sito e la descrizione. Vedrai anche il dominio mappato, l'abbonamento associato e l'account cliente che possiede il sito.

### Opzioni del sito

Configura le capacità e i limiti del sito:

- **Limiti di visita** — Numero massimo di visite al sito
- **Limiti di account utente** — Limiti per ruolo utente
- **Spazio su disco** — Quota di spazio di archiviazione per il sito
- **Dominio personalizzato** — Abilita la mappatura del dominio per questo sito
- **Visibilità plugin e tema** — Controlla quali plugin e temi sono visibili, nascosti o pre-attivati

Per impostazione predefinita, i siti seguono i limiti impostati a livello di abbonamento. Impostare limiti a livello di sito sovrascriverà le impostazioni dell'abbonamento.

### Associazioni

Sotto le opzioni del sito troverai informazioni su:

- **Domini mappati** associati al sito
- **Abbonamento** a cui il sito è associato
- **Account cliente** collegato al sito

### Barra laterale destra

Sul lato destro puoi:

- **Abilita/disabilita il sito** con un pulsante di commutazione
- **Cambia il tipo di sito** o riassegnare la proprietà
- **Imposta un'immagine/miniatura del sito** (visualizzato sul frontend per i modelli di sito)
- **Elimina il sito** permanentemente

:::warning
Eliminare un sito è irreversibile. Il sito e tutto il suo contenuto verranno rimossi permanentemente.
:::
