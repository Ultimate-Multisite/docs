---
title: 'Aralin 8: Pag-onboard ng Kliyente'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Aralin 8: Pag-onboard ng Kostumer

Ang pagpapasign up sa isang kostumer ay kalahati lang ng trabaho. Kung mag-log in sila, makaramdam ng pagkalito, at hindi na bumalik, nawala mo na sila. Dinidisenyo ng araling ito ang karanasang nagpapalit ng bagong signup tungo sa aktibo at nakikibahaging kostumer.

## Kung Saan Tayo Huminto

Ganap nang branded ang FitSite na may gumaganang daloy ng checkout. Ngayon, tutuon tayo sa nangyayari pagkatapos makumpleto ng may-ari ng fitness studio ang signup at makarating sa kanilang bagong site sa unang pagkakataon.

## Bakit Mahalaga ang Onboarding

Ang unang 30 minuto pagkatapos ng signup ang nagtatakda kung mananatili o aalis ang isang kostumer. Isang may-ari ng fitness studio na:

- Nag-log in at nakakita ng site na mukhang fitness website na → mananatili
- Alam mismo kung ano ang susunod na gagawin → mananatili
- Naliligaw sa isang generic na WordPress dashboard → aalis

Tinutugunan ng iyong mga niche template (Aralin 4) ang unang punto. Tinutugunan ng araling ito ang pangalawa.

## Ang Karanasan sa Unang Login

### Welcome Dashboard Widget

Gumawa ng custom na dashboard widget na babati sa mga bagong kostumer at gagabay sa kanila sa setup. Dapat itong lumitaw nang kapansin-pansin kapag una silang nag-log in.

**Mabilisang Pagsisimula ng FitSite:**

1. **Idagdag ang pangalan at logo ng iyong studio** -- Link papunta sa Customizer o mga setting ng Site Identity
2. **I-update ang iskedyul ng iyong klase** -- Link nang direkta papunta sa editor ng pahina ng Classes
3. **Idagdag ang iyong mga trainer** -- Link papunta sa editor ng pahina ng Trainers
4. **Itakda ang iyong mga detalye sa pakikipag-ugnayan** -- Link papunta sa editor ng pahina ng Contact
5. **I-preview ang iyong site** -- Link papunta sa frontend

Direktang naka-link ang bawat hakbang sa kaugnay na pahina o setting. Walang paghahanap sa mga menu.

### Pasimplehin ang Dashboard

Hindi kailangang makita ng mga bagong kostumer ang bawat item sa menu ng WordPress. Isaalang-alang ang:

- Pagtatago ng mga item sa menu na hindi kaugnay sa pamamahala ng fitness site (hal., Comments kung hindi ginagamit)
- Muling pagsasaayos ng menu upang mauna ang mga pinakaginagamit na item
- Pagdaragdag ng mga custom na label ng menu na may saysay para sa niche ("Iyong Studio" sa halip na "Appearance")

Makakatulong ang addon na [Plugin & Theme Manager](/addons/plugin-and-theme-manager) na kontrolin kung ano ang nakikita ng mga kostumer.

## Welcome Email Sequence

Hindi sapat ang isang welcome email lang. Mag-set up ng sequence na gagabay sa mga kostumer sa kanilang unang linggo:

### Email 1: Welcome (Kaagad pagkatapos ng signup)

- Subject: "Welcome sa FitSite -- live na ang website ng iyong studio"
- Content: Login link, mga hakbang sa mabilisang pagsisimula, link sa mga help resource
- Tone: Masigla, nakakahikayat, partikular sa fitness

### Email 2: Mabilisang Panalo (Araw 1)

- Subject: "3 bagay na unang gawin sa iyong FitSite"
- Content: Idagdag ang iyong logo, i-update ang hero image ng homepage, idagdag ang iskedyul ng iyong klase
- Isama ang mga screenshot na eksaktong nagpapakita kung saan iki-click

### Email 3: Gawin Itong Sa Iyo (Araw 3)

