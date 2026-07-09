---
title: CyberPanel Integrasie
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integrasie {#cyberpanel-integration}

Hierdie gids verduidelik hoe om die Ultimate Multisite CyberPanel-integrasie te konfigureer sodat gemapte domeine in jou netwerk outomaties bygevoeg (en verwyder) word as virtuele werwe (virtual hosts) in CyberPanel, met opsionele outomatiese SSL-voorsiening via Let's Encrypt.

## Wat Dit Doen {#what-it-does}

- Wanneer 'n domein in Ultimate Multisite gemap word, roep die integrasie die CyberPanel API aan om 'n virtuele werwe vir daardie domein te skep.
- Wanneer 'n domeinmapping verwyder word, roep die integrasie die API aan om die ooreenstemmende virtuele werwe te verwyder.
- Wanneer outomatiese SSL ingskakel is, trig die integrasie die uitreiking van 'n Let's Encrypt-sertifika onmiddellik nadat die virtuele werwe geskep is.
- Voeg opsioneel die `www.` alias by/verwyder, afhangende van jou "Auto-create www subdomain" instelling in die Domain Mapping-instellings.

## Voorvereistes {#prerequisites}

- 'n Werks CyberPanel-instansie (v2.3 of later word aanbeveel) wat bereikbaar is vanaf jou WordPress-bedrywer.
- 'n Bestaande webwerf in CyberPanel wat reeds jou WordPress-netwerkroot bedien. Die integrasie heg nuwe virtuele werwe aan hierdie bedrywer.
- CyberPanel API-toegang is ingeskakel. Die outentisering gebruik jou CyberPanel-admingebruiker en wagwoord.
- Jou DNS-rekords vir gemapte domeine moet reeds na jou bedrywer se IP-adres wys voordat outomatiese SSL 'n geldige sertifika kan uitreik.

## Vereistes {#requirements}

Die volgende konstantes moet in jou `wp-config.php` lêer gedefinieer word:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Opsioneel kan jy ook definieer:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Standaard: true — Let's Encrypt SSL uitreik na domein skep
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Standaard: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Gebruik vir SSL-sertifika kontak
```

## Opstel Instruksies {#setup-instructions}

### 1. Skakel die CyberPanel API In {#1-enable-the-cyberpanel-api}

1. Log in op jou CyberPanel-dashboard as 'n administrateur.
2. Gaan na **Security** > **SSL** en bevestig dat SSL aktief is op die CyberPanel-koppelvlak self (vereistes vir veilige API-aanroepe).
3. Die CyberPanel API is standaard beskikbaar by `https://your-server-ip:8090/api/`. Geen bykomende stappe is nodig om dit in te skakel — dit is standaard aan vir admin-gebruikers.

### 2. Voeg Konstantes by tot wp-config.php {#2-add-constants-to-wp-configphp}

Voeg die volgende konstantes by tot jou `wp-config.php` lêer voordat die `/* That's all, stop editing! */` lyn:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Om outomatiese SSL in te skakel (aanbeveel):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Skakel die Integrasie In {#3-enable-the-integration}

1. In jou WordPress-netwerk-admin, gaan na **Ultimate Multisite** > **Settings**.
2. Navigeer na die **Domain Mapping** tab.
3. Skrol af na **Host Integrations**.
4. Skakel die **CyberPanel** integrasie in.
5. Klik op **Save Changes**.

### 4. Verifieer Verbinding {#4-verify-connectivity}

Gebruik die ingeboude verbindingsproef in die instellingswonder:

1. Gaan na **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Klik op **Test Connection**.
3. 'n Suksesboodskap bevestig dat die plugin die CyberPanel API kan bereik en korrek kan outentiseer.

## Hoe Dit Werk {#how-it-works}

### Domeinmapping {#domain-mapping}

Wanneer 'n domein in Ultimate Multisite gemap word:

1. Stuur die integrasie 'n `POST`-versoek na `/api/createWebsite` op jou CyberPanel-bedrywer.
2. CyberPanel skep 'n nuwe virtuele werwe vir die domein onder die gekonfigureerde pakket.
3. Die dokumentroot word ingestel om na jou WordPress-netwerkroot-direktorie te wys.
4. Wanneer die domeinmapping verwyder word, roep die integrasie `/api/deleteWebsite` aan om die virtuele werwe op te ruim.

### Outomatiese SSL {#auto-ssl}

Wanneer `WU_CYBERPANEL_AUTO_SSL` `true` is:

1. Nadat die virtuele werwe geskep is, roep die integrasie `/api/issueSSL` vir die domein aan.
2. CyberPanel versoek 'n Let's Encrypt-sertifika met behulp van die ACME HTTP-01 uitdaging.
3. Die sertifika word outomaties hernuweer deur CyberPanel voordat dit verloopt.

> **Belangrik:** DNS moet ten volle gepropageer wees na jou bedrywer se IP-adres voordat Let's Encrypt die domein kan valideer. As SSL-uitreiking onmiddellik na mapping misluk, wag vir DNS-propagasie en trig SSL weer vanaf die CyberPanel-dashboard onder **SSL** > **Manage SSL**.

### www Subdomein {#www-subdomain}

As **Auto-create www subdomain** in jou Domain Mapping-instellings ingeskakel is, skep die integrasie ook 'n virtuele werwe-alias vir `www.<domein>` en, wanneer outomatiese SSL aan is, skakel 'n sertifika uit wat beide die apex en www-variante dek.

### E-pos Omleiding (Email Forwarders) {#email-forwarders}

Wanneer die [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon aktief is, kan CyberPanel ook kliënt-e-posomleiding (email forwarders) verskaf. Omleiding stuur boodskappe van 'n domeinadres na 'n ander inligskas sonder om 'n volledige posbus te skep, wat nuttig is vir aliases soos `info@customer-domain.test` of `support@customer-domain.test`.

Voordat jy omleiding vir kliënte inskakel:

1. Bevestig dat die CyberPanel-konstantes hierbo gekonfigureer is en die verbindingsproef slaag.
2. Skakel die CyberPanel e-posverskaffer in die Emails-addon-instellings in.
3. Bevestig dat die kliëntdomein reeds in CyberPanel bestaan voordat jy die omleiding skep.
4. Skep 'n toetsomleiding en stuur 'n boodskap deur dit voordat jy die funksie op produksieplanne aanbied.

Indien die skep van die omleiding misluk, kyk eers na die Ultimate Multisite-aktiwiteitslogboeke, en bevestig dan in CyberPanel dat die brondomein bestaan en dat die API-gebruiker e-posbestuur-verhasilgewings het.

## Konfigurasie Verwysing {#configuration-reference}

| Konstante | Vereis | Standaard | Beskrywing |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Ja | — | Volle URL na jou CyberPanel-instansie, insluitend poort, bv. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Ja | — | CyberPanel admin-gebruiker |
| `WU_CYBERPANEL_PASSWORD` | Ja | — | CyberPanel admin-wagwoord |
| `WU_CYBERPANEL_PACKAGE` | Ja | `Default` | CyberPanel-hostingpakket om aan nuwe virtuele werwe toe te ken |
| `WU_CYBERPANEL_AUTO_SSL` | Nee | `true` | Skep 'n Let's Encrypt SSL-sertifika na domein skep |
| `WU_CYBERPANEL_PHP_VERSION` | Nee | `PHP 8.2` | PHP-weergawe vir nuwe virtuele werwe (moet ooreenstem met 'n weergawe wat in CyberPanel geïnstalleer is) |
| `WU_CYBERPANEL_EMAIL` | Nee | — | Kontak-e-pos vir SSL-sertifika registrasie |

## Belangrike Notas {#important-notes}

- CyberPanel se API gebruik sessiegebaseerde token-outentisering. Die integrasie hanteer token-verkryging outomaties by elke API-aanroep.
- Jou CyberPanel admin-rekening moet verhasilgewings hê om webwerwe te skep en te verwyder.
- CyberPanel loop standaard op poort `8090`. As jou bedrywer 'n firewall gebruik, verseker dan dat hierdie poort vanaf die WordPress-toepassingbedrywer toeganklik is.
- Die integrasie bestuur nie DNS-rekords nie. Jy moet die domein DNS na jou bedrywer se IP-adres wys voordat jy die domein in Ultimate Multisite mak.
- As jy OpenLiteSpeed (OLS) gebruik, word 'n graasvolle herstart outomaties getrigger na virtuele werwe-veranderinge. Geen handmatige ingryping is nodig nie.

## Probleemoplossing {#troubleshooting}

### API Verbinding Geneem {#api-connection-refused}

- Bevestig dat poort `8090` oop is in jou bedrywer se firewall.
- Bevestig dat die `WU_CYBERPANEL_HOST` waarde die korrekte protokol (`https://`) en poort insluit.
- Kontroleer of jou CyberPanel SSL-sertifika geldig is; self-gesigneerde sertifikate kan TLS-verifikasiefoute veroorsaak. Stel `WU_CYBERPANEL_VERIFY_SSL` op `false` slegs in betroubare private netwerkomgewings.

### Outentiseringsfoute {#authentication-errors}

- Bevestig dat jou `WU_CYBERPANEL_USERNAME` en `WU_CYBERPANEL_PASSWORD` korrek is deur direk in CyberPanel aan te meld.
- CyberPanel sluit rekeninge na herhaalde mislukte aanmeldpogings. Kontroleer **Security** > **Brute Force Monitor** in CyberPanel indien blokkering plaasvind.

### Domein Nie Geskep Nie {#domain-not-created}

- Kontroleer die Ultimate Multisite-aktiwiteitslogboek (**Ultimate Multisite** > **Activity Logs**) vir API-foutboodskappe.
- Bevestig dat die pakket wat in `WU_CYBERPANEL_PACKAGE` gedefinieer is, in CyberPanel bestaan (**Packages** > **List Packages**).
- Verseker dat die domein nie reeds as 'n webwerf in CyberPanel geregistreer is nie — dubbele webwerfskepsel keer 'n fout terug.

### SSL Sertifikaat Nie Uitgereik Nie {#ssl-certificate-not-issued}

- Bevestig dat DNS ten volle gepropageer is: `dig +short your-domain.com` moet jou bedrywer se IP teruggee.
- Let's Encrypt handhaaf beperkings op tempo. As jy onlangs verskeie sertifikate vir dieselfde domein uitgereik het, wag voordat jy probeer.
- Kontroleer die CyberPanel SSL-logboeke onder **Logs** > **Error Logs** vir besonderhede oor sertifikaatuitreikingsfoute.
- As 'n alternatief, kan jy SSL handmatig van CyberPanel uitreik: **SSL** > **Manage SSL** > kies die domein > **Issue SSL**.

## Verwysings {#references}

- CyberPanel API Dokumentasie: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Bestuur: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Tempo Beperkings: https://letsencrypt.org/docs/rate-limits/
