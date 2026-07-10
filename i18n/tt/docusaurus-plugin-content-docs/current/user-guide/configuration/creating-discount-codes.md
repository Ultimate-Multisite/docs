---
title: Скидка кодоlarını oluşturma
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Скидка кодов oluşturma (v2) {#creating-discount-codes-v2}

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite sürüm 2.x'i referans almaktadır.**_

Ultimate Multisite ile müşterilerin aboneliklerine indirim vermek için indirim kodları oluşturabilirsiniz. Ve bunları oluşturmak çok kolay!

## İndirim Kodu Oluşturma ve Düzenleme {#creating-and-editing-discount-codes}

Bir indirim kodu oluşturmak veya düzenlemek için **Ultimate Multisite > Discount Codes** bölümüne gidin.

![İndirim kodları listesi — herhangi bir kod bulunmadan önceki boş durum](/img/config/discount-codes-empty.png)

Orada daha önce oluşturduğunuz indirim kodlarının bir listesini göreceksiniz.

Yeni bir kupon oluşturmak için **Add Discount Code** (İndirim Kodu Ekle) butonuna tıklayabilir veya üzerlerine gelip **Edit** (Düzenle) diyerek mevcut olanları düzenleyebilirsiniz.

![Üzerinde Edit ve Delete bağlantılarını gösteren fareyle üzerine gelme eylemleriyle indirim kodları listesi](/img/config/discount-codes-list-hover.png)

![Sayfa başlığındaki İndirim Kodu Ekle butonu](/img/config/discount-codes-add-button.png)

Kupon kodunu oluşturacağınız veya düzenleyeceğiniz sayfaya yönlendirileceksiniz. Bu örnekte yenisini oluşturalım.

![Tüm bölümleri görünen indirim kodu düzenleme sayfası](/img/config/discount-code-edit.png)

Burada mevcut olan ayarları inceleyelim:

**Enter Discount Code (İndirim Kodu Girin):** Bu, sadece indirim kodunuzun adıdır. Müşterilerinizin ödeme formunda kullanması gereken kod bu değildir.

**Description (Açıklama):** Burada bu kuponun ne için olduğunu kısaca açıklayabilirsiniz.

![Düzenleme sayfasının üst kısmındaki indirim kodu adı ve açıklama alanları](/img/config/discount-code-description.png)

İndirim kodunu aktif veya pasif olarak da görebilirsiniz:

![İndirim kodu aktif durumu](/img/config/discount-code-active.png)

**Coupon code (Kupon Kodu):** Müşterilerin ödeme sırasında girmesi gereken kodu burada tanımlarsınız.

![Купон кода поле, куда клиенты код на кассе вводят](/img/config/discount-code-coupon-field.png)

**Скидка:** Здесь вы можете установить либо **процент**, либо **фиксированную сумму** для вашего промокода.

![Настройка суммы скидки с выбором процента или фиксированной суммы](/img/config/discount-code-amount.png)

**Применять на продления:** Если этот пункт отключен, этот промокод будет применяться только к **первому платежу**. Все остальные платежи не будут иметь скидку. Если этот пункт включен, промокод будет действителен для всех будущих платежей.

**Скидка на плату за настройку (Setup fee discount):** Если этот пункт отключен, купон код **не даст никакой скидки на плату за настройку** заказа. Если этот пункт включен, вы можете установить скидку (процент или фиксированная сумма), которая будет применяться к плате за настройку ваших планов.

![Параметры переключения для применения на продления и скидки на плату за настройку](/img/config/discount-code-renewals.png)

**Активный:** Вручную активировать или деактивировать этот промокод.

![Переключатель активности для ручной активации или деактивации промокода](/img/config/discount-code-active.png)

В разделе **Дополнительные параметры (Advanced Options)** у нас есть следующие настройки:

![Расширенные настройки промокода](/img/config/discount-code-advanced.png)

**Ограничение использования:**

  * **Использование (Uses):** Здесь вы можете увидеть, сколько раз был использован этот промокод.

  * **Максимальное количество использований (Max uses):** Это ограничит количество раз, которое пользователи могут использовать этот промокод. Например, если вы поставите здесь 10, купон можно будет использовать только 10 раз. После этого лимита промокод больше не сможет использоваться.

![Настройка ограничения использования с текущим количеством использований и максимальным количеством](/img/config/discount-code-limit-uses.png)

**Баштау һәм сорау карары:** Бу жердә купонга башлану तारीхын һәм/яки сорау карары तारीхын күтәрү мөмкинлеклеген аласыз.

![Сырткы һәм сорау карары тасвирләре](/img/config/discount-code-dates.png)

**Җиләкләрне сыйлану:** **Select products** (Җиләкләрне сыйлану) ничәсе күтәрергә тиеш дисезме, буны күченәгез. Буны күченәргә килмәдегез, барлык продуктлар күрсәтелә. Бу купон коды белән кайсы продуктлар кабул итеп яса аларга, вруалый (күченәргә һәм күченәмиргә) күченәсез. Бу жердә күченә булган продуктларга милекләр бу авылны исәпкә алмый.

![Продуктлар сыйлану бөтенләп күченәләр белән тасвирләре](/img/config/discount-code-limit-products.png)

Бу барлык мөмкинлекләрне куллап чыгыгыз, купонны саклый өчен **Save Discount Code** (Купонны саклый) нче кликләүлеге белән купонны саклагыз һәм бу бит!

![Сырткы карары саклау батырлары редакция səгасының астында](/img/config/discount-code-save.png)

Купон теперь сызылыча лайкләреңдә һәм утырып, аның **edit** (редакция) итеп ясаргане һәм **delete** (өчкән) мөмкинлекләре бар.

![Лайкләр списындагы купон катысы редакция һәм өчкән әселәр белән тасвирләре](/img/config/discount-codes-list-hover.png)

###

### URL параметрлерен куллану: {#using-url-parameters}

Галапчыгылараңар карары таблицаларыгызны ясарга, веб-сайтыгыз өчен зур купон код катысы ясарга һәм чекаут формагызга автомат түгел купон коды күтәрүне кабул итү өчен URL параметрлере белән булырга мөмкин.

Аллэрте, плангыз өчен сырткы лайк (shareable link) алу мөмкинлекләрең бар. Буны ясау өчен **Ultimate Multisite > Products**-ына китәгез һәм планны танлыйсыз.

**Click to Copy Shareable Link** (Сырткы лайкны көчрү өчен кликләү) батырына кликләүлеге белән бу авыллар өчен сырткы лайк аласыз. Минең чегарендә, булган сырткы лайк [_**mynetworkdomain.com/register/premium/**_ була._

![Сырткы лайк батыры бар продукт катысы](/img/config/products-list.png)

Скидку на этот конкретный план применить, просто добавьте параметр **?discount_code=XXX** в URL. Где **XXX** — это ваш промокод.

В нашем примере мы применим промокод **50OFF** к этому конкретному продукту.

URL для этого конкретного плана с примененным промокодом 50OFF будет выглядеть так: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.
