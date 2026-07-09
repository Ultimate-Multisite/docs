---
title: |+
  Lehena-leku: Zerbitzarioa konpondu

sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Lehen 3: Network-a Nagusia {#lesson-3-setting-up-your-network}

Ordu dira. Hau lehenaren ondorioz Ultimate Multisite instalatu eta FitSite network-en eskoldearen eskoldeak konfiguratuko duzun. Horrek guztia fitness niche-a hartuz egin da.

## Nola Aurrez Zuztuko Dugu {#where-we-left-off}

Fitness studioak gisa niche-a ustezi eta hori erabilera binarte egin dugu. Arriba, hori ideiak funtzionatzen duen plataforma bat gehiago.

## Hostinga Ustezueki {#choosing-your-hosting}

Nihil platifikatuaren bitartean hostinga lehen nahi da, bat webgune bat bilatzen ez duzu -- network bat hosting egiten duzu eta hori dozenak edo cento webgune etorri du.

### Zer Aurrez Zuztuko Dugu {#what-to-look-for}

- **WordPress Multisite suporta**: Host guztiek multisite batez ondo tratatzen ez dute
- **Wildcard SSL**: Subdoma-baziko network-ekarbiak
- **Recursos eskala-dune**: Migazio edo bilatu gabe ustez aurrera egin behar duzu
- **Ultimate Multisite integrazioa**: Domenia automatikoki mapatzea eta SSL-ekoa importante operazio eskoldeak aldatzen du

### Aurrez Zuztutako Aproximazioa {#recommended-approach}

[Compatible Providers](/user-guide/host-integrations/closte) listatik host bat aukeratu. Horrek Ultimate Multisitearekin probatu daudenean eta domen mapatzea eta SSL automatizazioa bitartean behar dituen integrazioak ematen du.

FitSite-ko kasuan, subdoma konfiguratura erabiliz. Horrek irudia, kliantzen webguneak lehenik `studioname.fitsite.com` gisa erakusten dira, aurrera domain bat mapatzea opzioa honekin egiten da.

## WordPress Multisite Instalatu {#installing-wordpress-multisite}

WordPress Multisite instalazioa ez duzu:

1. Install WordPress on your hosting provider
2. Follow the [How to Install WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite) guide
3. Choose **subdomain** configuration when prompted

:::tip Zerbitz Subdomains?
Subdomainak ematen duela bideko situaile zehatzko adres bat (studio.fitsite.com) eta perruta (fitsite.com/studio). Hau da profesionalagoa da irudiariatzera eta permalink-ek ondo ez duten. Erki [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) arau erantzun bat zehatzko lekuak.
:::

## Ultimate Multisite Instalazioa {#installing-ultimate-multisite}

[Installing Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) erantzuna jarraitu duzu:

1. Plugin network-wide uploadatu eta aktibatu duzu
2. [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard) erantzuna jarraitu duzu

Setup wizardaren ondorioz, FitSite niche-ak in mente duzu:

- **Currency**: Fitness studioek erabiltzen duen valuta da ematen duzu
- **Company name**: "FitSite" (edo zure branda ematen ditu beharko duzu)
- **Company logo**: Zure branda logoa uzailedu -- hau inbokatu eta emailetan erakusten da

## Fitness Nichearen Kontsegitura {#configuring-for-the-fitness-niche}

Ultimate Multisite instalatuta dagoenean, hauek niche-eko kontsegiturak egin behar duzu:

### General Settings (Kontsegitura Nagusia) {#general-settings}

**Ultimate Multisite > Settings** funtziokoan jarraitu eta kontsegitatu duzu:

- **Situa-nazia**: FitSite
- **Default rol**: Administrator -- fitness studio owners necesitan control total de su contenido del sitio
- **Registrazioa**: Aktibino erabiltzailearen registrazioa, gaur egun studio owner-ek berehala taldeatu dezaten

### Email Konfigurazioa {#email-configuration}

Datuen sistema emailak iruki behar dute oso jakin bat da. Irudi **Ultimate Multisite > Settings > Emails** funtziara eta espezializatu:

- "Itzuli situa berria" bezala generiko testuak fitness-eko mensajioekin aldatu
- Egunaren iruki subjecta oinarri: "Fitstudio webstea dago"
- Egunaren iruki testua oinarri: Studio-ak, klaseiak eta fit situa-re gaur egin dezakeko referentzia emitu

Horren gehiago espezializatu da Lesson 8 (Kunde ondo egindakoa) funtziara, baina orain tone-a ezarritzea duela, lehen testarekin taldeatutako erabiltzaileak ere oso jakin bat dituzte.

### Domain Konfigurazioa {#domain-configuration}

Eskaintzeko kompatibel hosting provider batean, domain mapingak orain konfigura:

1. Irudi **Ultimate Multisite > Settings > Domain Mapping** funtziara
2. Itzultza spesifik hostiaren integrazio gida-a jarraitu
3. Testatu daue iruki websteiak SSL automatico hartzen duela

Honek seguratzen duela, gaur egunean template eta test situak ezarritzean gure lehen lesson-ek, guztia ondo funtzionatzen duela.

## FitSite Ainetaren Aurrerateak {#the-fitsite-network-so-far}

Hauren lesson-aren amaieran, daude zehazten:

FitSite Network
├── WordPress Multisite (subdomain moduko)
├── Ultimate Multisite (instaluatuta eta konfiguratuta dagoen)
├── Hosting wildcard SSL-arekin
├── Domain mapoak konfiguratuta dagoena
├── Niche-spazio email templateak (gaitasunaren lehen fasea)
└── Site template-ekon daiteke (iraki eta 4. lekursa)

## Zer egin dugu hori lekursan {#what-we-built-this-lesson}

- **WordPress Multisite** instalazio bat funtzionatzen duen subdomain moduko
- **Ultimate Multisite** instalatu eta konfiguratuta dagoen, FitSite brandarekin
- **Hosting eta SSL** aukeratutako network-ekoa irakurri eta handitu duen bitartean
- **Domain mapoak** konfiguratuta dagoena hostuingilearen bitartean
- **Niche-spazio email tonea** lehen aldiz ezarrituta

---

**Iraki:** [Lekursa 4: Niche Templateak gaurkatu](lesson-4-templates) -- fitness studio pertsonalak erabiltzea onartuko site templateak ez daiteke.
