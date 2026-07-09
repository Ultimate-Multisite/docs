---
title: Urutonde rw’impinduka
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Urutonde rw'impinduka {#changelog}

## 1.9.0 — Yasohotse ku 2026-04-28 {#190--released-on-2026-04-28}

### Bishya {#new}

- **Ubushobozi bwa `create_contact_form`** — bukora form yo koherezaho ubutumwa hakoreshejwe plugin ya form iri gukora (Contact Form 7, WPForms, Fluent Forms, cyangwa Gravity Forms) maze bugasubiza shortcode yiteguye gushyirwa muri post cyangwa page iyo ari yo yose.
- **Ubushobozi bwa `set_featured_image`** — bugenera post cyangwa page ishusho y'ingenzi buhereye kuri ID y'umugereka uri muri Media Library cyangwa URL yo hanze; buhita bwinjiza ishusho iyo URL yatanzwe.
- **Ubushobozi bwa `batch_create_posts`** — bukora posts nyinshi mu guhamagara ubushobozi rimwe. Bushyigikira parameters zimwe na `create_post`, butanga raporo y'intsinzi/kunanirwa kuri buri post, kandi bufite mode ya `stop_on_error` itari ngombwa.
- **Parameter ya `page_template`** — yongewe kuri `create_post` na `update_post`. Igenera dosiye ya PHP page template (urugero `page-full-width.php`) igihe cyo gukora cyangwa kuvugurura. Ohereza umurongo w'ubusa kuri `update_post` kugira ngo usubire kuri theme isanzwe.
- **Ubushobozi bwa screenshot ku ruhande rwa client** — `capture_screenshot`, `compare_screenshots`, na `review_page_design`. Bufata screenshots zuzuye cyangwa iza viewport za pages ziri online hakoreshejwe browser idafite interface ikorera kuri server, bugereranya screenshots ebyiri, kandi bukabona isuzuma rya design ryakozwe na AI rikubiyemo layout, typography, ibara, n'ubugerwaho.
- **Agents batanu bubatswemo** — Content Writer, Site Builder, Design Studio, Plugin Manager, na Support Assistant. Buri agent ifite urutonde rw'ibikoresho rwihariye, system prompt yateguwe by'umwihariko, n'ibitekerezo byo gutangira. Bishobora guhindurirwa muri **Agent Picker** nshya iri muri header ya chat. Reba [Agents bubatswemo](../../user-guide/configuration/built-in-agents).
- **Feature flags** — tab nshya ya **Settings → Feature Flags** ifite toggles zo kugenzura uburenganzira bwo kugera (kugarukira ku ba administrators, kugarukira ku ba network admins, uburenganzira bwa subscriber, guhagarika ku batari members) n'amahitamo ya branding (guhisha attribution yo muri footer, izina rya agent ryihariye, guhisha agent picker, gukoresha icon ya site nka avatar ya chat). Reba [Settings za Gratis AI Agent](../../user-guide/administration/gratis-ai-agent-settings).
- **Kugarura session iheruka** — panel ya chat ubu yongera gufungura conversation iheruka mu buryo bwikora igihe page ipakiwe no igihe widget ifunguwe, bityo context ntizigere ibura mu kugenda hagati ya pages.
- **Links z'ibikorwa bya plugin** — links zihuse zijya kuri Settings no kuri Abilities Registry ubu zigaragara kuri screen ya WordPress **Plugins → Installed Plugins** munsi y'ibisobanuro bya plugin.

### Byanonosowe {#improved}

- **Kugerageza kongera source y'ishusho** — agent ubu yongera kugerageza sources zose z'ubuntu z'amashusho zashyizweho mbere yo gusubira ku ishusho yakozwe na AI iyo download inaniwe.
- **Panel y'amakuru ya model** — ihora igaragara muri header ya chat; ntikihishwa nyuma y'ubutumwa bwa mbere.
- **Imyitwarire ya auto-scroll** — auto-scroll irahagarara iyo ukoresha azamutse gusoma; buto ireremba ya **Scroll to bottom** iragaragara kandi ikihisha mu buryo bwikora iyo ukoresha ageze ku butumwa bushya cyane.
- **UI ya Agent Picker** — yongeye gukorwa nka overlay ya form-table ifite icons za buri agent, bikoroshya kumenya no guhindura agents ako kanya.
- **JS chunks zipakirwa buhoro** — JavaScript bundle ya mbere ya chat widget ubu yagabanyijwemo chunks zipakirwa buhoro, bigabanya ingano za bundle za mbere ho 75–90%.
- **Kongera gukora design ya chat widget** — icon imwe ya AI isimbura avatar yihariye yari isanzwe; bihuje na system ya agent yubatswemo.
- **Guhindura URLs mo links** — URLs zigaragara mu butumwa bwa system no mu buburu bw'ubutumwa bw'ikosa ubu zigaragazwa nka links zikandwaho.

### Byakosowe {#fixed}

