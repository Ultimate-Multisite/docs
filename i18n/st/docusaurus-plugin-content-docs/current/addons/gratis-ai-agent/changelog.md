---
title: Lenane la liphetoho
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Lenane la diphetoho

## 1.9.0 — E lokollotswe ka 2026-04-28 {#190--released-on-2026-04-28}

### Tse ntjha {#new}

- **bokgoni ba `create_contact_form`** — bo theha foromo ya kgokahano ka ho sebedisa plugin ya foromo e sebetsang (Contact Form 7, WPForms, Fluent Forms, kapa Gravity Forms) mme bo kgutlisa shortcode e loketseng ho kenngwa posong kapa leqepheng lefe kapa lefe.
- **bokgoni ba `set_featured_image`** — bo abela poso kapa leqephe setshwantsho se hlahelletseng ho tswa ho ID ya sehokelo se seng se le teng sa Media Library kapa URL e hole; bo kenya setshwantsho ka bo bona ha URL e fanwe.
- **bokgoni ba `batch_create_posts`** — bo theha diposo tse ngata pitso e le nngwe ya bokgoni. Bo tshehetsa dipharamitha tse tshwanang le `create_post`, bo tlaleha katleho/ho hloleha ha poso ka nngwe, mme bo na le mokgwa wa boikgethelo wa `stop_on_error`.
- **pharamitha ya `page_template`** — e ekeditswe ho `create_post` le `update_post`. E abela faele ya thempleite ya leqephe ya PHP (mohl. `page-full-width.php`) nakong ya ho theha kapa ho ntjhafatsa. Fetisa thapo e se nang letho ho `update_post` ho kgutlela ho ya kamehla ya theme.
- **Bokgoni ba screenshot ka lehlakoreng la client** — `capture_screenshot`, `compare_screenshots`, le `review_page_design`. Nka di-screenshot tse felletseng kapa tsa viewport tsa maqephe a phelang ka sebatli se se nang hlooho sa lehlakoreng la seva, bapisa di-screenshot tse pedi, mme o fumane tlhahlobo ya moralo e hlahisitsweng ke AI e akaretsang moralo wa leqephe, mongolo, mmala, le phihlello.
- **Di-agent tse hlano tse hahelletsweng ka hare** — Content Writer, Site Builder, Design Studio, Plugin Manager, le Support Assistant. Agent ka nngwe e na le sete e kgethehileng ya disebediswa, system prompt e etseditsweng yona, le ditlhahiso tsa ho qala. E ka fetolwa ka **Agent Picker** e ntjha hloohong ya chat. Sheba [Di-agent tse hahelletsweng ka hare](../../user-guide/configuration/built-in-agents).
- **Difolakha tsa dikarolo** — tab e ntjha ya **Settings → Feature Flags** e nang le dikonopo tsa taolo ya phihlello (thibela ho batsamaisi, thibela ho batsamaisi ba marangrang, phihlello ya ba ngodisitseng, tima bakeng sa bao e seng ditho) le dikgetho tsa branding (pata tumello ya footer, lebitso la agent le ikgethileng, pata agent picker, sebedisa letshwao la site e le avatar ya chat). Sheba [Settings tsa Gratis AI Agent](../../user-guide/administration/gratis-ai-agent-settings).
- **Kgutlisa session ya ho qetela** — panel ya chat jwale e jarolla puisano ya moraorao ka bo yona ha leqephe le jarwa le ha widget e bulwa, kahoo moelelo ha o lahlehe ha ho tsamauwa pakeng tsa maqephe.
- **Dihokelo tsa diketso tsa plugin** — dihokelo tse potlakileng ho Settings le Abilities Registry jwale di hlaha skrineng sa WordPress **Plugins → Installed Plugins** ka tlase ho tlhaloso ya plugin.

### E ntlafaditswe {#improved}

- **Ho leka hape mohlodi wa setshwantsho** — agent jwale e leka hape mehlodi yohle ya mahala ya ditshwantsho e hlophisitsweng pele e kgutlela setshwantshong se hlahisitsweng ke AI ha ho jarolla ho hloleha.
- **Panel ya tlhahisoleseding ya model** — e dula e bonahala hloohong ya chat; ha e sa patwa kamora molaetsa wa pele.
- **Boitshwaro ba auto-scroll** — auto-scroll e ema nakwana ha mosebedisi a skrolla hodimo ho bala; konopo e phaphametseng ya **Skrolla ho ya tlase** e a hlaha mme e nyamela ka bo yona ha mosebedisi a fihla molaetseng wa moraorao.
- **UI ya Agent Picker** — e hlophisitswe botjha e le seaparo sa form-table se nang le diaekhone bakeng sa agent ka nngwe, ho etsa hore ho be bonolo ho tseba le ho fetola di-agent ka potlako.
- **Dikarolo tsa JS tse jarwang ka botsoa** — sephutheloana sa pele sa JavaScript sa chat widget jwale se arolletswe dikarolo tse jarwang ka botsoa, se fokotsa boholo ba diphutheloana tsa pele ka 75–90%.
- **Moralo o motjha wa chat widget** — aekhone e kopaneng ya AI e nkela avatar ya pele e ikgethileng sebaka; e dumellana le tsamaiso ya agent e hahelletsweng ka hare.
- **Ho etsa URL sehokelo** — di-URL tse hlahang melaetseng ya system le dibubble tsa melaetsa ya phoso jwale di hlahiswa e le dihokelo tse tobetsehang.

