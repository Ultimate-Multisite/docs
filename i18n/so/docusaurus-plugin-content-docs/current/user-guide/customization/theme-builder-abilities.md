---
title: Awoodda Theme Builderka
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Awooddaalinta Qalabka Theme Builder: Scaffold and Activate Block Themes

Superdav AI Agent v1.12.0 waxay soo bandhigtay laba awood oo xooggan oo kuu oggolaanaya inaad theme-yada block-ka gaarka ah (custom) si toos ah uga sameyso oo u soo dejisid interface-ka wada hadalka (chat).

## Aragtida Guud (Overview) {#overview}

Awoodaha **scaffold-block-theme** iyo **activate-theme** waxay u oggolaanayaan agents-ka inay:
- Sameeyaan theme-yada block-ka oo dhammaystiran, diyaar u ah in la isticmaalo (production-ready) iyadoo ku salaysan waxaad sheegto.
- Si toos ah ugu furayaan theme-yada website-kaaga iyadoon loo baahnayn in la qabto wax gacanta lagu sameeyo.
- Waxay abuuraan muuqaallo isku mid ah iyadoo la raacayo go'aaminta naqshadaynta (design decisions).

## Scaffold Block Theme {#scaffold-block-theme}

Awoodda **scaffold-block-theme** waxay samaynaysaa theme-ka block-ka cusub ee WordPress oo leh qaab dhismeed oo theme-ka dhammaystiran, oo ay ku jiraan:

- `theme.json` configuration oo leh design tokens (qaybaha naqshadaynta).
- File-yada template-ka block-ga ah kuwaas oo loogu talagalay qaababka caadiga ah (common layouts).
- Qaab-dhismeedka iyo isbeddellada gaarka ah ee block-ka.
- Metadata-da theme-ka iyo sheekooyinka taageerada (support declarations).

### Sida Loo Isticmaalo (How to Invoke) {#how-to-invoke}

Haddii aad wada hadal lahayd Superdav AI Agent, waxaad codsan kartaa in la sameeyo theme:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

Agent-ku wuxuu samayn doonaa:
1. Wuxuu ururi doonaa doorashada naqshadaynta (design preferences) iyadoo la wada hadlayo.
2. Wuxuu sameyn doonaa qaab dhismeedka theme-ka oo dhammaystiran.
3. Wuxuu samayn doonaa dhammaan file-yada theme-ka ee loo baahan yahay.
4. Wuxuu diyaarin doonaa theme-ka si la furayo (activation).

### Waxa La Filayaa In Lagu Soo Bandhigo (Expected Output) {#expected-output}

Marka awooddu si guuleystiran u fuliso, waxaad arki doontaa:

- Xaqiijin in theme-ka la scaffold-gareeyay.
- Magaca theme-ka iyo meesha uu ku yaallo.
- Soo koobidda design tokens-ka lagu salaynay (midabada, qoraalka, meelaha).
- Xaaladda diyaarinta si loo furayo (Ready-to-activate status).

