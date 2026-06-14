---
title: Što je WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Što je WordPress Multisite?

Unutar svog jezgra, WordPress nudi značajku pod nazivom „Multisite” koja se uzima za početak 2010. s lansiranjem WordPressa 3.0. Od tada je dobio niz revizija namijenjenih dodavanju novih značajki i poboljšanju sigurnosti.

U suštini, WordPress multisite se može zamisliti ovako: Univerzitet održava jednu instalaciju WordPressa, ali svaki fakultet održava svoj vlastiti WordPress sajt.

##

## Što je to točno WordPress Multisite?

Multisite je značajka WordPress-a koja omogućuje više web stranica (sajtova) da dijele jednu instalaciju WordPressa. Kada se aktivira multisite, originalni WordPress sajt se pretvara u podršku onome što se obično naziva **mreža sajtova**.

Ova mreža dijeli i sustav datoteka (što znači da su **pluginovi i teme također zajedničke**), bazu podataka, jezgre WordPressa, wp-config.php itd.

To znači da ažuriranja WordPressa, tema i pluginova potrebno je obaviti samo jednom za cijelu vašu mrežu sajtova jer dijele iste datoteke na sustavu datoteka.

Ova činjenica je jedna od glavnih prednosti multisite, jer vam omogućuje da povećavate broj sajtova koje upravljate dok zadržavate isti broj zadataka koje trebate obaviti za održavanje vaših korisničkih sajtova.

##

## Poddomena ili poddirektorijum?

Postoje dva načina rada WordPress multisite – i morate odabrati jedan kada pretvarate svoju običnu instalaciju WordPressa u multisite instalaciju:

