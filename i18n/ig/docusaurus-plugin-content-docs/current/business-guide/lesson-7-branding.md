---
title: 'Nkuzi 7: Ime ka ọ bụrụ nke gị'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Nkuzi 7: Ime ka Ọ Bụrụ Nke Gị

Ndị ahịa gị ekwesịghị ịna-eche na ha na-eji "otu WordPress plọgịn." Ha kwesịrị ịna-eche na ha na-eji FitSite -- ikpo okwu e wuru maka ụlọ ọrụ ha. Nkuzi a na-ekpuchi ịmepụta ika, ime ka ọ bụrụ white-label, na ime ka ikpo okwu ahụ dị ka ngwaahịa.

## Ebe Anyị Kwụsịrị {#where-we-left-off}

FitSite nwere usoro ịkwụ ụgwọ na-arụ ọrụ nke na-ebuga ndị nwe studio mgbatị ahụ site na nhọrọ atụmatụ ruo na saịtị dị ndụ. Ugbu a, anyị na-eme ka ahụmịhe niile dị ka ngwaahịa jikọrọ ọnụ, nke nwere ika.

## Domain Ikpo Okwu Gị {#your-platform-domain}

Ntọala ika gị bụ domain gị. Maka FitSite:

- **Isi domain**: `fitsite.com` (saịtị ahịa gị na mgbọrọgwụ network)
- **Saịtị ndị ahịa**: `studioname.fitsite.com` (subdomains)
- **Domain omenala**: Ndị ahịa nọ na atụmatụ Growth na Pro nwere ike ijikọ domain nke ha

### Ịtọlite Domain Gị {#setting-up-your-domain}

1. Debanye aha domain ikpo okwu gị
2. Tụọ ya aka na onye na-enye hosting gị
3. Hazie wildcard DNS (`*.fitsite.com`) maka subdomains ndị ahịa
4. Gbaa mbọ hụ na wildcard SSL dị arụ ọrụ

Lee [Otu esi Ahazi Domain Mapping](/user-guide/domain-mapping/how-to-configure-domain-mapping) maka ntuziaka zuru ezu.

## Ime ka Ahụmịhe Admin Bụrụ White-Label {#white-labeling-the-admin-experience}

Mgbe onye nwe studio mgbatị ahụ banyere na dashboard saịtị ha, ha kwesịrị ịhụ ika gị, ọ bụghị akara WordPress ma ọ bụ Ultimate Multisite.

### Peeji Mbanye Omenala {#custom-login-page}

Hazie peeji mbanye WordPress ka o gosi:

- Logo FitSite gị
- Onyonyo ndabere dabara na mgbatị ahụ
- Agba ika gị

### Ịmepụta Ika na Dashboard {#dashboard-branding}

Jiri mgbakwunye [Admin Page Creator](/addons/admin-page-creator) ma ọ bụ CSS omenala iji:

- Dochie logo WordPress na logo FitSite gị
- Hazie atụmatụ agba admin ka ọ dakọtara na ika gị
- Tinye widget dashboard omenala nwere njikọ ngwa ngwa na akụ enyemaka metụtara mgbatị ahụ

### Peeji Admin Omenala {#custom-admin-pages}

Tụlee ịmepụta peeji admin omenala nke na-eme ka omume kacha dị mkpa nye ndị nwe studio mgbatị ahụ pụta ìhè:

- "Dezie Usoro Klaasị Gị"
- "Melite Profaịlụ Ndị Trainer"
- "Lee Saịtị Gị"

Nke a na-ebelata mgbagwoju anya nke mmụta site n’itinye omume metụtara niche n’ihu na etiti kama izobe ha n’ime menu WordPress ọkọlọtọ.

## Ịmepụta Ika na Nkwukọrịta Gị {#branding-your-communications}

Email ọ bụla, invoice ọ bụla, na ọkwa ọ bụla kwesịrị iwusi ika gị ike.

### Email Sistemụ {#system-emails}

Gaa na **Ultimate Multisite > Settings > Emails** ma hazie email sistemụ niile:

