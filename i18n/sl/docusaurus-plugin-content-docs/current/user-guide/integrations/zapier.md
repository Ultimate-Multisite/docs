---
title: Integracija Zapiera
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Integracija Ultimate Multisite z Zapierjem {#integrating-ultimate-multisite-with-zapier}

V en od članikov smo pogovorili o [Webhooks](webhooks.md) in tem, kako jih uporabiti za integracijo z tretjim aplikacijami.

Uporaba webhookov je malo komplikano, ker zahteva napredno znanje v kodiranju in ulovanje payloadov. Uporaba **Zapierja** je način, kako lahko to preprečite.

Zapier ima integracije z več kot 5000 aplikacijami, kar omogoča lažjo komunikacijo med različnimi aplikacijami.

Lahko ustvarjate **Trigere**, ki se sprožajo, ko se zgodijo dogodki na vašeta mreži (npr. se ustvari račun in sproži dogode `account_create`), ali generirate **Akcije** na vašeta mreži, ki reagirajo na zunanjih dogodkov (npr. ustvarite novo članstvo v vašem Ultimate Multisite mreži).

To je mogoče, ker so **trigeri in akcije Zapierja za Ultimate Multisite** napremedo podprtena [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Kako začeti {#how-to-start}

Prvi korak je iskanje Ultimate Multisite v seznamu aplikacij Zapierja. Alternativno lahko kliknete na [to povezavo](https://zapier.com/apps/wp-ultimo/integrations).

Pojedite na svoj dashboard in pritisnite gumb **+** **Create Zap** (Ustvari Zap) na levi strani, da ustanovite novi Zap.

![Zapier dashboard z gumbom Create Zap](/img/admin/webhooks-list.png)

Boste preusmerjeni na stran za ustvarjanje Zapa.

V iskalni polje vpišite "wp ultimo". Kliknite, da izberete možnost **Beta**.

![Iskanje WP Ultimo v seznamu aplikacij Zapierja](/img/admin/webhooks-list.png)

Po izbiri naše aplikacije izberite na voljo dogodek: **New Ultimate Multisite Event** (Novo dogodko Ultimate Multisite).

![Izbira trigger New Ultimate Multisite Event](/img/admin/webhooks-list.png)

Zdaj moramo Zapierju omogočiti dostop do **vaše mreže**. Kliknite na **Sign in** (Prijava), da se odpre novo okno, ki zahteva **API podatke**.

![Zapier sign in prompt for API credentials](/img/admin/webhooks-list.png)

Idi vstop na vašem admin panelu za omrežja (network admin panel) in navigirajte do **Ultimate Multisite > Settings** > **API & Webhooks** in poiščite razdelek API Settings.

Izberite možnost **Enable API**, ker je potrebna za delovanje te povezave.

![Zapier nastavitve API in Webhooks z možnostmi Enable API](/img/admin/settings-api-webhooks.png)

Uporabite ikono **Copy to Clipboard** (Kopiraj na preglednik) pri poljih API Key in API Secret in lepo te vrednosti na zaslonu integracije.

Na polje URL vnesite vaš celoten omrežni URL, vključno z protokolom (HTTP ali HTTPS).

![Zapier zaslon za integracijo z polji API Key, Secret in URL](/img/admin/webhooks-list.png)

Kliknite na gumb **Yes, Continue** (Da, nadaljuj), da preidete na naslednji korak. Če vse deluje kot načrtujete novo povezano račun! Kliknite na **Continue** (Nadaljuj), da ustvarite novi trigger.

## Kako ustvariti novi Trigger {#how-to-create-a-new-trigger}

Zdaj ko je vaš račun povezan, lahko vidite na voljo spremembe (events). Za to tutorial izberemo spremembo **payment_received**.

![Izbira spremembe payment_received v Zapier trigger](/img/admin/webhooks-list.png)

Ko ste izbrali spremembo in kliknete na **continue** (nadaljuj), se pojavil bo **test step** (testni korak).

![Zapier testni korak za trigger](/img/admin/webhooks-list.png)

Na tem koraku Zapier preveri, ali lahko vaš Zap **vneseta specifično podatke (payload) za to spremembo**. Pri prihodnjih spremembah iste vrste bo pošljen podatki z isto strukturo.

![Zapier testni trigger uspešno dokončan z payloadom](/img/admin/webhooks-list.png)

V našem tutorialu je test bil uspešno končan in je vrnil primer informacije o podatkih. Ta primer informacija bo koristil za usmerjanje nas pri ustvarjanju actionov. Vaš trigger je zdaj ustvarjen in je pripravljen za povezavo z drugimi aplikacijami.

## Kako ustvariti Actions {#how-to-create-actions}

Actions uporabljajo informacije iz drugih triggerjev, da ustvarjajo nove vnosne podatke v vaš omrežje.

Pri **ustvarjanju koraka actiona** boste izbrali Ultimate Multisite **Beta** in možnost **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Na naslednjem koraku boste ali ustvarili svojo avtentikacijo, kot smo to naredili v **Kako začeti**, ali izbrali ustvarjeno avtentikacijo. V tem tutorialu bomo izbrali isto avtentikacijo, ki jo smo prej ustvarili.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Ustavitev Actiona (Setting up the Action) {#setting-up-the-action}

To je **glavni korak actiona**, kjer so stvari malo drugačne. Prva informacija, ki boste izbrali, je **Item**. Item je **model informacij** vašega omrežja, kot sta **Customers (Klienci), Payments (Plačilnosti), Sites (Site), Emails (Pošiljke)** in drugi.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Ko izberete item, se obrazec **preuredi tako, da vam prikazuje potrebne in opcionalne polja** za izbrano itemo.

Na primer, ko izberete item **Customer (Klijen)**, se polja na obrazcu bodo pojavila vsa potrebna podatka, ki so potrebni za ustvarjanje novega Klijenov v omrežju.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

Po zapolnjenju vseh polj označenih kot **required (potrebno)** in kliku na continue, vam bo zadnja zaslon prikazal zapolnjena polja in polja, ki so ostala nezapolnjena.

![Test akcija Zapier prikazuje polja, ki so zapolnjena in nezapolnjena](/img/admin/webhooks-list.png)

Takoj ko se vaš test uspešno zaključi, je vaša akcija konfigurirana. Zanimite tudi preverite na svoji mreži, ali je element ustvarjen z testom vaše akcije.
