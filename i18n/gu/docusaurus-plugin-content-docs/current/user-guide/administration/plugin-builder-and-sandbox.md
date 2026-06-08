---
title: પ્લગઇન બિલ્ડર અને સેન્ડબોક્સ
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder અને Sandbox

Gratis AI Agent v1.5.0 માં **Plugin Builder & Sandbox System** રજૂ કરવામાં આવ્યું છે, જે AI assistant ને તમારા network પર WordPress plugins જનરેટ કરવા, એક્ટિવેટ કરવા અને મેનેજ કરવાની મંજૂરી આપે છે — અને તે પણ એક સુરક્ષિત, અલગ (isolated) sandbox environment દ્વારા.

## Overview

Plugin Builder AI assistant ને natural language requests ના જવાબમાં custom WordPress plugins લખવામાં મદદ કરે છે. જનરેટ થયેલા plugins ને live site functionality પર અસર થાય તે પહેલાં, તેઓ એક sandbox layer ની અંદર validate, store અને activate કરવામાં આવે છે.

આના ઉપયોગના કિસ્સાઓ (Use cases) માં શામેલ છે:

- ડેવલપરની મદદ વિના હળવા (lightweight) utility plugins જનરેટ કરવા.
- એવા features નું પ્રોટોટાઇપિંગ કરવું જેને WordPress hooks અથવા custom post types ની જરૂર હોય.
- બેચ ઓપરેશન્સ માટે ટૂંકા ગાળાના ઓટોમેશન સ્ક્રિપ્ટ્સ બનાવવી.

## AI દ્વારા Plugin જનરેટ કરવું

Plugin જનરેટ કરવા માટે, Gratis AI Agent chat interface ખોલો અને તમે શું જરૂર છે તેનું વર્ણન કરો. ઉદાહરણ તરીકે:

> "એક plugin બનાવો જે dashboard પર એક custom admin notice ઉમેરે."

AI નીચે મુજબ કરશે:

1. structured code generation નો ઉપયોગ કરીને plugin નો PHP code તૈયાર કરશે.
2. સિન્ટેક્સ એરર અને unsafe patterns માટે આઉટપુટને validate કરશે.
3. જનરેટ થયેલા plugin ને sandbox store માં સેવ કરશે.
4. plugin slug સાથેની confirmation અને એક **Activate in Sandbox** બટન સાથેનો જવાબ આપશે.

activate કરતા પહેલા તમે તે જ conversation thread માં follow up કરીને પરિણામને સુધારી શકો છો.

## Sandbox Activation

sandbox માં જનરેટ થયેલા plugin ને activate કરવું એ તેને live network પર activate કરવાથી અલગ છે. sandbox:

- plugin ને એક isolated WordPress environment (wp-env) માં ચલાવે છે.
- કોઈપણ PHP errors, warnings, અથવા hook conflicts ને capture કરે છે.
- activation નું પરિણામ chat interface માં પાછું રિપોર્ટ કરે છે.

sandbox માં plugin activate કરવા માટે, AI chat response માં આપેલા **Activate in Sandbox** બટન પર ક્લિક કરો, અથવા આ slash command નો ઉપયોગ કરો:

```
/activate-plugin <plugin-slug>
```

એક status message ની confirmation આપે છે કે activation સફળ થયું કે નિષ્ફળ. નિષ્ફળતાના કિસ્સામાં, error log chat thread માં પ્રદર્શિત થાય છે.

## Generated Plugins નું મેનેજમેન્ટ

જનરેટ થયેલા plugins **Gratis AI Agent → Plugin Builder → Manage Plugins** માં सूचीबद्ध હોય છે. આ સ્ક્રીનમાંથી તમે નીચેના કાર્યો કરી શકો છો:

| Action | Description |
|---|---|
| **View source** | સંપૂર્ણ plugin PHP code સમીક્ષા કરો. |
| **Re-activate in sandbox** | sandbox activation check ફરીથી ચલાવો. |
| **Install on network** | plugin ને live network પર deploy કરો (manual confirmation જરૂરી છે). |
| **Update** | AI દ્વારા નવું version આપીને, હાલના code ને બદલો. |
| **Delete** | plugin ને sandbox store માંથી દૂર કરો. પહેલા તે બધા sites માંથી deactivate થઈ જશે. |

:::warning
**Install on network** તમારા live WordPress multisite પર જનરેટ થયેલા plugin ને deploy કરે છે. આગળ વધતા પહેલા plugin code ની સમીક્ષા કરો. Gratis AI Agent live install પૂર્ણ કરતા પહેલા confirmation માટે પૂછશે.
:::

## Network પર Generated Plugin Install કરવું

જ્યારે તમે sandboxed plugin થી સંતુષ્ટ હોવ, ત્યારે તમે તેને live network પર install કરી શકો છો:

1. **Gratis AI Agent → Plugin Builder → Manage Plugins** પર જાઓ.
2. જે plugin ને deploy કરવો છે તેની બાજુમાં **Install on Network** પર ક્લિક કરો.
3. dialog ની confirmation આપો. plugin ને `wp-content/plugins/` માં install કરવામાં આવે છે અને network-activated થાય છે.

વૈકલ્પિક રીતે, chat interface માં slash command નો ઉપયોગ કરો:

```
/install-plugin <plugin-slug>
```

## Plugin Updates

જનરેટ થયેલા plugin ને update કરવા માટે, AI assistant ને એક નવા conversation માં ફેરફારનું વર્ણન કરો:

> "dashboard-notice plugin ને update કરો જેથી notice ફક્ત administrators ને દેખાય."

AI એક નવું version જનરેટ કરે છે, જે વર્તમાન version ની સાથે sandbox માં દેખાય છે. તમે diff ની સમીક્ષા કરો છો અને update લાગુ થાય તે પહેલાં confirmation આપો છો.

## HookScanner Integration

Plugin Builder દરેક જનરેટ થયેલા plugin દ્વારા રજીસ્ટર કરાયેલા hooks અને filters નું વિશ્લેષણ કરવા માટે એક integrated **HookScanner** નો ઉપયોગ કરે છે. HookScanner નું આઉટપુટ chat response માં બતાવવામાં આવે છે અને તેમાં શામેલ છે:

- રજીસ્ટર થયેલા Action hooks (`add_action` calls).
- રજીસ્ટર થયેલા Filter hooks (`add_filter` calls).
- plugin dependencies માં મળેલા કોઈપણ hooks (તે `vendor/` અને `node_modules/` directories ને અવગણે છે).

આ તમને plugin activate કરતા પહેલા તેના behavior ને સમજવામાં મદદ કરે છે.

## Security Considerations

- જનરેટ થયેલા plugins ને મેન્યુઅલી install કરેલા plugins થી અલગ રીતે સ્ટોર કરવામાં આવે છે અને જ્યાં સુધી તમે તેને સ્પષ્ટપણે network પર install ન કરો ત્યાં સુધી તે standard WordPress plugin management screen દ્વારા ઉપલબ્ધ નથી.
- sandbox plugin files લખતી વખતે directory traversal રોકવા માટે path validation નો ઉપયોગ કરે છે.
- જોખમી function calls (જેમ કે `eval`, `exec`, `system`) ધરાવતા plugins ને validation દરમિયાન flag કરવામાં આવે છે અને તે activate થશે નહીં.
