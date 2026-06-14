---
title: Sending Emails and Broadcasts
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# E-posta Gönderme ve Yayınlar (v2)

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite sürüm 2.x'i kapsamaktadır.**_

Ultimate Multisite, müşterilerinizle iletişim kurmanıza olanak tanıyan bir özelliğe sahiptir. Bu özellik sayesinde belirli bir kullanıcıya veya kullanıcı grubuna e-posta gönderebilir ve ayrıca admin dashboard'larında duyurular yayınlayabilirsiniz.

## Yayınlarla Müşterilerin Dashboard'una Admin Bildirimleri Ekleme

Ultimate Multisite yayın özelliğini kullanarak, kullanıcılarınızın subsite admin dashboard'una **admin bildirimleri** ekleyebilirsiniz.

Bu özellik, sistem bakımı gibi bir duyuru yapmanız veya mevcut kullanıcılara yeni ürünler ya da hizmetler sunmanız gerektiğinde çok işinize yarayacaktır. Admin bildirimi, kullanıcılarınızın dashboard'unda şu şekilde görünecektir.

<!-- Screenshot unavailable: Admin notice broadcast shown on a customer's subsite dashboard -->

Bir admin bildirimi oluşturmak için, network admin dashboard'unuza gidin ve **Ultimate Multisite** menüsü altından **Broadcasts** seçeneğini bulun.

