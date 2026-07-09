---
title: CyberPanel integreerimine
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integroitum {#cyberpanel-integration}

See, kuidas je die Ultimate Multisite CyberPanel integratiewe konfigurer so dat gedefinieerde domeine in jou netwerk outomaties as virtual hosts in CyberPanel byvoeg (en verwyder) met opsionele auto-SSL provisioning via Let's Encrypt.

## Wat dit doet {#what-it-does}

- Wanneer 'n domein in Ultimate Multisite gemap word, roep die integratiewe die CyberPanel API aan om 'n virtual host vir daardie domein te skep.
- Wanneer 'n domein mapping verwyder word, roep die integratiewe die API aan om die ooreenstemmende virtual host te slet.
- Wanneer auto-SSL ingegaan is, stel die integratiewe Let's Encrypt sertifikaatuitgifte onmiddellik op nadat die virtual host geskep is.
- Opsioneel voeg/verwyder die `www.` alias afhangend van jou "Auto-create www subdomain" instelling in Domain Mapping settings.

## Vereistes {#prerequisites}

- 'n Lopende CyberPanel instance (v2.3 of laer aanbeveel) wat bereikbaar is vanaf jou WordPress server.
- 'n Bestaande webwerf in CyberPanel wat reeds die wortel van jou WordPress netwerk bedien. Die integratiewe voeg nuwe virtual hosts aan hierdie server by.
- CyberPanel API toegang ingegaan. Authentikasie gebruik jou CyberPanel admin gebruikersnaam en wagwoord.
- Jou DNS gereedname vir gemapte domeine moet reeds na die IP-adres van jou server wys voordat auto-SSL 'n geldige sertifikaat kan uitgif.

## Vereistes {#requirements}

Die volgende konstantes moet in jou `wp-config.php` lêer gedefinieer word:

```php
define('WU_CYBERPANEL_HOST', 'https://jou-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'jou_admin_gebruikersnaam');
define('WU_CYBERPANEL_PASSWORD', 'jou_admin_wagwoord');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Opsioneel kan jy ook definieer:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Olet poolt: true — luua Let's Encrypt SSL pärast domeeni loomist
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Olet poolt: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Kasutatakse SSL-sertifikaadi kontaktide jaoks
```

## Seadistusjuhendid {#setup-instructions}

### 1. Lülita CyberPanel API {#1-enable-the-cyberpanel-api}

1. Logi sisse oma CyberPanel dashboardile administraatorina.
2. Minema **Security** > **SSL** ja kinnitada, et SSL on aktiivne itse CyberPanel-liitisel (vajalik turvalise API-kutside jaoks).
3. CyberPanel API on oletuks saadaval aadressil `https://your-server-ip:8090/api/`. Selle aktiveerimiseks ei ole vaja lisastesse sammudi – see on aktiivne poolt administraatorite kasutajatele.

### 2. Lisage konstantsid wp-config.php'le {#2-add-constants-to-wp-configphp}

Lisage järgmised konstantsid oma `wp-config.php` failile `/* That's all, stop editing! */` linja enne:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Auto-SSL aktiveerimiseks (soovitatav):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Aktiveeri integreerimine {#3-enable-the-integration}

1. WordPress'i võrku administraatoris minema **Ultimate Multisite** > **Settings**.
2. Minema **Domain Mapping** tabile.
3. Skrootta all **Host Integrations**-le.
4. Aktiveeri **CyberPanel** integratsioon.
5. Klikkige **Save Changes**.

### 4. Kontrollige ühendust {#4-verify-connectivity}

Kasutage seadistuste suunatud ühendustest:

1. Перейдіть у **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Натисніть **Test Connection** (Перевірити з'єднання).
3. Повідомлення про успіх підтверджує, що плагін може досягти API CyberPanel та правильно автентифікуватися.

## Як це працює {#how-it-works}

### Мапування доменів (Domain Mapping) {#domain-mapping}

Коли домен мапується в Ultimate Multisite:

1. Інтеграція надсилає `POST` запит на `/api/createWebsite` вашому хосту CyberPanel.
2. CyberPanel створює новий віртуальний хост для домену під налаштованим пакетом.
3. Корінь документа (document root) встановлюється так, щоб він вказував на корінь мережі WordPress.
4. Коли мапування домену видаляється, інтеграція викликає `/api/deleteWebsite` для очищення віртуального хоста.

### Автоматичне SSL (Auto-SSL) {#auto-ssl}

Коли `WU_CYBERPANEL_AUTO_SSL` встановлено у `true`:

1. Після створення віртуального хоста інтеграція викликає `/api/issueSSL` для домену.
2. CyberPanel запитує сертифікат Let's Encrypt за допомогою ACME HTTP-01 challenge.
3. Сертифікат автоматично поновлюється CyberPanel перед закінченням терміну дії.

> **Важливо:** DNS має бути повністю розповсюджений на IP-адресу вашого сервера, перш ніж Let's Encrypt зможе перевірити домен. Якщо видача SSL не вдається одразу після мапування, зачекайте розповсюдження DNS та повторно ініціюйте SSL з дашборду CyberPanel у розділі **SSL** > **Manage SSL**.

### Домен www (www Subdomain) {#www-subdomain}

Якщо в налаштуваннях Мапування доменів увімкнено опцію **Auto-create www subdomain** (Автоматичне створення піддомену www), інтеграція також створює псевдонім віртуального хоста для `www.<domain>` і, коли увімкнено Auto-SSL, видає сертифікат, який охоплює як основну версію (apex), так і версію www.

### Перенаправите електронні листи (Email Forwarders) {#email-forwarders}

Kui [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) lisaks aktiivseks, võib CyberPanel ka pakkuda klientide e-posti ületamist. Ületajad suunavad sähkökehtestid domeenist teise postkastile ilma täieliku postkastil luumatud, mis on kasulik alifade nagu `info@customer-domain.test` või `support@customer-domain.test` jaoks.

Klientide jaoks ületajate aktiveerimise enne:

1. Kontrollige, et eures veidi eures määratletud CyberPanel konstantsid on konfiguritud ja ühendustest test läheb läbi.
2. Lülitage CyberPanel e-posti teenuse E-mail-lisaks seadistustes.
3. Kontrollige, et klientide domeen juba CyberPanelis olemas, enne kui ületaja luute.
4. Luute testitud ületaja ja laenige selle kaudu sõnumi produtsioonile vihkudes funktsiooni.

Kui ületaja loomine ebaõnnestub, kontrollige kõigepealt Ultimate Multisite aktiivsuse logud, seejärel kinnitage CyberPanelis, et allikse domeen on olemas ja et API kasutajal on e-posti haldamise õigused.

## Konfiguraatsiooninviid {#configuration-reference}
| Konstants | vajalik | oletusväärt | Kirjeldus |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Jah | — | Täielik URL CyberPaneli instanssile, sealhulgas port, näiteks `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Jah | — | CyberPanel administrati kasutaja nimi |
| `WU_CYBERPANEL_PASSWORD` | Jah | — | CyberPanel administrati parool |
| `WU_CYBERPANEL_PACKAGE` | Jah | `Default` | CyberPanel hoitpakett, mida uute virtuaalse hostidele määratakse |
| `WU_CYBERPANEL_AUTO_SSL` | Ei | `true` | Let's Encrypt SSL-tööcertificate laenimine domeeni loomise pärast seda |
| `WU_CYBERPANEL_PHP_VERSION` | Ei | `PHP 8.2` | PHP versioon uute virtuaalse hostide jaoks (peab vastama CyberPanelis paigutatud versioonile) |
| `WU_CYBERPANEL_EMAIL` | Ei | — | SSL-tööcertificate registreerimise kontakt e-mail |

## Oluline märkused {#important-notes}

CyberPanel'i API kasutab sessioonipõhise token autentimist. Integreerimine haldab tokeni automaatselt iga API kutsuga.
Teie CyberPanel administrati konto peab omandama õiguste veebilehtide luomiseks ja eemaldamiseks.
CyberPanel käib poolt poolt `8090`. Kui teie server kasutab seadmevahelja (firewall), veenduge, et see port on kättesaadav WordPress-rakenduse serverist.
Integreerimine ei halda DNS-registreid. Peab siias domeeni DNS-i oma serveri IP-adressile viitama enne domeeni Ultimate Multisite'sides mappimist.
Kui kasutate OpenLiteSpeed (OLS), käivitakse virtuaalhostide muutmist pärast seda automaatselt pehme taaskäivitamine. Manuaalset interweniimist ei vaja.

## Probleemide lahendamine {#troubleshooting}

### API ühenduse lühendatud {#api-connection-refused}

- Kontrollige, kas port `8090` on avatud teie serveri seadmevaheljas.
- Lõpetage kontroll **WU_CYBERPANEL_HOST** väärtuse, et see sisalda korrekte protokoll (`https://`) ja port.
- Kontrollige, kas teie CyberPanel SSL-tüüd on valide; itse-signed sertifikaadid võivad põhjustada TLS-verifitundmise puudustusi. Asetage **WU_CYBERPANEL_VERIFY_SSL** ainult usutavates privaatses võrku keskkonnadega `false`-iks.

### Autentikatsioonivõrge {#authentication-errors}

- Kontrollige, et teie **WU_CYBERPANEL_USERNAME** ja **WU_CYBERPANEL_PASSWORD** on korrektsed, logiides end otses CyberPanelis sisse.
- CyberPanel lukustab kontode pärast korduvate ebaõnnestatud sissejuhtimise üritusi. Kontrollige **Security** > **Brute Force Monitor** CyberPanelis, kui lukustused esinevad.

### Domeen ei loodud {#domain-not-created}

- Kontrollige Ultimate Multisite aktiivsuse logist (**Ultimate Multisite** > **Activity Logs**) API vääristuste sõnumite osas.
- Veenduge, et `WU_CYBERPANEL_PACKAGE` sisse definitsioon on olemas CyberPanelis (**Packages** > **List Packages**).
- Veenduge, et domeen ei ole juba veebilehtina registreeritud CyberPanelis – duplikaatveebilehti luomine annab vääristuse.

### SSL-tüüd ei antud {#ssl-certificate-not-issued}

*Kasi DNS on täielikult levitatud:* `dig +short your-domain.com` peaks teie serveri IP-adressiga.
*Let's Encrypt kasutab kiirustähtjaid.* Kui olete hiljutiselt kümned sertifikaate sama domeeni jaoks käsitnud, ootake enne uuesti proovimist.
*Kontrollige CyberPanel SSL logud **Logs** > **Error Logs** kohta sertifikaatide väljundetaeb loomise vigu üksikasjaliste teada annamiseks.*
*Väike alternatiivina saate SSL-i manuaalselt CyberPanelist käivitada:* **SSL** > **Manage SSL** > valige domeen > **Issue SSL**.

## Viidangid {#references}

- CyberPanel API Dokumentatsioon: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Hallikus: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Kiirustähtjad: https://letsencrypt.org/docs/rate-limits/
