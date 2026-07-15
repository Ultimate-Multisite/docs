---
title: Zapier аркылуу хаты登録лау
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Событие: Zapier aracılığıyla hesap kaydı oluşturma

[Ultimate Multisite'ı Zapier ile entegre etme](zapier.md) makalesinde, Zapier'ı Ultimate Multisite içinde tetikleyiciler ve olaylar (triggers and events) temelinde farklı eylemler gerçekleştirmek için nasıl kullanabileceğimizi konuştuk. Bu makalede ise üçüncü taraf uygulamaları nasıl entegre edebileceğinizi göstereceğiz. Veri kaynağı olarak Google Sheets'i kullanacak ve bilgileri Ultimate Multisite'a göndererek hesap kaydı oluşturacağız.

Zapier'a bağlanmadan önce, **Ultimate Multisite > Settings > API & Webhooks** bölümüne gidin ve API'nin etkinleştirildiğinden emin olun. Zapier size Ultimate Multisite hesap bilgilerini sorduğunda bu ekrandan API Key'i ve API Secret'ı kopyalayın.

![API ve Webhook ayarları, API Anahtarı, API Gizli Anahtarı ve API Etkinleştirme seçenekleri ile](/img/admin/settings-api-webhooks.png)

İlk olarak, Google Drive'ınız altında bir **Google Sheet** oluşturmanız gerekiyor. Verileri daha sonra kolayca eşleştirebilmeniz için her sütunu doğru bir şekilde tanımladığınızdan emin olun.

Bir Google Sheet oluşturduktan sonra Zapier hesabınıza giriş yapabilir ve bir zap (otomasyon) oluşturmaya başlayabilirsiniz.

**"App event"** arama alanında **"Google Sheets"** seçin.

Ardından "**Event** " alanı için **"New spreadsheet row"** (Yeni elektronik tablo satırı) seçin ve **"Continue"** (Devam et) butonuna basın.

Son adımda, verilerin geleceği **Google Sheet**'in kaydedildiği bir **Google Hesabı** seçmeniz istenecektir. Yani doğru Google hesabın belirtildiğinden emin olun.

**"Set up trigger"** altında, verinin nereden geleceğini kullanacağınız Google elektronik tablosunu ve çalışma sayfasını seçip belirlemeniz gerekecek. Sadece bunları doldurun ve **"Continue"**'a basın.

Sonra, Google Sheet'inizin düzgün bir şekilde bağlandığından emin olmak için **"test your trigger"** (tetikleyicinizi test edin) yapmanız gerekiyor.

Testiniz başarılı olursa, elektronik tablolarınızdan bazı değerleri gösteren bir sonuç görmelisiniz. Devam etmek için **"Continue"**'a tıklayın.

Сы다음 шай: Ultimate Multisite-де hesap oluşturacak veya kaydetmek için ikinci eylemi ayarlayın. Arama alanından "**Ultimate Multisite(2.0.2)** " seçin.

"**Event**" (Olay) alanında, "**Register an Account in Ultimate Multisite**" (Ultimate Multisite'ta Hesap Kaydı Yap) seçin ve ardından "**Continue**" (Devam Et) düğmesine tıklayın.

"**Set up an action**" (Eylemi Ayarla) altında, müşteri verileri, üyelikler, ürünler vb. için farklı alanlar göreceksiniz. Değerleri Google Sheet'inizdeki karşılıklarıyla eşleştirebilir ve ekranın altındaki resimde gösterildiği gibi doğru alana atayabilirsiniz.

Değerleri eşleştirdikten sonra eylemi test edebilirsiniz.
