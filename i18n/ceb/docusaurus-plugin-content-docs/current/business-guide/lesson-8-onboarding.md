---
title: 'Leksyon 8: Pag-onboard sa Kustomer'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Lesson 8: Pag-onboard sa Kustomer {#lesson-8-customer-onboarding}

Ang pagpa-sign up sa usa ka kustomer kay tunga lang sa trabaho. Kon sila mo-log in, mobati og kalibog, ug dili na mubalik, nawala na sila kanimo. Kini nga lesson nagdisenyo sa kasinatian nga makapahimo sa bag-ong pag-sign up nga mahimong aktibo ug interesado nga kustomer.

## Asa Kita Nagpahunong {#where-we-left-off}

Ang FitSite kompleto nang gi-brand uban ang usa ka naglihok nga checkout flow. Karon, magtutok kita sa unsay mahitabo human makompleto na sa fitness studio owner ang pag-sign up ug unang maabot (land) sa ilang bag-ong site.

## Ngano Importante ang Onboarding {#why-onboarding-matters}

Ang unang 30 minutos human sa pag-sign up mao ang magdesisyon kon magpabilin ba o mawala ang kustomer. Ang usa ka fitness studio owner nga:

- Mo-log in ug makakita og site nga morag fitness website na → magpabilin
- Kabalo gyud unsaon pagpadayon → magpabilin
- Mobati og kalibog sa generic WordPress dashboard → mogawas (mo-undang)

Ang imong niche templates (Lesson 4) mo-atubang sa unang punto. Kini nga lesson, mo-atubang sa ikaduha.

## Ang Unang Pag-log In Experience {#the-first-login-experience}

### Welcome Dashboard Widget {#welcome-dashboard-widget}

Pagmugna og custom dashboard widget nga mo-greet sa bag-ong kustomer ug maggiya kanila sa pag-setup. Kinahanglan kini makita dayon kon unang mo-log in sila.

**FitSite Quick Start:**

1. **Idugang ang ngalan sa imong studio ug logo** -- Link sa Customizer o Site Identity settings
2. **I-update ang imong class schedule** -- Direktang link sa Classes page editor
3. **Idugang ang imong mga trainer** -- Link sa Trainers page editor
4. **I-set ang imong contact details** -- Link sa Contact page editor
5. **Ipa-preview ang imong site** -- Link sa frontend

Ang matag lakang direkta nga naglink sa may kalabutan nga page o setting. Walay pagpangita pa sa mga menu.

### Pagpasimple sa Dashboard {#simplify-the-dashboard}

Dili kinahanglan makakita ang bag-ong kustomer sa tanang WordPress menu item. Hunahunaa kini:

- Pagtago sa mga menu items nga dili importante sa pagdumala sa fitness site (pananglitan, Comments kon wala gamit)
- Pagsaylo og order sa menu aron ilisan ang labing gigamit nga mga butang sa una
- Pagdugang og custom menu labels nga makatarunganon alang sa niche ("Imong Studio" imbis "Appearance")

Ang [Plugin & Theme Manager](/addons/plugin-and-theme-manager) addon makatabang sa pagkontrol kung unsa ang makita sa kustomer.

## Welcome Email Sequence {#welcome-email-sequence}

Dili igo ang usa ka welcome email lang. Pag-set up og sequence nga maggiya sa mga kustomer sulod sa ilang unang semana:

### Email 1: Welcome (Pagkahuman dayon sa pag-sign up) {#email-1-welcome-immediately-after-signup}

- Subject: "Welcome to FitSite -- live na imong studio website"
- Content: Login link, quick start steps, link sa help resources
- Tone: Excited, encouraging, fitness-specific

### Email 2: Quick Wins (Adlaw 1) {#email-2-quick-wins-day-1}

- Subject: "3 butang nga buhaton una sa imong FitSite"
- Content: Idugang ang logo, i-update ang homepage hero image, idugang ang class schedule
- Apil og screenshots nga nagpakita kung asa eksakto mo-klik

### Email 3: Make It Yours (Adlaw 3) {#email-3-make-it-yours-day-3}

- Subject: "Pagpatingog sa imong fitness site"
- Content: Icustomize ang mga kolor, dugangi ang litrato sa trainer, isulat ang istorya sa studio nimo
- Link sa mga ehemplo sa maayo nga fitness sites sa platform

### Email 4: Go Live (Adlaw 7) {#email-4-go-live-day-7}

- Subject: "Andam na ba nimong ipaambit ang imong FitSite sa kalibutan?"
- Content: Checklist sa unsay i-verify sa dili pa ipaambit, unsaon pagkonektar og custom domain (kon naa sa Growth/Pro), tips sa social sharing

:::tip Email Automation
Gamita ang [Webhooks](/user-guide/integrations/webhooks) o [Zapier](/user-guide/integrations/zapier) aron ma-trigger kining mga email pinaagi sa imong email marketing platform. Kini makahatag kanimo og mas daghang kontrol sa pag-timing ug makapahimo nimo nga ma-track ang engagement.
:::

## Help Resources {#help-resources}

Pagmugna og help content nga espesipiko sa niche nga mohatag og tubag sa mga pangutana nga aktuwal nga gipangutana sa fitness studio owners:

### Knowledge Base Articles {#knowledge-base-articles}

- "Unsaon pag-update sa imong class schedule"
- "Pagdugang ug pag-edit sa trainer profiles"
- "Pagsaylo sa logo ug kolor sa studio nimo"
- "Pagkonektar sa kaugalingong domain name" (para sa Growth/Pro customers)
- "Pagdugang og booking widget sa imong site"

Isulat kini alang sa mga dili teknikal nga user. Gamit og screenshots. Likayi ang WordPress jargon.

### Video Walkthroughs {#video-walkthroughs}

Mubo (2-3 minutos) nga screen recordings nga nagpakita niini:

- Unang pag-log in ug oryentasyon
- Pag-edit sa homepage
- Pag-update sa class schedule
- Pagdugang og bag-ong trainer

Dili kinahanglan kining maayo kaayo ang produksyon. Ang klaro, makatabang, ug niche-specific mao ang importante.

## The Account Page {#the-account-page}

Ang Ultimate Multisite naglakip og customer-facing [Account Page](/user-guide/client-management/account-page) diin ang mga kustomer mo-manage sa ilang subscription. Icustomize kini aron:

- Makita nila ang ilang kasamtangang FitSite plan
- Magpakita og upgrade options nga adunay fitness-specific benefits
- Mohatag og billing history ug invoice downloads
- Link sa help resources

## Pagsukod sa Onboarding Success {#measuring-onboarding-success}

I-track kining mga indicator aron masayran kon naglihok ba ang imong onboarding:

- **Activation rate**: Porsyento sa pag-sign up nga aktwal nga nagcustomize sa ilang site sulod sa unang semana?
- **First-week logins**: Pila ka beses mo-log in ang bag-ong kustomer sulod sa ilang unang semana?
- **Support tickets from new customers**: Ang taas nga volume nagpasabot nga dunay mga kakulangan (gaps) sa imong onboarding
- **Trial-to-paid conversion**: Kon magtanyag ka og trials, pila ka porsyento ang mo-convert?

## The FitSite Network So Far {#the-fitsite-network-so-far}

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

## Unsa ang Nato'y Gibuhat Niining Lesson {#what-we-built-this-lesson}

- **Uma-guide nga first-login experience** uban sa Quick Start widget
- **Gipasimple nga dashboard** nga nagtutok sa mga buluhaton sa pagdumala sa fitness site
- **Welcome email sequence** nga maggiya sa kustomer sulod sa ilang unang semana
- **Niche-specific help resources** nga gisulat alang sa dili teknikal nga fitness studio owners
- **Onboarding metrics** aron ma-track ug mapauswag ang kasinatian

---

**Next:** [Lesson 9: Pricing for Profit](lesson-9-pricing) -- atong himoan og refinement ang pricing strategy aron mapadako ang revenue ug makunhoy ang churn.
