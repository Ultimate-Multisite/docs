---
title: Generuoti logotipo SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Generuoti logotipo SVG

**Generuoti logotipo SVG** galimybė leidžia Theme Builder kurti ir įterpti pasirinktinius logotipų SVG tiesiai į jūsų WordPress svetainę, taikant automatinį vardų erdvei saugų sanitizavimą.

## Apžvalga {#overview}

Ši galimybė generuoja keičiamo mastelio vektorinės grafikos (SVG) logotipus pagal jūsų svetainės prekės ženklo kryptį ir dizaino nuostatas. Sugeneruoti SVG automatiškai sanitizuojami, kad būtų saugūs naudoti WordPress, kartu išlaikant vizualinį vientisumą.

## Parametrai {#parameters}

| Parametras | Tipas | Privaloma | Aprašymas |
|-----------|------|----------|-------------|
| `site_name` | string | Taip | Svetainės, kuriai generuojamas logotipas, pavadinimas |
| `style` | string | Taip | Dizaino stilius (pvz., „modernus“, „klasikinis“, „minimalistinis“, „žaismingas“) |
| `colors` | array | Ne | Logotipe naudotinų hex spalvų kodų masyvas (pvz., `["#678233", "#ffffff"]`) |
| `width` | number | Ne | SVG plotis pikseliais (numatytoji reikšmė: 200) |
| `height` | number | Ne | SVG aukštis pikseliais (numatytoji reikšmė: 200) |
| `include_text` | boolean | Ne | Ar į logotipą įtraukti svetainės pavadinimą kaip tekstą (numatytoji reikšmė: true) |

## Išvesties formatas {#output-format}

Galimybė grąžina SVG eilutę su tokia struktūra:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## SVG sanitizavimo elgsena {#svg-sanitisation-behaviour}

Sugeneruotiems SVG automatiškai taikomas vardų erdvei saugus sanitizavimas, siekiant:

- **Pašalinti nesaugius atributus** — pašalina įvykių apdorojimo atributus, scenarijus ir potencialiai pavojingus atributus
- **Išsaugoti vardų erdves** — išlaiko SVG vardų erdves (xmlns, xlink), kad būtų tinkamai atvaizduojama
- **Patikrinti struktūrą** — užtikrina, kad SVG atitiktų W3C standartus
- **Užkoduoti esybes** — tinkamai maskuoja specialiuosius simbolius teksto turinyje
- **Pašalinti išorines nuorodas** — pašalina išorinius stilių rinkinius ir paveikslėlių nuorodas

Tai užtikrina, kad SVG būtų saugu įterpti tiesiai į WordPress be papildomo sanitizavimo.

## Naudojimo pavyzdys {#usage-example}

**Užklausa:**
```
Sugeneruok modernų logotipą mano technologijų startuoliui „CloudSync“, naudodamas mėlyną ir baltą spalvas.
```

**Rezultatas:**
Galimybė sukuria SVG logotipą, kuris:
- Įtraukia svetainės pavadinimą „CloudSync“
- Naudoja nurodytą mėlynos ir baltos spalvų schemą
- Atitinka modernaus dizaino principus
- Yra automatiškai sanitizuotas ir paruoštas naudoti

## Integracija su Theme Builder {#integration-with-theme-builder}

Naudojant Theme Builder dizaino krypties pasirinkimą, Generuoti logotipo SVG galimybė:

1. Analizuoja jūsų dizaino kryptį ir spalvų paletę
2. Sugeneruoja pasirinktinį SVG logotipą, atitinkantį jūsų nuostatas
3. Automatiškai įterpia logotipą į jūsų svetainės antraštės / prekės ženklo sritį
4. Išsaugo SVG kaip pasirinktinį logotipą WordPress medijoje

## Geriausios praktikos {#best-practices}

- **Pateikite aiškias stiliaus nuostatas** — apibūdinkite norimą dizaino stilių (modernus, klasikinis, žaismingas ir t. t.)
- **Nurodykite spalvas** — įtraukite savo prekės ženklo spalvas, kad būtų išlaikytas nuoseklumas
- **Patikrinkite atvaizdavimą** — įsitikinkite, kad logotipas tinkamai rodomas įvairiuose ekrano dydžiuose
- **Toliau tinkinkite** — naudokite WordPress logotipo tinkinimo įrankius dydžiui ir vietai koreguoti

## Apribojimai {#limitations}

- SVG logotipai generuojami kaip statinė grafika (ne animuoti)
- Sudėtingiems logotipams su daug elementų gali prireikti rankinio patobulinimo
- Pasirinktiniai šriftai nepalaikomi; tekstui naudojami sistemos šriftai
- Labai dideli arba labai maži matmenys gali paveikti kokybę

## Susijusios galimybės {#related-abilities}

- [Patikrinti paletės kontrastą](./validate-palette-contrast.md) — patikrinti spalvų kontrastą dėl prieinamumo
- [Sukurti meniu](./create-menu.md) — sukurti navigacijos meniu jūsų svetainei
