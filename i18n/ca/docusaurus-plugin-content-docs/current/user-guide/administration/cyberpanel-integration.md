---
title: Integració de CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Integració amb CyberPanel {#cyberpanel-integration}

Aquesta guia explica com configurar l'integració Ultimate Multisite amb CyberPanel perquè els domínis mapejats de la teva xarxa es puguin afegir (i eliminar) automàticament com a hosts virtuals a CyberPanel, amb la opció de provisionar auto-SSL via Let's Encrypt.

## Què fa {#what-it-does}

*   Quan es mapeja un domini a Ultimate Multisite, l'integració emana una crida a l'API de CyberPanel per crear un host virtual per a aquest domini.
*   Quan es elimina un mapeig de domini, l'integració emana una crida a l'API per eliminar l'host virtual corresponent.
*   Quan s'activa l'auto-SSL, l'integració activa l'emissió del certificat de Let's Encrypt immediatament després de crear l'host virtual.
*   Opcionalment, afegeix/elimina l'àlias `www.` depenent de la configuració "Auto-create www subdomain" (Auto-crear subdomini www) a les configuracions de Mapeig de Domini.

## Prerequisits {#prerequisites}

*   Una instància de CyberPanel en marxa (s'aconsella v2.3 o posterior) a la qual es pugui accedir des del teu servidor WordPress.
*   Un lloc web existent a CyberPanel que ja serveixi la raó de la teva xarxa WordPress. L'integració adjuntarà nous hosts virtuals a aquest servidor.
*   Accés a l'API de CyberPanel habilitat. L'autenticació utilitza el nom d'usuari i la contrasenya d'administrador de CyberPanel.
*   Els registres DNS dels domínis mapejats han de pointar ja al mòbil IP del teu servidor abans que l'auto-SSL pugui emetre un certificat vàlid.

## Requisits {#requirements}

Les constants següents han de ser definides al teu fitxer `wp-config.php`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Opcionalment, també pots definir:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — emet SSL de Let's Encrypt després de la creació del domini
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Utilitzat per al contacte del certificat SSL
```

## Instruccions de configuració {#setup-instructions}

### 1. Habilitar l'API de CyberPanel {#1-enable-the-cyberpanel-api}

1.  Inicia sessió al teu *dashboard* de CyberPanel com a administrador.
2.  Va a **Security** > **SSL** i confirma que l'SSL és actiu a la interfície de CyberPanel mateixa (necessari per a crides API segures).
3.  L'API de CyberPanel està disponible per defecte a `https://your-server-ip:8090/api/`. No cal passos addicionals per habilitarla; està activa per defecte per els usuaris administradors.

### 2. Afegir constants a wp-config.php {#2-add-constants-to-wp-configphp}

Afegir les constants següents al teu fitxer `wp-config.php` abans de la línia `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Per habilitar l'auto-SSL (recomendat):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Habilitar l'integració {#3-enable-the-integration}

1.  A l'administració de la teva xarxa WordPress, va a **Ultimate Multisite** > **Settings**.
2.  Navega a la pestanya **Domain Mapping**.
3.  Desplaça-te fins a **Host Integrations**.
4.  Habilita l'integració **CyberPanel**.
5.  Fes clic a **Save Changes**.

### 4. Verificar la connectivitat {#4-verify-connectivity}

Utilitza la prova de connexió integrada a l'assistència de configuració:

1.  Va a **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2.  Fes clic a **Test Connection**.
3.  Un missatge de èxit confirma que el plugin pot arribar a l'API de CyberPanel i autenticar-se correctament.

## Com funciona {#how-it-works}

### Mapeig de Domini {#domain-mapping}

Quan es mapeja un domini a Ultimate Multisite:

1.  L'integració emana una crida `POST` a `/api/createWebsite` al teu host CyberPanel.
2.  CyberPanel crea un nou host virtual per al domini dins del paquet configurat.
3.  La raó documental es configura per pointar al directori de raó de la teva xarxa WordPress.
4.  Quan es elimina el mapeig de domini, l'integració emana una crida a `/api/deleteWebsite` per netejar l'host virtual.

### Auto-SSL {#auto-ssl}

Quan `WU_CYBERPANEL_AUTO_SSL` és `true`:

1.  Després de crear l'host virtual, l'integració emana una crida `/api/issueSSL` per al domini.
2.  CyberPanel sol·licita un certificat de Let's Encrypt utilitzant el desafiament ACME HTTP-01.
3.  El certificat es renova automàticament per CyberPanel abans que caduci.

> **Important:** Els DNS han de ser completament propagats al mòbil IP del teu servidor abans que Let's Encrypt pugui validar el domini. Si l'emissió de SSL falla immediatament després del mapeig, espera la propagació dels DNS i re-activa l'SSL des del *dashboard* de CyberPanel, sota **SSL** > **Manage SSL**.

### Subdomini www {#www-subdomain}

Si **Auto-create www subdomain** està habilitat a les teves configuracions de Mapeig de Domini, l'integració també crea un àlias d'host virtual per a `www.<domini>` i, quan l'auto-SSL està actiu, emet un certificat que cobreix tant la variant apex com la www.

### Redireccionadors d'e-mail {#email-forwarders}

Quan l'addon [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) està actiu, CyberPanel també pot proporcionar redireccionadors d'e-mail per als clients. Els redireccionadors retransmeten missatges d'una adreça de domini a una altra caixa de correu sense crear una caixa de correu completa, cosa útil per a àliasi com `info@customer-domain.test` o `support@customer-domain.test`.

Abans d'habilitar els redireccionadors per als clients:

1.  Confirma que les constants de CyberPanel anteriors estan configurades i que la prova de connexió passa.
2.  Habilita el proveïdor d'e-mail de CyberPanel a les configuracions de l'addon Emails.
3.  Confirma que el domini del client ja existeix a CyberPanel abans de crear el redireccionador.
4.  Crea un redireccionador de prova i envia un missatge a través d'ell abans d'ofereir la funcionalitat en plans de producció.

Si la creació del redireccionador falla, revisa primer els *logs* d'activitat d'Ultimate Multisite, i després confirma a CyberPanel que el domini origen existeix i que l'usuari API té permisos de gestió d'e-mail.

## Referència de configuració {#configuration-reference}

| Constant | Requerit | Default | Descripció |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Sí | — | URL completa de la teva instància de CyberPanel incloent el port, ex. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Sí | — | Nom d'usuari d'administrador de CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Sí | — | Contrasenya d'administrador de CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Sí | `Default` | Paquet d'hosting de CyberPanel per assignar als nous hosts virtuals |
| `WU_CYBERPANEL_AUTO_SSL` | No | `true` | Emetre un certificat SSL de Let's Encrypt després de la creació del domini |
| `WU_CYBERPANEL_PHP_VERSION` | No | `PHP 8.2` | Versió de PHP per als nous hosts virtuals (ha de correspondre a una versió instal·lada a CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | No | — | Correu electrònic de contacte per al registre del certificat SSL |

## Notes importants {#important-notes}

*   L'API de CyberPanel utilitza autenticació de token basada en sessió. L'integració gestiona l'adquisició del token automàticament a cada crida API.
*   La teva compte d'administrador de CyberPanel ha de tenir permisos per crear i eliminar llocs web.
*   CyberPanel corre per defecte al port `8090`. Si el teu servidor utilitza un firewall, assegura't que aquest port és accessible des del servidor d'aplicacions WordPress.
*   L'integració no gestiona els registres DNS. Has de pointar els DNS del domini al mòbil IP del teu servidor abans de mapejar el domini a Ultimate Multisite.
*   Si utilitzes OpenLiteSpeed (OLS), es trigua un reinici gràcil automàticament després dels canvis d'host virtual. No és necessària intervenció manual.

## Solucionar problemes {#troubleshooting}

### Connexió API rebutjada {#api-connection-refused}

*   Verifica que el port `8090` estigui obert al firewall del teu servidor.
*   Confirma que el valor `WU_CYBERPANEL_HOST` inclou el protocol correcte (`https://`) i el port.
*   Comprova que el teu certificat SSL de CyberPanel és vàlid; els certificats auto-signats poden causar fallades de verificació TLS. Estableix `WU_CYBERPANEL_VERIFY_SSL` a `false` només en entorns de xarxa privada de confiança.

### Errors d'autenticació {#authentication-errors}

*   Confirma que el teu `WU_CYBERPANEL_USERNAME` i `WU_CYBERPANEL_PASSWORD` són correctes iniciando sessió a CyberPanel directament.
*   CyberPanel bloqueja comptes després de múltiples intents de connexió fallits. Comprova **Security** > **Brute Force Monitor** a CyberPanel si es produeixen bloquejos.

### Domini no creat {#domain-not-created}

*   Revisa el *log* d'activitat d'Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) per missatges d'error de l'API.
*   Verifica que el paquet definit a `WU_CYBERPANEL_PACKAGE` existeixi a CyberPanel (**Packages** > **List Packages**).
*   Assegura't que el domini no està ja registrat com a lloc web a CyberPanel; la creació de domínis duplicats retorna un error.

### Certificat SSL no emès {#ssl-certificate-not-issued}

*   Confirma que els DNS han propagat completament: `dig +short your-domain.com` hauria de retornar el mòbil IP del teu servidor.
*   Let's Encrypt imposa límits de taxa. Si has emès recentment diversos certificats per al mateix domini, espera abans de reintentar.
*   Comprova els *logs* de SSL de CyberPanel sota **Logs** > **Error Logs** per detalls sobre fallades d'emissió de certificats.
*   Com a alternativa, pots emetre l'SSL manualment des de CyberPanel: **SSL** > **Manage SSL** > selecciona el domini > **Issue SSL**.

## Referències {#references}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
