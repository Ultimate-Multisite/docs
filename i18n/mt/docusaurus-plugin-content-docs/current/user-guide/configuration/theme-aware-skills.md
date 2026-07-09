---
title: Skills b'awareness tal il tema
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Skills B'Aware Theme {#theme-aware-skills}

Superdav AI Agent v1.10.0 jidda quar-quar nu skills b'aware theme li jidda awtomatik jidda jidda għall-theme WordPress attiv tiegħek. Il-skills hawn jipprovdu gida u capacità speċjalizzati li huma adattati għall-architettura u l-funzjonijiet tal-theme tiegħek.

## X'għin Huma Skills B'Aware Theme? {#what-are-theme-aware-skills}

Skills b'aware theme huma bazi ta għarfien u setji ta strumenti prekonfigurat li l-AI assistant jidirja l-tagħvot b'awtomati b'basa fuq il-theme WordPress attiv tiegħek. Meta ti tinqas il-theme, is-skills li huma disponibbli mill-assistant jidduq awtomatik — ma għandux konfigurat manuelli.

Kull skill jinkludi:

- **Dokumentazzjoni speċifika għall-theme** — gida fuq kif tista' u tippersonalizza l-theme
- **Riferimenti għall-block u pattern** — block(s) li huma disponibbli, pattern(s), u opzioni ta disjen
- **Eżempji ta personalizzazzjoni** — snippetijiet ta kodi u pattern konfigurat għall-taski comuni
- **Best practices** — preċizzjonijiet għall-architettura u l-workflow tal-theme

## Skills B'Aware Theme Disponibbli {#available-theme-aware-skills}

### Block Themes {#block-themes}

**Applika għal:** Theme li jiddefli l-architettura b'block WordPress (Full Site Editing).

Il-skill ta Block Themes jipprovdu gida fuq:

- Kreaw u edita template b'użu tal-block editor
- L-aġġuntament ma' pattern(s) ta block u block(s) reusabbli
- Personalizzazzjoni tal-styles globali u impostazioni ta theme.json
- Użu ta’theme blocks u varianti
- Konstrukċjoni ta’block patterns kustom għas-sajr tiegħek

**Jidduq awtomatik meta:** Il-theme attiv tiegħek huwa theme b'block (jappoġġja il-feature `block-templates`).

### Classic Themes {#classic-themes}

**Applika għal:** Theme WordPress tradizzjonali li jiddefli template PHP u l-editor klassiku.

Il-skill ta Classic Themes jipprovdu gida fuq:

* L-Programma ma PHP template files u hook
* Personalizzazzjoni tal-apparenza tal-theme via il Customizer
* Użu taa widget areas u sidebars
* Modifikazzjoni ta CSS u sviluppu ta child theme
* Iffهمament hierarxia tal-theme u tagijiet ta template

**Attivata awtomatik min qabel:** Il-theme attivi tiegħek huwa theme klassiku (non-block).

### Kadence Blocks {#kadence-blocks}

**Applika għal:** Siti li jipprogramu biex jippressu l-Kadence Blocks plugin għall-design aċċċi tal-block.

Il-skill ta Kadence Blocks jgħin f:

- Użu librilja avvanzata tal-Kadence (Hero, Testimonials, Pricing, ecc.)
- Konfigurazzjoni tal-setting tal-block tal-Kadence u opzioni responsivi
- Konstruizzjoni tal-layout kustom b'grid u container blocks tal-Kadence
- Integrà Kadence blocks mal-theme tiegħek
- Użu tas-sistema ta dizigni (design system) u presets tal-Kadence

**Attivata awtomatik min qabel:** Il-Kadence Blocks plugin huwa attiv aktar fuq sitk.

### Kadence Theme {#kadence-theme}

**Applika għal:** Siti li jipprogramu biex jippressu l-Kadence theme għall-design u personalizzazzjoni aċċċi tal-block.

Il-skill ta Kadence Theme jgħin f:

- Personalizzazzjoni tal-Kadence theme via global styles u theme.json
- Użu pattern u template built-in tal-Kadence
- Konfigurazzjoni tal-setting u opzioni tal-Kadence theme
- Konstruizzjoni tal-design kustom b'sistema ta dizigni (design system) tal-Kadence
- Integrà Kadence mal-plugin u tool popolari

**Attivata awtomatik min qabel:** Il-Kadence theme huwa il-theme attivi tiegħek.

## Come jiġu selektoo is-Skills {#how-skills-are-selected}

L-assistant jifhax b'mod awtomatiku il-theme attivi tiegħek u il-plugins li għandhom installati fuq kull messaggio. Jekk disponibbli skilla li tfittejja ma' il-theme, hija tivvutja awtomatik f il-context tal-assistant. Ma għandekx attivaw jew tippassja is-skills manualment.

### Skills multipli {#multiple-skills}

Jekk l-skills applicabbli għall-sajtu tiegħek (b'mod kif ma jkun attivi sia Kadence Blocks u Kadence Theme, biex iż-żmien) l-assistenti għandu aċċess għal kull skill li jidher u jistax jirreferi għajnuna min kull.

### Il-Switch ta' Temi (Themes) {#switching-themes}

Meta tġiegħed il-tema attiva tiegħek, il-skills disponibili tal-assistenti jidirja l-aċċess b'mod awtomatiku fil-messaġġ x-x. Biex nipprova:

1. Qed tista'xxi tema b'block (block theme) u l-skill **Block Themes** attiv.
2. Tġiegħed għal tema klassika (classic theme).
3. Fil-messaġġ li jġ perqabb, l-skill **Classic Themes** jidirja l-aċċess awtomatikament, u l-skill **Block Themes** ma jkollux disponibbli aktar.

## L-Użu tal-Skills b'għarfien il-Tema (Theme-Aware Skills) {#using-theme-aware-skills}

Biex tista't tfisser l-skill b'għarfien il-tema, kif jidher, iscritti minn kif tista' tqol għal assistenti x-x. L-assistenti jirreferix aktar għajnuna tal-skill appropriat awtomatikament.

### Eżempju Prompiti (Prompts) {#example-prompts}

**Biex għall-Block Themes:**
> "Ikreaw sezzjoni hero b'istilji immaġini ta' sfond u test centrat u jippurru l-test b'pattern tal-block."

**Biex għall-Classic Themes:**
> "Aggiungi area widget kustom għas-sidebar u għalfe tema żgħira (child theme)."

**Biex għall-Kadence Blocks:**
> "Ikreaw sezzjoni testimonianzi u għandu l-Kadence Testimonials block."

**Biex għall-Kadence Theme:**
> "Iżżerza (Customize) il-layout tal-header u stilji menu navigazzjoni."

L-assistenti jipprovdi għajnuna speċifika għat-tema u esempi kodi li huma adattati għat-tema u plugin attivi tiegħek.

:::note
Il-skills b'għarfien il-tema huma disponibbli awtomatikament f Superdav AI Agent v1.10.0 u aktar. Ma għandekx ħafna impożizzjoni jew konfigurarja aggiettiva.
:::
