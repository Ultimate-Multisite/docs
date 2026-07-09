---
title: Theme Builder Onboarding Flow
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder Onboarding Flow {#theme-builder-onboarding-flow}

Superdav AI Agent v1.12.0 એક માર્ગદર્શિત **Theme Builder onboarding flow** રજૂ કરે છે જે તમને તમારી શરૂઆતની સેટઅપ દરમિયાન કસ્ટમ બ્લોક થીમ બનાવવામાં મદદ કરે છે. આ સુવિધા જૂના Site Builder mode નું સ્થાન વધુ લવચીક, agent-assisted અભિગમથી લે છે.

## Theme Builder Onboarding Flow શું છે? {#what-is-the-theme-builder-onboarding-flow}

Theme Builder onboarding flow એક ઇન્ટરેક્ટિવ સેટઅપ વિઝાર્ડ છે જે:

- તમને ડિઝાઇનના નિર્ણયો (રંગો, ટાઇપોગ્રાફી, લેઆઉટ) દ્વારા માર્ગદર્શન આપે છે
- તમારી સાઇટની વિઝ્યુઅલ ઓળખની પસંદગીઓ કેપ્ચર કરે છે
- તમારી જરૂરિયાતો અનુસાર કસ્ટમ બ્લોક થીમ જનરેટ કરે છે
- પૂર્ણ થયા પછી આપમેળે થીમ એક્ટિવેટ કરે છે

આ flow **Setup Assistant agent** દ્વારા સંચાલિત છે, જે સ્પષ્ટતાના પ્રશ્નો પૂછે છે અને તમારી થીમને ક્રમિક રીતે બનાવે છે.

## Theme Builder Onboarding શરૂ કરવો {#starting-the-theme-builder-onboarding}

### પ્રથમ-વપરાશ સેટઅપ (First-Run Setup) {#first-run-setup}

જ્યારે તમે પ્રથમ વખત Superdav AI Agent ને નવી WordPress ઇન્સ્ટોલેશન પર લોન્ચ કરો છો, ત્યારે તમને આ દેખાશે:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Theme Builder onboarding flow માં પ્રવેશવા માટે **"Build a custom theme"** પસંદ કરો.

### મેન્યુઅલ એક્ટિવેશન (Manual Activation) {#manual-activation}

તમે જ્યારે પણ જરૂર હોય ત્યારે આ કમાન્ડ આપીને Theme Builder onboarding શરૂ કરી શકો છો:

```
"Start the Theme Builder onboarding"
```

અથવા

```
"Help me create a custom theme"
```

## Onboarding ના પગલાં (The Onboarding Steps) {#the-onboarding-steps}

### પગલું ૧: મોડ સિલેક્શન (Mode Selection) {#step-1-mode-selection}

Setup Assistant agent તમારી પસંદગી વિશે પૂછે છે:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

મોટાભાગના વપરાશકર્તાઓ માટે **Guided mode** ની ભલામણ કરવામાં આવે છે; agent તમારા ઉદ્યોગ અને લક્ષ્યોના આધારે ડિઝાઇન ભલામણો કરે છે.

### પગલું ૨: સાઇટ સ્પેસિફિકેશન (Site Specification) {#step-2-site-specification}

તમારો સાઇટ વિશે પૂછવામાં આવશે:

- **Site purpose**: E-commerce, blog, portfolio, SaaS, વગેરે.
- **Target audience**: તમારા મુલાકાતીઓ કોણ છે?
- **Brand colors**: પ્રાથમિક અને ગૌણ રંગો (અથવા "મને ખાતરી નથી")
- **Tone**: પ્રોફેશનલ, ક્રિએટીવ, પ્લેફુલ, મિનિમલ, વગેરે.

આ માહિતી તમારી **site_brief** મેમરીમાં સંગ્રહિત થાય છે, જે agent ભવિષ્યના સત્રોમાં સંદર્ભ આપે છે.

### પગલું ૩: ડિઝાઇન સિસ્ટમ નિર્ણયો (Design System Decisions) {#step-3-design-system-decisions}

agent તમને ડિઝાઇન ટોકન પસંદગીઓ દ્વારા માર્ગદર્શન આપે છે:

- **Typography**: ફોન્ટ ફેમિલી (serif, sans-serif, monospace) અને સાઇઝ સ્કેલ
- **Color palette**: પ્રાથમિક, ગૌણ, accent, અને neutral રંગો
- **Spacing**: compact, normal, અથવા spacious લેઆઉટ
- **Motion**: એનિમેશન અને ટ્રાન્ઝિશન (જો જરૂરી હોય તો)

### પગલું ૪: થીમ જનરેશન (Theme Generation) {#step-4-theme-generation}

Setup Assistant agent નીચેની વસ્તુઓ સાથે તમારી કસ્ટમ બ્લોક થીમનું સ્કેફોલ્ડિંગ કરે છે:

- `theme.json` જેમાં તમારા બધા ડિઝાઇન ટોકન હોય
- સામાન્ય લેઆઉટ માટે બ્લોક ટેમ્પલેટ્સ (હોમપેજ, બ્લોગ, કોન્ટેક્ટ)
- તમારા ડિઝાઇન સિસ્ટમ સાથે મેળ ખાતા કસ્ટમ બ્લોક સ્ટાઇલ
- થીમ મેટાડેટા અને WordPress સપોર્ટ ઘોષણાઓ

### પગલું ૫: એક્ટિવેશન અને વેરિફિકેશન (Activation and Verification) {#step-5-activation-and-verification}

થીમ આપમેળે એક્ટિવેટ થઈ જાય છે, અને તમને આ દેખાશે:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

તમે પછી તમારી સાઇટની મુલાકાત લઈને વેરિફાય કરી શકો છો કે થીમ યોગ્ય રીતે દેખાઈ રહી છે કે નહીં.

## Site Specification અને site_brief Memory {#site-specification-and-sitebrief-memory}

Onboarding દરમિયાન, agent તમારા સાઇટની સ્પેસિફિકેશનને **site_brief** મેમરી કેટેગરીમાં કેપ્ચર કરે છે. આમાં શામેલ છે:

- સાઇટનો હેતુ અને લક્ષ્યો
- લક્ષ્ય પ્રેક્ષકો (Target audience)
- બ્રાન્ડ રંગો અને ટોન
- ડિઝાઇન પસંદગીઓ
- કન્ટેન્ટ સ્ટ્રક્ચર

### site_brief શા માટે મહત્વનું છે {#why-sitebrief-matters}

ભવિષ્યના સત્રોમાં, agent તમારા site_brief નો સંદર્ભ લે છે જેથી:

- ફેરફારોમાં ડિઝાઇન સુસંગતતા જાળવી શકાય
- તમારી સાઇટના હેતુ સાથે સંરેખિત સુવિધાઓ સૂચવી શકાય
- સંદર્ભ-સભાન ભલામણો આપી શકાય
- સેટઅપના પ્રશ્નોનું પુનરાવર્તન ટાળી શકાય

### તમારા site_brief જોવો {#viewing-your-sitebrief}

તમે agent ને પૂછી શકો છો:

```
"Show me my site brief"
```

અથવા

```
"What do you know about my site?"
```

agent તમને તમારી સંગ્રહિત સાઇટ સ્પેસિફિકેશન બતાવશે.

## Onboarding પછી કસ્ટમાઇઝેશન (Customizing After Onboarding) {#customizing-after-onboarding}

Theme Builder onboarding પૂર્ણ થયા પછી, તમે આ કરી શકો છો:

### Design System Aesthetics Skill નો ઉપયોગ કરવો {#use-the-design-system-aesthetics-skill}

ડિઝાઇન સુધારાઓ માટે વિનંતી કરો:

```
"Refine the typography to be more modern"
```

અથવા

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** તમને લક્ષિત ડિઝાઇન અપડેટ્સ દ્વારા માર્ગદર્શન આપે છે.

### theme.json માં સીધું એડિટ કરવું {#edit-themejson-directly}

એડવાન્સ્ડ વપરાશકર્તાઓ માટે, કસ્ટમાઇઝેશન કરવા માટે `/wp-content/themes/[theme-name]/theme.json` એડિટ કરો:

- Color tokens
- Typography scales
- Spacing values
- Border and shadow definitions

### કસ્ટમ બ્લોક ટેમ્પલેટ્સ બનાવવી {#create-custom-block-templates}

WordPress block editor નો ઉપયોગ નીચેના માટે કસ્ટમ ટેમ્પલેટ્સ બનાવવા માટે કરો:

- Homepage layouts
- Blog post pages
- Product pages
- Contact forms

## સરખામણી: જૂનું વિરુદ્ધ નવું Onboarding (Comparison: Old vs. New Onboarding) {#comparison-old-vs-new-onboarding}

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## ટ્રબલશૂટિંગ (Troubleshooting) {#troubleshooting}

**onboarding flow પૂર્ણ ન થયો**
- flow ફરી શરૂ કરો: "Start the Theme Builder onboarding"
- તપાસો કે તમારી WordPress ઇન્સ્ટોલેશન અપ ટુ ડેટ છે
- વેરિફાય કરો કે Setup Assistant agent enable છે

**મારો site_brief ઉપયોગમાં નથી આવી રહ્યો**
- પુષ્ટિ કરો કે agent ને મેમરીની ઍક્સેસ છે
- agent ને "recall my site brief" કરવા કહો
- તપાસો કે તમારી સેટિંગ્સમાં મેમરી enable છે

**જનરેટ થયેલી થીમ મારી પસંદગી સાથે મેળ ખાતી નથી**
- તેને સુધારવા માટે Design System Aesthetics skill નો ઉપયોગ કરો
- agent ને "regenerate the theme with [specific changes]" કરવા કહો
- ચોક્કસ નિયંત્રણ માટે theme.json માં સીધું એડિટ કરો

## આગળના પગલાં (Next Steps) {#next-steps}

Theme Builder onboarding પૂર્ણ કર્યા પછી:

1. **તમારી સાઇટ વેરિફાય કરો**: નવી થીમ જોવા માટે તમારી સાઇટની મુલાકાત લો
2. **ડિઝાઇન સુધારો**: ફેરફારો માટે Design System Aesthetics skill નો ઉપયોગ કરો
3. **કન્ટેન્ટ ઉમેરો**: તમારી સાઇટનું કન્ટેન્ટ બનાવવાનું શરૂ કરો
4. **ક્ષમતાઓ જાણો**: scaffold-block-theme અને activate-theme જેવી અન્ય agent ક્ષમતાઓ વિશે જાણો
