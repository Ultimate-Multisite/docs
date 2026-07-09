---
title: 'പാഠം 10: ലോഞ്ച് ദിനം'
sidebar_position: 11
_i18n_hash: 49ba467b8efba57e92cf072bcec53969
---
# പാഠം 10: ലോഞ്ച് ദിനം {#lesson-10-launch-day}

എല്ലാം തയ്യാറായി കഴിഞ്ഞു. വാതിലുകൾ തുറക്കുന്നതിന് മുൻപ്, ഒന്നും തകരാറിലായോ, നഷ്ടമായോ, അല്ലെങ്കിൽ നാണക്കേടായോ ഇരിക്കില്ലെന്ന് ഉറപ്പാക്കാൻ ഈ പാഠം ഒരു പ്രീ-ലോഞ്ച് ചെക്ക്‌ലിസ്റ്റ് വഴി നമ്മെ നയിക്കുന്നു.

## നമ്മൾ എവിടെ വരെ എത്തി {#where-we-left-off}

FitSite-ൽ templates, plans, checkout, branding, onboarding, pricing എന്നിവയെല്ലാം configure ചെയ്തിട്ടുണ്ട്. ഇപ്പോൾ നമ്മൾ എല്ലാം ശരിയായി പ്രവർത്തിക്കുന്നുണ്ടോ എന്ന് പരിശോധിക്കുകയും ലൈവായി മാറ്റുകയും ചെയ്യണം.

## പ്രീ-ലോഞ്ച് ചെക്ക്‌ലിസ്റ്റ് {#pre-launch-checklist}

ഓരോ ഇനവും പരിശോധിച്ച് ഉറപ്പാക്കുക. ഒന്നും ഒഴിവാക്കരുത്.

### പ്ലാറ്റ്‌ഫോം ഇൻഫ്രാസ്ട്രക്ചർ (Platform Infrastructure) {#platform-infrastructure}

- [ ] Hosting stable ആണോ, കൂടാതെ ഭാരം വന്നാലും നന്നായി പ്രവർത്തിക്കുന്നുണ്ടോ
- [ ] Wildcard SSL active ആണോ, എല്ലാ സബ്ഡൊമെയ്‌നുകളും HTTPS വഴി സേവനം നൽകുന്നുണ്ടോ
- [ ] Domain mapping ശരിയായി പ്രവർത്തിക്കുന്നുണ്ടോ -- ഒരു സൈറ്റ് ഉണ്ടാക്കി കസ്റ്റം ഡൊമെയ്ൻ മാപ്പ് ചെയ്യുന്നത് പരീക്ഷിക്കുക
- [ ] Backups configure ചെയ്യുകയും പരീക്ഷിക്കുകയും ചെയ്തിട്ടുണ്ടോ (പരിശോധിക്കാൻ കുറഞ്ഞത് ഒന്ന് restore ചെയ്യുക)
- [ ] Monitoring സംവിധാനം സജ്ജീകരിച്ചിട്ടുണ്ടോ -- പ്ലാറ്റ്‌ഫോം ഡൗൺ ആയാൽ നമുക്ക് അറിയാൻ കഴിയണം

### Templates {#templates}

- [ ] മൂന്ന് templates-ഉം പുതിയ സൈറ്റുകളിൽ ശരിയായി ലോഡ് ആകുന്നുണ്ടോ
- [ ] Placeholder content സഹായകരമാണോ, ടൈപ്പോഗ്രാഫിക്കുകളില്ലേ
- [ ] എല്ലാ ചിത്രങ്ങളും ശരിയായ ലൈസൻസിലാണ് ഉള്ളത് (stock photo watermark ഇല്ലാതെ)
- [ ] എല്ലാ template പേജുകളിലും Mobile responsiveness ശരിയായി പ്രവർത്തിക്കുന്നുണ്ടോ
- [ ] പേജ് ലോഡ് സ്പീഡ് സ്വീകാര്യമാണോ (GTmetrix അല്ലെങ്കിൽ PageSpeed Insights പോലുള്ള ടൂളുകൾ ഉപയോഗിച്ച് പരീക്ഷിക്കുക)
- [ ] ഏതെങ്കിലും template-ൽ broken links അല്ലെങ്കിൽ നഷ്ടപ്പെട്ട assets ഇല്ലേ

