---
title: Nkwado Onboarding Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Quy trình Onboarding Theme Builder

Superdav AI Agent v1.12.0 mang đến cho bạn một **quy trình onboarding Theme Builder** có hướng dẫn, giúp bạn tạo một theme block tùy chỉnh trong lúc thiết lập ban đầu. Cái này thay thế chế độ Site Builder cũ bằng cách tiếp cận linh hoạt hơn, được hỗ trợ bởi agent (tác nhân).

## Quy trình Onboarding Theme Builder là gì?

Quy trình onboarding Theme Builder là một công cụ hướng dẫn tương tác giúp bạn:

- Hướng dẫn bạn qua các quyết định thiết kế (màu sắc, kiểu chữ, bố cục)
- Thu thập sở thích về nhận diện hình ảnh của trang web bạn
- Tạo ra một theme block tùy chỉnh được thiết kế riêng cho nhu cầu của bạn
- Tự động kích hoạt theme khi hoàn tất

Quy trình này được vận hành bởi **Setup Assistant agent** (tác nhân Trợ giúp Thiết lập), nó sẽ hỏi những câu làm rõ và xây dựng theme của bạn từng bước.

## Bắt đầu Theme Builder Onboarding

### Thiết lập lần đầu chạy (First-Run Setup)

Khi bạn mới khởi động Superdav AI Agent trên một cài đặt WordPress mới, bạn sẽ thấy:

```
Chào mừng đến với Superdav AI Agent!

Bạn muốn làm gì?
1. Xây dựng theme tùy chỉnh (Theme Builder)
2. Sử dụng theme có sẵn
3. Bỏ qua thiết lập bây giờ
```

Chọn **"Build a custom theme"** (Xây dựng theme tùy chỉnh) để vào quy trình onboarding Theme Builder.

### Kích hoạt thủ công (Manual Activation)

Bạn cũng có thể bắt đầu onboarding Theme Builder bất cứ lúc nào bằng cách yêu cầu:

```
"Start the Theme Builder onboarding"
```

hoặc

```
"Help me create a custom theme"
```

## Các bước Onboarding

### Bước 1: Chọn Chế độ (Mode Selection)

Setup Assistant agent sẽ hỏi về sở thích của bạn:

```
Bạn muốn xây dựng theme của mình như thế nào?
- Hướng dẫn (Tôi sẽ hỏi câu và tự xây nó cho bạn)
- Tự làm (Tôi sẽ chỉ cho bạn các lựa chọn và bạn quyết định)
```

**Chế độ hướng dẫn (Guided mode)** được khuyến nghị cho hầu hết người dùng; agent sẽ đưa ra các đề xuất thiết kế dựa trên ngành nghề và mục tiêu của bạn.

### Bước 2: Thông số Trang web (Site Specification)

Bạn sẽ được hỏi về trang web của mình:

- **Mkpụta site**: E-commerce, blog, portfolio, SaaS, na ihe ndị ọzọ.
- **Ndu nwere ike ịbịa**: Ndị bụ ndị na-abịa?
- **Nkwalụlụ brand**: Nkwalụlụ primary na secondary (na ma "ahụghị").
- **Tone**: Professional, creative, playful, minimal, na ihe ọzọ.

Information a bụ ihe ọ bụ **site_brief** memory n'ụkọ gị, nke ndị agent-esie na sesi-esi ndị ọzọ.

### Step 3: Decision na Design System

Agent ahụ ga-akwado gị na ịkpọta design token-sị:

