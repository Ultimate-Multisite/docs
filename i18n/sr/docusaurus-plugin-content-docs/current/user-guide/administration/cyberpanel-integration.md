---
title: Integracija sa CyberPanelom
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Integracija sa CyberPanelom

Ovaj vodič objašnjava kako da podesite integraciju Ultimate Multisite CyberPanel-a tako da se mapirani domeni u vašoj mreži automatski dodaju (i uklanjaju) kao virtuelni hostovi u CyberPanelu, uz opcioni auto-SSL providencija putem Let's Encrypt.

## Šta radi

- Kada se domen mapira u Ultimate Multisite, integracija poziva CyberPanel API da kreira virtuelni host za taj domen.
- Kada se ukloni mapiranje domena, integracija poziva API da obriše odgovarajući virtuelni host.
- Kada je auto-SSL aktiviran, integracija pokreće izdavanje sertifikata Let's Encrypt odmah nakon što se kreira virtuelni host.
- Opciono dodaje/uklanja alias `www.` u zavisnosti od vaše postavke "Auto-create www subdomain" u podešavanjima mapiranja domena.

## Preduslovi

- Pokrenut CyberPanel instanc (preporučuje se verzija v2.3 ili novija) dostupna sa vašeg WordPress servera.
- Postojeći veb-sajt u CyberPanelu koji već služi korijen vaše WordPress mreže. Integracija vezuje nove virtuelne hostove za taj server.
- Omogućena pristup CyberPanel API-ju. Autentifikacija se vrši pomoću vašeg korisničkog imena i lozinke administratora CyberPanel-a.
- Vaši DNS podaci za mapirane domene moraju već da ukazuju na IP adresu vašeg servera pre nego što auto-SSL može izdati validan sertifikat.

## Zahtevi

Sledeći konstante moraju biti definisani u vašem fajlu `wp-config.php`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Opciono, možete definisati i:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Podrazumevano: true — izdajanje Let's Encrypt SSL sertifikata nakon kreiranja domena
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Podrazumevano: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Koristi se za kontakt sa sertifikatom SSL

## Uputstva za podešavanje

### 1. Omogućite CyberPanel API

1. Prijavite se na svoj CyberPanel dashboard kao administrator.
2. Idite na **Security** > **SSL** i potvrdite da je SSL aktivan na samoj CyberPanel interfejsu (neophodno za sigurne pozive API-ja).
3. CyberPanel API je dostupan na adresi `https://vaša-server-ip:8090/api/` podrazumevano. Nema potrebe za dodatnim koracima da ga omogućite — on je podrazumevano uključen za korisnike administratora.

### 2. Dodajte konstante u wp-config.php

Dodajte sledeće konstante u vaš fajl `wp-config.php` pre linije `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://vaša-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'vaša_sigurna_lozinka');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Da biste omogućili auto-SSL (preporučeno):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@vašdomen.com');
```

### 3. Omogućite integraciju

1. U svom WordPress network adminu, idite na **Ultimate Multisite** > **Settings**.
2. Idite na karticu **Domain Mapping**.
3. Skrolujte do sekcije **Host Integrations**.
4. Omogućite integraciju **CyberPanel**.
5. Kliknite na **Save Changes** (Sačuvaj promene).

### 4. Proverite konektivnost

Koristite ugrađenu testiranje konekcije u wizardu podešavanja:

1. Перейдите в **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Нажмите **Test Connection** (Проверить соединение).
3. Сообщение об успехе подтверждает, что плагин может подключиться к API CyberPanel и корректно пройти аутентификацию.

## Как это работает

### Отображение домена (Domain Mapping)

Когда домен привязывается в Ultimate Multisite:

1. Интеграция отправляет запрос `POST` на `/api/createWebsite` на ваш хост CyberPanel.
2. CyberPanel создает новый виртуальный хост для домена в рамках настроенного пакета.
3. Корневая директория (document root) устанавливается так, чтобы указывать на корневую директорию вашей сети WordPress.
4. Когда привязка домена удаляется, интеграция вызывает `/api/deleteWebsite` для очистки виртуального хоста.

### Автоматическое SSL (Auto-SSL)

Когда `WU_CYBERPANEL_AUTO_SSL` установлен в `true`:

1. После создания виртуального хоста интеграция вызывает `/api/issueSSL` для домена.
2. CyberPanel запрашивает сертификат Let's Encrypt с использованием ACME HTTP-01 challenge.
3. CyberPanel автоматически продлевает сертификат до истечения срока действия.

> **Важно:** DNS должен быть полностью распространен на IP-адрес вашего сервера, прежде чем Let's Encrypt сможет проверить домен. Если выдача SSL не удается сразу после привязки, подождите распространения DNS и повторно запустите получение SSL через панель управления CyberPanel в разделе **SSL** > **Manage SSL**.

### Поддомен www

Если в настройках Отображения домена включена опция **Auto-create www subdomain** (Автоматическое создание поддомена www), интеграция также создает псевдоним виртуального хоста для `www.<domain>` и, при включенном Auto-SSL, выдает сертификат, охватывающий как основной домен (apex), так и вариант с www.

### Переадресаторы электронной почты (Email Forwarders)

