---
title: Veštine s obzirom na temu
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Veštine s obzirom na temu (Theme-Aware Skills)

Superdav AI Agent v1.10.0 dolazi sa četiri nove ugrađene veštine koje su prilagođene temi koju trenutno koristite u WordPressu. Ove veštine pružaju specijalizovanov savet i mogućnosti prilagođene arhitekturi i karakteristikama vaše teme.

## Šta su Veštine s obzirom na temu?

Veštine s obzirom na temu su unapred podešene baze znanja i setovi alata koje AI asistent automatski bira na osnovu trenutno aktivne WordPress teme na vašem sajtu. Kada promenite teme, dostupne veštine asistenta se automatski ažuriraju — nema potrebe za ručnom konfiguracijom.

Svaka veština uključuje:

- **Tematsku dokumentaciju** — savete o korišćenju i prilagođavanju teme
- **Referanse blokova i šablona (patterns)** — dostupni blokovi, šabloni i opcije dizajna
- **Primerove prilagođavanja** — kod fragmente i obrasce konfiguracije za uobičajene zadatke
- **Najbolje prakse** — preporuke za arhitekturu teme i radni tok

## Dostupne Veštine s obzirom na temu

### Teme sa blokovima (Block Themes)

**Primeti se na:** Teme koje koriste arhitekturu zasnovanu na blokovima WordPressa (Full Site Editing).

Veština za Teme sa blokovima pruža savete o:

- Kreiranju i uređivanju šablona pomoću redaktora blokova
- Radu sa šablonima (patterns) i ponovnim blokovima
- Prilagođavanju globalnih stilova i podešavanja `theme.json` fajla
- Korišćenju tematskih blokova i varijacija
- Kreiranju prilagođenih šablona blokova za vaš sajt

**Automatski se aktivira kada:** Vaša aktivna tema je tema sa blokovima (podržava funkciju `block-templates`).

### Klasične teme (Classic Themes)

**Primeti se na:** Tradicionalne WordPress teme koje koriste PHP šablone i klasični editor.

Veština za Klasične teme pruža savete o:

Ради рада: Работа са PHP шаблонима и хуковима
Прилагођавање изгледа теме кроз Customizer
Коришћење области виджетова и боксовара
Измењавање CSS-а и развој дитсем (child theme)
Разумевање хијерархије тема и шаблона тагова

**Ауто активира се када:** Ваш активни тема је класичан (не блочни) тема.

### Kadence Blocks

**Примењује се на:** Саит који користе плагин Kadence Blocks за напредну дизајн основану на блоковима.

Велика значај Каденс Блокова пружа упутства о:

- Користењу напредне библиотеке блокова Каденса (Hero, Testimonials, Pricing и срв)
- Конфигурисању подешавања блокова Каденса и респонзитивних опција
- Изградњи прилагођених листа са помоћу Kadence сетки и контейнер блокова
- Интеграцији блокова Каденса са вашим темом
- Искористању дизајн система и претпочитања Каденса

**Ауто активира се када:** Плагин Kadence Blocks је активен на вашем саиту.

### Kadence Theme

**Примењује се на:** Саит који користе тему Kadence за блочни дизајн и прилагођавање.

Велика значај Теме Kadence пружа упутства о:

- Прилагођавању теме Kadence кроз глобал стилове и theme.json
- Коришћењу уграђених обрацена шаблона и таблица Каденса
- Конфигурисању подешавања и опција Теме Kadence
- Изградњи прилагођених дизајна са помоћу дизајн система Kadence
- Интеграцији Kadence са популарним плагинимама и алатима

**Ауто активира се када:** Тема Kadence је ваша активна тема.

## Како се Избирају Скилди (Skills)

Асистент аутоматски препознаје вашу активну тему и инсталисане плагинове на сваком поруци. Ако је доступен скилд који одговара вашој теми, он ће бити аутоматски учитан у контекст асистента. Не морате ручно да омогућите или пребаците скилдове.

### Множество Скилдова

Ако се на вашем сајту примени више вештина (на пример, ако имате активне и Kadence Blocks и Kadence Theme), асистент има доступ на све применљиве вештине и може да се придружи свој упутствима из сваке од њих.

### Преласка међу темама (Switching Themes)

Када промените активну тему, доступне вештине асистента се аутоматски освеже на следећем поруци. На пример:

1. Користите блок тему са активном вештином **Block Themes**.
2. Прелазите на класичну тему.
3. На следећој поруци, вештина **Classic Themes** се аутоматски учитава, а вештина **Block Themes** више није доступна.

## Коришћење вештина сасвим зависних од теме (Using Theme-Aware Skills)

Да бисте могли да користите вештину која је свест тема (theme-aware skill), просто опишите шта желите да урадите у чат интерфејсу. Асистент ће аутоматски поменути прикладне упутства за одговарајућу вештину.

### Примери промта (Example Prompts)

**За Block Themes:**
> "Создај секцију за 헤рој са фоном и централизованим текстовима користећи блок шаблоне."

**За Classic Themes:**
> "Додајте прилагођен арет за виджет у боксу на страници користећи дитсу (child theme)."

**За Kadence Blocks:**
> "Изградите секцију са сведочењима користећи блок Kadence Testimonials."

**За Kadence Theme:**
> "Прилагодите распоред и стилизацију менија у поглављу (header layout and navigation menu styling)."

Асистент ће дати специфична упутства за тему и примери кода prilадиле за вашу активну тему и плагинове.

:::note
Вештине сасвим зависних од теме су аутоматски доступни у Superdav AI Agent v1.10.0 и новијим верзијама. Не је потребно додатна подешавања или конфигурација.
:::
