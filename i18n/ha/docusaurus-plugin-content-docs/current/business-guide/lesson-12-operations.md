---
title: 'Darasi na 12: Gudanar da Kasuwancin'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Darasi na 12: Gudanar da Kasuwancin {#lesson-12-running-the-business}

Dandali ba aikin da ka gama ba ne -- kasuwanci ne da kake gudanarwa. Wannan darasi yana rufe ayyukan yau da kullum na sarrafa FitSite: tallafi, biyan kuɗi, kulawa, da faranta wa abokan ciniki rai.

## Inda Muka Tsaya {#where-we-left-off}

FitSite yana aiki kuma abokan ciniki suna yin rajista. Yanzu kana buƙatar gudanar da aikin cikin dorewa.

## Ayyukan Yau da Kullum {#daily-operations}

### Sa ido {#monitoring}

Duba waɗannan kullum (ko saita faɗakarwa):

- **Lokacin aiki**: Shin ana iya shiga dandalin? Yi amfani da sabis na sa ido kan lokacin aiki.
- **Sabbin rajista**: Sabbin abokan ciniki nawa suka yi rajista yau?
- **Biyan kuɗi da suka gaza**: Shin akwai gazawar biyan kuɗi da ke buƙatar kulawa?
- **Buƙatun tallafi**: Shin akwai tambayoyin abokan ciniki da ba a amsa ba?

### Tallafin Abokan Ciniki {#customer-support}

Mayar da hankalinka kan wani fanni na musamman fa'ida ce a nan. Saboda duk abokan cinikinka ɗakunan motsa jiki ne, za ka riƙa ganin tambayoyi iri ɗaya akai-akai:

**Tambayoyin gama gari da za ka samu:**

- "Ta yaya zan sabunta jadawalin azuzuwana?"
- "Zan iya canza launukan shafina?"
- "Ta yaya zan ƙara sabon mai horarwa zuwa shafina?"
- "Domain ɗina baya aiki"
- "Ta yaya zan soke/haɓaka tsarina?"

Gina cibiyar iliminka (da aka fara a Darasi na 8) bisa waɗannan tambayoyin da ke maimaituwa. Duk wani tikitin tallafi da zai iya zama labarin cibiyar ilimi alama ce ta cewa a rubuta wannan labarin.

### Matakan Tallafi {#support-tiers}

Yayin da kake girma, tsara tallafi bisa tsari:

| Tsari | Matakin Tallafi | Lokacin Amsa |
|------|--------------|---------------|
| Starter | Cibiyar ilimi + imel | awa 48 |
| Growth | Tallafin imel | awa 24 |
| Pro | Imel na fifiko + kiran farawa | awa 4 |

[Support Tickets addon](/addons/support-tickets) na iya taimakawa wajen sarrafa buƙatun tallafi a cikin dandalin.

## Ayyukan Biyan Kuɗi {#billing-operations}

### Biyan Kuɗi Mai Maimaituwa {#recurring-payments}

Ultimate Multisite yana sarrafa biyan kuɗi mai maimaituwa ta atomatik ta hanyar payment gateway ɗinka. Aikinka shi ne ka sa ido kan:

- **Biyan kuɗi da suka gaza**: Bi su da sauri. Yawancin gazawa katuna ne da wa'adinsu ya ƙare, ba soke niyya ba.
- **Dunning**: Saita dabarar sake gwadawa ta atomatik ta hanyar payment gateway ɗinka (Stripe yana yin wannan da kyau)
- **Buƙatun sokewa**: Fahimci dalilin da ya sa abokan ciniki ke barin sabis. Kowace sokewa martani ce.

### Sarrafa Memberships {#managing-memberships}

Je zuwa **Ultimate Multisite > Memberships** don:

- Duba duk subscriptions masu aiki
- Sarrafa buƙatun haɓakawa da saukarwa
- Aiwar da kuɗin mayarwa idan ya zama dole
- Sarrafa ƙarewar gwaji

Duba [Sarrafa Memberships](/user-guide/administration/managing-memberships) don cikakken bayani.

### Rasitoci {#invoicing}

Tabbatar an samar da rasitoci daidai ga kowane biyan kuɗi. Abokan ciniki na iya buƙatar rasitoci don rahoton kuɗaɗen kasuwanci. Duba [Sarrafa Biyan Kuɗi da Rasitoci](/user-guide/administration/managing-payments-and-invoices).

## Kulawar Dandali {#platform-maintenance}

### Sabuntawar WordPress da Plugin {#wordpress-and-plugin-updates}

A matsayinka na mai gudanar da network, kai ne ke da alhakin:

- **Sabuntawar core na WordPress**: Gwada a shafin staging kafin aiwatarwa a production
- **Sabuntawar plugin**: Haka nan -- fara gwadawa, sannan aiwatar a duk network
- **Sabuntawar theme**: Tabbatar templates har yanzu suna kama daidai bayan sabuntawar theme
- **Sabuntawar Ultimate Multisite**: Bi changelog kuma ka gwada kafin sabuntawa

:::warning Kada Ka Taɓa Sabuntawa a Production Ba Tare da Gwaji Ba
Sabuntawa da ta lalace tana shafar kowane shafin abokin ciniki a network ɗinka. Koyaushe ka fara gwada sabuntawa a kwafin staging na network ɗinka.
:::

### Tsaro {#security}

- Riƙe duk software a sabunta
- Yi amfani da kalmomin sirri masu ƙarfi da two-factor authentication don admin accounts
- Sa ido kan ayyuka masu shakku
- Ka kasance da tsari don lamuran tsaro

### Aiki {#performance}

Yayin da network ɗinka ke girma, sa ido kan:

- **Lokutan loda shafi**: Shin shafukan abokan ciniki suna da sauri?
- **Amfani da albarkatun server**: CPU, ƙwaƙwalwa, sararin disk
- **Aikin database**: Manyan networks suna buƙatar inganta database a kan lokaci

Yi la'akari da aiwatar da caching (page cache, object cache) da CDN idan ba ka riga ka yi ba. [Cloudflare integration](/user-guide/host-integrations/cloudflare) yana sarrafa yawancin wannan.

## Sarrafa Zagayen Rayuwar Abokin Ciniki {#customer-lifecycle-management}

### Rage Churn {#reducing-churn}

Churn shi ne kason abokan ciniki da ke soke sabis kowane wata. Ga kasuwancin subscription, rage churn yana da muhimmanci kamar samun sabbin abokan ciniki.

**Dalilan gama gari da abokan ciniki na ɗakunan motsa jiki ke churn:**

- Ba su iya gano yadda ake amfani da dandalin ba → inganta onboarding
- Shafin bai yi kyau sosai ba → inganta templates
- Ba su ga ƙima ba → inganta fasaloli ko sadarwa
- Sun sami madadin da ya fi arha → ƙarfafa ƙimar fanninka na musamman
- Kasuwancinsu ya rufe → ba za a iya guje wa hakan ba, amma a bibiyi wannan daban

### Ƙarfafa Haɓakawa {#encouraging-upgrades}

Abokan ciniki a Starter da ke samun nasara ya kamata a ƙarfafa su su haɓaka:

- Lokacin da suka kai iyakokin tsari (shafuka, ajiya), nuna musu saƙonnin haɓakawa
- Aika imel masu niyya da ke nuna fasalolin tsarin Growth da za su amfana da su
- Nuna abin da abokan cinikin Growth/Pro suka gina

### Kamfen ɗin Dawo da Abokin Ciniki {#win-back-campaigns}

Lokacin da abokin ciniki ya soke:

1. Tambayi dalili (binciken fita ko imel)
2. Magance damuwarsu idan zai yiwu
3. Bayar da ragi don dawowa (kwanaki 30-60 bayan sokewa)

## Ayyukan Mako-mako da Wata-wata {#weekly-and-monthly-routines}

### Mako-mako {#weekly}

- Duba sabbin rajista da sokewa
- Amsa duk tikitin tallafi da ke buɗe
- Duba aikin dandali da lokacin aiki
- Duba duk wani biyan kuɗi da ya gaza

### Wata-wata {#monthly}

- Nazari kan muhimman ma'auni (MRR, churn, sabbin abokan ciniki, haɓakawa)
- Aiwatar da sabuntawar WordPress da plugin (bayan gwajin staging)
- Duba kuma sabunta cibiyar ilimi bisa tsarin buƙatun tallafi
- Aika wasiƙar labarai ko sabuntawa ga abokan ciniki (sabbin fasaloli, shawarwari, labaran masana'antar fitness)

### Kwata-kwata {#quarterly}

- Duba farashi idan aka kwatanta da masu gasa da martanin abokan ciniki
- Tantance ƙirar templates -- suna buƙatar sabuntawa?
- Tantance ƙarfin hosting -- kana buƙatar faɗaɗawa?
- Duba kuma inganta onboarding bisa bayanan activation

## Abin da Muka Gina a Wannan Darasi {#what-we-built-this-lesson}

- **Ayyukan sa ido na yau da kullum** don uptime, rajista, biyan kuɗi, da tallafi
- **Tsarin tallafi mai matakai** da ya dace da matakan tsare-tsare
- **Ayyukan lissafin kuɗi** ciki har da dunning da sarrafa sokewa
- **Hanyoyin kulawa** don sabuntawa, tsaro, da inganci
- **Dabarun rage churn** musamman ga fannin motsa jiki
- **Ayyukan gudanarwa na mako-mako, wata-wata, da kwata-kwata**

---

**Na gaba:** [Darasi na 13: Faɗaɗawa](lesson-13-growth) -- haɓaka FitSite daga ƙaramin aiki zuwa kasuwanci na gaske.
