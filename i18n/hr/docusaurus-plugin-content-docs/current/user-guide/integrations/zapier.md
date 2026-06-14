---
title: Integracija Zapiera
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Integracija Ultimate Multisite s Zapierom

U jednom od članaka razgovarali smo o [Webhooks](webhooks.md) i kako se oni mogu koristiti za integraciju s aplikacijama treće strane.

Korištenje webhooks je malo komplikovano jer zahtijeva napredno znanje programiranja i hvatanje podataka (payloads). Korištenjem **Zapier** možete to izbjeći.

Zapier ima integracije s preko 5000 aplikacija što olakšava komunikaciju između različitih aplikacija.

Možete kreirati **Triggers** koji će se pokrenuti kada se događaji dogode na vašoj mreži (npr. stvori se račun i pokrene događaj account_create) ili generirati **Actions** na vašoj mreži reagirajući na vanjske događaje (npr. kreiranje nove članstva u vašoj Ultimate Multisite mreži).

Ovo je moguće jer su **Ultimate Multisite Zapier triggers** i actions omogućeni [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Kako početi

Prvo, potražite Ultimate Multisite na listi aplikacija Zapiera. Alternativno, možete kliknuti na [ovaj link](https://zapier.com/apps/wp-ultimo/integrations).

Idite na svoj dashboard i pritisnite dugme **+** **Create Zap** (Kreiraj Zap) na lijevoj traci kako biste postavili novi Zap.

![Zapier dashboard s dugmetom Create Zap](/img/admin/webhooks-list.png)

Preusmjerit ćete se na stranicu za kreiranje Zapa.

U polje za pretraživanje upišite "wp ultimo". Kliknite da odaberete opciju **Beta**.

![Pretraživanje WP Ultimo u listi aplikacija Zapiera](/img/admin/webhooks-list.png)

Nakon što odaberete našu aplikaciju, odaberite dostupni događaj: **New Ultimate Multisite Event** (Novi Ultimate Multisite Događaj).

![Odabir New Ultimate Multisite Event triggera](/img/admin/webhooks-list.png)

Sada moramo dati Zapier pristup **vašoj mreži**. Klikom na **Sign in** (Prijavi se) će se otvoriti novo prozor koji zahtijeva **API credentials** (API vjerodajnice).

![Prompt za prijavu na Zapier s API kreditima](/img/admin/webhooks-list.png)

Idite u svoj network admin panel i navigirajte do **Ultimate Multisite > Settings** > **API & Webhooks** i potražite odjeljak API Settings.

Odaberite opciju **Enable API** jer je to potrebno da ova veza bude funkcionalna.

![Podešavanja API-ja i Webhooka s opcijama Enable API](/img/admin/settings-api-webhooks.png)

Koristite ikonu **Copy to Clipboard** (Kopiraj u međusprekid) na poljima za API Key i API Secret te zalijepite te vrijednosti na ekranu integracije.

U polju URL unesite punu URL svoju mreže, uključujući protokol (HTTP ili HTTPS).

![Ekran integracije Zapier s poljima za API Key, Secret i URL](/img/admin/webhooks-list.png)

Kliknite na gumb **Yes, Continue** (Da, Nastavi) da biste prešli na sljedeći korak. Ako sve prođe kako treba, dočekat će vas vaš novi povezani račun! Kliknite na **Continue** (Nastavi) za kreiranje novog triggera.

## Kako kreirati novi Trigger

Sada kada je vaš račun povezan, možete vidjeti dostupne događaje. Za ovaj tutorial ćemo odabrati događaj **payment_received**.

![Odabir događaja payment_received u Zapier triggeru](/img/admin/webhooks-list.png)

Nakon što odaberete događaj i kliknete na **continue** (nastavi), pojavit će se **test korak**.

![Test korak za trigger u Zapieru](/img/admin/webhooks-list.png)

U ovoj fazi, Zapier će testirati da li vaš Zap može **dobiti specifični payload za taj događaj**. U budućih događajima istog tipa, informacije s ovom istom strukturalnom komponentom bit će poslane.

![Test triggera u Zapieru uspješno završen s payloadom](/img/admin/webhooks-list.png)

U našem tutorijalu test je bio **uspješno završen** i vratio je primjer informacija o povratnoj poveznici (payload). Ova primjer informacija će nam biti korisna za vođenje pri kreiranju akcija. Vaš trigger je sada kreiran i spreman za povezivanje s drugim aplikacijama.

## Kako kreirati Actions

Actions koriste informacije iz drugih trigger-a kako bi stvorili nove unose u vašu mrežu.

U **kreiranju koraka akcije** odaberete Ultimate Multisite **Beta** i opciju **Create Items on Ultimate Multisite**.

![Kreiranje akcije s Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

U sljedećem koraku kreirate svoju autentifikaciju, baš kao što smo radili u **Kako početi**, ili odaberete postojeću autentifikaciju. U ovom tutorijalu ćemo odabrati istu već kreiranu autentifikaciju.

![Odabir autentifikacije za Zapier akciju](/img/admin/webhooks-list.png)

### Postavljanje Akcije (Setting up the Action)

Ovo je **glavni korak akcije** i ovdje stvari malo drugačije. Prva informacija koju odaberete je **Item**. Item je **model informacija** vaše mreže, kao što su **Customers (Klijenti), Payments (Plaćanja), Sites (Sajtovi), Emails (E-mailovi)** i drugi.

![Odabir tipa Item za Zapier akciju](/img/admin/webhooks-list.png)

Kada odaberete item, formular će se **preurediti kako bi prikazao potrebne i opcionalne polja** za odabrani item.

Na primjer, kada odaberete item **Customer (Klijent)**, polja na formularu će prikazati sve što je potrebno popuniti kako biste stvorili novog Klijenta u mreži.

![Polja Customer itema u postavkama Zapier akcije](/img/admin/webhooks-list.png)

Nakon što popunite sva polja označena kao **required (obavezna)** i kliknete na continue, posljednji zaslon će vam prikazati popunjena polja te polja koja su ostala nepopunjena.

![Test akcije Zapiera prikazuje popunjene i nepopunjene polja](/img/admin/webhooks-list.png)

Čim se vaš test završi i bude uspješan, vaša akcija je konfigurirana. Također je važno provjeriti na svojoj mreži jesu li se podaci kreirali s testom vaše akcije.
