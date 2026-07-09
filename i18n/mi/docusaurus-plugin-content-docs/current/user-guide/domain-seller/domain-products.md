---
title: |-
  Mga Pākehā me te Whakaritenga

  Ngā Pākehā me te Whakaritenga
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Taonga Domain me Pākehā (Domain Products and Pricing) {#domain-products-and-pricing}

Kei te whaiaro ana i te whakaingoa, TLDs, WHOIS privacy, me te whiriwhiri o te pahi (provider selection), ko ngā domain products. He standard Multisite Ultimate product koe i roto i te whakaritetenga, me heke mai i ahau i te **Domain Settings** tab.

## Whakawhanaungatanga domain product {#creating-a-domain-product}

1. Pāinga ki **Network Admin › Ultimate Multisite › Products**.
2. Whakawatea **Add New**.
3. Tīkirihia te puta noa (product type) ki **Domain**.
4. Whakahaere i te tab **Domain Settings** (he whakataki ana ki te whakatipu i runga i).
5. Whakawārie (Save).

Ko ngā domain products e pōuri ana i te puta mai i te list o products me te taea ai te filamari i ahau i te tab **Domain Products**.

## Tab Domain settings {#domain-settings-tab}

### Provider {#provider}

Whakarite ko te registrar waiho ana i te whakatere (registration) mo tēnei product. Ko te default he te **Default provider** o te ao e whakataki ana i ngā whakaritenga o te Domain Seller settings.

### Supported TLDs {#supported-tlds}

Whakawārie ki te whakahau (leave blank) kia whakamaumau koe i heta product (catch-all product) e whai ana ki ngā TLDs katoa e ātaahua mai i tēnei product.

Whakarite he list o TLDs e whakatika (comma-separated list) (e.g., `.com, .net, .org`) kia whakamaumau koe i heta product e whai ana ki ngā extension-whakaahua hoki.

**He aha te mahi o te matching o product:** I roto i te wā e whakatere te mea pahi (customer) mō domain, ko te addon e whai ana i te product tino tika e whai ana. Ko te product e heke mai i `.com` i te list TLD-o ia e whai anga ake (takes precedence) i te catch-all product. Ko te catch-all e whakamahia ana ki te wā ko he nui o ngā product e hoki mai, me te noho ana i te catch-all. Ko te whakatere domain e whakamohua ana ko he nui o ngā product e hoki mai, me te noho ana i te catch-all.

### Markup type (Whakaritenga Whakahaere) {#markup-type}

He mode toru e whakakawatea ana i te puta mai o te whakaingoa pēke (retail price) mo te whakataunga (wholesale cost):

| Mode | He aha te mahi |
|---|---|
| **Percentage** | E whāinga i heputu (percentage) i runga i te whakataunga. Ko heputu 20% ki te domain wholesale $10 e hoki mai ai $12. |
| **Fixed markup** | E whāinga i he putanga pēke (fixed dollar amount). Ko heputu $5 ki te domain $10 e hoki mai ai $15. |
| **Fixed price** | E whakawārie katoa i te whakataunga wholesale. E whakatere i te wā ko e whai anga koe. |

### Introductory pricing (Whakaritenga Whakahaere Whakamutahi) {#introductory-pricing}

Whakawhanaungatanga (WHOIS) rawhatanga

Karakara i te whakahirahira ki te ofo whakaingoa whakaheke mō te taumata tīmatanga. Whakawātea **Priced Tīmatanga** (taumata taumata 1) e tōtōtō, i runga i te **Priced Manawa** (taumata taumata 2+) o te whakahirahira. Ka whakaahua te mea katoa ki te mea he whakaheke mō te taumata tīmatanga me te whakahirahira pēnei i te whakatere, i roto i te checkout, kia mōhiamo ahau i te mea e hiahia ana mo te whakahirahira.

### Whakaritenga WHOIS privacy (WHOIS privacy) {#whois-privacy}

Kia whakakawātea ko e taea ai te whakamahi whakaora WHOIS privacy mō ngā domain kua oti i te whero i roto i tēnei au.

| Whakaritenga | Mahi |
|---|---|
| **Whakawātea** | Ka whai ake te whakaora WHOIS privacy, ā, ka whakawātea ana i te whakamahi. |
| **Ka Ora** | Ka whakakawātea anō te whakaora WHOIS privacy i runga i te whero i te mea he pēnei i te whero, me te whai ake i te whero, i roto i te whero, me te whero, i roto i te whero. |
| **Whakawhiti o te Whakamahi** | Ka roa i te whakaaro e pēnei i te whero i te mea he pēnei i te whero, ka puta he checkbox i roto i te checkout. Whakawātea te **Priced Privacy** ki te whakahaere ana mō te taumata, apo, ka roto i $0 kia ofo ai i te pai. |

Mo Namecheap, ka whakamahau te WHOIS privacy WhoisGuard (ka ora mai). Mo OpenSRS, ka whakamahi te whaiora whakaora WHOIS o OpenSRS (he mea e taea te hara i te wholesale).

---

## Whakarite TLD import me sync {#tld-import-and-sync}

Ka whakaatu ngā au domain product mga whakahirahira mō te whakahirahira wholesale i te wā real-time, kua whakatere mai i te whaiora connected. Mo te mahi ki tēnei mea, ka taea te huri i ngā TLDs (Top Level Domains) e tika ana.

- **Sync manuahi:** Settings › Domain Seller › Sync TLDs (per provider)
- **Sync awtomatiki:** Ka whakahaere ake koinei i tētahi rā via scheduled cron job i runga i ngā whaiora katoa kua whakarite mai.

I taiao i te sync, ka pahi ki te tab Domain Settings o au domain product ahau me te whakamahi i te TLD picker kia whakaahua i ngā TLDs e kaha ana me ngā wholesale prices i tētahi wā.

---

## Auto-renewal (Whakahirahira awtomatiki) {#auto-renewal}

Ka whakatutaku i ngā whakahirahira domain ki te status o te mōhaka:

- I roto i te wā ka whakahirahira i te mōhaka, me te pēnei i te domain kua whakatere mai, ka whakawātea te whakahirahira domain.
- Ka whakamahi ngā whakahirahira ki te whakatere o te mōhaka o te whaiora o te mea e kaha o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te mōhaka o te m

| Event | Template ID |
|---|---|
| Domain registered | `domain_registered` |
| Domain renewed | `domain_renewed` |
| Renewal failed | `domain_renewal_failed` |
| Domain expiring soon | `domain_expiring_soon` |

---

## Admin: Registration o te domain manuahi (Manual domain registration) {#admin-manual-domain-registration}

Kia whakaaturia i te domain mō te mea eke ana i te whānau, i roto i te whakamārama ki te checkout:

1. Pā te **Network Admin › Ultimate Multisite › Register Domain**
2. Whakarongo ki te whānau (customer) me te whakahi i te ingoa o te domain
3. Whakarongo i ngā whakamōhaka o te tino whaiako (registrant contact details) (ingoa, address, phone)
4. Whakawātea **Register**

Ka whakamaoritia te rekording o te domain me te whakatape ana ki te aka o te whānau.
