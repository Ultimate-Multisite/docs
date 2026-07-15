---
title: Çoklu-tenant izolýasiýa
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Çoklu Kiracılar Arasından Ayırma (Multi-Tenancy Isolation)

Ultimate Multisite: Multi-Tenancy 1.2.0, öz bağımsız kiracılar (sovereign tenants) için her alt siteye özel veritabanı ve dosya sistemi izolasyonunu destekler. Bu, kiracı verilerini birbirinden ayırırken ağ düzeyindeki sağlama (provisioning), faturalandırma ve yönetim özelliklerini korur.

## İzolasyon Stratejisi {#isolation-strategy}

Daha güçlü veri ayrımı, özel dosya sistemi depolama veya ayrı bir sunucu sınırı gerektiren müşteriler için öz bağımsız izolasyonu kullanın.

Her öz bağımsız kiracının şunları olmalıdır:

- Sunucu tarafından onaylanmış özel bir kiracı veritabanı veya veritabanı ön eki stratejisi.
- Özel bir kiracı dosya sistemi kök dizini (root).
- Siteyi veritabanına, ana yola (root path), ana bilgisayar adına (hostname) ve izolasyon modeline eşleyen bir kiracı kayıt girişi (registry entry).
- Kiracının canlı kabul edilmesinden önce bir geçiş doğrulama sonucu.

## Veritabanı Sunucu Bağlantısı (Database Host Binding) {#database-host-binding}

Sürüm 1.2.0, öz bağımsız kurulumlar için varsayılan aynı makine bağlantı davranışını değiştirir. `localhost` gibi aynı makine değerleri normalize edilir, böylece Bedrock, FrankenPHP ve konteynerleştirilmiş WordPress kurulumları, MySQL'in aslında gördüğü ana bilgisayar dizesine karşı izin verebilir ve doğrulama yapabilirler.

Bir öz bağımsız kiracıyı yapılandırırken:

1. Veritabanı sunucusunu kiracı çalışma zamanının (tenant runtime) istediği değere ayarlayın.
2. Sunucu yerel bağlantıları bekliyorsa, yerel soket kurulumları için `localhost` kullanın.
3. Veritabanı sunucusu o ana bilgisayara ayrıcalıklar verdiyse yalnızca `127.0.0.1` veya bir hizmet ana bilgisayar adını (service hostname) kullanın.
4. Sunucu bağlantısını değiştirdikten sonra geçiş doğrulamasını çalıştırın.

Doğrulama raporları izin hataları gösterirse, kiracı veritabanı kullanıcı ayrıcalıklarını yapılandırılmış sunucu bağlantısıyla karşılaştırın. `user@localhost` için verilen bir kullanıcı, `user@127.0.0.1` veya `user@%` ile farklıdır.

## Dosya Sistemi Kök Dizini (Filesystem Root) {#filesystem-root}

Tenant root restartlar we dağıtmalarda stabil bolmaly. Geçici mount yollarından sakaryň. Bedrock-stilde kurmak üçin, tenant root'uny diňe proje kökünden däl, eýsem tenant bootstrap-y bedel berjek WordPress web kökü bilen baglanyşdyryp görüň.

## Kurmak tertibi (Provisioning order) {#provisioning-order}

Iň soňky sovrin tenantlar üçin bu tertibi ulanyn:

1. Tenant regestr ýazgysyny döretmek.
2. Tenanti bazasyny we bazanyň ulgamını döretmek.
3. Tenant skemmasyny bootstrap etmek.
4. Tenant ulgamlaryny (users) döretmek.
5. Tenanti dosya yollaryny (filesystem paths) görkezmek.
6. Migrasiýa barlagyny ýok etmek (Run migration verification).
7. Barlag geçse, yönlendirmeyi (routing) we DNS-i üýtgetmek.

Bu tertip bazanyň ýazgysy, ulgamlary we dosya sistemini taýynlamazdan, böleki izole edilen tenantlara trafik bermegiň öňü çeker.

## Sovrin müşderileri dolandyrmagy (Sovereign customer management flows) {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 sovrin rejim (sovereign mode) işje berilende müşderileri dolandyrmak hereketlerini esasy site (main site) üstünde saklaýar. Tenant hala izole edilen WordPress kurşylyk ýaly işleýet bilse, ýöne ulgamyň ağ bilen hasyllandyrmagy, üye bolmagy ýa-da paylaşılan hasap maglumatlaryna bagly müşderi bilen baglanyşykly hereketler tenant işje berilipdirde tamamlanmaga synanyp bilmez; bu ýagdaýda müşderini tenant işje berilipdirde tamamlamak üçin esasy sitege geri göndermeli.

Esasy site tertibi şu zatlara degişlidir:

- Checkout we meýilnamalary üýtgetmek.
- Hasap umumy (Account overview) we müşderi profili hereketleri.
- Hasyllandyrmagyň adresi üýtgetmeleri we tölemekden hasap berme ekranlary.
- Sanyk (Invoice) we tölek taryhyny görkezmek.
- Site dolandyrmagy bilen baglanyşykly hereketler, mysal, site goýmak ýa-da site aýyrmak.
- Template üýtgetmek.
- Domain haritalamasy (Domain mapping) we esasy domain üýtgetmeleri.

Customer bir bu tür eylemlerden birini egemen kiradan (sovereign tenant) başarsa, Ultimate Multisite ona dogru ana sayfa URL'sini döredip, güvenli olduğunda kaynak kiradany (source tenant) geri dönme maksatlı hedefi saklar. Bu, müşterilerin yönetilen işlemi ağ kayıtları (network records) ilə tamamlamasına imkan verir, sonra da egemen bazada faturalandırma və üzvlük statusunu iki dəfə təkrar etmədən kiradany kontekstinə geri dönməsinə imkan yaradır.

Operatorlar üçin amaliy qayda şudur: egemen şəbəkələr üçün faturalandırma, hesab, checkout (ödəm), invoice (fatura), template və domain-management səhifələri ana saytda mövcud olmalydyr. Kiradany dashboard'ları bu səhifələrə link verip bilər, amma əsas sayt hər bir əməliyyat üçün həqiqi mənbədir (source of truth).
