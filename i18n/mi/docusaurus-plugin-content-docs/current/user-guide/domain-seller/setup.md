---
title: Whakawhanaungatanga me te Whakamahi Tohu
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: Whakawhanaungatanga me Te Whakahaere Pākehā (Setup) {#domain-seller-setup-and-provider-configuration}

He addon o te Domain Seller e hoki ana ki te whakamahi i he mātakitaki whai ara (guided setup wizard) ka whakawhakarite i a koe i ngā mahi katoa e tika ana. Ko tēnei manawa (page) e whakatakotoria i te whakatika o te mātakitaki (wizard flow) me te waiata pēke (configure) he rātou, i roto i te wā i roto i āhuatanga atu.

## Mga Wāhi Whakawhanaungatanga (Requirements) {#requirements}

- **Multisite Ultimate** v2.4.12 au takaha (or mōhiamo) ki te whakatau, e whakawhanake ana i te whānau wāhi (network-activated).
- **PHP** 7.4+
- Ngā credentials API mō tētahi registrar e whai tika.

## Mātakitaki Whakahaere Wāhi Tū (First-run setup wizard) {#first-run-setup-wizard}

Ka whakawhanake i te mātakitaki whakamahinga (setup wizard) i te wā i runga i te wā i roto i te wā i whakaatu i te plugin i te wā i whakatau ana i te network. E tika ana i a ia i ngā wā katoa i te **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Taiao 1 — Whakarite tētahi pūwhiri (Choose a provider) {#step-1--choose-a-provider}

Whakarite te registrar (registrar) e tino e hiahia koe ki te whai. Ngā tuatahi:

| Pūwhiri (Provider) | Whakahaere DNS | Privacy WHOIS |
|---|---|---|
| OpenSRS | Ae | Ae |
| Namecheap | Reo | Ae (WhoisGuard, tinana) |
| HostAfrica | Ae | Ae (ID protection) |
| Openprovider | Ae | Ae |
| Hostinger | Via core Hostinger domain mapping mō ngā domain e whai hoahoa ana | Ae |
| GoDaddy | Reo | Reo |
| ResellerClub | Ae | Reo |
| NameSilo | Reo | Reo |
| Enom | Ae | Reo |

### Taiao 2 — Whakarite ngā credentials (Enter credentials) {#step-2--enter-credentials}

He pūwhiri katoa e hōtuitia i āhua o ngā credential:

**OpenSRS** — Username me private key (mōhiamo mai i te OpenSRS Reseller Control Panel).

**Namecheap** — Username me API key (mōhiamo mai i Account › Tools › API Access).

**HostAfrica** — Domains Reseller API endpoint me ngā credential mō te module o reseller o HostAfrica. E ko atu pūwhiri sandbox endpoint e whakatakita anō; whakamārama ana ki te whakamārama (test) me ngā chakahake (read-only checks) safe i roto i te whakahaere registration live.

**Openprovider** — Username me password me API access e whakatau ana. He pūwhiri sandbox optional, he heke (default customer handle) optional ka taea te whakamahi anō mō ngā registration.

**Hostinger** — Tōken hPanel shared o Hostinger mPanel, i te core integration. Ko te tōken o teake ana ki te whakatāwhitanga o domain core me ngā mahi o te Whakamahi Domain Seller.

**GoDaddy** — API key me secret (tō developer.godaddy.com)

**ResellerClub** — Reseller ID me API key (tō control panel o ResellerClub)

**NameSilo** — API key (tō namesilo.com › Account › API Manager)

**Enom** — Account ID me tōken account

Ki te whakaaro i **Sandbox mode** inā e taea, kia whakamārama ki te mōhiamo o te whare test o te provider mō te whakamātautanga i roto i te wārie.

### Te Wiki 3 — Whakamārama te konektanga {#step-3--test-the-connection}

Whakatipu i **Test Connection**. Ko te wizard e rite ai he API call lightweight kia whakaoti i ngā credential me te konektanga. Whakawātea ahau ngā akorua (credentials) katoa mō te whakamohana i te konei mō te whakatika i ngā pahi i roto i te wā.

### Te Wiki 4 — Whakarite TLDs {#step-4--import-tlds}

Whakatipu i **Import TLDs** kia whakatū ai katoa ngā TLDs me ngā whakaingo pricing wholesale mai te provider e konei. Ko tēnei e whakatō i te list o TLDs e whakamahia mō ngā domain products. He taea te whakawhanaunga (import) ki te 30–60 sekonden mo ngā providers e hune ake ngā catalog o TLDs nui.

He pēnei te whakarite ana i ngā TLDs automatically inā i tahi pō via he scheduled cron job.

### Te Wiki 5 — Whakawhanaunga Domain Product {#step-5--create-a-domain-product}

Ko te wizard e whakamaoritanga he domain product catch-all default me he markup o 10%. He taea ai koe te whakarereke i tēnei product immediately, apo he whakahoki ki te whakaputa ngā products manu manu under **Ultimate Multisite › Products**.

Kia whakaaro i [Domain Products and Pricing](./domain-products) mō te panduan katoa o te configuration o te product.

---

## Whakarite Anō i te Provider {#reconfiguring-a-provider}

Pāinga ki **Network Admin › Ultimate Multisite › Settings › Domain Seller** (apo whakatipu i **Settings** i te list o plugin).

Ko te settings page e whai ana ki:

- **Whakarite i te whero** — whakaroa ko te whānaratou o te whānaratou (toggle) o te āhuatanga katoa on/off
- **Pākehā Whakamahi** — te pūtake whakamahinga mo te whiriwhiri domain me mga aua hou
- **Māori TLDs mō te whiriwhiri** — mā te tētahi aua (how many) o TLDs kia whakačere i roto i te whiriwhiri o te mea e whai ake nei; ngā aua nui hei whakaatu i aua optiona nui ake engari whakamāhi atu
- **Whakawātea cache** — mōna ora ko te whakatau o te whakatika (cache) o te whakahaupūatanga me te whakaingoa o te mea; ngā aua iti hei whaiaro māhui atu i te API calls

- **Karakia mga aua domain** — he link tikanga ki te list o mga aua
- **Whakawātea mga pūtake** — e whakakotahi ai i te Integration Wizard kia āwhitu ana ko mga pūtake (providers) ahau, hei whaiaro atu akorua

### Whakapehe i aua TLDs manuahi {#adding-a-second-provider}

I te settings page, whakatipu i **Sync TLDs** i runga i te ao (next to) i aua pūtake e karakia ki te whakatā (pull) i ngā whakaingoa o te whakaingoa hou. He tino pai tēnei i raro i te whakatau ahau i te pūtake i whakawāke i ngā whakaingoa wholesale pricing pei i te whero ana mga TLDs hou.

---

## Logs (Whakamārama) {#syncing-tlds-manually}

Ko koetau i aua pūtake e whakatika ki te channel log o loro. Ko ngā logs he tino whakamohakohia i raro i **Network Admin › Ultimate Multisite › Logs**:

| Tinana kanalo | Ngā mea i roto |
|---|---|
| `domain-seller-registration` | Ngā whakatika registration katoa (whakamārama me pātaka) |
| `domain-seller-renewal` | Ngā uta o te mahi renewal |
| `domain-seller-opensrs` | Mahi API OpenSRS raw |
| `domain-seller-namecheap` | Mahi API Namecheap raw |
| `domain-seller-hostafrica` | Mahi API HostAfrica raw |
| `domain-seller-openprovider` | Mahi API Openprovider raw |
| `domain-seller-hostinger` | Mahi API Hostinger raw |
| `domain-seller-godaddy` | Mahi API GoDaddy raw |
| `domain-seller-resellerclub` | Mahi API ResellerClub raw |
| `domain-seller-namesilo` | Mahi API NameSilo raw |
| `domain-seller-enom` | Mahi API Enom raw |

---

## Ngā whakamārama mō te kaha o ngā pūtaiao (Provider capability notes) {#logs}

Kua kore katoa i ngā API o ngā registrar e whero ngā mahi (operations) āhua. Ka whero ai te addon ngā mahi e kore e taea, me whakamahi i ngā pātaka admin (admin-facing errors) mō te whakatika, i roto i te wā i ka pātaka i te pai.

- **HostAfrica** e whai ana i te mahi reseller workflow katoa, ā, he whakatū (lookup), sync o TLD/pricing, registration, renewal, transfer, updates o nameserver, DNS records, EPP codes, registrar lock, me te whakapāke ID protection.
- **Openprovider** e whai ana i sync o TLD reseller-priced, registration, renewal, transfers, updates o nameserver, DNS zones, EPP codes, registrar lock, me WHOIS privacy. E whakamahi i he bearer token kua ora (short-lived) kua whakaora ai te addon i te pai.
- **Hostinger** e whai ana i availability search, registration, portfolio lookup, updates o nameserver, registrar lock, me WHOIS privacy mō te shared hPanel API token. Ka kore te Domains API o Hostinger e whero ngā pricing reseller/wholesale, inbound transfer, renewal explicit (whakamārama), or EPP-code retrieval; ka auto-renew ango te renewal naku.
