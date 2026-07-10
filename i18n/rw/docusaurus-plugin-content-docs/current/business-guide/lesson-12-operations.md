---
title: 'Isomo rya 12: Kuyobora Ubucuruzi'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Isomo rya 12: Gukoresha Ubucuruzi {#lesson-12-running-the-business}

Urubuga si umushinga urangiza -- ni ubucuruzi ukoresha. Iri somo risobanura ibikorwa bya buri munsi byo gucunga FitSite: ubufasha, kwishyuza, kubungabunga, no gutuma abakiriya banyurwa.

## Aho Twari Tugeze {#where-we-left-off}

FitSite iri gukora kandi abakiriya bari kwiyandikisha. Ubu ukeneye gukoresha ibikorwa mu buryo burambye.

## Ibikorwa bya Buri Munsi {#daily-operations}

### Gukurikirana {#monitoring}

Bigenzure buri munsi (cyangwa ushyireho imenyesha):

- **Uptime**: Ese urubuga ruragerwaho? Koresha serivisi yo gukurikirana uptime.
- **Abiyandikishije bashya**: Ni abakiriya bashya bangahe biyandikishije uyu munsi?
- **Kwishyura byanze**: Ese hari ukwishyura kwanze gukenera kwitabwaho?
- **Ibyifuzo by'ubufasha**: Ese hari ibibazo by'abakiriya bitarasubizwa?

### Ubufasha bw'Abakiriya {#customer-support}

Kwibanda ku cyiciro cyihariye ni akarusho hano. Kubera ko abakiriya bawe bose ari sitidiyo za fitness, uzajya ubona ibibazo bimwe kenshi:

**Ibibazo bisanzwe uzajya ubazwa:**

- "Navugurura nte gahunda y'amasomo yanjye?"
- "Nshobora guhindura amabara y'urubuga rwanjye?"
- "Nakongeramo nte umutoza mushya ku rubuga rwanjye?"
- "Domain yanjye ntabwo ikora"
- "Nasiba/nazamura nte plan yanjye?"

Kubaka knowledge base yawe (yatangiye mu Isomo rya 8) ushingiye kuri ibi bibazo bigaruka. Buri ticket y'ubufasha yashoboraga kuba inkuru ya knowledge base ni ikimenyetso cyo kwandika iyo nkuru.

### Inzego z'Ubufasha {#support-tiers}

Uko ukura, tunganya ubufasha ukurikije plan:

| Plan | Urwego rw'Ubufasha | Igihe cyo Gusubiza |
|------|--------------|---------------|
| Starter | Knowledge base + email | amasaha 48 |
| Growth | Ubufasha bwa email | amasaha 24 |
| Pro | Email y'ibanze + telefoni yo gutangira | amasaha 4 |

[Support Tickets addon](/addons/support-tickets) ishobora gufasha gucunga ibyifuzo by'ubufasha imbere mu rubuga.

## Ibikorwa byo Kwishyuza {#billing-operations}

### Kwishura Bisubiramo {#recurring-payments}

Ultimate Multisite icunga billing isubiramo mu buryo bwikora binyuze muri payment gateway yawe. Akazi kawe ni ugukurikirana:

- **Kwishyura byanze**: Bikurikirane vuba. Ibyinshi mu byanze biterwa n'amakarita yarangiye, si ugusiba ku bushake.
- **Dunning**: Shyiraho uburyo bwikora bwo kongera kugerageza binyuze muri payment gateway yawe (Stripe ibikora neza)
- **Ibyifuzo byo gusiba**: Sobanukirwa impamvu abakiriya bagenda. Buri gusiba ni feedback.

### Gucunga Memberships {#managing-memberships}

Jya kuri **Ultimate Multisite > Memberships** kugira ngo:

- Reba subscriptions zose zikora
- Ukemure ibyifuzo byo kuzamura no kumanura
- Ukore refunds igihe bikenewe
- Ucunge irangira rya trial

Reba [Gucunga Memberships](/user-guide/administration/managing-memberships) ku bisobanuro byuzuye.

### Invoicing {#invoicing}

Menya neza ko invoices zikorwa neza kuri buri kwishyura. Abakiriya bashobora gukenera invoices zo gutanga raporo y'amafaranga y'ubucuruzi. Reba [Gucunga Payments na Invoices](/user-guide/administration/managing-payments-and-invoices).

## Kubungabunga Urubuga {#platform-maintenance}

### WordPress na Plugin Updates {#wordpress-and-plugin-updates}

Nk'umuyobozi wa network, ushinzwe:

- **WordPress core updates**: Banza ugerageze kuri site ya staging mbere yo kubishyira kuri production
- **Plugin updates**: Kimwe -- banza ugerageze, hanyuma ubishyire kuri network yose
- **Theme updates**: Emeza ko templates zikigaragara neza nyuma ya theme updates
- **Ultimate Multisite updates**: Kurikira changelog kandi ugerageze mbere yo kuvugurura

:::warning Ntuzigere Ukora Update muri Production Utaragerageje
Update yapfuye igira ingaruka kuri buri site y'umukiriya kuri network yawe. Buri gihe banza ugerageze updates kuri kopi ya staging ya network yawe.
:::

### Umutekano {#security}

- Komeza software yose iri ku gihe
- Koresha passwords zikomeye na two-factor authentication kuri admin accounts
- Kurikirana ibikorwa biteye amakenga
- Gira plan y'ibibazo by'umutekano

### Umuvuduko n'Imikorere {#performance}

Uko network yawe ikura, kurikirana:

- **Ibihe byo gufunguka kwa paji**: Ese sites z'abakiriya zirihuta?
- **Imikoreshereze y'umutungo wa server**: CPU, memory, umwanya wa disk
- **Imikorere ya database**: Networks nini zikenera kunoza database uko igihe gihita

Tekereza gushyira mu bikorwa caching (page cache, object cache) na CDN niba utarabikora. [Cloudflare integration](/user-guide/host-integrations/cloudflare) icunga byinshi muri ibi.

## Gucunga Ubuzima bw'Umukiriya {#customer-lifecycle-management}

### Kugabanya Churn {#reducing-churn}

Churn ni ijanisha ry'abakiriya basiba buri kwezi. Ku bucuruzi bwa subscription, kugabanya churn ni ingenzi nk'uko kubona abakiriya bashya ari ingenzi.

**Impamvu zisanzwe zituma abakiriya ba sitidiyo za fitness basiba:**

- Ntibashoboye kumenya uko bakoresha urubuga → onera onboarding
- Site ntiyasaga neza bihagije → onera templates
- Ntibabonye agaciro → onera features cyangwa itumanaho
- Babonye ubundi buryo buhendutse → komeza kwerekana agaciro kawe kihariye
- Ubucuruzi bwabo bwafunze → ntibyirindwa, ariko bikurikirane ukwabyo

### Gushishikariza Upgrades {#encouraging-upgrades}

Abakiriya bari kuri Starter kandi barimo gutsinda bakwiye gushishikarizwa gukora upgrade:

- Iyo bageze ku mipaka ya plan (sites, storage), bereke upgrade prompts
- Ohereza emails zigenewe kugaragaza features za Growth plan zabagirira akamaro
- Garagaza ibyo abakiriya ba Growth/Pro bubatse

### Kampanye zo Kugarura Abakiriya {#win-back-campaigns}

Iyo umukiriya asibye:

1. Mubaze impamvu (exit survey cyangwa email)
2. Kemura ikibazo cye niba bishoboka
3. Tanga igabanyirizwa kugira ngo agaruke (iminsi 30-60 nyuma yo gusiba)

## Gahunda za Buri Cyumweru na Buri Kwezi {#weekly-and-monthly-routines}

### Buri Cyumweru {#weekly}

- Subiramo abiyandikishije bashya n'abasibye
- Subiza support tickets zose zifunguye
- Genza imikorere ya platform na uptime
- Subiramo ukwishyura kwose kwanze

### Buri Kwezi {#monthly}

- Sesengura ibipimo by'ingenzi (MRR, churn, abakiriya bashya, upgrades)
- Shyiraho WordPress na plugin updates (nyuma y'igerageza rya staging)
- Subiramo kandi uvugurure knowledge base ushingiye ku buryo ibibazo by'ubufasha bigenda bigaruka
- Ohereza newsletter cyangwa update ku bakiriya (features nshya, inama, amakuru y'urwego rwa fitness)

### Buri Gihembwe {#quarterly}

- Subiramo ibiciro ubigereranye n'abo muhiganwa hamwe na feedback y'abakiriya
- Suzuma designs za template -- ese zikeneye kuvugururwa?
- Suzuma ubushobozi bwa hosting -- ese ukeneye kwagura?
- Subiramo kandi onera onboarding ushingiye ku makuru ya activation

## Ibyo Twubatse muri Iri Somo {#what-we-built-this-lesson}

- **Imikorere ya buri munsi yo kugenzura** uptime, signups, payments, na support
- **Imiterere ya support igabanyijemo ibyiciro** ihujwe n’inzego za plan
- **Ibikorwa bya billing** birimo dunning no gucunga cancellation
- **Uburyo bwa maintenance** ku updates, security, na performance
- **Ingamba zo kugabanya churn** zihariye ku cyiciro cya fitness
- **Imikorere y’ibikorwa ya buri cyumweru, buri kwezi, na buri gihembwe**

---

**Ibikurikira:** [Isomo rya 13: Kwagura](lesson-13-growth) -- gukura FitSite ikava ku gikorwa gito ikaba business nyayo.
