---
title: WP-CLI Referansı
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI Referansı

Gratis AI Agent, ajanı test etmek, yetenekleri yönetmek ve ajanın durumunu komut satırından sorgulamak için `wp gratis-ai-agent` komut ailesini kullanır. Tüm komutlar WP-CLI 2.0 veya daha yüksek sürüm gerektirir.

## Kurulum

Plugin etkinleştirildiğinde WP-CLI komutları otomatik olarak kaydedilir. Kontrol etmek için şunları kullanın:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

Ajan Yetenekleri (Agent Capabilities) benchmark paketini çalıştırır. Bu paket, tüm yetenek yüzeyini test eden karmaşık, çok adımlı bir komut dizisidir. Bu komutu, model performansını değerlendirmek, farklı yapay zeka sağlayıcılarını karşılaştırmak veya üretime dağıtmadan önce yetenek paketlerini doğrulamak için kullanın.

### Özet (Synopsis)

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Seçenekler (Options)

| Seçenek | Açıklama |
|---|---|
| `--question=<id>` | Tüm paketi çalıştırmak yerine, ID ile tek bir benchmark sorusu çalıştırır. |
| `--provider=<provider>` | Bu çalıştırma için yapılandırılmış AI sağlayıcısını geçersiz kılar (örneğin, `anthropic`, `openai`). |
| `--model=<model>` | Bu çalıştırma için yapılandırılmış modeli geçersiz kılar (örneğin, `claude-opus-4-6`, `gpt-4o`). |
| `--output=<format>` | Çıktı formatı: `table` (varsayılan), `json`, `csv`. |
| `--save` | Benchmark sonuçlarını geçmiş karşılaştırma için veritabanına kaydeder. |

### Örnekler (Examples)

Mevcut sağlayıcı ve model ile tüm benchmark paketini çalıştırın:

```bash
wp gratis-ai-agent benchmark
```

Tek bir soruyu (`q-restaurant-website`) çalıştırın ve çıktıyı JSON olarak alın:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Belirli bir modelde çalıştırın ve sonuçları kaydedin:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Çıktı (Output)

Benchmark, aşağıdaki sütunlara sahip, her soru için bir satır çıktısı verir:

| Sütun | Açıklama |
|---|---|
| `ID` | Soru tanımlayıcısı |
| `Description` | Benchmark senaryosunun kısa özeti |
| `Score` | Geçti/kaldı veya sayısal puan (0–100) |
| `Abilities Used` | Çağrılan yeteneklerin virgülle ayrılmış listesi |
| `Tokens` | Tüketilen toplam token sayısı |
| `Duration` | Saniye cinsinden geçen süre |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmark Soruları

Varsayılan paket şunları içerir:

| ID | Senaryo |
|---|---|
| `q-portfolio-site` | Bir Proje Kategorisi taksonomisi ile bir Portfolyo CPT oluşturma ve bir blok deseni kaydetme |
| `q-restaurant-website` | Bir menü CPT'si, rezervasyon formu ve navigasyon ile tam bir restoran web sitesi oluşturma |
| `q-dark-mode-theme` | Bir koyu mod tasarım ön ayarı uygulama ve marka renklerini enjekte etme |
| `q-nav-builder` | İç içe bir açılır menü ile dört öğeli bir ana navigasyon menüsü oluşturma |
| `q-options-roundtrip` | Bir dizi WordPress seçeneğini okuma, değiştirme ve geri yükleme |
| `q-ability-install` | Açıklanan bir kullanım durumu için en uygun yetenek paketini keşfetme ve kurma |

Ek sorular, `gratis_ai_agent_benchmark_questions` filtresi aracılığıyla kaydedilebilir.

---

## `wp gratis-ai-agent abilities`

Kurulu yetenekleri ve yetenek paketlerini yönetir.

### `wp gratis-ai-agent abilities list`

Kayıtlı tüm yetenekleri, kaynaklarını (çekirdek veya paket) ve mevcut durumlarını listeler.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Seçenekler**

| Seçenek | Açıklama |
|---|---|
| `--format=<format>` | Çıktı formatı: `table` (varsayılan), `json`, `csv`. |

**Örnek çıktı**

```
Ability                   Source                          Status
register_post_type        gratis-ai-agent (core)          active
list_post_types           gratis-ai-agent (core)          active
delete_post_type          gratis-ai-agent (core)          active
register_taxonomy         gratis-ai-agent (core)          active
inject_custom_css         gratis-ai-agent (core)          active
apply_theme_json_preset   gratis-ai-agent (core)          active
create_product            gratis-ai-agent-woocommerce     active
```

---

### `wp gratis-ai-agent abilities install`

Kayıttan bir yetenek paketini indirir ve etkinleştirir.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argümanlar**

| Argüman | Açıklama |
|---|---|
| `<slug>` | Yetenek paketinin plugin slug'ı, örn: `gratis-ai-agent-woocommerce`. |

**Örnek**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: gratis-ai-agent-woocommerce kuruldu. 3 yetenek eklendi: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

Belirli bir yeteneği, paketi kaldırmadan devre dışı bırakır. Bu, ajanın belirli bir sitedeki kapsamını kısıtlamak için kullanışlıdır.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Örnek**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: 'delete_post_type' yeteneği devre dışı bırakıldı.
```

---

### `wp gratis-ai-agent abilities enable`

Daha önce devre dışı bırakılmış bir yeteneği yeniden etkinleştirir.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

Mevcut ajan yapılandırmasını ve bağlantı durumunu gösterir.

```bash
wp gratis-ai-agent status
```

**Örnek çıktı**

```
Plugin Version:    1.4.0
AI Provider:       Anthropic
Model:             claude-sonnet-4-6
Provider Status:   Connected
Abilities Loaded:  24
Benchmark Results: 3 saved runs (last: 2026-04-15)
Options Blocklist: 18 entries
```

---

## `wp gratis-ai-agent logs`

Hata ayıklama günlüklerinden (debug log) son ajan etkinliklerini gösterir.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Seçenekler**

| Seçenek | Açıklama |
|---|---|
| `--last=<n>` | Son N günlük girdisini gösterir. Varsayılan `50`. |
| `--level=<level>` | Filtreleme seviyesi: `info`, `warning`, `error`. |
| `--ability=<ability>` | Yetenek adına göre filtreleme yapar. |

**Örnek**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

Ajan durumunu sıfırlar: enjekte edilen CSS'yi temizler, ajana kayıtlı CPT'leri ve taksonomileri kaldırır, global stilleri sıfırlar ve ajanın seçenekler önbelleğini boşaltır. Plugin'i veya ayarlarını kaldırmaz.

```bash
wp gratis-ai-agent reset [--yes]
```

Onay istemini atlamak için `--yes` ekleyin.

```bash
wp gratis-ai-agent reset --yes
Success: Ajan durumu sıfırlandı. Temizlenenler: 2 post type, 1 taxonomy, custom CSS, global stiller geçersiz kılmaları.
```

---

## Çıkış Kodları (Exit Codes)

Tüm komutlar başarılı olduğunda `0` ile çıkar. Sıfır olmayan çıkış kodları:

| Kod | Anlamı |
|---|---|
| `1` | Genel hata (hata mesajına bakınız) |
| `2` | Sağlayıcı bağlantı hatası |
| `3` | Yetenek bulunamadı |
| `4` | Benchmark sorusu bulunamadı |
