---
title: E-posta ve Yayın Gönderme
sidebar_position: 11
_i18n_hash: 2c1041bf76187ffc82978d1fa966fb23
---
# E-posta ve Toplu Duyuru Gönderme (v2)

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite 2.x sürümüne aittir.**_

Ultimate Multisite, müşterilerinizle iletişim kurmanızı sağlayan bir özellikle birlikte gelir. Bu özellik sayesinde belirli bir kullanıcıya veya kullanıcı grubuna e-posta gönderebilir, ayrıca duyurularınızı yayınlamak için kullanıcıların yönetim panellerinde bildirim gösterebilirsiniz.

## Toplu Duyurular ile müşterilerinizin panelinde yönetici bildirimi gösterme

Ultimate Multisite toplu duyuru özelliğini kullanarak, kullanıcılarınızın alt site yönetim panellerine **yönetici bildirimleri** ekleyebilirsiniz.

Bu özellik, sistem bakımı gibi bir duyuru yapmanız veya mevcut kullanıcılarınıza yeni ürün ya da hizmetler sunmanız gerektiğinde son derece kullanışlıdır. Yönetici bildirimi, kullanıcınızın panelinde aşağıdaki gibi görünecektir.

![Müşteri panelinde gösterilen yönetici bildirimi](/img/admin/broadcasts-list.png)

Yönetici bildirimi oluşturmak için ağ yönetim panelinize gidin ve **Ultimate Multisite** menüsü altında **Broadcasts** seçeneğini bulacaksınız.

![Ultimate Multisite yönetiminde Broadcasts menüsü](/img/admin/broadcasts-list.png)

Bu sayfadan üstteki **Add Broadcast** düğmesine tıklayın.

Karşınıza, göndermek istediğiniz duyuru türünü seçebileceğiniz Add broadcast penceresi açılacaktır.

**Message** seçeneğini seçin ve ardından **Next Step** düğmesine tıklayın.

![Message türü seçilmiş Add broadcast penceresi](/img/admin/broadcasts-list.png)

Bir sonraki pencerede **Target customer** veya **Target product** seçenekleri sorulacaktır. Birden fazla kullanıcı veya birden fazla ürün seçebileceğinizi unutmayın.

Kullanıcı hesabı veya ürün aramak için ilgili alana anahtar kelimeyi yazmaya başlamanız gerekir.

**Message type** alanında bildirimin rengini seçebilirsiniz. Bu, mesajınızın aciliyetini vurgulayacaktır.

Ardından **Next Step** düğmesine tıklayabilirsiniz.

![Toplu duyuru için hedef müşteri ve ürün seçimi](/img/admin/broadcasts-list.png)

Bir sonraki pencerede, kullanıcılara duyurmak istediğiniz konuyu ve içeriği/mesajı girerek mesajınızı oluşturabilirsiniz.

![Toplu duyuru konusu ve içerik düzenleyicisi](/img/admin/broadcasts-list.png)

Mesajınızı oluşturduktan sonra **Send** düğmesine tıklayabilirsiniz.

İşte bu kadar. Yönetici bildirimi kullanıcınızın panelinde hemen görünecektir.

## Müşterilerinize e-posta gönderme

Ultimate Multisite toplu duyuru özelliğini kullanarak kullanıcılarınıza e-posta gönderebilirsiniz. E-postayı yalnızca belirli kullanıcılara gönderme veya abone oldukları ürün ya da plana göre belirli bir kullanıcı grubunu hedefleme seçeneğiniz vardır.

E-posta duyurusu başlatmak için ağ yönetim panelinize gidin ve Ultimate Multisite menüsü altında Broadcast seçeneğini bulacaksınız.

![Ultimate Multisite yönetiminde Broadcasts sayfası](/img/admin/broadcasts-list.png)

Bu sayfadan üstteki **Add broadcast** düğmesine tıklayın.

Karşınıza, göndermek istediğiniz duyuru türünü seçebileceğiniz Add broadcast penceresi açılacaktır. **Email** seçeneğini seçin ve ardından **Next Step** düğmesine tıklayın.

![Email türü seçilmiş Add broadcast penceresi](/img/admin/broadcasts-list.png)

Bir sonraki pencerede **Target customer** veya **Target product** seçenekleri sorulacaktır. Birden fazla kullanıcı veya birden fazla ürün seçebileceğinizi unutmayın.