**Poddomena:** npr.: [site.domain.com](http://site.domain.com)

...ili

**Poddirektorijum:** npr.: [yourdomain.com/site](http://yourdomain.com/site)

Svaki način ima prednosti i mane koje trebate uzeti u obzir prilikom donošenja ove odluke.

Va jedna stvar koju je važno napomenuti: jednom kada donosite odluku, promijeniti mrežu s poddirektorijuma na poddomen ili obrnuto je stvarno teško – pogotovo ako već imate nekoliko stranica napravljenih.

Prije nego što donesete tu odluku, evo par stvari koje trebate uzeti u obzir:

**Mod poddirektorijuma (Subdirectory Mode)** je najlakši način za postavljanje i održavanje. To se događa jer su svi saiti zapravo samo putanje vezane za glavni domen (npr. [vašdomen.com/podstranica](http://vašdomen.com/podstranica)). Kao rezultat, trebate **jednu SSL sertifikatu** za glavni domen i ona će pokriti cijelu mrežu.

Istovremeno, zbog svoje URL strukture (npr. [podstranica.vašmreža.com](http://podstranica.vašmreža.com)), Google i većina drugih pretraživačkih motora će sve podstranice na vašoj mreži baziranoj na poddirektorijumima smatrati jednom ogromnom stranicom. Kao rezultat, sadržaj koji dodaju krajnji korisnici na podstranice može utjecati na SEO performanse vaše glavne landing stranice, na primjer. Razina utjecaja je predmet rasprave i postoji argument da takav raspored može biti čak i koristan za SEO performanse.

**Mod poddomena (Subdomain Mode)** je malo složeniji za postavljanje, ali njegova URL struktura (npr. [podstranica.vašmreža.com](http://podstranica.vašmreža.com)) se generalno smatra "profesionalnijom".

Jedna od glavnih poteškoća pri postavljanju načina rada s poddomenima (subdomain mode) je SSL pokrivenost (HTTPS) za cijelu mrežu. To je zato što preglednici smatraju poddomene izoliranim entitetima. Kao rezultat, trebat će vam drugačiji SSL certifikat za svaki poddomenu na vašoj mreži, ili poseban tip certifikata zvan **Wildcard SSL certificate** (certifikat s wildcardskim domenom). U posljednjih nekoliko godina, hosting provajderi i paneli napredovito su u pružanju SSL-a i neki nude wildcard certifikate samo klikom na dugme, zatvarajući razliku između ova dva načina rada u smislu složenosti postavljanja.

U suprotnosti s načinom rada poddirektorijskog (subdirectory mode), podstranice na mreži baziranoj na poddomenu smatraju ih pretraživači zasebnim webovima, što znači da sadržaj prisutan na jednoj podstranici nikako ne utječe na SEO performanse drugih podstranica.

## Super Admin

Jednostavne instalacije WordPressa s jednom stranicom omogućuju vam dodavanje neograničenog broja korisnika i dodjeljivanje tim korisnicima različitih uloga s različitim dozvolama.

U WordPress Multisite otključava se novi tip korisnika: **super admin** – i novi admin panel: **network admin panel**.

Kao što ime kaže, super admin ima supermoći nad cijelom mrežom, jer može upravljati svim podstranicama, pluginovima, temama, svime!

Čim pretvorite svoju instalaciju WordPressa s jednom stranicom u multisite, originalni admin jedne stranice će automatski postati super admin.

Pluginove i teme mogu instalirati ili deinstalirati samo super admini putem network admin panel-a. Admini podstranica zatim mogu odabrati aktiviranje ili deaktiviranje tih pluginova ili tema, osim ako super admin mreže ne aktivira neki plugin, što ga prisiljava biti aktivan za sve podstranice cijelo vrijeme.

_Napomena: kao što možete vidjeti, pozivanjem nekoga u vašu mrežu i dodjeljanjem mu statusa super admina daje tom korisniku potpunu kontrolu nad vašom mrežom. Kao primjer, drugi super admini mogu čak ukloniti vam status super admina, čime vas efektivno isključuju iz administracijskog panela vaše vlastite mreže. Kako bismo omogućili Ultimate Multisite klijentima granularnu kontrolu nad onim što dodatni super admini mogu raditi, imamo dodatak pod nazivom Support Agents. Ovaj dodatak vam omogućuje da kreirate još jednu vrstu korisnika – agenta – s dozvolama koje su mu potrebne samo za obavljanje zadataka na mreži._

## Što je zajedničko među subsitima i što nije

Kao što smo ranije spomenuli, jedna od ključnih prednosti WordPress multisite je to da svi subsiti dijele iste konfiguracije, jezgre datoteke (core files), teme, pluginove, jezgru WordPressa itd.

Međutim, postoje elementi koji su dobro ograničeni na osnovu svakog subsite-a.

- Na primjer, svaki subsite dobiva vlastitu folder za uploadove. Kao rezultat toga, uploadovi napravljeni korisnicima jednog određenog subsite-a ne mogu biti pristupani drugom subsite-u.
- Svaki subsite ima svoj posvećeni admin panel i može aktivirati ili deaktivirati pluginove ili teme osim ako nisu aktivni u mreži od strane super admina.
- Većina tablica baze podataka kreirana je za svaki subsite, što znači da su postovi, komentari, stranice, postavke i još mnogo toga ograničeni na svaki subsite.

## Upravljanje korisnicima na WordPress Multisiteu

Jedan delikatni aspekt upravljanja korisnicima na WordPress multisiteu je upravljanje korisnicima. Tablica korisnika WordPressa je jedna od malo tablica koja se dijeli među svim subsitima.

Ova organizacija može generirati neke probleme ovisno o tome što planirate izgraditi s vašom mrežom. Primjer u nastavku pomaže prijasniti najhitniji problem.

Zamislite sljedeći scenarij:

Kreirate WordPress multisite mrežu i počnete ponuditi subsite za mjesečnu naknadu ljudima koji žele imati e-trgovinu.

Dobijete svog prvog plaćenog klijenta – Johna. Kreirate mu сайт na vašoj mreži, instalirate sve potrebne pluginove, a zatim kreirate korisnika za Johna kako bi mogao upravljati svojom trgovinom.

Zatim dolazi druga kupciteljica – Alice. U to radite isto za nju i ona sada ima trgovinu na vašoj mreži.

John i Alice su oboje vaši klijenti, ali se ne znaju. Što je još važnije, ako jedan od njih posjeti web stranicu druge trgovine, nema načina da se utvrdi da se ova trgovina hosta na istoj mreži sajtova.

Jednog dana, John treba kupiti novi par cipela i pronalazi savršene za Aliceovu trgovinu. Kada pokušava završiti kupnju, dobiva poruku o grešci „e-mail već u upotrebi“, što je čudno jer je John 100% siguran da je ovo prvi put posjećuje web stranicu Alice.

Što se ovdje dogodilo je što je korisnik Johna dijeljen s cijelom mrežom tako da kada pokušava kreirati račun za plaćanje na Aliceovoj stranici, WordPress će primijetiti da korisnik s istim e-mail adresom već postoji i baciti grešku.

_Napomena: Razumijemo koliko to može biti loše ovisno o vašem slučaju korištenja, pa Ultimate Multisite ima opciju koja zaobilazi obične provjere postojanja korisnika, omogućujući kreiranje više računa s istim e-mail adresom. Svaki račun je vezan za subsajt, tako da rizik od sukoba ostaje na minimalnom. U gornjem primjeru, John ne bi dobio poruku o grešci i mogao bi kupiti te cipele bez problema. Ova opcija se zove Enable Multiple Accounts (Omogućite više računa) i može se aktivirati na Ultimate Multisite → Settings → Login & Registration._

Iako je korisni tabelu zajednički, subsite administratori ili super administrator mogu dodavati i uklanjati korisnike s subsitova, te im se mogu dodijeliti različite uloge na različitim subsitovima.

## Razmatranja o performansi

WordPress multisite je zaista moćan kada je riječ o broju web stranica koje može podržati. To možete testirati činjenicom da su [WordPress.com](https://WordPress.com), Edublogs i Campuspress svi usluge zasnovane na multisite, a svaki od njih hosta tisuće stranica.

Iako u teoriji ne postoji maksimalan broj stranica koje možete hostati na jednoj instalaciji WordPress multisite, u praksi broj stranica koje možete zadovoljavajuće upravljati može značajno varirati ovisno o nekoliko različitih faktora: koliko su stranice dinamične, koji pluginovi su dostupni subsitovima itd.

Kao pravilo, što je vaša mreža jednostavnija, to je bolje. Favorizirajte stranice gdje sadržaj nije baš dinamičan (što ih čini odličnim kandidatima za agresivne strategije keširanja) i držite skup pluginova što lakšim (manji broj aktivnih pluginova je bolji). To može drastično povećati broj subsitova koje možete hostirati.

Najbolje je što sve ovo je WordPress, tako da će vam isti alati koje već znate i volite za poboljšanje performansi raditi i za multisite mrežu.

Glavni usko grlo za multisite je baza podataka, ali ako se sve ostalo postavi ispravno, može proći nekoliko tisuća stranica prije nego što zategnete probleme s njom. Čak tada postoje rješenja koja se mogu progresivno dodati u tom trenutku (kao što su rješenja za sharding baze podataka, na primjer).
