---
title: Elektron Poçt və Yayım Mətnləri
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# E-poçt və Yayğıdılmalar Göndərmək (v2)

_**MÜHİM QEYD: Bu məqalə Ultimate Multisite 2.x versiyasına aiddir.**_

Ultimate Multisite, hədəflənmiş bir istifadəçiyə və ya bir qrup istifadəçiyə e-poçt göndərməyiniz, eləcə də onların admin dashboard-unda elanlar yaymaq üçün bir funksionallıq təqdim edir.

## Yayğıdılmalarla Müştərilərinizin Dashboard-una Admin Bildirişləri Əlavə Edin

Ultimate Multisite yayğıdılmaları funksionallığından istifadə edərək, istifadəçilərinizin subsite admin dashboard-una **admin bildirişləri** əlavə edə bilərsiniz.

Bu, sistemin texniki baxımı və ya mövcud istifadəçilərinizə yeni məhsullar və ya xidmətlər təklif etmək kimi bir elan verməyiniz lazım gəldikdə çox faydalıdır. Admin bildirişi istifadəçilərinizin dashboard-unda belə görünəcək.

![Admin notice broadcast shown on a customer's subsite dashboard](/img/frontend/broadcast-customer-dashboard.png)

Bir admin bildirişi yaratmaq üçün network admin dashboard-unuza daxil olun və **Ultimate Multisite** menyusunun altında **Broadcasts** seçiminə baxın.

![Broadcasts list page in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Mövcud yayğıdılmaları da redaktə edə bilərsiniz:

![Broadcast edit interface](/img/admin/broadcast-edit.png)

Bu səhifədən yuxarıdakı **Add Broadcast** düymasına klikləyin.

Bu, sizə hansı növ yayğıdılma göndərmək istədiyinizi seçə biləcəyiniz Add broadcast modal pəncərəsini açacaq.

**Message** seçin və sonra **Next Step** düymasına klikləyin.

![Add broadcast modal with the Message option selected](/img/admin/broadcast-add-message.png)

Növbəti pəncərə sizdən ya **Target customer** (Hədəf müştəri) ya da **Target product** (Hədəf məhsul) tələb edəcək. Qeyd edin ki, birdən çox istifadəçi və ya birdən çox məhsul seçə bilərsiniz.

Ya istifadəçi hesabını, ya da məhsulu axtarmaq üçün sahəyə açar söz yazmağa başlamalısınız.

**Message type** sahəsi altında bildirişin rəngini seçə bilərsiniz. Bu, mesajınızın təcili olduğunu vurğulayacaq.

Sonra **Next Step** düymasına klikləyə bilərsiniz.

![Target customers, target product and message type fields for a Message broadcast](/img/admin/broadcast-message-targets.png)

Növbəti pəncərə isə mətninizi, yəni mövzu və istifadəçilərə yaymaq istədiyiniz məzmunu/mesajı daxil edərək mesajınızı hazırlamağa başladığınız yerdir.

![Broadcast message subject and content editor on the compose step](/img/admin/broadcast-edit.png)

Mesajınızı yaratdıqdan sonra **Send** düymasına basa bilərsiniz.

Budur. Admin bildirişi dərhal istifadəçilərinizin dashboard-unda görünməlidir.

## Müştərilərinizə E-poçt Göndərin

Ultimate Multisite yayğıdılmaları funksionallığından istifadə edərək, istifadəçilərinizə e-poçt göndərə bilərsiniz. E-poçtu yalnız müəyyən istifadəçilərə göndərmək və ya onların abunə olduğu məhsula və ya planlara əsaslanaraq hədəf bir istifadəçi qrupuna yönəltmək imkanınız var.

Bir e-poçt yayğıdılması başlatmaq üçün network admin dashboard-unuza daxil olun və Ultimate Multisite menyusunun altında Broadcast seçiminə baxın.

![Broadcasts list page used as the starting point for an email broadcast](/img/admin/broadcasts-list.png)

Bu səhifədən yuxarıdakı **Add broadcast** düymasına klikləyin.

Bu, sizə hansı növ yayğıdılma göndərmək istədiyinizi seçə biləcəyiniz Add broadcast modal pəncərəsini açacaq. **Email** seçin və sonra **Next Step** düymasına klikləyin.

![Add broadcast modal with the Email option selected](/img/admin/broadcast-add-email.png)

Növbəti pəncərə sizdən ya **Target customer** (Hədəf müştəri) ya da **Target product** (Hədəf məhsul) tələb edəcək. Qeyd edin ki, birdən çox istifadəçi və ya birdən çox məhsul seçə bilərsiniz.

Ya istifadəçi hesabını, ya da məhsulu axtarmaq üçün sahəyə açar söz yazmağa başlamalısınız.

Hədəf auditoriyanızı seçdikdən sonra **Next Step** düymasına klikləyə bilərsiniz.

![Target customers and target product selection for an Email broadcast](/img/admin/broadcast-email-targets.png)

Növbəti pəncərə isə e-poçtunuzu hazırlamağa başladığınız yerdir; mövzu və istifadəçilərə göndərmək istədiyiniz məzmunu/mesajı daxil edirsiniz.

![Email broadcast subject and content editor on the compose step](/img/admin/broadcast-email-compose.png)

Mesajınızı yaratdıqdan sonra **Send** düymasına basa bilərsiniz.

Və belə asandır ki, yayğıdılmalar funksionallığından istifadə edərək son istifadəçilərinizə e-poçt göndərmək.

## Sistem E-poçtları

Ultimate Multisite-də sistem e-poçtları, qeydiyyat, ödəniş, domen xəritələnməsi və s. kimi müəyyən əməliyyatlardan sonra sistem tərəfindən göndərilən **avtomatik bildirişlərdir**. Bu e-poçtlar Ultimate Multisite settings-dən redaktə edilə və ya dəyişdirilə bilər. Həmçinin, başqa bir Ultimate Multisite quraşdırmasından mövcud parametrləri sıfırlamaq və idxal etməyə imkan verən bir funksionallıq da ilə gəlir.

### Sıfırlama və İdxal Etmə

Yeni Ultimate Multisite versiyaları, eləcə də add-onlar, vaxtaşırı yeni e-poçtlar qeyd edə bilər və edəcəklər.

Ziddiyyətləri və digər problemləri aradan qaldırmaq üçün, **biz yeni e-poçt şablonlarını avtomatik olaraq Sistem E-poçtları kimi əlavə etməyəcəyik**, əgər onlar müəyyən bir funksionallığın düzgün işləməsi üçün kritik deyilsə.

Bununla belə, super adminlər və agentlər bu yeni qeyd edilmiş e-poçtları importer tool vasitəsilə idxal edə bilərlər. Bu proses, yeni e-poçt şablonunun məzmunu və konfiqurasiyası ilə yeni bir sistem e-poçti yaradacaq, bu da super adminə istənilən dəyişiklik etməyə və ya onları olduğu kimi saxlamağa imkan verəcək.

#### Sistem e-poçtlarını necə idxal etmək olar

Ultimate Multisite Settings səhifənə daxil olun və **Emails** tab-ına keçin.

![Emails tab in Ultimate Multisite settings showing the System Emails section](/img/config/settings-emails-tab.png)

Sonra, yan paneldə **Customize System Emails** düymasına klikləyin.

![Customize System Emails button on the System Emails sidebar panel](/img/config/settings-emails-customize-button.png)

System Emails səhifəsində yuxarıda **Reset & Import** (Sıfırla və İdxal Et) əməli düyməsini görəcəksiniz. Bu düymaya klikləmək idxal və sıfırlama modal pəncərəsini açmalıdır.

![Reset or Import action button on the System Emails admin page](/img/admin/system-emails-reset-import.png)

Sonra, hansı sistem e-poçtlarının idxal edilə biləcəyini görmək üçün Import Emails seçimlərini açmaq üçün toggle edə bilərsiniz.

![Reset and Import modal with the Import Emails options expanded](/img/admin/system-emails-import-options.png)

#### Sistem E-poçtlarını Sıfırlama

Başqa vaxtlar, müəyyən bir e-poçt şablonuna etdiyiniz dəyişikliklərin artıq sizin üçün işləmədiyini və onu **default vəziyyətinə** qaytarmaq istədiyinizi başa düşə bilərsiniz.

Belə hallarda iki seçiminiz var: sadəcə sistem e-poçtunu silib onu geri idxal edə bilərsiniz (yuxarıdakı təlimatdan istifadə edərək) - bu, göndərilmə metrikalarını və digər şeyləri siləcəyi üçün bu metod ən az üstün görülür.

Və ya o e-poçt şablonunu sıfırlamaq üçün **Reset & Import tool** istifadə edə bilərsiniz.

Bir e-poçt şablonunu sıfırlamaq üçün, yuxarıdakı addımları izləyərək Reset & Import tool-una çatana qədər gedin və sonra **Reset** seçiminə toggle edib, default məzmununa qaytarmaq istədiyiniz e-poçtları seçin.

![Reset and Import modal with the Reset Emails options expanded](/img/admin/system-emails-reset-options.png)
