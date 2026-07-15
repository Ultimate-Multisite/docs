---
title: Konfigirasyon ak Pwovizyon
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Vendeur de Domaine : Configuration et Fournisseurs

L'addon Domain Seller vient avec un assistant d'installation guidé qui vous accompagne à travers chaque étape nécessaire. Cette page couvre le déroulement de l'assistant et comment configurer ou reconfigurer les fournisseurs après.

## Exigences {#requirements}

- **Multisite Ultimate** v2.4.12 ou plus récent, activé sur réseau
- **PHP** 7.4+
- Identifiants API pour au moins un registraire pris en charge

## Assistant d'installation initial {#first-run-setup-wizard}

L'assistant d'installation se lance automatiquement la première fois que vous activez le plugin sur votre réseau. Il est également disponible à tout moment via **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Étape 1 — Choisir un fournisseur {#step-1--choose-a-provider}

Sélectionnez le registraire que vous voulez connecter. Options prises en charge :

| Fournisseur | Gestion DNS | Confidentialité WHOIS |
|---|---|---|
| OpenSRS | Oui | Oui |
| Namecheap | Non | Oui (WhoisGuard, gratuit) |
| HostAfrica | Oui | Oui (Protection ID) |
| Openprovider | Oui | Oui |
| Hostinger | Via la cartographie de domaine principale Hostinger pour les domaines hébergés | Oui |
| GoDaddy | Non | Non |
| ResellerClub | Oui | Non |
| NameSilo | Non | Non |
| Enom | Oui | Non |

### Étape 2 — Entrer les identifiants {#step-2--enter-credentials}

Chaque fournisseur a des champs d'identifiants différents :

**OpenSRS** — Nom d'utilisateur et clé privée (depuis le Panneau de contrôle Reseller OpenSRS)

**Namecheap** — Nom d'utilisateur et clé API (depuis Compte › Outils › Accès API)

**HostAfrica** — Point de terminaison API du reseller de domaines et identifiants depuis le module reseller HostAfrica. Aucun point de terminaison sandbox séparé n'est documenté actuellement ; testez avec des vérifications en lecture seule sécurisées avant d'exécuter des enregistrements réels.

**Openprovider** — Nom d'utilisateur et mot de passe avec accès API activé. Le mode sandbox optionnel utilise l'API sandbox Openprovider, et un identifiant client par défaut optionnel peut être réutilisé pour les enregistrements.

**Hostinger** — Token hPanel Hostinger ki API pou integrasyon kòr Hostinger la. Menm token sa ki fòse map domain kòr ak opèrasyon registrasyon Domain Seller.

**GoDaddy** — API key ak secret (soti nan developer.godaddy.com)

**ResellerClub** — Reseller ID ak API key (soti nan panel kontwòl ResellerClub la)

**NameSilo** — API key (soti nan namesilo.com › Account › API Manager)

**Enom** — Account ID ak API token

Kontwe **Sandbox mode** kote li disponib pou w teste kont pwofòvè a anvan ou lanse lavi reyèl.

### Etap 3 — Test koneksyon an {#step-3--test-the-connection}

Klike sou **Test Connection**. Wizard la voye yon ti apèl API ki fèt pou verifye kredyansyo ak konektivite. Repare nenpòt pwoblèm ak kredyansyo anvan ou kontinye.

### Etap 4 — Import TLDs {#step-4--import-tlds}

Klike sou **Import TLDs** pou w tire tout TLD yo disponib ak pri wholesale soti nan pwofòvè ki konekte a. Sa ap ranpli lis TLD sa ki itilize pou pwodwi domain yo. Import la ka pran 30–60 segond pou pwofòvè ki gen gwo katalò TLD.

TLDs yo tou re-synced otomatikman yon fwa pa jou atravè yon cron job planifye.

### Etap 5 — Kreye yon pwodwi domain {#step-5--create-a-domain-product}

Wizard la kreye yon pwodwi domain catch-all de baz ak yon markup 10%. Ou ka edite pwodwi sa a imedyatman oswa ou ka pase epi kreye pwodwi manman anba **Ultimate Multisite › Products**.

Gade [Domain Products and Pricing](./domain-products) pou gidyen konfigirasyon pwodwi nèt.

---

## Rekonfigire yon pwofòvè {#reconfiguring-a-provider}

Ale nan **Network Admin › Ultimate Multisite › Settings › Domain Seller** (oswa klike sou **Settings** nan lis plugin yo).

Paj konfigirasyon an genyen:

- **Active vente de domaines** — active ou désactive toute la fonctionnalité
- **Fournisseur par défaut** — le fournisseur utilisé pour les recherches de domaines et les nouveaux produits
- **Max TLDs par recherche** — combien de TLD vérifier quand un client cherche ; des valeurs plus élevées montrent plus d'options mais sont plus lentes
- **Durée du cache de disponibilité** — combien de temps garder en cache les résultats de disponibilité et de prix ; des valeurs plus basses sont plus précises mais augmentent les appels API
- **Gérer les produits de domaine** — lien rapide vers la liste des Produits
- **Configurer les fournisseurs** — ouvre l'Assistant d'intégration pour ajouter ou reconfigurer des fournisseurs

### Ajouter un deuxième fournisseur {#adding-a-second-provider}

Cliquez sur **Configurer les fournisseurs** et lancez à nouveau l'assistant pour le nouvel enregistreur (registrar). Vous pouvez avoir plusieurs fournisseurs configurés en même temps. Attribuez chaque produit de domaine à un fournisseur spécifique, ou laissez-le sur le défaut.

### Synchroniser les TLD manuellement {#syncing-tlds-manually}

Dans la page des paramètres, cliquez sur **Synchroniser les TLD** à côté de n'importe quel fournisseur configuré pour récupérer les derniers prix. C'est utile après qu'un fournisseur mette à jour les prix de gros ou ajoute de nouveaux TLD.

---

## Journaux (Logs) {#logs}

Chaque fournisseur écrit dans son propre canal de journal. Les journaux sont visibles sous **Network Admin › Ultimate Multisite › Logs** :

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | Tout les tentatives d'inscription (succès et échec) |
| `domain-seller-renewal` | Résultats des tâches de renouvellement |
| `domain-seller-opensrs` | Activité brute de l'API OpenSRS |
| `domain-seller-namecheap` | Activité brute de l'API Namecheap |
| `domain-seller-hostafrica` | Activité brute de l'API HostAfrica |
| `domain-seller-openprovider` | Activité brute de l'API Openprovider |
| `domain-seller-hostinger` | Activité brute de l'API Hostinger |
| `domain-seller-godaddy` | Activité brute de l'API GoDaddy |
| `domain-seller-resellerclub` | Activité brute de l'API ResellerClub |
| `domain-seller-namesilo` | Activité brute de l'API NameSilo |
| `domain-seller-enom` | Activité brute de l'API Enom |

---

## Notes sur les capacités des fournisseurs {#provider-capability-notes}

Pas toutes les API des registraires exposent les mêmes opérations. L'addon montre les opérations non supportées avec des erreurs claires visibles par l'administrateur au lieu d'échouer silencieusement.

- **HostAfrica** prend en charge le flux de travail de revendeur en direct le plus large, y compris la recherche, la synchronisation TLD/prix, l'inscription, le renouvellement, le transfert, les mises à jour des serveurs de noms, les enregistrements DNS, les codes EPP, le verrouillage du registraire et la protection d'identité.
- **Openprovider** prend en charge la synchronisation TLD au prix revendeur, l'inscription, le renouvellement, les transferts, les mises à jour des serveurs de noms, les zones DNS, les codes EPP, le verrouillage du registraire et la confidentialité WHOIS. Il s'authentifie avec un jeton bearer à courte durée de vie que l'addon actualise automatiquement.
- **Hostinger** prend en charge la recherche de disponibilité, l'inscription, la consultation de portefeuille, les mises à jour des serveurs de noms, le verrouillage du registraire et la confidentialité WHOIS via le jeton d'API partagé hPanel. L'API publiques de Domaines Hostinger n'expose pas les prix revendeur/grossiste, les transferts entrants, le renouvellement explicite ou la récupération des codes EPP ; les renouvellements sont automatiques uniquement.
