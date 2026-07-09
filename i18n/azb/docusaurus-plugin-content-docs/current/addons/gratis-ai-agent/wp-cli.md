---
title: WP-CLI Reference
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI Referansı {#wp-cli-reference}

Gratis AI Agent, ajanı test etmek, yetenekleri yönetmek ve komut satırından ajanın durumunu sorgulamak için `wp gratis-ai-agent` komut ailesini kullanır. Tüm komutlar WP-CLI 2.0 veya daha yüksek sürüm gerektirir.

## Kurulum {#installation}

Eklenti aktif olduğunda WP-CLI komutları otomatik olarak kaydedilir. Kontrol etmek için şunu kullanın:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Ajan Yetenekleri (Agent Capabilities) test paketini çalıştırır. Bu paket, ajanın tüm yeteneklerini zorlayan karmaşık, çok adımlı komutlardan oluşur. Bu komutu, model performansını değerlendirmek, farklı yapay zeka sağlayıcılarını karşılaştırmak veya üretime geçirmeden önce yetenek paketlerini doğrulamak için kullanın.

### Özet {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Seçenekler {#options}

| Seçenek | Açıklama |
|---|---|
| `--question=<id>` | Tüm test paketini çalıştırmak yerine, ID ile tek bir test sorusu çalıştırır. |
| `--provider=<provider>` | Bu çalıştırma için yapılandırılmış yapay zeka sağlayıcısını geçersiz kılar (örneğin, `anthropic`, `openai`). |
| `--model=<model>` | Bu çalıştırma için yapılandırılmış modeli geçersiz kılar (örneğin, `claude-opus-4-6`, `gpt-4o`). |
| `--output=<format>` | Çıktı formatı: `table` (varsayılan), `json`, `csv`. |
| `--save` | Test sonuçlarını geçmiş karşılaştırma için veritabanına kaydeder. |

### Örnekler {#examples}

Mevcut sağlayıcı ve model ile tüm test paketini çalıştırın:

```bash
wp gratis-ai-agent benchmark
```

Tek bir soru (`q-restaurant-website`) çalıştırın ve çıktıyı JSON olarak alın:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Belirli bir modelde çalıştırın ve sonuçları kaydedin:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Çıktı {#output}

Test, aşağıdaki sütunlara sahip, her soru için bir satır çıktısı verir:

| Sütun | Açıklama |
|---|---|
| `ID` | Soru tanımlayıcısı |
| `Description` | Test senaryosunun kısa özeti |
| `Score` | Geçti/kaldı veya sayısal puan (0–100) |
| `Abilities Used` | Çağrılan yeteneklerin virgülle ayrılmış listesi |
| `Tokens` | Tüketilen toplam token sayısı |
| `Duration` | Saniye cinsinden geçen süre |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Tags'lı bir Portfolyo CPT oluştur    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Tam bir restoran web sitesi oluştur  92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Koyu tema ön ayarı uygula           100    apply_theme_json_preset      986     4.2s
...
```

### Test Soruları {#benchmark-questions}

Varsayılan paket şunları içerir:

| ID | Senaryo |
|---|---|
| `q-portfolio-site` | Bir Proje Kategorisi taksonomisi ile Portfolyo CPT oluştur ve bir blok deseni kaydet |
| `q-restaurant-website` | Menü CPT'si, rezervasyon formu ve navigasyon ile tam bir restoran web sitesi oluştur |
| `q-dark-mode-theme` | Koyu mod tasarım ön ayarı uygula ve marka renklerini enjekte et |
| `q-nav-builder` | İç içe bir açılır menü ile dört öğeli bir ana navigasyon menüsü oluştur |
| `q-options-roundtrip` | Bir dizi WordPress seçeneğini oku, değiştir ve geri yükle |
| `q-ability-install` | Açıklanan kullanım senaryosu için en uygun yetenek paketini keşfet ve kur |

Ek sorular, `gratis_ai_agent_benchmark_questions` filtresi üzerinden kaydedilebilir.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Kurulu yetenekleri ve yetenek paketlerini yönetir.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Tüm kayıtlı yetenekleri, kaynaklarını (çekirdek veya paket) ve mevcut durumlarını listeler.

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

### `wp gratis-ai-agent abilities install` {#wp-gratis-ai-agent-abilities-install}

Kayıtlı bir yetenek paketini indirir ve etkinleştirir.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argümanlar**

| Argüman | Açıklama |
|---|---|
| `<slug>` | Yetenek paketinin eklenti slug'ı, örn: `gratis-ai-agent-woocommerce`. |

**Örnek**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Başarılı: gratis-ai-agent-woocommerce kuruldu. 3 yetenek eklendi: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Belirli bir yeteneği, paketi kaldırmadan devre dışı bırakır. Bu, ajanın belirli bir sitedeki kapsamını kısıtlamak için kullanışlıdır.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Örnek**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Başarılı: 'delete_post_type' yeteneği devre dışı bırakıldı.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Daha önce devre dışı bırakılmış bir yeteneği yeniden etkinleştirir.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Mevcut ajan yapılandırmasını ve bağlantı durumunu gösterir.

```bash
wp gratis-ai-agent status
```

**Örnek çıktı**

```
Plugin Sürümü:    1.4.0
AI Sağlayıcısı:       Anthropic
Model:             claude-sonnet-4-6
Sağlayıcı Durumu:   Bağlandı
Yüklenen Yetenekler:  24
Test Sonuçları: 3 kaydedilmiş çalıştırma (son: 2026-04-15)
Seçenekler Kara Listesi: 18 giriş
```

---

## `wp gratis-ai-agent logs` {#wp-gratis-ai-agent-logs}

Hata ayıklama günlüğünden son ajan etkinliklerini gösterir.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Seçenekler**

| Seçenek | Açıklama |
|---|---|
| `--last=<n>` | Son N günlük girişini gösterir. Varsayılan `50`. |
| `--level=<level>` | Filtreleme seviyesi: `info`, `warning`, `error`. |
| `--ability=<ability>` | Yetenek adına göre filtreleme yapar. |

**Örnek**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Ajan durumunu sıfırlar: enjekte edilen CSS'yi temizler, ajan tarafından kaydedilen CPT'leri ve taksonomileri kaldırır, global stilleri sıfırlar ve ajanın seçenekler önbelleğini boşaltır. Eklentiyi veya ayarlarını kaldırmaz.

```bash
wp gratis-ai-agent reset [--yes]
```

Onay istemini atlamak için `--yes` ekleyin.

```bash
wp gratis-ai-agent reset --yes
Başarılı: Ajan durumu sıfırlandı. Temizlenenler: 2 post tipi, 1 taksonomi, özel CSS, global stil geçersiz kılmaları.
```

---

## Çıkış Kodları {#exit-codes}

Tüm komutlar başarılı olduğunda `0` ile çıkar. Sıfır olmayan çıkış kodları:

| Kod | Anlamı |
|---|---|
| `1` | Genel hata (hata mesajına bakın) |
| `2` | Sağlayıcı bağlantı hatası |
| `3` | Yetenek bulunamadı |
| `4` | Test sorusu bulunamadı |
