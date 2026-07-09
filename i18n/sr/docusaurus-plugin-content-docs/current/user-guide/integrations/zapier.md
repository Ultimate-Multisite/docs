---
title: Integracija Zapiera
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Integracija Ultimate Multisite sa Zapierom {#integrating-ultimate-multisite-with-zapier}

U jednom članku razgovarali smo o [Webhooks](webhooks.md) i kako se mogu koristiti za integraciju sa aplikacijama treće strane.

Korišćenje webhook-ova je malo komplikovano jer zahteva napredno znanje programiranja i hvatanje podataka (payload-ova). Korišćenjem **Zapier** možete to izbeći.

Zapier ima integracije sa preko 5000+ aplikacija što olakšava komunikaciju između različitih aplikacija.

Možete kreirati **Triggere** koji će se aktivirati kada se dešavaju događaji na vašoj mreži (npr. kreiranje naloga i pokretanje događaja `account_create`) ili generisati **Akcije** na vašoj mreži koje reaguju na spoljne događaje (npr. kreiranje nove članstva u vašoj Ultimate Multisite mreži).

Ovo je moguće jer su **Ultimate Multisite Zapier triggere** i akcije pokretani [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Kako početi {#how-to-start}

Prvo, potražite Ultimate Multisite u listi aplikacija Zapiera. Alternativno, možete kliknuti na [ovaj link](https://zapier.com/apps/wp-ultimo/integrations).

Idite na svoj dashboard i pritisnite dugme **+** **Create Zap** (Kreiraj Zap) sa leve strane da biste postavili novi Zap.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Bute ćete preusmereni na stranicu kreiranja Zapa.

U polje za pretragu ukucajte "wp ultimo". Kliknite da izaberete opciju **Beta**.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

Nakon što izaberete našu aplikaciju, odaberite dostupni događaj: **New Ultimate Multisite Event** (Novi Ultimate Multisite Događaj).

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Sada moramo dati Zapier pristup **vašoj mreži**. Klikom na **Sign in** (Prijavi se) će se otvoriti novo prozor koji zahteva **API kredencijale**.

![Prompt za prijavu Zapiera za API kredencijale](/img/admin/webhooks-list.png)

Idite u svoj admin panel mreže i navigirajte do **Ultimate Multisite > Settings** > **API & Webhooks** i potražite sekciju API Settings.

Odaberite opciju **Enable API** jer je to potrebno da ova veza radi.

![Podešavanja API-ja i Webhook-ova sa opcijama Enable API](/img/admin/settings-api-webhooks.png)

Koristite ikonu **Copy to Clipboard** (Kopiraj u međuspremnik) na poljima API Key i API Secret, a zatim zalepite te vrednosti na ekran integracije.

U polju URL unesite punu URL adresu vaše mreže, uključujući protokol (HTTP ili HTTPS).

![Ekran integracije Zapiera sa poljima za API Ključ, Tajnu i URL](/img/admin/webhooks-list.png)

Kliknite na dugme **Yes, Continue** (Da, Nastavi) da pređete na sledeći korak. Ako sve prođe kako treba, dočekati će vas vaš novi povezani nalog! Kliknite na **Continue** (Nastavi) da kreirate novi trigger.

## Kako kreirati novi Trigger {#how-to-create-a-new-trigger}

Sada kada je vaš nalog povezan, možete videti dostupne događaje. Za ovaj tutorial ćemo izabrati događaj **payment_received**.

![Odabir događaja payment_received u Zapier trigger-u](/img/admin/webhooks-list.png)

Kada se događaj odabere i kliknete na **continue** (nastavi), pojaviće se **test korak** (test step).

![Test korak za trigger u Zapieru](/img/admin/webhooks-list.png)

U ovoj fazi, Zapier će testirati da li vaš Zap može **da dohvati specifični payload za taj događaj**. U budućih događajima istog tipa, informacije sa istom strukturalnom komponentom biće poslate.

![Test trigger-a u Zapieru uspešno završen sa payload-om](/img/admin/webhooks-list.png)

U našem tutorijalu test je uspešno završen i vratio primer informacije o podacima (payload). Ove informacije će nam biti korisne dok kreiramo akcije. Vaš trigger je sada kreiran i spreman za povezivanje sa drugim aplikacijama.

## Kako kreirati Actions {#how-to-create-actions}

Actions koriste informacije iz drugih trigger-a da bi napravili nove unose u vašu mrežu.

U procesu **kreiranja koraka akcije** ćete izabrati Ultimate Multisite **Beta** i opciju **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

U sledećem koraku ćete ili kreirati svoju autentifikaciju, baš kao što smo radili u tutorijalu **Kako početi**, ili izabrati već kreiranu autentifikaciju. U ovom tutorijalu ćemo izabrati istu prethodno kreiranu autentifikaciju.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Podešavanje akcije (Setting up the Action) {#setting-up-the-action}

Ovo je **glavni korak akcije** i ovde stvari su malo drugačije. Prva informacija koju ćete izabrati je **Item**. Item je **model informacija** vaše mreže, kao što su **Customers (Klijenti), Payments (Plaćanja), Sites (Sajtovi), Emails (E-mailovi)** i drugi.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Kada birate item, formular će se **reorganizovati tako da prikaže potrebne i opcione polja** za izabranu stavku.

Na primer, kada izaberete item **Customer (Klijent)**, polja u formularu će prikazati sve što je potrebno popuniti kako biste kreirali novog Klijenta u mreži.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

Nakon što popunite sva polja označena kao **required (obavezna)** i kliknete na continue, poslednji ekran će vam prikazati popunjena polja i ona koja su ostala nepopunjena.

![Test akcije Zapiera pokazuje popunjene i nepopunjene polja](/img/admin/webhooks-list.png)

Čim završite test i on bude uspešan, vaša akcija je podešena. Takođe je važno proveriti u mreži da li je stavka kreirana pomoću testa vaše akcije.
