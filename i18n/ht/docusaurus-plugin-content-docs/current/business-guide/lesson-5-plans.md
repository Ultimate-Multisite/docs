---
title: 'Leson 5: Konsepsyon plan ou yo'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Leson 5: Konsepsyon Plan Ou yo

Nivo plan ou yo pa sèlman nivo pri -- yo se yon refleksyon sou fason kliyan nan nich ou yo fonksyone toutbon. Nan leson sa a ou pral konsevwa nivo pwodwi ki koresponn ak bezwen reyèl biznis kondisyon fizik yo nan diferan etap.

## Kote Nou Te Rete

FitSite gen twa modèl pare (Studio Essential, Gym Pro, Fitness Chain). Kounye a nou kreye plan yo ki detèmine sa kliyan yo jwenn aksè a ak sa yo peye.

## Panse an Segman Kliyan

Erè pifò moun fè se konsevwa plan yo selon fonksyonalite teknik (depo, bandwidth, kantite paj). Kliyan nan nich ou yo pa panse konsa. Yon pwopriyetè jim panse ak sa li bezwen pou jere biznis li.

Pou estidyo kondisyon fizik yo, gen twa segman natirèl:

| Segman | Kiyès Yo Ye | Sa Yo Bezwen |
|---------|-------------|----------------|
| **Antrenè solo / ti estidyo** | 1-3 anplwaye, yon sèl lokal, ap kòmanse | Yon sit pwofesyonèl, enfòmasyon sou klas, fòm kontak |
| **Jim ki deja etabli** | 5-20 anplwaye, yon sèl lokal, ap grandi | Tout sa ki anwo a plis rezèvasyon, blog, galri, domèn pèsonalize |
| **Chèn kondisyon fizik** | Plizyè lokal, mak ki deja etabli | Tout sa ki anwo a plis plizyè sit, paj lokal yo, anyè anplwaye |

Plan ou yo ta dwe koresponn ak segman sa yo, pa ak pakè fonksyonalite abitrè.

## Kreye Plan FitSite yo

Ale nan **Ultimate Multisite > Products > Add Product** pou chak plan.

### Plan 1: FitSite Starter -- $49/mwa

**Sib**: Antrenè solo ak ti estidyo

**Onglè deskripsyon**:
- Non: FitSite Starter
- Deskripsyon: "Tout sa yon antrenè pèsonèl oswa yon ti estidyo bezwen pou parèt pwofesyonèl sou entènèt."

**Onglè jeneral**:
- Kalite pwodwi: Plan
- Wòl kliyan: Administratè

**Onglè Site Templates**:
- Pèmèt modèl sit: Aktive
- Modèl ki disponib: Studio Essential sèlman

**Limitasyon**:
- Sit: 1
- Espas disk: 1 GB
- Domèn pèsonalize: Dezaktive (itilize `studioname.fitsite.com`)

**Onglè plugins**:
- Plugin fòm kontak: Force Activate
- Plugin SEO: Force Activate
- Plugin rezèvasyon: Pa Disponib (ankourajman pou upgrade)

**Onglè themes**:
- Theme ou chwazi a: Force Activate
- Tout lòt themes yo: Kache

### Plan 2: FitSite Growth -- $99/mwa

**Sib**: Jim etabli ki gen yon sèl lokal

**Onglè deskripsyon**:
- Non: FitSite Growth
- Deskripsyon: "Pou jim ki deja etabli ki pare pou ogmante prezans yo sou entènèt epi atire nouvo manm."

**Onglè Site Templates**:
- Modèl ki disponib: Studio Essential ak Gym Pro

**Limitasyon**:
- Sit: 1
- Espas disk: 5 GB
- Domèn pèsonalize: Aktive

**Onglè plugins**:
- Tout bagay nan Starter, plis:
- Plugin rezèvasyon: Force Activate
- Plugin galri: Force Activate
- Fonksyonalite blog: Disponib

**Onglè Up & Downgrades**:
- Gwoup plan: FitSite Plans
- Lòd pwodwi: 2

### Plan 3: FitSite Pro -- $199/mwa

**Sib**: Chèn kondisyon fizik ki gen plizyè lokal

**Onglè deskripsyon**:
- Non: FitSite Pro
- Deskripsyon: "Platfòm konplè a pou mak kondisyon fizik ki gen plizyè lokal."

**Onglè Site Templates**:
- Modèl ki disponib: Tout twa modèl yo

**Limitasyon**:
- Sit: 5 (youn pou chak lokal)
- Espas disk: 20 GB
- Domèn pèsonalize: Aktive

**Onglè plugins**:
- Tout bagay nan Growth, plis:
- Tout plugins premium yo: Force Activate

**Onglè Up & Downgrades**:
- Gwoup plan: FitSite Plans
- Lòd pwodwi: 3

## Mete Gwoup Plan an Kanpe

Gwoup plan an asire kliyan yo ka sèlman upgrade oswa downgrade andedan fanmi plan FitSite la. Sou onglè **Up & Downgrades** chak plan:

1. Mete **Plan Group** la sou "FitSite Plans" pou tout twa plan yo
2. Mete **Product Order** la sou 1 (Starter), 2 (Growth), 3 (Pro)

Sa kreye yon chemen upgrade ki klè: Starter → Growth → Pro.

## Ajoute Order Bumps

Order bumps se pwodwi siplemantè yo ofri pandan checkout. Pou FitSite, konsidere:

- **Extra Storage Pack** ($19/mwa) -- 5 GB espas disk anplis
- **Priority Support** ($29/mwa) -- tan repons pi rapid
- **Additional Site** ($39/mwa) -- pou kliyan ki bezwen plis sit pase plan yo pèmèt

Kreye sa yo kòm pwodwi kalite **Package** nan Ultimate Multisite epi asosye yo ak plan ki apwopriye yo.

## Poukisa Estrikti Sa a Fonksyone

- **Starter** retire baryè pou antre -- pri ba, òf senp, mete antrenè yo sou entènèt vit
- **Growth** ajoute fonksyonalite jim yo mande toutbon -- rezèvasyon, galri, domèn pèsonalize
- **Pro** sèvi segman ki gen gwo valè a ki bezwen sipò pou plizyè lokal
- **Order bumps** pèmèt kliyan yo pèsonalize san yo pa konplike plan prensipal yo
- **Chemen upgrade klè** vle di kliyan yo grandi avèk ou olye pou yo ale

## Rezo FitSite la Jiskaprezan

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## Sa Nou Te Konstwi nan Leson Sa a

- **Twa nivo plan** ki koresponn ak segman reyèl biznis kondisyon fizik yo
- **Blokaj fonksyonalite** avèk kontwòl plugin ak modèl Ultimate Multisite yo
- **Yon gwoup plan** ak yon chemen upgrade ki klè
- **Pwodwi order bump** pou revni anplis
- **Yon estrikti pri** ki baze sou valè kliyan, pa sou espesifikasyon teknik

---

**Apre sa:** [Leson 6: Eksperyans Enskripsyon an](lesson-6-checkout) -- nou konstwi yon flow checkout ki konvèti pwopriyetè estidyo kondisyon fizik yo an kliyan k ap peye.
