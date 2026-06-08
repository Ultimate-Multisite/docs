---
title: 'Lesson 8: Pag-onboard ng Kustomer'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Lesson 8: Pag-onboard sa Customer

Ang pagpaparehistro ng isang customer ay kalahati pa lang ng trabaho. Kung mag-log in sila, makaramdam ng pagkalito, at hindi na bumalik, nawalan na sila. Dinisenyo ng araling ito ang karanasan na magpapalit sa isang bagong pag-sign up tungo sa isang aktibo at engaged na customer.

## Saan Tayo Tumigil

Ang FitSite ay ganap nang may branding at may gumaganang checkout flow. Ngayon, tututukan natin kung ano ang mangyayari pagkatapos mag-sign up ang isang may-ari ng fitness studio at unang makapasok sa kanilang bagong site.

## Bakit Mahalaga ang Onboarding

Ang unang 30 minuto pagkatapos mag-sign up ang magdedetermina kung mananatili ang customer o aalis (churns). Ang isang may-ari ng fitness studio na:

- Mag-log in at makakita ng site na mukhang fitness website na → mananatili
- Alam eksakto kung ano ang susunod na gagawin → mananatili
- Makaramdam ng pagkalito sa isang generic na WordPress dashboard → aalis

Ang mga niche template mo (Lesson 4) ang bahala sa unang punto. Ang araling ito naman ang bahala sa pangalawa.

## Ang Karanasan sa Unang Pag-log In

### Welcome Dashboard Widget

Gumawa ng custom dashboard widget na magbati sa mga bagong customer at gagabay sa kanila sa setup. Dapat itong makita nang malaki kapag unang nag-log in sila.

**FitSite Quick Start:**

1. **Idagdag ang pangalan at logo ng studio mo** -- Link sa Customizer o Site Identity settings
2. **I-update ang class schedule mo** -- Direktang link sa Classes page editor
3. **Idagdag ang mga trainer mo** -- Link sa Trainers page editor
4. **Itakda ang contact details mo** -- Link sa Contact page editor
5. **I-preview ang site mo** -- Link sa frontend

Ang bawat hakbang ay direktang nagli-link sa nauugnay na page o setting. Walang paghahanap-hanap sa mga menu.

### Pagpapasimple ng Dashboard

Hindi kailangang makita ng mga bagong customer ang bawat menu item ng WordPress. Isaalang-alang ang:

- Pagtatago ng mga menu item na hindi relevant sa pamamahala ng fitness site (hal., Comments kung hindi ginagamit)
- Pag-aayos muli ng menu para ilagay ang pinakamadalas gamitin na items sa unahan
- Pagdaragdag ng custom menu labels na mas makabuluhan para sa niche ("Your Studio" imbes na "Appearance")

Ang [Plugin & Theme Manager](/addons/plugin-and-theme-manager) addon ay makakatulong sa pagkontrol kung ano ang nakikita ng mga customer.

## Welcome Email Sequence

Hindi sapat ang isang welcome email lang. Mag-set up ng sequence na gagabay sa mga customer sa kanilang unang linggo:

### Email 1: Welcome (Agad pagkatapos mag-sign up)

- Subject: "Welcome to FitSite -- live na ang website ng studio mo"
- Content: Login link, quick start steps, link sa help resources
- Tone: Masigla, naghihikayat, at specific sa fitness

### Email 2: Quick Wins (Araw 1)

- Subject: "3 bagay na dapat gawin muna sa FitSite mo"
- Content: Idagdag ang logo mo, i-update ang hero image sa homepage, idagdag ang class schedule mo
- Maglagay ng screenshots na nagpapakita kung saan eksaktong magki-click

### Email 3: Gawin Mong Sarili Mo (Araw 3)

- Subject: "Paano maging kakaiba ang fitness site mo"
- Content: I-customize ang colors, magdagdag ng photos ng trainer, magsulat ng kwento ng studio mo
- Mag-link sa mga halimbawa ng magagandang fitness sites sa platform

