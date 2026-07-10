---
title: Здольнасці пабудавальні тэмаў
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Зdolności Theme Builder: Сфарміраванне і актывацыя Block Themes {#theme-builder-abilities-scaffold-and-activate-block-themes}

Superdav AI Agent v1.12.0 прадстаўляе дзве магутныя здольнасці, якія дазваляюць вам ствараць і размяшчаць кастомныя block themes непасрэдна з чат-інтерфейсу.

## Агляд {#overview}

Здольнасці **scaffold-block-theme** і **activate-theme** дазваляюць агентам:
- Ствараць паўнавартасных block themes, гатовых для праектавання, на аснове вашага задання
- Аўтаматычна актываваць themes на вашым сайце без ручных дзеянняў
- Ствараць адзінатычныя візуальныя ідэнтыкеты праз кераваны працэс расправы

## Сфарміраванне Block Theme {#scaffold-block-theme}

Здольнасць **scaffold-block-theme** стварае новы WordPress block theme з паўнавартанай структуры themes, уключаючы:

- <code class="language-json">theme.json</code> канфігурацыю з design tokens
- Файлы block templates для распаўсюджаных макетаў
- Кастомныя style і варыяцыі для блоков
- Метададзеныя і дэкларацыі падтрымкі themes

### Як выкарыстоўваць {#how-to-invoke}

У вашым чаце з Superdav AI Agent вы можаце пажадаць стварэнне themes:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

Агент:
1. Збірэ напалегія вашага дизайну праз размову
2. Стварае паўнавартанную структуру themes
3. Стварае ўсе неабходныя файлы themes
4. Падрыхтоўвае theme для актывацыі

### Очагодый вынік {#expected-output}

Калі здольнасць выконваецца паспяхова, вы ўбачыце:

- Патварэнне, што theme была сфарміравана (scaffolded)
- Назва і месцазнаходжанне themes
- Рэкаптывацыя прымененых design tokens (колеры, тэкстура, адступы)
- Статус "гатова для актывацыі"

Прыклад выніку:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Актывацыя Theme {#activate-theme}

Здольнасць **activate-theme** пераключае ваш сайт на нешта новае сфармаванае або існуючае block theme.

### Як выкарыстоўваць {#how-to-invoke-1}

Пасля сфарміравання themes вы можаце актываваць яе неадкладна:

```
"Activate the Modern Agency theme"
```

Або актываваць любую існуючу theme:

```
"Switch to the Twentytwentyfour theme"
```

### Очагодый вынік {#expected-output-1}

Калі актывацыя праходзіць паспяхова:

- Патварэнне актыўнага themes
- Назва папярэдняга themes (для ўспаміну)
- URL сайта, дзе theme цяпер працуе
- Усе пазначкі налады, спецыфічныя для themes

Прыклад выніку:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## Працэс: Сфарміраванне і Актывацыя {#workflow-scaffold-and-activate}

Тυπны працэс пабірае ў спалучэнні гэтых двух здольнасцей:

1. **Запытак на стварэнне themes**: "Create a block theme for my SaaS landing page"
2. **Агент фарміруе themes**: Стварае файлы і design tokens
3. **Пагледжаць і ўдасканальваць**: Дакрэсліваць змены ў дизайне, калі гэта неабходна
4. **Актываваць**: "Activate the theme now"
5. **Пацвердзіць**: Навесці на свой сайт, каб пацвердзіць, што новы дизайн працуе

## Design Tokens і Кастымізацыя {#design-tokens-and-customization}

Сфармаваныя themes выкарыстоўваюць WordPress design tokens ( праз <code class="language-json">theme.json</code>) для:

- **Колеры**: Primary, secondary, accent, neutral palette
- **Тэкстура**: Font families, sizes, weights, line heights
- **Адступы**: Padding, margin, gap scales
- **Раўдзі**: Radius і width tokens
- **Теня**: Elevation levels

Гэтыя tokens канцэнтраваны ў <code class="language-json">theme.json</code>, што робіць лёгкім наладжанне ўсега вашага дизайн-сістэмы з аднаго файла.

## Абмежаванні і Пазначкі {#limitations-and-notes}

- Themes фарміруюцца ў `/wp-content/themes/` і павінны выконваць правілы імянавання WordPress
- Актывацыя патрабуе адпаведных правіль доступу на вашым WordPress сайце
- Кастомны PHP код у themes мінімальны; выкарыстоўвайце plugins для складанай функцыянальнасці
- Block themes найкрашта працуюць з WordPress 5.9 і па-сля

## Выяўленне праблем {#troubleshooting}

**Theme не з'яўляецца пасля сфарміравання**
- Пацверце, што каталогія themes існуюць і маюць правільныя права доступу
- Праверце, што <code class="language-json">theme.json</code> — гэта валідны JSON
- Убедзіцеся, што назва themes не супярэчвае існуючым themes

**Не ўдалося актываваць**
- Пацверце, што ў вас ёсць права адміністратара
- Праверце, што каталог themes праходны для WordPress
- Пагледзьце журналы памылак WordPress для падрабязнай інфармацыі

**Design tokens не працуюць**
- Пацверце, што składня ў <code class="language-json">theme.json</code> правільная
- Ачысціце ўсе caching plugins
- Пагледзьце, што ваша версія WordPress падтрымлівае выкарыстоўваныя tokens

## Наступныя крокі {#next-steps}

Пасля актывацыі themes вы можаце:
- Выкарыстоўваць здольнасць **Design System Aesthetics** для ўдасканалення тэкстуры, колераў і адступлення
- Кастымізаваць адрозныя style для блоков праз WordPress block editor
- Дадаць кастомны CSS у файл <code class="language-css">style.css</code> themes
- Ствараць кастомныя block templates для спецыфічных тыпаў старонкі
