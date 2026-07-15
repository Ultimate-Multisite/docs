---
title: Sabyşdyrmak we Içeport etmek
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Export & Import

Ultimate Multisite 2.9.0-da **Tools > Export & Import** (Araçlar > Dışa beriş we içe çekiş) başlyğynda bir tek site üçin **Export & Import** (Dışa beriş we içe çekiş) aracı ýazylmadyr. Bu arany size bir WordPress saytyny ZIP fayl hökmünde paketlemek, şonuňdan ZIP-i geri almagyň ýa-da onu degişli Ultimate Multisite we single-site WordPress kuramagyndan birine geçirmegiň zerur bolan wagtda peýdaly bolar.

## Zəruryn resseller {#required-permissions}

Siz dışa beriljek ýa-da içe çekiljek sayt üçin WordPress **Tools** (Araçlar) menüsine girip biljek administrator hasaby bilen giriş bermeli. Multisite ulgamynda, ulgam derejesindäki Ultimate Multisite araçlaryndan subsite-leri dışa berýan ýa-da içe çekýän wagtda ulgam administrator hasabyny ulanmagyň.

Export ZIP indirjeleri taslamanydyr (authenticated download endpoint) arkaly berilýär, şonuň üçin indirme tamamlanana çenli admin sessiýasyny işleýärli saklaň we döredilen indirme URL-lerini halka açyp bermäň.

## Siteyi ZIP-e Çykarmak {#exporting-a-site-to-a-zip}

1. Kopyalamak istediğiniz sayt üçin WordPress admin panelinde **Tools > Export & Import** (Araçlar > Çıkarma ve İçe Aktarma) bölüsüne gidin.
2. Çıkarma sahəsini açın və paketlemek istediğiniz siteyi seçin.
3. Mümkün olan hallarda, yükləmeler, pluginler və temalar kimi əlavə məzmunları seçin.
4. Çıxarmayı başlatın və prosesin bitməsinə gözləyin. Böyük saytlar ZIP hazır olana qədər fon (background)da bitməli ola bilər.
5. Bitmiş ZIP-i çıxarışlar siyahısından yükləyin.

ZIP faylını təhlükəsiz bir yerdə saxlayın. O, sayt məzmununu, parametrləri, media fayllarını və seçilmiş kod aktivlərini ehtiva edə bilər.

## Çıxarış nə daxildir {#what-the-export-includes}

Bir çıxarış ZIP-i aşağıdakıları əhatə edə bilər:

Site bazasyny we konfigurasiyasyny sazlama.
Saýlaňlanan pluginler we temalar goýulsa, ýüklenipdirilen media fayllary.
Bu opsiyalar sazlansa, pluginler we temalar.
Sajy barlagyny esaslandyrmak üçin Export & Import gurşawdan ulanylýan metadata.

ZIP-iň netji agramy media miqdaryna, sazlanylan pluginlere we temalara hem-de sahypa bazasynyň tablisa agramyna baglydyr.

## ZIP-den sahypany import etmek {#importing-a-site-from-a-zip}

1. Manysy WordPress saytunda **Tools > Export & Import** (Araçlar > Export & Import) bölümini açyň.
2. Import bölümini açyp, Export & Import arayşyndan döredilen ZIP faylyny yükleň.
3. Eger sayt täze adresi ulanyp bilmese, ýerine ýetirmek üçin köpeltilipdirilen URL-i girip, esasy URL-i saklamak islese, bu bölümi boş qalaň.
4. Import bitirip biler, yüklenipdirilen ZIP faylyny silmek isleýärsiňizmi, şonuň üçin saýlaň.
5. **Begin Import** (Importy Başla) düwmesini basyň.
6. Import tamamlanana çenli ýetmezlikde duran importy gözläň. Prosesi tamamlamaňdan öň togtatmak isleseň, diňe **Cancel Import** (Importy Ýatdaly) ulanmagyň.
7. Normal trafik we müşderileri kabul etmäden önce import edilipdirilen sayty gözden geçiriň.

Bir tek saytly WordPress kuramındaky ZIP faylını import etmek, mevcut saytyňizi import edilen sayt bilen üýtgedendir. İşine başlamazdan öň, maksat saytyňyzy doly yedeklemekden we bir wagtda aynı sayta birdenim import etmäge başlamazdan saklanmagyndan soň, bu meseleleri bilip bolmaly.

## Cheklendirmeler we laýyklyk ýa-da laýyklylyk notatları {#limitations-and-compatibility-notes}

Çok uly yükleme katalogları ýa-da media kitaphanalary uly ZIP fayllary döredip biler. Uly sahypalary eksport etmekden ýa-da import etmekden öň PHP yükleme limitlerini, işlemek limitlerini, disk boýuklygyny, RAM (memory) we server zaman geçmegi (timeout) sozlamalaryny barlap bilersiňiz.
Çok uly media kitaphanalary az trafikli umumy tizlik döwründe özüni köçürmegi gerek biler.
Maddal WordPress gurşawy (installation) degişli WordPress, PHP, Ultimate Multisite, plugin we tema ulgamlaryny we versiyalaryny işleýärlikde bolmaly.
Bir sahypany import etmek degişli sahypany üpjün edipdir. Bu birleşdirmegi (merge tool) amala aşyrmaz.
Multisite-den single-site-e we single-site-den multisite-e köçürmeler diňe degişli ortama eksport edilen sahypanyň pluginlerini, temalaryny, URL-lerini we zerur Ultimate Multisite komponentlerini işleýärlikde ulanyp bilse.

ZIP dosyasyny gizli tutun. Onde edilen siteden bazaya malumatlar, yüklenmiş fayllar we konfigurasiya detallary bolup biler.

Eski tarapda ulangan (network-level) export iş akymalary üçin [Site Export](/user-guide/administration/site-export) manzumuna seredip bilersiňiz.
