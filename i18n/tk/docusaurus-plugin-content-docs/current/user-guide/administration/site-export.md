---
title: Sayt satyn etme
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Sayt Çykarmak (Site Export)

**Sayt Çykarmak** admin sahəsi sizi bir saytı, ýa-da bütün ulgamy bir dowamly arkivi hökmünde indirip almagyňyz üçin paketlemek üçäm. Bu, migratsiya, buýruklama (backup) ýa-da başga birine bertarap etmek işleri üçin amatlydyr.

## Bir sayty çykarmak

**Ultimate Multisite > Site Export** bilen girip **Generate new Site Export** seçimiň. Çykarmak isleýän subsiteyi saýlaň, soňra arkivde ýüklemeler (uploads), pluginler we tema (themes) barada gürrüň berjekdigi üçin birini saýlaň.

Çykarmak tamamlandygyndan soň, **Existing Exports** listinden ZIP faylyny indirip aluň. Şu wagt çykarylan ZIP-ler özüni başlatyp biljek `index.php` we `readme.txt` barada hem içerir, bu bolsa arkivi başga bir hosta ýüklemek we ayrı import pluginini öňden kurmagyşymyz sebäpli, onu serişdäki kurulumdan has bilen başlatmaga mümkinçilik berýär.

## Bütün ulgamy çykarmak

Ulgamdaki ähli subsiteyi öz içine alýan bir ZIP arkivi gerek bolsa, Site Export sahasynda **Network Export**-i ulanuň. Bu, host migratsiyalarından, fedi geler (disaster-recovery) ýigmälerdan ýa-da her bir subsite birleşip gitmeli bolan aşgabat döwrüni täzelenmek üçin amatlydyr.

Ulgam çykarmagy bir sayt çykarmagyndan has uly bolup biler, şonuň üçin ony işlän adamlar az bolan wagtda ýerine ýetiriň we maksatlandyrylýan depolama ýerinde ZIP fayllaryny, pluginleri, temalary we özüni başlatyp biljek arkivleri saklamak üçin yetýärlik boýuklygy barada barlap görüň.

### Network Import Bundles (Ulgam Çykarmak Paketleri)

Ultimate Multisite 2.12.0 bilen başlap, Site Exporter **network import bundles** — ulgam-da ähli saytlary täzelenmek üçin özel taýynlandyrylmagan arkivleri döredip bilýär. Network import bundle birden artykma saytlary täzelenmek üçin zerur bolan ähli fayllary we metadata (maglumatlary) öz içine alýar.

#### Network Import Bundle Dörmek (Generating a Network Import Bundle)

1. **Ultimate Multisite > Site Export** bilen geçiň
2. **Generate new Network Export** düwümesini basyň
3. Export tipini "Network Import Bundle" (Şebekäsi İçeport Paketidir) seçiň
4. Uploadlar, pluginler we theme'leri goşmalymy diýip saýlaň
5. **Generate** düwümesini basyň
6. ZIP paketini **Existing Exports** (Mevcut Exportlar) listinden indirip aluň

#### Network Import Bundle bilen Geri Dörmek

Şebekäsi içeport paketindän site-leri geri dörmek üçin:

1. Ultimate Multisite-yňizi esaslanýan hosta (servere) kurup goýuň
2. multisite sozlamalaryny tamamlaýjy wizard bilen işiňizi bitiriň
3. Täze şebekäde **Ultimate Multisite > Site Export** bilen geçiň
4. **Import Network Bundle** düwümesini basyň
5. network import bundle ZIP faylyny upload ediň
6. Ekran üçin görkezilen içeport narychalar bilen işliňizi tamamlaň
7. Içeport prosesi ähli site-leri, olaryň mazmununy we sozlamalaryny geri döredendir

Network import bundle şu zatlary saklaýar:
- Site mazmuny (postlar, sayplar, custom post types)
- Site sozlamalary we opsionalary
- User roleler we izinleri
- Pluginler we theme'ler (bundle-de goşulsa)
- Media uploadlar (bundle-de goşulsa)
- Custom database tablisa we maglumatlar

## Özüni başlatýan export ZIP-ini kurmak

Täze hosta üçin özüni başlatýan ZIP-i geri döretmek üçin:

1. Export edilen ZIP maglumatlaryny esas web köküne (web root) upload ediň
2. Upload edilen `index.php` faylyny brauzerde açyň
3. Bundleden gelipdir, export paketinde görkezilen ekran üçin kurmak narychalar bilen işliňizi tamamlaň
4. Geçici fayllary düşürmekden önce bundle-de bolan `readme.txt` faylyny kontrol ediň

Addon-lara özüni kurmak we içeport baradaky giňişlikli maglumat üçin [Site Exporter addon dokumentasiýasyny](/addons/site-exporter) görüň.

Ultimate Multisite 2.9.0-da goşuldyrylan single-site ulgam üçin, [Export & Import](/user-guide/administration/export-import) bilen görnüşi görüň.