### Email 4: Go Live (Araw 7)

- Subject: "Handa ka na bang ibahagi ang FitSite mo sa mundo?"
- Content: Checklist ng mga kailangang i-verify bago ibahagi, paano ikonekta ang custom domain (kung nasa Growth/Pro), tips sa social sharing

:::tip Email Automation
Gamitin ang [Webhooks](/user-guide/integrations/webhooks) o [Zapier](/user-guide/integrations/zapier) para mag-trigger ng mga email na ito sa pamamagitan ng iyong email marketing platform. Nagbibigay ito sa iyo ng mas maraming kontrol sa timing at nagpapahintulot sa iyo na ma-track ang engagement.
:::

## Help Resources

Gumawa ng niche-specific help content na sumasagot sa mga tanong na aktwal na tinatanong ng mga may-ari ng fitness studio:

### Knowledge Base Articles

- "Paano i-update ang class schedule mo"
- "Pagdaragdag at pag-e-edit ng trainer profiles"
- "Pagpapalit ng logo at colors ng studio mo"
- "Pagkonekta ng sarili mong domain name" (para sa Growth/Pro customers)
- "Pagdaragdag ng booking widget sa site mo"

Isulat ang mga ito para sa mga user na hindi teknikal. Gumamit ng screenshots. Iwasan ang WordPress jargon.

### Video Walkthroughs

Maikling (2-3 minuto) screen recordings na nagpapakita ng:

- Unang pag-log in at orientation
- Pag-e-edit ng homepage
- Pag-update ng class schedule
- Pagdaragdag ng bagong trainer

Hindi kailangang maging perpekto ang mga ito. Ang malinaw, kapaki-pakinabang, at niche-specific ang mahalaga.

## Ang Account Page

Kasama ng Ultimate Multisite ang isang customer-facing [Account Page](/user-guide/client-management/account-page) kung saan pinamamahalaan ng mga customer ang kanilang subscription. I-customize ito para:

- Ipakita ang kasalukuyang FitSite plan nila
- Ipakita ang mga upgrade options na may fitness-specific benefits
- Magbigay ng billing history at invoice downloads
- Mag-link sa help resources

## Pagsukat sa Tagumpay ng Onboarding

Subaybayan ang mga indicator na ito para malaman kung gumagana ang iyong onboarding:

- **Activation rate**: Anong porsyento ng mga nag-sign up ang aktwal na nag-customize ng kanilang site sa loob ng unang linggo?
- **First-week logins**: Ilang beses nag-log in ang isang bagong customer sa loob ng kanilang unang linggo?
- **Support tickets from new customers**: Ang mataas na volume ay nangangahulugang may mga puwang (gaps) sa iyong onboarding
- **Trial-to-paid conversion**: Kung nag-aalok ka ng trials, anong porsyento ang nagko-convert?

## Ang FitSite Network Hanggang Ngayon

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding
│   ├── Quick Start dashboard widget
│   ├── Simplified dashboard for fitness site management
│   ├── 4-email welcome sequence
│   ├── Niche-specific knowledge base
│   ├── Video walkthroughs
│   └── Customized account page
└── Ready for pricing strategy (next lesson)
```

## Ano ang Binuo Natin sa Araling Ito

- **Isang guided first-login experience** na may Quick Start widget
- **Isang simplified dashboard** na nakatuon sa mga gawain sa pamamahala ng fitness site
- **Isang welcome email sequence** na gagabay sa mga customer sa kanilang unang linggo
- **Niche-specific help resources** na isinulat para sa mga may-ari ng fitness studio na hindi teknikal
- **Onboarding metrics** para subaybayan at pagandahin ang karanasan

---

**Next:** [Lesson 9: Pricing for Profit](lesson-9-pricing) -- pagre-refine natin ang pricing strategy para ma-maximize ang revenue at ma-minimize ang churn.
