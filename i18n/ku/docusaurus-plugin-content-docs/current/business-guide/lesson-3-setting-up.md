---
title: 'Ders 3: Sazkirina tora xwe'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Ders 3: Sazkirina Tora Xwe

Dem hatiye avakirinê. Di vê dersê de tu yê Ultimate Multisite saz bikî û bingeha tora FitSite veavakî. Her biryar li vir bi nîşa fitnessê di hiş de tê dayîn.

## Em Li Ku Derê Mabûn {#where-we-left-off}

Me stûdyoyên fitnessê wek nîşa xwe hilbijart û derfet piştrast kir. Niha em wê ramanê vediguherînin platformek karbar.

## Hilbijartina Mêvandariya Xwe {#choosing-your-hosting}

Hilbijartina mêvandariyê ji bo platformek nîşeyî ji malperek yekane girîngtir e. Tu tenê malperekê mêvan nakî -- tu toreke mêvan dikî ku dê bigihîje dehan an sedên malperan.

### Li Çi Bigerî {#what-to-look-for}

- **Piştgiriya WordPress Multisite**: Hemû mêvan Multisite baş bi rê ve nabin
- **Wildcard SSL**: Ji bo torên li ser bingehê subdomain girîng e
- **Çavkaniyên mezinbar**: Pêdivî ye cihê mezinbûnê hebe bêyî koçkirinê
- **Yekbûna Ultimate Multisite**: Domain mapping û SSL ya xweber hewldana xebatê pir kêm dike

### Rêbaza Pêşniyarkirî {#recommended-approach}

Mêvanekê ji lîsteya [Dabînkerên Guncaw](/user-guide/host-integrations/closte) hilbijêre. Ev bi Ultimate Multisite hatine ceribandin û yekbûnên ku ji bo domain mapping û xweberkirina SSL pêwîst in dabîn dikin.

Ji bo FitSite, em ê sazkirineke subdomain bikar bînin. Ev tê vê wateyê ku malperên xerîdar di destpêkê de wek `studioname.fitsite.com` xuya dibin, berî ku bi bijardeyî domain-a xwe ve girêbidin.

## Sazkirina WordPress Multisite {#installing-wordpress-multisite}

Ger te berê sazkirineke WordPress Multisite tune be:

1. WordPress li ser dabînkerê mêvandariya xwe saz bike
2. Li gor rêbera [Çawa WordPress Multisite Saz Bikî](/user-guide/getting-started/how-to-install-wordpress-multisite) biç
3. Dema hat pirsîn, sazkirina **subdomain** hilbijêre

:::tip Çima Subdomain?
Subdomain ji her malpera xerîdar re navnîşanek cuda (`studio.fitsite.com`) dide, ne rêyek (`fitsite.com/studio`). Ev ji bo xerîdarên te profesyoneltir e û lihevketinên permalinkê digire. Ji bo berhevkirineke hûrgilî li [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) binêre.
:::

## Sazkirina Ultimate Multisite {#installing-ultimate-multisite}

Li gor rêbera [Sazkirina Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) biç da ku:

1. Pêvekê li ser tevahiya torê bar bikî û çalak bikî
2. [Sêrbaza Sazkirinê](/user-guide/getting-started/multisite-setup-wizard) bimeşînî

Di dema sêrbaza sazkirinê de, nîşa FitSite di hiş de bigire:

- **Dirav**: Li gor dirava ku xerîdarên stûdyoyên fitnessê bikar tînin saz bike
- **Navê şîrketê**: "FitSite" (an navê marka ku te hilbijartiye)
- **Logoya şîrketê**: Logoya marka xwe bar bike -- ev li ser faktûre û emailan xuya dibe

## Veavakirina ji bo Nîşa Fitnessê {#configuring-for-the-fitness-niche}

Piştî ku Ultimate Multisite hat saz kirin, van hilbijartinên veavakirinê yên taybet bi nîşê bike:

### Mîhengên Giştî {#general-settings}

Biçe **Ultimate Multisite > Settings** û veava bike:

- **Navê malperê**: FitSite
- **Rola standard**: Administrator -- xwediyên stûdyoyên fitnessê pêdivî bi kontrola tevahî ya naveroka malpera xwe hene
- **Tomarbûn**: Tomarbûna bikarhêneran çalak bike da ku xwediyên stûdyo bi xwe qeyd bibin

### Veavakirina Emailê {#email-configuration}

Emailên pergala te divê bi zimanê nîşa te biaxivin. Biçe **Ultimate Multisite > Settings > Emails** û takekes bike:

- Zimanê giştî yê "malpera te ya nû" bi peyamên taybet bi fitnessê biguherîne
- Nimûneya mijara bixêrhatinê: "Malpera stûdyoya fitnessa te amade ye"
- Nimûneya laşê bixêrhatinê: Behsa stûdyo, ders û destpêkirina bi malpera fitnessa wan re bike

Em ê van di Ders 8 (Pêşwaziya Xerîdar) de zêdetir baştir bikin, lê sazkirina tonê niha piştrast dike ku heta qeydên testê yên destpêkê jî taybet bi nîşê hîs bikin.

### Veavakirina Domainê {#domain-configuration}

Ger dabînkerê mêvandariya guncaw bikar tînî, niha domain mapping veava bike:

1. Biçe **Ultimate Multisite > Settings > Domain Mapping**
2. Li gor rêbera yekbûnê ya mêvanê xwe yê taybet biç
3. Test bike ku subsite-yên nû SSL bi xweberî werdigirin

Ev piştrast dike ku dema em di dersa din de dest bi çêkirina şablonan û malperên testê bikin, her tişt ji serî heta dawî dixebite.

## Tora FitSite Heta Niha {#the-fitsite-network-so-far}

Di dawiya vê dersê de, ev tiştên te hene:

```
Tora FitSite
├── WordPress Multisite (moda subdomain)
├── Ultimate Multisite (sazkirî û veavakirî)
├── Mêvandariyê bi Wildcard SSL
├── Domain mapping veavakirî
├── Şablonên emailê yên taybet bi nîşê (destpêkî)
└── Amade ji bo şablonên malperê (dersa din)
```

## Me Di Vê Dersê De Çi Avakir {#what-we-built-this-lesson}

- Sazkirineke **WordPress Multisite ya karbar** di moda subdomain de
- **Ultimate Multisite sazkirî** û bi marka FitSite veavakirî
- **Mêvandariyê û SSL** ji bo toreke ku mezin dibe saz kirin
- **Domain mapping** ji bo dabînkerê mêvandariya te veavakirî
- **Tona emailê ya taybet bi nîşê** ji roja yekemê ve hate danîn

---

**Dûv re:** [Ders 4: Avakirina Şablonên Nîşeyî](lesson-4-templates) -- em şablonên malperê diafirînin ku xwediyên stûdyoyên fitnessê bi rastî dixwazin bikar bînin.
