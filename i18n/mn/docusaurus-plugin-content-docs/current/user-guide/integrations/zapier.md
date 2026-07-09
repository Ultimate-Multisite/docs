---
title: Zapier Интеграци
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ultimate Multisite-и Zapier-игүүдийг нэгтгэх {#integrating-ultimate-multisite-with-zapier}

Нэг нийтлэлд бид [Webhooks](webhooks.md)-ыг хэрхэн гуравдагч талын аппликейшнүүдтэй холбоход ашиглаж болох тухай ярьсан.

Webhooks ашиглах нь код бичих, payload-ийг барих зэрэг дэвшилтэт мэдлэг шаарддаг тул бага зэрэг төвөгтэй байдаг. **Zapier** ашиглах нь үүнийг хялбар болгох арга юм.

Zapier нь 5000 гаруй аппликейшнтэй холбоотой бөгөөд энэ нь өөр өөр аппликейшнүүдийн хоорондох харилцааг асуудалгүй болгодог.

Та **Triggers** (Үйлдэл эхлэх тохиолдол) үүсгэх боломжтой бөгөөд энэ нь таны сүлжээнд ямар нэгэн үйл явдал гарсан үед ажиллана (жишээлбэл, хэрэглэгч бүрт бүртгэл хийгдэхэд `account_create` үйлдэл эхлэх) эсвэл гадаад үйл явдлуудад хариу үзүүлэх **Actions** (Үр дүнгийн үйлдлүүд)-ийг үүсгэж болно (жишээлбэл, Ultimate Multisite сүлжээнд шинэ гишүүн тавих).

Энэ боломжтой учир нь **Ultimate Multisite Zapier-ийн triggers** ба actions [REST API](https://developer.ultimatemultisite.com/api/docs/) -аар ажилладаг.

## Хэрхэн эхлэх вэ {#how-to-start}

Эхлээд Zapier аппликейшн жагсаалтаас Ultimate Multisite-ыг хайгаарай. Эсвэл [энэ линк](https://zapier.com/apps/wp-ultimo/integrations)-аар ч хийж болно.

Dashboard руу орж, зүүн талын талбарт байгаа **+** **Create Zap** товчийг дарж шинэ Zap-ийг тохируулаарай.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Та Zap үүсгэх хууд руу чиглэгдэх болно.

Хайлт хийх санд "wp ultimo" гэж бичээд, **Beta** хувилбарыг сонгох сонголтыг дарна уу.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

Бидний аппликейшнийг сонгосны дараа боломжит үйл явдалыг, өөр болгож байгаа **New Ultimate Multisite Event**-ийг сонгоно.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Одоо бид Zapier-т **танай сүлжээнд** хандах эрх олгох хэрэгтэй. **Sign in** дээр дарвал **API credentials** шаарддаг шинэ цонх нээгдэх болно.

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

Таны сүлжээний администратор хяналтын тавцан руу орж, **Ultimate Multisite > Settings** > **API & Webhooks** руу очиж, API Settings хэсгийг харна уу.

Энэ холболт ажиллахын тулд **Enable API** (API-г идэвхжүүлэх) сонголтыг сонгоно.

![API and Webhooks settings with API Settings and Enable API options](/img/admin/settings-api-webhooks.png)

API Key болон API Secret талбаруудын дээрх **Copy to Clipboard** (Хуртлагч руу хуулна) иконтыг ашиглан тэдгээрийн утгыг integration screen дээрээ хийж оруулаарай.

URL талбарт нь протокол (HTTP эсвэл HTTPS)-ийг багтаасан сүлжээний бүрэн URL-ийг оруулна уу.

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

Дараагийн алхам руу шилжихээр **Yes, Continue** (Тийм, үргэлжлүүлэх) товчийг дарна уу. Хэрэв бүх зүйл зөв ажиллавал таны шинэ холбогдсон аккаунт тань таныг угтана! Шинэ trigger-ийг үүсүүлэхийн тулд **Continue** (Үргэлжлүүлэх) дээр дарна уу.

## Шинэ Trigger (Урьдчилсан тохиолдол) үүсгэх арга {#how-to-create-a-new-trigger}

Аккаунт холбогдсон бол та боломжит events-ийг харах боломжтой болно. Энэ тусламжийн зорилгоор бид **payment_received** (өвлөгдсөн төлбөр) event-ийг сонгоё.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

Event-ийг сонгоод, **continue** (Үргэлжлүүлэх) дээр дарвал **test step** (тест алхам) гарч ирнэ.

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

Энэ үе шатанд Zapier таны Zap тухайн event руу **тодорхой payload-г олох боломжтой эсэхийг** шалгана. Ижил төрлийн ирээдүйн events-д энэ ижил бүтэцтэй мэдээлэл илгээгдэнэ.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

Бидний туслах дахь тест **амжилттай дууссан** бөгөөд payload-ийн жишээ мэдээллийг буцаасан. Энэ жишээ мэдээлэл нь бид үйлдлүүдийг үүсгэх явцад чиглүүлэхэд туслах болно. Таны trigger одоо үүсгэгдсэн бөгөөд бусад аппликейшнүүдтэй холбогдох боломжтой.

## Action-ыг хэрхэн үүсгэх вэ? {#how-to-create-actions}

Action нь бусад trigger-ээс мэдээллийг ашиглан таны сүлжээнд шинэ оролт (entry) үүсгэдэг.

**Action step үүсгэх** үед та Ultimate Multisite **Beta**-г сонгож, **Create Items on Ultimate Multisite** оптийг сонгоно.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Дараагийн алхамд та эсвэл **How to start** дээр хийсэн шиг өөрийн аутентификацийг үүсгэх эсвэл аль хэдийн үүссэн аутентификацийг сонгоно. Энэ туслах дахь бид өмнө нь үүсгэсэн ижил аутентификацийг сонгоно.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Action-ыг тохируулах {#setting-up-the-action}

Энэ бол **action-ын үндсэн алхам** бөгөөд энд зүйлс бага зэрэг өөр байдаг. Эхний мэдээлэл нь **Item** (Оролт/Төлөв)-ийг сонгох явдал юм. Item гэдэг нь таны сүлжээний **Customer, Payments, Sites, Emails** зэрэг **мэдээллийн загвар (information model)** юм.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Item сонгоход, бүртгэл нь сонгосон Item-д шаардлагатай болон сонголттой талбаруудыг **засварлаж байрлуулна**.

Жишээлбэл, **Customer** (Хэрэглэгч) item-ийг сонговол, form-ын талбарууд сүлжээнд шинэ Хэрэглэгчийг үүсгэхэд шаардлагатай бүх зүйлийг гаргаж ирнэ.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

**required** (шаардлагатай) гэсэн бүх талбаруудыг дүүргээд continue-ыг дарсны дараа, сүүлийн экран дээр та дүүрсэн талбарууд болон дүүргэгдээгүй талбарууд харагдана.

![Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

Таны тест амжилттай дууссан даруйда таны action (үйлдэл) тохирсон байна. Мөн тухайн item (зүйл) таны action-ийн тестом үүсгэгдсэн эсэхийг сүлжээндээ шалгах нь чухал юм.
