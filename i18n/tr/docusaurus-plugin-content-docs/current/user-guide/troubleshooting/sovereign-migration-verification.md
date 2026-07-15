---
title: Egemen Taşıma Doğrulama
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Egemen Taşıma Doğrulama

Ultimate Multisite: Multi-Tenancy 1.2.0 sürümü, egemen kiracı (sovereign tenant) geçişleri için WP-CLI doğrulama komutlarını içerir. Bir kiracı geçişi, SSO ziyareti veya izole kurulum beklediğiniz gibi çalışmadığında bunları kullanın.

## Çalıştırılacak Komutlar {#commands-to-run}

Ağdaki WordPress kurulumundan doğrulama yapın:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Taşıdığınız kiracının site ID'sini kullanın. İlk komut, kiracının artık eski ağ tarafı verilerine bağlı olmadığını kontrol eder. İkinci komut ise egemen itme (sovereign push) işlerinin işleyip boşaltılıp boşaltılamadığını doğrular.

## Yaygın Hatalar {#common-failures}

### Veritabanı izinleri ana bilgisayarla eşleşmiyor {#database-grants-do-not-match-the-host}

Doğrulama, izin veya writer-user hataları bildiriyorsa, yapılandırılmış veritabanı ana bilgisayarını kontrol edin. `localhost`, `127.0.0.1` ve bir konteyner hizmeti adı farklı MySQL izin ana bilgisayarlarıdır. Kiracı ana bilgisayar bağlamını veya veritabanı izinlerini güncelledikten sonra doğrulamayı tekrar çalıştırın.

### Bedrock veya yerel kurulumlar bağlanamıyor {#bedrock-or-local-installs-cannot-connect}

Bedrock ve yerel soket kurulumları, veritabanını `localhost` olarak bildirirken çalışma zamanı normalize edilmiş bir adres üzerinden bağlanabilir. Sürüm 1.2.0 aynı makine ana bilgisayarı dizelerini normalleştirir, ancak özel ana bilgisayar geçersiz kılmaları veritabanı izinleriyle hala çakışabilir.

### Asenkron itme kuyruğu boşaltılmıyor (drain) {#async-push-queue-does-not-drain}

`verify-sovereign-push` bitmezse, Action Scheduler veya yapılandırılmış asenkron çalıştırıcıyı kontrol edin. İşlerin güvenli bir şekilde yeniden denenip denenmeyeceğine veya atılıp atılmayacağına emin olduktan sonra yalnızca başarısız işleri temizleyin.

### Kiracı kullanıcı sayısı yanlış {#tenant-user-count-is-wrong}

Taşıma işlemi egemen kiracı için kullanıcılar oluşturmalıdır. Beklenen kurulum kullanıcısı eksikse, SSO'yu tekrar denemeden önce kullanıcı sağlama adımını yeniden çalıştırın.

### SSO ziyareti reddediliyor {#sso-visit-is-rejected}

Durumsuz (stateless) kiracı otomatik girişi için kiracının alan adı, kaynak pini (origin pin), token amacı, nonce ve sürenin eşleşmesi gerekir. Kiracı URL'sinin doğru olduğundan emin olun ve SSO ziyareti oluşturulduktan hemen sonra giriş denemesi yapın.

## Ne zaman tekrar denmeli? {#when-to-retry}

Her altyapı değişikliğinden sonra doğrulamayı tekrarlayın. Tüm doğrulama kontrolleri geçene kadar üretim trafiğini değiştirmeyin, kaynak verileri silmeyin veya geçiş kimlik bilgilerini kaldırmayın.
