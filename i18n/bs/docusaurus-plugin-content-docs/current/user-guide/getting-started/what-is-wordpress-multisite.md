---
title: Šta je WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Šta je WordPress Multisite?

U svojoj osnovi, WordPress nudi značajnost nazvanu ‘Multisite’ čije korijeni sežu do 2010. godine, kada je lansiran WordPress 3.0. Od tada je prošao kroz niz revizija koje su ciljane na uvođenje novih značajnosti i pojačavanje sigurnosti.

U suštini, WordPress multisite se može zamisliti ovako: Univerzitet održava jednu instalaciju WordPressa, ali svaki fakultet održava svoj vlastiti WordPress sajt.

##

## Šta je tačno WordPress Multisite? {#what-exactly-is-wordpress-multisite}

Multisite je značajnost WordPressa koja omogućava više sajtova da dijele jednu WordPress instalaciju. Kada se multisite aktivira, originalni WordPress sajt se konvertuje da podrži ono što se obično naziva **mreža sajtova**.

Ta mreža dijeli sistem datoteka (što znači da su **pluginovi i teme također dijeljeni**), bazu podataka, osnovne WordPress datoteke, `wp-config.php`, itd.

To znači da je potrebno izvršiti ažuriranja WordPressa, teme i pluginova samo jednom za sve sajtove u vašoj mreži, jer dijele iste datoteke na sistemu datoteka.

Ovo je jedna od glavnih prednosti multisitea, jer vam omogućava da povećate broj sajtova koje upravljate, a da pritom ne povećavate broj zadataka koje morate obavljati za održavanje sajtova vaših klijenata.

##

## Poddomena ili poddirektorijum? {#subdomain-or-subdirectory}

Postoje dva načina za pokretanje WordPress multisitea – i morate odabrati jedan kada konvertujete svoju regularnu WordPress instalaciju u multisite instalaciju:

