---
title: 'Casharka 12: Maamulidda Ganacsiga'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Casharka 12: Maamulidda Ganacsiga

Madal ma aha mashruuc aad dhammayso -- waa ganacsi aad maamusho. Casharkani wuxuu daboolayaa hawlgallada maalinlaha ah ee maamulidda FitSite: taageero, biil-bixin, dayactir, iyo in macaamiisha lagu hayo farxad.

## Halka Aan Ku Joognay {#where-we-left-off}

FitSite waa shaqaynayaa, macaamiishuna way is-diiwaangelinayaan. Hadda waxaad u baahan tahay inaad hawlgalka u maamusho si waara.

## Hawlgallada Maalinlaha ah {#daily-operations}

### Kormeerid {#monitoring}

Kuwan hubi maalin kasta (ama dejiso digniino):

- **Uptime**: Madashu ma la geli karaa? Adeegso adeeg kormeer uptime.
- **Is-diiwaangelinno cusub**: Immisa macmiil oo cusub ayaa maanta is-diiwaangeliyay?
- **Lacag-bixinno fashilmay**: Ma jiraan fashilal lacag-bixin oo u baahan feejignaan?
- **Codsiyada taageerada**: Ma jiraan su'aalo macaamiil oo aan laga jawaabin?

### Taageerada Macaamiisha {#customer-support}

Diiraddaada niche waa faa'iido halkan. Maadaama dhammaan macaamiishaadu yihiin istuudiyo jimicsi, waxaad si soo noqnoqota u arki doontaa isla su'aalaha:

**Su'aalaha caadiga ah ee aad heli doonto:**

- "Sideen u cusboonaysiiyaa jadwalka fasalladayda?"
- "Ma beddeli karaa midabbada site-kayga?"
- "Sideen trainer cusub ugu daraa site-kayga?"
- "Domain-kaygu ma shaqaynayo"
- "Sideen u joojiyaa/u cusboonaysiiyaa plan-kayga?"

Dhis knowledge base-kaaga (oo laga bilaabay Casharka 8) agagaarka su'aalahan soo noqnoqda. Support ticket kasta oo noqon karay maqaal knowledge base ah waa calaamad kuu sheegaysa inaad qorto maqaalkaas.

### Heerarka Taageerada {#support-tiers}

Markaad korto, taageerada u habee plan ahaan:

| Plan | Heerka Taageerada | Waqtiga Jawaabta |
|------|--------------|---------------|
| Starter | Knowledge base + email | 48 saacadood |
| Growth | Taageero email | 24 saacadood |
| Pro | Email mudnaan leh + wicitaan onboarding | 4 saacadood |

[Support Tickets addon](/addons/support-tickets) wuxuu ka caawin karaa maareynta codsiyada taageerada gudaha madasha.

## Hawlgallada Biil-bixinta {#billing-operations}

### Lacag-bixinno Soo Noqnoqda {#recurring-payments}

Ultimate Multisite wuxuu si otomaatig ah u maamulaa biil-bixinta soo noqnoqda isagoo adeegsanaya payment gateway-gaaga. Shaqadaadu waa inaad kormeerto:

- **Lacag-bixinno fashilmay**: Si degdeg ah ula soco. Fashilada badankoodu waa kaarar dhacay, ma aha joojinno ula kac ah.
- **Dunning**: Dejiso logic isku-day-celis otomaatig ah adigoo adeegsanaya payment gateway-gaaga (Stripe tan si fiican ayuu u maareeyaa)
- **Codsiyada joojinta**: Faham sababta macaamiishu uga tagaan. Joojin kasta waa feedback.

### Maamulidda Memberships {#managing-memberships}

U gudub **Ultimate Multisite > Memberships** si aad u:

- Aragto dhammaan subscriptions-ka firfircoon
- U maamusho codsiyada upgrade iyo downgrade
- U fuliso refunds marka loo baahdo
- U maamusho dhicitaanka trial-ka

Eeg [Maamulidda Memberships](/user-guide/administration/managing-memberships) tixraaca buuxa.

### Invoicing {#invoicing}

Hubi in invoices si sax ah loogu abuuro lacag-bixin kasta. Macaamiishu waxay u baahan karaan invoices si ay u soo sheegaan kharashaadka ganacsiga. Eeg [Maamulidda Lacag-bixinaha iyo Invoices](/user-guide/administration/managing-payments-and-invoices).

## Dayactirka Madasha {#platform-maintenance}

### Cusboonaysiinta WordPress iyo Plugin {#wordpress-and-plugin-updates}

Adigoo ah maamulaha network-ka, waxaad mas'uul ka tahay:

- **Cusboonaysiinta WordPress core**: Ku tijaabi staging site ka hor inta aanad ku dabaqin production
- **Cusboonaysiinta plugin**: Isla sidaas -- marka hore tijaabi, kadibna ku dabaq network-ka oo dhan
- **Cusboonaysiinta theme**: Xaqiiji in templates weli u muuqdaan sax kadib cusboonaysiinta theme
- **Cusboonaysiinta Ultimate Multisite**: Raac changelog-ka oo tijaabi ka hor inta aanad cusboonaysiin