- **Kubonwa kw'ubushobozi** — ibisobanuro, references za system prompt, n'ihuzwa rya namespace byarakosowe kugira ngo ubushobozi bwose bugaragare mu rutonde rw'ibikoresho bya agent mu buryo bwizewe.
- **Cache ya providers** — providers ubu zibikwa muri cache ku rwego rwa site yose hifashishijwe version counter, bikumira ibibazo bya providers zishaje kuri networks za multisite.
- **`ability_invalid_output`** — byakemuwe muri handlers z'ubushobozi 12; zose zisubiza ibisubizo bya JSON bifite imiterere ikwiye.
- **Pipeline ya `pending_client_tool_calls`** — yahujwe kuva ku ntangiriro kugeza ku iherezo kugira ngo guhamagara ibikoresho ku ruhande rwa client birangire neza kandi bisubize ibisubizo kuri model.
- **Drawer y'amateka** — impinduka zidashobora gusubizwa inyuma zavanywe ku rutonde rwo gusubiza inyuma; link ya **View full history** ubu ikora neza.
- **System y'impinduka/gusubiza inyuma** — amakosa atanu atandukanye yakosowe kandi ahurizwa munsi ya interface nshya ya admin.
- **Toast ya Save Settings** — imenyesha rya snackbar ubu rigaragara mu buryo bwizewe nyuma yo gukanda **Save Settings**.
- **Menu ya context ya Trash** — hongerwemo ihitamo rya **Delete Permanently** kugira ngo items zisibwe burundu bitabaye ngombwa kuguma muri view ya trash.
- **Guhindura & kongera kohereza** — gukanda icon yo guhindura ubu byinjira muri mode yo guhindura ubutumwa bwakanzwe gusa, si ubutumwa bwose buri muri thread.
- **Uburebure bwa layout ya chat** — panel ya chat ihuza uburebure bwayo iyo content yinjijwe na plugin (admin notices, banners) igaragaye hejuru ya page, bikabuza area yo kwinjizamo gusunikirwa hanze ya screen.

---

## 1.4.0 — Yasohotse ku 2026-04-09 {#140--released-on-2026-04-09}

### Bishya {#new-1}

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — ikoresha urwunge rw’ibigeragezo bya Agent Capabilities v1 benchmark suite ivuye ku murongo w’amabwiriza, ku miyoboro ya CI n’imirimo yo gusuzuma model. Ishyigikira gukora ku kibazo kimwe, guhindura provider/model, n’ibisohoka bya JSON/CSV.
- **Agent Capabilities v1 benchmark suite** — urwunge rutunganyije rw’ibibazo bigoye, bifite intambwe nyinshi, bigerageza urwego rwose rw’ubushobozi, rufite gutanga amanota na raporo ya token/igihe bimara.
- **Ubushobozi bwa Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Ukwiyandikisha kugumaho no nyuma yo kongera gutangira binyuze mu mbonerahamwe ya options.
- **Ubushobozi bwa Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Bushyigikira taxonomies zifite inzego n’iziringaniye hamwe na rewrite slugs z’inyongera.
- **Ubushobozi bwa Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Burimo presets eshanu zatoranyijwe: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Ubushobozi bwa Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Busoma kandi bukandika indangagaciro za theme.json binyuze muri WordPress Global Styles API.
- **Ubushobozi bwo gucunga Navigation Menu** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Bushyigikira menus zifite inzego n’igenwa rya theme location.
- **Ubushobozi bwo gucunga Options** — `get_option`, `set_option`, `delete_option`, `list_options`. Burimo blocklist y’umutekano yubatswemo irinda options za WordPress zikomeye guhindurwa.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Menya kandi ukore activate ability packs zitangwa nka WordPress plugins.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Plans zo kubaka site z’ibyiciro byinshi, zifite kuvumbura plugin, references z’ibisohoka by’intambwe, gukurikirana progress, no kwikiza amakosa mu buryo bwikora.
- **Ikibazo cya benchmark cy’urubuga rwa restaurant** (`q-restaurant-website`) — ikigeragezo kuva ku ntangiriro kugeza ku iherezo gikubiyemo kwandikisha CPT, design system, navigation, no kuvumbura plugin.
- **AI provider connector plugins** zongerewe kuri blueprints za WordPress Playground kugira ngo gutegura development ya hafi byihute.

### Byanonosowe {#improved-1}

- README yavuguruwe n’inyandiko za AI provider connector n’amabwiriza yo gutegura.

### Byakosowe {#fixed-1}

- Kunanirwa kw’ibigeragezo 25 bya PHPUnit kuri branch ya `main` byakemuwe.
- Imiterere ya URL ya GitHub releases muri `blueprint.json` yakosowe.
- Kongera guha nimero Task ID kugira ngo hirindwe kugongana na IDs za kera.

---

## 1.3.x {#13x}

_Inyandiko z’ibisohoka zabanje zibungabungiwe mu bubiko bwa plugin._
