---
title: Zapier orqali hisob ro'yxatdan oling
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# رویداد: Zapier aracılığıyla hesap kaydı oluşturma {#event-register-an-account-via-zapier}

[Ultimate Multisite'ı Zapier ile entegre etme](zapier.md) yazısında, Ultimate Multisite içinde tetikleyiciler ve olaylar (triggers and events) temelinde farklı eylemler gerçekleştirmek için Zapier'ı nasıl kullanabileceğimizi konuştuk. Bu makalede ise üçüncü taraf uygulamaları nasıl entegre edebileceğinizi göstereceğiz. Veri kaynağı olarak Google Sheets'i kullanacağız ve bu bilgileri Ultimate Multisite'a göndererek bir hesap kaydı oluşturacağız.

Zapier'a bağlanmadan önce, **Ultimate Multisite > Settings > API & Webhooks** bölümüne gidin ve API'nin etkinleştirildiğinden emin olun. Zapier sizden Ultimate Multisite hesap bilgilerini sorduğunda bu ekrandan API Key (API Anahtarı) ve API Secret (API Gizli Anahtarı) kopyalayın.

![API ve Webhook ayarları, API Anahtarı, API Gizli Anahtarı ve API'yi Etkinleştirme seçenekleri ile](/img/admin/settings-api-webhooks.png)

İlk olarak, Google Drive'ınız altında bir **Google Sheet** oluşturmanız gerekiyor. Daha sonra verileri daha sonra kolayca eşleştirebilmeniz için her sütunu doğru bir şekilde tanımladığınızdan emin olun.

Bir Google Sheet oluşturduktan sonra, Zapier hesabınıza giriş yapabilir ve bir zap (otomasyon) oluşturmaya başlayabilirsiniz.

**"App event"** arama alanında **"Google Sheets"**i seçin.

Ardından "**Event** " alanı için **"New spreadsheet row"** (Yeni elektronik tablo satırı) seçin ve **"Continue"** (Devam et) butonuna basın.

Son adımda, verilerin geleceği **Google Sheet**'in kaydedildiği bir **Google Hesabını** seçmeniz istenecektir. Yani sadece doğru Google hesabının belirtildiğinden emin olun.

**"Set up trigger"** altında, verinin nereden geleceğini belirleyeceğiniz Google elektronik tablosunu ve çalışma sayfasını seçip belirtmeniz gerekecek. Sadece bunları doldurun ve **"Continue"**'a basın.

Sonra, Google Sheet'inizin düzgün bir şekilde bağlandığından emin olmak için **"test your trigger"** (tetikleyicinizi test edin) yapmanız gerekiyor.

Testiniz başarılı olursa, elektronik tablolarınızdan bazı değerleri gösteren bir sonuç görmelisiniz. Devam etmek için **"Continue"**'a tıklayın.

تەخشى ئامادەکردن بۆ هەنگاو دووەمە کە بەکارهێنەرێک لە Ultimate Multisite دا تۆمار دەکات یان تۆمار دەکات. لە فیلدی گەڕان (search field)دا، "**Ultimate Multisite(2.0.2)**"ی هەڵبژێرە.

لە فیلدی "**Event** "دا، "**Register an Account in Ultimate Multisite**"ی هەڵبژێرە، پاشان د එහි "**Continue**" बटانی دەستنیشان بکە.

لە بەشی "**Set up an action** "دا، دەتوانیت فیلدەکانی جیاواز بۆ داتاکانی کڕیار، ئەندازیارییەکان (memberships)، بەرهەمەکان و هتد، ببینیت. دەتوانیت ئەو بەهایانەی لە Google Sheet دا هەڵبژێرین و پێشان بدەن لەو فیلدەی کە دەبێت داتاکانەکە پڕ بکرێنەوە، وەک لە وێنەی خوارەوە نیشان کراوە.

پاش ئەوەی بەهاکان هەڵبژێریت، دەتوانیت ئەو کار (action) یە تاقیبکەیت (test).
