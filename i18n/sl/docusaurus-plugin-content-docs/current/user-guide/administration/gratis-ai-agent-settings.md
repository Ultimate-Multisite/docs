---
title: Nastavitve Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Nastavitve Gratis AI Agent {#gratis-ai-agent-settings}

Zaslon **Settings → Advanced** v Gratis AI Agent omogoča skrbniško konfiguracijo za zaledne integracije. Ta stran dokumentira posredovanje povratnih informacij, ključe ponudnikov iskanja, nastavitev upravljane storitve Superdav, kontrolnike Google Calendar, nastavitve TextBee SMS in omrežne zastavice funkcij.

## Dostop do nastavitev {#accessing-settings}

1. V skrbništvu WordPress pojdite na **Gratis AI Agent → Settings**.
2. Kliknite zavihek **Advanced**.

## Konfiguracija končne točke za povratne informacije {#feedback-endpoint-configuration}

Končna točka za povratne informacije prejema zahteve POST od AI agenta, kadar uporabnik pošlje povratne informacije prek gumba s palcem navzdol, pasice s samodejnim pozivom ali ukaza `/report-issue`.

| Polje | Opis |
|---|---|
| **Feedback Endpoint URL** | URL, ki prejema oddaje povratnih informacij kot zahteve HTTP POST s telesom JSON. |
| **Feedback API Key** | bearer token, poslan v `Authorization` header vsake zahteve za povratne informacije. Pustite prazno, če vaša končna točka ne zahteva avtentikacije. |

### Pričakovani JSON Payload {#expected-json-payload}

Vaša končna točka za povratne informacije mora sprejeti telo JSON z vsaj naslednjimi polji:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

V payload so lahko prisotna dodatna polja, odvisno od konteksta pogovora.

### Vrednosti `triage_category` {#triagecategory-values}

Sloj AI triaže dodeli eno od naslednjih vrednosti za `triage_category`, preden posreduje payload:

| Vrednost | Pomen |
|---|---|
| `factual_error` | Asistent je podal napačne stvarne informacije. |
| `unhelpful_answer` | Odgovor je bil tehnično pravilen, vendar ni bil uporaben. |
| `inappropriate_content` | Odgovor je vseboval vsebino, ki je ne bi smeli prikazati uporabnikom. |
| `other` | Povratne informacije se niso ujemale z znano kategorijo. |

### Avtentikacija {#authentication}

Če vaša končna točka zahteva avtentikacijo, nastavite polje **Feedback API Key** na svoj bearer token. Agent pošlje:

```
Authorization: Bearer <your-api-key>
```

Če je polje **Feedback API Key** prazno, se ne pošlje noben `Authorization` header.

### Onemogočanje zbiranja povratnih informacij {#disabling-feedback-collection}

Pustite polji **Feedback Endpoint URL** in **Feedback API Key** prazni. Gumb s palcem navzdol in uporabniški vmesnik za povratne informacije ostaneta vidna uporabnikom, vendar oddaje niso posredovane nobeni zunanji storitvi.

## Brave Search API Key {#brave-search-api-key}

Tudi na zavihku **Advanced** polje **Brave Search API Key** omogoča zmožnost [Internetno iskanje](../configuration/internet-search).

| Polje | Opis |
|---|---|
| **Brave Search API Key** | Vaš API ključ z nadzorne plošče za razvijalce Brave Search. Potreben je za omogočanje internetnega iskanja v AI asistentu. |

Oznaka polja vključuje povezavo, ki jo je mogoče klikniti, do strani za prijavo na Brave Search API. Pustite prazno, da onemogočite internetno iskanje.

Za dokumentacijo za končne uporabnike o tej funkciji glejte [Internetno iskanje](../configuration/internet-search).

## Upravljana storitev Superdav {#managed-superdav-service}

Superdav AI Agent v1.18.0 dodaja upravljane končne točke storitve Superdav in samodejno zagotavljanje povezave za podprta spletna mesta. Uporabite te kontrolnike, kadar se mora vaše spletno mesto povezati z gostovanim ponudnikom namesto z ročno konfigurirano končno točko storitve.

| Polje | Opis |
|---|---|
| **Managed Superdav Service** | Omogoča povezavo z gostovano storitvijo Superdav za podprta spletna mesta. |
| **Provision Connection** | Zažene samodejno zagotavljanje končne točke in poverilnic. Uporabite to po potrditvi, da mora spletno mesto uporabljati upravljanega ponudnika. |
| **Service Endpoint / Connection Status** | Prikazuje trenutno končno točko ali stanje povezave po zagotavljanju. |

Po zagotavljanju shranite nastavitve in preverite stanje povezave, preden se zanesete na poteke dela upravljane storitve. Če zagotavljanje ne uspe, preglejte prikazana navodila za ponovni poskus in potrdite, da ima spletno mesto dovoljenje za uporabo gostovanega ponudnika.

## Konfiguracija Google Calendar {#google-calendar-configuration}

Ko so koledarske funkcije Superdav AI Agent v1.18.0 omogočene, lahko agent bere konfigurirane koledarje in podrobnosti dogodkov. Koledarska orodja so usmerjena v branje in so uporabna za opomnike, ki upoštevajo urnik, nadaljnje spremljanje udeležencev in ujemanje stikov.

| Polje | Opis |
|---|---|
| **Google Calendar Credentials** | Shrani poverilnice ali povezavo žetona, potrebno za branje koledarskih podatkov. |
| **Calendar Selection** | Omeji, katere konfigurirane koledarje lahko agent pregleda. |
| **Calendar Connection Status** | Potrdi, ali lahko trenutne poverilnice berejo koledarje in dogodke. |

Poverilnice koledarja omejite na koledarje, ki jih agent potrebuje. Znova povežite ali zamenjajte poverilnice, če stanje kaže na potekel žeton.

## Obvestila TextBee SMS {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 dodaja TextBee kot ponudnika SMS za konfigurirane poteke dela obvestil. SMS obvestila naj bodo združena s človeškimi potrditvenimi prehodi za občutljiva sporočila ali sporočila, namenjena uporabnikom.

| Polje | Opis |
|---|---|
| **TextBee API Key** | Avtenticira zahteve do ponudnika TextBee SMS. |
| **TextBee Device / Sender** | Izbere pošiljatelja ali napravo TextBee, uporabljeno za odhodna sporočila, kadar to zahteva ponudnik. |
| **SMS Notifications Enabled** | Omogoča odobrenim potekom dela pošiljanje obvestil v besedilnih sporočilih. Pustite onemogočeno, da preprečite pošiljanje SMS. |

Pošljite testno sporočilo samo na številko v lasti skrbnika, nato potrdite vedenje potrditvenih prehodov, preden omogočite načrtovane opomnike ali opomnike, namenjene udeležencem.

## Zastavice funkcij {#feature-flags}

Zavihek **Settings → Feature Flags**, prav tako uveden v v1.9.0, ponuja preklopna stikala za izbirno funkcionalnost. Vsaka zastavica je omogočena ali onemogočena na ravni celotnega omrežja; trenutno ni preglasitve za posamezno spletno mesto.

### Dostop do zastavic funkcij {#accessing-feature-flags}

1. V skrbništvu WordPress pojdite na **Gratis AI Agent → Settings**.
2. Kliknite zavihek **Feature Flags**.

### Zastavice nadzora dostopa {#access-control-flags}

| Zastavica | Privzeto | Opis |
|---|---|---|
| **Omeji na administratorje** | Izklopljeno | Ko je omogočeno, lahko ploščo za klepet AI Agent odprejo samo uporabniki z vlogo `administrator`. Vse druge vloge namesto tega vidijo sporočilo »Obrnite se na svojega administratorja«. |
| **Omeji na Network Admins** | Izklopljeno | Ko je omogočeno v multisite omrežju, lahko agenta uporabljajo samo Super Admins. Administratorji posameznih spletnih mest so blokirani. Ima prednost pred možnostjo »Omeji na administratorje«, če sta omogočeni obe. |
| **Dovoli dostop naročnikom** | Izklopljeno | Ko je omogočeno, lahko uporabniki z vlogo `subscriber` uporabljajo vmesnik za klepet, vendar so omejeni na zmožnosti samo za branje (brez ustvarjanja objav ali spreminjanja nastavitev). |
| **Onemogoči za nečlane** | Izklopljeno | Integrira se s statusom članstva Ultimate Multisite. Ko je omogočeno, je klepet skrit za spletna mesta, ki nimajo aktivnega članstva. |

### Zastavice blagovne znamke {#branding-flags}

| Zastavica | Privzeto | Opis |
|---|---|---|
| **Skrij nogo »Powered by Gratis AI Agent«** | Izklopljeno | Odstrani vrstico z navedbo blagovne znamke, prikazano na dnu gradnika za klepet. Priporočeno za uvedbe z belo oznako. |
| **Ime agenta po meri** | *(prazno)* | Zamenja privzeto oznako »Gratis AI Agent« v glavi klepeta in skrbniškem meniju z vašim lastnim imenom produkta. Pustite prazno za uporabo privzete vrednosti. |
| **Skrij izbirnik agenta** | Izklopljeno | Ko je omogočeno, uporabniki ne morejo preklapljati med petimi vgrajenimi agenti. Trenutni agent je fiksiran na tistega, ki je konfiguriran kot privzet v Settings → General. |
| **Uporabi ikono spletnega mesta kot avatar klepeta** | Izklopljeno | Zamenja privzeto ikono AI v glavi gradnika za klepet z ikono WordPress spletnega mesta (nastavljeno pod Appearance → Customize → Site Identity). |

### Varnostne zastavice avtomatizacije {#automation-safety-flags}

Superdav AI Agent v1.18.0 uvaja točke za človeško odobritev in zapise opomnikov za varnejše izvajanje avtomatizacije. Ti kontrolniki se lahko pojavijo v zastavicah funkcij ali naprednih nastavitvah avtomatizacije, odvisno od nameščenega paketa.

| Zastavica | Privzeto | Opis |
|---|---|---|
| **Zahtevaj človeško odobritev** | Priporočeno vklopljeno | Začasno ustavi občutljive avtomatizacije, dokler pooblaščeni uporabnik ne pregleda in potrdi predlaganega dejanja. |
| **Odstranjevanje podvojenih opomnikov** | Vklopljeno | Beleži poslane opomnike, tako da ponovni poskusi ali načrtovana izvajanja ne pošljejo podvojenih obvestil. |
| **Omogoči koledarska orodja** | Izklopljeno, dokler ni konfigurirano | Agentu omogoča branje konfiguriranih Google koledarjev in dogodkov. |
| **Omogoči SMS obvestila** | Izklopljeno, dokler ni konfigurirano | Odobrenim delovnim tokovom omogoča pošiljanje TextBee SMS obvestil po shranitvi poverilnic. |

### Uveljavljanje sprememb {#applying-changes}

Kliknite **Shrani nastavitve** po preklopu katere koli zastavice. Spremembe začnejo veljati takoj — izpraznitev predpomnilnika ali ponovna aktivacija plugin ni potrebna.
