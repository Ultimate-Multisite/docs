---
title: CyberPanel Entegrasyonu
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Entegrasyonu {#cyberpanel-integration}

Bu rehber, Ultimate Multisite CyberPanel entegrasyonunu nasıl yapılandıracağınızı açıklıyor. Bu sayede ağınızdaki eşlenmiş alan adları, CyberPanel'de sanal ana bilgisayar (virtual host) olarak otomatik olarak eklenir (veya kaldırılır) ve isteğe bağlı olarak Let's Encrypt aracılığıyla otomatik SSL sağlanır.

## Ne Yapar? {#what-it-does}

*   Bir alan adı Ultimate Multisite'ta eşlendiğinde, entegrasyon bu alan adı için bir sanal ana bilgisayar oluşturmak üzere CyberPanel API'sini çağırır.
*   Bir alan adı eşlemesi kaldırıldığında, entegrasyon ilgili sanal ana bilgisayarı silmek için API'yi çağırır.
*   Otomatik SSL etkinleştirildiğinde, entegrasyon sanal ana bilgisayar oluşturulduktan hemen sonra Let's Encrypt sertifika düzenlemesini tetikler.
*   İsteğe bağlı olarak, Alan Eşlemesi ayarlarındaki "www alt alan adını otomatik oluştur" ayarınıza bağlı olarak `www.` takma adını ekler/kaldırır.

## Ön Gereksinimler {#prerequisites}

*   Çalışan bir CyberPanel örneği (v2.3 veya üzeri önerilir) ve bu örneğin WordPress sunucunuzdan erişilebilir olması.
*   WordPress ağınızın kök dizinini zaten barındıran, CyberPanel'de mevcut bir web sitesi. Entegrasyon, yeni sanal ana bilgisayarları bu sunucuya bağlar.
*   CyberPanel API erişiminin etkinleştirilmiş olması. Kimlik doğrulama, CyberPanel yönetici kullanıcı adınızı ve şifrenizi kullanır.
*   Otomatik SSL'nin geçerli bir sertifika düzenleyebilmesi için, eşlenmiş alan adlarınızın DNS kayıtlarının zaten sunucunuzun IP adresini göstermesi gerekir.

## Gereksinimler {#requirements}

Aşağıdaki sabitlerin `wp-config.php` dosyanızda tanımlanması gerekir:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

İsteğe bağlı olarak, şunları da tanımlayabilirsiniz:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Varsayılan: true — alan adı oluşturulduktan sonra Let's Encrypt SSL düzenlenir
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Varsayılan: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // SSL sertifikası iletişiminde kullanılır
```

## Kurulum Talimatları {#setup-instructions}

### 1. CyberPanel API'sini Etkinleştirin {#1-enable-the-cyberpanel-api}

1.  CyberPanel panonuza yönetici olarak giriş yapın.
2.  **Security** > **SSL** bölümüne gidin ve SSL'nin CyberPanel arayüzünde kendisi için aktif olduğundan emin olun (güvenli API çağrıları için gereklidir).
3.  CyberPanel API'si varsayılan olarak `https://your-server-ip:8090/api/` adresinde mevcuttur. Etkinleştirmek için ek bir adım gerekmez — yönetici kullanıcılar için varsayılan olarak açıktır.

### 2. wp-config.php'ye Sabitler Ekleyin {#2-add-constants-to-wp-configphp}

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

### 3. Entegrasyonu Etkinleştirin {#3-enable-the-integration}

1.  WordPress ağ yöneticinizde **Ultimate Multisite** > **Settings**'e gidin.
2.  **Domain Mapping** sekmesine gidin.
3.  **Host Integrations** bölümüne kadar aşağı kaydırın.
4.  **CyberPanel** entegrasyonunu etkinleştirin.
5.  **Save Changes**'a tıklayın.

### 4. Bağlantıyı Doğrulayın {#4-verify-connectivity}

Ayarlar sihirbazındaki yerleşik bağlantı testini kullanın:

1.  **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**'e gidin.
2.  **Test Connection**'a tıklayın.
3.  Bir başarı mesajı, eklentinin CyberPanel API'sine ulaşabildiğini ve doğru şekilde kimlik doğrulama yaptığını onaylar.

## Nasıl Çalışır? {#how-it-works}

### Alan Eşlemesi (Domain Mapping) {#domain-mapping}

Bir alan adı Ultimate Multisite'ta eşlendiğinde:

1.  Entegrasyon, CyberPanel ana bilgisayarınızdaki `/api/createWebsite` adresine bir `POST` isteği gönderir.
2.  CyberPanel, alan adı için yapılandırılmış paket altında yeni bir sanal ana bilgisayar oluşturur.
3.  Belge kökü, WordPress ağınızın kök dizinine işaret edecek şekilde ayarlanır.
4.  Alan adı eşlemesi kaldırıldığında, entegrasyon sanal ana bilgisayarı temizlemek için `/api/deleteWebsite` çağrısını yapar.

### Otomatik SSL (Auto-SSL) {#auto-ssl}

`WU_CYBERPANEL_AUTO_SSL` `true` olduğunda:

1.  Sanal ana bilgisayar oluşturulduktan sonra, entegrasyon alan adı için `/api/issueSSL` çağrısını yapar.
2.  CyberPanel, ACME HTTP-01 challenge kullanarak bir Let's Encrypt sertifikası talep eder.
3.  Sertifika, süresi dolmadan önce CyberPanel tarafından otomatik olarak yenilenir.

> **Önemli:** Let's Encrypt'in alan adını doğrulayabilmesi için DNS'nin sunucunuzun IP adresine tamamen yayılmış olması gerekir. Eşlemeden hemen sonra SSL düzenlemesi başarısız olursa, DNS yayılımını bekleyin ve SSL'yi CyberPanel panosundaki **SSL** > **Manage SSL** altından yeniden tetikleyin.

### www Alt Alan Adı {#www-subdomain}

Alan Eşlemesi ayarlarınızda **Auto-create www subdomain** etkinleştirilmişse, entegrasyon ayrıca `www.<alanadı>` için bir sanal ana bilgisayar takma adı oluşturur ve otomatik SSL açıksa, hem ana (apex) hem de www varyantlarını kapsayan bir sertifika düzenler.

### E-posta Yönlendiricileri (Email Forwarders) {#email-forwarders}

[Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) eklentisi etkin olduğunda, CyberPanel aynı zamanda müşteri e-posta yönlendiricileri de sağlayabilir. Yönlendiriciler, tam bir posta kutusu oluşturmadan, bir alan adı adresindeki mesajları başka bir gelen kutusuna yönlendirir. Bu, `info@customer-domain.test` veya `support@customer-domain.test` gibi takma adlar için kullanışlıdır.

Müşteriler için yönlendiricileri etkinleştirmeden önce:

1.  Yukarıdaki CyberPanel sabitlerinin yapılandırıldığından ve bağlantı testinin geçtiğinden emin olun.
2.  E-posta eklentisi ayarlarında CyberPanel e-posta sağlayıcısını etkinleştirin.
3.  Yönlendirici oluşturmadan önce müşteri alan adının CyberPanel'de zaten var olduğundan emin olun.
4.  Üretim planlarında bu özelliği sunmadan önce bir test yönlendiricisi oluşturun ve üzerinden bir mesaj gönderin.

Yönlendirici oluşturma başarısız olursa, önce Ultimate Multisite aktivite günlüklerini kontrol edin, ardından CyberPanel'de kaynak alan adının var olduğundan ve API kullanıcısının e-posta yönetimi izinlerine sahip olduğundan emin olun.

## Yapılandırma Referansı {#configuration-reference}

| Sabit | Gerekli | Varsayılan | Açıklama |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Evet | — | CyberPanel örneğinizin port dahil tam URL'si, örn: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Evet | — | CyberPanel yönetici kullanıcı adı |
| `WU_CYBERPANEL_PASSWORD` | Evet | — | CyberPanel yönetici şifresi |
| `WU_CYBERPANEL_PACKAGE` | Evet | `Default` | Yeni sanal ana bilgisayarlara atanacak CyberPanel barındırma paketi |
| `WU_CYBERPANEL_AUTO_SSL` | Hayır | `true` | Alan adı oluşturulduktan sonra bir Let's Encrypt SSL sertifikası düzenlenmesini sağlar |
| `WU_CYBERPANEL_PHP_VERSION` | Hayır | `PHP 8.2` | Yeni sanal ana bilgisayarlar için PHP sürümü (CyberPanel'de kurulu bir sürümle eşleşmelidir) |
| `WU_CYBERPANEL_EMAIL` | Hayır | — | SSL sertifikası kaydı için iletişim e-postası |

## Önemli Notlar {#important-notes}

*   CyberPanel'in API'si oturum tabanlı token kimlik doğrulaması kullanır. Entegrasyon, her API çağrısında token edinme işlemini otomatik olarak halleder.
*   CyberPanel yönetici hesabınızın web sitesi oluşturma ve silme izinlerine sahip olması gerekir.
*   CyberPanel varsayılan olarak `8090` portunda çalışır. Sunucunuz bir güvenlik duvarı kullanıyorsa, bu portun WordPress uygulama sunucusundan erişilebilir olduğundan emin olun.
*   Entegrasyon DNS kayıtlarını yönetmez. Alan adını Ultimate Multisite'ta eşlemeden önce alan adının DNS'sini sunucunuzun IP adresine yönlendirmeniz gerekir.
*   OpenLiteSpeed (OLS) kullanıyorsanız, sanal ana bilgisayar değişikliklerinden sonra zarif bir yeniden başlatma otomatik olarak tetiklenir. Manuel müdahale gerekmez.

## Sorun Giderme {#troubleshooting}

### API Bağlantısı Reddedildi (API Connection Refused) {#api-connection-refused}

*   Sunucu güvenlik duvarınızda `8090` portunun açık olduğunu doğrulayın.
*   `WU_CYBERPANEL_HOST` değerinin doğru protokolü (`https://`) ve portu içerdiğinden emin olun.
*   CyberPanel SSL sertifikanızın geçerli olduğunu kontrol edin; kendi kendine imzalanmış sertifikalar TLS doğrulama hatalarına neden olabilir. `WU_CYBERPANEL_VERIFY_SSL` değerini yalnızca güvenilir özel ağ ortamlarında `false` olarak ayarlayın.

### Kimlik Doğrulama Hataları (Authentication Errors) {#authentication-errors}

*   `WU_CYBERPANEL_USERNAME` ve `WU_CYBERPANEL_PASSWORD` değerlerinizin doğru olduğundan emin olmak için doğrudan CyberPanel'e giriş yapın.
*   CyberPanel, tekrarlanan başarısız giriş denemelerinden sonra hesapları kilitler. Kilitleme durumları yaşanırsa CyberPanel'deki **Security** > **Brute Force Monitor** bölümünü kontrol edin.

### Alan Adı Oluşturulamadı (Domain Not Created) {#domain-not-created}

*   API hata mesajları için Ultimate Multisite aktivite günlüklerini (**Ultimate Multisite** > **Activity Logs**) kontrol edin.
*   `WU_CYBERPANEL_PACKAGE` içinde tanımlanan paketin CyberPanel'de var olduğundan emin olun (**Packages** > **List Packages**).
*   Alan adının CyberPanel'de zaten bir web sitesi olarak kayıtlı olmadığından emin olun — yinelenen web sitesi oluşturma hataya neden olur.

### SSL Sertifikası Düzenlenmedi (SSL Certificate Not Issued) {#ssl-certificate-not-issued}

*   DNS'nin tamamen yayıldığından emin olun: `dig +short your-domain.com` sunucunuzun IP adresini döndürmelidir.
*   Let's Encrypt hız limitleri uygular. Aynı alan adı için yakın zamanda birkaç sertifika düzenlediyseniz, tekrar denemeden önce bekleyin.
*   Sertifika düzenleme hataları için ayrıntıları **Logs** > **Error Logs** altındaki CyberPanel SSL günlüklerini kontrol edin.
*   Yedek olarak, SSL'yi CyberPanel'den manuel olarak düzenleyebilirsiniz: **SSL** > **Manage SSL** > alan adını seçin > **Issue SSL**.

## Referanslar {#references}

- CyberPanel API Dokümantasyonu: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Yönetimi: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Hız Limitleri: https://letsencrypt.org/docs/rate-limits/
