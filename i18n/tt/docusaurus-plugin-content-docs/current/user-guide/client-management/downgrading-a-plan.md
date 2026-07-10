---
title: Планны төмрәкләштерү
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Плананыни (v2) {#downgrading-a-plan-v2}

_**ВАЖНОЕ ПРИМЕЧАНИЕ: Эта статья относится к Ultimate Multisite версии 2.x.**_

Понижение плана или подписки — это обычное действие, которое ваши клиенты могут совершить, если у них ограниченный бюджет или они решили, что им не понадобятся много ресурсов для работы их сабсайта.

## Как понизить план {#how-to-downgrade-a-plan}

Ваши клиенты могут понизить свой план в любое время, войдя в административную панель своего сабсайта и нажав **Change** (Изменить) в разделе своей учетной записи.

![Страница учетной записи с вашей картой членства и кнопкой Change](/img/account-page/membership-change-button.png)

После нажатия кнопки **Change**, пользователь/клиент будет перенаправлен на страницу оформления заказа, где сможет выбрать план, на который он хочет изменить свою подписку.

![Страница с опциями понижения плана со стороны клиента](/img/account-page/downgrade-picker.png)

В этом примере мы понижаем план с **Premium** (Премиум) до **Free** (Бесплатный).

Чтобы продолжить, пользователю нужно просто нажать кнопку **Complete Checkout** (Завершить оформление заказа). Затем он вернется на страницу учетной записи, где будет отображено сообщение о предстоящем изменении членства. Изменения вступят в силу на **следующем платежном цикле** клиента.

![Страница учетной записи с баннером о предстоящем изменении членства](/img/account-page/pending-change.png)

### Что происходит, когда пользователь понижает свой план {#what-happens-when-a-user-downgrades-their-plan}

Важно отметить, что понижение плана не меняет существующую конфигурацию в сабсайте пользователя.

Это не меняет шаблон сайта автоматически, так как смена шаблона полностью удалит и сбросит сабсайт. Это делается для того, чтобы избежать ненужной потери данных. Таким образом, место на диске, темы, плагины и т.д. останутся нетронутыми, кроме записей (постов).

Biz anladık ki ana endişeniz her bir planda belirlediğiniz limitler ve kotalar olacak, ancak eğer herhangi bir yapılandırmayı silerseniz veya değiştirirseniz bu durum kullanıcının alt sitesine ne gibi zararlar verebileceğini de göz önünde bulundurmamız gerekiyor.

Planın belirlediği limiti aşan gönderiler için size 3 farklı seçenek sunuyoruz: **Gönderileri olduğu gibi tutun** *,* **Gönderileri çöp kutusuna taşıyın** *,* veya **Gönderileri taslak olarak taşıyın** *. Bunu Ultimate Multisite ayarlarından yapılandırabilirsiniz.

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### Ödemeler ne olacak? {#what-happens-to-the-payment}

2.0 sürümünde, prorsiyonlama (proration) açısından ödeme konusunda artık herhangi bir ayarlama yapmanıza gerek kalmıyor.

Bunun nedeni, sistemin mevcut üyeliğin faturalandırma döngüsünü **tamamlamasını bekleyip** yeni planın/üyeliğin etkili olmasını sağlamasıdır. Yeni üyelik için belirlenen ödeme miktarı otomatik olarak bir sonraki faturalandırma döngüsünde uygulanacak ve ücretlendirilecektir.