:::warning Waligaa Ha Cusboonaysiin Production Adigoon Tijaabin
Cusboonaysiin jaban waxay saamaysaa site kasta oo macmiil ku leeyahay network-kaaga. Had iyo jeer marka hore ku tijaabi cusboonaysiinta nuqul staging ah oo network-kaaga ah.
:::

### Amniga {#security}

- Ku hay software oo dhan mid casri ah
- U adeegso passwords xooggan iyo two-factor authentication accounts-ka admin
- Kormeer dhaqdhaqaaq shaki leh
- Hayso plan loogu talagalay dhacdooyinka amniga

### Waxqabadka {#performance}

Marka network-kaagu koro, kormeer:

- **Waqtiyada page load**: Sites-ka macaamiishu ma degdeg yihiin?
- **Isticmaalka khayraadka server-ka**: CPU, memory, disk space
- **Waxqabadka database**: Networks waaweyn waxay u baahan yihiin hagaajinta database waqti ka dib

Ka fiirso hirgelinta caching (page cache, object cache) iyo CDN haddii aadan hore u samayn. [Cloudflare integration](/user-guide/host-integrations/cloudflare) ayaa maamula qayb badan oo tan ka mid ah.

## Maareynta Wareegga Nolosha Macaamiisha {#customer-lifecycle-management}

### Yaraynta Churn {#reducing-churn}

Churn waa boqolkiiba macaamiisha joojisa bil kasta. Ganacsi subscription ah, yaraynta churn waxay la mid muhiimad tahay helidda macaamiil cusub.

**Sababaha caadiga ah ee macaamiisha istuudiyaha jimicsigu churn u sameeyaan:**

- Ma garan karin sida loo isticmaalo madasha → hagaaji onboarding
- Site-ku uma muuqan mid ku filan oo wanaagsan → hagaaji templates
- Qiime ma arkin → hagaaji features ama isgaarsiinta
- Waxay heleen beddel ka jaban → xooji qiimahaaga niche
- Ganacsigoodii wuu xirmay → lama baajin karo, laakiin tan si gooni ah ula soco

### Dhiirrigelinta Upgrades {#encouraging-upgrades}

Macaamiisha ku jira Starter ee guulaysanaya waa in lagu dhiirrigeliyo inay upgrade sameeyaan:

- Marka ay gaaraan xadka plan-ka (sites, storage), muuji prompts upgrade
- Dir emails bartilmaameedsan oo iftiiminaya features-ka Growth plan ee ay ka faa'iidi lahaayeen
- Soo bandhig waxa macaamiisha Growth/Pro ay dhiseen

### Ololayaasha Soo-celinta {#win-back-campaigns}

Marka macmiil joojiyo:

1. Weydii sababta (exit survey ama email)
2. Ka jawaab walaacooda haddii ay suurtagal tahay
3. Sii qiimo-dhimis si uu u soo noqdo (30-60 maalmood kadib joojinta)

## Jadwallada Toddobaadlaha iyo Bilaha ah {#weekly-and-monthly-routines}

### Toddobaadle {#weekly}

- Dib u eeg is-diiwaangelinno cusub iyo joojinno
- Ka jawaab dhammaan support tickets-ka furan
- Hubi waxqabadka madasha iyo uptime
- Dib u eeg lacag-bixin kasta oo fashilantay

### Bile {#monthly}

- Falanqee cabbirrada muhiimka ah (MRR, churn, macaamiil cusub, upgrades)
- Dabaq cusboonaysiinta WordPress iyo plugin (kadib tijaabada staging)
- Dib u eeg oo cusboonaysii knowledge base iyadoo lagu salaynayo qaababka taageerada
- U dir newsletter ama cusboonaysiin macaamiisha (features cusub, talooyin, wararka warshadda jimicsiga)

### Saddex-biloodle {#quarterly}

- Dib u eeg qiimaha marka loo eego tartamayaasha iyo feedback-ka macaamiisha
- Qiimee naqshadaha template -- ma u baahan yihiin cusboonaysiin?
- Qiimee awoodda hosting -- ma u baahan tahay inaad scale samayso?
- Dib u eeg oo hagaaji onboarding iyadoo lagu salaynayo xogta activation

## Waxa Aan Ku Dhisnay Casharkan {#what-we-built-this-lesson}

- **Habraacyada kormeerka maalinlaha ah** ee uptime, isdiiwaangelinta, lacag-bixinnada, iyo taageerada
- **Qaab-dhismeed taageero oo heerar leh** oo la waafajiyay heerarka plan
- **Hawlaha biilasha** oo ay ku jiraan dunning iyo maaraynta baajinta
- **Nidaamyada dayactirka** ee cusboonaysiinta, amniga, iyo waxqabadka
- **Istaraatiijiyadaha dhimista churn** oo gaar u ah niche-ka fitness
- **Habraacyada hawlgalka toddobaadle, bille, iyo rubucle ah**

---

**Xiga:** [Casharka 13: Ballaarinta](lesson-13-growth) -- FitSite oo laga korinayo hawlgal yar loona dhigayo ganacsi dhab ah.
