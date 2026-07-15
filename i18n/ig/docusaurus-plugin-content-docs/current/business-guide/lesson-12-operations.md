---
title: 'Nkuzi 12: Ijikwa Azụmahịa'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Ihe Ọmụmụ 12: Iduzi Azụmahịa

Platform abụghị project ị na-emecha -- ọ bụ azụmahịa ị na-eduzi. Ihe ọmụmụ a na-ekpuchi ọrụ kwa ụbọchị nke ijikwa FitSite: nkwado, billing, mmezi, na ime ka ndị ahịa nwee afọ ojuju.

## Ebe Anyị Kwụsịrị {#where-we-left-off}

FitSite adịla ndụ ma ndị ahịa na-edebanye aha. Ugbu a ị ga-eduzi ọrụ ahụ n'ụzọ ga-adịgide.

## Ọrụ Kwa Ụbọchị {#daily-operations}

### Nlekota {#monitoring}

Lelee ihe ndị a kwa ụbọchị (ma ọ bụ hazie alerts):

- **Uptime**: Platform ahụ enwere ike ịnweta ya? Jiri ọrụ nlekota uptime.
- **Ndebanye aha ọhụrụ**: Ndị ahịa ọhụrụ ole debanyere aha taa?
- **Ịkwụ ụgwọ dara ada**: Enwere ọdịda ịkwụ ụgwọ chọrọ nlebara anya?
- **Arịrịọ nkwado**: Enwere ajụjụ ndị ahịa a na-azabeghị?

### Nkwado Ndị Ahịa {#customer-support}

Ilekwasị anya na niche gị bụ uru ebe a. N’ihi na ndị ahịa gị niile bụ fitness studios, ị ga-ahụ otu ajụjụ ugboro ugboro:

**Ajụjụ ndị a na-ajụkarị ị ga-enweta:**

- "Kedu ka m ga-esi melite usoro klas m?"
- "Enwere m ike ịgbanwe agba nke saịtị m?"
- "Kedu ka m ga-esi tinye trainer ọhụrụ na saịtị m?"
- "Domain m anaghị arụ ọrụ"
- "Kedu ka m ga-esi kagbuo/kwalite plan m?"

Wulite knowledge base gị (malitere na Ihe Ọmụmụ 8) gburugburu ajụjụ ndị a na-apụta ugboro ugboro. Support ticket ọ bụla nke nwere ike ịbụ edemede knowledge base bụ akara ka ị dee edemede ahụ.

### Ọkwa Nkwado {#support-tiers}

Ka ị na-eto, hazie nkwado site na plan:

| Plan | Ọkwa Nkwado | Oge Nzaghachi |
|------|--------------|---------------|
| Starter | Knowledge base + email | awa 48 |
| Growth | Nkwado email | awa 24 |
| Pro | Email nwere mkpa mbụ + oku onboarding | awa 4 |

[Support Tickets addon](/addons/support-tickets) nwere ike inye aka ijikwa arịrịọ nkwado n’ime platform ahụ.

## Ọrụ Billing {#billing-operations}

### Ịkwụ Ụgwọ Na-emeghachi {#recurring-payments}

Ultimate Multisite na-elekọta recurring billing na-akpaghị aka site na payment gateway gị. Ọrụ gị bụ ileba anya na:

- **Ịkwụ ụgwọ dara ada**: Soro ha ozugbo. Ọtụtụ ọdịda bụ kaadị kubiela, ọ bụghị kagbuo n’uche.
- **Dunning**: Hazie automated retry logic site na payment gateway gị (Stripe na-eme nke a nke ọma)
- **Arịrịọ kagbuo**: Ghọta ihe mere ndị ahịa ji apụ. Kagbuo ọ bụla bụ nzaghachi.

### Ijikwa Memberships {#managing-memberships}

Gaa na **Ultimate Multisite > Memberships** iji:

- Lelee subscriptions niile na-arụ ọrụ
- Lekọta arịrịọ upgrade na downgrade
- Hazie refunds mgbe ọ dị mkpa
- Jikwaa trial expirations

Lee [Ijikwa Memberships](/user-guide/administration/managing-memberships) maka ntụaka zuru ezu.

### Invoicing {#invoicing}

Gbaa mbọ hụ na a na-emepụta invoices nke ọma maka ịkwụ ụgwọ ọ bụla. Ndị ahịa nwere ike ịchọ invoices maka ịkọ expenses azụmahịa. Lee [Ijikwa Ịkwụ Ụgwọ na Invoices](/user-guide/administration/managing-payments-and-invoices).

## Mmezi Platform {#platform-maintenance}

### Mmelite WordPress na Plugin {#wordpress-and-plugin-updates}

Dịka network administrator, ị na-ahụ maka:

- **Mmelite WordPress core**: Nwalee na staging saịtị tupu itinye na production
- **Mmelite plugin**: Otu ihe ahụ -- nwalee mbụ, mgbe ahụ tinye ya network-wide
- **Mmelite theme**: Nyochaa na templates ka na-ele anya nke ọma mgbe emechara mmelite theme
- **Mmelite Ultimate Multisite**: Soro changelog ma nwalee tupu imelite

