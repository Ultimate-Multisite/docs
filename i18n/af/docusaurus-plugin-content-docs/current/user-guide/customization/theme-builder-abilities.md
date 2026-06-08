---
title: Tema Bouer Vermoghede
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Theme Builder Vermoë: Scaffold en Aktiveer Block Themes

Superdav AI Agent v1.12.0 stel twee kragtige vermoë beskik wat jou toelaat om aangepaste block themes direk uit die chat-koppelvlak te genereer en te implementeer.

## Oorsig

Die **scaffold-block-theme** en **activate-theme** vermoë stel agents in staat om:
- Voltooide, produksie-gereed block themes te genereer op grond van jou spesifikasies
- Themes outomaties op jou webwerf te aktiveer sonder handmatige ingryping
- Samehangende visuele identiteite te skep deur begeleide ontwerpbesluite

## Scaffold Block Theme

Die **scaffold-block-theme** vermoë genereer 'n nuwe WordPress block theme met 'n volledige tema-struktuur, insluitend:

- `theme.json` konfigurasie met ontwerp-tokens
- Block-sjabloonlêers vir algemene uitlegte
- Aangepaste block-style en variasies
- Tema-metadata en ondersteuningsverklaringe

### Hoe om te roep

In jou chat met Superdav AI Agent, kan jy tema-generasie versoek:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

Die agent sal:
1. Jou ontwerpvoorkeure deur gesprek insamel
2. Die volledige tema-struktuur genereer
3. Alle nodige tema-lêers skep
4. Die tema vir aktivering voorberei

### Verwagte Uitkoms

Wanneer die vermoë suksesvol uitgevoer word, sal jy sien:

- Bevestiging dat die tema gekonstruer is
- Die tema se naam en ligging
- 'n Opsomming van die toegepaste ontwerp-tokens (kleure, tipografie, spasie)
- Gereed-om-te-aktiveer status

Voorbeelduitkoms:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Aktiveer Tema

Die **activate-theme** vermoë skakel jou webwerf na 'n nuut gekonstrueerde of bestaande block theme.

### Hoe om te roep

Nadat jy 'n tema gekonstruer het, kan jy dit onmiddellik aktiveer:

```
"Activate the Modern Agency theme"
```

Of enige bestaande tema aktiveer:

```
"Switch to the Twentytwentyfour theme"
```

### Verwagte Uitkoms

Wanneer aktivering suksesvol is:

- Bevestiging van die aktiewe tema
- Naam van die vorige tema (vir verwysing)
- Webwerf-URL waar die tema nou live is
- Enige tema-spesifieke opstelnotas

Voorbeelduitkoms:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## Werkvloei: Scaffold en Aktiveer

'n Tipiese werkvloei kombineer beide vermoë:

1. **Versoek tema-generasie**: "Create a block theme for my SaaS landing page"
2. **Agent konstruer die tema**: Genereer lêers en ontwerp-tokens
3. **Hersien en verfyn**: Bespreek ontwerpveranderinge indien nodig
4. **Aktiveer**: "Activate the theme now"
5. **Verifieer**: Besoek jou webwerf om te bevestig dat die nuwe ontwerp live is

## Ontwerp-Tokens en Aanpassing

Gekonstrueerde themes gebruik WordPress ontwerp-tokens (via `theme.json`) vir:

- **Kleure**: Primêr, sekondêr, aksent, neutrale palet
- **Tipografie**: Lettertipe, groottes, gewigte, lynehoogtes
- **Spasering**: Padding, marge, gap-skale
- **Grens**: Radius en breedte-tokens
- **Skaduwees**: Verhogingsvlakke

Hierdie tokens is gesentraliseerd in `theme.json`, wat dit maklik maak om jou hele ontwerpstelsel vanaf een lêer aan te pas.

## Beperkings en Notas

- Themes word in `/wp-content/themes/` gekonstruer en moet die WordPress benoemingskonvensies volg
- Aktivering vereis toepaslike vergunnings op jou WordPress webwerf
- Aangepaste PHP-kode in themes is minimaal; gebruik plugins vir komplekse funksionaliteit
- Block themes werk die beste met WordPress 5.9 en later

## Probleemoplossing

**Tema verskyn nie na konstruering nie**
- Verifieer dat die tema-direktorie bestaan en korrekte vergunnings het
- Kontroleer of `theme.json` geldige JSON is
- Verseker dat die tema se naam nie met bestaande themes konflik nie

**Aktivering misluk**
- Bevestig dat jy administrateurvergunnings het
- Kontroleer of die tema-direktorie deur WordPress leesbaar is
- Raadpleeg WordPress fout-logboeke vir besonderhede

**Ontwerp-tokens pas nie toe nie**
- Verifieer dat die `theme.json` sintaks korrek is
- Maak enige caching plugins skoon
- Kontroleer of jou WordPress-weergawe die tokens wat jy gebruik ondersteun

## Volgende Stappe

Nadat jy jou tema geaktiveer het, kan jy:
- Die **Design System Aesthetics skill** gebruik om tipografie, kleure en spasie te verfyn
- Individuele block-style aanpas deur die WordPress block editor
- Aangepaste CSS by in die tema se `style.css` lêer voeg
- Aangepaste block-sjablone skep vir spesifieke bladsy-tipes