### Plans and Products {#plans-and-products}

- [ ] മൂന്ന് plans-ഉം active ആണോ, കാണാൻ കഴിയുന്നുണ്ടോ
- [ ] Plan വിവരണങ്ങൾ കൃത്യവും niche-specific ആയതുമാണോ
- [ ] വിലകൾ ശരിയാണോ (മാസവരിയും വാർഷികവും)
- [ ] Setup fees ശരിയായ plans-ൽ configure ചെയ്തിട്ടുണ്ടോ
- [ ] Starter plan-ൽ trial period ശരിയായി പ്രവർത്തിക്കുന്നുണ്ടോ
- [ ] Checkout സമയത്ത് Order bumps ശരിയായി കാണുന്നുണ്ടോ
- [ ] Plan അനുസരിച്ച് Plugin, theme പരിമിതികൾ ശരിയായി നടപ്പിലാക്കിയിട്ടുണ്ടോ

### Checkout Flow {#checkout-flow}

- [ ] ഓരോ plan-ലും ഒരു പൂർണ്ണമായ test signup നടത്തുക (test payment mode ഉപയോഗിക്കുക)
- [ ] Template selection plan അനുസരിച്ച് ശരിയായ templates കാണിക്കുന്നുണ്ടോ
- [ ] പേയ്‌മെന്റ് വിജയകരമായി പ്രോസസ്സ് ചെയ്യുന്നുണ്ടോ
- [ ] signup ചെയ്ത ശേഷം customer-ന് welcome email ലഭിക്കുന്നുണ്ടോ
- [ ] ശരിയായ template ഉപയോഗിച്ച് പുതിയ സൈറ്റ് സൃഷ്ടിക്കപ്പെടുന്നുണ്ടോ
- [ ] customer-ന് അവരുടെ പുതിയ സൈറ്റിൽ ഉടൻ ലോഗിൻ ചെയ്യാൻ കഴിയുന്നുണ്ടോ
- [ ] Discount codes ശരിയായി പ്രവർത്തിക്കുന്നുണ്ടോ

### Branding {#branding}

- [ ] Login page-ൽ FitSite branding കാണിക്കുന്നുണ്ടോ
- [ ] Admin dashboard-ൽ FitSite branding കാണിക്കുന്നുണ്ടോ
- [ ] എല്ലാ system emails-ഉം FitSite branding, കൂടാതെ fitness-specific ഭാഷ ഉപയോഗിക്കുന്നുണ്ടോ
- [ ] Invoices നിങ്ങളുടെ ബിസിനസ് വിവരങ്ങൾ സഹിതം ശരിയായി പ്രദർശിപ്പിക്കുന്നുണ്ടോ
- [ ] Marketing site live ആണ്, കൂടാതെ checkout form-ലേക്ക് ലിങ്ക് ചെയ്യുന്നുണ്ടോ

### Onboarding {#onboarding}

- [ ] Quick Start widget പുതിയ customer dashboard-ൽ പ്രത്യക്ഷപ്പെടുന്നുണ്ടോ
- [ ] എല്ലാ Quick Start ലിങ്കുകളും ശരിയായ പേജുകളിലേക്ക് പോവുന്നുണ്ടോ
- [ ] Welcome email sequence configure ചെയ്യുകയും പരീക്ഷിക്കുകയും ചെയ്തിട്ടുണ്ടോ
- [ ] Knowledge base articles പ്രസിദ്ധീകരിക്കുകയും ലഭ്യമാക്കുകയും ചെയ്തിട്ടുണ്ടോ
- [ ] Account page ശരിയായ plan വിവരങ്ങളും upgrade ഓപ്ഷനുകളും കാണിക്കുന്നുണ്ടോ

### Legal and Business {#legal-and-business}

