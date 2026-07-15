---
title: Integratio CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Integratio CyberPanel

Hoc opus te explicat quommodo configurare integracion Ultimate Multisite CyberPanel ita ut domini mappati in rete automatico (et removetur) ut hostes virtuales in CyberPanel addeantur (et removuntur), cum optione provisionis auto-SSL per Let's Encrypt.

## Quid Facit {#what-it-does}

- Cum dominium est mappatum in Ultimate Multisite, integratio API CyberPanel vocat ut hostem virtuellem pro illo domino creetur.
- Cum mappatura domini removetur, integratio API vocat ut correspondens host virtualis deletur.
- Cum auto-SSL est activum, integratio emissio certificati Let's Encrypt immediatam post creationis hostis virtualis provocat.
- Optionem addit/removet alias `www.` secundum optionem tuam "Auto-create www subdomain" in parametro Configuratio Mappatura Domini.

## Praecondita {#prerequisites}

- Instantia CyberPanel operans (v2.3 vel posterior recomendata) accessibilis a server WordPress tuus.
- Situs existerne in CyberPanel qui iam radices network WordPress tuum servat. Integratio novos hostes virtuales ad hunc server attachabit.
- Access API CyberPanel activus est. Authentica per nominem et password admin CyberPanel tuum.
- Registra DNS tua pro dominis mappatis iam debent ad IP server tuum indicare antequam auto-SSL certum validum emittere possit.

## Requisita {#requirements}

Quod constants sequentes in file `wp-config.php` tuo definiendi debent:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Optionem, etiam definire possis:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — issue Let's Encrypt SSL after domain creation
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Used for SSL certificate contact
```

## Instrucciones de Configuración {#setup-instructions}

### 1. Habilitar la API de CyberPanel {#1-enable-the-cyberpanel-api}

1. Inicia sesión en tu panel de control de CyberPanel como administrador.
2. Ve a **Security** > **SSL** y confirma que el SSL esté activo en la interfaz de CyberPanel misma (es necesario para llamadas seguras a la API).
3. La API de CyberPanel está disponible por defecto en `https://tu-ip-del-servidor:8090/api/`. No se necesitan pasos adicionales para habilitarla; está activada por defecto para usuarios administradores.

### 2. Añadir Constantes a wp-config.php {#2-add-constants-to-wp-configphp}

Añade las siguientes constantes a tu archivo `wp-config.php` antes de la línea `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://tu-host-de-cyberpanel:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'tu_contraseña_segura');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Para habilitar el auto-SSL (recomendado):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@tu-dominio.com');
```

### 3. Habilitar la Integración {#3-enable-the-integration}

1. En tu administrador de red de WordPress, ve a **Ultimate Multisite** > **Settings**.
2. Navega a la pestaña **Domain Mapping** (Mapeo de Dominios).
3. Desplázate hasta **Host Integrations** (Integraciones del Host).
4. Habilita la integración de **CyberPanel**.
5. Haz clic en **Save Changes** (Guardar Cambios).

### 4. Verificar la Conectividad {#4-verify-connectivity}

Utiliza la prueba de conexión integrada en el asistente de configuración:

1. Ir ad **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Fai ad **Test Connection**.
3. Mensago successus confirmat quod plugin potest ad API CyberPanel recipi et correcte authentucari.

## Quod Operatur {#how-it-works}

### Domain Mapping {#domain-mapping}

Cum dominium in Ultimate Multisite mappatur:

1. Integrare praesum `POST` requiestum ad `/api/createWebsite` in host tuo CyberPanel enviat.
2. CyberPanel novum virtualem hostium pro dominio sub pacisco configurato creavit.
3. Radix documenti est setta ad indicandum radices network WordPress tuum.
4. Cum mappatura domini removetur, integrare `POST` requiestum ad `/api/deleteWebsite` vocat ut virtualem hostium purgatur.

### Auto-SSL {#auto-ssl}

Cum `WU_CYBERPANEL_AUTO_SSL` est `true`:

1. Postquam virtualis hostium creavit, integrare `POST` requiestum ad dominum `/api/issueSSL` vocat.
2. CyberPanel certificatum Let's Encrypt peteat ut ACME HTTP-01 challenge uscit.
3. Certum automatico renovatur per CyberPanel ante expiracionem.

> **Importans:** DNS debet in plero propagari ad IP adressam server tuum antequam Let's Encrypt dominum validare possit. Si emissio SSL immediata post mappationem fallat, ad propagationem DNS pati et re-trigger SSL ex dashboard CyberPanel sub **SSL** > **Manage SSL**.

### Subdomain www {#www-subdomain}

Si **Auto-create www subdomain** in statibus Domain Mapping tuis activum est, integrare etiam alias virtualis hostium pro `www.<dominium>` creavit et, cum auto-SSL est activum, certificatum copiam omnes variant apex et www emittit.

