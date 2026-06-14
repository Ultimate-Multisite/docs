---
title: Тема құру мүмкіндіктері
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Тема Создатель Возможностей: Шаблон и Активация Блочных Тем

Superdav AI Agent v1.12.0 представляет две мощные возможности, которые позволяют вам генерировать и развертывать пользовательские блочные темы прямо из чата.

## Обзор

Возможности **scaffold-block-theme** (создание шаблона) и **activate-theme** (активация темы) позволяют агентам:
- Генерировать полные, готовые к продакшену блочные темы на основе ваших требований
- Автоматически активировать темы на вашем сайте без ручного вмешательства
- Создавать целостную визуальную идентичность благодаря управляемым дизайнерским решениям

## Создание Блочного Шаблона (Scaffold Block Theme)

Возможность **scaffold-block-theme** создает новую блочную тему WordPress с полной структурой темы, включая:

- конфигурацию `theme.json` с токенами дизайна
- файлы шаблонов блоков для распространенных макетов
- пользовательские стили и вариации блоков
- метаданные темы и объявления поддержки

### Как вызвать (Invoke)

В чате с Superdav AI Agent вы можете запросить генерацию темы:

```
"Создай блочную тему под названием 'Modern Agency' с сине-беской цветовой схемой,
шрифтом без засечек и профессиональным макетом"
```

Агент сделает следующее:
1. Собрать ваши дизайнерские предпочтения через разговор
2. Сгенерировать полную структуру темы
3. Создать все необходимые файлы темы
4. Подготовить тему к активации

### Ожидаемый результат (Expected Output)

Когда возможность выполнится успешно, вы увидите:

- Подтверждение того, что тема была создана (scaffolded)
- Название и расположение темы
- Сводку примененных токенов дизайна (цвета, типографика, отступы)
- Статус готов к активации

Пример результата:
```
✓ Тема "Modern Agency" успешно создана (scaffolded)
  Расположение: /wp-content/themes/modern-agency/
  Цвета: Основной #0066CC, Вторичный #FFFFFF
  Типографика: Inter (без засечек)
  Статус: Готово к активации
```

## Активация Темы (Activate Theme)

**activate-theme** qabiliyyeti sitenizi yeni oluşturulmuş veya mevcut bir blok temaya geçirir.

### Nasıl Kullanılır

Bir tema oluşturduktan sonra onu hemen etkinleştirebilirsiniz:

```
"Modern Agency temasını etkinleştir"
```

Veya mevcut herhangi bir temayı etkinleştirmek için:

```
"Twentytwentyfour temasına geç"
```

### Beklenen Çıktı

Etkinleştirme başarılı olduğunda:

- Aktif tema onayı
- Önceki tema adı (referans için)
- Tema artık yayında olan site URL'si
- Herhangi bir tema özel kurulum notları

Örnek çıktı:
```
✓ Tema başarıyla etkinleştirildi
  Aktif tema: Modern Agency
  Önceki tema: Twentytwentyfour
  Yayında: https://yoursite.com
  Not: Düzeni doğrulamak için ana sayfanızı kontrol edin
```

## İş Akışı: Oluşturma ve Etkinleştirme

Tipik bir iş akışı her iki yeteneği de birleştirir:

1. **Tema oluşturma isteği**: "SaaS açılış sayfası için bir blok teması oluştur"
2. **Agent tema oluşturur**: Dosyaları ve tasarım jetonlarını (design tokens) üretir
3. **İnceleme ve düzenleme**: Gerekirse tasarım değişiklikleri hakkında tartışın
4. **Etkinleştirme**: "Temayı şimdi etkinleştir"
5. **Doğrulama**: Yeni tasarımın yayında olup olmadığını kontrol etmek için sitenizi ziyaret edin

## Tasarım Jetonları ve Özelleştirme

Oluşturulan temalar, WordPress tasarım jetonlarını (`theme.json` aracılığıyla) şunlar için kullanır:

- **Renkler**: Birincil, ikincil, vurgu (accent), nötr palet
- **Tipografi**: Font aileleri, boyutlar, ağırlıklar, satır yükseklikleri
- **Boşluklar**: İç dolgu (padding), dış boşluk (margin), boşluk ölçekleri (gap scales)
- **Kenarlıklar**: Yarıçap ve genişlik jetonları
- **Gölgeler**: Yükseklik seviyeleri

Bu jetonlar `theme.json` içinde merkezi olarak tutulur, böylece tüm tasarım sisteminizi tek bir dosyadan kolayca ayarlayabilirsiniz.

## Sınırlamalar ve Notlar

- Темы `/wp-content/themes/` папкасында каркас olarak oluşturulur ve WordPress isimlendirme kurallarına uymalıdır.
- Etkinleştirme işlemi için WordPress sitenizde uygun izinlere sahip olmanız gerekir.
- Temalardaki özel PHP kodları minimum düzeyde olmalıdır; karmaşık işlevsellikler için plugin kullanın.
- Blok temalar, WordPress 5.9 ve sonrası ile en iyi şekilde çalışır.

## Sorun Giderme

**Temayı oluşturduktan sonra görünmüyor**
- Tema dizininin varlığını ve doğru izinlere sahip olup olmadığını kontrol edin.
- `theme.json` dosyasının geçerli JSON olduğundan emin olun.
- Tema adının mevcut temalarla çakışmadığından emin olun.

**Etkinleştirme başarısız oluyor**
- Yönetici (administrator) yetkisine sahip olduğunuzu doğrulayın.
- Tema dizininin WordPress tarafından okunabilir olup olmadığını kontrol edin.
- Detaylar için WordPress hata günlüklerini inceleyin.

**Tasarım belirteçleri (Design tokens) uygulanmıyor**
- `theme.json` sözdiziminin doğru olduğundan emin olun.
- Herhangi bir önbellekleme eklentisini temizleyin.
- Kullandığınız tasarım belirteçlerini destekleyen WordPress sürümünüzün kontrol edildiğinden emin olun.

## Sonraki Adımlar

Temanızı etkinleştirdikten sonra şunları yapabilirsiniz:
- Tipografi, renkler ve boşlukları iyileştirmek için **Design System Aesthetics** becerisini kullanın.
- WordPress blok düzenleyici aracılığıyla bireysel blok stillerini özelleştirin.
- Temanın `style.css` dosyasına özel CSS ekleyin.
- Belirli sayfa türleri için özel blok şablonları oluşturun
