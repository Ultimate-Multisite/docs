---
title: Menù per l'ospitalità
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Menu per la Ristorazione {#hospitality-menus}

La funzione **Hospitality Menus** consente a Theme Builder di generare e incorporare pagine di menu strutturate per cibo e bevande direttamente nel tuo sito WordPress.

## Panoramica {#overview}

Theme Builder può ora creare pagine di menu professionali e strutturate per attività di ristorazione, tra cui ristoranti, caffè, bar e servizi di catering. Questi menu sono pienamente integrati nel design del tuo sito e possono essere aggiornati e gestiti con facilità.

## Tipi di Ristorazione Supportati {#supported-hospitality-types}

- **Ristoranti** — menu per servizi di ristorazione completi
- **Caffè** — menu di caffè e piatti leggeri
- **Bar e Lounge** — menu di bevande e antipasti
- **Panetterie** — menu di pasticceria e pane
- **Servizi di Catering** — opzioni di menu per eventi
- **Food Truck** — menu per servizi di cibo mobili
- **Birrerie e Vigneti** — menu di bevande con descrizioni

## Struttura del Menu {#menu-structure}

### Categorie di Menu {#menu-categories}

I menu sono organizzati in categorie:

- **Antipasti** — stuzzichini e piccoli piatti
- **Piatti Principali** — portate principali
- **Contorni** — accompagnamenti e verdure
- **Dessert** — dolci
- **Bevande** — drink (alcolici e analcolici)
- **Specialità** — offerte giornaliere o stagionali

### Formato Articolo di Menu {#menu-item-format}

Ogni articolo di menu include:

```json
{
  "name": "Salmone Grigliato",
  "description": "Salmone atlantico fresco con salsa al burro e limone",
  "price": "$24.95",
  "dietary_info": ["Senza Glutine", "Alto Contenuto Proteico"],
  "allergens": ["Pesce"],
  "availability": "Giornaliero"
}
```

#### Campi dell'Articolo {#item-fields}

| Campo | Tipo | Descrizione |
|-------|------|-------------|
| `name` | string | Nome del piatto o della bevanda |
| `description` | string | Descrizione dettagliata dell'articolo |
| `price` | string | Prezzo (formattato con valuta) |
| `dietary_info` | array | Attributi dietetici (Vegano, Senza Glutine, ecc.) |
| `allergens` | array | Allergeni comuni (Frutta a guscio, Crostacei, ecc.) |
| `availability` | string | Quando è disponibile (Giornaliero, Stagionale, ecc.) |

## Creazione dei Menu per la Ristorazione {#creating-hospitality-menus}

### Passo 1: Fornire le Informazioni del Menu {#step-1-provide-menu-information}

Descrivi a Theme Builder il tuo menu:

```
Crea un menu per un ristorante italiano con antipasti,
piatti di pasta, primi piatti e dessert. Includi prezzi e descrizioni.
```

### Passo 2: Theme Builder Genera il Menu {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Crea una pagina menu strutturata
2. La disegna in modo che corrisponda al tema del tuo sito
3. Organizza gli articoli in categorie
4. Formatta prezzi e descrizioni
5. Aggiunge informazioni dietetiche e sugli allergeni

### Passo 3: Revisione e Personalizzazione {#step-3-review-and-customize}

Puoi:

1. Modificare articoli e prezzi del menu
2. Aggiungere o rimuovere categorie
3. Riordinare gli articoli all'interno delle categorie
4. Aggiornare descrizioni e informazioni dietetiche
5. Regolare lo stile e il layout

## Opzioni di Visualizzazione del Menu {#menu-display-options}

### Pagina Menu Completa {#full-menu-page}

Una pagina dedicata che mostra l'intero menu:

- Organizzato per categoria
- Ricercabile e filtrabile
- Layout adatto alla stampa
- Design responsive per dispositivi mobili

### Widget Menu {#menu-widget}

Incorpora sezioni di menu su altre pagine:

- Articoli in evidenza sulla homepage
- Specialità giornaliere nella barra laterale
- Menu bevande sulla pagina del bar
- Vetrina dessert nel piè di pagina

### PDF Menu {#menu-pdf}

Genera un menu PDF scaricabile:

- Formattazione professionale
- Qualità pronta per la stampa
- Include immagini e descrizioni
- Facile da condividere ed inviare via email

## Informazioni Dietetiche e Allergeni {#dietary-and-allergen-information}

### Attributi Dietetici {#dietary-attributes}

Marca gli articoli con informazioni dietetiche:

- **Vegano** — nessun prodotto animale
- **Vegetariano** — senza carne
- **Senza Glutine** — sicuro per i celiaci
- **Senza Lattosio** — senza prodotti lattiero-caseari
- **Senza Frutta a Guscio** — senza noci o arachidi
- **Basso Contenuto di Carboidrati** — carboidrati ridotti
- **Alto Contenuto Proteico** — ricco di proteine

### Avvertenze sugli Allergeni {#allergen-warnings}

Includi gli allergeni comuni:

- **Frutta a Guscio** — noci e arachidi
- **Crostacei** — crostacei e molluschi
- **Pesce** — tutte le specie di pesce
- **Latticini** — latte e prodotti lattiero-caseari
- **Uova** — uova di gallina
- **Soia** — prodotti di soia
- **Glutine** — grano e cereali contenenti glutine
- **Sesamo** — semi e olio di sesamo

## Gestione del Menu {#menu-management}

### Aggiornare i Prezzi {#updating-prices}

Aggiorna facilmente i prezzi del menu:

1. Vai alla pagina del menu
2. Clicca su "Modifica Menu"
3. Aggiorna i prezzi degli articoli
4. Salva le modifiche
5. Le modifiche appaiono immediatamente sul tuo sito

### Aggiungere Articoli Stagionali {#adding-seasonal-items}

Crea variazioni di menu stagionali:

1. Crea una nuova versione del menu
2. Aggiungi articoli stagionali
3. Marca gli articoli come "Stagionale"
4. Imposta le date di disponibilità
5. Visualizza automaticamente durante la stagione

### Gestire le Specialità {#managing-specials}

Visualizza le specialità giornaliere o settimanali:

1. Crea una categoria "Specialità"
2. Aggiungi articoli con date di disponibilità
3. Evidenzia le specialità sulla homepage
4. Aggiorna quotidianamente o settimanalmente
5. Archivia le vecchie specialità

## Integrazione con Theme Builder {#integration-with-theme-builder}

Quando si utilizza Theme Builder per siti di ristorazione:

1. **Rilevamento automatico del menu** — identifica se sei un'attività di cibo/bevande
2. **Creazione della pagina menu** — genera pagine menu professionali
3. **Corrispondenza del design** — i menu corrispondono al tema del tuo sito
4. **Ottimizzazione mobile** — i menu vengono visualizzati splendidamente su cellulari
5. **Ottimizzazione SEO** — i menu sono amichevoli per i motori di ricerca

## Best Practices {#best-practices}

### Design del Menu {#menu-design}

- **Organizzazione chiara** — struttura di categorie logica
- **Descrizioni leggibili** — appetitose e informative
- **Prezzi coerenti** — valuta e formattazione chiare
- **Foto professionali** — immagini di cibo di alta qualità
- **Spazio bianco** — non riempire troppo la pagina

### Contenuto {#content}

- **Descrizioni accurate** — descrivi gli articoli con precisione
- **Evidenziare le specialità** — fai risaltare le offerte speciali
- **Includere gli allergeni** — elenca sempre gli allergeni
- **Aggiornare regolarmente** — mantieni prezzi e articoli aggiornati
- **Usare un linguaggio appetitoso** — fai sembrare gli articoli deliziosi

### Accessibilità {#accessibility}

- **Caratteri leggibili** — usa caratteri chiari e leggibili
- **Contrasto sufficiente** — assicurati che il testo sia leggibile
- **Etichette dietetiche** — marca chiaramente le opzioni dietetiche
- **Avvertenze sugli allergeni** — visualizza gli allergeni in modo evidente
- **Compatibile con dispositivi mobili** — testa su tutti i dispositivi

## Esempi {#examples}

### Struttura Menu Ristorante {#restaurant-menu-structure}

```
Antipasti
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Insalata Caprese

Piatti di Pasta
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Primi Piatti
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Dessert
├── Tiramisu
├── Panna Cotta
└── Selezione Gelato
```

### Struttura Menu Caffè {#cafe-menu-structure}

```
Caffè
├── Espresso
├── Cappuccino
└── Latte

Pasticceria
├── Cornetti
├── Muffins
└── Scones

Tramezzini
├── Panini Caprese
├── Club Sandwich al Tacchino Affumicato
└── Wrap Vegetariano
```

## Funzionalità Correlate {#related-features}

- [Creare Menu](../abilities/create-menu.md) — creare menu di navigazione
- [Direzione del Design](./design-direction.md) — personalizzare il design del tuo sito
- [Intervista di Scoperta](./discovery-interview.md) — pianificare la struttura del tuo sito
