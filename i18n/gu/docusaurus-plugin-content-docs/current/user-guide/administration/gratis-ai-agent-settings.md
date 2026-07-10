---
title: Gratis AI Agent સેટિંગ્સ
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent સેટિંગ્સ {#gratis-ai-agent-settings}

Gratis AI Agent માં **સેટિંગ્સ → એડવાન્સ્ડ** સ્ક્રીન બેકએન્ડ ઇન્ટિગ્રેશન્સ માટે એડમિનિસ્ટ્રેટર-સ્તરની કૉન્ફિગરેશન આપે છે. આ પેજ feedback forwarding, search provider keys, managed Superdav service setup, Google Calendar controls, TextBee SMS settings, અને નેટવર્ક-વ્યાપી feature flags દસ્તાવેજિત કરે છે.

## સેટિંગ્સ ઍક્સેસ કરવી {#accessing-settings}

1. WordPress એડમિનમાં, **Gratis AI Agent → સેટિંગ્સ** પર જાઓ.
2. **એડવાન્સ્ડ** ટૅબ પર ક્લિક કરો.

## Feedback Endpoint કૉન્ફિગરેશન {#feedback-endpoint-configuration}

feedback endpoint AI agent પાસેથી POST વિનંતીઓ પ્રાપ્ત કરે છે જ્યારે પણ વપરાશકર્તા thumbs-down બટન, auto-prompt banner, અથવા `/report-issue` command દ્વારા feedback સબમિટ કરે છે.

| ક્ષેત્ર | વર્ણન |
|---|---|
| **Feedback Endpoint URL** | તે URL જે JSON body સાથે HTTP POST વિનંતીઓ તરીકે feedback સબમિશન્સ પ્રાપ્ત કરે છે. |
| **Feedback API Key** | દરેક feedback વિનંતીના `Authorization` header માં મોકલાતો bearer token. જો તમારા endpoint ને authentication ની જરૂર ન હોય તો ખાલી રાખો. |

### અપેક્ષિત JSON Payload {#expected-json-payload}

તમારા feedback endpoint ને ઓછામાં ઓછા નીચેના ક્ષેત્રો ધરાવતી JSON body સ્વીકારવી આવશ્યક છે:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

વાતચીતના સંદર્ભના આધારે payload માં વધારાના ક્ષેત્રો હાજર હોઈ શકે છે.

### `triage_category` મૂલ્યો {#triagecategory-values}

AI triage સ્તર payload ફૉરવર્ડ કરતા પહેલાં `triage_category` ને નીચેના મૂલ્યોમાંથી એક અસાઇન કરે છે:

| મૂલ્ય | અર્થ |
|---|---|
| `factual_error` | assistant એ ખોટી તથ્યાત્મક માહિતી આપી. |
| `unhelpful_answer` | પ્રતિભાવ તકનીકી રીતે સાચો હતો પરંતુ ઉપયોગી નહોતો. |
| `inappropriate_content` | પ્રતિભાવમાં એવી સામગ્રી હતી જે વપરાશકર્તાઓને બતાવવી ન જોઈએ. |
| `other` | feedback જાણીતી શ્રેણી સાથે મેળ ખાતો નહોતો. |

### Authentication {#authentication}

જો તમારા endpoint ને authentication ની જરૂર હોય, તો **Feedback API Key** ક્ષેત્રને તમારા bearer token પર સેટ કરો. agent મોકલે છે:

```
Authorization: Bearer <your-api-key>
```

જો **Feedback API Key** ક્ષેત્ર ખાલી હોય, તો કોઈ `Authorization` header મોકલાતું નથી.

### Feedback Collection અક્ષમ કરવી {#disabling-feedback-collection}

**Feedback Endpoint URL** અને **Feedback API Key** બંને ક્ષેત્રો ખાલી રાખો. thumbs-down બટન અને feedback UI વપરાશકર્તાઓને દેખાતા રહે છે, પરંતુ સબમિશન્સ કોઈ બાહ્ય સેવા પર ફૉરવર્ડ થતા નથી.

## Brave Search API Key {#brave-search-api-key}

**એડવાન્સ્ડ** ટૅબ પર પણ, **Brave Search API Key** ક્ષેત્ર [ઇન્ટરનેટ શોધ](../configuration/internet-search) ક્ષમતા સક્ષમ કરે છે.

| ક્ષેત્ર | વર્ણન |
|---|---|
| **Brave Search API Key** | Brave Search developer dashboard માંથી તમારી API key. AI assistant માં ઇન્ટરનેટ શોધ સક્ષમ કરવા માટે આવશ્યક. |

ક્ષેત્રના લેબલમાં Brave Search API sign-up page માટે ક્લિક કરી શકાય તેવી લિંક શામેલ છે. ઇન્ટરનેટ શોધ અક્ષમ કરવા માટે ખાલી રાખો.

આ સુવિધા વિશે અંતિમ-વપરાશકર્તા દસ્તાવેજીકરણ માટે [ઇન્ટરનેટ શોધ](../configuration/internet-search) જુઓ.

## સંચાલિત Superdav સેવા {#managed-superdav-service}

Superdav AI Agent v1.18.0 સમર્થિત સાઇટ્સ માટે સંચાલિત Superdav સેવા endpoints અને આપમેળે connection provisioning ઉમેરે છે. જ્યારે તમારી સાઇટને મેન્યુઅલી કૉન્ફિગર કરેલા સેવા endpoint ની બદલે hosted provider સાથે કનેક્ટ થવું જોઈએ ત્યારે આ controls નો ઉપયોગ કરો.

| ક્ષેત્ર | વર્ણન |
|---|---|
| **સંચાલિત Superdav સેવા** | સમર્થિત સાઇટ્સ માટે hosted Superdav સેવા connection સક્ષમ કરે છે. |
| **Connection Provision કરો** | આપમેળે endpoint અને credential provisioning શરૂ કરે છે. સાઇટે managed provider નો ઉપયોગ કરવો જોઈએ તેની પુષ્ટિ કર્યા પછી આનો ઉપયોગ કરો. |
| **સેવા Endpoint / Connection Status** | provisioning પછી વર્તમાન endpoint અથવા connection સ્થિતિ બતાવે છે. |

provisioning પછી, managed-service workflows પર નિર્ભર રહેતા પહેલાં સેટિંગ્સ સાચવો અને connection status ચકાસો. જો provisioning નિષ્ફળ જાય, તો બતાવેલી retry guidance સમીક્ષા કરો અને પુષ્ટિ કરો કે સાઇટને hosted provider નો ઉપયોગ કરવાની પરવાનગી છે.

## Google Calendar કૉન્ફિગરેશન {#google-calendar-configuration}

જ્યારે Superdav AI Agent v1.18.0 calendar સુવિધાઓ સક્ષમ હોય, ત્યારે agent કૉન્ફિગર કરેલા calendars અને event વિગતો વાંચી શકે છે. Calendar tools read-oriented છે અને schedule-aware reminders, attendee follow-up, અને contact matching માટે ઉપયોગી છે.

| ક્ષેત્ર | વર્ણન |
|---|---|
| **Google Calendar Credentials** | calendar data વાંચવા માટે જરૂરી credentials અથવા token connection સંગ્રહે છે. |
| **Calendar Selection** | agent કયા કૉન્ફિગર કરેલા calendars તપાસી શકે તે મર્યાદિત કરે છે. |
| **Calendar Connection Status** | વર્તમાન credentials calendars અને events વાંચી શકે છે કે કેમ તેની પુષ્ટિ કરે છે. |

calendar credentials ને agent ને જરૂરી calendars સુધી મર્યાદિત રાખો. જો status expired token સૂચવે તો credentials ફરી કનેક્ટ કરો અથવા rotate કરો.

## TextBee SMS સૂચનાઓ {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 કૉન્ફિગર કરેલા notification workflows માટે SMS provider તરીકે TextBee ઉમેરે છે. SMS સૂચનાઓને સંવેદનશીલ અથવા user-facing messages માટે human approval gates સાથે જોડવી જોઈએ.

| ક્ષેત્ર | વર્ણન |
|---|---|
| **TextBee API Key** | TextBee SMS provider ને વિનંતીઓ authenticate કરે છે. |
| **TextBee Device / Sender** | provider દ્વારા જરૂરી હોય ત્યારે outgoing messages માટે ઉપયોગમાં લેવાતા TextBee sender અથવા device પસંદ કરે છે. |
| **SMS Notifications Enabled** | મંજૂર workflows ને text-message notifications મોકલવાની મંજૂરી આપે છે. SMS મોકલવાનું અટકાવવા માટે disabled રાખો. |

માત્ર administrator-owned number પર test message મોકલો, પછી scheduled અથવા attendee-facing reminders સક્ષમ કરતા પહેલાં approval-gate વર્તન પુષ્ટિ કરો.

## Feature Flags {#feature-flags}

v1.9.0 માં પણ રજૂ કરાયેલ, **સેટિંગ્સ → Feature Flags** ટૅબ વૈકલ્પિક functionality માટે toggle switches આપે છે. દરેક flag નેટવર્ક-વ્યાપી enabled અથવા disabled હોય છે; આ સમયે per-site override નથી.

### Feature Flags ઍક્સેસ કરવી {#accessing-feature-flags}

1. WordPress એડમિનમાં, **Gratis AI Agent → સેટિંગ્સ** પર જાઓ.
2. **Feature Flags** ટૅબ પર ક્લિક કરો.

### Access Control Flags {#access-control-flags}

| ફ્લેગ | ડિફોલ્ટ | વર્ણન |
|---|---|---|
| **Administrators સુધી મર્યાદિત કરો** | બંધ | સક્રિય હોય ત્યારે, માત્ર `administrator` ભૂમિકાવાળા વપરાશકર્તાઓ AI Agent ચેટ પેનલ ખોલી શકે છે. બાકીની બધી ભૂમિકાઓને બદલે "તમારા administrator નો સંપર્ક કરો" સંદેશ દેખાય છે. |
| **Network Admins સુધી મર્યાદિત કરો** | બંધ | multisite નેટવર્ક પર સક્રિય હોય ત્યારે, માત્ર Super Admins agent નો ઉપયોગ કરી શકે છે. વ્યક્તિગત site admins ને અવરોધિત કરવામાં આવે છે. જો બંને સક્રિય હોય તો "Administrators સુધી મર્યાદિત કરો" કરતાં તેને પ્રાથમિકતા મળે છે. |
| **Subscriber Access મંજૂર કરો** | બંધ | સક્રિય હોય ત્યારે, `subscriber` ભૂમિકાવાળા વપરાશકર્તાઓ ચેટ ઇન્ટરફેસનો ઉપયોગ કરી શકે છે પરંતુ માત્ર વાંચન-માત્ર ક્ષમતાઓ સુધી મર્યાદિત રહે છે (કોઈ પોસ્ટ બનાવવી કે સેટિંગ્સ ફેરફારો નહીં). |
| **Non-Members માટે અક્ષમ કરો** | બંધ | Ultimate Multisite સભ્યપદ સ્થિતિ સાથે એકીકૃત થાય છે. સક્રિય હોય ત્યારે, સક્રિય સભ્યપદ ન ધરાવતા સાઇટ્સ માટે ચેટ છુપાય છે. |

### બ્રાન્ડિંગ ફ્લેગ્સ {#branding-flags}

| ફ્લેગ | ડિફોલ્ટ | વર્ણન |
|---|---|---|
| **"Powered by Gratis AI Agent" Footer છુપાવો** | બંધ | ચેટ વિજેટના તળિયે બતાવવામાં આવતી બ્રાન્ડિંગ એટ્રિબ્યુશન લાઇન દૂર કરે છે. વ્હાઇટ-લેબલ ડિપ્લોયમેન્ટ્સ માટે ભલામણ કરાયેલ. |
| **કસ્ટમ Agent નામ** | *(ખાલી)* | ચેટ હેડર અને એડમિન મેનુમાં ડિફોલ્ટ "Gratis AI Agent" લેબલને તમારા પોતાના પ્રોડક્ટ નામથી બદલે છે. ડિફોલ્ટ વાપરવા માટે ખાલી છોડો. |
| **Agent Picker છુપાવો** | બંધ | સક્રિય હોય ત્યારે, વપરાશકર્તાઓ પાંચ બિલ્ટ-ઇન agents વચ્ચે સ્વિચ કરી શકતા નથી. વર્તમાન agent Settings → General માં ડિફોલ્ટ તરીકે જે ગોઠવાયેલ હોય તે પર સ્થિર રહે છે. |
| **ચેટ Avatar તરીકે Site Icon વાપરો** | બંધ | ચેટ વિજેટ હેડરમાં ડિફોલ્ટ AI ચિહ્નને WordPress site icon થી બદલે છે (Appearance → Customize → Site Identity હેઠળ સેટ કરાયેલ). |

### ઓટોમેશન સલામતી ફ્લેગ્સ {#automation-safety-flags}

Superdav AI Agent v1.18.0 વધુ સુરક્ષિત ઓટોમેશન રન્સ માટે માનવીય મંજૂરી ગેટ્સ અને રિમાઇન્ડર રેકોર્ડ્સ રજૂ કરે છે. આ નિયંત્રણો ઇન્સ્ટોલ કરેલા પેકેજ પર આધાર રાખીને ફીચર ફ્લેગ્સ અથવા અદ્યતન ઓટોમેશન સેટિંગ્સમાં દેખાઈ શકે છે.

| ફ્લેગ | ડિફોલ્ટ | વર્ણન |
|---|---|---|
| **માનવીય મંજૂરી આવશ્યક** | ચાલુ રાખવાની ભલામણ | કોઈ અધિકૃત વપરાશકર્તા પ્રસ્તાવિત ક્રિયાની સમીક્ષા કરીને પુષ્ટિ કરે ત્યાં સુધી સંવેદનશીલ ઓટોમેશન્સને વિરામ આપે છે. |
| **રિમાઇન્ડર ડિડ્યુપ્લિકેશન** | ચાલુ | મોકલાયેલા રિમાઇન્ડર્સ રેકોર્ડ કરે છે જેથી ફરી પ્રયાસો અથવા નિર્ધારિત રન્સ ડુપ્લિકેટ સૂચનાઓ મોકલે નહીં. |
| **Calendar Tools સક્રિય કરો** | ગોઠવાય ત્યાં સુધી બંધ | agent ને ગોઠવાયેલા Google કેલેન્ડર્સ અને ઇવેન્ટ્સ વાંચવાની મંજૂરી આપે છે. |
| **SMS Notifications સક્રિય કરો** | ગોઠવાય ત્યાં સુધી બંધ | ઓળખપત્રો સાચવાયા પછી મંજૂર વર્કફ્લોઝને TextBee SMS સૂચનાઓ મોકલવાની મંજૂરી આપે છે. |

### ફેરફારો લાગુ કરવું {#applying-changes}

કોઈપણ ફ્લેગ ટૉગલ કર્યા પછી **Settings સાચવો** ક્લિક કરો. ફેરફારો તરત અમલમાં આવે છે — કોઈ કૅશ ફ્લશ અથવા plugin પુનઃસક્રિયકરણ જરૂરી નથી.
