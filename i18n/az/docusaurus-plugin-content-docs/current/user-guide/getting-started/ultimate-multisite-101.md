---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite, istifadəçilərə WaaS (Websites as a Service) və ya Saytlar Xidməti təklif etməyə imkan verən bir WordPress Multisite plugin-idir. Dərindən öyrənməzdən əvvəl və Ultimate Multisite-in biznesinizə və müştərilərinizə necə kömək edə biləcəyini öyrənməzdən əvvəl, əsas biliklər əldə etməliyik.

## WordPress Multisite

Bizlərdən əksəriyyəti standart WordPress quraşdırması ilə tanışdır. Ya bunu hosting provayudernizin control panel-i vasitəsilə yaradırsınız, ya da cəsarətli olanlar yeni bir web server və database qurur, core faylları yükləyir və quraşdırma prosesinə başlayırlar.

Bu, dünya üzrə milyonlarla WordPress saytı üçün işləyir, lakin bir agentlik və ya hosting provayudernisi perspektivindən, bir az həcmlər haqqında danışaq.

Bir WordPress saytı və ya hətta yüz saytı avtomatik control panel vasitəsilə yaratmaq asan olsa da, bu saytları idarə etməyə gəldikdə problemlər ortaya çıxır. İdarə edilmədiyi halda, zərərli proqramlar üçün əsas hədəf olursunuz. İdarə etmək səy və resurs tələb edir və WordPress saytlarının idarə edilməsini və administrasiyasını asanlaşdırmaq üçün xarici alətlər və plugin-lər mövcuddur, lakin müştərilərin administrativ girişə sahib olması deməkdir ki, bu səylər asanlıqla məğlub edilə bilər.

WordPress öz core-unda sadəcə ‘Multisite’ adında bir funksiya təqdim edir və bu funksiya 2010-cu ildə WordPress 3.0-ın çıxarılması ilə öz köklərinə qayıdır. O vaqtdan bəri, yeni funksiyalar tətbiq etmək və təhlükəsizliyi gücləndirmək məqsədilə bir sıra yeniləmələr alıb.

Əsas desək, bir WordPress multisite belə düşünülə bilər: Bir Universitet tək bir WordPress quraşdırması saxlayır, lakin hər fakültə öz WordPress saytını saxlayır.

Bu ifadəni daha yaxşı anlamaq üçün, yalnız Ultimate Multisite-in sənədlərində deyil, həm də WordPress icmasında mövcud olan bəzi əsas terminologiyalara nəzər salaq.

### The Network

WordPress baxımından, bir multisite network, bir neçə subsite-in tək bir dashboard-dan idarə edilə biləcəyi yerdir. Multisite network yaratmaq hosting provayudernisləri arasında fərqlənsə də, nəticə adətən WordPress-ə bu spesifik rejimdə işlədiyini bildirmək üçün `wp-config.php` faylında bir neçə əlavə direktivdir.

Multisite network və müstəqil WordPress quraşdırması arasında qısa müzakirə edəcəyimiz bir neçə fərq var.

#### Subdomain vs. Subdirectory

Edəcəyiniz ən vacib qərarlardan biri, multisite quraşdırmasının **_subdirectories_** (alt-dizinlər) ilə yoxsa **_subdomains_** (alt-domenlər) ilə işləyəcəyi olub-olmamasıdır. Ultimate Multisite hər iki seçimlə eyni dərəcədə yaxşı işləyir, lakin bu iki konfiqurasiya arasında arxitektural fərqlər var.

**_Subdirectory_** konfiqurasiyasında, network saytları əsas domen adına əsaslanan bir yol miras alır. Məsələn, ‘site1’ adlı bir network saytı tam URL-i `https://domain.com/site1` olacaq. **_Subdomain_** konfiqurasiyasında isə, network saytı əsas domen adından tüstənmə (subdomain) alacaq. Beləliklə, ‘site1’ adlı bir saytın tam URL-i `https://site1.domain.com/` olacaq.

Hər iki seçim də tamamilə düzgündür, lakin **_subdomains_** istifadəsi bir sıra üstünlüklər təklif edir, lakin eyni zamanda arxitekturasında daha çox düşünmə və planlaşdırma tələb edir.

DNS baxımından, **_subdirectories_** istifadəsi nisbətən sadə bir çətinlik yaradır. Çünki network saytları sadəcə ana yolun uşaqlarıdır, ana domen adı üçün yalnız bir domen adı qeydi olmalıdır. **_Subdomains_** üçün isə vəziyyət bir az daha mürəkkəbdir və hər bir network saytı üçün ayrı bir CNAME qeydi və ya DNS qeydlərində wildcard (*) qeydi tələb edir.

Düşünülməli başqa bir sahə SSL və SSL sertifikatlarının verilməsi və istifadə edilməsidir. **_Subdirectory_** konfiqurasiyasında, tək bir domen sertifikatı istifadə edilə bilər, çünki network saytları sadəcə ana domen adının yollarıdır. Beləliklə, `domain.com` üçün verilən bir sertifikat `https://domain.com/site1`, `https://domain.com/site2` və s. üçün kifayət edəcək.

