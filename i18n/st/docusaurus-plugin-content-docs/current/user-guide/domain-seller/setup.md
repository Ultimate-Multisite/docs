---
title: Ho lula le ho fana ka ho setseha le ho fana ka ho fana
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: Setup le Setsopebo le Provider {#domain-seller-setup-and-provider-configuration}

Le addon ya Domain Seller e le setsopebo le wizard a tšoa a o fana'a ho fana'a ka se a fetola ka se a fetola. Le lapa le le thisa e fetola le flow ya wizard le how u fetola kapa ho fetola le provider fa nako.

## Boitsopebo {#requirements}

- **Multisite Ultimate** v2.4.12 kapa le faka, le fana'a ka se a fetola
- **PHP** 7.4+
- Credentials ya API mo le fana'a le registrar fa le faka a le fana'a

## Wizard a setsopebo ho tla {#first-run-setup-wizard}

Le wizard a setsopebo e tla fana'a ka tšoa ka nako o fetola ka se a fetola plugin. E fana'a ka nako fa **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Step 1 — Fetola le provider {#step-1--choose-a-provider}

Fetola le registrar o fetola o le fetola. O fana'a:

| Provider | Le fetola DNS | Privacy WHOIS |
|---|---|---|
| OpenSRS | E | E |
| Namecheap | A | E (WhoisGuard, fa free) |
| HostAfrica | E | E (ID protection) |
| Openprovider | E | E |
| Hostinger | Via core Hostinger domain mapping mo hosted domains | E |
| GoDaddy | A | A |
| ResellerClub | E | A |
| NameSilo | A | A |
| Enom | E | A |

### Step 2 — Fetola credentials {#step-2--enter-credentials}

Ka le provider, go na le fields ya credentials e fapaneni:

**OpenSRS** — Username le private key (mo le OpenSRS Reseller Control Panel)

**Namecheap** — Username le API key (mo Account › Tools › API Access)

**HostAfrica** — Domains Reseller API endpoint le credentials mo module ya HostAfrica reseller. A re fa a na sandbox endpoint e fetola; fetola ka checks a safe read-only fa a fetola registrations a leboga.

**Openprovider** — Username le password le fana'a ho fetola API access. Sandbox mode e fetola, le default customer handle o fetola e fetola mo registration.

**Hostinger** — Token hPanel API shared from core Hostinger integration. Same token powers mapping for main domain and registration of Domain Sellers.

**GoDaddy** — API key le secret (from developer.godaddy.com)

**ResellerClub** — Reseller ID le API key (from ResellerClub control panel)

**NameSilo** — API key (from namesilo.com › Account › API Manager)

**Enom** — Account ID le token hwa

Check **Sandbox mode** where it is available to test against the provider's environment ya go live.

### Step 3 — Test the connection {#step-3--test-the-connection}

Click **Test Connection**. The wizard will send a small API call to check credentials and if things are connected. Fix any problems with your credentials before you continue.

### Step 4 — Import TLDs {#step-4--import-tlds}

Click **Import TLDs** to pull all available TLDs le wholesale pricing from the provider that is connected. This will fill in the list of TLDs used by domain products. The import may take 30–60 seconds for providers who have big lists of TLDs.

TLDs will also be updated automatically once per day via a scheduled cron job.

### Step 5 — Create a domain product {#step-5--create-a-domain-product}

The wizard will create a default catch-all domain product with a 10% markup. You can change this product right away or skip it and make products by hand under **Ultimate Multisite › Products**.

See [Domain Products and Pricing](./domain-products) for the full guide on how to set up your products.

---

## Reconfiguring a provider {#reconfiguring-a-provider}

Go to **Network Admin › Ultimate Multisite › Settings › Domain Seller** (or click **Settings** in the plugin list).

The settings page will have:

- **Enable domain selling** — toggling this feature on or off.
- **Default provider** — the provider that is used for searching domains and new products.
- **Max TLDs per search** — how many TLDs (like .com, .org) to check when a customer searches; higher numbers mean more options but they take longer.
- **Availability cache duration** — how long we keep the availability and pricing results saved; lower values are more exact but make us call the API more often.
- **Manage domain products** — a quick way to get to the Products list.
- **Configure providers** — this opens the Integration Wizard so you can add or change your providers.

### Adding a second provider {#adding-a-second-provider}

Click on **Configure providers** and run the wizard again for the new registrar. You can have several providers set up at the same time. Assign each domain product to a specific provider, or just leave it on the default one.

### Syncing TLDs manually {#syncing-tlds-manually}

On the settings page, click on **Sync TLDs** next to any configured provider so you can get the newest pricing. This is good after a provider changes wholesale prices or adds new TLDs.

---

## Logs {#logs}

Each provider writes its own log channel. You can see the logs under **Network Admin › Ultimate Multisite › Logs**:

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | Boitshwaro joikanyetso (boikanyetso le boikanyetso) joikanyetso (boikanyetso le boikanyetso) joikanyetso (boikanyetso le boikanyetso)

| `domain-seller-registration` | Boitshwaro joikanyetso (boikanyetso le boikanyetso) joikanyetso (boikanyetso le boikanyetso) joikanyetso (boikanyetso le boikanyetso)

| `domain-seller-renewal` | Boitshwaro joikanyetso (boikanyetso le boikanyetso) joikanyetso (boikanyetso le boikanyetso) joikanyetso (boikanyetso le boikanyetso)

| `domain-seller-opensrs` | Boitshwaro joikanyetso (boikanyetso le boikanyetso) joikanyetso (boikanyetso le boikanyetso) joikanyetso (boikanyetso le boikanyetso)

| `domain-seller-namecheap` | Boitshwaro joikanyetso (boikanyetso le boikanyetso) joikanyetso (boikanyetso le boikanyetso) joikanyetso (boikanyetso le boikanyetso)

| `domain-seller-hostafrica` | Boitshwaro joikanyetso (boikanyetso le boikanyetso) joikanyetso (boikanyetso le boikanyetso) joikanyetso (boikanyetso le boikanyetso)

| `domain-seller-openprovider` | Boitshwaro joikanyetso (boikanyetso le boikanyetso) joikanyetso (boikanyetso le boikanyetso) joikanyetso (boikanyetso le boikanyetso)

| `domain-seller-hostinger` | Boitshwaro joikanyetso (boikanyetso le boikanyetso) joikanyetso (boikanyetso le boikanyetso) joikanyetso (boikanyetso le boikanyetso)

| `domain-seller-godaddy` | Boitshwaro joikanyetso (boikanyetso le boikanyetso) joikanyetso (boikanyetso le boikanyetso) joikanyetso (boikanyetso le boikanyetso)

| `domain-seller-resellerclub` | Boitshwaro joikanyetso (boikanyetso le boikanyetso) joikanyetso (boikanyetso le boikanyetso) joikanyetso (boikanyetso le boikanyetso)

| `domain-seller-namesilo` | Boitshwaro joikanyetso (boikanyetso le boikanyetso) joikanyetso (boikanyetso le boikanyetso) joikanyetso (boikanyetso le boikanyetso)

| `domain-seller-enom` | Boitshwaro joikanyetso (boikanyetso le boikanyetso) joikanyetso (boikanyetso le boikanyetso) joikanyetso (boikanyetso le boikanyetso)

---

## Notes ka Boitshwaro (Provider capability notes) {#provider-capability-notes}

Ho na le ntlha lehle ka API ea registrar e tsoela litšomo tse di fetang. Addon e fana ka litšomo tsa ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho
