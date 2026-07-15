---
title: 'Casharka 7: Ka dhigista mid adiga kuu gaar ah'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Cashar 7: Ka Dhigista Mid Adiga Kuu Gaar Ah

Macaamiishaadu marnaba waa inaysan dareemin inay isticmaalayaan "plugin WordPress oo uun." Waa inay dareemaan inay isticmaalayaan FitSite -- madal loo dhisay warshaddooda. Casharkani wuxuu daboolayaa sumadeynta, white-labeling, iyo ka dhigista madasha inay u ekaato badeecad.

## Halkii Aan Ku Joognay {#where-we-left-off}

FitSite wuxuu leeyahay socod checkout shaqaynaya oo milkiilayaasha xarumaha jimicsiga ka qaada xulashada qorshaha ilaa site nool. Hadda waxaan ka dhigaynaa waayo-aragnimada oo dhan inay u ekaato badeecad isku xidhan oo sumadaysan.

## Domain-ka Madashaada {#your-platform-domain}

Aasaaska sumaddaadu waa domain-kaaga. FitSite ahaan:

- **Domain-ka ugu weyn**: `fitsite.com` (site-kaaga suuqgeynta iyo xididka shabakadda)
- **Site-yada macaamiisha**: `studioname.fitsite.com` (subdomains)
- **Custom domains**: Macaamiisha ku jira qorshayaasha Growth iyo Pro waxay map-gareyn karaan domain-kooda

### Dejinta Domain-kaaga {#setting-up-your-domain}

1. Diiwaangeli domain-ka madashaada
2. U tilmaam bixiyaha hosting-kaaga
3. Habee wildcard DNS (`*.fitsite.com`) ee subdomains-ka macaamiisha
4. Hubi in wildcard SSL uu firfircoon yahay

Eeg [Sida Loo Habeeyo Domain Mapping](/user-guide/domain-mapping/how-to-configure-domain-mapping) si aad u hesho tilmaamo faahfaahsan.

## White-Labeling-ka Waayo-aragnimada Admin {#white-labeling-the-admin-experience}

Marka milkiilaha studio jimicsi uu galo dashboard-ka site-kiisa, waa inuu arkaa sumaddaada, ee ma aha WordPress ama sumadeynta Ultimate Multisite.

### Bogga Login-ka Gaarka ah {#custom-login-page}

Habee bogga login-ka WordPress si uu u muujiyo:

- Astaanta FitSite
- Sawirro asal ah oo ku habboon jimicsiga
- Midabbada sumaddaada

### Sumadeynta Dashboard {#dashboard-branding}

Isticmaal addon-ka [Admin Page Creator](/addons/admin-page-creator) ama CSS gaar ah si aad u:

- Ugu beddesho astaanta WordPress astaanta FitSite
- U habeyso nidaamka midabbada admin-ka si uu ula jaanqaado sumaddaada
- Ugu darto widget dashboard gaar ah oo leh xiriirro degdeg ah iyo ilo caawimo oo u gaar ah jimicsiga

### Bogagga Admin-ka Gaarka ah {#custom-admin-pages}

Tixgeli abuurista bogag admin gaar ah oo soo bandhiga ficillada ugu khuseeya milkiilayaasha studio-yada jimicsiga:

- "Wax ka beddel Jadwalka Fasalladaada"
- "Cusboonaysii Profile-yada Tababarayaasha"
- "Arag Site-kaaga"

Tani waxay yaraynaysaa qalooca barashada iyadoo ficillada ku habboon niche-ka la dhigayo meel muuqata halkii lagu qarin lahaa menu-ga caadiga ah ee WordPress.

## Sumadeynta Isgaarsiintaada {#branding-your-communications}

Email kasta, invoice kasta, iyo ogeysiis kasta waa inuu xoojiyo sumaddaada.

### Emails-ka Nidaamka {#system-emails}

U gudub **Ultimate Multisite > Settings > Emails** oo habee dhammaan emails-ka nidaamka:

- **Magaca From**: FitSite
- **Email-ka From**: hello@fitsite.com
- **Templates-ka email-ka**: Isticmaal midabbada sumaddaada iyo astaantaada
- **Luqadda**: Mid u gaar ah jimicsiga meel kasta

Emails muhiim ah oo la habeynayo:

| Email | Nooca Guud | Nooca FitSite |
|-------|----------------|-----------------|
| Soo dhawayn | "Site-kaaga cusub waa diyaar" | "Website-ka studio-gaaga jimicsiga waa live" |
| Rasiidka lacag-bixinta | "Lacag-bixin waa la helay" | "Lacag-bixinta subscription-ka FitSite waa la xaqiijiyay" |
| Tijaabo dhammaanaysa | "Tijaabadaadu goor dhow bay dhammaanaysaa" | "Tijaabadaada FitSite waxay dhammaanaysaa 3 maalmood gudahood -- website-ka studio-gaaga ha sii noolaado" |

### Invoices {#invoices}

Habee templates-ka invoice-ka adigoo ku daraya:

- Astaanta FitSite iyo midabbada sumaddaada
- Faahfaahinta ganacsigaaga
- Magacyada badeecadaha ee u gaar ah jimicsiga (ma aha IDs qorshe oo guud)

## Site-ka U Muuqda Macaamiisha {#the-customer-facing-site}

Domain-kaaga ugu weyn (`fitsite.com`) wuxuu u baahan yahay site suuqgeyn oo iibinaya madasha. Tani way ka duwan tahay admin-ka shabakadda Ultimate Multisite -- waa wejiga dadweynaha ee ganacsigaaga.

Bogagga muhiimka ah:

- **Bogga Hore**: Soo-jeedin qiime cad oo loogu talagalay ganacsiyada jimicsiga
- **Astaamaha**: Waxa FitSite qabto, marka loo eego ereyada jimicsiga
- **Qiimeynta**: Saddexdaada qorshe oo leh isbarbardhigyo astaamo niche-gaar ah
- **Tusaalooyin**: Soo bandhig site-yo lagu dhisay madasha
- **Isdiiwaangeli**: Xiriirro u socda foomkaaga checkout

:::tip Your Marketing Site Can Be a Network Site
Create your marketing site as a site within your own network. This lets you manage it from the same dashboard and demonstrates your own platform's capabilities.
:::

## Custom Domain ee Macaamiisha {#custom-domain-for-customers}

Macaamiisha ku jira qorshayaasha ay ku jiraan custom domains, si cad u qora geeddi-socodka:

1. Macmiilku wuxuu diiwaangeliyaa ama u wareejiyaa domain-kiisa registrar
2. Macmiilku wuxuu cusboonaysiiyaa DNS si uu ugu tilmaamo madashaada (bixi records sax ah)
3. Ultimate Multisite wuxuu maareeyaa domain mapping-ka iyo SSL

Abuur maqaal caawimo ama gelin knowledge base ah oo gaar u ah geeddi-socodkan, oo loo qoray milkiilayaasha studio-yada jimicsiga ee aan farsamo-yaqaannada ahayn.

## Shabakadda FitSite Ilaa Hadda {#the-fitsite-network-so-far}

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

## Waxa Aan Ku Dhisnay Casharkan {#what-we-built-this-lesson}

- **Domain-ka madasha iyo DNS** oo loo habeeyay waayo-aragnimo sumadaysan
- **Admin white-labeled ah** oo leh sumadeynta FitSite meel kasta
- **Isgaarsiin la habeeyay** -- emails, invoices, iyo ogeysiisyada dhammaantood sumadda la jaanqaadaya
- **Site suuqgeyn** oo FitSite ka iibinaya milkiilayaasha studio-yada jimicsiga
- **Dukumiintiyada custom domain** ee macaamiisha doonaya domain-kooda

---

**Xiga:** [Cashar 8: Onboarding-ka Macaamiisha](lesson-8-onboarding) -- waxaan naqshadaynaynaa waayo-aragnimada ka dhigaysa isdiiwaangelin cusub macmiil firfircoon oo faraxsan.
