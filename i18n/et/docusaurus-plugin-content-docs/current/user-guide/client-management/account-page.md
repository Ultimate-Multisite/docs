---
title: Klienti konto lehel
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Teie kliendi konto lehekül (v2)

_**TÄHTIS NOTE: See artikli viitab Ultimate Multisite versioonile 2.x.**_

Kui kliendid tekitavad oma võrku allikates plaaniga, saavad nad külastada veebisaidi ja selle dashboardi, kus on olulist teavet nende maksedest, jälgendustest, domeenidest, plaanide piirangutest jne.

Selle tutori juhendame teid kliendi konto lehekül läbiviimise läbi ja näete, mida teie kliendid seal näha ja teha saavad.

## Konto lehekül {#the-account-page}

Konto lehekül on kättesaadav **Account** (Konto) klõpsimisel oma kliendi dashboardis.

![Konto menü kliendi dashboardis](/img/account-page/account-menu.png)

Sovereign tenant võrku Ultimate Multisite v2.13.0 hoidab selle kliendihaldusettevõtte pealise veebisaidi allpool. Kui klient avab konto, maksutamise, faktura, veebisaidi haldamise, šabloni ülemine ja domeenide mappimise toiminguid sovereign tenantist, suunatakse tegevused tagasi pealeveebisaidi kliendi paneelile, seega võrku maksed ja jälgenduse registreid jäävad autoriteetseks.

Kui klient saabub sovereign tenantist, pealeveebisaidi kliendi paneelil võib olla tagasiülesande link tenanti veebisaidi poole. Tagasiülesande näitab ainult siis, kui Ultimate Multisite suutab tagasiülesande sihet ühe kliendi veebisaadi kui vastuvõtja valideerida, mis vähendab juhuslikke juhatusi ja säilitab tenanti töövoogu.

![Kliendi konto lehekül ülevaade](/img/account-page/overview.png)

Kui klient selle klõpsab, ta näeb ülevaate oma jälgendustest, maksutamise aadressist, faktuuritest, domeenidest, veebisaidi piirangutest ja saab ka muuta ****Veebisaidi šabloni** (kui see on teie võrkudes lubatud).

Nad saavad ka muuta jälgenduse teise plaani või osta teid paketi või teenust, mida te pakute. Lühidame iga osi eraldi.

### Teie jälgide ülevaade: {#your-membership-overview}

Esimene blok, mis asub otseselt teie kliendite veebilehe nime all, annab ülevaate nende praeguse plaani ja sellega kaasnenud ostetud teenuste/pakettide kohta. Blok näitab ka jälgide numberit, esialgsetelt makset summa, kui plaani eest on makset, kui palju plaani ja miskettek pakette/teenusi maksavad ning kui palju neid jälgid selle jälgiga. Neid saab ka näha, kas jälg on **Active** (aktiivne), **Expired** (lõppunud) või **Canceled** (tühistatud).

![Jälgide ülevaade blokk, mis näitab plaani, summa ja jälgimiskoged](/img/account-page/membership-card.png)

See blokki all näevad kliendid **Selle veebilehe kohta** ja **Veebilehe piirid** (Site Limits) blokke. Need blokid annavad neile kõik piirangud, mis on nende plaani osas: diskide ruumi, sisu, lehed, külastused jne... Neid saab konfigurida iga plaani lehel **Ultimate Multisite > Products**-is.

![Selle veebilehe kohta ja veebilehe piirid blokkid, mis näitavad plaani piiranguid](/img/account-page/site-limits.png)

**Your Membership** (Teie jälg) kõrval saab kliendid klõpsata **Change** (Muuda). See näitab neile kõik saadaval olevad plaadid ja pakettid/teenused. Kui nad valivad teise plaani, on selle plaani piirangud aktiivsed asemel praeguse jälgide piirangute eest – kas nad allustavad või uppaustavad seda.

