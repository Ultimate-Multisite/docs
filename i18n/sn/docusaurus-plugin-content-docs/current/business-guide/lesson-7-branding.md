---
title: 'Chidzidzo 7: Kuchiita Chako'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Chidzidzo 7: Kuchiita Chako

Vatengi vako havafaniri kumbonzwa sekuti vari kushandisa "imwe WordPress plugin." Vanofanira kunzwa sekuti vari kushandisa FitSite -- chikuva chakavakirwa indasitiri yavo. Chidzidzo ichi chinobata branding, white-labeling, uye kuita kuti chikuva chinzwe sechigadzirwa.

## Patakasiira {#where-we-left-off}

FitSite ine mafambiro echeckout anoshanda anotora varidzi vestudio dzekusimbisa muviri kubva pakusarudza chirongwa kusvika pasaiti iri kushanda. Iye zvino tinoita kuti chiitiko chose chinzwe sechigadzirwa chakabatana, chine brand.

## Domain yeChikuva Chako {#your-platform-domain}

Hwaro hwebrand yako ndiyo domain yako. KuFitSite:

- **Domain huru**: `fitsite.com` (saiti yako yekushambadzira uye mudzi wetiweki)
- **Masaiti evatengi**: `studioname.fitsite.com` (subdomains)
- **Custom domains**: Vatengi vari pazvirongwa zveGrowth nePro vanogona kubatanidza domain yavo

### Kugadzirisa Domain Yako {#setting-up-your-domain}

1. Nyoresa domain yechikuva chako
2. Iratidze kumupi wako wehosting
3. Gadzirisa wildcard DNS (`*.fitsite.com`) yemacustomer subdomains
4. Ita shuwa kuti wildcard SSL iri kushanda

Ona [Maitiro Ekugadzirisa Domain Mapping](/user-guide/domain-mapping/how-to-configure-domain-mapping) kuti uwane mirayiridzo yakadzama.

## White-Labeling Chiitiko cheAdmin {#white-labeling-the-admin-experience}

Kana muridzi westudio yekusimbisa muviri apinda musaiti dashboard yake, anofanira kuona brand yako, kwete branding yeWordPress kana Ultimate Multisite.

### Peji reLogin Rakagadziridzwa {#custom-login-page}

Gadzirisa peji reWordPress login kuti riratidze:

- Logo yako yeFitSite
- Mifananidzo yekumashure inokodzera kusimbisa muviri
- Mavara ebrand yako

### Branding yeDashboard {#dashboard-branding}

Shandisa addon ye[Admin Page Creator](/addons/admin-page-creator) kana custom CSS kuti:

- Tsiva logo yeWordPress neFitSite logo yako
- Gadzirisa admin color scheme kuti ienderane nebrand yako
- Wedzera custom dashboard widget ine maquick link ane chekuita nekusimbisa muviri uye zviwanikwa zvekubatsira

### Mapeji eAdmin Akagadziridzwa {#custom-admin-pages}

Funga kugadzira mapeji eadmin akagadziridzwa anoburitsa zviito zvakanyanya kukosha kuvaridzi vestudio dzekusimbisa muviri:

- "Gadzirisa Purogiramu Yako Yemakirasi"
- "Gadzirisa Maprofile eVarairidzi"
- "Ona Saiti Yako"

Izvi zvinoderedza nguva yekudzidza nekuita kuti zviito zvine chekuita neniche zvive pachena uye zviri pakati, panzvimbo pekuzviviga mumenyu yakajairwa yeWordPress.

## Branding yeKutaurirana Kwako {#branding-your-communications}

Email yega yega, invoice, uye notification zvinofanira kusimbisa brand yako.

### Maemail eSystem {#system-emails}

Enda ku **Ultimate Multisite > Settings > Emails** uye gadzirisa maemail ese e system:

- **Zita rinobva**: FitSite
- **Email inobva**: hello@fitsite.com
- **Email templates**: Shandisa mavara ebrand yako ne logo
- **Mutauro**: Une chekuita nekusimbisa muviri kwese

Maemail akakosha ekugadzirisa:

