---
title: 'Ihe ọmụmụ 3: Ịtọlite Netwọk Gị'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Nkuzi 3: Ịtọlite Netwọkụ Gị

Oge eruola iwulite. Na nkuzi a, ị ga-etinye Ultimate Multisite ma hazie ntọala netwọkụ FitSite. A na-eme mkpebi ọ bụla ebe a n’uche niche mgbatị ahụ.

## Ebe Anyị Kwụsịrị {#where-we-left-off}

Anyị họọrọ ụlọ studio mgbatị ahụ dịka niche anyị ma nyochaa ohere ahụ. Ugbu a, anyị na-agbanwe echiche ahụ ka ọ bụrụ platform na-arụ ọrụ.

## Ịhọrọ Hosting Gị {#choosing-your-hosting}

Nhọrọ hosting gị dị mkpa karịa maka platform niche karịa maka otu website. Ị naghị anabata naanị otu saịtị -- ị na-anabata netwọkụ ga-eto ruo ọtụtụ iri ma ọ bụ narị saịtị.

### Ihe A Ga-achọ {#what-to-look-for}

- **Nkwado WordPress Multisite**: Ọ bụghị host niile na-ejikwa multisite nke ọma
- **Wildcard SSL**: Dị mkpa maka netwọkụ dabere na subdomain
- **Akụrụngwa nwere ike ịgbasa**: Ị chọrọ ohere itolite na-enweghị ịkwaga
- **Njikọ Ultimate Multisite**: Domain mapping akpaaka na SSL na-echekwa nnukwu mgbalị ọrụ

### Ụzọ A Tụrụ Aro {#recommended-approach}

Họrọ host site na ndepụta [Providers Dakọtara](/user-guide/host-integrations/closte). A nwalela ha na Ultimate Multisite ma ha na-enye njikọ ị chọrọ maka domain mapping na akpaaka SSL.

Maka FitSite, anyị ga-eji nhazi subdomain. Nke a pụtara na saịtị ndị ahịa ga-apụta na mbụ dịka `studioname.fitsite.com` tupu ha ahọrọ ịmapụ domain nke ha.

## Ịwụnye WordPress Multisite {#installing-wordpress-multisite}

Ọ bụrụ na ị nwebeghị nrụnye WordPress Multisite:

1. Wụnye WordPress na hosting provider gị
2. Soro ntuziaka [Otu esi Wụnye WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Họrọ nhazi **subdomain** mgbe a jụrụ gị

:::tip Gịnị Mere Subdomains?
Subdomains na-enye saịtị onye ahịa ọ bụla adreesị nke ya dị iche (`studio.fitsite.com`) kama ụzọ (`fitsite.com/studio`). Nke a na-adị ka nke ọkachamara karịa maka ndị ahịa gị ma na-ezere esemokwu permalink. Lee [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) maka ntụnyere zuru ezu.
:::

## Ịwụnye Ultimate Multisite {#installing-ultimate-multisite}

Soro ntuziaka [Ịwụnye Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) iji:

1. Bulite ma mee ka plugin rụọ ọrụ n’ofe netwọkụ niile
2. Gbaa [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)

N’oge setup wizard, buru niche FitSite n’obi:

- **Ego**: Tọọ ya ka ọ bụrụ ego ndị ahịa studio mgbatị ahụ gị na-eji
- **Aha ụlọ ọrụ**: "FitSite" (ma ọ bụ aha brand ị họọrọ)
- **Logo ụlọ ọrụ**: Bulite logo brand gị -- nke a na-apụta na invoice na email

## Ịhazi Maka Niche Mgbatị Ahụ {#configuring-for-the-fitness-niche}

Mgbe etinyere Ultimate Multisite, mee nhọrọ nhazi ndị a pụrụ iche maka niche:

### Ntọala Izugbe {#general-settings}

Gaa na **Ultimate Multisite > Settings** ma hazie:

- **Aha saịtị**: FitSite
- **Role ndabara**: Administrator -- ndị nwe studio mgbatị ahụ chọrọ njikwa zuru oke nke ọdịnaya saịtị ha
- **Ndebanye aha**: Mee ka ndebanye aha onye ọrụ dị ire ka ndị nwe studio nwee ike ịdebanye onwe ha

### Nhazi Email {#email-configuration}

Email sistemụ gị kwesịrị ikwu asụsụ nke niche gị. Gaa na **Ultimate Multisite > Settings > Emails** ma hazie:

- Dochie asụsụ izugbe "your new site" na ozi pụrụ iche maka mgbatị ahụ
- Ihe atụ isiokwu nnabata: "Website studio mgbatị ahụ gị adịla njikere"
- Ihe atụ ahụ ozi nnabata: Kwuo banyere studio ha, klaasị, na ịmalite na saịtị mgbatị ahụ ha

Anyị ga-emezi ihe ndị a ọzọ na Nkuzi 8 (Ịnabata Ndị Ahịa), mana ịtọ ụda ugbu a na-eme ka ọbụna ndebanye ule mbụ nwee mmetụta pụrụ iche maka niche.

### Nhazi Domain {#domain-configuration}

Ọ bụrụ na ị na-eji hosting provider dakọtara, hazie domain mapping ugbu a:

1. Gaa na **Ultimate Multisite > Settings > Domain Mapping**
2. Soro ntuziaka njikọ maka host gị kpọmkwem
3. Nwalee na subsites ọhụrụ na-enweta SSL akpaaka

Nke a na-eme ka mgbe anyị malitere ịmepụta templates na saịtị ule na nkuzi na-esote, ihe niile na-arụ ọrụ site na mmalite ruo na njedebe.

## Netwọkụ FitSite Ruo Ugbu A {#the-fitsite-network-so-far}

Na njedebe nkuzi a, lee ihe i nwere:

```
Netwọkụ FitSite
├── WordPress Multisite (ụdị subdomain)
├── Ultimate Multisite (etinyere ma hazie)
├── Hosting nwere wildcard SSL
├── Ahaziri domain mapping
├── Templates email pụrụ iche maka niche (mbido)
└── Njikere maka templates saịtị (nkuzi na-esote)
```

## Ihe Anyị Wulitere na Nkuzi A {#what-we-built-this-lesson}

- **Nrụnye WordPress Multisite na-arụ ọrụ** n’ụdị subdomain
- **Etinyere Ultimate Multisite** ma hazie ya na branding FitSite
- **Hosting na SSL** etọlitere maka netwọkụ na-eto eto
- **Domain mapping** ahaziri maka hosting provider gị
- **Ụda email pụrụ iche maka niche** etinyere site n’ụbọchị mbụ

---

**Na-esote:** [Nkuzi 4: Iwulite Templates Niche](lesson-4-templates) -- anyị na-emepụta templates saịtị ndị nwe studio mgbatị ahụ ga-achọ iji n’ezie.
