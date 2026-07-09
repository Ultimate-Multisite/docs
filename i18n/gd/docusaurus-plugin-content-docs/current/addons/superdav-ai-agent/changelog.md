---
title: Clàr-atharrachaidhean
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Loga atharrachaidhean {#changelog}

## 1.18.0 — Air fhoillseachadh air 2026-06-29 {#1180--released-on-2026-06-29}

### Ùr {#new}

- **Innealan Google Calendar** — leugh mìosachain agus tachartasan rèitichte airson fèin-obrachaidhean mothachail air clàr-ama
- **Mapadh cheanglaichean agus luchd-cuideachaidh làthairean** — maidsich com-pàirtichean mìosachain ri luchd-cleachdaidh agus ceanglaichean na làraich
- **Geataichean ceadachaidh daonna agus clàran cuimhneachaidh** — cuir fèin-obrachaidhean air stad airson lèirmheas agus seachain fiosan dùblaichte
- **Solaraiche SMS TextBee** — cuir fiosan teachdaireachd-teacsa rèitichte tro TextBee
- **Pasgan companach adhartach** — cuir ris innealan siostam-fhaidhlichean leasaiche earbsach, stòr-dàta, WP-CLI, sgaoiltear REST, togail plugin, dealbh-snap git, stiùireadh luchd-cleachdaidh, agus benchmark a thèid a sgaoileadh air leth bho thogail WordPress.org

### Leasaichte {#improved}

- **Stèidheachadh seirbheis riaghlaichte Superdav** — cuir ris endpoints seirbheis aoigheachd agus solarachadh ceangail fèin-obrachail airson làraichean le taic
- **Pacadh foillseachaidh** — tog ZIPan bunaiteach agus Advanced air leth, foillsich an dà chuid air GitHub, agus cuir dìreach am pasgan bunaiteach gu WordPress.org

### Ceartaichte {#fixed}

- **Earbsachd iarrtasan AI** — leasaich taghadh modail, crìochan-ùine iarrtais, modail stèidheachaidh bunaiteach, làimhseachadh teacsa-reusanachaidh, agus stiùireadh ath-fheuchainn airson gairmean inneil mì-dhligheach
- **Cruadhachadh mìosachain agus chuimhneachain** — neartaich tokens Google Calendar agus dì-dhùblachadh chuimhneachain
- **Onboarding agus ath-thòiseachaidhean ceadachaidh** — càraich cur air bhog onboarding air an frontend agus ath-thòiseachaidhean comais dearbhte
- **Cùisean lèirmheas pacaidh WordPress.org** — dèilig ri fios-air-ais lèirmheas pacaidh airson an fhoillseachadh bhunaiteach

## 1.16.0 — Air fhoillseachadh air 2026-05-20 {#1160--released-on-2026-05-20}

### Ùr {#new-1}

- **Comas Generate Logo SVG** — faodaidh Theme Builder a-nis SVGan suaicheantais gnàthaichte a ghineadh agus fhighe a-steach le glanadh sàbhailte a thaobh namespace
- **Luchdachadh suas dhealbhan san agallamh lorg** — tha agallamh lorg Theme Builder a-nis a’ gabhail a-steach ceum luchdachadh suas dhealbhan airson co-theacsa dealbhaidh nas beairtiche
- **Comas Validate Palette Contrast** — thoir sùil air paidhrichean dhathan airson gèilleadh WCAG mus cuir thu an sàs iad ri theme
- **Clàran-bìdh aoigheachd** — faodaidh Theme Builder a-nis duilleagan clàr-bìdh structaraichte airson biadh is deochan a ghineadh do ghnìomhachasan aoigheachd
- **Renderadh ro-sheallaidh desktop agus mobile** — ro-sheall do dhealbhadh air uidheaman desktop agus mobile rè taghadh stiùireadh-dealbhaidh
- **Paramadair bileag seòlaidh** — tha comas Create Menu a-nis a’ cur taic ri `navigation_label` fa leth, air leth bho thiotal na duilleige
- **Ri fhaighinn innealan Tier 1** — tha sd-ai-agent/site-scrape a-nis na inneal Tier 1 a tha ri fhaighinn gu bunaiteach ann an Theme Builder

### Ceartaichte {#fixed-1}

- **Tasgadan AI Client** — tha e a-nis le taic bho transients airson seasmhachd thar-iarrtasan, a’ cur casg air call dàta air gnìomhan agent a mhaireas fada
- **Ceanglaichean gnìomh sreath plugin** — air an ceartachadh agus air an ath-ainmeachadh airson soilleireachd

## 1.10.0 — Air fhoillseachadh air 2026-05-05 {#1100--released-on-2026-05-05}

### Ùr {#new-2}

- **Rannsachadh eadar-lìn Tavily** — cuir Tavily ris mar sholaraiche rannsachaidh airson toraidhean rannsachaidh eadar-lìn nas beairtiche còmhla ri Brave Search
- **Sgilean togte mothachail air theme** — tha stiùiridhean sgilean Block Themes, Classic Themes, Kadence Blocks, agus Kadence Theme a-nis gan lìbhrigeadh leis a’ plugin
- **Comas foirm conaltraidh togail làraich** — cuir foirm conaltraidh ri duilleag sam bith gu dìreach bhon eadar-aghaidh cabadaich

### Leasaichte {#improved-1}

- **Amalachadh WooCommerce air ath-structaradh** — tha e a-nis a’ cleachdadh APIan dùthchasach WooCommerce airson earbsachd agus co-chòrdalachd nas fheàrr
- **Liosta sholaraichean ag ùrachadh gu fèin-obrachail** — nuair a thèid plugin sam bith a ghnìomhachadh no a chur à gnìomh

### Ceartaichte {#fixed-2}

- **Comas navigate-to** — chaidh lùb ath-luchdachaidh gun chrìoch a chàradh air cuid de dhuilleagan admin
- **Comas list-posts** — tha e a-nis a’ fuasgladh ainmean roinnean agus tagaichean gu slugs gu ceart
- **Òrdughan WP-CLI** — chaidh ailiasan namespace a bha a dhìth ath-nuadhachadh às dèidh ath-structaradh roimhe
- **Fèin-obrachadh thachartasan** — làimhsichidh e gu gràsach làraichean far nach deach clàran fèin-obrachaidh a chruthachadh fhathast
- **Comas memory-save** — tha e a-nis a’ cleachdadh an ro-leasachan namespace cheart ann an togail stiùiridh an t-siostaim
- **Toraidhean innealan scalar** — tha iad a-nis air am pasgadh gu ceart mus tèid an tilleadh don AI
- **Staitistigean cleachdaidh** — tha iad a-nis a’ làimhseachadh cruth iuchrach comais dìleabach gu ceart nuair a thèid ùrachadh bho thionndaidhean nas sine
