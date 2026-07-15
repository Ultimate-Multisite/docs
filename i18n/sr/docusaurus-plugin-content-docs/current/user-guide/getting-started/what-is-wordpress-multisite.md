---
title: Šta je WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Šta je WordPress Multisite?

Unutar svog jezgra, WordPress nudi funkciju zvanu „Multisite“ koja se vrši na osnovu početka WordPressa 3.0 u 2010. godini. Od tada je dobio niz revizija koje su namijenjene dodavanju novih značajki i usavršavanju sigurnosti.

U suštini, WordPress multisite se može zamisliti ovako: Univerzitet održava jednu instalaciju WordPressa, ali svaki fakultet održava svoj vlastiti WordPress sajt.

##

## Šta je tačno WordPress Multisite? {#what-exactly-is-wordpress-multisite}

Multisite je značaj WordPress-a koji omogućava više sajtova da dijele jednu instalaciju WordPressa. Kada se multisite aktivira, originalni WordPress sajt se pretvara u podršku onome što se obično naziva **mreža sajtova**.

Ova mreža dijeli fajl sistem (što znači da su **pluginovi i teme takođe zajednički**), bazu podataka, jezgra WordPress fajlova, wp-config.php itd.

To znači da ažuriranja WordPressa, tema i pluginova potrebno je izvršiti samo jednom za sve sajtove u vašoj mreži jer oni dijele iste fajlove na fajl sistemu.

Ova činjenica je jedna od glavnih prednosti multisite, jer vam omogućava da povećate broj sajtova koje upravljate dok zadržavate isti broj zadataka koje morate obaviti za održavanje sajtova vaših klijenata.

##

## Poddomena ili poddirektorijum? {#subdomain-or-subdirectory}

Postoje dva načina rada WordPress multisite – i moraćete da izaberete jedan kada pretvarate svoju običnu instalaciju WordPressa u multisite instalaciju:

