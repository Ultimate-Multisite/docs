---
title: પ્લાન અપગ્રેડ કરવો
sidebar_position: 11
_i18n_hash: 83ee30a9547c0ea02bd1338ab7ec3f69
---
# પ્લાન અપગ્રેડ કરવો (v2)

_**મહત્વની નોંધ: આ લેખ Ultimate Multisite વર્ઝન 2.x માટે છે.**_

તમારા ગ્રાહકો ગમે ત્યારે તેમના પ્લાન અપગ્રેડ કરી શકે છે. તેઓ બીજા પ્લાનમાં અપગ્રેડ કરી શકે છે અથવા તમે તમારા network પર ઓફર કરો છો તે કોઈપણ વધારાની સર્વિસ કે પેકેજ ખરીદી શકે છે.

આ ટ્યુટોરિયલમાં આપણે જોઈશું કે તેઓ કેવી રીતે તેમનો પ્લાન અપગ્રેડ કરી શકે છે અને અપગ્રેડ પ્રક્રિયા પછી શું થાય છે.

પ્લાન અપગ્રેડ કરવા માટે, તમારા ગ્રાહકોએ તેમના dashboard પર જઈને **Account** પેજ ખોલવું જોઈએ.

![Account પેજ લિંક સાથે Customer dashboard](/img/admin/memberships-list.png)

Account પેજ પર, તેમને તેમની વર્તમાન membership અને તેની સાથે જોડાયેલો પ્લાન બતાવવામાં આવશે. બીજા પ્લાનમાં અપગ્રેડ કરવા માટે, તેમણે **Your Membership** સેક્શનના ઉપર-જમણા ખૂણામાં **Change** પર ક્લિક કરવું પડશે.

![Change બટન સાથે Your Membership સેક્શન](/img/admin/memberships-list.png)

તેમને checkout ફોર્મ પર રીડાયરેક્ટ કરવામાં આવશે જ્યાં બધા ઉપલબ્ધ પ્લાન બતાવવામાં આવશે.

તેઓ **તેમના વર્તમાન પ્લાન માટે ઉપલબ્ધ સર્વિસ અને પેકેજ** પણ જોઈ શકશે, જો તેઓ પ્લાન અપગ્રેડ કર્યા વિના માત્ર કોઈ ચોક્કસ સર્વિસ કે પેકેજ ખરીદવા માંગતા હોય (જેમ કે અમારા ઉદાહરણમાં unlimited visits કે disk space).

![ઉપલબ્ધ પ્લાન અને પેકેજ બતાવતું Checkout ફોર્મ](/img/admin/memberships-list.png)

તેઓ જે પ્રોડક્ટ ખરીદવા માંગે છે તે પસંદ કર્યા પછી, તેઓ જોઈ શકશે કે તેમને હમણાં કેટલું ચૂકવવું પડશે - કોઈપણ હાલના credit સિવાય - અને આગલી billing તારીખે કેટલી રકમ ચાર્જ થશે.

સામાન્ય રીતે, જો પ્રોડક્ટ બીજો પ્લાન હોય અને membership charge વચ્ચે payment થતું હોય, તો તેમને પહેલા પ્લાન પર ચૂકવેલી રકમ માટે credit મળશે.

![Credit અને આગલી billing રકમ સાથે અપગ્રેડ payment સારાંશ](/img/admin/memberships-list.png)

જો તેઓ એવો પ્લાન કે પેકેજ પસંદ કરે છે જે વર્તમાન subscription માં કોઈ ફેરફાર નહીં કરે, તો તેમને તે સમજાવતો સંદેશ દેખાશે.

![પસંદ કરેલો પ્લાન subscription બદલતો નથી ત્યારે સંદેશ](/img/admin/memberships-list.png)

Checkout પૂર્ણ થયા પછી, નવી પ્રોડક્ટ(ઓ) તમારા ગ્રાહકોના account માં ઉમેરવામાં આવશે અને નવી પ્રોડક્ટ(ઓ) ની બધી limits કે features તરત જ ઉમેરાઈ જશે: visits, disk space, posts, વગેરે...

## 

## 

## અપગ્રેડ અને ડાઉનગ્રેડ Paths

તમારી દરેક પ્રોડક્ટ પર, તમને **Up & Downgrades** ટેબ મળશે. તે ટેબમાં પહેલો વિકલ્પ **Plan Group** નામનું field છે.

**Plan groups** એ જ છે જે Ultimate Multisite ને જણાવે છે કે ચોક્કસ પ્લાન એક જ "family" ના છે, અને તેથી upgrade/downgrade path વિકલ્પો બનાવવા માટે વાપરવા જોઈએ.

![Plan Group field સાથે Up and Downgrades ટેબ](/img/config/product-upgrades.png)

ઉદાહરણ તરીકે, તમારી પાસે **Free plan**, **Basic Plan** અને **Premium Plan** ઉપલબ્ધ છે. તમે ઇચ્છો છો કે **Free Plan** હેઠળ subscribe કરેલા users માત્ર **Premium Plan** માં જ અપગ્રેડ કરી શકે અને તમે નથી ઇચ્છતા કે તેઓ "Basic Plan" ને અપગ્રેડ વિકલ્પ તરીકે જુએ. તમારે બસ Free અને Premium બંને પ્લાનને એક જ plan group નામ આપવાનું છે જેમ નીચેના screenshots માં બતાવ્યું છે.

![High End plan group assign કરેલો Free Plan](/img/config/product-upgrades.png)

![High End plan group assign કરેલો Premium Plan](/img/config/product-upgrades.png)

આ Ultimate Multisite ને જણાવશે કે network માં **High End** નામની પ્લાન "family" છે. Upgrades કે downgrades ઓફર કરતી વખતે, માત્ર એ જ family ના પ્લાન user ને વિકલ્પ તરીકે બતાવવામાં આવશે.
