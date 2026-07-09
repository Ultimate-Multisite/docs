---
title: Integracija z Cloudwaysom
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Integracija z Cloudways {#cloudways-integration}

## Pregled {#overview}
Cloudways je upravljana platforma za hostiranje v oblaku, ki vam omogoča, da na različnih cloud ponudavah kot so DigitalOcean, AWS, Google Cloud in še veliko drugih, namestite WordPress spletne strani. Ta integracija omogoča avtomatizirano sinhronizacijo domen in upravljanje SSL sertifikatov med Ultimate Multisite in Cloudways.

## Funkcionalnosti {#features}
- Avtomatizirana sinhronizacija domena
- Upravljanje SSL sertifikatov
- Podpora za dodatne domene
- Validacija DNS-a za SSL sertifikate

## Zahtevi {#requirements}
Slede konstante morate definirati v svojem datoteki `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'vaša_cloudways_pošta');
define('WU_CLOUDWAYS_API_KEY', 'vaš_api_ključ');
define('WU_CLOUDWAYS_SERVER_ID', 'vaš_server_id');
define('WU_CLOUDWAYS_APP_ID', 'vaš_app_id');
```

Opcionalno lahko definirate tudi:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'izvajajo,razdeljeno, seznam, domenov');
```

## Navodila za nastavitve {#setup-instructions}

### 1. Dobite svoje Cloudways API podatke {#1-get-your-cloudways-api-credentials}
1. Pri logovanju na svoj Cloudways dashboard
2. Pojdite na "Account" > "API Keys" (Račun > API ključi)
3. Generirajte API ključ, če ga še ni
4. Kopirajte svojo pošto in API ključ

### 2. Dobite svoje ID serverja in aplikacije {#2-get-your-server-and-application-ids}
1. Na svojem Cloudways dashboardu pojadite na "Servers" (Serveri)
2. Izberite server kjer je hostirana vaša WordPress multisite
3. Server ID je vidno v URL-ju: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Pojdite na "Applications" (Aplikacije) in izberite svojo WordPress aplikacijo
5. App ID je vidno v URL-ju: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Dodajte konstante v wp-config.php {#3-add-constants-to-wp-configphp}
Dodajte slede konstante v datoteko `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'vaša_cloudways_e-pošta');
define('WU_CLOUDWAYS_API_KEY', 'tvoja_api_ključ');
define('WU_CLOUDWAYS_SERVER_ID', 'tvoj_server_id');
define('WU_CLOUDWAYS_APP_ID', 'tvoj_app_id');
```

Če, če imaš dodatne **zunanja** domene (izvenih tvoje multisite mreže), ki morajo vedno ostati na seznamu aliasov Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Ne vključevali lastno wildcard mrežo
**Ne dodaj** `*.tvoja-mreža.com` (ali kakšno vzorec poddomene tvoje mreže) na
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Pogledaj [Pomembno — puščica z wildcard SSL](important--wildcard-ssl-pitfall)
nizje, da bi razumeli zakaj to onemogoča izdajanje SSL sertifikatov za vsako najemnico.
:::

### 4. Omogočite integracijo {#4-enable-the-integration}

1. V admin panel WordPressa, idi na Ultimate Multisite > Settings (Nastavitve)
2. Pređi na tab "Domain Mapping" (Mapiranje domen)
3. Skroliraj dolje do "Host Integrations" (Integracije hostov)
4. Omogoči integracijo Cloudways
5. Klikni na "Save Changes" (Shrani spremembe)

## Kako to deluje {#how-it-works}

### Sinkronizacija domen {#domain-syncing}

Ko je domena mapirana v Ultimate Multisite:

1. Integracija pridobi vse trenutno mapirane domene
2. Dodaje novo domeno na seznam (z pripadajočo verzijo z `www`, če je primerno)
3. Pošlje popoln seznam Cloudways preko API-ja
4. Cloudways posodoblja aliase domen za tvoje aplikacije

Opomba: API Cloudways zahteva, da se pošlje popoln seznam domen vsak razpoložljiv čas, ne le dodajanje ali odstranjevanje pojedinačnih domen.

### Upravljanje SSL sertifikatov {#ssl-certificate-management}

Po sinkronizaciji domen:

1. Integracija preverja, kakšne domene imajo validna DNS podatek, ki kažejo na tvoj server
2. Pošlje zahtevo Cloudways za namestitev Let's Encrypt SSL sertifikatov za te domene
3. Cloudways obravnava izdajanje in namestitev SSL sertifikata

Integracija vedno zahteva **standardne** (newildcard) Let's Encrypt sertifikate iz Cloudways. Če v `WU_CLOUDWAYS_EXTRA_DOMAINS` navedete wildcard vzorec, se pred SSL zahtevo odstrani pred začetnim `*.`. Wildcard sam ni nikoli instaliran s to integracijo. Za uporabo certificate z wildcard na Cloudways bi morali biti sami in ga je to blokira izdajo Let's Encrypt za določene domene (pogledajte zapletje spodaj).

## Dodatne domene {#extra-domains}

Konstanta `WU_CLOUDWAYS_EXTRA_DOMAINS` vam omogoča, da navedete dodatne **zunanje** domene, ki morajo biti vedno na seznamu aliasov aplikacije Cloudways. Uporabite jo za:

- Zunanje domene, ki jih ne upravlja Ultimate Multisite (npr. oddelček za trženje, ki deli isti Cloudways aplikacijo).
- Domene za parkiranje ali staging, ki želite ohraniti na seznamu aliasov aplikacije.

**Ne uporabljajte** to konstanto za wildcard poddomene vaše lastne mreže (npr. `*.your-network.com`). Pogledajte zapletje z wildcard SSL spodaj.

## Pomembno — Zapletje z wildcard SSL {#important--wildcard-ssl-pitfall}

Pogosta napaka pri sleditvi standardnega postavitve Cloudways je dodajanje wildcarta, kot je `*.your-network.com`, v `WU_CLOUDWAYS_EXTRA_DOMAINS` ali ručna instalacija Cloudways certificate z wildcard za to wildcard.

**Če to storite, Cloudways se zavrača izdaji Let's Encrypt certificate za domene, ki jih Ultimate Multisite mapira.** Cloudways nadomesti aktivni SSL certificate na aplikaciji vsakokrat in že obstoječi wildcard certificate na aplikaciji blokira izdajo Let's Encrypt za določeno domeno, ki jo integracija uporablja.

### Priporočena konfiguracija SSL-a Cloudways za mrežo Ultimate Multisite {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Na tabu **SSL Certificate** v aplikaciji Cloudways instalirajte **standardni Let's Encrypt certifikat**, ki pokriva le `your-network.com` in `www.your-network.com` — **ne** wildcard.
2. Ne postavljate `*.your-network.com` (ali kakršno koli druge vzorce poddomena vaše mreže) v `WU_CLOUDWAYS_EXTRA_DOMAINS`. Ta konstanto rezervirajte le za **zunanja** domena.
3. Vzorec wildcard poddomek krepite na ravni **DNS** le (rekord `A` za `*.your-network.com`, ki kaže na IP vašega Cloudways serverja) tako, da se poddomena pravilno razrešuje. SSL za posamezne mapirane prilagojene domene je nato avtomatsko izdan Let's Encryptom preko integracije.

Če so prilagojene domene vaših najemateljev zamenjano brez SSL, preverite tabu Cloudways SSL. Če tam deluje wildcard certifikat, ga odstranite, izdanjo standardni Let's Encrypt certifikat le za glavno mrežo in odstranite vsake wildcard vnosov iz `WU_CLOUDWAYS_EXTRA_DOMAINS`. Nato ponovno sprostiti mapiranje domene (ali čakati na naslednje) in integracija začne ponovno izdajati certifikate za posamezne domene.

## Reševanje težav {#troubleshooting}

### Problemi z povezavo API {#api-connection-issues}
- Preverite da so vaša e-pošta in API ključ pravilni
- Preverite, da sta vaše serverje in aplikacijska ID pravilna
- Preverite, da ima vaš Cloudways račun potrebne dovoljenja

### Problemi z SSL sertifikati {#ssl-certificate-issues}
- Cloudways zahteva, da domene imajo validne DNS zapise, ki kažejo na vaš server, preden izda SSL sertifikate.
- Integracija validira DNS zapise pred zahtevo za SSL sertifikate.
- Če se SSL sertifikati ne izdajajo, preverite, ali so vaši domene pravilno usmerjeni na IP naslov vašega serverja.
- **Per-tenant prilagojeni domene z blokiranjem brez SSL?** Preverite tab "SSL Certificate" v aplikaciji Cloudways. Če je aktiv sertifikat za wildcard (manoval name, ali ki pokriva `*.your-network.com`), Cloudways ne bo izdal Let's Encrypt sertifikatov za individualno mapirane prilagojene domene. Zamenjajte ga standardnim Let's Encrypt sertifikatom, ki pokrivajo le glavni omrežni domen (`your-network.com`, `www.your-network.com`) in odstranite vsake wildcard vnos iz `WU_CLOUDWAYS_EXTRA_DOMAINS`. Nato ponovno sprostiti mapiranje domene (ali čakajte na naslednje) in integracija bo zahtevala sertifikate za vsako domeno.

### Domen ni dodan {#domain-not-added}
- Preverite logove Ultimate Multisite na kakršne koli napake.
- Potrdite, da ni domen že dodan v Cloudways.
- Upe asegurarse, da vaš Cloudways plan podpira število domen, ki ga dodajate.
