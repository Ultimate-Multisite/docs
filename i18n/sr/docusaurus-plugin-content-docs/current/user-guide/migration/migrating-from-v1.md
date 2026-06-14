---
title: Migracija sa V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Миграција са V1

## Ultimate Multisite је прешао из своје оригиналне 1.x линије релиза на 2.x линију релиза.

Ultimate Multisite верзија 2.0 и новије су потпуно ревизија кода, што значи да је мало узајамности између старог и новог верзионима. За ту разлогу, када ажурирате са 1.x на 2.x, ваши подаци ће морати бити мигрирани у формат који нови верзије могу разумети.

Срећно, Ultimate Multisite 2.0+ **долази са мигратором** уграђеним у јадро који је способен да препозна податке из старог верзије и претвори их у нови формат. Ова миграција се дешава током **Setup Wizard-а** верзије 2.0+.

Ова лекција покрива како функционише мигратор, шта да урадите у случају провала и како да решите проблеме који могу постати током овог процеса.

_**ВАЖНО: Пре него што почнете ажурирање са верзије 1.x на верзију 2.0, молим вас проверите да сте креирали резервну копију своје базе података сайта**_

## Прстепене акције

Први корак је да преузмете .zip фајл плагина и инсталирате верзију 2.0 на својој административни таблици мреже (network admin dashboard).

Након што [инсталирате и активирате верзију 2.0](../getting-started/installing-ultimate-multisite.md), систем ће аутоматски препознати да ваш Multisite ради на старајем верзији и добићете ову поруку на врху странице плагина.

_**НАПОМЕ: Ако имате Ultimate Multisite 1.x инсталиран на свом Multisite-у, имаћете опцију да замените плагин верзијом коју сте upravo преузмели. Молим вас, слободно кликните да **Замените тренутно са уплаћеном** (Replace current with uploaded)**._

<!-- Скриншот недоступен: Страница плагина која показује опцију за замену v1 верзије у уплаћени v2 верзију -->

Sledeća stranica će vam pokazati koje su stare add-onovi instalirani uz verziju 1.x. Tamo ćete dobiti uputstva da li je verzija koju koristite kompatibilna sa verzijom 2.0 ili da li vam je potrebno da instalirate nadogradjenu verziju add-ona nakon migracije.

<!-- Screenshot unavailable: Poruka na vrhu stranice sa pluginovima o ažuriranju na v2.0, sa listom add-onova koji zahtevaju ažuriranje -->

Kada budete spremni da nastavite, možete kliknuti dugme koje kaže **Posetite Installer da završite nadogradnju**.

<!-- Screenshot unavailable: Dugme koje kaže Posetite Installer da završite nadogradnju -->

Zatim će vas prebaciti na stranicu asistenta za instalaciju sa nekim porukama dočekivanja. Samo treba da kliknete na **Get Started** (Početi) da biste prešli na sledeću stranicu.

<!-- Screenshot unavailable: Stranica asistenta za podešavanje sa dugmetom Get Started -->

Nakon klika na **Get Started**, preusmerićete se na Pre-install Checks_._ Ovo će vam prikazati informacije o vašem sistemu i instalaciji WordPressa te reći da li ispunjavate **Ultimate Multisite zahtevima**.

<!-- Screenshot unavailable: Stranica Pre-install Checks koja pokazuje potvrdu sistemskih zahteva -->

Sledeći korak je uneti svoj Ultimate Multisite licencni ključ i aktivirati plugin. To će osigurati da su sve funkcije, uključujući add-onove, dostupne na vašem sajtu.

<!-- Screenshot unavailable: Stranica za aktivaciju licence sa unosom ključa licence i dugmetom Agree and Activate -->

Nakon što unesete svoj ključ, kliknite na **Agree & Activate** (Prihvati i Aktivira).

Nakon aktivacije licence, možete početi sa stvarnom instalacijom tako što ćete kliknuti na **Install** (Instaliraj) na sledećoj stranici. To će automatski kreirati potrebne fajlove i bazu podataka neophodnu za rad verzije 2.0.

## Sada, migracija

Migrator ima ugrađenu sigurnosnu funkciju koja će proveriti ceo vaš multisite kako bi se uverio da je podaci svih Ultimate Multisite podataka mogu preneti bez ikakvih problema. Kliknite na dugme **Run Check** (Pokreni provere) da započnete proces.

Nakon pokretanja provere, imate dve opcije: rezultat može biti **sa** greškom ili **bez** greške.

### Sa Greškom

Ako dobijete poruku o grešci, moraćete da se obratite našem timu podrške kako bi vam pomogli u ispravljanju greške. Uverite se da im **dostavite log greške** kada kreirate tiket (support zahtev). Možete preuzeti log ili kliknuti na link koji kaže "kontaktirajte naš tim podrške". Otvoriće se pomoćni widget sa desne strane vaše stranice, gde su vam polja već popunjena i koja uključuju logove grešaka pod opisom.

_**Pošto je sistem pronašao grešku, nećete moći da nastavite sa migracijom na verziju 2.0. Tada možete vratiti se na verziju 1.x kako biste nastavljali da upravljate mrežom dok se greška ne popravi.**_

### Bez Greške

Ako sistem ne pronađe nikakvu grešku, videćete poruku o uspehu i dugme **Migrate** (Migriraj) na dnu koje će vam omogućiti da nastavite sa migracijom. Na ovoj stranici, podsetite ćete se da napravite backup baze podataka pre nego što krenete dalje, što snažno preporučujemo. Pritisnite **Migrate** ako već imate backup.

I to je sve!

Можете и да продолжите савезње (Wizard) за обновление лога и других ствари на својој мрези, или почебно да се обидете да прођете кроз мени и нови интерфејс у варзиони 2.0 ваше Ultimate Multisite-а. Смело се уживајте!
