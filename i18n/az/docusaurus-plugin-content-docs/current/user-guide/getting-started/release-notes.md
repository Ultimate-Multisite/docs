---
title: Nəşr Qeydləri
sidebar_position: 9
_i18n_hash: e9f9d20e55608b81945ab7dfcf495fcb
---
# Yayın Qeydləri

## Versiya 2.12.0 — 2026-05-15 tarixində buraxılıb

- Yeni: Domain mapping inteqrasiyası ilə birlikdə Hostinger (hPanel) dəstəklənən host provayderlərinə əlavə edildi.
- Yeni: Site Exporter, şəbəkə boyu site bərpası üçün optimallaşdırılmış şəbəkə idxal paketlərini idarə edir.
- Fix: BCC broadcast e-poqtləri, alıcı ünvanlarının görünməməsini təmin etmək üçün indi gizli-alıcılar (undisclosed-recipients) başlığından istifadə edir.
- Fix: Membership bitmə tarixi, tarix olmayan bir dəyərlə yadda saxlanarkən artıq pozulmur.
- Fix: Stripe membership yeniləmələri, köhnəlmiş deleteDiscount API-ni çağırmadan endirimləri düzgün şəkildə sıfırlayır.
- Fix: Domain-mapped saytlarda SSO yönləndirmələri, sonsuz yönləndirmə dövrələrinin qarşısını almaq üçün indi məhdudlaşdırılır.
- Fix: Setup wizard image picker seçimi, əsas data modelini düzgün şəkildə yeniləyir.
- Fix: Site Exporter CLI, düzgün default şəbəkə site seçimini saxlayır.
- Improved: Plugin paketindən birləşdirilmiş wp-cli çıxarıldı, bu da plugin ölçüsünü azaldır.

## Versiya 2.11.0 — 2026-05-11 tarixində buraxılıb

- Yeni: Site eksportları indi özünü işə salan (self-booting) bir `index.php` paketləyir, beləliklə ZIP faylı ayrı bir plugin quraşdırması olmadan təmiz bir hostda quraşdırıla bilər.
- Yeni: Network export, administratorlara Site Export admin səhifəsindən bütün subsitələri tək bir arxivdə eksport etməyə imkan verir.
- Yeni: Site Templates plan toggle-u indi bir fallback zənciri vasitəsilə tətbiq edilir, beləliklə plan məhdudiyyətləri üçün template mövcudluğunun düzgün məhdudlaşdırılmasını təmin edir.
- Yeni: Checkout form editor, tələb olunan bir sahə konfiqurasiya edilmədən bir məhsul əlavə edildikdə xəbərdarlıq edir.
- Yeni: Import/Export settings tab-ı indi öz əhatəsini aydın şəkildə təsvir edir və birbaşa Site Export alətinə keçid verir.

## Versiya 2.10.0 — 2026-05-05 tarixində buraxılıb

- Yeni: PayPal üçün əl ilə credential daxil etməyə kömək edən setup wizard, sökməsiz gateway konfiqurasiyası üçün OAuth flag gate ilə birləşdirildi.
- Yeni: Template switch customer panel-ı current-template kartı, daimi grid və **current template-i sıfırlama** düyməsi ilə yeniləndi.
- Fix: Template switching, AJAX uğursuzluğu zamanı UI-ni donaltmır.
- Fix: Template switching icazə vəziyyətləri, icazəsiz girişlərə qarşı təmin edildi.
- Fix: Site override inputları yadda saxlanmadan əvvəl validate edilir.
- Fix: Billing address tələbi, ünvan boş olduqda göstərilir.
- Fix: PHP 8.1 null-to-string deprecation notices aradan qaldırıldı.
- Fix: Currents, timing problemlərini aradan qaldırmaq üçün init hook-undan əvvəl lazy-load edilir.
- Fix: Filtered SSO yolu bütün login axınlarında nəzərə alınır.
- Fix: Boş site identity seçimləri yadda saxlanarkən qorunur.

## Versiya 2.9.0 — 2026-04-30 tarixində buraxılıb

