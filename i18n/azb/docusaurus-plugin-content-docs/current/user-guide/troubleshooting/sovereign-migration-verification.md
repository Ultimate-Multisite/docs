---
title: Azb Migrasi Doğrulama
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Sovereign Migration Verification {#sovereign-migration-verification}

Ultimate Multisite: Multi-Tenancy 1.2.0-dağında egemen kiracılar için WP-CLI doğrulama komutları içerir. Bir kiracı taşıması, SSO ziyareti veya izole kurulumun beklediğiniz gibi çalışmadığı durumlarda bunları kullanın.

## Çalıştırılacak Komutlar {#commands-to-run}

Ağdaki WordPress kurulumundan doğrulama yapın:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Taşıdığınız kiracının site ID'sini kullanın. İlk komut, kiracının artık eski ağ tarafı verilerine bağlı olmadığını kontrol eder. İkinci komut ise egemen itme (sovereign push) işlerinin işleyip boşaltılıp boşaltılamadığını doğrular.

## Yaygın Hatalar {#common-failures}

### Veritabanı izinleri ana makineyle eşleşmiyor {#database-grants-do-not-match-the-host}

Doğrulama, izin veya writer-user hataları bildiriyorsa, yapılandırılmış veritabanı ana bilgisayarını kontrol edin. `localhost`, `127.0.0.1` ve bir konteyner hizmet adı farklı MySQL izin ana bilgisayarlarıdır. Kiracı ana makinesi bağlamını veya veritabanı izinlerini güncelledikten sonra doğrulama işlemini tekrar çalıştırın.

### Bedrock veya yerel kurulumları bağlanamıyor {#bedrock-or-local-installs-cannot-connect}

Bedrock ve yerel soket kurulumları, veritabanını `localhost` olarak bildirirken çalışma zamanı normalleştirilmiş bir adresi üzerinden bağlanabilir. Sürüm 1.2.0 aynı makine ana bilgisayarı dizelerini normalleştirir, ancak özel ana bilgisayar geçersiz kılmaları yine de veritabanı izinleriyle çakışabilir.

### Asenkron itme kuyruğu boşaltılmıyor {#async-push-queue-does-not-drain}

`verify-sovereign-push` bitmezse, Action Scheduler veya yapılandırılmış asenkron çalıştırıcıyı kontrol edin. Hatalı işleri yalnızca tekrar denemeye veya atmaya güvenli olduğundan emin olduktan sonra temizleyin.

### Kiracı kullanıcı sayısı yanlış {#tenant-user-count-is-wrong}

Taşıma işlemi için egemen kiracı adına kullanıcılar oluşturulmalıdır. Beklenen kurulum kullanıcısı eksikse, SSO'yu tekrar denemeden önce kullanıcı sağlama adımını yeniden çalıştırın.

### SSO ziyareti reddediliyor {#sso-visit-is-rejected}

Stateless kiraya (tenant) otomatik girişinde kiraya alanın domaini, origin pin'i, token amacı, nonce ve sürenin eşleşmesi gerekir. Kiraya URL'sinin doğru olduğundan emin olun ve SSO ziyareti oluşturulduktan hemen sonra girişi denemeyi deneyin.

## Ne zaman tekrar denmeli? {#when-to-retry}

Her altyapı değişikliğinden sonra doğrulamayı tekrarlayın. Tüm doğrulama kontrolleri geçene kadar üretim trafiğini değiştirmeyin, kaynak verileri silmeyin veya geçiş kimlik bilgilerini kaldırmayın.
