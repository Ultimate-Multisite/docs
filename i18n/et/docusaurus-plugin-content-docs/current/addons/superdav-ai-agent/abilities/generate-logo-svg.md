---
title: Genereeri logo SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Genereeri Logo SVG

**Generate Logo SVG** võime võimaldab Theme Builderil luua ja manustada kohandatud logo SVG-sid otse sinu WordPress saidile automaatse nimeruumiturvalise sanitiseerimisega.

## Ülevaade

See võime genereerib skaleeritavaid vektorgraafika (SVG) logosid sinu saidi brändingu suuna ja disainieelistuste põhjal. Genereeritud SVG-d sanitiseeritakse automaatselt, et tagada nende ohutu kasutamine WordPressis, säilitades samal ajal visuaalse terviklikkuse.

## Parameetrid

| Parameeter | Tüüp | Nõutav | Kirjeldus |
|-----------|------|----------|-------------|
| `site_name` | string | Jah | Saidi nimi, mille jaoks logo genereerida |
| `style` | string | Jah | Disainistiil (nt "modern", "classic", "minimalist", "playful") |
| `colors` | array | Ei | Logos kasutatavate hex-värvikoodide massiiv (nt `["#678233", "#ffffff"]`) |
| `width` | number | Ei | SVG laius pikslites (vaikimisi: 200) |
| `height` | number | Ei | SVG kõrgus pikslites (vaikimisi: 200) |
| `include_text` | boolean | Ei | Kas lisada saidi nimi logos tekstina (vaikimisi: true) |

## Väljundvorming

See võime tagastab SVG stringi järgmise struktuuriga:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## SVG sanitiseerimise käitumine

Genereeritud SVG-d läbivad automaatse nimeruumiturvalise sanitiseerimise, et:

- **Eemaldada ebaturvalised atribuudid** — eemaldab sündmuste käsitlejad, skriptid ja potentsiaalselt ohtlikud atribuudid
- **Säilitada nimeruumid** — säilitab SVG nimeruumid (xmlns, xlink) korrektseks renderdamiseks
- **Valideerida struktuur** — tagab, et SVG vastab W3C standarditele
- **Kodeerida olemid** — varjestab tekstisisus erimärgid korrektselt
- **Eemaldada välised viited** — eemaldab välised laaditabelid ja pildiviited

See tagab, et SVG-d saab turvaliselt otse WordPressi manustada ilma täiendavat sanitiseerimist nõudmata.

## Kasutusnäide

**Viip:**
```
Genereeri modernne logo minu tehnoloogia-idufirmale nimega "CloudSync", kasutades sinist ja valget värvi.
```

**Tulemus:**
See võime loob SVG logo, mis:
- Sisaldab saidi nime "CloudSync"
- Kasutab määratud sinist ja valget värviskeemi
- Järgib moodsaid disainipõhimõtteid
- On automaatselt sanitiseeritud ja kasutusvalmis

## Integratsioon Theme Builderiga

Kui kasutad Theme Builderi disainisuuna valikut, teeb Generate Logo SVG võime järgmist:

1. Analüüsib sinu disainisuunda ja värvipaletti
2. Genereerib kohandatud SVG logo, mis vastab sinu eelistustele
3. Manustab logo automaatselt sinu saidi päise/brändingu alasse
4. Salvestab SVG WordPress meedias kohandatud logona

## Parimad tavad

- **Esita selged stiilieelistused** — kirjelda soovitud disainistiili (modernne, klassikaline, mänguline jne)
- **Määra värvid** — järjepidevuse tagamiseks lisa oma brändivärvid
- **Testi renderdamist** — kontrolli, et logo kuvatakse eri ekraanisuurustel õigesti
- **Kohanda edasi** — kasuta WordPressi logo kohandamise tööriistu suuruse ja paigutuse reguleerimiseks

## Piirangud

- SVG logod genereeritakse staatilise graafikana (mitte animeerituna)
- Keerukad logod, millel on palju elemente, võivad vajada käsitsi viimistlemist
- Kohandatud fonte ei toetata; tekst kasutab süsteemifonte
- Väga suured või väga väikesed mõõtmed võivad kvaliteeti mõjutada

## Seotud võimed

- [Valideeri paleti kontrastsust](./validate-palette-contrast.md) — kontrolli värvikontrasti ligipääsetavuse jaoks
- [Loo menüü](./create-menu.md) — loo oma saidile navigeerimismenüüsid
