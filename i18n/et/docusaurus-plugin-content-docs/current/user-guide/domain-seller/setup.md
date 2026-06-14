---
title: Seadistamine ja pakkuja konfiguratsioon
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domen müüja: Seadistamine ja teenuse konfiguratsioonid

Domain Seller lisamoodul on kaasas suunatud seadistamise juhend, mis juhendab teid iga vajaliku sammu läbiva. See leht käsitleb juhendi voolu ning seda, kuidas pärast seda konfigurida või uuesti konfigurida teenusepanna (provider).

## nõuded

- **Multisite Ultimate** versioon 2.4.12 või hiljem, võrku aktiveeritud
- **PHP** 7.4+
- API-kõstused vähemalt ühe toetatud registri jaoks

## Esimene käivitamise seadistamise juhend

Seadistamise juhend käivitub automaatselt esimest korda, kui aktiveerite lisamoodula võrku. See on ka saadaval igal ajal **Network Admin › Ultimate Multisite › Domain Seller Setup** menüüpunktist.

### Samm 1 — Valige teenusepanna (provider)

Valige registri, mida soovite ühendada. Toetatud valikud:

| Teenusepanna | DNS-juhtimine | WHOIS privaatsus |
|---|---|---|
| OpenSRS | Jah | Jah |
| Namecheap | Ei | Jah (WhoisGuard, tasuta) |
| HostAfrica | Jah | Jah (ID kaitse) |
| Openprovider | Jah | Jah |
| Hostinger | Hostingeri kodumooduse domain-mappingu abil hooldatud domeenide jaoks | Jah |
| GoDaddy | Ei | Ei |
| ResellerClub | Jah | Ei |
| NameSilo | Ei | Ei |
| Enom | Jah | Ei |

### Samm 2 — Sisestage võtmeandmed

Iga teenusepanna on erinevad võtmeandmete väljad:

**OpenSRS** — Kasutajahüid ja privaatne võti (OpenSRS Reseller Control Panelist)

**Namecheap** — Kasutajahüid ja API-käsk (Account › Tools › API Access)

**HostAfrica** — Domaini resselleri API-punkti ja võtmeandmed HostAfrica ressellerimoodulist. Esimene sandbox-punkt ei ole praegu dokumenteeritud; testige turvalisi lugemise-või-kirjendamise kontrollid enne elavate registreerimist kasutamist.

**Openprovider** — Kasutajahüid ja parool API-käiju abil aktiveeritud. Valikuline sandbox-režiim kasutab Openprovideri sandbox API, ning valikuline pooltoleva kliendi nimi saab kasutada registreerimist jaoks.

**Hostinger** — Jaamaal Hostinger shared hPanel API token peamisest Hostinger integreerist. Sama token on kasutab lõplikku domeenide mappimist ja Domeenijoutse registreerimise operatsioone.

