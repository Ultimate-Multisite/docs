---
title: 'Somada ya 7: Kuifanya iwe yako'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Somo la 7: Kuifanya iwe Yako

Wateja wako hawawezi kuwahi kuhisi kama wanatumia "plugin yoyote ya WordPress." Wanapaswa kuhisi wanatumia FitSite — jukwaa lililojengwa kwa ajili ya sekta yao. Somo hili linazungumzia jinsi ya kuweka chapa (branding), kuifanya ionekane kama chapa yako (white-labeling), na kuifanya hii platform ionekane kama bidhaa halisi.

## Tulipoacha

FitSite ina mtiririko wa kazi wa malipo (checkout flow) ambao unampeleka mmiliki wa studio ya mazoezi kutoka kuchagua mpango hadi kuwa na tovuti halisi. Sasa tunafanya uzoefu mzima uonekane kama bidhaa moja, iliyo na chapa yako.

## Nyanja ya Platform Yako (Your Platform Domain)

Msingi wa chapa yako ni nyanja yako (domain). Kwa FitSite:

- **Nyanja Kuu (Main domain)**: `fitsite.com` (tovuti yako ya masoko na mzizi wa mtandao)
- **Tovuti za Wateja (Customer sites)**: `studioname.fitsite.com` (subdomains)
- **Nyanja Maalum (Custom domains)**: Wateja wenye mipango ya Growth na Pro wanaweza kuunganisha nyanja yao wenyewe

### Kuweka Nyanja Yako (Setting Up Your Domain)

1. Rekodi nyanja yako ya platform
2. Ielekeza kwa mtoa huduma wako wa hosting
3. Weka upatikanaji wa DNS wa aina ya wildcard (`*.fitsite.com`) kwa subdomains za wateja
4. Hakikisha SSL ya wildcard imewashwa

Tazama [Jinsi ya Kuweka Nyanja ya Uunganisho (How to Configure Domain Mapping)](/user-guide/domain-mapping/how-to-configure-domain-mapping) kwa maelekezo ya kina.

## Kuifanya ionekane kama Chapa Yako Uzoefu wa Admin (White-Labeling the Admin Experience)

Wakati mmiliki wa studio ya mazoezi anapoingia kwenye dashboard ya tovuti yake, anapaswa kuona chapa yako, sio chapa ya WordPress au Ultimate Multisite.

### Ukurasa wa Ku-Login Maalum (Custom Login Page)

Badilisha ukurasa wa ku-login wa WordPress ili uonyeshe:

- Logo yako ya FitSite
- Picha za mandhari zinazofaa kwa mazoezi
- Rangi za chapa yako

### Chapa ya Dashboard (Dashboard Branding)

Tumia addon ya [Admin Page Creator](/addons/admin-page-creator) au CSS maalum ili:

- Badilisha logo ya WordPress na kuweka logo yako ya FitSite
- Kubadilisha muundo wa rangi wa admin ili ulingane na chapa yako
- Kuongeza widget maalum kwenye dashboard yenye viungo vya haraka na rasilimali za msaada zinazohusiana na mazoezi

### Kurasa za Admin Maalum (Custom Admin Pages)

Fikiria kuunda kurasa za admin maalum ambazo zionyeshe vitendo muhimu zaidi kwa mmiliki wa studio ya mazoezi:

- "Hariri Ratiba Yako ya Madarasa"
- "Sasisha Wasifu wa Walimu"
- "Tazama Tovuti Yako"

Hii inapunguza ugumu wa kujifunza kwa kuweka vitendo muhimu kwa sekta hiyo mbele, badala ya kuzificha kwenye menyu ya kawaida ya WordPress.

## Kuweka Chapa kwenye Mawasiliano Yako (Branding Your Communications)

Barua pepe zote, ankara, na arifa zote zinapaswa kuimarisha chapa yako.

### Barua Pepe za Mfumo (System Emails)

Nenda kwenye **Ultimate Multisite > Settings > Emails** na kubadilisha barua pepe zote za mfumo:

- **Jina la Mtumaji (From name)**: FitSite
- **Barua Pepe ya Mtumaji (From email)**: hello@fitsite.com
- **Muundo wa Barua Pepe (Email templates)**: Tumia rangi na logo za chapa yako
- **Lugha**: Kuwa na uhusiano na mazoezi katika kila kitu

Barua pepe muhimu za kubadilisha:

| Barua Pepe | Toleo la Jumla | Toleo la FitSite |
|-------|----------------|-----------------|
| Karibu | "Tovuti yako mpya imetayarishwa" | "Tovuti yako ya studio ya mazoezi imefika" |
| Risiti ya Malipo | "Malipo yamepokelewa" | "Malipo ya usajili wa FitSite yamekamilika" |
| Jaribio linamalizika | "Jaribio lako linamalizika hivi karibuni" | "Jaribio lako la FitSite linamalizika baada ya siku 3 — weka tovuti yako ya studio iwe hai" |

### Ankara (Invoices)

Badilisha muundo wa ankara kwa kutumia:

- Logo yako ya FitSite na rangi za chapa yako
- Taarifa zako za biashara
- Majina ya bidhaa yanayohusiana na mazoezi (sio namba za mipango za jumla)

## Tovuti Inayoonekana na Mteja (The Customer-Facing Site)

Nyanja yako kuu (`fitsite.com`) inahitaji tovuti ya masoko ambayo inauza jukwaa hilo. Hii ni tofauti na admin ya mtandao wa Ultimate Multisite — ndiyo uso wa umma wa biashara yako.

Kurasa muhimu:

- **Ukurasa wa Nyumbani (Homepage)**: Ahadi ya thamani wazi kwa biashara za mazoezi
- **Sifa (Features)**: FitSite inafanya nini, kwa lugha ya mazoezi
- **Bei (Pricing)**: Mipango yako mitatu na kulinganisha sifa maalum kwa sekta
- **Mifano (Examples)**: Onyesha tovuti zilizojengwa kwenye jukwaa
- **Jisajili (Sign Up)**: Viungo kwenda fomu yako ya malipo

:::tip Tovuti Yako ya Masoko Inaweza Kuwa Tovuti ya Mtandao
Uunda tovuti yako ya masoko kama tovuti ndani ya mtandao wako mwenyewe. Hii inakuwezesha kuisimamia kutoka kwenye dashboard moja na inaonyesha uwezo wa jukwaa lako mwenyewe.
:::

## Nyanja Maalum kwa Wateja (Custom Domain for Customers)

Kwa wateja wenye mipango inayojumuisha nyanja maalum, eleza mchakato kwa uwazi:

1. Mteja anarekodi au kuhamisha nyanja yake kwa registrar
2. Mteja anasasisha DNS ili iielekeze kwenye jukwaa lako (tolea rekodi halisi)
3. Ultimate Multisite inashughulikia uunganisho wa nyanja na SSL

Uunda makala ya msaada au kiingizo cha msingi wa maarifa hasa kwa mchakato huu, kikiandikwa kwa ajili ya wamiliki wa studio ya mazoezi ambao si wataalamu wa teknolojia.

## Mtandao wa FitSite Hadi Sasa (The FitSite Network So Far)

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

## Tulijenga Nini Someni Hili (What We Built This Lesson)

- **Nyanja ya platform na DNS** zimepangwa kwa uzoefu wenye chapa
- **Admin iliyo na chapa (White-labeled admin)** na chapa ya FitSite kote
- **Mawasiliano yaliyobadilishwa** — barua pepe, ankara, na arifa zote ziko na chapa
- **Tovuti ya masoko** inayouza FitSite kwa wamiliki wa studio ya mazoezi
- **Waraka wa nyanja maalum** kwa wateja wanaotaka nyanja yao wenyewe

---

**Inayofuata:** [Somo la 8: Kuweka Mteja Kwenye Njia (Lesson 8: Customer Onboarding)](lesson-8-onboarding) — tunabuni uzoefu ambao hubadilisha usajili mpya kuwa mteja anayejitolea na mwenye furaha.
