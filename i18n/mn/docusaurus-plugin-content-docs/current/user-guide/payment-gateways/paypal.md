---
title: PayPal-ийг тохируулах
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# PayPal Gateway-г тохируулах (v2) {#setting-up-the-paypal-gateway-v2}

_**МЭЦЭЛТЭЛ: Энэ нийтлэл Ultimate Multisite 2.x хувилбарыг хэрэглэдэг.**_

Та бидний төлбөлт тохиргооны хуудсанд Stripe, Stripe Checkout, PayPal болон Мануал гэсэн хүртэлх дөрвөн төлбөрийн аргыг идэвхжүүлэх боломжтой. Энэ нийтлэлийн дараа бид **PayPal**-тай хэрхэн холбогдох талаар үзэх болно.

Stripe-тэй адил, PayPal нь онлайн төлбөрт маш түгээмэл ашиглагддаг бөгөөд ялангуяа WordPress вэбсайтуудад тохиромжтой. Энэ нийтлэл таны сүлжээнд боломжит төлбөрийн арга болгон PayPal-ийг хэрхэн ашиглах талаар зааврах болно.

Энэ холболтыг хийхэд шаардлагатай API нэр (credential) -ыг авахын тулд та **PayPal Business account** байх ёстой гэдгийг анхаарна уу.

## Сүлжээнд PayPal-ийг идэвхжүүлэх {#enabling-paypal-on-your-network}

PayPal-ийг сүлжээнд боломжит төлбөрийн арга болгон идэвхжүүлэхийн тулд **Ultimate Multisite > Settings > Payments** таб руу очиж, PayPal-ийн хажууд байгаа тэмдгийг сонгоно.

![PayPal-ийг идэвхжүүлэх активчилсан төлбөрийн хаалтуудад](/img/config/settings-payment-gateways.png)

## Заавраар тохируулах wizard ашиглах {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 нь төлбөрийн хаалтын тохиргооны хувьд заавраар PayPal-ийг тохируулдаг wizard-ыг нэмсэн. Та PayPal-ийг идэвхжилсний дараа, **Ultimate Multisite > Settings > Payments** дээр байгаа wizard-ыг ашиглан хаалтыг хэрхэн холбохоо сонгож, хадгалахын өмнө ямар нэр (credential) шаардлагатай байгааг баталгаажуулна уу.

Энэ wizard нь хоёр тохируулгын замыг дэмждэг:

* **Хувийн үнэн зөв мэдээлэл ашиглах (Manual credential entry)**: Таны PayPal API нэр, нууц үг болон гарын үсэг байгаа бол, OAuth тохиргоо таны дансанд байхгүй эсвэл өөрөө хуулж оруулахыг хүсвэл энэ замыг ашиглана. PayPal-ийн талбаруудад API Username, API Password болон API Signature-ийг оруулсны дараа төлбөрийн тохиргоог хадгалаарай.
* **OAuth холболтын хаалт (OAuth connection gate)**: Хэрэв OAuth сонголт таны усталдаа ашиглахаар нээгдэж байвал зөвхөн энэ замыг ашиглана. Удирдлагын програм нь OAuth-ийн үйл явцыг feature flag дотор харуулдаг тул flagгүй сүлжээнд хүмүүс анхны хувийн мэдээлэл оруулах талбарыг ашиглаж үргэлжлүүлнэ.

Хэрэв удирдлагын програм дээр OAuth сонголтыг харахгүй бол доорх хувийн мэдээлэл оруулах үйлдлийг дуусгана уу. Энэ gateway нь өмнөх Ultimate Multisite 2.x хувилбаруудын PayPal Business API нэр, нууц үгийн ашиглалтад таарах байна.

## PayPal API нэр, нууц үгийг авах {#getting-the-paypal-api-credentials}

PayPal-ийг төлбөрийн gateway болгосон дараа, та PayPal API **Username**, PayPal API **Password** болон PayPal API **Signature** талбаруудыг дүүргэх шаардлагатай болно.

Үүнийг PayPal [Live](https://www.paypal.com/home) эсвэл [Sandbox](https://www.sandbox.paypal.com/home) дансанд логин хийх замаар авах боломжтой.

(Төлбөрийг туршиж, gateway зөв тохирсон эсэхийг шалгахын тулд **sandbox mode**-ийг ашиглаж болно. Харгалзах хэсгийг асааж үзээрэй.)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Таны PayPal дансны API Signature эсвэл Сертификатын мэдээллийг хүсэх:

  1. Таны [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess)-д орно.

  2. **API access** хэсэгт байгаа **Update**-ыг дарна.
![PayPal Account Settings with API access section](/img/config/settings-payment-gateways.png)

3. **NVP/SOAP API integration (Classic)**-и дотогч, **Manage API credentials**-д дар саргид.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Хэрэв та өмнө нь API Signature эсвэл Certificate үүсгэсэн бол, та өөрийн мэдээллийг олох хуудас руу чиглэгдэх болно.

     * _**Анхаарах зүйл:** Хэрэв таны PayPal дансыг баталгаажуулахыг хүсвэл, дэлгэцийн зааврыг дагаж үргэлжлүүлээрэй._

  4. Доорх сонголтуудын аль нэгийг нь сонгоод, **Agree and Submit**-д дарна уу.

     * **Request API Signature** – API Signature баталгаажуулалтад сонгоно.

     * **Request API Certificate** – API Certificate баталгаажуулалтад сонгоно.

  5. PayPal таны API мэдээллийг дараах байдлаар үүсгэнэ:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** нь API Username, API Password болон Signature-ийг багтаадаг бөгөөд энэ нь хугарахгүй. Аюулгүй байдлыг нэмэгдүүлэхийн тулд эдгээр утгууд анхдаа нуугдаж байдаг. Тэдгээрийг асаах/утаахын тулд **Show/Hide**-д дарна уу. Гүйцэтгэсэн бол **Done**-д дарна уу.

     * **API Certificate credentials** нь API Username, API Password болон Certificate-ийг багтаадаг бөгөөд энэ нь гурван жил дараа автомат хугарах үү. API Certificate-ийг өөрийн компьютерт хадгалахын тулд **Download Certificate**-д дарна уу.

Энэ бол таны PayPal төлбөр хийх интеграци дууссан!

PayPal тохиргоотой холбоотой асуулт гарвал, та PayPal-ийн [Help Center](https://www.paypal.com/br/smarthelp/home)-д хандаж үзээрэй.
