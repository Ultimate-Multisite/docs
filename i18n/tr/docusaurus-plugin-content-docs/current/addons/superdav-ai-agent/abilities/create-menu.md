---
title: Menü Oluştur
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Menü Oluşturma

**Menü Oluşturma** özelliği, sayfa başlıklarından ayrı, farklı gezinme etiketleri desteğiyle WordPress navigasyon menüleri oluşturmanızı sağlar.

## Genel Bakış {#overview}

Bu özellik, standart menü oluşturma işlevselliğini, bir `navigation_label` parametresi belirleme yeteneğiyle genişletir. Bu sayede, navigasyonda gösterilen etiket ile sayfa başlığı farklı olabilen menüler oluşturabilir, bu da site yapısı ve kullanıcı deneyimi açısından daha fazla esneklik sağlar.

## Parametreler {#parameters}

| Parametre | Tip | Zorunlu | Açıklama |
|-----------|------|----------|-------------|
| `name` | string | Evet | Menü adı, örn: `Ana Navigasyon` |
| `location` | string | Hayır | Menüyü atayacağınız tema konumu, örn: `primary` |
| `navigation_label` | string | Hayır | Navigasyonda gösterilecek etiket (sayfa başlığından farklı) |

## Dönüş Değeri {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Gezinme Etiketi vs. Sayfa Başlığı {#navigation-label-vs-page-title}

`navigation_label` parametresi, dahili menü adını kullanıcıya gösterilen etiketten ayırmanıza olanak tanır:

- **`name`** — WordPress tarafından kullanılan dahili menü tanımlayıcısı (örneğin, "Primary Navigation")
- **`navigation_label`** — Site ziyaretçilerine navigasyonda gösterilen etiket (örneğin, "Main Menu")

Bu, aşağıdaki durumlarda kullanışlıdır:
- Dahili isimlendirme kuralınız, kullanıcıya gösterilen etiketlerden farklıysa
- Yönetici panelinde olduğundan daha kısa etiketler istiyorsanız
- Farklı uzunluklarda etiketler gerektiren çoklu dil desteği sağlamanız gerekiyorsa
- Belirli bölgeler veya kullanıcı grupları için menüler oluşturuyorsanız

## Kullanım Örnekleri {#usage-examples}

### Örnek 1: Gezinme Etiketli Basit Menü {#example-1-simple-menu-with-navigation-label}

**Komut:**
```
"Menu" gezinme etiketiyle "Main Navigation" adında bir ana navigasyon menüsü oluştur.
```

**Sonuç:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Örnek 2: Belirli Tema Konumu İçin Menü {#example-2-menu-for-specific-theme-location}

**Komut:**
```
"Quick Links" gezinme etiketiyle "Footer Links" adında bir altbilgi menüsü oluştur ve bunu altbilgi konumuna ata.
```

**Sonuç:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Tema Oluşturucu ile Entegrasyon {#integration-with-theme-builder}

Theme Builder kullanılırken, Menü Oluşturma özelliği:

1. Mevcut tema menü konumlarını otomatik olarak algılar
2. Tasarımınız için uygun gezinme etiketleriyle menüler oluşturur
3. Menüleri doğru tema konumlarına atar
4. Oluşturulduktan sonra menü öğeleri eklenmesini destekler

## İlgili Özellikler {#related-abilities}

- **`add_menu_item`** — Mevcut bir menüye öğe ekler
- **`update_menu`** — Bir menünün adını değiştirir veya onu bir tema konumuna yeniden atar
- **`delete_menu`** — Sitenizden bir menüyü kaldırır

## En İyi Uygulamalar {#best-practices}

- **Açık gezinme etiketleri kullanın** — Etiketleri kullanıcılar için kısa ve açıklayıcı tutun
- **Tema konumlarına dikkat edin** — Doğru görüntüleme için menüleri doğru tema konumuna atayın
- **Menü yapısını planlayın** — Öğeler oluşturmadan önce menü hiyerarşinize karar verin
- **Duyarlılığı test edin** — Menülerin mobil cihazlarda doğru göründüğünü doğrulayın
- **Etiketleri yerelleştirin** — Farklı dil sürümleri için farklı gezinme etiketleri kullanın

## Sınırlamalar {#limitations}

- Gezinme etiketleri yalnızca gösterim amaçlıdır; dahili `name` hala WordPress tanımlaması için kullanılır
- Tema desteği değişiklik gösterir; tüm temalar tüm menü konumlarını desteklemez
- Menü öğeleri, menü oluşturulduktan sonra ayrı olarak eklenmelidir
- Bir gezinme etiketini değiştirmek, menünün güncellenmesini gerektirir

## İlgili Özellikler {#related-abilities-1}

- [Generate Logo SVG](./generate-logo-svg.md) — site başlığınız için logo oluşturun
- [Validate Palette Contrast](./validate-palette-contrast.md) — erişilebilir renk şemalarını sağlayın
