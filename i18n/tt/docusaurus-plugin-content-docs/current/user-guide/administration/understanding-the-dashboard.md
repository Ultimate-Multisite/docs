---
title: Панельканы түшмүчеләрне аңлау
sidebar_position: 7
_i18n_hash: 4869a2f03eb529c49c821a22eb6b9647
---
# Ultimate Multisite Paneli Anlaması {#understanding-the-ultimate-multisite-dashboard}

Ultimate Multisite'ın daha gelişmiş yapılandırma seçeneklerine ve Ultimate Multisite'ın çalışma yönlerine dalmadan önce, paneli inceleyelim.

WordPress eklentilerinin çoğu gibi, Ultimate Multisite **Ultimate Multisite** başlıklı bir ağ düzeyinde menü girişi oluşturur ve bunun altında birkaç alt menü girişi bulunur.

## Ağ Paneli Widget'ları {#network-dashboard-widgets}

Ultimate Multisite, ağ düzeyindeki panele birkaç kullanışlı widget ekler. Bu paneli **My Sites → Network Admin → Dashboard** yolunu izleyerek bulabilirsiniz. Widget'lar, ağ yöneticisine bilgiye ve yaygın işlemlere kolay erişim sağlamak için tasarlanmıştır.

![Ultimate Multisite widget'ları ile Ağ Paneli](/img/admin/network-dashboard-full.png)

### İlk Adımlar {#first-steps}

![İlk Adımlar widget'ı](/img/admin/network-dashboard-first-steps.png)

Bu widget, Ultimate Multisite'ın yeni bir kurulumunda görünür ve ağ yöneticisini ödeme yöntemini yapılandırma ve test hesabı oluşturma gibi ek görevleri tamamlaması konusunda hatırlatır.

### Özet {#summary}

![Özet widget'ı](/img/admin/network-dashboard-summary.png)

Özet widget'ı gün içindeki kayıt sayılarını ve bu kayıtlardan elde edilen geliri raporlar. MRR (Aylık Tekrarlayan Gelir), gelir getiren üyeliklere sahip müşteriler genelinde beklenen toplam tutarı gösterir.

### Aktivite Akışı {#activity-stream}

![Aktivite Akışı widget'ı](/img/admin/network-dashboard-activity-stream.png)

Bu widget, Ultimate Multisite genelindeki olayları raporlar. Olaylar arasında kayıtlar, iptaller, site oluşturmalar, silinmeler ve diğer aktiviteler bulunur.

Daha ayrıntılı bir açıklama için lütfen dokümantasyonun Olaylar (Events) bölümüne bakın.

### Şu Anda {#right-now}

![Şu Anda widget'ı](/img/admin/network-dashboard-right-now.png)

Этот утилитарный виджет показывает краткую сводку пользователей и сайтов в вашей сети. Удобные ярлыки вверху позволяют одним кликом создавать новые сайты или пользователей.

### Новости и обсуждения {#news-and-discussions}

![News and Discussions widget](/img/admin/network-dashboard-news.png)

Этот виджет получает и отображает последние новости Ultimate Multisite. Следите за этим виджетом, чтобы получать информацию об обновлениях, критических ошибках и исправлениях безопасности.

## Панель управления Ultimate Multisite {#ultimate-multisite-dashboard}

В то время как панель уровня сети показывает полную информацию о сети, панель управления Ultimate Multisite (расположенная в верхней части меню Ultimate Multisite) предоставляет информацию о самом сервисе.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

### Рост ежемесячного повторяющегося дохода (MRR) {#monthly-recurring-revenue-growth}

График MRR показывает ежемесячную разбивку доходов за 12-месячный календарный период.

![MRR Growth chart](/img/admin/um-dashboard-mrr.png)

Новые доходы отслеживаются синим цветом, а отмены отражаются красным.

### Поддержка диапазонов дат {#date-range-support}

В зависимости от количества клиентов и активности статистика может стать слишком большой. Поддержка диапазонов дат, встроенная в панель управления, позволяет администратору сети сосредоточиться только на нужной информации и временном периоде.

![Date range selector and stats](/img/admin/um-dashboard-date-range.png)

Диапазон дат определяет период информации, отображаемой виджетами ниже, включая доходы, новые подписки, регистрации по странам, регистрации по формам и самые посещаемые сайты.

![Dashboard statistics widgets](/img/admin/um-dashboard-stats.png)

:::tip
Чтобы сделать виджет **Самые посещаемые сайты** рабочим, включите подсчет посещений в **Ultimate Multisite → Настройки → Сайты → Включить ограничение и подсчет посещений**.
:::
