---
title: بەرێوەبردنی پارە و فاکچurare
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Manage Payments û Fatura

## Paramêtreyên Pêşvebirina Pêşvebirin {#payment-settings}

Pêş têkaptina pêşvebirin ji nîşan bidin, pirdana parametreên hatine li ser vekirin. Ragin **Ultimate Multisite → Settings** û klikirê li sekçyonaya **Payment**.

![Payment settings tab](/img/admin/settings-payments-top.png)

Li vir yek ji paginên pêşvebirin e:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Seçimetên Giştî yên Pêşvebirin {#general-payment-options}

Di parametreên giştî de tu dikarin hatine ravekirin:

- **Currency** — Pagina ji bo parastina bi karî û pagina ku ji bo pêşvebirin têne hatibin bikaranîn
- **Currency Position** — Li ku simgora para (currency symbol) derê dikate (pêş/paş ji mînalî)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Pêşvebirinên Pagina (Payment Gateways) {#payment-gateways}

Ultimate Multisite piştgirî gelek paginên pêşvebirin dike. Tu dikarin her yek ji wan derxistin û hatine ravekirin ji sekçyonaya Payment settings tab.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Paginên ku li serê ne hene:

- **Stripe** — Pêşvebirina kartelî bi Stripe
- **PayPal** — Pêşvebirina PayPal
- **Manual** — Ji bo parastina pagin ji ber çavkanî an jî ji bo proceskirina paginên custom

Her yek ji wan sekçyonaya ravekirinkir xwe heye ku tu API keys û parametreên din derdike.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Modê Sandbox (Sandbox Mode) {#sandbox-mode}

Tu dikarin **Sandbox Mode** derxistin ji bo lêkolînkirina integrasyonê paginê xwe berî ku wê bi kar derxistin bibe. Ji dema sandbox mode derxistin e, heç parastina rast ne hatine kirin.

## Dîtina Pêşvebirin {#viewing-payments}

Ragin sekçyonaya **Payments** li ser Ultimate Multisite ji bo dîtina hemû transaksiyonên berî bi neteweyê we.

![Payments list](/img/admin/payments-list.png)

Tu dikarin paginên pêşvebirin bi durum (completed, pending, failed, refunded) filter bike û ji bo transaksiyonên taybetî girêdayi bixwejin.

کلیک کردن روی یک پرداخت برای مشاهده جزئیات کامل آن، از جمله اقلام صورتحساب، عضویت مرتبط، اطلاعات مشتری و داده‌های درگاه پرداخت.

## فاکتورها (Invoices) {#invoices}

Ultimate Multisite می‌تواند به طور خودکار فاکتورهایی را برای پرداخت‌ها تولید کند. شما می‌توانید قالب فاکتور و فرمت شماره‌گذاری آن را از تنظیمات پرداخت سفارشی کنید.

گزینه‌های سفارشی‌سازی فاکتور شامل موارد زیر است:

- **نام و آدرس شرکت** که روی فاکتورها نمایش داده می‌شود
- **فرمت و ترتیب شماره‌گذاری فاکتور**
- **لوگو** که در سربرگ فاکتور نمایش داده می‌شود
- **متن پایانی سفارشی** برای شرایط، یادداشت‌ها یا اطلاعات قانونی

برای سفارشی کردن قالب فاکتور، به مسیر **Ultimate Multisite → Settings → Payment** بروید و تنظیمات مربوط به فاکتور را پیدا کنید.