Nüüd, kui kliendid valivad selle praeguse jälgiga pakette või teenusi – nagu rohkem diskide ruumi või külastusi – ei muudu praegu oleva jälgit, vaid uued pakettid lisatakse sellele.

Päraste on märkida, et kuponikoodi saab lisada ainult jälgide muutmislehel. Kui klient kasutas kuponikoodi esimese jälgimiskogude ostu ajal, siis kood toimib ka selle uue jälgiga.

### Jälgimise aadressi uuendamine: {#updating-the-billing-address}

Arvu konto lehel on teie kliendid võivad ka oma lahendusadressi uuendada. Neile tuleb lihtsalt klõpsata **Ühenda** (Update) "Lahendusadressi" kõrval.

![Lahendusadressesektsioon Ühenda-nupuga](/img/account-page/billing-address.png)

Teile ilmub uue akn. Kõik, mida peate teema, on täita uue aadress ja klõpsata **Muuda muutke** (Save Changes).

![Lahendusadresseseksti vormi uuendamiseks](/img/account-page/billing-address-form.png)

### Veebilehva malli muutmise: {#changing-the-site-template}

Et võimaldada klienditele oma veebilehtide malle muuta, peate minema **Ultimate Multisite > Settings > Sites** sektsiooni ja välja lülitamise **Mallide ülemine**.

Samuti **Ultimate Multisite > Products** sektsioonist valige oma plaanid ja minuka **Site Templates** tabile. Veenduge, et **Mallide ülemine** on sisse lülitatud ja **Veebilehtide malli valik mode** (Site Template Selection Mode) on valitud **Käija saadaval olevate veebilehtide mallide**.

![Toote veebilehtide mallide tab, mallide valik moodiga](/img/config/product-site-templates.png)

Saate näha kõik saatavad veebilehtide mallid oma veebilehel. Valige, milliseid soovite saadaval teha ja milliseid ei ole saadaval klienditele, kes on selle plaaniga aboneeritud. Pöörake tähele, et need valikud mõjutavad ka ostukorvi vormi, seetõttu ei ilmune **Ei ole saadaval** (Not Available) määratud mall on registreerimise lehel selle plaaniga.

Nüüd saavad teie kliendid klõpsata oma konto lehel **Veebilehtide malli muuta**.

