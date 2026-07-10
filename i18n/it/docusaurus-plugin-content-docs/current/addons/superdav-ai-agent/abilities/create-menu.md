---
title: Crea Menu
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Creare Menu {#create-menu}

La funzionalità **Crea Menu** permette di creare menu di navigazione WordPress con il supporto di etichette di navigazione distinte dai titoli delle pagine.

## Panoramica {#overview}

Questa funzionalità estende la creazione standard dei menu aggiungendo la possibilità di specificare un parametro `navigation_label`. Questo vi consente di creare menu in cui l'etichetta visualizzata nella navigazione è diversa dal titolo della pagina, offrendo maggiore flessibilità nella struttura del sito e nell'esperienza utente.

## Parametri {#parameters}

| Parametro | Tipo | Obbligatorio | Descrizione |
|-----------|------|--------------|-------------|
| `name` | string | Sì | Nome del menu, es. `Navigazione Principale` |
| `location` | string | No | Posizione del tema a cui assegnare questo menu, es. `primary` |
| `navigation_label` | string | No | Etichetta da visualizzare nella navigazione (diversa dal titolo della pagina) |

## Valore di Ritorno {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Navigazione Principale",
  "navigation_label": "Menu Principale"
}
```

## Etichetta di Navigazione vs Titolo Pagina {#navigation-label-vs-page-title}

Il parametro `navigation_label` vi permette di separare il nome interno del menu dall'etichetta visualizzata agli utenti:

- **`name`** — Identificatore interno del menu utilizzato da WordPress (es. "Navigazione Principale")
- **`navigation_label`** — L'etichetta visualizzata ai visitatori del sito nella navigazione (es. "Menu Principale")

Questo è utile quando:
- La vostra convenzione di denominazione interna è diversa dalle etichette visibili agli utenti
- Desiderate etichette più brevi nella navigazione rispetto al pannello di amministrazione
- Dovete supportare più lingue con lunghezze di etichetta diverse
- State creando menu per regioni o gruppi di utenti specifici

## Esempi di Utilizzo {#usage-examples}

### Esempio 1: Menu Semplice con Etichetta di Navigazione {#example-1-simple-menu-with-navigation-label}

**Prompt:**
```
Crea un menu di navigazione principale chiamato "Navigazione Principale" con l'etichetta di navigazione "Menu".
```

**Risultato:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Navigazione Principale",
  "navigation_label": "Menu"
}
```

### Esempio 2: Menu per Posizione Tema Specifica {#example-2-menu-for-specific-theme-location}

**Prompt:**
```
Crea un menu footer chiamato "Link Footer" con l'etichetta di navigazione "Link Veloci" e assegnarlo alla posizione footer.
```

**Risultato:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Link Footer",
  "navigation_label": "Link Veloci",
  "location": "footer"
}
```

## Integrazione con Theme Builder {#integration-with-theme-builder}

Quando si utilizza Theme Builder, la funzionalità Crea Menu:

1. Rileva automaticamente le posizioni dei menu disponibili nel tema
2. Crea menu con etichette di navigazione appropriate per il vostro design
3. Assegna i menu alle posizioni tematiche corrette
4. Supporta l'aggiunta di elementi del menu dopo la creazione

## Funzionalità Correlate {#related-abilities}

- **`add_menu_item`** — Aggiungere elementi a un menu esistente
- **`update_menu`** — Rinominare un menu o riassegnarlo a una posizione tematica
- **`delete_menu`** — Rimuovere un menu dal vostro sito

## Best Practices {#best-practices}

- **Usare etichette di navigazione chiare** — mantenere le etichette concise e descrittive per gli utenti
- **Abbinare le posizioni del tema** — assegnare i menu alla posizione tematica corretta per una corretta visualizzazione
- **Pianificare la struttura del menu** — decidere la gerarchia del menu prima di creare gli elementi
- **Testare la reattività** — verificare che i menu vengano visualizzati correttamente su dispositivi mobili
- **Localizzare le etichette** — utilizzare etichette di navigazione diverse per diverse versioni linguistiche

## Limitazioni {#limitations}

- Le etichette di navigazione sono solo per visualizzazione; il `name` interno è comunque utilizzato per l'identificazione da parte di WordPress
- Il supporto per i temi varia; non tutti i temi supportano tutte le posizioni dei menu
- Gli elementi del menu devono essere aggiunti separatamente dopo la creazione del menu
- Cambiare un'etichetta di navigazione richiede l'aggiornamento del menu

## Funzionalità Correlate {#related-abilities-1}

- [Generate Logo SVG](./generate-logo-svg.md) — creare loghi per l'header del sito
- [Validate Palette Contrast](./validate-palette-contrast.md) — assicurare schemi di colori accessibili
