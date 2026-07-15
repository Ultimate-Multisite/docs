---
title: Aħmli l-integrazzjoni tal-Control Panel
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Migliċi l-Integrazzjoni mal-Control Panel

## Pan test {#overview}
Enhance huwa dashboard modern li jipprovide automazzjoni u pasturazzjoni b'potenza għall-hosting. Dan l-integrazzjoni tispjega sincronizzazzjoni awtomatika tal-domain u pasturazzjoni taċertifikat SSL bejn Ultimate Multisite u Enhance Control Panel.

**Diskussjoni Relatata:** Applika [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) għall-nasiħa tal-komunità u informazzjoni aggiem.

## Funzjonijiet {#features}
- Sincronizzazzjoni awtomatika tal-domain meta domains jkun imappati fil-Ultimate Multisite
- Prossijun awtomatika taċertifikat SSL b'attraħ Let'sEncrypt meta DNS jikkonverġi
- Support għal subdomain networks li jintistaw fil-subdomain mode
- Aġġettizzjoni tal-domain meta l-mapping jitqbel
- Testijiet ta konezzjoni biex tivverifika l-API credentials

## Reġistrazzjonijiet {#requirements}

### Reġistrazzjonijiet tal-Sistema {#system-requirements}
- Enhance Control Panel installat u aġġustabbil
- Installazzjoni WordPress Multisite li hija hosta fuq o konnessa għal server Enhance
- Apache web server (Enhance jippoġġeggja konfigurazzjonijiet Apache; LiteSpeed Enterprise huwa disponibbli b'kostu mwqtat)

### Aċċess API {#api-access}
Jista' tkun għandek aċċess amministratur għall-Enhance Control Panel biex tgħmli l-API tokens.

## Għti l-API Credentials Ttajba {#getting-your-api-credentials}

### 1. Ikreaw API Token {#1-create-an-api-token}

1. Idħol fil-Enhance Control Panel tiegħek b'mod amministratur
2. Klikka fuq **Settings** f'menu navigazzjoni
3. Naviga għal **Access Tokens**
4. Klikka fuq **Create Token**
5. Iddi un isimk deskrittiv (e.g., "Ultimate Multisite Integration")
6. Assegna l-ruolo **System Administrator**
7. Biex għall-data tal-espożizzjoni:
   - Aħjar itiel se jkun token ma jibqax jiddeċiedi
   - Illa tfatti data ta espożizzjoni speċifika biex tista' tiddikji l-sigurtà
8. Klikka fuq **Create**

Dopo la creazione, ti verranno mostrati il tuo **Access Token** e l'**Organization ID**. Salvali immediatamente perché il token verrà visualizzato solo una volta.

### 2. Ottieni il Tuo Organization ID {#2-get-your-organization-id}

L'Organization ID viene mostrato nella pagina dei Access Tokens in un riquadro informativo blu etichettato "Org ID: {your_id}".

L'Organization ID è un UUID formattato come: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Puoi anche trovare l'Organization ID di un cliente facendo quanto segue:
1. Vai alla pagina **Customers** (Clienti)
2. Clicca su **Manage customer** (Gestisci cliente) per il cliente in questione
3. Guarda l'URL - l'Organization ID sono i caratteri alfanumerici dopo `/customers/`

### 3. Ottieni il Tuo Server ID {#3-get-your-server-id}

Per trovare il tuo Server ID (necessario per le operazioni sul dominio):

1. Nel Enhance Control Panel, vai a **Servers** (Server)
2. Clicca sul server dove è installata la tua WordPress
3. Il Server ID (formato UUID) sarà visibile nell'URL o nei dettagli del server
4. In alternativa, puoi usare l'API per elencare i server:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Il server ID segue il formato UUID: `00000000-0000-0000-0000-000000000000`

### 4. Ottieni la Tua API URL {#4-get-your-api-url}

La tua API URL è l'URL del tuo Enhance Control Panel con `/api/` aggiunto alla fine:

```
https://your-enhance-panel.com/api/
```

**Importante:** Il percorso `/api/` è obbligatorio. Gli errori comuni includono:
- Usare solo il dominio senza `/api/`
- Usare HTTP invece di HTTPS (HTTPS è richiesto per la sicurezza)

## Configurazione {#configuration}

### Costanti Richieste {#required-constants}

Aggiungi le seguenti costanti al file `wp-config.php`:

// Migliċja tal-Integrazzjoni Control Panel
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');

### Isettabbilixxi tramite l-Wizard tal-Integrazzjoni {#setup-via-integration-wizard}

1. F'admin ta WordPress, għandek li tqgli għal **Ultimate Multisite** > **Settings**.
2. Naviga għall-tab **Integrations**.
3. Ilexi **Enhance Control Panel Integration** u għal click fuq **Configuration**.
4. L-wizard guiderixek fil-istabbiliximent:
   - **Step 1:** Introduzzjoni u sovrappreżwizzjoni tal-funzjonijiet (feature overview)
   - **Step 2:** Iġbedi l-kredenziali API tiegħek (Token, API URL, Server ID)
   - **Step 3:** Test il-konnessjoni
   - **Step 4:** Revisioni u attivazzjoni

Tista' tagħmel xi xi opzjonijiet:
- Tista' tixgħel l-wizard biex jiddux l-constants f'file `wp-config.php` tiegħek awtomatikament
- Kopja definizzjonijiet tal-constant u aġixxihom manualment

## Konfigurazzjoni WordPress Aggiuntiva {#additional-wordpress-configuration}

Bbażat fuq il-feedback tal-komunità ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), tista' terġaħed konfigurar xi settings aggiemali:

### Konfigurazzjoni tal-.htaccess {#htaccess-configuration}

Jekk esperi problemi maħsuba (domain mapping):
1. Elimina l-file `.htaccess` oriġinali ta Enhance
2. Sostitu it-tista' b'il-file `.htaccess` standard ta WordPress Multisite

### Cookie Constants {#cookie-constants}

Aġixxi l-constants hawn f'wp-config.php biex tispjega l-cookie b'mod appropriat mal-domain mapping:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Come Funziona {#how-it-works}

### Meta Jiddu l-Domain Mapping {#when-a-domain-is-mapped}

*(Nota: Il titolo "When a Domain is Mapped" huwa tradotto b'mod naturali għall-kontekst tekniku.)*

1. L-użatru mappa dominu kustom f Ultimate Multisite (jew siti ġdida tiddir fil-subdomain mode)
2. Il-integratifika tiffa richiesta POST għall-API ta Enhance: `/servers/{server_id}/domains`
3. Enhanz jiddejna id-domin f konfiguratja tal-server tiegħek
4. Meta l-DNS jipprovvdi għall-server tiegħek, Enhance jiddejna awtomatik sertifikat SSL biex jkun aktiva minn LetsEncrypt
5. Id-domin jiddejna b'HTTPS

### Meta Tiddir Dominu {#when-a-domain-is-removed}

1. Il-mappatura tal-domin idir fil-Ultimate Multisite
2. L-integratifika tqesser għ Enhance biex tikkunsid l-ID tal-domin
3. Tiffa DELETE tiffa għal: `/servers/{server_id}/domains/{domain_id}`
4. Enhanz jixleb il-domin mill-konfiguratja tal-server tiegħek

### Kontroll DNS u SSL {#dns-and-ssl-checking}

Ultimate Multisite jinkludi kontroll DNS u SSL built-in:
- Tista tsetConfiga l-intervall taċċettazzjoni fil-**Domain Mapping Settings** (default: 300 segwendi/5 minuti)
- Il-sistema tikkontrolla l-propagazzjoni tal-DNS qabel ma tgħmel id-domin aktiva
- L-validità sertifikat SSL tikkontrolla awtomatik
- Enhance jiddejna SSL awtomatik, għax ma għandekx biex tsetConfiga SSL manualment

## Verifika l-Setup {#verifying-setup}

### Test il-Konnekkizzjoni {#test-the-connection}

1. Fil-Integration Wizard, użja l-istepju **Test Connection**
2. Il-plugin jipprova jlista domini fuq is-server tiegħek
3. Messaggju ta suċċess jkonferma:
   - Bieddinji API huma korretti
   - URL tal-API huwa aġġustabbil
   - ID tal-server huwa valid
   - Permessuri huma msemmi b'mod appropriat

### Wara Ma Tiddir Dominu {#after-mapping-a-domain}

1. Mappa domin test fil-Ultimate Multisite
2. Kontrolla l-logs tal-Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Verifika fil-Enhance Control Panel li id-domin tiddir:
   - Irrid għal **Servers** > **Your Server** > **Domains**
   - Id-domin ġdid għandu juri fil-lista
4. Meta l-DNS jipprovvdi, verifika li SSL jiddejna awtomatik

## Problemi di Troubleshooting {#troubleshooting}

### Problemi di Connessione API {#api-connection-issues}

**Errore: "Failed to connect to Enhance API" (Impossibile connettersi all'API Enhance)**
- Verifica che `WU_ENHANCE_API_URL` includa `/api/` alla fine.
- Assicurati di usare HTTPS, non HTTP.
- Controlla che il pannello Enhance sia accessibile dal tuo server WordPress.
- Verifica che non ci siano regole del firewall che bloccano la connessione.

**Errore: "Enhance API Token not found" (Token API Enhance non trovato)**
- Assicurati che `WU_ENHANCE_API_TOKEN` sia definito in `wp-config.php`.
- Verifica che il token non sia stato eliminato o scaduto in Enhance.
- Controlla se ci sono errori di battitura nel valore del token.

**Errore: "Server ID is not configured" (ID Server non configurato)**
- Verifica che `WU_ENHANCE_SERVER_ID` sia definito in `wp-config.php`.
- Assicurati che l'ID Server abbia un formato UUID valido.
- Conferma che il server esista nel tuo pannello Enhance.

### Dominio Non Aggiunto {#domain-not-added}

**Controlla i log:**
1. Vai su **Ultimate Multisite** > **Logs**.
2. Filtra per **integration-enhance**.
3. Cerca messaggi di errore che indichino il problema.

**Cause comuni:**
- Formato del nome del dominio non valido.
- Il dominio esiste già in Enhance.
- Permessi API insufficienti (assicurati che il token abbia il ruolo di System Administrator).
- L'ID Server non corrisponde al server effettivo in Enhance.

### Problemi con il Certificato SSL {#ssl-certificate-issues}

**SSL non viene provisionato:**
- Verifica che il DNS punti all'indirizzo IP del tuo server.
- Controlla che il dominio venga risolto correttamente: `nslookup yourdomain.com`.
- Enhance richiede che il DNS sia risolto prima di poter provisionare l'SSL.
- Il provisioning SSL richiede tipicamente 5-10 minuti dopo la propagazione del DNS.
- Controlla i log del Pannello di Controllo Enhance per errori specifici relativi all'SSL.

**Risoluzione dei problemi manuale dell'SSL in Enhance:**
1. Vai su **Servers** > **Your Server** > **Domains**.
2. Trova il tuo dominio e controlla lo stato SSL.
3. Puoi attivare manualmente il provisioning SSL se necessario.

### Intervallo di Controllo DNS {#dns-check-interval}

אם דומיינים או תעודות SSL לוקחים יותר מדי זמן להפעלה:
1. עבור אל **Ultimate Multisite** > **Settings** > **Domain Mapping** (מיפוי דומיינים)
2. מצא את ההגדרה **DNS Check Interval** (מרווח בדיקת DNS)
3. שנה מהערך ברירת המחדל של 300 שניות לערך נמוך יותר (מינימום: 10 שניות)
4. **הערה:** מרווחי זמן נמוכים משמעותם בדיקות תכופות יותר, אבל זה יכול להפעיל עומס גבוה יותר על השרת.

### שגיאות אימות (Authentication Errors) {#authentication-errors}

**שגיאות HTTP 401/403:**
- הפעל מחדש את אסימון ה-API שלך ב-Enhance
- ודא שהאסימון כולל את התפקיד **System Administrator** (מנהל מערכת)
- בדוק שהאסימון לא פג תוקף
- ודא שאתה משתמש ב-Organization ID הנכון (למרות שזה בדרך כלל אינו נדרש בכתובת ה-URL)

### ניתוח לוגים (Log Analysis) {#log-analysis}

הפעל רישום מפורט:
```php
// הוסף ל-wp-config.php לצורך דיבוג משופר
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

לאחר מכן בדוק את הלוגים ב:
- לוגי Ultimate Multisite: **Ultimate Multisite** > **Logs**
- לוג דיבוג של WordPress: `wp-content/debug.log`
- לוגי פאנל Enhance: זמין בממשק הניהול של Enhance

## הפנייה ל-API (API Reference) {#api-reference}

### אימות (Authentication) {#authentication}
כל בקשות ה-API משתמשות באימות באמצעות Bearer token:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### נקודות קצה נפוצות המשמשות (Common Endpoints Used) {#common-endpoints-used}

**רשימת שרתים:**
```
GET /servers
```

**רשימת דומיינים על שרת:**
```
GET /servers/{server_id}/domains
```

**הוספת דומיין:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**מחיקת דומיין:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### תיעוד API מלא {#full-api-documentation}
תיעוד API מלא: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## שיטות עבודה מומלצות (Best Practices) {#best-practices}

### Sicurezza {#security}
- **Ma kbepp tal-API tokens għall version control**
- Iżguraw il-tokens f `wp-config.php` li għandhom jiġu esklutti minn Git
- Użaw tokens b permessappropri (System Administrator għall integrazzjoni kollha)
- Istawilaw data l-expiry tal-token għall ambienti di produċjoni
- Rotaw il-tokens bejn periodi

### Prestazzjoni {#performance}
- Użaw il-interval difiċjali tal-DNS check (300 segwendi) biex tevitaw appel API eċċessivi
- Monitorjaw resorsi ta' server Enhance meta qed tgrazzu operazzjonijiet diġitali kbira
- Isperjaw l-aġġunganijiet ta' domini b'mod stagħonit jekk qed mappaw domini ħafiet wahedda

### Monitora {#monitoring}
- Kontrollaw regolarment il-logs ta' Ultimate Multisite għall errori ta' integrazzjoni
- Istawilaw monitora għall aġġunganijiet ta' domini li ma jkunx muġġogħu
- Verifikaw li sertifikat SSL qed jiġu provvista b'mod korrett
- Ħażinu l-kapacità tal-server Enhance u limitijiet domini

## Risorsi Aggiuntivi {#additional-resources}

- **Dokumentazzjoni Uffiċjali ta' Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **Dokumentazzjoni API ta' Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Forum Komunitario ta' Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **Diskussjoni GitHub:** [Issue #265 - Enhancament tal-Tips ta' Integrazzjoni](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **It-trattament ta' Mappatura Domini ta' Ultimate Multisite:** Isma' laqa' wiki "How to Configure Domain Mapping v2"

## Support {#support}

Jekk tikkontrolli problemi:
1. Kontrolla secun għall Troubleshooting fejn
2. Rivisja il-logs ta' Ultimate Multisite
3. Konsulta [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Iċċekkja support ta' Enhance biex tista' problemi speċifi tal-panel
5. Icrea diskussjoni ġdida b log diġitali dettaljati għall assistenza tal-komunità

## Nota {#notes}

Jiddeha, dan integrata tieħu għal alias ta domini biss; l-Enhance jidabbir is-SSL awtomatikament.
Dan integrata tappoġġa sia mappati ta domini kustomi u siti b bas subdomain.
Il-creaġixxi awtomatiku tal-subdomain www jista' jkollott mill-settings ta Domain Mapping.
L-Enhance jiddaħħol attualmente konfigurat għall-Apache (LiteSpeed Enterprise huwa disponibbli).
Il-elimina ta domini min Ultimate Multisite tixleb il-domini min Enhance iżda ma tista' tellaq is-SSL certificates assoċjati immediatament.
