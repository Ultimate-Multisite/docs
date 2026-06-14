---
title: CyberPanel Интеграция
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Entegrasi

Bu dax, Ultimate Multisite CyberPanel entegrasyonunu nasıl yapılandıracağınızı açıklar ki ağınızdaki haritalanmış alan adları otomatik olarak CyberPanel'de sanal ana bilgisayar (virtual host) olarak eklenip çıkarılsın ve Let's Encrypt aracılığıyla isteğe bağlı otomatik SSL sağlanabilsin.

## Ne Yapar?

- Ultimate Multisite'ta bir alan adı haritalandığında, entegrasyon o alan adı için bir sanal ana bilgisayar oluşturmak üzere CyberPanel API'sini çağırır.
- Bir alan adı eşleşmesi kaldırıldığında, entegrasyon ilgili sanal ana bilgisayarı silmek için API'yi çağırır.
- Otomatik SSL etkinleştirildiğinde, entegrasyon sanal ana bilgisayar oluşturulduktan hemen sonra Let's Encrypt sertifika düzenlemesini tetikler.
- Alan Eşleme ayarlarındaki "Otomatik www alt alan adı oluştur" ayarına bağlı olarak `www.` takma adını isteğe bağlı olarak ekler/kaldırır.

## Ön Koşullar

- Çalışan bir CyberPanel örneği (v2.3 veya daha yenisi önerilir) WordPress sunucunuzdan erişilebilir olmalı.
- Zaten WordPress ağ kökünü sağlayan bir web sitesi olması gereken bir CyberPanel kurulumu olmalı. Entegrasyon yeni sanal ana bilgisayarları bu sunucuya ekler.
- CyberPanel API erişimi etkinleştirilmiş olmalı. Kimlik doğrulama için CyberPanel yönetici kullanıcı adınızı ve şifrenizi kullanın.
- Otomatik SSL'in geçerli bir sertifika verebilmesi için haritalanmış alan adlarınızın DNS kayıtlarının zaten sunucunuzun IP adresine işaret etmesi gerekir.

## Gereksinimler

Aşağıdaki sabitlerin `wp-config.php` dosyanızda tanımlanması gerekmektedir:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

İsteğe bağlı olarak şunları da tanımlayabilirsiniz:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — domain yaratıldıktan sonra Let's Encrypt SSL alınır
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // SSL sertifikatı iletişimi için kullanılır
```

## Kurulum Talimatları

### 1. CyberPanel API'yi Etkinleştirin

1. Yönetici olarak CyberPanel paneline giriş yapın.
2. **Security** > **SSL** bölümüne gidin ve SSL'nin CyberPanel arayüzünde aktif olduğundan emin olun (güvenli API çağrıları için gereklidir).
3. CyberPanel API varsayılan olarak `https://your-server-ip:8090/api/` adresinde mevcuttur. Bunu etkinleştirmek için ek bir adıma gerek yoktur — yönetici kullanıcıları için varsayılan olarak açıktır.

### 2. wp-config.php'ye Sabitleri Ekleyin

Aşağıdaki sabitleri, `/* That's all, stop editing! */` satırından önce `wp-config.php` dosyanıza ekleyin:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Otomatik SSL'yi etkinleştirmek için (önerilir):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Entegrasyonu Etkinleştirin

1. WordPress ağ yöneticinizde, **Ultimate Multisite** > **Settings** bölümüne gidin.
2. **Domain Mapping** sekmesine geçin.
3. Aşağı kaydırarak **Host Integrations** kısmına gelin.
4. **CyberPanel** entegrasyonunu etkinleştirin.
5. **Save Changes** (Değişiklikleri Kaydet) butonuna tıklayın.

### 4. Bağlantıyı Doğrulayın

Ayarlar sihirbazındaki yerleşik bağlantı testini kullanın:

1. **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**-ага.
2. **Test Connection**-аганына кликleyin.
3. Успех хабарлама показывает, что плагин CyberPanel API-га энгерге кита барын һәм тулыка вып булды.

## Бу ничек исле?

### Domain Mapping (Домен Маппинг)

Ultimate Multisite-да домен маппиларганда:

1. Интеграция CyberPanel хостың `/api/createWebsite` энгерге `POST` запрос gönderýә.
2. CyberPanel конфигурацияле пакет астында домен өчен янәштерле хост (virtual host) ясап чыгара.
3. Документ түбәле директория (document root) WordPress сетка директорияңарга китәге сыйныла.
4. Домен маппинг алындаганда, интеграция янәштерле хосты тазаlamak өчен `/api/deleteWebsite` энгерге чакыра.

### Auto-SSL (Автоматик SSL)

`WU_CYBERPANEL_AUTO_SSL` `true` вары инде:

1. Янәштерле хост ясалганда, интеграция домен өчен `/api/issueSSL`-га чакыра.
2. CyberPanel Let's Encrypt сертификаты ACME HTTP-01 челленге артык алай.
3. Сертификат CyberPanel тарафын сонувын узатып калганча автомат түләп керә.

> **Зур эңгерек:** Let's Encrypt доменне тарифи кита барыдан муваффақиятлы ясарга алганнан артык DNS-ы сервернең IP адресына толушы кирәк. SSL-ны маппиларганда сразун узатып калса, DNS-ның таралышына сурагыз һәм **SSL** > **Manage SSL** астындагы CyberPanel да SSL-ны кайра ишлатыгыз.

### www Subdomain (www Поддомен)

