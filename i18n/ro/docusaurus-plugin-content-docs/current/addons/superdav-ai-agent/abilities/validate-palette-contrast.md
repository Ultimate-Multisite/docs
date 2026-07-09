---
title: Validate Contrastul Paletei
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Validarea Contrastului Paletei {#validate-palette-contrast}

Abilitatea **Validarea Contrastului Paletei** verifică perechile de culori din paleta de design pentru conformitatea cu WCAG (Ghidurile de Accesibilitate pentru Conținut Web) înainte de a le aplica temei tale.

## Prezentare Generală {#overview}

Această abilitate asigură că schema de culori a site-ului tău îndeplinește standardele de accesibilitate, validând raporturile de contrast dintre culorile textului și cele de fundal. Ajută la prevenirea combinațiilor de culori care ar putea fi greu de citit pentru utilizatorii cu deficitele vizuale.

## Formatul de Intrare {#input-format}

Abilitatea acceptă o paletă de culori ca intrare:

```json
{
  "colors": [
    {
      "name": "primary",
      "hex": "#678233"
    },
    {
      "name": "text",
      "hex": "#ffffff"
    },
    {
      "name": "background",
      "hex": "#f5f5f5"
    }
  ],
  "wcag_level": "AA"
}
```

### Parametri {#parameters}

| Parametru | Tip | Obligatoriu | Descriere |
|-----------|------|-------------|-------------|
| `colors` | array | Da | Un array de obiecte de culori cu proprietățile `name` și `hex` |
| `wcag_level` | string | Nu | Nivelul de conformitate WCAG: "A", "AA" (implicit) sau "AAA" |
| `pairs_to_check` | array | Nu | Perechi specifice de culori de validat (ex: `["primary-text", "background-text"]`) |

## Nivelurile WCAG Verificate {#wcag-levels-checked}

Abilitatea validează raporturile de contrast conform standardelor WCAG:

| Nivel | Text Normal | Text Mare | Raport Minim |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Text Normal** — text mai mic de 18pt (sau 14pt în *bold*)
- **Text Mare** — text de 18pt sau mai mare (sau 14pt în *bold* sau mai mare)

## Schema de Ieșire {#output-schema}

Abilitatea returnează un raport de validare detaliat:

```json
{
  "compliant": true,
  "wcag_level": "AA",
  "pairs": [
    {
      "pair": "primary-text",
      "color1": "#678233",
      "color2": "#ffffff",
      "contrast_ratio": 5.2,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": false,
      "status": "pass"
    },
    {
      "pair": "background-text",
      "color1": "#f5f5f5",
      "color2": "#333333",
      "contrast_ratio": 12.1,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": true,
      "status": "pass"
    }
  ],
  "summary": {
    "total_pairs": 2,
    "passing": 2,
    "failing": 0,
    "recommendations": []
  }
}
```

### Câmpuri de Ieșire {#output-fields}

| Câmp | Tip | Descriere |
|-------|------|-------------|
| `compliant` | boolean | Dacă întreaga paletă îndeplinește nivelul WCAG specificat |
| `wcag_level` | string | Nivelul WCAG care a fost verificat |
| `pairs` | array | Rezultate detaliate pentru fiecare pereche de culori |
| `contrast_ratio` | number | Raportul de contrast calculat (de la 1:1 la 21:1) |
| `status` | string | "pass" sau "fail" pentru fiecare pereche |
| `recommendations` | array | Sugestii pentru îmbunătățirea perechilor care eșuează |

## Exemplu de Utilizare {#usage-example}

**Prompt:**
```
Check if my color palette meets WCAG AA standards. I have primary color #678233, text color #ffffff, and background #f5f5f5.
```

**Rezultat:**
Abilitatea validează toate combinațiile de culori și returnează:
- ✅ Primary + Text: raport 5.2:1 (trece WCAG AA)
- ✅ Background + Text: raport 12.1:1 (trece WCAG AAA)
- În totalitate: Conform WCAG AA

## Integrarea cu Theme Builder {#integration-with-theme-builder}

Când folosești selecția de direcție de design din Theme Builder, abilitatea Validate Palette Contrast:

1. Analizează paleta de culori selectată
2. Verifică toate combinațiile text-fundal
3. Validează față de nivelul WCAG ales de tine
4. Oferă recomandări pentru perechile care nu sunt conforme
5. Previne aplicarea de scheme de culori inaccesibile

## Cele Mai Bune Practici {#best-practices}

- **Începe cu nivelul AA** — WCAG AA este standardul pentru majoritatea site-urilor
- **Testează înainte de a aplica** — validează paleta înainte de a te angaja într-un design
- **Verifică toate combinațiile** — asigură-te că textul, link-urile și elementele UI îndeplinesc standardele
- **Ia în considerare preferințele utilizatorilor** — unii utilizatori pot avea o sensibilitate suplimentară la culori
- **Folosește verificatoare de contrast** — combină această abilitate cu instrumentele browserului pentru verificare

## Perechi Eșuate și Recomandări {#failing-pairs-and-recommendations}

Dacă o pereche de culori eșuează validarea, abilitatea oferă recomandări:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "Întărește culoarea textului la #ffffff (raportul ar fi 5.2:1)",
    "Întunbește culoarea fundalului la #556b2f (raportul ar fi 4.8:1)",
    "Folosește o altă culoare primară, cum ar fi #4a6b1f (raportul ar fi 6.1:1)"
  ]
}
```

## Abilități Conexe {#related-abilities}

- [Generate Logo SVG](./generate-logo-svg.md) — creează logo-uri cu paleta ta de culori validată
- [Create Menu](./create-menu.md) — construiește navigarea cu culori accesibile
