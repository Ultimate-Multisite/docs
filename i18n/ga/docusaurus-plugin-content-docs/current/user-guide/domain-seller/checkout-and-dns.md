---
title: Fíneán Fhíneamh agus DNS Chláir
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Déanamh ar Fholas agus Ar Chuidí DNS

## An fáil chun an domáin a chur i bhfolas {#the-domain-selection-checkout-field}

Is é an fáil **Domain Selection** (Seachtain Domáin) eolais ar chuid deiridh a leagan do chuidisteoirí an domáin. Addaigh é ar aon form fholais (checkout form) chun a bheith ag fholadh domáin a oiriúnach.

### Add an fáil i form fholais {#adding-the-field-to-a-checkout-form}

1. Déan cur isteach **Network Admin › Ultimate Multisite › Checkout Forms**
2. Lán an form fholais nó creoliath nua
3. Iar an editor fholais, cliceáil ar **Add Field** (Add Fáil)
4. Déan chun **Domain Selection** a bhaint as an liosta fáilí
5. Cuidigh an oifige (see leathanach seo)
6. Síocháin an form

### Oifige fáil {#field-options}

**Domain modes** — Déan chun conas na tabhairt a fheiceann chuidisteoirí a bheith ag fholadh. Is féidir linn a bheith ag fholadh nó ag teacht ar an t-amach go hiomlán:

| Mode | Cad é a dhéanann sé |
|---|---|
| **Subdomain** | Bú tá chuidisteoirí ag úsáid subdomain gréinne ar do ngrú (e.g., `mysite.yournetwork.com`). Níl aon cheangail ag fholadh. |
| **Register New Domain** | Beann an chuidisteoir ag iarraidh domán nua a chur i bhfolas agus a chur in áit tríd an provider atá agat. Usaíonn sé an cur chuig domáin a tá tú ag fholadh chun an t-amach a chur ar cheangail. |
| **Existing Domain** | Beann a chiallaíonn domáin atá tú ag fholadh a chur i bhfolas. Níl aon cheangail áirítear. Is é an domán ag cur in áit go hiomlán leat. |

**Default mode** — Nuair a bheith na triobhán modes seo ag fholadh, caithfidh an tab atá ag fholadh ar an chéad. Déan sé ag **Subdomain** chun cheangail domáin a bheith ag fholadh a bheith ag fholadh go hiomlán, nó **Register New Domain** chun cheangail a chur i bhfolas a chur in áit.

**Domain product** — Is féidir an fáil seo a chiallaigh ar cur chuig domáin a bhfuil sé ag fholadh ag cur chuig domán a shonraithe. Má níl é ag cur chuig, beann an addon ag iarraidh an cur chuig atá ag fholadh ar an TLD (Top-Level Domain) a bhféadfadh sé a chur ar cheangail.

### Fáil contact na chuidisteoirí {#registrant-contact-fields}

Nuair a bhíonn an chuidisteoir ag fholadh an tab **Register New Domain**, cur fholais contact na chuidisteoirí i form fholais in áit:

- Ainm ar Chuid (First name / Last name)
- E-mail (Email address)
- Áras (line 1, city, state/province, postal code, country)
- Lán phón (Phone number)

Gabháil ar an t-aithreachas de bhWordPress. Is é seo a gáirnéadaithe ag gcothromchais agus a chosaint go háirithe tríd an API de roinnt registrars. Tá na númacnaí telefáinn ag foirmeáil go hiomlán i format oiriathúil Eorpa (e.g., `+CC.NNN`) a bhfaigheann siad go mbeidh sé ag cur isteach ar an API de roinnt registrars.

### URL site atá ag cur isteach go háirithe {#auto-generated-site-url}

Nuair a bhíonn cluichí ag cur isteach nó ag cur mapadh domáin, tá an fáil URL site ag cur isteach go háirithe ón domáin a bhfaigheann siad. Níl aon cheannas ag cur isteach ar fáil URL seachtain.

### Cuid ar chuid ar chuid DNS {#search-behaviour}

Leineann na cluichí eolais (customers) an t-aithreachas de chuid domáin ón cur isteach tríd an curteoir **My Account**, ag cur iad ar an curteoir a bhfaigheann siad.

### Tíreanna ar chuid ar chuid ar chuid ar chuid {#customer-dns-management}

| Tíre | Uirlis |
|---|---|
| **A** | Mapadh an teachtaire (hostname) go dtí áit IPv4 |
| **AAAA** | Mapadh an teachtaire go dtí áit IPv6 |
| **CNAME** | Creoliad alias a bhíonn ag cur isteach ar áit eile |
| **MX** | Set an seirbhís mail exchange |
| **TXT** | Cur isteach SPF, DMARC, curteoir, nó teachtaire eile |

### Cén chuid deatúlaí (providers) a chur ar fáil curteoir DNS? {#supported-record-types}

Is curann féin (DNS management) (róidh, léamh, dtalaí) ar fáil le **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica**, agus **Openprovider**. Caithfidh domáin Hostinger a bheith ag athrú na nàimeasair (nameservers) trí Domán Seller; curann an t-aonach (integration) deamascáil domáin a bhí ar chuid deamascála (hosted domains) an t-aonach ciorcalta (core). Déanann Namecheap, GoDaddy, agus NameSilo na stát agus na n-aonacht (expiry information) domáin, ach caithfidh DNS a bheith ag curraí go díreach i bhfeidmheas an chontail (registrar's control panel).

### Ciorcalta DNS deamascála (Default DNS records) {#which-providers-support-dns-management}

Is féidir leat cur síos ciorcalta DNS deamascála atá ag athrú go dtí an t-aonach nuair a bhíonn domán ag roinnt. Déanann tú cur isteach i **Settings › Domain Seller › Default DNS Records**.

Tá cur síos na h-aonachtaí (default record values) ag cur fáil ar duine:

| Token | Athrú go |
|---|---|
| `{DOMAIN}` | An domán a bhí roinnt (e.g., `example.com`) |
| `{SITE_URL}` | An URL de WordPress atá ar chuid an domáin chuid ischtir |

**Eagraíocht — cur an apex domain agus www go dtí IP an t-aonach:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: léamh agus léamh DNS {#default-dns-records}

Can na chuidí aistriú (network admins) léamh agus léamh ciorcalta DNS ar aon domán chuid ischtir trí cur an t-aonach deamascála (domain's edit page) i **Network Admin › Ultimate Multisite › Domains**.
