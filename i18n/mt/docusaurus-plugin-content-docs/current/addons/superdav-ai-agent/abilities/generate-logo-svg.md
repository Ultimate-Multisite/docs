---
title: Iġġenera SVG tal-Logo
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Iġġenera Logo SVG

Il-kapaċità **Iġġenera Logo SVG** tippermetti lil Theme Builder joħloq u jinkorpora logos SVG personalizzati direttament fis-sit WordPress tiegħek b’sanitizzazzjoni awtomatika sigura għall-ispazji tal-ismijiet.

## Ħarsa Ġenerali

Din il-kapaċità tiġġenera logos b’grafika vettorjali skalabbli (SVG) ibbażati fuq id-direzzjoni tal-branding tas-sit tiegħek u l-preferenzi tad-disinn. L-SVGs iġġenerati jiġu sanitizzati awtomatikament biex jiġi żgurat li jkunu siguri għall-użu f’WordPress filwaqt li tinżamm l-integrità viżiva.

## Parametri

| Parametru | Tip | Meħtieġ | Deskrizzjoni |
|-----------|------|----------|-------------|
| `site_name` | string | Iva | L-isem tas-sit li għalih għandu jiġi ġġenerat il-logo |
| `style` | string | Iva | L-istil tad-disinn (eż., "modern", "classic", "minimalist", "playful") |
| `colors` | array | Le | Array ta’ kodiċijiet tal-kulur hex biex jintużaw fil-logo (eż., `["#678233", "#ffffff"]`) |
| `width` | number | Le | Il-wisa’ tal-SVG f’pixels (default: 200) |
| `height` | number | Le | L-għoli tal-SVG f’pixels (default: 200) |
| `include_text` | boolean | Le | Jekk għandux jiġi inkluż l-isem tas-sit bħala test fil-logo (default: true) |

## Format tal-Ħruġ

Il-kapaċità tirritorna string SVG bl-istruttura li ġejja:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Imġiba tas-Sanitizzazzjoni tal-SVG

L-SVGs iġġenerati jgħaddu minn sanitizzazzjoni awtomatika sigura għall-ispazji tal-ismijiet biex:

- **Tneħħi attributi mhux siguri** — tneħħi event handlers, scripts, u attributi potenzjalment perikolużi
- **Tippreserva l-ispazji tal-ismijiet** — iżżomm l-ispazji tal-ismijiet tal-SVG (xmlns, xlink) għal rendering korrett
- **Tivvalida l-istruttura** — tiżgura li l-SVG jikkonforma mal-istandards W3C
- **Tikkodifika entitajiet** — taħrab b’mod xieraq karattri speċjali fil-kontenut tat-test
- **Tneħħi referenzi esterni** — tneħħi stylesheets esterni u referenzi għal immaġini

Dan jiżgura li l-SVG ikun sigur biex jiġi inkorporat direttament f’WordPress mingħajr ma tkun meħtieġa sanitizzazzjoni addizzjonali.

## Eżempju ta’ Użu

**Prompt:**
```
Iġġenera logo modern għall-istartup teknoloġiku tiegħi jismu "CloudSync" bl-użu ta’ kuluri blu u bojod.
```

**Riżultat:**
Il-kapaċità toħloq logo SVG li:
- Jinkorpora l-isem tas-sit "CloudSync"
- Juża l-iskema tal-kuluri blu u bojod speċifikata
- Isegwi prinċipji ta’ disinn modern
- Jiġi sanitizzat awtomatikament u jkun lest għall-użu

## Integrazzjoni ma’ Theme Builder

Meta tuża l-għażla tad-direzzjoni tad-disinn ta’ Theme Builder, il-kapaċità Iġġenera Logo SVG:

1. Tanalizza d-direzzjoni tad-disinn u l-paletta tal-kuluri tiegħek
2. Tiġġenera logo SVG personalizzat li jaqbel mal-preferenzi tiegħek
3. Tinkorpora awtomatikament il-logo fiż-żona tal-intestatura/branding tas-sit tiegħek
4. Taħżen l-SVG bħala logo personalizzat fil-media ta’ WordPress

## L-Aħjar Prattiki

- **Ipprovdi preferenzi ċari tal-istil** — iddeskrivi l-istil tad-disinn li trid (modern, klassiku, ferrieħi, eċċ.)
- **Speċifika l-kuluri** — inkludi l-kuluri tal-marka tiegħek għall-konsistenza
- **Ittestja r-rendering** — ivverifika li l-logo jidher korrettament fuq daqsijiet differenti tal-iskrin
- **Ippersonalizza aktar** — uża l-għodod ta’ personalizzazzjoni tal-logo ta’ WordPress biex taġġusta d-daqs u t-tqegħid

## Limitazzjonijiet

- Il-logos SVG jiġu ġġenerati bħala grafika statika (mhux animata)
- Logos kumplessi b’ħafna elementi jistgħu jeħtieġu raffinament manwali
- Fonts personalizzati mhumiex appoġġjati; it-test juża fonts tas-sistema
- Dimensjonijiet kbar ħafna jew żgħar ħafna jistgħu jaffettwaw il-kwalità

## Kapaċitajiet Relatati

- [Ivvalida l-Kuntrast tal-Paletta](./validate-palette-contrast.md) — iċċekkja l-kuntrast tal-kuluri għall-aċċessibbiltà
- [Oħloq Menu](./create-menu.md) — oħloq menus tan-navigazzjoni għas-sit tiegħek
