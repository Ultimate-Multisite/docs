---
title: CyberPanel Integrazioa
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integrazioa

Hau erantzun hau irakurri duzu Ultimate Multisite CyberPanel integrazioa konfiguratzeko, nahiz domain-ek network-an mapatutakoak automatikoki CyberPanel-eko virtual host-ek (aurretik eta ondoreko) jokatzen (eta haren aldokia) da, Let's Encrypt-eko auto-SSL provizionamendua opsionala izanik.

## Zer egiten du? {#what-it-does}

- Ultimate Multisite-an domain bat mapatzen direnenean, integrazioak CyberPanel API-ra sortzeko virtual host bat ematen du hori domain-ekarbiain.
- Domain mapatzea abazten denean, integrazioak API-ra haratzeko (delete) koherente virtual hosta hartzen du.
- Auto-SSL aktiboa direnenean, integrazioak virtual hosta sortu gtainaren ondoren Let's Encrypt sertifikatua emateko prozesua gogoratzen du.
- Domain Mapatzea aukera izanik, "Auto-create www subdomain" (www subdomini automatikoki sortzea) konfiguratzean dagoen aukerari denez, `www.` aliasa hartzeko edo haratzeko erabakiak egin dezakezu.

## Aurreratutako kondizioak {#prerequisites}

- CyberPanel erabilera dagoena (v2.3 edo gehiago hautatuta da) eta WordPress server-eko iristen duela.
- CyberPanel-an jakin bat websitea dagoela, zein domain network-aren roota (base directory) ematen duen. Integrazioak berri virtual host-ek honen serverra hartzen du.
- CyberPanel API-ko erabilera aktiboa izan behar da. Autentikazioa egin dezakezu CyberPanel admin username eta password batekin.
- Auto-SSL-ek bere sertifikatua legezko emateira aurreko, mapatutako domain-ekaren DNS record-ek aldatu behar dira server-ren IP-ra.

## Aurreratutako eskakizunak {#requirements}

Hau dauden konstanteak `wp-config.php` filean definizatu behar dira:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Aukera izan dezakezu:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — domainak creationaren Let's Encrypt SSL aktibatu
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // SSL sertifikatako kontaktu nahi duenean erabiltzen da
```

## Konfigurazioa Instrukiak {#setup-instructions}

### 1. CyberPanel API-aren aktibatu {#1-enable-the-cyberpanel-api}

1. Administrador gisa CyberPanel dashboard-era logiatu.
2. **Security** > **SSL** funtziara jarraitu eta SSL-ek CyberPanel interfazean dela aktibo dagoela konpondu (seguro API eskatzeko beharrezkoa da).
3. CyberPanel API-ak defaultetan `https://your-server-ip:8090/api/` dakar dago. Aktibatu dezakeko beste irakurri ez dira — administrazio erabiltzaileentzako defaultetan aktibo dago.

### 2. Konstanteak wp-config.php-le gehitu {#2-add-constants-to-wp-configphp}

