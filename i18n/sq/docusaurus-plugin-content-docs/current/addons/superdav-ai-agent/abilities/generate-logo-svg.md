---
title: Gjenero logon SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Gjenero Logo SVG

Aftësia **Gjenero Logo SVG** i lejon Theme Builder të krijojë dhe të integrojë logo SVG të personalizuara drejtpërdrejt në faqen tuaj WordPress me sanitizim automatik të sigurt për namespace.

## Përmbledhje

Kjo aftësi gjeneron logo me grafikë vektoriale të shkallëzueshme (SVG) bazuar në drejtimin e markimit të faqes suaj dhe preferencat e dizajnit. SVG-të e gjeneruara sanitizohen automatikisht për të siguruar që janë të sigurta për përdorim në WordPress, duke ruajtur integritetin vizual.

## Parametrat

| Parametër | Tipi | I detyrueshëm | Përshkrimi |
|-----------|------|----------|-------------|
| `site_name` | string | Po | Emri i faqes për të cilën do të gjenerohet logoja |
| `style` | string | Po | Stili i dizajnit (p.sh., "modern", "classic", "minimalist", "playful") |
| `colors` | array | Jo | Varg kodesh ngjyrash hex për t’u përdorur në logo (p.sh., `["#678233", "#ffffff"]`) |
| `width` | number | Jo | Gjerësia e SVG-së në pikselë (parazgjedhje: 200) |
| `height` | number | Jo | Lartësia e SVG-së në pikselë (parazgjedhje: 200) |
| `include_text` | boolean | Jo | Nëse duhet të përfshihet emri i faqes si tekst në logo (parazgjedhje: true) |

## Formati i daljes

Aftësia kthen një string SVG me strukturën e mëposhtme:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Sjellja e sanitizimit të SVG-së

SVG-të e gjeneruara i nënshtrohen sanitizimit automatik të sigurt për namespace për të:

- **Hequr atributet e pasigurta** — heq event handlers, scripts dhe atribute potencialisht të rrezikshme
- **Ruajtur namespace-t** — ruan namespace-t e SVG-së (xmlns, xlink) për paraqitje të saktë
- **Validuar strukturën** — siguron që SVG-ja përputhet me standardet W3C
- **Koduar entitetet** — escap-on siç duhet karakteret speciale në përmbajtjen tekstuale
- **Hequr referencat e jashtme** — heq fletëstilet e jashtme dhe referencat e imazheve

Kjo siguron që SVG-ja është e sigurt për t’u integruar drejtpërdrejt në WordPress pa kërkuar sanitizim shtesë.

## Shembull përdorimi

**Prompt:**
```
Gjenero një logo moderne për startup-in tim teknologjik të quajtur "CloudSync" duke përdorur ngjyra blu dhe të bardha.
```

**Rezultati:**
Aftësia krijon një logo SVG që:
- Përfshin emrin e faqes "CloudSync"
- Përdor skemën e specifikuar të ngjyrave blu dhe të bardha
- Ndjek parimet moderne të dizajnit
- Sanitizohet automatikisht dhe është gati për përdorim

## Integrimi me Theme Builder

Kur përdorni përzgjedhjen e drejtimit të dizajnit të Theme Builder, aftësia Generate Logo SVG:

1. Analizon drejtimin tuaj të dizajnit dhe paletën e ngjyrave
2. Gjeneron një logo SVG të personalizuar që përputhet me preferencat tuaja
3. Integron automatikisht logon në zonën header/branding të faqes suaj
4. Ruan SVG-në si logo të personalizuar në median e WordPress-it

## Praktikat më të mira

- **Jepni preferenca të qarta stili** — përshkruani stilin e dizajnit që dëshironi (modern, klasik, lozonjar, etj.)
- **Specifikoni ngjyrat** — përfshini ngjyrat e markës suaj për qëndrueshmëri
- **Testoni paraqitjen** — verifikoni që logoja shfaqet saktë në madhësi të ndryshme ekrani
- **Personalizoni më tej** — përdorni mjetet e personalizimit të logos të WordPress-it për të rregulluar madhësinë dhe vendosjen

## Kufizimet

- Logot SVG gjenerohen si grafikë statike (jo të animuara)
- Logot komplekse me shumë elemente mund të kërkojnë përpunim manual
- Fontet e personalizuara nuk mbështeten; teksti përdor fontet e sistemit
- Dimensionet shumë të mëdha ose shumë të vogla mund të ndikojnë në cilësi

## Aftësi të lidhura

- [Valido kontrastin e paletës](./validate-palette-contrast.md) — kontrolloni kontrastin e ngjyrave për aksesueshmëri
- [Krijo menu](./create-menu.md) — krijoni menu navigimi për faqen tuaj
