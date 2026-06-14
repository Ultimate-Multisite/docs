---
title: E-poçtlar we ýaýyşyklar göndermek
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# E-mail Gönderme we Yayma (v2)

_**ÖNEMLİ QAYDAMA: Bu makale Ultimate Multisite versiyasının 2.x sürümünü nəzərdə tutur.**_

Ultimate Multisite funksiyası, siz hər hansı bir müştəri və ya müştəri qrupu üzərində e-mail göndərməyiniz və onların admin panellərinə xəbərlər yaymaq üçün bildirişlər göndərməyiniz yolu ilə müştərilərlə əlaqə qurmağa imkan verir.

## Yaymalarla Müştəri Panellərinizdə Admin Bildirişləri Əlavə Edin

Ultimate Multisite yayma funksiyasını istifadə edərək, siz **admin bildirişlərini** istifadəçi alt-saytının admin paneli üzərinə əlavə edə bilərsiniz.

Bu, sistemin texniki baxımdan saxlanılması kimi bir elan etmək və ya mövcud müştərilərə yeni məhsulları və xidmətləri təqdim etmək kimi elanlar verməyiniz lazım olduqda çox faydalıdır. Admin bildirişi istifadəçinizin paneli üzərində necə görünəcəyini bu sayda görə bilərsiniz.

<!-- Screenshot unavailable: Müştəri alt-saytının paneli üzərində admin bildirişi göstərilir -->

Admin bildirişini başlatmaq üçün şəbəkə admin panellərinizə gedin və **Ultimate Multisite** menyusunun altında **Broadcasts** seçiminə görə tapacaqsınız.

![Ultimate Multisite adminində Yaymalar siyahısı səhifəsi](/img/admin/broadcasts-list.png)

Mövcud yaymaları redaktə edə bilərsiniz:

![Yayma redaktə interfeysi](/img/admin/broadcast-edit.png)

Bu səhifədən yuxarıdakı **Add Broadcast** düyməsini basın.

Bu, hansı növ yayma göndərmək istədiyinizi seçə biləcəyiniz Add broadcast modal pəncərəsini açacaq.

Sadəcə **Message** (Məktub) seçin və sonra **Next Step** düyməsinə basın.

![Message seçilmiş add broadcast modalı](/img/admin/broadcast-add-message.png)

Növbəti pəncərə sizdən ya **Target customer** (Hədəf müştəri) və ya **Target product** (Hədəf məhsul) soruşacaq. Qeyd edin ki, bir nechta istifadəçini və ya bir nechta məhsulu seçə bilərsiniz.

Bir kullanıcı hesabı ýa ürün barada gözlemek üçin, esasy sözü (keyword) ulanyp girmeýäňiz gerek.

**Message type** (Mesaj görnüşi) boýundaki ulanyp-girmeli alanda, bildirişin reňkini saýlaýarsyňyz. Bu, mesajlaryňizi has gowy düşündirmek üçin zerurlygy ösdürer.

Soňra **Next Step** (Indiki ädim) düwmanyna basyp bilersiňiz.

![Message broadcast targetlar, target produkt we mesaj görnüşi alany](/img/admin/broadcast-message-targets.png)

Indiki pencerede subjekti we ulanyjylara ýaýlamak isleýän mazmuny (content/message) girip öz mesajyňyzy tassyklap bilersiňiz.

![Compose ädimi bolan ýaýlama mesaj subjekti we mazmun redaktory](/img/admin/broadcast-edit.png)

Mesajyzy döredenden soň, **Send** (Göndermek) düwmanyna basyp bilersiňiz.

We bu barada. Administrasiýa bildirişi siziň ulanyjylaryňiz dasha bilen görkezmeli bolmaly.

## Iň amatly adamlar ücigine e-poçta ýazmak

Ultimate Multisite ýaýlama funksionalyndan peýdalanmagy bilen, ulanyjylara e-poçta ýazyp bilersiňiz. E-poçtany diňe belli bir ulanyjylara ýa-da olaryň subskribolary bolan produkt ýa-da plan esasyny görkezýän belli bir ulanyjylar toparyna ücigini bermegi üçin mümkinçilik bar.

E-poça ýaýlama başlamak üçin, ulgamyňiz administrasiýa panelindäki (network admin dashboard) size Ultimate Multisite menüsinde Broadcast opsiyasyny tapyp bilersiňiz.

![E-poça ýaýlamalaryň sanaw lapasy e-poçta ýaýlama başlamak üçin ulanylýan](/img/admin/broadcasts-list.png)

Bu sahanyndan, üstden **Add broadcast** (Ýaýlama goşmak) düwmanyna basyň.

Bu size ýaýlamanyň nähili görnüşini göndermek isleýändigini saýlaýan Add broadcast modal penceresini açar. Ýaýlamak isleýän görnüşi saýlaň, soňra **Email** (E-poçta) bilen saýlaň we **Next Step** düwmanyna basyň.

