---
title: Si të instalohet WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Si instaloj WordPress Multisite?

WordPress Multisite ju lejon të keni një rrjet që përbën disa faqe në një instalim të vetëm. Kjo është një veçori e integruar, por nuk është aktive për shkak të paracaktuar.

:::tip
Ultimate Multisite përfshin një **[Multisite Setup Wizard](https://your-documentation-link/multisite-setup-wizard)** të ndërtuar që automatizon gjithë këtë proces. Nëse keni instaluar Ultimate Multisite, ju rekomandojmë të përdorni wizardin në vend që të ndiqni hapat manuale më poshtë.

# Përdorimi i Hook-eve në WordPress

WordPress ju ofron një sistem shumë fleksibël që lejon ndërveprimin e kodit tuaj me funksionalitetet e brendshme të platformës. Kjo bëhet përmes "hook"-eve, të cilat janë pika ku mund të vendosni kodin tuaj për të reaguar në ngjarje specifike që ndodhen gjatë procesit të punës së WordPress-it (si kur një post po shkruhet, kur një formular po dërgohet, etj.).

## Çfarë janë Hook-e?

Në thelb, një hook është një "pajisje" ose një pikë e ndalimit në kodin e WordPress. Kur ju vendosni një funksion (një callback function) në një hook të caktuar, kodi juaj do ekzekutohet automatikisht kur ajo ngjarje specifike ndodh.

Për shembull, mund të dëshironi që kodin tuaj të ekzekutohet gjatë procesit të shfaqjes së një post (post_pre_save) ose para se një komenti të ruhet në bazën e të dhënave. Kjo ju jep kontroll të detajuar mbi çfarë ndodh kur diçka specifike ndodh brenda WordPress-it.

## Si përdorim Hook-e?

Për të përdorur hook-e, duhet të keni një ide se cilën ngjarje dëshironi të vëni në dorë. Kjo zakonisht do të jetë dokumentuar nga zhvilluesit e plugin-eve ose theme-ve që po përdorni.

Procesi i përgjithshëm është si më poshtë:

1. **Identifikoni Hook-un:** Zgjidhni hook-un që përfaqëson ngjarjen që ju intereson (p.sh., `wp_enqueue_scripts` për të shtuar skripte, ose `save_post` për të modifikuar postin).
2. **Krijoni Funksionin:** Shkruani kodin tuaj në një funksion që do të bëjë atë që dëshironi (p.sh., të shtojë një skript JavaScript, ose të ndryshojë të dhënien).
3. **Vëni Funksionin në Hook:** Përdorni funksionin tuaj për të lidhur me hook-un e duhur.

### Shembull i thjeshtë (JavaScript)

Nëse dëshironi të shtoni një skript JavaScript kur faqja po ngarkohet, do përdorni `wp_enqueue_scripts`:

```php
function my_custom_script() {
    // Kjo është kodi që do ekzekutohet në momentin e shfaqjes së faqes.
    ?>
    <script>
        console.log("Custom script loaded successfully!");
    </script>
    <?php
}
add_action('wp_enqueue_scripts', 'my_custom_script');
```

Këtu, `add_action` është funksioni që lidh kodin tonë (funksionin) me hook-un specifik (`wp_enqueue_scripts`). Kur WordPress e shfaq faqen, ai do ekzekutojë këtë funksion.

## Pikat Kryesore të Hook-eve

* **Fleksibilitet:** Ju lejon të ndryshoni ose shtoni funksionalitete në shumë pika të procesit të WordPress-it pa duhur që mund të jetë i vështirë me metodat tradicionale.
* **Siguria:** Përdorimi i hook-eve është mënyra e rekomanduar për të ndryshuar kodin bazë (core code) dhe plugin-e, pasi ju lejon të bëni këtë në mënyrën e sigurtë.
* **Kërkesa:** Për të përdorur hook-e, duhet të dini se cilat janë "hooks" që ofrohen nga WordPress ose nga plugin-i/theme-i që po përdorni.

Në fund, mendoni për hook-e si një sistem sinjalizimi: ju thoni WordPress: "Kur ndodh kjo gjë (ngjarja), ekzekuto këtë kod." Kjo është thelbësore për të krijuar funksionalitete të avancuara në platformën tuaj.

Pasi Ultimate Multisite është një plugin që funksionon vetëm në rrjet, në këtë tutorial do të mësoni se si të instaloni dhe konfigurojni WordPress Multisite manualisht. Ky tekst bazohet në [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), nga WPBeginner.

**Gjëra që duhet të keni parasysh para se të krijoni rrjetin tuaj multisite:**

  * Merrni një hosting të mirë për WordPress! Faqet në një rrjet ndajnë të njëjtat burime të serverit.

Nëse keni vetëm disa faqe me trafik të ulët, hosting i ndarshuar do t'ju funksionoj atje.

Për shumic **ofrues menaxhues WordPress**, Multisite vjen gati (instalojnë WordPress me Multisite tashmë aktivizuar dhe e konfiguruar për ju). Kjo është rasti për WP Engine, Closte, Cloudways, etj. Nëse nuk jeni të sigurt nëse kjo varet nga ofruesi juaj i hostingut, kontaktoni mbështetjen e tyre para se të vazhdoni me këtë tutorial.

Është gjithashtu mirë të jesh i njohur me instalimin e WordPress dhe redaktimin e skedarëve duke përdorur FTP.

**_ÇELUES_**: Nëse po vendos një rrjet multisite në një faqe interneti WordPress ekzistuese, mos harro të bësh këto gjëra:

* Krijoni një kopje të plotë të faqes tuaj WordPress

  * Deaktivizoni të gjitha pluginet në faqe duke shkuar te faqja e plugin-eve, zgjedhur opsionin "_Deactivate_" nga veprimet masive dhe pastaj klikuar te "_Apply_".

Për të aktivizuar Multisite, fillimisht lidheni me faqen tuaj duke përdorur një klient FTP ose menaxherin e skurtive (file manager) të cPanel dhe hapni skurtin tuaj `wp-config.php` për redaktim.

Para linjën \_**Kjo është gjithçka, ndal të redakton! Sukses me blogimin.**\_ shtoni këtë fragment kod:

```php
define('WP_ALLOW_MULTISITE', true);
```

Ruajeni dhe ngarkojeni përsëri skurtin tuaj `wp-config.php` në server.

Me qëllizën e multisite të aktivizuar në faqen tuaj, tani është koha për të vendosur rrjetin tuaj.

Shkoni te **Tools » Network Setup** (Mbrojtja/Instrumentet » Vendosja e rrjetit)

<!-- Screenshot unavailable: Menyu i Tools i WordPress që tregon opsionin Network Setup -->

Tani duhet t'i thuash WordPress çfarë lloj strukture domene do të përdorni për sajtat në rrjetin tuaj: subdomene apo subdirektoritë (subdirectories).

Nëse zgjidhni subdomene, duhet të ndryshoni cilësimet tuaja DNS për mapiet e domenit dhe të siguroheni që konfiguroni **subdomene wildcard** për rrjetin tuaj multisite.

Kthehu te konfigurimin e rrjetit, jap një titull për rrjetin tënd dhe sigurohu që adresa e email-it në emailin e administratorit të rrjetit është e saktë. Kliko "Instalo" (Install) për të vazhduar.

Shtoni këtë kod, i ofruar nga WordPress, në **wp-config.php**:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Dhe ky kod, i ofruar edhe nga WordPress, për skedarin tënd `_**.htaccess**_`:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# shtoj një traile (slash) në /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
```

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Përdorni një klient FTP ose menaxherin e skedarëve (nëse po përdorni diçka si cPanel, për shembull) për të kopjuar dhe ngjitur kodin në këto dy skedarë.

Mbaręs, ndaloni dhe keni të aksesuesit sërish në faqen tuaj të WordPress-it për të hyrë në rrjetin tuaj multisite.

Është e rëndësishme të provoni dhe të siguroheni që mund të krijoni një subsite në instalimin tuaj WordPress Multisite para se të instalohet Ultimate Multisite.

Për të krijuar një subsite:

  1. Hapni adminin tuaj i faqeve (wp-admin)

2. Shko te My Sites > Sites (/wp-admin/network/sites.php)

3. Kliko Add New në krye

4. Plotëso të gjitha fushat:

* Site Address — Kurrrekshi mos përdor "www"

* Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

* Subdirektori: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Titulli i faqes — Titulli i faqes, mund të ndryshohet më vonë

  * Email-i i administratorit — Vendosni si përdoruesin fillestar administrator për subfaqen

![Shtoni një formular të ri të saj në WordPress Multisite](/img/admin/sites-list.png)

Pasi të plotësoni fushat, klikoni butonin "Add site" (Shtoni faqe). Pasi që subsiteja e re të krijohet, shijoni të hyjni atë për të siguruar se subsiteja funksionon siç duhet.

## Problemet e shpeshtë:

### 1. Mund të krijoj site të reja por ato nuk janë të aksesueshme.

Nëse keni zgjedhur subdomain-e, ju duhet gjithashtu të konfiguroni subdomain-e wildcard për rrjetin tuaj multisite.

Për të bërë këtë, shko në dashboardin e paneli kontrolli i hostimit të faqes suaj (p.sh. cPanel/Plesk/Direct Admin, në varësi të ofrues tuaj të hostimit).

Gjeni opsionin "Domene" ose "Subdomene". Në disa panele kontrolli, mund të jetë etiketuar si "Administrimi i domenit".

Në fushën e domenit i nëndomë (subdomain), vendosni një asterik (\*). Pastaj do t'ju kërkojë të zgjidhni emrin e domenit ku dëshironi që të shtojmë ndomën e nëndomës.

Rrota kryesore (document root) për emrin e domene të zgjedhur do të detektohet automatikisht. Klikoni në butonin _Create_ ose _Save_ për të shtuar ndërdomenit wildcard-in tuaj. Hapi duhet të duket si „*.[mydomain.com](http://mydomain.com)“.
