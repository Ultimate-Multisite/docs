---
title: 'Ceacht 8: Ionduchtú Custaiméirí'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Ceacht 8: Ionduchtú Custaiméirí

Níl i gceist le custaiméir a fháil chun clárú ach leath na hoibre. Má logálann siad isteach, má mhothaíonn siad faoi léigear, agus mura dtagann siad ar ais riamh, tá siad caillte agat. Dearann an ceacht seo an t-eispéireas a iompaíonn clárú nua ina chustaiméir gníomhach, rannpháirteach.

## An Áit ar Fágadh Sinn {#where-we-left-off}

Tá FitSite brandáilte go hiomlán le sreabhadh checkout atá ag obair. Anois dírímid ar a dtarlaíonn tar éis d’úinéir stiúideo aclaíochta an clárú a chríochnú agus teacht ar a site nua den chéad uair.

## Cén Fáth a bhfuil Ionduchtú Tábhachtach {#why-onboarding-matters}

Cinneann na chéad 30 nóiméad tar éis clárúcháin an bhfanann custaiméir nó an imíonn sé. Úinéir stiúideo aclaíochta a:

- Logálann isteach agus a fheiceann site a bhfuil cuma shuíomh gréasáin aclaíochta air cheana → fanann sé
- Tá a fhios aige go díreach cad atá le déanamh ina dhiaidh sin → fanann sé
- Mothaíonn sé caillte i Dashboard cineálach WordPress → imíonn sé

Láimhseálann do theimpléid nideoige (Ceacht 4) an chéad phointe. Láimhseálann an ceacht seo an dara ceann.

## Eispéireas an Chéad Logála Isteach {#the-first-login-experience}

### Giuirléid Fáilte Dashboard {#welcome-dashboard-widget}

Cruthaigh giuirléid shaincheaptha Dashboard a chuireann fáilte roimh chustaiméirí nua agus a threoraíonn iad tríd an socrú. Ba chóir go mbeadh sí seo le feiceáil go feiceálach nuair a logálann siad isteach den chéad uair.

**Tús Tapa FitSite:**

1. **Cuir ainm agus lógó do stiúideo leis** -- Nasc chuig socruithe an Saincheapóra nó Aitheantais an Site
2. **Nuashonraigh do sceideal ranganna** -- Nasc díreach chuig eagarthóir an leathanaigh Ranganna
3. **Cuir do thraenálaithe leis** -- Nasc chuig eagarthóir an leathanaigh Traenálaithe
4. **Socraigh do shonraí teagmhála** -- Nasc chuig eagarthóir an leathanaigh Teagmhála
5. **Réamhamharc ar do site** -- Nasc chuig an frontend

Nascann gach céim go díreach leis an leathanach nó leis an socrú ábhartha. Gan tóraíocht trí roghchláir.

### Simpligh an Dashboard {#simplify-the-dashboard}

Ní gá do chustaiméirí nua gach mír roghchláir WordPress a fheiceáil. Smaoinigh ar:

- Míreanna roghchláir nach mbaineann le bainistiú site aclaíochta a chur i bhfolach (m.sh., Tráchtanna mura n-úsáidtear iad)
- An roghchlár a athordú chun na míreanna is mó úsáid a chur ar dtús
- Lipéid shaincheaptha roghchláir a chur leis a dhéanann ciall don nideoige ("Do Stiúideo" in ionad "Cuma")

Is féidir leis an addon [Bainisteoir Plugin & Theme](/addons/plugin-and-theme-manager) cabhrú le rialú a dhéanamh ar a bhfeiceann custaiméirí.

## Seicheamh Ríomhphoist Fáilte {#welcome-email-sequence}

Ní leor ríomhphost fáilte amháin. Socraigh seicheamh a threoraíonn custaiméirí trína gcéad seachtain:

### Ríomhphost 1: Fáilte (Láithreach tar éis clárúcháin) {#email-1-welcome-immediately-after-signup}

- Ábhar: "Fáilte go FitSite -- tá suíomh gréasáin do stiúideo beo"
- Ábhar an ríomhphoist: Nasc logála isteach, céimeanna tús tapa, nasc chuig acmhainní cabhrach
- Ton: Spreagúil, misniúil, sonrach don aclaíocht

### Ríomhphost 2: Buaite Tapa (Lá 1) {#email-2-quick-wins-day-1}

- Ábhar: "3 rud le déanamh ar dtús ar do FitSite"
- Ábhar an ríomhphoist: Cuir do lógó leis, nuashonraigh íomhá laoch an leathanach baile, cuir do sceideal ranganna leis
- Cuir scáileáin san áireamh a thaispeánann go díreach cá háit le cliceáil

### Ríomhphost 3: Déan Leatsa É (Lá 3) {#email-3-make-it-yours-day-3}

- Ábhar: "Déan do site aclaíochta seasamh amach"
- Ábhar an ríomhphoist: Saincheap dathanna, cuir grianghraif traenálaithe leis, scríobh scéal do stiúideo
- Nasc chuig samplaí de shuíomhanna aclaíochta den scoth ar an ardán

### Ríomhphost 4: Téigh Beo (Lá 7) {#email-4-go-live-day-7}