**Poddomena:** npr.: [site.domain.com](http://site.domain.com)

...ili

**Poddirektorijum:** npr.: [yourdomain.com/site](http://yourdomain.com/site)

Svaki način ima prednosti i mane koje treba uzeti u obzir kada donosite ovu odluku.

Jedna stvar koju je važno napomenuti: kada donesete odluku, menjanje mreže sa poddirektorijuma na poddomen ili obrnuto je zaista teško – pogotovo ako već imate nekoliko sajta kreiranih.

Pre donošenja te odluke, evo nekoliko stvari koje treba imati na umu:

**Mod Sa poddirektorijumima (Subdirectory Mode)** je najlakši način u smislu podešavanja i održavanja. To se dešava jer su svi sajtovi samo putanje vezane za glavni domen (npr. [vašdomen.com/podsaite](http://vašdomen.com/podsaite)). Kao rezultat, potrebno je **jedan SSL sertifikat** za glavni domen i on će pokriti celu mrežu.

Istovremeno, zbog svoje URL strukture, Google i većina drugih pretraživačkih motora će sve podsaite na vašoj mreži zasnovanoj na poddirektorijumima smatrati jednim ogromnim sajtom. Kao rezultat toga, sadržaj koji dodaju krajnji korisnici na podsaite može uticati na SEO performanse vaše odredišne stranice, na primer. Nivo uticaja je predmet rasprave i postoji argument da bi takav raspored mogao biti čak i koristan za SEO performanse.

**Mod Sa poddomenima (Subdomain Mode)** je malo složeniji za podešavanje, ali njegova URL struktura (npr. [podsaite.vašmreža.com](http://podsaite.vašmreža.com)) se generalno smatra "profesionalnijom".

Jedna od glavnih poteškoća pri podešavanju moda poddomena je SSL pokrivenost (HTTPS) za celu mrežu. To je zato što pregledači smatraju poddomene izolovanima entitetima. Kao rezultat, zaručite potrebu za različitim sertifikatom za svaki poddomenu na vašoj mreži, ili poseban tip sertifikata zvan **Wildcard SSL sertifikat**. U poslednjih nekoliko godina, hosting provajderi i paneli unapređuju svoje mogućnosti u vezi sa dodeljivanjem SSL-a, a neki nude wildcard sertifikate samo klikom dugmeta, zatvarajući jaz između ova dva moda po pitanju složenosti podešavanja.

Naspram poddirektorog moda, poddomene na mreži zasnovanoj na poddomenima se smatraju od strane search motora kao zasebnim veb sajtovima, što znači da sadržaj prisutan na jednom poddomenu nikako ne utiče na SEO performanse drugih poddomena.

## Super Admin {#the-super-admin}

Instalacije WordPress-a za jedan sajt omogućavaju dodavanje neograničenog broja korisnika i dodeljivanje tim korisnicima različitih uloga i dozvola.

U WordPress Multisite, otključan je novi tip korisnika: **super admin** – i nova admin panel: **network admin panel**.

Kao što ime kaže, super admin ima supermoći nad mrežom, sposoban da upravlja svim poddomenama, pluginovima, temama, svime!

Čim pretvorite svoju instalaciju WordPress-a za jedan sajt u multisite, originalni admin jednog sajta će automatski biti unapređen na super admin.

Pluginovi i teme se mogu instalirati ili demontirati samo putem network admin panel-a od strane super admina. Admini poddomena zatim mogu da odluče da aktiviraju ili deaktiviraju te pluginove ili teme, osim ako super admin mreže ne aktivira neki plugin, što ga prisiljava da bude aktivan za sve poddomene uvek.

_Napomena: kao što vidite, pozivanjem nekoga u vašu mrežu i dodeljivanjem mu statusa super admina daje tom korisniku potpunu kontrolu nad vašom mrežom. Kao primer, drugi super admini mogu čak ukloniti vaš status super admina, efektivno zaključavajući vas iz administrator panela vaše sopstvene mreže. Da bismo omogućili Ultimate Multisite klijentima da imaju detaljnu kontrolu nad onim šta dodatni super admini mogu da rade, imamo dodatak pod nazivom Support Agents. Ovaj dodatak vam omogućava da kreirate još jednu vrstu korisnika – agenta – sa samo dozvolama koje će mu biti potrebne za obavljanje zadataka na mreži._

## Šta je zajedničko između subsajtova i šta nije {#what-is-shared-among-subsites-and-what-is-not}

Kao što smo ranije spomenuli, jedna od ključnih prednosti WordPress multisite je to da svi subsajtovi dele iste konfiguracije, jezgrine datoteke, teme, pluginove, jezgrine WordPress datoteke itd.

Međutim, postoje elementi koji su dobro ograničeni na osnovu svakog subsajta.

- Na primer, svaki subsajt dobija sopstvenu folder za uploadove (upload files). Kao rezultat toga, fajlovi koje korisnici jednog određenog subsajta uploade ne mogu da se pristupe drugom subsajtu.
- Svaki subsajt ima sopstveni admin panel i može aktivirati ili deaktivirati pluginove ili teme, osim ako nisu aktivni na mrežnom nivou od strane super admina.
- Većina tabela baze podataka kreira se za svaki subsajt, što znači da su postovi, komentari, stranice, podešavanja i još mnogo toga ograničeni na svaki subsajt.

## Upravljanje korisnicima na WordPress Multisite {#user-management-on-wordpress-multisite}

Jedan delikatni aspekt upravljanja korisnicima na WordPress multisite je upravljanje korisnicima. Tabela korisnika WordPressa je jedna od retkih koja se deli između svih subsajtova.

Ova organizacija može izazvati neke probleme zavisno od toga šta planirate da izgradite sa svojom mrežom. Primer ispod pomaže da ilustrujemo najhitniji problem.

Zamislite sledeći scenarij:

Kreirate WordPress multisite mrežu i počnete da nudite subsajte po mesečnoj pristojbi ljudima koji žele da imaju e-commerce prodavnicu.

Dobijate svog prvog plaćenog kupca – Johna. Kreirate mu sajt na svojoj mreži, instalirate sve potrebne pluginove, a zatim kreirate korisnika za Johna kako bi mogao da upravlja svojom prodavnicom.

Zatim dolazi drugi kupac – Alisa. Učinite isto za nju i ona sada ima prodavnicu na vašoj mreži takođe.

John i Alice su oba vaši kupci, ali se ne poznaju. Što je važnije, ako jedan od njih poseti vebsajt drugog, nema načina da sazna da ova prodavnica hostuje na istoj mreži sajtova.

Jednog dana, John treba da kupi novu par obuće i nalazi savršene stvari u Aliseovoj prodavnici. Kada pokušava da završi kupovinu, dobija poruku o grešci „e-mail već u upotrebi“, što je čudno jer je John 100% siguran da je ovo prvi put da posetio Alisin sajt.

Šta se ovde desilo je to što korisnički nalog Johna deli se kroz celu mrežu, tako da kada pokušava da kreira nalog za plaćanje na Alisinom sajtu, WordPress će primetiti da već postoji korisnik sa istim adresom e-maila i baciti grešku.

_Napomena: Razumemo koliko to može biti loše zavisno od vašeg slučaja korišćenja, pa Ultimate Multisite ima opciju koja zaobilazi redovne provere za postojeće korisnike, omogućavajući kreiranje više naloga koristeći isti e-mail adresu. Svaki nalog je vezan za subsajt, tako da rizik od sukoba ostaje na minimalnom nivou. U gornjem primeru, John ne bi dobio poruku o grešci i mogao bi da kupi te cipele bez problema. Ova opcija se zove Enable Multiple Accounts (Omogućavanje više naloga) i može se aktivirati u Ultimate Multisite → Settings → Login & Registration._

Iako je tabela korisnika podeljena, subsite administratori ili super administrator mogu dodavati i uklanjati korisnike iz subsajtova, a oni čak mogu imati različite uloge korisnika na različitim subsajtovima.

## Razmatranja performansi {#performance-considerations}

WordPress multisite je zaista moćan kada je reč o broju sajtova koje može podržati. Ovo se može testirati činjenicom da su [WordPress.com](https://WordPress.com), Edublogs i Campuspress svi servisi zasnovani na multisite, a svaki hostuje hiljade sajtova.

Iako u teoriji ne postoji maksimalan broj sajtova koje možete hostovati na jednoj instalaciji WordPress multisite, u praksi broj sajtova koje možete uspešno pokrenuti može se značajno razlikovati zavisno od nekoliko različitih faktora: koliko su sajtovi dinamični, koji pluginovi su dostupni subsajtovima, itd.

Kao pravilo, što je vaša mreža jednostavnija, to je bolje. Favorizovanje sajtova gde sadržaj nije zaista dinamičan (što ih čini odličnim kandidatima za agresivne strategije keširanja) i držanje skla sa pluginovima što lakšim (manji broj aktivnih pluginova je bolje) može drastično povećati broj subsajtova koje možete hostovati.

Najbolje je što su svi ovo WordPress, tako da isti alati koje već poznajete i volite za poboljšanja performansi će raditi i za multisite mrežu.

Glavni usko grlo za multisite je baza podataka, ali ako sve ostalo bude podešeno ispravno, može proći nekoliko hiljada sajtova pre nego što se moramo brinuti o tome. Čak tada postoje rešenja koja se mogu progresivno dodati u tom trenutku (kao što su rešenja za sharding baze podataka, na primer).
