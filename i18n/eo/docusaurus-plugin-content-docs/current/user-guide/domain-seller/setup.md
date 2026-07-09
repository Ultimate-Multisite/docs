---
title: Konfigurado kaj Providanto
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domenverkäufer: Konfiguracio kaj Providanto {#domain-seller-setup-and-provider-configuration}

La addon Domain Seller venas kunacondigasita setup wizard, kiu gidas vin per ĉiuj necesaj paŝoj. Ĉi tiu paĝo mastrumas la flocon de la wizard kaj kiel konfigurigi aŭ rekonfigurigi providantojn post kiam ĝi estas faktita.

## Requisitoj {#requirements}

- **Multisite Ultimate** v2.4.12 aŭ pli verio, aktiva per retoj
- **PHP** 7.4+
- API kredencijoj por almenaŭ unu suportita registratora kompanio

## Setup wizard pri la unua fariĝo {#first-run-setup-wizard}

La setup wizard kionon aŭtomate la unven venas la unua fariĝa, kiam vi aktivas la plugin per la rdeto. Ĝi ankaŭ estas dispona ĉiam de **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Paŝto 1 — Elektu providanton {#step-1--choose-a-provider}

Elektu la registratoron, kun kiu vi volas konektiĝi. Subtenitaj opcioj:

| Providanto | DNS-menado | WHOIS-privaĵo |
|---|---|---|
| OpenSRS | Ja | Ja |
| Namecheap | Ne | Ja (WhoisGuard, libere) |
| HostAfrica | Ja | Ja (ID protekto) |
| Openprovider | Ja | Ja |
| Hostinger | Via mappado de kern-domeno Hostinger por alojnitaj domenoj | Ja |
| GoDaddy | Ne | Ne |
| ResellerClub | Ja | Ne |
| NameSilo | Ne | Ne |
| Enom | Ja | Ne |

### Paŝto 2 — Intru kredencojn {#step-2--enter-credentials}

Chakla providanto havas diversajn kredencaj kampojn:

**OpenSRS** — Nomutilisateur kaj privata ŝlosilo (dankaj de la OpenSRS Reseller Control Panel)

**Namecheap** — Nomutilisateur kaj API-chiavo (dankaj de Account › Tools › API Access)

**HostAfrica** — API-termino de Domenreseller kaj kredencoj de la HostAfrica reseller modulo. Ne ekzistas aparta sandbox-termino por nun; testu kun seguraj legetaj kontroloj antaŭ fari vivajn registrojn.

**Openprovider** — Nomutilisateur kaj ŝlosilo kun API-akceso aktiva. La opciona modo sandbox uzas la Openprovider sandbox API, kaj opcional defaulta kliento-manibro povas esti reutiligita por registroj.

**Hostinger** — La token hPanel API partajita de Hostinger, ven de la integracio n-core. La sama token funkcias mappado de dominios core kaj operacioj de registriĝo de Vendanto de Dominios.

**GoDaddy** — API key kaj sekretaj (de developer.godaddy.com)

**ResellerClub** — Reseller ID kaj API key (de la kontrolpanelo de ResellerClub)

**NameSilo** — API key (de namesilo.com › Account › API Manager)

**Enom** — Account ID kaj API token

Kontrole **Sandbox mode**, kie estas disponabla, por testare kontraŭ la testenvironment de la provizanto antaŭ ol fari ĝin aktiva.

### Paŝto 3 — Testu la konekton {#step-3--test-the-connection}

Kliko sur **Test Connection**. La wizard sendas ligera API-vokadon por verifi kredencojn kaj konektiveco. Fixu ĉian kredencajn problemo antaŭ continuado.

### Paŝto 4 — Importi TLD's {#step-4--import-tlds}

Kliko sur **Import TLDs** por tiri ĉiuj disponibilajn TLD's kaj wholesale-preco de la konektita provizanto. Tio plenumas la liston TLD's, uzata por domeno produktaj produktoj. La importo povas diri 30–60 sekvendojn por provizantoj kun grandaj TLD katalogo.

TLD's estas re-sinksit aŭtomate unufoje tian dies per programita cron jobo.

### Paŝto 5 — Krei domeno produkton {#step-5--create-a-domain-product}

La wizard kreas defaultan domenon produkton kun 10% maržo. Vi povas modifi tiun produkton tutej aŭ pasigi kaj krei produkto manuveble sub **Ultimate Multisite › Products**.

Vidui [Domain Products and Pricing](./domain-products) por la kompletan gvidanto de konfigurado de produktoj.

---

## Reconfigureti provizanton {#reconfiguring-a-provider}

Aliri al **Network Admin › Ultimate Multisite › Settings › Domain Seller** (aŭ kliku sur **Settings** en la liston pluginoj).

La konfigurita paĝo kontu:

- **Aktivi domainverkoop** — schalte die ganze Funktion ein/aus
- **Standardanbieter** — der Anbieter, der für Domain-Suchen und neue Produkte verwendet wird
- **Max TLDs pro Suche** — wie viele TLDs überprüft werden sollen, wenn ein Kunde sucht; höhere Werte zeigen mehr Optionen, sind aber langsamer
- **Dauer des Verfügbarkeitscaches** — wie lange die Verfügbarkeits- und Preisdaten gecacht werden sollen; niedrigere Werte sind genauer, erhöhen aber API-Aufrufe
- **Domainprodukte verwalten** — schneller Link zur Produkte-Liste
- **Anbieter konfigurieren** — öffnet den Integration Wizard, um Anbieter hinzuzufügen oder neu zu konfigurieren

### Einen zweiten Anbieter hinzufügen {#adding-a-second-provider}

Klicke auf **Anbieter konfigurieren** und führe den Wizard erneut für den neuen Registrar aus. Du kannst mehrere Anbieter gleichzeitig konfigurieren. Weise jedes Domainprodukt einem bestimmten Anbieter zu oder lass es auf dem Standardanbieter bleiben.

### TLDs manuell synchronisieren {#syncing-tlds-manually}

In der Einstellungen-Seite klicke neben jedem konfigurierten Anbieter auf **TLDs synchronisieren**, um die neuesten Preise abzurufen. Dies ist nützlich, nachdem ein Anbieter die Großhandelspreise aktualisiert oder neue TLDs hinzugefügt hat.

---

## Logs {#logs}

Jeder Anbieter schreibt in seinen eigenen Log-Kanal. Protokolle sind unter **Network Admin › Ultimate Multisite › Logs** einzusehen:

| Kanal de log | Konten |
|---|---|
| `domain-seller-registration` | ĉiuj registriĝoj (sukceso kaj ne-sukceso) |
| `domain-seller-renewal` | rezultoj de la jobo de renovigo |
| `domain-seller-opensrs` | raw OpenSRS API aktività |
| `domain-seller-namecheap` | raw Namecheap API aktività |
| `domain-seller-hostafrica` | raw HostAfrica API aktività |
| `domain-seller-openprovider` | raw Openprovider API aktività |
| `domain-seller-hostinger` | raw Hostinger API aktività |
| `domain-seller-godaddy` | raw GoDaddy API aktività |
| `domain-seller-resellerclub` | raw ResellerClub API aktività |
| `domain-seller-namesilo` | raw NameSilo API aktività |
| `domain-seller-enom` | raw Enom API aktività |

---

## Notoj pri la kapablo de la providanto {#provider-capability-notes}

Ne ĉiuj registratoraj API ofres la saman operaciojn. La addon montras neoffortajn operaciojn per clarajn erarojn por administristoj en sto, en sto nefeli silencie.

- **HostAfrica** suportas la plej malgrandan vivan reselerojn fluksen, inkluzive serĉon, TLD/preco sinkron, registriĝon, renovigon, transferejon, nameserverej aktualizajn, DNS-registrojn, EPP kodojn, registratorlockon kaj ID protektion.
- **Openprovider** suportas reselerojn prečordigitan TLD sinkron, registriĝon, renovigon, transfereojn, nameserverej aktualizajn, DNS-zonojn, EPP kodojn, registratorlockon kaj WHOIS-privatecon. Ĝi autentikas per maldaŭran bearer token, kiun la addon aŭtomate reinfresas.
- **Hostinger** suportas disponibilitaj serĉojn, registriĝon, portfolion serĉon, nameserverej aktualizajn, registratorlockon kaj WHOIS-privatecon per la partaj hPanel API token. La publica Hostinger Domains API ne ofres reselerojn/wholesale precojn, invenan transferejon, esplicitian renovigon aŭ EPP-kodo akvizicion; renovigoj estas aŭtomate reinfresitaj nur.