- Ábhar: "Réidh le do FitSite a roinnt leis an domhan?"
- Ábhar an ríomhphoist: Seicliosta de na rudaí le fíorú sula roinneann tú é, conas fearann saincheaptha a nascadh (má tá tú ar Growth/Pro), leideanna comhroinnte sóisialta

:::tip Uathoibriú Ríomhphoist
Úsáid [Webhooks](/user-guide/integrations/webhooks) nó [Zapier](/user-guide/integrations/zapier) chun na ríomhphoist seo a spreagadh trí d’ardán margaíochta ríomhphoist. Tugann sé seo níos mó smachta duit ar uainiú agus ligeann sé duit rannpháirtíocht a rianú.
:::

## Acmhainní Cabhrach {#help-resources}

Cruthaigh ábhar cabhrach sonrach don nideoige a fhreagraíonn na ceisteanna a chuireann úinéirí stiúideonna aclaíochta i ndáiríre:

### Ailt Bhunachair Eolais {#knowledge-base-articles}

- "Conas do sceideal ranganna a nuashonrú"
- "Próifílí traenálaithe a chur leis agus a chur in eagar"
- "Lógó agus dathanna do stiúideo a athrú"
- "D’ainm fearainn féin a nascadh" (do chustaiméirí Growth/Pro)
- "Giuirléid áirithinte a chur le do site"

Scríobh iad seo d’úsáideoirí neamhtheicniúla. Úsáid scáileáin. Seachain béarlagair WordPress.

### Fístreoracha {#video-walkthroughs}

Taifeadtaí gearra scáileáin (2-3 nóiméad) a thaispeánann:

- An chéad logáil isteach agus treoshuíomh
- An leathanach baile a chur in eagar
- An sceideal ranganna a nuashonrú
- Traenálaí nua a chur leis

Ní gá gur léiriúcháin snasta iad seo. Is é an rud is tábhachtaí ná go bhfuil siad soiléir, cabhrach, agus sonrach don nideoige.

## An Leathanach Account {#the-account-page}

Áiríonn Ultimate Multisite [Leathanach Account](/user-guide/client-management/account-page) atá dírithe ar chustaiméirí, áit a mbainistíonn custaiméirí a síntiús. Saincheap é seo chun:

- A bplean FitSite reatha a thaispeáint
- Roghanna uasghrádaithe le tairbhí sonracha don aclaíocht a thaispeáint
- Stair bhilleála agus íoslódálacha sonrasc a sholáthar
- Nasc a dhéanamh chuig acmhainní cabhrach

## Rath Ionduchtaithe a Thomhas {#measuring-onboarding-success}

Rianaigh na táscairí seo chun a fháil amach an bhfuil d’ionduchtú ag obair:

- **Ráta gníomhachtaithe**: Cén céatadán de chlárúcháin a shaincheapann a site laistigh den chéad seachtain i ndáiríre?
- **Logálacha isteach sa chéad seachtain**: Cé mhéad uair a logálann custaiméir nua isteach le linn a chéad seachtaine?
- **Ticéid tacaíochta ó chustaiméirí nua**: Ciallaíonn líon ard go bhfuil bearnaí i d’ionduchtú
- **Tiontú ó thriail go híocaíocht**: Má thairgeann tú trialacha, cén céatadán a thiontaíonn?

## Líonra FitSite Go dtí Seo {#the-fitsite-network-so-far}

```
Líonra FitSite
├── WordPress Multisite (mód fofhearainn)
├── Ultimate Multisite (cumraithe + brandáilte)
├── Fearann Ardáin (fitsite.com + wildcard SSL)
├── Teimpléid Site (Studio Essential, Gym Pro, Fitness Chain)
├── Táirgí (Starter, Growth, Pro + Order Bumps)
├── Sreabhadh Checkout (sonrach don nideoige, tástáilte)
├── Brandáil (logáil isteach, Dashboard, ríomhphoist, sonraisc, site margaíochta)
├── Ionduchtú Custaiméirí
│   ├── Giuirléid Dashboard Tús Tapa
│   ├── Dashboard simplithe do bhainistiú site aclaíochta
│   ├── Seicheamh fáilte 4 ríomhphost
│   ├── Bunachar eolais sonrach don nideoige
│   ├── Fístreoracha
│   └── Leathanach Account saincheaptha
└── Réidh do straitéis praghsála (an chéad cheacht eile)
```

## An Rud a Thógamar sa Cheacht Seo {#what-we-built-this-lesson}

- **Eispéireas treoraithe don chéad logáil isteach** le giuirléid Tús Tapa
- **Dashboard simplithe** dírithe ar thascanna bainistithe site aclaíochta
- **Seicheamh ríomhphoist fáilte** a threoraíonn custaiméirí trína gcéad seachtain
- **Acmhainní cabhrach sonrach don nideoige** scríofa d’úinéirí stiúideonna aclaíochta neamhtheicniúla
- **Méadrachtaí ionduchtaithe** chun an t-eispéireas a rianú agus a fheabhsú

---

**Ar aghaidh:** [Ceacht 9: Praghsáil le haghaidh Brabúis](lesson-9-pricing) -- déanaimid an straitéis phraghsála a bheachtú chun ioncam a uasmhéadú agus caillteanas custaiméirí a íoslaghdú.
