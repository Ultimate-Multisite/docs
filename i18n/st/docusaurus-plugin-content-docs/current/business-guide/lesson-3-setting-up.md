---
title: 'Thuto ea 3: Ho Seta Netweke ea Hao'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Thuto 3: Ho Hlophisa Marang-rang a Hao

Ke nako ya ho aha. Thutong ena o tla kenya Ultimate Multisite mme o lokise motheo wa marang-rang a FitSite. Qeto e nngwe le e nngwe mona e etswa ho nahannwe ka lekala la boikoetliso.

## Moo re Ileng ra Emisa Teng {#where-we-left-off}

Re kgethile ditudio tsa boikoetliso e le lekala la rona mme ra netefatsa monyetla. Jwale re fetola mohopolo oo hore e be sethala se sebetsang.

## Ho Kgetha Tshebeletso ya Hao ya Hosting {#choosing-your-hosting}

Kgetho ya hao ya hosting e bohlokwa haholo bakeng sa sethala sa lekala le itseng ho feta bakeng sa sebaka se le seng sa marang-rang. Ha o amohele sebaka se le seng -- o amohela marang-rang a tla hola ho ya ho dibaka tse mashome kapa tse makgolo.

### Seo o Lokelang ho se Sheba {#what-to-look-for}

- **Tshehetso ya WordPress Multisite**: Ha se bafani bohle ba hosting ba sebetsanang hantle le multisite
- **Wildcard SSL**: E bohlokwa bakeng sa marang-rang a thehilweng hodima subdomain
- **Disebediswa tse kgonang ho hola**: O hloka sebaka sa ho hola ntle le ho fallisa
- **Kopanyo ya Ultimate Multisite**: Ho hokahanya domain le SSL ka boiketsetso ho boloka boiteko bo boholo ba tshebetso

### Mokgwa o Kgothaletswang {#recommended-approach}

Kgetha mofani wa hosting lenaneng la [Bafani ba Tshwanelehang](/user-guide/host-integrations/closte). Bana ba lekilwe ka Ultimate Multisite mme ba fana ka dikopanyo tseo o di hlokang bakeng sa ho hokahanya domain le boiketsetso ba SSL.

Bakeng sa FitSite, re tla sebedisa tlhophiso ya subdomain. Sena se bolela hore dibaka tsa bareki qalong di tla hlaha jwalo ka `studioname.fitsite.com` pele ba ka ikgethela ho hokahanya domain ya bona.

## Ho Kenya WordPress Multisite {#installing-wordpress-multisite}

Haeba ha o eso be le tshebediso ya WordPress Multisite:

1. Kenya WordPress ho mofani wa hao wa hosting
2. Latela tataiso ya [Kamoo o ka Kenyang WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Kgetha tlhophiso ya **subdomain** ha o botswa

:::tip Hobaneng Subdomains?
Subdomains di fa sebaka se seng le se seng sa moreki aterese ya sona e ikgethileng (`studio.fitsite.com`) ho ena le tsela (`fitsite.com/studio`). Sena se bonahala se le setsebi ho feta bakeng sa bareki ba hao mme se qoba dikgohlano tsa permalink. Sheba [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) bakeng sa papiso e qaqileng.
:::

## Ho Kenya Ultimate Multisite {#installing-ultimate-multisite}

Latela tataiso ya [Ho Kenya Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) ho:

1. Kenya le ho kenya tshebetsong plugin hohle marang-rang
2. Matha [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)

Nakong ya setup wizard, hopola lekala la FitSite:

- **Chelete**: E behe ho chelete eo bareki ba hao ba ditudio tsa boikoetliso ba e sebedisang
- **Lebitso la khamphani**: "FitSite" (kapa lebitso la brand leo o le kgethileng)
- **Letshwao la khamphani**: Kenya letshwao la brand ya hao -- sena se hlaha ho di-invoice le di-imeile

## Ho Lokisetsa Lekala la Boikoetliso {#configuring-for-the-fitness-niche}

Ha Ultimate Multisite e se e kentsoe, etsa dikgetho tsena tsa tlhophiso tse ikgethileng bakeng sa lekala lena:

### Dipeakanyo tse Akaretsang {#general-settings}

Eya ho **Ultimate Multisite > Settings** mme o lokise:

- **Lebitso la sebaka**: FitSite
- **Karolo ya kamehla**: Administrator -- beng ba ditudio tsa boikoetliso ba hloka taolo e felletseng ya dikahare tsa sebaka sa bona
- **Ngodiso**: Dumella ngodiso ya basebedisi hore beng ba ditudio ba kgone ho ingodisa ka bobona

### Tlhophiso ya Imeile {#email-configuration}

Di-imeile tsa sistimi ya hao di lokela ho bua puo ya lekala la hao. Eya ho **Ultimate Multisite > Settings > Emails** mme o iketsetse:

- Nkela puo e akaretsang ya "sebaka sa hao se setjha" sebaka ka molaetsa o ikgethileng wa boikoetliso
- Mohlala wa sehlooho sa kamohelo: "Sebaka sa marang-rang sa studio sa hao sa boikoetliso se lokile"
- Mohlala wa mmele wa kamohelo: Bua ka studio sa bona, ditlelase, le ho qala ka sebaka sa bona sa boikoetliso

Re tla ntlafatsa tsena haholoanyane Thutong 8 (Ho Amohela Bareki), empa ho beha modumo hona jwale ho netefatsa hore esita le dingodiso tsa teko tsa pele di ikutlwa di ikgethile bakeng sa lekala lena.

### Tlhophiso ya Domain {#domain-configuration}

Haeba o sebedisa mofani wa hosting ya tshwanelehang, lokisa ho hokahanya domain hona jwale:

1. Eya ho **Ultimate Multisite > Settings > Domain Mapping**
2. Latela tataiso ya kopanyo bakeng sa mofani wa hao ya itseng wa hosting
3. Leka hore dibaka tse ntjha tse ka tlase di fumana SSL ka boiketsetso

Sena se netefatsa hore ha re qala ho bopa ditemplate le dibaka tsa teko thutong e latelang, tsohle di sebetsa ho tloha qalong ho isa qetellong.

## Marang-rang a FitSite ho Fihlela Jwale {#the-fitsite-network-so-far}

Qetellong ya thuto ena, sena ke seo o nang le sona:

```
Marang-rang a FitSite
├── WordPress Multisite (mokgwa wa subdomain)
├── Ultimate Multisite (e kentsoe mme e lokisitswe)
├── Hosting e nang le wildcard SSL
├── Ho hokahanya domain ho lokisitswe
├── Ditemplate tsa imeile tse ikgethileng bakeng sa lekala (tsa pele)
└── E loketse ditemplate tsa sebaka (thuto e latelang)
```

## Seo re se Ahileng Thutong Ena {#what-we-built-this-lesson}

- Ho kenya **WordPress Multisite e sebetsang** ka mokgwa wa subdomain
- **Ultimate Multisite e kentsoe** mme ya lokiswa ka branding ya FitSite
- **Hosting le SSL** di hlophisitswe bakeng sa marang-rang a holang
- **Ho hokahanya domain** ho lokisitswe bakeng sa mofani wa hao wa hosting
- **Modumo wa imeile o ikgethileng bakeng sa lekala** o thehilwe ho tloha letsatsing la pele

---

**E latelang:** [Thuto 4: Ho Aha Ditemplate tsa Lekala](lesson-4-templates) -- re bopa ditemplate tsa sebaka tseo beng ba ditudio tsa boikoetliso ba tla batla ho di sebedisa ka nnete.
