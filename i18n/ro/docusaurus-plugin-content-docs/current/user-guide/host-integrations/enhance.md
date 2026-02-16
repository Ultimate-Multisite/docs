---
title: Îmbunătățește Integrarea Panoului de Control
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Integrarea cu Enhance Control Panel

## Prezentare generală
Enhance este un panou de control modern care oferă capabilități puternice de automatizare și gestionare a găzduirii. Această integrare permite sincronizarea automată a domeniilor și gestionarea certificatelor SSL între Ultimate Multisite și Enhance Control Panel.

**Discuție conexă:** Consultați [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) pentru sfaturi din comunitate și informații suplimentare.

## Funcționalități
- Sincronizare automată a domeniilor când acestea sunt mapate în Ultimate Multisite
- Furnizare automată de certificate SSL prin LetsEncrypt când DNS-ul se rezolvă
- Suport pentru subdomenii pentru rețelele care rulează în modul subdomain
- Ștergerea domeniilor când mapările sunt eliminate
- Testarea conexiunii pentru verificarea credențialelor API

## Cerințe

### Cerințe de sistem
- Enhance Control Panel instalat și accesibil
- Instalare WordPress Multisite găzduită pe sau conectată la un server Enhance
- Server web Apache (Enhance suportă în prezent configurații Apache; LiteSpeed Enterprise este disponibil la cost redus)

### Acces API
Trebuie să aveți acces de administrator la Enhance Control Panel pentru a crea token-uri API.

## Obținerea credențialelor API

### 1. Crearea unui token API

1. Autentificați-vă în Enhance Control Panel ca administrator
2. Faceți clic pe **Settings** în meniul de navigare
3. Navigați la **Access Tokens**
4. Faceți clic pe **Create Token**
5. Dați token-ului un nume descriptiv (de exemplu, „Ultimate Multisite Integration")
6. Atribuiți rolul **System Administrator**
7. Pentru data de expirare:
   - Lăsați câmpul gol dacă doriți ca token-ul să nu expire niciodată
   - Sau setați o dată specifică de expirare din motive de securitate
8. Faceți clic pe **Create**

După creare, **Access Token** și **Organization ID** vor fi afișate. **Salvați-le imediat** deoarece token-ul va fi afișat o singură dată.

### 2. Obținerea Organization ID

Organization ID este afișat pe pagina Access Tokens într-o casetă de informații albastră etichetată „Org ID: {your_id}".

Organization ID este un UUID cu format de tipul: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Puteți găsi Organization ID-ul unui client și astfel:
1. Mergeți la pagina **Customers**
2. Faceți clic pe **Manage customer** pentru clientul relevant
3. Uitați-vă la URL - Organization ID este reprezentat de caracterele alfanumerice de după `/customers/`

### 3. Obținerea Server ID

Pentru a găsi Server ID (necesar pentru operațiunile cu domenii):

1. În Enhance Control Panel, navigați la **Servers**
2. Faceți clic pe serverul unde rulează instalarea WordPress
3. Server ID (format UUID) va fi vizibil în URL sau în detaliile serverului
4. Alternativ, puteți folosi API-ul pentru a lista serverele:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID urmează formatul UUID: `00000000-0000-0000-0000-000000000000`

### 4. Obținerea URL-ului API

URL-ul API este URL-ul panoului Enhance Control Panel cu `/api/` adăugat la final:

```
https://your-enhance-panel.com/api/
```

**Important:** Calea `/api/` este obligatorie. Greșeli frecvente includ:
- Folosirea doar a domeniului fără `/api/`
- Folosirea HTTP în loc de HTTPS (HTTPS este necesar pentru securitate)

## Configurare

### Constante necesare

Adăugați următoarele constante în fișierul `wp-config.php`:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Configurare prin Integration Wizard

1. În panoul de administrare WordPress, mergeți la **Ultimate Multisite** > **Settings**
2. Navigați la tab-ul **Integrations**
3. Găsiți **Enhance Control Panel Integration** și faceți clic pe **Configuration**
4. Asistentul vă va ghida prin configurare:
   - **Pasul 1:** Introducere și prezentarea funcționalităților
   - **Pasul 2:** Introduceți credențialele API (Token, API URL, Server ID)
   - **Pasul 3:** Testați conexiunea
   - **Pasul 4:** Revizuire și activare

Puteți alege să:
- Lăsați asistentul să injecteze constantele în fișierul `wp-config.php` automat
- Copiați definițiile constantelor și să le adăugați manual

## Configurare suplimentară WordPress

Pe baza feedback-ului din comunitate ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), este posibil să fie nevoie să configurați aceste setări suplimentare:

### Configurare .htaccess

Dacă întâmpinați probleme cu maparea domeniilor:
1. Ștergeți fișierul `.htaccess` original al Enhance
2. Înlocuiți-l cu fișierul `.htaccess` standard pentru WordPress Multisite

### Constante pentru cookie-uri

Adăugați aceste constante în `wp-config.php` pentru a asigura gestionarea corectă a cookie-urilor pe domeniile mapate:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Cum funcționează

### Când un domeniu este mapat

1. Un utilizator mapează un domeniu personalizat în Ultimate Multisite (sau un site nou este creat în modul subdomain)
2. Integrarea trimite o cerere POST către API-ul Enhance: `/servers/{server_id}/domains`
3. Enhance adaugă domeniul în configurația serverului
4. Când DNS-ul se rezolvă către server, Enhance furnizează automat un certificat SSL prin LetsEncrypt
5. Domeniul devine activ cu HTTPS

### Când un domeniu este eliminat

1. O mapare de domeniu este ștearsă în Ultimate Multisite
2. Integrarea interoghează Enhance pentru a găsi ID-ul domeniului
3. O cerere DELETE este trimisă la: `/servers/{server_id}/domains/{domain_id}`
4. Enhance elimină domeniul din configurația serverului

### Verificarea DNS și SSL

Ultimate Multisite include verificare integrată pentru DNS și SSL:
- Puteți configura intervalul de verificare în **Domain Mapping Settings** (implicit: 300 secunde/5 minute)
- Sistemul va verifica propagarea DNS înainte de a marca un domeniu ca activ
- Validitatea certificatului SSL este verificată automat
- Enhance gestionează furnizarea SSL automat, deci nu este necesară configurarea manuală a SSL

## Verificarea configurării

### Testarea conexiunii

1. În Integration Wizard, folosiți pasul **Test Connection**
2. Plugin-ul va încerca să listeze domeniile de pe server
3. Un mesaj de succes confirmă că:
   - Credențialele API sunt corecte
   - URL-ul API este accesibil
   - Server ID este valid
   - Permisiunile sunt setate corect

### După maparea unui domeniu

1. Mapați un domeniu de test în Ultimate Multisite
2. Verificați jurnalele Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Verificați în Enhance Control Panel că domeniul a fost adăugat:
   - Mergeți la **Servers** > **Your Server** > **Domains**
   - Noul domeniu ar trebui să apară în listă
4. După propagarea DNS, verificați că SSL este furnizat automat

## Depanare

### Probleme de conexiune API

**Eroare: „Failed to connect to Enhance API"**
- Verificați că `WU_ENHANCE_API_URL` include `/api/` la final
- Asigurați-vă că folosiți HTTPS, nu HTTP
- Verificați că panoul Enhance este accesibil de pe serverul WordPress
- Verificați că nu există reguli de firewall care blochează conexiunea

**Eroare: „Enhance API Token not found"**
- Asigurați-vă că `WU_ENHANCE_API_TOKEN` este definit în `wp-config.php`
- Verificați că token-ul nu a fost șters sau nu a expirat în Enhance
- Verificați dacă există greșeli de tastare în valoarea token-ului

**Eroare: „Server ID is not configured"**
- Verificați că `WU_ENHANCE_SERVER_ID` este definit în `wp-config.php`
- Asigurați-vă că Server ID are un format UUID valid
- Confirmați că serverul există în panoul Enhance

### Domeniul nu este adăugat

**Verificați jurnalele:**
1. Mergeți la **Ultimate Multisite** > **Logs**
2. Filtrați după **integration-enhance**
3. Căutați mesaje de eroare care indică problema

**Cauze frecvente:**
- Format invalid al numelui de domeniu
- Domeniul există deja în Enhance
- Permisiuni API insuficiente (asigurați-vă că token-ul are rolul System Administrator)
- Server ID nu corespunde serverului real din Enhance

