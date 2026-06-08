---
title: Integracija Zapiera
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# Integracija Ultimate Multisite sa Zapier-om

U jednom od članaka, razgovarali smo o [Webhooks-ovima](webhooks.md) i kako se mogu koristiti za integraciju sa aplikacijama trećih strana.

Korištenje webhooks-ova je malo komplikovano jer zahtijeva napredno znanje iz programiranja i razumijevanje *payload*-a. Korištenje **Zapier-a** je način da to zaobiđete.

Zapier ima integraciju sa preko 5000+ aplikacija, što olakšava komunikaciju između različitih aplikacija.

Možete kreirati **Triggers-e** (okidače) koji će se aktivirati kada se dogode događaji na vašoj mreži (npr. kreiran je račun i aktivira se događaj `account_create`), ili generisati **Actions-e** (akcije) na vašoj mreži koji reaguju na eksterne događaje (npr. kreiranje novog članstva na vašoj Ultimate Multisite mreži).

Ovo je moguće jer su **Ultimate Multisite Zapier Triggers-i** i akcije bazirani na [REST API-ju](https://developer.ultimatemultisite.com/api/docs/).

## Kako početi

Prvo, potražite Ultimate Multisite u listi aplikacija Zapier-a. Alternativno, možete kliknuti na [ovu vezu](https://zapier.com/apps/wp-ultimo/integrations).

Idite na svoj *dashboard* i pritisnite dugme **+ Create Zap** na lijevoj bočnoj traci kako biste postavili novi Zap.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Preusmjerat ćete se na stranicu za kreiranje Zap-a.

U traku za pretragu ukucajte "wp ultimo". Kliknite da odaberete opciju **Beta**.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

Nakon što odaberete našu aplikaciju, odaberite dostupan događaj: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Sada moramo dati Zapier-u pristup **vašoj mreži**. Klikom na **Sign in** otvorit će se novo prozor koji zahtijeva **API kredencijale**.

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

Idite na panel za administraciju vaše mreže i navigirajte na **Ultimate Multisite > Settings** > **API & Webhooks**, a potražite sekciju API Settings.

Odaberite opciju **Enable API**, jer je potrebna da bi ova konekcija funkcionisala.

![API Settings with Enable API option in Ultimate Multisite](/img/admin/webhooks-list.png)

Koristite ikonu **Copy to Clipboard** na poljima API Key i API Secret i zalijepite te vrijednosti na ekran integracije.

Na polje URL unesite punu URL adresu vaše mreže, uključujući protokol (HTTP ili HTTPS).

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

Pritisnite dugme **Yes, Continue** da nastavite na sljedeći korak. Ako sve uspije, bi trebali biti dočekani vašim novim povezanim računom! Kliknite na **Continue** da kreirate novi *trigger*.

## Kako kreirati novi Trigger

Sada kada je vaš račun povezan, možete vidjeti dostupne događaje. Za ovaj tutorijal, odaberimo događaj **payment_received**.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

Nakon što je događaj odabran i kliknete na **continue**, pojavit će se **test step**.

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

U ovoj fazi, Zapier će testirati da li vaš Zap može **uzeti specifičan *payload* za taj događaj**. U budućnosti, informacije sa istom strukturom će biti slane za slične događaje.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

U našem tutorijalu test je **uspješno završen** i vratio je primjer informacije *payload*-a. Ove primjer informacije će nam biti korisne dok kreiramo akcije. Vaš *trigger* je sada kreiran i spreman za povezivanje sa drugim aplikacijama.

## Kako kreirati Actions

Akcije koriste informacije iz drugih *triggers*-a kako bi kreirale nove unose na vašoj mreži.

Pri **kreiranju akcionog koraka** (creating an action step) odabarat ćete Ultimate Multisite **Beta** i opciju **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

U sljedećem koraku, ili ćete kreirati vašu autentifikaciju, kao što smo uradili u **Kako početi**, ili ćete odabrati kreiranu autentifikaciju. U ovom tutorijalu, odabirat ćemo istu autentifikaciju koju smo ranije kreirali.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Postavljanje Akcije

Ovo je **glavni korak akcije** i ovdje stvari malo drugačije izgledaju. Prve informacije koje ćete odabrati su **Item**. Item je **model informacija** vaše mreže, kao što su **Customers, Payments, Sites, Emails** i drugi.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Kada birate *item*, formular će se **preurediti kako bi prikazao potrebna i opcionalna polja** za odabrani *item*.

Na primjer, kada odaberete *item* **Customer**, polja formulara prikazat će sve što je potrebno za popunjavanje radi kreiranja novog klijenta na mreži.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

Nakon što popunite sva polja označena kao **required** i kliknete na *continue*, na zadnjem ekranu će vam se prikazati popunjena polja i polja koja su ostala nepopunjena.

![Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

Čim vaš test završi i bude uspješan, vaša akcija je konfigurisana. Također je važno provjeriti na svojoj mreži da li je *item* kreiran testom vaše akcije.
