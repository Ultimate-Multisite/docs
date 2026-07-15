---
title: Cloudways Интеграция
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways Интеграция

## Обзор {#overview}
Cloudways — это управляемая платформа хостинга в облаке, которая позволяет вам размещать сайты на WordPress на различных облачных провайдерах, таких как DigitalOcean, AWS, Google Cloud и других. Эта интеграция обеспечивает автоматическую синхронизацию доменов и управление SSL-сертификатами между Ultimate Multisite и Cloudways.

## Возможности {#features}
- Автоматическая синхронизация доменов
- Управление SSL-сертификатами
- Поддержка дополнительных доменов
- DNS-валидация для SSL-сертификатов

## Требования {#requirements}
Следующие константы должны быть определены в вашем файле `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'ваш_email_cloudways');
define('WU_CLOUDWAYS_API_KEY', 'ваш_api_ключ');
define('WU_CLOUDWAYS_SERVER_ID', 'ваш_server_id');
define('WU_CLOUDWAYS_APP_ID', 'ваш_app_id');
```

Опционально вы также можете определить:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'список_доменов,разделенный_запятыми');
```

## Инструкции по настройке {#setup-instructions}

### 1. Получите учетные данные API Cloudways {#1-get-your-cloudways-api-credentials}

1. Войдите в панель управления Cloudways
2. Перейдите в "Account" (Учетная запись) > "API Keys" (API-ключи)
3. Сгенерируйте API-ключ, если у вас его еще нет
4. Скопируйте свой email и API-ключ

### 2. Получите ID сервера и приложения {#2-get-your-server-and-application-ids}

1. В панели управления Cloudways перейдите в "Servers" (Серверы)
2. Выберите сервер, на котором размещен ваш мультисайт WordPress
3. Server ID (ID сервера) виден в URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Перейдите в "Applications" (Приложения) и выберите ваше приложение WordPress
5. App ID (ID приложения) виден в URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Добавьте константы в wp-config.php {#3-add-constants-to-wp-configphp}

Добавьте следующие константы в ваш файл `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Егер сизде **башка** домендер болсо (бул сиздин мультисайт тармагынан тышкары), алар Cloudways алиас тизмесинде ар дайым калышы керек болсо:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Өз тармагыңыздын жарык (wildcard) домендерди киргизбеңиз
`WU_CLOUDWAYS_EXTRA_DOMAINS`-ка `*.your-network.com` (же өз тармагыңыздын кандайдыр бир поддомен үлгүсү) кошуңуз. Бул ар бир арендачу үчүн жарык SSL сертификаттары берилбее турганын түшүндүрүү үчүн [Маанилүү — жарык SSL кырсыгы](#important--wildcard-ssl-pitfall) бөлүмүнө караңыз.
:::

### 4. Интеграцияны активдештирүү {#4-enable-the-integration}

1. WordPress администратордуңузда Ultimate Multisite > Settings (Жаңыланган сайттар > Сотуш) баскыңыз
2. "Domain Mapping" (Домен картасы) табына өтүңүз
3. Төмөндө "Host Integrations" (Хост интеграциялары) деген бөлүмгө жетүү үчүн төмөндө жылчуңуз
4. Cloudways интеграциясын активдештириңиз
5. "Save Changes" (Өзгөртүүлөрдү сактоо) баскыңыз

## Ал кандай иштейт? {#how-it-works}

### Домендерди синхролоо {#domain-syncing}

Ultimate Multisite-та домен картасы жасалганда:

1. Интеграция учурда карталанган бардык домендерди ала алат
2. Ал жаңы доменди тизмеге кошот (эгер колдонулуса, ал www версиясын да кошот)
3. Ал толук тизмеди API аркылуу Cloudways-ка жөнөтөт
4. Cloudways сиздин тиркемеңиз үчүн домен алиастарын жаңायт

Эскертүү: Cloudways API ар бир кездеги жеке домендерди кошуу же алып салуудан тышкары, толук домендердин тизмесин жөнөтүүнү талап кылат.

### SSL сертификатын башкаруу {#ssl-certificate-management}

Домендер синхролонуп калгандан кийин:

1. Интеграция кайсы домендерде сиздин серверге туура багытталган DNS каттары бар экенин текшерет
2. Ал Cloudways-ка ошол домендер үчүн Let's Encrypt SSL сертификаттарын орнотууга суранение жөнөтөт
3. Cloudways SSL сертификатын берип берүү жана орнотуу ишин аткарат

Интеграция ар дайыма Cloudwaysдан **стандарттык** (wildcard эмес) Let's Encrypt сертификаттарды сурат. Эгер `WU_CLOUDWAYS_EXTRA_DOMAINS` алкагында wildcard шаблон берилсе, SSL суранышынан мурун алдыңкы `*.` алынып салат — бул wildcard өзү бул интеграция тарабынан качан да орнотулбайт. Cloudwaysда wildcard сертификатту колдонуу үчүн аны өзүңүз кол менен орнотууңуз керек, бирок анда мапталган кошумча домендер үчүн Let's Encrypt сертификаттары берилбейт (астындагы туулуп чыгууну төмөндө көрүңүз).

## Кошумча Домендер (Extra Domains) {#extra-domains}

`WU_CLOUDWAYS_EXTRA_DOMAINS` константасы Cloudways тиркемесинин алиас (aliases) тизмесинде дайыма сакталышы керек болгон кошумча **кышкартуучу** домендерди көрсөтүүгө мүмкүндүк берет. Бул үчүн колдонуңуз:

- Ultimate Multisite тарабынан башкарыла турган кошумча домендер (мисалы, Cloudways тиркемеси менен бирге жайгашкан өзүнчө маркетинг сайты).
- Тиркеменин алиас тизмесинде сакталып калуусун каалаган пакталган же стадиялык домендер.

Өз сеткеңиздин поддоменди кышкартуучу константаны (мисалы, `*.your-network.com`) колдонуңузбу? Бул астындагы wildcard SSL маселесин төмөндө көрүңүз.

## Маанилүү — Wildcard SSL Маселеси {#important--wildcard-ssl-pitfall}

Cloudwaysдын стандарттык орнотуусун аткарууда көп кездешкен ката — `WU_CLOUDWAYS_EXTRA_DOMAINS` алкагында `*.your-network.com` сыяктуу wildcardды кошуу же ошол wildcard үчүн Cloudwaysтын wildcard SSL сертификатту кол менен орнотуу.

**Эгер сиз мындай кыласаңыз, Cloudways Ultimate Multisite тарабынан мапталган ар бир домен үчүн Let's Encrypt сертификаттары берилбее турат.** Cloudways тиркемедеги активдүү SSL сертификатын ар бир кез саат алмаштырып берет, ал эми тиркемеде мурда бар wildcard сертификаты интеграциянын ишениминде болгон домен боюнча Let's Encrypt сертификаттарын берип жаткан процессине тоскоолорди келтирет.

### Ultimate Multisite сеткасы үчүн Cloudwaysтын сунушталган SSL орнотуусу {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Cloudways тиркемесиндеги **SSL Sertifikatı** sekmesinde, faqat `your-network.com` ve `www.your-network.com` adreslerini kapsayan bir **standart Let's Encrypt sertifikası** kurun — joker karakter (wildcard) kullanmayın.
2. `WU_CLOUDWAYS_EXTRA_DOMAINS` alanına `*.your-network.com` (veya kendi ağınızın herhangi bir alt alan adı deseni) eklemeyin. Bu sabiti yalnızca **harici** alan adları için saklayın.
3. Alt alan adlarının çözümlenmesi için sadece **DNS** düzeyinde per-tenant joker karakteri oluşturun (`*.your-network.com` için, Cloudways sunucu IP'nize işaret eden bir `A` kaydı). Bireysel eşlenmiş özel alan adları için SSL, entegrasyon aracılığıyla Let's Encrypt tarafından otomatik olarak verilir.

Eğer kiracıların özel alan adları SSL olmadan takılı kalırsa, Cloudways SSL sekmesini kontrol edin. Orada bir joker karakter sertifikası aktifse, onu kaldırın, ana ağ alanı için standart bir Let's Encrypt sertifikası yeniden düzenleyin ve `WU_CLOUDWAYS_EXTRA_DOMAINS` içindeki herhangi bir joker karakter girişini silin. Ardından alan eşleştirmesini tekrar tetikleyin (veya bir sonrakini bekleyin) ve entegrasyon per-domain sertifikalarını tekrar vermeye başlayacaktır.

## Sorun Giderme {#troubleshooting}

### API Bağlantı Sorunları {#api-connection-issues}
- E-posta adresinizin ve API anahtarınızın doğru olduğundan emin olun.
- Sunucu ve uygulama kimliklerinizin doğru olup olmadığını kontrol edin.
- Cloudways hesabınızın gerekli izinlere sahip olduğundan emin olun.

### SSL Sertifikat Masalmasy {#ssl-certificate-issues}

- Cloudways sizden SSL sertifikatlari berip берүүдөн мурун domenlerde серверге багытталган активдүү DNS катмарлары бар экенин талап кылат.
- Интеграция SSL сертификаттарын сурагандан мурун DNS катмарларын текшерет.
- Эгерде SSL сертификаттары берилбесе, сиздин домендерди сервердин IP дарегине туура багытталганын текшериңиз.
- **SSL жок болгон өзгөчө ареналар үчүн кастом домендер?** Cloudways тиркемесинин SSL Sertifikatтар деген бөлүмүн текшериңиз. Эгерде өткөрүүчү сертификат (мануал орнотулган же `*.your-network.com` сыяктуу ачыкталган) активдүү болсо, Cloudways ар кандай домендерге жеке мапталган кастом домендер үчүн Let's Encrypt сертификаттарын бериши мүмкүн эмес. Бул орду негизги тармак доменине (`your-network.com`, `www.your-network.com`) чектелеткен стандартты Let's Encrypt сертификаты менен алмаштырыңыз жана `WU_CLOUDWAYS_EXTRA_DOMAINS`дан өткөрүүчү бардык кирүүчү жазууларды алып салыңыз. Андан кийин домен мапталгысын кайра ишке киргизиңиз (же кийинкисин күтүңүз) жана интеграция ар бир домен үчүн сертификат сурашы керек болот.

### Домен кошулбайт {#domain-not-added}

- Эч кандай ката билдирүүлөр бар экенин Ultimate Multisite логдорунан текшериңиз.
- Домен Cloudwaysка дагы кошулганды же жокпу текшериңиз.
- Сиздин Cloudways планы сиз кошууну пландаган домендер санына туура келгенин камсыз кылыңыз.