### E lokisitswe {#fixed}

- **Ho fumaneha ha bokgoni** — ho lokisitswe ditlhaloso, ditshupiso tsa system prompt, le ho dumellana ha namespace e le hore bokgoni bohle bo hlahe lenaneng la disebediswa tsa agent ka botshepehi.
- **Cache ya providers** — providers jwale di bolokwa cache ho pholletsa le site ka counter ya version, ho thibela mathata a stale-provider marangrang a multisite.
- **`ability_invalid_output`** — e rarollotswe ho pholletsa le di-handler tse 12 tsa bokgoni; tsohle di kgutlisa dikarabo tsa JSON tse hlophisitsweng hantle.
- **Pipeline ya `pending_client_tool_calls`** — e hoketswe ho tloha qalong ho isa qetellong hore dipitso tsa disebediswa tsa lehlakoreng la client di phethehe ka nepo mme di kgutlisetse diphetho ho model.
- **Drawer ya histori** — diphetoho tse sa kgutlisetsweng morao di tlositswe lenaneng la ho kgutlisa; sehokelo sa **Sheba histori e felletseng** jwale se sebetsa ka nepo.
- **Tsamaiso ya diphetoho/ho kgutlisa** — diphoso tse hlano tse arohaneng di lokisitswe mme tsa kopanngwa tlasa sebopeho se setjha sa admin.
- **Toast ya Save Settings** — tsebiso ya snackbar jwale e hlaha ka botshepehi kamora ho tobetsa **Save Settings**.
- **Menu ya maemo ya Trash** — ho ekeditswe kgetho ya **Hlakola ka ho sa feleng** hore dintho di hlakolwe ka thata ntle le ho tloha ponong ya trash.
- **Fetola & romela hape** — ho tobetsa aekhone ya ho fetola jwale ho kenya mokgwa wa ho fetola feela bakeng sa molaetsa o tobetsoeng, eseng melaetsa yohle moqoqong.
- **Bophahamo ba moralo wa chat** — panel ya chat e ikamahanya le bophahamo ba yona ha dikahare tse kentsweng ke plugin (ditsebiso tsa admin, dibanner) di hlaha ka hodimo ho leqephe, ho thibela sebaka sa ho kenya molaetsa ho sutumelletswa kantle ho skrine.

---

## 1.4.0 — E lokollotswe ka 2026-04-09 {#140--released-on-2026-04-09}

### Tse ntjha {#new-1}

- **Taelo ea benchmark ea WP-CLI** (`wp gratis-ai-agent benchmark`) — e tsamaisa pokello ea benchmark ea Agent Capabilities v1 ho tloha moleng oa taelo bakeng sa CI pipelines le mekhoa ea mosebetsi ea tlhahlobo ea model. E tšehetsa litsamaiso tsa potso ka ’ngoe, liphetoho tsa provider/model, le tlhahiso ea JSON/CSV.
- **Pokello ea benchmark ea Agent Capabilities v1** — sete e hlophisitsoeng ea li-prompt tse rarahaneng, tsa mehato e mengata tse lekang bokhoni bohle, ka ho fana ka lintlha le tlaleho ea token/nako.
- **Bokhoni ba Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Lingoliso li tsoela pele ho pholletsa le ho qala bocha ka tafole ea options.
- **Bokhoni ba Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. E tšehetsa taxonomies tsa hierarchy le tse bataletseng ka rewrite slugs tsa boikhethelo.
- **Bokhoni ba Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. E kenyelletsa presets tse hlano tse khethiloeng: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Bokhoni ba Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. E bala le ho ngola boleng ba theme.json ka WordPress Global Styles API.
- **Bokhoni ba taolo ea Navigation Menu** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. E tšehetsa menus tse kentsoeng kahare ho tse ling le kabelo ea sebaka sa theme.
- **Bokhoni ba Options Management** — `get_option`, `set_option`, `delete_option`, `list_options`. E kenyelletsa blocklist ea polokeho e hahelletsoeng kahare e sireletsang options tsa bohlokoa tsa WordPress hore li se ke tsa fetoloa.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Fumana le ho kenya tšebetsong dipakete tsa bokhoni tse ajoang e le WordPress plugins.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Meralo ea kaho ea site ea mekhahlelo e mengata e nang le phumano ea plugin, litšupiso tsa tlhahiso ea mehato, ho sala morao tsoelo-pele, le ho hlaphoheloa liphosong ka boikemelo.
- **Potso ea benchmark ea website ea resturante** (`q-restaurant-website`) — teko ea ho tloha qalong ho isa qetellong e akaretsang ngoliso ea CPT, design system, navigation, le phumano ea plugin.
- **AI provider connector plugins** li kentsoe ho WordPress Playground blueprints bakeng sa tlhophiso e potlakileng ea nts’etsopele ea lehae.

### E ntlafalitsoe {#improved-1}

- README e ntlafalitsoe ka litokomane tsa AI provider connector le litaelo tsa setup.

### E lokisitsoe {#fixed-1}

- Ho hloleha ha liteko tse 25 tsa PHPUnit lekaleng la `main` ho rarollotsoe.
- Sebopeho sa URL ea GitHub releases ho `blueprint.json` se lokisitsoe.
- Ho bala bocha ha Task ID ho qoba ho thulana le li-ID tsa khale.

---

## 1.3.x {#13x}

_Dintlha tsa ditokollo tsa pele di bolokilwe polokelong ya plugin._
