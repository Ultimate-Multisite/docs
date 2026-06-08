---
title: Multisite Qurulum Sihirbazı
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite Qurulum Sihirbazı

Ultimate Multisite, standart bir WordPress quraşdırmasını avtomatik olaraq bir WordPress Multisite şəbətinə çevirən daxili bir sihirbaz (wizard) ehtiva edir. Bu, `wp-config.php` faylını əl ilə redaktə etmək və ya verilənlər bazası əmrləri çalıştırmaq zəruriyyətini aradan qaldırır.

:::tip
Əgər WordPress quraşdırmanız artıq bir Multisite şəbəti kimi işləyirsə, bu addımı tamamilə atlay bilərsiniz. Sihirbaz yalnız Multisite hələ aktivləşdirilmədiyində görünür.
:::

## Sihirbaz Nə Vaxt Görünür?

Ultimate Multisite-ı standart (Multisite olmayan) bir WordPress quraşdırması üzərində aktivləşdirdiyiniz zaman, plugin Multisite-ın aktiv olmadığını aşkar edir və sizi adi qurulum sihirbazı əvəzinə avtomatik olaraq Multisite Qurulum Sihirbazına yönləndirir.

Bəlkə ki, birbaşa **WP Admin > Ultimate Multisite > Multisite Setup** ünvanından da daxil ola bilərsiniz.

## Ön Şartlar

Sihirbazı işə salmadan əvvəl, olduğunuzdan əmin olun ki:

- WordPress quraşdırmanıza **administrator hüququ** var
- Serverinizin `wp-config.php` faylı veb server tərəfindən **yazılmağa açıqdır**
- Fayl və verilənlər bazanızın **yeni bir ehtiyat nüsxəsi (backup)** var

:::warning
Sihirbaz `wp-config.php` faylınızı dəyişdirir və yeni verilənlər bazası cədvəlləri yaradır. Devam etməzdən əvvəl həmişə ehtiyat nüsxəsi yaratın.
:::

## Addım 1: Xoş Gəlmisiniz

İlk ekran nəyin WordPress Multisite olduğunu və sihirbazın nə edəcəyini izah edir:

- WordPress konfiqurasiyasında Multisite funksiyasını aktivləşdirmək
- Zəruri şəbəkə verilənlər bazası cədvəllərini yaratmaq
- Tələb olunan multisite sabitlərini (constants) `wp-config.php` faylına əlavə etmək
- Ultimate Multisite-ı şəbəkə boyunca aktivləşdirmək

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Davam etmək üçün **Continue** düymasına basın.

## Addım 2: Şəbəkə Konfiqurasiyası

Bu addım sizdən şəbəkə parametrlərinizi konfiqurasiya etməyinizi xahiş edir.

### Sayt Strukturu

Şəbəkə saytlarınızın necə təşkil ediləcəyini seçin:

- **Sub-domainlər** (Tövsiyə olunur) — Saytlar öz sub-domainlərini alır, məsələn, `site1.yourdomain.com`
- **Sub-directorylər** — Saytlar yol kimi yaradılır, məsələn, `yourdomain.com/site1`

:::note
Əgər sub-domainləri seçsəniz, domeniniz üçün **wildcard DNS** və **wildcard SSL sertifikatı** konfiqurasiya etməli olacaqsınız. Əksər idarə olunan WordPress hostları bunu avtomatik edir. Ətraflı müqayisə üçün [Ultimate Multisite 101](./ultimate-multisite-101) ünvanına baxın.
:::

### Şəbəkə Başlığı (Network Title)

Şəbəkəniz üçün bir ad daxil edin. Bu, avtomatik olaraq mövcud sayt başlığınızla və sonuna "Network" sözü əlavə edilməsi ilə təyin olunur. Bunu daha sonra şəbəkə parametrlərindən dəyişə bilərsiniz.

### Şəbəkə Administrator E-poçtu (Network Admin Email)

Şəbəkə idarəetmə bildirişləri üçün istifadə edilən e-poçt ünvanıdır. Bu, mövcud istifadəçinin e-poçt ünvanına təyin olunur.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Sahələri doldurduqdan sonra, davam etmək üçün **Continue** düymasına basın.

## Addım 3: Quruluma Başlama

