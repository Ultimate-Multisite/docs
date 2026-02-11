---
title: Регистрация аккаунта через Zapier
sidebar_position: 1
_i18n_hash: b77221f8098a0280ce78f481e328f9af
---
# Событие: Регистрация аккаунта через Zapier

В статье [Интеграция Ultimate Multisite с Zapier](zapier.md) мы обсудили, как использовать Zapier для выполнения различных действий в Ultimate Multisite на основе триггеров и событий. В этой статье мы покажем, как можно интегрировать сторонние приложения. Мы будем использовать Google Sheets в качестве источника данных и отправлять информацию в Ultimate Multisite для регистрации аккаунта.

Сначала вам нужно создать **Google Sheet** в вашем Google Drive. Убедитесь, что вы правильно определили каждый столбец, чтобы позже было легко сопоставлять данные.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-7wnYotvYtO.png)После создания Google Sheet вы можете войти в свой аккаунт Zapier и начать создавать zap.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-C0khOzCSCF.png)В поле поиска для **"App event"** выберите **"Google Sheets"**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Cj2rk0zpOO.png)

Затем в поле **"Event"** выберите **"New spreadsheet row"** и нажмите **"Continue"**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Y6z9NX6HAn.png)Следующий шаг попросит вас выбрать **Google Account**, в котором сохранён **Google Sheet**. Убедитесь, что указан правильный аккаунт Google.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-536o0FgLI1.png)В разделе **"Set up trigger"** вам нужно выбрать и указать таблицу Google и лист, которые вы будете использовать, откуда будут поступать данные. Просто заполните их и нажмите **"Continue"**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4juCX9m6M2.png)Далее нужно **"test your trigger"**, чтобы убедиться, что ваш Google Sheet правильно подключён.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-E1RjprMVNM.png)Если тест прошёл успешно, вы увидите результат с некоторыми значениями из ваших таблиц. Нажмите **"Continue"**, чтобы продолжить.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FNVMJRdoBs.png)Следующий шаг — настроить второе действие, которое создаст или зарегистрирует аккаунт в Ultimate Multisite. В поле поиска выберите **"Ultimate Multisite(2.0.2)"**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-bbSevglDSJ.png)

В поле **"Event"** выберите **"Register an Account in Ultimate Multisite"** и нажмите кнопку **"Continue"**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-DZTN6Hno0w.png)В разделе **"Set up an action"** вы увидите различные поля для данных клиента, членства, продуктов и т.д. Вы можете сопоставить значения из вашего Google Sheet и назначить их соответствующим полям, как показано на скриншоте ниже.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-c1ozo05Uam.png)После сопоставления значений вы можете протестировать действие.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UKI9kdBjIc.png)
