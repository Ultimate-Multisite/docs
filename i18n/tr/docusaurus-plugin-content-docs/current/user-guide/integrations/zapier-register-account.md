---
title: Zapier Aracılığıyla Hesap Kaydet
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# Etkinlik: Zapier üzerinden hesap kaydetme

[Ultimate Multisite'ı Zapier ile Entegre Etme](zapier.md) makalesinde, tetikleyiciler ve etkinlikler aracılığıyla Ultimate Multisite'ta farklı işlemler gerçekleştirmek için Zapier'ı nasıl kullanacağımızı ele almıştık. Bu makalede ise 3. parti uygulamaları nasıl entegre edebileceğinizi göstereceğiz. Veri kaynağı olarak Google Sheets kullanacak ve bilgileri hesap kaydı için Ultimate Multisite'a göndereceğiz.

Öncelikle Google Drive'ınızda bir **Google Sheet** oluşturmanız gerekiyor. Verileri daha sonra kolayca eşleştirebilmek için her sütunu düzgün şekilde tanımladığınızdan emin olun.

![Müşteri verileri için sütunlar içeren Google Sheet](/img/admin/webhooks-list.png)Google Sheet'i oluşturduktan sonra Zapier hesabınıza giriş yapıp bir zap oluşturmaya başlayabilirsiniz.

![Zap oluşturmak için Zapier kontrol paneli](/img/admin/webhooks-list.png)**"App event"** arama alanında **"Google Sheets"** seçeneğini seçin

![App event olarak Google Sheets seçimi](/img/admin/webhooks-list.png)

Ardından "**Event**" alanında "**New spreadsheet row**" seçeneğini seçin ve "**Continue**" düğmesine tıklayın

![Zapier'da New spreadsheet row etkinliği seçimi](/img/admin/webhooks-list.png)Sonraki adımda **Google Sheet**'in kayıtlı olduğu **Google Account**'u seçmeniz istenecektir. Doğru Google hesabının belirtildiğinden emin olun.

![Google Sheet için Google Account seçimi](/img/admin/webhooks-list.png)

"**Set up trigger**" bölümünde, verilerin geleceği Google elektronik tablosunu ve çalışma sayfasını seçip belirtmeniz gerekecektir. Bu alanları doldurun ve "**Continue**" düğmesine tıklayın

![Elektronik tablo ve çalışma sayfası seçimi ile tetikleyici kurulumu](/img/admin/webhooks-list.png)Sıradaki adım, Google Sheet'inizin düzgün şekilde bağlandığından emin olmak için "**test your trigger**" adımıdır.

![Zapier'da tetikleyici test adımı](/img/admin/webhooks-list.png)Testiniz başarılı olursa, elektronik tablonuzdaki bazı değerleri gösteren sonucu görmelisiniz. Devam etmek için "**Continue**" düğmesine tıklayın.

![Elektronik tablo değerlerini gösteren başarılı tetikleyici testi](/img/admin/webhooks-list.png)Sonraki adım, Ultimate Multisite'ta hesap oluşturacak veya kaydedecek ikinci eylemi ayarlamaktır. Arama alanında "**Ultimate Multisite(2.0.2)**" seçeneğini seçin

![Eylem uygulaması olarak Ultimate Multisite seçimi](/img/admin/webhooks-list.png)

"**Event**" alanında "**Register an Account in Ultimate Multisite**" seçeneğini seçin ve ardından "**Continue**" düğmesine tıklayın.

![Ultimate Multisite'ta Hesap Kaydetme eylem etkinliği](/img/admin/webhooks-list.png)"**Set up an action**" bölümünde müşteri verileri, üyelikler, ürünler vb. için farklı alanlar göreceksiniz. Aşağıdaki ekran görüntüsünde gösterildiği gibi, Google Sheet'inizdeki değerleri eşleştirebilir ve bunları doldurulması gereken uygun alanlara atayabilirsiniz.

![Google Sheet değerlerini Ultimate Multisite alanlarıyla eşleştirme](/img/admin/webhooks-list.png)

Değerleri eşleştirdikten sonra eylemi test edebilirsiniz.

![Hesap kaydetme Zapier eylemini test etme](/img/admin/webhooks-list.png)