| Email | Shanduro Yakajairwa | Shanduro yeFitSite |
|-------|----------------|-----------------|
| Kugamuchirwa | "Saiti yako itsva yagadzirira" | "Webhusaiti yestudio yako yekusimbisa muviri yave kushanda" |
| Risiti yekubhadhara | "Kubhadhara kwagamuchirwa" | "Kubhadhara kweFitSite subscription kwasimbiswa" |
| Trial iri kupera | "Trial yako yava kuda kupera" | "FitSite trial yako inopera mumazuva 3 -- chengeta webhusaiti yestudio yako ichishanda" |

### Mainvoice {#invoices}

Gadzirisa invoice templates ne:

- FitSite logo yako nemavara ebrand
- Mashoko ebhizimisi rako
- Mazita echigadzirwa ane chekuita nekusimbisa muviri (kwete maID ezvirongwa akajairwa)

## Saiti Inoonekwa neVatengi {#the-customer-facing-site}

Domain yako huru (`fitsite.com`) inoda saiti yekushambadzira inotengesa chikuva. Izvi zvakasiyana neUltimate Multisite network admin -- ndiyo chiso cheruzhinji chebhizimisi rako.

Mapeji akakosha:

- **Homepage**: Chirevo chakajeka chekukosha kumabhizimisi ekusimbisa muviri
- **Features**: Zvinoitwa neFitSite, nemazwi ekusimbisa muviri
- **Pricing**: Zvirongwa zvako zvitatu zvine kuenzanisa kwezvinhu zvine chekuita neniche
- **Mienzaniso**: Ratidza masaiti akavakwa pachikuva
- **Sign Up**: Malink kucheckout form yako

:::tip Saiti Yako Yekushambadzira Inogona Kuva Saiti yeNetwork
Gadzira saiti yako yekushambadzira sesaiti mukati metiweki yako pachako. Izvi zvinokutendera kuibata kubva pa dashboard imwe chete uye zvinoratidza kugona kwechikuva chako pachako.
:::

## Custom Domain yeVatengi {#custom-domain-for-customers}

Kune vatengi vari pazvirongwa zvinosanganisira custom domains, nyora maitiro acho zvakajeka:

1. Mutengi anonyoresa kana kutamisa domain yake ku registrar
2. Mutengi anovandudza DNS kuti iratidze kuchikuva chako (ipa marecord chaiwo)
3. Ultimate Multisite inobata domain mapping neSSL

Gadzira chinyorwa chekubatsira kana knowledge base entry yakanangana nemaitiro aya, yakanyorerwa varidzi vestudio dzekusimbisa muviri vasiri ve technical.

## FitSite Network Kusvika Parizvino {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (yakagadziriswa + ine branding)
├── Domain yeChikuva (fitsite.com + wildcard SSL)
├── Matemplate eSaiti (Studio Essential, Gym Pro, Fitness Chain)
├── Zvigadzirwa (Starter, Growth, Pro + Order Bumps)
├── Mafambiro eCheckout (ane chekuita neniche, akaedzwa)
├── Branding
│   ├── Peji relogin rakagadziridzwa
│   ├── Admin dashboard ine branding
│   ├── Maemail e system ane chekuita neniche
│   ├── Mainvoice ane branding
│   └── Saiti yekushambadzira pa fitsite.com
└── Yakagadzirira mafambiro eonboarding (chidzidzo chinotevera)
```

## Zvatakavaka Muchidzidzo Ichi {#what-we-built-this-lesson}

- **Domain yechikuva neDNS** zvakagadzirirwa chiitiko chine brand
- **Admin ine white-label** ine FitSite branding kwese
- **Kutaurirana kwakagadziridzwa** -- maemail, mainvoice, uye manotification zvese zviri pa-brand
- **Saiti yekushambadzira** inotengesa FitSite kuvaridzi vestudio dzekusimbisa muviri
- **Magwaro ecustom domain** evatengi vanoda domain yavo

---

**Chinotevera:** [Chidzidzo 8: Customer Onboarding](lesson-8-onboarding) -- tinogadzira chiitiko chinoshandura signup itsva kuva mutengi anoshanda uye anofara.
