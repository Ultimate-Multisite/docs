---
title: 'Aralin 7: Gawin Itong Sa Iyo'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Aralin 7: Gawin Itong Sa Iyo {#lesson-7-making-it-yours}

Hindi dapat maramdaman ng iyong mga customer na gumagamit sila ng "ilang WordPress plugin." Dapat nilang maramdaman na gumagamit sila ng FitSite -- isang platform na ginawa para sa kanilang industriya. Saklaw ng araling ito ang pagba-brand, white-labeling, at pagpaparamdam sa platform na parang isang produkto.

## Kung Saan Tayo Huminto {#where-we-left-off}

May gumaganang daloy ng pag-checkout ang FitSite na nagdadala sa mga may-ari ng fitness studio mula sa pagpili ng plano hanggang sa aktibong sityo. Ngayon, gagawin natin ang buong karanasan na maramdaman bilang isang magkakaugnay at may brand na produkto.

## Ang Iyong Platform Domain {#your-platform-domain}

Ang pundasyon ng iyong brand ay ang iyong dominio. Para sa FitSite:

- **Pangunahing dominio**: `fitsite.com` (iyong sityong pang-marketing at network root)
- **Mga sityo ng customer**: `studioname.fitsite.com` (mga subdomain)
- **Mga custom na dominio**: Maaaring i-map ng mga customer sa mga planong Growth at Pro ang sarili nilang dominio

### Pagse-set Up ng Iyong Dominio {#setting-up-your-domain}

1. Irehistro ang iyong platform domain
2. Ituro ito sa iyong hosting provider
3. I-configure ang wildcard DNS (`*.fitsite.com`) para sa mga subdomain ng customer
4. Tiyaking aktibo ang wildcard SSL

Tingnan ang [Paano I-configure ang Domain Mapping](/user-guide/domain-mapping/how-to-configure-domain-mapping) para sa detalyadong mga tagubilin.

## White-Labeling ng Karanasan sa Admin {#white-labeling-the-admin-experience}

Kapag nag-log in ang may-ari ng fitness studio sa dashboard ng kanilang sityo, dapat nilang makita ang iyong brand, hindi ang branding ng WordPress o Ultimate Multisite.

### Custom na Login Page {#custom-login-page}

I-customize ang WordPress login page upang ipakita ang:

- Iyong FitSite logo
- Angkop sa fitness na larawan sa background
- Mga kulay ng iyong brand

### Branding ng Dashboard {#dashboard-branding}

Gamitin ang [Admin Page Creator](/addons/admin-page-creator) addon o custom CSS upang:

- Palitan ang WordPress logo ng iyong FitSite logo
- I-customize ang scheme ng kulay ng admin upang tumugma sa iyong brand
- Magdagdag ng custom dashboard widget na may mga quick link at help resource na partikular sa fitness

### Mga Custom na Admin Page {#custom-admin-pages}

Isaalang-alang ang paggawa ng mga custom na admin page na nagpapakita ng mga pinakanauugnay na aksyon para sa mga may-ari ng fitness studio:

- "I-edit ang Iskedyul ng Iyong Klase"
- "I-update ang mga Profile ng Trainer"
- "Tingnan ang Iyong Sityo"

Binabawasan nito ang learning curve sa pamamagitan ng paglalagay ng mga aksyong nauugnay sa niche sa harap at gitna sa halip na ibaon ang mga ito sa karaniwang WordPress menu.

## Pagba-brand ng Iyong mga Komunikasyon {#branding-your-communications}

Dapat patibayin ng bawat email, invoice, at notification ang iyong brand.

### Mga Email ng System {#system-emails}

Pumunta sa **Ultimate Multisite > Settings > Emails** at i-customize ang lahat ng system email:

- **Pangalan ng nagpadala**: FitSite
- **Email ng nagpadala**: hello@fitsite.com
- **Mga template ng email**: Gamitin ang mga kulay at logo ng iyong brand
- **Wika**: Partikular sa fitness sa kabuuan

Mga pangunahing email na iko-customize:

| Email | Generic na Bersyon | Bersyon ng FitSite |
|-------|----------------|-----------------|
| Welcome | "Handa na ang bago mong sityo" | "Live na ang website ng iyong fitness studio" |
| Payment receipt | "Natanggap ang bayad" | "Nakumpirma ang bayad sa subscription sa FitSite" |
| Trial ending | "Malapit nang matapos ang iyong trial" | "Magtatapos ang iyong FitSite trial sa loob ng 3 araw -- panatilihing live ang website ng iyong studio" |

### Mga Invoice {#invoices}

I-customize ang mga template ng invoice gamit ang:

- Iyong FitSite logo at mga kulay ng brand
- Mga detalye ng iyong negosyo
- Mga pangalan ng produkto na partikular sa fitness (hindi generic na mga ID ng plano)

## Ang Sityong Nakaharap sa Customer {#the-customer-facing-site}

Kailangan ng iyong pangunahing dominio (`fitsite.com`) ng sityong pang-marketing na nagbebenta ng platform. Hiwalay ito sa network admin ng Ultimate Multisite -- ito ang pampublikong mukha ng iyong negosyo.

Mga pangunahing pahina:

- **Homepage**: Malinaw na value proposition para sa mga negosyo sa fitness
- **Mga Feature**: Kung ano ang ginagawa ng FitSite, sa mga terminong pang-fitness
- **Pagpepresyo**: Ang iyong tatlong plano na may mga paghahambing ng feature na partikular sa niche
- **Mga Halimbawa**: Ipakita ang mga sityong ginawa sa platform
- **Mag-sign Up**: Mga link papunta sa iyong form ng pag-checkout

:::tip Ang Iyong Sityong Pang-marketing ay Maaaring Maging Network Site
Gawin ang iyong sityong pang-marketing bilang isang sityo sa loob ng sarili mong network. Hinahayaan ka nitong pamahalaan ito mula sa parehong dashboard at ipinapakita ang mga kakayahan ng sarili mong platform.
:::

## Custom na Dominio para sa mga Customer {#custom-domain-for-customers}

Para sa mga customer sa mga planong may kasamang mga custom na dominio, idokumento nang malinaw ang proseso:

1. Irerehistro o ililipat ng customer ang kanilang dominio sa isang registrar
2. Ia-update ng customer ang DNS upang ituro sa iyong platform (magbigay ng eksaktong mga record)
3. Pinangangasiwaan ng Ultimate Multisite ang domain mapping at SSL

Gumawa ng artikulo ng tulong o knowledge base entry na partikular para sa prosesong ito, na isinulat para sa mga may-ari ng fitness studio na hindi teknikal.

## Ang FitSite Network Sa Ngayon {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding
│   ├── Custom login page
│   ├── Branded admin dashboard
│   ├── Niche-specific system emails
│   ├── Branded invoices
│   └── Marketing site on fitsite.com
└── Ready for onboarding flow (next lesson)
```

## Ang Ginawa Natin sa Araling Ito {#what-we-built-this-lesson}

- **Platform domain at DNS** na-configure para sa may brand na karanasan
- **White-labeled na admin** na may branding ng FitSite sa kabuuan
- **Mga custom na komunikasyon** -- mga email, invoice, at notification na lahat ay naaayon sa brand
- **Isang sityong pang-marketing** na nagbebenta ng FitSite sa mga may-ari ng fitness studio
- **Dokumentasyon ng custom na dominio** para sa mga customer na gusto ng sarili nilang dominio

---

**Susunod:** [Aralin 8: Onboarding ng Customer](lesson-8-onboarding) -- didisenyuhin natin ang karanasan na ginagawang aktibo at masayang customer ang isang bagong signup.