- Yeni: **Tools > Export & Import** altında tək-site eksportu və importu əlavə edildi.
- Fix: Export ZIP faylları indi autentifikasiya edilmiş yükləmə endpoint-i vasitəsilə təqdim edilir.
- Fix: Pending export/import sorğularındakı SQL injection riski və sorğu problemləri düzəldildi.
- Fix: Admin tərəfindən müştəri e-pochtu təsdiqləndikdə pending site artıq yayınlanmır.
- Fix: Membership yoxdursa, yatılı pending_site qeydləri təmizlənir.
- Fix: Settings nav padding və search anchor navigasiyası düzəldildi.
- Fix: Pending sitələr indi All Sites görünüşündə ilk yerə yerləşdirilir.
- Fix: Screenshot provider (mShots) üçün 403 xətalarına qarşısını almaq üçün User-Agent header-ı əlavə edildi.
- Fix: Import cron cədvəli dövrəvi asılılıqdan azad edildi.
- Fix: Tour ID-lər istifadəçi ayarları açarlarında alt xətlərlə normalizə edildi.
- Improved: Daha yaxşı uyğunluq üçün Alchemy/Zippy əvəzinə ZipArchive istifadə olunur.

## Versiya 2.8.0 — 2026-04-29 tarixində buraxılıb

- Yeni: Other Options settings UI-də Enable Jumper toggle əlavə edildi.
- Yeni: Checkout forms list cədvəlinə Status sütunu əlavə edildi.
- Yeni: Custom MU-plugin sunrise extensions üçün Addon sunrise file loader.
- Improved: Settings səhifəsindən error-reporting opt-in ayarı çıxarıldı.
- Fix: Thank-you page site kartı — şəkil indi məhdudlaşdırılır və linklər düzgün stilizə edilir.
- Fix: Screenshot provider thum.io-dan WordPress.com mShots-a keçirildi.
- Fix: Enable Registration və Default Role indi təmiz quraşdırmada düzgün default dəyərlər təyin edir.
- Fix: `get_site_url()` domain port daxil etdikdə artıq boş dəyər qaytarmır.
- Fix: `copy_media` ayarı boş olduqda media faylları düzgün şəkildə kopyalanır.
- Fix: Object cache, network-activate sitemeta yazıldıqdan sonra düzgün şəkildə etibarsızlaşdırılır.
- Fix: 3 hissəli domainlər üçün custom domain DNS təsdiqi zamanı primary olaraq təqdim edilir.
- Fix: Ödənişi bitmiş olduqda pending membership ləğv edilir.
- Fix: Password strength checker, inline login prompt bağlandıqdan sonra yenidən bağlanır.
- Fix: Site artıq yaradılmışsa, thank-you səhifəsində sonsuz səhifə yenilənməsi dayandırılır.
- Fix: WP core registration seçimi plugin aktivləşdirilməsi və ayarlar yadda saxlanması zamanı sinxronlaşdırılır.
- Fix: PHP 8.4 uyğunluğu üçün `calculate_expiration`-da Null expiration guard əlavə edildi.
- Fix: Müştəri artıq aktiv membership-a sahibdirsə, duplicate signups bloklanır.
- Fix: Checkout-da `date_expiration` üçün Null yoxlaması əlavə edildi.
- Fix: Site provisioning sərtləşdirildi — məhdudiyyətlər, membership inferansı, domain təqdimatı.
- Fix: Pre-install check status label, yoxlama uğursuz olduqda NOT Activated olaraq düzəldildi.
- Fix: Checkout domain-i e-mail təsdiqi URL-ləri üçün istifadə olunur.
- Fix: Password sahəsi yoxdursa, checkoutdan sonra auto-login.
- Fix: Free memberships artıq bitmir — ömürlük sayılır.
- Fix: Email verification gate, müştəri e-mailini təsdiqlədən yayınlanma (site publish) saxlayır.
- Fix: SES v2 API endpoint base path və identity yolu düzəldildi.
- Fix: `wu_inline_login_error` hook-u pre-submit catch blokunda yayımlanır.