- **Aha onye zitere**: FitSite
- **Email onye zitere**: hello@fitsite.com
- **Template email**: Jiri agba ika gị na logo gị
- **Asụsụ**: Ka ọ bụrụ nke metụtara mgbatị ahụ n’ebe niile

Email ndị bụ isi ị ga-ahazi:

| Email | Ụdị Izugbe | Ụdị FitSite |
|-------|----------------|-----------------|
| Nnabata | "Saịtị ọhụrụ gị adịla njikere" | "Webụsaịtị studio mgbatị ahụ gị adịla ndụ" |
| Nnata ịkwụ ụgwọ | "A natala ịkwụ ụgwọ" | "Ekwenyela ịkwụ ụgwọ subscription FitSite" |
| Trial na-agwụ | "Trial gị ga-agwụ n’oge na-adịghị anya" | "Trial FitSite gị ga-agwụ n’ime ụbọchị 3 -- debe webụsaịtị studio gị ka ọ dị ndụ" |

### Invoice {#invoices}

Hazie template invoice site na:

- Logo FitSite gị na agba ika gị
- Nkọwa azụmahịa gị
- Aha ngwaahịa metụtara mgbatị ahụ (ọ bụghị ID atụmatụ izugbe)

## Saịtị Ndị Ahịa Na-ahụ {#the-customer-facing-site}

Isi domain gị (`fitsite.com`) chọrọ saịtị ahịa nke na-ere ikpo okwu ahụ. Nke a dị iche na network admin Ultimate Multisite -- ọ bụ ihu azụmahịa gị nke ọha na-ahụ.

Peeji ndị bụ isi:

- **Homepage**: Nkwupụta uru doro anya maka azụmahịa mgbatị ahụ
- **Njirimara**: Ihe FitSite na-eme, n’okwu mgbatị ahụ
- **Ọnụahịa**: Atụmatụ atọ gị nwere ntụnyere njirimara metụtara niche
- **Ihe atụ**: Gosi saịtị e wuru n’elu ikpo okwu ahụ
- **Debanye Aha**: Njikọ gaa na fọm ịkwụ ụgwọ gị

:::tip Your Marketing Site Can Be a Network Site
Create your marketing site as a site within your own network. This lets you manage it from the same dashboard and demonstrates your own platform's capabilities.
:::

## Domain Omenala maka Ndị Ahịa {#custom-domain-for-customers}

Maka ndị ahịa nọ na atụmatụ gụnyere domain omenala, dee usoro ahụ n’ụzọ doro anya:

1. Onye ahịa debanyere ma ọ bụ bufee domain ha gaa na registrar
2. Onye ahịa melite DNS ka ọ tụọ aka na ikpo okwu gị (nye records ziri ezi)
3. Ultimate Multisite na-elekọta domain mapping na SSL

Mepụta edemede enyemaka ma ọ bụ ntinye knowledge base kpọmkwem maka usoro a, edere ya maka ndị nwe studio mgbatị ahụ na-abụghị ndị teknụzụ.

## Network FitSite Ruo Ugbu A {#the-fitsite-network-so-far}

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

## Ihe Anyị Wuru na Nkuzi A {#what-we-built-this-lesson}

- **Domain ikpo okwu na DNS** ahaziela maka ahụmịhe nwere ika
- **Admin white-labeled** nwere akara FitSite n’ebe niile
- **Nkwukọrịta ahaziri** -- email, invoice, na ọkwa niile dị n’ika
- **Saịtị ahịa** nke na-ere FitSite nye ndị nwe studio mgbatị ahụ
- **Akwụkwọ domain omenala** maka ndị ahịa chọrọ domain nke ha

---

**Ọzọ:** [Nkuzi 8: Onboarding Ndị Ahịa](lesson-8-onboarding) -- anyị na-emepụta ahụmịhe nke na-atụgharị onye debanyere ọhụrụ ka ọ bụrụ onye ahịa na-arụsi ọrụ ike, nke nwere obi ụtọ.
