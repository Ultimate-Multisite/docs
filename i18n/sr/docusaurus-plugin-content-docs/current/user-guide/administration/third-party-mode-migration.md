---
title: Migracija u trećoj strani modifikacije
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Миграција на трећих страна (Third-Party Mode Migration)

Superdav AI Agent v1.12.0 мења начин на који се обрађују способности трећих страна. **Трећи режим sada по умолчанию је "auto"**, омогућава интеграцију са WordPress Abilities API-ом унапред на WordPress 7.0+ без ручне конфигурације.

## Шта се променило?

### Пре v1.12.0

Способности трећих страна су захтевале ручну конфигурацију:

- Морали сте експлицитно да омогућите "трећи режим" (third-party mode)
- Способности су учитаване из посебног рејстрима (registry)
- Интеграција са WordPress Abilities API-ом је била опционална
- Стари режим (legacy mode) је био по умолчанию

### Након v1.12.0

Способности трећих страна раде аутоматски:

- Трећи режим по default је "auto"
- Способности се нативно интегришу са WordPress Abilities API-ом
- Нема потребе за ручну конфигурацију на WordPress 7.0+
- Стари режим (legacy mode) је и даље доступен за старије верзије WordPress-а

## Коме это затрагива?

### Нове инсталације (WordPress 7.0+)

**Никав акциони случај није потребан.** Трећи режим се аутоматски подешава на "auto", а способности раде без додатних промена.

### Сущећуће инсталације

**Ваша подешавања су зачувана.** Ако сте користили:

- **Стари режим (Legacy mode)**: Остајете у старим режиму (није промена)
- **Ручни трећи режим**: Остајете у ручном режиму (није промена)
- **Auto режим**: Налазите се и даље у ауто режиме (није промена)

### WordPress верзије пре 7.0

**Стари режим је и даље доступен.** Ако сте на WordPress 6.x или пониже:

- Трећи режим по default је "legacy"
- Можете ручно да омогућите трећи режим ако желите
- Апгрејдирајте на WordPress 7.0+ да бисте могли користити нативни Abilities API

## Разумевање режима

### Auto Режим (Нови по default)

**Auto режим** користи нативну интеграцију са WordPress Abilities API-ом:

- Способности се региструју кроз WordPress hooks
- Потпуна компатибилност са WordPress 7.0+ Abilities API-ом
- Ауто откривање трећих страна способностей
- Нема потребе за ручном подешавањем

**Када користити**: WordPress 7.0+ са трећих страна способности (third-party abilities)

### Ручни режим (Manual Mode)

**Ручни режим** захтева експлицитно подешавање:

- Ви дефинише које треће стране способности да учитате
- Корисно за тестирање или селективно учитавање способностей
- Захтева уређивање конфигурационих фајлова
- Повећава контролу, али захтева више подешавања

**Када користити**: Тестирање, селективно учитавање способотности или прилагођене конфигурације

### Стари режим (Legacy Mode)

**Стари режим** користи стари систем трећих страна способностей:

- Прилагођени регистар способотности (а не WordPress Abilities API)
- Поштује старије верзије WordPress-а
- Нема уграђену интеграцију са WordPress-ом
- Престаје да се користи, али је и даље подржаван

**Када користити**: WordPress 6.x или старији, или када вам је потребно поштовање старих верзија (legacy compatibility)

## Провера тренутног режима

### Преко Админ панели

1. Идите на **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Потражите подешавање **Third-Party Mode**
3. Вићете видети ваш тренутни режим и опције за промену

