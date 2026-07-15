---
title: Multisite Setup Wizard
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite Setup Wizard

Ultimate Multisite включва вграден Wizard, който автоматично превръща стандартна WordPress инсталация в мрежа WordPress Multisite. Това елиминира нуждата от ръчно редактиране на `wp-config.php` или изпълнение на команди в базата данни.

:::tip
Ако вашата WordPress инсталация вече работи като мрежа Multisite, можете да пропуснете този етап изцяло. Wizard-ът се появява само когато Multisite не е активиран.
:::

## Кога се появява Wizard-ът? {#when-does-the-wizard-appear}

Когато активирате Ultimate Multisite на стандартна (не-Multisite) WordPress инсталация, plugin-ът открива, че Multisite не е активиран и автоматично ви пренасочва към Multisite Setup Wizard, вместо към обикновения Wizard за настройка.

Можете също така да го отворите директно на **WP Admin > Ultimate Multisite > Multisite Setup**.

## Предварителни изисквания {#prerequisites}

Преди да стартирате Wizard-а, уверете се, че:

- Имате **административен достъп** до вашата WordPress инсталация
- Файлът `wp-config.php` на сървъра ви е **записваем** от уеб сървъра
- Имате **актуален бекъп** на файловете и базата данни

:::warning
Wizard-ът променя вашия файл `wp-config.php` и създава нови таблици в базата данни. Винаги създавайте бекъп, преди да продължите.
:::

## Стъпка 1: Welcome {#step-1-welcome}

Първият екран обяснява какво е WordPress Multisite и какво ще направи Wizard-ът:

- Активира функцията Multisite в конфигурацията на WordPress
- Създава необходимите таблици в базата данни за мрежата
- Добавя необходимите константи за multisite в `wp-config.php`
- Активира Ultimate Multisite на ниво мрежа

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Кликнете върху **Continue**, за да продължите.

## Стъпка 2: Network Configuration {#step-2-network-configuration}

Този етап ви пита да конфигурирате настройките на мрежата си.

### Site Structure {#site-structure}

Изберете как ще бъдат организирани сайтовете на вашата мрежа:

- **Sub-domains** (Препоръчително) — Сайтовете получават собствен поддомейн, напр. `site1.yourdomain.com`
- **Sub-directories** — Сайтовете се създават като пътища, напр. `yourdomain.com/site1`

:::note
Ако изберете поддомейни, ще трябва да конфигурирате **wildcard DNS** и **wildcard SSL сертификат** за домейна си. Повечето хостинг доставчици за WordPress управляват това автоматично. Вижте [Ultimate Multisite 101](./ultimate-multisite-101) за подробно сравнение.
:::

### Network Title {#network-title}

Поставете име за вашата мрежа. По подразбиране това е текущото име на сайта ви, към което е добавено "Network". По-късно можете да го промените от настройките на мрежата.

### Network Admin Email {#network-admin-email}

Имейл адресът, използван за известия за администриране на мрежата. По подразбиране това е имейл адресът на текущия потребител.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

След попълване на полетата, кликнете върху **Continue**, за да продължите.

## Стъпка 3: Installation {#step-3-installation}

Кликнете върху бутона **Install**, за да започнете. Wizard-ът изпълнява пет автоматизирани стъпки последователно, като всяка показва напредъка си в реално време:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Step | Description |
|------|-------------|
| **Enable Multisite** | Добавя константата `WP_ALLOW_MULTISITE` в `wp-config.php` |
| **Create Network** | Създава таблиците в базата данни за multisite (`wp_site`, `wp_sitemeta`, `wp_blogs` и др.) и ги попълва с конфигурацията на вашата мрежа |
| **Update Configuration** | Добавя финалните константи за multisite в `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE` и др.) |
| **Fix Cookies** | Гарантира, че URL на сайта е коректен в метаданните на мрежата, за да се предотврати проблем с автентикацията след активиране |
| **Network Activate Plugin** | Активира Ultimate Multisite на ниво мрежа, така че да работи във цялата мрежа |

Всеки етап показва един от следните статуси:

- **Pending** — Изчакване на обработка
- **Installing...** — В процес на изпълнение
- **Success!** — Успешно завършено
- **Error message** — Настъпи грешка (съобщението ще описва проблема)

След като всички стъпки завършат успешно, ще видите зелен статус "Success!" за всеки елемент:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

След това Wizard-ът автоматично продължава към екрана за завършване.

## Стъпка 4: Complete {#step-4-complete}

След като инсталацията приключи, ще видите съобщение за успех, потвърждаващо, че WordPress Multisite е активиран.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Сега можете да продължите с Ultimate Multisite setup wizard, за да конфигурирате вашата WaaS платформа (детайли за компанията, стандартно съдържание, платежни системи и др.).

:::note
След завършване на инсталацията на multisite, браузърът ви ще бъде пренасочен през новоактивирания административен панел на мрежата. Може да се наложи отново да влезете в системата, тъй като бисквитките за автентикация се актуализират за средата Multisite.
:::

## Ръчно настройване (Fallback) {#manual-setup-fallback}

Ако Wizard-ът не може да запише във вашия файл `wp-config.php` (поради права на файлове или ограничения на сървъра), той ще покаже точния код, който трябва да добавите ръчно:

1. **Константите за wp-config.php**, които трябва да бъдат добавени над линията `/* That's all, stop editing! */`
2. **Правилата за rewrite на .htaccess**, подходящи за избраната от вас структура на сайтовете (поддомейн или поддиректория)

След извършване на ръчните промени, освежете страницата и Wizard-ът ще открие, че multisite вече е активно.

## Отстраняване на неизправности {#troubleshooting}

### Wizard-ът казва, че wp-config.php не е записваем {#the-wizard-says-wp-configphp-is-not-writable}

Процесът на вашия уеб сървър трябва да има права за запис към файла `wp-config.php`. Можете или:

- Временно да промените правата на файла на `644` или `666`
- Да използвате инструкциите за ръчно настройване (fallback), предоставени от Wizard-а
- Да поискате помощ от вашия хостинг доставчик

### Сайтовете не са достъпни след настройката (поддомейни) {#sites-are-not-accessible-after-setup-subdomains}

Ако сте избрали структура с поддомейни, трябва да конфигурирате **wildcard DNS** за домейна си. Добавете DNS запис:

```
Type: A (или CNAME)
Host: *
Value: [IP адрес на вашия сървър]
```

Проверете с вашия хостинг доставчик, ако не сте сигурни как да конфигурирате това.

### Проблеми с автентикацията след настройката {#authentication-issues-after-setup}

Ако сте изlogout-ни или изпитате грешки с бисквитките след настройката на multisite:

1. Изчистете бисквитките на браузъра си за сайта
2. Влезте отново на `yourdomain.com/wp-login.php`
3. Ако проблемът продължи, проверете дали вашият `wp-config.php` не е задал `COOKIE_DOMAIN` на `false` — това е известен проблем при инсталации с поддомейни Multisite.

### Етапът се провали по време на инсталацията {#a-step-failed-during-installation}

Ако един от етапите на инсталацията покаже грешка:

1. Забележете показаното съобщение за грешка
2. Върнете се към етапа на конфигурация и опитайте отново
3. Ако грешката продължи, проверете лога на грешки на PHP на сървъра си за повече детайли
4. Етапите, които вече са завършени, ще бъдат пропускани при следващи изпълнения (инсталаторът е идемпотентен)
