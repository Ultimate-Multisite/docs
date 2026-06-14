---
title: Tema Builder Kämilliklikleri
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Tema İnşa Etici Qabiliyyətləri: Scaffold və Aktivləşdirmə Blok Temaları

Superdav AI Agent v1.12.0 iki güclü qabiliyyət təqdim edir ki, siz chat interfeysindən xüsusi blok temaları yarada və yerləşdirə biləsiniz.

## Ümumi Baxış

**scaffold-block-theme** və **activate-theme** qabiliyyətləri agentlərin aşağıdakıları etməsinə imkan verir:
- Sizin tələbləriniz əsasında tam, istehsal hazır blok temaları yaratmaq
- Manual müdaxilə olmadan temaları saytınızda avtomatik aktivləşdirmək
- Rehberlik edilmiş dizayn qərarları ilə uyğun vizual identitetlər yaratmaq

## Blok Teması Scaffold Etmək (Scaffold Block Theme)

**scaffold-block-theme** qabiliyyəti tam tema strukturu daxil olmaqla yeni bir WordPress blok teması yaradır, o cümlədən:

- Dizayn tokenləri ilə `theme.json` konfiqurasiyası
- Ümumi layoutlar üçün Blok şablon faylları
- Xüsusi blok stilləri və variantları
- Tema metadata və dəstək elanları

### Necə Çağırılır (How to Invoke)

Superdav AI Agent ilə chatdə tema yaratma istəyə bilərsiniz:

```
"Mavi və ağ rəng sxemli, sans-serif tipografiyalı və peşəkar layoutlu 'Modern Agency' adlı bir blok teması yarat"
```

Agent aşağıdakıları edəcək:
1. Sizin dizayn üstünlüklərini söhbət vasitəsilə toplamaq
2. Tam tema strukturu yaratmaq
3. Bütün lazım olan tema fayllarını hazırlamaq
4. Temanı aktivləşdirməyə hazır etmək

### Gözlənilən Nəticə (Expected Output)

Qabiliyyət uğurla icra edildikdə, siz aşağıdakıları görəcəksiniz:

- Temanın scaffold edildi olduğuna dair təsdiq
- Tema adı və yeri
- Tətbiq edilmiş dizayn tokenlərinin (rənglər, tipografiya, aralıqlar) xülasəsi
- Aktivləşdirməyə hazır status

Nümunə çıxış:
```
✓ "Modern Agency" teması uğurla scaffold edildi
  Məkan: /wp-content/themes/modern-agency/
  Rənglər: Əsas #0066CC, İkincil #FFFFFF
  Tipografiya: Inter (sans-serif)
  Status: Aktivləşdirməyə hazır
```

## Temanı Aktivləşdirmək (Activate Theme)

**activate-theme** yetene siteni täze skaffold edilmiş ýa-da bar bolsa bolan blok teme bilen üýtgedip bilýärsiňiz.

### Näme etmek üçin

Teme skaffold edip geçenden soň, ony hemen şu wagt aktiwalaşdyryp bilersiňiz:

```
"Modern Agency temesini aktiwalaşdyr"
```

Ýa-da bar bolsa bolan her bir teme aktiwalaşdyryp bilersiňiz:

```
"Twentytwentyfour temesine geç"
```

### Beklenen netije

Aktiwalaşdyrmak barlaglylyk bilen başlap bolsa:

- Aktiwleşen temanyň tasdiqi
- Öňki temanyň ady (referensizlik üçin)
- Temanyň şu wagt işjeleýän sayt URL-i
- Teme özgüse görä her bir wezipeleriň notatnamalary

Mysal netijesi:
```
✓ Tema barlaglylyk bilen aktiwalaşdyryldy
  Aktiw tema: Modern Agency
  Öňki tema: Twentytwentyfour
  İşjeleýän ýerde: https://yoursite.com
  Not: Layout-y barlamak üçin esasy sahanyňyzy kontrol ediň
```

## İşlemek arkasy: Skaffold etmek we aktiwalaşdyrmak

Adatça işlemek arkasy bu iki hili bilimi birleşdirýär:

1. **Tema döretmek üçin soňaw bermek**: "Meni SaaS geljegi saytym üçin blok temany döredip bilersiňiz"
2. **Agent tema skaffold edýär**: Fayllary we dizayn tokenlaryny döredýär
3. **Garaşdyrmak we düzmek**: Gerek bolsa, dizayn üýtgeşmelerini gürrüňdeşlikde müzakere etmek
4. **Aktiwalaşdyrmak**: "Teme şu wagt aktiwalaşdyr"
5. **Barlamak**: Täze dizayn işjeleýänligi barlamak üçin saytınıza girip görüň

## Dizayn tokenlary we özelleşdirmek

Skaffold edilmiş temalar WordPress dizayn tokenlaryny ( `theme.json` arkaly) şu üç zat üçin ulanyp bilýär:

- **Wärdigärlikler**: Esasy, ikindi, agşam, neytral palitra
- **Tipografiýa**: Fontlar, ölçüler, agramlar, ýol ýüzi (line heights)
- **Aralyklar**: Padding, margin, gap skala-ları
- **Çäklendirmeler**: Radius we giňlik tokenlary
- **Sypatlamalar (Shadows)**: Ýokary derejeli sypatlanylma

Bu tokenlar `theme.json` içinde merkezileşdirilendir, bu bolsa sizi bütün dizayn sistemini bir fayldan düzetmek aňsat edýär.

## Çykyşlar we Notatlar

- Themes `/wp-content/themes/` diredakdaýar wedirilipdirýär we ol WordPress adyryndylaryna laýyk gelmelidir
- Aktivizasiýa üçin WordPress sahypasynda laýyk resminamalar gerek.
- Tema içindäki custom PHP kodlary minimal bolmalydyr; käbir çylşyrymly funksionallik üçin pluginlerden peimanyň.
- Block themes WordPress 5.9 we sonrakylary bilen iň gowy işleýär.

## Sorunlary çözmek

**Tema diredakdan soň görünmez**
- Tema diredakdir we ol uly resminamalar barada barlap görüň
- `theme.json` düzgün JSON bolup biljekdigini kontrol ediň
- Tema adyny bar bolsa tema bilen çakmalydygyny üpjün ediň

**Aktivizasiýa geçmez**
- Sizde administrator resminamalary bar olduğunu anyklaň
- Tema diredagyny WordPress üçin okamak biljekdigini kontrol ediň
- Detallar üçin WordPress xatolyk loglaryny gözden geçiriň

**Design tokens ulanylmaz**
- `theme.json` sintaksyny düzgün bolup bolar, diňe
- Hakyky çyzyklan (caching) pluginlerini aradan aýyrdyn
- WordPress sürümünüz ulanylan tokenlary goldaýandygyny kontrol ediň

## Soňraki ädimler

Tema aktivizasiýasından soň, siz şularly edip bilersiňiz:
- Tipografi, raşyma we aralyk üçin **Design System Aesthetics** hünarlığını ulanyp gowulandyrmak
- WordPress block editori arkaly her bir blok stili özüňize laýyklaşdyrmak
- Tema `style.css` faylynda custom CSS goşmak
- Belirli sahypa turlary üçin custom block template-leri döretmek
