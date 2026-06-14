---
title: Vokatra Domain sy ny vidiny
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Fepetra sy Ny Vara (Domain Products and Pricing)

Ny fepetra sy ny varina dia ny fomba iantohanao ny vidiny, ny TLDs (Top-Level Domains), ny fitahirizana WHOIS privacy, ary ny safidy mpamatsy. Ny vokatra domain tsirairay dia vokatra standard amin'ny Ultimate Multisite izay misy tabilao manokana antsoina hoe **Domain Settings**.

## Famoronana vokatra domain (Creating a domain product)

1. Mandehin'ny **Network Admin › Ultimate Multisite › Products**
2. Tsindrio ny **Add New**
3. Ataovy hoe karazana vokatra dia **Domain**
4. Ampidiro ny fepetra ao amin'ny tabilao **Domain Settings** (jereo eto ambany)
5. Tehirizo

Ny vokatra domain dia miseho miaraka amin'ny marika **Domain** mavo eo amin'ny lisitry ny vokatra ary azo atao ny mitady azy amin'ny alalan'ny tabilao **Domain Products**.

## Tabilao Domain Settings (Domain settings tab)

### Mpamatsy (Provider)

Safidio izay mpandray anjara ao amin'ny fandraisana anjara ho an'ny fanoratana ny vokatra ity. Azo atao ny mametraka azy ho **Default provider** maneran-tany izay voatendry ao amin'ny Domain Seller settings.

### TLDs azo antsoina (Supported TLDs)

Avelao ho lainga raha te hiresaka momba ny vokatra fampiasa ho an'ny TLD rehetra tsy voafidy na voatahiry avy amin'ny vokatra hafa. Ampidiro lisitra misaraka amin'ny tsindrim-peo (comma-separated list) an'ny TLDs (ohatra: `.com, .net, .org`) mba hamoronana **TLD-specific product** izay manokana ireo fanamafisana ireo ihany.

**Ahoana ny fiasan'ny famakafakana vokatra:** Rehefa mitady domain iray mpanjifa, dia safidy ny vokatra mifanaraka indrindra no alefa. Ny vokatra misy `.com` ao amin'ny lisitry ny TLD-ny no laharam-pahamehana miho an'ny vokatra fampiasa ho an'ny rehetra (catch-all product). Raha tsy misy vokatra mifanaraka amin'ny TLD manokana, dia ampiasaina ilay vokatra fampiasa ho an'ny rehetra. Raha tsy misy vokatra mihitsy, dia tsy haseho ny fitadiavana domain.

### Karazana famakafakana vidiny (Markup type)

Ny fomba telo no mifehy ny fomba fanisana ny vidin'ny varina avy amin'ny vidin'ny fivarotana (wholesale cost):

| Mode | Ahoana no fiasany |
|---|---|
| **Percentage** | Manampy isan-jato eo ankamaro amin'ny vidin'ny fivarotana. Raha 20% ny markup dia $10 ho vidiny ny domain, dia $12 no haseho. |
| **Fixed markup** | Manampy vola iray voafetra. Raha $5 ny markup dia $10 ho vidiny ny domain, dia $15 no haseho. |
| **Fixed price** | Mandray anjara amin'ny vidin'ny fivarotana tanteraka. Manome ny vola izay omenao. |

### Vidiny fanombohana (Introductory pricing)

Maha ny fomba ahafahana manolotra vidiny voalohany (first-year price) miadana. Apetraho **Vidiny fanombohana** (ny vidin'ny taona 1) manokana eo anilan'ny **Vidiny famerenana** (vidin'ny taona 2 sy mihoatra). Ny mpanjifa dia mahita ireo vidiny roa ao anatin'ny fotoana fividianana mba hahafantarany izay tokony ho vokatra rehefa hiverenana.

### Fiarovana WHOIS

Manome fanazavana raha azo atao ny fiarovana WHOIS ho an'ireo domain voarakitra amin'ity vokatra ity.

| Famaritana | Fihetsika |
|---|---|
| **Disabled** (Tsy miasa) | Tsy manolotra na manao asa fiarovana WHOIS mihitsy. |
| **Always Included** (Azo atao foana) | Atao ho voarafitra ho azy ny fiarovana WHOIS mandritra ny fametrahana, tsy misy fandoavam-bola. |
| **Customer Choice** (Safidy mpanjifa) | Ho an'ny fotoana fividianana dia hiseho bokotra iray. Apetraho ny **Privacy price** ho vidiny isan-taona, na avelao amin'ny $0 mba hanomezana azy maimaim-po. |

Ho an'ny Namecheap, mampiasa WhoisGuard (maimaim-po foana) ny fiarovana WHOIS. Ho an'ny OpenSRS, dia mampiasa ny serivisy privacy OpenSRS izy (mety misy vidiny amin'ny fivarotana lehibe).

---

## Fandefasana sy Famintinana TLD (TLD import and sync)

Ny vokatra domain dia mampiseho ny vidiny wholesale tena izy izay azo avy amin'ny mpamatsy mifandray. Mba hiatoana izany, tsy maintsy atao ny fametrahana ireo TLD.

- **Sync manokana (Manual sync):** Settings › Domain Seller › Sync TLDs (isaky ny mpamatsy)
- **Sync automatique (Automatic sync):** Mitohy isan'andro amin'ny alalan'ny cron job voatonga ho an'ny mpamatsy rehetra voafidy.

Aorian'ny sync, mandehana any amin'ny fizarana Domain Settings an'ny vokatra domain iray ary ampiasao ny TLD picker mba hijerena ireo TLD azo atao miaraka amin'ny vidiny wholesale ankehitriny.

---

## Famerenana automatique (Auto-renewal)

Ny famerenana domain dia mifandray amin'ny sata an'ilay mpanjifa:

- Rehefa miova ny sata ary mifandray domain iray, dia ho voarafitra ho azy ny famerenana domain.
- Ny fiezahana famerenana dia mampiasa ny payment gateway (lalan-draharaha fandoavam-bola) an'ilay mpanjifa.
- Ireo famerenana tsy nahomby dia hamerenana ho azy amin'ny alalan'ny exponential backoff (famerenana tsikelikely).
- Ho an'ny famerenana mahomby, tsy nahomby ary ny fotoana fandroahana ho avy, dia hisy notification email.

ID template email ho an'ireo zava-nitranga eo amin'ny fiainana domain:

| Soritra | Template ID |
|---|---|
| Domain voaferina | `domain_registered` |
| Domain averina | `domain_renewed` |
| Averina tsy nahomby | `domain_renewal_failed` |
| Domain efa akaiky ho fady | `domain_expiring_soon` |

---

## Admin: Fanaovana soritra domain manokana (Manual domain registration)

Mba hanomezana domain iray an'ny mpanjifa tsy mila mandalo amin'ny checkout izy ireo:

1. Mandehana any **Network Admin › Ultimate Multisite › Register Domain**
2. Safidio ny mpanjifa ary soraty ny anaran'ny domain
3. Ampidiro ny antsipiriany momba ny fandraisana (anarana, adiresy, finday) an'ilay mpandray anjara
4. Tsindrio **Register**

Ho voarakitra ny famp}&a&na domain ary mifandray amin'ny kaontin'ny mpanjifa izany.
