---
title: Validiraj kontrast palete
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Validacija Kontrasta Palete

Funkcionalnost **Validacija Kontrasta Palete** provjerava parove boja u vašoj dizajnerskoj paleti radi usklađenosti sa WCAG (Web Content Accessibility Guidelines) prije nego što ih primenite na vašu temu.

## Pregled {#overview}

Ova funkcionalnost osigurava da vašu web stranicu boja skema zadovoljavaju standarde pristupačnosti tako što validira kontrastne odnose između teksta i pozadinske boje. Pomaže u sprječavanju kombinacija boja koje bi korisnicima sa vizuelnim smetnjama moglo biti teško čitati.

## Format Unosa {#input-format}

Funkcionalnost prima paletu boja kao unos:

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

| Parametar | Tip | Obavezno | Opis |
|-----------|------|----------|-------------|
| `colors` | array | Da | Niz objekata boja sa svojstvima `name` i `hex` |
| `wcag_level` | string | Ne | WCAG nivo usklađenosti: "A", "AA" (podrazumevano), ili "AAA" |
| `pairs_to_check` | array | Ne | Specifični parovi boja za validaciju (npr. `["primary-text", "background-text"]`) |

## WCAG Nivoi Kontrola {#wcag-levels-checked}

Funkcionalnost validira kontrastne odnose prema WCAG standardima:

| Nivo | Normalni Tekst | Veliki Tekst | Minimalni Odnos |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Normalni Tekst** — tekst manji od 18pt (ili 14pt podebljan)
- **Veliki Tekst** — tekst 18pt ili veći (ili 14pt podebljan ili veći)

## Šema Izlaza {#output-schema}

Funkcionalnost vraća detaljan izvještaj o validaciji:

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

### Polja Izlaza {#output-fields}

| Polje | Tip | Opis |
|-------|------|-------------|
| `compliant` | boolean | Da li je cijela paleta usklađena sa navedenim WCAG nivoom |
| `wcag_level` | string | WCAG nivo koji je provjeran |
| `pairs` | array | Detaljni rezultati za svaki par boja |
| `contrast_ratio` | number | Izračunati kontrastni odnos (od 1:1 do 21:1) |
| `status` | string | "pass" ili "fail" za svaki par |
| `recommendations` | array | Prijedlozi za poboljšanje neusklađenih parova |

## Primjer Korištenja {#usage-example}

**Prompt:**
```
Provjerite da li moja paleta boja zadovoljava WCAG AA standarde. Imam primarnu boju #678233, boju teksta #ffffff i pozadinu #f5f5f5.
```

**Rezultat:**
Funkcionalnost validira sve kombinacije boja i vraća:
- ✅ Primarna + Tekst: odnos 5.2:1 (prolazi WCAG AA)
- ✅ Pozadina + Tekst: odnos 12.1:1 (prolazi WCAG AAA)
- Ukupno: Usklađeno sa WCAG AA

## Integracija sa Theme Builder-om {#integration-with-theme-builder}

Kada koristite odabir dizajnerskog smjera u Theme Builder-u, funkcionalnost Validacija Kontrasta Palete:

1. Analizira vaš odabranu paletu boja
2. Provjerava sve kombinacije teksta i pozadine
3. Validira prema vašem odabranom WCAG nivou
4. Pruža preporuke za neusklađene parove
5. Sprječava primjenu nepristupačnih šema boja

## Najbolje Prakse {#best-practices}

- **Počnite sa AA nivoom** — WCAG AA je standard za većinu web stranica
- **Testirajte prije primjene** — validirajte svoju paletu prije nego što se obavezujete dizajnom
- **Provjerite sve kombinacije** — osigurajte da i tekst, linkovi i UI elementi zadovoljavaju standarde
- **Razmislite o korisničkim preferencijama** — neki korisnici mogu imati dodatnu osjetljivost na boje
- **Koristite provjerivače kontrasta** — kombinujte ovu funkcionalnost sa alatima u pregledniku za verifikaciju

## Neusklađeni Parovi i Preporuke {#failing-pairs-and-recommendations}

Ako par boja ne prođe validaciju, funkcionalnost pruža preporuke:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "Osvijetlite boju teksta na #ffffff (odnos bi bio 5.2:1)",
    "Utamnite pozadinsku boju na #556b2f (odnos bi bio 4.8:1)",
    "Koristite drugu primarnu boju poput #4a6b1f (odnos bi bio 6.1:1)"
  ]
}
```

## Povezane Funkcionalnosti {#related-abilities}

- [Generate Logo SVG](./generate-logo-svg.md) — kreirajte logotipe sa vašom validiranom paletom boja
- [Create Menu](./create-menu.md) — izgradite navigaciju sa pristupačnim bojama
