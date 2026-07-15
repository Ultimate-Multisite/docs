---
title: Tema-Barlarynda Beceriler
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Tema-Aware Skills

Superdav AI Agent v1.10.0 dört täze tema-aware built-in skillleri ýazyryp çykaryýar, olar siziň aktif WordPress temasy bilen awtomatiki taýynlanýar. Bu skiller siziň temanyň arhitekturasyna we funksiýalaryna laýyklaşdyrylan iňlisden howa goşawlary we ukyplary berýär.

## Tema-Aware Skiller Näme? {#what-are-theme-aware-skills}

Tema-aware skiller bu, siziň sahypada şu wagtda işje edýän WordPress temasy esasynda awtomatiki tanalýan önümçeli bilim bazalary we ulgamlardyr. Temalaryň arasyndan geçseňiz, asistanlaryň bar bolan skilleri awtomatiki täzelenýär — manual dürli gural bermek gerek däl.

Her bir skill şu zatlary özünde jemleýär:

- **Tema-spesifik dokumentasiýa** — temany ulanmak we onuň özüne laýyklaşdyrmak barada howa goşawlar
- **Block we pattern referensleri** — bar bolan bloklar, patternlar we dizayn opsionalary
- **Customization (laýyklaşdyrma) mysallary** — umumy wezipeler üçin kod keselleri we konfigurasiýa modeleri
- **Best practices (iň gowy usullar)** — temanyň arhitekturasyna we iş akymyna maslahatlar

## Bar Bolan Tema-Aware Skiller {#available-theme-aware-skills}

### Block Temalary {#block-themes}

**Ulanýar:** WordPress bloklary esasynda (Full Site Editing) işje edýän temalar.

Block Themes skilli şu zatlar barada howa goşaw berýär:

- Blok redaktoryny ulanmaga we templateji döretmäge
- Blok patternlary we ulydyk bloklary bilen işleýärlik
- Umumy stil ýagdaýlary we theme.json setdirmelerini laýyklaşdyrmak
- Theme bloklary we ulgamlary ulanmak
- Siziň sahypanyň üçin custom block patternleri döretmek

**Awtomatiki täzelenýär:** Siziň aktif temasy blok temasy bolsa ( `block-templates` funksiýasyny goldaýar).

### Klassik Temalar {#classic-themes}

**Ulanýar:** PHP templateji we klassiki redaktory ulanýan adatça WordPress temalary.

Classic Themes skilli şu zatlar barada howa goşaw berýär:

PHP şablon dosyaları ve hook'lar bilen işler
Tema görünüşünü Customizer arkaly özelleştirmek
Widget alanları we sidebar'lardan faydalanmak
CSS'i üýtgetmek we child theme (ikiçi tema) döretmek
Tema hiyerarşisini we template tag'larını düşündürmek

**Aýtdyrylmagy:** Siziň aktif temany klassik (block-siz) bolsa.

### Kadence Blocks {#kadence-blocks}

**Ulanýanlar üçin:** Öňe süýşirilip biljek bloklary ulanyp, amatly dizayn etmek üçin Kadence Blocks pluginini ulanyp bilýän sitler.

Kadence Blocks becerisi şu zatlar barada ýol berýär:

- Kadenceniki öňe süýşirilip biljek blok laryny (Hero, Testimonials, Pricing we ş.m.) ulanyp bilmek
- Kadence bloklaryny we responsiwli opsionalary özelleşdirmek
- Kadence'in grid we container bloklary bilen amatly düzümleri döretmek
- Kadence bloklaryny öz temanyňyz bilen baglanyşdyrmak
- Kadence-iň dizayn sistemini we presetlerini ulanyp bilmek

**Aýtdyrylmagy:** Kadence Blocks pluginini sitinizde işjeňleşdirip ulanyp bilseňiz.

### Kadence Theme {#kadence-theme}

**Ulanýanlar üçin:** Bloklary esas alan dizayn we özelleşdirmek üçin Kadence temanyny ulanyp bilýän sitler.

Kadence Theme becerisi şu zatlar barada ýol berýär:

- Global stylar we theme.json arkaly Kadence temanyny özelleşdirmek
- Kadenceniki ýazgylary we template-leri ulanyp bilmek
- Kadence tema setlerini we opsionalary özelleşdirmek
- Kadence-iň dizayn sistemini ulanyp amatly düzümleri döretmek
- Populyar pluginler we gurallary bilen Kadenceni baglanyşdyrmak

**Aýtdyrylmagy:** Kadence temany siziň işjeňleşdirilen temany bolsa.

## Beceriler nädip saýlanýar {#how-skills-are-selected}

Asistan her bir mesagda siziň işjeňleşdirilen temany we ulanylýan pluginleri awtomatiki düşündirip alýar. Eger size laýyk tema bilen baglanyşykly beceri bar bolsa, ol asistanyň kontekstine awtomatiki ýüklenýär. Becerileri manedenelik we özüňiz manual arkaly işjeňleşdirmäge we üýtgetmäge gerek bolmaz.

### Käbir beceriler {#multiple-skills}

Sitenize birden çorak skill'ler (meselem, hem Kadence Blocks hem de Kadence Theme aktifse) ul근 skill'lere girýär we her birinden maslahaty almagy mümkinçiligi bar.

### Tema Değişmek {#switching-themes}

Aktiw temaňyzda üýtgeşdikde, assistant-i bar bolan skill'ler soňraki mesagda awtomatiki täzelenir. Mysal üçin:

1. Siz **Block Themes** skill'i aktif bolan blok temasy bilen ulanyarsyňyz.
2. Siz klassik temaga geçýärsiňiz.
3. Soňraki mesagda, **Classic Themes** skill'i awtomatiki ýüklenýär we **Block Themes** skill'i has howa bolmaz.

## Tema-Barlanan Skill'leri Ulanmak {#using-theme-aware-skills}

Tema-barlanan skill'den peýdalanmak üçin, chat interfeýsinde näme etmek isleýändigiňizi düşündiriň. Assistant awtomatiki dogry skill maslahatyny ýerine ýetirip görkezýär.

### Mysallar {#example-prompts}

**Block Themes üçin:**
> "Blok sazlamalaryny ulanmagy arkaly arka fon resmi we merkezlenip tekst bilen hero bölümini döredip biljekmi?"

**Classic Themes üçin:**
> "Child theme ulanyp saýlanyş (sidebar) üçin özgertmeli widget bölümini goşmaga mümkinçilik bolar."

**Kadence Blocks üçin:**
> "Kadence Testimonials blokyny ulanmagy arkaly testimoniň bölümini döredip biljekmi?"

**Kadence Theme üçin:**
> "Header görnüşini we navigasiýa menüsini stilize etmek."

Assistant-i siziň aktif temanyňyz we pluginleriniz üçin özelleşdirilen tema-spesifik maslahatlary we kod mysallaryny berer.

:::note
Tema-barlanan skill'ler Superdav AI Agent v1.10.0 we ondan soňky versiyalarda awtomatiki bolýar. Goşmaça sazlamalar ýa-da dürli işleri gerek däldir.
:::
