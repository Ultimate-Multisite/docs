---
title: Stripe-ийг тохируулах
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe Gateway-г тохируулах (v2) {#setting-up-the-stripe-gateway-v2}

_**МЭЦЭРЛЭТ: Энэ нийтлэл Ultimate Multisite 2.x хувилбарыг хэрэглэдэг.**_

Та төлбөрийн тохиргооны хуудсанд Stripe, Stripe Checkout, PayPal болон Мануал гэсэн хүртэлх дөрвөн төлбөрийн аргыг идэвхжүүлэх боломжтой. Энэ нийтлэлд бид **Stripe**-тэй хэрхэн холбогдохыг харъя.

## Stripe-ийг идэвхжүүлэх {#enabling-stripe}

Сайтны талбарт Stripe-ийг ашиглах боломжит төлбөрийн аргыг идэвхжүүлэхийн тулд **Ultimate Multisite > Settings > Payments** руу орж, Active Payment Gateways хэсэг дэх **Stripe** эсвэл **Stripe Checkout**-ийн хажууд байгаа товчийг тэмдэглээр тавьна.

![Active payment gateways-д Stripe идэвхжүүлэх](/img/config/settings-payment-gateways.png)

### Stripe ба Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Энэ арга нь төлбөрийн үед кредит картны дугаар оруулмагч зай тавьдаг.

![Checkout үеийн Stripe-ийн inline кредит карт талбар](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Энэ арга нь төлбөрийн үед хэрэглэгчийг Stripe Checkout хуудас руу чиглүүлдэг.

![Checkout үеийн Stripe Checkout редирект хуудас](/img/config/settings-payment-gateways.png)

Stripe API key-г авах

Stripe төлбөрийн аргыг идэвхжүүлсний дараа та **Stripe Publishable Key** болон **Stripe Secret Key**-ийн талбаруудыг дүүргэх шаардлагатай болно. Үүнийг Stripe аккаунтанд логин хийх замаар авах боломжтой.

_**Тайлбар:** Төлбөрийн арга ажиллаж байгаа эсэхийг шалгахын тулд та **Sandbox mode**-ийг идэвхжүүлэх боломжтой._

![Stripe API key талбарууд ба sandbox mode товчлуур](/img/config/settings-payment-gateways.png)

Таны Stripe dashboard дээр зүүн дээд буланд байгаа **Developers**-ийг дарж, дараа нь зүүн менюнд байгаа **API Keys** руу орно.

![Stripe dashboard Developers хэсэг ба API Keys](/img/config/settings-payment-gateways.png)

Та эндээс та **Test Data** (танай үйлдвэрлэл дээр интеграц ажиллаж байгаа эсэхийг шалгахын тулд) ашиглах эсэхийг сонгож болно, эсвэл ашиглахгүй байх. Үүнийг өөрчлөхөд **Viewing test data** товчийг уншаарай (toggle).

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

**Publishable key** болон **Secret key** -ээс утгыг **Token** баганын цэснээс хуулж аваад, Ultimate Multisite Stripe Gateway-ийн соответствующие талбаруудад зүүж (paste) оруулаарай. Дараа нь өөрчлөлтийг **Save Changes** дарна уу.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Stripe Webhook тохируулах {#setting-up-stripe-webhook}

Stripe нь таны **stripe account** дээр ямар нэгэн үйлдэл гарвал Ultimate Multisite-д мэдэгдэх webhook events илгээдэг.

**Developers** руу орж, зүүн чиглэлийн цэснээс **Webhooks** элементийг сонгоорой. Дараа нь баруун талд байгаа **Add endpoint**-ийг дарна *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Та **Endpoint URL** хэрэгтэй *.* Ultimate Multisite нь **Ultimate Multisite Stripe Gateway** хэсгийн доорх **Webhook Listener URL** талбарын шууд доор автоматаар endpoint URL-ийг үүсгэдэг бөгөөд та үүнийг олж үзэх боломжтой.

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

Endpoint URL-ийг **Copy** хийгээд Stripe-ийн **Endpoint URL** талбарт **paste** хийгээрэй.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Дараа нь **Event**-ийг сонгох хэрэгтэй *.* Энэ сонголтын дотор, та зүгээр л **Select all events** (бүгдийг сонгох) хайрцагт тэмдэглэгээ хийгээд **Add events**-ийг дарна. Дараа нь өөрчлөлтийг хадгалахын тулд **Add Endpoint**-ийг дарна.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Энэ бол таны Stripe төлбөрийн интеграц дууссан гэсэн үг!
