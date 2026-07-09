---
title: Creează Meniu
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Creare Meniu {#create-menu}

Funcționalitatea **Creare Meniu** permite crearea de meniuri de navigare WordPress, cu suport pentru etichete de navigare distincte de titlurile paginilor.

## Prezentare Generală {#overview}

Această funcționalitate extinde funcționalitatea standard de creare a meniurilor, adăugând posibilitatea de a specifica un parametru `navigation_label`. Acest lucru vă permite să creați meniuri în care eticheta afișată în navigare să fie diferită de titlul paginii, oferind astfel o flexibilitate sporită în structura site-ului și în experiența utilizatorului.

## Parametri {#parameters}

| Parametru | Tip | Obligatoriu | Descriere |
|-----------|------|-------------|-------------|
| `name` | string | Da | Numele meniului, ex: `Navigație Principală` |
| `location` | string | Nu | Locația temei unde se va atribui acestui meniu, ex: `primary` |
| `navigation_label` | string | Nu | Eticheta de afișat în navigare (diferită de titlul paginii) |

## Valoarea de Returnare {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Navigație Principală",
  "navigation_label": "Meniu Principal"
}
```

## Eticheta de Navigare vs. Titlul Paginii {#navigation-label-vs-page-title}

Parametrul `navigation_label` vă permite să separați numele intern al meniului de eticheta afișată utilizatorilor:

- **`name`** — Identificatorul intern al meniului folosit de WordPress (ex: "Navigație Principală")
- **`navigation_label`** — Eticheta afișată vizitatorilor site-ului în navigare (ex: "Meniu Principal")

Acest lucru este util atunci când:
- Convenția dumneavoastră de denumire internă diferă de etichetele vizibile utilizatorilor
- Doriți etichete mai scurte în navigare decât în panoul de administrare
- Trebuie să susțineți mai multe limbi cu lungimi diferite ale etichetelor
- Construiți meniuri pentru regiuni sau grupuri de utilizatori specifice

## Exemple de Utilizare {#usage-examples}

### Exemplu 1: Meniu Simplu cu Etichetă de Navigare {#example-1-simple-menu-with-navigation-label}

**Prompt:**
```
Creează un meniu de navigare principală numit "Navigație Principală" cu eticheta de navigare "Meniu".
```

**Rezultat:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Navigație Principală",
  "navigation_label": "Meniu"
}
```

### Exemplu 2: Meniu pentru o Locație Specifică a Temei {#example-2-menu-for-specific-theme-location}

**Prompt:**
```
Creează un meniu de subsol numit "Linkuri de Subsol" cu eticheta de navigare "Linkuri Rapide" și atribuie-l locației de subsol.
```

**Rezultat:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Linkuri de Subsol",
  "navigation_label": "Linkuri Rapide",
  "location": "footer"
}
```

## Integrarea cu Theme Builder {#integration-with-theme-builder}

Atunci când folosiți Theme Builder, funcționalitatea Create Menu:

1. Detectează automat locațiile meniului disponibile în temă
2. Creează meniuri cu etichete de navigare adecvate pentru designul dumneavoastră
3. Atribuie meniurile locațiilor corecte ale temei
4. Suportă adăugarea de elemente de meniu după creare

## Funcționalități Conexe {#related-abilities}

- **`add_menu_item`** — Adaugă elemente într-un meniu existent
- **`update_menu`** — Renumează un meniu sau îl reatribuie unei locații de temă
- **`delete_menu`** — Elimină un meniu de pe site-ul dumneavoastră

## Cele mai Bune Practici {#best-practices}

- **Folosiți etichete de navigare clare** — mențineți etichetele concise și descriptive pentru utilizatori
- **Potriviți locațiile temei** — atribuiți meniurile locației corecte ale temei pentru afișare corespunzătoare
- **Planificați structura meniului** — decideți ierarhia meniului înainte de a crea elementele
- **Testați responsivitatea** — verificați că meniurile afișează corect pe dispozitive mobile
- **Localizați etichetele** — folosiți etichete de navigare diferite pentru diferite versiuni de limbă

## Limitările {#limitations}

- Etichetele de navigare sunt doar pentru afișare; `name`-ul intern este tot folosit pentru identificarea WordPress
- Suportul pentru teme variază; nu toate temele suportă toate locațiile de meniuri
- Elementele de meniu trebuie adăugate separat după crearea meniului
- Schimbarea unei etichete de navigare necesită actualizarea meniului

## Funcționalități Conexe {#related-abilities-1}

- [Generate Logo SVG](./generate-logo-svg.md) — creează logo-uri pentru antetul site-ului
- [Validate Palette Contrast](./validate-palette-contrast.md) — asigură scheme de culori accesibile
