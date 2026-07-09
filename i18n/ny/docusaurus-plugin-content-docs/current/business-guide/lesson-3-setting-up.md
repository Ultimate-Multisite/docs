---
title: 'Phunziro 3: Kukonza Netiweki Yanu'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Phunziro 3: Kukhazikitsa Netiweki Yanu

Nthawi yomanga yafika. Mu phunziro ili mudzayika Ultimate Multisite ndi kukonza maziko a netiweki ya FitSite. Chisankho chilichonse pano chimapangidwa poganizira msika wa masewera olimbitsa thupi.

## Pomwe Tinasiyira

Tinasankha ma studio a masewera olimbitsa thupi monga msika wathu wapadera ndipo tinatsimikizira mwayiwo. Tsopano tikusandutsa lingaliro limenelo kukhala nsanja yogwira ntchito.

## Kusankha Hosting Yanu

Kusankha hosting ndikofunika kwambiri pa nsanja ya msika wapadera kuposa pa tsamba limodzi lokha. Simukusungira tsamba limodzi -- mukusungira netiweki yomwe idzakula kufika pa masamba ambiri kapena mazana ambiri.

### Zinthu Zoyang'ana

- **Thandizo la WordPress Multisite**: Si ma host onse omwe amayendetsa multisite bwino
- **Wildcard SSL**: Yofunika kwambiri pa ma netiweki ogwiritsa ntchito ma subdomain
- **Zinthu zomwe zingakulire**: Mukufunika malo okulira popanda kusamuka
- **Kuphatikizana kwa Ultimate Multisite**: Domain mapping yodzichitira yokha ndi SSL zimachepetsa kwambiri ntchito yoyendetsera

### Njira Yolangizidwa

Sankhani host kuchokera pa mndandanda wa [Othandizira Ogwirizana](/user-guide/host-integrations/closte). Awa adayesedwa ndi Ultimate Multisite ndipo amapereka ma integration omwe mukufunika pa domain mapping ndi SSL automation.

Pa FitSite, tigwiritsa ntchito kasinthidwe ka subdomain. Izi zikutanthauza kuti masamba a makasitomala adzayamba kuwoneka ngati `studioname.fitsite.com` asanalumikize domain yawo ngati akufuna.

## Kuyika WordPress Multisite

Ngati mulibe kale kuyika kwa WordPress Multisite:

1. Ikani WordPress pa hosting provider wanu
2. Tsatirani kalozera wa [Momwe Mungayikire WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Sankhani kasinthidwe ka **subdomain** mukafunsidwa

:::tip Chifukwa Chiyani Ma Subdomain?
Ma subdomain amapatsa tsamba lililonse la kasitomala adiresi yake yosiyana (`studio.fitsite.com`) m'malo mwa path (`fitsite.com/studio`). Izi zimawoneka zaukadaulo kwambiri kwa makasitomala anu ndipo zimapewa mikangano ya permalink. Onani [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) kuti mupeze kufananitsa mwatsatanetsatane.
:::

## Kuyika Ultimate Multisite

Tsatirani kalozera wa [Kuyika Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) kuti:

1. Mukweze ndi kuyambitsa plugin pa netiweki yonse
2. Muyendetse [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)

Pa nthawi ya setup wizard, kumbukirani msika wapadera wa FitSite:

- **Ndalama**: Ikani ndalama zomwe makasitomala anu a ma studio a masewera olimbitsa thupi amagwiritsa ntchito
- **Dzina la kampani**: "FitSite" (kapena dzina la brand lomwe mwasankha)
- **Logo ya kampani**: Kwezani logo ya brand yanu -- izi zimawoneka pa ma invoice ndi ma email

## Kukonza Mogwirizana ndi Msika wa Masewera Olimbitsa Thupi

Ultimate Multisite ikayikidwa, pangani zisankho za kasinthidwe zogwirizana ndi msika uwu:

### Zokonda Zonse

Pitani ku **Ultimate Multisite > Settings** ndipo konzekerani:

- **Dzina la tsamba**: FitSite
- **Udindo wokhazikika**: Administrator -- eni ake a ma studio a masewera olimbitsa thupi amafunika kuwongolera zonse za zomwe zili patsamba lawo
- **Kulembetsa**: Yambitsani kulembetsa kwa ogwiritsa ntchito kuti eni ma studio athe kulembetsa okha

### Kukonza Email

Ma email a system yanu ayenera kulankhula chilankhulo cha msika wanu wapadera. Pitani ku **Ultimate Multisite > Settings > Emails** ndipo sinthani:

- Sinthani mawu wamba a "tsamba lanu latsopano" ndi uthenga wokhudza masewera olimbitsa thupi
- Chitsanzo cha mutu wolandirira: "Tsamba la studio yanu ya masewera olimbitsa thupi lakonzeka"
- Chitsanzo cha thupi la uthenga wolandirira: Nenani za studio yawo, makalasi awo, ndi kuyamba kugwiritsa ntchito tsamba lawo la masewera olimbitsa thupi

Tidzawongolera izi kwambiri mu Phunziro 8 (Kulandira Makasitomala), koma kukhazikitsa kamvekedwe ka mawu tsopano kumatsimikizira kuti ngakhale olembetsa oyambirira oyesa amamva kuti ndi ogwirizana ndi msika wapadera.

### Kukonza Domain

Ngati mukugwiritsa ntchito hosting provider wogwirizana, konzekerani domain mapping tsopano:

1. Pitani ku **Ultimate Multisite > Settings > Domain Mapping**
2. Tsatirani kalozera wa integration wa host wanu wapadera
3. Yesani kuti ma subsite atsopano apeze SSL mwadzidzidzi

Izi zimatsimikizira kuti tikayamba kupanga ma template ndi masamba oyesera mu phunziro lotsatira, zonse zimagwira ntchito kuyambira koyambira mpaka kumapeto.

## Netiweki ya FitSite Mpaka Pano

Kumapeto kwa phunziro ili, izi ndi zomwe muli nazo:

```
Netiweki ya FitSite
├── WordPress Multisite (mode ya subdomain)
├── Ultimate Multisite (yaikidwa ndi kukonzedwa)
├── Hosting yokhala ndi wildcard SSL
├── Domain mapping yakonzedwa
├── Ma template a email ogwirizana ndi msika wapadera (oyambirira)
└── Yokonzeka pa ma template a tsamba (phunziro lotsatira)
```

## Zomwe Tamanga mu Phunziro Ili

- **Kuyika kwa WordPress Multisite kogwira ntchito** mu mode ya subdomain
- **Ultimate Multisite yaikidwa** ndi kukonzedwa ndi branding ya FitSite
- **Hosting ndi SSL** zakonzedwa pa netiweki yomwe ikukula
- **Domain mapping** yakonzedwa kwa hosting provider wanu
- **Kamvekedwe ka email kogwirizana ndi msika wapadera** kakhazikitsidwa kuyambira tsiku loyamba

---

**Chotsatira:** [Phunziro 4: Kumanga Ma Template a Msika Wapadera](lesson-4-templates) -- timapanga ma template a tsamba omwe eni ake a ma studio a masewera olimbitsa thupi adzafunadi kugwiritsa ntchito.
