---
title: સેટિંગ્સ સંદર્ભ
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Settings સંદર્ભ

આ પાનું Ultimate Multisite માં દૈનિક સંચાલન અને તાજેતરના વર્તન ફેરફારોને અસર કરતી Settings ને ટ્રૅક કરે છે.

## અન્ય વિકલ્પો {#other-options}

**Other Options** વિસ્તાર **Ultimate Multisite > Settings > Login & Registration** હેઠળ દેખાય છે.

| Setting | વર્ણન |
|---|---|
| **Enable Jumper** | સંચાલક વિસ્તારમાં Jumper ઝડપી નેવિગેશન સાધન બતાવે છે. તેનો ઉપયોગ Ultimate Multisite સ્ક્રીનો, નેટવર્ક ઑબ્જેક્ટ્સ અને સમર્થિત સંચાલક ગંતવ્યો પર સીધા જ જવા માટે કરો. જો તમે આ શોર્ટકટ દેખાતો ન ઇચ્છતા હોવ તો તેને અક્ષમ કરો. |

## ભૂલ અહેવાલ અને ટેલિમેટ્રી {#error-reporting-and-telemetry}

અગાઉની ભૂલ-અહેવાલ opt-in setting ને settings પાનાંમાંથી દૂર કરવામાં આવી છે. અનામી ટેલિમેટ્રી અક્ષમ છે અને તેને સક્ષમ કરવા માટે કોઈ UI ટૉગલ નથી.

જો તમે settings પાના માટે આંતરિક runbooks અથવા screenshots જાળવો છો, તો જૂના ભૂલ-અહેવાલ opt-in field ના સંદર્ભો દૂર કરો જેથી administrators હવે હાજર ન રહેલી setting શોધે નહીં.

## Import/Export settings {#importexport-settings}

**Import/Export** settings ટૅબ તે કઈ settings ને નિયંત્રિત કરે છે તેનું વર્ણન કરે છે અને site અને network archives માટે સીધું **Ultimate Multisite > Site Export** સાથે લિંક કરે છે. import/export રૂપરેખાંકન માટે settings ટૅબનો ઉપયોગ કરો, single-site export/import workflow માટે **Tools > Export & Import** નો ઉપયોગ કરો, અને જ્યારે તમને સંપૂર્ણ Network Export archive જોઈએ ત્યારે Site Export સાધનનો ઉપયોગ કરો.

## Domain Seller HostAfrica બેલેન્સ ચેતવણી {#domain-seller-hostafrica-balance-warning}

જ્યારે Domain Seller addon HostAfrica સાથે જોડાયેલું હોય છે, ત્યારે network administrators હવે reseller account balance વિશ્વસનીય domain registration અથવા renewal processing માટે ખૂબ ઓછું હોય ત્યારે dismissible balance-low warning જુએ છે.

આ સૂચનાને કામગીરી સંબંધિત ચેતવણી તરીકે લો: વધુ paid domain registrations સ્વીકારતા પહેલાં HostAfrica reseller balance ટોપ અપ કરો, પછી registrations અને renewals સામાન્ય રીતે ચાલુ રહી શકે છે તેની પુષ્ટિ કરવા Domain Seller settings અથવા domain-monitoring screen પર પાછા ફરો.

## AI provider connector settings {#ai-provider-connector-settings}

AI provider connector settings હવે માત્ર સમર્થિત OAuth account pools જ બતાવે છે:

| Provider | સેટઅપ પ્રવાહ |
|---|---|
| **Anthropic Max** | OAuth button વડે એક અથવા વધુ Anthropic Max accounts જોડો. sandboxed browser આપમેળે redirect પૂર્ણ કરી ન શકે ત્યારે manual OAuth fallback નો ઉપયોગ કરો. |
| **OpenAI ChatGPT/Codex** | એ જ OAuth pool workflow મારફતે ChatGPT accounts જોડો. account જોડાઈ ગયા પછી Connector-supported operations ChatGPT Codex tool calls નો ઉપયોગ કરી શકે છે. |
| **Google AI Pro** | OAuth મારફતે Google AI Pro accounts જોડો, પછી account list તરત update ન થાય તો connector refresh કરો. |

Cursor Pro હવે supported provider નથી. Cursor Pro setup fields અથવા connector paths નો ઉલ્લેખ કરતા જૂના internal screenshots, runbooks, અથવા onboarding steps દૂર કરો.

Provider accounts ઉમેરતી અથવા દૂર કરતી વખતે, refresh અથવા delete થતું account માટે માન્ય email address દાખલ કરો અને connector-backed operations ચકાસતા પહેલાં provider settings સાચવો.
