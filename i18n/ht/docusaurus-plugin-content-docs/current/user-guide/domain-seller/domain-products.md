---
title: Pwodwi Domèn ak Pri
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Domain Products ak Priprez {#domain-products-and-pricing}

Domain products se pa ou kontwo kontrol priz, TLD yo, konfidans WHOIS, ak chwazi pwovizè w. Chak domain product se yon estanda Multisite Ultimate ki gen yon tab **Domain Settings** ekstrèm.

## Kreye yon domain product {#creating-a-domain-product}

1. Ale nan **Network Admin › Ultimate Multisite › Products**
2. Klike sou **Add New**
3. Mete tip pwodwi a kòm **Domain**
4. Konfigire tab **Domain Settings** (gade anba)
5. Save

Domain products yo parèt ak yon badge **Domain** violet nan lis pwodwi a epi ou ka filtre yo itilize tab **Domain Products**.

## Tab Domain settings {#domain-settings-tab}

### Provider {#provider}

Chwazi ki registratè k ap jere enskripsyon pou pwodwi sa a. Li default se **Default provider** global ki mete nan Domain Seller settings la.

### Supported TLDs {#supported-tlds}

Lèt ou ka kite anba pou kreye yon **catch-all product** ki aplike pou tout TLD yo ki pa koresponn ak lòt pwodwi.

Mete yon lis TLD ki separe pa virgule (egzanp: `.com, .net, .org`) pou kreye yon **TLD-specific product** ki sèlman aplike sou ekstansyon sa yo.

**Kijan matche pwodwi a fonksyone:** Lè yon kliyan chèche yon domain, addon la chwazi pwodwi ki pi espesifik ki koresponn. Yon pwodwi ki gen `.com` nan lis TLD li gen plis pouvwa pase yon catch-all product. Si pa gen okenn pwodwi ki koresponn ak yon TLD espesifik, catch-all la itilize. Si pa gen okenn pwodwi egziste, rechèch domain la p ap montre.

### Markup type (Tip pou Pri) {#markup-type}

Twa mod kontrol kijan pri ritè ou kalkile soti nan kòst wholesale:

| Mode | Kijan li fonksyone |
|---|---|
| **Percentage** | Ajoute yon pètranj sou kòst wholesale. Yon markup 20% sou yon domain wholesale 10 dolè bay $12. |
| **Fixed markup** | Ajoute yon kantite dola fiks. Yon markup 5 dolè sou yon domain 10 dolè bay $15. |
| **Fixed price** | Ignore kòst wholesale la nèt. Toujou chaje kantite ou mete a. |

### Introductory pricing (Pri entwodiktwa) {#introductory-pricing}

### Ki fè pwoteje WHOIS (WHOIS privacy) {#whois-privacy}

Sa ki kontwole si nou ofri pwoteksyon WHOIS pou domèn yo ki reyegisye atravè pwofòp sa a.

| Konfigirasyon | Konpòtman |
|---|---|
| **Dezactive** | Pwoteksyon WHOIS pa ofri ni active pou domèn yo. |
| **Toujou Inklizif** | Pwoteksyon WHOIS aktif otomatikman pandan reyegisye a san okenn chaj. |
| **Chwa Kliyan an** | Yon case parèt pandan checkout. Mete pri **Privacy price** pou chaje pa anpil, oswa kite l la a $0 pou ofri li gratis. |

Pou Namecheap, WHOIS privacy itilize WhoisGuard (toujou gratis). Pou OpenSRS, li itilize sèvis prive OpenSRS (ka gen yon kòt nan wholesale).

---

## Import ak senkronizasyon TLD {#tld-import-and-sync}

Pwodwi domèn yo montre pri wholesale ki chanje an tan reyèl ki jwenn nan pwofòvè konekte a. Pou sa a fonksyone, TLD yo dwe importe.

- **Senkronizasyon manèl:** Settings › Domain Seller › Sync TLDs (pa pwofòvè)
- **Senkronizasyon otomatik:** Li fèt chak jou atravè yon cron job planifye pou tout pwofòvè ki konfigire yo.

Ap fè senkronizasyon an, ale nan tab Domain Settings pou nenpòt pwodwi domèn epi itilize TLD picker la pou w wè TLD yo ki disponib ak pri wholesale kouran yo.

---

## Rènman otomatik (Auto-renewal) {#auto-renewal}

Rènman domèn yo gen rapò ak statistik manm kliyan an:

- Lè yon manm rènman epi yon domèn se konekte, rènman domèn nan ap mete an kole otomatikman
- Tentative rènman itilize pòt paiement aktif kliyan an
- Rènman ki echwe yo re-tentative otomatikman ak exponential backoff (re-tentative ak yon fonksyon k ap grandi)
- Notifikasyon imèl yo voye pou rènman siksè, echè, epi pou expiration k ap vini yo

ID template imèl pou evènman sik domèn:

| Evenmant | Template ID |
|---|---|
| Domain anrejistre | `domain_registered` |
| Domain renouvle | `domain_renewed` |
| Renouvelman fasilite | `domain_renewal_failed` |
| Domain apèchire twa | `domain_expiring_soon` |

---

## Admin: Anrejistre domain manèl {#admin-manual-domain-registration}

Pou anrejistre yon domain nan non yon kliyan san yo pa pase etap checkout la:

1. Ale nan **Network Admin › Ultimate Multisite › Register Domain**
2. Chwazi kliyan an epi mete non domain la
3. Ranpli detay kontak moun ki ap rekonèt (non, adrès, telefòn)
4. Klike sou **Register**

Rekòd domain la pral kreye e li pral konekte ak kont kliyan an.