- Subject: "Gawing kapansin-pansin ang iyong fitness site"
- Content: I-customize ang mga kulay, magdagdag ng mga larawan ng trainer, isulat ang kuwento ng iyong studio
- Link sa mga halimbawa ng mahuhusay na fitness site sa platform

### Email 4: Go Live (Araw 7)

- Subject: "Handa ka na bang ibahagi ang iyong FitSite sa mundo?"
- Content: Checklist ng mga dapat i-verify bago ibahagi, paano magkonekta ng custom domain (kung nasa Growth/Pro), mga tip sa social sharing

:::tip Email Automation
Gamitin ang [Webhooks](/user-guide/integrations/webhooks) o [Zapier](/user-guide/integrations/zapier) upang i-trigger ang mga email na ito sa pamamagitan ng iyong email marketing platform. Binibigyan ka nito ng higit na kontrol sa timing at pinapayagan kang subaybayan ang engagement.
:::

## Mga Help Resource

Gumawa ng help content na partikular sa niche na sumasagot sa mga tanong na talagang itinatanong ng mga may-ari ng fitness studio:

### Mga Artikulo sa Knowledge Base

- "Paano i-update ang iskedyul ng iyong klase"
- "Pagdaragdag at pag-edit ng mga profile ng trainer"
- "Pagbabago ng logo at mga kulay ng iyong studio"
- "Pagkonekta ng sarili mong domain name" (para sa mga kostumer ng Growth/Pro)
- "Pagdaragdag ng booking widget sa iyong site"

Isulat ang mga ito para sa mga user na hindi teknikal. Gumamit ng mga screenshot. Iwasan ang WordPress jargon.

### Mga Video Walkthrough

Maiikling (2-3 minuto) screen recording na nagpapakita ng:

- Unang login at oryentasyon
- Pag-edit ng homepage
- Pag-update ng iskedyul ng klase
- Pagdaragdag ng bagong trainer

Hindi kailangang maging pulidong produksiyon ang mga ito. Malinaw, kapaki-pakinabang, at partikular sa niche ang mahalaga.

## Ang Pahina ng Account

Kasama sa Ultimate Multisite ang [Pahina ng Account](/user-guide/client-management/account-page) na nakaharap sa kostumer kung saan pinamamahalaan ng mga kostumer ang kanilang subscription. I-customize ito upang:

- Ipakita ang kasalukuyan nilang FitSite plan
- Ipakita ang mga opsyon sa upgrade na may mga benepisyong partikular sa fitness
- Magbigay ng billing history at mga download ng invoice
- Mag-link sa mga help resource

## Pagsukat ng Tagumpay ng Onboarding

Subaybayan ang mga indicator na ito upang malaman kung gumagana ang iyong onboarding:

- **Activation rate**: Ilang porsyento ng mga signup ang talagang nagka-customize ng kanilang site sa loob ng unang linggo?
- **Mga login sa unang linggo**: Ilang beses nag-log in ang bagong kostumer sa kanilang unang linggo?
- **Mga support ticket mula sa mga bagong kostumer**: Ang mataas na volume ay nangangahulugang may mga puwang ang iyong onboarding
- **Conversion mula trial tungo sa bayad**: Kung nag-aalok ka ng mga trial, ilang porsyento ang nagko-convert?

## Ang FitSite Network Sa Ngayon

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

## Ang Binuo Natin sa Araling Ito

- **Isang ginabayang karanasan sa unang login** na may Quick Start widget
- **Isang pinasimpleng dashboard** na nakatuon sa mga gawain sa pamamahala ng fitness site
- **Isang welcome email sequence** na gumagabay sa mga kostumer sa kanilang unang linggo
- **Mga help resource na partikular sa niche** na isinulat para sa mga may-ari ng fitness studio na hindi teknikal
- **Mga onboarding metric** upang subaybayan at pagbutihin ang karanasan

---

**Susunod:** [Aralin 9: Pagpepresyo para sa Kita](lesson-9-pricing) -- pinapahusay natin ang estratehiya sa pagpepresyo upang mapalaki ang kita at mapababa ang churn.
