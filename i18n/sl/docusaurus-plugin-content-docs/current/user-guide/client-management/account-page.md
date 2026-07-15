---
title: Stranica računa stranke
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Vaša stran za stranke (v2)

_**POMEMBEN OPOMENJEV: Ta članek se nanaša na Ultimate Multisite verzijo 2.x.**_

Ko kupci naročajo paket na vašo mrežno, dobijo dostop do spletne strani in njene dashboarda z pomembnimi informacijami o plačevah, članstvu, domenih, omejitvah paketa itd...

V tem tutorialu vas vodimo skozi stran za stranke in vidite, kaj lahko vaši kupci tam vidijo in naredijo.

## Stran za stranke (Account Page) {#the-account-page}

Stran za stranke je dostopna z klikom na **Account** v dashboardu vašega kupca.

![Menú za račun v dashboardu kupca](/img/account-page/account-menu.png)

Na sovereign tenant mrežah ohranja Ultimate Multisite v2.13.0 to izkušnjo upravljanja strank na glavni strani. Če se kupce odprejo račun, plačevanje, faktura, upravljanje strani, sprememba šablona ali mapiranje domen, ki so izvorni od sovereign tenant-a, se ta dejanje vrne na panel za stranke glavne strani, tako da ostane autoritativno vsebina o plačevah in članstvu mreže.

Ko dojdeta kupce iz sovereign tenant-a, lahko panel za stranke glavne strani vključuje povezavo za vrnitev na stran tenant-a. Ta povezava se prikazuje le ko Ultimate Multisite lahko validira cilj vrnitve kot eno od strank, kar preprečuje proizvoljne preusmeritve in hkrati ohranja delovanje tenant-a.

![Prelekva strani za stranke](/img/account-page/overview.png)

Po kliku na to bodo videli pregled svojega članstva, naslov za plačevanje, fakture, domene, omejitve strani in bodo lahko spremenili ****Site Template** (če je dovoljeno v vašeta mreži).

Lahko tudi spremenijo članstvo na drugi paket ali kupijo drugi paket ali storitev, ki jo ponujate. Pregledajmo vsako sekcijo oddiročno.

### Previdba o vašem članstvu: {#your-membership-overview}

Prvi blok odmah pod imenom spletne strani vaših strank prikazuje pregled trenutnega paketa in storitev/paketov, ki so z njim kupili. Blok prikazuje tudi številko članstva, začetno izplačeno skupno sploh, koliko je cena paketa in vsake storitve/paketa ter koliko je bilo računovanj za to članstvo. Tako lahko vidijo, ali je članstvo **Aktivo**, **Istečilo** ali **Prekinjeno**.

![Pregled članstva prikazuje paket, skupno sploh in podatke o računih](/img/account-page/membership-card.png)

Od tega bloka pod tem lahko stranke vidijo blokove **O tej strani** in **Omejitve strani**. Ti blokovi jim bodo pokazali vse omejitve, ki so priložene temu paketu: prostori na disku, objave, strani, obračne obiske itd... Te omejitve lahko konfigurirate na vsaki strani paketa v **Ultimate Multisite > Products**.

![Blokovi O tej strani in Omejitve strani prikazuje omejitve paketa](/img/account-page/site-limits.png)

Na desni strani bloka **Vaše članstvo** lahko stranke klikne na **Izmeni**. To jim bo pokazalo vse na voljo pakete in pakete/storitev. Če izbrezijo drugi paket, bodo omejitve tega paketa vplivale namesto trenutnih omejitev članstva – ne glede na to ali ga zmanjšujejo ali povečujejo.

Zdaj, če stranke izbrezijo pakete ali storitve za to trenutno članstvo – kot je več prostora na disku ali obiskov – se trenutno članstvo ne bo spremenilo, ampak bodo dodani le novi paketi.

Opazite, da ne morete dodati kupon kode na tej strani za spremembo članstva. Če stranka uporabi kupon koda pri prvi kupnji, ta kod bo tudi primjenljiv na to novo članstvo.

### Obnovitev računa: {#updating-the-billing-address}

Na strani za račun lahko kupci tudi spremenijo naslov za fakturiranje. Samo morajo klikniti na **Update** ob _Billing Address_.

![Odsek z naslovom za fakturiranje s gumbom Update](/img/account-page/billing-address.png)

Kupcu se bo pojavilo novo okno. Vse, kar mu je treba storiti, je vpisati novi naslov in klikniti na _Save Changes_.

![Obraznik za spremembo naslova za fakturiranje](/img/account-page/billing-address-form.png)

### Sprememba štemple spletnega mesta: {#changing-the-site-template}

Da bi kupci lahko spremenili svoje štemple spletnih mest, morate iti na **Ultimate Multisite > Settings > Sites** in vključiti možnost **Allow Template Switching**.

Tudi na **Ultimate Multisite > Products**, izberite svoje plane in idite na tab **Site Templates**. Preverite, da je možnost **Allow Site Templates** vključena in na **Site Template Selection Mode** je izbrana možnost **Choose Available Site Templates**.

![Tab z štemplami spletnih mest s načinom izbire štemple](/img/config/product-site-templates.png)

Boste lahko videli vse na voljo štemple spletnih mest na vašem spletnem mestu. Izberite, katere želite omogočiti in katere ne želite omogočiti kupcem, ki so naročeni pod tem planam. Opazite, da ta možnost vpliva tudi na obrazec za plačilo, zato kateri koli štempl, ki je izbran kot **Not Available**, se ne bo pojavil na strani za registracijo za ta plan.

