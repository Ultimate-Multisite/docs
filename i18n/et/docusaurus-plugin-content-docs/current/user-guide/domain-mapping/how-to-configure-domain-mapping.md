---
title: Kuidas seadistada domeenide kaardistamist
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Kuidas seadistada domeeni kaardistamist (v2)

_**OLULINE MÄRKUS: see artikkel viitab Ultimate Multisite versioonile 2.x.**_

Üks premium-võrgustiku võimsamaid funktsioone on võimalus pakkuda meie klientidele võimalust siduda oma saitidega tippdomeen. Lõppude lõpuks, kumb näeb professionaalsem välja: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) või [_**joesbikeshop.com**_](http://joesbikeshop.com)? Seetõttu pakub Ultimate Multisite seda funktsiooni sisseehitatuna, ilma vajaduseta kasutada kolmanda osapoole pluginaid.

## Mis on domeeni kaardistamine? {#whats-domain-mapping}

Nagu nimi viitab, on domeeni kaardistamine Ultimate Multisite pakutav võimalus võtta vastu kohandatud domeeni päring ja kaardistada see päring võrgustikus vastavale saidile, millele see konkreetne domeen on seotud.

### Kuidas seadistada domeeni kaardistamist oma Ultimate Multisite võrgustikus {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Domeeni kaardistamine nõuab toimimiseks mõningast seadistamist teie poolt. Õnneks automatiseerib Ultimate Multisite raske töö teie eest, et saaksite nõuded hõlpsasti täita.

Ultimate Multisite paigaldamise ajal kopeerib ja paigaldab viisard **sunrise.php** automaatselt määratud kausta. **Viisard ei luba teil jätkata enne, kui see samm on lõpule viidud**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

See tähendab, et kui Ultimate Multisite paigaldusviisard on teie võrgustiku seadistamise lõpule viinud, saate kohandatud domeeni kohe kaardistama hakata.

Pange tähele, et domeeni kaardistamine Ultimate Multisite’is ei ole kohustuslik. Teil on võimalus kasutada WordPress Multisite’i natiivset domeeni kaardistamise funktsiooni või mõnda muud domeeni kaardistamise lahendust.

Kui peate Ultimate Multisite’i domeeni kaardistamise keelama, et kasutada muid domeeni kaardistamise lahendusi, saate selle funktsiooni keelata jaotises **Ultimate Multisite > Seaded > Domeeni kaardistamine**.

![Domeeni kaardistamise seadete leht, mis näitab admini ümbersuunamist, kaardistamise teadet ja DNS-i valikuid](/img/config/domain-mapping-settings.png)

Kohe selle valiku all näete ka valikut **Sunni admini ümbersuunamine**. See valik võimaldab teil kontrollida, kas teie kliendid saavad oma admin dashboardile juurde nii oma kohandatud domeenil kui ka alamdomeenil või ainult ühel neist.

Kui valite **Sunni ümbersuunamine kaardistatud domeenile** , saavad teie kliendid oma admin dashboardile juurde ainult oma kohandatud domeenidel.

Valik **Sunni ümbersuunamine** **võrgustiku domeenile** teeb täpselt vastupidist – teie klientidel lubatakse oma dashboardidele juurde pääseda ainult oma alamdomeenil, isegi kui nad proovivad sisse logida oma kohandatud domeenidel.

Ja valik **Luba adminile juurdepääs nii kaardistatud domeeni kui ka võrgustiku domeeni kaudu** võimaldab neil oma admin dashboardidele juurde pääseda nii alamdomeenil kui ka kohandatud domeenil.

![Admini ümbersuunamise rippmenüü avatuna, näidates kolme ümbersuunamisvalikut](/img/config/domain-mapping-redirect-options.png)

Kohandatud domeeni kaardistamiseks on kaks viisi. Esimene on domeeninime kaardistamine teie võrgustiku admin dashboardilt super adminina ja teine on alamsaidi admin dashboardi kaudu konto lehel.

Kuid enne kui hakkate kohandatud domeeni mõnele oma võrgustiku alamsaidile kaardistama, peate veenduma, et domeeninime **DNS-i seaded** on õigesti seadistatud.

###

### Veendumine, et domeeni DNS-i seaded on õigesti seadistatud {#making-sure-the-domain-dns-settings-are-properly-configured}

Kaardistamise toimimiseks peate veenduma, et domeen, mida plaanite kaardistada, osutab teie võrgustiku IP-aadressile. Pange tähele, et vajate võrgustiku IP-aadressi – selle domeeni IP-aadressi, kuhu Ultimate Multisite on paigaldatud – mitte selle kohandatud domeeni IP-aadressi, mida soovite kaardistada. Konkreetse domeeni IP-aadressi otsimiseks soovitame minna näiteks lehele [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html).

Domeeni korrektseks kaardistamiseks peate oma **DNS-i** konfiguratsioonis lisama **A-kirje**, mis osutab sellele **IP-aadressile**. DNS-i haldus erineb domeeniregistripidajate vahel suuresti, kuid internetis on selle kohta palju õpetusi, kui otsite „ _Creating A Record on XXXX_ “, kus XXXX on teie domeeniregistripidaja (nt: „ _Creating A Record on_ _GoDaddy_ “).

Kui teil tekib selle tööle saamisega probleeme, **võtke ühendust oma domeeniregistripidaja toega** ja nad saavad teid selles osas aidata.

Kui plaanite lubada oma klientidel oma domeene ise kaardistada, peavad nad selle osa töö ise ära tegema. Suunake nad oma registripidaja tugisüsteemi poole, kui nad ei suuda A-kirjet luua.

### Kohandatud domeeninime kaardistamine Super Adminina {#mapping-custom-domain-name-as-super-admin}

Kui olete oma võrgustikus super adminina sisse logitud, saate kohandatud domeeninimesid hõlpsasti lisada ja hallata, minnes jaotisse **Ultimate Multisite > Domeenid**.

![Domeenide loendi leht Ultimate Multisite’is](/img/admin/domains-list.png)

Sellel lehel saate ülal klõpsata nupul **Lisa domeen** ja see avab modaalakna, kus saate määrata ja täita **kohandatud domeeninime** , **alamsaidi**, millele soovite kohandatud domeeninime rakendada, ning otsustada, kas soovite selle määrata **peamiseks domeeninimeks** või mitte (pange tähele, et saate kaardistada **ühele alamsaidile mitu domeeninime**).

![Domeeni lisamise modaalaken domeeninime, saidi valija ja peamise domeeni lülitiga](/img/admin/domain-add-modal.png)

Pärast kogu teabe sisestamist saate seejärel all klõpsata nupul **Lisa olemasolev domeen**.

See käivitab kohandatud domeeni DNS-i teabe kontrollimise ja hankimise protsessi. Samuti näete lehe allosas logi, mille abil saate jälgida protsessi kulgu. Selle protsessi lõpuleviimine võib võtta mõne minuti.

Ultimate Multisite v2.13.0 loob ka sisemise domeenikirje automaatselt, kui uus sait luuakse hostil, mida tuleks käsitleda saidipõhise domeenina. Kui host on võrgu peamine domeen või üks jagatud kassavormi põhidomeenidest, mis on seadistatud **Saidi URL-i** väljal, jäetakse automaatne kaardistatud domeeni kirje vahele, et jagatud põhidomeen jääks kättesaadavaks igale saidile, mis seda kasutab.

Kui klient registreerib uue domeeni Domain Seller v1.3.0 või uuema kaudu, kaardistab Ultimate Multisite registreeritud domeeni vaikimisi automaatselt kliendi võrgusaidile. Administraatorid ei pea pärast edukat registreerimist enam eraldi kaardistatud domeeni kirjet lisama, välja arvatud juhul, kui nad soovivad kohandada valikuid, nagu esmase domeeni lipp, aktiveerimisolek või SSL-i käsitlemine.

**Etapp** või olek peaks muutuma väärtuselt **DNS-i kontrollimine** väärtusele **Valmis**, kui kõik on õigesti seadistatud.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Kui klõpsate domeeninimel, näete selle sees mõningaid valikuid. Vaatame neid kiiresti:

![Domeeni detailleht etapi, saidi, aktiivsuse, esmase domeeni ja SSL-i lülititega](/img/admin/domain-edit.png)

**Etapp:** See on etapp, milles domeen parajasti on. Kui lisate domeeni esimest korda, on see tõenäoliselt etapis **DNS-i kontrollimine**. Protsess kontrollib DNS-i kirjeid ja kinnitab, et need on õiged. Seejärel viiakse domeen etappi **SSL-i kontrollimine**. Ultimate Multisite kontrollib, kas domeenil on SSL või mitte, ning liigitab teie domeeni olekusse **Valmis** või **Valmis (ilma SSL-ita)**.

**Sait:** Alamdomeen, mis on selle domeeniga seotud. Kaardistatud domeen kuvab selle konkreetse saidi sisu.

**Aktiivne:** Saate selle valiku sisse või välja lülitada, et domeen aktiveerida või deaktiveerida.

**Kas esmane domeen?:** Teie klientidel võib iga saidi jaoks olla rohkem kui üks kaardistatud domeen. Kasutage seda valikut, et määrata, kas see on konkreetse saidi esmane domeen.

**Kas turvaline?:** Kuigi Ultimate Multisite kontrollib enne domeeni lubamist, kas domeenil on SSL-sertifikaat või mitte, saate käsitsi valida, kas laadida domeen SSL-sertifikaadiga või ilma. Pange tähele, et kui veebisaidil ei ole SSL-sertifikaati ja proovite seda SSL-iga sundlaadida, võib see põhjustada vigu.

### Kohandatud domeeninime kaardistamine alam-saidi kasutajana {#mapping-custom-domain-name-as-subsite-user}

Alam-saidi administraatorid saavad kohandatud domeeninimesid kaardistada ka oma alam-saidi admin Dashboardilt.

Esmalt peate veenduma, et lubate selle valiku **Domeeni kaardistamise** seadetes. Vaadake allolevat kuvatõmmist.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Saate selle valiku määrata või seadistada ka **Paketi** tasemel või tootevalikutes lehel **Ultimate Multisite > Tooted**.

![Kohandatud domeenide jaotis toote redigeerimise lehel](/img/config/product-custom-domains.png)

Kui mõni neist valikutest on lubatud ja alam-saidi kasutajal on lubatud kohandatud domeeninimesid kaardistada, peaks alam-saidi kasutaja nägema **Account** lehel metakasti nimega **Domeenid**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Kasutaja saab klõpsata nuppu **Lisa domeen** ja see avab modaalakna mõningate juhistega.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Seejärel saab kasutaja klõpsata **Järgmine samm** ja jätkata kohandatud domeeninime lisamisega. Ta saab ka valida, kas sellest saab esmane domeen või mitte.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Klõps **Lisa domeen** käivitab kohandatud domeeni DNS-teabe kontrollimise ja hankimise protsessi.

### Domeeni sünkroonimise kohta {#about-domain-syncing}

Domeeni sünkroonimine on protsess, mille käigus Ultimate Multisite lisab kohandatud domeeninime teie hostingukontole lisadomeenina **selleks, et domeeni kaardistamine toimiks**.

Domeeni sünkroonimine toimub automaatselt, kui teie hostingupakkujal on integratsioon Ultimate Multisite domeeni kaardistamise funktsiooniga. Praegu on need hostingupakkujad _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ ja _Cpanel._

Kui hostipakkuja integratsioon on aktiivne, saab Ultimate Multisite lisada teenusepakkuja poolel DNS-i või alamdomeeni loomise ülesande järjekorda ka vastloodud saitide jaoks. Kui ükski integratsioon seda ülesannet ei kuula, jäetakse taustatöö vahele, et vältida järjekorras tegevuseta kirjeid. Kaardistatud domeenide DNS-i ja SSL-i kontrollid jätkuvad tavapärase domeenietapi protsessi kaudu.

Peate selle integratsiooni aktiveerima Ultimate Multisite seadetes vahekaardil **Integratsioon**.

![Integratsioonide vahekaart Ultimate Multisite seadetes, kus kuvatakse hostingupakkujad](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Pange tähele, et kui teie hostingupakkuja ei ole üks eespool nimetatud pakkujatest, **peate domeeninime käsitsi sünkroonima või lisama** oma hostingukontole._
