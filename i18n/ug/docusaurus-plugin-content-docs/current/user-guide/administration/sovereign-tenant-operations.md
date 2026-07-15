---
title: Hükümdar Kiracı Faaliyetleri
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# حاکمیت داشتن Tenant (Sovereign Tenant) عملياتleri

Ultimate Multisite: Multi-Tenancy 1.2.0، حاکمیتli tenant'ler için operasyonel araçlar ekledi: bu alt siteler kendi veritabanılarına، dosya sistemi köklerine ve yönlendirme bağlamına sahip olurken, ağ yöneticisinden görünmeye devam ederler.

Standart bir alt siteyi hاکمیتli altyapıya taşıyan izole müşteri sitelerini yönetirken, uzaktan site devir teslimleri veya geçişler yaparken bu sayfayı kullanın.

## Yöneticiler için ne değişti? {#what-changes-for-administrators}

- **Durumsuz tenant otomatik girişi (Stateless tenant autologin)** — Ağ yöneticileri uzun süreli paylaşılan oturum durumuyla uğraşmadan hاکمیتli bir tenant'a ziyaret yapabilirler. SSO token'ı amaç odaklıdır, kaynağa sabitlenmiştir (origin-pinned), tekrar oynatılmaya karşı korunur ve kısa bir süre sonra sona ermesi için sınırlıdır.
- **Hاکمیتli farkındalıkla yönlendirme (Sovereign-aware routing)** — Eski izole ağlar ve حاکمیتli tenant'ler aynı site yönlendirici yolu üzerinden çözülür, bu da eski ve yeni izole kurulumlar arasındaki başlangıç farklılıklarını azaltır.
- **Doğrulanmış geçiş durumu (Verified migration state)** — Geçiş doğrulaması; kullanıcı sağlama, veritabanı yazıcı izinleri, kuyruk boşaltma durumu ve bir tenant tamamlanmadan önce eski tablo eksikliğini kontrol eder.
- **Daha güvenli kaldırma (Safer teardown)** — Hاکمیتli kaldırma artık tenant kimlik bilgilerini temizleyerek kaldırır, böylece silinen tenant'ler arka planda eski veritabanı erişimlerini bırakmazlar.

## Bir حاکمیتli tenant'a gitmek {#visiting-a-sovereign-tenant}

1. **Network Admin > Ultimate Multisite > Sites** yolunu açın.
2. Hاکمیتli tenant'ı seçin.
3. Şifre kopyalamak veya geçici yönetici hesapları oluşturmak yerine, mümkünse **Visit (SSO)** özelliğini kullanın.

Ziyaret akışı o tenant için kısa ömürlü bir giriş token'ı oluşturur ve SSO olayını tenant denetim izinde kaydeder. Buton başarısız olursa, tenant alan adının beklenen kurulumla eşleşip eşleşmediğini ve tenant'in ağ tarafındaki SSO uç noktasına ulaşıp ulaşmadığını kontrol edin.

## Uzak site operasyonları kontrol listesi {#remote-site-operations-checklist}

Bir حاکmیتli veya uzak bir tenant değiştirmeden önce şunları doğrulayın:

- Tenant domain, хост (host) бакинге (points at) тенант файлосистемине ээ болган хостке улануч.
- Тenaarт базасы хостинг хостинг баиндиг (matches the configured host binding for that install).
- Миграцияни танант учун командалар дуруулга (pass) келади.
- Асинхрон миграция кутучалари (Async migration queues) DNS ёки мулкий ўзгартиришларни киритишдан олдин очилади (drained).
- Тenaar администратор фойдаланувчи миграция даврида тақдим этилган ва SSO орқали кириниши мумкин.

## Ҳукумат соҳиби тенантларни ўчириш (Deleting sovereign tenants) {#deleting-sovereign-tenants}

Ҳукумат соҳиби тенантини ўчириш зарарли амалдир. Аввал бэкап ва экспорт ҳолатини тасдиқланг, сўнгра сайт бошқаруви экранидан ўчиринг. 1.2.0-даги деконструкция (teardown) жараёни тозалаш қисми сифати тенант базаси маълумотларини олиб ташлайди, лекин администраторлар ташқи хостинг панелларидан фойдаланилганда ҳам хост даражасидаги базасоби ва папкалар кетганлигини текшириш керак.

:::warning
Миграцияни тасдиқлаш давомида ёки асинхрон пуш жуйелари (async push jobs) кутучаётган вақтда ҳукумат соҳиби тенантини ўчирманг. Тасдиқланиш якун бўлганидан сўнг деконструкция амалга оширилсин, шунинг учун кутучаётган жуйелар учун керак бўлган маълумотларни олиб ташлаб юборишдан қочилилади.
:::
