---
title: CyberPanel Integrasi
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integrasi

Bu kılavuzda Ultimate Multisite CyberPanel entegrasyny nädip sozladyp biljeklerini düşündirip aýdýaryn. Bu arkaly şeýlelikde, ulgamanyzda haritalanan domenler awtomatiki wep-hostlar (virtual host) hökmünde CyberPanelde goýulýar (we goýulmadyk) we Let's Encrypt arkaly opsional awtomatik SSL proviziyir edip bilersiňiz.

## Bu Näme Edýär?

- Ultimate Multisite-da bir domen haritalandyrrylsa, entegrasi CyberPanel API-sini çaýar we şol domen üçin virtual host döredýär.
- Domen haritalamasy ýerimlenip bilse, entegrasi awtadan olşapdyr (delete) bolan virtual hosty silmek üçin API-ni çaýar.
- Awtomatik SSL işjeň edilse, entegrasi virtual host döredilenden soň Let's Encrypt sertifikatyny hemen döredip bilýär.
- Domen haritalama sozlamalarynda "Auto-create www subdomain" (www alt domenini awtomatiki döretmek) sozlamasyna görä `www.` aliasyny opsional ýaly goýmak we silmek mümkinçiligi bar.

## Öňün Gerekli Şertler (Prerequisites)

- CyberPanel nüshanasyny (v2.3 və ya sonrakı versiyalar tövde ediler) WordPress serverinizden elýeterlikli ýagdaýda işleýärdigi bir ýerini (instance) bolmagyňyz zerurdyr.
- CyberPanelde, size degişli WordPress ulgamyny (network root) zaten özüni hyzmat edýän web sahypasy bar bolsa, bu integrasiýa täze virtual hostlary bu servere baglanyp ýükler.
- CyberPanel API girizilip bilmelidir. Kimlikten sagat CyberPanel administrator ismini we parolasyny ulanyp bilersiňiz.
- Auto-SSL (awto SSL) düzgün sertifikaty berip bilmegi üçin, maplanmagan domenler üçin DNS goşyşyklaryňyz öz serveriň IP adresine ýol berenligi önünden tamamlanmaly.

## Talaplar (Requirements)

Aşakdaky sabitler (`constants`) `wp-config.php` faylunda belirmek zerurdyr:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Opsional, siz şular hem tanımlap bilersiňiz:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — domain döredildikten sonra Let's Encrypt SSL-i bermek üçin
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // SSL sertifikatı bilen habarlaşmak üçin ulanylýar
```

## Kurmak Üçin Talbatlar

### 1. CyberPanel API-ni İşleterlik



1. Administrator hakda CyberPanel dashboarduna giriş ediňizi.
2. **Security** > **SSL** bölümini geçiň we SSL-in CyberPanel arayüzünde aktif olup olmadığını barlap görüň (güvurlu API çağryşlar üçin zerurdyr).
3. CyberPanel API standart bilen `https://your-server-ip:8090/api/` adresinde bar. Onu işleýärlikde açmak üçin hiç zat gerek däl — admin ulanyjylary üçin standart ýagdaýda aktif bolup durýar.

### 2. wp-config.php-e Konstanta goşmak

Aşakdaky konstanta goşawlary `wp-config.php` faylynda, `/* That's all, stop editing! */` satyrından öň goşun:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Avtomatiki SSL-i (maslahat berilýär):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Integrasyonu Etkinleştirme

1. WordPress ağ yöneticinizde, **Ultimate Multisite** > **Ayarlar** bölümüne gidin.
2. **Domain Mapping** sekmesine geçin.
3. Aşağı kaydırarak **Host Integrations** kısmına gelin.
4. **CyberPanel** entegrasyonunu etkinleştirin.
5. **Save Changes** (Değişiklikleri Kaydet) butonuna tıklayın.

### 4. Bağlantıyı Doğrulama

Ayarlar sihirbazındaki yerleşik bağlantı testini kullanın:

1. **Ultimate Multisite** > **Ayarlar** > **Domain Mapping** > **Host Integrations** > **CyberPanel** yolunu izleyin.
2. **Test Connection** (Bağlantıyı Test Et) butonuna tıklayın.
3. Başarı mesajı, eklentinin CyberPanel API'sine ulaşabildiğini ve doğru şekilde kimlik doğrulaması yaptığını onaylar.

