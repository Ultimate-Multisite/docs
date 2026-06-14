---
title: Плагин Билдер и Песочница
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0-da **Plugin Builder & Sandbox System**-i tanıtlanýar, bu sistem bilen siz AI asistanyňyz arkaly WordPress pluginlerini öz ulgamanyzda döredip, işlenip, dolandyrýar — ähli synanyp duran, izole edilmiş sandbox (test) mühitde.

## Umumy Barlag

Plugin Builder-iň ýardamda AI asistanyňyz gündelik dillerde soraglaryňize jogap bermek üçin özüniňçe WordPress pluginlerini ýazmagyny mümkinçilik berýär. Döredilen pluginler, olary hiç hili canlı sahypa işläp biljekden önce sandbox katmanynda barlanylýar, saklanýar we dolandyrylýar.

Ulgamlar şularda ulanylýar:

- Programma dizaýneriniň gatyşdyrmagy sebäpli, programmalara girmeksiz ýeňil pluginleri döretmek.
- WordPress hooklaryna ýa-da custom post types (custom post tipleri) gerek bolan funksiýalary prototiplemek.
- Toplu işlemleri üçin geçiji (kısa süreli) awtomatlaşdyrmak skriptlerini döretmek.

## AI arkaly Plugin Döretmek

Plugin döretmek üçin, Gratis AI Agent chat arhatyny açyň we size näme gerekdigini düşündiriň. Mysal üçin:

> "Dashboard-da custom admin habary (notice) goşýan plugin döredip ber."

AI şu işleri eder:

1. Strukturany düzgünleşdirilen kod bilen plugin PHP kodyny döredýär.
2. Çykyşy sintaks hatalary we howpsuz bolmasa ýatlaýan ulgamlar üçin barlap geçýar.
3. Döredilen plugin-i sandbox depozitoriňde saklaýar.
4. Plugin slug-i bilen we **Activate in Sandbox** düwmesi bilen dogrydyrmagy görkezýän tasdiq bildirişini geri berýär.

Dolandyrýandan öň, aynı söhbet sarynda netijäni has howa goýmak arkaly gowuslap bilersiňiz.

## Sandbox Dolandyrýar

Sandbox-da döredilen plugin dolandyrýan, onu canlı ulgamda dolandyrýandan başga zatdyr. Sandbox:

- Plugini izole edilmiş WordPress mühitinde (wp-env) işledir.
- Her hili PHP hatalaryny, ýazgylary we hook çakmalaryny saklaýar.
- Dolandyrýan netijini chat arhatynda bildirer.

Plugin-i sandbox-da dolandyrilmek üçin, AI chat jogabynyňdaky **Activate in Sandbox** düwmenine basyň ýa-da slash komandasyny ulanmaga mümkinçilik bar:

```
/activate-plugin <plugin-slug>
```

Статус сообщения подтверждает, что активация прошла успешно или не удалась. Если произошла ошибка, лог ошибки будет показан в чат-ветке.

## Справка сгенерированных плагинов

Сгенерированные плагины перечислены в **Gratis AI Agent → Plugin Builder → Manage Plugins**. На этом экране вы можете:

| Действие | Описание |
|---|---|
| **View source** (Посмотреть исходный код) | Проверить полный PHP-код плагина. |
| **Re-activate in sandbox** (Повторно активировать в песочнице) | Повторно запустить проверку активации в песочнице. |
| **Install on network** (Установить в сети) | Развернуть плагин на вашей рабочей сети (требуется ручное подтверждение). |
| **Update** (Обновить) | Предоставить новую версию через ИИ, заменив существующий код. |
| **Delete** (Удалить) | Удалить плагин из хранилища песочницы. Сначала деактивирует его на всех сайтах. |

:::warning
**Install on network** развертывает сгенерированный плагин на вашей рабочей сети WordPress multisite. Просмотрите код плагина перед продолжением. Gratis AI Agent запросит подтверждение перед завершением установки в реальной среде.
:::

## Установка сгенерированного плагина в сети

Когда вы довольны плагином в песочнице, вы можете установить его на живую сеть:

1. Перейдите в **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Нажмите **Install on Network** рядом с плагином, который вы хотите развернуть.
3. Подтвердите диалоговое окно. Плагин будет установлен в `wp-content/plugins/` и активирован в сети.

В качестве альтернативы, используйте команду слеша в интерфейсе чата:

```
/install-plugin <plugin-slug>
```

## Обновление плагинов

Чтобы обновить сгенерированный плагин, опишите изменение ассистенту ИИ в новом диалоге:

> "Обновите плагин dashboard-notice так, чтобы он показывал уведомления только администраторам."

ИИ создаст новую версию, которая появится в песочнице рядом с текущей версией. Вы просматриваете разницу (diff) и подтверждаете ее перед применением обновления.

## HookScanner Интеграция

Plugin Builder her bir oluşturulan eklentinin kaydettiği hook'ları ve filtreleri analiz etmek için entegre bir **HookScanner** kullanır. HookScanner çıktısı sohbet yanıtında gösterilir ve şunları içerir:

- Kaydedilmiş Action hook'ları (`add_action` çağrıları).
- Kaydedilmiş Filter hook'ları (`add_filter` çağrıları).
- Eklenti bağımlılıklarında bulunan herhangi bir hook ( `vendor/` ve `node_modules/` dizinleri atlanır).

Bu, bir eklentiyi etkinleştirmeden önce onun davranışını anlamanı sağlar.

## Güvenlik Hususları

- Oluşturulan eklentiler manuel olarak kurulan eklentilerden ayrı bir yerde saklanır ve bunları ağda açıkça kurmadığınız sürece standart WordPress eklenti yönetim ekranından erişilemezler.
- Sandbox, eklenti dosyaları yazılırken dizin geçişlerini önlemek için yol doğrulaması kullanır.
- Tehlikeli fonksiyon çağrılarına (örneğin, `eval`, `exec`, `system`) sahip eklentiler doğrulama sırasında işaretlenir ve etkinleştirilmezler.