- [ ] Terms of service പ്രസിദ്ധീകരിക്കുകയും checkout-ൽ നിന്ന് ലിങ്ക് ചെയ്യുകയും ചെയ്തിട്ടുണ്ടോ
- [ ] Privacy policy പ്രസിദ്ധീകരിക്കുകയും ലഭ്യമാക്കുകയും ചെയ്തിട്ടുണ്ടോ
- [ ] Refund policy നിർവചിക്കുകയും രേഖപ്പെടുത്തുകയും ചെയ്തിട്ടുണ്ടോ
- [ ] പണം സ്വീകരിക്കുന്നതിനായി ബിസിനസ് സ്ഥാപനം സജ്ജീകരിച്ചിട്ടുണ്ടോ
- [ ] Payment gateway live mode-ൽ ആണ് (test mode അല്ല)
- [ ] നിങ്ങളുടെ അധികാരപരിധിക്ക് അനുസരിച്ചുള്ള Tax configuration ശരിയാണോ

## Soft Launch vs. Hard Launch {#soft-launch-vs-hard-launch}

രണ്ട് ഘട്ടങ്ങളുള്ള ഒരു ലോഞ്ച് പരിഗണിക്കുക:

### ഘട്ടം 1: Soft Launch {#phase-1-soft-launch}

പൊതുജനങ്ങൾക്ക് ലോഞ്ച് ചെയ്യുന്നതിന് മുൻപ് 5-10 ഫിറ്റ്നസ് സ്റ്റുഡിയോ ഉടമകളെ sign up ചെയ്യാൻ ക്ഷണിക്കുക. ഇവർ നിങ്ങളുടെ ബീറ്റാ customer-കളാണ്. ഇതിന് പകരമായി ഒരു വലിയ കിഴിവ് (ജീവിതകാലത്തേക്ക് 50% കിഴിവ്, അല്ലെങ്കിൽ 3 മാസം സൗജന്യം) നൽകുക:

- signup, onboarding അനുഭവത്തെക്കുറിച്ചുള്ള സത്യസന്ധമായ ഫീഡ്‌ബാക്ക്
- അവരുടെ സൈറ്റ് ഒരു show-case ഉദാഹരണമായി ഉപയോഗിക്കാനുള്ള അനുമതി
- അവർ നേരിടുന്ന ഏതെങ്കിലും ബഗ്ഗുകളോ പ്രശ്നങ്ങളോ റിപ്പോർട്ട് ചെയ്യുന്നത്

ഇത് നിങ്ങൾക്ക് യഥാർത്ഥ customer ഫീഡ്‌ബാക്കും പൊതുജനങ്ങൾക്ക് മുന്നിൽ കാണിക്കാനുള്ള live സൈറ്റുകളും നൽകുന്നു.

### ഘട്ടം 2: Public Launch {#phase-2-public-launch}

soft launch ഫീഡ്‌ബാക്ക് ഉൾപ്പെടുത്തിയ ശേഷം:

- payment gateway live mode-ലേക്ക് മാറ്റുക
- നിങ്ങളുടെ marketing site പ്രസിദ്ധീകരിക്കുക
- customer acquisition ആരംഭിക്കുക (Lesson 11)
- ബന്ധപ്പെട്ട ഫിറ്റ്നസ് ഇൻഡസ്ട്രി ചാനലുകളിൽ പ്രഖ്യാപിക്കുക

## ലോഞ്ച് ദിവസത്തെ പ്രവർത്തനങ്ങൾ {#launch-day-actions}

നിങ്ങൾ പൊതുജനങ്ങൾക്ക് മുന്നിൽ എത്തുന്ന ദിവസം:

1. **live payments-ലേക്ക് മാറ്റുക** -- നിങ്ങളുടെ payment gateway-യിലെ test mode disable ചെയ്യുക
2. **വീണ്ടും പരിശോധിക്കുക** -- യഥാർത്ഥ പണം ഉപയോഗിച്ച് ഒരു പൂർണ്ണമായ test signup നടത്തുക (പിന്നീട് നിങ്ങൾക്ക് തന്നെ റീഫണ്ട് ചെയ്യാം)
3. **ശ്രദ്ധയോടെ നിരീക്ഷിക്കുക** -- പിഴവുകൾ, failed signups, അല്ലെങ്കിൽ പേയ്‌മെന്റ് പ്രശ്നങ്ങൾ എന്നിവ ശ്രദ്ധിക്കുക
4. **ലഭ്യരായിരിക്കുക** -- നിങ്ങളുടെ ആദ്യത്തെ യഥാർത്ഥ customer-കൾക്ക് സഹായം ആവശ്യമായി വന്നേക്കാം, വേഗത്തിലുള്ള പ്രതികരണം വിശ്വാസം വർദ്ധിപ്പിക്കും
5. **ചെറിയ ആഘോഷം നടത്തുക** -- അതിനുശേഷം ജോലിയിൽ ശ്രദ്ധിക്കുക

