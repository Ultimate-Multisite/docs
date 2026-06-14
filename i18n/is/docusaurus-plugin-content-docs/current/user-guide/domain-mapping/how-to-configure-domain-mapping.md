---
title: Hvernig að innreiða domænumarkmið
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Hvernig að innreiða domén-myndun (v2)

_**VIÐSKJAL: Þessi grein er tengd Ultimate Multisite v2.x.**_

Eitt af sterkastum eiginleikum premium netwerks er möguleiki að bjóða við viðskiptavinum þínum til að setja toppdomén á sínum vöruheimildum. Eftir allt, hvað er meira faglegt: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) eða [_**joesbikeshop.com**_](http://joesbikeshop.com)? Það er því að Ultimate Multisite býður upp á þennan eiginleika í innbyggð form, án þess að þarf að nota þriðja marka flugvinnu.

## Hvað er domén-myndun?

Eins og nafnið sýnir, er domén-myndun möguleiki sem Ultimate Multisite býður upp til að taka eftirfarandi skynjun um sérsniðna domén og myndast það við samsvarandi vöruheimild í netinu með því að setja það sérstaka domén.

### Hvernig settur upp domén-myndun á Ultimate Multisite Netverk þínu

Domén-myndun krefst nokkrar innreiðinga á þínum hlutinn til að virka. Á góðan hátt hefur Ultimate Multisite sjálft automatíska vinnu fyrir þig svo þú getur auðveldlega uppfyllt kröfur.

Á síðunni við innreiðingu Ultimate Multisite mun leiðræðin sjálft kopya og installa **sunrise.php** í mælit folder. **Leiðræðin leyfir ekki að halda áfram þar sem þessi skref er ekki fullfærður**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Þetta þýðir að eftir að leiðræði innreiðingar Ultimate Multisite hefur fullfærð sett upp netverk þitt, geturðu byrja með domén-myndun strax.

Litið á að domén-myndun í Ultimate Multisite er ekki nauðsynleg. Þú hefur valkost hingað til að nota innbyggðar domén-myndun myndvöruheimild WordPress eða einhver annað lausn fyrir domén-myndun.

Ef þarfir þér að skila úr (disable) domain mapping fyrir Ultimate Multisite til að gefa vinnu yfir í övrutt domain mapping lausn, geturðu skila úr þessum eiginleika undir **Ultimate Multisite > Settings > Domain Mapping**.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

Á strax undir þessari valkostnað geturðu sjá valkostninginn **Force Admin Redirect** (Skila úr stjórnarskráningu). Þetta valkostning gerir þér að kontrollera hvort viðskiptavinir geti aðgang að stjórnarskráningu sínum á sérstaklegan domain og subdomain eða bara á einum þeirra.

Ef þú velur **Force redirect to mapped domain** (Skila úr til mappaðan domain), geta viðskiptavinir þín aðgang að stjórnarskráningu sínum bara á sérstaklegum domainum.

Valkostningurinn **Force redirect to network domain** (Skila úr til netverkseign) gæti gerja svo sem það er upphætti - viðskiptavinir þín verða að geta aðgang að stjórnarskráningu sínum bara á subdomain, sjá varð þú reynir að logga inn á sérstaklegum domainum.

Og valkostningurinn **Allow access to the admin by both mapped domain domain and network domain** (Látar aðgang til stjórnarskráningu með mappaðan domain og netverkseign) gerir þeim að geta aðgang að stjórnarskráningum sínum á både subdomain og sérstaklegum domain.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

Það eru tveir hátt að mappa sérstakla domain. Fyrirnar er mappaður domainnafninn frá netverkstjórnarskráningu þinni sem super admin og aftur er mappaður meðan í subsite admin dashboard undir account page.

En fyrir þá en þú byrjar að mappa sérstakla domain yfir á eitt af subsítum í netverkinn þitt, þarftu að tryggja það að **DNS settings** (DNS-þjónusturinn) domainnafninu sé rétt sett upp.

### Tryggja að DNS-þjónusturinn domainnafninu sé rétt sett upp

Til mappingur virðið, þarf að hafa í huga að domænin sem þú ert að planast að mappa á, verður að reikna til þess að hún sé sett á IP-heiti netinu þínu. Hugtakið að þú þarft Netverk-IP heitið - IP-heiti domænsins þar sem Ultimate Multisite er installað - ekki IP-heiti sérstaka domænsins sem þú vilt mappa á. Til leitarinnu eftir IP-heiti sérstaka domænsins mælum við að tryggja yfir [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), til dæmis.

Til að mappa domænin rétt, þarf að bæta **A RECORD** í **DNS** uppsetningu sem stigur á það **IP-heiti**. Stjórnun DNS er mjög ólík við mynd eftir myndum milli þessarar registrardomæna, en er fjöldi menntunarherferða netanna til að hmarks skila því ef þú leitar eftir " _Creating A Record on XXXX_ ", þar XXXX er þín domænsregistrar (t.d. " _Creating A Record on_ _GoDaddy_ ").

Ef þú finnur það óvænt á að koma þessu í gang, **tekur í kontakt með stuðninga registrardomænsins þíns** og þeir munu geta hjálpað þér við þennan hluta.

Ef þú planir að leika heimildum þínum að mappa sjálfa domænir sína, verður þeim að gera þetta sjálfsar á þessum hluta. Stjórnu þeim til stuðninga registrardomænsins ef þeir finna sér óvænt í að skapa A Record.

### Mappa sérstaka domænn sem Super Admin

Þegar þú ert logged in sem super admin á netinu þínu, geturðu auðveldlega bæta og stjórna sérstökum domænum með því að fara undir **Ultimate Multisite > Domains**.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Undir þessna yfirskrifarinnar geturðu klikkað á knappa **Add Domain** (Búa til domén) uppstofa yfir og það mun sýna þér einn modalvinnuþráð sem getur setja og fylla í **custom domain name** (eina sérsniða doméngna námsn), **the subsite** (undirsta sítið) sem þú vilt nota eina sérsniða doménna námsn á, og bestemma hvort þú vilja setja það sem **primary domain name** (primær doménna námsn) eða ekki (merki: þú getur mappa **multiple domain names to one subsite** (fleiri doménna námsn við einan undirsta sítið)).

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

Eftir að hafa sett allri upplýsinguna þína geturðu klikkað á knappa **Add Existing Domain** (Búa til núverandi doménna námsn) í undir.

Þetta mun byrja ferli við að staðfesta og hapa DNS upplýsingar fyrir sérsniða doménna námsn. Þú sjáttur einnig logg á undir síðuna sem getur fylgjaferli þess sem er í gangi. Þessi ferli getur taka nokkrar mínuti að fullbera.

Ultimate Multisite v2.13.0 skapar einnig innri doménna námsn sett með sjálf um þegar ný sítið er skráð á host sem skal séast sem domén á hverjum síti. Ef hosturinn er primær domén á netverkinu, eða einhver af sama grunndoménna fyrir færslaform (checkout-form base domains) settar í felt **Site URL** (síti námsn), blir sjálf umtoddandi mappað doménna námsn ekki skoðað svo að sama grunndomén sé framkvæmt fyrir alla síti sem notar hann.

**Stage** eða staða þarf að bregðast frá **Checking DNS** (Staðfesting DNS) til **Ready** (Burtu/Báta) ef allt er sett upp rétt.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Ef þú klikkur á doménna námsn, geturðu sjá nokkrar valkostlunar innan þessum. Látum okkur skoða þær fyrir hraða:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Stigi:** Þetta er stigi það sem domæni er á. Þegar þú hefur fyrst lagt í domænið, er það líklega á stigi **Checking DNS**. Prosessi mun skoða DNS-skilbingunum og staðfesta að þær séu réttar. Þá haldagengur domænið á stigi **Checking SSL**. Ultimate Multisite munu skoða hvort domænið hafi SSL eða ekki og skipta domænin í **Ready** (Burtu) eða **Ready (without SSL)** (Burtu án SSL).

**Site:** Subdomæni sem er tengt þessum domæni. Mappað domæni mun sýna innihald þess sérstaka staðar.

**Active:** Þú getur skipt í þessari möguleika á á/off til að aktíva eða inaktíva domænið.

**Is Primary Domain?:** Verkjafarþjónustu þín geta hafa fleiri mappað domæni fyrir hvert stað. Notaðu þessi möguleika til að velja hvort þetta sé primærdomæni fyrir sérstakt stað.

**Is Secure?:** Þótt Ultimate Multisite skoði hvort domænið hafi SSL-sertifikat eða ekki áður en það aktívirðist, geturðu mannvægað að ladda domænið með eða án SSL-sertifikats. Litið þess að ef vefsítanum hefur ekki SSL-sertifikat og þú reynir að tvinga launi það með SSL, gæti það gefið þér villur.

### Mappa custom domain name sem Subsite user

Administrators fyrir subsite geta mappað einnig sérstaka domæni frá dashboard admin-siti sínum fyrir subsite.

Fyrst þarf að tryggja að þú aktívirðir þessi möguleika undir **Domain mapping** (Mappa domæni) settum. Sjá myndina hér að neðan.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Þú getur mappað eða hleðja þessi möguleika undir **Plan** (Plan) level eða vörur möguleika á **Ultimate Multisite > Products**.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

Þegar einir þessar valkostir eru aktíva og notandur subsiteins er leyfður að mappa sérsniðna domænsna, sjálfur notandinn á subsiteins ættu að sjá metabox undir **Account** (Notkun) -sidan sem heitir **Domains** (Domænar).

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Notandinn getur klikkað á hnappinn **Add Domain** (Búa til domén), og það mun sýna modal glugn með nokkrum leiðbeiningum.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Notandinn getur þá klikkað á **Next Step** (Næstu skref) og halda fram með að bæta sérsniðnum doménanum í listuna. Þar getur hann einnig valdið ef þetta er primært domén eða ekki.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Klikka á **Add Domain** (Búa til domén) mun byrja ferli staðfestingar og að hentar upp DNS upplýsingum sérsniðna domænsins.

### Um Domæn Samræmi (Domain Syncing)

Domæn samræmi er ferli þar sem Ultimate Multisite bætir sérsniðnum doménanum í reikningi staðfestingar þinnar héldunar (hosting account) sem viðbót **til að mappa domænsna sé möguleg**.

Domæn samræmi skiptir sjálft fyrir sér ef héldunshætturinn hefur tengingu við eiginleika domænamappingar Ultimate Multisite. Notkun þessar héldunarþjónustana er nú Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways og Cpanel.

Þegar tenging með héldunshætturinn er aktíva, getur Ultimate Multisite einnig skráð upp (enqueue) áskorunina fyrir DNS eða uppburði subdomainar hjá héldunshætturinn fyrir nýsköpunar staðir. Ef ingengd tenging er að hita þennan áskorunann, blir bakgrunnstíðan (background job) skoðað í vegi til að undanbúa óþarfarnar skráningar í queue. DNS og SSL skynstök fyrir mappa domænsna halda fram með normulegri ferli domænans.

Þú þarft að aktiva þennan tengingu í innstillingum Ultimate Multisite undir lausnina **Integration**.

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Athugið að ef þjónustuþjónustan þinn er ekki ein af þeim sem eru nefndir yfir, **þarf þér að sýna eða bæta með handi í skráningu domænsins** í því sjálfum þjónustuþjónustu._
