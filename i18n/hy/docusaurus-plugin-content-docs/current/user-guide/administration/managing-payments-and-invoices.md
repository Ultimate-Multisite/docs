---
title: Վճարումների և հաշվիագրման կառավարում
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Ապահովումների և հաշվարկների կառավարում

## Իրավարձակման կարգավորումներ (Payment Settings) {#payment-settings}

Ապահովումներ ստանալուց առաջ, անհրաժեշտ է կարգավորել վճարումների հետ կապված ծառայությունները։ Գնացեք **Ultimate Multisite → Settings** և սեղմեք **Payment** ներդիրը (tab-ը)։

![Payment settings tab](/img/admin/settings-payments-top.png)

Ահա վճարումների կարգավորումների էջի ամբողջական տեսքը.

![Payment settings full page](/img/admin/settings-payments-full.png)

### Ընդհանուր վճարման տարբերակներ (General Payment Options) {#general-payment-options}

Ընդհանուր կարգավորումներում կարող եք կազմաձևել հետևյալը.

- **Արդյունքի միավորը (Currency)** — Տրանզակցիաների համար օգտագործվող ստանդարտ արժույթը։
- **Արդյունքի դիրքը (Currency Position)** — Որտեղ է տեղադրվում արժույթի նշանը (քանակից առաջ/հետ)։

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Վճարման մուտքեր (Payment Gateways) {#payment-gateways}

Ultimate Multisite-ը աջակցում է մի քանի վճարման մուտքերին (payment gateways)։ Դուք կարող եք յուրաքանչյուրը ապահովել և կազմաձևել Payment settings ներդիրից։

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Հասանելի մուտքերից են.

- **Stripe** — Stripe-ի միջոցով քարտային քարտերի վճարումներ
- **PayPal** — PayPal-ի միջոցով վճարումներ
- **Manual (Ձեռքով)** — Աֆլայն կամ ստանդարտ չհամապատասխան վճարման մշակման համար

Յուրաքանչյուր մուտք ունի իր առանձին կազմաձևման բաժին, որտեղ դուք մուտքագրում եք API key-երը և այլ կարգավորումները։

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox ռեժիմ (Sandbox Mode) {#sandbox-mode}

Դուք կարող եք ապահովել **Sandbox Mode**՝ իրական գործարկումից առաջ ձեր վճարման համակարգի փորձարկման համար։ Երբ sandbox mode-ը ակտիվ է, իրական հաշվարկներ կատարվելու չի։

## Վճարումների դիտում (Viewing Payments) {#viewing-payments}

Ultimate Multisite-ի ներքո գտնվող **Payments** էջին գնացեք՝ ձեր ամբողջ ցանցի տրանզակցիաները տեսնելու համար։

![Payments list](/img/admin/payments-list.png)

Դուք կարող եք վճարումները զտել իրենց կարգավիճակի (completed, pending, failed, refunded)՝ և որոնել կոնկրետ տրանզակցիաներ։

Մեկ վճարման վրա սեղմեք՝ տեսնելու դրա ամբողջ մանրամասները ներառյալ ցանկերը, կապված անդամակցությունը, հաճախորդի տեղեկությունները և վճարման գեյթվեյի տվյալները։

## Հաշիվներ (Invoices) {#invoices}

Ultimate Multisite-ը կարող է ավտոմատ կերպով ստեղծել հաշիվներ վճարումների համար։ Դուք կարող եք հաշիվի տեխնոլոգիան և համարակալման ձևաչափը փոփոխել Payment-ի կարգավորումներից։

Հաշվի անհատականացման տարբերակները ներառում են.

- **Ընկերության անունը և հասցեն**՝ հաշիվներում ցուցադրվող
- **Հաշվի համարակալման ձևաչափը և հաջորդականությունը**
- **Լոգոն**՝ հաշվի գլխավոր հատվածում ցուցադրվող
- **Հատուկ ֆուտերային տեքստ**՝ պայմանների, նշումների կամ իրավական տեղեկությունների համար

Հաշվի տեխնոլոգիան անհատականացնելու համար գնացեք **Ultimate Multisite → Settings → Payment** և փնտրեք հաշվի հետ կապված կարգավորումները։