Zdaj lahko kupci kliknejo na **Change Site Template** znotraj svoje strani za račun.

![Gumb spremembe štempla na strani za račun](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 prikazuje preizgrajen panel za spremembo štemple. Panel se začne z **current-template card**, tako da kupci lahko vidijo, kateri štempl je aktiven, preden izbrejo nadomestni.

Ostati se vedno vidno mreža na voljo templatov za spletne strani, medtem ko kupci preverjajo svoje možnosti. To jim pomaga primerjati templete, ki jih dovoljuje njihov paket, ne izgubljajo pa pri tem izbira trenutnega.

![Seznam na voljo templatov za spletno stran za paket](/img/config/site-templates-list.png)

Po odbranju tistega, ki ga želijo spremeniti, bodo vprašani, ali želite potrditi spremembo.

![Dialog za potrditev spremembe templete](/img/account-page/template-switch-confirm.png)

Po vključitvi potrditve in kliku na **Process Switch** bo nov template za spletno stran uporabljen na spletni strani vašega kupca.

Kupci lahko uporabljajo možnost **Reset current template** iz tega panela, če potrebujejo vrniti spletno stran na trenutno dodeljen template. Kot pri prehodu na drugi template, je reset templete lahko nadomestitev vsebine spletne strani, zato kupci jo morajo potrditi le ko razumejo delovanje funkcije resetiranja.

### Dodajanje prilagojenih domen: {#adding-custom-domains}

Vaši kupci bodo imeli možnost dodati prilagojen domen za ta paket na svoji strani zadeve. Da bi lahko vaši kupci uporabljali prilagojene domene, gre do **Ultimate Multisite > Settings >** **Domain Mapping**.

Vključite opcijo **Enable Domain Mapping**. To bo omogočilo vašim kupcem uporabo prilagojenih domen na mrežni ravni.

Ne pozabite tudi preveriti, ali je domain mapping vklopljen na podlagi izdelka – ker lahko omejite izdelek tako, da ne dovolite vašim kupcem uporabe prilagojenih domen.

Idi do **Ultimate Multisite > Products**. Izberite paket, ki ga želite, in idite na tab **Custom Domains**. Vključite opcijo **Allow Custom Domains**.

![Tab Custom Domains z vklopljenim preklopnikom Allow Custom Domains](/img/config/product-custom-domains.png)

To bodo vsi strankov, ki so naročeni na ta specifični paket, bodo omogočena uporaba lastnih domen. Zdaj lahko na strani za račun (Account page) vaši stranki dodajo lastno domenico, kliknjo na **Add Domain**.

![Gumb Add Domain na strani za račun](/img/account-page/add-domain-button.png)

Prva razpršena okno bo prikazala vašim strankam sporočilo, ki jih navaja, kako spremeniti svoje DNS podatke, da bi ta lastna domenica delovala v vašeta omrežje.

![Instrukcije za DNS pri dodajan lastne domenice](/img/account-page/add-domain-dns.png)

To sporočilo lahko (vi) uredite na **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Nastavitve Add New Domain Instructions v Domain Mappingu](/img/config/settings-domain-mapping.png)

Tukaj je celoten pregled nastavitv strani za mapiranje domen.

![Celotna stran nastavitev mapiranja domen](/img/config/settings-domain-mapping-full.png)

Po klikanju na **Next Step** lahko vaši stranki dodajo svoje lastno domenico in izbrezijo, ali bo ta lastna domenica bila primarna. Opazite, da lahko vaši stranki uporabljajo več kot eno lastno domenico za svoje spletne strani, zato lahko izbrezijo, katera bo primarna.

![Vnos imena lastne domenice z optajbo primarne domenice](/img/account-page/add-domain-primary.png)

Po klikanju na **Add Domain** se bo domenica dodala v račun vašega stranka. Vse, kar morajo storiti zdaj, je spremeniti DNS podatke te lastne domenice pri svojem registratorju domen.

### Sprememba gesla: {#changing-password}

V dashboardu računa lahko vaši stranki spremenijo tudi geslo, kliknjo na **Change Password**.

![Gumb Change Password na strani za račun](/img/account-page/change-password-button.png)

To se vam bo prikazana nova okno, kjer bodo vaši kupci morali vneti trenutno geslo in nato vneti novo geslo, ki jo želijo uporabljati.

![Obraznik spremembe gesla z polji za trenutno in novo geslo](/img/account-page/change-password-form.png)

### Ogrožna zona: {#danger-zone}

Imamo tudi dve možnosti, ki so prikazane v delu **Ogrožna zona**: **Obriši spletno mesto** in **Obriši račun**. Običajno sta obdelana v ogrožni zoni, ker sta te dve dejanje nezavršena. Če vaši kupci obrišče svoje spletno mesto ali račun, ga ne bodo mogli ponovno dobiti.

![Ogrožna zona z možnostmi Obriši spletno mesto in Obriši račun](/img/account-page/danger-zone.png)

Če kliknejo na enako od teh dveh možnosti, se jim bo prikazalo okno, kjer bodo morali vneti opcijo za odstranitev spletnega mesta ali računa in bodo ostrženi, da ta dejanje ni obrnljivo.

![Potrditveno okno pri brisanju spletnega mesta](/img/account-page/delete-site-confirm.png)

![Potrditveno okno pri brisanju računa](/img/account-page/delete-account-confirm.png)

Če obrišče svoje spletno mesto, račun in članstvo ostanejo nepoškodovana. Preprosto bodo izgubili vse vsebine na svojem spletnem mestu. Če obriše račun, bodo izgubljeni vsi spletni domovi, članski člani in informacije o tem računu.
