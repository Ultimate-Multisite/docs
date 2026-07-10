---
title: 'Nkuzi 8: Ịnabata ndị ahịa ọhụrụ'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Ihe Ọmụmụ 8: Ịnabata Ndị Ahịa {#lesson-8-customer-onboarding}

Ime ka onye ahịa debanye aha bụ naanị ọkara ọrụ. Ọ bụrụ na ha abanye, nwee mgbagwoju anya, ma ghara ịlaghachi ọzọ, ị tufuo ha. Ihe ọmụmụ a na-emepụta ahụmịhe nke na-eme ka ndebanye aha ọhụrụ ghọọ onye ahịa na-arụsi ọrụ ike ma na-etinye aka.

## Ebe Anyị Kwụsịrị {#where-we-left-off}

E tinyela akara FitSite nke ọma, ma usoro checkout na-arụ ọrụ. Ugbu a anyị na-elekwasị anya n’ihe na-eme mgbe onye nwe ụlọ mgbatị ahụ mechara ndebanye aha ma rute na saịtị ọhụrụ ha maka oge mbụ.

## Ihe Mere Onboarding Ji Dị Mkpa {#why-onboarding-matters}

Nkeji 30 mbụ mgbe ndebanye aha gasịrị na-ekpebi ma onye ahịa ga-anọ ma ọ bụ hapụ. Onye nwe ụlọ mgbatị ahụ nke:

- Na-abanye ma hụ saịtị nke dịrịla ka weebụsaịtị mgbatị ahụ → na-anọ
- Maara kpọmkwem ihe ọ ga-eme na-esote → na-anọ
- Na-enwe mgbagwoju anya n’ime WordPress Dashboard nkịtị → na-apụ

Ụdị niche gị (Ihe Ọmụmụ 4) na-elekọta isi okwu mbụ. Ihe ọmụmụ a na-elekọta nke abụọ.

## Ahụmịhe Mbanye Mbụ {#the-first-login-experience}

### Widget Dashboard Nnabata {#welcome-dashboard-widget}

Mepụta widget Dashboard ahaziri ahazi nke na-ekele ndị ahịa ọhụrụ ma na-eduzi ha n’usoro nhazi. Nke a kwesịrị ịpụta nke ọma mgbe ha banyere na mbụ.

**Mmalite Ngwa Ngwa FitSite:**

1. **Tinye aha na logo ụlọ mgbatị gị** -- Njikọ gaa na Customizer ma ọ bụ ntọala Site Identity
2. **Melite usoro klas gị** -- Njikọ ozugbo gaa na editọ peeji Classes
3. **Tinye ndị nkuzi gị** -- Njikọ gaa na editọ peeji Trainers
4. **Tọọ nkọwa kọntaktị gị** -- Njikọ gaa na editọ peeji Contact
5. **Lelee saịtị gị tupu oge eruo** -- Njikọ gaa na frontend

Nzọụkwụ ọ bụla na-ejikọ ozugbo na peeji ma ọ bụ ntọala metụtara ya. Enweghị ịchọgharị n’ime menu.

### Mee Ka Dashboard Dị Mfe {#simplify-the-dashboard}

Ndị ahịa ọhụrụ achọghị ịhụ ihe menu WordPress niile. Tụlee:

- Izobe ihe menu ndị na-adịghị mkpa maka njikwa saịtị mgbatị ahụ (dịka, Comments ma ọ bụrụ na ejighị ya)
- Ịhazigharị menu ka ihe ndị a na-ejikarị bụrụ nke mbụ
- Ịgbakwunye akara menu ahaziri ahazi nke bara uru maka niche ahụ ("Ụlọ Mgbatị Gị" kama "Ọdịdị")

Addon [Njikwa Plugin & Theme](/addons/plugin-and-theme-manager) nwere ike inyere aka ijikwa ihe ndị ahịa na-ahụ.

## Usoro Email Nnabata {#welcome-email-sequence}

Otu email nnabata ezughị. Hazie usoro nke na-eduzi ndị ahịa n’izu mbụ ha:

### Email 1: Nnabata (Ozugbo ndebanye aha gasịrị) {#email-1-welcome-immediately-after-signup}

- Isiokwu: "Nnọọ na FitSite -- weebụsaịtị ụlọ mgbatị gị dị ndụ"
- Ọdịnaya: Njikọ mbanye, nzọụkwụ mmalite ngwa ngwa, njikọ gaa na enyemaka
- Ụda: Obi ụtọ, na-agba ume, metụtara mgbatị ahụ kpọmkwem

### Email 2: Mmeri Ngwa Ngwa (Ụbọchị 1) {#email-2-quick-wins-day-1}

- Isiokwu: "Ihe 3 ị ga-eme mbụ na FitSite gị"
- Ọdịnaya: Tinye logo gị, melite onyonyo hero nke homepage, tinye usoro klas gị
- Gụnye screenshot na-egosi kpọmkwem ebe a ga-pịa

### Email 3: Mee Ka Ọ Bụrụ Nke Gị (Ụbọchị 3) {#email-3-make-it-yours-day-3}

- Isiokwu: "Mee ka saịtị mgbatị gị pụta ìhè"
- Ọdịnaya: Hazie agba, tinye foto ndị nkuzi, dee akụkọ ụlọ mgbatị gị
- Njikọ gaa na ihe atụ nke saịtị mgbatị dị mma n’elu platform ahụ

### Email 4: Gaa Live (Ụbọchị 7) {#email-4-go-live-day-7}

- Isiokwu: "Ị dị njikere ịkekọrịta FitSite gị na ụwa?"
- Ọdịnaya: Ndepụta ihe ị ga-enyocha tupu ịkekọrịta, otu esi ejikọ custom domain (ma ọ bụrụ na ọ bụ Growth/Pro), ndụmọdụ ịkekọrịta na social

:::tip Akpaghị Aka Email
Jiri [Webhooks](/user-guide/integrations/webhooks) ma ọ bụ [Zapier](/user-guide/integrations/zapier) kpalite email ndị a site na platform email marketing gị. Nke a na-enye gị njikwa ka ukwuu n’oge izipu ma na-enye gị ohere iso engagement.
:::

## Ihe Enyemaka {#help-resources}

Mepụta ọdịnaya enyemaka metụtara niche kpọmkwem nke na-aza ajụjụ ndị nwe ụlọ mgbatị ahụ na-ajụ n’eziokwu:

### Edemede Knowledge Base {#knowledge-base-articles}

- "Otu esi emelite usoro klas gị"
- "Ịgbakwunye na idezi profaịlụ ndị nkuzi"
- "Ịgbanwe logo na agba ụlọ mgbatị gị"
- "Ijikọ aha domain nke gị" (maka ndị ahịa Growth/Pro)
- "Ịgbakwunye widget booking na saịtị gị"

Dee ndị a maka ndị ọrụ na-abụghị ndị teknụzụ. Jiri screenshot. Zere jargon WordPress.

### Njegharị Vidio {#video-walkthroughs}

Ndekọ ihuenyo dị mkpirikpi (nkeji 2-3) na-egosi:

- Mbanye mbụ na nghọta ebe ihe dị
- Idezi homepage
- Imelite usoro klas
- Ịgbakwunye onye nkuzi ọhụrụ

Ihe ndị a achọghị ịbụ mmepụta a sachara nke ukwuu. Ihe dị mkpa bụ ka ọ doo anya, baa uru, ma bụrụ nke metụtara niche kpọmkwem.

## Peeji Account {#the-account-page}

Ultimate Multisite gụnyere [Peeji Account](/user-guide/client-management/account-page) nke ndị ahịa na-ahụ, ebe ndị ahịa na-ejikwa subscription ha. Hazie nke a ka ọ:

- Gosi plan FitSite ha dị ugbu a
- Gosipụta nhọrọ upgrade nwere uru metụtara mgbatị ahụ kpọmkwem
- Nye akụkọ billing na nbudata invoice
- Jikọọ gaa na ihe enyemaka

## Ịlele Ihe Ịga nke Ọma Onboarding {#measuring-onboarding-success}

Soro ihe ngosi ndị a iji mara ma onboarding gị na-arụ ọrụ:

- **Ọnụego activation**: Pasent ole nke ndị debanyere aha na-ahazi saịtị ha n’eziokwu n’ime izu mbụ?
- **Mbanye izu mbụ**: Ugboro ole ka onye ahịa ọhụrụ na-abanye n’ime izu mbụ ha?
- **Tiketi nkwado sitere n’aka ndị ahịa ọhụrụ**: Ọnụ ọgụgụ dị elu pụtara na onboarding gị nwere oghere
- **Ntughari site na trial gaa na paid**: Ọ bụrụ na ị na-enye trial, pasent ole na-atụgharị?

## Netwọkụ FitSite Ruo Ugbu A {#the-fitsite-network-so-far}

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

## Ihe Anyị Wuru n’Ihe Ọmụmụ A {#what-we-built-this-lesson}

- **Ahụmịhe mbanye mbụ nwere nduzi** nwere widget Quick Start
- **Dashboard e mere ka ọ dị mfe** lekwasịrị anya n’ọrụ njikwa saịtị mgbatị ahụ
- **Usoro email nnabata** nke na-eduzi ndị ahịa n’izu mbụ ha
- **Ihe enyemaka metụtara niche kpọmkwem** edere maka ndị nwe ụlọ mgbatị ahụ na-abụghị ndị teknụzụ
- **Metrics onboarding** iji soro ma melite ahụmịhe ahụ

---

**Na-esote:** [Ihe ọmụmụ 9: Ịtọ ọnụahịa maka Uru](lesson-9-pricing) -- anyị na-emezi atụmatụ ọnụahịa ka ego mbata bawanye ma belata churn.
