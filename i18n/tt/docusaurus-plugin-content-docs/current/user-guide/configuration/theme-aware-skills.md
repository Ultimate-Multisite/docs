---
title: Тема-адалы көндүмдәр
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Tema-Aware Skills

Superdav AI Agent v1.10.0 dört yeni tema duyarlı yerleşik beceri (skill) getiriyor ki bunlar aktif WordPress temanıza otomatik olarak uyum sağlar. Bu beceriler, temanızın mimarisine ve özelliklerine özel uzman rehberlik ve yetenekler sunar.

## Tema Duyarlı Beceriler Nedir? {#what-are-theme-aware-skills}

Tema duyarlı beceriler, sitenizde şu anda aktif olan WordPress temasına dayanarak yapay zeka asistanının otomatik olarak seçtiği önceden yapılandırılmış bilgi tabanları ve araç setleridir. Temalar arasında geçtiğinizde, asistanın mevcut becerileri otomatik olarak güncellenir — manuel yapılandırma gerekmez.

Her beceri şunları içerir:

- **Tema özel dokümantasyonu** — temayı kullanma ve özelleştirme konusunda rehberlik
- **Blok ve desen referansları (pattern)** — mevcut bloklar, desenler ve tasarım seçenekleri
- **Özelleştirme örnekleri** — yaygın görevler için kod parçacıkları ve yapılandırma kalıpları
- **En iyi uygulamalar (Best practices)** — temanın mimarisi ve iş akışı için öneriler

## Mevcut Tema Duyarlı Beceriler {#available-theme-aware-skills}

### Blok Temaları (Block Themes) {#block-themes}

**Uygulanır:** WordPress blok tabanlı (Full Site Editing) mimarisini kullanan temalara.

Blok Temalar becerisi şunlar hakkında rehberlik sağlar:

- Blok düzenleyiciyi kullanarak şablon oluşturma ve düzenleme
- Blok desenleri ve yeniden kullanılabilir bloklarla çalışma
- Genel stilleri ve theme.json ayarlarını özelleştirme
- Tema bloklarını ve varyasyonlarını kullanma
- Siteniz için özel blok desenleri oluşturma

**Ne zaman otomatik etkinleşir:** Aktif temanız bir blok teması olduğunda ( `block-templates` özelliğini destekler).

### Klasik Temalar (Classic Themes) {#classic-themes}

**Uygulanır:** PHP şablonları ve klasik düzenleyici kullanan geleneksel WordPress temalarına.

Klasik Temalar becerisi şunlar hakkında rehberlik sağlar:

PHP шаблон dosyaları ve hook'lar ile çalışma
Tema görünümünü Customizer aracılığıyla özelleştirme
Widget alanları ve yan çubuklar kullanma
CSS'i değiştirme ve child theme geliştirme
Tema hiyerarşisini ve template tag'lerini anlama

**Aşağıdaki durumlarda otomatik olarak etkinleşir:** Aktif temanız klasik (blok olmayan) tema olduğunda.

### Kadence Blocks {#kadence-blocks}

**Uygulanır:** Gelişmiş blok tabanlı tasarım için Kadence Blocks eklentisini kullanan siteler.

Kadence Blocks becerisi şunlar hakkında rehberlik eder:

- Kadence'in gelişmiş blok kütüphanesini (Hero, Testimonials, Pricing vb.) kullanma
- Kadence blok ayarlarını ve duyarlı seçeneklerini yapılandırma
- Kadence'in grid ve container blokları ile özel düzenler oluşturma
- Kadence bloklarını temanızla entegre etme
- Kadence'in tasarım sisteminden ve ön ayarlardan yararlanma

**Aşağıdaki durumlarda otomatik olarak etkinleşir:** Kadence Blocks eklentisi sitenizde aktif olduğunda.

### Kadence Theme {#kadence-theme}

**Uygulanır:** Blok tabanlı tasarım ve özelleştirme için Kadence temasını kullanan siteler.

Kadence Theme becerisi şunlar hakkında rehberlik eder:

- Global stiller ve theme.json aracılığıyla Kadence temasını özelleştirme
- Kadence'in yerleşik blok kalıplarını ve şablonlarını kullanma
- Kadence tema ayarlarını ve seçeneklerini yapılandırma
- Kadence'in tasarım sistemiyle özel tasarımlar oluşturma
- Popüler eklentiler ve araçlarla Kadence'i entegre etme

**Aşağıdaki durumlarda otomatik olarak etkinleşir:** Kadence teması aktif temanız olduğunda.

## Becerilerin Seçilmesi {#how-skills-are-selected}

Asistan her mesajda aktif temanızı ve kurulu eklentileri otomatik olarak algılar. Eşleşen tema farkındalığı olan bir beceri mevcutsa, bu beceri asistanın bağlamına otomatik olarak yüklenir. Becerileri manuel olarak etkinleştirmenize veya değiştirmenize gerek yoktur.

### Birden Fazla Beceri {#multiple-skills}

Если на вашем сайте применяется несколько навыков (например, если у вас активны как Kadence Blocks, так и Kadence Theme), ассистент имеет доступ ко всем применимым навыкам и может ссылаться на руководство из каждого из них.

### Переключение тем {#switching-themes}

Когда вы меняете активную тему, доступные навыки ассистента автоматически обновляются в следующем сообщении. Например:

1. Вы используете блочную тему с активным навыком **Block Themes**.
2. Вы переключаетесь на классическую тему.
3. В вашем следующем сообщении навык **Classic Themes** загружается автоматически, а навык **Block Themes** больше недоступен.

## Использование тематически-зависимых навыков (Theme-Aware Skills) {#using-theme-aware-skills}

Чтобы использовать навык, который зависит от темы, просто опишите, что вы хотите сделать в чат-интерфейсе. Ассистент автоматически будет ссылаться на руководство соответствующего навыка.

### Примеры запросов {#example-prompts}

**Для блочных тем (Block Themes):**
> "Создайте секцию героя с фоновым изображением и центрированным текстом, используя паттерны блоков."

**Для классических тем (Classic Themes):**
> "Добавьте пользовательскую область виджета в боковую панель, используя дочернюю тему."

**Для Kadence Blocks:**
> "Создайте секцию отзывов, используя блок Kadence Testimonials."

**Для Kadence Theme:**
> "Настройте макет шапки и стилизацию навигационного меню."

Ассистент предоставит руководство и примеры кода, специфичные для вашей активной темы и плагинов.

:::note
Тематически-зависимые навыки автоматически доступны в Superdav AI Agent v1.10.0 и более поздних версиях. Дополнительная настройка или конфигурация не требуются.
:::
