---
title: Zapier aracılığıyla bir Account kaydedin
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Etkinlik: Zapier aracılığıyla bir Account kaydetme

[Ultimate Multisite’i Zapier ile entegre etme](zapier.md) makalesinde, tetikleyiciler ve etkinliklere göre Ultimate Multisite içinde farklı eylemleri gerçekleştirmek için Zapier’in nasıl kullanılacağını ele aldık. Bu makalede, 3. taraf uygulamaları nasıl entegre edebileceğinizi göstereceğiz. Veri kaynağı olarak Google Sheets kullanacağız ve bir Account kaydetmek için bilgileri Ultimate Multisite’e göndereceğiz.

Zapier’i bağlamadan önce **Ultimate Multisite > Settings > API & Webhooks** bölümüne gidin ve API’nin etkin olduğunu doğrulayın. Zapier Ultimate Multisite Account kimlik bilgilerini istediğinde bu ekrandan API Key ve API Secret değerlerini kopyalayın.

![API Key, API Secret ve Enable API seçeneklerini içeren API ve Webhooks ayarları](/img/admin/settings-api-webhooks.png)

Öncelikle, Google Drive’ınız altında bir **Google Sheet** oluşturmanız gerekir. Daha sonra verileri kolayca eşleyebilmeniz için her sütunu düzgün şekilde tanımladığınızdan emin olun.

Bir Google sheet oluşturduktan sonra Zapier Account’unuza giriş yapabilir ve bir zap oluşturmaya başlayabilirsiniz.

**"App event"** arama alanının altında **"Google Sheets"** seçeneğini seçin


Ardından "**Event** " alanı için "**New spreadsheet row** " seçeneğini seçin ve "**Continue** " düğmesine basın

Bir sonraki adım, **Google Sheet**’in kaydedildiği bir **Google Account** seçmenizi isteyecek. Bu nedenle yalnızca doğru google Account’un belirtildiğinden emin olun.


**"Set up trigger** " altında, verilerin geleceği google spreadsheet ve worksheet’i seçip belirtmeniz gerekecek. Devam edin, bunları doldurun ve "**Continue** " düğmesine basın

Sıradaki adım, google sheet’inizin düzgün şekilde bağlandığından emin olmak için "**test your trigger** " işlemidir.

Testiniz başarılı olursa, spreadsheets’inizden bazı değerleri gösteren sonucu görmelisiniz. Devam etmek için "**Continue** " düğmesine tıklayın.

Bir sonraki adım, Ultimate Multisite içinde bir Account oluşturacak veya kaydedecek ikinci eylemi ayarlamaktır. Arama alanında "**Ultimate Multisite(2.0.2)** " seçeneğini seçin


"**Event** " alanı altında "**Register an Account in Ultimate Multisite** " seçeneğini seçin, ardından "**Continue** " düğmesine tıklayın.

"**Set up an action** " altında, müşteri verileri, üyelikler, ürünler vb. için mevcut farklı alanları göreceksiniz. Google sheet’iniz altındaki değerleri eşleyebilir ve aşağıdaki ekran görüntüsünde gösterildiği gibi doldurulmaları gereken uygun alana atayabilirsiniz.


Değerleri eşledikten sonra eylemi test edebilirsiniz.