**_Subdomain_** konfiqurasiyasında isə, wildcard SSL sertifikatından istifadə etmək ən çox rast gəlinən variantlardan biridir. Bu tip SSL sertifikatı bir domen və onun **_subdomains_** üçün şifrələmə təmin edir. Buna görə də, wildcard SSL sertifikatı `https://site1.domain.com`, `https://site2.domain.com` və `https://domain.com` üçün şifrələmə təmin edəcək.

Başqa variantlar mövcuddur, lakin bunlar tez-tez məhdud sahə və tətbiqlərlə məhdudlaşır.

---

### Nəticə

Bu mətnin əsas məqsədi, texniki və mürəkkəb bir mövzunu (web hosting və domen strukturları) izah etməkdir. Mətnin tonu **peşəkar, təhsil verici və məlumatverici** olmalıdır.

**Təkmilləşdirmə və Düzəlişlər:**

1.  **Daha Təbii Keçid:** Mətnin axıcılığı artırılmalıdır.
2.  **Terminoloji Dəqiqlik:** Texniki terminlər (DNS, subdomain, root domain) daha aydın izah edilməlidir.
3.  **Struktur:** Hər bir hissənin başlığı olmalıdır ki, oxucu nə haqqında oxuduğunu bilsin.

**Təkmilləşdirilmiş Versiya:** (Aşağıda təqdim olunur)

***

## Təkmilləşdirilmiş Mətn

### Başlıq: Domen Strukturları və Subdomainlərin İşləmə Prinsipi

Bu mətn, internetdə domen adlarının necə qurulduğunu, əsas domen (root domain) və alt domenlərin (subdomain) fərqlərini və onların texniki işləmə prinsiplərini izah edir.

---

### 1. Domen Adları Nədir? (Əsas Konsept)

Domen adı, internetdəki bir veb sayt üçün verilmiş unikal bir ad ünvanıdır. İnsanlar üçün yadda saxlamaq asan bir ad (məsələn, `google.com`) və kompüterlər üçün bir IP ünvanı (məsələn, `142.250.184.164`) arasında köprü rolunu oynayır.

**Əsas Domen (Root Domain):** Bu, domen adının ən vacib hissəsidir (məsələn, `.com`, `.org`, `.az`). Bu uzantı, domen sahibinin hansı növ sayt yaratdığını göstərir.

### 2. Alt Domenlər (Subdomains) və Onların Rolu

Alt domenlər, əsas domenə bağlı olan, lakin ona ayrı bir məqsəd xidmət edən kiçik veb saytlardır. Alt domenlər, əsas domenə bir "alt bölmə" kimi əlavə olunur.

**Struktur:** `altdomen.esasdomen.rootdomain`

**Nümunə:**
*   **Əsas Domen:** `example.com`
*   **Alt Domen:** `blog.example.com` (Bu, şirkətin blog hissəsidir.)
*   **Başqa bir alt domen:** `shop.example.com` (Bu, şirkətin onlayn mağazasıdır.)

**Nə üçün istifadə olunur?**
Alt domenlərdən istifadə etmək, böyük və mürəkkəb saytları məntiqi olaraq bölmək üçün idealdır. Bu, istifadəçi təcrübəsini (UX) yaxşılaşdırır və müxtəlif funksionallıqları bir-birindən ayırır.

### 3. Texniki İşləmə Prinsipi: DNS Rolu

Alt domenlərin necə işlədiyini anlamağın açarı **DNS (Domain Name System)**-dir. DNS, internetin "telefon kitabçığı" kimi işləyir.

1.  **İstifadəçi Girişi:** İstifadəçi brauzerə `blog.example.com` yazır.
2.  **DNS Sorğusu:** Brauzer, bu adı IP ünvanına çevirmək üçün DNS serverlərinə sorğu göndərir.
3.  **DNS Cavabı:** DNS serverləri, `blog.example.com` üçün müəyyən edilmiş IP ünvanını tapır və bu məlumatı brauzerə qaytarır.
4.  **Sayt Yüklənməsi:** Brauzer, bu IP ünvanına qoşulur və sayt yüklənir.

**Alt domenlərin DNS-də necə qeyd olunduğu:** Alt domenlər, DNS rekordları vasitəsilə əsas domenə bağlı olaraq qeyd edilir. Bu, onların məntiqi bağlılığını təmin edir.

### 4. Nəticə: Nə vaxt hansını istifadə etməli?

| Struktur | Nümunə | Məqsəd | Nə vaxt istifadə etməli? |
| :--- | :--- | :--- | :--- |
| **Əsas Domen** | `company.com` | Şirkətin əsas, birincil veb saytı. | Şirkətin əsas vitrini və məlumat mərkəzi. |
| **Alt Domen** | `support.company.com` | Saytın müəyyən bir funksionallığı (dəstək, blog, mağaza). | Funksionallığı məntiqi olaraq ayırmaq istədiyiniz zaman. |
| **Subdomain** | `user123.company.com` | İstifadəçi profili və ya test mühiti. | İstifadəçi bazası və ya inkişaf (dev) mərhələləri üçün. |

**Xülasə:** Alt domenlər, böyük və müxtəlif funksionallıqları bir araya gətirən, lakin texniki olaraq ayrılmış bölmələr yaratmaq üçün ən effektiv yoldur.
