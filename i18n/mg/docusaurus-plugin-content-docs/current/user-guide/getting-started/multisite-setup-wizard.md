---
title: Fitaovana fanamboarana toerana maro
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Fita Fanamboana Multisite

Ultimate Multisite dia manome fita fanamboarana (wizard) mialoha izay mamadika ho azy ny fametrahana WordPress tsotra ho tambajotra WordPress Multisite. Izany dia manala ny filàna manova ny `wp-config.php` na manao baiko amin'ny database.

:::tip
Raha efa miasa ho tambajotra Multisite ny fametrahana WordPress anao, afaka mandalo ity dingana ity ianao. Azo jerena io fita fanamboarana io rehefa tsy voafidy (enabled) ny Multisite ihany.
:::

## Rahoviana no Mipoitra ilay Fita Fanamboarana?

Rehefa manao activation an'i Ultimate Multisite amin'ny fametrahana WordPress tsotra (tsy ho Multisite), dia mahatsapa ny plugin fa tsy voafidy ny Multisite ary mampitso anao mivantana any amin'ilay Fita Fanamboarana Setup Multisite fa tsy ilay fita fanamboarana ara-dalàna.

Afaka miditra azy mivantana ianao ao amin'ny **WP Admin > Ultimate Multisite > Multisite Setup**.

## Fepetra Ilaina (Prerequisites)

Alohan'ny manokafana ny wizard, dia ataovy izay hahazoana:

- Manana **fidirana ho administrator** amin'ny fametrahana WordPress anao
- Ny rakitra `wp-config.php` ao amin'ny server dia **azo soratra (writable)** avy amin'ny web server
- Manana **backup vao haingana** ny rakitrao sy ny database

:::warning
Ny wizard dia manova ny rakitra `wp-config.php` anao ary mamorona tabele database vaovao. Ataovy azo antoka fa manao backup aloha alohan'ny hanombohanao izany.
:::

## Dingana 1: Fandraisana Fanahy (Welcome)

Ny écran voalohany dia manazava hoe inona no atao amin'ny WordPress Multisite sy ny zavatra hataon'ilay wizard:

- Ampifanaraho ny fahaizana Multisite ao amin'ny configuration WordPress anao
- Mamorona ireo tabele database ilaina ho an'ny tambajotra (network)
- Ampidiro ireo constants multisite ilaina ao amin'ny `wp-config.php`
- Ampifandraho (Network-activate) ny Ultimate Multisite eo amin'ny tambajotra

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Tsindrio **Continue** mba handefasana.

## Dingana 2: Fandrindrana Ny Tambajotra (Network Configuration)

Ity dingana ity dia mangataka anao mba hifehezana ny fepetra ho an'ny tambajotranareo.

### Firafitry ny Tranokala (Site Structure)

Safidio ny fomba hanomezana ny toerana ho an'ny tranokala anareo:

- **Sub-domains** (Torohevitra) — Ny tranokala dia manana subdomain manokana, ohatra hoe `site1.yourdomain.com`
- **Sub-directories** — Ny tranokala dia vita ho lalana, ohatra hoe `yourdomain.com/site1`

:::note
Raha mifidy sub-domains ianao, mila mametraka **wildcard DNS** sy **wildcard SSL certificate** ho an'ny domain anareo ianao. Ireo host WordPress maro dia manao izany ho azy. Jereo ny [Ultimate Multisite 101](./ultimate-multisite-101) mba hahazoana fampitahana antsipiriany kokoa.
:::

### Anaran'ny Tambon-draharaha (Network Title)

Ampidiro anarana ho an'ny tambon-draharahanareo. Io dia manome ny anaran'ny tranokala ankehitriny miaraka amin'ny hoe "Network". Afaka ovaina izany aorian'izay avy amin'ny fandraisana an-tanan-draharaha (network settings).

### Email Admin ho an'ny Tambon-draharaha (Network Admin Email)

Ny adiresy mail sy ampiasaina ho fanambarana fitantanana ny tambon-draharaha. Io dia manome ny adiresin'ny mpampiasa ianao amin'izay fotoana.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Aorian'ny famafazana ireo toerana, tsindrio **Continue** mba hanombohana ny dingana manaraka.

## Dingana 3: Fametrahana (Installation)

