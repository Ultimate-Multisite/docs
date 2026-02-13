---
title: Интеграция Zapier
sidebar_position: 12
_i18n_hash: cf4bbd6dfae0fa99b3d009298cad3f19
---
# Интеграция Ultimate Multisite с Zapier

В одной из статей мы обсуждали [Webhooks](webhooks.md) и то, как они могут использоваться для интеграции с сторонними приложениями.  
Использование вебхуков немного сложно, поскольку требует продвинутых знаний в кодировании и обработке полезных нагрузок. Использование **Zapier** позволяет обойти это.  
Zapier имеет интеграцию с более чем 5000 приложений, что облегчает коммуникацию между различными приложениями.  
Вы можете создавать **Triggers**, которые срабатывают, когда на вашей сети происходят события (например, создаётся аккаунт и запускается событие account_create), или генерировать **Actions** в вашей сети, реагируя на внешние события (например, создать новое членство аккаунта в вашей сети Ultimate Multisite).  
Это возможно благодаря тому, что **Ultimate Multisite Zapier's triggers** и actions работают на основе [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Как начать

Сначала найдите Ultimate Multisite в списке приложений Zapier. В качестве альтернативы вы можете перейти по [этой ссылке](https://zapier.com/apps/wp-ultimo/integrations).  
Перейдите на свою панель управления и нажмите кнопку **+** **Create Zap** в левой боковой панели, чтобы настроить новый Zap.  

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Вы будете перенаправлены на страницу создания Zap.  

В поле поиска введите «wp ultimo». Нажмите, чтобы выбрать вариант **Beta**.  

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

После выбора нашего приложения выберите доступное событие: **New Ultimate Multisite Event**.  

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Теперь нам нужно предоставить Zapier доступ к **вашей сети**. Нажатие на **Sign in** откроет новое окно, требующее **API credentials**.  

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

Перейдите в панель администратора вашей сети и откройте **Ultimate Multisite > Settings** > **API & Webhooks**, затем найдите раздел API Settings.  

Выберите опцию **Enable API**, так как она необходима для работы этого соединения.  

![API Settings with Enable API option in Ultimate Multisite](/img/admin/webhooks-list.png)

Используйте значок **Copy to Clipboard** в полях API Key и API Secret и вставьте эти значения на экране интеграции.  

В поле URL укажите полный URL вашей сети, включая протокол (HTTP или HTTPS).  

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

Нажмите кнопку **Yes, Continue**, чтобы перейти к следующему шагу. Если всё прошло успешно, вы увидите сообщение о новом подключённом аккаунте! Нажмите **Continue**, чтобы создать новый триггер.  

## Как создать новый Trigger

Теперь, когда ваш аккаунт подключён, вы можете увидеть доступные события. Выберите событие **payment_received** для этого руководства.  

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

После выбора события и нажатия **continue** появится **test step**.  

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

На этом этапе Zapier проверит, может ли ваш Zap **получить конкретную полезную нагрузку для этого события**. В будущих событиях того же типа будет отправлена информация с той же структурой.  

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

В нашем руководстве тест был **успешно завершён** и вернул пример полезной нагрузки. Эта примерная информация будет полезна при создании действий. Ваш триггер теперь создан и готов к подключению к другим приложениям.  

## Как создать Actions

Actions используют информацию из других триггеров для создания новых записей в вашей сети.  

В шаге **creating an action** вы выберете Ultimate Multisite **Beta** и опцию **Create Items on Ultimate Multisite**.  

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

На следующем шаге вы либо создадите свою аутентификацию, как мы делали в разделе **How to start**, либо выберете уже созданную аутентификацию. В этом руководстве мы выберем ту же аутентификацию, созданную ранее.  

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Настройка Action

Это **основной шаг действия**, и здесь всё немного иначе. Первая информация, которую вы выберете, — это **Item**. Item — это **информационная модель** вашей сети, такая как **Customers, Payments, Sites, Emails** и другие.  

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

При выборе элемента форма **перестраивается**, чтобы показать обязательные и необязательные поля для выбранного элемента.  

Например, при выборе элемента **Customer** поля формы покажут всё, что необходимо заполнить для создания нового Customer в сети.  

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

После заполнения всех полей, отмеченных как **required**, и нажатия **continue**, последний экран покажет заполненные поля и те, которые остались пустыми.  

![Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

Как только ваш тест завершится успешно, ваше действие будет настроено. Также важно проверить в вашей сети, был ли создан элемент после теста вашего действия.
