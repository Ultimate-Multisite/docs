---
title: Instalimi i Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Instalimi i Ultimate Multisite

:::note
Ky tutorial supon që të keni tashmë një WordPress Multisite të instaluar dhe të konfiguruar. Për të mësuar se si, shihni [këtë tutorial](https://www.wpbeginner.com/glossary/multisite/) nga WP Beginner.
:::

## Instalimi i Pluginit

Ultimate Multisite është i lirë në [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Nga **Dashboard-i i Administratorit të rrjetit** (Network Admin Dashboard), shkoni te **Plugins → Add New Plugin**.

![Page për shtimin e një plugin](https://example.com/img/installation/add-new-plugin.png)

Kërkoni **"Ultimate Multisite"** (me citime për një përafësim të saktë) dhe do të shfaqet si rezultati i parë. Klikoni **Install Now**.

![Rezultatet e kërkimit që shfaqin Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Pasi të instaloni, klikoni në **Network Activate** për të aktivizuar plugin-in gjatë gjithë rrjetit tuaj.

![Plugin i instaluar me butonin Network Activate](/img/installation/plugin-installed.png)

Pas aktivizimit, do të kesh redirektuar automatikisht te Setup Wizard (Marrja në punë).

![Plugin i aktivizuar dhe i redirektuar te wizard](/img/installation/plugin-activated.png)

## Wizard i Konfigurimit

Wizard-i i konfiguroimit do t'ju udhëzojë në përgjatë rreth 10 minuta për të konfiguruar Ultimate Multisite.

### Mirëseja

Klikoni **Get Started** (Filloni me këtë) për të nisur.

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### Kontrollet Para Instalimit

Ky hap kontrollon informacionin e sistemit dhe instalimin e WordPress për të siguruar që i plotësojnë kërkesat e Ultimate Multisite. Nëse gjithçka duket mirë, klikoni në **Shko te Hapi i Ardhshëm**.

![Kontojet parainstalimi që tregojnë kërkesat e sistemit](/img/installation/wizard-pre-install-checks.png)

:::note Butoni Network Activate (v2.6.1+)
Nëse Ultimate Multisite është instaluar por **nuk është aktiv ende në rrjet** – për shembull, po keni klikuar **Activate** (single-site) në vend të **Network Activate** nga shfletimi i plugin-eve të rrjetit – hapi Pre-install Checks do e zbulojë këtë dhe do t'ju tregoj një buton **Network Activate**.

Klikimi në **Network Activate** aktivizon plugin-in automatikisht në të gjithë rrjetin tuaj multisite. Pasi të aktivizoni, wizardi vazhdon normalisht drejt hapi i instalimit. Nuk keni nevojë ta lësh wizardin për të rregulluar statusin e aktivizimit.

### Instalimi

Instaluesi do të krijojë tabelat e nevojshme të bazës dhe do të instaloje skurtin `sunrise.php` që Ultimate Multisite i nevojitet për të funksionuar. Klikoni **Install** për të vazhduar.

![Hapi i instalimit që tregon tabelat e bazës dhe sunrise.php](/img/installation/wizard-installation.png)

### Kompania Juaj

Plotësoni informacionin e kompanisë dhe vendosni monedën tuaj standarde. Kjo informacion do të përdoret gjatë të gjithë platformës suaj WaaS. Klikoni **Kërcosh** kur keni mbaruar.

![Hapi i konfigurimit të kompanisë juaj](/img/installation/wizard-your-company.png)

### Përmbajtja Paraprake

Kjo hap ju lejon të instaloni template-të e përcaktuara, produktet dhe përmbajtjen fillestare të tjera. Kjo është një mënyrë fantastike për të qenur i njohur me veçoritë e Ultimate Multisite. Klikoni **Install** (Instalo) për të shtuar përmbajtjen standarde, ose kaloni këtë hap nëse dëshironi të filloni nga e para.

![Hapi i instalimit të përmbajtjes](https://example.com/img/installation/wizard-default-content.png)

### Plugin e Rekomenduara

Opsionale, instaloni pluginet shoqëruese të rekomanduara. Klikoni **Install** për t'i shtuar ose kaloni për të vazhduar.

![Hapat e rekomanduar të pluginëve](/img/installation/wizard-recommended-plugins.png)

### Përgatitur!

Kjo është ajo! Instalimi i Ultimate Multisite ju është përfunduar. Tani mund të filloni të ndërtoni platformën tuaj të Website as a Service nga **Network Admin Dashboard**.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Dashboard i Administratorit të Aplikimit me Ultimate Multisite aktiv](/img/installation/network-dashboard.png)

Shkoni dhe bëni diçka të këndshme!