Tusaale oo soo baxaya:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Activate Theme {#activate-theme}

اقتدار **activate-theme** wuxuu site-kaaga beddelayaa theme cusub oo la sameeyay ama jira, taasoo ah block theme.

### Sida Loo Isticmaalo {#how-to-invoke-1}

Marka aad theme samaysato (scaffolding), waxaad si degdeg ah u isticmaali kartaa:

```
"Activate the Modern Agency theme"
```

Ama isticmaal inaad fuliso theme jira oo la haysto:

```
"Switch to the Twentytwentyfour theme"
```

### Waxa La Qiyaasi Karo (Expected Output) {#expected-output-1}

Marka fulintaadu si guuleed u dhacdo:

- Xaqiijin ku saabsan theme-ka la firfiray
- Magaca theme-ka hore (sida tixraac)
- URL-ka site-kaaga halkaas oo theme-ku hadda ku shaqaynayo
- Qoraallo gaar ah oo ku saabsan qaabdhismeedka theme-ka

Tusaale oo natiijada ah:
```
✓ Theme-ka si guuleed u fuliyay
  Theme-ka la firfiray: Modern Agency
  Theme-ka hore: Twentytwentyfour
  Waxaa ku shaqaynaya: https://yoursite.com
  Fiiro: Hubi bogga ugu horreeya si aad u ogaato qaabdhismeedka cusub
```

## Habka Shaqaynta (Workflow): Samaysi oo Fulid {#workflow-scaffold-and-activate}

Habka caadiga ah wuxuu isku darayaa labada awoodood:

1. **Codsi samaynta theme-ka**: "Abuur block theme oo loogu talagalay bogga landing-ga SaaS-kayga"
2. **Agent-ku samaynayaa theme-ka**: Waxay samaynaysaa faylasha iyo design tokens (tusaale ahaan, qaababka muuqaalka)
3. **Dib u eegid oo hagaajin**: Wuxuu ka wada hadlaa isbeddellada design-ka haddii loo baahdo
4. **Fulid**: "Furi theme-ka hadda"
5. **Hubi**: Tag site-kaaga si aad u hubiso in qaabdhismeedka cusub uu fuliyay

## Design Tokens iyo Wax Ka Beddelid (Customization) {#design-tokens-and-customization}

Theme-yada la samaynayay waxay isticmaalaan design tokens-ka WordPress (`theme.json`) ee:

- **Midabada**: Midabka ugu muhiimsan, midabka labaad, midabka xoogga leh, iyo palette-ka badankooda (neutral)
- **Qoraalka (Typography)**: Qaybaha font-ka, cabbirrada, miisaanka (weight), iyo inta uu qoraalku u dhexeeyahay (line heights)
- **Dhaqdhaqaaqa (Spacing)**: Padding-ga, margin-ka, iyo qaababka dhexdhexaadka ah ee goobaha badan (gap scales)
- **Xididdada (Borders)**: Tokens-ka radius-ka iyo ballaarka xididda
- **Hoos u dhaca (Shadows)**: Heerarka kororka

Tokens-kan waxaa lagu isku dhejiyay `theme.json`, taasoo fududaynaysa inaad hagaajiso dhammaan nidaamka design-kaaga iyadoo la isticmaalayo fayl hal ah.

## Xaddidda iyo Fiiro Gaar Ah (Limitations and Notes) {#limitations-and-notes}

- Themes-ka waxaa lagu dhigaa `/wp-content/themes/` waxayna inay raacayaan habka magaca WordPress (WordPress naming conventions).
- Waxaa la baahan yahay inuu aad leeyahay fursadaha saxda ah ee website-kaaga si loo fuliyo Activation.
- Koodhka PHP-ga gaarka ah ee ku jira themes-ka waa mid yar; isticmaal plugins haddii aad u baahan tahay waxa adag.
- Block themes-ku waxay ugu fiican yihiin WordPress 5.9 iyo ka dambeeya.

## Waxyaabaha La Dhaqso (Troubleshooting) {#troubleshooting}

**Theme-ka ma soo muuqdo ka dib marka la dhigo (scaffolding)**
- Hubi in folder-ka theme-ka uu jiro oouu leeyahay fursadaha saxda ah.
- Hubi in `theme.json` uu yahay JSON sax ah.
- Hubi in magaca theme-kaagu uusan isku dhicin themes kale oo jira.

**Activation-ka ma midaysan (fails)**
- Hubi inaad leedahay fursadaha administrator.
- Hubi in folder-ka theme-ka uu WordPress-ka la akhri karo.
- Eeg logs-ka error-ka WordPress si aad u hesho faahfaahin dheeraad ah.

**Design tokens-ku ma shaqayn (not applying)**
- Hubi in qaabka `theme.json` uu sax yahay.
- Nadaafso dhammaan caching plugins-kaaga.
- Hubi in nooca WordPress-kaagu taageero design tokens-ka aad isticmaalayso.

## Tallaabooyinka Xiga ah (Next Steps) {#next-steps}

Marka aad theme-kaaga Activate gareyso, waxaad samayn kartaa:
- Isticmaal **Design System Aesthetics skill** si aad u hagaajisid qaabka qoraalka (typography), midabada, iyo meelaha (spacing).
- U beddel style-ka block-ga gaarka ah iyadoo la isticmaalayo WordPress block editor.
- Ku dar CSS gaar ah faylka `style.css` ee theme-kaaga.
- Samee templates block-yo gaar ah oo loogu talagalay noocyada bogga gaarka ah.
