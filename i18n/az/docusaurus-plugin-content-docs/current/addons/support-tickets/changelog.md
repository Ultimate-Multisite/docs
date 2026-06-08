---
title: Dəstək Tiketləri Changelog
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Dəstək Tiketləri Yeniləmə Qeydi

### 1.0.4 - 2026-05-05
* Təkmilləşdirildi: `vendor/` qovluğundan Git izləməsindən çıxarıldı (bu artıq `.gitignore` ilə əhatə olunur), bu da repozitoriya ölçüsünü azaldır.
* Təkmilləşdirildi: WordPress 7.0-a qədər test edildi.

### 1.0.3 - 2026-05-01
* Düzəldildi: Null dəyərləri qəbul etmək üçün boş dəyər qəbul edən tiket modelinin setter funksiyaları.
* Düzəldildi: Düzgün multisite dəstəyi üçün bütün tiketlər global, şəbətnə yayılmış cədvəllərdə saxlanılır.
* Düzəldildi: İşçi sahələri gizlədilmiş və müştəri yeni tiket formunda boş səhifəyə yönləndirmə problemi aradan qaldırıldı.
* Düzəldildi: Meta məlumatların saxlanması üçün `undefined add_meta()` çağırışları düzgün `update_meta()` ilə əvəz edildi.
* Düzəldildi: Qeydiyyatdan keçməmiş imkanət yoxlaması düzgün `wu_view_all_support_tickets` ilə əvəz edildi.
* Düzəldildi: Tiket statusu, təyin edilməsi və sürətli redaktə əməliyyatları üçün çatışmayan AJAX handler-ları əlavə edildi.
* Düzəldildi: Tiket görünüşlərində işçi cavabının aşkarlanması üçün metod adı düzəldildi.
* Düzəldildi: Duplikat cavab handler-ları konsolidasiya edildi və nonce aksiyon adları hizalandırıldı.
* Düzəldildi: `[wu_submit_ticket]` shortcode üçün çatışmayan frontend görünüşü əlavə edildi.
* Düzəldildi: Çatışmayan `user_id` sütunu əlavə edildi və `Support_Ticket::get_user_id()` metodu düzəldildi.
* Düzəldildi: Prioritet filtri seçim etiketindəki əlavə iki nöqtəli vergül çıxarıldı.
* Düzəldildi: Süper adminlər üçün şəbəkə admin tiket idarəetmə paneli əlavə edildi.
* Təkmilləşdirildi: Admin CSS-i tək bir xarici stil faylına konsolidasiya edildi.
* Təkmilləşdirildi: Altsayt admin menyusundan Ayarlar alt menyusu çıxarıldı.
* Təkmilləşdirildi: Frontend aktivləri yalnız dəstək tiketi səhifələrində şərti yüklənməsi.
* Təkmilləşdirildi: Bedrock kök autoloader-ı artıq asılılıqları yükləmişsə, plugin autoloader-ı atlayır.

### 1.0.2 - 2025-12-11
* Əlavə edildi: Admin və frontend üçün tam tiket görüntüleme funksionallığı.
* Əlavə edildi: Tiket cavab göndərilməsi üçün AJAX handler.
* Əlavə edildi: Düzgün form idarəetməsi ilə tiket cavabı funksionallığı dəstəklənməsi.
* Əlavə edildi: Admin-də tiket göndərilmələri və cavablar üçün düzgün bildiriş göstərilməsi.
* Əlavə edildi: Müştərilərin özləri tərəfindən göndərilən tiketlər üçün avtomatik istifadəçi ilə əlaqələndirilməsi.
* Əlavə edildi: Müştərilərin tiket sahibliyini dəyişdirməsinin qarşısını almaq üçün təhlükəsizlik təkmilləşdirilməsi.
* Əlavə edildi: Çatışmayan köməkçi funksiyalar (`wu_format_date`, `wu_user_can_view_ticket` və s.).
* Əlavə edildi: Düzgün fayl əlavə etmə və idarəetmə.
* Əlavə edildi: Tiket cavabları və status dəyişiklikləri üçün e-poçt bildiriş sistemi.
* Düzəldildi: Tiket cavabı forması indi zəruri tiket ID-sini ehtiva edir.
* Düzəldildi: Admin tiket görünüşlərində bildiriş görünürlüyü problemləri.
* Düzəldildi: Dəstək tiketi funksiyalarında sintaksis xətaları.
* Təkmilləşdirildi: Cavablar və əlavələr üçün düzgün sorğu və sxema siniflərini olan verilənlər bazası strukturu.
* Təkmilləşdirildi: Tiket modelləri üçün atributlar əvəzinə real xüsusiyyətlərə miqrasiya.

### 1.0.1 - 2025-09-28
* Yeniləndi: Tutarlılıq üçün prefiks `ultimate-multisite` olaraq adlandırıldı.
* Yeniləndi: Mətn domeninin standartlaşdırılması.
* Düzəldildi: Kiçik bug düzəlişləri və təkmilləşdirmələr.

### 1.0.0 - 2025-09-01
* İlkin buraxılış
* Tam tiket idarəetmə sistemi
* Çox səviyyəli giriş nəzarəti
* Mövzu bazlı söhbət sistemi
* Fayl əlavə etmə dəstəyi
* E-poçt bildiriş sistemi
* Admin və müştəri interfeysləri
* Statistika və hesabatlar
