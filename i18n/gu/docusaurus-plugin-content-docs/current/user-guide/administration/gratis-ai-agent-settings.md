---
title: મફત AI એજન્ટ સેટિંગ્સ
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent Settings

Gratis AI Agent માં **Settings → Advanced** સ્ક્રીન v1.5.0 માં રજૂ કરાયેલા બેકએન્ડ ઇન્ટિગ્રેશન્સ માટે એડમિનિસ્ટ્રેટર-લેવલની કન્ફિગરેશન પ્રદાન કરે છે. આ પેજ **Feedback Endpoint** ફીલ્ડ્સ અને તેના અપેક્ષિત ફોર્મેટનું દસ્તાવેજીકરણ કરે છે.

## Accessing Settings

1. WordPress admin માં, **Gratis AI Agent → Settings** પર જાઓ.
2. **Advanced** ટેબ પર ક્લિક કરો.

## Feedback Endpoint Configuration

ફીડબેક એન્ડપોઇન્ટ ત્યારે POST requests મેળવે છે જ્યારે કોઈ યુઝર થમ્બ્સ-ડાઉન બટન, ઓટો-પ્રોમ્પ્ટ બેનર, અથવા `/report-issue` કમાન્ડ દ્વારા ફીડબેક સબમિટ કરે છે.

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | જે URL ફીડબેક સબમિશનને JSON બોડી સાથે HTTP POST requests તરીકે મેળવે છે. |
| **Feedback API Key** | દરેક ફીડબેક request ના `Authorization` header માં મોકલાતો bearer token. જો તમારા એન્ડપોઇન્ટને ઓથેન્ટિકેશનની જરૂર ન હોય તો ખાલી રાખો. |

### Expected JSON Payload

તમારા ફીડબેક એન્ડપોઇન્ટમાં ઓછામાં ઓછા નીચેના ફીલ્ડ્સ સાથે JSON બોડી સ્વીકારવી આવશ્યક છે:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

વાતચીતના સંદર્ભ પર આધાર રાખીને પેલોડમાં વધારાના ફીલ્ડ્સ હાજર હોઈ શકે છે.

### `triage_category` Values

AI triage layer પેલોડને ફોરવર્ડ કરતા પહેલા `triage_category` માટે નીચેનામાંથી એક મૂલ્ય સોંપે છે:

| Value | Meaning |
|---|---|
| `factual_error` | સહાયક દ્વારા ખોટી તથ્ય માહિતી આપવામાં આવી છે. |
| `unhelpful_answer` | પ્રતિસાદ તકનીકી રીતે સાચો હતો પરંતુ ઉપયોગી નહોતો. |
| `inappropriate_content` | પ્રતિસાદમાં એવી સામગ્રી હતી જે યુઝર્સને બતાવવી ન જોઈએ. |
| `other` | ફીડબેક કોઈ જાણીતા કેટેગરી સાથે મેળ ખાતો ન હતો. |

### Authentication

જો તમારા એન્ડપોઇન્ટને ઓથેન્ટિકેશનની જરૂર હોય, તો **Feedback API Key** ફીલ્ડમાં તમારો bearer token સેટ કરો. એજન્ટ મોકલે છે:

```
Authorization: Bearer <your-api-key>
```

જો **Feedback API Key** ફીલ્ડ ખાલી હોય, તો કોઈ `Authorization` header મોકલવામાં આવતો નથી.

### Disabling Feedback Collection

**Feedback Endpoint URL** અને **Feedback API Key** બંને ફીલ્ડ ખાલી રાખો. થમ્બ્સ-ડાઉન બટન અને ફીડબેક UI યુઝર્સ માટે દેખાતા રહે છે, પરંતુ સબમિશન કોઈ બાહ્ય સર્વિસને ફોરવર્ડ થતા નથી.

## Brave Search API Key

**Advanced** ટેબ પર, **Brave Search API Key** ફીલ્ડ [Internet Search](../configuration/internet-search) ક્ષમતાને સક્ષમ કરે છે.

| Field | Description |
|---|---|
| **Brave Search API Key** | Brave Search developer dashboard માંથી તમારી API key. AI assistant માં ઇન્ટરનેટ સર્ચને સક્ષમ કરવા માટે જરૂરી. |

ફીલ્ડ લેબલ Brave Search API સાઇન-અપ પેજ માટે એક ક્લિક કરી શકાય તેવા લિંક સાથે આવે છે. ઇન્ટરનેટ સર્ચને ડિસેબલ કરવા માટે ખાલી રાખો.

