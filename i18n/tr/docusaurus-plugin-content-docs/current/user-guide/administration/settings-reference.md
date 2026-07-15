---
title: Ayarlar Referansı
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Ayarlar Referansı

Bu sayfa, Ultimate Multisite içinde günlük yönetimi etkileyen ayarları ve son davranış değişikliklerini izler.

## Diğer Seçenekler {#other-options}

**Diğer Seçenekler** alanı **Ultimate Multisite > Settings > Login & Registration** altında görünür.

| Ayar | Açıklama |
|---|---|
| **Enable Jumper** | Yönetici alanında Jumper hızlı gezinme aracını gösterir. Bunu Ultimate Multisite ekranlarına, ağ nesnelerine ve desteklenen yönetici hedeflerine doğrudan atlamak için kullanın. Bu kısayolun görünür olmasını istemiyorsanız devre dışı bırakın. |

## Hata raporlama ve telemetri {#error-reporting-and-telemetry}

Önceki hata raporlama katılım ayarı, ayarlar sayfasından kaldırıldı. Anonim telemetri devre dışıdır ve bunu etkinleştirmek için bir UI anahtarı yoktur.

Ayarlar sayfası için dahili runbook’lar veya ekran görüntüleri tutuyorsanız, yöneticilerin artık mevcut olmayan bir ayarı aramaması için eski hata raporlama katılım alanına yapılan referansları kaldırın.

## İçe/Dışa aktarma ayarları {#importexport-settings}

**Import/Export** ayarlar sekmesi, hangi ayarları denetlediğini açıklar ve site ile ağ arşivleri için doğrudan **Ultimate Multisite > Site Export** bağlantısı verir. İçe/dışa aktarma yapılandırması için ayarlar sekmesini, tek site dışa/ içe aktarma iş akışı için **Tools > Export & Import** seçeneğini ve tam bir Network Export arşivine ihtiyacınız olduğunda Site Export aracını kullanın.

## Domain Seller HostAfrica bakiye uyarısı {#domain-seller-hostafrica-balance-warning}

Domain Seller addon’ı HostAfrica’ya bağlandığında, ağ yöneticileri artık bayi hesap bakiyesi güvenilir domain kaydı veya yenileme işlemleri için çok düşük olduğunda kapatılabilir bir düşük bakiye uyarısı görür.

Bu bildirimi operasyonel bir uyarı olarak ele alın: daha fazla ücretli domain kaydı kabul etmeden önce HostAfrica bayi bakiyesini doldurun, ardından kayıtların ve yenilemelerin normal şekilde devam edebildiğini doğrulamak için Domain Seller ayarlarına veya domain izleme ekranına geri dönün.

## AI sağlayıcı bağlayıcı ayarları {#ai-provider-connector-settings}

AI sağlayıcı bağlayıcı ayarları artık yalnızca desteklenen OAuth hesap havuzlarını gösterir:

| Sağlayıcı | Kurulum akışı |
|---|---|
| **Anthropic Max** | OAuth düğmesiyle bir veya daha fazla Anthropic Max hesabı bağlayın. Sandbox’lı bir tarayıcı yönlendirmeyi otomatik olarak tamamlayamadığında manuel OAuth yedek yolunu kullanın. |
| **OpenAI ChatGPT/Codex** | ChatGPT hesaplarını aynı OAuth havuzu iş akışı üzerinden bağlayın. Bağlayıcı tarafından desteklenen işlemler, hesap bağlandıktan sonra ChatGPT Codex araç çağrılarını kullanabilir. |
| **Google AI Pro** | Google AI Pro hesaplarını OAuth üzerinden bağlayın, ardından hesap listesi hemen güncellenmezse bağlayıcıyı yenileyin. |

Cursor Pro artık desteklenen bir sağlayıcı değildir. Cursor Pro kurulum alanlarından veya bağlayıcı yollarından bahseden eski dahili ekran görüntülerini, runbook’ları veya oryantasyon adımlarını kaldırın.

Sağlayıcı hesaplarını eklerken veya kaldırırken, yenilenen ya da silinen hesap için geçerli bir e-posta adresi girin ve bağlayıcı destekli işlemleri test etmeden önce sağlayıcı ayarlarını kaydedin.
