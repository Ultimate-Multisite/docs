---
title: 'Isifundo 12: Ukuqhuba Ibhizinisi'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Isifundo 12: Ukuqhuba Ibhizinisi

Inkundla akuyona iphrojekthi oyiphothulayo -- iyibhizinisi oliqhubayo. Lesi sifundo sihlanganisa imisebenzi yansuku zonke yokuphatha i-FitSite: ukwesekwa, ukukhokhisa, ukunakekela, nokugcina amakhasimende ejabule.

## Lapho Sigcine Khona {#where-we-left-off}

I-FitSite isiyasebenza futhi amakhasimende ayabhalisa. Manje kudingeka uqhube umsebenzi ngendlela esimeme.

## Imisebenzi Yansuku Zonke {#daily-operations}

### Ukuqapha {#monitoring}

Hlola lokhu nsuku zonke (noma usethe izaziso):

- **Isikhathi sokusebenza**: Ingabe inkundla iyafinyeleleka? Sebenzisa isevisi yokuqapha isikhathi sokusebenza.
- **Ukubhalisa okusha**: Mangaki amakhasimende amasha abhalise namuhla?
- **Izinkokhelo ezihlulekile**: Ingabe kukhona ukwehluleka kwezinkokhelo okudinga ukunakwa?
- **Izicelo zokwesekwa**: Ingabe kukhona imibuzo yamakhasimende engakaphendulwa?

### Ukwesekwa Kwamakhasimende {#customer-support}

Ukugxila kwakho emkhakheni okhethekile kuyinzuzo lapha. Njengoba wonke amakhasimende akho eyizitudiyo zokuzivocavoca, uzobona imibuzo efanayo iphindaphindwa:

**Imibuzo evamile ozoyithola:**

- "Ngilubuyekeza kanjani uhlelo lwami lwamakilasi?"
- "Ngingayishintsha imibala yesayithi yami?"
- "Ngimengeza kanjani umqeqeshi omusha kusayithi yami?"
- "I-domain yami ayisebenzi"
- "Ngiyikhansela/ngiyithuthukisa kanjani i-plan yami?"

Yakha isizinda sakho solwazi (esiqale eSifundweni 8) uzungeze le mibuzo ephindaphindayo. Yonke ithikithi lokwesekwa ebelingaba i-athikili yesizinda solwazi liyisibonakaliso sokuthi ubhale leyo athikili.

### Amazinga Okwesekwa {#support-tiers}

Njengoba ukhula, hlela ukwesekwa nge-plan:

| I-Plan | Izinga Lokwesekwa | Isikhathi Sokuphendula |
|------|--------------|---------------|
| Starter | Isizinda solwazi + i-email | Amahora angu-48 |
| Growth | Ukwesekwa nge-email | Amahora angu-24 |
| Pro | I-email ebalulekile + ucingo lokuqalisa | Amahora angu-4 |

I-[addon Yamathikithi Okwesekwa](/addons/support-tickets) ingasiza ukuphatha izicelo zokwesekwa ngaphakathi kwenkundla.

## Imisebenzi Yokukhokhisa {#billing-operations}

### Izinkokhelo Eziphindaphindwayo {#recurring-payments}

Ultimate Multisite iphatha ukukhokhisa okuphindaphindwayo ngokuzenzakalelayo nge-payment gateway yakho. Umsebenzi wakho ukuqapha lokhu:

- **Izinkokhelo ezihlulekile**: Landela ngokushesha. Ukwehluleka okuningi kubangelwa amakhadi aphelelwe yisikhathi, hhayi ukukhansela ngenhloso.
- **Ukulandela izinkokhelo**: Setha ilojikhi yokuzama kabusha ngokuzenzakalelayo nge-payment gateway yakho (Stripe ikwenza kahle lokhu)
- **Izicelo zokukhansela**: Qonda ukuthi kungani amakhasimende ehamba. Konke ukukhansela kuyimpendulo.

### Ukuphatha Ubulungu {#managing-memberships}

Yiya ku-**Ultimate Multisite > Ubulungu** ukuze:

- Ubuke konke okubhaliselwe okusebenzayo
- Uphathe izicelo zokuthuthukisa nokwehlisa izinga
- Ucubungule ukubuyiselwa kwemali lapho kudingeka
- Uphathe ukuphela kwezikhathi zesivivinyo

Bheka [Ukuphatha Ubulungu](/user-guide/administration/managing-memberships) ukuze uthole ireferensi ephelele.

### Ama-invoice {#invoicing}

Qinisekisa ukuthi ama-invoice akhiqizwa ngendlela efanele kuzo zonke izinkokhelo. Amakhasimende angase adinge ama-invoice ukuze abike izindleko zebhizinisi. Bheka [Ukuphatha Izinkokhelo Nama-invoice](/user-guide/administration/managing-payments-and-invoices).

## Ukunakekelwa Kwenkundla {#platform-maintenance}

### Izibuyekezo ze-WordPress nama-plugin {#wordpress-and-plugin-updates}

Njengomphathi wenethiwekhi, unesibopho salokhu:

- **Izibuyekezo ze-core ye-WordPress**: Hlola kusayithi ye-staging ngaphambi kokusebenzisa ku-production
- **Izibuyekezo zama-plugin**: Ngokufanayo -- hlola kuqala, bese usebenzisa kuyo yonke inethiwekhi
- **Izibuyekezo zama-theme**: Qinisekisa ukuthi ama-template asabukeka kahle ngemva kwezibuyekezo ze-theme
- **Izibuyekezo ze-Ultimate Multisite**: Landela i-changelog futhi uhlole ngaphambi kokubuyekeza

