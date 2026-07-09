---
title: Zapier vasitəsilə Account qeydiyyatdan keçirin
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Hadisə: Zapier vasitəsilə Account qeydiyyatı {#event-register-an-account-via-zapier}

[Ultimate Multisite-i Zapier ilə inteqrasiya etmək](zapier.md) məqaləsində trigger-lər və hadisələr əsasında Ultimate Multisite daxilində müxtəlif əməliyyatları yerinə yetirmək üçün Zapier-dən necə istifadə etməyi müzakirə etdik. Bu məqalədə 3-cü tərəf tətbiqlərini necə inteqrasiya edə biləcəyinizi göstərəcəyik. Məlumat mənbəyi kimi Google Sheets-dən istifadə edəcəyik və Account qeydiyyatı üçün məlumatı Ultimate Multisite-ə göndərəcəyik.

Zapier-i qoşmazdan əvvəl **Ultimate Multisite > Settings > API & Webhooks** bölməsinə keçin və API-nin aktiv olduğunu təsdiqləyin. Zapier Ultimate Multisite Account giriş məlumatlarını soruşduqda bu ekrandan API Key və API Secret-i kopyalayın.

![API Key, API Secret və Enable API seçimləri ilə API və Webhooks ayarları](/img/admin/settings-api-webhooks.png)

Əvvəlcə Google Drive altında **Google Sheet** yaratmalısınız. Hər sütunu düzgün təyin etdiyinizə əmin olun ki, daha sonra məlumatları asanlıqla xəritələyə biləsiniz.

Google sheet yaratdıqdan sonra Zapier account-unuza daxil olub zap yaratmağa başlaya bilərsiniz.

**"App event"** üçün axtarış sahəsində **"Google Sheets"** seçin


Sonra "**Event** " sahəsi üçün "**New spreadsheet row** " seçin və "**Continue** " düyməsinə basın

Növbəti addım sizdən **Google Sheet**-in saxlandığı **Google Account** seçməyinizi istəyəcək. Buna görə sadəcə düzgün google account-un göstərildiyinə əmin olun.


**"Set up trigger** " altında məlumatların gələcəyi google spreadsheet və worksheet-i seçib göstərməlisiniz. Sadəcə onları doldurun və "**Continue** " düyməsinə basın

Sonra google sheet-in düzgün qoşulduğuna əmin olmaq üçün "**test your trigger** " etməlisiniz.

Testiniz uğurlu olarsa, spreadsheets-lərinizdən bəzi dəyərləri göstərən nəticəni görməlisiniz. Davam etmək üçün "**Continue** " klikləyin.

Növbəti addım Ultimate Multisite-də Account yaradacaq və ya qeydiyyatdan keçirəcək ikinci əməliyyatı qurmaqdır. Axtarış sahəsində "**Ultimate Multisite(2.0.2)** " seçin


"**Event** " sahəsində "**Register an Account in Ultimate Multisite** " seçin, sonra "**Continue** " düyməsinə klikləyin.

"**Set up an action** " altında müştəri məlumatları, üzvlüklər, məhsullar və s. üçün mövcud olan müxtəlif sahələri görəcəksiniz. Google sheet-inizdəki dəyərləri xəritələyib onları aşağıdakı ekran görüntüsündə göstərildiyi kimi doldurulmalı olduqları düzgün sahəyə təyin edə bilərsiniz.


Dəyərləri xəritələdikdən sonra əməliyyatı test edə bilərsiniz.
