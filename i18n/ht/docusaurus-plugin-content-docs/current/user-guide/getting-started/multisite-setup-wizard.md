---
title: Gidans Enstite Multisite
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite Setup Wizard

Ultimate Multisite genyen yon wizard ki vini avan pou konvèti yon enstalasyon WordPress estanda an rezo WordPress Multisite otomatikman. Sa elimine bezwen ou edite `wp-config.php` oswa eseye komand baz done (database commands) menm jan an.

:::tip
Si enstalasyon WordPress ou a deja ap mache kòm yon rezo Multisite, ou ka pase etap sa la pou kont li. Wizard la sèlman parèt lè Multisite pa aktif ankò.
:::

## Lè Wizard La Parèt?

Lè ou aktive Ultimate Multisite sou yon enstalasyon WordPress estanda (pa Multisite), plugin an ap detekte ke Multisite pa aktif epi li otomatikman redirekte ou nan Multisite Setup Wizard la olye pou wizard setup regilye a.

Ou ka tou jwenn aksè li dirèkteman nan **WP Admin > Ultimate Multisite > Multisite Setup**.

## Pré-requis

Anvan ou kòmanse wizard la, asire w ke:

- Ou gen **akses administrateur** sou enstalasyon WordPress ou a
- Fich `wp-config.php` sou sèvè ou a **pouvwa ekri (writable)** pa web server la
- Ou gen yon **backup réchè** nan fichye ak baz done ou yo

:::warning
Wizard la modifie fichye `wp-config.php` ou a epi li kreye nouvo tab baz done (database tables). Toujou fè yon backup anvan ou kontinye.
:::

## Etap 1: Bienvenue

Premye ekran an eksplike sa k ap kòm WordPress Multisite e sa wizard la pral fè:

- Aktive fonksyonalite Multisite nan konfigirasyon WordPress ou a
- Kreye tab baz done rezo ki nesesè yo
- Ajoute konstante multisite ki nesesè yo nan `wp-config.php`
- Aktive Ultimate Multisite sou tout rezo a

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Klike **Continue** pou ou ka kontinye.

## Etap 2: Konfigirasyon Rezo (Network Configuration)

Etap sa a mande w pou ou configure tout paramèt rezo ou yo.

### Estrikti Sit (Site Structure)

Chwazi kijancho ki wè ou pral òganize sit ou yo nan rezo a:

- **Sub-domains** (Rekòmande) — Sit yo ap jwenn yon sub-domain pwòp, pa egzanp `site1.yourdomain.com`
- **Sub-directories** — Sit yo kreye kòm chemen, pa egzanp `yourdomain.com/site1`

:::note
Si ou chwazi sub-domains, ou pral bezwen configure **wildcard DNS** ak yon **wildcard SSL certificate** pou domèn ou an. La plupart nan hosting WordPress ki byen jere ap fè sa otomatikman. Gade [Ultimate Multisite 101](./ultimate-multisite-101) pou yon konparasyon detaye.
:::

### Tit Rezo a (Network Title)

Bay yon non pou rezo ou an. Sa a default la se tit sit ou kounye a ak "Network" ajoute l. Ou ka chanje sa pi latè nan rann rezo a (network settings).

### Email Admin Rezo a (Network Admin Email)

Adrès imèl ki itilize pou notifikasyon administrasyon rezo a. Sa a default la se adrès imèl itilizatè kounye a.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Malgre ou fin ranpli tout fòt yo, klike sou **Continue** pou kontinye.

## Etap 3: Enstalasyon (Installation)

