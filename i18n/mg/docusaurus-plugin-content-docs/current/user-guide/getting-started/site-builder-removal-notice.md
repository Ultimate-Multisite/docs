---
title: Fampitandremana Famoahana ny Site Builder Mode
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Fampanana ny Fomba Fanamboarana Tranokala (Site Builder Mode Removal Notice)

**Natao fotsiny ny Site Builder mode tao amin'ny Superdav AI Agent v1.12.0.** Raha mampiasa ny Site Builder mode ianao, dia tokony hivoaka any amin'ny **Setup Assistant agent** ianao ho an'ny famoronana loha-telo (theme) sy ny fanamboarana toerana (site setup).

## Inona no Nitranga? {#what-happened}

### Site Builder Mode (Legacy) {#site-builder-mode-legacy}

Ny Site Builder mode dia fomba fiasa toy ny wizard izay natao ho an'izay:

- Famoronana tranonkala avy amin'ny template
- Famaritana ny fepetra fototra
- Safidy loha-telo (theme)
- Fanomezana votoaty voalohany

### Inona no Nanolo azy? {#what-replaced-it}

Ny **Setup Assistant agent** dia mitantana anisan'izany ny fiasa rehetra nataon'ny Site Builder mode amin'ny alalan'ny:

- Fepetra fanamboarana mavitrika kokoa, mitarika avy amin'ny agent
- Safidy fanamboarana loha-telo tsara kokoa
- Fandraisana anjara amin'ny fampianarana ny Theme Builder (Theme Builder onboarding)
- Fandefasana ny fahatsiarovana site_brief ho an'ny fotoana ho avy

## Raha Mampiasa Site Builder Mode Ianao {#if-you-were-using-site-builder-mode}

### Salama ny Tranokalao {#your-sites-are-safe}

- Ireo tranokala efa natao tamin'ny alalan'ny Site Builder mode dia mbola miasa
- Tsy hisy fahaverezan'ny angona na fiantraikany amin'ny toerana (site disruption)
- Afaka manohy mitantana ny tranokalao araka ny fomba mahazatra

### Mifindra any amin'ny Setup Assistant Agent {#migrate-to-setup-assistant-agent}

Ho an'ny fanamboarana toerana vaovao na fanovana loha-telo, dia ampiasao ny Setup Assistant agent:

```
"Manampy ahy mamorona tranokala vaovao"
```

na

```
"Manomboka ny fampianarana Theme Builder"
```

Ny Setup Assistant agent dia manome ny fiasa mitovy amin'izany fa misy fahaizana fanamboarana bebe kokoa.

## Fampitahana: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Toetra | Site Builder (Natao) | Setup Assistant (Vaovao) |
|---------|----------------------|----------------------|
| Fomba fanamboarana | Endrika wizard | Fifanakalozana amin'ny agent |
| Safidy loha-telo | Template voafaritra mialoha | Famoronana manokana |
| Fanamboarana (Customization) | Safidy voafetra | rafitra famolavolana feno |
| Site brief | Tsy voatahiry | Fahatsiarovana maharitra |
| Fotoana ho avy | Fandikana miverimberina | Mampiasa site_brief voatahiry |
| Fahaizana (Flexibility) | Fomba fiasana voafetra | Fifanakalozana miovaova |

## Fidirana any amin'ny Setup Assistant Agent {#migrating-to-setup-assistant-agent}

### Ho an'ny Tranokala Vaovao {#for-new-sites}

Tsy mampiasa ny Site Builder mode intsony:

1. Fangatahanao: "Azafady, ampahafantaro ahy momba ny fanaovana tranonkala vaovao"
2. Ny Setup Assistant agent dia hitarika anao amin'ny zavatra maromaro toy izao:
   - Tanjon'ny tranonkala sy ny tanjona atao (Site purpose and goals)
   - Olona ho iantsoina (Target audience)
   - Famaritana ny marika (Brand identity)
   - Famoronana loha-baovao (Theme generation)
   - Fandrindrana voalohany (Initial configuration)

### Ho an'ny Tranonkala Efa Misy {#for-existing-sites}

Raha manana tranonkala efa misy avy amin'ny Site Builder mode ianao:

1. Afaka mbola mampiasa azy araka izao
2. Raha te hanavao ny loha-baovao (theme) ianao, fangatahanao hoe: "Azo atao ve ny famolavolana indray ny tranonkala ko?" (Redesign my site)
3. Ny Setup Assistant agent dia hanampy anao hamoronana loha-baovao vaovao
4. Ny angona momba ny tranonkalanao dia tsy miova

### Ho An'ny Fanovana Lohateny (Theme Changes) {#for-theme-changes}

Raha te hanova ny loha-baovao ianao, fa tsy amin'ny Site Builder mode:

1. Fangatahanao hoe: "Azo ovaina ve ny loha-baovao anao?" (Change my theme)
2. Ny Setup Assistant agent dia:
   - Hanontany momba ny zavatra tianao ho endrika (design preferences)
   - Hamorona loha-baovao manokana ho anao
   - Hanatanteraka azy eo amin'ny tranonkalanao

