---
title: Kaj je WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Kaj je WordPress Multisite?

V svojem osnovnem delu WordPress ponuja funkcijo, ki se nanaša na 'Multisite', ki poteka v preteklosti do 2010 leta z lansiranjem WordPressa 3.0. Od tam pa je imel številne revizije namenjene uvedbi novih funkcij in uspagujočemu zaščiti.

V bistvu se WordPress multisite lahko zamislite tako: Univerza ima eno instalacijo WordPressa, vendar vsaka fakulteta ima svojo lastno spletno stran z WordPressom.

##

## Kaj je to WordPress Multisite? {#what-exactly-is-wordpress-multisite}

Multisite je funkcija WordPressa, ki omogoča več spletnih strani deliti eno instalacijo WordPressa. Ko se multisite aktivira, originalna WordPress stran je spremenjena tako, da podpiranja, kar običajno imenujemo **mreža strani**.

Ta mreža deli sistem datotek (kar pomeni, da so tudi **plugins in teme deljeni**), bazo podatkov, osnovne WordPress datoteke, wp-config.php itd.

To pomeni, da se WordPress, teme in plugins nujno morajo posodobiti samo enako razpoložljivost za v celotni vašo mrežno strani, ker delejo iste datoteke na sistemih datotek.

Ta dejstvo je ena glavnih prednosti multisite, saj vam omogoča, da povečate število strani, ki jih upravljate, ob zmanjšanju števila zadolžnosti, ki jih morate opraviti za vzdrževanje strani vaših strank, ostanejo enake.

##

## Subdomena ali poddirektorij? {#subdomain-or-subdirectory}

Obstaja dve načinu delovanja WordPress multisite – in morate izbrati enega, ko prehajate z običajne instalacije WordPressa na multisite instalacijo:

**Subdomena:** npr.: [site.domain.com](http://site.domain.com)

…ali

**Poddirektorij:** npr.: [yourdomain.com/site](http://yourdomain.com/site)

Vsaka možnost ima svoje prednosti in slabosti, ki jih morate vlagati v obravnavo tega odločitve.

En eni eno je pomembno opozorilo: ko se odločite, sprememba mreže z poddirektori na poddomene ali nasprotno je zelo težka – še posebej, če imate že nekaj spletnih strani.

Pred tem, ko se odločite, imamo nekaj točk, ki jih je treba vnaprej upoštevati:

**Mod poddirektorja (Subdirectory Mode)** je najla možnost za nastavitve in vzdrževanje. To je zato, ker so vsi strani le poti pripisane glavnem domenu (npr. [vašdomen.com/podstrana](http://vašdomen.com/podstrana)). Kot posledico potrebujete **en SSL certifikat** za glavni domen in on bo pokrival celotno mrežno omrežje.

Ob tem, zaradi strukture URL-ja, Google in večina drugih iskalnih motorjev bodo vse podstrane v vaših poddirektorjih videli kot eno ogromno stran. Kot posledico lahko vsebina, ki jo dodajo vaše končne stranke na podstranah, vpliva na SEO uspešnost vaše glavne strani, na primer. Stopnjen vpliv je debatable in obstaja argument, da lahko takšno urejanje celo prihrani za SEO uspešnost.

**Mod poddomene (Subdomain Mode)** je malo bolj kompleksno za nastavitve, vendar se njegova struktura URL-ja (npr. [podstrana.vaomreč.com](http://podstrana.vaomreč.com)) običajno vznema kot "professionalnejša".

En ena je ena glavna izziv pri nastavitvi načina z poddomeni (subdomain mode) je SSL pokritost (HTTPS) za celotno omrežje. To pride do tega, ker se browsere poddomene štejejo kot izolirane enote. Kot posledico boste potrebovali drugačen SSL sertifikat za vsako poddomeno na vašem omrežju ali poseben tip sertifikata, ki se nanaša na **Wildcard SSL certificate**. V zadnjih letih hostniki in paneli izboljšujejo svoje možnosti pri zagotavljanju SSL-a, kar nekaterim ponujajo wildcard sertifikate z enega klikom, kar zmanjšuje razliko med teh dvema načini nastavitve glede kompleksnosti.

Na nasprotje s načinom poddirektori (subdirectory mode) so poddomeni na omrežju na poddomene vključeni kot ločena spletna mesta za iskalnike, kar pomeni, da je vsebina prisotna na eni podpodomeni popolnoma neodvisna od SEO uspešnosti drugih podpodomen.

## Super Admin {#the-super-admin}

WordPress instalacije z eno mesto vam omogočajo dodajanje neomejenega števila uporabnikov in določanje različnih uporabniških vloge s različnimi dovoljenji.

Pri WordPress Multisite se odkrije nov tip uporabnika: **super admin** – in odpre se novi panel za administracijo omrežja: **network admin panel**.

Kot ime kaže, super admin ima moči nad omrežjem, saj je sposobna upravljati vsi njegove podpoddomene, pluginove, teme, vse!

Ko prenesete svojo WordPress instalacijo z eno mesto na multisite, originalni admin enega mesta bo sam avtomatsko izboljšan do super admina.

Pluginov in tem zaščito lahko instalirate ali odstranite le s panelja za administracijo omrežja s strani super adminov. Podpodomenni admini lahko nato izbrezajo, da aktivirajo ali deaktivirajo te pluginove ali teme, razen če super admin omrežja aktivira določeno plugin, kar ga prisili do biti aktivnega za vse podpodomene vsako časa.

_Opombažja: kot vidite, invitiranje nekoga v vašo omrežje in dodelitevanje mu statusa super admin daje temu uporabniku popolno nadzor nad vašo omrežjo. Na primer, drugi super admini lahko odstranijo vaš status super admina, kar dejansko blokira dostop do vaše lastne admin panele omrežja. Da bi omrežni uporabniki Ultimate Multisite mogli imeti bolj细 granular kontrola nad tem, kaj lahko dodateni super admini storijo, imamo dodatno dodatno (add-on) vsebino, ki se nanaša na Support Agents. Ta add-on vam omogoča ustvarjanje še enega tipa uporabnika – agenta – z le dovoljenimi pravicami, ki jih bodo potrebovali za opravljanje svojih nalog na omrežju._

## Kaj je delno (shared) in kaj ni delno med subsiti {#what-is-shared-among-subsites-and-what-is-not}

Kot smo že omenili, ena od ključnih prednosti WordPress multisite je, da vsi subsiti deli isti konfiguracije, jezdecne datoteke, teme, pluginove, jezdecne datoteke WordPress itd.

Vendar pa obstajajo elementi, ki so dobro območeni na podlago vsakega subsite.

- Na primer, vsak subsite ima lastno sklopko za vnos (uploads folder). Kot rezultat, vnos, ki ga uporabniki ene določenega subsite storijo, ne morejo dostopati na drugi subsite.
- Vsak subsite ima lastno posvečeno admin panel in lahko aktivira ali deaktivira pluginove ali teme, če niso bili omrežni aktivni od strane super admina.
- Večina tabel v bazi podatkov je ustvarjenih za vsako subsite, kar pomeni, da so postajki, komentarji, strani, nastavitve in še veliko več območeni za vsak subsite.

## Upravljanje uporabnikov na WordPress Multisite {#user-management-on-wordpress-multisite}

En delikatno zadevo na WordPress multisite je upravljanje uporabnikov. Tabelo uporabnikov WordPressa je ena od nekaj tabel ki jo deli vseh subsitov.

Ta postopek lahko povzroči nekatera težav, odvisno od tega, kaj načrtujete graditi s vašo omrežjo. Primer spodaj pomaga ilustrirati najpomembnejšo.

Predstavljajte si naslednji scenarij:

Ustanovite WordPress multisite omrežje in začnete ponudovati subsite za mesečno stroškovno naročnike, ki želijo imeti e-trgovino.

Dobite svojega prvega plačan stranke – Johna. Ustvarite mu spletno mesto na vašem omrežju, instalirajte vse potrebne pluginove, nato pa ustvarite uporabnika za Johna, da lahko upravlja z svojo trgovino.

Potem pride druga stranka – Alice. To isto storite tudi za njo in ona zdaj ima trgovino na vašem omrežju.

John in Alice so oba vaši stranke, vendar se ne poznata. Klepetje pa je še pomembnejše: če se ena od njih obišče spletno mesto druge, ni mogoč način, da bi ugotovil, da ta trgovina hostuje na isti omrežju strani.

Dneva John potrebuje novo par čevlj, najde jih v Aliceini trgovini. Ko poskuša dokončati nakup, prejme sporočilo o napaki "e-mail že uporabljen", kar je čudno, ker John je 100% prepričan, da je to prvič obišče Aliceino spletno mesto.

To se zgodi zato, ker uporabnik Johna je deljen na celotni mreži. Ko poskuša ustvariti račun za nakup na Aliceini strani, WordPress bo opazil, da obstaja uporabnik z eno slišalno e-poštno naslovom in bo povzročil napako.

_Opomba: Ugotavljamo, kako lahko to dovede, odvisno od vašega uporabe, zato Ultimate Multisite ima možnost, ki prečka običajne preveritve za obstoječe uporabnike, kar omogoča ustvarjanje več računov z eno slišalno e-poštno naslovom. Vsak račun je vezan na subsajt, tako da se tveganje za konflikt drastično zmanjša. Na primeru iz gore lahko John ne bo dobil napake in bo lahko kupil te čevlje brez težav. To možnost se nanaša na "Enable Multiple Accounts" (Omogoči več računov) in jo lahko aktivirate v Ultimate Multisite → Settings → Login & Registration._

Čeprav je tabelo uporabnikov deljeno, lahko subsite admini ali super admini dodajo in odstranjujeta uporabnike iz subsajtov, ter imajo lahko različne vloge uporabnika na različnih subsajtih.

## Vzema v obzir uspešnosti (Performance considerations) {#performance-considerations}

WordPress multisite je resnično močan glede števila spletnih strani, ki jih lahko podpirate. To lahko preizkusite s tem, da so [WordPress.com](https://WordPress.com), Edublogs in Campuspress vsi storitveniki na podlagi multisite, in vsak host podpira tisoč strani.

Čeprav v teoriji ni maksimalnega števila strani, ki jih lahko hostirate na eni WordPress multisite instalaciji, se številna količina strani, ki jih lahko uspešno upravljate, močno razlikuje od drugih faktorjev: kako dinamični so strani, kakšni pluginovi so na voljo za subsajte in tako naprej.

Kot pravilo je boljše, če je vaša mreža preprosta. Predostrajte strani, kjer ni resnično dinamičen vsebinski material (kar jih naredi odlične kandidatke za agresivne strategije cache-ja) in držite steklo pluginov čim lažje (čim manj aktivnih pluginov je boljše), lahko drastično povečate število subsajtov, ki jih lahko hostirate.

Najboljša stvar je, da ker je vse WordPress, bodo tudi ti isti orodja, ki jih že poznate in ljubite za izboljšanje uspešnosti, delovala tudi za multisite mreže.

Glavni strupen (bottleneck) za multisite je baza podatkov, vendar če so ostali vsi stvari pravilno nastavljeni, lahko potrebuješ par tisoč strani, preden se počnete brinimo na to. Čevenkoli obstajajo rešitve, ki jih lahko postopoma dodate v tem trenutku (kot so rešitve za sharding baze podatkov, na primer).