Klike sou bouton **Install** pou kòmanse. Wizard la ap fè twa etap otomatik ki vini ansè yon lòt, epi li montre pwogrè chak etap an tan reyèl:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Etap | Deskripsyon |
|------|-------------|
| **Active Multisite** | Mete constante `WP_ALLOW_MULTISITE` nan `wp-config.php` la |
| **Kreyasyon Réseau a** | Kreye tabèl baz done multisite yo (`wp_site`, `wp_sitemeta`, `wp_blogs`, elatriye) epi ranpli yo ak konfigirasyon rezo ou an |
| **Mete Fè Konfigirasyon an** | Mete konstante multisite final nan `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, elatriye) |
| **Repare Cookies yo** | Asire ke URL sit la kòrèk nan metadata rezo a pou evite pwoblèm autentifikasyon apre aktivasyon an |
| **Aktive Plugin Réseau a** | Aktive Ultimate Multisite la sou rezo anpil pou li mache atravè tout rezo a |

Chak etap ap montre yon ti estati sa yo:

- **Pending (Apwante)** — Ap tann pou li pwoเซse
- **Installing... (Ap Enstalasyon...)** — Ap mache kounye a
- **Success! (Siksè!)** — Fini byen
- **Error message (Mesaj erè)** — Yon erè te rive (mesaj la ap dekri pwoblèm nan)

Yon fwa tout etap yo fini siksèman, ou pral wè yon estati "Success!" vèt pou chak eleman:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Lè sa a, vizyè a ap kontinye otomatikman nan ekran konplè.

## Etap 4: Konplèt

Yon fwa enstalasyon an fini, ou pral wè yon mesaj siksè ki konfime ke WordPress Multisite te aktive.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Kounye a, ou ka kontinye ak etap Ultimate Multisite setup wizard la pou configure platfòm WaaS ou (detay konpayi ou, kontni de baz, pòt paiement, elatriye).

:::note
Malgre ke instalasyon multisite la fini, browser ou ap redirekte atravè admin rezo ki te active. Ou ka bezwen se log in ankò paske cookie autentifikasyon yo te mete anwo pou anviwònman multisite a.
:::

## Fallback Setup Manual

Si wizard la pa kapab ekri nan fichye `wp-config.php` ou (ak pase pwoblèm pèmisyon fichye oswa restriksyon sèlèvè), li pral montre kòd egzak ou bezwen ajoute menm:

1. **Constants wp-config.php** ki bezwen mete anwo liy `/* Sa se tout, rete pa edite! */`
2. **Règ rewrite .htaccess** ki apwopriye pou estrikti sit ou chwazi (subdomain oswa sous-dossier)

Malgre w fè chanjman manual yo, rafraîchi paj la epi wizard la pral detekte ke multisite a kounye a aktif.

## Resousè pwoblèm (Troubleshooting)

### Wizard la di wp-config.php pa ekri

Pwozes web sèlèvè ou bezwen pèmisyon pou ekri sou fichye `wp-config.php`. Ou ka chwazi:

- Chanje pèmisyon fichye a tèporèman an `644` oswa `666`
- Itilize enstriksyon fallback setup manual ki bay wizard la
- Demande sipò nan prestè hosting ou pou ede w

### Sit yo pa aksede apre setup (subdomains)

Si ou te chwazi estrikti subdomain, ou bezwen configure **wildcard DNS** pou domèn ou a. Ajoute yon enregistre DNS:

```
Type: A (os CNAME)
Host: *
Value: [IP sèlèvè ou an]
```

Kontwe ak prestè hosting ou si ou pa asire kòman pou configure sa la.

### Pwoblèm autentifikasyon apre setup

Si ou se log out oswa ou gen erè cookie apre setup multisite a:

1. Netwaye cookie browser ou pou sit la
2. Log in ankò nan `yourdomain.com/wp-login.php`
3. Si pwoblèm nan rete, verifye ke `wp-config.php` ou pa gen `COOKIE_DOMAIN` mete an `false` — sa se yon pwoblèm ki konnen sou instalasyon multisite subdomain

### Yon etap pa fini pandan enstalasyon an

Si yon sèl etap enstalasyon montre yon erè:

1. Note mesaj erè a ki parèt la.
2. Ale tounen nan etap konfigirasyon an epi eseye ankò.
3. Si erè a rete, kontwole log erè PHP sou sèvè ou a pou plis detay.
4. Etap yo ki fin fini deja yo ap pase pèdi sou esè ki vini apre (installè a se idantif).
