---
title: Integrare CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Integrarea CyberPanel

Acest ghid explică cum să configurezi integrarea Ultimate Multisite CyberPanel pentru ca domeniile mapate din rețeaua ta să fie adăugate (și eliminate) automat ca *virtual hosts* în CyberPanel, cu opțiunea de *auto-SSL* prin Let's Encrypt.

## Ce face {#what-it-does}

- Când un domeniu este mapat în Ultimate Multisite, integrarea apelează API-ul CyberPanel pentru a crea un *virtual host* pentru acel domeniu.
- Când o mapare de domeniu este eliminată, integrarea apelează API-ul pentru a șterge *virtual host*-ul corespunzător.
- Când *auto-SSL* este activat, integrarea declanșează imediat emiterea certificatului Let's Encrypt după ce *virtual host*-ul a fost creat.
- Opțional adaugă/elimină aliasul `www.` în funcție de setarea ta „Auto-create www subdomain” în setările de Mapare a Domeniilor (*Domain Mapping*).

## Precondiții {#prerequisites}

- O instanță CyberPanel funcțională (se recomandă v2.3 sau mai nou) accesibilă de la serverul tău WordPress.
- Un site web existent în CyberPanel care găzduiește deja rădăcina rețelei tale WordPress. Integrarea atașează *virtual host*-uri noi acestui server.
- Acces la API-ul CyberPanel activat. Autentificarea folosește numele de utilizator și parola de administrator CyberPanel.
- Înregistrările DNS pentru domeniile mapate trebuie să indice deja adresa IP a serverului tău înainte ca *auto-SSL* să poată emite un certificat valid.

## Cerințe {#requirements}

Constantele de mai jos trebuie definite în fișierul tău `wp-config.php`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Opțional, poți defini și:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Implicit: true — emite Let's Encrypt SSL după crearea domeniului
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Implicit: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Utilizat pentru contactul certificatului SSL
```

## Instrucțiuni de instalare {#setup-instructions}

### 1. Activarea API-ului CyberPanel {#1-enable-the-cyberpanel-api}

1. Autentifică-te în *dashboard*-ul CyberPanel ca administrator.
2. Mergi la **Security** > **SSL** și confirmă că SSL este activat pe interfața CyberPanel în sine (este necesar pentru apelurile API securizate).
3. API-ul CyberPanel este disponibil în mod implicit la `https://your-server-ip:8090/api/`. Nu sunt necesare pași suplimentari pentru a-l activa — este activat implicit pentru utilizatorii de administrator.

### 2. Adăugarea constantelor în wp-config.php {#2-add-constants-to-wp-configphp}