## Fahasamihafana Lehibe {#key-differences}

### Site Builder Mode {#site-builder-mode}

```
1. Mifidiana template iray
2. Safidio ny theme
3. Andramo ny fandrindrana fototra (Configure basic settings)
4. Tapitra
```

### Setup Assistant Agent {#setup-assistant-agent}

```
1. Asehoy ny tanjon'ny tranonkalanao
2. Fantaro ny olona iantsoina ho anao
3. Safidio ny zavatra tianao ho endrika
4. Ny agent dia hamorona loha-baovao manokana
5. Ny agent dia hanatanteraka ilay loha-baovao
6. Ny famintinana momba ny tranonkala dia voarakitra ho an'ny fotoana ho avy
```

## Tombontsoa azo avy amin'ny Setup Assistant Agent {#benefits-of-setup-assistant-agent}

### Ho Malalaka kokoa (More Flexible) {#more-flexible}

- Asehoy ny tranonkalanao amin'ny fiteny tsotra
- Mahazo torohevitra manokana
- Miova araka izay ilainao manokana

### Fandrindrana tsara kokoa (Better Customization) {#better-customization}

- Famoronana loha-baovao manokana
- Fifidianana momba ny rafitry ny famolavolana (Design system decisions)
- Token ho an'ny endrika izay mitohy (Persistent design tokens)

### Fampaherezana maharitra (Persistent Memory) {#persistent-memory}

- Ny site_brief anao dia voarakitra
- Ny agent hafa dia hahatakatra ny tranonkalanao
- Tsy mila averina ny fampahalalana momba ny fanombohana

### Fandrindrana mifandray (Integrated Workflow) {#integrated-workflow}

- Fanofanana ny Theme Builder
- Fahaiza-manao amin'ny Endrika rafitry ny famolavolana (Design System Aesthetics skill)
- Fahafahana mifehy ny fahitana (Ability Visibility controls)
- Ny asa rehetra dia miara-miasa tsara

## Fanamboarana Olana (Troubleshooting) {#troubleshooting}

### Tsy mahita ny Site Builder mode aho {#i-cant-find-site-builder-mode}

Natao fialan'ny Site Builder mode. Ampiasao ny Setup Assistant agent fa tsy izany:

"Fampahafana a tovovon-tserasera vaovao"

### Te-hifandray amin'ny tranonkala avy amin'ny Site Builder aho {#i-want-to-recreate-a-site-from-site-builder}

Afaka manao izany amin'ny alalan'ny Setup Assistant agent ianao:

1. Fangatahana: "Ampahafantaro ahy ny fampandrosoana tranonkala vaovao"
2. Azo atao ny mamaritra ny tanjona sy ny endriny an'ilay tranonkala taloha
3. Ny agent dia hanamboatra loha-telo (theme) mitovy amin'izany
4. Ho voatahiry ny site_brief anao ho an'ny fampiasana any aoriana

### Tsy miasa ny tranonkala Site Builder efa misy {#my-existing-site-builder-site-isnt-working}

Ny tranonkala efa vita amin'ny alalan'ny Site Builder mode dia mbola miasa. Raha toa ka misy olana ianao:

1. Jereo raha mbola aktraka ny loha-telo (theme) anao
2. Fantaro raha voafahana ireo plugin anao
3. Jereo ny logs (tatitra fahadisoana) an'ny WordPress
4. Mifandraisa amin'ny sampan-draharaha raha mbola misy olana

### Afaka mbola mampiasa ny template Site Builder taloha ve aho? {#can-i-still-use-my-old-site-builder-templates}

Tsy azo ampiasaina intsony ny template Site Builder. Na izany aza:

- Ny tranonkala efa misy dia mbola miasa
- Afaka manao tranonkala mitovy amin'izany ianao amin'ny alalan'ny Setup Assistant agent
- Ny Setup Assistant agent dia manome safidy fanamboarana bebe kokoa

## Dingana Manaraka {#next-steps}

1. **Ho an'ny tranonkala vaovao**: Ampiasao ny Setup Assistant agent
2. **Ho an'ny tranonkala efa misy**: Mbola ampiasao izy toy ny efa misy
3. **Ho fiovana eo amin'ny loha-telo (theme)**: Mangataha fanampiana avy amin'ny Setup Assistant agent
4. **Ho fanatsarana ny endrika (design refinement)**: Ampiasao ny Design System Aesthetics skill

## Lohateny Mifandraika {#related-topics}

- **Theme Builder Onboarding**: Fandefasana toromarika ho an'ny loha-telo manokana
- **Setup Assistant Agent**: Fanamboarana tranonkala miaraka amin'ny agent
- **Site Specification Skill**: Famarinana ny tanjona sy ny vahoaka an'ny tranonkalanao
- **Design System Aesthetics Skill**: Fanatsarana ny maha-endrika (visual identity) an'ny tranonkalanao
