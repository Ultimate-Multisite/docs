---
title: Zapier vasitəsilə Hesab Yaratmaq
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# Hadisə: Zapier vasitəsilə hesab yaratmaq

[Integrating Ultimate Multisite with Zapier](zapier.md) məqaləsində Zapier-dən istifadə edərək Ultimate Multisite daxilində müxtəlif əməliyyatlar necə yerinə yetirilə biləcəyini, tetriq və hadisələrə əsaslanaraq, müzakirə etmişdik. Bu məqalədə isə üçüncü tərəf tətbiqlərini necə inteqrasiya etmək göstərəcəyik. Biz məlumat mənbəyi kimi Google Sheets-dən istifadə edəcəyik və bir hesab yaratmaq üçün bu məlumatı Ultimate Multisite-ə göndərəcəyik.

Əvvəlcə, Google Drive-ınız altında bir **Google Sheet** yaratmalısınız. Daha sonra məlumatları asanlıqla əlaqələndirə bilmək üçün hər bir sütunu düzgün təyin etdiyinizdən əmin olun.

![Google Sheet with columns for customer data](/img/admin/webhooks-list.png)Bir Google Sheet yaratdıqdan sonra, Zapier hesabınıza daxil ola və bir zap yaratmağa başlay bilərsiniz.

![Zapier dashboard to start creating a zap](/img/admin/webhooks-list.png) **"App event"** axtarış sahəsi altında **"Google Sheets"** seçin.

![Selecting Google Sheets as the app event](/img/admin/webhooks-list.png)

Sonra "**Event** " sahəsi üçün "**New spreadsheet row** " seçin və "**Continue** " düymasına basın.

![Selecting New spreadsheet row event in Zapier](/img/admin/webhooks-list.png)Növbəti addım sizdən **Google Sheet**-in saxlandığı **Google Account**-u seçməyinizi xahiş edəcək. Buna görə də, düzgün Google hesabının göstərildiyinə əmin olun.

![Selecting Google Account for the Google Sheet](/img/admin/webhooks-list.png)

**"Set up trigger** " altında, məlumatların gələcəyi Google spreadsheet və worksheet-i seçməli və təyin etməlisiniz. Sadəcə doldurun və "**Continue** " düymasına basın.

![Set up trigger with spreadsheet and worksheet selection](/img/admin/webhooks-list.png)Növbəti addım, Google Sheet-inizin düzgün qoşulduğundan əmin olmaq üçün "**test your trigger** " etməkdir.

![Test your trigger step in Zapier](/img/admin/webhooks-list.png)Testiniz uğurlu olsa, spreadsheet-lərinizdən bəzi dəyərləri göstərən nəticə görməlisiniz. Davam etmək üçün "**Continue** " düymasına klikləyin.

![Successful trigger test showing spreadsheet values](/img/admin/webhooks-list.png)Növbəti addım, Ultimate Multisite-də hesab yaratmaq və ya qeydiyyatdan keçirmək üçün ikinci əməliyyəti qurmaqdır. Axtarış sahəsində "**Ultimate Multisite(2.0.2)** " seçin.

![Selecting Ultimate Multisite as the action app](/img/admin/webhooks-list.png)

"**Event** " sahəsi altında, "**Register an Account in Ultimate Multisite** " seçin və sonra "**Continue** " düymasına klikləyin.

![Register an Account in Ultimate Multisite action event](/img/admin/webhooks-list.png) "**Set up an action** " altında, müştəri məlumatları, üzvlüklər, məhsullar və s. üçün müxtəlif sahələr görəcəksiniz. Google Sheet-iniz altındakı dəyərləri əlaqələndirə və aşağıdakı skrinşotda göstərildiyi kimi, doldurulması lazım olan müvafiq sahələrə təyin edə bilərsiniz.

![Mapping Google Sheet values to Ultimate Multisite fields](/img/admin/webhooks-list.png)

Dəyərləri əlaqələndirdiyinizdən sonra, əməliyyəti test edə bilərsiniz.

![Testing the register account Zapier action](/img/admin/webhooks-list.png)
