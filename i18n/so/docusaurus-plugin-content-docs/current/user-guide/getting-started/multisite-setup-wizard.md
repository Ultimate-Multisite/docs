---
title: Sawirka aasaasinta Multisite
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Dhiskaabinta Istaraalka Badan (Multisite Setup Wizard)

Ultimate Multisite wuxuu la socdaa wizard oo si toos ah u shaqeeya inuu si toos ah u beddelo warshad WordPress caadiga ah oo loo qaybsado shirkad isku xiran (WordPress Multisite network). Tani waxay ka saartaa baahida inaad gacanta ku samayso wax ka beddelid `wp-config.php` ama aad si toos ah u fuliso amarrada database-ka.

:::tip
Haddii warshad WordPress-kaaga hore ay shaqaynayso sidii Multisite network, waxaad si buuxda uga dhaafi kartaa tallaabtan. Wizard-ku kaliya wuxuu soo muuqdaa marka Multisite aysan la hubin.
:::

## Goorma ayuu Wizard-ku Emaaga Muuqdaa? {#when-does-the-wizard-appear}

Marka aad Ultimate Multisite ku furto warshad WordPress caadi ah (oo aan ahayn Multisite), plugin-ka ayaa oga in Multisite aysan la hubin, wuxuuna si toos ah ugu wareejinayaa Wizard-ka Istaraalka Badan (Multisite Setup Wizard) halkii wizard-ka istaraalka caadiga ah.

Waxaad sidoo kale si toos ah u heli kartaa **WP Admin > Ultimate Multisite > Multisite Setup**.

## Shuruudaha Horumarinta (Prerequisites) {#prerequisites}

Ka hor intaadan shaqayn Wizard-ka, hubi in:

- Aad tahay **administrator access** ee warshad WordPress-kaaga
- Faylka `wp-config.php` ee server-kaaga uu yahay mid **wax la qori karo** (writable) oo ay web server-ku isticmaalo
- Waxaad leedahay **backup cusub** oo faylalka iyo database-kaaga

:::warning
Wizard-ku wuxuu wax ka beddelayaa faylka `wp-config.php` ee aad isticmaalayso oo abuuraa miisaanka (tables) database-ka cusub. Mar walba samayso backup ka hor intaadan sii socon.
:::

## Tallaabada 1: Soo Dhawoow (Welcome) {#step-1-welcome}

Shaashadda ugu horreysa waxay sharraxaysaa waxa uu yahay WordPress Multisite iyo waxa Wizard-ku samayn doono:

- Hubi astaanta Multisite ee qaabka WordPress-kaaga
- Abuur miisaanka database-ka loo baahan yahay oo ay u shaqeeyaan network-ka
- Ku dar qodobbada (constants) ee multisite-ka loo baahan yahay `wp-config.php`
- Hubi Ultimate Multisite si buuxda ugu shaqaynaya dhammaan network-ka

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Click **Continue** si aad u sii socoto.

## Tallaabada 2: Qorsheynta Network-ka (Network Configuration) {#step-2-network-configuration}

Tani tallaabadu waxay ku weydiinaysaa inaad qorsheysid dejinta network-kaaga.

### Qaababka Website-ka (Site Structure) {#site-structure}

Sida aad u habaysan inaad network-kaaga (network sites) u kala saarto:

- **Sub-domains** (La talin la siiyo) — Bixinnada waxay helayaan subdomain-yo gaar ah, tusaale ahaan `site1.yourdomain.com`
- **Sub-directories** — Saddexda waxaa loo abuuraa sidii maro (paths), tusaale ahaan `yourdomain.com/site1`

:::note
Haddii aad doorato sub-domains, waxaad u baahan doontaa inaad dejisdo **wildcard DNS** iyo **wildcard SSL certificate** oo ku saabsan domain-kaaga. Inta badan hosting-yada WordPress ee la maamula waxay si toos ah u fuliyaan arrintan. Waxaad arki kartaa [Ultimate Multisite 101](./ultimate-multisite-101) si aad faahfaahin uga hesho isbarbardhigga.
:::

### Magaca Network-ka (Network Title) {#network-title}

Si magac u qor network-kaaga. Tani waxay ku bilaabataa magaca website-kaaga hadda jira iyadoo la soo daray "Network". Waxaad ka beddeli kartaa si dambe adoo isticmaalaya settings-ka network-ka.

### Email-ka Maamulaha Network-ka (Network Admin Email) {#network-admin-email}

Email-ka loo isticmaalo ogeysiisyada maamulka network-ka. Tani waxay ku bilaabataa email-ka isticmaalaya isticdellaha hadda jira.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Marka aad buuxisato meelaha, riix **Continue** si aad u sii socoto.

## Tallaabada 3: Installation (Wax-soo-qarista) {#step-3-installation}

Riix badhka **Install** si aad u bilowdo. Wizard-ku wuxuu fulin doonaa shan tallaabo oo automatic ah oo isdaba joog ah, kasta oo muujinaya horumarka dhabta ah:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Talla | Sharaxaad |
|------|-------------|
| **Farsamada Multisite-ka** | Waxay ku dartaa `WP_ALLOW_MULTISITE` constant-ka `wp-config.php`-ga |
| **Abuurista Shirkadda (Network)** | Waxay abuureysaa miisaska database-ka multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, iwm.) waxayna ku buuxaysaa qorshaha shirkaddaada |
| **Beddelidda Qorshaha** | Waxay ku dartaa isticmaalayaasha ugu dambeeya ee multisite-ka `wp-config.php`-ga (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, iwm.) |
| **Xallinta Cookies-ka** | Waxay hubisaa in URL-ka website-ka uu sax yahay metadata-ka shirkadda si loo ka horjoobiyo dhibaatooyinka aqoonsiga (authentication) markii la furayo |
| **Furita Plugin-ka Shirkadda** | Network-activates Ultimate Multisite si ay u shaqeeyso dhammaan shirkaddaada |

