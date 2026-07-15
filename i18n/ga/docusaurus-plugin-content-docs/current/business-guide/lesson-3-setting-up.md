---
title: 'Ceacht 3: Do Líonra a Shocrú'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Ceacht 3: Do Líonra a Chur ar Bun

Tá sé in am tógáil. Sa cheacht seo, suiteálfaidh tú Ultimate Multisite agus cumróidh tú bunús líonra FitSite. Déantar gach cinneadh anseo agus nideoige na haclaíochta san áireamh.

## An Áit ar Fhágamar É {#where-we-left-off}

Roghnaíomar stiúideonna aclaíochta mar ár nideoige agus bhailíochtaíomar an deis. Anois déanaimid ardán oibre den smaoineamh sin.

## Do Óstáil a Roghnú {#choosing-your-hosting}

Tá do rogha óstála níos tábhachtaí d’ardán nideoige ná do shuíomh gréasáin aonair. Ní suíomh amháin atá á óstáil agat -- tá líonra á óstáil agat a fhásfaidh go dtí dosaenacha nó na céadta suíomhanna.

### Cad ba Chóir a Lorg {#what-to-look-for}

- **Tacaíocht WordPress Multisite**: Ní láimhseálann gach óstach multisite go maith
- **Wildcard SSL**: Riachtanach do líonraí bunaithe ar fho-fhearainn
- **Acmhainní inscálaithe**: Teastaíonn spás uait chun fás gan imirce
- **Comhtháthú Ultimate Multisite**: Sábhálann mapáil fearainn agus SSL uathoibrithe iarracht oibriúcháin shuntasach

### Cur Chuige Molta {#recommended-approach}

Roghnaigh óstach ón liosta [Soláthraithe Comhoiriúnacha](/user-guide/host-integrations/closte). Tástáladh iad seo le Ultimate Multisite agus soláthraíonn siad na comhtháthuithe atá uait le haghaidh mapáil fearainn agus uathoibriú SSL.

Do FitSite, úsáidfimid cumraíocht fho-fhearainn. Ciallaíonn sé seo go mbeidh suíomhanna custaiméirí le feiceáil ar dtús mar `studioname.fitsite.com` sula ndéanann siad a bhfearann féin a mhapáil go roghnach.

## WordPress Multisite a Shuiteáil {#installing-wordpress-multisite}

Mura bhfuil suiteáil WordPress Multisite agat cheana féin:

1. Suiteáil WordPress ar do sholáthraí óstála
2. Lean an treoir [Conas WordPress Multisite a Shuiteáil](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Roghnaigh cumraíocht **fo-fhearainn** nuair a iarrtar ort

:::tip Cén Fáth Fo-fhearainn?
Tugann fo-fhearainn seoladh ar leith dá chuid féin do gach suíomh custaiméara (`studio.fitsite.com`) seachas cosán (`fitsite.com/studio`). Tá sé seo níos gairmiúla do do chustaiméirí agus seachnaíonn sé coinbhleachtaí permalink. Féach [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) le haghaidh comparáide mionsonraithe.
:::

## Ultimate Multisite a Shuiteáil {#installing-ultimate-multisite}

Lean an treoir [Ultimate Multisite a Shuiteáil](/user-guide/getting-started/installing-ultimate-multisite) chun:

1. An plugin a uaslódáil agus a ghníomhachtú ar fud an líonra
2. An [Treoraí Socraithe](/user-guide/getting-started/multisite-setup-wizard) a rith

Le linn an treoraí socraithe, coinnigh nideoige FitSite san áireamh:

- **Airgeadra**: Socraigh é don airgeadra a úsáideann do chustaiméirí stiúideo aclaíochta
- **Ainm cuideachta**: "FitSite" (nó ainm do bhranda roghnaithe)
- **Lógó cuideachta**: Uaslódáil lógó do bhranda -- beidh sé seo le feiceáil ar shonraisc agus i ríomhphoist

## Cumrú don Nideoige Aclaíochta {#configuring-for-the-fitness-niche}

Agus Ultimate Multisite suiteáilte, déan na roghanna cumraíochta nideoige-shonracha seo:

### Socruithe Ginearálta {#general-settings}

Téigh chuig **Ultimate Multisite > Settings** agus cumraigh:

- **Ainm suímh**: FitSite
- **Ról réamhshocraithe**: Riarthóir -- teastaíonn smacht iomlán ó úinéirí stiúideonna aclaíochta ar ábhar a suímh
- **Clárú**: Cumasaigh clárú úsáideoirí ionas gur féidir le húinéirí stiúideonna clárú iad féin

### Cumraíocht Ríomhphoist {#email-configuration}

Ba chóir do ríomhphoist chórais teanga do nideoige a labhairt. Téigh chuig **Ultimate Multisite > Settings > Emails** agus saincheap:

- Cuir teachtaireachtaí atá sonrach don aclaíocht in ionad teanga chineálach "do shuíomh nua"
- Sampla ábhair fáilte: "Tá suíomh gréasáin do stiúideo aclaíochta réidh"
- Sampla corp fáilte: Déan tagairt dá stiúideo, ranganna, agus tosú lena suíomh aclaíochta

Déanfaidh muid iad seo a bheachtú tuilleadh i gCeacht 8 (Ionduchtú Custaiméirí), ach má shocraítear an ton anois, cinntítear go mothaíonn fiú clárúcháin tástála luatha nideoige-shonrach.

### Cumraíocht Fearainn {#domain-configuration}

Má tá soláthraí óstála comhoiriúnach á úsáid agat, cumraigh mapáil fearainn anois:

1. Téigh chuig **Ultimate Multisite > Settings > Domain Mapping**
2. Lean an treoir chomhtháthaithe do d’óstach sonrach
3. Tástáil go bhfaigheann fo-shuímh nua SSL go huathoibríoch

Cinntíonn sé seo, nuair a thosaímid ag cruthú teimpléad agus suíomhanna tástála sa chéad cheacht eile, go n-oibríonn gach rud ó cheann ceann.

## Líonra FitSite Go dtí Seo {#the-fitsite-network-so-far}

Ag deireadh an cheachta seo, seo a bhfuil agat:

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (installed and configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Niche-specific email templates (initial)
└── Ready for site templates (next lesson)
```

## Cad a Thógamar sa Cheacht Seo {#what-we-built-this-lesson}

- Suiteáil **WordPress Multisite atá ag obair** i mód fo-fhearainn
- **Ultimate Multisite suiteáilte** agus cumraithe le brandáil FitSite
- **Óstáil agus SSL** curtha ar bun do líonra atá ag fás
- **Mapáil fearainn** cumraithe do do sholáthraí óstála
- **Ton ríomhphoist nideoige-shonrach** bunaithe ón gcéad lá

---

**Ar Aghaidh:** [Ceacht 4: Teimpléid Nideoige a Thógáil](lesson-4-templates) -- cruthóimid teimpléid suímh a bheidh úinéirí stiúideonna aclaíochta ag iarraidh a úsáid i ndáiríre.
