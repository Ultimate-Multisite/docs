---
title: Generiraj Logo SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Generisanje Logo SVG-a

Funkcionalnost **Generisanje Logo SVG-a** omogućava Theme Builder-u da kreira i ugradi prilagođene logo SVG-ove direktno na vaš WordPress sajt, uz automatsku sanitizaciju koja je sigurna za namespace.

## Pregled

Ova funkcionalnost generiše skalabilne vektorske grafike (SVG) logotipe zasnovane na brendiranju vašeg sajta i vašim dizajnerskim preferencijama. Generisani SVG-ovi se automatski sanitizuju kako bi se osiguralo da su sigurni za upotrebu u WordPress-u, a da pritom zadrže vizuelnu integritetnost.

## Parametri

| Parametar | Tip | Obavezno | Opis |
|-----------|------|----------|-------------|
| `site_name` | string | Yes | Ime sajta za koji se generiše logo |
| `style` | string | Yes | Dizajnerski stil (npr. "modern", "klasičan", "minimalistički", "igrački") |
| `colors` | array | No | Niz heksadecimalnih kodova boja za upotrebu u logotipu (npr. `["#678233", "#ffffff"]`) |
| `width` | number | No | Širina SVG-a u pikselima (podrazumevano: 200) |
| `height` | number | No | Visina SVG-a u pikselima (podrazumevano: 200) |
| `include_text` | boolean | No | Da li uključiti naziv sajta kao tekst u logo (podrazumevano: true) |

## Format Izlaza

Funkcionalnost vraća SVG string sa sljedećom strukturom:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Ponašanje Sanitizacije SVG-a

Generisani SVG-ovi prolaze kroz automatsku sanitizaciju sigurna za namespace radi:

- **Uklanjanja nesigurnih atributa** — uklanja rukovnike događajima, skripte i potencijalno opasne atribute
- **Čuvanja namespace-ova** — održava SVG namespace-ove (xmlns, xlink) za pravilno renderovanje
- **Validacije strukture** — osigurava da SVG odgovara W3C standardima
- **Kodiranja entiteta** — pravilno izbjegava specijalne znakove u tekstualnom sadržaju
- **Uklanjanja eksternih referenci** — uklanja eksterne stilove i reference na slike

Ovo osigurava da je SVG siguran za direktno ugrađivanje u WordPress bez potrebe za dodatnom sanitizacijom.

## Primjer Korištenja

**Prompt:**
```
Generate a modern logo for my tech startup called "CloudSync" using blue and white colors.
```

**Rezultat:**
Funkcionalnost kreira SVG logo koji:
- Uključuje naziv sajta "CloudSync"
- Koristi navedenu plavo-bijelu paletu boja
- Prati moderne dizajnerske principe
- Je automatski sanitiziran i spreman za upotrebu

## Integracija sa Theme Builder-om

Kada koristite odabir dizajnerske smjernice u Theme Builder-u, funkcionalnost Generisanje Logo SVG-a:

1. Analizira vašu dizajnersku smjernicu i paletu boja
2. Generiše prilagođeni SVG logo koji odgovara vašim preferencijama
3. Automatski ugrađuje logo u zaglavlje/brending područje vašeg sajta
4. Čuva SVG kao prilagođeni logo u WordPress mediji

## Najbolje Prakse

- **Pružite jasne preferencije stila** — opišite dizajnerski stil koji želite (modern, klasičan, igrački, itd.)
- **Navedite boje** — uključite boje vašeg brenda radi dosljednosti
- **Testirajte renderovanje** — provjerite da li se logo ispravno prikazuje na različitim veličinama ekrana
- **Dalje prilagodite** — koristite alate za prilagođavanje logotipa u WordPress-u da biste podesili veličinu i pozicioniranje

## Ograničenja

- SVG logotipi generišu se kao statične grafike (nisu animirani)
- Složni logotipi sa mnogo elemenata mogu zahtijevati ručno usavršavanje
- Nisu podržani prilagođeni fontovi; tekst koristi sistemske fontove
- Vrlo velike ili vrlo male dimenzije mogu utjecati na kvalitet

## Povezane Funkcionalnosti

- [Validate Palette Contrast](./validate-palette-contrast.md) — provjerite kontrast boja radi pristupačnosti
- [Create Menu](./create-menu.md) — kreiranje navigacionih menija za vaš sajt
