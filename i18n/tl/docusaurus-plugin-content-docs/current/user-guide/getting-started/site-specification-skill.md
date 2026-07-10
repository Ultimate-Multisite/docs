---
title: Mga Espesipikasyon ng Site Kasanayan
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Kasan ng Kakayahan sa Site Specification {#site-specification-skill}

Ang **Site Specification skill** ay isang structured na paraan para makuha ang mga layunin, audience, at pagkakakilanlan ng brand ng iyong site. Ang impormasyong ito ay naka-store sa iyong **site_brief memory**, na ginagamit ng mga agent sa iba't ibang sesyon para magbigay ng pare-pareho at kontekstwal na tulong.

## Ano ang Site Specification? {#what-is-site-specification}

Ang Site Specification ay ang proseso ng pagdodokumento ng:

- **Layunin ng Site (Site purpose)**: Ano ang ginagawa ng iyong site at bakit ito umiiral
- **Target Audience**: Sino ang bumibisita sa iyong site at ano ang kanilang kailangan
- **Pagkakakilanlan ng Brand (Brand identity)**: Ang mga kulay, tono, at visual style mo
- **Mga Layunin ng Negosyo (Business goals)**: Ano ang itsura ng tagumpay para sa iyong site
- **Istruktura ng Nilalaman (Content structure)**: Paano nakaayos ang iyong site

Ang spesipikasyong ito ay nagiging iyong **site_brief**, isang persistent memory na ginagamit ng mga agent para maintindihan ang konteksto ng iyong site.

## Bakit Gumamit ng Site Specification? {#why-use-site-specification}

### Pagkakapare-pareho sa Bawat Sesyon (Consistency Across Sessions) {#consistency-across-sessions}

Kung wala kang site_brief, kailangan mong ulitin ang paliwanag tungkol sa layunin ng iyong site sa bawat simula ng bagong sesyon. Sa pamamagitan nito, agad na naiintindihan ng mga agent:

- Ang mga layunin at audience ng iyong site
- Ang mga kulay at tono ng iyong brand
- Ang istruktura ng iyong nilalaman
- Ang mga layuning pangnegosyo mo

### Mas Magagandang Rekomendasyon (Better Recommendations) {#better-recommendations}

Ginagamit ng mga agent ang iyong site_brief para:

- Magmungkahi ng mga feature na naaayon sa layunin ng iyong site
- Magrekomenda ng mga istruktura ng nilalaman na tumutugma sa iyong mga layunin
- Magmungkahi ng mga disenyo na tugma sa iyong brand
- Iwasan ang pagmumungkahi ng mga feature na hindi bagay

### Mas Mabilis na Pagsisimula (Faster Onboarding) {#faster-onboarding}

Maaaring mabilis na makasabay ang mga bagong agent (o mga agent sa bagong sesyon) sa pamamagitan ng pagbabasa ng iyong site_brief sa halip na magtanong ng mga nagpapalinaw.

## Pagpapasimula ng Site Specification {#initiating-site-specification}

### Habang Nag-o-onboard sa Theme Builder {#during-theme-builder-onboarding}

Ang Site Specification skill ay awtomatikong nagsisimula habang nasa **Theme Builder onboarding flow** ka. Ang Setup Assistant agent ang magtatanong at bubuo ng iyong site_brief.

### Manual na Pagsisimula {#manual-initiation}

Magsimula ka sa Site Specification anumang oras:

```
"Ipagpapatakbo ko ang spesipikasyon ng site ko"
```

o

```
"Tulungan mo akong gumawa ng site brief"
```

## Ang Proseso ng Site Specification {#the-site-specification-process}

### Hakbang 1: Layunin ng Site (Site Purpose) {#step-1-site-purpose}

Itatanong ng agent:

```
Ano ang pangunahing layunin ng iyong site?
- E-commerce store
- Blog o content site
- Portfolio o showcase
- SaaS application
- Community o forum
- Iba pa: [ilarawan]
```

Maaari kang pumili ng kategorya o ilarawan ang sarili mong layunin.

### Hakbang 2: Target na Audience (Target Audience) {#step-2-target-audience}

```
Sino ang pangunahing audience mo?
- Mga Mamimili / pangkalahatang publiko
- Mga propesyonal sa negosyo
- Mga developer / teknikal na gumagamit
- Mga estudyante / tagapagturo
- Iba pa: [ilarawan]

Ano ang kanilang mga pangunahing pangangailangan?
```

### Hakbang 3: Pagkakakilanlan ng Brand (Brand Identity) {#step-3-brand-identity}

```
Ano ang mga kulay ng iyong brand?
- Pangunahing kulay: [color picker o hex code]
- Pangalawang kulay: [color picker o hex code]
- Accent color: [opsyonal]

Paano mo ilalarawan ang tono ng iyong brand?
- Propesyonal / korporatibo
- Malikhain / artistiko
- Masaya / kaswal
- Minimal / moderno
- Mainit / palakaibigan
```

### Hakbang 4: Mga Layunin sa Negosyo (Business Goals) {#step-4-business-goals}

```
Ano ang hitsura ng tagumpay para sa iyong site?
- Magbigay ng leads
- Magbenta ng mga produkto
- Bumuo ng komunidad
- Magbahagi ng kaalaman
- Magtatag ng awtoridad
- Iba pa: [ilarawan]

Ano ang iyong pangunahing metric (sukatan)?
- Kita (Revenue)
- Pakikilahok ng user (User engagement)
- Abot ng content (Content reach)
- Conversions
- Iba pa
```

### Hakbang 5: Estruktura ng Nilalaman (Content Structure) {#step-5-content-structure}

```
Paano nakaayos ang iyong nilalaman?
- Flat (lahat ng content ay nasa iisang antas)
- Hierarchical (mga kategorya at subkategorya)
- Kronolohikal (blog-style)
- Batay sa produkto (catalog)
- Iba pa: [ilarawan]

Anong mga uri ng content ang ginagamit mo?
- Blog posts
- Product pages
- Case studies
- Dokumentasyon
- Mga video
- Iba pa
```

## Ang Memorya ng iyong site_brief {#your-sitebrief-memory}

Pagkatapos makumpleto ang Site Specification, ang impormasyon mo ay iniimbak bilang **site_brief** sa memorya ng iyong agent. Ito ay isang structured na talaang naglalaman ng:

## Pagtingin at Pag-update ng iyong site_brief {#viewing-and-updating-your-sitebrief}

### Tingnan ang iyong site_brief {#view-your-sitebrief}

Tanungin ang agent:

```
"Show me my site brief"
```

o

```
"What do you know about my site?"
```

Ipapakita ng agent ang iyong nakaimbak na detalye.

### I-update ang iyong site_brief {#update-your-sitebrief}

Kung nagbabago ang iyong site, maaari mo itong i-update:

```
"Update my site brief: we're now targeting B2B customers"
```

o

```
"Refresh my site specification"
```

Muling tatakbo nito ang Site Specification skill gamit ang kasalukuyang impormasyon mo bilang panimulang punto.

## Paano Ginagamit ng mga Agent ang site_brief {#how-agents-use-sitebrief}

### Mga Rekomendasyon sa Disenyo (Design Recommendations) {#design-recommendations}

Kapag humingi ka ng pagbabago sa disenyo, binabanggit ng mga agent ang iyong site_brief:

```
Ikaw: "Redesign my homepage"
Agent: "Batay sa iyong site brief, ang target mo ay mga kababaihan na nasa edad 25-45
na may mainit at artisanal na tono. Gagawan ko ng disenyo na magbibigay-diin
sa iyong mga handmade jewelry at mga halaga ng sustainability."
```

### Mga Mungkahi sa Feature (Feature Suggestions) {#feature-suggestions}

Nagmumungkahi ang mga agent ng mga feature na naaayon sa iyong mga layunin:

```
Ikaw: "What features should I add?"
Agent: "Para sa isang e-commerce store na nakatuon sa loyalty ng customer,
irekomenda ko: loyalty program, customer reviews, email newsletter,
at product recommendations."
```

### Estruktura ng Nilalaman (Content Structure) {#content-structure}

Iminumungkahi ng mga agent ang pag-oorganisa ng nilalaman batay sa iyong istraktura:

Paano ko dapat ayusin ang aking blog?
Magsisimula ako sa pag-oorganisa ng mga post ayon sa kategorya ng produkto at gumawa ng mga 'styling guide' na nagpapakita ng maraming produkto nang magkakasama.

## Mga Pinakamahusay na Pamamaraan (Best Practices) {#best-practices}

### Maging Espesipiko {#be-specific}

Imbes na "pangkalahatang mambabasa," ilarawan ang iyong aktuwal na audience:

- ✓ "Mga kababaihan na nasa edad 25-45, interesado sa sustainable fashion"
- ✗ "Lahat ng tao"

### Mag-update nang Regular {#update-regularly}

Habang nagbabago ang iyong site, i-update ang iyong `site_brief`:

- Kapag lumipat ka sa bagong audience
- Kapag nagdagdag ka ng mga bagong linya ng produkto
- Kapag nagbago ang pagkakakilanlan ng iyong brand
- Kapag nagbago ang mga layunin ng iyong negosyo

### Gumamit ng Parehong Terminolohiya {#use-consistent-terminology}

Gumamit ng parehong salita sa lahat ng pagkakataon:

- ✓ Palaging sabihin ang "sustainable jewelry" (hindi "eco-friendly jewelry" at "green products")
- ✓ Patuloy na tukuyin ang iyong audience sa parehong paraan

### Magbigay ng Konteksto {#include-context}

Magbigay ng background na makakatulong sa mga agent na maintindihan ang iyong mga desisyon:

- "Target natin ang mga propesyonal na nagpapahalaga sa kalidad kaysa sa presyo"
- "Ang ating audience ay tech-savvy at inaasahan ang modernong disenyo"
- "Kami ay isang bootstrapped startup, kaya kailangan namin ng mga solusyong cost-effective"

## Kaugnayan sa Theme Builder Onboarding {#relationship-to-theme-builder-onboarding}

Ang Site Specification skill ay pinagsama sa **Theme Builder onboarding flow**. Kapag natapos mo ang onboarding, awtomatikong gagawin ang iyong `site_brief` gamit ang impormasyong ibinigay mo.

Maaari mo ring patakbuhin ang Site Specification nang mag-isa kung gusto mo:

- Ayusin ang iyong specification pagkatapos ng unang setup
- I-update ang iyong site brief habang nagbabago ang iyong site
- Gumawa ng detalyadong specification bago magsimula sa Theme Builder

## Pag-troubleshoot (Troubleshooting) {#troubleshooting}

**Hindi ginagamit ang aking `site_brief`**
- Siguraduhin na may access ang agent sa memorya
- Tanungin ang agent na "recall my site brief"
- Tingnan kung naka-enable ang memorya sa iyong settings

**Gusto kong magsimula ulit sa bagong site\_brief**
- Tanungin ang agent: "Linisin ang aking site brief at magsimula muli"
- Pagkatapos ay patakbuhin muli ang Site Specification

**Ang agent ay gumagawa ng mga rekomendasyon na hindi tugma sa site\_brief ko**
- Tanungin ang agent na "rebyuhin ang aking site brief"
- I-update ang iyong site\_brief kung ito ay luma na
- Magbigay ng karagdagang konteksto sa iyong mga request

## Mga Susunod na Hakbang {#next-steps}

Pagkatapos mong tukuyin ang iyong site specification:

1. **Gamitin ang Theme Builder**: Gumawa ng custom theme batay sa iyong site\_brief
2. **Ayusin ang Disenyo (Refine Design)**: Gamitin ang Design System Aesthetics skill para sa detalyadong trabaho sa disenyo
3. **Planuhin ang Nilalaman (Plan Content)**: Humingi ng mga rekomendasyon sa istruktura ng nilalaman mula sa mga agent
4. **Bumuo ng Mga Feature (Build Features)**: Humingi ng mga feature na naaayon sa iyong mga layunin sa negosyo
