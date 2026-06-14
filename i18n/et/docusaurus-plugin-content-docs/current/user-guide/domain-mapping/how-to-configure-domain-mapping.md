---
title: Kuidas domeenimappimist konfigurida
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Kuinka konfigurida domeenimappingu (v2)

_**TÄHTIS NOTE: See artikkel refereeb Ultimate Multisite versioon 2.x.**_

Premium võrku üks kõige võimasemat funktsioone on võimalus pakkuda klientidele võimalust lisada oma sille taseme domeen nende veebile. Kuidas see näeb professionaalsemalt: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) või [_**joesbikeshop.com**_](http://joesbikeshop.com)? See on seotud sellega, et Ultimate Multisite pakub selle funktsiooni sisse laetuna, ilma kolmandate osutuste (third-party plugins) kasutamise vajadusel.

## Mis on domeenimapping?

Kuten nime viitab, domeenimapping on Ultimate Multisite'i võimalus võtta vastu küsimuse oma domeeni ja seotuda selle küsimuse vastava veebile võrku sille erikonna domeeniga.

### Kuinka määrustada domeenimapping teie Ultimate Multisite võrku jaoks

Domeenimapping nõuab mõninga seadistamist teie poolt, et see töötaks. õnneks automaatib Ultimate Multisite selle raske töö teie eest, nii et saate lihtsalt nõuetele vastata.

Ultimate Multisite installimise ajal kopieerib ja paigaldab wizard automaatselt **sunrise.php** määratud faili asendamise kordil. Wizard ei luba teil jätkata, kuni see samm on lõpetatud.

<!-- Screenshot unavailable: Ultimate Multisite installimise wizard sunrise.php sammega -->

See tähendab, et kui Ultimate Multisite installimise wizard teie võrku seadistamise lõpuni jõuab, saate kohe alustada domeeni mappingi.

Päraste Multisite'is domeenimapping ei ole majanduslikult vajalik. Teil saate kasutada WordPress Multisite oma natuv domeenimapping funktsiooni või mõnda muud domeenimapping lahendust.

Kui soovite Ultimate Multisite domeenimappingi välja lülitada teiste domeenimapping lahenduste jaoks, saate seda funktsiooni välja lülitada **Ultimate Multisite > Settings > Domain Mapping** all.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

See valik on just alla, ja siin näete ka valiku **Force Admin Redirect**. See võimaldab teil kontrollida, kas teie kliendid pääseb oma administraatori dashboardi kasutama oma isiklikku domeeni või alatesidami ainult ühelt.

Kui valite **Force redirect to mapped domain**, siis teie kliendid saavad pääseda oma administraatori paneeli ainult oma isiklikest domeenidele.

Valik **Force redirect to** **network domain** teeb täiesti vastupidi – klientid on lubatud pääseda oma dashboardile ainult oma subdomaaini kaudu, isegi kui proovivad sisse logida oma isiklikest domeenidele.

Ja valik **Allow access to the admin by both mapped domain domain and network domain** võimaldab neil pääseda administraatori paneeli nii subdomaaini kui ka isikliku domeeni kaudu.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

On on te on kaks viisid isiklikku domeeni (custom domaini) seotamiseks. Esimene on domeeni nimi seotamine oma võrku administraatori dashboardist superadministraatorina ja teine on subsite-administraatori dashboardi all konto-lehel.

Kuid enne kui alustate isiklikku domeeni seotamist ühegi subsitega oma võrkus, pead veenduma, et **DNS-seadistused** domeenini on õigesti konfiguritud.

### Domeeni DNS-seadistuste õigustamise kontrollimine

Et, et mappimine toimuks, pead veenduma, et domeen, mida sa planeerid mappida, viitab teie võrku IP aadressile. Pööra tähele: vajad on võrku IP aadress - see on selle domeeni IP aadress, kus Ultimate Multisite on paigutatud - mitte selle oma kasutamata domeeni IP aadress. Erineise domeeni IP aadressi otsimiseks soovitame minud [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) külastada, näiteks.

Etukorralik domeeni ülesandmine nõuab **A RECORD**-i lisamist oma **DNS** konfiguratsioonile, mis viitab sellele **IP-adressile**. DNS-juhtimise on erinev iga domeenregistrari vahel, kuid internetil on palju tutori, mis selgitavad seda, kui otsite " _Creating A Record on XXXX_ ", kus XXXX on teie domeenregistrari nimi (nt: " _Creating A Record on_ _GoDaddy_ ").

Kui teile on keeruline saada seda töötama, **vaata oma domeenregistrari toetust** ja nad suudavad teil selles osas aidata.

Kui planeerite võimaldada klientidele omistada oma domeene, peavad nad selle osa teha itse. Viide neid nende registrari toetussüsteemi poole, kui nad ei saa A Recordi luua.

### Remmitse domeennimi Super Adminiks

Kui olete sisse logitud superadministraatorina oma võrku, saate oma kaitsed domeenide lihtsalt lisada ja hallata minnes **Ultimate Multisite > Domains** menüükaudu.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Selle lehel saate klõpsata ülal olevat **Add Domain** (Domeeni lisamine) nupukonnat, mis avab modali aknu. Seal saate seada ja täita **custom domain name** (kustom domeen nimi), **the subsite** (subsiit), millele soovite kustom domeen nimet kindlustada, ning otsustada, kas soovite seda asutada kui **primary domain** (primäärne domeen) või mitte (pausige tähelepanu sellele, et saate **ühtest domeenide seada ühe subsiidi jaoks**).

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

Kogu teiste informatsioonide pärast saate klõpsata allpool oleva **Add Existing Domain** (Loo olemasoleva domeen) nupul.

See käivitab protsessi, millel kontrolli ja DNS-informatsiooni oma erikdomaaini jaoks on tõestatakse. Lehel alates levi näete ka logi, mida saate jälgida selle protsessiga läbi. See protsess võib mõne minuti kedaiku lõpma.

Ultimate Multisite v2.13.0 luuab automaatselt sisemise domeenikoguja uue saini loomisel hostil, mida tuleb käsitletakse saini-teise domeenina. Kui host on võrku primäärne domeen või üks neid jagatud kassapõhise domeene, mis on konfigurieritud **Site URL** (Saini URL) välja valitud välja, on automaatselt mappatud domeenikoguja registreerimine ületatud, et jagatud põhidomeen jäänud oleks koonis kõigile saini kasutavale.

**Etap** või status muutub **DNS kontrollimiskust** **Valmis**, kui kõik on õigesti seaditud.

<!-- Screenshot unavailable: Domeenriigi rida, mis näitab DNS kontrollimise etappi domeenide loendis -->

<!-- Screenshot unavailable: Domeenriigi rida, mis näitab Valmis etappi ja rohelikku statusindikaatori -->

Kui klõpsate domeeni nimele, saate panna selle all olevad välja näha. Vaadame neid kiiresti üle:

![Domeen detailleht, kus on etapp, veebileht, aktiivne, primäärne ja SSL lülitavad kontrollid](/img/admin/domain-edit.png)

**Etap:** See, millises staadi domain asub. Kui lisate domeeni esimest korda, on see tõenäoliselt **DNS-kontrolli** etapis. Protsess kontrollib DNS-sisse seotud sissejuhe ja kinnitab, et need on õigused. Seejärel laseb domain **SSL-kontrolli** etapi. Ultimate Multisite kontrollib, kas domeenil on SSL või mitte, ja klassifitseerib teie domeeni kui **Valmis** või **Valmis (ohutusvälja ilma)**.

**Situs:** Subdomain, mis on seotud selle domainiga. Mappitud domain näitab selle konkreetse siti sisu.

**Active:** Saate seda valikku sisse või välja lülitada domeeni aktiveerimiseks või deaktiveerimiseks.

**On see primäärne domain?:** Teie klientide saab iga sriti jaoks rohkem kui ühe mappitud domaini. Kasutage seda valikut, et valita, kas see on konkreetse sriti primäärne domain.

**On turvalisus?** Kuigi Ultimate Multisite kontrollib, kas domeenil on SSL-tunnus või mitte, enne selle aktiveerimist, saate manuaalselt valita, kas domeeni laadida SSL-tunnusega või ilma. Pöörake tähelepanu sellele, et kui veebilehel ei ole SSL-tunnust ja proovite seda pakutada SSL-ga laadida, võib see teada anda vigu.

### Kasutaja kasutaja nimetamise asendamine subsite'i domeeniks

Subsite administraatorid saavad ka nimetada oma subsite admin paneelist saadud domeenid.

Enne alustamist peate veendunud, et aktiveerite selle valik **Domeenide määratuse** (Domain mapping) seadustel. Vaadake allolevat pilti.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

See samal ajal saate seda valikust seada või konfigurida **Ultimate Multisite > Products** sektsioonist **Plan**-tamele või tootevalendustele.

![Custom Domains osas toote redigeerimise lehel](/img/config/product-custom-domains.png)

Kui üks neilest valikust on aktiveeritud ja subsite kasutajale on מא스트 (map) oma custom domain nimetusi lubatud, siis subsite kasutaja näeb **Account** lehel olevat metabox'i nimega **Domains**.

<!-- Screenshot unavailable: Domains metabox subsite Account-lehel Add Domain nupuga -->

Kasutaja saab klõpsata **Add Domain** nupust, ja see avab modulaarse akrordiga, kus on mõned juhised.

<!-- Screenshot unavailable: Add Domain modal näitab subsite kasutajatele DNS A-record juhise -->

Käesoleva kasutaja saab siis klõpsata **Next Step** ja jätkata oma kaustom domeeni lisamiseks. Saate ka välja valida, kas see on peamine domeen või mitte.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

**Add Domain** klõpsamise käivitab protsessi, mis sisaldab kaustoomaani domeeni kinnitamise ja DNS-informatsiooni vöökimise.

### Domeen-sünkroonimine kohta

Domeen-sünkroonimine on protsess, mille abil Ultimate Multisite lisab kaustoomaani domeeni teie hoitja kontoile lisakohust **domeenmapingu toimimiseks**.

Domeenid synkronituvad automaatselt, kui teie hoosta lahendaja on integreeritud Ultimate Multisite domeenimapping funktsiooniga. Praegu need hoosta lahendajad on _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways_ ja _Cpanel_.

Kui host-provider integraatsio on aktiivne, saab Ultimate Multisite ka lisada (enqueue) provideri poolt nõudutud DNS või alsuboomu loomise töö. Kui mingil integreerimisega ei ole seda taski kuulamist, on tausttegevus ülesirjutatud, et vältida ebajõudsete "no-op" (ei teostatud) järjekorditundmeid. Domeenide ja SSL-kontrollid mappitud domeenide jaoks jätkavad toimimist tavalise domeenistega seotud protsessi kaudu.

Pea on aktivere selle integreerimise Ultimate Multisite asetustes **Integration** (Integreerimine) tabist.

![Integratsioonide välile Ultimate Multisite seadistustes hoastajate kohta](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hoastaja konfiguratsiooni linkid Integratsioonide seadiste välil on -->

_Päraste, et te tead, et kui teie hoastaja ei ole ühel neist nimetatud hoastajatest, **peabte manuaalselt synkronima või lisama domeeni nimi** oma hoastaja kontoile._
