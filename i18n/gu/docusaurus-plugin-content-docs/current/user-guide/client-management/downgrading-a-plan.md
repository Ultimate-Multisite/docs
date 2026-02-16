---
title: પ્લાન ડાઉનગ્રેડ કરવો
sidebar_position: 7
_i18n_hash: dc3ac67048002b04bfb952a01cf289c9
---
# પ્લાન ડાઉનગ્રેડ કરવો (v2)

_**મહત્વની નોંધ: આ લેખ Ultimate Multisite વર્ઝન 2.x ને લગતો છે.**_

પ્લાન અથવા subscription ડાઉનગ્રેડ કરવું એ એક સામાન્ય ક્રિયા છે જે તમારા ક્લાયન્ટ્સ કરી શકે છે જો તેમનું બજેટ મર્યાદિત હોય અથવા તેમણે નક્કી કર્યું હોય કે તેમની subsite ચલાવવા માટે વધુ resources ની જરૂર નથી.

## પ્લાન કેવી રીતે ડાઉનગ્રેડ કરવો

તમારા ક્લાયન્ટ્સ તેમની subsite admin dashboard માં લોગિન કરીને અને તેમના account પેજ હેઠળ **Change** પર ક્લિક કરીને ગમે ત્યારે તેમનો પ્લાન ડાઉનગ્રેડ કરી શકે છે.

![Account પેજ membership હેઠળ Change બટન સાથે](/img/admin/memberships-list.png)

**Change** બટન પર ક્લિક કર્યા પછી, user/client ને checkout પેજ પર રીડાયરેક્ટ કરવામાં આવશે જ્યાં તેઓ પોતાની subscription બદલવા માટે ઇચ્છિત પ્લાન પસંદ કરી શકે છે.

![ડાઉનગ્રેડ માટે પ્લાન વિકલ્પો દર્શાવતું Checkout પેજ](/img/admin/memberships-list.png)

આ ઉદાહરણમાં, અમે પ્લાનને **Premium** થી **Free** માં ડાઉનગ્રેડ કરી રહ્યા છીએ.

આગળ વધવા માટે user ને ફક્ત **Complete Checkout** બટન પર ક્લિક કરવાનું રહેશે. તે પછી તેમને account પેજ પર પાછા લઈ જશે જ્યાં membership માટે pending change વિશેનો સંદેશ દેખાશે. ફેરફારો ગ્રાહકના **આગામી billing cycle** પર અમલમાં આવશે.

![Pending membership change સંદેશ દર્શાવતું Account પેજ](/img/admin/memberships-list.png)

### જ્યારે user તેમનો પ્લાન ડાઉનગ્રેડ કરે ત્યારે શું થાય છે

એ નોંધવું મહત્વપૂર્ણ છે કે પ્લાન ડાઉનગ્રેડ કરવાથી user ની subsite માં હાલની configuration બદલાતી નથી.

તે site template ને આપમેળે બદલતું નથી કારણ કે site template બદલવાથી subsite સંપૂર્ણપણે ભૂંસાઈ જશે અને રીસેટ થઈ જશે. આ બિનજરૂરી data loss ટાળવા માટે છે. તેથી disk space, themes, plugins વગેરે posts સિવાય યથાવત રહેશે.

અમે સમજીએ છીએ કે તમારી મુખ્ય ચિંતા દરેક પ્લાન હેઠળ તમે સેટ કરેલી limits અને quotas હશે પરંતુ અમારે એ વિચારવું પડશે કે user ની subsite ની કોઈપણ configuration ને delete અથવા બદલવાથી તેને કેટલું નુકસાન થશે.

પ્લાનમાં સેટ કરેલી limit કરતાં વધુ posts માટે, તમારી પાસે 3 અલગ-અલગ વિકલ્પો છે: **Posts ને જેમ છે તેમ રાખો***,* **Posts ને trash માં ખસેડો***,* અથવા **Posts ને draft માં ખસેડો***.* તમે આને Ultimate Multisite settings હેઠળ configure કરી શકો છો.

![Ultimate Multisite settings માં Post limit exceeded વિકલ્પો](/img/config/settings-sites.png)

### ચુકવણીનું શું થાય છે

વર્ઝન 2.0 માં, proration ના સંદર્ભમાં ચુકવણીમાં કોઈ ગોઠવણની જરૂર નથી.

આ એટલા માટે કારણ કે સિસ્ટમ નવો પ્લાન/membership અમલમાં આવે તે પહેલાં હાલની membership નો **billing cycle પૂર્ણ થવાની રાહ જોશે**. નવી membership માટેની નવી billing રકમ આપમેળે લાગુ થશે અને આગામી billing cycle પર ચાર્જ કરવામાં આવશે.
