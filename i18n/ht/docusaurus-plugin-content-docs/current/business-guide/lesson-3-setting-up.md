---
title: 'Leson 3: Konfigire rezo ou a'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Leson 3: Mete Rezo Ou An Plas {#lesson-3-setting-up-your-network}

Lè pou konstwi. Nan leson sa a ou pral enstale Ultimate Multisite epi konfigire baz rezo FitSite la. Chak desizyon isit la fèt ak nich kondisyon fizik la nan tèt.

## Kote Nou Te Rete {#where-we-left-off}

Nou te chwazi estidyo kondisyon fizik kòm nich nou epi nou te valide opòtinite a. Kounye a nou pral fè lide sa a tounen yon platfòm k ap fonksyone.

## Chwazi Hosting Ou {#choosing-your-hosting}

Chwa hosting ou pi enpòtan pou yon platfòm nich pase pou yon sèl sit entènèt. Ou pa ap loje yon sèl sit -- ou ap loje yon rezo ki pral grandi pou rive nan plizyè dizèn oswa plizyè santèn sit.

### Sa Pou Chèche {#what-to-look-for}

- **Sipò WordPress Multisite**: Se pa tout host ki jere multisite byen
- **Wildcard SSL**: Esansyèl pou rezo ki baze sou sous-domèn
- **Resous ki ka elaji**: Ou bezwen espas pou grandi san w pa bezwen migre
- **Entegrasyon Ultimate Multisite**: Katografi domèn otomatik ak SSL ekonomize anpil efò operasyonèl

### Apwòch Rekòmande {#recommended-approach}

Chwazi yon host nan lis [Founisè Konpatib yo](/user-guide/host-integrations/closte). Yo te teste sa yo ak Ultimate Multisite epi yo bay entegrasyon ou bezwen pou katografi domèn ak otomatizasyon SSL.

Pou FitSite, nou pral itilize yon konfigirasyon sous-domèn. Sa vle di sit kliyan yo pral parèt okòmansman kòm `studioname.fitsite.com` anvan yo ka, si yo vle, konekte pwòp domèn pa yo.

## Enstale WordPress Multisite {#installing-wordpress-multisite}

Si ou poko gen yon enstalasyon WordPress Multisite deja:

1. Enstale WordPress sou founisè hosting ou
2. Swiv gid [Kijan pou Enstale WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Chwazi konfigirasyon **sous-domèn** lè yo mande w

:::tip Poukisa Sous-domèn?
Sous-domèn bay chak sit kliyan pwòp adrès distenk pa li (`studio.fitsite.com`) olye de yon chemen (`fitsite.com/studio`). Sa pi pwofesyonèl pou kliyan ou yo epi li evite konfli permalink. Gade [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) pou yon konparezon detaye.
:::

## Enstale Ultimate Multisite {#installing-ultimate-multisite}

Swiv gid [Enstale Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) pou:

1. Telechaje epi aktive plugin nan tout rezo a
2. Lanse [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)

Pandan setup wizard la, kenbe nich FitSite la nan tèt ou:

- **Lajan**: Mete l sou lajan kliyan estidyo kondisyon fizik ou yo itilize
- **Non konpayi**: "FitSite" (oswa non mak ou chwazi a)
- **Logo konpayi**: Telechaje logo mak ou -- sa parèt sou fakti ak imèl

## Konfigire pou Nich Kondisyon Fizik la {#configuring-for-the-fitness-niche}

Avèk Ultimate Multisite enstale, fè chwa konfigirasyon espesifik pou nich sa yo:

### Paramèt Jeneral {#general-settings}

Ale nan **Ultimate Multisite > Settings** epi konfigire:

- **Non sit**: FitSite
- **Wòl pa defo**: Administrator -- pwopriyetè estidyo kondisyon fizik yo bezwen kontwòl konplè sou kontni sit yo
- **Enskripsyon**: Aktive enskripsyon itilizatè pou pwopriyetè estidyo yo ka enskri poukont yo

### Konfigirasyon Imèl {#email-configuration}

Imèl sistèm ou yo ta dwe pale lang nich ou a. Ale nan **Ultimate Multisite > Settings > Emails** epi pèsonalize:

- Ranplase langaj jeneral "nouvo sit ou a" ak mesaj ki espesifik pou kondisyon fizik
- Egzanp sijè akeyi: "Sit entènèt estidyo kondisyon fizik ou a pare"
- Egzanp kò mesaj akeyi: Fè referans ak estidyo yo, klas yo, ak fason pou yo kòmanse ak sit kondisyon fizik yo

Nou pral amelyore sa yo plis nan Leson 8 (Akeyi Kliyan), men mete ton an kounye a asire menm premye enskripsyon tès yo santi yo espesifik pou nich la.

### Konfigirasyon Domèn {#domain-configuration}

Si w ap itilize yon founisè hosting konpatib, konfigire katografi domèn kounye a:

1. Ale nan **Ultimate Multisite > Settings > Domain Mapping**
2. Swiv gid entegrasyon an pou host espesifik ou a
3. Teste pou asire nouvo subsites yo jwenn SSL otomatikman

Sa asire ke lè nou kòmanse kreye modèl ak sit tès nan pwochen leson an, tout bagay mache bout an bout.

## Rezo FitSite la Jiskaprezan {#the-fitsite-network-so-far}

Nan fen leson sa a, men sa ou genyen:

```
Rezo FitSite
├── WordPress Multisite (mòd sous-domèn)
├── Ultimate Multisite (enstale ak konfigire)
├── Hosting ak wildcard SSL
├── Katografi domèn konfigire
├── Modèl imèl espesifik pou nich la (inisyal)
└── Pare pou modèl sit yo (pwochen leson)
```

## Sa Nou Te Konstwi nan Leson Sa a {#what-we-built-this-lesson}

- **Yon enstalasyon WordPress Multisite k ap fonksyone** nan mòd sous-domèn
- **Ultimate Multisite enstale** epi konfigire ak mak FitSite
- **Hosting ak SSL** mete an plas pou yon rezo k ap grandi
- **Katografi domèn** konfigire pou founisè hosting ou
- **Ton imèl espesifik pou nich la** etabli depi premye jou

---

**Apre sa:** [Leson 4: Konstwi Modèl Nich yo](lesson-4-templates) -- nou kreye modèl sit pwopriyetè estidyo kondisyon fizik yo ap vrèman vle itilize.