### Преко кода

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', или 'legacy'
```

## Промена режима

### Прелази на Автоматички режим (Auto Mode)

Ако сте на WordPress 7.0+ и желите да користите ауто режим:

1. Идите на **Superdav AI Agent** → **Settings**
2. Нађите **Third-Party Mode**
3. Избери **Auto (WordPress Abilities API)**
4. Кликните на **Save**

Superdav AI Agent ће аутоматски пронаћи и регистровати треће стране способности.

### Прелази на Ручни режим (Manual Mode)

Ако желите да ручно контролишете које способности се учитавају:

1. Идите на **Superdav AI Agent** → **Settings**
2. Нађите **Third-Party Mode**
3. Избери **Manual**
4. Кликните на **Save**
5. Уредите свой конфигурациони фајл да дефинише које способности треба учитати

### Прелази на Стари режим (Legacy Mode)

Ако вам је потребно поштовање старих верзија:

1. Idite u **Superdav AI Agent** $\rightarrow$ **Settings**
2. Pronađite **Third-Party Mode** (Mod za treće strane)
3. Izaberite **Legacy** (Stari način)
4. Kliknite na **Save** (Sačuvaj)

## Prednosti Auto Moda

### Automatsko otkrivanje (Automatic Discovery)

Sposobnosti se automatski otkrivaju iz:

- Instaliranih pluginova
- Aktivnog teme
- Obaveznih pluginova
- Drop-in pluginova

Ne treba ručna registracija.

### Prirodna integracija (Native Integration)

Sposobnosti se integrisaju sa WordPress Abilities API-jem:

- U skladu sa WordPress core-om
- Radi sa WordPress admin panelom
- Kompatibilno sa drugim pluginovima koji koriste Abilities API
- Spremni za budućnost kako WordPress evoluira

### Jednostavno upravljanje (Simplified Management)

- Nema potrebe da uređujete konfiguracione fajlove
- Nema ručne registracije sposobnosti
- Kontrole vidljivosti sposobnosti rade automatski
- Admin obaveštenja vas upozoravaju na neklasifikovane sposobnosti

### Bolje performanse (Better Performance)

- Sposobnosti se keširaju (cache)
- Lazy-load se učitavaju po potrebi
- Optimizovano za WordPress 7.0+

## Put migracije

### Ako ste na WordPressu 6.x

1. **Ažurirajte do WordPressa 7.0+** (kada budete spremni)
2. **Ažurirajte Superdav AI Agent** do verzije v1.12.0+
3. **Promenite mod za treće strane na Auto** (opciono; legacy mode i dalje radi)
4. **Pregledajte vidljivost sposobnosti** da biste osigurali ispravne kontrole pristupa

### Ako ste na WordPressu 7.0+

1. **Ažurirajte Superdav AI Agent** do verzije v1.12.0+
2. **Proverite da je mod za treće strane postavljen na Auto** (trebalo bi biti podrazumevano)
3. **Pregledajte vidljivost sposobnosti** da biste osigurali ispravne kontrole pristupa
4. **Testirajte sposobnosti trećih strana** da biste potvrdili da rade

## Rešavanje problema (Troubleshooting)

### Sposobnosti se ne učitavaju u auto modu

- Proverite da li ste na WordPressu 7.0+
- Proverite da li je mod za treće strane postavljen na "Auto"
- Proverite da li je plugin koji pruža sposobnost aktivan
- Proverite WordPress error logove za greške pri registraciji

### Želim da zadržim legacy mode

- Idite u **Settings** $\rightarrow$ **Third-Party Mode** (Podešavanja $\rightarrow$ Mod za treće strane)
- Izaberite **Legacy** (Stari način)
- Kliknite na **Save** (Sačuvaj)
- Legacy mode će i dalje raditi

### Moje prilagođene sposobnosti se ne prikazuju

- Proverite da su registrovane putem WordPress hookova
- Proverite da li ispravno implementirate Abilities API
- Pregledajte WordPress logove grešaka
- Koristite admin stranicu **Ability Visibility** da vidite sve registrovane sposobnosti

### Dobimam poruke o "neklasifikovanoj sposobnosti" (unclassified ability)

- Ovo je normalno za nove treće strane sposobnosti
- Pregledajte ih i klasifikujte u adminu notifikaciji
- Pogledajte **Ability Visibility** za detalje o klasifikaciji

## Retrokompatibilnost

### Postojeće konfiguracije

Ako imate postojeće konfiguracije trećih strana sposobnosti:

- **Legacy mode (Stari način)**: Vaša konfiguracija i dalje radi
- **Manual mode (Ručni način)**: Vaša konfiguracija i dalje radi
- **Auto mode (Automatski način)**: Vaša konfiguracija se ignoriše (auto mode preuzima kontrolu)

Da biste zadržali svoju prilagođenu konfiguraciju, ostaj u Manual ili Legacy modu.

### Vremenski okvir za zastarevanje (Deprecation Timeline)

- **v1.12.0**: Legacy i Manual modi su i dalje potpuno podržani
- **v1.13.0+**: Legacy mod može prikazivati obaveštenja o zastarevanju
- **v2.0.0**: Legacy mod bi mogao biti uklonjen (TBD)

## Najbolje prakse (Best Practices)

### Za nove instalacije

- Koristite Auto mode (to je podrazumevano podešavanje)
- Pustite da Superdav AI Agent automatski otkrije sposobnosti
- Koristite Ability Visibility za kontrolu pristupa

### Za postojeće instalacije

- Ažurirajte na WordPress 7.0+ kada je moguće
- Prebacite se na Auto mode za pojednostavljeno upravljanje
- Pregledajte i klasifikujte sposobnosti koristeći Ability Visibility

### Za prilagođene sposobnosti (Custom Abilities)

- Registrujte sposobnosti putem WordPress hookova (Abilities API)
- Izbegavajte prilagođene registre sposobnosti
- Testirajte na WordPress 7.0+ sa Auto mode-om

## Sledeći koraci

1. **Proverite verziju WordPressa**: Proverite da koristite WordPress 7.0+ za Automatski način rada (Auto mode).
2. **Pregledajte svoj režim trećih strana**: Idite u Podešavanja (Settings) i proverite trenutni režim koji koristite.
3. **Ažurirajte ako je potrebno**: Prebacite na Automatski način rada ako koristite WordPress 7.0+.
4. **Klasifikujte sposobnosti**: Pregledajte i klasifikujte bilo koje neklasifikovane sposobnosti.
5. **Testiranje**: Proverite da li vam sposobnosti trećih strana rade ispravno.

## Povezani teme

- **Vidljivost sposobnosti (Ability Visibility)**: Kontrolišite gde su prikazane određene sposobnosti.
- **WordPress Abilities API**: Naučite kako se registruju nativne WordPress sposobnosti.
- **Razvoj sposobnosti trećih strana (Third-Party Ability Development)**: Kreirajte sposobnosti koje rade sa Automatskim načinom rada.
