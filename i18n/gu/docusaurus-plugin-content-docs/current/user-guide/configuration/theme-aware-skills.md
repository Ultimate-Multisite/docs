---
title: થીમ-અવેર સ્કિલ્સ
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Theme-Aware Skills

Superdav AI Agent v1.10.0 માં ચાર નવા theme-aware બિલ્ટ-ઇન સ્કીલ્સ આવે છે જે આપમેળે તમારા active WordPress theme સાથે અનુકૂલન સાધે છે. આ સ્કીલ્સ તમારા theme ના આર્કિટેક્ચર અને ફીચર્સને અનુરૂપ વિશેષ માર્ગદર્શન અને ક્ષમતાઓ પ્રદાન કરે છે.

## Theme-Aware Skills શું છે?

Theme-aware skills એ pre-configured knowledge bases અને tool sets છે જે AI assistant તમારા સાઇટ પર હાલમાં active હોય તે WordPress theme ના આધારે આપમેળે પસંદ કરે છે. જ્યારે તમે theme બદલો છો, ત્યારે assistant ની ઉપલબ્ધ સ્કીલ્સ આપમેળે અપડેટ થઈ જાય છે — તમારે કોઈ મેન્યુઅલ કન્ફિગરેશન કરવાની જરૂર નથી.

દરેક સ્કીલમાં શામેલ છે:

- **Theme-specific documentation** — theme નો ઉપયોગ કરવા અને કસ્ટમાઇઝ કરવા અંગે માર્ગદર્શન
- **Block and pattern references** — ઉપલબ્ધ blocks, patterns, અને ડિઝાઇન વિકલ્પો
- **Customization examples** — સામાન્ય કાર્યો માટે code snippets અને configuration patterns
- **Best practices** — theme ના આર્કિટેક્ચર અને workflow માટેની ભલામણો

## ઉપલબ્ધ Theme-Aware Skills

### Block Themes

**લાગુ પડે છે:** જે themes WordPress ના block-based (Full Site Editing) આર્કિટેક્ચરનો ઉપયોગ કરે છે.

The Block Themes skill નીચેના માટે માર્ગદર્શન પૂરું પાડે છે:

- block editor નો ઉપયોગ કરીને templates બનાવવું અને edit કરવું
- block patterns અને reusable blocks સાથે કામ કરવું
- global styles અને theme.json settings ને કસ્ટમાઇઝ કરવું
- theme blocks અને variations નો ઉપયોગ કરવો
- તમારી સાઇટ માટે custom block patterns બનાવવા

** આપમેળે સક્રિય થાય છે જ્યારે:** તમારું active theme એક block theme હોય (જે `block-templates` ફીચરને સપોર્ટ કરે છે).

### Classic Themes

**લાગુ પડે છે:** પરંપરાગત WordPress themes જે PHP templates અને classic editor નો ઉપયોગ કરે છે.

The Classic Themes skill નીચેના માટે માર્ગદર્શન પૂરું પાડે છે:

- PHP template files અને hooks સાથે કામ કરવું
- Customizer દ્વારા theme ની appearance ને કસ્ટમાઇઝ કરવી
- widget areas અને sidebars નો ઉપયોગ કરવો
- CSS માં ફેરફાર કરવો અને child theme development કરવું
- theme hierarchy અને template tags સમજવા

** આપમેળે સક્રિય થાય છે જ્યારે:** તમારું active theme એક classic (non-block) theme હોય.

### Kadence Blocks

**લાગુ પડે છે:** જે સાઇટ્સ એડવાન્સ્ડ block-based design માટે Kadence Blocks plugin નો ઉપયોગ કરે છે.

The Kadence Blocks skill નીચેના માટે માર્ગદર્શન પૂરું પાડે છે:

- Kadence ની એડવાન્સ્ડ block library (Hero, Testimonials, Pricing, વગેરે) નો ઉપયોગ કરવો
- Kadence block settings અને responsive options ને configure કરવા
- Kadence ના grid અને container blocks સાથે custom layouts બનાવવા
- તમારા theme સાથે Kadence blocks ને integrate કરવા
- Kadence ના design system અને presets નો લાભ લેવો

