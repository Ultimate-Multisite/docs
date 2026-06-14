---
title: Тезиләрне сураулар
sidebar_position: 18
_i18n_hash: 2aae003605ca306aebc782d92f605d7c
---
# Sıkça Sorulan Sorular

Bu, destek talepleri sırasında sıkça karşılaşılan bazı **Sıkça Sorulan Sorulardır**.

  * **Ultimate Multisite nedir?**

Ultimate Multisite, WordPress multisite kurulumları için yapılmış bir WordPress eklentisidir. Bu eklenti, WordPress kurulumunuzu [WordPress.com](https://WordPress.com) gibi premium siteler ağına dönüştürerek müşterilerin aylık, üç aylık veya yıllık ücretlerle site oluşturmasına olanak tanır (Ayrıca Ücretsiz planlar da oluşturabilirsiniz).

  * **Ultimate Multisite Multisite olmadan çalışır mı?**

Hayır. Ultimate Multisite WordPress multisite, alt dizin (subdirectory) veya alt alan adı (subdomain) gerektirir.

  * **Ultimate Multisite için gereksinimler nelerdir?**

Ultimate Multisite şunları gerektirir:

**WordPress Sürümü** : v5.3+ (Önerilen: En Son Kararlı Sürüm)
**PHP Sürümü** : 7.4.x (8.0'dan sonrası yakında desteklenecek)
**MySQL Sürümü** : v5+ (Önerilen: Eğer hosting sağlayıcınızda 8.0 yoksa, sürüm 5.6)

_Multisite (alt alan adı veya alt dizin) de etkinleştirilmiş olmalıdır._ [WordPress Multisite Nasıl Kurulur](/user-guide/getting-started/how-to-install-wordpress-multisite).

  * **Ultimate Multisite, Alt Dizinli Multisite ile çalışır mı?**

Evet. Ultimate Multisite hem alt dizin kurulumlarını hem de alt dizin kurulumlarını destekler.

  * **Ultimate Multisite, Alt Alan Adlı Multisite ile çalışır mı?**

Evet. Ultimate Multisite hem alt dizin kurulumlarını hem de alt alan adı kurulumlarını destekler.

  * **Kullanıcıların hangi Eklentileri ve Temaları kullanabileceğini sınırlamak için Ultimate Multisite'ı kullanabilir miyim?**

Evet. Ultimate Multisite ile ağınızdaki her plan için hangi eklentilerin ve temaların mevcut olacağını seçebilirsiniz.

  * **Ultimate Multisite, bir kullanıcının kendi sitesinde oluşturabileceği gönderi sayısını sınırlamak için kullanılabilir mi?**

Да, с Ultimate Multisite вы можете установить квоты на посты для **какого-либо типа поста** на всей вашей сети. Вы также можете ограничить количество пользователей, которых может пригласить администратор, **объем дискового пространства** и многое другое.

  * **Поддерживает ли Ultimate Multisite Шаблоны сайтов (Site Templates)?**

Да. С Ultimate Multisite вы можете создавать столько Шаблонов сайтов, сколько вам нужно. Шаблоны сайтов — это не темы, а обычные сайты в вашей сети. Вы можете активировать плагины, темы и настраивать этот Шаблон сайта любым удобным способом. Если пользователь выбирает этот шаблон, его сайт будет создан как копия этого шаблона со всеми настройками.

Вы также можете установить определенный шаблон для тарифа (плана). Сделав это, каждый пользователь, который подпишется на этот план, получит свой сайт в виде дубликата этого Шаблона сайта.

  * **Интегрируется ли Ultimate Multisite с WooCommerce?**

Да!

Если вы хотите, чтобы пользователи вашей сети имели доступ к WooCommerce для создания магазинов, это возможно с помощью Ultimate Multisite. Вы даже можете ограничить количество продуктов, которые ваши клиенты смогут создать на каждом уровне тарифа (плана).

Что касается подписок для Ultimate Multisite, вы можете использовать [Ultimate Multisite: WooCommerce Integration Add-on](https://ultimatemultisite.com/addons/wp-ultimo-woocommerce/), чтобы разрешить вашим клиентам Ultimate Multisite платить с помощью платежных шлюзов WooCommerce на вашем основном сайте. Таким образом, вы сможете воспользоваться огромной библиотекой платежных шлюзов, разработанных для WooCommerce, и использовать их для выставления счетов вашим клиентам Ultimate Multisite.

  * **Есть ли способ мигрировать подписки с WPMUDEV Pro Sites?**

Да, Ultimate Multisite теперь предлагает вам [полезный инструмент для миграции](https://ultimatemultisite.com/addons/wp-ultimo-pro-sites-migrator/) вашей сети Pro Sites.

  * **Почему вкладка «Разрешенные плагины» пуста на странице редактирования Плана?**

Ultimate Multisite позволяет разрешать или запрещать доступ к плагинам, которые не активированы в вашей сети. Когда плагин активирован в сети, по своей сути он будет загружаться по умолчанию на каждом сайте вашей сети.

Если вы не видите никаких плагинов во вкладке «Разрешенные плагины», проверьте, активен ли нужный вам плагин в сети или нет.

  * **Могу ли я использовать свой собственный дизайн таблицы цен?**

Да. С версии 1.4.0 Ultimate Multisite поддерживает переопределение шаблонов (template overrides).

  * **Работает ли Ultimate Multisite с WP Engine?**

Да. Ultimate Multisite всегда поддерживался WP Engine, но для того чтобы настройка доменного отображения работала, требовались дополнительные ручные шаги от администратора (добавление домена в панель WP Engine). **Это больше не актуально с версии 1.6.0.** Ultimate Multisite напрямую интегрируется с API WP Engine, и домены добавляются в панель автоматически после настройки отображения.

  * **Какой хостинг-провайдер вы рекомендуете?**

Ultimate Multisite должен работать с любым хостинг-провайдером. Единственное отличие в том, что у некоторых хостинг-компаний, таких как Closte, Serverpilot, WPMUDEV, WP Engine, Cloudways, Gridpane и [Runcloud.io](http://Runcloud.io), более тесная интеграция для настроек доменного отображения, поэтому они работают "из коробки". Для других хостингов вам может потребоваться настроить отображение домена вручную.
