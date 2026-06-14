---
title: Ażżumizzjoni u Konfigurazzjoni tal-Provider
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
## Requisiti

- **Multisite Ultimate** v2.4.12 o a kumpli aktar (network-activated)
- **PHP** 7.4+
- Credenziali API għal aktar minn unit registrar supportat

## Setup wizard tal-prim
Il-setup wizard jfilża' awtomatik l-prim iż-żmien li tagħmel aktar (network-activate) il-plugin. Huwa disponibbli ukoll fil-istess ħin mill-**Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Iż-Żgier 1 — Iżgħar provider
Iżgħar il-registrar li tista' tgħall-li. Opzijonijiet supportati:

| Provider | Aġġmont DNS | Privacy WHOIS |
|---|---|---|
| OpenSRS | Sì | Sì |
| Namecheap | La | Sì (WhoisGuard, free) |
| HostAfrica | Sì | Sì (ID protection) |
| Openprovider | Sì | Sì |
| Hostinger | Attra mappatura tal-domeni ta' Hostinger core għall-domeni mhux hostati | Sì |
| GoDaddy | La | La |
| ResellerClub | Sì | La |
| NameSilo | La | La |
| Enom | Sì | La |

### Iż-Żgier 2 — Inqed kredenziali
Kull provider għandu campi differenti tal-kredenzjali:

