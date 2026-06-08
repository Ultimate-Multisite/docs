---
title: થીમ બિલ્ડર ક્ષમતાઓ
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Theme Builder Abilities: Scaffold and Activate Block Themes

Superdav AI Agent v1.12.0 માં બે શક્તિશાળી ક્ષમતાઓ (abilities) રજૂ કરવામાં આવી છે જે તમને ચેટ ઇન્ટરફેસમાંથી સીધા જ કસ્ટમ બ્લોક થીમ્સ જનરેટ અને ડિપ્લોય કરવાની મંજૂરી આપે છે.

## Overview

**scaffold-block-theme** અને **activate-theme** ક્ષમતાઓ એ એજન્ટોને નીચેના કાર્યો કરવા સક્ષમ બનાવે છે:
- તમારી વિશિષ્ટતાઓ (specifications)ના આધારે સંપૂર્ણ, ઉત્પાદન માટે તૈયાર બ્લોક થીમ્સ જનરેટ કરવી
- મેન્યુઅલ હસ્તક્ષેપ વિના તમારા સાઇટ પર થીમ્સને આપમેળે એક્ટિવેટ કરવી
- માર્ગદર્શિત ડિઝાઇન નિર્ણયો દ્વારા સુસંગત વિઝ્યુઅલ ઓળખ બનાવવી

## Scaffold Block Theme

**scaffold-block-theme** ક્ષમતા એક સંપૂર્ણ થીમ સ્ટ્રક્ચર સાથે નવો WordPress બ્લોક થીમ જનરેટ કરે છે, જેમાં નીચેની વસ્તુઓનો સમાવેશ થાય છે:

- ડિઝાઇન ટોકન્સ સાથેનું `theme.json` કન્ફિગરેશન
- સામાન્ય લેઆઉટ માટે બ્લોક ટેમ્પલેટ ફાઇલો
- કસ્ટમ બ્લોક સ્ટાઇલ અને વેરીએશન્સ
- થીમ મેટાડેટા અને સપોર્ટ ઘોષણાઓ

### How to Invoke

Superdav AI Agent સાથેની તમારી ચેટમાં, તમે થીમ જનરેશન માટે વિનંતી કરી શકો છો:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

એજન્ટ નીચે મુજબ કરશે:
1. વાતચીત દ્વારા તમારી ડિઝાઇન પસંદગીઓ એકત્રિત કરશે
2. સંપૂર્ણ થીમ સ્ટ્રક્ચર જનરેટ કરશે
3. તમામ જરૂરી થીમ ફાઇલો બનાવશે
4. એક્ટિવેશન માટે થીમ તૈયાર કરશે

### Expected Output

જ્યારે આ ક્ષમતા સફળતાપૂર્વક અમલમાં મૂકવામાં આવશે, ત્યારે તમને નીચે મુજબ દેખાશે:

- પુષ્ટિ કે થીમનું માળખું (scaffolded) તૈયાર થઈ ગયું છે
- થીમનું નામ અને સ્થાન
- લાગુ કરાયેલા ડિઝાઇન ટોકન્સનો સારાંશ (રંગો, ટાઇપોગ્રાફી, સ્પેસિંગ)
- એક્ટિવેટ કરવા માટે તૈયાર સ્થિતિ

ઉદાહરણ આઉટપુટ:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Activate Theme

**activate-theme** ક્ષમતા તમારા સાઇટને નવો તૈયાર થયેલો અથવા હાલનો બ્લોક થીમ પર સ્વિચ કરે છે.

### How to Invoke

થીમનું માળખું તૈયાર કર્યા પછી, તમે તેને તરત જ એક્ટિવેટ કરી શકો છો:

```
"Activate the Modern Agency theme"
```

અથવા કોઈપણ હાલની થીમ એક્ટિવેટ કરી શકો છો:

```
"Switch to the Twentytwentyfour theme"
```

### Expected Output

જ્યારે એક્ટિવેશન સફળ થાય:

- એક્ટિવ થીમની પુષ્ટિ
- અગાઉની થીમનું નામ (સંદર્ભ માટે)
- સાઇટ URL જ્યાં થીમ હવે લાઇવ છે
- કોઈપણ થીમ-વિશિષ્ટ સેટઅપ નોંધો