Domain Mapping сеткасында **Auto-create www subdomain** язасыл инде, интеграция `www.<domain>` өчен янәштерле хост алиас (alias) ясап чыгара һәм авто SSL вары инде, бу ике төрле вариантлар өчен сертификатны керә.

### Email Forwarders (Эпочта Перенаправлениеләре)

Когда плагин [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) активен, CyberPanel также может предоставлять пересыльщиков электронной почты для клиентов. Пересыльщики направляют сообщения с доменного адреса на другой ящик без создания полноценного почтового ящика, что полезно для псевдонимов вроде `info@customer-domain.test` или `support@customer-domain.test`.

Перед включением пересылки для клиентов:

1. Убедитесь, что вышеуказанные константы CyberPanel настроены и тест соединения проходит успешно.
2. Включите поставщика электронной почты CyberPanel в настройках плагина Emails.
3. Подтвердите, что домен клиента уже существует в CyberPanel, прежде чем создавать пересыльщик.
4. Создайте тестовый пересыльщик и отправьте через него сообщение, прежде чем предлагать эту функцию на планах для продакшена.

Если создание пересыльщика не удается, сначала проверьте активность логов Ultimate Multisite, а затем подтвердите в CyberPanel, что исходный домен существует и у API-пользователя есть права на управление электронной почтой.

## Справочник по настройке

| Константа | Требуется | Значение по умолчанию | Описание |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Да | — | Полный URL вашего экземпляра CyberPanel, включая порт, например, `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Да | — | Имя пользователя администратора CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Да | — | Пароль администратора CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Да | `Default` | Пакет хостинга CyberPanel, который нужно назначить новым виртуальным хостам |
| `WU_CYBERPANEL_AUTO_SSL` | Нет | `true` | Выдача SSL-сертификата Let's Encrypt после создания домена |
| `WU_CYBERPANEL_PHP_VERSION` | Нет | `PHP 8.2` | Версия PHP для новых виртуальных хостов (должна совпадать с версией, установленной в CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Нет | — | Контактный email для регистрации SSL-сертификата |

## Важные примечания

CyberPanel API сессияне основан токен аутентификациясын ашиглара. Интеграция токеныны API шакалганда автомат түрдә алырга мөмкин.
Сизнең CyberPanel администратор comptes сайтылар ясау һәм өчрү өчен уку правасы булган bolsa.
CyberPanel умолчанию `8090` портында эшләп кала. Сезнең сервердә брандмауэр (firewall) исәпкә китергә тиеш, бу порт WordPress приложение серверынан ачык булганга мөмкин.
Интеграция DNS записчларын башкарамый. Домен DNS-ны Ultimate Multisite-да доменне маплый алганнан мухирдан артык сервернең IP адресына укарыгыз.
Хәзерге вакытта OpenLiteSpeed (OLS) исәпкә китергә тиеш, виртуаль хостлар өзгөртүеңдә автомат түрдә сыйныч перезапуск ясала. Ру рухтан аралашу булмаган.

## Проблемләрне çözү

### API bağlantысы диярлык булмады (API Connection Refused)

- Сервер брандмауэрсында `8090` портның ачык булганга янарагыз.
- `WU_CYBERPANEL_HOST` мәгънәсең туры протокол (`https://`) һәм портны куллануы бар екенче.
- CyberPanel SSL сертификатыгызның күплек булганга текәле; өзи-имзаланган сертификатлар TLS тарифине ясау можа. `WU_CYBERPANEL_VERIFY_SSL`-де фақат икенче булган част сете окружениеларда `false` утга куыгыз.

### Аутентификация сынулары (Authentication Errors)

- CyberPanelге тикшерү өчен `WU_CYBERPANEL_USERNAME` һәм `WU_CYBERPANEL_PASSWORD`-ның туры булганлыгын, шулай карап китергә тиеш.
- CyberPanel уку тәшаули сыныларнан соң comptes блокира. Блокировкалар ясала bolsa, CyberPanelде **Security** > **Brute Force Monitor**-ы карагыз.

### Домен ясалмады (Domain Not Created)

- API сынулары турында Ultimate Multisite активәлек журналында (**Ultimate Multisite** > **Activity Logs**) тикшерегез.
- `WU_CYBERPANEL_PACKAGE`-да аны CyberPanelде (`Packages` > `List Packages`) ясалгандыгын тарифигыз.
- Домен CyberPanelде сайтып укуган булганнар өчен артык ясалмасын — бу сынуга китә.

### SSL сертификаты чыгарылмады (SSL Certificate Not Issued)

DNS-иң толық тарадыığını təsdiqləyin: `dig +short your-domain.com` sizin serverinizin IP adresini qaytarmalıdır.
Let's Encrypt sürət məhdudiyyətləri tətbiq edir. Əgər siz son vaxtlar eyni domen üçün bir neçə sertifikat buraxdıysanız, yenidən cəhd etməzdən əvvəl gözləyin.
Sertifikat buraxılmasındakı detallar üçün **Logs** > **Error Logs** altında CyberPanel-in SSL loqlarını yoxlayın.
Alternativ olaraq, siz CyberPanel-dən SSL-i əl ilə buraxmaq mümkündür: **SSL** > **Manage SSL** > domen seçin > **Issue SSL**.

## Referanslar

- CyberPanel API Sənədləri: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL İdarəetməsi: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Sürət Məhdudiyyətləri: https://letsencrypt.org/docs/rate-limits/