Hau da, `/* That's all, stop editing! */` lantiaren aurrera gehiago, `wp-config.php` file-era hauek gehitu:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Auto-SSL aktibatu eta erabiliz (rekomendatzen da):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Integrazioa aktibatu {#3-enable-the-integration}

1. WordPress network admin-an, **Ultimate Multisite** > **Settings** funtziara jarraitu.
2. **Domain Mapping** tabera jarraitu.
3. **Host Integrations**-ra jarraitu.
4. **CyberPanel** integrazioa aktibatu.
5. **Save Changes** (Gehiagoak saldatu) klikatu.

### 4. Konektibitatea jartzen jakinarazteko {#4-verify-connectivity}

Konfigurazioa wizard-aren itxarren konektibitatea probatzeko testuak erabiliz:

1. Irduku **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Klikatu **Test Connection**.
3. Balioa informazioa konforma egiten du, plugin-ek CyberPanel API-ra aurkitu eta korekturekin autentikatu daiteke.

## Ondo Zerbitzen da {#how-it-works}

### Domain Mapping (Domein Mapoak) {#domain-mapping}

Ultimate Multisite-an domeina mapatu dutenean:

1. Integrazioa `POST` eska bat bidaltzen du `/api/createWebsite`-ra CyberPanel host-ekaren parte batean.
2. CyberPanelak domeinari buruzko leku-garrantzia (virtual host) zure konfiguratutako paketearekin daiteke sortzea.
3. Dokumentu raíza (document root) zure WordPress network raizu direktorioa erabilizten du.
4. Domein mapatua hastdan, integrazioa leku-garrantzia (virtual host) aztertzeko `/api/deleteWebsite`-ra deusi.

### Auto-SSL (Auto-Ssl) {#auto-ssl}

`WU_CYBERPANEL_AUTO_SSL` erabilera `true` daiteke:

1. Leku-garrantzia sortu gtainaren ondoren, integrazioa domeinari bitartean `/api/issueSSL`-ra deusi.
2. CyberPanelak ACME HTTP-01 desafioko erabiliz Let's Encrypt sertifikatua eskatzen du.
3. Sertifikatua CyberPanel-ek amaierrak aurretik automatikoki berri egiten du.

> **Importante:** DNS-ak server-ren IP-ra guztiz propagatu behar dira Let's Encrypt-ek domeina bertsioa biltzen ere. SSL emandera mapatzea ondoren hemen eratu, eta CyberPanel dashboard-an **SSL** > **Manage SSL**-eko ondorioz berri eskatzen du.

### www Subdomain (www Subdomaina) {#www-subdomain}

Domein Mapoak konfiguratzean **Auto-create www subdomain** aktiboa daiteke: integrazioa `www.<domein>`-erako leku-garrantzia (virtual host alias) ere sortzen du, eta auto-SSL aktibo dagoenean, apex eta www bertsio guztietan sertifikatua emandera.

### Email Forwarders (Email Aurreragileak) {#email-forwarders}

Eskerri egiten da [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addona aktibo dagoenean, CyberPanel-ek kudeaketa irudien (customer email forwarders) ere emateko gabe du. Forwarderrak domain baten testu-lehiak (domain address) bat inguruko mezuak beste inbox batean bidaltzen dute, baina mailbox guztia ez sortuz. Hau da erabilgarria `info@customer-domain.test` edo `support@customer-domain.test` bezala aliak (aliases) irudiz.

Kastelariak customer email forwarders aktiboa jakinain du:

1. Abalu hain CyberPanel constant hauek konfiguratuta dagoen eta konektibitatea proba egiten da.
2. Emails addonaren konfigurazioan CyberPanel email providera aktiboa egin.
3. Forwarder sortu baino lehen, customer domain-ek CyberPanelan ez dagoela jakinain du.
4. Test forwarder bat sortu eta mezu bat bidaltu, aurrera egiten duen funtialak production plans-ek emate baino lehen.

Forwarder sortzea erraza ez jakin dugu, Ultimate Multisite activity logs-ek jartzi duzu, eta CyberPanelan source domain-ek ez dagoela eta API user-ek email-management berrietan (permissions) dutela konfirmatu duzu.

## Konfigurazioaren Referentzia {#configuration-reference}

| Constant | Bezaharri? | Default | Deskribapena |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Bai | — | Portu eta CyberPanel instalazioa barne dagoen URL-a, adibidez: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Bai | — | CyberPanel administrazio user-aren pertsona-naizle (username) |
| `WU_CYBERPANEL_PASSWORD` | Bai | — | CyberPanel administrazio pasordiko |
| `WU_CYBERPANEL_PACKAGE` | Bai | `Default` | New virtual hosts-ek atzenduko CyberPanel hosteak paketea |
| `WU_CYBERPANEL_AUTO_SSL` | Ez | `true` | Domain sortu ondoren Let's Encrypt SSL sertifikatua emateko |
| `WU_CYBERPANEL_PHP_VERSION` | Ez | `PHP 8.2` | New virtual hosts-ek PHP bertsioa (CyberPanelan instalatutako bertsioarekin ondo bat izan behar du) |
| `WU_CYBERPANEL_EMAIL` | Ez | — | SSL sertifikatua emateko kontakt emaila |

## Importante Notizak {#important-notes}

CyberPanel-ek API-ak erabiltzen da sesio-baztertze token-ek. Integrazioa token-ek automatikoki hartzen du lehen API eskatzeko baten artean.
Administratibako CyberPanel kontua bere webstei sortzeko eta boratzen dituen autorizazioa izan behar du.
CyberPanel-ek default-ean port `8090`-ean funtzionatzen du. Zerbitzua firewall erabiltzen duen serverra, port hau WordPress aplikazio server-eko irudienez erabilera dutela seguruatu.
Integrazioak DNS record-ek ez eskaintzen du. Ultimate Multisite-an domain-a mapatzeko, domain-aren DNS-ak server-ren IP-ra eratu behar duzu.
OpenLiteSpeed (OLS) erabiltzen duzu, virtual host-ek aldatu ondoren automatikoki restart bat egiten da. Manuel intervensio edo inguruko ez da beharrezkoa.

## Problema-ezlikizuna (Troubleshooting) {#troubleshooting}

### API Konektua Ez Eragitenak {#api-connection-refused}

- Server-ren firewall-eko port `8090` erabilera dutela jabetzen ditu.
- `WU_CYBERPANEL_HOST` valor-ek protokoloa ondo eta port-a (https://) barne dagoela konformaatuatu duzu.
- CyberPanel SSL sertifikatua ondo dagoela kontrolatu; autojakinarri dituzten sertifikatuak TLS beraerpenaren ezagutza eragiten dezatat. `WU_CYBERPANEL_VERIFY_SSL`-a `false` emitu da behin, aukera-ezdione (private network) mugimendu-ek jasanez.

### Autentikazio Erroresak {#authentication-errors}

- CyberPanel-eko direktamente logiainduz, `WU_CYBERPANEL_USERNAME` eta `WU_CYBERPANEL_PASSWORD`-ek ondo dagoela konformaatu duzu.
- CyberPanel-ek errepikatu ezarritzen jakin batzuk ondoren kontuak itxiltzen ditu. Kontu-ezdione (lockouts) jasanez, CyberPanel-eko **Security** > **Brute Force Monitor**-ra jartu behar duzu.

### Domain Ez Sortu {#domain-not-created}

- API error mezuak erakusten duen Ultimate Multisite-aren jardutzeko logua (**Ultimate Multisite** > **Activity Logs**) kontrolatu.
- `WU_CYBERPANEL_PACKAGE`-ek CyberPanel-eko package-a (Packages > List Packages) dagoela konformaatu duzu.
- Domain-a CyberPanel-eko webstei bat gisa ez dagoela seguruatu — webstei errepikatuak error bat ematen du.

### SSL Sertifikatua Ez Emitu {#ssl-certificate-not-issued}

(Ez dago testu)

DNS-ekusi guztiz propagatu da? `dig +short your-domain.com` irudiak server-ek IP-a ematea.
Let's Encrypt-ek erreguntzak (rate limits) aukeratzen du. Hau ahotu, beste certifikatua bat aipatzen dutenean, berriro proposatzea aurretik jartu behar duzu.
Certifikatua emateko ezberdinetan eragilaiko errorrak bidez jakinarazteko CyberPanel-aren **Logs** > **Error Logs** daude.
Bestea, alternatiba gisa, CyberPanel-etik handiagoz SSL ematea manuaz egin dezakezu: **SSL** > **Manage SSL** > domainak aukeratu > **Issue SSL**.

## Referentziak {#references}

- CyberPanel API Dokumentazioa: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Manajemena: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
