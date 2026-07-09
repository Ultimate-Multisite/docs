---
title: Provjeri kontrast palete
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Provjera kontrasta palete

Sposobnost **Validate Palette Contrast** provjerava parove boja u vašoj dizajnerskoj paleti radi usklađenosti s WCAG (Web Content Accessibility Guidelines) prije njihove primjene na vašu temu.

## Pregled

Ova sposobnost osigurava da shema boja vaše stranice zadovoljava standarde pristupačnosti provjerom omjera kontrasta između boja teksta i pozadine. Pomaže spriječiti kombinacije boja koje bi korisnicima s oštećenjima vida mogle biti teške za čitanje.

## Format unosa

Sposobnost prihvaća paletu boja kao unos:

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

### Parametri

| Parametar | Tip | Obavezno | Opis |
|-----------|------|----------|-------------|
| `colors` | array | Da | Niz objekata boja sa svojstvima `name` i `hex` |
| `wcag_level` | string | Ne | Razina usklađenosti s WCAG: "A", "AA" (zadano) ili "AAA" |
| `pairs_to_check` | array | Ne | Određeni parovi boja za provjeru (npr. `["primary-text", "background-text"]`) |

## Provjerene WCAG razine

Sposobnost provjerava omjere kontrasta prema WCAG standardima:

| Razina | Normalan tekst | Veliki tekst | Minimalni omjer |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Normalan tekst** — tekst manji od 18 pt (ili 14 pt podebljan)
- **Veliki tekst** — tekst od 18 pt ili veći (ili 14 pt podebljan ili veći)

## Shema izlaza

Sposobnost vraća detaljno izvješće o provjeri:

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

### Izlazna polja

| Polje | Tip | Opis |
|-------|------|-------------|
| `compliant` | boolean | Zadovoljava li cijela paleta navedenu WCAG razinu |
| `wcag_level` | string | WCAG razina koja je provjerena |
| `pairs` | array | Detaljni rezultati za svaki par boja |
| `contrast_ratio` | number | Izračunati omjer kontrasta (1:1 do 21:1) |
| `status` | string | "pass" ili "fail" za svaki par |
| `recommendations` | array | Prijedlozi za poboljšanje neuspješnih parova |

## Primjer upotrebe

**Upit:**
```
Provjeri zadovoljava li moja paleta boja WCAG AA standarde. Imam primarnu boju #678233, boju teksta #ffffff i pozadinu #f5f5f5.
```

**Rezultat:**
Sposobnost provjerava sve kombinacije boja i vraća:
- ✅ Primarna + tekst: omjer 5.2:1 (prolazi WCAG AA)
- ✅ Pozadina + tekst: omjer 12.1:1 (prolazi WCAG AAA)
- Ukupno: Usklađeno s WCAG AA

## Integracija s Theme Builder

Pri upotrebi odabira dizajnerskog smjera u Theme Builder, sposobnost Validate Palette Contrast:

1. Analizira vašu odabranu paletu boja
2. Provjerava sve kombinacije teksta i pozadine
3. Provjerava prema vašoj odabranoj WCAG razini
4. Pruža preporuke za neusklađene parove
5. Sprječava primjenu nepristupačnih shema boja

## Najbolje prakse

- **Započnite s razinom AA** — WCAG AA je standard za većinu web-stranica
- **Testirajte prije primjene** — provjerite svoju paletu prije nego što se obvežete na dizajn
- **Provjerite sve kombinacije** — osigurajte da tekst, poveznice i UI elementi zadovoljavaju standarde
- **Uzmite u obzir korisničke preferencije** — neki korisnici mogu imati dodatnu osjetljivost na boje
- **Koristite alate za provjeru kontrasta** — kombinirajte ovu sposobnost s alatima preglednika za verifikaciju

## Neuspješni parovi i preporuke

Ako par boja ne prođe provjeru, sposobnost pruža preporuke:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "Lighten the text color to #ffffff (ratio would be 5.2:1)",
    "Darken the background color to #556b2f (ratio would be 4.8:1)",
    "Use a different primary color like #4a6b1f (ratio would be 6.1:1)"
  ]
}
```

## Povezane sposobnosti

- [Generiraj Logo SVG](./generate-logo-svg.md) — izradite logotipe s vašom provjerenom paletom boja
- [Izradi izbornik](./create-menu.md) — izgradite navigaciju s pristupačnim bojama
