---
title: cPanel ինտեգրում
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel-ի հետ ինտեգրում {#cpanel-integration}

## Ընդհանուր տեսքը {#overview}
cPanel-ը շատ ընդունված වෙබ් հոස්թինգի կառավարման պանելներից մեկն է, որոնք օգտագործվում են շատ համատեղ և հատուկ հոස්թինգի ծառայությունների կողմից։ Այս ինտեգրումը թույլ է տալիս Ultimate Multisite-ի միջև ավտոմատ ադոմենի սինխրոնիզացիա cPanel-ի հետ, ինչը հնարավորություն է տալիս Ձեզ ավտոմատ կերպով ավելացնել ադոմենի անուններ (aliases) և ենթադոմեններ Ձեր cPanel հաշվին։

## Առանձնահատկություններ {#features}
- Ultimate Multisite-ում ավտոմատ ադդոն ադոմենի ստեղծում cPanel-ում
- ավտոմատ ենթադոմենի ստեղծում cPanel-ում (ենթադոմենի համատեղ multisite տեղադրումների համար)
- Երբ կապերը ջնջվում են, ադոմենի հեռացում

## Առ պահանջներ {#requirements}
Հետևյալ հաստատունները պետք է սահմանվեն Ձեր `wp-config.php` ֆայլում.

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Ընտրովիորեն, դուք կարող եք նաև սահմանել.

```php
define('WU_CPANEL_PORT', 2083); // Սխալ է փոխել, եթե Ձեր cPanel-ը օգտագործում է այլ պորտ
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Սխալ է փոխել, եթե Ձեր տվյալների արմատը (document root) տարբեր է
```

## Կազմաձևման ինստրուկումներ {#setup-instructions}

### 1. Ստացեք Ձեր cPanel հավաստագրումները (Credentials) {#1-get-your-cpanel-credentials}

1. Ստացեք Ձեր cPanel-ի անունը և գաղտնաբառը Ձեր հոස්թինգի պրովայդորից։
2. Որոշեք Ձեր cPanel հոස්թը (սովորաբար `cpanel.yourdomain.com` կամ `yourdomain.com:2083`)։

### 2. Ավելացրեք հաստատունները wp-config.php-ին {#2-add-constants-to-wp-configphp}

Այս հետևյալ հաստատունները ավելացրեք Ձեր `wp-config.php` ֆայլի մեջ.

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Ընտրովիորեն, կարող եք փոփոխել պորտը և արմատական թղթապանակը (root directory).

```php
define('WU_CPANEL_PORT', 2083); // Измените, если ваш cPanel использует другой порт
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Измените, если корень ваших документов отличается
```

### 3. Թողեք ինտեգրումը ակտիվ (Enable the Integration) {#3-enable-the-integration}

1. WordPress yönetici panelinde, Ultimate Multisite > Ayarlar'a gidin
2. "Domain Mapping" (Alan Eşleme) sekmesine gidin
3. Aşağı kaydırarak "Host Integrations" (Barındırma Entegrasyonları) kısmına gelin
4. cPanel entegrasyonunu etkinleştirin
5. "Save Changes" (Değişiklikleri Kaydet) butonuna tıklayın

## Nasıl Çalışır {#how-it-works}

### Addon Domains (Ek Alan Adları) {#addon-domains}

Ultimate Multisite'ta bir alan adı eşlendiğinde:

1. Entegrasyon, alanı ek bir alan adı olarak cPanel'in API'sine istek gönderir
2. Alan adı, kök dizininize işaret edecek şekilde yapılandırılır
3. Bir alan adı eşlemesi kaldırıldığında, entegrasyon bu alanı cPanel'den kaldırır

### Subdomains (Alt Alan Adları) {#subdomains}

Alt alan adı multisite kurulumları için yeni bir site oluşturulduğunda:

1. Entegrasyon, tam alandan alt alan adı kısmını çıkarır
2. Alt alanı eklemek için cPanel'in API'sine istek gönderir
3. Alt alan adı, kök dizininize işaret edecek şekilde yapılandırılır

## Önemli Notlar {#important-notes}

- Entegrasyon, cPanel hesabınızla iletişim kurmak için cPanel'in API2'sini kullanır
- cPanel hesabınızın ek alan adları ve alt alan adları ekleme yetkisine sahip olması gerekir
- Bazı hosting sağlayıcıları oluşturabileceğiniz ek alan adı veya alt alan adı sayısını sınırlayabilir
- Entegrasyon DNS yapılandırmasını yönetmez; alan adlarını hala sunucunuzun IP adresine yönlendirmeniz gerekir

## Sorun Giderme {#troubleshooting}

### API Bağlantı Sorunları {#api-connection-issues}
- cPanel kullanıcı adınız ve şifrenizin doğru olduğundan emin olun
- cPanel ana bilgisayarınızın doğru ve erişilebilir olduğundan emin olun
- cPanel hesabınızın gerekli izinlere sahip olduğundan emin olun
- Ana bilgisayar için tam URL'yi kullanmayı deneyin (örneğin, `https://cpanel.yourdomain.com`)

### Alan Adı Eklenmedi {#domain-not-added}
- Ultimate Multisite kayıtlarını herhangi bir hata mesajı olup olmadığını kontrol edin
- Alan adının cPanel'e zaten eklenmediğinden emin olun
- cPanel hesabınızın ek alan adları veya alt alan adları için sınırına ulaşmadığından emin olun

### SSL Ծրագրային խնդիրներ {#ssl-certificate-issues}

- Ինտեգրացիան SSL վկայականների տրամադրումը չի կառավարում։
- Ձեր Դոմենների համար SSL վկայականներ ստանալու համար անհրաժեշտ է օգտագործել cPanel-ի SSL/TLS գործիքները կամ AutoSSL հնարավորությունը։
- Հակառակը, կարող եք օգտագործել Let's Encrypt նման ծառայություն՝ cPanel-ի AutoSSL-ի միջոցով։