Başlamaq üçün **Install** düymasına basın. Sihirbaz ardıcıl olaraq beş avtomatik addım yerinə yetirir və hər biri öz irəliləməsini real vaxtda göstərir:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Addım | Təsvir |
|------|-------------|
| **Enable Multisite** | `wp-config.php` faylına `WP_ALLOW_MULTISITE` sabitini əlavə edir |
| **Create Network** | Multisite verilənlər bazası cədvəllərini (`wp_site`, `wp_sitemeta`, `wp_blogs` və s.) yaradır və onları şəbəkə konfiqurasiyanızla doldurur |
| **Update Configuration** | Son multisite sabitlərini `wp-config.php` faylına əlavə edir (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE` və s.) |
| **Fix Cookies** | Aktivləşdirmədən sonra autentifikasiya problemlərini aradan qaldırmaq üçün sayt URL-inin şəbəkə metadata-sında düzgün olduğundan əmin olur |
| **Network Activate Plugin** | Ultimate Multisite-ı şəbəkə boyunca aktivləşdirir |

Hər addım bu statuslardan birini göstərir:

- **Pending** — İşlənməyi gözləyir
- **Installing...** — Hazırda işləyir
- **Success!** — Uğurla tamamlandı
- **Error message** — Bir səhv baş verdi (mesaj problemi təsvir edəcək)

Bütün addımlar uğurla tamamlandıqdan sonra, hər bir maddə üçün yaşıl rəngli "Success!" statusu görəcəksiniz:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Sihirbaz sonra avtomatik olaraq tamamlanma ekranına keçəcək.

## Addım 4: Tamamlandı

Quraşdırma tamamlandıqdan sonra, WordPress Multisite-ın aktivləşdirildiyini təsdiq edən bir uğur mesajı görəcəksiniz.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

İndi WaaS platformanızı konfiqurasiya etmək üçün Ultimate Multisite qurulum sihirbazına davam edə bilərsiniz (şirkət detalları, standart məzmun, ödəniş qapıları və s.).

:::note
Multisite quraşdırması tamamlandıqdan sonra, brauzeriniz yeni aktivləşdirilmiş şəbəkə administratoru vasitəsilə yönləndiriləcək. Multisite mühiti üçün autentifikasiya cookie-ləri yeniləndiyindən, yenidən daxil olmanız lazım gələ bilər.
:::

## Əl ilə Quruluma Keçid (Manual Setup Fallback)

Əgər sihirbaz `wp-config.php` faylınıza yazmaqda çətinlik çəkərsə (fayl icazələri və ya server məhdudiyyətləri səbəbindən), sizə əl ilə əlavə etməli olduğunuz dəqiq kodu göstərəcək:

1. `/* That's all, stop editing! */` xəttindən yuxarı əlavə edilməli olan **wp-config.php sabitləri**
2. Seçdiyiniz sayt strukturu üçün uyğun **.htaccess rewrite qaydaları** (sub-domain və ya sub-directory)

Əl ilə dəyişiklikləri etdikdən sonra, səhifəni yeniləyin və sihirbaz Multisite-ın artıq aktiv olduğunu aşkar edəcək.

## Problemlərin Həlli (Troubleshooting)

### Sihirbaz `wp-config.php` yazılmağa açıq deyil

Veb server prosesinizin `wp-config.php` faylına yazma icazəsi olmalıdır. Bu vəziyyətdə aşağıdakılardan birini edə bilərsiniz:

- Fayl icazələrini müvəqqəti olaraq `644` və ya `666` olaraq dəyişin
- Sihirbaz tərəfindən təqdim edilən əl ilə quruluma keçid təlimatlarından istifadə edin
- Hosting provayuderonuzdan kömək istəyin

### Qurulmadan sonra saytlara daxil olmaq mümkün deyil (sub-domainlər)

Əgər sub-domain strukturu seçmisinizsə, domeniniz üçün **wildcard DNS** konfiqurasiya etməlisiniz. Aşağıdakı DNS qeydini əlavə edin:

```
Type: A (or CNAME)
Host: *
Value: [your server IP]
```

Bunu necə konfiqurasiya etdiyinizdən əmin deyilsinizsə, hosting provayuderonuzla yoxlayın.

### Qurulmadan sonra autentifikasiya problemləri

Multisite qurulmasından sonra çıxarılıbsınızsa və ya cookie səhvləri yaşayırsınızsa:

1. Brauzerinizdə sayt üçün cookie-ləri təmizləyin
2. Yenidən `yourdomain.com/wp-login.php` ünvanında daxil olun
3. Problem davam edərsə, `wp-config.php` faylınızda `COOKIE_DOMAIN` sabitinin `false` olmamasını yoxlayın — bu, sub-domain multisite quraşdırmalarında məlum bir problemdir.

### Qurulma zamanı bir addım uğursuz oldu

Quraşdırma addımlarından biri səhv göstərirsə:

1. Göstərilən səhv mesajını qeyd edin
2. Konfiqurasiya addımına qayıdın və yenidən cəhd edin
3. Əgər səhv davam edirsə, daha çox detallar üçün serverinizin PHP səhv loguna baxın
4. Əvvəllər tamamlanmış addımlar növbəti işlənmələrdə atlanacaq (installer idempotentdir)
