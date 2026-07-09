---
title: 'Isomo rya 7: Kubigira ibyawe'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Isomo rya 7: Kubigira ibyawe

Abakiriya bawe ntibakwiye na rimwe kumva ko bakoresha "WordPress plugin runaka." Bakwiye kumva ko bakoresha FitSite -- urubuga rwubakiwe inganda zabo. Iri somo rivuga ku kirango, gushyiraho ikirango cyawe, no gutuma urubuga rwumvikana nk'igicuruzwa.

## Aho twari tugeze

FitSite ifite inzira ya checkout ikora, ivana ba nyiri studio za fitness mu guhitamo plan kugeza ku rubuga ruri live. Ubu tugiye gutuma ubunararibonye bwose bwumvikana nk'igicuruzwa gifite ikirango gihamye kandi gihuriye hamwe.

## Domain y'urubuga rwawe

Urufatiro rw'ikirango cyawe ni domain yawe. Kuri FitSite:

- **Domain nyamukuru**: `fitsite.com` (urubuga rwawe rwo kwamamaza n'umuzi wa network)
- **Imbuga z'abakiriya**: `studioname.fitsite.com` (subdomains)
- **Custom domains**: Abakiriya bari kuri plan za Growth na Pro bashobora guhuza domain yabo bwite

### Gushyiraho Domain yawe

1. Andikisha domain y'urubuga rwawe
2. Yerekeze kuri hosting provider wawe
3. Tunganya wildcard DNS (`*.fitsite.com`) ku subdomains z'abakiriya
4. Emeza ko wildcard SSL ikora

Reba [Uko watunganya Domain Mapping](/user-guide/domain-mapping/how-to-configure-domain-mapping) kugira ngo ubone amabwiriza arambuye.

## Gushyiraho Ikirango Cyawe mu Bunararibonye bwa Admin

Iyo nyiri studio ya fitness yinjiye muri dashboard y'urubuga rwe, akwiye kubona ikirango cyawe, atari WordPress cyangwa ikirango cya Ultimate Multisite.

### Urupapuro rwa Login Rwihariye

Hindura urupapuro rwa login rwa WordPress kugira ngo rwerekane:

- Logo yawe ya FitSite
- Amashusho y'inyuma ajyanye na fitness
- Amabara y'ikirango cyawe

### Gushyiraho Ikirango cya Dashboard

Koresha addon ya [Admin Page Creator](/addons/admin-page-creator) cyangwa CSS yihariye kugira ngo:

- Usimbuze logo ya WordPress logo yawe ya FitSite
- Uhindure ibara rya admin kugira ngo rihure n'ikirango cyawe
- Wongereho widget yihariye ya dashboard ifite quick links zijyanye na fitness n'ibikoresho by'ubufasha

### Amapaji ya Admin Yihariye

Tekereza gukora amapaji ya admin yihariye agaragaza ibikorwa by'ingenzi kuri ba nyiri studio za fitness:

- "Hindura Gahunda y'Amasomo Yawe"
- "Vugurura Imyirondoro y'Abatoza"
- "Reba Urubuga Rwawe"

Ibi bigabanya igihe cyo kubyiga kuko bishyira ibikorwa bijyanye n'icyo cyiciro imbere no hagati aho kubihisha muri menu isanzwe ya WordPress.

## Gushyiraho Ikirango mu Itumanaho Ryawe

Buri email, invoice, n'imenyesha bikwiye gushimangira ikirango cyawe.

### Emails za Sisitemu

Jya kuri **Ultimate Multisite > Settings > Emails** maze uhindure emails zose za sisitemu:

- **Izina rya From**: FitSite
- **Email ya From**: hello@fitsite.com
- **Templates za email**: Koresha amabara y'ikirango cyawe na logo
- **Ururimi**: Rube rwihariye kuri fitness ahantu hose

Emails z'ingenzi zo guhindura:

| Email | Verisiyo Rusange | Verisiyo ya FitSite |
|-------|----------------|-----------------|
| Ikaze | "Urubuga rwawe rushya ruriteguye" | "Urubuga rwa studio yawe ya fitness ruri live" |
| Inyemezabwishyu y'ubwishyu | "Ubwishyu bwakiriwe" | "Ubwishyu bwa subscription ya FitSite bwemejwe" |
| Trial irangira | "Trial yawe iri hafi kurangira" | "Trial yawe ya FitSite irangira mu minsi 3 -- komeza urubuga rwa studio yawe rube live" |

### Invoices

Hindura templates za invoice ukoresheje:

- Logo yawe ya FitSite n'amabara y'ikirango
- Ibisobanuro by'ubucuruzi bwawe
- Amazina y'ibicuruzwa yihariye kuri fitness (atari plan IDs rusange)

## Urubuga Rubonwa n'Abakiriya

Domain yawe nyamukuru (`fitsite.com`) ikeneye urubuga rwo kwamamaza rugurisha urubuga rwawe. Ibi bitandukanye na network admin ya Ultimate Multisite -- ni isura rusange y'ubucuruzi bwawe.

Amapaji y'ingenzi:

- **Homepage**: Isezerano ry'agaciro risobanutse ku bucuruzi bwa fitness
- **Features**: Ibyo FitSite ikora, mu mvugo ya fitness
- **Pricing**: Plan zawe eshatu hamwe n'igereranya rya features ryihariye ku cyiciro
- **Ingero**: Erekana imbuga zubatswe kuri uru rubuga
- **Sign Up**: Links zijya kuri form yawe ya checkout

:::tip Urubuga Rwawe rwo Kwamamaza Rushobora Kuba Urubuga rwa Network
Kora urubuga rwawe rwo kwamamaza nk'urubuga ruri muri network yawe bwite. Ibi bigufasha kurucunga ukoresheje dashboard imwe kandi bikerekana ubushobozi bw'urubuga rwawe bwite.
:::

## Custom Domain ku Bakiriya

Ku bakiriya bari kuri plan zirimo custom domains, sobanura inzira neza:

1. Umukiriya yandikisha cyangwa yimurira domain ye kuri registrar
2. Umukiriya avugurura DNS kugira ngo yerekeze ku rubuga rwawe (tanga records nyazo)
3. Ultimate Multisite ikemura domain mapping na SSL

Kora inkuru y'ubufasha cyangwa icyandikwa muri knowledge base cyihariye kuri iyi nzira, cyandikiwe ba nyiri studio za fitness batari abanyatekiniki.

## Network ya FitSite Kugeza Ubu

```
Network ya FitSite
├── WordPress Multisite (uburyo bwa subdomain)
├── Ultimate Multisite (yatunganijwe + yashyizweho ikirango)
├── Domain y'Urubuga (fitsite.com + wildcard SSL)
├── Templates z'Urubuga (Studio Essential, Gym Pro, Fitness Chain)
├── Ibicuruzwa (Starter, Growth, Pro + Order Bumps)
├── Inzira ya Checkout (yihariye ku cyiciro, yageragejwe)
├── Ikirango
│   ├── Urupapuro rwa login rwihariye
│   ├── Admin dashboard ifite ikirango
│   ├── Emails za sisitemu zihariye ku cyiciro
│   ├── Invoices zifite ikirango
│   └── Urubuga rwo kwamamaza kuri fitsite.com
└── Yiteguye inzira ya onboarding (isomo rikurikira)
```

## Ibyo Twubatse Muri Iri Somo

- **Domain y'urubuga na DNS** byatunganyijwe ku bunararibonye bufite ikirango
- **Admin ifite ikirango cyawe** hamwe n'ikirango cya FitSite ahantu hose
- **Itumanaho ryahinduwe** -- emails, invoices, n'imenyesha byose biri ku kirango
- **Urubuga rwo kwamamaza** rugurisha FitSite kuri ba nyiri studio za fitness
- **Inyandiko za custom domain** ku bakiriya bashaka domain yabo bwite

---

**Ibikurikira:** [Isomo rya 8: Onboarding y'Abakiriya](lesson-8-onboarding) -- dushushanya ubunararibonye buhindura uwiyandikishije mushya umukiriya ukoresha kandi wishimye.
