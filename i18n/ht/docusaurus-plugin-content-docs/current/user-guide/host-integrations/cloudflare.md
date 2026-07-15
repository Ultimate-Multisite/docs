---
title: Entegrasyon Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Entegrasyon Cloudflare

## Genel Bakış {#overview}
Cloudflare, web sitelerini korumak ve hızlandırmak için önde gelen bir içerik dağıtım ağı (CDN) ve güvenlik sağlayıcısıdır. Bu entegrasyon, Ultimate Multisite ile Cloudflare arasında otomatik alan adı yönetimi sağlar, özellikle alt alan adı çoklu site kurulumları için.

## Özellikler {#features}
- Cloudflare'da otomatik alt alan adı oluşturma
- Proxy edilmiş alt alan adı desteği
- DNS kaydı yönetimi
- Ultimate Multisite yönetim panelinde gelişmiş DNS kaydı görüntüleme

## Gereksinimler {#requirements}
Aşağıdaki sabitleri `wp-config.php` dosyanıza tanımlamanız gerekir:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Kurulum Talimatları {#setup-instructions}

### 1. Cloudflare API Anahtarınızı Alın {#1-get-your-cloudflare-api-key}

1. Cloudflare kontrol panelinize giriş yapın
2. "My Profile" (sağ üst köşedeki e-posta adresinize tıklayın) bölümüne gidin
3. Menüden "API Tokens"ı seçin
4. Aşağıdaki izinlerle yeni bir API token oluşturun:
   - Zone.Zone: Read (Okuma)
   - Zone.DNS: Edit (Düzenleme)
5. API token'ınızı kopyalayın

### 2. Alan Adı Kimliğinizi (Zone ID) Alın {#2-get-your-zone-id}

1. Cloudflare kontrol panelinizde, kullanmak istediğiniz alanı seçin
2. Zone ID, "Overview" sekmesinde, "API" başlığının altında sağ kenar çubuğunda görünür
3. Zone ID'yi kopyalayın

### 3. wp-config.php'ye Sabitleri Ekleyin {#3-add-constants-to-wp-configphp}

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Entegrasyonu Etkinleştirin {#4-enable-the-integration}

1. WordPress yönetim panelinizde, Ultimate Multisite > Settings'e gidin
2. "Domain Mapping" sekmesine gidin
3. Aşağı kaydırarak "Host Integrations" kısmına gelin
4. Cloudflare entegrasyonunu etkinleştirin
5. "Save Changes" (Değişiklikleri Kaydet) butonuna tıklayın

## Nasıl Çalışır {#how-it-works}

### Alt Alan Adı Yönetimi {#subdomain-management}

Bir alt alan adı çoklu site kurulumunda yeni bir site oluşturulduğunda:

1. L'intégration envoie une requête à l'API de Cloudflare pour ajouter un enregistrement CNAME pour le sous-domaine
2. Le sous-domaine est configuré pour être proxifié via Cloudflare par défaut (cela peut être changé avec des filtres)
3. Quand un site est supprimé, l'intégration retirera le sous-domaine de Cloudflare

### Affichage de l'enregistrement DNS {#dns-record-display}

L'intégration améliore l'affichage des enregistrements DNS dans l'admin Ultimate Multisite en faisant ceci :

1. Récupérer les enregistrements DNS directement depuis Cloudflare
2. Afficher si les enregistrements sont proxifiés ou non
3. Montrer des informations supplémentaires sur les enregistrements DNS

## Noms d'hôte personnalisés Cloudflare (Cloudflare Custom Hostnames) {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (anciennement appelé "Cloudflare for SaaS") est une fonctionnalité de Cloudflare qui permet à vos clients d'utiliser leurs propres domaines avec SSL sur votre réseau multisite. C'est l'approche recommandée pour les installations multisite mappées par domaine qui utilisent Cloudflare, car Cloudflare gère automatiquement l'émission et le renouvellement du certificat SSL pour chaque domaine personnalisé.

### Comment cela diffère de l'intégration standard Cloudflare {#how-it-differs-from-the-standard-cloudflare-integration}

| | Intégration standard | Noms d'hôte personnalisés Cloudflare (Cloudflare Custom Hostnames) |
|---|---|---|
| **Objectif** | Crée automatiquement des enregistrements DNS pour les sous-domaines | Permet les domaines personnalisés (mappés) avec SSL géré par Cloudflare |
| **Idéal pour** | Multisite de sous-domaine | Multisite mappé par domaine |
| **SSL** | Géré séparément | Géré automatiquement par Cloudflare |

### Configuration des Noms d'hôte personnalisés Cloudflare {#setting-up-cloudflare-custom-hostnames}

1. Nan panseman nan dashboard Cloudflare ouvriye zone pou domèn prensipal ou an.
2. Ale nan **SSL/TLS > Custom Hostnames**.
3. Ajoute yon origin fallback ki ap pointe sou IP oswa hostname sèvè ou a.
4. Pou chak domèn kliyan ki mapé nan Ultimate Multisite, ajoute yon entry Custom Hostname nan Cloudflare. Ou ka automate etap sa a itilize Cloudflare API la.
5. Cloudflare bay epi renouvle sertifikat TLS pou chak custom hostname otomatikman menm lè DNS kliyan an pointe sou rezo ou a.

Pou referans API konplè, gade [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Mete nou anpil enfòmasyon
Kòm nan Ultimate Multisite v2.6.1 la, fonksyon sa a rele **Cloudflare Custom Hostnames** nan tout konfigirasyon ak etiket plugin yo. Vèsyon pi ansyen te itilize non "Cloudflare for SaaS", ki se non pwodwi Cloudflare anba l.
:::

## Nòt Enpòtan {#important-notes}

Kòm nan dènye mizajou Cloudflare a, wildcard proxying la kounye a disponib pou tout kliyan yo. Sa vle di ke entegrasyon DNS Cloudflare estanda a pi piti enpòtan pou enstalasyon multisite sous-domèn non sa li te ye anvan, paske ou ka senpleman mete yon rekord DNS wildcard nan Cloudflare.

## Resousè Sèvi pou Rezoud pwoblèm (Troubleshooting) {#troubleshooting}

### Pwoblèm Koneksyon API {#api-connection-issues}
- Verifye ke token API ou a kòrèk epi li gen pèmisyon ki nesesè yo.
- Kontweke ke Zone ID ou a kòrèk.
- Asire ke kont Cloudflare ou a gen pèmisyon ki nesesè yo.

### Sous-domèn Pa Ajoute {#subdomain-not-added}
- Kontweke log Ultimate Multisite pou nenpòt mesaj erè.
- Verifye ke sous-domèn an pa deja ajoute nan Cloudflare.
- Asire ke plan Cloudflare ou a sipò kantite rekord DNS ou ap kreye yo.

### Problèm Proxy {#proxying-issues}

- Si ou pa vle ke sous-domain yo reyèlman proxy, ou ka itilize filtre `wu_cloudflare_should_proxy`.
- Gen kèk fonksyonalite ki pa ap mache byen lè yo proxy (pa egzanp, kèk fonksyon admin WordPress).
- Pran konsider pou w itilize Page Rules Cloudflare pou evite cache pou les pages admin.