## Nasıl Çalışır

### Domain Mapping

Ultimate Multisite'ta bir alan adı eşleştirildiğinde:

1. Bu integrasiýa CyberPanel host-unuzda `/api/createWebsite` adresine `POST` soňawyny (request) göndereýär.
2. CyberPanel, saýlan paket ýagdaýynda domain üçin täze virtual host döredýär.
3. Dokument kök (document root) saýlan WordPress ulgamyň kök kataloguna (network root directory) aýdylmaga goýulýar.
4. Domain eşleşdirilmegi (domain mapping) aradan aýrylsa, integrasiýa virtual hosty temizlemek üçin `/api/deleteWebsite` adresine çagyryp biler.

### Auto-SSL

Eger `WU_CYBERPANEL_AUTO_SSL` `true` bolsa:

1. Virtual host döredilenden soň, integrasiýa domain üçin `/api/issueSSL` adresine çagyryp biler.
2. CyberPanel Let's Encrypt sertifikatyny ACME HTTP-01 synagyny (challenge) ulanýar.
3. Sertifikat gizlenmeden önce CyberPanel tarapyndan awtomatiki täzelenip bilner.

> **Önemli:** Let's Encrypt domaini doğrulayabilýän bolsa, DNS-i serveriňiz IP adresine doly ýatyrylmagy zerurdyr. Eğer mappingden soň SSL berilmegi hemen başa tapylsa, DNS-i ýatyrylmagy garaşyp we CyberPanel dashboardynda **SSL** > **Manage SSL** boýunça SSL-i täzeden başlatyň.

### www Subdomaini

Eger Domain Mapping (Alan Tapawurgy) resminamalaryňyzda **Auto-create www subdomain** (www subdomayny awtomatiki döretmek) işjeň bolsa, bu integrasiýa `www.<domain>` üçin virtual host alias-y hem döredýär we auto-SSL işleýän wagtda hem apex we www görnüşlerini öz içine alýan sertifikaty berýär.

### Email Forwarderleri

[Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon işi aktif bolsa, CyberPanel hem müşderiler üçin elektron poçta ýönlendirmeleri (email forwarders) bermekden we bilersi. Bu ýönlendirmeler mesajlary bir doly poçta habarname döredip bilmese hem, bir domany adresi bilen başga bir habarnamege göndermegi üpjün edýär. Bu, `info@customer-domain.test` ýa-da `support@customer-domain.test` ýaly aliaslar üçin amatlydyr.

Müşderler üçin ýönlendirmeleri işlemekden öň:

1. Ýokarda görkezilen CyberPanel konstantalaryň tassyklanmagyny we baglanyş testini geçýändigini barlap görüň.
2. Emails addon-ynda CyberPanel elektron provayderini (email provider) işlemekde açyň.
3. Ýönlendirmeyi döretmekden öň, müşder domany CyberPanelde bar bolsa, ony tassyklap görüň.
4. Test ýönlendirmesi döredip, onu arkaly bir mesaga göndermegi soňra bu funksionaly öndüriş planlarynda teklip etmäge çykyň.

Eger forwarder döredilip bilmese, ilki bilen Ultimate Multisite faelli loglaryny kontrol edin, soňra CyberPanelde maneden (source domain) bar olup olmadığını we API ulanyjysynda e-mail-management yetkileri bar olup olmadığını barlap göräň.

## Configuration Reference

| Constant | Required | Default | Açıklama |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Evet | — | CyberPanel örneğinizin portunu daxil etmiş tam URL'si, örneğin: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Evet | — | CyberPanel yönetici kullanıcı adı |
| `WU_CYBERPANEL_PASSWORD` | Evet | — | CyberPanel yönetici şifresi |
| `WU_CYBERPANEL_PACKAGE` | Evet | `Default` | Yeni sanal ana bilgisayarlara atayacağınız CyberPanel barındırma paketi |
| `WU_CYBERPANEL_AUTO_SSL` | Hayır | `true` | Alan adı oluşturulduktan sonra Let's Encrypt SSL sertifikası oluşturulmasını sağlar |
| `WU_CYBERPANEL_PHP_VERSION` | Hayır | `PHP 8.2` | Yeni sanal ana bilgisayarlar için PHP sürümü (CyberPanel'de kurulu olan bir sürüme uymalıdır) |
| `WU_CYBERPANEL_EMAIL` | Hayır | — | SSL sertifikası kaydı için iletişim e-postası |

## Önemli Notlar

CyberPanel API sessiya esasy token autentifikasiyasyny ulanyp işledir. Bu integrasiýa her bir API çagyryşynda tokeni awtomatiki ýaly alýar.
Siziň CyberPanel administrasiýa hasabynda web sahypalaryny döretmek we silmek üçin resminamalar (permissions) bolmaly.
CyberPanel standart bilen `8090` portunda işledipdir. Eger siziň serveri firewall ulanyp bolsa, bu portu WordPress ilkinji serverinden girip biljekdigini üpjün ediň.
Bu integrasiýa DNS resminamalaryny dolandyrmaz. Domaini Ultimate Multisite-da eşde dowam etdirmek üçin domain DNS-ini siziň serveri IP adresine ýol bermeli size zerurdyr.
Eger siz OpenLiteSpeed (OLS) ulanyp başlasaňyz, virtual hostlar üýtgedilenden soň awtomatiki ýaly ýumşak ýaýyş (graceful restart) işe goýulýar. Manual müdahalma gerek däl.

## Sorunlary Gözläp Çyrma (Troubleshooting)

### API Bağlanyp Bilmez (API Connection Refused)

Server firewall'unuzda `8090` portunun açık olup olmadığını kontrol edin.
`WU_CYBERPANEL_HOST` değerinin doğru protokolü (`https://`) ve portu içerdiğini doğrulayın.
CyberPanel SSL sertifikanızın geçerli olup olmadığını kontrol edin; kendi kendine imzalanmış (self-signed) sertifikalar TLS doğrulama hatalarına neden olabilir. Sadece güvenilir özel ağ ortamlarında `WU_CYBERPANEL_VERIFY_SSL` değerini `false` olarak ayarlayın.

### Kimlik Doğrulama Hataları

- CyberPanel'e doğrudan giriş yaparak `WU_CYBERPANEL_USERNAME` ve `WU_CYBERPANEL_PASSWORD` bilgilerinizin doğru olup olmadığını kontrol edin.
- Giriş denemeleri tekrar başarısız olduğunda CyberPanel'de **Security** > **Brute Force Monitor** kısmını kontrol edin; kilitlenme (lockout) durumları olursa orayı bakın.

### Alan Adı Oluşturulmadı

Ultimate Multisite faelli loglarynda (Ultimate Multisite > Activity Logs) API ýalňyşlary barada barlap görüň.
`WU_CYBERPANEL_PACKAGE` içinde kesgitlenen paket CyberPanelde (**Packages** > **List Packages**) barada barlap görüň.
Domaini CyberPanelde önümçeli web sahypa hökmünde ýazylmadykdan öňüni çykaryp biljekdigini hasaplaň — duplikat web sahypa döredilmegi yalňyş berýär.

### SSL Sertifikaty Berilmedi

DNS-i tolu ýa-laýyn bolmagyny tassyklap görüň: `dig +short your-domain.com` sizden wep-serveri IP-sini bermeli.
Let's Encrypt sazlaşyk limitlerini (rate limits) tersine işlese. Eger siz soňky wakaça birden köp sertifikat üçin birme sertifikat berip bolsaňyz, täsir etmeden önce garaşyp duruň.
Sertifikat berilmegi bilen baglanyşykly ýetmezçilikleri anyklamak üçin **Logs** > **Error Logs** boýunça CyberPanel-de SSL loglaryny kontrol ediň.
Alternatiw bolup, siz CyberPanelden SSL-i manual (gözel) berip bilersiňiz: **SSL** > **Manage SSL** > domaini saýlaň > **Issue SSL**.

## Goldanyşyklar

- CyberPanel API Dokumentasiýasy: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Dolandyryşy: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Sazlaşyk Limitleri: https://letsencrypt.org/docs/rate-limits/
