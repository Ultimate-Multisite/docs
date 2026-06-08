---
title: મેનુ બનાવો
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# મેનુ બનાવો (Create Menu)

**મેનુ બનાવો** ક્ષમતા (ability) નો ઉપયોગ WordPress નેવિગેશન મેનુ બનાવે છે, જેમાં પેજના ટાઇટલથી અલગ નેવિગેશન લેબલ (navigation labels) આપવાની સુવિધા હોય છે.

## ઝાંખી (Overview)

આ ક્ષમતા સામાન્ય મેનુ બનાવવાની કાર્યક્ષમતાને વિસ્તારે છે, જેમાં `navigation_label` પેરામીટર આપવાની સુવિધા ઉમેરે છે. આનાથી તમે એવા મેનુ બનાવી શકો છો જ્યાં નેવિગેશનમાં દેખાતું લેબલ પેજના ટાઇટલથી અલગ હોય, જે સાઇટની રચના (site structure) અને યુઝરના અનુભવ (user experience)માં વધુ લવચીકતા પ્રદાન કરે છે.

## પેરામીટર્સ (Parameters)

| પેરામીટર | પ્રકાર (Type) | જરૂરી (Required) | વર્ણન (Description) |
|-----------|------|----------|-------------|
| `name` | string | Yes | મેનુનું નામ, ઉદાહરણ તરીકે: `Primary Navigation` |
| `location` | string | No | આ મેનુને કયા થીમ લોકેશન (Theme location) પર એટેચ કરવું છે, ઉદાહરણ તરીકે: `primary` |
| `navigation_label` | string | No | નેવિગેશનમાં દેખાતું લેબલ (પેજના ટાઇટલથી અલગ) |

## રીટર્ન વેલ્યુ (Return Value)

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## નેવિગેશન લેબલ વિરુદ્ધ પેજ ટાઇટલ (Navigation Label vs Page Title)

`navigation_label` પેરામીટર તમને આંતરિક મેનુના નામ અને યુઝર્સને દેખાતા લેબલને અલગ કરવાની મંજૂરી આપે છે:

- **`name`** — આંતરિક મેનુ ઓળખકર્તા (Internal menu identifier) જે WordPress દ્વારા ઉપયોગમાં લેવાય છે (દા.ત., "Primary Navigation")
- **`navigation_label`** — નેવિગેશનમાં સાઇટની મુલાકાત લેનારાઓને દેખાતું લેબલ (દા.ત., "Main Menu")

આ ત્યારે ઉપયોગી છે જ્યારે:
- તમારી આંતરિક નામકરણની પદ્ધતિ (internal naming convention) યુઝરને દેખાતા લેબલથી અલગ હોય
- તમે એડમિન પેનલમાં હોય તેના કરતાં નેવિગેશનમાં ટૂંકા લેબલ રાખવા માંગતા હો
- તમારે વિવિધ લેબલ લંબાઈઓ સાથે બહુવિધ ભાષાઓને સપોર્ટ કરવાની જરૂર હોય
- તમે ચોક્કસ પ્રદેશો અથવા યુઝર ગ્રુપ્સ માટે મેનુ બનાવી રહ્યા હો

## ઉપયોગના ઉદાહરણો (Usage Examples)

### ઉદાહરણ ૧: નેવિગેશન લેબલ સાથે સરળ મેનુ (Simple Menu with Navigation Label)

**પ્રોમ્પ્ટ (Prompt):**
```
Create a primary navigation menu called "Main Navigation" with the navigation label "Menu".
```

**પરિણામ (Result):**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### ઉદાહરણ ૨: ચોક્કસ થીમ લોકેશન માટે મેનુ (Menu for Specific Theme Location)

**પ્રોમ્પ્ટ (Prompt):**
```
Create a footer menu called "Footer Links" with navigation label "Quick Links" and assign it to the footer location.
```

**પરિણામ (Result):**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## થીમ બિલ્ડર સાથે સંકલન (Integration with Theme Builder)

જ્યારે તમે Theme Builder નો ઉપયોગ કરો છો, ત્યારે Create Menu ક્ષમતા:

1. ઉપલબ્ધ થીમ મેનુ લોકેશનને આપમેળે શોધી કાઢે છે
2. તમારા ડિઝાઇન માટે યોગ્ય નેવિગેશન લેબલ સાથે મેનુ બનાવે છે
3. મેનુને યોગ્ય થીમ લોકેશન પર એટેચ કરે છે
4. બનાવ્યા પછી મેનુ આઇટમ્સ ઉમેરવાનું સપોર્ટ કરે છે

## સંબંધિત ક્ષમતાઓ (Related Abilities)

- **`add_menu_item`** — હાલના મેનુમાં આઇટમ્સ ઉમેરો
- **`update_menu`** — મેનુનું નામ બદલો અથવા તેને થીમ લોકેશન પર ફરીથી એટેચ કરો
- **`delete_menu`** — તમારી સાઇટમાંથી મેનુ દૂર કરો

## શ્રેષ્ઠ પદ્ધતિઓ (Best Practices)

- **સ્પષ્ટ નેવિગેશન લેબલનો ઉપયોગ કરો** — લેબલ ટૂંકા અને વર્ણનાત્મક રાખો જેથી યુઝર્સને સરળતા રહે
- **થીમ લોકેશન સાથે મેળ ખાવો** — યોગ્ય પ્રદર્શન માટે મેનુને સાચા થીમ લોકેશન પર એટેચ કરો
- **મેનુની રચનાનું આયોજન કરો** — આઇટમ્સ બનાવતા પહેલા તમારા મેનુના ક્રમ (hierarchy) વિશે નક્કી કરો
- **પ્રતિભાવશીલતાનું પરીક્ષણ કરો** — ખાતરી કરો કે મેનુ મોબાઇલ ઉપકરણો પર યોગ્ય રીતે દેખાય છે
- **લેબલને સ્થાનિક બનાવો (Localize)** — વિવિધ ભાષાના સંસ્કરણો માટે અલગ નેવિગેશન લેબલનો ઉપયોગ કરો

## મર્યાદાઓ (Limitations)

- નેવિગેશન લેબલ ફક્ત પ્રદર્શન માટે છે; આંતરિક `name` હજી પણ WordPress ઓળખ માટે વપરાય છે
- થીમ સપોર્ટ અલગ-અલગ હોય છે; બધા થીમ્સ બધા મેનુ લોકેશનને સપોર્ટ કરતા નથી
- મેનુ આઇટમ્સ મેનુ બનાવ્યા પછી અલગથી ઉમેરવી પડે છે
- નેવિગેશન લેબલ બદલવા માટે મેનુ અપડેટ કરવું જરૂરી છે

## સંબંધિત ક્ષમતાઓ (Related Abilities)

- [Generate Logo SVG](./generate-logo-svg.md) — તમારી સાઇટ હેડર માટે લોગો બનાવો
- [Validate Palette Contrast](./validate-palette-contrast.md) — એક્સેસિબલ કલર સ્કીમ્સ સુનિશ્ચિત કરો