આ ફીચર પર એન્ડ-યુઝર દસ્તાવેજીકરણ માટે [Internet Search](../configuration/internet-search) જુઓ.

## Feature Flags

v1.9.0 માં પણ રજૂ કરાયેલ, **Settings → Feature Flags** ટેબ વૈકલ્પિક કાર્યક્ષમતા માટે ટોગલ સ્વિચ પ્રદાન કરે છે. દરેક ફ્લેગ નેટવર્ક-વ્યાપી રીતે કાં તો સક્ષમ (enabled) હોય છે અથવા નિષ્ક્રિય (disabled); હાલમાં આ સમયે કોઈ પ્રતિ-સાઇટ ઓવરરાઇડ નથી.

### Accessing Feature Flags

1. WordPress admin માં, **Gratis AI Agent → Settings** પર જાઓ.
2. **Feature Flags** ટેબ પર ક્લિક કરો.

### Access Control Flags

| Flag | Default | Description |
|---|---|---|
| **Restrict to Administrators** | Off | જ્યારે સક્ષમ કરવામાં આવે છે, ત્યારે ફક્ત `administrator` રોલ ધરાવતા યુઝર્સ જ AI Agent chat panel ખોલી શકે છે. અન્ય તમામ રોલને તેના બદલે "Contact your administrator" મેસેજ દેખાય છે. |
| **Restrict to Network Admins** | Off | જ્યારે મલ્ટિસાઇટ નેટવર્ક પર સક્ષમ કરવામાં આવે છે, ત્યારે ફક્ત સુપર એડમિન જ એજન્ટનો ઉપયોગ કરી શકે છે. વ્યક્તિગત સાઇટ એડમિન બ્લોક થાય છે. જો બંને સક્ષમ હોય તો તે "Restrict to Administrators" પર પ્રાયોરિટી લે છે. |
| **Allow Subscriber Access** | Off | જ્યારે સક્ષમ કરવામાં આવે છે, ત્યારે `subscriber` રોલ ધરાવતા યુઝર્સ ચેટ ઇન્ટરફેસનો ઉપયોગ કરી શકે છે પરંતુ તે ફક્ત વાંચન-માત્ર (read-only) ક્ષમતાઓ સુધી મર્યાદિત છે (કોઈ પોસ્ટ બનાવવી કે સેટિંગ્સ બદલવી નહીં). |
| **Disable for Non-Members** | Off | Ultimate Multisite membership status સાથે ઇન્ટિગ્રેટ થાય છે. જ્યારે સક્ષમ કરવામાં આવે છે, ત્યારે જે સાઇટ્સમાં સક્રિય સભ્યપદ (active membership) નથી તે માટે ચેટ છુપાયેલ છે. |

### Branding Flags

| Flag | Default | Description |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | ચેટ વિજેટના તળિયે દેખાતી બ્રાન્ડિંગ એટ્રિબ્યુશન લાઇન દૂર કરે છે. વ્હાઇટ-લેબલ ડિપ્લોયમેન્ટ માટે ભલામણ કરેલ છે. |
| **Custom Agent Name** | *(blank)* | ચેટ હેડર અને એડમિન મેનૂમાં ડિફોલ્ટ "Gratis AI Agent" લેબલને તમારા પોતાના પ્રોડક્ટના નામથી બદલે છે. ડિફોલ્ટનો ઉપયોગ કરવા માટે ખાલી રાખો. |
| **Hide Agent Picker** | Off | જ્યારે સક્ષમ કરવામાં આવે છે, ત્યારે યુઝર્સ પાંચ બિલ્ટ-ઇન એજન્ટ્સ વચ્ચે સ્વિચ કરી શકતા નથી. વર્તમાન એજન્ટ Settings → General માં ડિફોલ્ટ તરીકે જે કન્ફિગર કરેલો છે તેના પર ફિક્સ રહે છે. |
| **Use Site Icon as Chat Avatar** | Off | ચેટ વિજેટ હેડરમાં ડિફોલ્ટ AI આઇકનને WordPress સાઇટ આઇકન (Appearance → Customize → Site Identity હેઠળ સેટ કરેલ) સાથે બદલે છે. |

### Applying Changes

કોઈપણ ફ્લેગને ટોગલ કર્યા પછી **Save Settings** પર ક્લિક કરો. ફેરફારો તરત જ અસર કરે છે — કેશ ફ્લશ અથવા પ્લગઇન રીએક્ટિવેશનની જરૂર નથી.