![Email opsiyasy saýlanan Add broadcast modal penceresi](/img/admin/broadcast-add-email.png)

Indiki pencere size ýa-da **Target customer** (Maddar adam) ýa-da **Target product** (Maddar produkt) sorap biler. Birden birden çendian ulanyjylary ýa-da birden birden ürükleri saýlaýanlaryňyz boljakdygyny ýatlaň.

Kullanıcı hesabı ýa maglumat hasap üçin gözlemek isleýärsiňiz, sözüni ulanyp girirmeli.

Maqsaldaryňyz seçilip biler bolsa, **Next Step**-e basyp bilersiňiz.

![Email habarynyň maksatly ulgam we maksatly maglumat hasaby üçin saýlanmagy](/img/admin/broadcast-email-targets.png)

Indiki pencerede size emaili ýazmaga başlap bilersiňiz, subjekty we ulanyjylara göndermek isleýän mazmunu/mesajy girip bilersiňiz.

<!-- Screenshot unavailable: Email habarynyň subjekti we mazmun edarlaşdyrmagyň aşgabatda -->

Mesajy döredenden soň, **Send** düwämesine basyp bilersiňiz.

We bu broadcast funksionaly bilen ulanyjylara email göndermek nädereeli aňsatdyr.

## Sistem habarlary (System emails)

Ultimate Multisite-da sistem habarlary – bu resminama, tölemek, domany eşde dowamly ýaly belli hereketlerden soň sistem tarapyndan ýüklenen **awtomatiki bildirişlerdir**. Bu emailleri Ultimate Multisite sozlamalaryndan redaktir edip üýtgetmek mümkin. Şeýle hem, başga bir Ultimate Multisite görnüşindäki mövcud sozlamalaryny hasaplaýjy we ýazyjy üçin özüni täsirlemek we import etmek üçin funksiýa bar.

### Hasaplamak we Import etmek (Resetting & Importing)

New Ultimate Multisite görnüşleri, şeýle hem add-onlar wagtynda täze emailleri hasaplaýar.

Çaklyşyklary we beýleki meseleleriň ýüze çykmasynyň öňüni almak üçin, **biz täze email şablonlaryny siziň görnüşiňizde Sistem habarlary hökmünde awtomatiki hasaplamaydyk**, eger o belli bir funksiýanyň düzgün işlemek üçin möhümdir.

Ýöne super adminler we agentler bu täze hasaplanan emailleri import edip bilýärler, bu proses täze email şablonunyň mazmuny we sozlamalaryny özüniň ýa-da islendik üýtgetmelerini amala aşyrmagy mümkin bolan täze sistem habary hökmünde döredendir.

#### Sistem habarlaryny nasıl import etmek



Ultimate Multisite Ayarlary sayfasyna geçiň we **Emails** sekýiisine gitdiň.

![Ultimate Multisite ayarlaryndaky Emails sekýesi görkeziji resmini](/img/config/settings-emails-tab.png)

Soňra, yanrakda, **Customize System Emails** düwmesine basyň.

<!-- Screenshot unavailable: System Emails yanrak panelinde Customize System Emails düwmesi resmini -->

System Emails sayfasında, üstde **Reset & Import** işlemleri düwmenini görersiňiz. Bu düwme basylanda import we reset modal penceresi açylmaly.

![System Emails admin sayfasındaki Reset veya Import işlemi düğmenin resmini](/img/admin/system-emails-reset-import.png)

Soňra, Import Emails opsionalaryny geçirişip görersiňiz, haýsy sistem e-poçtalary import edilip biljekdigini bilerisiz.

<!-- Screenshot unavailable: Import Emails opsionalary bilen genişletilmiş Reset ve Import modal resmini -->

#### System Emails-i Sıfırlamak (Reseting)

Biziňden başga bir wagt, belli bir e-poçta şablona geçirenleriň özü üçin işe yrim ýetmediğini we ony olaryň **default döwletine** sıfırlamak isleýändiklerini anyklaşdyryp bilersiňiz.

Bu ýagdaýlarda, size iki opsiyany bar: siz diňe sistem e-poçtasyny silip soňra onu geri import edip bilersiňiz (üstde berlen talbat bilen) - bu bolsa göndermälik metrikalary we beýleki zatlary ýok eder, bu sebäpli bu usul iň az üstünlikli usuldyr.

Ýa-da siz şablony sıfırlamak üçin **Reset & Import tool**dan sagatly ulanyp bilersiňiz.

E-poçta şablony sıfırlamak üçin, ýokarda görkezilen ädimleri üstünlikli çykan Reset & Import tooluna çenli dowam etdiň we soňra **Reset** opsiyasyny geçiriň we ony default mowzuklaryna geri almak isleýän e-poçtalary saýlaň.

<!-- Screenshot unavailable: Reset ve Import modal resmini ilə genişletilmiş Reset Emails opsionalary resmini -->