## എന്ത് തെറ്റുപറ്റാം {#what-can-go-wrong}

ഇവയ്ക്ക് തയ്യാറെടുക്കുക:

- **Payment gateway പ്രശ്നങ്ങൾ**: നിങ്ങളുടെ gateway provider-യുടെ സപ്പോർട്ട് കോൺടാക്റ്റ് തയ്യാറാക്കി വെക്കുക
- **SSL certificate പ്രശ്നങ്ങൾ**: സർട്ടിഫിക്കറ്റുകൾ എങ്ങനെ പരിശോധിക്കണം, പുതുക്കണം എന്ന് അറിയുക
- **Email delivery failure**: ഇമെയിലുകൾ ശരിക്കും എത്തുന്നുണ്ടോ എന്ന് പരീക്ഷിക്കുക (spam folders പരിശോധിക്കുക)
- **Performance under load**: നിങ്ങൾക്ക് ട്രാഫിക് വർദ്ധനവ് വന്നാൽ, നിങ്ങളുടെ hosting എങ്ങനെ scale ചെയ്യണമെന്ന് അറിയുക
- **Customer confusion**: നിങ്ങളുടെ knowledge base, സപ്പോർട്ട് ചാനലുകൾ എന്നിവ തയ്യാറാക്കി വെക്കുക

## FitSite Network ഇതുവരെ ചെയ്തത് {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode) ✓
├── Ultimate Multisite (configured + branded) ✓
├── Platform Domain (fitsite.com + wildcard SSL) ✓
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain) ✓
├── Products (Starter, Growth, Pro + Order Bumps + Discounts) ✓
├── Checkout Flow (tested end-to-end) ✓
├── Branding (complete) ✓
├── Customer Onboarding (Quick Start, emails, help resources) ✓
├── Pricing Strategy (annual, trials, setup fees, discounts) ✓
├── Pre-Launch Checklist (verified) ✓
├── Soft Launch (beta customers onboarded) ✓
└── LIVE ✓
```

## ഈ പാഠത്തിൽ നമ്മൾ എന്ത് നിർമ്മിച്ചു {#what-we-built-this-lesson}

- ഇൻഫ്രാസ്ട്രക്ചർ, ഉള്ളടക്കം, പേയ്‌മെന്റുകൾ, നിയമങ്ങൾ എന്നിവ ഉൾക്കൊള്ളുന്ന ഒരു സമഗ്രമായ പ്രീ-ലോഞ്ച് ചെക്ക്‌ലിസ്റ്റ്
- പൊതുജനങ്ങൾക്ക് മുന്നിൽ പോകുന്നതിന് മുൻപ് യഥാർത്ഥ ഫീഡ്‌ബാക്ക് ലഭിക്കാനുള്ള ഒരു soft launch തന്ത്രം
- ആത്മവിശ്വാസത്തോടെ live ആവാൻ വേണ്ട ലോഞ്ച് ദിവസത്തെ നടപടിക്രമങ്ങൾ
- സാധാരണ ലോഞ്ച് ദിവസത്തെ പ്രശ്നங்களுக்கான ഒരു contingency plan

---

**അടുത്തത്:** [Lesson 11: Finding Customers](lesson-11-customers) -- FitSite ലൈവായി ആയ സ്ഥിതിക്ക്, ഫിറ്റ്നസ് സ്റ്റുഡിയോ ഉടമകളെ sign up ചെയ്യാൻ എങ്ങനെ പ്രേരിപ്പിക്കും?