**GoDaddy** — API key ja salvestus (developer.godaddy.com'ist)

**ResellerClub** — Reseller ID ja API key (ResellerClub kontrollplaaniest)

**NameSilo** — API key (namesilo.com › Account › API Manager)

**Enom** — Account ID ja API token

Kontrollige **Sandbox mode**, kui see saadaval on, et testida teenuse testimise keskkonnas enne lõplikku käivitamist.

### Samuti 3 – Kontrolli ühendust

Klõpsake **Test Connection**. Wizard lähevad kerge API-kutsuga kinnitama andmeid ja ühendust. Paranda kõik credential probleemid enne jätkamist.

### Samuti 4 – TLD-de importimine

Klõpsake **Import TLDs**, et veendada kõigist saadaval olevat TLD-de ja suurte pakkumise hinnadest seotud teenuse poolt. See täiustab domeenide toodud kasutamata TLD-nimetusega nimekirja. Import võib requireerida 30–60 sekundi suurt TLD-katalogidega teenuste jaoks.

TLD-id synkronitakse automaatselt iga päev ühtlustatud cron jobi abil.

### Samuti 5 – Domeenide toote loomine

Wizard luub poolt oletuse domeenide toote, millele on lisatud 10% hinnakujundus. Saate seda toodet kohe muuta või jätta see ja luua toote manuaalselt **Ultimate Multisite › Products** all.

Vaadake [Domain Products and Pricing](domain-products) selle kohta täieliku toote konfiguratsioonigeidi.

---

## Teenuse uudelleenkonfiguratsioon

Minema **Network Admin › Ultimate Multisite › Settings › Domain Seller** (või klõpsake **Settings** pluginide nimekirjas).

Seadistuslehel on:

- **Domein müügi võimalda** — lülitage kogu funktsioon sisse/välja
- **Oletune tarjoja** — tarjendaja, mida kasutatakse domeenide otsingute ja uuside tootete jaoks
- **Max TLD-id otsingul** — kui palju TLD-id kontrollida klienti otsingu korral; suuremad väärtused näitavad rohkem võimalusi, kuid on aeglasisemad
- **Käsilikuvuse kaudu cache'i kestus** — kui pika aega hoida käsilikuvuse ja hinnakujutamise tulemisi; väiksemad väärtused on täpsemad, kuid suurendavad API-kutseid
- **Domeenide tootete haldamine** — kiire link Tootete nendel listile

### Teise tarjendaja lisamine

Klõpsake **Configure providers** ja kä jätke wizard uuesti uusle registri. Saate konfigurida samal ajal mitmeid tarjendajaid. Assignige iga domeenide toote konkreetsele tarjendajale või jätke seda oletustena.

### TLD-id manuaalselt synkronimine

Sätted lehel klõpsake **Sync TLDs** konfiguratsiooniga tarjendaja kõrval, et tõmmata uusim hinnakujutamine. See on kasulik pärast seda, kui tarjendaja uuendab suurte pakkumiste hinate või lisab uusi TLD-id.

---

## Logid

Iga tarjendaja kirjeldab oma logi kanalile. Logid on nähtavad **Network Admin › Ultimate Multisite › Logs** all:

| Log kanál | Siseldused |
|---|---|
| `domain-seller-registration` | Kõik registreerimise üritused (kõik õnnestunud ja ebaõnnestunud) |
| `domain-seller-renewal` | Uusutusülesande tulemused |
| `domain-seller-opensrs` | Raw OpenSRS API tegevus |
| `domain-seller-namecheap` | Raw Namecheap API tegevus |
| `domain-seller-hostafrica` | Raw HostAfrica API tegevus |
| `domain-seller-openprovider` | Raw Openprovider API tegevus |
| `domain-seller-hostinger` | Raw Hostinger API tegevus |
| `domain-seller-godaddy` | Raw GoDaddy API tegevus |
| `domain-seller-resellerclub` | Raw ResellerClub API tegevus |
| `domain-seller-namesilo` | Raw NameSilo API tegevus |
| `domain-seller-enom` | Raw Enom API tegevus |

---

## Pärandi võimaluste joonised

Ei ole kõikide registratorite API-id eksponeerivad sama operatsioonid. Addon näitab tuetamata operatsioonid selge administratiivse süsteeni vigaid, mitte lihtsalt vaikselt ebaõnnestumiseega.

- **HostAfrica** toetab laiimat elavale reselleri töövoogil, sealhulgas otsingut, TLD/hinningu synkronimist, registreerimist, uusatamist, ülekanne, nimetajaülesandeid, DNS-registreid, EPP koodide, registratori lukustamist ja ID kaitset.
- **Openprovider** toetab reselleri hinnaga TLD synkronimist, registreerimist, uusatamist, ülekanne, nimetajaülesandeid, DNS-zonid, EPP koodide, registratori lukustamist ja WHOIS privaatsust. See autentineerub lühikese elua oleva bearer tokeniga, mida addon automaatselt uuendab.
- **Hostinger** toetab saadavalole otsingut, registreerimist, portfeli otsingut, nimetajaülesandeid, registratori lukustamist ja WHOIS privaatsust ühise hPanel API tokeniga. Hostingeri avalikud Domainide API ei eksponereerida reseller/wholesal hinnad, sisuka ülekanne, eksplisiitset uusutus või EPP-koodide kättesaamist; uusutused on ainult automaatselt uuesti uusatavad.