:::warning Emelitekwala na Production Enweghị Nnwale
Mmelite mebiri emebi na-emetụta saịtị onye ahịa ọ bụla na network gị. Nwalee mmelite mgbe niile na staging copy nke network gị mbụ.
:::

### Nchekwa {#security}

- Debe software niile ka ọ dị ọhụrụ
- Jiri okwuntughe siri ike na two-factor authentication maka admin accounts
- Nyochaa maka omume na-enyo enyo
- Nwee plan maka security incidents

### Arụmọrụ {#performance}

Ka network gị na-eto, nyochaa:

- **Oge ibu peeji**: Saịtị ndị ahịa ọ na-agba ọsọ ọsọ?
- **Ojiji akụ server**: CPU, memory, disk space
- **Arụmọrụ database**: Networks buru ibu chọrọ database optimization ka oge na-aga

Tụlee itinye caching (page cache, object cache) na CDN ma ọ bụrụ na i mebeghị ya. [Cloudflare integration](/user-guide/host-integrations/cloudflare) na-elekọta ọtụtụ n’ime nke a.

## Njikwa Ndụ Ndị Ahịa {#customer-lifecycle-management}

### Ibelata Churn {#reducing-churn}

Churn bụ pasent nke ndị ahịa na-akagbu kwa ọnwa. Maka azụmahịa subscription, ibelata churn dị mkpa dịka inweta ndị ahịa ọhụrụ.

**Ihe ndị a na-emekarị ka ndị ahịa fitness studio hapụ:**

- Ha enweghị ike ịchọpụta ka esi eji platform ahụ → melite onboarding
- Saịtị ahụ adịghị ele anya nke ọma zuru ezu → melite templates
- Ha ahụghị uru → melite atụmatụ ma ọ bụ nkwukọrịta
- Ha chọtara nhọrọ ọzọ dị ọnụ ala → kwalite uru niche gị
- Azụmahịa ha mechiri → enweghị ike izere ya, mana soro nke a iche

### Ịgba Ndị Ahịa Ume ka Ha Upgrade {#encouraging-upgrades}

Ekwesịrị ịgba ndị ahịa nọ na Starter na-aga nke ọma ume ka ha upgrade:

- Mgbe ha rutere oke plan (saịtị, storage), gosi upgrade prompts
- Zipụ emails ezubere iche na-akọwapụta atụmatụ Growth plan ha ga-erite uru na ha
- Gosi ihe ndị ahịa Growth/Pro wuru

### Campaigns Iweghachite {#win-back-campaigns}

Mgbe onye ahịa kagburu:

1. Jụọ ihe kpatara ya (exit survey ma ọ bụ email)
2. Dozie nchegbu ha ma ọ bụrụ na o kwere omume
3. Nye discount ka ha laghachi (ụbọchị 30-60 mgbe kagbuchara)

## Usoro Kwa Izu na Kwa Ọnwa {#weekly-and-monthly-routines}

### Kwa Izu {#weekly}

- Nyochaa ndebanye aha ọhụrụ na kagbuo
- Zaghachi support tickets niile mepere emepe
- Lelee arụmọrụ platform na uptime
- Nyochaa ịkwụ ụgwọ ọ bụla dara ada

### Kwa Ọnwa {#monthly}

- Nyochaa metrics isi (MRR, churn, ndị ahịa ọhụrụ, upgrades)
- Tinye mmelite WordPress na plugin (mgbe staging test gasịrị)
- Nyochaa ma melite knowledge base dabere na usoro nkwado
- Zipụ newsletter ma ọ bụ update nye ndị ahịa (atụmatụ ọhụrụ, ndụmọdụ, akụkọ ụlọ ọrụ fitness)

### Kwa Nkeji Afọ {#quarterly}

- Nyochaa pricing megide ndị asọmpi na customer feedback
- Nyochaa template designs -- hà chọrọ ime ka ha dị ọhụrụ?
- Nyochaa ikike hosting -- ọ dị mkpa ka ị scale?
- Nyochaa ma melite onboarding dabere na activation data

## Ihe Anyị Wuru na Ihe Ọmụmụ A {#what-we-built-this-lesson}

- **Usoro nlekọta kwa ụbọchị** maka uptime, ndebanye aha, ịkwụ ụgwọ, na nkwado
- **Nhazi nkwado nwere ọkwa dị iche iche** kwekọrọ na ọkwa plan
- **Ọrụ billing** gụnyere dunning na ijikwa ịkagbu
- **Usoro mmezi** maka mmelite, nchekwa, na arụmọrụ
- **Atụmatụ ibelata churn** pụrụ iche maka niche fitness
- **Usoro ọrụ kwa izu, kwa ọnwa, na kwa nkeji afọ**

---

**Ọzọ:** [Ihe ọmụmụ 13: Ịbawanye Elu](lesson-13-growth) -- ịkwalite FitSite site na obere ọrụ gaa na ezigbo azụmahịa.
