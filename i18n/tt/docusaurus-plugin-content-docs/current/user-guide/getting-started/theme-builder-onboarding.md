---
title: Тема İntegrasiya Akışı
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder Onboarding Flow

Superdav AI Agent v1.12.0-da guided **Theme Builder onboarding flow** introduces a guided **Tema Builder onboarding flow**, which helps you create a custom block theme during your initial setup. This replaces the legacy Site Builder mode with a more flexible, agent-assisted approach.

## What is the Theme Builder Onboarding Flow? {#what-is-the-theme-builder-onboarding-flow}

The Theme Builder onboarding flow is an interactive setup wizard that:

- Guides you through design decisions (colors, typography, layout)
- Captures your site's visual identity preferences
- Generates a custom block theme tailored to your needs
- Activates the theme automatically when complete

This flow is powered by the **Setup Assistant agent**, which asks clarifying questions and builds your theme incrementally.

## Starting the Theme Builder Onboarding {#starting-the-theme-builder-onboarding}

### First-Run Setup {#first-run-setup}

When you first launch Superdav AI Agent on a new WordPress installation, you'll see:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Select **"Build a custom theme"** to enter the Theme Builder onboarding flow.

### Manual Activation {#manual-activation}

You can also start the Theme Builder onboarding at any time by requesting:

```
"Start the Theme Builder onboarding"
```

or

```
"Help me create a custom theme"
```

## The Onboarding Steps {#the-onboarding-steps}

### Step 1: Mode Selection {#step-1-mode-selection}

The Setup Assistant agent asks about your preference:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

**Guided mode** is recommended for most users; the agent makes design recommendations based on your industry and goals.

### Step 2: Site Specification {#step-2-site-specification}

You'll be asked about your site:

- **Сайт цель**: E-commerce, блог, портфолио, SaaS и т.д.
- **Целевая аудитория**: Кто ваши посетители?
- **Цвета бренда**: Основные и вторичные цвета (или "я не уверен")
- **Тон**: Профессиональный, креативный, игривый, минималистичный и т.д.

Эту информацию сохраняется в вашей памяти **site_brief**, на которую обращаются агенты в будущих сессиях.

### Шаг 3: Решения по дизайн-системе (Design System Decisions) {#step-3-design-system-decisions}

Агент проведет вас через выбор дизайн-токенов:

- **Типографика**: Семейство шрифтов (serif, sans-serif, monospace) и масштаб размеров
- **Цветовая палитра**: Основные, вторичные, акцентные и нейтральные цвета
- **Отступы (Spacing)**: Компактные, нормальные или просторные макеты
- **Анимация (Motion)**: Анимации и переходы (если нужно)

### Шаг 4: Генерация темы (Theme Generation) {#step-4-theme-generation}

Агент помощник по настройке создаст вашу кастомную блочную тему со следующими элементами:

- `theme.json`, содержащий все ваши дизайн-токены
- Шаблоны блоков для распространенных макетов (главная страница, блог, контактная форма)
- Стили кастомных блоков, соответствующие вашей дизайн-системе
- Метаданные темы и объявления о поддержке WordPress

### Шаг 5: Активация и проверка (Activation and Verification) {#step-5-activation-and-verification}

Тема активируется автоматически, и вы увидите следующее:

```
✓ Ваша кастомная тема теперь в работе!
  Название темы: Тема [Ваше Название Сайта]
  Цвета: [Основной] / [Вторичный]
  Типографика: [Семейство Шрифтов]

  Посетите свой сайт, чтобы увидеть новый дизайн.
```

Затем вы можете зайти на свой сайт и проверить, отображается ли тема правильно.

## Спецификация сайта и память site_brief {#site-specification-and-sitebrief-memory}

Во время настройки агент фиксирует спецификацию вашего сайта в категории памяти **site_brief**. Это включает:

- Цель и задачи сайта
- Целевая аудитория
- Цвета бренда и тон
- Дизайнерские предпочтения
- Структура контента

### Почему site_brief важен {#why-sitebrief-matters}

В будущих сессиях агенты обращаются к вашей памяти **site_brief** для:

### Sitenizin özeti görünümü (Viewing Your site_brief) {#viewing-your-sitebrief}

