---
title: 'Lesona 6: Ny Traikefa amin''ny Fisoratana anarana'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Lesona 6: Ny Traikefa Fisoratana Anarana {#lesson-6-the-signup-experience}

Ny fizotry ny fividianana no toerana iovan'ny fahalianana ho vola miditra. Ny dingana fisoratana anarana manahiran-tsaina na ankapobeny loatra dia mampiala mpanjifa. Ny fizotra natokana ho an'ny sehatra manokana, izay miteny amin'ny fitenin'izy ireo ary tsapa ho mora, no mampivadika azy ireo ho mpanjifa.

## Teo amin'izay Nijanonantsika {#where-we-left-off}

FitSite dia efa manana môdely sy drafitra voarindra. Ankehitriny dia manorina ny traikefa fisoratana anarana sy fividianana izay mamadika ny tompon'ny studio fitness ho mpanjifa mandoa vola isika.

## Fahatakarana ny Fizotry ny Fisoratana Anarana {#understanding-the-registration-flow}

Ny taratasy fividianana an'ny Ultimate Multisite dia taratasy misy dingana maromaro azo amboarina tanteraka. Ho an'ny FitSite, mila fizotra izay:

1. Tsapa ho natao ho an'ny orinasa fitness
2. Manangona izay ilaina ihany
3. Mitondra ny mpanjifa haingana araka izay azo atao ho amin'ny tranonkala miasa

Jereo [Ny Fizotry ny Fisoratana Anarana](/user-guide/configuration/the-registration-flow) ho an'ny tahirin-kevitra teknika feno.

## Famolavolana ny Fividianana FitSite {#designing-the-fitsite-checkout}

Mandehana any amin'ny **Ultimate Multisite > Taratasy Fividianana** ary mamoròna taratasy vaovao.

### Dingana 1: Fifantenana Drafitra {#step-1-plan-selection}

Ny zavatra voalohany tokony ho hitan'ny tompon'ny studio fitness dia ireo drafitra, aseho amin'ny teny azony tsara.

- Manampia saha **Tabilao Vidiny**
- Arindrao izy hanehoana ireo drafitra FitSite telo rehetra
- Ny famaritana drafitra nosoratanao tao amin'ny Lesona 5 dia miseho eto -- ataovy azo antoka fa miresaka amin'ny filàn'ny orinasa fitness izy ireo, fa tsy amin'ny endri-javatra teknika

:::tip Zava-dehibe ny Fitenin'ny Sehatra Manokana
Tsy misy dikany amin'ny tompon'ny gym ny "1 GB storage". Ny "Izay rehetra ilainao ho an'ny tranonkalan'ny studio matihanina" dia milaza ny zava-drehetra. Soraty amin'ny fitenin'ny mpanjifanao ny famaritana drafitra.
:::

### Dingana 2: Fifantenana Môdely {#step-2-template-selection}

Rehefa avy mifidy drafitra ny mpanjifa, dia mifidy ny môdely fanombohany.

- Manampia saha **Fifantenana Môdely**
- Voasivana araka ny drafitra nofidiny ireo môdely azo ampiasaina (narindra tao amin'ny Lesona 5)
- Tokony hanana sary fijery mialoha mampiseho famolavolana mifanaraka amin'ny fitness ny môdely tsirairay

### Dingana 3: Famoronana Account {#step-3-account-creation}

Ataovy faran'izay tsotra. Angony ihany:

- Adiresy mailaka
- Tenimiafina
- Anaran'ny studio/orinasa (io no lasa anaran'ny tranonkalany)

Aza manontany vaovao tsy ilainao amin'ny fisoratana anarana. Ny saha fanampiny tsirairay dia mampihena ny fiovam-po ho mpanjifa.

### Dingana 4: Fananganana Tranonkala {#step-4-site-setup}

- **Lohatenin'ny tranonkala**: Fenoy mialoha avy amin'ny anaran'ny studio nampidirina tao amin'ny Dingana 3
- **URL-n'ny tranonkala**: Avelao hiforona ho azy avy amin'ny anaran'ny studio (oh., `ironworks.fitsite.com`)

### Dingana 5: Fandoavana {#step-5-payment}

- Manampia ny saha **Fandoavana**
- Arindrao ny vavahadin-karenanao ([Stripe](/user-guide/payment-gateways/stripe) no atolotra ho an'ny faktiora famandrihana)
- Raha namorona order bumps ianao tao amin'ny Lesona 5, manampia saha **Order Bump** alohan'ny dingana fandoavana

### Dingana 6: Fanamafisana {#step-6-confirmation}

- Amboary amin'ny fiteny mifanaraka amin'ny fitness ny hafatra fanamafisana
- Ohatra: "Eo amboarina ny tranonkalan'ny studio fitness-nao. Hafindra any amin'ny tranonkalanao vaovao ianao afaka segondra vitsy."

## Fanampiana Safidy Fifantenana Fe-potoana {#adding-a-period-selection-toggle}

Raha nametraka fiovaovan'ny vidiny tao amin'ny drafitrao ianao (isam-bolana vs. isan-taona), manampia saha **Fifantenana Fe-potoana** amin'ny taratasy fividianana mba hahafahan'ny mpanjifa mifamadika eo amin'ny fe-potoana faktiora. Jereo [Taratasy Fividianana](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) ho an'ny torolalana.

## Fanamboarana ny Fandoavana {#configuring-payment}

Raha mbola tsy nametraka vavahadin-karena ianao:

1. Mandehana any amin'ny **Ultimate Multisite > Settings > Payment Gateways**
2. Araho ny [torolalana fananganana Stripe](/user-guide/payment-gateways/stripe) na ny vavahady tianao
3. Andramo ny fizotry ny fividianana feno miaraka amin'ny fandoavana fitsapana

Jereo [Fandraisana Karama](/user-guide/payment-gateways/getting-paid) ho an'ny antsipiriany momba ny fikorianan'ny fandoavana mankany amin'ny kaontinao.

## Fitsapana ny Fizotra {#testing-the-flow}

Alohan'ny hirosoana, fenoy fisoratana anarana fitsapana iray manontolo:

1. Sokafy amin'ny varavarankely navigateur incognito/private ny taratasy fividianana
2. Misafidiana drafitra
3. Misafidiana môdely
4. Mamoròna account
5. Fenoy ny fandoavana (ampiasao ny fomba fitsapana)
6. Hamarino fa noforonina miaraka amin'ny môdely marina ny tranonkala

Hamarino fa:

- [ ] Mazava sy mifanaraka amin'ny sehatra manokana ny famaritana drafitra
- [ ] Mampiseho famolavolana mifanaraka amin'ny fitness ny fijery mialohan'ny môdely
- [ ] Miforona tsara avy amin'ny anaran'ny studio ny URL-n'ny tranonkala
- [ ] Vita soa aman-tsara ny fikarakarana fandoavana
- [ ] Tonga amin'ny tranonkala miasa miaraka amin'ny môdely voafidy ny mpanjifa
- [ ] Mampiasa fiteny mifanaraka amin'ny fitness ny mailaka fanamafisana

## Ny Tambajotra FitSite Hatreto {#the-fitsite-network-so-far}

```
Tambajotra FitSite
├── WordPress Multisite (fomba subdomain)
├── Ultimate Multisite (voarindra)
├── Fampiantranoana miaraka amin'ny wildcard SSL + domain mapping
├── Môdely Tranonkala (Studio Essential, Gym Pro, Fitness Chain)
├── Vokatra (Starter, Growth, Pro + Order Bumps)
├── Fizotry ny Fividianana
│   ├── Fifantenana drafitra miaraka amin'ny famaritana mifanaraka amin'ny sehatra manokana
│   ├── Fifantenana môdely miaraka amin'ny fijery mialoha momba ny fitness
│   ├── Famoronana account faran'izay tsotra
│   ├── Fandoavana amin'ny alalan'ny Stripe
│   └── Fanamafisana mifanaraka amin'ny fitness
└── Vonona ho an'ny fametrahana marika (lesona manaraka)
```

## Izay Natsangantsika Tamin'ity Lesona Ity {#what-we-built-this-lesson}

- **Taratasy fividianana misy dingana maromaro** namboarina ho an'ny tompon'ny studio fitness
- **Fiteny mifanaraka amin'ny sehatra manokana** manerana ny fizotry ny fisoratana anarana
- **Sakana faran'izay kely** -- saha ilaina ihany, lalana haingana mankany amin'ny tranonkala miasa
- **Fampidirana fandoavana** miaraka amin'ny fanamarinana fitsapana
- **Fizotra voasedra hatramin'ny voalohany ka hatramin'ny farany** manomboka amin'ny fifantenana drafitra ka hatramin'ny tranonkala miasa

---

**Manaraka:** [Lesona 7: Ataovy Anao Izy](lesson-7-branding) -- hataontsika white-label ny sehatra ary apetraka ho marika ny FitSite.
