---
title: GitHub Snippets
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# અમારી GitHub રિપોઝિટરીમાં Ultimate Multisite સ્નિપેટ્સનો ઉપયોગ કેવી રીતે કરવો

GitHub રિપોઝિટરીમાં કોડ સ્નિપેટ્સ ઉપલબ્ધ છે જે Ultimate Multisite યુઝર્સ દ્વારા વારંવાર માંગવામાં આવે છે. આ યુઝર્સ નાની કાર્યક્ષમતાઓ ઉમેરવા માંગે છે, જેમ કે સાઇન-અપ પેજ પર Google Analytics સ્ક્રિપ્ટ ઉમેરવી અથવા એડમિન ડેશબોર્ડમાંથી કોઈ મેટા બોક્સ છુપાવવું.

આ લેખમાં તમને બતાવવામાં આવશે કે આ કોડ્સનો ઉપયોગ કેવી રીતે કરવો, અથવા વધુ ચોક્કસ રીતે કહીએ તો, આ કોડ્સ ક્યાં મૂકવા.

તમે નીચેની લિંક પર સ્નિપેટ્સ મેળવી શકો છો.

https://github.com/next-press/wp-ultimo-snippets/

કોડ ઉમેરવાની 2 રીતો છે

  1. તમારી થીમની functions.php ફાઈલમાં.

  2. Must-Use Plugins (mu-plugins)

# તમારી થીમની functions.php ફાઈલમાં સ્નિપેટ કેવી રીતે ઉમેરવું

  1. તમારા WordPress Network એડમિન ડેશબોર્ડમાં લોગિન કરો અને Themes > Theme Editor પર જાઓ (નીચે સ્ક્રીનશોટ જુઓ).

  2. "Edit Themes" પેજ પર, ખાતરી કરો કે તમારી સ્ક્રીનની ઉપર જમણી બાજુએ આવેલા ડ્રોપડાઉન ફીલ્ડમાં તમારી સક્રિય થીમ પસંદ કરેલી છે (નીચેના સ્ક્રીનશોટમાં #3).

  3. ફાઈલ લોડ કરવા માટે "Theme Files" વિભાગ હેઠળ functions.php ફાઈલ પર ક્લિક કરો. નીચે સ્ક્રોલ કરો અને GitHub રિપોઝિટરીમાંથી મળેલ Ultimate Multisite સ્નિપેટ પેસ્ટ કરો.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Must-Use Plugins (mu-plugins) કેવી રીતે બનાવવા

WordPress પાસે એક ફીચર છે જે તમને "Must-Use Plugins" અથવા ટૂંકમાં "mu-plugins" તરીકે ઓળખાતી કસ્ટમ કાર્યક્ષમતા લોડ કરવાની મંજૂરી આપે છે.

આ ખાસ mu-plugins બધા અન્ય સામાન્ય plugins પહેલાં લોડ થાય છે, અને તેમને નિષ્ક્રિય કરી શકાતા નથી. મલ્ટિસાઇટ નેટવર્કમાં, આ mu-plugins માં રહેલો કોડ તમારી ઇન્સ્ટોલેશનની બધી સાઇટ્સ પર લોડ થશે.

1\. તમારી WordPress ઇન્સ્ટોલની ફાઈલ સિસ્ટમ એક્સેસ કરવા માટે FTP અથવા SSH નો ઉપયોગ કરો.

2\. તમારી WordPress ઇન્સ્ટોલની wp-content ડિરેક્ટરીની અંદર, mu-plugins નામની નવી ડિરેક્ટરી બનાવો.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. Notepad અથવા કોઈપણ કોડ એડિટરનો ઉપયોગ કરીને તમારા કમ્પ્યુટર પર wu-snippet.php નામની નવી PHP ફાઈલ બનાવો.

4\. GitHub રિપોઝિટરીમાંથી મળેલ Ultimate Multisite કોડ સ્નિપેટ ફાઈલમાં મૂકો અને તેને સેવ કરો. તમે તમારા mu plugin ને લેબલ કરવા માટે કોડ સ્નિપેટની ઉપર આ કોડ પણ ઉમેરી શકો છો.
