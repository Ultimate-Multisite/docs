---
title: Zapier integracija
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Integracija Ultimate Multisite sa Zapierom

U jednom od članaka razgovarali smo o [Webhooks](webhooks.md) i kako se mogu koristiti za integraciju s aplikacijama trećih strana.

Korištenje webhookova je pomalo komplikovano jer zahtijeva napredno znanje kodiranja i hvatanja payloadova. Korištenje **Zapiera** je način da to zaobiđete.

Zapier ima integraciju s više od 5000+ aplikacija, što olakšava komunikaciju između različitih aplikacija.

Možete kreirati **Okidače** koji će se pokrenuti kada se događaji dese na vašoj mreži (npr. Account je kreiran i pokreće događaj account_create) ili generirati **Akcije** na vašoj mreži kao reakciju na vanjske događaje (npr. kreirati novo članstvo Accounta u vašoj Ultimate Multisite mreži).

Ovo je moguće jer **Ultimate Multisite Zapierovi okidači** i akcije rade putem [REST API-ja](https://developer.ultimatemultisite.com/api/docs/).

## Kako početi {#how-to-start}

Prvo, potražite Ultimate Multisite na listi Zapier aplikacija. Alternativno, možete kliknuti [ovaj link](https://zapier.com/apps/wp-ultimo/integrations).

Idite na svoj Dashboard i pritisnite dugme **+** **Kreiraj Zap** na lijevoj bočnoj traci kako biste postavili novi Zap.

![Zapier Dashboard s dugmetom Kreiraj Zap](/img/admin/webhooks-list.png)

Bit ćete preusmjereni na stranicu za kreiranje Zapa.

U polje za pretragu upišite "wp ultimo". Kliknite da odaberete opciju **Beta** verzije.

![Pretraga WP Ultimo na listi Zapier aplikacija](/img/admin/webhooks-list.png)

Nakon odabira naše aplikacije, odaberite dostupni događaj: **Novi Ultimate Multisite događaj**.

![Odabir okidača Novi Ultimate Multisite događaj](/img/admin/webhooks-list.png)

Sada trebamo dati Zapieru pristup **vašoj mreži**. Klik na **Prijavi se** otvorit će novi prozor koji zahtijeva **API vjerodajnice**.

![Zapier upit za prijavu za API vjerodajnice](/img/admin/webhooks-list.png)

Idite na administracijski panel svoje mreže i navigirajte na **Ultimate Multisite > Postavke** > **API & Webhooks** i potražite odjeljak API Settings.

Odaberite opciju **Enable API** jer je potrebna da bi ova veza radila.

![API and Webhooks postavke s opcijama API Settings i Enable API](/img/admin/settings-api-webhooks.png)

Koristite ikonu **Kopiraj u međuspremnik** na poljima API Key i API Secret i zalijepite te vrijednosti na ekran integracije.

U polje URL unesite puni URL svoje mreže, uključujući protokol (HTTP ili HTTPS).

![Ekran Zapier integracije s poljima API Key, Secret i URL](/img/admin/webhooks-list.png)

Kliknite dugme **Da, nastavi** da pređete na sljedeći korak. Ako sve bude radilo, trebao bi vas dočekati vaš novi povezani Account! Kliknite **Nastavi** da kreirate novi okidač.

## Kako kreirati novi okidač {#how-to-create-a-new-trigger}

Sada kada je vaš Account povezan, možete vidjeti dostupne događaje. Odaberimo događaj **payment_received** za ovaj vodič.

![Odabir događaja payment_received u Zapier okidaču](/img/admin/webhooks-list.png)

Nakon što je događaj odabran i kliknete **nastavi** , pojavit će se **testni korak**.

![Zapier testni korak za okidač](/img/admin/webhooks-list.png)

U ovoj fazi, Zapier će testirati može li vaš Zap **dohvatiti specifični payload za taj događaj**. U budućim događajima istog tipa, bit će poslane informacije s istom strukturom.

![Test Zapier okidača uspješno završen s payloadom](/img/admin/webhooks-list.png)

U našem vodiču test je **uspješno završen** i vratio je primjer informacija payload-a. Ove primjer informacije bit će korisne da nas vode tokom kreiranja akcija. Vaš okidač je sada kreiran i spreman za povezivanje s drugim aplikacijama.

## Kako kreirati akcije {#how-to-create-actions}

Akcije koriste informacije iz drugih okidača za kreiranje novih unosa u vašoj mreži.

U **koraku kreiranja akcije** odabrat ćete Ultimate Multisite **Beta** i opciju **Kreiraj stavke na Ultimate Multisite**.

![Kreiranje akcije s Kreiraj stavke na Ultimate Multisite](/img/admin/webhooks-list.png)

U sljedećem koraku ćete ili kreirati svoju autentifikaciju, baš kao što smo uradili u **Kako početi** , ili odabrati kreiranu autentifikaciju. U ovom vodiču odabrat ćemo istu autentifikaciju koja je prethodno kreirana.

![Odabir autentifikacije za Zapier akciju](/img/admin/webhooks-list.png)

### Postavljanje akcije {#setting-up-the-action}

Ovo je **glavni korak akcije** i ovdje su stvari malo drugačije. Prva informacija koju ćete odabrati je **Stavka**. Stavka je **informacijski model** vaše mreže kao što su **Klijenti, Plaćanja, Stranice, Emailovi** i drugi.

![Odabir tipa stavke za Zapier akciju](/img/admin/webhooks-list.png)

Kada odaberete stavku, obrazac će se **preurediti kako bi prikazao obavezna i opcionalna polja** za odabranu stavku.

Na primjer, kada odaberete stavku **Klijent** , polja obrasca će prikazati sve što je potrebno popuniti za kreiranje novog Klijenta u mreži.

![Polja stavke Klijent u postavljanju Zapier akcije](/img/admin/webhooks-list.png)

Nakon popunjavanja svih polja označenih kao **obavezna** i klika na nastavi, posljednji ekran će vam prikazati popunjena polja i polja koja su ostala nepopunjena.

![Test Zapier akcije koji prikazuje popunjena i nepopunjena polja](/img/admin/webhooks-list.png)

Čim se vaš test završi i bude uspješan, vaša akcija je konfigurirana. Također je važno provjeriti na svojoj mreži da li je stavka kreirana testom vaše akcije.
