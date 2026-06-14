---
title: Kako konfigurirati mapiranje domena
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Kako konfigurirati mapiranje domena (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Jedna od najmoćnijih značajki premium mreže je mogućnost ponuditi našim klijentima priliku da dodaju vrhunski domenu (top-level domain) svojim web stranicama. Na kraju, što izgleda profesionalnije: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) ili [_**joesbikeshop.com**_](http://joesbikeshop.com)? Zato Ultimate Multisite nudi tu značajku ugrađenu, bez potrebe za korištenjem trećih stranih pluginova.

## Što je mapiranje domena?

Kao što ime kaže, mapiranje domena je mogućnost koju Ultimate Multisite nudi da prihvati zahtjev za prilagođenim domenom i poveže taj zahtjev s odgovarajućom stranicom u mreži uz pripisan taj određeni domen.

### Kako postaviti mapiranje domena na svojoj Ultimate Multisite Mreži

Mapiranje domena zahtijeva neke postavke sa vaše strane da bi funkcioniralo. Srećom, Ultimate Multisite automatski obavlja teške radove za vas tako da možete lako ispuniti zahtjeve.

Tijekom instalacije Ultimate Multisite, wizard će automatski kopirati i instalirati **sunrise.php** u odabrani folder. **Wizard neće dozvoliti nastavak dok se ovaj korak ne završi**.

<!-- Screenshot unavailable: Ultimate Multisite instalacijski wizard s sunrise.php korak -->

Ovo znači da, nakon što je wizard za instalaciju Ultimate Multisite završio postavljanje vaše mreže, možete odmah početi mapirati prilagođeni domen.

Napomena: Mapiranje domena u Ultimate Multisite nije obavezno. Imate opciju koristiti nativnu funkciju mapiranja domena WordPress Multisite ili bilo koje drugo rješenje za mapiranje domena.

Ako trebate isključiti mapiranje domena Ultimate Multisite kako biste omogućili druge rješenja za mapiranje domena, možete isključiti tu značajku pod **Ultimate Multisite > Settings > Domain Mapping**.

![Stranica postavki mapiranja domena koja prikazuje admin redirekt, poruku o mapiranju i DNS opcije](/img/config/domain-mapping-settings.png)

Bez odmah ispod ove opcije možete vidjeti opciju **Force Admin Redirect** (Naoručite prisilni redirektiranje admina). Ova opcija vam omogućuje da kontrolirate je li vaši kupci u mogućnosti pristupiti svom admin dashboardu i na vlastitom domeni ili poddomenu, ili samo na jednu od njih.

Ako odaberete **Force redirect to mapped domain** (Prisilno redirektiranje na mapiranu domenu), vaši kupci će moći pristupiti svom admin dashboardu isključivo na svojim vlastitim domenama.

Opcija **Force redirect to network domain** (Prisilno redirektiranje na mrežnom domenu) će raditi potpuno suprotno – vaši kupci im neće biti dozvoljeni pristup dashboardovima samo na poddomeni, čak i ako pokušavaju se prijaviti na vlastitim domenama.

A opcija **Allow access to the admin by both mapped domain domain and network domain** (Dozvoli pristup adminu putem oba mapirana domena i mrežnog domena) im omogućuje da pristupe svojim admin dashboardovima kako na poddomeni, tako i na vlastitom domenu.

![Dropdown za redirektiranje admina proširen prikazuje tri opcije redirektiranja](/img/config/domain-mapping-redirect-options.png)

Postoje dva načina za mapiranje vlastitog domena. Prvi je mapiranje imena domena s vaše mrežne admin dashboarde kao super admina, a drugi putem admin dashboarda podpoddomene pod stranicom računa.

Ali prije nego što počnete mapirati vlastiti domen na jednu od podstranica u vašoj mreži, trebate osigurati da su **DNS postavke** imena domena pravilno konfigurirane.

### Osiguranje ispravne konfiguracije DNS postavki domena

Da bi mapiranje radilo ispravno, morate osigurati da je domen koji planirate mapirati usmjeren na IP adresu vaše mreže. Napomena: trebate IP adresu mreže – IP adresu domena na kojem Ultimate Multisite instalirate – a ne IP adresu prilagođenog domena koji želite mapirati. Za pretragu IP adrese specifičnog domena, predlažemo da odete na [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), na primjer.

Da biste ispravno mapirali domen, trebate dodati **A RECORD** u svoju DNS konfiguraciju koji pokazuje na tu **IP adresu**. Upravljanje DNS-om se jako razlikuje ovisno o registratorima domena, ali postoji mnogo tutoriala online koji to pokrivaju ako pretražujete " _Creating A Record on XXXX_ ", gdje je XXXX vaš registrator domena (npr. " _Creating A Record on_ _GoDaddy_ ").

Ako imate poteškoća s postizanjem toga, **kontaktirajte podršku svom registratoru domena** i oni će vam pomoći s tom dijelom.

Ako planirate dopustiti svojim klijentima da mapiraju vlastite domene, oni će morati sami obaviti taj dio posla. Uvjerite ih da se obrate podršci svog registratora ako ne uspiju kreirati A Record.

### Mapiranje prilagođenog domena kao Super Admina

Kada ste prijavljeni kao super admin na svojoj mreži, možete lako dodavati i upravljati prilagođenim nazivima domena idući pod **Ultimate Multisite > Domains**.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Na ovoj stranici možete kliknuti na gumb **Dodaj domen** na vrhu, što će otvoriti prozor za unos gdje možete postaviti i popuniti polja za **prilagođeni naziv domena**, **subdomen** kojem želite primijeniti prilagođeni naziv domena, te odlučiti hoćete li ga postaviti kao **glavni naziv domena** ili ne (napomena: možete mapirati **više naziv domena na jedan subdomen**).

![Modal za dodavanje domena s nazivom domena, odabranjem sajta i prekidačem glavnog domena](/img/admin/domain-add-modal.png)

Nakon što unesete sve informacije, možete kliknuti na gumb **Dodaj postojeći domen** u donjem dijelu.

Ovo započinje proces provjere i dohvaćanja DNS informacija za prilagođeni domen. Također ćete vidjeti log u donjem dijelu stranice kako biste pratili proces koji se odvija. Ovaj proces može potrajati nekoliko minuta.

Ultimate Multisite v2.13.0 automatski kreira interni zapis domena kada se na hostu stvori novi sajt koji treba tretirati kao domen po sajtu. Ako je host primarni domen mreže ili jedan od osnovnih domena za formular za plaćanje konfiguriranih u polju **Site URL**, automatski mapirani zapis domena se preskoči kako bi zajednički osnovni domen ostao dostupan svakom sajtu koji ga koristi.

**Stanje** ili status će se promijeniti s **Provjera DNS-a** na **Spreman** ako je sve pravilno postavljeno.

<!-- Screenshot unavailable: Red domena prikazujući fazu Provjere DNS-a u listi domena -->

<!-- Screenshot unavailable: Red domena prikazujući fazu Spreman s indikatorom zelenog statusa -->

Ako kliknete na naziv domena, moći ćete vidjeti neke opcije unutar njega. Hajde da brzo pogledamo:

![Detaljna stranica domena s prekidačima za fazu, sajt, aktivno, primarno i SSL](/img/admin/domain-edit.png)

**Faza:** Ovo je faza na kojoj se nalazi vaš domen. Kada prvi put dodate domen, vjerojatno će biti na fazi **Provjera DNS-a**. Proces provjerava unose za DNS i potvrđuje da su ispravni. Nakon toga, domen će biti postavljen na fazu **Provjera SSL-a**. Ultimate Multisite će provjeriti ima li vaš domen SSL certifikat ili ne i kategorizirati vaš domen kao **Spreman** ili **Spreman (bez SSL-a)**.

**Site:** Poddomen koji je povezan s ovim domenom. Mapirani domen će prikazivati sadržaj ovog specifičnog sajta.

**Aktivan:** Možete uključiti ili isključiti ovu opciju kako biste aktivirali ili deaktivirali domen.

**Je li primarni domen?:** Vaši kupci mogu imati više mapiranih domena za svaki sajt. Koristite ovu opciju da odaberete je li ovo primarni domen za taj specifični sajt.

**Je li siguran?:** Iako Ultimate Multisite provjerava ima li domen SSL certifikat ili ne prije omogućavanja, možete ručno odabrati učitavanje domena s SSL certifikatom ili bez njega. Napomena: ako web stranica nema SSL certifikat i pokušate prisiliti njegovo učitavanje s SSL-om, to može dovesti do grešaka.

### Mapiranje korisničkog domena kao podsajta

Administrators podsajta također mogu mapirati korisni domene iz svoje admin ploče podsajta.

Prvo, morate osigurati da je ova opcija omogućena u postavkama **Mapiranja domena**. Pogledajte sliku ispod.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Možete postaviti ili konfigurirati ovu opciju na razini **Plan** ili opcije proizvoda u **Ultimate Multisite > Products**.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

Kada se neka od ovih opcija aktivira i korisniku subsitea dozvoljen je mapirati vlastite domene (custom domain names), taj korisnik će vidjeti metabox pod stranicom **Account** pod nazivom **Domains**.

<!-- Screenshot unavailable: Metabox za domene na stranici Account subsitea s gumbom Dodaj domen -->

Korisnik može kliknuti na gumb **Add Domain**, a to će otvoriti modalno prozorčić s nekim uputama.

<!-- Screenshot unavailable: Modal za dodavanje domena prikazuje upute za DNS A-record korisnicima subsitea -->

Zatim može kliknuti na **Next Step** i nastaviti s dodavanjem vlastite domene. Također može odabrati je li to primarna domena ili ne.

<!-- Screenshot unavailable: Obrazac za dodavanje domena s poljem za ime vlastite domene i prekidač za primarnu domenu -->

<!-- Screenshot unavailable: Korak potvrde dodavanja domena koji pokreće provjeru DNS-a -->

Klikom na **Add Domain** započinje proces provjere i preuzimanja informacija o DNS-u vlastite domene.

### O Domenskoj sinhronizaciji (Domain Syncing)

Domenska sinhronizacija je proces u kojem Ultimate Multisite dodaje ime vlastite domene vašem hosting računu kao dodatnu domenu **da bi mapiranje domena moglo raditi**.

Domenska sinhronizacija se automatski događa ako vaš pružatelj usluga hostinga ima integraciju s značajkom mapiranja domena Ultimate Multisite. Trenutno, ovi pružatelji usluga su _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways_ i _Cpanel_.

Kada je aktivirana integracija s pružateljem usluga hostinga, Ultimate Multisite može također staviti u red zadatak za kreiranje DNS-a ili poddomena na strani pružatelja usluge za novoinstalirane siteove. Ako nijedan integrator ne sluša taj zadatak, pozadinski posao se preskače kako bi se izbjeglo pojavljivanje praznih unosa u red (no-op queue entries). Provjere DNS-a i SSL-a za mapirane domene nastavljaju rad kroz normalni proces faza domena.

Morate ćete aktivirati ovu integraciju u podešavanjima Ultimate Multisite pod karticom **Integration**.

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Napomena: ako vaš hosting provajder nije jedan od navedenih provajdera, **morat ćete ručno sinkronizirati ili dodati naziv domena** u svoj hosting račun._
