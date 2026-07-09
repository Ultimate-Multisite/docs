---
title: Menyu Yarat
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Menyu Yaratmaq {#create-menu}

**Menyu Yaratmaq** funksionallığı, səhifə başlıqlarından ayrı, fərqli naviqasiya etiketləri dəstəkləyən WordPress naviqasiya menyularının yaradılmasına imkan verir.

## Ümumi Baxış {#overview}

Bu funksionallıq standart menyu yaratma işliliyinə `navigation_label` parametrinə malik olmaq imkanını əlavə edir. Bu, menyular yaratmağa imkan verir ki, naviqasiyada göstərilən etiket səhifə başlıqlarından fərqlənsin. Bu da sayt strukturunda və istifadəçi təcrübəsində daha çox çeviklik təmin edir.

## Parametrlər {#parameters}

| Parametr | Tip | Tələb Olunur | Təsvir |
|-----------|------|----------|-------------|
| `name` | string | Bəli | Menyunun adı, məs.: `Əsas Naviqasiya` |
| `location` | string | Xeyr | Menyunu təyin etmək üçün mövzu (Theme) yeri, məs.: `primary` |
| `navigation_label` | string | Xeyr | Naviqasiyada göstəriləcək etiket (səhifə başlıqlarından fərqli) |

## Dönüş Dəyəri {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Naviqasiya Etiketi vs. Səhifə Başlığı {#navigation-label-vs-page-title}

`navigation_label` parametri sizə daxili menyu adını istifadəçilərə göstərilən etiketdən ayırmağa imkan verir:

- **`name`** — WordPress tərəfindən istifadə edilən daxili menyu identifikatoru (məs.: "Primary Navigation")
- **`navigation_label`** — Sayt ziyarətçilərinə naviqasiyada göstərilən etiket (məs.: "Main Menu")

Bu, aşağıdakı hallarda faydalıdır:
- Daxili adlandırma konvensiyanız istifadəçi görünən etiketlərdən fərqlənsə
- Naviqasiyada admin panelindəki başlıqlardan daha qısa etiketlər istəyirsinizsə
- Müxtəlif etiket uzunluqlarına malik bir neçə dili dəstəkləməyiniz lazım gəlsə
- Müəyyən regionlar və ya istifadəçi qrupları üçün menyular qurursunuzsa

## İstifadə Nümunələri {#usage-examples}

### Nümunə 1: Naviqasiya Etiketli Sadə Menyu {#example-1-simple-menu-with-navigation-label}

**Komanda:**
```
"Main Navigation" adlı əsas naviqasiya menyusu yaradın və naviqasiya etiketi olaraq "Menu" təyin edin.
```

**Nəticə:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Nümunə 2: Müəyyən Mövzu Yeri üçün Menyu {#example-2-menu-for-specific-theme-location}

**Komanda:**
```
"Footer Links" adlı bir footer menyusu yaradın, naviqasiya etiketi olaraq "Quick Links" təyin edin və onu footer yerinə yerləşdirin.
```

**Nəticə:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Theme Builder ilə İntegrasiya {#integration-with-theme-builder}

Theme Builder istifadə edərkən, Create Menu funksionallığı:

1. Mövcud mövzu menyu yerlərini avtomatik aşkarlayır
2. Dizayniniz üçün müvafiq naviqasiya etiketləri ilə menyular yaradır
3. Menyuları düzgün mövzu yerlərinə təyin edir
4. Yaratıldıqdan sonra menyu elementlərinin əlavə edilməsini dəstəkləyir

## Əlaqəli Funksionallıqlar {#related-abilities}

- **`add_menu_item`** — Mövcud menyuya elementlər əlavə etmək
- **`update_menu`** — Menyunu yeniləmək və ya onu mövzu yerinə yenidən təyin etmək
- **`delete_menu`** — Saytınızdan menyunu silmək

## Ən Yaxşı Praktikalara Nəzarət {#best-practices}

- **Aydın naviqasiya etiketləri istifadə edin** — etiketləri istifadəçilər üçün qısa və təsvir edici saxlayın
- **Mövzu yerlərinə uyğunlaşdırın** — düzgün göstərilməsi üçün menyuları doğru mövzu yerinə təyin edin
- **Menyu strukturunu planlaşdırın** — elementlər yaratmadan əvvəl menyu iyerarxiyasını müəyyənləşdirin
- **Responsivliyi yoxlayın** — menyuların mobil cihazlarda düzgün göstərilməsini təsdiqləyin
- **Etiketləri yerədilin (Localize)** — müxtəlif dil versiyaları üçün fərqli naviqasiya etiketləri istifadə edin

## Məhdudiyyətlər {#limitations}

- Naviqasiya etiketləri yalnız göstərilmə məqsədlidir; daxili `name` hələ də WordPress identifikatoru üçün istifadə olunur
- Mövzu dəstəyi dəyişkəndir; bütün mövzular bütün menyu yerlərini dəstəkləmir
- Menyu elementləri menyu yaradıldıqdan sonra ayrıca əlavə edilməlidir
- Naviqasiya etiketini dəyişmək menyunu yeniləməyi tələb edir

## Əlaqəli Funksionallıqlar {#related-abilities-1}

- [Generate Logo SVG](./generate-logo-svg.md) — sayt başlığı üçün loqolar yaratmaq
- [Validate Palette Contrast](./validate-palette-contrast.md) — əlçatan rəng sxemlərini təmin etmək
