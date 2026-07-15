---
title: Vöru og verðsetning dómanna
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Domenar og prísir

Domenar er hvernig þú stýrir prís, TLD-e (top-level domains), WHOIS skjulsréttindi og val á viðbótum. Hvert domenprodukt er almenn Multisite Ultimate produkt með extra **Domain Settings** tab.

## Skapa domenprodukt {#creating-a-domain-product}

1. Gangi í **Network Admin › Ultimate Multisite › Products**
2. Klikka á **Add New** (Búa til nýtt)
3. Setðu produktípsins settur á **Domain** (Domen).
4. Stætðu upp **Domain Settings** tabinn (sjá hér að neðan).
5. Spaðu (Sparaðu).

Domenprodukt sýna sig með púrpura **Domain** merki í lista produktna og getur skiptist úr við **Domain Products** tabinn.

## Domain Settings tab {#domain-settings-tab}

### Provider (Viðbótari) {#provider}

Velðu hvar registrarinn skal skráning þess fyrir þetta produkt handla. Við defaults sett er almenn **Default provider** í Domain Seller settings.

### Supported TLDs (Stöðuð TLD-ar) {#supported-tlds}

Látðu blankt til að skapa **catch-all product** sem gildir fyrir allar TLD-ar sem ekki passar við annað produkt.

Skráðu inn lista af TLD-um sem eru með komma í þeim (t.d. `.com, .net, .org`) til að skapa **TLD-specific product** sem gildir aðeins fyrir þá endir.

**Hvernig produkt samræmist:** Þegar viðskiptavinur leitar eftir domen, vel viðbótarið upp mest nákvæma passarandi produktinn. Produkt með `.com` í TLD-listi sinna hefur fyrir vágmark áfram áður en catch-all produkt. Ef ingengt TLD-spécifikt produkt passar, er catch-all notað. Ef ekki finnst nokkur produkt, sýnist ekki domenleitarinn.

### Markup type (Viðbótari prís) {#markup-type}

Þrír mögulegar leiðir stýra hvernig þitt víðprís er reiknaður úr vágmarkkostinum:

| Mode (Leið) | Hvernig það virkar |
|---|---|
| **Percentage** (Frekventni) | Íður enn mögulegni á vágmarkkostinn. 20% viðbótari prís á domen með vágmarkkost $10 er $12. |
| **Fixed markup** (Fast viðbótari prís) | Íður enn fastjörð dollar-hlutfall. $5 viðbótari prís á domen með vágmarkkost $10 er $15. |
| **Fixed price** (Fast prís) | Ignorar vágmarkkostinn heilt. Skilur alltid það hluta sem þú skráðir inn. |

### Introductory pricing (Inngangsvíðprís) {#introductory-pricing}

Aktvísð til að bjóða upp á verð með framboðarútlösing fyrir fyrsta ári. Setji sérstakt **Inngangsvérð** (verði fyrsta ár) saman við vanlegan **Fornyrðingarverð** (verði 2+). Klientur sjáðir bæði verðin sýnd fram á síðunni fyrir fornyrðingu, svo hann veydi sér, hvað hann skal bíða.

### WHOIS skjulframkvæmd {#whois-privacy}
Styrir það hvort er bjóðar upp á skjulframkvæmd (WHOIS privacy) fyrir domænar sem eru skráðar með þessum vörun.

| Stilling | Aðferd |
|---|---|
| **Deakt** | WHOIS skjulframkvæmd er aldrei bjóðin upp á eða aktivert. |
| **Alltíma í skráningu** | WHOIS skjulframkvæmd er sjálfaktivert sjálftur við skráningu án kostnaðar. |
| **Valur viðskiptavina** | Framsetning kemur upp á síðunni fyrir fornyrðingu. Setji **Skjulframkvæmdarverði** til að setja kostnað per ár, eða láti það vera $0 til að bjóða hana upp frelsa. |

Fyrir Namecheap notar WHOIS skjulframkvæmd WhoisGuard (alltíma frelst). Fyrir OpenSRS notar hann OpenSRS skjulframkvæmdarferlið (getur hafa kostnað á hlutafélagshöldum).

---

## TLD inntaka og synkingu {#tld-import-and-sync}
Domænvörf sýna verð með hlutafélagshöldum sem er hent fyrir minni þjónustu, sem er hent fyrir tengd viðbót. Til að þetta skuli virka, þurfa TLDs að vera inntaka.

- **Manuell synki:** Settings › Domain Seller › Sync TLDs (per provider)
- **Automatísk synki:** Läkar daginn með skráðum cron job á öllum settum viðbótshöldum.

Eftir synkingu, ferst til hvaða tabli Domænverfisvörku sem er og nota TLD vélina til að sjá tilfelli tlds með verði hlutafélagshöldum sem eru til fylgju.

---

## Sjálfávíkingar {#auto-renewal}
Fornyrðingar domána eru tengdar við lánningastatus viðskiptavina:

- Þegar lánningur fornyrðist og er domæn tengd, er fornyrðingur dománinn sjálfaktivert.
- Fornyrðingartrykkir nota aktiva fjármagnstengingu viðskiptavina.
- Fallaðar fornyrðingar eru upphafaðir aftur sjálft sem exponensial backoff.
- Tölvupósturmiðlun er send fyrir árangvarfornyrðingar, falla og komandi lausn.

Tölvupóstarmalstafarnir fyrir áhrifdomæli domænlifræðarferlis:

| Heild | Template ID |
|---|---|
| Domén skráð | `domain_registered` |
| Domén uppfærð | `domain_renewed` |
| Uppfærð ferðuð ekki | `domain_renewal_failed` |
| Domén nær á lausn | `domain_expiring_soon` |

---

## Administra: Handilagengni domény {#admin-manual-domain-registration}

Til að skrá domén á behalfi viðskiptavina án þess að þeir séu í ferðu með betalningu:

1. Gangi yfir **Network Admin › Ultimate Multisite › Register Domain**
2. Veldu viðskiptavininn og skildu nafn domény
3. Skrifu inn upplýsingar um viðkomandi (nafn, heidi, tölvupóstnúmer)
4. Klikka á **Register**

Skráningin á doméni blir sköpt og tengd viðskiptavininnaka.