**Poddomena:** npr.: [site.domain.com](http://site.domain.com)

…ili

**Poddirektorijum:** npr.: [yourdomain.com/site](http://yourdomain.com/site)

Svaki način ima prednosti i nedostatke koje morate uzeti u obzir prilikom donošenja ove odluke.

Ipak, jedna stvar je važno napomenuti: kada donesete odluku, mijenjanje vaše mreže sa poddirektorijuma na poddomene ili obrnuto je zaista teško – posebno ako već imate nekoliko kreiranih sajtova.

Prije donošenja te odluke, evo nekoliko tačaka koje treba imati na umu:

**Režim poddirektorijuma** je najlakši režim u smislu postavljanja i održavanja. To se događa jer su svi sajtovi samo putanje pridružene glavnom domenu (npr. [yourdomain.com/subsite](http://yourdomain.com/subsite)). Kao rezultat toga, potrebne su vam samo **jedan SSL certifikat** za glavni domen, a on će pokriti cijelu mrežu.

Istovremeno, zbog svoje URL strukture, Google i većina drugih tražilica će sve subsajte na vašem poddirektorijum baziranom mreži smatrati kao jedan veliki sajt. Kao rezultat toga, sadržaj dodan na subsajte od strane vaših krajnjih kupaca može utjecati na SEO performanse vašeg glavnog sajta, na primjer. Nivo utjecaja je sporan i postoji argument da takva aranžmana čak može biti korisna za SEO performanse.

**Režim poddomena** je malo složeniji za postavljanje, ali njegova URL struktura (npr. [subsite.yournetwork.com](http://subsite.yournetwork.com)) se generalno percipira kao "profesionalnija".

Jedan od glavnih izazova u postavljanju režima poddomena je pokrivenost SSL-om (HTTPS) za cijelu mrežu. To je zbog činjenice da preglednici smatraju poddomene izoliranim entitetima. Kao rezultat toga, bit će vam potreban drugačiji SSL certifikat za svaki poddomen na vašoj mreži, ili poseban tip certifikata nazvan **Wildcard SSL certifikat**. U poslednjih nekoliko godina, hosting provajderi i paneli unapređuju svoje usluge u smislu provizije SSL-a, a neki nude wildcard certifikate samo klikom na dugme, smanjujući jaz između dva režima u smislu složenosti postavljanja.

Za razliku od režima poddirektorijuma, subsajte na mreži baziranoj na poddomenama smatraju tražilice kao zasebne web sajtove, što znači da sadržaj prisutan na jednom subsajtu ne utječe na SEO performanse drugih subsajta.

## Super Admin {#the-super-admin}

Single-site WordPress instalacije omogućavaju dodavanje neograničenog broja korisnika i davanje tim korisnicima različitih uloga sa različitim dozvolama.

U WordPress Multisiteu, otključava se novi tip korisnika: **super admin** – i otključava se novi admin panel: **network admin panel**.

Kako ime sugerira, super admin ima supermoći nad mrežom, jer je sposoban upravljati svim njenim subsajtovima, pluginovima, temama, sve!

Nakon što konvertujete svoju single-site WordPress instalaciju u multisite, originalni admin single sajta automatski će biti nadograđen u super admina.

Pluginove i teme mogu instalirati ili deinstalirati samo sa network admin panela super admini. Subsite admini zatim mogu odlučiti da aktiviraju ili deaktiviraju te pluginove ili teme, osim ako super admin mreža ne aktivira plugin, što ga prisiljava da je uvijek aktivan za sve subsajte.

_Napomena: kako vidite, pozivanje nekoga u vašu mrežu i davanje mu statusa super admina daje ovom korisniku potpunu kontrolu nad vašom mrežom. Kao primjer, drugi super admini čak mogu ukloniti vaš super admin status, efektivno vas zaključavajući iz vašeg vlastitog network admin panela. Da bismo omogućili korisnicima Ultimate Multisite da imaju granuliranu kontrolu nad onim što drugi super admini mogu učiniti, imamo dodatak nazvan Support Agents. Ovaj dodatak vam omogućava da kreirate još jedan tip korisnika – agenta – sa samo dozvolama koje bi možda trebali za obavljanje svojih zadataka na mreži._

## Šta je dijeljeno između subsajta i šta nije {#what-is-shared-among-subsites-and-what-is-not}

Kao što smo ranije spomenuli, jedna od ključnih prednosti WordPress multisitea je što svi subsajte dijele iste konfiguracije, osnovne datoteke, teme, pluginove, osnovne WordPress datoteke, itd.

Međutim, postoje elementi koji su lijepo ograničeni na nivou svakog subsajta.

- Na primjer, svaki subsajt dobija svoj vlastiti folder za upload. Kao rezultat toga, uploadovi napravljeni od strane korisnika jednog određenog subsajta ne mogu se pristupiti na drugom subsajtu.

- Svaki subsajt ima svoj namjenski admin panel i može aktivirati ili deaktivirati pluginove ili teme, osim ako nisu network aktivni od strane super admina.

- Većina tabela baze podataka kreirana je za svaki subsajt, što znači da su postovi, komentari, stranice, postavke i slično ograničeni za svaki subsajt.

## Upravljanje korisnicima na WordPress Multisiteu {#user-management-on-wordpress-multisite}

Jedva osjetljiv tema na WordPress multisiteu je upravljanje korisnicima. WordPress korisnička tabela je jedna od rijetkih koje se dijele među svim subsajtovima.

Ova aranžmana može stvoriti neke probleme ovisno o tome šta planirate izgraditi sa svojom mrežom. Primjer ispod pomaže da se ilustrira najhitniji problem.

Zamislite sljedeti scenarij:

Kreirate WordPress multisite mrežu i počinjete da nudite subsajte po mjesečnoj naknadi ljudima koji žele e-commerce prodavnicu.

Dobijate prvog plaćenog klijenta – Johna. Kreirate sajt za Johna na vašoj mreži, instalirate sve potrebne pluginove, a zatim kreirate korisnika za Johna kako bi mogao upravljati svojom prodavnicom.

Zatim dolazi drugi klijent – Alice. Uradite isto za nju i ona sada ima i prodavnicu na vašoj mreži.

John i Alice su vaši klijenti, ali se ne poznaju. Što je još važnije, ako jedan od njih posjeti web sajt drugog, nema načina da se zna da je ta prodavnica hostovana na istoj mreži sajtova.

Jednog dana, John treba da kupi par novih cipela i pronalazi savršene u Aliceinoj prodavnici. Kada pokuša da završi kupovinu, dobija poruku o grešci "email već korišten", što je čudno jer je John 100% siguran da je ovo prvi put da posjećuje Alicein sajt.

Što se ovdje dogodilo je da je korisnik Johna podijeljen kroz cijelu mrežu, pa kada pokuša da kreira račun za checkout na Aliceinom sajtu, WordPress detektuje da korisnik sa istom email adresom već postoji i bacaju grešku.

_Napomena: shvatamo koliko to može biti loše ovisno o vašoj upotrebi, pa Ultimate Multisite ima opciju koja zaobilazi regularne provjere postojećeg korisnika, omogućavajući kreiranje više računa koristeći istu email adresu. Svaki račun je vezan za subsajt, pa je rizik kolizije smanjen na minimum. U gornjem primjeru, John ne bi dobio poruku o grešci i mogao bi kupiti te cipele bez problema. Ova opcija se zove Enable Multiple Accounts i može se aktivirati na Ultimate Multisite → Settings → Login & Registration._

Iako je korisnička tabela dijeljena, korisnike mogu dodavati i uklanjati subsajte subsite admini ili super admin, i mogu imati različite uloge na različitim subsajtovima.

## Razmatranja performansi {#performance-considerations}

WordPress multisite je zaista moćan kada je u pitanju broj sajtova koje može podržati. To se može testirati činjenicom da su [WordPress.com](https://WordPress.com), Edublogs i Campuspress sve multisite bazirani servisi i svaki hostuju hiljade sajtova.

Iako teorijski ne postoji maksimalan broj sajtova koje možete hostovati na jednoj WordPress multisite instalaciji, u praksi broj sajtova koje možete zadovoljavajuće pokretati može značajno varirati ovisno o broju različitih faktora: koliko su sajtovi dinamični, koji pluginovi su dostupni subsajtovima, itd.

Kao opštoj praksi, što je vaša mreža jednostavnija, to je bolje. Prioritet dajte sajtovima čiji sadržaj nije zaista dinamičan (što ih čini odličnim kandidatima za agresivne strategije keširanja) i držite skup pluginova što je moguće lakšim (što je manji broj aktivnih pluginova, to je bolje) što može drastično povećati broj subsajta koje možete hostovati.

Najbolje je što je sve ovdje WordPress, pa će isti alati koje već znate i volite za poboljšanje performansi raditi i za multisite mrežu.

Glavni usko grlo za multisite je baza podataka, ali ako je sve ostalo pravilno postavljeno, može proći nekoliko hiljada sajtova prije nego što morate da razmišljate o tome. Čak i tada, postoje rješenja koja se mogu progresivno dodati (kao što su rješenja za sharding baze podataka, na primjer).
