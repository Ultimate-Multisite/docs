---
title: Sayt Qurucu Kontakt Formları
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Site Builder Əlaqə Formları {#site-builder-contact-forms}

Superdav AI Agent v1.10.0, Site Builder agent-i vasitəsilə söhbət interfeysindən birbaşa əlaqə formları yaratma imkanı əlavə edir. Bu, sizə söhbətdən çıxmadan istənilən səhifəyə tam funksional əlaqə formları əlavə etməyə imkan verir.

## Ümumi Baxış {#overview}

Site Builder əlaqə formları imkanı (`create_contact_form`) quraşdırılmış form plugin-inizi avtomatik olaraq aşkarlayır və form yaratmaq üçün həmin plugin-in yerli imkanlarından istifadə edir. Dəstəklənən form plugin-ləri bunlardır:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Asistent saytınızda mövcud olan ən yaxşı form plugin-ini avtomatik seçir və həmin plugin-ə uyğunlaşdırılmış bir əlaqə formu yaradır.

## Əlaqə Formu Yaratmaq {#creating-a-contact-form}

Site Builder istifadə edərək əlaqə formu yaratmaq üçün:

1. WordPress admin-ində **Gratis AI Agent** söhbət panelini açın.
2. Söhbət başlığındakı agent ikonuna klikləyərək **Site Builder** agent-inə keçin.
3. Yaratmaq istədiyiniz əlaqə formunu təsvir edin. Məsələn:

   > "Ad, e-poçt, mesaj və telefon nömrəsi sahələri olan bir əlaqə formunu Contact səhifəsinə əlavə et."

   Və ya sadəcə:

   > "Contact səhifəsi üçün bir əlaqə formu yarat."

4. Site Builder əlaqə formunu yaradacaq və yerləşdirməyə hazır bir shortcode qaytaracaq.

## Yaradılan Shortcode-dan İstifadə Etmək {#using-the-generated-shortcode}

Site Builder əlaqə formunu yaratdıqdan sonra, o, bir shortcode qaytarır (məsələn, `[contact-form-7 id="123"]`). Siz aşağıdakıları edə bilərsiniz:

1. **Səhifə və ya yazıda yerləşdirmək** — Shortcode-u kopyalayıb blok redaktoru və ya klassik redaktor vasitəsilə istənilən səhifəyə və ya yazıya yapışdırın.
2. **Site Builder vasitəsilə əlavə etmək** — Site Builder-dən formunu avtomatik olaraq müəyyən bir səhifəyə əlavə etməsini xahiş edin:

   > "Əlaqə formunu Contact səhifəsinə əlavə et."

3. **Şablonlarda istifadə etmək** — Əgər PHP-dən rahatsınızsa, shortcode-u mövzu şablon faylına əlavə edə bilərsiniz.

## Əlaqə Formunu Təkmilləşdirmək {#customizing-the-contact-form}

Site Builder əlaqə formunu yaratdıqdan sonra, onu daha da təkmilləşdirə bilərsiniz:

### Söhbət İnterfeysindən {#via-the-chat-interface}

Site Builder-dən formu dəyişdirməsini xahiş edin:

> "Əlaqə formunu bir mövzu sahəsi əlavə etmək və mesaj sahəsini məcburi etmək üçün yenilə."

Site Builder formu yeniləyəcək və yenilənmiş shortcode-u qaytaracaq.

### Form Plugin-inin Admin İnterfeysindən {#via-the-form-plugins-admin-interface}

Formu birbaşa form plugin-inizin ayarlarında da təkmilləşdirə bilərsiniz:

1. WordPress admin-ində **Contact Form 7** (və ya quraşdırılmış form plugin-iniz) yerinə getmək.
2. Site Builder tərəfindən yaradılan formanı tapın.
3. Zərurət gördüyünüz kimi form sahələrini, validasiya qaydalarını və e-poçt bildirişlərini redaktə edin.

## Form Plugin-ləri və Uyğunluq {#form-plugins-and-compatibility}

Site Builder saytınızda hansı form plugin-inin quraşdırıldığını avtomatik aşkarlayır və əlaqə formunu yaratmaq üçün ondan istifadə edir. Bir neçə form plugin-i quraşdırılmışsa, Site Builder onları bu ardıcıllıqla prioritetləşdirir:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Əgər bu plugin-lərdən heç biri quraşdırılmayıbsa, Site Builder əlaqə formunu yaratmadan əvvəl birini quraşdırmaq tövsiyə edəcək.

## E-poçt Bildirişləri {#email-notifications}

Site Builder tərəfindən yaradılan əlaqə formları, standart olaraq sayt administratoruna e-poçt bildirişləri göndəriləcə şəkildə konfiqurasiya edilir. Siz qəbuledici e-poçt ünvanını və bildiriş mesajını özünüz dəyişə bilərsiniz:

1. Form plugin-inizin admin interfeysinə daxil olun.
2. Site Builder tərəfindən yaradılan formanı tapın.
3. E-poçt bildiriş ayarlarını redaktə edin.

Ətraflı təlimatlar üçün, form plugin-inizin sənədləşməsinə baxın:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Nümunə İstifadə Halları {#example-use-cases}

### Sadə Əlaqə Formu {#simple-contact-form}

> "Ad, e-poçt və mesaj sahələri olan sadə bir əlaqə formu yarat."

### Bir Neçə Addımlı Form {#multi-step-form}

> "Əlaqə məlumatları üçün birinci addım və mesaj və üstün əlaqə metodu üçün ikinci addım olan bir əlaqə formu yarat."

### Şərti Məntiqli Form {#form-with-conditional-logic}

> "Dropdown-da istifadəçinin seçiminə əsasən fərqli sahələr göstərən bir əlaqə formu yarat."

### Fayl Yükləməli Form {#form-with-file-upload}

> "İstifadəçilərin fayl və ya əlavə yükləməsinə imkan verən bir əlaqə formu yarat."

:::note
Əlaqə formunun yaradılması Superdav AI Agent v1.10.0 və daha yeni versiyalarda mövcuddur. Bu imkanlardan istifadə etmək üçün Site Builder agent-i aktiv olmalıdır.
:::