![Veebilehtide malli muutmisnupuga konto lehel](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 näitab uuendatud mallide ülemine paneli. Panell algab **kassiti veebilehva** (current-template card) abil, seetõttu saavad kliendid näha, milline mall on aktiivne enne kui nad asendavat seda välja valivad.

Käivitub konfiguratsiooniga jääb kasutajatele nähtav välja kõik saadaval olevad veebilehed. See aitab neil valikuid oma plaanile sobivatele teemadel võrrelda ilma, et ei kaduta praegu valitudid.

![Saadaolevad veebilehed plaanile](/img/config/site-templates-list.png)

Valdes pärast seda, mida soovite muuta, palutatakse teil muutuse kinnitamist.

![Veebilehe tegemise ülemine kinnituskirjendus](/img/account-page/template-switch-confirm.png)

Kinnituskirjenda aktiveerimise ja **Muutu** klõpsamise pärast kasutatakse uut veebilehte teemat teie kliendi veebilehel.

Kliendid võivad kasutada ka **Praegu oleva teema taastamist**, kui nad soovivad veebilehe tagasi praegu määratud teemale. Teema muutmise nagu teise teema valimise korral, võib see ületada veebilehe sisu, seetõttu peaks kliendid seda kinnitamast ainult siis, kui nad mõistavad taastamise toimiku.

### Kasutatud domeenide lisamine: {#adding-custom-domains}

Klienditele on ka võimalus selle plaaniga oma konto lehel isiklikud domeenid lisada. Et võimaldada klientidel kasutada isiklikuid domeene, külastage **Ultimate Multisite > Seaded >** **Domeeni mappimine**.

Lülitage sisse valikut **Domeeni mappimise aktiveerimine**. See võimaldab klientide kasutada isiklikuid domeene võrku tasemel.

Ära unustige ka kontrollida, kas domeenimappimine on aktiveeritud toote perustel – sest saate veebilehe piirata nii, et kliendid ei saa kasutada isiklikuid domeene.

Minumise **Ultimate Multisite > Tooted**. Valige oma valikuline plaan ja külastage **Isiklikud domeenid** tabti. Lülitage sisse valikut **Isiklikud domeenid lubama**.

![Isikliku domeenide tabliiga Allow Custom Domains lülitaja](/img/config/product-custom-domains.png)

See, see, et võimaldab kõigile klientidele, kes on registreeritud selle spetsiifilise plaani all, kasutada oma isiklikke domeene. Nüüd kasutaja leheküljel saate teie klientid isikliku domeeni lisada klõpsates **Lisada domeen** (Add Domain).

![Lisada domeeni nupp on konto lehel](/img/account-page/add-domain-button.png)

Avatud esimene aken näitab klientidele sõnumi, mis juhistab neid, kuidas oma DNS-registreid uuendada, et see isiklik domeen töötaks teie võrku.

![DNS juhised esitatud isikliku domeeni lisamise ajal](/img/account-page/add-domain-dns.png)

See sõnumi saab muuta (te saate seda muuta) **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions** (Lisada uue domeeni juhiste).

![Uue domeeni juhiste seostus Domain Mappingis](/img/config/settings-domain-mapping.png)

Siin on täielik näues domain mappingi seadistustel:

![Domain mappingi seadistuste täielik leht](/img/config/settings-domain-mapping-full.png)

**Next Step** (Järgmine samm) klõpsamise pärast saate klientid lisada oma isikliku domeeni nime ja välja otsustada, kas see isiklik domeen on primäärne. Pöörake tähele, et klientid võivad kasutada rohkem kui ühte isiklikku domeeni oma veebilehtide jaoks, seega nad saavad valita, milline on primäärne.

![Isikliku domeeni nime sisestamine ja primääri domeeni valik](/img/account-page/add-domain-primary.png)

**Lisada domeeni** (Add Domain) klõpsamise pärast lisatakse domeen klientide kontole. Kõige, mida nad peavad teostama nüüd, on muuta selle isikliku domeeni DNS-registreid oma domeenregistrari.

### Paroolu muutmine: {#changing-password}

Konto dashboardis saate klientid parooli ka muuta klõpsates **Muuda parool** (Change Password).

![Parooli muutmise nupp konto lehel](/img/account-page/change-password-button.png)

See uueduud ja uued akenditulekust, kus teie kliendid peavad sisestama oma praeguse parooli ning seejärel soovitud uue parooli.

![Change password form with current and new password fields](/img/account-page/change-password-form.png)

### Ohtlik alue: {#danger-zone}

Meil on ka kaks valikut, mis on näidatud **Ohtliku alal**, nimega **Saite eemaldamine** ja **Akenditulekust eemaldamine**. Need on nii ohtlikud alal, kuna need toimingud ei saa tagada. Kui kliendid eemaldavad oma veebisaidi või akenditulekuse, nad ei saa seda taastada.

![Danger Zone with Delete Site and Delete Account options](/img/account-page/danger-zone.png)

Kui kliendid klõpsavad mille ühtest needi kaks valikut, näidatakse neile akenditulekust, kus peavad aktiveerima valiku veebisaidi või akenditulekuse eemaldamiseks ja nad saavad varningu, et et seda toimingut ei saa tagada.

![Delete Site confirmation dialog](/img/account-page/delete-site-confirm.png)

![Delete Account confirmation dialog](/img/account-page/delete-account-confirm.png)

Kui kliendid eemaldavad oma veebisaidi, nende akenditulekuse ja li membership on endiselt puhtad. Nad lihtsalt kaotavad kõik sisu oma veebisaidil. Kui nad eemaldavad oma akenditulekuse, kadutatakse kõik veebisaidid, membership'id ja selle akenditulekuse teadmised.