![Broadcasts list page in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Mevcut yayınları da düzenleyebilirsiniz:

![Broadcast edit interface](/img/admin/broadcast-edit.png)

Bu sayfadan, en üstteki **Add Broadcast** düğmesine tıklayın.

Bu, hangi tür bir yayın göndermek istediğinizi seçebileceğiniz Add broadcast modal penceresini açacaktır.

Lütfen **Message** seçeneğini seçin ve ardından **Next Step** düğmesine tıklayın.

![Add broadcast modal with the Message option selected](/img/admin/broadcast-add-message.png)

Bir sonraki pencere, sizden ya **Target customer** (Hedef müşteri) ya da **Target product** (Hedef ürün) isteyecektir. Birden fazla kullanıcı veya birden fazla ürün seçebileceğinizi unutmayın.

Ya bir kullanıcı hesabı ya da bir ürün arıyorsanız, kutucuğun içine anahtar kelime yazmaya başlamanız gerekir.

**Message type** alanında, bildirimin rengini seçebilirsiniz. Bu, mesajınızın aciliyetini vurgulayacaktır.

Ardından **Next Step**'e tıklayabilirsiniz.

![Target customers, target product and message type fields for a Message broadcast](/img/admin/broadcast-message-targets.png)

Bir sonraki pencere, mesajınızı oluşturmaya başlayabileceğiniz yerdir; buraya kullanıcılarınıza yayınlamak istediğiniz konuyu ve içeriği/mesajı girmeniz gerekir.

![Broadcast message subject and content editor on the compose step](/img/admin/broadcast-edit.png)

Mesajınızı oluşturduktan sonra, **Send** düğmesine basabilirsiniz.

İşte bu kadar. Admin bildirimi, kullanıcılarınızın dashboard'unda hemen görünmelidir.

## Müşterilerinize E-posta Gönderme

Ultimate Multisite yayın özelliğini kullanarak kullanıcılarınıza e-posta gönderebilirsiniz. E-postayı yalnızca belirli kullanıcılara gönderme veya abone oldukları ürüne veya plana göre belirli bir kullanıcı grubunu hedefleme seçeneğiniz bulunur.

Bir e-posta yayını başlatmak için, network admin dashboard'unuza gidin ve Ultimate Multisite menüsü altından Broadcast seçeneğini bulun.

![Broadcasts list page used as the starting point for an email broadcast](/img/admin/broadcasts-list.png)

Bu sayfadan, en üstteki **Add broadcast** düğmesine tıklayın.

Bu, hangi tür bir yayın göndermek istediğinizi seçebileceğiniz Add broadcast modal penceresini açacaktır. Lütfen **Email** seçeneğini seçin ve ardından **Next Step** düğmesine tıklayın.

![Add broadcast modal with the Email option selected](/img/admin/broadcast-add-email.png)

Bir sonraki pencere, sizden ya **Target customer** (Hedef müşteri) ya da **Target product** (Hedef ürün) isteyecektir. Birden fazla kullanıcı veya birden fazla ürün seçebileceğinizi unutmayın.

Ya bir kullanıcı hesabı ya da bir ürün arıyorsanız, kutucuğun içine anahtar kelime yazmaya başlamanız gerekir.

Hedef kitlenizi seçtikten sonra, **Next Step**'e tıklayabilirsiniz.

![Target customers and target product selection for an Email broadcast](/img/admin/broadcast-email-targets.png)

Bir sonraki pencere, kullanıcılarınıza göndermek istediğiniz konuyu ve içeriği/mesajı girerek e-postanızı oluşturmaya başlayabileceğiniz yerdir.

<!-- Screenshot unavailable: Email broadcast subject and content editor on the compose step -->

Mesajınızı oluşturduktan sonra, **Send** düğmesine basabilirsiniz.

İşte yayın özelliğini kullanarak son kullanıcılarınıza e-posta göndermenin ne kadar kolay olduğunu gösteren bir süreç.

## Sistem E-postaları

Ultimate Multisite'daki sistem e-postaları; kayıt, ödeme, domain eşleştirme gibi belirli eylemlerden sonra sistem tarafından gönderilen **otomatik bildirimlerdir**. Bu e-postalar Ultimate Multisite ayarlarından düzenlenebilir veya değiştirilebilir. Ayrıca, başka bir Ultimate Multisite kurulumundaki mevcut ayarları sıfırlamanıza ve içe aktarmanıza olanak tanıyan bir özelliğe de sahiptir.

### Sıfırlama ve İçe Aktarma

Yeni Ultimate Multisite sürümleri ve eklentiler zaman zaman yeni e-postalar kaydedebilir.

Çakışmaları ve diğer sorunları önlemek için, bir özelliğin doğru çalışması için kritik olmadıkça, **yeni e-posta şablonlarını otomatik olarak Sistem E-postası olarak eklemeyiz**.

Ancak, süper yöneticiler ve ajanlar bu yeni kaydedilen e-postaları importer aracı aracılığıyla içe aktarabilirler. Bu süreç, yeni e-posta şablonunun içeriği ve yapılandırmasıyla yeni bir sistem e-postası oluşturur, bu da süper yöneticinin istediği herhangi bir değişikliği yapmasına veya onları olduğu gibi bırakmasına olanak tanır.

#### Sistem E-postalarını Nasıl İçe Aktarılır

Ultimate Multisite Ayarlar sayfanıza gidin ve **Emails** sekmesine ulaşın.

![Emails tab in Ultimate Multisite settings showing the System Emails section](/img/config/settings-emails-tab.png)

Ardından, kenar çubuktaki **Customize System Emails** düğmesine tıklayın.

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

System Emails sayfasında, en üstte **Reset & Import** eylem düğmesini göreceksiniz. Bu düğmeye tıklamak, içe aktarma ve sıfırlama modal penceresini açmalıdır.

![Reset or Import action button on the System Emails admin page](/img/admin/system-emails-reset-import.png)

Ardından, hangi sistem e-postalarının içe aktarılabilir olduğunu görmek için Import Emails seçeneklerini açabilirsiniz.

<!-- Screenshot unavailable: Reset and Import modal with the Import Emails options expanded -->

#### Sistem E-postalarını Sıfırlama

Başka zamanlarda, belirli bir e-posta şablonuna yaptığınız değişikliklerin artık işe yaramadığını fark edebilir ve onu **varsayılan durumuna** sıfırlamak isteyebilirsiniz.

Bu gibi durumlarda iki seçeneğiniz var: sistem e-postasını silip tekrar içe aktarabilirsiniz (yukarıdaki talimatları kullanarak) - bu yöntem gönderim metriklerini ve diğer şeyleri sileceği için en az tercih edilen yöntemdir.

Veya bu e-posta şablonunu sıfırlamak için **Reset & Import tool**'u kullanabilirsiniz.

Bir e-posta şablonunu sıfırlamak için, yukarıdaki adımları Reset & Import aracına ulaşana kadar takip edebilir ve ardından **Reset** seçeneğini açıp varsayılan içeriğine sıfırlamak istediğiniz e-postaları seçebilirsiniz.

<!-- Screenshot unavailable: Reset and Import modal with the Reset Emails options expanded -->
