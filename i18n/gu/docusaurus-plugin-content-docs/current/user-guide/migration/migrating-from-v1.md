---
title: V1 માંથી સ્થળાંતર
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# V1 થી માઇગ્રેશન

## Ultimate Multisite તેના મૂળ 1.x રિલીઝ ફેમિલીથી 2.x રિલીઝ ફેમિલીમાં બદલાઈ ગયું છે.

Ultimate Multisite version 2.0 અને તેનાથી ઉપરના versions એ codebase નું સંપૂર્ણ rewrite છે, એટલે કે જૂના version અને નવા version વચ્ચે ખૂબ જ ઓછી સામ્યતા છે. આ કારણે, 1.x થી 2.x માં upgrade કરતી વખતે, તમારા data ને નવા format માં migrate કરવાની જરૂર પડશે જે નવા versions સમજી શકે.

સદનસીબે, Ultimate Multisite 2.0+ **core માં built-in migrator સાથે આવે છે** જે જૂના version નો data શોધી શકે છે અને તેને નવા format માં convert કરી શકે છે. આ migration version 2.0+ ના **Setup Wizard** દરમિયાન થાય છે.

આ lesson માં migrator કેવી રીતે કામ કરે છે, failure ના કિસ્સામાં શું કરવું, અને આ process દરમિયાન આવતી સમસ્યાઓને કેવી રીતે troubleshoot કરવી તે વિશે સમજાવવામાં આવ્યું છે.

_**મહત્વપૂર્ણ: version 1.x થી version 2.0 માં upgrade કરવાનું શરૂ કરો તે પહેલાં કૃપા કરીને ખાતરી કરો કે તમે તમારા site database નો backup બનાવ્યો છે**_

## પ્રથમ પગલાં

પ્રથમ પગલું એ છે કે plugin .zip file download કરો અને તમારા network admin dashboard પર version 2.0 install કરો.

તમે [version 2.0 install અને activate](../getting-started/installing-ultimate-multisite.md) કર્યા પછી, system આપમેળે શોધી કાઢશે કે તમારું Multisite legacy version પર ચાલી રહ્યું છે અને તમને plugin page ની ટોચ પર આ message દેખાશે.

_**નોંધ:** જો તમારા Multisite પર Ultimate Multisite 1.x install છે, તો તમને હમણાં જ download કરેલા version સાથે plugin replace કરવાનો વિકલ્પ મળશે. કૃપા કરીને આગળ વધો અને **Replace current with uploaded** પર click કરો._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

આગળનું page તમને જણાવશે કે version 1.x સાથે કયા legacy add-ons install છે. તેમાં instructions હશે કે તમે જે version વાપરી રહ્યા છો તે version 2.0 સાથે compatible છે કે migration પછી તમારે add-on નું upgraded version install કરવાની જરૂર છે.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

એકવાર તમે આગળ વધવા માટે તૈયાર થાઓ, ત્યારે તમે **Visit the Installer to finish the upgrade** લખેલા button પર click કરી શકો છો.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

પછી તે તમને installation wizard page પર લઈ જશે જ્યાં welcome messages હશે. આગળના page પર જવા માટે તમારે ફક્ત **Get Started** પર click કરવાનું છે.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

**Get Started** પર click કર્યા પછી, તે તમને Pre-install Checks page પર redirect કરશે. આ તમને તમારી System Information અને WordPress installation બતાવશે અને જણાવશે કે તે **Ultimate Multisite ની requirements** પૂરી કરે છે કે નહીં.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

આગળનું પગલું એ છે કે તમારી Ultimate Multisite license key enter કરો અને plugin activate કરો. આનાથી ખાતરી થશે કે add-ons સહિત બધી features તમારા site પર ઉપલબ્ધ હશે.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

તમારી key enter કર્યા પછી, **Agree & Activate** પર click કરો.

License activation પછી, આગળના page પર **Install** પર click કરીને તમે actual installation શરૂ કરી શકો છો. આ version 2.0 ને function કરવા માટે જરૂરી files અને database આપમેળે create કરશે.

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## હવે, migration

Migrator માં built-in safety feature છે જેમાં તે તમારી આખી multisite ને check કરશે કે તમારો બધો Ultimate Multisite data કોઈ issues વગર migrate થઈ શકે છે. Process શરૂ કરવા માટે **Run Check** button પર click કરો.

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

Check run કર્યા પછી, બે શક્યતાઓ છે: result ક્યાં તો error **સાથે** હોઈ શકે છે અથવા **error વગર**.

### Error સાથે

જો તમને error message મળે, તો તમારે અમારી support team નો સંપર્ક કરવો પડશે જેથી તેઓ error fix કરવામાં તમારી મદદ કરી શકે. ticket create કરતી વખતે **error log provide કરવાનું** ભૂલશો નહીં. તમે log download કરી શકો છો અથવા contact our support team લખેલી link પર click કરી શકો છો. તે તમારા page ની જમણી બાજુએ help widget ખોલશે જેમાં fields પહેલેથી ભરેલા હશે, જેમાં description હેઠળ error logs પણ સામેલ છે.

_**કારણ કે system ને error મળ્યો છે, તમે version 2.0 માં migrate કરવા માટે આગળ વધી શકશો નહીં. error fix ન થાય ત્યાં સુધી તમારું network ચાલુ રાખવા માટે તમે version 1.x પર roll back કરી શકો છો.**_

### Error વગર

જો system ને કોઈ error ન મળે, તો તમને success message દેખાશે અને નીચે **Migrate** button હશે જે તમને migration સાથે આગળ વધવા દેશે. આ page પર, તમને આગળ વધતા પહેલાં તમારા database નો backup create કરવાની યાદ અપાવવામાં આવશે, જેની અમે ખૂબ ભલામણ કરીએ છીએ. જો તમારી પાસે પહેલેથી backup છે તો **Migrate** પર click કરો.

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

અને બસ, આટલું જ!

તમે Wizard setup ચાલુ રાખીને તમારા network પર logo અને અન્ય વસ્તુઓ update કરી શકો છો અથવા તમારા Ultimate Multisite version 2.0 menu અને તેના નવા interface ને navigate કરવાનું શરૂ કરી શકો છો. આગળ વધો અને મજા કરો.
