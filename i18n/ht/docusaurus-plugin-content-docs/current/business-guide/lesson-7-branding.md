---
title: 'Leson 7: Fè l vin pa w'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Leson 7: Fè L Vin Pou Ou

Kliyan ou yo pa ta dwe janm santi y ap itilize "yon WordPress plugin quelconque." Yo ta dwe santi y ap itilize FitSite -- yon platfòm ki bati pou endistri yo. Leson sa a kouvri mak, white-labeling, ak fason pou fè platfòm nan santi tankou yon pwodwi.

## Kote Nou Te Rete {#where-we-left-off}

FitSite gen yon pwosesis checkout k ap fonksyone ki mennen pwopriyetè estidyo fitness yo soti nan chwa plan rive nan yon sit ki aktif. Kounye a nou fè tout eksperyans lan santi tankou yon pwodwi ki ini, ki gen mak li.

## Domèn Platfòm Ou {#your-platform-domain}

Fondasyon mak ou se domèn ou. Pou FitSite:

- **Domèn prensipal**: `fitsite.com` (sit maketing ou ak rasin rezo a)
- **Sit kliyan yo**: `studioname.fitsite.com` (sous-domèn)
- **Domèn pèsonalize**: Kliyan sou plan Growth ak Pro ka konekte pwòp domèn pa yo

### Mete Domèn Ou An Plas {#setting-up-your-domain}

1. Anrejistre domèn platfòm ou
2. Voye li sou founisè hosting ou
3. Konfigire wildcard DNS (`*.fitsite.com`) pou sous-domèn kliyan yo
4. Asire wildcard SSL aktif

Gade [Kijan pou Konfigire Domain Mapping](/user-guide/domain-mapping/how-to-configure-domain-mapping) pou enstriksyon detaye.

## White-Labeling Eksperyans Admin Nan {#white-labeling-the-admin-experience}

Lè yon pwopriyetè estidyo fitness konekte nan Dashboard sit li, li ta dwe wè mak ou, pa mak WordPress oswa Ultimate Multisite.

### Paj Login Pèsonalize {#custom-login-page}

Pèsonalize paj login WordPress la pou montre:

- Logo FitSite ou
- Imaj background ki apwopriye pou fitness
- Koulè mak ou yo

### Mak sou Dashboard {#dashboard-branding}

Sèvi ak addon [Admin Page Creator](/addons/admin-page-creator) oswa CSS pèsonalize pou:

- Ranplase logo WordPress la ak logo FitSite ou
- Pèsonalize konbinezon koulè admin nan pou matche ak mak ou
- Ajoute yon widget dashboard pèsonalize ak lyen rapid ak resous èd ki espesifik pou fitness

### Paj Admin Pèsonalize {#custom-admin-pages}

Konsidere kreye paj admin pèsonalize ki mete aksyon ki pi enpòtan pou pwopriyetè estidyo fitness yo devan:

- "Modifye Orè Kou Ou"
- "Mete Pwofil Antrenè yo Ajou"
- "Gade Sit Ou"

Sa diminye koub aprantisaj la lè li mete aksyon ki gen rapò ak nich la devan je itilizatè a olye pou yo antere yo nan meni WordPress estanda a.

## Mete Mak Ou sou Kominikasyon Ou yo {#branding-your-communications}

Chak imèl, fakti, ak notifikasyon ta dwe ranfòse mak ou.

### Imèl Sistèm {#system-emails}

Ale nan **Ultimate Multisite > Settings > Emails** epi pèsonalize tout imèl sistèm yo:

- **Non moun k ap voye a**: FitSite
- **Imèl moun k ap voye a**: hello@fitsite.com
- **Modèl imèl**: Sèvi ak koulè mak ou yo ak logo ou
- **Langaj**: Espesifik pou fitness toupatou

Imèl kle pou pèsonalize:

| Imèl | Vèsyon Jenerik | Vèsyon FitSite |
|-------|----------------|-----------------|
| Byenvini | "Nouvo sit ou a pare" | "Sit entènèt estidyo fitness ou a aktif" |
| Resi peman | "Peman resevwa" | "Peman abònman FitSite konfime" |
| Esè ap fini | "Esè ou a ap fini talè" | "Esè FitSite ou a fini nan 3 jou -- kenbe sit entènèt estidyo ou a aktif" |

### Fakti {#invoices}

Pèsonalize modèl fakti yo ak:

- Logo FitSite ou ak koulè mak ou yo
- Detay biznis ou
- Non pwodwi ki espesifik pou fitness (pa ID plan jenerik)

## Sit Kliyan yo Wè a {#the-customer-facing-site}

Domèn prensipal ou (`fitsite.com`) bezwen yon sit maketing ki vann platfòm nan. Sa separe ak admin rezo Ultimate Multisite la -- se fas piblik biznis ou.

Paj kle yo:

- **Paj dakèy**: Pwopozisyon valè klè pou biznis fitness yo
- **Fonksyonalite yo**: Sa FitSite fè, nan tèm fitness
- **Pri**: Twa plan ou yo ak konparezon fonksyonalite ki espesifik pou nich la
- **Egzanp**: Montre sit ki bati sou platfòm nan
- **Enskri**: Lyen pou fòm checkout ou

:::tip Sit Maketing Ou Ka Yon Sit Rezo
Kreye sit maketing ou kòm yon sit andedan pwòp rezo ou. Sa pèmèt ou jere li nan menm dashboard la epi li demontre kapasite pwòp platfòm ou.
:::

## Domèn Pèsonalize pou Kliyan yo {#custom-domain-for-customers}

Pou kliyan ki sou plan ki enkli domèn pèsonalize, dokimante pwosesis la klèman:

1. Kliyan an anrejistre oswa transfere domèn li bay yon registrar
2. Kliyan an mete DNS ajou pou voye li sou platfòm ou (bay dosye egzak yo)
3. Ultimate Multisite jere domain mapping la ak SSL

Kreye yon atik èd oswa yon antre nan baz konesans espesyalman pou pwosesis sa a, ekri pou pwopriyetè estidyo fitness ki pa teknik.

## Rezo FitSite la Jiska Kounye a {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding
│   ├── Custom login page
│   ├── Branded admin dashboard
│   ├── Niche-specific system emails
│   ├── Branded invoices
│   └── Marketing site on fitsite.com
└── Ready for onboarding flow (next lesson)
```

## Sa Nou Te Bati nan Leson Sa a {#what-we-built-this-lesson}

- **Domèn platfòm ak DNS** konfigire pou yon eksperyans ki gen mak
- **Admin white-labeled** ak mak FitSite toupatou
- **Kominikasyon pèsonalize** -- imèl, fakti, ak notifikasyon tout ann akò ak mak la
- **Yon sit maketing** ki vann FitSite bay pwopriyetè estidyo fitness yo
- **Dokimantasyon domèn pèsonalize** pou kliyan ki vle pwòp domèn pa yo

---

**Apre sa:** [Leson 8: Onboarding Kliyan](lesson-8-onboarding) -- nou konsevwa eksperyans ki fè yon nouvo enskripsyon tounen yon kliyan aktif, kontan.