### Probleme cu certificatul SSL

**SSL nu se furnizează:**
- Verificați că DNS-ul indică spre adresa IP a serverului
- Verificați că domeniul se rezolvă corect: `nslookup yourdomain.com`
- Enhance necesită ca DNS-ul să se rezolve înainte de a putea furniza SSL
- Furnizarea SSL durează de obicei 5-10 minute după propagarea DNS
- Verificați jurnalele Enhance Control Panel pentru erori specifice SSL

**Depanare manuală SSL în Enhance:**
1. Mergeți la **Servers** > **Your Server** > **Domains**
2. Găsiți domeniul și verificați statusul SSL
3. Puteți declanșa manual furnizarea SSL dacă este necesar

### Intervalul de verificare DNS

Dacă domeniile sau certificatele SSL durează prea mult să se activeze:
1. Mergeți la **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Găsiți setarea **DNS Check Interval**
3. Ajustați de la valoarea implicită de 300 secunde la o valoare mai mică (minim: 10 secunde)
4. **Notă:** Intervale mai mici înseamnă verificări mai frecvente dar încărcare mai mare pe server

### Erori de autentificare

**Erori HTTP 401/403:**
- Regenerați token-ul API în Enhance
- Verificați că token-ul are rolul **System Administrator**
- Verificați că token-ul nu a expirat
- Asigurați-vă că folosiți Organization ID corect (deși de obicei nu este necesar în URL)

### Analiza jurnalelor

Activați jurnalizarea detaliată:
```php
// Adăugați în wp-config.php pentru depanare avansată
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Apoi verificați jurnalele la:
- Jurnale Ultimate Multisite: **Ultimate Multisite** > **Logs**
- Jurnal de depanare WordPress: `wp-content/debug.log`
- Jurnale panou Enhance: Disponibile în interfața de administrare Enhance

## Referință API

### Autentificare
Toate cererile API folosesc autentificare cu Bearer token:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Endpoint-uri utilizate frecvent

**Listare servere:**
```
GET /servers
```

**Listare domenii pe un server:**
```
GET /servers/{server_id}/domains
```

**Adăugare domeniu:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Ștergere domeniu:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Documentație API completă
Documentație API completă: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Bune practici

### Securitate
- **Nu salvați niciodată token-urile API în version control**
- Stocați token-urile în `wp-config.php` care ar trebui exclus din Git
- Folosiți token-uri cu permisiuni adecvate (System Administrator pentru integrare completă)
- Setați date de expirare pentru token-uri în mediile de producție
- Rotați token-urile periodic

### Performanță
- Folosiți intervalul implicit de verificare DNS (300 secunde) pentru a evita apeluri API excesive
- Monitorizați resursele serverului Enhance când rulați operațiuni cu domenii la scară largă
- Luați în considerare eșalonarea adăugării domeniilor dacă mapați multe domenii simultan

### Monitorizare
- Verificați regulat jurnalele Ultimate Multisite pentru erori de integrare
- Configurați monitorizare pentru adăugările de domenii eșuate
- Verificați că certificatele SSL se furnizează corect
- Fiți atenți la capacitatea serverului Enhance și limitele de domenii

## Resurse suplimentare

- **Documentație oficială Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **Documentație API Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Forum comunitate Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Discussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ghid Domain Mapping Ultimate Multisite:** Consultați pagina wiki „How to Configure Domain Mapping v2"

## Suport

Dacă întâmpinați probleme:
1. Consultați secțiunea Depanare de mai sus
2. Revizuiți jurnalele Ultimate Multisite
3. Consultați [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Contactați suportul Enhance pentru probleme specifice panoului
5. Creați o nouă discuție cu jurnale detaliate de erori pentru asistență din comunitate

## Note

- Această integrare gestionează doar alias-urile de domenii; Enhance gestionează SSL automat
- Integrarea suportă atât mapările de domenii personalizate, cât și site-urile bazate pe subdomenii
- Crearea automată a subdomeniului www poate fi configurată în setările Domain Mapping
- Enhance suportă în prezent configurații Apache (LiteSpeed Enterprise disponibil)
- Eliminarea unui domeniu din Ultimate Multisite va elimina domeniul din Enhance, dar este posibil să nu șteargă imediat certificatele SSL asociate