ઉદાહરણ આઉટપુટ:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## Workflow: Scaffold and Activate

એક સામાન્ય વર્કફ્લો બંને ક્ષમતાઓને જોડે છે:

1. **થીમ જનરેશન માટે વિનંતી**: "મારા SaaS લેન્ડિંગ પેજ માટે એક બ્લોક થીમ બનાવો"
2. **એજન્ટ થીમનું માળખું તૈયાર કરે છે**: ફાઇલો અને ડિઝાઇન ટોકન્સ જનરેટ કરે છે
3. **સમીક્ષા અને સુધારણા**: જો જરૂરી હોય તો ડિઝાઇન ફેરફારોની ચર્ચા કરો
4. **એક્ટિવેટ કરો**: "હવે થીમ એક્ટિવેટ કરો"
5. **ચકાસણી**: નવી ડિઝાઇન લાઇવ છે તેની ખાતરી કરવા માટે તમારી સાઇટની મુલાકાત લો

## Design Tokens and Customization

તૈયાર કરેલી થીમ્સ (scaffolded themes) માટે WordPress ડિઝાઇન ટોકન્સ (theme.json દ્વારા) નો ઉપયોગ નીચેના માટે થાય છે:

- **Colors**: Primary, secondary, accent, neutral palette
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: Padding, margin, gap scales
- **Borders**: Radius and width tokens
- **Shadows**: Elevation levels

આ ટોકન્સ `theme.json` માં કેન્દ્રિત છે, જે તમને એક જ ફાઇલમાંથી તમારી આખી ડિઝાઇન સિસ્ટમને એડજસ્ટ કરવાનું સરળ બનાવે છે.

## Limitations and Notes

- થીમ્સ `/wp-content/themes/` માં તૈયાર કરવામાં આવે છે અને તેણે WordPress ના નામકરણ સંમેલનો (naming conventions) નું પાલન કરવું આવશ્યક છે
- એક્ટિવેશન માટે તમારા WordPress સાઇટ પર યોગ્ય પરવાનગીઓ (permissions) જરૂરી છે
- થીમ્સમાં કસ્ટમ PHP કોડ ઓછા હોય છે; જટિલ કાર્યક્ષમતા માટે પ્લગઇન્સનો ઉપયોગ કરો
- બ્લોક થીમ્સ WordPress 5.9 અને તેના પછીના વર્ઝન સાથે શ્રેષ્ઠ કામ કરે છે

## Troubleshooting

**Scaffolding પછી થીમ દેખાતી નથી**
- ચકાસો કે થીમ ડિરેક્ટરી અસ્તિત્વમાં છે અને તેની યોગ્ય પરવાનગીઓ છે
- ખાતરી કરો કે `theme.json` માન્ય JSON છે
- ખાતરી કરો કે થીમનું નામ હાલની થીમ્સ સાથે ટકરાતું નથી

**Activation fails**
- પુષ્ટિ કરો કે તમારી પાસે એડમિનિસ્ટ્રેટર પરવાનગીઓ છે
- તપાસો કે થીમ ડિરેક્ટરી WordPress દ્વારા વાંચી શકાય તેવી છે
- વિગતો માટે WordPress એરર લોગ્સની સમીક્ષા કરો

**Design tokens not applying**
- ચકાસો કે `theme.json` સિન્ટેક્સ સાચો છે
- કોઈપણ કેશિંગ પ્લગઇન્સને ક્લિયર કરો
- તપાસો કે તમારું WordPress વર્ઝન તમે જે ટોકન્સનો ઉપયોગ કરી રહ્યા છો તેને સપોર્ટ કરે છે

## Next Steps

તમારી થીમ એક્ટિવેટ કર્યા પછી, તમે નીચેના કાર્યો કરી શકો છો:
- ટાઇપોગ્રાફી, રંગો અને સ્પેસિંગને સુધારવા માટે **Design System Aesthetics skill** નો ઉપયોગ કરો
- WordPress બ્લોક એડિટર દ્વારા વ્યક્તિગત બ્લોક સ્ટાઇલને કસ્ટમાઇઝ કરો
- થીમની `style.css` ફાઇલમાં કસ્ટમ CSS ઉમેરો
- ચોક્કસ પેજ પ્રકારો માટે કસ્ટમ બ્લોક ટેમ્પલેટ્સ બનાવો
