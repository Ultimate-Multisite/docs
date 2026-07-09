---
title: 'Lesona 3: Fametrahana ny tambajotranao'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Lesona 3: Fametrahana ny tambajotranao

Fotoana hanorenana izao. Amin’ity lesona ity dia hametraka Ultimate Multisite ianao ary handrindra ny fototry ny tambajotra FitSite. Ny fanapahan-kevitra rehetra eto dia natao ho an’ny sehatra ara-panatanjahan-tena.

## Teo amin’izay nijanonantsika

Nisafidy studio ara-panatanjahan-tena ho sehatra kendrena isika ary nanamarina ny fahafahana. Ankehitriny dia avadintsika ho sehatra miasa izany hevitra izany.

## Fifidianana ny fampiantranoana

Ny safidinao amin’ny fampiantranoana dia manan-danja kokoa ho an’ny sehatra kendrena noho ny ho an’ny tranonkala tokana. Tsy tranonkala iray no ampiantranoinao -- tambajotra hitombo ho am-polony na an-jatony amin’ny tranonkala no ampiantranoinao.

### Zavatra hotadiavina

- **Fanohanana WordPress Multisite**: Tsy ny mpampiantrano rehetra no mahavita mitantana multisite tsara
- **SSL wildcard**: Tena ilaina ho an’ny tambajotra mifototra amin’ny zana-sehatra
- **Loharano azo ampitomboina**: Mila toerana hitomboana ianao nefa tsy mifindra
- **Fampidirana Ultimate Multisite**: Mitsitsy ezaka ara-pitantanana betsaka ny domain mapping sy SSL mandeha ho azy

### Fomba atolotra

Misafidiana mpampiantrano avy amin’ny lisitry ny [Mpamatsy mifanaraka](/user-guide/host-integrations/closte). Efa notsapaina niaraka tamin’ny Ultimate Multisite ireo ary manome ny fampidirana ilainao ho an’ny domain mapping sy ny automatique SSL.

Ho an’ny FitSite, hampiasa fandrindrana zana-sehatra isika. Midika izany fa hiseho voalohany ho `studioname.fitsite.com` ny tranonkalan’ny mpanjifa alohan’ny ahafahany mampifandray ny sehatra azy manokana raha tiany.

## Fametrahana WordPress Multisite

Raha mbola tsy manana fametrahana WordPress Multisite ianao:

1. Apetraho ny WordPress amin’ny mpamatsy fampiantranoanao
2. Araho ny torolàlana [Ahoana ny fametrahana WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Safidio ny fandrindrana **zana-sehatra** rehefa angatahina

:::tip Nahoana no zana-sehatra?
Ny zana-sehatra dia manome adiresy miavaka ho an’ny tranonkalan’ny mpanjifa tsirairay (`studio.fitsite.com`) fa tsy lalana (`fitsite.com/studio`). Matihanina kokoa ho an’ny mpanjifanao izany ary misoroka fifandonan’ny permalink. Jereo ny [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) ho an’ny fampitahana amin’ny antsipiriany.
:::

## Fametrahana Ultimate Multisite

Araho ny torolàlana [Fametrahana Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) mba:

1. Hampiakatra sy hampavitrika ny fanitarana manerana ny tambajotra
2. Hampandeha ny [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)

Mandritra ny setup wizard, tadidio ny sehatra FitSite:

- **Vola**: Apetraho amin’ny vola ampiasain’ny mpanjifa studio ara-panatanjahan-tenanao
- **Anaran’ny orinasa**: "FitSite" (na ny anaran’ny marika nofidinao)
- **Logo-n’ny orinasa**: Ampidiro ny logo-n’ny marikao -- miseho amin’ny faktiora sy mailaka izany

## Fandrindrana ho an’ny sehatra ara-panatanjahan-tena

Rehefa voapetraka ny Ultimate Multisite, ataovy ireto safidy fandrindrana manokana ho an’ny sehatra ireto:

### Fikirana ankapobeny

Mankanesa any amin’ny **Ultimate Multisite > Settings** ary arindrao:

- **Anaran’ny tranonkala**: FitSite
- **Anjara toerana mahazatra**: Administrator -- mila fifehezana feno ny votoatin’ny tranonkalany ny tompon’ny studio ara-panatanjahan-tena
- **Fisoratana anarana**: Alefaso ny fisoratana anaran’ny mpampiasa mba hahafahan’ny tompon’ny studio misoratra anarana samirery

### Fandrindrana mailaka

Tokony hiresaka amin’ny fitenin’ny sehatra kendrenao ny mailakan’ny rafitrao. Mankanesa any amin’ny **Ultimate Multisite > Settings > Emails** ary amboary:

- Soloina hafatra mifanaraka amin’ny fanatanjahan-tena ny fiteny ankapobeny hoe "your new site"
- Ohatra lohahevitra fandraisana: "Vonona ny tranonkalan’ny studio ara-panatanjahan-tenanao"
- Ohatra vatan’ny hafatra fandraisana: Resaho ny studio-ny, ny kilasiny, ary ny fanombohana amin’ny tranonkala ara-panatanjahan-tenany

Hanatsara bebe kokoa ireo isika amin’ny Lesona 8 (Fampidirana mpanjifa), fa ny fametrahana ny tonony dieny izao dia miantoka fa na dia ny fisoratana andrana voalohany aza dia mahatsapa ho mifanaraka amin’ny sehatra kendrena.

### Fandrindrana sehatra

Raha mampiasa mpamatsy fampiantranoana mifanaraka ianao, arindrao izao ny domain mapping:

1. Mankanesa any amin’ny **Ultimate Multisite > Settings > Domain Mapping**
2. Araho ny torolàlana fampidirana ho an’ny mpampiantrano manokana anao
3. Andramo fa mahazo SSL mandeha ho azy ny zana-tranonkala vaovao

Izany dia miantoka fa rehefa manomboka mamorona môdely sy tranonkala fitsapana amin’ny lesona manaraka isika, dia mandeha hatramin’ny farany ny zava-drehetra.

## Ny tambajotra FitSite hatreto

Amin’ny faran’ity lesona ity, izao no anananao:

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (installed and configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Niche-specific email templates (initial)
└── Ready for site templates (next lesson)
```

## Izay naorintsika tamin’ity lesona ity

- Fametrahana **WordPress Multisite miasa** amin’ny maody zana-sehatra
- **Ultimate Multisite voapetraka** sy voarindra miaraka amin’ny marika FitSite
- **Fampiantranoana sy SSL** napetraka ho an’ny tambajotra mitombo
- **Domain mapping** voarindra ho an’ny mpamatsy fampiantranoanao
- **Tonon’ny mailaka manokana ho an’ny sehatra** napetraka hatramin’ny andro voalohany

---

**Manaraka:** [Lesona 4: Fanorenana môdely ho an’ny sehatra kendrena](lesson-4-templates) -- hamorona môdely tranonkala izay tena tian’ny tompon’ny studio ara-panatanjahan-tena hampiasaina isika.