Када је додатак [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) активен, CyberPanel може да пружи и пренаслатаче е-пошта за клијенте. Пренаслатачи преумевају поруке из домена адресе на неколико другог улаз без стварања целокупне поште (mailbox), што је корисно за алиасе попут `info@customer-domain.test` или `support@customer-domain.test`.

Пре него што омогућите пренаслатаче за клијенте:

1. Проверите да су горе наведени константи CyberPanel подељени и да провера везе (connection test) пролази.
2. У Опцијама додатка Emails уклоните/упореди CyberPanel е-пошта провајдер.
3. Поверите да домен клијента већ постоји у CyberPanel пре него што креирате пренаслатача.
4. Креирајте тестови пренаслатач и пошаљите поруку кроз њега пре него што огласите функцију на продајм планове.

Ако стварање пренаслатача не успева, прво проверите активности логова Ultimate Multisite-а, а затим потврдите у CyberPanel да постоји изворни домен и да API корисник има дозволе за управљање поштом (email-management permissions).

## Референца конфигурације

| Константа | Потребно | Дефолтна вредност | Опис |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Да | — | Целоукупна URL ваша CyberPanel инстанце укључујући порт, на пример: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Да | — | Потребачен корисничко име администратора CyberPanel-а |
| `WU_CYBERPANEL_PASSWORD` | Да | — | Лознина администратора CyberPanel-а |
| `WU_CYBERPANEL_PACKAGE` | Да | `Default` | Пакетизација хостинга CyberPanel-а који се приде нововиртуалним хостовима |
| `WU_CYBERPANEL_AUTO_SSL` | Не | `true` | Испуштање Let's Encrypt SSL сертификата након креирања домена |
| `WU_CYBERPANEL_PHP_VERSION` | Не | `PHP 8.2` | Верзија PHP за нове виртуалне хостове (мора совпа데 са верзијом инсталираном у CyberPanel-у) |
| `WU_CYBERPANEL_EMAIL` | Не | — | Е-пошта за контакт пријаву SSL сертификата |

## Важне напомене

API za CyberPanel koristi autentifikaciju na osnovu sesije tokena. Integracija automatski obrađuje dobijanje tokena pri svakom pozivu API-ja.
Vaš admin nalog u CyberPanel mora imati dozvole za kreiranje i brisanje veb sajtova.
CyberPanel podrazumevano radi na portu `8090`. Ako vaš server koristi firewall, uverite se da je ovaj port dostupan aplikaciji WordPressa.
Integracija ne upravlja DNS zapisima. Morate uputiti DNS domena na IP adresu vašeg servera pre nego što mapirate domen u Ultimate Multisite.
Ako koristite OpenLiteSpeed (OLS), automatski se vrši elegantno restart nakon promena virtualnih hostova. Nema potrebe za ručnim intervencijom.

## Rešavanje problema

### Odvistana veza API-ja (API Connection Refused)

- Proverite da li je port `8090` otvoren u firewallu vašeg servera.
- Potvrdite da vrednost `WU_CYBERPANEL_HOST` uključuje ispravan protokol (`https://`) i port.
- Proverite da li je vaš SSL sertifikat CyberPanel-a važeći; samozavisni (self-signed) sertifikati mogu uzrokovati neuspeh pri TLS verifikaciji. Postavite `WU_CYBERPANEL_VERIFY_SSL` na `false` samo u poverljivim privatnim mrežnim okruženjima.

### Greške pri autentifikaciji (Authentication Errors)

- Proverite da li su vaši `WU_CYBERPANEL_USERNAME` i `WU_CYBERPANEL_PASSWORD` ispravni tako što ćete direktno ulogovati na CyberPanel.
- CyberPanel zaključava naloge nakon ponavljanja neuspešnih pokušaja prijave. Proverite **Security** > **Brute Force Monitor** u CyberPanel ako se deponovanja (lockouts) javljaju.

### Domen nije kreiran (Domain Not Created)

- Proverite aktivni log aktivnosti Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) za poruke o greškama API-ja.
- Proverite da li je paket definisan u `WU_CYBERPANEL_PACKAGE` dostupan u CyberPanel (**Packages** > **List Packages**).
- Uverite se da domen nije već registrovani kao veb sajt u CyberPanel — dupliranje kreiranja sajta vraća grešku.

### SSL sertifikat nije izdat (SSL Certificate Not Issued)

Potvrdite da je DNS potpuno propagiran: komanda `dig +short your-domain.com` bi trebalo da vrati IP adresu vašeg servera.
Let's Encrypt primenjuje ograničenja brzine (rate limits). Ako ste nedavno izdali nekoliko sertifikata za isti domen, sačekajte pre nego što pokušate ponovo.
Proverite SSL logove u CyberPanelu pod **Logs** > **Error Logs** za detalje o neuspješnom izdavanju sertifikata.
Kao rezervnu opciju, možete ručno izdati SSL putem CyberPanel-a: **SSL** > **Manage SSL** > odaberite domen > **Issue SSL**.

## Referanse

- Dokumentacija API-ja CyberPanel-a: https://docs.cyberpanel.net/docs/category/api
- Upravljanje SSL-om u CyberPanelu: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Ograničenja brzine Let's Encrypt-a: https://letsencrypt.org/docs/rate-limits/
