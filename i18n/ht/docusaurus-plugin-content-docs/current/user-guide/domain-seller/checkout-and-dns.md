---
title: Chantre Checkout ak DNS Kliyan
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Gestion du Champ de Paiement et DNS Client

## Le champ de sélection de domaine Checkout {#the-domain-selection-checkout-field}

Le champ **Domain Selection** (Sélection de Domaine) est un élément de paiement qui donne aux clients le choix de la manière dont ils veulent obtenir le nom de domaine de leur site. Ajoutez-le à n'importe quel formulaire de paiement pour activer la vente de domaines.

### Ajouter le champ à un formulaire de paiement {#adding-the-field-to-a-checkout-form}

1. Allez dans **Network Admin › Ultimate Multisite › Checkout Forms**
2. Ouvrez ou créez un formulaire de paiement
3. Dans l'éditeur de paiement, cliquez sur **Add Field** (Ajouter un Champ)
4. Choisissez **Domain Selection** dans la liste des champs
5. Configurez les options du champ (voir ci-dessous)
6. Enregistrez le formulaire

### Options du champ {#field-options}

**Domain modes** (Modes de domaine) — Choisissez quels onglets le client voit. Chaque mode peut être activé ou désactivé indépendamment :

| Mode | Ce que ça fait |
|---|---|
| **Subdomain** (Sous-domaine) | Le client utilise un sous-domaine gratuit sur votre réseau (ex: `mysite.votre-reseau.com`). Aucun paiement requis. |
| **Register New Domain** (Enregistrer un nouveau domaine) | Le client recherche un nouveau domaine et l'enregistre via votre fournisseur configuré. Utilise le produit de domaine correspondant pour la tarification. |
| **Existing Domain** (Domaine existant) | Le client mappe un domaine qu'il possède déjà. Pas de frais d'enregistrement. Le domaine est automatiquement mappé à son site. |

**Default mode** (Mode par défaut) — Lorsque les trois modes sont activés, lequel s'ouvre en premier ? Réglez sur **Subdomain** pour garder l'enregistrement du domaine optionnel, ou sur **Register New Domain** pour encourager les achats.

**Domain product** (Produit de domaine) — Optionnellement, attachez ce champ à un produit de domaine spécifique. Si ce n'est pas défini, le module ajoute automatiquement le produit correspondant en fonction de l'extension TLD que le client recherche.

### Champs de contact du titulaire {#registrant-contact-fields}

Lorsque le client sélectionne l'onglet **Register New Domain** (Enregistrer un nouveau domaine), le formulaire de paiement ajoute les champs de contact du titulaire directement dans le formulaire :

- Prénom / Nom
- Adresse (ligne 1, ville, état/province, code postal, pays)
- Numéro de téléphone

Sa yo wo mande sa yo mande pou tout registray ak valide anvan API registration an fèt. Numè telefòn yo otomatikman fòme nan fòma entènasyonal `+CC.NNN` ki genyen nan registray yo bezwen.

### Auto-generated site URL (URL sit la ki te jwenn otomatikman) {#auto-generated-site-url}

Lè yon kliyan ap reyegrè oswa map yon domain, chyen URL sit la se ranpli otomatikman soti nan domain ki chwazi a. Kliyan pa bezwen ranpli yon lòt fye URL pou tèt yo.

### Comportman rechèch (Search behaviour) {#search-behaviour}

- Disponibilite domain an verifiye an tan reyèl ak AJAX pandan ou ap tape
- Sugesyon TLD alternatif parie lè domain pèfòman an pa disponib
- Pri fonksyone an lavi epi li montre klè (pri reyegrè, pri renouvèl, sou frè konfidans WHOIS opsyonèl)
- Kòd bon ti bagay (Coupon codes) ap aplike pou pwodwi domain menm jan ak nenpòt lòt pwodwi

**Aji pou amelyore repons rechèch la:**

```php
// Augmente delai debounce (millisecond) pou diminye apel API sou koneksyon ki dous
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Ajoute chyen koutim nan fòm rechèch domain la:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Nòt atisyèl',
    ];
    return $fields;
});
```

---

## Jere DNS Kliyan an (Customer DNS management) {#customer-dns-management}

Kliyan yo ka jere enskripsyon DNS pou domain ki reyegrè yo soti nan paj **My Account**, anba entansyon domain la.

### Tip rezòm ki sipòte? {#supported-record-types}

| Tip | Itilizasyon |
|---|---|
| **A** | Map non-sit la ak adrès IPv4 |
| **AAAA** | Map non-sit la ak adrès IPv6 |
| **CNAME** | Kreye yon alias ki pointe nan yon lòt non-sit |
| **MX** | Mete sèvè echange imèl |
| **TXT** | Ajoute SPF, DMARC, verifikasyon, oswa lòt rezòm tèks |

### Ki pwofòvwa yo sipòte jere DNS? {#which-providers-support-dns-management}

Jeremanaj DNS (ajouter, modifier, supprimer des enregistrements) disponib ak **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica**, ak **Openprovider**. Ouè domèn **Hostinger** ka fè mete chanjman sou nameservers yo atravè Domain Seller; DNS records pou domèn ki anjeneral (hosted domains) ap jere pa integrasyon domain-mapping nèt Hostinger la. Domèn Namecheap, GoDaddy, ak NameSilo montre status ak enfòmasyon expiration men DNS dwe jere dirèkteman nan panel kontwòl registʁatè a.

### Enskripsyon DNS dekouvè (Default DNS records) {#default-dns-records}

Ou ka configure default DNS records ki ap aplike otomatikman lè yon domèn ap ranpòte. Ale nan **Settings › Domain Seller › Default DNS Records**.

Valè record default yo sipò twa token:

| Token | Ranplase ak |
|---|---|
| `{DOMAIN}` | Non domèn ki te ranpòte a (egzanp, `example.com`) |
| `{SITE_URL}` | WordPress site URL pou sit la kliyan an |

**Egzanp — pote apex domain ak www nan IP sèvè ou:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: wè ak edite DNS {#admin-viewing-and-editing-dns}

Admin rezo yo ka wè ak edite DNS records pou nenpòt domèn kliyan nan paj edisyon domèn an nan **Network Admin › Ultimate Multisite › Domains**.
