---
title: Produkti Domini u Prezzijiet
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Prodotti e Prezzi di Dominio

I prodotti di dominio ti permettono di controllare i prezzi, i TLD (Top-Level Domains), la privacy WHOIS e la selezione del provider. Ogni prodotto di dominio è un prodotto Ultimate Multisite standard con una scheda extra **Domain Settings**.

## Creare un prodotto di dominio

1. Vai a **Network Admin › Ultimate Multisite › Products**
2. Clicca su **Add New** (Aggiungi Nuovo)
3. Imposta il tipo di prodotto su **Domain** (Dominio)
4. Configura la scheda **Domain Settings** (Impostazioni Dominio) (vedi sotto)
5. Salva

I prodotti di dominio appaiono con un badge viola **Domain** nella lista dei prodotti e possono essere filtrati utilizzando la scheda **Domain Products**.

## Scheda impostazioni dominio

### Provider

Seleziona quale registrar gestisce la registrazione per questo prodotto. Di default, è impostato il **Default provider** (Provider predefinito) globale nelle impostazioni del Venditore di Dominio.

### TLD supportati

Lascia vuoto per creare un **catch-all product** (prodotto "tutto incluso") che si applica a tutti i TLD non corrispondenti ad altri prodotti.

Inserisci una lista separata da virgole dei TLD (ad esempio, `.com, .net, .org`) per creare un **TLD-specific product** (prodotto specifico per TLD) che si applica solo a quelle estensioni.

**Come funziona l'abbinamento dei prodotti:** Quando un cliente cerca un dominio, l'addon sceglie il prodotto corrispondente più specifico. Un prodotto con `.com` nella sua lista TLD ha la precedenza su un prodotto catch-all. Se non corrisponde nessun prodotto specifico per TLD, viene utilizzato il catch-all. Se non esistono prodotti, la ricerca del dominio non viene mostrata.

### Tipo di markup (Markup type)

Tre modalità controllano come viene calcolato il tuo prezzo al dettaglio dal costo wholesale:

| Modalità | Come funziona |
|---|---|
| **Percentage** (Percentuale) | Aggiunge una percentuale sul costo wholesale. Un markup del 20% su un dominio wholesale da $10 dà $12. |
| **Fixed markup** (Markup fisso) | Aggiunge un importo fisso in dollari. Un markup di $5 su un dominio da $10 dà $15. |
| **Fixed price** (Prezzo fisso) | Ignora completamente il costo wholesale. Si addebita sempre l'importo che inserisci. |

### Prezzi introduttivi

Abella l-offerta ta prezz discountati għall-prima annila. Istawla **Prezz introdutturi** (il-prezz tal-ann 1) separat mill-**Prezz ta rinewwizjoni** regolari (l-ann 2+). Il-klijenti jorxu l-bidda prezzijiet kollha klawża ta' checkout biex jgħid li għandu aspettatt għar-rinewwizjoni.

### Prettiviet WHOIS

Jipprogramma se jipprovvidi o meno protezzjoni ta' WHOIS għall-domeni li jitqrejru b'siġġġ u l-prodottu din.

| Istawilazzjoni | Ażjon |
|---|---|
| **Disabilitat** | Protezzjoni ta' WHOIS ma tiddirxsexxx jew ma tiattivaxxixxxx. |
| **Inkludut għall-awwel** | Protezzjoni ta' WHOIS titjattiva awtomatikament meta jitqrejru b'siġġ mill-registrazzjoni b'mument li ma tiddirxsexx. |
| **Ittarġib tal-klijent** | Tista' tista' checkbox tista' tiġi parir durante checkout. Istawla l-'Prezz ta' Prettiviet (Privacy price) biex jgħid per annila, jew aħjar it-0 biex tuffriha free. |

Għal Namecheap, protezzjoni ta' WHOIS tista' tiffrija WhoisGuard (ma tiddirxsexx). Għal OpenSRS, tista' tiffrija l-servizz ta' prettiviet ta' OpenSRS (tista' tkun għandha kost tal-wholesale).

---

## Import u sincronizzazzjoni tal-TLD

Il-prodotti ta' domeni jipprovvidu prezzijiet wholesale reġjali mill-provider li jkun konness. Biex dan jserva, il-TLDs (Top-Level Domains) għandhom jitqrejru.

- **Sincronizzazzjoni manuali:** Settings › Domain Seller › Sync TLDs (per provider)
- **Sincronizzazzjoni awtomatika:** Tiddirxsexx kwartali b'aħra via cron job f'koll il-provider li għandhom konfigurat.

Wara sincronizzazzjoni, tista' tmur għal tab ta 'Domain Settings' tal-prodott domenu kunsiddrat u tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista' tista'

| Event | Template ID |
|---|---|
| Domain registered | `domain_registered` |
| Domain renewed | `domain_renewed` |
| Renewal failed | `domain_renewal_failed` |
| Domain expiring soon | `domain_expiring_soon` |

---

## Admin: Registrazzjoni manuali tad-domeni

Biex tisaħħa domini b'kont proċedenti għall-klijenti biex ma jmur per il checkout:

1. Irriviż għal **Network Admin › Ultimate Multisite › Register Domain**
2. Sigli l-klijent u iġbedd ism id-domini
3. Iġbedd dettalji tagħha (ism, indirizz, telefona) biex tiddir l-informazzjoni tal-registrant
4. Klikka fuq **Register**

Il-rekord tal-domini jitcrea u jikelinkjat mal-kont tal-klijent.
