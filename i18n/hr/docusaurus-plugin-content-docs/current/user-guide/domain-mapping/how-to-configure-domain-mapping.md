---
title: Kako konfigurirati mapiranje domena
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Kako konfigurirati mapiranje domena (v2) {#how-to-configure-domain-mapping-v2}

_**VAŽNA NAPOMENA: Ovaj se članak odnosi na Ultimate Multisite verziju 2.x.**_

Jedna od najmoćnijih značajki premium mreže jest mogućnost da našim klijentima ponudimo priliku da povežu domenu najviše razine sa svojim web-mjestima. Uostalom, što izgleda profesionalnije: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) ili [_**joesbikeshop.com**_](http://joesbikeshop.com)? Zato Ultimate Multisite nudi tu značajku ugrađenu, bez potrebe za korištenjem pluginova trećih strana.

## Što je mapiranje domena? {#whats-domain-mapping}

Kao što naziv sugerira, mapiranje domena je mogućnost koju nudi Ultimate Multisite da primi zahtjev za prilagođenu domenu i mapira taj zahtjev na odgovarajuće web-mjesto u mreži s tom određenom povezanom domenom.

### Kako postaviti mapiranje domena na svojoj Ultimate Multisite mreži {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Mapiranje domena zahtijeva određeno postavljanje s vaše strane kako bi radilo. Srećom, Ultimate Multisite automatizira težak posao umjesto vas kako biste lako mogli ispuniti zahtjeve.

Tijekom instalacije Ultimate Multisite, čarobnjak će automatski kopirati i instalirati **sunrise.php** u određenu mapu. **Čarobnjak vam neće dopustiti nastavak dok se ovaj korak ne dovrši**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

To znači da, nakon što čarobnjak za instalaciju Ultimate Multisite dovrši postavljanje vaše mreže, možete odmah početi mapirati prilagođenu domenu.

Imajte na umu da mapiranje domena u Ultimate Multisite nije obavezno. Imate mogućnost koristiti izvornu funkciju mapiranja domena WordPress Multisitea ili bilo koje drugo rješenje za mapiranje domena.

Ako trebate onemogućiti mapiranje domena Ultimate Multisite kako biste omogućili korištenje drugih rješenja za mapiranje domena, ovu značajku možete onemogućiti pod **Ultimate Multisite > Settings > Domain Mapping**.

![Stranica postavki mapiranja domena koja prikazuje admin preusmjeravanje, poruku mapiranja i DNS opcije](/img/config/domain-mapping-settings.png)

Odmah ispod ove opcije možete vidjeti i opciju **Force Admin Redirect**. Ova opcija omogućuje vam kontrolu nad time hoće li vaši korisnici moći pristupiti svom admin dashboardu i na svojoj prilagođenoj domeni i na poddomeni ili samo na jednoj od njih.

Ako odaberete **Force redirect to mapped domain** , vaši će korisnici moći pristupiti svom admin dashboardu samo na svojim prilagođenim domenama.

Opcija **Force redirect to** **network domain** učinit će upravo suprotno - vašim će korisnicima biti dopušten pristup njihovim dashboardima samo na njihovoj poddomeni, čak i ako se pokušaju prijaviti na svojim prilagođenim domenama.

A opcija **Allow access to the admin by both mapped domain domain and network domain** omogućuje im pristup njihovim admin dashboardima i na poddomeni i na prilagođenoj domeni.

![Prošireni padajući izbornik Admin Redirect koji prikazuje tri opcije preusmjeravanja](/img/config/domain-mapping-redirect-options.png)

Postoje dva načina za mapiranje prilagođene domene. Prvi je mapiranjem naziva domene iz admin dashboarda vaše mreže kao super admin, a drugi je putem admin dashboarda podmjesta na stranici Account.

No prije nego što počnete mapirati prilagođenu domenu na jedno od podmjesta u svojoj mreži, morat ćete provjeriti jesu li **DNS postavke** naziva domene pravilno konfigurirane.

###

### Provjera jesu li DNS postavke domene pravilno konfigurirane {#making-sure-the-domain-dns-settings-are-properly-configured}

Kako bi mapiranje radilo, morate provjeriti pokazuje li domena koju planirate mapirati na IP adresu vaše mreže. Imajte na umu da vam je potrebna IP adresa mreže - IP adresa domene na kojoj je instaliran Ultimate Multisite - a ne IP adresa prilagođene domene koju želite mapirati. Za traženje IP adrese određene domene predlažemo, na primjer, odlazak na [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html).

Da biste ispravno mapirali domenu, morate dodati **A RECORD** u svoju **DNS** konfiguraciju koji pokazuje na tu **IP adresu**. Upravljanje DNS-om uvelike se razlikuje među različitim registrarima domena, ali na internetu postoji mnogo vodiča koji to pokrivaju ako potražite " _Creating A Record on XXXX_ " gdje je XXXX vaš registrar domene (npr.: " _Creating A Record on_ _GoDaddy_ ").

Ako imate problema s time da ovo proradi, **kontaktirajte podršku svog registrara domene** i oni će vam moći pomoći s ovim dijelom.

Ako planirate dopustiti svojim klijentima da mapiraju vlastite domene, oni će morati sami obaviti posao u ovom dijelu. Uputite ih na sustav podrške njihovog registrara ako ne mogu izraditi A Record.

### Mapiranje prilagođenog naziva domene kao Super Admin {#mapping-custom-domain-name-as-super-admin}

Kada ste prijavljeni kao super admin na svojoj mreži, možete jednostavno dodavati i upravljati prilagođenim nazivima domena odlaskom pod **Ultimate Multisite > Domains**.

![Stranica popisa domena u Ultimate Multisite](/img/admin/domains-list.png)

Na ovoj stranici možete kliknuti gumb **Add Domain** na vrhu i to će otvoriti modalni prozor u kojem možete postaviti i ispuniti **prilagođeni naziv domene** , **podmjesto** na koje želite primijeniti prilagođeni naziv domene te odlučiti želite li ga postaviti kao naziv **primarne domene** ili ne (imajte na umu da možete mapirati **više naziva domena na jedno podmjesto**).

![Modal Add Domain s nazivom domene, biračem web-mjesta i preklopnikom primarne domene](/img/admin/domain-add-modal.png)

Nakon što unesete sve informacije, možete kliknuti gumb **Add Existing Domain** na dnu.

Time će započeti postupak provjere i dohvaćanja DNS informacija prilagođene domene. Također ćete vidjeti zapisnik na dnu stranice kako biste mogli pratiti proces kroz koji prolazi. Dovršetak ovog postupka može potrajati nekoliko minuta.

Ultimate Multisite v2.13.0 također automatski stvara interni zapis domene kada se novo web-mjesto izradi na hostu koji se treba tretirati kao domena po web-mjestu. Ako je host primarna domena mreže ili jedna od zajedničkih osnovnih domena obrasca za naplatu konfiguriranih u polju **URL web-mjesta**, automatski zapis mapirane domene preskače se kako bi ta zajednička osnovna domena ostala dostupna svakom web-mjestu koje je koristi.

Kada korisnik registrira novu domenu putem Domain Seller v1.3.0 ili novijeg, Ultimate Multisite prema zadanim postavkama automatski mapira registriranu domenu na korisnikovo mrežno web-mjesto. Administratori više ne moraju dodavati zaseban zapis mapirane domene nakon uspješne registracije, osim ako žele prilagoditi opcije kao što su oznaka primarne domene, stanje aktivacije ili rukovanje SSL-om.

**Faza** ili status trebali bi se promijeniti iz **Provjera DNS-a** u **Spremno** ako je sve ispravno postavljeno.

<!-- Snimka zaslona nije dostupna: Redak domene koji prikazuje fazu Provjera DNS-a na popisu domena -->

<!-- Snimka zaslona nije dostupna: Redak domene koji prikazuje fazu Spremno sa zelenim indikatorom statusa -->

Ako kliknete na naziv domene, moći ćete vidjeti neke opcije unutar nje. Pogledajmo ih ukratko:

![Stranica pojedinosti domene s prekidačima za fazu, web-mjesto, aktivnost, primarnu domenu i SSL](/img/admin/domain-edit.png)

**Faza:** Ovo je faza u kojoj se domena nalazi. Kada prvi put dodate domenu, vjerojatno će biti u fazi **Provjera DNS-a**. Proces će provjeriti DNS zapise i potvrditi da su ispravni. Zatim će domena biti postavljena u fazu **Provjera SSL-a**. Ultimate Multisite provjerit će ima li domena SSL ili ne te će vašu domenu kategorizirati kao **Spremno** ili **Spremno (bez SSL-a)**.

**Web-mjesto:** Poddomena povezana s ovom domenom. Mapirana domena prikazivat će sadržaj tog određenog web-mjesta.

**Aktivno:** Ovu opciju možete uključiti ili isključiti kako biste aktivirali ili deaktivirali domenu.

**Je li primarna domena?:** Vaši korisnici mogu imati više od jedne mapirane domene za svako web-mjesto. Upotrijebite ovu opciju kako biste odabrali je li ovo primarna domena za određeno web-mjesto.

**Je li sigurno?:** Iako Ultimate Multisite provjerava ima li domena SSL certifikat ili ne prije nego što je omogući, možete ručno odabrati učitavanje domene sa SSL certifikatom ili bez njega. Imajte na umu da, ako web-stranica nema SSL certifikat, a pokušate je prisilno učitati sa SSL-om, može vam prikazati pogreške.

### Mapiranje prilagođenog naziva domene kao korisnik podweb-mjesta {#mapping-custom-domain-name-as-subsite-user}

Administratori podweb-mjesta također mogu mapirati prilagođene nazive domena iz svoje administratorske nadzorne ploče podweb-mjesta.

Najprije morate provjeriti jeste li omogućili ovu opciju u postavkama **Mapiranje domena**. Pogledajte snimku zaslona u nastavku.

<!-- Snimka zaslona nije dostupna: Postavke mapiranja domena koje korisnicima podweb-mjesta omogućuju mapiranje domena putem prekidača Upravljanje korisničkim DNS-om -->

Ovu opciju također možete postaviti ili konfigurirati na razini **Plana** ili u opcijama proizvoda na **Ultimate Multisite > Proizvodi**.

![Odjeljak Prilagođene domene na stranici za uređivanje proizvoda](/img/config/product-custom-domains.png)

Kada je bilo koja od tih opcija omogućena i korisniku podweb-mjesta dopušteno je mapirati prilagođene nazive domena, korisnik podweb-mjesta trebao bi vidjeti metabox na stranici **Account** pod nazivom **Domene**.

<!-- Snimka zaslona nije dostupna: Metabox Domene na stranici Account podweb-mjesta s gumbom Dodaj domenu -->

Korisnik može kliknuti gumb **Dodaj domenu** i otvorit će se modalni prozor s nekim uputama.

<!-- Snimka zaslona nije dostupna: Modal Dodaj domenu koji prikazuje upute za DNS A-zapis za korisnike podweb-mjesta -->

Korisnik zatim može kliknuti **Sljedeći korak** i nastaviti s dodavanjem prilagođenog naziva domene. Također može odabrati hoće li to biti primarna domena ili ne.

<!-- Snimka zaslona nije dostupna: Obrazac Dodaj domenu s poljem za prilagođeni naziv domene i prekidačem za primarnu domenu -->

<!-- Snimka zaslona nije dostupna: Korak potvrde Dodaj domenu koji pokreće DNS provjeru -->

Klik na **Dodaj domenu** pokrenut će proces provjere i dohvaćanja DNS informacija prilagođene domene.

### O sinkronizaciji domena {#about-domain-syncing}

Sinkronizacija domena proces je u kojem Ultimate Multisite dodaje prilagođeni naziv domene na vaš hosting račun kao dodatnu domenu **kako bi mapiranje domene funkcioniralo**.

Sinkronizacija domena događa se automatski ako vaš pružatelj hostinga ima integraciju sa značajkom mapiranja domena Ultimate Multisite. Trenutačno su ti pružatelji hostinga _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ i _Cpanel._

Kada je integracija s pružateljem hostinga aktivna, Ultimate Multisite također može staviti u red zadatak izrade DNS-a ili poddomene na strani pružatelja za novostvorena web-mjesta. Ako nijedna integracija ne sluša taj zadatak, pozadinski posao preskače se kako bi se izbjegli unosi u red bez učinka. DNS i SSL provjere za mapirane domene nastavljaju se izvoditi kroz uobičajeni proces faza domene.

Morat ćete aktivirati ovu integraciju u postavkama Ultimate Multisite na kartici **Integracija**.

![Kartica Integracije u postavkama Ultimate Multisite koja prikazuje pružatelje hostinga](/img/config/integrations-tab.png)

<!-- Snimka zaslona nije dostupna: Poveznice Konfiguracija pružatelja hostinga na kartici postavki Integracije -->

_Imajte na umu da, ako vaš pružatelj hostinga nije jedan od gore navedenih pružatelja,**morat ćete ručno sinkronizirati ili dodati naziv domene** na svoj hosting račun._
