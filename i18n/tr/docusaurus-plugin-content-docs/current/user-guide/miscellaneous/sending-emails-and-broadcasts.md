---
title: E-postalar ve Duyurular Gönderme
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# E-postalar ve Yayınlar Gönderme (v2) {#sending-emails-and-broadcasts-v2}

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite sürüm 2.x ile ilgilidir.**_

Ultimate Multisite, hedeflenen bir kullanıcıya veya bir kullanıcı grubuna e-posta göndererek müşterilerinizle iletişim kurmanıza ve ayrıca duyuruları yayınlamak için onların yönetici panosunda bildirimler göndermenize olanak tanıyan bir özellikle birlikte gelir.

## Broadcasts ile müşterilerinizin Dashboard'una yönetici bildirimleri ekleyin {#add-admin-notices-to-your-customers-dashboard-with-broadcasts}

Ultimate Multisite yayın özelliğini kullanarak kullanıcınızın alt site yönetici Dashboard'una **yönetici bildirimleri** ekleyebilirsiniz.

Sistem bakımı gibi bir duyuru yapmanız veya mevcut kullanıcılarınıza yeni ürünler ya da hizmetler sunmanız gerektiğinde bu son derece faydalıdır. Yönetici bildiriminin kullanıcınızın Dashboard'unda nasıl görüneceği budur.

<!-- Ekran görüntüsü yok: Bir müşterinin alt site Dashboard'unda gösterilen yönetici bildirimi yayını -->

Bir yönetici bildirimi başlatmak için ağ yönetici Dashboard'unuza gidin ve **Ultimate Multisite** menüsü altında **Broadcasts** seçeneğini bulacaksınız.

![Ultimate Multisite yönetiminde Broadcasts liste sayfası](/img/admin/broadcasts-list.png)

Mevcut yayınları da düzenleyebilirsiniz:

![Yayın düzenleme arayüzü](/img/admin/broadcast-edit.png)

Bu sayfadan üstteki **Add Broadcast** düğmesine tıklayın.

Bu, göndermek istediğiniz yayın türünü seçebileceğiniz Yayın ekle modal penceresini açacaktır.

Devam edin ve **Message** seçeneğini seçin, ardından **Next Step** düğmesine tıklayın.

![Message seçeneği seçilmiş Yayın ekle modalı](/img/admin/broadcast-add-message.png)

Sonraki pencere sizden **Target customer** veya **Target product** isteyecektir. Birden fazla kullanıcı veya birden fazla ürün seçebileceğinizi unutmayın.

Bir kullanıcı hesabı veya ürün aramak için alanın içine anahtar kelimeyi yazmaya başlamanız gerekir.

**Message type** alanı altında bildirimin rengini seçebilirsiniz. Bu, mesajınızın aciliyetini vurgulayacaktır.

Ardından **Next Step** düğmesine tıklayabilirsiniz.

![Message yayını için hedef müşteriler, hedef ürün ve mesaj türü alanları](/img/admin/broadcast-message-targets.png)

Sonraki pencere, kullanıcılara yayınlamak istediğiniz konuyu ve içeriği/mesajı girerek mesajınızı oluşturmaya başlayabileceğiniz yerdir.

![Oluşturma adımında yayın mesajı konusu ve içerik düzenleyicisi](/img/admin/broadcast-edit.png)

Mesajınızı oluşturduktan sonra **Send** düğmesine basabilirsiniz.

İşte bu kadar. Yönetici bildirimi kullanıcınızın Dashboard'unda hemen görünmelidir.

## Müşterilerinize e-postalar gönderin {#send-emails-to-your-customers}

Ultimate Multisite yayın özelliğini kullanarak kullanıcılarınıza e-posta gönderebilirsiniz. E-postayı yalnızca belirli kullanıcılara gönderme veya abone oldukları ürün ya da plana göre belirli bir kullanıcı grubunu hedefleme seçeneğiniz vardır.

Bir e-posta yayını başlatmak için ağ yönetici Dashboard'unuza gidin ve Ultimate Multisite menüsü altında Broadcast seçeneğini bulacaksınız.

![E-posta yayını için başlangıç noktası olarak kullanılan Broadcasts liste sayfası](/img/admin/broadcasts-list.png)

Bu sayfadan üstteki **Add broadcast** düğmesine tıklayın.

Bu, göndermek istediğiniz yayın türünü seçebileceğiniz Yayın ekle modal penceresini açacaktır. Devam edin ve **Email** seçeneğini seçin, ardından **Next Step** düğmesine tıklayın.

![Email seçeneği seçilmiş Yayın ekle modalı](/img/admin/broadcast-add-email.png)

