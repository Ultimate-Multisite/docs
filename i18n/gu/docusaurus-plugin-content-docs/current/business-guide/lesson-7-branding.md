---
title: 'પાઠ ૭: તમારું બનાવવું'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Lesson 7: Making It Yours {#lesson-7-making-it-yours}

તમારા ગ્રાહકોએ ક્યારેય એવું અનુભવવું ન જોઈએ કે તેઓ "કોઈ WordPress plugin" વાપરી રહ્યા છે. તેઓએ એવું અનુભવવું જોઈએ કે તેઓ FitSite વાપરી રહ્યા છે — એક એવું પ્લેટફોર્મ જે તેમના ઉદ્યોગ માટે બનાવવામાં આવ્યું છે. આ લેસનમાં બ્રાન્ડિંગ, વ્હાઇટ-લેબલિંગ (white-labeling), અને પ્લેટફોર્મને એક પ્રોડક્ટ જેવું ફીલ કરાવવા વિશે વાત કરવામાં આવી છે.

## Where We Left Off {#where-we-left-off}

FitSite પાસે એક કામ કરતું checkout flow છે જે ફિટનેસ સ્ટુડિયોના માલિકોને પ્લાન પસંદ કરવાથી લઈને લાઇવ સાઇટ સુધી લઈ જાય છે. હવે આપણે આખા અનુભવને એક સુસંગત, બ્રાન્ડેડ પ્રોડક્ટ જેવો બનાવવાનો છે.

## Your Platform Domain {#your-platform-domain}

તમારી બ્રાન્ડનો પાયો તમારું ડોમેન છે. FitSite માટે:

- **Main domain**: `fitsite.com` (તમારી માર્કેટિંગ સાઇટ અને નેટવર્ક મૂળ)
- **Customer sites**: `studioname.fitsite.com` (સબડોમેન્સ)
- **Custom domains**: Growth અને Pro પ્લાન પરના ગ્રાહકો પોતાનું ડોમેન મેપ કરી શકે છે

### Setting Up Your Domain {#setting-up-your-domain}

1. તમારું પ્લેટફોર્મ ડોમેન રજીસ્ટર કરો
2. તેને તમારા હોસ્ટિંગ પ્રદાતા સાથે પોઇન્ટ કરો
3. ગ્રાહક સબડોમેન્સ માટે વાઇલ્ડકાર્ડ DNS (`*.fitsite.com`) configure કરો
4. ખાતરી કરો કે વાઇલ્ડકાર્ડ SSL સક્રિય છે

વિગતવાર સૂચનાઓ માટે [How to Configure Domain Mapping](/user-guide/domain-mapping/how-to-configure-domain-mapping) જુઓ.

## White-Labeling the Admin Experience {#white-labeling-the-admin-experience}

જ્યારે કોઈ ફિટનેસ સ્ટુડિયોના માલિક તેમની સાઇટના ડેશબોર્ડમાં લોગ ઇન થાય છે, ત્યારે તેમને WordPress અથવા Ultimate Multisite નું બ્રાન્ડિંગ નહીં, પણ તમારી બ્રાન્ડ દેખાવી જોઈએ.

### Custom Login Page {#custom-login-page}

WordPress લોગિન પેજને કસ્ટમાઇઝ કરો જેથી તે બતાવે:

- તમારું FitSite લોગો
- ફિટનેસ-યોગ્ય બેકગ્રાઉન્ડ ઇમેજરી
- તમારા બ્રાન્ડ કલર્સ

### Dashboard Branding {#dashboard-branding}

[Admin Page Creator](/addons/admin-page-creator) એડઓન અથવા કસ્ટમ CSS નો ઉપયોગ કરીને:

- WordPress લોગોને તમારા FitSite લોગોથી બદલો
- તમારા બ્રાન્ડ સાથે મેળ ખાતો એડમિન કલર સ્કીમ કસ્ટમાઇઝ કરો
- ફિટનેસ-વિશિષ્ટ ક્વિક લિંક્સ અને મદદ સંસાધનો સાથે એક કસ્ટમ ડેશબોર્ડ વિજેટ ઉમેરો

### Custom Admin Pages {#custom-admin-pages}

ફિટનેસ સ્ટુડિયોના માલિકો માટે સૌથી વધુ સંબંધિત ક્રિયાઓ દર્શાવતા કસ્ટમ એડમિન પેજીસ બનાવવાનું વિચારો:

- "Edit Your Class Schedule"
- "Update Trainer Profiles"
- "View Your Site"

આનાથી શીખવાની મુશ્કેલી ઘટે છે, કારણ કે તે સામાન્ય WordPress મેનુમાં છુપાવવાને બદલે જરૂરી ક્રિયાઓને મુખ્ય જગ્યાએ મૂકે છે.

## Branding Your Communications {#branding-your-communications}

દરેક ઈમેલ, ઇન્વૉઇસ અને નોટિફિકેશનને તમારી બ્રાન્ડને મજબૂત કરવી જોઈએ.

### System Emails {#system-emails}

**Ultimate Multisite > Settings > Emails** પર જાઓ અને બધા સિસ્ટમ ઈમેલ કસ્ટમાઇઝ કરો:

- **From name**: FitSite
- **From email**: hello@fitsite.com
- **Email templates**: તમારા બ્રાન્ડ કલર્સ અને લોગોનો ઉપયોગ કરો
- **Language**: ફિટનેસ-વિશિષ્ટ રાખો

કસ્ટમાઇઝ કરવા માટેના મુખ્ય ઈમેલ:

| Email | Generic Version | FitSite Version |
|-------|----------------|-----------------|
| Welcome | "Your new site is ready" | "Your fitness studio website is live" |
| Payment receipt | "Payment received" | "FitSite subscription payment confirmed" |
| Trial ending | "Your trial is ending soon" | "Your FitSite trial ends in 3 days -- keep your studio website live" |

### Invoices {#invoices}

કસ્ટમ ઇન્વૉઇસ ટેમ્પલેટ્સ બનાવો જેમાં નીચેની વસ્તુઓ હોય:

- તમારો FitSite લોગો અને બ્રાન્ડ કલર્સ
- તમારા વ્યવસાયની વિગતો
- ફિટનેસ-વિશિષ્ટ પ્રોડક્ટ નામો (સામાન્ય પ્લાન ID નહીં)

## The Customer-Facing Site {#the-customer-facing-site}

તમારા મુખ્ય ડોમેન (`fitsite.com`) ને એક માર્કેટિંગ સાઇટની જરૂર છે જે પ્લેટફોર્મને વેચે. આ Ultimate Multisite નેટવર્ક એડમિનથી અલગ છે — તે તમારા વ્યવસાયનું જાહેર ચહેરો છે.

મુખ્ય પેજીસ:

- **Homepage**: ફિટનેસ વ્યવસાયો માટે સ્પષ્ટ વેલ્યુ પ્રોપોઝિશન
- **Features**: FitSite શું કરે છે, ફિટનેસ શબ્દોમાં
- **Pricing**: તમારા ત્રણ પ્લાન, વિશિષ્ટ ફીચર તુલના સાથે
- **Examples**: પ્લેટફોર્મ પર બનેલી સાઇટ્સનું પ્રદર્શન
- **Sign Up**: તમારા ચેકઆઉટ ફોર્મની લિંક્સ

:::tip Your Marketing Site Can Be a Network Site
તમારી માર્કેટિંગ સાઇટ તમારા પોતાના નેટવર્કની અંદર એક સાઇટ તરીકે બનાવો. આનાથી તમે તેને એક જ ડેશબોર્ડમાંથી મેનેજ કરી શકશો અને તમારા પોતાના પ્લેટફોર્મની ક્ષમતાઓનું પ્રદર્શન કરી શકશો.
:::

## Custom Domain for Customers {#custom-domain-for-customers}

જે ગ્રાહકોના પ્લાનમાં કસ્ટમ ડોમેનનો સમાવેશ થાય છે, તેમના માટે પ્રક્રિયાને સ્પષ્ટ રીતે દસ્તાવેજીકૃત કરો:

1. ગ્રાહક પોતાનું ડોમેન રજીસ્ટર કરે છે અથવા તેને રજિસ્ટ્રારને ટ્રાન્સફર કરે છે
2. ગ્રાહક DNS અપડેટ કરે છે જેથી તે તમારા પ્લેટફોર્મ તરફ પોઇન્ટ કરે (ચોક્કસ રેકોર્ડ્સ પ્રદાન કરો)
3. Ultimate Multisite ડોમેન મેપિંગ અને SSL સંભાળે છે

આ પ્રક્રિયા માટે એક હેલ્પ આર્ટિકલ અથવા નોલેજ બેઝ એન્ટ્રી બનાવો, જે ફિટનેસ સ્ટુડિયોના બિન-તકનીકી માલિકો માટે લખાયેલ હોય.

## The FitSite Network So Far {#the-fitsite-network-so-far}

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

## What We Built This Lesson {#what-we-built-this-lesson}

- **Platform domain and DNS** configured for a branded experience
- **White-labeled admin** with FitSite branding throughout
- **Customized communications** -- emails, invoices, and notifications all on-brand
- **A marketing site** that sells FitSite to fitness studio owners
- **Custom domain documentation** for customers who want their own domain

---

**Next:** [Lesson 8: Customer Onboarding](lesson-8-onboarding) -- આપણે એ અનુભવ ડિઝાઇન કરીએ છીએ જે નવા સાઇનઅપને એક સક્રિય, ખુશ ગ્રાહકમાં ફેરવે છે.