** આપમેળે સક્રિય થાય છે જ્યારે:** Kadence Blocks plugin તમારી સાઇટ પર active હોય.

### Kadence Theme

**લાગુ પડે છે:** જે સાઇટ્સ block-based design અને customization માટે Kadence theme નો ઉપયોગ કરે છે.

The Kadence Theme skill નીચેના માટે માર્ગદર્શન પૂરું પાડે છે:

- global styles અને theme.json દ્વારા Kadence theme ને કસ્ટમાઇઝ કરવું
- Kadence ના બિલ્ટ-ઇન block patterns અને templates નો ઉપયોગ કરવો
- Kadence theme settings અને options ને configure કરવા
- Kadence ના design system સાથે custom designs બનાવવા
- લોકપ્રિય plugins અને tools સાથે Kadence ને integrate કરવું

** આપમેળે સક્રિય થાય છે જ્યારે:** Kadence theme તમારું active theme હોય.

## Skills કેવી રીતે પસંદ થાય છે

assistant દરેક મેસેજ પર તમારા active theme અને installed plugins ને આપમેળે detect કરે છે. જો કોઈ matching theme-aware skill ઉપલબ્ધ હોય, તો તે આપમેળે assistant ના context માં load થઈ જાય છે. તમારે સ્કીલ્સને મેન્યુઅલી enable કે switch કરવાની જરૂર નથી.

### Multiple Skills

જો તમારી સાઇટ પર એક કરતાં વધુ સ્કીલ્સ લાગુ પડે છે (ઉદાહરણ તરીકે, જો તમારી પાસે Kadence Blocks અને Kadence Theme બંને active હોય), તો assistant ને તમામ લાગુ પડતા સ્કીલ્સની ઍક્સેસ હોય છે અને તે દરેકમાંથી માર્ગદર્શનનો સંદર્ભ આપી શકે છે.

### Switching Themes

જ્યારે તમે તમારું active theme બદલો છો, ત્યારે next message પર assistant ની ઉપલબ્ધ સ્કીલ્સ આપમેળે અપડેટ થઈ જાય છે. ઉદાહરણ તરીકે:

1. તમે **Block Themes** skill active સાથે એક block theme નો ઉપયોગ કરી રહ્યા છો.
2. તમે એક classic theme પર switch કરો છો.
3. તમારા next message પર, **Classic Themes** skill આપમેળે load થઈ જાય છે, અને **Block Themes** skill હવે ઉપલબ્ધ નથી.

## Theme-Aware Skills નો ઉપયોગ કરવો

theme-aware skill નો લાભ લેવા માટે, ફક્ત chat interface માં તમે શું કરવા માંગો છો તેનું વર્ણન કરો. assistant આપમેળે યોગ્ય skill ના માર્ગદર્શનનો સંદર્ભ આપશે.

### Example Prompts

**Block Themes માટે:**
> "block patterns નો ઉપયોગ કરીને background image અને centered text સાથે એક hero section બનાવો."

**Classic Themes માટે:**
> "child theme નો ઉપયોગ કરીને sidebar માં એક custom widget area ઉમેરો."

**Kadence Blocks માટે:**
> "Kadence Testimonials block નો ઉપયોગ કરીને એક testimonials section બનાવો."

**Kadence Theme માટે:**
> "header layout અને navigation menu styling ને કસ્ટમાઇઝ કરો."

assistant તમારા active theme અને plugins ને અનુરૂપ theme-specific માર્ગદર્શન અને code examples પ્રદાન કરશે.

:::note
Theme-aware skills Superdav AI Agent v1.10.0 અને તેના પછીના સંસ્કરણોમાં આપમેળે ઉપલબ્ધ છે. કોઈ વધારાની સેટઅપ કે કન્ફિગરેશનની જરૂર નથી.
:::
