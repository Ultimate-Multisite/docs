---
title: Ustvari logotip SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Ustvari SVG logotipa

Zmožnost **Ustvari SVG logotipa** omogoča Theme Builderju, da ustvari in vgradi prilagojene SVG-je logotipov neposredno v vaše WordPress spletno mesto z avtomatsko sanitizacijo, varno za imenske prostore.

## Pregled {#overview}

Ta zmožnost ustvari skalabilno vektorsko grafiko (SVG) logotipov na podlagi usmeritve blagovne znamke vašega spletnega mesta in oblikovalskih preferenc. Ustvarjeni SVG-ji se avtomatsko sanitizirajo, da so varni za uporabo v WordPressu, hkrati pa ohranijo vizualno celovitost.

## Parametri {#parameters}

| Parameter | Vrsta | Obvezno | Opis |
|-----------|------|----------|-------------|
| `site_name` | string | Da | Ime spletnega mesta, za katero naj se ustvari logotip |
| `style` | string | Da | Oblikovalski slog (npr. "modern", "classic", "minimalist", "playful") |
| `colors` | array | Ne | Polje šestnajstiških barvnih kod za uporabo v logotipu (npr. `["#678233", "#ffffff"]`) |
| `width` | number | Ne | Širina SVG v slikovnih pikah (privzeto: 200) |
| `height` | number | Ne | Višina SVG v slikovnih pikah (privzeto: 200) |
| `include_text` | boolean | Ne | Ali naj se ime spletnega mesta vključi kot besedilo v logotip (privzeto: true) |

## Oblika izhoda {#output-format}

Zmožnost vrne niz SVG z naslednjo strukturo:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Vedenje sanitizacije SVG {#svg-sanitisation-behaviour}

Ustvarjeni SVG-ji so podvrženi avtomatski sanitizaciji, varni za imenske prostore, da:

- **Odstrani nevarne atribute** — odstrani obravnavalnike dogodkov, skripte in potencialno nevarne atribute
- **Ohrani imenske prostore** — ohrani imenske prostore SVG (xmlns, xlink) za pravilno upodabljanje
- **Preveri strukturo** — zagotovi, da je SVG skladen s standardi W3C
- **Kodira entitete** — pravilno ubeži posebne znake v besedilni vsebini
- **Odstrani zunanje sklice** — odstrani zunanje slogovne datoteke in sklice na slike

To zagotavlja, da je SVG varen za neposredno vgradnjo v WordPress brez potrebe po dodatni sanitizaciji.

## Primer uporabe {#usage-example}

**Poziv:**
```
Ustvari sodoben logotip za moj tehnološki startup z imenom "CloudSync" z uporabo modre in bele barve.
```

**Rezultat:**
Zmožnost ustvari SVG logotip, ki:
- Vključuje ime spletnega mesta "CloudSync"
- Uporablja navedeno modro-belo barvno shemo
- Sledi sodobnim oblikovalskim načelom
- Je avtomatsko sanitiziran in pripravljen za uporabo

## Integracija s Theme Builder {#integration-with-theme-builder}

Pri uporabi izbire oblikovalske usmeritve v Theme Builderju zmožnost Ustvari SVG logotipa:

1. Analizira vašo oblikovalsko usmeritev in barvno paleto
2. Ustvari prilagojen SVG logotip, ki se ujema z vašimi preferencami
3. Avtomatsko vgradi logotip v glavo/območje blagovne znamke vašega spletnega mesta
4. Shrani SVG kot prilagojen logotip v WordPress predstavnost

## Najboljše prakse {#best-practices}

- **Podajte jasne slogovne preference** — opišite oblikovalski slog, ki ga želite (sodoben, klasičen, igriv itd.)
- **Določite barve** — vključite barve svoje blagovne znamke za doslednost
- **Preizkusite upodabljanje** — preverite, ali se logotip pravilno prikazuje pri različnih velikostih zaslona
- **Dodatno prilagodite** — uporabite WordPressova orodja za prilagajanje logotipa, da prilagodite velikost in postavitev

## Omejitve {#limitations}

- SVG logotipi so ustvarjeni kot statična grafika (ne animirana)
- Kompleksni logotipi z veliko elementi lahko zahtevajo ročno izpopolnitev
- Pisave po meri niso podprte; besedilo uporablja sistemske pisave
- Zelo velike ali zelo majhne dimenzije lahko vplivajo na kakovost

## Sorodne zmožnosti {#related-abilities}

- [Preveri kontrast palete](./validate-palette-contrast.md) — preveri barvni kontrast za dostopnost
- [Ustvari meni](./create-menu.md) — ustvari navigacijske menije za vaše spletno mesto
