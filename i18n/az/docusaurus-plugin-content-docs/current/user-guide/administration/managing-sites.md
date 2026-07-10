---
title: Saytları İdarə Etmək
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Saytları İdarə Etmək {#managing-sites}

Saytlar (və ya alt-saytlar) WaaS biznesinizin əsasını təşkil edir. Ultimate Multisite-da 3 növ sayt mövcuddur:

- **Müştəri tərəfindən sahib olunan** — Müəyyən müştərilərə məxsus saytlar
- **Sayt Şablonları** — Müştərilərin başlama nöqtəsi kimi seçə biləcəyi əvvəlcədən hazırlanmış saytlar
- **Əsas Sayt** — Sizin əsas şəbəkə saytınız

## Saytları Görüntüləmək {#viewing-sites}

Şəbəkənizdəki bütün alt-saytları görmək üçün **Ultimate Multisite → Sites** yolunu izləyin. Hər sayt növü ilə işarələnir və siz Bütün Saytlar, Müştəri Tərəfindən Sahib Olunan, Şablonlar və ya Gözləyən (Pending) filtrləri ilə axtarış edə bilərsiniz.

![Sites list page](/img/admin/sites-list.png)

## Yeni Sayt Əlavə Etmək {#adding-a-new-site}

Yeni bir sayt yaratmaq üçün **Add Site** düyməsinə klikləyin. Aşağıdakıları təmin etməlisiniz:

- **Site Title** — Yeni saytın adı
- **Site URL** — Sayt üçün domen/yol
- **Site Type** — Müştəri saytı, şablon yoxsa adi sayt olub-olmaması

**Copy Site** seçimi mövcud bir sayt şablonuna əsaslanaraq yeni bir sayt yaratmağa imkan verir. Bu funksiya aktivləşdirildikdə, başlanğıc nöqtəsi kimi hansı şablonu istifadə edəcəyinizi seçə bilərsiniz. Media fayllarını daxil etmək üçün **Copy Media on Duplication**-ın aktiv olduğundan əmin olun.

## Mövcud Saytı İdarə Etmək {#managing-an-existing-site}

Hər hansı bir saytda **Manage** düyməsinə klikləyərək **Edit Site** səhifəsinə keçin. Burada aşağıdakıları tapacaqsınız:

### Əsas Məlumatlar {#basic-information}

Sayt adı, növü, sayt ID-si və təsviri. Həmçinin xəritələnmiş domen, bağlı olan üzvlük və sayta sahib olan müştəri hesabı görünəcək.

### Sayt Seçimləri (Site Options) {#site-options}

Saytın imkanlarını və limitlərini konfiqurasiya edin:

- **Visit limits** — Sayt ziyarətinin maksimum sayı
- **User account limits** — İstifadəçi rolu üzrə limitlər
- **Disk space** — Sayt üçün saxlama kvotası
- **Custom domain** — Bu sayt üçün domen xəritələnməsini aktivləşdirmək
- **Plugin and theme visibility** — Hansı plugin və ya mövzuların görünən, gizlənən və ya əvvəlcədən aktivləşdirilmiş olacağını idarə etmək

Default olaraq, saytlar üzvlük səviyyəsində təyin edilmiş limitlərə uyğun gəlir. Sayt səviyyəsində limitlər təyin etmək, üzvlük parametrlərini ləğv edir (override edir).

### Əlaqələr (Associations) {#associations}

Sayt seçimlərinin altında aşağıdakılar haqqında məlumat tapacaqsınız:

- Saytla əlaqəli **Mapped domains**
- Saytın bağlı olduğu **Membership**
- Sayta bağlı **Customer account**

### Sağ Yan Panel (Right Sidebar) {#right-sidebar}

Sağ tərəfdə aşağıdakıları edə bilərsiniz:

- **Site**-ı aktivləşdirmək/deaktivləşdirmək üçün bir düymə ilə
- **Site type**-ını dəyişmək və ya sahibliyini yenidən təyin etmək
- **Site image/thumbnail** təyin etmək (sayt şablonları üçün frontend-də göstərilir)
- Saytı daimi olaraq **Delete** etmək

:::warning
Sayt silmək geri qaytarıla bilməz. Sayt və bütün məzmunu daimi olaraq silinəcək.
:::
