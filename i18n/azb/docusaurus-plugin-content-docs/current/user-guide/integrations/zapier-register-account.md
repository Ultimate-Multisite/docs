---
title: Zapier's helpi-way-e account register
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# Olay: Zapier Üzerinden Hesap Kaydı Yapma

[Integrating Ultimate Multisite with Zapier](zapier.md) makalesinde, Ultimate Multisite içinde tetikleyicilere ve olaylara bağlı olarak farklı eylemler gerçekleştirmek için Zapier'ı nasıl kullanacağımızı konuşmuştuk. Bu makalede ise, üçüncü taraf uygulamaları nasıl entegre edeceğinizi göstereceğiz. Veri kaynağı olarak Google Sheets kullanacak ve bu bilgileri Ultimate Multisite'a göndererek bir hesap kaydı yapacağız.

Öncelikle, Google Drive'ınız altında bir **Google Sheet** oluşturmanız gerekiyor. Daha sonra verileri kolayca eşleştirebilmeniz için her sütunu doğru bir şekilde tanımladığınızdan emin olun.

![Google Sheet with columns for customer data](/img/admin/webhooks-list.png) Bir Google Sheet oluşturduktan sonra, Zapier hesabınıza giriş yapıp bir Zap oluşturmaya başlayabilirsiniz.

![Zapier dashboard to start creating a zap](/img/admin/webhooks-list.png) **"App event"** arama alanının altında **"Google Sheets"** seçeneğini seçin.

![Selecting Google Sheets as the app event](/img/admin/webhooks-list.png)

Ardından "**Event** " alanı için "**New spreadsheet row** " seçeneğini seçin ve "**Continue** " butonuna tıklayın.

![Selecting New spreadsheet row event in Zapier](/img/admin/webhooks-list.png) Bir sonraki adımda, **Google Sheet**'in kaydedildiği **Google Hesabı**'nı seçmeniz istenecektir. Bu yüzden doğru Google hesabının belirtildiğinden emin olun.

![Selecting Google Account for the Google Sheet](/img/admin/webhooks-list.png)

**"Set up trigger** " altında, verilerin hangi Google Sheet ve çalışma sayfasından geleceğini seçip belirtmeniz gerekecek. Bu bilgileri doldurup "**Continue** " butonuna tıklamanız yeterli.

![Set up trigger with spreadsheet and worksheet selection](/img/admin/webhooks-list.png) Şimdi de Google Sheet'inizin düzgün bağlı olduğundan emin olmak için "**test your trigger** " adımını yapın.

![Test your trigger step in Zapier](/img/admin/webhooks-list.png) Testiniz başarılı olursa, e-tablonuzdan bazı değerleri gösteren bir sonuç göreceksiniz. Devam etmek için "**Continue** " butonuna tıklayın.

![Successful trigger test showing spreadsheet values](/img/admin/webhooks-list.png) Bir sonraki adım, Ultimate Multisite'da bir hesap oluşturacak veya kaydedecek ikinci eylemi ayarlamaktır. Arama alanında "**Ultimate Multisite(2.0.2)** " seçeneğini seçin.

![Selecting Ultimate Multisite as the action app](/img/admin/webhooks-list.png)

"**Event** " alanının altında, "**Register an Account in Ultimate Multisite** " seçeneğini seçin ve ardından "**Continue** " butonuna tıklayın.

![Register an Account in Ultimate Multisite action event](/img/admin/webhooks-list.png) "**Set up an action** " altında, müşteri verileri, üyelikler, ürünler vb. için farklı alanlar göreceksiniz. Google Sheet'inizdeki değerleri bu alanlara eşleştirebilir ve aşağıdaki ekran görüntüsünde gösterildiği gibi, hangi alana girilmesi gerekiyorsa oraya atayabilirsiniz.

![Mapping Google Sheet values to Ultimate Multisite fields](/img/admin/webhooks-list.png)

Değerleri eşleştirdikten sonra, eylemi test edebilirsiniz.

![Testing the register account Zapier action](/img/admin/webhooks-list.png)