Aşağıdaki komutları kullanarak ajana sorabilirsiniz:

```
"Show me my site brief"
```

veya

```
"What do you know about my site?"
```

Ajans, kayıtlı site spesifikasyonunuzu gösterecektir.

## Kurulum Sonrası Özelleştirme (Customizing After Onboarding) {#customizing-after-onboarding}

Tema Oluşturucu (Theme Builder) kurulumu tamamlandıktan sonra şunları yapabilirsiniz:

### Tasarım Sistemi Estetiği Beceresini Kullanma (Use the Design System Aesthetics Skill) {#use-the-design-system-aesthetics-skill}

Tasarım iyileştirmeleri isteyebilirsiniz:

```
"Refine the typography to be more modern"
```

veya

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** size hedeflenmiş tasarım güncellemeleri konusunda yol gösterecektir.

### theme.json Dosyasını Doğrudan Düzenleme (Edit theme.json Directly) {#edit-themejson-directly}

İleri düzey kullanıcılar için, aşağıdaki ayarları değiştirmek üzere `/wp-content/themes/[theme-name]/theme.json` dosyasını düzenleyin:

- Color tokens (Renk belirteçleri)
- Typography scales (Tipografi ölçekleri)
- Spacing values (Boşluk değerleri)
- Border and shadow definitions (Kenarlık ve gölge tanımları)

### Özel Blok Şablonları Oluşturma (Create Custom Block Templates) {#create-custom-block-templates}

WordPress blok düzenleyicisini kullanarak şunlar için özel şablonlar oluşturabilirsiniz:

- Homepage layouts (Ana sayfa düzenleri)
- Blog post pages (Blog yazısı sayfaları)
- Product pages (Ürün sayfaları)
- Contact forms (İletişim formları)

## Karşılaştırma: Eski vs. Yeni Kurulum (Comparison: Old vs. New Onboarding) {#comparison-old-vs-new-onboarding}

| Özellik | Site Builder (Eski) | Theme Builder (Yeni) |
|---------|----------------------|-------------------|
| Kurulum yöntemi | Wizard-based form (Sihirli değnek tabanlı form) | Agent-guided conversation (Ajans rehberli konuşma) |
| Tema oluşturma | Limited templates (Sınırlı şablonlar) | Custom scaffolding (Özel iskelet) |
| Tasarım belirteçleri | Manual entry (Manuel giriş) | Guided decisions (Rehberli kararlar) |
| Esneklik | Fixed options (Sabit seçenekler) | Customizable (Özelleştirilebilir) |
| Gelecekteki güncellemeler | Not referenced (Referans verilmiyor) | Stored in site_brief (site_brief'te saklanıyor) |

## Sorun Giderme (Troubleshooting) {#troubleshooting}

**Kurulum akışı tamamlanmadı (The onboarding flow didn't complete)**
- Akışı yeniden başlatın: "Start the Theme Builder onboarding" (Theme Builder kurulumunu başlat)
- WordPress kurulumunuzun güncel olduğundan emin olun.
- Setup Assistant ajansının etkinleştirilip etkinleştirilmediğini kontrol edin.

**Мой site_brief kullanılmıyor**
- Ajanın belleğe erişimi olup olmadığını kontrol edin
- Ajanı "site brief'imi hatırlamaya" söyleyin
- Ayarlarınızda belleğin etkinleştirilip edilmediğini kontrol edin

**Oluşturulan tema tercihlerime uymuyor**
- Onu iyileştirmek için Design System Aesthetics becerisini kullanın
- Ajanı "[belirli değişikliklerle] temayı yeniden oluşturmaya" söyleyin
- Hassas kontrol için theme.json dosyasını doğrudan düzenleyin

## Sonraki Adımlar {#next-steps}

Tema Oluşturucu (Theme Builder) kurulumunu tamamladıktan sonra:

1. **Sitenizi doğrulayın**: Yeni temayı görmek için sitenize gidin
2. **Tasarımı iyileştirin**: Ayarlamalar yapmak için Design System Aesthetics becerisini kullanın
3. **İçerik ekleyin**: Sitenizin içeriğini oluşturmaya başlayın
4. **Yetenekleri keşfedin**: scaffold-block-theme ve activate-theme gibi diğer ajan yeteneklerini öğrenin
