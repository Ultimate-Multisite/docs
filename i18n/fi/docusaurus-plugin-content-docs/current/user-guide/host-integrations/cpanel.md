---
title: cPanel-integraatio
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel-integraatio

## Yleiskatsaus
cPanel on yksi suosituimmista verkkohostauksen hallintapaneeleista, jota monilla jaettujen sekä omistettujen hostattorien käytössä on. Tämä integraatio mahdollistaa automaattisen domeenin synkronoinnin Ultimate Multisiten ja cPanel välillä, jonka avulla voit lisätä domeenialueita ja alavalikoita cPanel-tilillesi automaattisesti.

## Ominaisuudet
- Automatiivinen addon domain -luonti cPanelissa
- Automatiivinen subdomain -luonti cPanelissa (subdomain multisite -asennuksia varten)
- Domeenin poisto, kun mappaukset poistetaan

## Vaatimukset
Seuraavat vakioiden on määritettävä tiedostoosi `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Valinnaisina voit myös määrittää:

```php
define('WU_CPANEL_PORT', 2083); // Oletusarvo on 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Oletusarvo on /public_html
```

## Asetusohjeet

### 1. Hae cPanel-tunnisteesi

1. Hanki cPanel-käyttäjätunnukset ja -salasanat hostattoristasi
2. Määrittele cPanel-hostisi (yleensä `cpanel.yourdomain.com` tai `yourdomain.com:2083`)

### 2. Lisää vakioita wp-config.php:ään

Lisää seuraavat vakioiden tiedostoon `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Valinnaisina voit muokata porttia ja juurihakemistoa:

```php
define('WU_CPANEL_PORT', 2083); // Muuta, jos cPanel käyttää eri porttia
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Muuta, jos dokumentin juurihakemisto on erilainen
```

### 3. Aktivoi integraatio

1. WordPress yönetici panelinde, Ultimate Multisite > Ayarlar'a gidin
2. "Domain Mapping" (Alan Eşleme) sekmesine gidin
3. Aşağı kaydırarak "Host Integrations" (Barındırma Entegrasyonları) bölümüne gelin
4. cPanel entegrasyonunu etkinleştirin
5. "Save Changes" (Değişiklikleri Kaydet) butonuna tıklayın

## Nasıl Çalışır

### Eklenti Alan Adları (Addon Domains)

Ultimate Multisite'ta bir alan adı eşlendiğinde:

1. Entegrasyon, alanı eklentili alan adı olarak cPanel'in API'sine bir istek gönderir
2. Alan adı, kök dizininize işaret edecek şekilde yapılandırılır
3. Bir alan adı eşlemesi kaldırıldığında, entegrasyon bu alan adını cPanel'den kaldırır

### Alt Alan Adları (Subdomains)

Alt alan adı çoklu site kurulumları için yeni bir site oluşturulduğunda:

1. Entegrasyon, tam alandan alt alan adı kısmını ayıklar
2. Alt alanı eklemek için cPanel'in API'sine bir istek gönderir
3. Alt alan adı, kök dizininize işaret edecek şekilde yapılandırılır

## Önemli Notlar

- Entegrasyon, cPanel hesabınızla iletişim kurmak için cPanel'in API2'sini kullanır
- cPanel hesabınızın eklentili alan adları ve alt alan adları ekleme yetkilerine sahip olması gerekir
- Bazı hosting sağlayıcıları oluşturabileceğiniz eklentili alan adı veya alt alan adı sayısını sınırlayabilir
- Entegrasyon DNS yapılandırmasını yönetmez; alan adlarını hala sunucunuzun IP adresine yönlendirmeniz gerekir

## Sorun Giderme

### API Bağlantı Sorunları
- cPanel kullanıcı adınız ve şifrenizin doğru olduğundan emin olun
- cPanel ana bilgisayarınızın doğru ve erişilebilir olduğunu kontrol edin
- cPanel hesabınızın gerekli izinlere sahip olduğundan emin olun
- Ana bilgisayar için tam URL'yi kullanmayı deneyin (örneğin, `https://cpanel.yourdomain.com`)

### Alan Adı Eklenmedi
- Herhangi bir hata mesajı olup olmadığını kontrol etmek için Ultimate Multisite kayıtlarını kontrol edin
- Alan adının cPanel'e zaten eklenmediğinden emin olun
- cPanel hesabınızın eklentili alan adları veya alt alan adları için sınırına ulaşmadığından emin olun

### SSL-vahvistusongelmat
- Integrointi ei käsittele SSL-vahvistusten myöntämistä.
- Sinun on käytettävä cPanelin SSL/TLS -työkaluja tai AutoSSL-ominaisuutta domainojesi SSL-vahvistusten myöntämiseen.
- Vaihtoehtoisesti voit käyttää palvelua kuten Let's Encryptin kanssa cPanelin AutoSSLia.
