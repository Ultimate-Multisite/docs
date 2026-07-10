---
title: Qonaqxanalar Menyuları
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Qonaqi Menüləri {#hospitality-menus}

**Qonaqi Menüləri** funksionallığı Theme Builder-ə saytınızda strukturlaşdırılmış yemək və içki menyu səhifələri yaratmağa və yerləşdirməyə imkan verir.

## Ümumi Baxış {#overview}

Theme Builder indi restoranlar, kafeler, barlar və katering xidmətləri kimi qonaqi bizneslər üçün peşəkar, strukturlaşdırılmış menyu səhifələri yarada bilər. Bu menyular saytınızın dizaynına tam inteqrasiya olunur və asanlıqla yenilənə və idarə edilə bilər.

## Dəstəklənən Qonaqi Tiplər {#supported-hospitality-types}

- **Restoranlar** — tam xidmət yemək menyuları
- **Kafeler** — qəhvə və yüngül yemək menyuları
- **Barlar və Lounge-lar** — içki və qəlyanaltı menyuları
- **Şirniyyatlar** — şirniyyat və çörək menyuları
- **Katering Xidmətləri** — tədbir menyu variantları
- **Food Truck-lar** — mobil yemək xidməti menyuları
- **Brauerilər və Vineryalar** — təsvirlərlə içki menyuları

## Menyu Strukturu {#menu-structure}

### Menyu Kateqoriyaları {#menu-categories}

Menyular kateqoriyalara bölünür:

- **Qəlyanaltılar** — başlangıçlar və kiçik qəlyanaltılar
- **Əsas yeməklər** — əsas yeməklər
- **Yan yeməklər** — müşayiətlər və tərəvəzlər
- **Şirniyyatlar** — şirin yeməklər
- **İçkilər** — içkilər (alkoqollu və alkoqollu olmayan)
- **Xüsusi Təkliflər** — gündəlik və ya mövsimlə bağlı xüsusi təkliflər

### Menyu Elementi Formatı {#menu-item-format}

Hər bir menyu elementi aşağıdakıları əhatə edir:

```json
{
  "name": "Grilled Salmon",
  "description": "Fresh Atlantic salmon with lemon butter sauce",
  "price": "$24.95",
  "dietary_info": ["Gluten-Free", "High-Protein"],
  "allergens": ["Fish"],
  "availability": "Daily"
}
```

#### Element Sahələri {#item-fields}

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Yemək və ya içki adı |
| `description` | string | Elementin ətraflı təsviri |
| `price` | string | Qiymət (valyuta ilə formatlanmış) |
| `dietary_info` | array | Dietetik atributlar (Vegan, Gluten-Free və s.) |
| `allergens` | array | Ümumi allergenlər (Qoz, Qızılbalıq və s.) |
| `availability` | string | Nə vaxt mövcuddur (Hər gün, Mövsimlə və s.) |

## Qonaqi Menyular Yaratmaq {#creating-hospitality-menus}

### Addım 1: Menyu Məlumatını Verin {#step-1-provide-menu-information}

Theme Builder-ə menyunuz haqqında məlumat verin:

```
Create a restaurant menu for my Italian restaurant with appetizers,
pasta dishes, main courses, and desserts. Include prices and descriptions.
```

### Addım 2: Theme Builder Menyunu Yaradır {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Strukturlaşdırılmış menyu səhifəsi yaradır
2. Saytınızın mövzusuna uyğun dizayn edir
3. Elementləri kateqoriyalara bölür
4. Qiymətləri və təsvirləri formatlayır
5. Dietetik və allergen məlumatlarını əlavə edir

### Addım 3: Nəzərdən Keçirin və Təkmilləşdirin {#step-3-review-and-customize}

Bunları edə bilərsiniz:

1. Menyu elementlərini və qiymətlərini redaktə etmək
2. Kateqoriyalar əlavə etmək və ya silmək
3. Kateqoriyalar daxilində elementləri yenidən sıralamaq
4. Təsvirləri və dietetik məlumatları yeniləmək
5. Stil və yerləşdirməni tənzimləmək

## Menyu Göstərilmə Seçimləri {#menu-display-options}

### Tam Menyu Səhifəsi {#full-menu-page}

Bütün menyunuzu göstərən ayrılmış bir səhifə:

- Kateqoriyalara görə təşkil edilmiş
- Axtarış və filtrləməyə imkanlı
- Print üçün uyğun yerləşdirmə
- Mobil cihazlara uyğun dizayn

### Menyu Widget-i {#menu-widget}

Menyu bölmələrini digər səhifələrə yerləşdirmək:

- Ana səhifədə xüsusi elementlər
- Yan paneldə gündəlik xüsusi təkliflər
- Bar səhifəsində içki menyusu
- Footer-də şirniyyat vitrini

### Menyu PDF {#menu-pdf}

Yüklənməyə hazır PDF menyusu yaratmaq:

- Peşəkar formatlama
- Print üçün hazır keyfiyyət
- Şəkillər və təsvirlər daxildir
- Paylaşmaq və e-poçtla göndərmək asandır

## Dietetik və Allergen Məlumatları {#dietary-and-allergen-information}

### Dietetik Atributlar {#dietary-attributes}

Elementləri dietetik məlumatlarla işarələyin:

- **Vegan** — heç bir heyvan məhsulu yoxdur
- **Vegetarian** — ət yoxdur
- **Gluten-Free** — seliak xəstəliyi üçün təhlükəsizdir
- **Dairy-Free** — süd məhsulları yoxdur
- **Nut-Free** — ağac qozları və ya yer qozları yoxdur
- **Low-Carb** — karbohidrat miqdarı azdır
- **High-Protein** — protein baxımından zəngindir

### Allergen Xəbərdarlığı {#allergen-warnings}

Ümumi allergenləri daxil edin:

- **Nuts** — ağac qozları və yer qozları
- **Shellfish** — krustasealar və mollusklar
- **Fish** — bütün balıq növləri
- **Dairy** — süd və süd məhsulları
- **Eggs** — toyuq yumurtaları
- **Soy** — soya məhsulları
- **Gluten** — buğda və gluten ehtiva edən taxıllar
- **Sesame** — sésəm tohumları və yağ

## Menyu İdarəetməsi {#menu-management}

### Qiymətləri Yeniləmək {#updating-prices}

Menyu qiymətlərini asanlıqla yeniləyin:

1. Menyu səhifəsinə keçin
2. "Edit Menu" düymasına basın
3. Elementlərin qiymətlərini yeniləyin
4. Dəyişiklikləri yadda saxlayın
5. Dəyişikliklər dərhal saytınızda görünəcək

### Mövsimlə Elementlər Əlavə Etmək {#adding-seasonal-items}

Mövsimlə menyu variantları yaradın:

1. Yeni menyu versiyası yaradın
2. Mövsimlə elementlər əlavə edin
3. Elementləri "Seasonal" (Mövsimlə) olaraq işarələyin
4. Mövcudluq tarixlərini təyin edin
5. Mövsim ərzində avtomatik göstəriləcək

### Xüsusi Təklifləri İdarə Etmək {#managing-specials}

Gündəlik və ya həftəlik xüsusi təkliflər göstərin:

1. Bir "Specials" (Xüsusi Təkliflər) kateqoriyası yaradın
2. Mövcudluq tarixləri olan elementlər əlavə edin
3. Ana səhifədə xüsusi təklifləri vurğulayın
4. Gündəlik və ya həftəlik yeniləyin
5. Köhnə xüsusi təklifləri arxivləşdirin

## Theme Builder ilə İntegrasiya {#integration-with-theme-builder}

Qonaqi saytlar üçün Theme Builder istifadə edərkən:

1. **Avtomatik menyu aşkarlanması** — yemək/içki biznesi olub-olmadığınızı müəyyən edir
2. **Menyu səhifəsi yaratmaq** — peşəkar menyu səhifələri yaradır
3. **Dizayn uyğunluğu** — menyular saytınızın mövzusuna uyğunlaşır
4. **Mobil optimallaşdırma** — menyular telefonlarda gözəl görünür
5. **SEO optimallaşdırması** — menyular axtarış motorları üçün dostdur

## Ən Yaxşı Praktikalər {#best-practices}

### Menyu Dizaynı {#menu-design}

- **Aydın təşkilatlanma** — məntiqi kateqoriya strukturu
- **Oxunaqlı təsvirlər** — iştah açıcı və məlumatlı
- **Müəyyən qiymətləndirmə** — aydın valyuta və formatlama
- **Peşəkar fotoşəkillər** — yüksək keyfiyyətli yemək şəkilləri
- **Boş sahə** — səhifəni çox doldurmayın

### Məzmun {#content}

- **Dəqiq təsvirlər** — elementləri dəqiq təsvir edin
- **Xüsusi təklifləri vurğulayın** — xüsusi təklifləri ön plana çıxarın
- **Allergenləri daxil edin** — həmişə allergenləri siyahıya alın
- **Mütəmadi yeniləyin** — qiymətləri və elementləri güncel saxlayın
- **İştah açıcı dildən istifadə edin** — elementləri dadlı səsləndirin

### Erişimlilik {#accessibility}

- **Oxunaqlı hərflər** — aydın, oxunaqlı şriftlər istifadə edin
- **Kifayət qədər kontrast** — mətnin oxunaqlığından əmin olun
- **Dietetik etiketlər** — dietetik variantları aydın işarələyin
- **Allergen xəbərdarlığı** — allergenləri görünən şəkildə göstərin
- **Mobilə uyğun** — bütün cihazlarda test edin

## Nümunələr {#examples}

### Restoran Menyusu Strukturu {#restaurant-menu-structure}

```
Appetizers
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Caprese Salad

Pasta Dishes
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Main Courses
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Desserts
├── Tiramisu
├── Panna Cotta
└── Gelato Selection
```

### Kafe Menyusu Strukturu {#cafe-menu-structure}

```
Coffee
├── Espresso
├── Cappuccino
└── Latte

Pastries
├── Croissants
├── Muffins
└── Scones

Sandwiches
├── Caprese Panini
├── Smoked Turkey Club
└── Vegetarian Wrap
```

## Əlaqəli Xüsusiyyətlər {#related-features}

- [Create Menu](../abilities/create-menu.md) — naviqasiya menyuları yaratmaq
- [Design Direction](./design-direction.md) — saytınızın dizaynını fərdiləşdirmək
- [Discovery Interview](./discovery-interview.md) — sayt strukturunuzu planlaşdırmaq