- **Typography**: Font family (serif, sans-serif, monospace) na size scale
- **Color palette**: Primary, secondary, accent, na neutral colors
- **Spacing**: Compact, normal, ma spacious layouts
- **Motion**: Animations na transitions (hụrụ n'anya).

### Step 4: Oluwo Theme

Agent Setup Assistant ga-akwado theme block kacha gị na:

- `theme.json` na enyi design tokens gị
- Block templates na-agba ọsọkwa (homepage, blog, contact)
- Custom block styles na-agba ọsọkwa na design system gị
- Theme metadata na deklarasyon WordPress support

### Step 5: Activation na Verification

Theme ahụ ga-akwado gozie, na ị ga ịhụ:

```
✓ Theme custom gị bụrụ n'anya!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

Ọ ga-akwado ịbịa site gị onye ọzọ na ịkpọta theme ahụ bụrụ n'anya.

## Site Specification na site_brief Memory

N'ime onboarding, agent ahụ ga-kọ ihe nkwado site gị n'aka category **site_brief** memory. A na-ahụ:

- Mkpụta site na ihe ndị ọrụ
- Ndu nwere ike ịbịa
- Nkwalụlụ brand na tone
- Preferences design
- Structure content

### Ihe Ndị Site_brief Na-agbaỌzọ

N'ime sesi-esi ndị ọzọ, agents ga-akwado site_brief gị maka:

### Manter consistency design na ndụmọdụ

*   Chinare ndụmọdụ design na ngoorịsịrị.
*   Ndu mme ihe ndị dị n'ụ site gị anọ.
*   Gbanwe ihe ndị dị n'ụ site gị n'ime ihe ọ bụla ị chọrọ.
*   Chinare ihe ndị dị n'ụ site gị na-eme ka ọ dịkwa.

### Ịgụnyere Site_brief Gị

Ị chụrụ ike ịgụnyere agent a:

```
"Show me my site brief"
```

na

```
"What do you know about my site?"
```

Agent ahụ ga-eme ka ọ dị n'ụmọdụ site gị.

## Ịgbanwe Ndị Ocha Apụkụ Na Oge Ndeewo (Onboarding)

Ọ bụrụ na onboarding Theme Builder tapụ, ị chụrụ ike ị:

### Rụrụ na Ụdị Kỹterị Design System Aesthetics Skill

Bata ihe ndị dị n'ụdị design:

```
"Refine the typography to be more modern"
```

na

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** ga-eme ka ị chọrọ ihe ọ bụla ị chọrọ na ndụmọdụ design.

### Gbanwe theme.json Na-akụkọ (Directly)

Ọ bụrụ na ị bụ onye dị n'ime ndị ọzọ, ị chọrọ gbanwe `/wp-content/themes/[theme-name]/theme.json` iji gbanwe:

*   Color tokens
*   Typography scales
*   Spacing values
*   Border and shadow definitions

### Kụrụ Custom Block Templates

Jiri WordPress block editor iji kụrụ custom templates maka:

*   Homepage layouts
*   Blog post pages
*   Product pages
*   Contact forms

## Ịgụnyere Ndị Ocha Apụkụ Na Ndị Ndeewo (Comparison)

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## Ịgụnyere Ihe Ndị Dị N'ụmọdụ (Troubleshooting)

**Onboarding flow ahụ kpọrọla**
*   Bata flow ahụ: "Start the Theme Builder onboarding"
*   Chinare na WordPress installation gị dị n'ụmọdụ.
*   Chinare na Setup Assistant agent bụ onwe.

**Site_brief-mụrụ n'ịrụ**
- Chọpụta na agent ị nwere access n'ime memory (mụrụ)
- Ị chọpụta na agent "recall my site brief" (chọpụta m bụ site brief)
- Chọpụta na memory on in settings cua gị

**Theme a-agbanye na ọ dịkwa mụrụ**
- Rụma ya n'ime Design System Aesthetics skill don refine ya
- Ị chọpụta na agent "regenerate the theme with [specific changes]" (regenerate theme na [changes cụ thể])
- Edit theme.json direct for precise control

## Nkwado Na Mmalai

Ọ bụrụ na ị gba onboarding Theme Builder (mụrụ Theme Builder) anọ:

1. **Chọpụta site cua gị**: Bị n'ime site cua gị ị chọpụta theme ọhụrụ ahụ
2. **Rụma design**: Rụma Design System Aesthetics skill don make adjustments (chọpụta ihe ndị dị mụrụ)
3. **Nweghị content**: Ị chọpụta na nweghị site cua gị content
4. **Chọpụta abilities**: Ọkụ ụkwụ na other agent abilities dị ka scaffold-block-theme na activate-theme
