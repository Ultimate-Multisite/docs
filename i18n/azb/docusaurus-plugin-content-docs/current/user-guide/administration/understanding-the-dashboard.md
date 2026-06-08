---
title: Azb-kontrolni anlash
sidebar_position: 7
_i18n_hash: 4869a2f03eb529c49c821a22eb6b9647
---
# Ultimate Multisite Dashboard'ı Anlamak

Ultimate Multisite'ın daha gelişmiş yapılandırma seçeneklerine ve operasyonel yönlerine dalmadan önce, dashboard'a bir göz atalım.

Diğer birçok WordPress plugin'i gibi, Ultimate Multisite de **Ultimate Multisite** başlıklı, ağ düzeyinde bir menü girişi oluşturur ve altında bir dizi alt menü girişi bulunur.

## Network Dashboard Widget'ları

Ultimate Multisite, network düzeyindeki dashboard'a birkaç kullanışlı widget ekler. Bu dashboard'a **My Sites → Network Admin → Dashboard** yolunu izleyerek ulaşabilirsiniz. Widget'lar, ağ yöneticisi için bilgiye ve yaygın işlemlere kolay erişim sağlamak üzere tasarlanmıştır.

![Network Dashboard with Ultimate Multisite widgets](/img/admin/network-dashboard-full.png)

### İlk Adımlar (First Steps)

![First Steps widget](/img/admin/network-dashboard-first-steps.png)

Bu widget, Ultimate Multisite'ın ilk kurulumunda görünür ve ağ yöneticisini ödeme yöntemi yapılandırma ve test hesabı oluşturma gibi ek görevleri tamamlaması konusunda uyarır.

### Özet (Summary)

![Summary widget](/img/admin/network-dashboard-summary.png)

Summary widget'ı, gün içindeki kayıt sayısını ve bu kayıtlardan elde edilen geliri raporlar. MRR (Aylık Tekrarlayan Gelir), gelir getiren üyeliklere sahip müşteriler genelinde beklenen toplam tutarı gösterir.

### Aktivite Akışı (Activity Stream)

![Activity Stream widget](/img/admin/network-dashboard-activity-stream.png)

Bu widget, Ultimate Multisite genelindeki olayları raporlar. Olaylar arasında kayıtlar, iptaller, site oluşturmalar, silinmeler ve diğer aktiviteler bulunur.

Daha detaylı bir açıklama için lütfen dokümantasyonun Events bölümüne bakınız.

### Şu Anda (Right Now)

![Right Now widget](/img/admin/network-dashboard-right-now.png)

Bu yardımcı widget, ağdaki kullanıcılar ve siteler hakkında kısa bir özet görüntüler. En üstteki kullanışlı kısayollar, yeni site veya kullanıcı oluşturmak için tek tıkla erişim sağlar.

### Haberler ve Tartışmalar (News and Discussions)

![News and Discussions widget](/img/admin/network-dashboard-news.png)

Bu widget, en son Ultimate Multisite haberlerini çeker ve gösterir. Güncellemeler, kritik hatalar ve güvenlik düzeltmeleri hakkındaki bilgiler için bu widget'ı takip edin.

## Ultimate Multisite Dashboard

Network düzeyindeki dashboard genel bir ağ bilgisi sunarken, Ultimate Multisite dashboard'u (Ultimate Multisite menüsünün en üst seviyesinde bulunur) hizmetle ilgili bilgileri sunar.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

### Aylık Tekrarlayan Gelir Büyümesi (Monthly Recurring Revenue Growth)

MRR (Aylık Tekrarlayan Gelir) grafiği, 12 aylık bir takvim dönemine yayılan aylık gelir dökümünü gösterir.

![MRR Growth chart](/img/admin/um-dashboard-mrr.png)

Yeni gelir mavi renkte, iptaller ise kırmızı renkte yansıtılır.

### Tarih Aralığı Desteği (Date-range Support)

Müşteri ve aktivite sayısına bağlı olarak istatistikler bunaltıcı olabilir. Dashboard'a yerleştirilmiş tarih aralığı desteği, ağ yöneticisinin yalnızca ihtiyaç duyduğu bilgi ve zaman dilimine odaklanmasını sağlar.

![Date range selector and stats](/img/admin/um-dashboard-date-range.png)

Tarih aralığı, aşağıda bulunan widget'lar tarafından gösterilen bilgilerin dönemini yönetir; bu bilgiler arasında gelir, yeni üyelikler, ülkeye göre kayıtlar, forma göre kayıtlar ve en çok ziyaret edilen siteler bulunur.

![Dashboard statistics widgets](/img/admin/um-dashboard-stats.png)

:::tip
**En Çok Ziyaret Edilen Siteler** widget'ının çalışması için, **Ultimate Multisite → Settings → Sites → Enable Visits Limitation and Counting** adresinden ziyaret sayımını etkinleştirmeyi unutmayın.
:::
