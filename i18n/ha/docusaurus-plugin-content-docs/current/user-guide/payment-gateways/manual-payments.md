---
title: Kafa Biya Manufar
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Shiga Tsaro Ku Biya (v2)

_**MUHIMMI DA SANAN: Wannan makala tana nufin Ultimate Multisite versiyon 2.x.**_

Biya na asali (Manual payments) shi ne hanyar da za ka ba wasu hanyoyin biya idan **Stripe** ko **PayPal** ba suke aiki ga masu amfani da kai. Zai iya zama wani transfer na waya (wire), bank, ko wata hanya ta biya da kake da ita a wurin ku.

## Yadda Ake Bawo Biya Na Asali (Manual Payments)

Ba za ka samu matsala ba idan ka yi setup na biya na asali. Ka iya bincika shi a ƙarƙashin payment gateways kuma ka saka bayanan da suka shafi yadda mai amfani zai aika kuɗin.

Farko, tafiya zuwa **Ultimate Multisite > Settings > Payments**. A ƙasa **Payment Gateways**, ka yi toggle (on/off) ga **Manual** a. Za ka gani wani babban wurin bayanan da ake kira **Payment Instructions** zai bayyana gare ka.

Ka saka bayanai da mai amfani zai buƙata don yin biya a cikin wannan wurin. Zai iya zama bayanan asusun banki ɗinka da imel ɗinka don mai amfani ya aika maka tabbacin biyanar, misali.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Ga wajen lura na siffar biya na asali:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Bayan ka yi setup, kawai ka danna **Save Settings** kuma an gama. Lokacin da masu amfani su yi rijista a cikin shugaban ku, za su gani wata saƙo mai gaya musu cewa za su samu umarnin kammala sayarwarka.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

Sannan kuma za su sami saƙo a shafin **Thank You** ɗinka da bayanan biyanar.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Tabbatar da Biya Na Asali

برای تأیید یک پرداخت دستی، به منوی **Payments** در نوار سمت چپ بروید. در آنجا می‌توانید تمام پرداخت‌ها در شبکه خود و جزئیات آن‌ها، از جمله **status** (وضعیت) را ببینید. یک پرداخت دستی همیشه تا زمانی که شما آن را به صورت دستی تغییر ندهید، وضعیت **Pending** (در انتظار) خواهد داشت.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

با کلیک بر روی **reference code** (کد مرجع)، صفحه پرداخت مورد نظر را باز کنید. در این صفحه تمام جزئیات پرداخت معلق، مانند reference ID (شناسه مرجع)، محصولات، زمان‌ها و موارد دیگر را خواهید دید.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

در ستون سمت راست، می‌توانید وضعیت پرداخت را تغییر دهید. با تغییر آن به **Completed** (تکمیل شده) و روشن کردن گزینه **Activate Membership** (فعال‌سازی عضویت)، سایت مشتری شما فعال شده و عضویت او نیز فعال خواهد شد.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