Kullanıcı hesabı veya ürün aramak için ilgili alana anahtar kelimeyi yazmaya başlamanız gerekir.

Hedef kitlenizi seçtikten sonra **Next Step** düğmesine tıklayabilirsiniz.

![E-posta duyurusu için hedef müşteri ve ürün seçimi](/img/admin/broadcasts-list.png)

Bir sonraki pencerede, kullanıcılara göndermek istediğiniz konuyu ve içeriği/mesajı girerek e-postanızı oluşturabilirsiniz.

![E-posta duyurusu konusu ve içerik düzenleyicisi](/img/admin/broadcasts-list.png)

Mesajınızı oluşturduktan sonra **Send** düğmesine tıklayabilirsiniz.

İşte toplu duyuru özelliğini kullanarak son kullanıcılarınıza e-posta göndermek bu kadar kolay.

## Sistem e-postaları

Ultimate Multisite'taki sistem e-postaları, kayıt, ödeme, alan adı eşleme gibi belirli işlemlerden sonra sistem tarafından gönderilen **otomatik bildirimlerdir**. Bu e-postalar Ultimate Multisite ayarlarından düzenlenebilir veya değiştirilebilir. Ayrıca mevcut ayarları sıfırlamanıza ve başka bir Ultimate Multisite kurulumundan içe aktarmanıza olanak tanıyan bir özellik de bulunmaktadır.

### Sıfırlama ve İçe Aktarma

Yeni Ultimate Multisite sürümleri ve eklentiler zaman zaman yeni e-postalar kaydedebilir ve kaydedecektir.

Çakışmaları ve diğer sorunları önlemek için, **belirli bir özelliğin doğru çalışması için kritik olmadıkça yeni e-posta şablonlarını kurulumunuza otomatik olarak Sistem E-postaları olarak eklemeyeceğiz**.

Ancak süper yöneticiler ve temsilciler, bu yeni kaydedilen e-postaları içe aktarma aracı aracılığıyla içe aktarabilir. Bu işlem, yeni e-posta şablonunun içeriği ve yapılandırmasıyla yeni bir sistem e-postası oluşturacak ve süper yöneticinin istediği değişiklikleri yapmasına veya olduğu gibi bırakmasına olanak tanıyacaktır.

#### Sistem e-postalarını içe aktarma

Ultimate Multisite Ayarları sayfanıza gidin ve **Emails** sekmesine geçin.

![Ultimate Multisite ayarlarında Emails sekmesi](/img/config/settings-emails.png)

Ardından kenar çubuğunda **Customize System Emails** düğmesine tıklayın.

![Kenar çubuğundaki Customize System Emails düğmesi](/img/config/settings-emails.png)

System Emails sayfasında üstte **Reset & Import** işlem düğmesini göreceksiniz. Bu düğmeye tıklamak içe aktarma ve sıfırlama penceresini açacaktır.

![System Emails sayfasındaki Reset and Import işlem düğmesi](/img/config/settings-emails.png)

Ardından, hangi sistem e-postalarının içe aktarılmaya uygun olduğunu görmek için Import Emails seçeneklerini açabilirsiniz.

![Kullanılabilir sistem e-postalarını gösteren Import Emails seçenekleri](/img/config/settings-emails.png)

#### Sistem E-postalarını Sıfırlama

Bazen belirli bir e-posta şablonunda yaptığınız değişikliklerin artık işinize yaramadığını fark edebilir ve şablonu **varsayılan durumuna** sıfırlamak isteyebilirsiniz.

Bu durumda iki seçeneğiniz vardır: sistem e-postasını silip tekrar içe aktarabilirsiniz (yukarıdaki talimatları kullanarak) - ancak bu yöntem gönderim istatistiklerini ve diğer verileri sileceği için en az tercih edilen yöntemdir.

Ya da **Reset & Import aracını** kullanarak e-posta şablonunu sıfırlayabilirsiniz.

Bir e-posta şablonunu sıfırlamak için Reset & Import aracına ulaşana kadar yukarıdaki adımları izleyebilir, ardından **Reset** seçeneğini açıp varsayılan içeriklerine sıfırlamak istediğiniz e-postaları seçebilirsiniz.

![E-posta şablonlarını varsayılana döndürmek için Reset seçeneği](/img/config/settings-emails.png)
