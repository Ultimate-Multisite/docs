---
title: નિકાસ અને આયાત
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Export & Import {#export--import}

Ultimate Multisite 2.9.0 માં **Tools > Export & Import** હેઠળ એક single-site **Export & Import** ટૂલ ઉમેરવામાં આવ્યું છે. જ્યારે તમારે એક WordPress સાઇટને ZIP ફાઇલમાં પેક કરવાની, તે ZIP ને રિસ્ટોર કરવાની, અથવા એક સાઇટને સુસંગત Ultimate Multisite અને single-site WordPress ઇન્સ્ટોલેશન વચ્ચે ખસેડવાની જરૂર હોય, ત્યારે તેનો ઉપયોગ કરો.

## Required permissions {#required-permissions}

તમારે એડમિનિસ્ટ્રેટર તરીકે સાઇન ઇન કરવું આવશ્યક છે, જે એવા વ્યક્તિ હોય જેને જે સાઇટને export અથવા import કરવામાં આવી રહી છે તેના પર WordPress ના **Tools** મેનુની ઍક્સેસ મળી શકે. જો તમે multisite network પર હોવ, તો network-level Ultimate Multisite ટૂલ્સમાંથી સબસાઇટ્સ export અથવા import કરતી વખતે network એડમિનિસ્ટ્રેટર એકાઉન્ટનો ઉપયોગ કરો.

Export ZIP ડાઉનલોડ એક authenticated download endpoint દ્વારા સર્વ કરવામાં આવે છે, તેથી જ્યાં સુધી ડાઉનલોડ પૂરું ન થાય ત્યાં સુધી એડમિન સેશન સક્રિય રાખો અને generated download URLs ને જાહેર રીતે શેર ન કરો.

## Exporting a site to a ZIP {#exporting-a-site-to-a-zip}

1. જે સાઇટને તમે કોપી કરવા માંગો છો તેના WordPress એડમિનમાં, **Tools > Export & Import** પર જાઓ.
2. export એરિયા ખોલો અને જે સાઇટને તમે પેક કરવા માંગો છો તે પસંદ કરો.
3. જો તે વિકલ્પો ઉપલબ્ધ હોય, તો અપલોડ્સ, plugins, અને themes જેવા વૈકલ્પિક કન્ટેન્ટને શામેલ કરવા માટે પસંદ કરો.
4. export શરૂ કરો અને પ્રક્રિયા પૂરી થવાની રાહ જુઓ. મોટી સાઇટ્સને ZIP તૈયાર થાય તે પહેલાં બેકગ્રાઉન્ડમાં પૂરું થવાની જરૂર પડી શકે છે.
5. exports લિસ્ટમાંથી તૈયાર થયેલ ZIP ડાઉનલોડ કરો.

ZIP ને સુરક્ષિત જગ્યાએ રાખો. તેમાં સાઇટ કન્ટેન્ટ, સેટિંગ્સ, મીડિયા ફાઇલો અને પસંદ કરેલા કોડ એસેટ્સ હોઈ શકે છે.

## What the export includes {#what-the-export-includes}

એક export ZIP માં નીચેની વસ્તુઓ શામેલ હોઈ શકે છે:

- પસંદ કરેલી સાઇટનો ડેટાબેઝ કન્ટેન્ટ અને કોન્ફિગરેશન.
- જ્યારે uploads શામેલ કરવામાં આવે છે ત્યારે અપલોડ કરેલી મીડિયા ફાઇલો.
- જ્યારે તે વિકલ્પો પસંદ કરવામાં આવે છે ત્યારે plugins અને themes.
- Import metadata જે Export & Import ટૂલ દ્વારા લક્ષ્ય ઇન્સ્ટોલેશન પર સાઇટને ફરીથી બનાવવામાં ઉપયોગમાં લેવાય છે.

ચોક્કસ ZIP નું કદ મીડિયાની માત્રા, પસંદ કરેલા plugins અને themes, અને સાઇટના ડેટાબેઝ ટેબલ્સના કદ પર આધાર રાખે છે.

## Importing a site from a ZIP {#importing-a-site-from-a-zip}

1. ગંતવ્ય (destination) WordPress સાઇટ પર **Tools > Export & Import** પર જાઓ.
2. import એરિયા ખોલો અને Export & Import ટૂલ દ્વારા બનાવેલ ZIP અપલોડ કરો.
3. જો સાઇટને નવો સરનામું (address) વાપરવો હોય તો replacement URL દાખલ કરો, અથવા મૂળ URL જાળવી રાખવા માટે ફીલ્ડ ખાલી રાખો.
4. import પૂરું થયા પછી અપલોડ કરેલ ZIP ને કાઢી નાખવું છે કે નહીં તે પસંદ કરો.
5. **Begin Import** પર ક્લિક કરો.
6. જ્યાં સુધી તે પૂરું ન થાય ત્યાં સુધી pending import પર નજર રાખો. જો તમારે પ્રક્રિયા પૂર્ણ થાય તે પહેલાં રોકવી હોય તો જ **Cancel Import** નો ઉપયોગ કરો.
7. સામાન્ય ટ્રાફિક અથવા ગ્રાહક ઍક્સેસ આપતા પહેલા import થયેલી સાઇટની સમીક્ષા કરો.

single-site WordPress ઇન્સ્ટોલેશન પર, ZIP અપલોડ કરવાથી વર્તમાન સાઇટને import થયેલી સાઇટથી બદલવામાં આવે છે. શરૂઆત કરતા પહેલા લક્ષ્ય સાઇટનો સંપૂર્ણ બેકઅપ લો, અને એક જ સમયે એક જ સાઇટ માટે બહુવિધ imports શરૂ કરવાનું ટાળો.

## Limitations and compatibility notes {#limitations-and-compatibility-notes}

- ખૂબ મોટા uploads directories અથવા media libraries મોટા ZIP ફાઇલો ઉત્પન્ન કરી શકે છે. મોટી સાઇટ્સને export અથવા import કરતા પહેલા PHP upload limits, execution limits, disk space, memory, અને server timeout settings ની પુષ્ટિ કરો.
- ખૂબ મોટી મીડિયા લાઇબ્રેરીઓ ઓછા ટ્રાફિકવાળા maintenance window દરમિયાન ખસેડવાની જરૂર પડી શકે છે.
- લક્ષ્ય WordPress ઇન્સ્ટોલેશનને સુસંગત WordPress, PHP, Ultimate Multisite, plugin, અને theme વર્ઝન ચલાવવું જોઈએ.
- single-site import લક્ષ્ય સાઇટને બદલે છે. તે merge tool નથી.
- Multisite-to-single-site અને single-site-to-multisite moves ત્યારે જ સપોર્ટેડ છે જ્યારે લક્ષ્ય એન્વાયર્નમેન્ટ export કરેલી સાઇટના plugins, themes, URLs, અને જરૂરી Ultimate Multisite components ને ચલાવી શકે.
- ZIP ને ખાનગી રાખો. તેમાં export કરેલી સાઇટના ડેટાબેઝ કન્ટેન્ટ, અપલોડ કરેલી ફાઇલો અને કોન્ફિગરેશન વિગતો હોઈ શકે છે.

વધુ જૂના network-level export workflows માટે, [Site Export](/user-guide/administration/site-export) જુઓ.