Adaugă următoarele constante în fișierul tău `wp-config.php`, înainte de linia `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Pentru a activa *auto-SSL* (recomandat):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Activarea Integrației {#3-enable-the-integration}

1. În zona de administrare a rețelei WordPress, mergi la **Ultimate Multisite** > **Settings**.
2. Navighează la tab-ul **Domain Mapping**.
3. Derulează până la **Host Integrations**.
4. Activează integrarea **CyberPanel**.
5. Apasă **Save Changes**.

### 4. Verificarea Conectivității {#4-verify-connectivity}

Folosește testul de conectare încorporat în *wizard*-ul de setări:

1. Mergi la **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Apasă **Test Connection**.
3. Un mesaj de succes confirmă că plugin-ul poate ajunge la API-ul CyberPanel și se autentifică corect.

## Cum funcționează {#how-it-works}

### Maparea Domeniilor (*Domain Mapping*) {#domain-mapping}

Când un domeniu este mapat în Ultimate Multisite:

1. Integrarea trimite o cerere `POST` la `/api/createWebsite` pe gazda ta CyberPanel.
2. CyberPanel creează un *virtual host* nou pentru domeniu sub pachetul configurat.
3. Directorul rădăcină (*document root*) este setat să indice directorul rădăcină al rețelei tale WordPress.
4. Când maparea domeniului este eliminată, integrarea apelează `/api/deleteWebsite` pentru a curăța *virtual host*-ul.

### Auto-SSL {#auto-ssl}

Când `WU_CYBERPANEL_AUTO_SSL` este setat pe `true`:

1. După ce *virtual host*-ul este creat, integrarea apelează `/api/issueSSL` pentru domeniu.
2. CyberPanel solicită un certificat Let's Encrypt folosind *challenge*-ul ACME HTTP-01.
3. Certificatul este reînnoit automat de CyberPanel înainte de expirare.

> **Important:** DNS-ul trebuie să fie propagat complet către adresa IP a serverului tău înainte ca Let's Encrypt să poată valida domeniul. Dacă emiterea SSL eșuează imediat după mapare, așteaptă propagarea DNS-ului și re-declanșează SSL-ul de pe *dashboard*-ul CyberPanel, sub **SSL** > **Manage SSL**.

### Subdomeniul www {#www-subdomain}

Dacă **Auto-create www subdomain** este activat în setările de Mapare a Domeniilor, integrarea creează și un alias de *virtual host* pentru `www.<domeniu>` și, atunci când *auto-SSL* este activat, emite un certificat care acoperă atât varianta *apex*, cât și varianta www.

### Forwardere de Email {#email-forwarders}

Când addon-ul [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) este activ, CyberPanel poate oferi și forwardere de email pentru clienți. Forwarderii redirecționează mesajele de la o adresă de domeniu către o altă cutie de poștă fără a crea o cutie de poștă completă, ceea ce este util pentru aliasuri precum `info@customer-domain.test` sau `support@customer-domain.test`.

Înainte de a activa forwarderii pentru clienți:

1. Confirmă că constantele CyberPanel de mai sus sunt configurate și că testul de conectare trece.
2. Activează furnizorul de email CyberPanel în setările addon-ului Emails.
3. Confirmă că domeniul clientului există deja în CyberPanel înainte de a crea forwarderul.
4. Creează un forwarder de test și trimite un mesaj prin el înainte de a oferi funcționalitatea pe planurile de producție.

Dacă crearea forwarderului eșuează, verifică mai întâi jurnalele de activitate Ultimate Multisite, apoi confirmă în CyberPanel că domeniul sursă există și că utilizatorul API are permisiuni de management al email-urilor.

## Referință de Configurare {#configuration-reference}

| Constantă | Necesar | Implicit | Descriere |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Da | — | URL-ul complet către instantanța CyberPanel, incluzând portul, ex: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Da | — | Numele de utilizator de administrator CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Da | — | Parola de administrator CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Da | `Default` | Pachetul de găzduire CyberPanel pentru atribuirea *virtual host*-urilor noi |
| `WU_CYBERPANEL_AUTO_SSL` | Nu | `true` | Emite un certificat SSL Let's Encrypt după crearea domeniului |
| `WU_CYBERPANEL_PHP_VERSION` | Nu | `PHP 8.2` | Versiunea PHP pentru *virtual host*-uri noi (trebuie să corespundă unei versiuni instalate în CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Nu | — | Email-ul de contact pentru înregistrarea certificatului SSL |

## Note Importante {#important-notes}

- API-ul CyberPanel folosește autentificarea cu token bazată pe sesiuni. Integrarea gestionează achiziția token-ului automat la fiecare apel API.
- Contul de administrator CyberPanel trebuie să aibă permisiuni pentru a crea și șterge site-uri web.
- CyberPanel rulează pe portul `8090` în mod implicit. Dacă serverul tău folosește un *firewall*, asigură-te că acest port este accesibil de la serverul aplicației WordPress.
- Integrarea nu gestionează înregistrările DNS. Trebuie să indice domeniile DNS către adresa IP a serverului tău înainte de a mapa domeniul în Ultimate Multisite.
- Dacă folosești OpenLiteSpeed (OLS), o repornire blândă (*graceful restart*) este declanșată automat după modificările de *virtual host*. Nu este necesară intervenție manuală.

## Depanare {#troubleshooting}

### Conexiunea API Refuzată (*API Connection Refused*) {#api-connection-refused}

- Verifică dacă portul `8090` este deschis în *firewall*-ul serverului tău.
- Confirmă că valoarea `WU_CYBERPANEL_HOST` include protocolul corect (`https://`) și portul.
- Verifică dacă certificatul SSL CyberPanel este valid; certificatele auto-semnate pot provoca eșecuri de verificare TLS. Setează `WU_CYBERPANEL_VERIFY_SSL` pe `false` doar în medii private de încredere.

### Erori de Autentificare {#authentication-errors}

- Confirmă că `WU_CYBERPANEL_USERNAME` și `WU_CYBERPANEL_PASSWORD` sunt corecte, autentificându-te direct în CyberPanel.
- CyberPanel blochează conturile după încercări repetate de login eșuate. Verifică **Security** > **Brute Force Monitor** în CyberPanel dacă apar blocări.

### Domeniul Nu Este Creat {#domain-not-created}

- Verifică jurnalele de activitate Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) pentru mesaje de eroare API.
- Verifică dacă pachetul definit în `WU_CYBERPANEL_PACKAGE` există în CyberPanel (**Packages** > **List Packages**).
- Asigură-te că domeniul nu este deja înregistrat ca site web în CyberPanel — crearea de site-uri duplicate returnează o eroare.

### Certificatul SSL Nu Este Emitat {#ssl-certificate-not-issued}

- Confirmă că DNS-ul a propagat complet: `dig +short your-domain.com` ar trebui să returneze adresa IP a serverului tău.
- Let's Encrypt impune limite de rată. Dacă ai emis recent mai multe certificate pentru același domeniu, așteaptă înainte de a încerca din nou.
- Verifică jurnalele SSL CyberPanel sub **Logs** > **Error Logs** pentru detalii despre eșecurile de emitere a certificatului.
- Ca soluție alternativă, poți emite SSL manual de pe CyberPanel: **SSL** > **Manage SSL** > selectează domeniul > **Issue SSL**.

## Referințe {#references}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