**OpenSRS** — Username u private key (m'il-OpenSRS Reseller Control Panel)

**Namecheap** — Username u API key (min Account › Tools › API Access)

**HostAfrica** — Endpoint API ta' Domains Reseller u kredenzjali min il moduli ta' reseller ta' HostAfrica. M'għandna x-xem endpoint sandbox separat dokumentat għal jan; test b suqijiet qoro l-għażla (read-only checks) b'mod aħjar qabel ma tqed l-registrazzjonijiet aktivi.

**Openprovider** — Username u password b API access attivat. Mod sandbox opzjonali jista' jintistella bi Openprovider sandbox API, u handle tal-klijent difiniti opzjonali jista' jiġi riutilizzat għall-registrazzjonijiet.

**Hostinger** — Token hPanel API condiviso tal-token ta l-API tal-hPanel ta Hostinger. Illi token hu jappo mappatura tal-domini primari u operazzjonijiet ta registrazzjoni tal-Domain Seller.

**GoDaddy** — API key u secret (min developer.godaddy.com)

**ResellerClub** — Reseller ID u API key (min il pannell di controllo ta' ResellerClub)

**NameSilo** — API key (min namesilo.com › Account › API Manager)

**Enom** — Account ID u API token

Kontrolla l-**Sandbox mode** li jkun disponibbli biex ti testi kontra l-ambiente test tal-provider qabel ma tivverifika.

### Istop 3 — Test il-konekkjjoni

Clicka su **Test Connection**. Il-wizard jura l-API call leġjiet biex jverifika d-dettail u l-konekkjittività. Ixxi xi problemi ta d-dettail qabel ma tmur avanti.

### Istop 4 — Importa TLDs

Clicka su **Import TLDs** biex tikkolli kull TLD disponibbli u il-prezzi wholesale mill-provider. Dan jippopola l-lista tal-TLDs li tsoġġebju għall-prodotti tal-domain. Il-import jista' jieħu 30–60 segwendi għall-provider biex jkun maħmur kollu ta TLDs.

Il-TLDs jiġu ri-sincizzati awtomatikament unit per ġurnata permezz ta cron job skedulata.

### Istop 5 — Crea un prodotto tal-domain

Il-wizard jieħu prodot tal-domain default li jipprovvidi għal kollha (catch-all) b markup ta 10%. Tista' tġib edittja dan il-prodott immedjatament jew tgħmli bypass u tgħmli prodotti manualment ta qudd **Ultimate Multisite › Products**.

Vidi [Domain Products and Pricing](./domain-products) għall-guida tal-konfigurazzjoni kollha tal-prodotti.

---

## Rikonfigurar il provider

Mura għandek għal **Network Admin › Ultimate Multisite › Settings › Domain Seller** (jew clicka su **Settings** fil-lista tal-pluginijiet).

Il-paġna tal-settings tista' jinkludi:

- **Abilitaw l-vendita tadomein** — attiva/disattiva il sistema tal-feature kolluċċa
- **Provider difiniti** — il provider li jomm użat għall-search ta tadomein u prodotti jiddefiniti
- **Max TLDs per search** — qed TLDs (Top-Level Domains) li jitsekka meta l-customer jagħmel search; valuri magħrupin għandhom jgħidu aktar opzioni iżda huma più lenti
- **Durata cache tal-availability** — qed l-muddasira biex nispeċċifika (cache) il-availability u il-prezzi; valuri bawdi huma aktar precisi iżda jgħadu API calls

- **Manage domain products** — link rapido għall-lista ta prodotti
- **Configure providers** — jiftavalja l-Integration Wizard biex tista' tismella jew tiskonfigura provider

### Aggiunga provider sekondarju

Iċ클ik fuq **Configure providers** u jorrun il-wizard għal registrar ġdid. Tista' tkun għandek provider multipli konfigurat flimhumiex. Issegna ogni tadomein product għal provider speċifiku, jew aħjarhu fuq difiniti.

### Synċronizza TLDs manualment

F'laqa' settings page, iċ클ik fuq **Sync TLDs** qabel jedd provider konfigurat biex tispira l-pricing aktar. Dan huwa utluq għal jekk il-provider xirja l-wholesale pricing jew jiddejna TLDs ġeddi.

---

## Logs (Log)

Kull provider jikkriva fl-log channel tiegħu. Il-logs jiddisponibbli taħt **Network Admin › Ultimate Multisite › Logs**:

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | B'tutte tentativi taħt registrazzjoni (success u falliment) |
| `domain-seller-renewal` | Risultati tal-job ta rinnovament |
| `domain-seller-opensrs` | Attivitaj OpenSRS API grezza |
| `domain-seller-namecheap` | Attivitaj API grezza ta Namecheap |
| `domain-seller-hostafrica` | Attivitaj API grezza ta HostAfrica |
| `domain-seller-openprovider` | Attivitaj API grezza ta Openprovider |
| `domain-seller-hostinger` | Attivitaj API grezza ta Hostinger |
| `domain-seller-godaddy` | Attivitaj API grezza ta GoDaddy |
| `domain-seller-resellerclub` | Attivitaj API grezza ta ResellerClub |
| `domain-seller-namesilo` | Attivitaj API grezza ta NameSilo |
| `domain-seller-enom` | Attivitaj API grezza ta Enom |

---

## Nota fuq il kapasitajiet tal-provider

Middum ma kulle API ta registrar jipprovvidi l-istess operazzjonijiet. L-addon juri l-operazzjonijiet li ma jkun imminenti b'mod differu, b'erriċedji chi jintaraw għall-admin invece tal-falla leqso.

- **HostAfrica** jipproxxamma l-workflow ta reseller aktar widdiment, inklu l-lookup, s-sync ta TLD/prezzijiet, registrazzjoni, rinnovament, trasferiment, aggiorna ta dns servers, record DNS, codi EPP, lock tal-registrar u protezzjoni tal-ID.
- **Openprovider** jipproxxamma s-sync ta TLD b prezz ta reseller, registrazzjoni, rinnovament, trasferimenti, aggiorna ta dns servers, zone DNS, codi EPP, lock tal-registrar u privacy WHOIS. Jauthentifika b token bearer bejn ħsara (short-lived) li l-addon jiffresca awtomatikament.
- **Hostinger** jipproxxamma s-search ta disponibbiltà, registrazzjoni, lookup ta portfolio, aggiorna ta dns servers, lock tal-registrar u privacy WHOIS b token API ġdid (shared hPanel API token). L-API pubblika ta Hostinger għandha ma jurix prezzijiet ta reseller/wholesale, trasferimenti inbound, rinnovament espliċitu, jew is-retrieval ta codi EPP; il-rinnovamenti jintgħinu awtomatikament.
