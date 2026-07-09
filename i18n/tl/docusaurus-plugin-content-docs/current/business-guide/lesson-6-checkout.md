---
title: 'Aralin 6: Ang Karanasan sa Pagpaparehistro'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Aralin 6: Ang Karanasan sa Pag-signup

Ang daloy ng pagbili ay kung saan nagiging kita ang interes. Nawawalan ng mga customer ang nakalilitong o pangkalahatang proseso ng signup. Ang daloy na partikular sa niche, nagsasalita sa kanilang wika, at magaan sa pakiramdam ay nagko-convert sa kanila.

## Kung Saan Tayo Huminto

May mga template at plan na naka-configure ang FitSite. Ngayon, bubuuin natin ang karanasan sa pagpaparehistro at pagbili na ginagawang nagbabayad na customer ang mga may-ari ng fitness studio.

## Pag-unawa sa Daloy ng Pagpaparehistro

Ang mga form ng pagbili ng Ultimate Multisite ay ganap na nako-customize na mga multi-step form. Para sa FitSite, gusto natin ng daloy na:

1. Pakiramdam ay ginawa para sa mga negosyong fitness
2. Kinokolekta lang ang kailangan
3. Dinadala ang customer sa gumaganang site sa pinakamabilis na paraan

Tingnan ang [Ang Daloy ng Pagpaparehistro](/user-guide/configuration/the-registration-flow) para sa buong teknikal na sanggunian.

## Pagdidisenyo ng Pagbili sa FitSite

Pumunta sa **Ultimate Multisite > Checkout Forms** at gumawa ng bagong form.

### Hakbang 1: Pagpili ng Plan

Ang unang dapat makita ng may-ari ng fitness studio ay ang mga plan, na ipinapakita sa mga terminong nauunawaan nila.

- Magdagdag ng **Pricing Table** field
- I-configure ito upang ipakita ang lahat ng tatlong FitSite plan
- Lalabas dito ang mga paglalarawan ng plan na isinulat mo sa Aralin 5 -- tiyaking tumutugon ang mga ito sa pangangailangan ng negosyong fitness, hindi sa mga teknikal na feature

:::tip Mahalaga ang Wikang Pang-niche
Walang ibig sabihin ang "1 GB storage" sa may-ari ng gym. Ang "Lahat ng kailangan mo para sa isang propesyonal na website ng studio" ay may ibig sabihin. Isulat ang mga paglalarawan ng plan sa wika ng iyong customer.
:::

### Hakbang 2: Pagpili ng Template

Pagkatapos pumili ng plan, pipili ang customer ng kanilang panimulang template.

- Magdagdag ng **Template Selection** field
- Sinasala ang mga available na template batay sa plan na pinili nila (na-configure sa Aralin 5)
- Dapat may preview image ang bawat template na nagpapakita ng disenyong partikular sa fitness

### Hakbang 3: Paggawa ng Account

Panatilihin itong minimal. Kolektahin lang ang:

- Email address
- Password
- Pangalan ng studio/negosyo (ito ang magiging pangalan ng kanilang site)

Huwag humingi ng impormasyong hindi mo kailangan sa signup. Bawat karagdagang field ay nagpapababa ng conversions.

### Hakbang 4: Pag-setup ng Site

- **Pamagat ng site**: I-pre-fill mula sa pangalan ng studio na inilagay sa Hakbang 3
- **URL ng site**: Awtomatikong bumuo mula sa pangalan ng studio (hal., `ironworks.fitsite.com`)

### Hakbang 5: Pagbabayad

- Idagdag ang **Payment** field
- I-configure ang iyong gateway ng pagbabayad (inirerekomenda ang [Stripe](/user-guide/payment-gateways/stripe) para sa subscription billing)
- Kung gumawa ka ng mga order bump sa Aralin 5, magdagdag ng **Order Bump** field bago ang hakbang ng pagbabayad

### Hakbang 6: Kumpirmasyon

- I-customize ang mensahe ng kumpirmasyon gamit ang wikang partikular sa fitness
- Halimbawa: "Ginagawa na ang website ng iyong fitness studio. Ire-redirect ka sa iyong bagong site sa loob ng ilang segundo."

## Pagdaragdag ng Toggle sa Pagpili ng Period

Kung nag-set up ka ng mga variation ng presyo sa iyong mga plan (buwanan kumpara sa taun-taon), magdagdag ng **Period Selection** field sa form ng pagbili upang makapag-toggle ang mga customer sa pagitan ng mga period ng billing. Tingnan ang [Mga Form ng Pagbili](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) para sa mga tagubilin.

## Pag-configure ng Pagbabayad

Kung hindi ka pa nakakapag-set up ng gateway ng pagbabayad:

1. Pumunta sa **Ultimate Multisite > Settings > Payment Gateways**
2. Sundin ang [gabay sa pag-setup ng Stripe](/user-guide/payment-gateways/stripe) o ang gateway na mas gusto mo
3. Subukan ang isang kumpletong daloy ng pagbili gamit ang test payment

Tingnan ang [Pagkuha ng Bayad](/user-guide/payment-gateways/getting-paid) para sa mga detalye kung paano dumadaloy ang mga bayad papunta sa iyong account.

## Pagsubok sa Daloy

Bago magpatuloy, kumpletuhin ang isang buong test signup:

1. Buksan ang form ng pagbili sa isang incognito/private na browser window
2. Pumili ng plan
3. Pumili ng template
4. Gumawa ng account
5. Kumpletuhin ang pagbabayad (gumamit ng test mode)
6. Tiyaking nagawa ang site gamit ang tamang template

Suriin na:

- [ ] Malinaw at partikular sa niche ang mga paglalarawan ng plan
- [ ] Nagpapakita ang mga preview ng template ng mga disenyong angkop sa fitness
- [ ] Tamang nabubuo ang URL ng site mula sa pangalan ng studio
- [ ] Matagumpay na napoproseso ang pagbabayad
- [ ] Napupunta ang customer sa gumaganang site gamit ang napiling template
- [ ] Gumagamit ang mga email ng kumpirmasyon ng wikang partikular sa fitness

## Ang FitSite Network Sa Ngayon

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (naka-configure)
├── Hosting na may wildcard SSL + domain mapping
├── Mga Template ng Site (Studio Essential, Gym Pro, Fitness Chain)
├── Mga Produkto (Starter, Growth, Pro + Order Bumps)
├── Daloy ng Pagbili
│   ├── Pagpili ng plan na may mga paglalarawang partikular sa niche
│   ├── Pagpili ng template na may mga preview na pang-fitness
│   ├── Minimal na paggawa ng account
│   ├── Pagbabayad sa pamamagitan ng Stripe
│   └── Kumpirmasyong partikular sa fitness
└── Handa na para sa branding (susunod na aralin)
```

## Ang Binuo Natin sa Araling Ito

- **Isang multi-step na form ng pagbili** na iniangkop para sa mga may-ari ng fitness studio
- **Wikang partikular sa niche** sa buong daloy ng signup
- **Minimal na hadlang** -- mahahalagang field lang, mabilis na daan patungo sa gumaganang site
- **Integrasyon ng pagbabayad** na may test verification
- **Isang nasubok na end-to-end na daloy** mula sa pagpili ng plan hanggang sa gumaganang site

---

**Susunod:** [Aralin 7: Gawin Itong Sa Iyo](lesson-7-branding) -- i-white-label natin ang platform at itatatag ang FitSite bilang brand.