Tsindrio ny bokotra **Install** mba hanombohana. Ny wizard dia manao dingana automatika dimy mifandray tsara, ary mampiseho ny fandrosoany amin'ny fotoana tena izy isaky ny dingana:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Dingana | Famaritana |
|------|-------------|
| **Ampio Multisite** | Ampio ny `WP_ALLOW_MULTISITE` constant ao amin'ny `wp-config.php` |
| **Fandrefesana Rano** | Mamorona ireo database tables ho an'ny multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, sns.) ary mameno azy ireo amin'ny fepetra anao ho an'ny tambajotra (network) |
| **Fanavaozana Fepetra** | Ampiana ny constants farany ho an'ny multisite ao amin'ny `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, sns.) |
| **Fanamboarana Cookies** | Miantoka fa marina ny URL an'ny tranokala ao amin'ny metadata an'ny tambajotra mba hisorohana olana momba ny fanamarinana (authentication) aorian'ny fanatanterahana azy |
| **Fanatanterahana Plugin Network** | Manatanteraka ny Ultimate Multisite ho an'ny tambajotra manontolo izy ka miasa amin'ny rehetra ao amin'ny network |

Ny dingana tsirairay dia mampiseho iray amin'ireto toetran'ireto:

- **Pending** — Miandry ny fiasa
- **Installing...** — Mandeha ankehitriny
- **Success!** — Nahomby tanteraka
- **Fanamarihana fahadisoana** — Nisy olana (ny hafatra dia manazava ny olana)

Rehefa vita tsara avy ireo dingana rehetra, dia hahita toetranjaka maitso "Success!" ho an'ny zavatra tsirairay ianao:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Avy eo, ny wizard dia handroso ho any amin'ny efijery famaranana ho azy.

## Dingana 4: Famaranana

Rehefa vita tanteraka ny fanatanterahana (installation), dia hahita hafatra fahombiazana ianao manamarina fa voafandrefana ny WordPress Multisite.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Afaka manohy amin'ny wizard Ultimate Multisite ianao mba hifehezana ny sehatra WaaS anao (fampahalalana momba ny orinasa, votoaty fototra, payment gateways, sns.).

:::note
Ny fanapahan-kevitra rehefa vita ny fametrahana multisite, dia hivoaka amin'ny navigateur anao ianao amin'ny alalan'ny network admin vaovao. Mety mila mitady indray ianao satria novana ny cookies momba ny authentication ho an'ny tontolo multisite.
:::

## Fandaharana fanampiny (Manual Setup Fallback)

Raha tsy afaka manoratra ao amin'ny rakitra `wp-config.php` anao ny wizard (noho ny fepetra ara-panaraha-maso ny rakitra na fetran'ny server), dia hanehoina ho anao ny code marina tokony ho azo ampiana manokana:

1. Ireo **constants ao amin'ny wp-config.php** izay mila ampiana eo ambanin'ilay tsipika `/* That's all, stop editing! */`
2. Ireo **rewrite rules .htaccess** mifanaraka amin'ny firafitry ny tranokala safidina anao (subdomain na subdirectory)

Rehefa vita ireo fanovana manokana ireo dia avereno ny pejy ary hahita fa miasa ny multisite anao izy.

## Fanamboarana olana (Troubleshooting)

### Lazain'ny wizard fa tsy azo soratra ao amin'ny wp-config.php

Ny process an'ny web server anao dia mila alalana hanoratra ao amin'ilay rakitra `wp-config.php`. Afaka manao izany ianao:

- Ovay moramora ny fepetra ara-panaraha-maso (file permissions) ho `644` na `666`
- Ampiasao ny toromarika fandaharana fanampiny (manual setup fallback instructions) omen'ny wizard
- Mangataha fanampiana amin'ny hosting anao

### Tsy azo jerena ireo tranokala aorian'ny fametrahana (subdomains)

Raha nifidy firafitry ny subdomain ianao, dia mila manova ny **wildcard DNS** ho an'ny domain anao. Ampio record DNS iray:

```
Type: A (na CNAME)
Host: *
Value: [IP server anao]
```

Mifanakalo hevitra amin'ny hosting anao raha tsy fantatrao ny fomba fanatanterahana izany.

### Olana momba ny authentication aorian'ny fametrahana

Raha tsy tafiditra ianao na mahazo fahadisoana momba ny cookies aorian'ny fametrahana multisite:

1. Esory ny cookies an'ny navigateur anao ho an'ilay tranokala
2. Mitady indray ao amin'ny `yourdomain.com/wp-login.php`
3. Raha mbola mitranga izany, jereo fa tsy voafetra ny `COOKIE_DOMAIN` ao amin'ny `wp-config.php` anao ho `false` — ity dia olana fantatra amin'ny fametrahana multisite amin'ny subdomain.

### Nisy dingana iray tsy nahomby nandritra ny fametrahana

Raha misy iray amin'ireo dingana fanatanterahana (installation steps) dia mampiseho fahadisoana:

1. Soraty ny hafatra fahadisoana izay miseho.
2. Mandehana indray amin'ilay dingana fametrahana (configuration step) ary andramo indray.
3. Raha mitohy ilay fahadisoana, jereo ny PHP error log an'ny server-nao mba hahazoana antsipiriany bebe kokoa.
4. Ireo dingana efa vita dia ho lehibe (skipped) amin'ny fampandehanana manaraka (idempotent installer).
