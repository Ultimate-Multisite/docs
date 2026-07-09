---
title: 'Lesona 12: Fitantanana ny Orinasa'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Lesona 12: Fitantanana ny Orinasa {#lesson-12-running-the-business}

Ny sehatra iray dia tsy tetikasa vitanao fotsiny -- orinasa tantaninao izy. Ity lesona ity dia mandrakotra ny asa andavanandro amin'ny fitantanana ny FitSite: fanohanana, faktiora, fikojakojana, ary fitazonana ny hafalian'ny mpanjifa.

## Teo Amin'izay Nijanontsika {#where-we-left-off}

Efa mandeha mivantana ny FitSite ary misoratra anarana ny mpanjifa. Ankehitriny dia mila mitantana ny asa amin'ny fomba maharitra ianao.

## Asa Andavanandro {#daily-operations}

### Fanaraha-maso {#monitoring}

Jereo isan'andro ireto (na mametraha fanairana):

- **Uptime**: Azo idirana ve ny sehatra? Mampiasà tolotra fanaraha-maso uptime.
- **Fisoratana anarana vaovao**: Firy ny mpanjifa vaovao nisoratra anarana androany?
- **Fandoavam-bola tsy nahomby**: Misy tsy fahombiazan'ny fandoavam-bola mila jerena ve?
- **Fangatahana fanohanana**: Misy fanontanian'ny mpanjifa mbola tsy voavaly ve?

### Fanohanana Mpanjifa {#customer-support}

Tombony eto ny fifantohanao amin'ny sehatra manokana. Satria studio fitness avokoa ny mpanjifanao rehetra, dia hahita fanontaniana mitovy miverimberina ianao:

**Fanontaniana mahazatra ho azonao:**

- "Ahoana no hanavaozako ny fandaharam-pianarako?"
- "Afaka manova ny lokon'ny tranokalako ve aho?"
- "Ahoana no hanampiako mpanazatra vaovao amin'ny tranokalako?"
- "Tsy mandeha ny domain-ko"
- "Ahoana no hanafoanako/hanatsarako ny plan-ko?"

Amboary ny tahiry fahalalanao (natomboka tamin'ny Lesona 8) manodidina ireo fanontaniana miverimberina ireo. Ny ticket fanohanana tsirairay izay mety ho lahatsoratra ao amin'ny tahiry fahalalana dia famantarana fa tokony hosoratana io lahatsoratra io.

### Ambaratongan'ny Fanohanana {#support-tiers}

Rehefa mitombo ianao, alamino araka ny plan ny fanohanana:

| Plan | Haavon'ny Fanohanana | Fotoana Famaliana |
|------|--------------|---------------|
| Starter | Tahiry fahalalana + mailaka | 48 ora |
| Growth | Fanohanana amin'ny mailaka | 24 ora |
| Pro | Mailaka laharam-pahamehana + antso onboarding | 4 ora |

Ny [addon Ticket Fanohanana](/addons/support-tickets) dia afaka manampy amin'ny fitantanana fangatahana fanohanana ao anatin'ny sehatra.

## Asa Fandoavam-bola {#billing-operations}

### Fandoavam-bola Miverimberina {#recurring-payments}

Ultimate Multisite dia mitantana ho azy ny faktiora miverimberina amin'ny alalan'ny payment gateway-nao. Ny asanao dia ny manara-maso ireto:

- **Fandoavam-bola tsy nahomby**: Araho haingana. Ny ankamaroan'ny tsy fahombiazana dia karatra lany daty, fa tsy fanafoanana fanahy iniana.
- **Dunning**: Mametraha lojika fanandramana indray mandeha ho azy amin'ny alalan'ny payment gateway-nao (Stripe mahavita izany tsara)
- **Fangatahana fanafoanana**: Fantaro ny antony ialan'ny mpanjifa. Feedback ny fanafoanana tsirairay.

### Fitantanana ny Maha-mpikambana {#managing-memberships}

Mandehana any amin'ny **Ultimate Multisite > Maha-mpikambana** mba:

- Hijery ny famandrihana mavitrika rehetra
- Hikarakara fangatahana fanatsarana sy fampidinana
- Hikarakara famerenam-bola rehefa ilaina
- Hitantana ny fahataperan'ny andrana

Jereo ny [Fitantanana ny Maha-mpikambana](/user-guide/administration/managing-memberships) ho an'ny fanovozan-kevitra feno.

### Faktiora {#invoicing}

Ataovy azo antoka fa vokarina araka ny tokony ho izy ny faktiora isaky ny fandoavam-bola. Mety mila faktiora ho an'ny tatitra fandaniana ara-barotra ny mpanjifa. Jereo ny [Fitantanana ny Fandoavam-bola sy Faktiora](/user-guide/administration/managing-payments-and-invoices).

## Fikojakojana ny Sehatra {#platform-maintenance}

### Fanavaozana WordPress sy Fanitarana {#wordpress-and-plugin-updates}

Amin'ny maha-mpitantana tambajotra anao, ianao no tompon'andraikitra amin'ny:

- **Fanavaozana fototra WordPress**: Andramo amin'ny tranokala staging alohan'ny hampiharana azy amin'ny production
- **Fanavaozana fanitarana**: Toy izany koa -- andramo aloha, avy eo ampiharo manerana ny tambajotra
- **Fanavaozana theme**: Hamarino fa mbola miseho tsara ny maodely aorian'ny fanavaozana theme
- **Fanavaozana Ultimate Multisite**: Araho ny changelog ary andramo alohan'ny hanavaozana

:::warning Aza Manavao Mihitsy amin'ny Production Raha Tsy Nosedraina
Misy fiantraikany amin'ny tranokalan'ny mpanjifa rehetra ao amin'ny tambajotrao ny fanavaozana simba. Andramo foana aloha ny fanavaozana amin'ny kopia staging an'ny tambajotrao.
:::

### Fiarovana {#security}

- Ataovy havaozina hatrany ny rindrambaiko rehetra
- Mampiasà tenimiafina matanjaka sy fanamarinana roa sosona ho an'ny kaonty admin
- Araho maso ny hetsika mampiahiahy
- Manàna drafitra ho an'ny tranga ara-piarovana

### Fahombiazana {#performance}

Rehefa mitombo ny tambajotrao, araho maso:

- **Fotoana fampidirana pejy**: Haingana ve ny tranokalan'ny mpanjifa?
- **Fampiasana loharanon'ny server**: CPU, memory, toerana kapila
- **Fahombiazan'ny database**: Mila fanatsarana database rehefa mandeha ny fotoana ny tambajotra lehibe

Diniho ny fampiharana caching (page cache, object cache) sy CDN raha mbola tsy nanao izany ianao. Ny [fampidirana Cloudflare](/user-guide/host-integrations/cloudflare) dia mitantana ampahany betsaka amin'izany.

## Fitantanana ny Tsingerim-piainan'ny Mpanjifa {#customer-lifecycle-management}

### Fampihenana Churn {#reducing-churn}

Churn dia ny isan-jaton'ny mpanjifa manafoana isam-bolana. Ho an'ny orinasa famandrihana, ny fampihenana churn dia manan-danja toy ny fahazoana mpanjifa vaovao.

**Antony mahazatra mahatonga ny mpanjifa studio fitness hiala:**

- Tsy nahita ny fomba fampiasana ny sehatra izy ireo → hatsarao ny onboarding
- Tsy tsara ampy ny endriky ny tranokala → hatsarao ny maodely
- Tsy nahita lanja izy ireo → hatsarao ny endri-javatra na ny fifandraisana
- Nahita safidy mora kokoa izy ireo → hamafiso ny lanjan'ny sehatra manokanao
- Nikatona ny orinasany → tsy azo sorohina, fa araho misaraka izany

### Famporisihana Fanatsarana {#encouraging-upgrades}

Tokony hamporisihina hanatsara ireo mpanjifa ao amin'ny Starter izay mahomby:

- Rehefa tonga amin'ny fetran'ny plan izy ireo (tranokala, fitahirizana), asehoy ny famporisihana hanatsara
- Mandefasa mailaka kendrena manasongadina ny endri-javatra amin'ny Growth plan izay hahasoa azy ireo
- Asehoy izay naorin'ny mpanjifa Growth/Pro

### Fanentanana Famerim-bola {#win-back-campaigns}

Rehefa manafoana ny mpanjifa iray:

1. Anontanio ny antony (fanadihadiana fivoahana na mailaka)
2. Valio ny ahiahiny raha azo atao
3. Manolora fihenam-bidy hiverenana (30-60 andro aorian'ny fanafoanana)

## Fanao Isan-kerinandro sy Isam-bolana {#weekly-and-monthly-routines}

### Isan-kerinandro {#weekly}

- Avereno jerena ny fisoratana anarana vaovao sy ny fanafoanana
- Valio ny ticket fanohanana misokatra rehetra
- Zahao ny fahombiazan'ny sehatra sy ny uptime
- Avereno jerena izay fandoavam-bola tsy nahomby

### Isam-bolana {#monthly}

- Fakafakao ny metrika fototra (MRR, churn, mpanjifa vaovao, fanatsarana)
- Ampiharo ny fanavaozana WordPress sy fanitarana (aorian'ny fitsapana staging)
- Avereno jerena sy havaozy ny tahiry fahalalana mifototra amin'ny lamina fanohanana
- Mandefasa newsletter na fanavaozana ho an'ny mpanjifa (endri-javatra vaovao, torohevitra, vaovao momba ny indostrian'ny fitness)

### Isaky ny Telovolana {#quarterly}

- Avereno jerena ny vidiny raha oharina amin'ny mpifaninana sy ny feedback avy amin'ny mpanjifa
- Tombano ny famolavolana maodely -- mila havaozina ve izy ireo?
- Tombano ny fahafahan'ny hosting -- mila manitatra ve ianao?
- Avereno jerena sy hatsarao ny onboarding mifototra amin'ny angona activation

## Izay Naorintsika Tamin'ity Lesona Ity {#what-we-built-this-lesson}

- **Fomba fanaraha-maso isan’andro** ho an’ny uptime, fisoratana anarana, fandoavam-bola, ary fanohanana
- **Rafitra fanohanana misy ambaratonga** mifanaraka amin’ny haavon’ny plan
- **Asa fitantanana faktiora** ao anatin’izany ny dunning sy ny fikirakirana fanafoanana
- **Fomba fikojakojana** ho an’ny fanavaozana, fiarovana, ary fahombiazana
- **Paikady hampihenana churn** manokana ho an’ny sehatra fitness
- **Fomba fiasa isan-kerinandro, isam-bolana, ary isaky ny telo volana**

---

**Manaraka:** [Lesona 13: Fampitomboana](lesson-13-growth) -- mampitombo ny FitSite avy amin’ny asa madinika ho lasa orinasa tena izy.
