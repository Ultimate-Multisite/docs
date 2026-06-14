---
title: Email-ak eta broadcast-ek auratzera
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# Emailak eta Broadcastak (v2)

_**GIZKONTU GIZIKOA: Hau artikulu Ultimate Multisite 2.x bertsioari referentzia egiten du.**_

Ultimate Multisite-ek iruditzen du funtzio bat, hau da, erabiltzaile bat edo erabiltzaile pertsona bat grupari emaila bidali eta bere admin dashboardan aipatzen (broadcast) aipatziak emateko.

Honek oso laguntzak da zure erabiltzaile guztiek iruditzen dituzenean, gure sistema mantentzeko aipoak edo produktu/servisiak berriak eskaintzeko. Hau da erabilgarri aipatzi hau zure erabiltzailearen dashboardan jakin dira.

<!-- Screenshot unavailable: Admin notice broadcast shown on a customer's subsite dashboard -->

Admin aipoa lehen daiteko, network admin dashboardera jarraitu eta **Ultimate Multisite** menukian, **Broadcasts** opsioa aurkitu duzu.

![Broadcasts list page in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Eskaintzen dituzenean broadcastak dagoenak ere editatu:

![Broadcast edit interface](/img/admin/broadcast-edit.png)

Hau lapun, lurrean aukera duen **Add Broadcast** (Broadcast gehiago gehitu) botontik klikatu.

Honek Add broadcast modal windowa iradokitzi du, hori da zure bidali zehazteko lehen aurrera egin dezakezu.

Aipatzen dituzenean **Message** (Mezatzera) aukeratu eta **Next Step** (Lehen urtera) botontik klikatu.

![Add broadcast modal with the Message option selected](/img/admin/broadcast-add-message.png)

Hau lapuna zuregatik **Target customer** (Erabiltzaile targeta) edo **Target product** (Produktua targeta) gertu nahi du. Ezberdina, erabiltzaile bat edo produktua ez berriren aukera da iradokitzea.

Erregistro edo produktu bat bilatzen duzun bitartean, lehenikidean (field) da lauzaren ondorioa eskatzen duzu.

**Message type** lehenikidean, iragaztenaren kolorra ustez dezakezu. Horrek iragaztenaren esentziaren ematen du.

Gero, **Next Step** (Iragaztenaren iraupena) klik egin dezakezu.

![Target customers, target product and message type fields for a Message broadcast](/img/admin/broadcast-message-targets.png)

Hegoera iragaztenaren kontua emateko lehenikidean da, subjectu eta kontentua/iragaztuna (content/message) ematen duzu erabiltzaileei iragazten nahi duzun iragaztuna eskatzen.

![Broadcast message subject and content editor on the compose step](/img/admin/broadcast-edit.png)

Iragaztuna egindatzen ari zailan, **Send** (Bidaiatu) botoia klik egin dezakezu.

Eta horite da. Administrazioaren iragaztuna hemen erabiltzailearen dashboardan hemen erakusten duela.

## Iragaztunak zehaztu emailak bidaiatu

Ultimate Multisite broadcast funtzioa erabiliz, erabiltzaileei email bat bidaiatuko doli. Emaila zehatzeko erabiltzaileei edo produktu edo plan batzuean ematen duen zehatzeko erabiltzaileko gilea zehazteko opszioa duzu.

Email broadcast bat hasten duela, network admin dashboard-ra jarraitu eta Ultimate Multisite menukian Broadcast (Iragaztuna) opszioa aurkituko duzu.

![Broadcasts list page used as the starting point for an email broadcast](/img/admin/broadcasts-list.png)

Haupurtu, gainean **Add broadcast** (Iragaztuna gehitu) botoia klik egin dezakezu.

Horrek Add broadcast modal windowa aurkituko du, horretan zein iragaztuna bidaiatuko nahi duzu aukeratu daiteke. Emaila aukeratu eta gainean **Next Step** (Iraupena) botoia klik egin dezakezu.

![Add broadcast modal with the Email option selected](/img/admin/broadcast-add-email.png)

Hegoera lehenikideak eskatuko du **Target customer** (Erabiltzaile zehatua) edo **Target product** (Produkt zehatua). Erki duzu, erabiltzaile bat edo produktu batzuekin gehiago aukeratu daiteke.

Erregistro edo produktu bat bilatzen duzun bitartean, lehenikidean (field) da laiarra aurkitzen duzu beharko duzu.

Target publikoa aukeratuta jakin denean, **Next Step**-a klik egin dezakezu.

![Target customers and target product selection for an Email broadcast](/img/admin/broadcast-email-targets.png)

Hitzera da windowa da, hori da irailak eta kontentua/mezuak emanez emaila ezarri dezaz da, erabiltzaileei bidali nahi duzu.

<!-- Screenshot unavailable: Email broadcast subject and content editor on the compose step -->

Mezua ematen ondoren, **Send** (Ezartu) botoia dituztezu.

Hau da erailak ezarri dezaz end-usersen artean broadcast funtzioa erabiliz oso eraginkor da.

## System emails (Sistema emailak)

Ultimate Multisite-an system emails hauek dira **sistema informazioa** sentatutako iradokizunak, registration, koagmentua, domain mapping jatorrizko eskakizun garrantzako handiagoak gabe, jatorrizko akatsailu edo beste eskakizun bat. Hau emailak Ultimate Multisite aukerak ondorioz editatu edo modifikatu dezakezu. Bestetik, Ultimate Multisite aukera bat gogoratzen eta beste Ultimate Multisite instalazio bat da dagoen kontapurak importatzea erabil sortzen duena funtzioa ere eskaintzen du.

### Resetting & Importing (Resetatu eta Importatu)

Ultimate Multisite irudiko baimen, bestelako add-ons-ek, ezarritutako emailak aldizketa edo aldizki ematen da.

Konfliktualtasun eta beste problema hauek prevenitzera, **aldizketa berriak System Emails gisa instalazioan otomatikoki ez ematen dugu**, jwennua bere funtzioaren barne garrantzitsuak izan ez dutenean.

Hala ere, super admins eta agentsek importatu toola erabiliz emailak berri iradokitzutako importatuta kondikan duzu. Horrek berri template email bat ematen du, kontentua eta konfiguratura berri email templatearen bestela, super adminari aurkitzen du beharko dituen modifikazioak egin edo jatorriz mantendu dezake.

#### How to import system emails (System emails importatua)

Ultimate Multisite Justuaren Konfigurazioa lapera (Settings page) zeisten, **Emails** tab-era (taba) iritsi.

![Emails tab in Ultimate Multisite settings showing the System Emails section](/img/config/settings-emails-tab.png)

Gero, sidebar-an, **Customize System Emails** botoia (button) iritsi.

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

System Emails lapera-ean, lehen partean **Reset & Import** akzio botoia duzun. Horrek klik egin behar du import eta reset modal windowa (ventana) irekitzeko.

![Reset or Import action button on the System Emails admin page](/img/admin/system-emails-reset-import.png)

Gero, Import Emails opsioak aldatu ditzakezu, zer sistema emails hauek importatzeko lehen dauden ikusten.

<!-- Screenshot unavailable: Reset and Import modal with the Import Emails options expanded -->

#### System Emails Resetatu

Gehiago, email template batari buruz egin duten aldatuak ez duzu horretan funtzionatzen eta hori bere **default estado** (estado erregulazioa) anzen duzu.

Honek bezala, aukera bat duzu: sistema emaila lehiatu importatu eta itxitu (ezagututako instruktioak erabiliz) - hau da, aurretik bidunitzen dituen metrics eta beste garrantzako jarduerak borratzen du, zehazki hori da metodoa lehen osatuta.

Muga, **Reset & Import tool**a (herri) erabiliz email template hori resetatu ditzakezu.

Email template bat resetatu dezakezu, aipatu iritsi dituen urrinak jarraitu behar duzu Reset & Import toolera aurkitu, eta horrek **Reset** opsioa aldatu eta default kontuentu zehaztu behar duten emails hauek itxitu.

<!-- Screenshot unavailable: Reset and Import modal with the Reset Emails options expanded -->
