---
title: 'Lezzjoni 8: L-Integrazzjoni tal-Klijenti'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Lezzjoni 8: Onboarding tal-Klijenti {#lesson-8-customer-onboarding}

Li ġġiegħel klijent jirreġistra huwa biss nofs ix-xogħol. Jekk jidħol, iħossu mgħobbi żżejjed, u qatt ma jerġa’ jiġi lura, tkun tliftu. Din il-lezzjoni tfassal l-esperjenza li tbiddel reġistrazzjoni ġdida f’klijent attiv u impenjat.

## Fejn Ħallejna {#where-we-left-off}

FitSite huwa kompletament branded b’fluss ta’ checkout li jaħdem. Issa niffukaw fuq x’jiġri wara li sid ta’ studio tal-fitness itemm ir-reġistrazzjoni u jasal fuq is-sit il-ġdid tiegħu għall-ewwel darba.

## Għaliex l-Onboarding Huwa Importanti {#why-onboarding-matters}

L-ewwel 30 minuta wara r-reġistrazzjoni jiddeterminaw jekk klijent jibqax jew jitlaqx. Sid ta’ studio tal-fitness li:

- Jidħol u jara sit li diġà jidher bħal website tal-fitness → jibqa’
- Jaf eżattament x’għandu jagħmel imiss → jibqa’
- Iħossu mitluf f’Dashboard ġeneriku ta’ WordPress → jitlaq

It-templates tan-niċċa tiegħek (Lezzjoni 4) jieħdu ħsieb l-ewwel punt. Din il-lezzjoni tieħu ħsieb it-tieni wieħed.

## L-Esperjenza tal-Ewwel Login {#the-first-login-experience}

### Widget ta’ Dashboard ta’ Merħba {#welcome-dashboard-widget}

Oħloq widget personalizzat tad-dashboard li jilqa’ lill-klijenti l-ġodda u jiggwidahom matul is-setup. Dan għandu jidher b’mod prominenti meta jidħlu għall-ewwel darba.

**Bidu Mgħaġġel ta’ FitSite:**

1. **Żid l-isem u l-logo tal-istudio tiegħek** -- Link għas-settings ta’ Customizer jew Site Identity
2. **Aġġorna l-iskeda tal-klassijiet tiegħek** -- Link direttament għall-editur tal-paġna Classes
3. **Żid it-trainers tiegħek** -- Link għall-editur tal-paġna Trainers
4. **Issettja d-dettalji ta’ kuntatt tiegħek** -- Link għall-editur tal-paġna Contact
5. **Ippruvja s-sit tiegħek** -- Link għall-frontend

Kull pass jillinkja direttament mal-paġna jew is-setting rilevanti. Ebda tfittxija fil-menus.

### Issimplifika d-Dashboard {#simplify-the-dashboard}

Klijenti ġodda m’għandhomx bżonn jaraw kull oġġett tal-menu ta’ WordPress. Ikkunsidra:

- Taħbi oġġetti tal-menu li mhumiex rilevanti għall-ġestjoni ta’ sit tal-fitness (eż., Comments jekk ma jintużax)
- Terġa’ tirranġa l-menu biex tqiegħed l-aktar oġġetti użati l-ewwel
- Żid tikketti personalizzati tal-menu li jagħmlu sens għan-niċċa ("L-Istudio Tiegħek" minflok "Appearance")

L-addon [Plugin & Theme Manager](/addons/plugin-and-theme-manager) jista’ jgħin jikkontrolla dak li jaraw il-klijenti.

## Sekwenza ta’ Emails ta’ Merħba {#welcome-email-sequence}

Email waħda ta’ merħba mhix biżżejjed. Issettja sekwenza li tiggwida lill-klijenti matul l-ewwel ġimgħa tagħhom:

### Email 1: Merħba (Minnufih wara r-reġistrazzjoni) {#email-1-welcome-immediately-after-signup}

- Suġġett: "Merħba f’FitSite -- il-website tal-istudio tiegħek hija live"
- Kontenut: Link tal-login, passi ta’ bidu mgħaġġel, link għal riżorsi ta’ għajnuna
- Ton: Entużjast, inkoraġġanti, speċifiku għall-fitness

### Email 2: Rebħiet Mgħaġġla (Jum 1) {#email-2-quick-wins-day-1}

- Suġġett: "3 affarijiet li għandek tagħmel l-ewwel fuq il-FitSite tiegħek"
- Kontenut: Żid il-logo tiegħek, aġġorna l-immaġni hero tal-homepage, żid l-iskeda tal-klassijiet tiegħek
- Inkludi screenshots li juru eżattament fejn tikklikkja

### Email 3: Agħmlu Tiegħek (Jum 3) {#email-3-make-it-yours-day-3}

- Suġġett: "Agħmel is-sit tal-fitness tiegħek jispikka"
- Kontenut: Ippersonalizza l-kuluri, żid ritratti tat-trainers, ikteb l-istorja tal-istudio tiegħek
- Link għal eżempji ta’ siti tal-fitness eċċellenti fuq il-pjattaforma

### Email 4: Mur Live (Jum 7) {#email-4-go-live-day-7}

- Suġġett: "Lest biex taqsam il-FitSite tiegħek mad-dinja?"
- Kontenut: Checklist ta’ x’għandek tivverifika qabel taqsam, kif tqabbad domain personalizzat (jekk fuq Growth/Pro), pariri għall-qsim soċjali

:::tip Awtomazzjoni tal-Email
Uża [Webhooks](/user-guide/integrations/webhooks) jew [Zapier](/user-guide/integrations/zapier) biex tiskatta dawn l-emails permezz tal-pjattaforma tal-email marketing tiegħek. Dan jagħtik aktar kontroll fuq il-ħin u jippermettilek issegwi l-impenn.
:::

## Riżorsi ta’ Għajnuna {#help-resources}

Oħloq kontenut ta’ għajnuna speċifiku għan-niċċa li jwieġeb il-mistoqsijiet li s-sidien ta’ studios tal-fitness fil-fatt jistaqsu:

### Artikli tal-Knowledge Base {#knowledge-base-articles}

- "Kif taġġorna l-iskeda tal-klassijiet tiegħek"
- "Żieda u editjar ta’ profili tat-trainers"
- "Tibdil tal-logo u l-kuluri tal-istudio tiegħek"
- "Konnessjoni tal-isem tad-domain tiegħek stess" (għall-klijenti Growth/Pro)
- "Żieda ta’ widget tal-booking mas-sit tiegħek"

Ikteb dawn għal utenti mhux tekniċi. Uża screenshots. Evita l-ġargon ta’ WordPress.

### Video Walkthroughs {#video-walkthroughs}

Reġistrazzjonijiet qosra tal-iskrin (2-3 minuti) li juru:

- L-ewwel login u orjentazzjoni
- Editjar tal-homepage
- Aġġornament tal-iskeda tal-klassijiet
- Żieda ta’ trainer ġdid

Dawn m’għandhomx għalfejn ikunu produzzjonijiet illustrati. Dak li jgħodd huwa li jkunu ċari, utli, u speċifiċi għan-niċċa.

## Il-Paġna Account {#the-account-page}

Ultimate Multisite jinkludi [Paġna Account](/user-guide/client-management/account-page) li tħares lejn il-klijent fejn il-klijenti jimmaniġġjaw is-subscription tagħhom. Ippersonalizza din biex:

- Turi l-plan FitSite attwali tagħhom
- Turi għażliet ta’ upgrade b’benefiċċji speċifiċi għall-fitness
- Tipprovdi storja tal-billing u downloads tal-invoices
- Tillinkja għal riżorsi ta’ għajnuna

## Kejl tas-Suċċess tal-Onboarding {#measuring-onboarding-success}

Segwi dawn l-indikaturi biex tkun taf jekk l-onboarding tiegħek hux qed jaħdem:

- **Rata ta’ attivazzjoni**: X’perċentwal ta’ reġistrazzjonijiet fil-fatt jippersonalizzaw is-sit tagħhom fl-ewwel ġimgħa?
- **Logins tal-ewwel ġimgħa**: Kemm-il darba jidħol klijent ġdid matul l-ewwel ġimgħa tiegħu?
- **Tickets ta’ support minn klijenti ġodda**: Volum għoli jfisser li l-onboarding tiegħek għandu lakuni
- **Konverżjoni minn trial għal imħallas**: Jekk toffri trials, x’perċentwal jikkonverti?

## In-Network FitSite Sa Issa {#the-fitsite-network-so-far}

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

## Dak li Bnejna f’Din il-Lezzjoni {#what-we-built-this-lesson}

- **Esperjenza gwidata tal-ewwel login** b’widget ta’ Quick Start
- **Dashboard issimplifikat** iffukat fuq kompiti ta’ ġestjoni ta’ sit tal-fitness
- **Sekwenza ta’ emails ta’ merħba** li tiggwida lill-klijenti matul l-ewwel ġimgħa tagħhom
- **Riżorsi ta’ għajnuna speċifiċi għan-niċċa** miktuba għal sidien mhux tekniċi ta’ studios tal-fitness
- **Metriċi tal-onboarding** biex issegwi u ttejjeb l-esperjenza

---

**Li jmiss:** [Lezzjoni 9: Ipprezzar għall-Qligħ](lesson-9-pricing) -- nirfinaw l-istrateġija tal-ipprezzar biex nimmassimizzaw id-dħul u nimminimizzaw il-churn.