Qof kasta oo tallaabada ah wuxuu soo bandhigayaa mid ka mid ah xaaladahaas:

- **Pending (Sugaynta)** — Waa la sugayo in la fuliyo
- **Installing... (Waxay ku socota...)** — Si waahida ay u shaqaynaysaa hadda
- **Success! (Guul!)** — Waxay si guuleystiran u dhammaystirtay
- **Error message (Fariinta qaladka)** — Qaldan ayaa dhacay (fariintu waxay sharaxaysaa dhibaatada)

Marka dhammaan tallaabooyinka si guuleystiran ay u dhammaystiraan, waxaad arki doontid xaalad "Success!" oo mid ah midabka cagaaran oo ku saabsan qodob kasta:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Markaas, wizard-ku si toos ah ayaa loo marayaagaya shaashadda dhammaystirka (completion screen).

## Tallaabada 4: Dhammaystir {#step-4-complete}

Marka la furayo installation-ka, waxaad arki doontid fariin guul oo xaqiijinaysa in WordPress Multisite uu si guuleystiran u furmay.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Hadda waxaad sii wadi kartaa wizard-ka Ultimate Multisite si aad u dejiso platform-ka WaaS-kaaga (faahfaahinta shirkadda, waxa la bilaabayo, albaabada lacagta, iwm.).

:::note
Markabka multisite-kaaga soo install-ka dhammaan dhamaadkii, browser-kaagu wuxuu u socon doonaa maamulka shirkadda (network admin) cusub ee la furay. Waxaad u baahan kartaa inaad mar kale galiso sidii aad hore u galaysid sababtoo caddaynta cookie-yada waxaa la cusboonaysiiyay deegaanka multisite.
:::

## Habka loo isticmaalo haddii ay shaqo darrada (Manual Setup Fallback) {#manual-setup-fallback}

Haddii wizard-ku awoodi lahayn inuu ku qoro faylkaaga `wp-config.php` (sababta badbaadada faylka ama xaddidda serverka), wuxuu kuu soo bandhigi doonaa koodka saxda ah ee aad u baahan tahay inaad si gacanta ugu dari karto:

1. **constants-yada wp-config.php** ee aad u baahan tahay inaad ku dariso ka hor safka `/* That's all, stop editing! */`
2. **qawaadooyinka .htaccess rewrite rules** ee habboon qaabdhismeedka website-kaaga (subdomain ama subdirectory)

Marka aad samayso isbeddellada gacanta ah, dib u soo celiso bogga, wizard-ku wuxuu ogaan doonaa in multisite hadda yahay mid socda.

## Xallinta dhibaatooyinka (Troubleshooting) {#troubleshooting}

### Wizard-ku wuxuu sheegayaa in wp-config.php aan la qorin karin (not writable) {#the-wizard-says-wp-configphp-is-not-writable}

Habka web server-kaaga waa inuu leeyahay fursad lagu qoro faylka `wp-config.php`. Waxaad ama:

- Si kooban u beddeli furaha faylka (file permissions) oo noqonaya `644` ama `666`
- Isticmaal tilmaamaha habka loo isticmaalo haddii ay shaqo darrada (manual setup fallback instructions) ee wizard-ku bixiyay
- Weyiso adeegga hosting-kaaga caawimaad

### Website-yadu ma la heli karaan ka dib markii la samaynayo habka (subdomains) {#sites-are-not-accessible-after-setup-subdomains}

Haddii aad dooratay qaabka subdomain-ka, waxaad u baahan tahay inaad dejisdo **wildcard DNS** ee domain-kaaga. Ku dar diiwaangelin DNS:

```
Type: A (ama CNAME)
Host: *
Value: [server IP-kaaga]
```

Hubi lahayd adeegga hosting-kaaga haddii aadan hubin sida loo dejiyo kan.

### Dhibaatooyinka caddaynta ka dambeeya habka (Authentication issues after setup) {#authentication-issues-after-setup}

Haddii aad ka soo baxday ama aad dareento qalad cookie-yo ka dib markii la samaynayo multisite-ka:

1. Ka saar cookie-yada browser-kaaga ee website-ka
2. Mar kale galiso `yourdomain.com/wp-login.php`
3. Haddii dhibaatadu sii socoto, hubi inuu `wp-config.php`-gaagu aan lahayn `COOKIE_DOMAIN` oo la dejiyay `false` — tani waa arrin la ogaatay habka multisite-ka subdomain-ka ah.

### Tallaabada ayaa ku guuldareysay inta lagu jiro install-ka {#a-step-failed-during-installation}

Haddii mid ka mid ah talaabooyinka installation-ka uu soo saaro qalad:

1. Qoraalka qaladka ee ay muujinayso diiradda saar.
2. Ku noqo tallaabada hagaajinta (configuration step) oo isku day inaad dib u samayso.
3. Haddii qaladku sii socdo, hubi log-ga qaladka PHP-ga serverkaaga si aad faahfaahin dheeraad ah uga hesho.
4. Talaabooyinka horey u dhammaystiran waxaa laga kala qaadi doonaa markaad dib u samayso (installer-ku wuxuu yahay mid isdhaafsan - idempotent).
