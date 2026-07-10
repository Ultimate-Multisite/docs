---
title: Osnovni koncepti
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Osnovni koncepti {#basic-concepts}

Za novog korisnika WordPress Multisite-a i nekoga ko tek počinje da koristi Ultimate Multisite, može biti mnogo novih reči i fraza koje treba naučiti. Učenje tih stvari je važna zadatak jer ćete morati da razumete platformu i kako ona radi u celini.

U ovom članku ćemo pokušati da definišemo i objasnimo neke od ključnih koncepata u WordPress-u. Neke su relevantnije za korisnike, druge za developere, a neke za oba.

## WordPress Multisite {#wordpress-multisite}

WordPress **Multisite** je tip instalacije WordPress-a koji vam omogućava da kreirate i upravljate mrežom više veb-sajtova iz jedne WordPress dashboard-a. Možete upravljati svime uključujući broj sajtova, funkcije, teme i uloge korisnika. Mogu se upravljati stotinama i hiljadama sajtova.

## Mreža (Network) {#network}

U kontekstu WordPress-a, multisite mreža je mesto gde se određeni broj **subsajtova** može upravljati iz jedne dashboard-a. Iako se kreiranje multisite mreže razlikuje između hosting provajdera, krajnji rezultat je obično nekoliko dodatnih direktiva u fajlu **wp-config.php** koji WordPressu govori da radi u ovom specifičnom režimu.

Postoji niz različitih razlika između multisite mreže i samostalnoj instalacije WordPress-a koje ćemo kratko diskutovati.

## Baza podataka (Database) {#database}

Baza podataka je strukturisano, organizovano skup podataka. U informatici, baza podataka se odnosi na softver koji se koristi za skladištenje i organizovanje podataka. Zamislite to kao ormar sa fajlovima u kojem čuvate podatke u različitim sekcijama zvanim tabelama.

WordPress Multisite koristi jednu bazu podataka i svaki subsajt dobija sopstvene tabele sa blog ID-om u prefiksu, tako da kada instalirate multisite instalaciju i kreirate subsajt, trebalo bi da imate ove tabele:

_wp_1_options_ - tabela opcija za prvi subsajt

_wp_2_options_ - tabela opcija za drugi subsajt

## Proizvođač hostinga {#hosting-provider}

Proizvođač hostinga je kompanija koja omogućava poslovima i pojedincima da učine svoje web sajtove dostupnim putem World Wide Web-a. Usluge koje nude provajderi web hostinga variraju, ali obično uključuju dizajn veb sajtova, prostor za skladištenje na hostu i konektivnost na Internet.

## Domen {#domain}

Domen je adresa koju ljudi koriste da bi posjetili vaš sajt. On govori web pregledaču gde treba da traži vaš sajt. Kao što je u slučaju ulice, domen je način na koji ljudi posećuju vaš veb sajt online. I kao kada imate znak ispred svog prodavnice. Ako želite da posetite naš sajt, moraćete uneti naš web adresu u adresu pregledača koja je [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _, gde je [**ultimatemultisite.com**](http://ultimatemultisite.com) ime domena.

## Subdomen {#subdomain}

Subdomen je vrsta hijerarhije veb sajtova pod glavnim domenom, ali umesto korišćenja foldera za organizovanje sadržaja na veb sajtu, on zapravo dobija svoj sopstveni sajt. Predstavljen je kao [**https://site1.domain.com/**](https://site1.domain.com/) gde _site1_ predstavlja ime subdomena i [_domain.com_](http://domain.com) glavni domen.

## Poddirektorijum {#subdirectory}

Poddirektorijum je vrsta hijerarhije veb sajtova pod root domenom koji koristi foldere za organizovanje sadržaja na veb sajtu. Poddirektorijum je isti kao podfolder i imena se mogu međusobno koristiti. Predstavljen je kao [**https://domain.com/site1**](https://domain.com/site1) gde _site1_ predstavlja ime poddirektorijuma i [_domain.com_](http://domain.com) glavni domen.

## Subsajt {#subsite}

Субсајт је дечачий сајт који креирате у Мултисајт мрежи. Он може бити **субдомејн** или **подкаталог**, у зависности од тога како је ваша инсталација WordPress Multisite конфигуришена.

## Супер Админ (Super Admin) {#super-admin}

WordPress Супер Админ је корисничка улога са потпуним могућностима за управљање свим субсајтима на Мултисајт мрежи. За кориснике Мултисајта, то је **највиши ниво приступа** који можете да обезбедите својој WordPress инсталацији.

## Плагин (Plugin) {#plugin}

Уопштено, плагин је скуп кода који додаје додатну функционалности вашој WordPress сајту. То може бити тако jednostavno као промена лога за улазак или сложено као додавање е-комерчне функционалности. _Woocommerce и Contact Form_ су примеры плагина.

На WordPress Мултисајту, плагинове се могу инсталирати само са администратор своје мреже од дашборда Супер Админа. Администратори субсајта могу активирати и деактивирати плагинове унутра свог субсајта.

## Теме (Themes) {#themes}

WordPress тема је група фајлова (_графике, стил листа и код_) која одређује општи изглед сајта. Она пружа све фронтенд стилизовања као што су стила за јервице, распоред страница, боје итд.

Као и плагинови, теме у WordPress Мултисајту могу их инсталирати само Супер Админ, а активирати на ниво субсајта могу администратори субсајта.

## Шаблон сајта (Site Template) {#site-template}

**Шаблон сајта** је шаблон сајта који се може користи као основа при креирању нових сајтова у вашој мрежи.

Ово значи да можете креирате основни сајт, активирати различите плагинове, поставити активну тему и прилагодити га на сваки начин који желите. Затим, када ваш клијент креира нови наслов за улазак, уместо да добије дефолтни WordPress сајт без значајног садржаја, добиће копију вашег основног сајта са свим прилагођаванима и садржајем већ на месту.

## Мапира домена (Domain Mapping) {#domain-mapping}

**Domain mapping** sa WordPress je način da korisnike preusmerite na pravi host, putem adrese veb-sajta. U WordPress Multisite-u, subsajtovi se kreiraju koriste bilo poddirektorijum ili poddomen. Šta omogućava domain mapping je da subsite korisnicima dozvoljava da koriste top-level domen poput [**joesbikeshop.com**](http://joesbikeshop.com) kako bi adresa sajta izgledala profesionalnije.

## SSL {#ssl}

SSL znači **Secure Sockets Layer**. To je digitalni sertifikat koji potvrđuje identitet veb-sajta i omogućava šifrovanu vezu. Danas se koristi kao standardna tehnologija za osiguravanje internet konekcije i zaštitu bilo kakih osetljivih podataka koji se prenose između dve sisteme, sprečavajući kriminalce da čitaju i menjaju bilo koju prenesenu informaciju, uključujući potencijalne lične podatke. Moderni browseri zahtevaju SSL, što ga čini neophodnim prilikom kreiranja i rada veb-sajta.

## Media {#media}

Media su slike, audio, video i drugi fajlovi koji čine veb-sajt.

Mrežno postavljeni sajtovi dele jednu bazu podataka u WordPress Multisite-u, ali održavaju odvojene putanje na fajl sistemu za medijske fajlove.

Standardna lokacija WordPressa (wp-content/uploads) ostaje ista; međutim, njena putanja se menja kako bi odražavala jedinstveni ID mrežnog sajta. Posledično, medijski fajlovi za mrežni sajt izgledaju kao wp-contents/uploads/site/[id].

## Permalinks {#permalinks}

Permalinks su stalne URL adrese vašeg pojedinačnog blog post-a ili stranice unutar vašeg sajta. Permalinks se takođe nazivaju **pretty links** (lep linkovi). Podrazumevano, WordPress URL-ovi koriste format query string koji izgleda otprilike ovako:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite {#ultimate-multisite}

Ultimate Multisite je WordPress plugin napravljen za instalacije WordPress Multisite, koji pretvara vašu instalaciju WordPress-a u premium mrežu sa sitima – slično kao [WordPress.com](https://WordPress.com) – omogućavajući klijentima da kreiraju saite putem mesečnih, kvartalnih ili godišnjih naknada (možete kreirati i Besplatne planove).

## Checkout Form (Form za plaćanje) {#checkout-form}

Checkout Form je jedan ili više koraka formulara za narudžbinu koji uključuje kreiranje subsite-a, članstva i korisničkih naloga putem registracije Ultimate Multisite. Sastoji se od različitih polja i formulara za plaćanje koje korisnik mora podnet tokom procesa prijave.

## Webhook {#webhook}

Webhook (koji se takođe zove web callback ili HTTP push API) je način da aplikacija pruži druge aplikacijama informacije u realnom vremenu. Webhook isporučuje podatke drugim aplikacijama kako se dešavaju, što znači da dobijate podatke odmah.

**Ultimate Multisite webhooks** otvaraju beskonačne mogućnosti, omogućavajući administratorima mreže da obavljaju sve vrste neverovatno korisnih integracija, posebno ako se koriste u kombinaciji sa uslugama kao što su _Zapier i IFTTT_.

## Events (Događaji) {#events}

Event je akcija koja se dešava kao rezultat akcije korisnika ili druge izvora, poput klikanja mišem. Ultimate Multisite beleži sve događaje i logove koji se dešavaju unutar cele vaše mreže. Prati različite aktivnosti koje se dešavaju u vašem multisite-u, kao što su promene plana.
