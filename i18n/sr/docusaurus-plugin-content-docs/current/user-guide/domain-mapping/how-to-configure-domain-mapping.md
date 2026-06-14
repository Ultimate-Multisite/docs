---
title: Kako konfigurirati mapiranje domena
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Kako konfigurirati mapiranje domena (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Jedna od najmoćnijih karakteristika premium mreže je mogućnost ponuditi našim klijentima priliku da dodaju vrhunski domen (top-level domain) svojim sajtovima. Na kraju, šta izgleda profesionalnije: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) ili [_**joesbikeshop.com**_](http://joesbikeshop.com)? Zato Ultimate Multisite nudi tu funkciju ugrađenu, bez potrebe za korišćenjem trećih stranih plugin-ova.

## Šta je mapiranje domena?

Kao što ime kaže, mapiranje domena je mogućnost koju Ultimate Multisite nudi da primi zahtev za prilagođen domen i poveže taj zahtev sa odgovarajućim sajtom u mreži uz pripisan taj određeni domen.

### Kako postaviti mapiranje domena na svojoj Ultimate Multisite Mreži

Mapiranje domena zahteva neku podešavanja sa vaše strane da bi radilo. Srećom, Ultimate Multisite automatski obavlja teške radove za vas tako da možete lako ispuniti uslove.

Tokom instalacije Ultimate Multisite-a, vodič će automatski kopirati i instalirati **sunrise.php** u određenu folder. **Vodič neće dozvoliti nastavak dok ovaj korak ne bude završen**.

<!-- Screenshot unavailable: Ultimate Multisite instalacioni vodič sa sunrise.php korak -->

To znači da, kada Ultimate Multisite instalacioni vodič završi podešavanje vaše mreže, možete odmah početi sa mapiranjem prilagođenog domena.

Napomena: Mapiranje domena u Ultimate Multisite nije obavezno. Imate opciju da koristite nativnu funkciju WordPress Multisite za mapiranje domena ili bilo koje drugo rešenje za mapiranje domena.

Ako vam treba da onemogućite mapiranje domena Ultimate Multisite kako biste omogućili druge rešenja za mapiranje domena, možete isključiti ovu opciju u **Ultimate Multisite > Settings > Domain Mapping**.

![Stranica podešavanja mapiranja domena koja prikazuje admin redirect, poruku o mapiranju i DNS opcije](/img/config/domain-mapping-settings.png)

Bez odmah ispod ove opcije možete videti opciju **Force Admin Redirect** (Forcing admin redirekt). Ova opcija vam omogućava da kontrolišete da li će vaši kupci moći da pristupaju svom admin dashboardu kako na sopstvenom domenu i poddomenu ili samo na jedan od njih.

Ako izaberete **Force redirect to mapped domain** (Forciranje redirekcije na mapiran domen), vaši kupci će moći da pristupe svom admin dashboardu samo na svojim sopstvenim domenima.

Opcija **Force redirect to network domain** (Forciranje redirekcije na mrežni domen) radi suprotno – vaši kupci će im biti dozvoljeno pristupiti dashboardovima samo na poddomenu, čak i ako pokušavaju da se prijave na sopstvenim domenima.

A opcija **Allow access to the admin by both mapped domain domain and network domain** (Dozvola pristupa adminu putem oba mapiranog domena i mrežnog domena) im omogućava pristup svojim admin dashboardovima kako na poddomenu tako i na sopstvenom domenu.

![Spušteni padac Admin Redirect koji prikazuje tri opcije redirekcije](/img/config/domain-mapping-redirect-options.png)

Postoje dva načina za mapiranje sopstvenog domena. Prvi je mapiranje imena domena sa vaše mrežne admin dashboard-a kao super administrator, a drugi je putem admin dashboard-a podsubdomene na stranici naloga (account page).

Ali pre nego što počnete da mapirate sopstveni domen na jednu od podsubdomena u vašoj mreži, morate osigurati da su **DNS podešavanja** imena domena ispravno konfigurisan.

### Osiguravanje ispravne konfiguracije DNS podešavanja domena

Da bi mapiranje radilo ispravno, morate osigurati da domen koji planirate da mapirate pokazuje na IP adresu vaše mreže. Napomena: trebate IP adresu Mreže – IP adresu domena gde je instaliran Ultimate Multisite – a ne IP adresu prilagođenog domena koji želite da mapirate. Za pretragu IP adrese specifičnog domena, predlažemo da posetite [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), na primer.

Da biste ispravno mapirali domen, morate dodati **A RECORD** u vašu DNS konfiguraciju koji pokazuje na tu **IP adresu**. Upravljanje DNS-om se veoma razlikuje između različitih registratora domena, ali postoji mnogo tutoriala na internetu koji to pokrivaju ako pretražujete " _Creating A Record on XXXX_ ", gde je XXXX vaš registrator domena (npr. " _Creating A Record on_ _GoDaddy_ ").

Ako imate poteškoća u postizanju toga, **kontaktirajte podršku svog registratora domena** i oni će vam pomoći sa ovom delom.

Ako planirate da dozvolite klijentima da mapiraju sopstvene domene, oni će morati sami uraditi posao na ovoj delu. Ukažite im se na sistem podrške njihovog registratora ako ne mogu da kreiraju A Record.

### Mapiranje prilagođenog domena kao Super Admin

Kada ste prijavljeni kao super admin na svojoj mreži, možete lako dodavati i upravljati prilagođenim nazivima domena idući pod **Ultimate Multisite > Domains**.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Na ovoj stranici možete kliknuti na dugme **Add Domain** (Dodaj domen) na vrhu, što će otvoriti prozor za unos gde možete uneti i popuniti polja za **custom domain name** (prilagođeni naziv domena), **the subsite** (podstranu) kojoj želite primeniti prilagođeni naziv domena, kao i odlučiti da li želite postaviti ga kao **primary domain** (primarni domen) ili ne (napomena: možete mapirati **više imena domena na jednu podstranu**).

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

Nakon što unesete sve informacije, možete kliknuti na dugme **Add Existing Domain** (Dodaj postojeći domen) na dnu.

Ovo započinje proces verifikacije i preuzimanja DNS informacija za prilagođeni domen. Takođe ćete videti log u donjem delu stranice da pratite proces koji se odvija. Ovaj proces može potrajati nekoliko minuta.

Ultimate Multisite v2.13.0 automatski kreira interni zapis domena kada se na host-u kreira nova podstrana koja treba da se tretira kao domen po podstrani (per-site domain). Ako je host mrežni primarni domen, ili jedan od osnovnih domena za formular za plaćanje podešenih u polju **Site URL** (Adresa sajta), automatski mapirani zapis domena se preskače kako bi zajedničko osnovno ime ostalo dostupno svakoj podstrani koja ga koristi.

**Stage** (Faza) ili status će se promeniti sa **Checking DNS** (Provera DNS-a) u **Ready** (Spreman) ako je sve pravilno podešeno.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Ako kliknete na ime domena, videćete neke opcije unutar njega. Hajde da brzo pogledamo:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Фаза:** Овој етап је стање домена у систему. Када први пут додате домен, вероватно ће бити на фази **Провера DNS-а (Checking DNS)**. Процес ће проверити уводне записи за DNS и потврди да су исправни. Затим, домен ће прећи на фазу **Провере SSL-а (Checking SSL)**. Ultimate Multisite ће проверити да ли домен има SSL сертификат или не и класификовати ваш домен као **Готов (Ready)** или **Готов (без SSL-а) (Ready (without SSL))**.

**Сajt:** Субдомејн који је повезан са овим доменом. Мапирани домен ће приказивати садржај овог конкретно сајта.

**Активни (Active):** Можете да укључите или искључите овај опција да бисте активирали или деактивирали домен.

**Је ли основна адреса (Is Primary Domain?):** Ваша клијенти могу имати више од једне мапиране адресе за сваки сајт. Користите ову опцију да изберете да ли је ова адреса основна за конкретни сајт.

**Је ли сигуран (Is Secure?):** Иако Ultimate Multisite проверя да ли домен има SSL сертификат или не пре него што га уклони, можете ручно да изаберете да учитате домен са SSL сертификатом или без њега. Обратите на себе да ако веб страница нема SSL сертификат а покушате принудити учитавање са SSL-ом, може добитилите грешке.

### Мапирање надворешњих имена као подсајта за кориснике

Администратори подсајта такође могу мапирати надворешња имена (custom domain names) из своје административне панели подсајта.

Прво, морате проверити да је ова опција уклоњена под подешавањима **Мапирања домена (Domain mapping)**. Вигледа слика на доле.

<!-- Screenshot unavailable: Подешавања мапирања домена који омогућавају корисници подсајта да мапирају домене кроз прекида за управљање клијентским DNS-ом -->

Можете такође подесити или конфигуришети ову опцију под нивоом **Плана (Plan)** или опцијама производа на **Ultimate Multisite > Products**.

![Део надворешњих домена на страници уређивања производа](/img/config/product-custom-domains.png)

Kada bilo koja od tih opcija bude uključena i korisniku subsite-a dozvoljeno da mapira prilagođene domene, taj korisnik će videti metabox pod stranicom **Account** nazvan **Domains**.

<!-- Screenshot unavailable: Metabox za domene na stranici Account subsite-a sa dugmetom Dodaj domen -->

Korisnik može kliknuti na dugme **Add Domain** (Dodaj domen), što će otvoriti modalno prozor sa nekim uputstvima.

<!-- Screenshot unavailable: Modal za dodavanje domena koji prikazuje uputstva za DNS A-record za korisnike subsite-a -->

Zatim može kliknuti na **Next Step** (Slede korak) i nastaviti sa dodavanjem prilagođene domene. Takođe može da izabere da li će to biti primarna domena ili ne.

<!-- Screenshot unavailable: Form za dodavanje domena sa poljem za prilagođenu domenu i prekidač za primarnu domenu -->

<!-- Screenshot unavailable: Korak potvrde dodavanja domena koji pokreće verifikaciju DNS-a -->

Klikom na **Add Domain** (Dodaj domen) započinje proces verifikacije i preuzimanja informacija o DNS-u prilagođene domene.

### O Domenskoj sinhronizaciji (Domain Syncing)

Domenska sinhronizacija je proces u kojem Ultimate Multisite dodaje prilagođenu domenu u vaš nalog za hosting kao dodatni domen **da bi mapiranje domena moglo da radi**.

Domenska sinhronizacija se automatski dešava ako vaš provajder hostovanja ima integraciju sa značajkom mapiranja domena Ultimate Multisite. Trenutno, ovi provajderi hostovanja su _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ i _Cpanel._

Kada je aktivirana integracija sa provajderom hostovanja, Ultimate Multisite takođe može da doda zadatak za kreiranje DNS-a ili poddomena sa strane provajdera za novopokretne site-ove. Ako nijedan provajder ne sluša taj zadatak, pozadinski posao se preskače kako bi se izbegli unosi u red (no-op queue entries). Provera DNS-a i SSL-a za mapirane domene nastavlja da radi kroz normalni proces faze domena.

Morate da aktivirate ovu integraciju u podešavanjima Ultimate Multisite pod karticom **Integration**.

![Tab Integrations u podešavanjima Ultimate Multisite koji prikazuje pružao usluge hostingu](/img/config/integrations-tab.png)

![Linkovi za konfiguraciju pružalaca usluga hostinga na kartici Integrations](https://example.com/img/config/integrations-providers.png)

_Napomena: ako vaš hosting provajder nije jedan od navedenih, **morate ručno sinhronizovati ili dodati naziv domena** u svoj račun za hosting._
