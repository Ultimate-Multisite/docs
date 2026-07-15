---
title: ઇન્ટરનેટ સર્ચ
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Internet Search

Gratis AI Agent v1.5.0 માં એક **Internet Search** ક્ષમતા ઉમેરવામાં આવી છે. આ ક્ષમતા AI assistant ને વાતચીત દરમિયાન વેબમાંથી અપ-ટુ-ડેટ માહિતી મેળવવાની મંજૂરી આપે છે. આ [Brave Search API](https://brave.com/search/api/) અથવા [Tavily API](https://tavily.com/) દ્વારા સંચાલિત છે.

## How It Works {#how-it-works}

જ્યારે ઇન્ટરનેટ સર્ચ સક્ષમ હોય છે, ત્યારે assistant આપમેળે તમારા કન્ફિગર કરેલા સર્ચ પ્રોવાઇડરને ક્વેરી કરી શકે છે. જ્યારે તેને લાગે કે કોઈ પ્રશ્ન માટે વર્તમાન અથવા બાહ્ય માહિતીની જરૂર છે — જેમ કે તાજેતરના સમાચાર, લાઇવ પ્રાઇસિંગ, અથવા દસ્તાવેજીકરણ જે મોડેલના ટ્રેનિંગ કટઓફ પછી બદલાઈ ગયું હોય.

પરિણામો real time માં મેળવવામાં આવે છે અને response જનરેટ કરતા પહેલા assistant ના context માં ઇન્જેક્ટ (inject) કરવામાં આવે છે. assistant એ દર્શાવે છે કે તેણે પ્રશ્નનો જવાબ આપવા માટે સર્ચ પરિણામોનો ઉપયોગ કર્યો છે.

## Enabling Internet Search {#enabling-internet-search}

ઇન્ટરનેટ સર્ચ માટે તમારા પસંદ કરેલા સર્ચ પ્રોવાઇડર પાસેથી એક API key ની જરૂર છે. તેને કન્ફિગર કરવા માટે:

1. **Gratis AI Agent → Settings → Advanced** પર જાઓ.
2. **Internet Search Provider** ડ્રોપડાઉન શોધો અને કાં તો **Brave Search** અથવા **Tavily** પસંદ કરો.
3. અનુરૂપ ફીલ્ડમાં તમારું API key દાખલ કરો. દરેક ફીલ્ડની બાજુમાં Sign-up લિંક્સ પ્રદર્શિત થાય છે.
4. **Save Settings** પર ક્લિક કરો.

એકવાર key સેવ થઈ જાય, પછી Internet Search ક્ષમતા આપમેળે assistant માટે ઉપલબ્ધ થઈ જાય છે.

## Brave Search {#brave-search}

### Obtaining a Brave Search API Key {#obtaining-a-brave-search-api-key}

1. [Brave Search API page](https://brave.com/search/api/) ની મુલાકાત લો.
2. એક પ્લાન માટે સાઇન અપ કરો. માસિક request limit સાથે એક free tier ઉપલબ્ધ છે.
3. Brave Search developer dashboard માંથી તમારું API key કોપી કરો.
4. તેને Gratis AI Agent settings માં **Brave Search API Key** ફીલ્ડમાં પેસ્ટ કરો.

### Usage Limits {#usage-limits}

ઉપયોગનો ચાર્જ Brave Search દ્વારા કરવામાં આવે છે, જે કરવામાં આવેલી ક્વેરીની સંખ્યા પર આધારિત છે. દરેક AI response જે સર્ચને ટ્રિગર કરે છે, તે એક ક્વેરી ગણાય છે. અણધાર્યા ચાર્જ ટાળવા માટે [Brave Search developer dashboard](https://brave.com/search/api/) માં તમારા ઉપયોગ પર નજર રાખો.

## Tavily {#tavily}

Superdav AI Agent v1.10.0 માં **Tavily** ને વૈકલ્પિક ઇન્ટરનેટ સર્ચ પ્રોવાઇડર તરીકે ઉમેરવામાં આવ્યું છે, જે વધુ સમૃદ્ધ સર્ચ પરિણામો અને એડવાન્સ્ડ રિસર્ચ ક્ષમતાઓ આપે છે.

### Obtaining a Tavily API Key {#obtaining-a-tavily-api-key}

1. [Tavily API page](https://tavily.com/) ની મુલાકાત લો.
2. એક એકાઉન્ટ માટે સાઇન અપ કરો. માસિક request limit સાથે એક free tier ઉપલબ્ધ છે.
3. Tavily dashboard માંથી તમારું API key કોપી કરો.
4. તેને Gratis AI Agent settings માં **Tavily API Key** ફીલ્ડમાં પેસ્ટ કરો.

### Usage Limits {#usage-limits-1}

ઉપયોગનો ચાર્જ Tavily દ્વારા કરવામાં આવે છે, જે કરવામાં આવેલી API કોલ્સની સંખ્યા પર આધારિત છે. દરેક AI response જે સર્ચને ટ્રિગર કરે છે, તે એક કોલ ગણાય છે. અણધાર્યા ચાર્જ ટાળવા માટે [Tavily dashboard](https://tavily.com/) માં તમારા ઉપયોગ પર નજર રાખો.

## Disabling Internet Search {#disabling-internet-search}

active search provider field માંથી API key દૂર કરો અને સેવ કરો. Internet Search ક્ષમતા હવે assistant ને ઓફર કરવામાં આવશે નહીં.

:::note
ઇન્ટરનેટ સર્ચને કારણે responses માં latency (વિલંબ) ઉમેરાય છે કારણ કે જવાબ આપતા પહેલા assistant ને સર્ચ પરિણામોની રાહ જોવી પડે છે. સમય-સંવેદનશીલ ઉપયોગના કિસ્સાઓ માટે, વિચાર કરો કે શું real-time search જરૂરી છે કે પછી assistant નું બિલ્ટ-ઇન જ્ઞાન પૂરતું છે.
:::