Sonraki pencere sizden **Target customer** veya **Target produc** t isteyecektir. Birden fazla kullanıcı veya birden fazla ürün seçebileceğinizi unutmayın.

Bir kullanıcı hesabı veya ürün aramak için alanın içine anahtar kelimeyi yazmaya başlamanız gerekir.

Hedef kitleniz seçildikten sonra **Next Step** düğmesine tıklayabilirsiniz.

![Email yayını için hedef müşteriler ve hedef ürün seçimi](/img/admin/broadcast-email-targets.png)

Sonraki pencere, kullanıcılara göndermek istediğiniz konuyu ve içeriği/mesajı girerek e-postanızı oluşturmaya başlayabileceğiniz yerdir.

<!-- Ekran görüntüsü yok: Oluşturma adımında e-posta yayını konusu ve içerik düzenleyicisi -->

Mesajınızı oluşturduktan sonra **Send** düğmesine basabilirsiniz.

Yayın özelliğini kullanarak son kullanıcılarınıza e-posta göndermek işte bu kadar kolaydır.

## Sistem e-postaları {#system-emails}

Ultimate Multisite içindeki sistem e-postaları, kayıt, ödeme, domain eşleme vb. belirli eylemlerden sonra sistem tarafından gönderilen **otomatik bildirimlerdir**. Bu e-postalar Ultimate Multisite ayarlarından düzenlenebilir veya değiştirilebilir. Ayrıca, başka bir Ultimate Multisite kurulumundan mevcut ayarları sıfırlamanıza ve içe aktarmanıza olanak tanıyan bir özellikle birlikte gelir.

### Sıfırlama ve İçe Aktarma {#resetting--importing}

Yeni Ultimate Multisite sürümleri ve eklentiler zaman zaman yeni e-postalar kaydedebilir ve kaydedecektir.

Çakışmaları ve diğer sorunları önlemek için, belirli bir özelliğin doğru çalışması açısından kritik olmadıkları sürece **yeni e-posta şablonlarını kurulumunuza otomatik olarak Sistem E-postaları olarak eklemeyeceğiz** .

Ancak super adminler ve ajanlar bu yeni kaydedilen e-postaları içe aktarma aracı aracılığıyla içe aktarabilir. Bu süreç, yeni e-posta şablonunun içeriği ve yapılandırmasıyla yeni bir sistem e-postası oluşturur; böylece super admin istediği değişiklikleri yapabilir veya onları olduğu gibi tutabilir.

#### Sistem e-postaları nasıl içe aktarılır {#how-to-import-system-emails}

Ultimate Multisite Settings sayfanıza gidin ve **Emails** sekmesine geçin.

![Sistem E-postaları bölümünü gösteren Ultimate Multisite ayarlarında Emails sekmesi](/img/config/settings-emails-tab.png)

Ardından, kenar çubuğunda **Customize System Emails** düğmesine tıklayın.

<!-- Ekran görüntüsü yok: System Emails kenar çubuğu panelindeki Customize System Emails düğmesi -->

System Emails sayfasında, üstte **Reset & Import** işlem düğmesini göreceksiniz. Bu düğmeye tıklamak içe aktarma ve sıfırlama modal penceresini açmalıdır.

![System Emails yönetici sayfasındaki Reset veya Import işlem düğmesi](/img/admin/system-emails-reset-import.png)

Ardından, hangi sistem e-postalarının içe aktarılabilir olduğunu görmek için Import Emails seçeneklerini değiştirebilirsiniz.

<!-- Ekran görüntüsü kullanılamıyor: Import Emails seçenekleri genişletilmiş Reset and Import modalı -->

#### Sistem E-postalarını Sıfırlama {#reseting-system-emails}

Bazı durumlarda, belirli bir e-posta şablonunda yaptığınız değişikliklerin artık işinize yaramadığını fark eder ve onu **varsayılan durumuna** sıfırlamak isteyebilirsiniz.

Bu gibi durumlarda iki seçeneğiniz vardır: Sistem e-postasını basitçe silebilir ve (yukarıdaki talimatları kullanarak) yeniden içe aktarabilirsiniz; bu, gönderim metriklerini ve diğer şeyleri sileceğinden bu yöntemi daha az tercih edilir kılar.

Ya da bu e-posta şablonunu sıfırlamak için **Reset & Import aracı**nı kullanabilirsiniz.

Bir e-posta şablonunu sıfırlamak için, Reset & Import aracına ulaşana kadar yukarıdaki adımları takip edebilir, ardından **Reset** seçeneğini açıp varsayılan içeriklerine geri sıfırlamak istediğiniz e-postaları seçebilirsiniz.

<!-- Ekran görüntüsü kullanılamıyor: Reset Emails seçenekleri genişletilmiş Reset and Import modalı -->
