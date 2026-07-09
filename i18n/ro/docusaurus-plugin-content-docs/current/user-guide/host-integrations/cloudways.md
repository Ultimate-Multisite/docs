---
title: Integrare Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Integrare Cloudways {#cloudways-integration}

## Prezentare generală {#overview}
Cloudways este o platformă de găzduire cloud administrată care îți permite să implementezi site-uri WordPress pe diverși furnizori cloud precum DigitalOcean, AWS, Google Cloud și alții. Această integrare permite sincronizarea automată a domeniilor și gestionarea certificatelor SSL între Ultimate Multisite și Cloudways.

## Funcționalități {#features}
- Sincronizare automată a domeniilor
- Gestionarea certificatelor SSL
- Suport pentru domenii suplimentare
- Validare DNS pentru certificate SSL

## Cerințe {#requirements}
Următoarele constante trebuie definite în fișierul tău `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Opțional, poți defini și:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Instrucțiuni de configurare {#setup-instructions}

### 1. Obține credențialele API Cloudways {#1-get-your-cloudways-api-credentials}

1. Autentifică-te în Dashboard-ul Cloudways
2. Mergi la "Account" > "Chei API"
3. Generează o cheie API dacă nu ai deja una
4. Copiază emailul și cheia API

### 2. Obține ID-urile serverului și aplicației tale {#2-get-your-server-and-application-ids}

1. În Dashboard-ul Cloudways, mergi la "Servere"
2. Selectează serverul pe care este găzduit multisite-ul tău WordPress
3. ID-ul serverului este vizibil în URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Mergi la "Aplicații" și selectează aplicația ta WordPress
5. ID-ul aplicației este vizibil în URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Adaugă constantele în wp-config.php {#3-add-constants-to-wp-configphp}

Adaugă următoarele constante în fișierul tău `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Dacă ai domenii **externe** suplimentare (în afara rețelei tale multisite) care ar trebui păstrate mereu în lista de aliasuri Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Nu include wildcard-ul propriei tale rețele
**Nu** adăuga `*.your-network.com` (sau orice tipar de subdomeniu al propriei tale rețele) în
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Vezi [Important — capcana SSL wildcard](#important--wildcard-ssl-pitfall)
mai jos pentru motivul pentru care acest lucru împiedică emiterea certificatelor SSL per chiriaș.
:::

### 4. Activează integrarea {#4-enable-the-integration}

1. În administrarea WordPress, mergi la Ultimate Multisite > Setări
2. Navighează la fila "Mapare domenii"
3. Derulează în jos până la "Integrări gazdă"
4. Activează integrarea Cloudways
5. Fă clic pe "Salvează modificările"

## Cum funcționează {#how-it-works}

### Sincronizarea domeniilor {#domain-syncing}

Când un domeniu este mapat în Ultimate Multisite:

1. Integrarea recuperează toate domeniile mapate în prezent
2. Adaugă noul domeniu la listă (împreună cu o versiune www, dacă este cazul)
3. Trimite lista completă către Cloudways prin API
4. Cloudways actualizează aliasurile de domeniu pentru aplicația ta

Notă: API-ul Cloudways necesită trimiterea listei complete de domenii de fiecare dată, nu doar adăugarea sau eliminarea domeniilor individuale.

### Gestionarea certificatelor SSL {#ssl-certificate-management}

După ce domeniile sunt sincronizate:

1. Integrarea verifică ce domenii au înregistrări DNS valide care indică spre serverul tău
2. Trimite o cerere către Cloudways pentru a instala certificate SSL Let's Encrypt pentru acele domenii
3. Cloudways gestionează emiterea și instalarea certificatelor SSL

Integrarea solicită întotdeauna certificate Let's Encrypt **standard** (non-wildcard) de la
Cloudways. Dacă un tipar wildcard este furnizat în `WU_CLOUDWAYS_EXTRA_DOMAINS`, prefixul
`*.` este eliminat înainte de cererea SSL — wildcard-ul în sine nu este instalat niciodată de această
integrare. Pentru a folosi un certificat wildcard pe Cloudways, ar trebui să îl instalezi
manual, dar acest lucru blochează emiterea Let's Encrypt per domeniu pentru domeniile personalizate mapate
(vezi capcana de mai jos).

## Domenii suplimentare {#extra-domains}

Constanta `WU_CLOUDWAYS_EXTRA_DOMAINS` îți permite să specifici domenii **externe**
suplimentare care ar trebui păstrate mereu în lista de aliasuri a aplicației Cloudways. Folosește-o pentru:

- Domenii externe care nu sunt gestionate de Ultimate Multisite (de ex. un site de marketing separat care partajează aceeași aplicație Cloudways)
- Domenii parcate sau de staging pe care vrei să le păstrezi în lista de aliasuri a aplicației

**Nu** folosi această constantă pentru wildcard-ul de subdomeniu al propriei tale rețele
(de ex. `*.your-network.com`). Vezi capcana SSL wildcard de mai jos.

## Important — capcana SSL wildcard {#important--wildcard-ssl-pitfall}

O greșeală frecventă când urmezi configurarea implicită Cloudways este să adaugi un wildcard precum
`*.your-network.com` în `WU_CLOUDWAYS_EXTRA_DOMAINS` sau să instalezi manual un certificat SSL
wildcard Cloudways pentru acel wildcard.

**Dacă faci acest lucru, Cloudways va refuza să emită certificate Let's Encrypt pentru
domeniile personalizate per chiriaș pe care Ultimate Multisite le mapează.** Cloudways înlocuiește certificatul
SSL activ de pe aplicație de fiecare dată, iar un certificat wildcard preexistent pe
aplicație blochează emiterea Let's Encrypt per domeniu pe care se bazează integrarea.

### Configurarea SSL Cloudways recomandată pentru o rețea Ultimate Multisite {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. În fila **Certificat SSL** a aplicației Cloudways, instalează un **certificat
   Let's Encrypt standard** care acoperă doar `your-network.com` și `www.your-network.com`
   — **nu** un wildcard.
2. **Nu** pune `*.your-network.com` (sau orice tipar de subdomeniu al propriei tale rețele) în
   `WU_CLOUDWAYS_EXTRA_DOMAINS`. Rezervă acea constantă doar pentru domenii **externe**.
3. Creează wildcard-ul de subdomeniu per chiriaș doar la nivel **DNS** (o înregistrare `A` pentru
   `*.your-network.com` care indică spre IP-ul serverului tău Cloudways) astfel încât subsite-urile să se rezolve. SSL
   pentru domeniile personalizate mapate individual este apoi emis automat de integrare
   prin Let's Encrypt.

Dacă domeniile personalizate ale tenant-ilor tăi rămân fără SSL, verifică fila SSL din Cloudways. Dacă un
certificat wildcard este activ acolo, elimină-l, reemite un certificat Let's Encrypt
standard doar pentru domeniul principal al rețelei și elimină orice intrări wildcard din
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Apoi redeclanșează o mapare de domeniu (sau așteapt-o pe următoarea)
și integrarea va începe din nou să emită certificate pentru fiecare domeniu.

## Depanare {#troubleshooting}

### Probleme de conexiune API {#api-connection-issues}
- Verifică dacă emailul și cheia API sunt corecte
- Verifică dacă ID-urile serverului și aplicației sunt corecte
- Asigură-te că Account-ul tău Cloudways are permisiunile necesare

### Probleme cu certificatele SSL {#ssl-certificate-issues}
- Cloudways necesită ca domeniile să aibă înregistrări DNS valide care indică spre serverul tău înainte de a emite certificate SSL
- Integrarea validează înregistrările DNS înainte de a solicita certificate SSL
- Dacă certificatele SSL nu sunt emise, verifică dacă domeniile tale indică corect spre adresa IP a serverului tău
- **Domeniile personalizate per tenant rămân fără SSL?** Verifică fila SSL Certificate a aplicației Cloudways. Dacă un certificat wildcard (instalat manual sau care acoperă `*.your-network.com`) este activ, Cloudways nu va emite certificate Let's Encrypt pentru domenii personalizate mapate individual. Înlocuiește-l cu un certificat Let's Encrypt standard care acoperă doar domeniul principal al rețelei (`your-network.com`, `www.your-network.com`) și elimină orice intrări wildcard din `WU_CLOUDWAYS_EXTRA_DOMAINS`. Apoi redeclanșează o mapare de domeniu (sau așteapt-o pe următoarea), iar integrarea va solicita certificate pentru fiecare domeniu.

### Domeniul nu a fost adăugat {#domain-not-added}
- Verifică logurile Ultimate Multisite pentru orice mesaje de eroare
- Verifică dacă domeniul nu este deja adăugat în Cloudways
- Asigură-te că planul tău Cloudways acceptă numărul de domenii pe care le adaugi
