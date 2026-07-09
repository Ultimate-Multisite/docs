---
title: 'Phunziro 12: Kuyendetsa Bizinesi'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Phunziro 12: Kuyendetsa Bizinesi {#lesson-12-running-the-business}

Nsanja si ntchito yomwe mumamaliza -- ndi bizinesi yomwe mumayendetsa. Phunziro ili limafotokoza ntchito za tsiku ndi tsiku poyang'anira FitSite: thandizo, kulipiritsa, kukonza, ndi kusunga makasitomala ali osangalala.

## Kumene Tinasiya {#where-we-left-off}

FitSite ili pa intaneti ndipo makasitomala akulembetsa. Tsopano muyenera kuyendetsa ntchitoyi mokhazikika.

## Ntchito za Tsiku ndi Tsiku {#daily-operations}

### Kuwunika {#monitoring}

Onani izi tsiku lililonse (kapena khazikitsani machenjezo):

- **Uptime**: Kodi nsanja ikupezeka? Gwiritsani ntchito ntchito yowunikira uptime.
- **Olembetsa atsopano**: Ndi makasitomala atsopano angati omwe alembetsa lero?
- **Malipiro olephera**: Kodi pali kulephera kwa malipiro komwe kukufuna chisamaliro?
- **Zopempha thandizo**: Kodi pali mafunso a makasitomala osayankhidwa?

### Thandizo la Makasitomala {#customer-support}

Kuyang'ana pa niche yanu ndi mwayi pano. Chifukwa makasitomala anu onse ndi ma studio a fitness, mudzawona mafunso omwewo mobwerezabwereza:

**Mafunso wamba omwe mudzalandira:**

- "Ndingasinthe bwanji ndandanda ya makalasi anga?"
- "Kodi ndingasinthe mitundu ya tsamba langa?"
- "Ndingawonjezere bwanji trainer watsopano patsamba langa?"
- "Domain yanga sikugwira ntchito"
- "Ndingaletse/kukweza bwanji pulani yanga?"

Pangani nkhokwe yanu ya chidziwitso (yomwe inayambika mu Phunziro 8) mozungulira mafunso obwerezabwerezawa. Ticket iliyonse ya thandizo yomwe ikanatha kukhala nkhani ya nkhokwe ya chidziwitso ndi chizindikiro choti mulembere nkhaniyo.

### Magawo a Thandizo {#support-tiers}

Pamene mukukula, konzani thandizo malinga ndi pulani:

| Pulani | Mulingo wa Thandizo | Nthawi Yoyankha |
|------|--------------|---------------|
| Starter | Nkhokwe ya chidziwitso + imelo | maola 48 |
| Growth | Thandizo la imelo | maola 24 |
| Pro | Imelo ya patsogolo + foni yoyambitsa | maola 4 |

[Support Tickets addon](/addons/support-tickets) ingathandize kuyang'anira zopempha thandizo mkati mwa nsanja.

## Ntchito za Kulipiritsa {#billing-operations}

### Malipiro Obwerezabwereza {#recurring-payments}

Ultimate Multisite imasamalira kulipiritsa kobwerezabwereza zokha kudzera pa payment gateway yanu. Ntchito yanu ndi kuyang'anira:

- **Malipiro olephera**: Tsatirani mwachangu. Kulephera kwakukulu kumachitika chifukwa cha makhadi atha ntchito, osati kuletsa mwadala.
- **Dunning**: Khazikitsani njira yobwereza kuyesa yokha kudzera pa payment gateway yanu (Stripe imachita izi bwino)
- **Zopempha zoletsa**: Mvetsetsani chifukwa chake makasitomala amachoka. Kuletsa kulikonse ndi ndemanga.

### Kuwongolera Umembala {#managing-memberships}

Pitani ku **Ultimate Multisite > Memberships** kuti:

- Muone ma subscription onse omwe akugwira ntchito
- Musamalire zopempha zokweza ndi zotsitsa
- Mukonze zobweza ndalama zikafunika
- Muyang'anire kutha kwa mayesero

Onani [Kuwongolera Umembala](/user-guide/administration/managing-memberships) kuti mupeze buku lonse lofotokozera.

### Ma Invoice {#invoicing}

Onetsetsani kuti ma invoice amapangidwa molondola pa malipiro aliwonse. Makasitomala angafunike ma invoice popereka lipoti la ndalama za bizinesi. Onani [Kuwongolera Malipiro ndi Ma Invoice](/user-guide/administration/managing-payments-and-invoices).

## Kukonza Nsanja {#platform-maintenance}

### Zosintha za WordPress ndi Mapulagini {#wordpress-and-plugin-updates}

Monga woyang'anira network, muli ndi udindo wa:

- **Zosintha za WordPress core**: Yesani pa tsamba la staging musanazigwiritse ntchito pa production
- **Zosintha za mapulagini**: Chimodzimodzi -- yesani kaye, kenako gwiritsani ntchito pa network yonse
- **Zosintha za theme**: Tsimikizirani kuti ma template akadali kuwoneka bwino pambuyo pa zosintha za theme
- **Zosintha za Ultimate Multisite**: Tsatirani changelog ndipo yesani musanasinthe

:::warning Musasinthe pa Production Popanda Kuyesa
Kusintha kosweka kumakhudza tsamba lililonse la kasitomala pa network yanu. Nthawi zonse yesani zosintha pa kopi ya staging ya network yanu kaye.
:::

### Chitetezo {#security}

- Sungani mapulogalamu onse ali atsopano
- Gwiritsani ntchito ma password amphamvu ndi two-factor authentication pa ma account a admin
- Yang'anirani zochitika zokayikitsa
- Khalani ndi pulani ya zochitika za chitetezo

### Magwiridwe Antchito {#performance}

Pamene network yanu ikukula, yang'anirani:

- **Nthawi zotsegula masamba**: Kodi masamba a makasitomala ali achangu?
- **Kugwiritsa ntchito zinthu za server**: CPU, memory, disk space
- **Magwiridwe a database**: Ma network akulu amafunikira kukonza database pakapita nthawi

Ganizirani kukhazikitsa caching (page cache, object cache) ndi CDN ngati simunachite kale. [Cloudflare integration](/user-guide/host-integrations/cloudflare) imasamalira zambiri mwa izi.

## Kuwongolera Moyo wa Kasitomala {#customer-lifecycle-management}

### Kuchepetsa Churn {#reducing-churn}

Churn ndi peresenti ya makasitomala omwe amaletsa mwezi uliwonse. Kwa bizinesi ya subscription, kuchepetsa churn n'kofunika mofanana ndi kupeza makasitomala atsopano.

**Zifukwa wamba zomwe makasitomala a studio ya fitness amachitira churn:**

- Sanathe kumvetsa momwe angagwiritsire ntchito nsanja → sinthani onboarding
- Tsambalo silinawoneke lokongola mokwanira → sinthani ma template
- Sanaone phindu → sinthani ma feature kapena kulankhulana
- Anapeza njira ina yotsika mtengo → limbikitsani phindu la niche yanu
- Bizinesi yawo inatsekedwa → sizingapeweke, koma tsatirani izi padera

### Kulimbikitsa Kukweza {#encouraging-upgrades}

Makasitomala a Starter omwe akuchita bwino ayenera kulimbikitsidwa kukweza:

- Akafika pa malire a pulani (masamba, storage), onetsani zolimbikitsa kukweza
- Tumizani maimelo olunjika omwe akuwonetsa ma feature a pulani ya Growth omwe angawathandize
- Sonyezani zomwe makasitomala a Growth/Pro apanga

### Ma Campaign Obwezera {#win-back-campaigns}

Kasitomala akaletsa:

1. Funsani chifukwa (exit survey kapena imelo)
2. Yankhani nkhawa yake ngati n'kotheka
3. Perekani discount kuti abwerere (masiku 30-60 pambuyo poletsa)

## Zochita za Sabata Lililonse ndi Mwezi Uliwonse {#weekly-and-monthly-routines}

### Sabata Lililonse {#weekly}

- Unikani olembetsa atsopano ndi oletsa
- Yankhani ma ticket onse otseguka a thandizo
- Onani magwiridwe a nsanja ndi uptime
- Unikani malipiro aliwonse olephera

### Mwezi Uliwonse {#monthly}

- Santhulani ma metric ofunika (MRR, churn, makasitomala atsopano, zokweza)
- Gwiritsani ntchito zosintha za WordPress ndi mapulagini (pambuyo pa kuyesa pa staging)
- Unikani ndi kusintha nkhokwe ya chidziwitso kutengera ma pattern a thandizo
- Tumizani newsletter kapena update kwa makasitomala (ma feature atsopano, malangizo, nkhani za makampani a fitness)

### Kotala Iliyonse {#quarterly}

- Unikani mitengo poyerekeza ndi opikisana nawo ndi ndemanga za makasitomala
- Unikani mapangidwe a template -- kodi akufunika kutsitsimutsidwa?
- Yesani mphamvu ya hosting -- kodi muyenera kukulitsa?
- Unikani ndi kukonza onboarding kutengera data ya activation

## Zomwe Tinapanga mu Phunziro Ili {#what-we-built-this-lesson}

- **Njira za tsiku ndi tsiku zowunikira** uptime, kulembetsa, malipiro, ndi chithandizo
- **Kapangidwe ka chithandizo ka magawo** kogwirizana ndi milingo ya plan
- **Ntchito za billing** kuphatikizapo dunning ndi kasamalidwe ka cancellations
- **Njira zosamalira** zosintha, chitetezo, ndi magwiridwe antchito
- **Njira zochepetsera churn** zapadera ku niche ya fitness
- **Njira zogwirira ntchito za mlungu uliwonse, mwezi uliwonse, ndi kotala iliyonse**

---

**Chotsatira:** [Phunziro 13: Kukulitsa](lesson-13-growth) -- kukulitsa FitSite kuchokera ku ntchito yaying'ono kukhala bizinesi yeniyeni.