:::warning Ungalokothi Ubuyekeze ku-Production Ngaphandle Kokuhlola
Isibuyekezo esiphukile sithinta yonke isayithi yamakhasimende kunethiwekhi yakho. Njalo hlola izibuyekezo kukhophi ye-staging yenethiwekhi yakho kuqala.
:::

### Ukuvikeleka {#security}

- Gcina yonke isoftware isesikhathini
- Sebenzisa amaphasiwedi aqinile nokuqinisekisa ngezinyathelo ezimbili kuma-Account e-admin
- Qapha umsebenzi osolisayo
- Yiba ne-plan yezigameko zokuvikeleka

### Ukusebenza {#performance}

Njengoba inethiwekhi yakho ikhula, qapha:

- **Izikhathi zokulayisha amakhasi**: Ingabe amasayithi amakhasimende ayashesha?
- **Ukusetshenziswa kwezinsiza zeseva**: CPU, inkumbulo, isikhala sediski
- **Ukusebenza kwe-database**: Amanethiwekhi amakhulu adinga ukulungiselelwa kwe-database ngokuhamba kwesikhathi

Cabanga ukusebenzisa i-caching (i-page cache, i-object cache) ne-CDN uma ungakakwenzi. I-[Cloudflare integration](/user-guide/host-integrations/cloudflare) iphatha okuningi kwalokhu.

## Ukuphathwa Komjikelezo Wempilo Yekhasimende {#customer-lifecycle-management}

### Ukunciphisa Ukushiya {#reducing-churn}

Ukushiya kuyiphesenti lamakhasimende akhansela njalo ngenyanga. Ebhizinisini lokubhaliselwe, ukunciphisa ukushiya kubaluleke njengokuthola amakhasimende amasha.

**Izizathu ezivamile zokuthi amakhasimende ezitudiyo zokuzivocavoca ashiye:**

- Abakwazanga ukuqonda ukuthi bayisebenzisa kanjani inkundla → thuthukisa ukuqaliswa
- Isayithi ibingabukeki kahle ngokwanele → thuthukisa ama-template
- Ababonanga inani → thuthukisa izici noma ukuxhumana
- Bathole enye indlela eshibhile → qinisa inani lakho lomkhakha okhethekile
- Ibhizinisi labo livaliwe → akunakugwemeka, kodwa kulandelele ngokwehlukana

### Ukukhuthaza Ukuthuthukisa {#encouraging-upgrades}

Amakhasimende aku-Starter aphumelelayo kufanele akhuthazwe ukuthi athuthukise:

- Uma efinyelela imikhawulo ye-plan (amasayithi, isitoreji), bonisa izikhuthazo zokuthuthukisa
- Thumela ama-email aqondisiwe agqamisa izici ze-Growth plan abangazuza kuzo
- Bonisa lokho amakhasimende e-Growth/Pro akwakhile

### Imikhankaso Yokubuyisa {#win-back-campaigns}

Lapho ikhasimende likhansela:

1. Buza ukuthi kungani (inhlolovo yokuphuma noma i-email)
2. Bhekana nokukhathazeka kwalo uma kungenzeka
3. Nikeza isaphulelo ukuze libuye (izinsuku ezingu-30-60 ngemva kokukhansela)

## Izinqubo Zamasonto Onke Nezanyanga Zonke {#weekly-and-monthly-routines}

### Masonto Onke {#weekly}

- Buyekeza ukubhalisa okusha nokukhansela
- Phendula wonke amathikithi okwesekwa avulekile
- Hlola ukusebenza kwenkundla nesikhathi sokusebenza
- Buyekeza noma yiziphi izinkokhelo ezihlulekile

### Nyanga Zonke {#monthly}

- Hlaziya amamethrikhi abalulekile (MRR, ukushiya, amakhasimende amasha, ukuthuthukisa)
- Sebenzisa izibuyekezo ze-WordPress nama-plugin (ngemva kokuhlolwa kwe-staging)
- Buyekeza futhi ubuyekeze isizinda solwazi ngokusekelwe emaphethini okwesekwa
- Thumela i-newsletter noma isibuyekezo kumakhasimende (izici ezintsha, amathiphu, izindaba zomkhakha wokuzivocavoca)

### Ngekota {#quarterly}

- Buyekeza intengo uma iqhathaniswa nabancintisana nawe nempendulo yamakhasimende
- Hlola imiklamo yama-template -- ingabe idinga ukuvuselelwa?
- Hlola umthamo wokusingatha -- ingabe kudingeka ukhule?
- Buyekeza futhi uthuthukise ukuqaliswa ngokusekelwe kudatha yokuvuselela

## Esikwakhile Kulesi Sifundo {#what-we-built-this-lesson}

- **Izinqubo zansuku zonke zokuqapha** zesikhathi sokusebenza, ukubhalisa, izinkokhelo, nokwesekwa
- **Isakhiwo sokwesekwa esinamazinga** esihambisana namazinga e-plan
- **Imisebenzi yokukhokhisa** ehlanganisa ukulandela izinkokhelo nokuphatha ukukhansela
- **Izinqubo zokunakekela** zezibuyekezo, ukuvikeleka, nokusebenza
- **Amasu okunciphisa ukushiya** aqondene ngqo nomkhakha wokuzivocavoca
- **Izinqubo zokusebenza zamasonto onke, zanyanga zonke, nezekota**

---

**Okulandelayo:** [Isifundo 13: Ukukhulisa](lesson-13-growth) -- ukukhulisa i-FitSite isuke emsebenzini omncane iye ebhizinisini langempela.