### Email Forwarders {#email-forwarders}

Cum addendum [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) activum est, CyberPanel potest etiam oferere forwarders email pro clientibus. Forwarders dirigunt missa in domini ad aliam casam receptam sine creatione mailbox completa, quod est utile pro alias ut `info@customer-domain.test` vel `support@customer-domain.test`.

Ante activation forwarderum pro clientibus:

1. Confirmare si constantae CyberPanel supra configuratae sunt et si test connection passat.
2. Activare provider email CyberPanel in pengaturan addon Emails.
3. Confirmare si domium clientis iam existerit in CyberPanel ante creationem forwarder.
4. Creare forwarder test et missum per illum antequam perpetuam planum offeras.

Si creation forwarder failaret, praecipue log activity Ultimate Multisite specta, deinde confirmare in CyberPanel si domium fons existerit et si user API habet permissiones ad management email.

## Referentia Configuratio {#configuration-reference}

| Constant | Necessarius | Default | Descripio |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Ibi | — | URL completa ad instantiam CyberPanel tuam includens portum, e.g. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Ibi | — | Username admin CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Ibi | — | Password admin CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Ibi | `Default` | Package hosting CyberPanel ut novo virtualibus assignare |
| `WU_CYBERPANEL_AUTO_SSL` | Non | `true` | Certatum SSL Let's Encrypt post creation domini |
| `WU_CYBERPANEL_PHP_VERSION` | Non | `PHP 8.2` | Versio PHP pro novis virtualibus (debet concordare cum versione installata in CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Non | — | Email contacti ad registrationem certificati SSL |

## Nota Importantes {#important-notes}

L'API de CyberPanel usa l'autenticazione basata su token di sessione. L'integrazione gestisce automaticamente l'acquisizione del token ad ogni chiamata API.
Il tuo account amministratore di CyberPanel deve avere i permessi per creare e cancellare siti web.
CyberPanel gira di default sulla porta `8090`. Se il tuo server utilizza un firewall, assicurati che questa porta sia accessibile dal server applicativo WordPress.
L'integrazione non gestisce i record DNS. Devi puntare il DNS del dominio all'indirizzo IP del tuo server prima di mappare il dominio in Ultimate Multisite.
Se usi OpenLiteSpeed (OLS), un riavvio elegante viene attivato automaticamente dopo i cambiamenti dei virtual host. Non è necessaria alcuna intervento manuale.

## Risoluzione Problemi {#troubleshooting}

### Connessione API Rifiutata {#api-connection-refused}

- Verifica che la porta `8090` sia aperta nel firewall del tuo server.
- Conferma che il valore di `WU_CYBERPANEL_HOST` includa il protocollo corretto (`https://`) e la porta.
- Controlla che il certificato SSL di CyberPanel sia valido; i certificati self-signed possono causare errori di verifica TLS. Imposta `WU_CYBERPANEL_VERIFY_SSL` su `false` solo in ambienti di rete privata fidati.

### Errori di Autenticazione {#authentication-errors}

- Conferma che il tuo `WU_CYBERPANEL_USERNAME` e `WU_CYBERPANEL_PASSWORD` siano corretti effettuando l'accesso direttamente a CyberPanel.
- CyberPanel blocca gli account dopo tentativi di accesso falliti ripetuti. Controlla **Security** > **Brute Force Monitor** in CyberPanel se si verificano i blocchi.

### Dominio Non Creato {#domain-not-created}

- Controlla il log delle attività di Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) per i messaggi di errore API.
- Verifica che il pacchetto definito in `WU_CYBERPANEL_PACKAGE` esista in CyberPanel (**Packages** > **List Packages**).
- Assicurati che il dominio non sia già registrato come sito web in CyberPanel: la creazione duplicata del sito restituisce un errore.

### Certificato SSL Non Emesso {#ssl-certificate-not-issued}

Confirmare propagării DNS: `dig +short your-domain.com` debinde IP-ul serverului tău ar trebui să apară înapoi.
Let's Encrypt impune limite de rată (rate limits). Dacă ai emis recent mai multe certificate pentru același domeniu, așteaptă înainte de a încerca din nou.
Verifică log-urile SSL CyberPanel sub **Logs** > **Error Logs** pentru detalii despre eșecurile în emiterea certificatelor.
Ca soluție de rezervă (fallback), poți emite SSL manual din CyberPanel: **SSL** > **Manage SSL** > selectează domeniul > **Issue SSL**.

## Referințe {#references}

- Documentația API CyberPanel: https://docs.cyberpanel.net/docs/category/api
- Administrarea SSL CyberPanel: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Limitele de rată Let's Encrypt: https://letsencrypt.org/docs/rate-limits/
