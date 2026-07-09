---
title: 'Chidzidzo 12: Kutungamira Bhizinesi'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Chidzidzo 12: Kumhanyisa Bhizinesi {#lesson-12-running-the-business}

Chikuva hachisi chirongwa chaunopedza -- ibhizinesi raunomhanyisa. Chidzidzo ichi chinovhara mabasa ezuva nezuva ekutarisira FitSite: rubatsiro, kubhadharisa, kuchengetedza, uye kuchengeta vatengi vachifara.

## Patakasiira {#where-we-left-off}

FitSite yava kushanda uye vatengi vari kunyoresa. Iye zvino unofanira kumhanyisa mashandiro acho nenzira inoenderera.

## Mabasa eZuva Nezuva {#daily-operations}

### Kuongorora {#monitoring}

Tarisa izvi zuva nezuva (kana kuseta zviziviso):

- **Nguva yekushanda**: Chikuva chinowanikwa here? Shandisa sevhisi yekuongorora uptime.
- **Kunyoresa kutsva**: Vatengi vatsva vangani vanyoresa nhasi?
- **Kubhadhara kwakundikana**: Pane kukundikana kwekubhadhara kunoda kutariswa here?
- **Zvikumbiro zverubatsiro**: Pane mibvunzo yevatengi isati yapindurwa here?

### Rubatsiro rweVatengi {#customer-support}

Kutarisisa niche yako kunobatsira pano. Nekuti vatengi vako vese mastudio efitness, uchaona mibvunzo yakafanana ichidzokororwa:

**Mibvunzo yakajairika yauchawana:**

- "Ndinovandudza sei chirongwa chemakirasi angu?"
- "Ndingachinja mavara esaiti yangu here?"
- "Ndinowedzera sei mudzidzisi mutsva kusaiti yangu?"
- "Domain yangu haisi kushanda"
- "Ndinokanzura/kusimudzira sei plan yangu?"

Vaka hwaro hweruzivo rwako (hwakatangwa muChidzidzo 8) uchitenderedza mibvunzo iyi inodzokororwa. Ticket rerubatsiro rega rega raigona kunge riri chinyorwa chehwaro hweruzivo chiratidzo chekuti unyore chinyorwa ichocho.

### Matanho eRubatsiro {#support-tiers}

Sezvaunokura, ronga rubatsiro maererano neplan:

| Plan | Chikamu cheRubatsiro | Nguva yekupindura |
|------|--------------|---------------|
| Starter | Hwaro hweruzivo + email | maawa 48 |
| Growth | Rubatsiro rweemail | maawa 24 |
| Pro | Email yekukosha + kufona kwekutanga | maawa 4 |

[Addon yeSupport Tickets](/addons/support-tickets) inogona kubatsira kutarisira zvikumbiro zverubatsiro mukati mechikuva.

## Mabasa eKubhadharisa {#billing-operations}

### Kubhadhara Kunodzokororwa {#recurring-payments}

Ultimate Multisite inobata kubhadharisa kunodzokororwa otomatiki kuburikidza negedhi rako rekubhadhara. Basa rako nderekutarisa:

- **Kubhadhara kwakundikana**: Tevera nekukurumidza. Kukundikana kwakawanda kunokonzerwa nemakadhi akapera nguva, kwete kukanzura nemaune.
- **Dunning**: Seta logic yekuedza zvakare otomatiki kuburikidza negedhi rako rekubhadhara (Stripe inobata izvi zvakanaka)
- **Zvikumbiro zvekukanzura**: Nzwisisa kuti sei vatengi vachienda. Kukanzura kwega kwega imhinduro.

### Kutarisira Unhengo {#managing-memberships}

Enda ku **Ultimate Multisite > Unhengo** kuti:

- Uone masubscription ese ari kushanda
- Ubate zvikumbiro zvekusimudzira nekudzikisa
- Ugadzirise refunds pazvinenge zvakakodzera
- Utarisire kupera kwemiedzo

Ona [Kutarisira Unhengo](/user-guide/administration/managing-memberships) kuti uwane referensi yakazara.

### Mainvoice {#invoicing}

Ita shuwa kuti mainvoice anogadzirwa nemazvo pakubhadhara kwega kwega. Vatengi vangangoda mainvoice ekuzivisa mari dzebhizinesi. Ona [Kutarisira Kubhadhara neMainvoice](/user-guide/administration/managing-payments-and-invoices).

## Kuchengetedza Chikuva {#platform-maintenance}

### Kuvandudzwa kweWordPress nePlugin {#wordpress-and-plugin-updates}

Semutariri wenetwork, une mutoro we:

- **Kuvandudzwa kweWordPress core**: Edza pasaiti yekuedzera usati waisa kuproduction
- **Kuvandudzwa kweplugin**: Zvimwe chete -- tanga waedza, wozoshandisa panetwork yese
- **Kuvandudzwa kwetheme**: Simbisa kuti matemplate achiri kutaridzika zvakanaka mushure mekuvandudzwa kwetheme
- **Kuvandudzwa kweUltimate Multisite**: Tevera changelog uye edza usati wavandudza

:::warning Usambovandudza muProduction Usina Kuongorora
Kuvandudzwa kwakaputsika kunokanganisa saiti yemutengi wese panetwork yako. Gara uchiedza kuvandudzwa pacopy yekuedzera yenetwork yako kutanga.
:::

### Chengetedzo {#security}

- Chengeta software yese iri yemazuva ano
- Shandisa mapassword akasimba uye two-factor authentication kumaAccount eadmin
- Tarisa zviitiko zvinofungidzirwa
- Iva neplan yezviitiko zvechengetedzo

### Kushanda Zvakanaka {#performance}

Sezvo network yako ichikura, tarisa:

- **Nguva dzekurodha mapeji**: Masaiti evatengi ari kukurumidza here?
- **Kushandiswa kwezviwanikwa zveseva**: CPU, memory, nzvimbo yediski
- **Kushanda kwedatabase**: Manetwork makuru anoda kugadziridzwa kwedatabase nekufamba kwenguva

Funga kushandisa caching (page cache, object cache) uye CDN kana usati watozviita. [Kubatanidzwa kweCloudflare](/user-guide/host-integrations/cloudflare) kunobata zvakawanda zveizvi.

## Kutarisira Rwendo rweMutengi {#customer-lifecycle-management}

### Kuderedza Churn {#reducing-churn}

Churn iperesenti yevatengi vanokanzura mwedzi wega wega. Kune bhizinesi resubscription, kuderedza churn kwakakosha sekutsvaga vatengi vatsva.

**Zvikonzero zvakajairika zvinoita kuti vatengi vemastudio efitness vaite churn:**

- Havana kukwanisa kunzwisisa mashandisiro echikuva → vandudza onboarding
- Saiti haina kutaridzika zvakanaka zvakakwana → vandudza matemplate
- Havana kuona kukosha → vandudza maficha kana kutaurirana
- Vakawana imwe nzira yakachipa → simbisa kukosha kwe niche yako
- Bhizinesi ravo rakavhara → hazvidzivisiki, asi tevera izvi zvakasiyana

### Kukurudzira Kusimudzira {#encouraging-upgrades}

Vatengi vari paStarter vari kubudirira vanofanira kukurudzirwa kusimudzira:

- Kana vasvika pamiganho yeplan (masaiti, storage), ratidza zviziviso zvekusimudzira
- Tumira maemail akanangwa achiratidza maficha eGrowth plan angavabatsira
- Ratidza zvakavakwa nevatengi veGrowth/Pro

### Mishandirapamwe yeKudzosa Vatengi {#win-back-campaigns}

Kana mutengi akanzura:

1. Bvunza kuti sei (exit survey kana email)
2. Gadzirisa chinetso chavo kana zvichibvira
3. Ipa discount kuti vadzoke (mazuva 30-60 mushure mekukanzura)

## Maitiro eVhiki neMwedzi {#weekly-and-monthly-routines}

### Vhiki Nevhiki {#weekly}

- Ongorora kunyoresa kutsva nekukanzura
- Pindura maticket ese erubatsiro akavhurika
- Tarisa kushanda kwechikuva uye uptime
- Ongorora kubhadhara kupi nekupi kwakundikana

### Mwedzi Nemwedzi {#monthly}

- Ongorora metrics dzakakosha (MRR, churn, vatengi vatsva, kusimudzira)
- Isa kuvandudzwa kweWordPress neplugin (mushure mekuedza pastaging)
- Ongorora uye vandudza hwaro hweruzivo zvichienderana nemapatani erubatsiro
- Tumira newsletter kana update kuvatengi (maficha matsva, mazano, nhau dzeindasitiri yefitness)

### Kota Yega Yega {#quarterly}

- Ongorora pricing uchienzanisa nevakwikwidzi uye mhinduro dzevatengi
- Ongorora magadzirirwo ematemplate -- anoda kuzorodzwa here?
- Ongorora huwandu hwehosting -- unofanira kuscale here?
- Ongorora uye vandudza onboarding zvichienderana nedata reactivation

## Zvatakavaka muChidzidzo Ichi {#what-we-built-this-lesson}

- **Maitiro ezuva nezuva ekutarisa** uptime, kunyoresa, kubhadhara, uye rutsigiro
- **Chimiro cherutsigiro chine matanho** chinoenderana nemazinga eplan
- **Mabasa ekubhadharisa** anosanganisira dunning uye kubata kukanzurwa
- **Maitiro ekugadzirisa nekuchengetedza** ezvigadziriso, chengetedzo, uye kushanda zvakanaka
- **Mazano ekuderedza churn** akanangana nefitness niche
- **Maitiro ebasa evhiki nevhiki, emwedzi nemwedzi, uye emakota egore**

---

**Zvinotevera:** [Chidzidzo 13: Kukura](lesson-13-growth) -- kukudza FitSite kubva kubasa diki kuenda kubhizinesi chairo.
