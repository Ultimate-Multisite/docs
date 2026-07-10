---
title: ક્ષમતાની દૃશ્યતા
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Ability Visibility {#ability-visibility}

Superdav AI Agent v1.12.0 માં **Ability Visibility** કંટ્રોલ્સ રજૂ કરવામાં આવ્યા છે, જે નક્કી કરે છે કે કઈ સર્ફસ (surfaces) કઈ ક્ષમતા (ability) ને એક્સપોઝ કરશે. આનાથી એડમિનિસ્ટ્રેટર્સને સચોટ રીતે નિયંત્રિત કરવામાં મદદ મળે છે કે કઈ એજન્ટ ક્ષમતાઓ REST APIs, MCP સર્વર્સ, WooCommerce ઇન્ટિગ્રેશન્સ અને અન્ય ઇન્ટરફેસ દ્વારા ઉપલબ્ધ છે.

## Ability Visibility શું છે? {#what-is-ability-visibility}

Ability Visibility એક પરમિશન સિસ્ટમ છે જે નિયંત્રિત કરે છે:

- **કઈ ક્ષમતાઓ** એજન્ટ્સ માટે ઉપલબ્ધ છે
- **ક્યાં એક્સપોઝ થાય છે** (REST API, MCP, WooCommerce, વગેરે)
- **કોણ એક્સેસ કરી શકે છે** (પાર્ટનર allow-lists દ્વારા)
- **તેને કેવી રીતે વર્ગીકૃત કરવામાં આવે છે** (recognized vs. unclassified)

દરેક ક્ષમતા સાથે એક વિઝિબિલિટી લેવલ જોડાયેલું હોય છે જે વિવિધ સર્ફસ પર તેની ઉપલબ્ધતા નક્કી કરે છે.

## Visibility Levels {#visibility-levels}

### Public {#public}

**Public abilities** બધે ઉપલબ્ધ હોય છે:

- REST API endpoints
- MCP servers
- WooCommerce integrations
- Chat interfaces
- બધા યુઝર રોલ્સ (યોગ્ય પરમિશન સાથે)

ઉદાહરણ: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal {#internal}

**Internal abilities** ફક્ત તમારી WordPress ઇન્સ્ટોલેશનની અંદર ઉપલબ્ધ હોય છે:

- Chat interfaces
- Admin panels
- ફક્ત લોગ-ઇન થયેલા યુઝર્સ માટે
- REST API અથવા બાહ્ય ઇન્ટિગ્રેશન્સ દ્વારા એક્સપોઝ થતી નથી

ઉદાહરણ: `manage-settings`, `view-analytics`, `export-data`

### Partner {#partner}

**Partner abilities** ફક્ત વ્હાઇટલિસ્ટ કરેલા પાર્ટનર્સ માટે ઉપલબ્ધ હોય છે:

- સ્પષ્ટ પાર્ટનર allow-list એન્ટ્રી જરૂરી છે
- પાર્ટનર credentials સાથે REST API દ્વારા ઉપલબ્ધ
- પાર્ટનર authentication સાથે MCP દ્વારા ઉપલબ્ધ
- સામાન્ય યુઝર્સ માટે ઉપલબ્ધ નથી

ઉદાહરણ: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled {#disabled}

**Disabled abilities** ક્યાંય ઉપલબ્ધ નથી:

- કોઈ સર્ફસ દ્વારા એક્સપોઝ થતી નથી
- ચેટમાં ઉપલબ્ધ નથી
- એડમિન પેનલમાં ઉપલબ્ધ નથી
- Deprecated અથવા પ્રાયોગિક ક્ષમતાઓ માટે ઉપયોગી

## Ability Visibility નું સંચાલન કરવું {#managing-ability-visibility}

### Ability Visibility સેટિંગ્સ એક્સેસ કરવી {#accessing-ability-visibility-settings}

1. **WordPress Admin** → **Superdav AI Agent** → **Settings** પર જાઓ
2. **Abilities** ટેબ પર ક્લિક કરો
3. તમને બધા ઇન્સ્ટોલ કરેલી ક્ષમતાઓ અને તેમના વિઝિબિલિટી લેવલ્સની યાદી દેખાશે

### Ability વિગતો જોવી {#viewing-ability-details}

કોઈપણ ક્ષમતા પર ક્લિક કરીને તમે જોઈ શકો છો:

- **Name**: ક્ષમતાની ઓળખકર્તા (identifier)
- **Description**: ક્ષમતા શું કરે છે
- **Current visibility**: Public, Internal, Partner, અથવા Disabled
- **Partner allow-list**: કયા પાર્ટનર્સ એક્સેસ કરી શકે છે (જો Partner visibility હોય તો)
- **Last updated**: જ્યારે વિઝિબિલિટી છેલ્લે બદલવામાં આવી હતી
- **Status**: Recognized અથવા Unclassified

### Visibility લેવલ્સ બદલવા {#changing-visibility-levels}

કોઈ ક્ષમતાની વિઝિબિલિટી બદલવા માટે:

1. યાદીમાં ક્ષમતા પર ક્લિક કરો
2. ડ્રોપડાઉનમાંથી નવો વિઝિબિલિટી લેવલ પસંદ કરો
3. જો "Partner" પસંદ કરો છો, તો allow-list માં પાર્ટનર identifiers ઉમેરો
4. **Save** પર ક્લિક કરો

ઉદાહરણ:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Bulk Operations {#bulk-operations}

બહુવિધ ક્ષમતાઓ માટે વિઝિબિલિટી બદલવા માટે:

1. ક્ષમતાઓની બાજુમાં બોક્સ ચેક કરો
2. બલ્ક એક્શન ડ્રોપડાઉનમાંથી નવો વિઝિબિલિટી લેવલ પસંદ કરો
3. **Apply** પર ક્લિક કરો

## Partner Allow-List {#partner-allow-list}

**partner allow-list** નિયંત્રિત કરે છે કે કયા બાહ્ય પાર્ટનર્સ Partner-level abilities એક્સેસ કરી શકે છે.

### પાર્ટનર્સ ઉમેરવા {#adding-partners}

1. **Superdav AI Agent** → **Settings** → **Partners** પર જાઓ
2. **Add Partner** પર ક્લિક કરો
3. પાર્ટનર identifier દાખલ કરો (સામાન્ય રીતે API key અથવા organization ID)
4. વૈકલ્પિક રીતે પાર્ટનરનું નામ અને વર્ણન ઉમેરો
5. **Save** પર ક્લિક કરો

### પાર્ટનર્સને ક્ષમતાઓ સોંપવી {#assigning-abilities-to-partners}

પાર્ટનર ઉમેર્યા પછી:

1. **Abilities** ટેબ પર જાઓ
2. Partner visibility સાથેની ક્ષમતા શોધો
3. એડિટ કરવા માટે ક્લિક કરો
4. "Partner allow-list" વિભાગમાં, જે પાર્ટનર્સને એક્સેસ હોવો જોઈએ તેના બોક્સ ચેક કરો
5. **Save** પર ક્લિક કરો

### પાર્ટનર એક્સેસ પાછો ખેંચવો (Revoking) {#revoking-partner-access}

પાર્ટનરનો એક્સેસ દૂર કરવા માટે:

1. ક્ષમતા એડિટ કરો
2. allow-list માંથી પાર્ટનરના બોક્સને અનચેક કરો
3. **Save** પર ક્લિક કરો

પાર્ટનરને તરત જ તે ક્ષમતાનો એક્સેસ ગુમાવી દેશે.

## Unclassified Abilities {#unclassified-abilities}

જ્યારે તમે કોઈ તૃતીય-પક્ષ (third-party) ક્ષમતા ઇન્સ્ટોલ કરો જે Superdav AI Agent ને ઓળખતી નથી, ત્યારે તેને **Unclassified** તરીકે માર્ક કરવામાં આવે છે.

### Unclassified Abilities માટે Admin Notice {#admin-notice-for-unclassified-abilities}

તમને એક એડમિન નોટિસ દેખાશે:

```
⚠️ Unclassified Abilities Detected

The following abilities were installed but are not recognized:
- custom-import-tool
- external-api-wrapper

These abilities may pose security or compatibility risks.
Please review and classify them.

[Review Abilities] [Dismiss]
```

### Unclassified Abilities ની સમીક્ષા કરવી {#reviewing-unclassified-abilities}

1. નોટિસમાં **Review Abilities** પર ક્લિક કરો
2. દરેક unclassified ability માટે, તમને દેખાશે:
   - ક્ષમતાનું નામ અને વર્ણન
   - સ્ત્રોત (કયા plugin/addon દ્વારા ઇન્સ્ટોલ થયું)
   - સૂચિત વિઝિબિલિટી લેવલ
   - સુરક્ષા મૂલ્યાંકન (Security assessment)

3. વિઝિબિલિટી લેવલ પસંદ કરો:
   - **Public**: ક્ષમતા પર વિશ્વાસ છે; તેને બધે એક્સપોઝ કરો
   - **Internal**: ફક્ત આંતરિક ઉપયોગ પૂરતું મર્યાદિત કરો
   - **Partner**: ચોક્કસ પાર્ટનર્સ માટે મર્યાદિત કરો
   - **Disabled**: આ ક્ષમતાનો ઉપયોગ ન કરો

4. તમારા નિર્ણયને સેવ કરવા માટે **Classify** પર ક્લિક કરો

### Unclassified Abilities ને Classify શા માટે કરવું? {#why-classify-unclassified-abilities}

ક્ષમતાને Classify કરવાના ફાયદા:

- **સુરક્ષા સુધારે છે**: તમે સ્પષ્ટપણે મંજૂરી આપો છો કે શું એક્સપોઝ કરવું
- **અકસ્માતો અટકાવે છે**: Unclassified abilities By default ડિસેબલ હોય છે
- **features સક્ષમ કરે છે**: એકવાર Classify થઈ જાય, પછી ક્ષમતા ઉપલબ્ધ બની જાય છે
- **નિર્ણયોનું દસ્તાવેજીકરણ કરે છે**: તમારા પસંદ કરેલા વિકલ્પો ઓડિટ હેતુઓ માટે લોગ થાય છે

## Different Surfaces પર Visibility {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Public abilities** REST endpoints દ્વારા ઉપલબ્ધ હોય છે:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Internal અને Partner abilities** REST API દ્વારા ઉપલબ્ધ નથી.

### MCP Servers {#mcp-servers}

**Public abilities** MCP દ્વારા ઉપલબ્ધ હોય છે:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**Internal abilities** MCP દ્વારા એક્સપોઝ થતી નથી.

**Partner abilities** ફક્ત પાર્ટનર credentials સાથે ઉપલબ્ધ છે.

### WooCommerce Integration {#woocommerce-integration}

WooCommerce સાથે સંબંધિત **Public abilities** ઉપલબ્ધ હોય છે:

- Product management
- Order processing
- Customer communication

**Internal abilities** WooCommerce ને એક્સપોઝ થતી નથી.

### Chat Interface {#chat-interface}

**બધી ક્ષમતાઓ** (Public, Internal, Partner) ચેટમાં ઉપલબ્ધ હોય છે, જે યુઝર પરમિશન પર આધાર રાખે છે:

- એડમિનિસ્ટ્રેટર્સ બધી ક્ષમતાઓ જુએ છે
- સામાન્ય યુઝર્સ ફક્ત Public abilities જુએ છે
- પાર્ટનર્સ Public + Partner abilities જુએ છે (જો whitelisted હોય તો)

## Security Best Practices {#security-best-practices}

### Principle of Least Privilege {#principle-of-least-privilege}

- ક્ષમતાઓને સૌથી વધુ પ્રતિબંધિત વિઝિબિલિટી પર સેટ કરો જે તેમના ઉપયોગની છતાં મંજૂરી આપે
- સંવેદનશીલ કામગીરી માટે Partner visibility નો ઉપયોગ કરો
- જે ક્ષમતાઓનો તમે ઉપયોગ નથી કરતા તેને ડિસેબલ કરો

### Regular Audits {#regular-audits}

- માસિક ધોરણે Ability visibility ની સમીક્ષા કરો
- unclassified abilities માટે તપાસ કરો
- ઉપયોગમાં ન હોય તેવા પાર્ટનર્સ માટે એક્સેસ દૂર કરો

### Logging and Monitoring {#logging-and-monitoring}

- કઈ ક્ષમતાઓનો સૌથી વધુ ઉપયોગ થાય છે તેનું નિરીક્ષણ કરો
- પાર્ટનર એક્સેસ પેટર્ન ટ્રેક કરો
- અસામાન્ય ક્ષમતા ઉપયોગ પર એલર્ટ કરો

### Third-Party Abilities {#third-party-abilities}

- સક્ષમ કરતા પહેલા તૃતીય-પક્ષ ક્ષમતાઓની સમીક્ષા કરો
- તેમને સ્પષ્ટપણે Classify કરો
- Internal અથવા Partner visibility થી શરૂઆત કરો
- ફક્ત વેટિંગ (vetting) કર્યા પછી જ Public માં પ્રમોટ કરો

## Troubleshooting {#troubleshooting}

**Ability યાદીમાં દેખાતી નથી**
- ચકાસો કે ક્ષમતા ઇન્સ્ટોલ અને active છે
- તપાસો કે plugin/addon enable છે
- પેજ રિફ્રેશ કરો

**હું કોઈ ક્ષમતાની વિઝિબિલિટી બદલી શકતો નથી**
- ચકાસો કે તમારી પાસે એડમિનિસ્ટ્રેટર પરમિશન છે
- તપાસો કે ક્ષમતા કોઈ plugin દ્વારા લોક નથી
- વિરોધાભાસી (conflicting) plugins ને ડિસેબલ કરવાનો પ્રયાસ કરો

**પાર્ટનર કોઈ ક્ષમતા એક્સેસ કરી શકતો નથી**
- ચકાસો કે પાર્ટનર allow-list માં છે
- તપાસો કે ક્ષમતાની વિઝિબિલિટી Partner પર સેટ છે
- પુષ્ટિ કરો કે પાર્ટનરના credentials સાચા છે
- authentication errors માટે API logs તપાસો

**Unclassified abilities દેખાતી રહે છે**
- એડમિન નોટિસમાં તેની સમીક્ષા કરો અને તેને Classify કરો
- તપાસો કે તમારું Classify સેવ થયું છે
- ચકાસો કે ક્ષમતા પ્રદાન કરતું plugin અપ-ટુ-ડેટ છે

## Migration from Legacy Mode {#migration-from-legacy-mode}

જો તમે Superdav AI Agent ના જૂના સંસ્કરણમાંથી અપગ્રેડ કરી રહ્યા છો:

- બધી હાલની ક્ષમતાઓ આપમેળે Public તરીકે Classify થઈ જાય છે
- જરૂર મુજબ સમીક્ષા કરો અને વિઝિબિલિટી એડજસ્ટ કરો
- કોઈ કાર્યવાહી જરૂરી નથી સિવાય કે તમે એક્સેસને મર્યાદિત કરવા માંગતા હોવ

Native Abilities API integration પર ટ્રાન્ઝિશન વિશે વધુ વિગતો માટે **Third-Party Mode Migration** જુઓ.

## Next Steps {#next-steps}

ability visibility configure કર્યા પછી:

1. **તમારી ક્ષમતાઓ સમીક્ષા કરો**: ઇન્સ્ટોલ કરેલી બધી ક્ષમતાઓનું ઓડિટ કરો
2. **unclassified abilities ને Classify કરો**: એડમિન નોટિસીસનો જવાબ આપો
3. **પાર્ટનર્સ સેટ કરો**: જો Partner visibility નો ઉપયોગ કરી રહ્યા છો તો પાર્ટનર્સ ઉમેરો
4. **ઉપયોગનું નિરીક્ષણ કરો**: કઈ ક્ષમતાઓનો સૌથી વધુ ઉપયોગ થાય છે તે ટ્રેક કરો
5. **નિર્ણયોનું દસ્તાવેજીકરણ કરો**: તમે દરેક વિઝિબિલિટી લેવલ શા માટે પસંદ કર્યું તેના પર નોંધ રાખો
