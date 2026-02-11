---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 16b22d6284bfcd5dc740566431abfbf1
---
# Ultimate Multisite 101

Ultimate Multisite 是一个 WordPress Multisite 插件，允许您向客户提供 WaaS 或网站即服务。 在深入了解 Ultimate Multisite 如何帮助您的业务和客户之前，我们需要先掌握一些基础知识。

## The WordPress Multisite

我们大多数人都熟悉标准的 WordPress 安装。 您可以通过托管提供商的控制面板创建它，或者对于勇敢的人，设置新的 Web 服务器和数据库，下载核心文件并开始安装过程。

这在全球数百万 WordPress 站点中都能正常工作，但从代理机构或托管提供商的角度来看，让我们讨论一下规模。

虽然通过自动化控制面板创建一个或甚至一百个 WordPress 站点很方便，但当管理这些站点的责任落到您手中时，问题很快就会显现。若未得到管理，您将成为恶意软件的主要目标。管理意味着需要投入大量精力和资源，尽管有外部工具和插件可帮助简化 WordPress 站点的管理和管理，但客户保留管理员访问权限意味着这些努力可能很容易被击败。

在其核心中，WordPress 提供了一个名为“Multisite”的功能，其起源可追溯到 2010 年 WordPress 3.0 的发布。自那时起，它已收到多次修订，旨在引入新功能并加强安全性。

本质上，WordPress 多站点可以这样理解：一所大学维护单一的 WordPress 安装，但每个院系维护自己的 WordPress 站点。

为了解释这一说法，让我们看看不仅在 Ultimate Multisite 文档中出现，也在 WordPress 社区中出现的一些基本术语。

### The Network

在 WordPress 方面，多站点网络是指可以从单一仪表盘管理多个子站点。虽然创建多站点网络在不同托管提供商之间有所不同，但最终结果通常是在 wp-config.php 文件中添加一些额外指令，以让 WordPress 知道它正在以此特定模式运行。

多站点网络与独立 WordPress 安装之间存在许多明显差异，我们将简要讨论。

#### Subdomain vs. Subdirectory

您需要做出的最直接决定之一是多站点安装是使用 _子目录_ 还是 _子域名_。Ultimate Multisite 在两种选择上都能同样良好地工作，但两种配置之间存在一些架构差异。

在 _子目录_ 配置中，网络站点继承基于主域名的路径。例如，标记为“site1”的网络站点其完整 URL 为 https://domain.com/site1。 在 _子域名_ 配置中，网络站点将拥有其自身的 _子域名_，该子域名源自主域名。因此，标记为“site1”的站点其完整 URL 为 https://site1.domain.com/。

虽然两种选项都是完全有效的选择，但使用 _子域名_ 确实提供了许多优势，但在其架构中也需要更多思考和规划。

在 DNS 方面，使用 _子目录_ 提供了相对简单的挑战。由于网络站点只是父路径的子级，只需为主域名存在一个域名条目。对于 _子域名_，挑战稍微复杂一些，需要为每个网络站点单独设置 CNAME 条目，或在 DNS 记录中使用通配符 (*) 条目。

另一个需要考虑的领域是 SSL 以及 SSL 证书的颁发和使用。在 _子目录_ 配置中，可以使用单个域名证书，因为网络站点只是主域名的路径。因此，domain.com 的证书足以为 https://domain.com/site1、https://domain.com/site2 等提供 SSL。

在 _子域名_ 配置中，使用通配符 SSL 证书是最常见的选项之一。这种 SSL 证书为域名及其 _子域名_ 提供加密。因此，通配符 SSL 证书将为 https://site1.domain.com、https://site2.domain.com 以及 https://domain.com 本身提供加密。

虽然还有其他选项，但它们通常在范围和应用上有限，并且需要额外的配置和考虑其适用性。

#### Plugins and Themes

WordPress 也会从客户的角度夺走它所给予的东西。 在独立 WordPress 安装中，站点管理员安装不良插件或未能保持其安装更新时，唯一的受害者和牺牲者就是他们自己。然而，站点管理员在多站点安装中安装不良插件会导致网络中每个已安装站点的受害者。

因此，当配置为多站点时，WordPress 会从站点管理员那里移除安装插件和主题的权限，并将此权限转移到新创建的网络管理员或“超级管理员”角色。此特权角色随后可以决定是否允许网络站点的管理员在其仪表盘中查看或访问插件菜单，并且如果允许，是否将此权限扩展到 _激活_ 或 _停用_ 插件。

在这方面，网络管理员负责将插件和主题安装到网络中，并将使用这些插件和主题的权限委托给网络站点。站点管理员无法安装插件和主题，也无法访问未分配给其站点的插件和主题。

### Users and Administrators

在 WordPress Multisite 中，所有网络站点共享同一数据库，因此共享相同的用户、角色和权限。最恰当的思考方式是，所有用户都是网络成员，而不是特定站点的成员。

鉴于此理解，允许创建用户可能并不理想，因此 WordPress Multisite 将此权限从站点管理员移除，并转移到网络管理员。随后，网络管理员可以将必要的权限委托给站点管理员，以允许他们为自己的站点创建用户账户。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-sqwI-k_-3krK0_ortenskDcdGrKpgOD6itvwDc2KEuGk1gZO-rqo_OF9yTqclSmQdrOBwsGPiiOc1oF6c0GMyNELJ-7gbyQNE81juSM3IvgTdWqhZ_UEVt06xJRu8Z8oyAKfLLz-)

重申上述声明，尽管用户账户似乎与站点相关，但它们实际上分配给网络，因此必须在网络中唯一。由于此原因，可能会出现用户名无法注册的情况。

虽然在企业系统中并非陌生概念，但这种单一的用户注册和身份验证来源往往对熟悉独立 WordPress 安装、用户管理相对简单的人来说是一个难以理解的概念。

#### Media

在 WordPress Multisite 中，网络站点共享单一数据库，但它们在文件系统上为媒体文件维护单独路径。

标准 WordPress 位置（wp-content/uploads）保持不变；然而，其路径已更改以反映网络站点的唯一 ID。因此，网络站点的媒体文件显示为 wp-contents/uploads/site/[id]。

#### Permalinks

我们之前提到过，_子域名_ 配置相对于 _子目录_ 配置具有独特优势，这里是：路径。

在 _子目录_ 配置中，主站点（网络建立时创建的第一个站点）和网络子站点必须共享从域名开始的相同路径。这可能导致大量冲突。

对于文章，主站点会添加一个强制的 /blog/ 路径，以防止与网络站点冲突。这意味着像“Post name”这样的漂亮永久链接将呈现为 domain.name/blog/post-name/

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-QUlDfXAzHqImjngoE7UsJHa6DOl6XbQWV17LYthxpxDBy-k453GE5TlJVBA6-sOootX3Fsi34sHv5nSgi1kZmlUD1iMneztCc_HQvZmXpbZEdX2a1il8GJQqxUT8aVPgW5ikR5uG)

在 _子域名_ 配置中，这一操作并非必要，因为每个网络站点都受益于完整的域名分离，因此不必依赖单一路径。它们改为根据其 _子域名_ 维护各自独立路径。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-2wgqTosYo3GAa3jwaBlPADbFiMbZ-kKUTuQtk0gv5pvkj81UfxnxSyA8R-jD1EZmRMBLjJFoWZJOirTSe8K9OQKeoSYeDj602XBHRrZeRFABE1sw-JERzJzEzMd7FmvrM9G1L9MP)

#### Static Pages

在 _子目录_ 配置中，命名冲突的可能性扩展到静态页面，因为主站点和网络站点共享相同路径。

为防止这种情况，WordPress 提供了一种方法来屏蔽某些站点名称，以便它们不会与第一个站点的名称冲突。通常，网络管理员会输入主站点页面的根路径。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-4cYCjjZwK0DZhrlY2NLHTL4waL99PANVZmSJ4AN5MXLTxb1pVF0aAtC4dWJP2hW1pD_v6hL8X7G80LRk-NuazRQDkIPCuhuRJgIMjA4DxuQzVjWEz1Ag2RKnkqwkvmSfcgy2PLrS)

在 _子域名_ 配置中，命名冲突的可能性通过 _子域名_ 得到缓解，因为它对网络站点是唯一的，并且与主站点没有任何关联。

### Registration

在 WordPress Multisite 的网络设置中，提供了多项新的用户注册选项，允许新用户和现有用户创建站点。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-nbH9Ka0YhI7nvo3nnKvOr_FoI_FpdAy5hz-f199CW-PV1D-tNKGawhIK_YwlUvM19TjLnhVb6Ro6J0ZpI6s2TRUaHgyGPc4qQI06eQ2O2jeMb_SaktkKwPUw3BSyaNegZYSjXMVX)

与独立 WordPress 安装不同，网络站点不保留允许用户注册或将这些注册分配给角色的熟悉选项。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-7I21vdReE43e0Utj_KWdnuWA08ZXz7PX33rjSEjwf6T8NDiCBYbeP9GH0J36ekFNkmsXXLBYAWjQJo4vo_kWqL6hXJuFzd9RyA52zy13lT-mMsaK-JdVivUkd5SJF3UF13r2hj28)

当创建用户账户时，这些账户在网络级别生成。因此，它们不属于任何特定站点，而是属于网络。这具有一些独特的优点和缺点。

例如，假设您的 WordPress Multisite 业务是新闻和信息。您将建立多站点，然后为金融、技术、娱乐和其他兴趣领域创建网络站点，同时保持对插件和主题的整体控制。每个网络站点将进一步对其网络站点的外观、感觉和用户体验拥有更大的控制权，而不是自定义文章类型或常规文章类别。

在这方面，当用户登录时，他们登录到网络，并最终登录到每个网络站点，以提供无缝体验。如果您的新站点是基于订阅的，这将是理想的解决方案和结果。

然而，如果多站点的预期性质和目的在于提供彼此无关联的不同网络站点，几乎总是需要外部或额外插件来操作用户角色。

### Domain and SSL

让我们谈谈几乎逃离我们注意的 WordPress Multisite 安装——Wordpress.com。这无疑是最广泛的 WordPress 多站点示例，展示了其广泛的定制和塑造能力，以满足目的。

在现代互联网时代，使用 SSL 几乎是强制性的，WordPress 多站点的网络管理员很快就会面临这些挑战。

在 _子域名_ 配置中，站点基于根域名创建。因此，标记为“site1”的站点将创建为“site1.domain.com”。利用通配符 SSL 证书，网络管理员可以成功解决此挑战，并为网络提供 SSL 加密功能。

WordPress Multisite 包含域名映射功能，允许网络站点关联自定义域名或与网络根域名不同的域名。

对于网络管理员而言，这在域名配置以及 SSL 证书的颁发和维护方面都增加了额外的复杂性。

在这方面，虽然 WordPress Multisite 提供了一种方法，允许 [www.anotherdomain.com](http://www.anotherdomain.com) 映射到“site1”，但网络管理员仍面临外部管理 DNS 条目和 SSL 证书实施的挑战。

## Ultimate Multisite

在了解独立 WordPress 安装与多站点安装之间的差异后，让我们看看 Ultimate Multisite 如何成为提供网站即服务的终极武器。

### Introduction

Ultimate Multisite 是您创建网站即服务（WaaS）的瑞士军刀。想想 Wix.com、Squarespace、WordPress.com，然后再想想拥有自己的服务。

在底层，Ultimate Multisite 使用 WordPress Multisite，但它的方式不仅解决了网络管理员在多站点安装中面临的无数挑战，还增强了功能，支持更广泛的用例。

在接下来的章节中，我们将查看一些常见用例以及支持这些用例所需的考虑因素。

### Use Cases

#### Case 1: An Agency

通常，代理机构的核心技能在于网站设计，托管或营销等方面被列为附加服务。

对于代理机构，Ultimate Multisite 在其能够在单一平台上托管和管理多个网站方面提供了令人难以置信的价值主张。对于将设计标准化为特定主题（如 GeneratePress、Astra、OceanWP 或其他）的代理机构，Ultimate Multisite 的功能可自动为每个新站点激活这些主题。

同样，针对常见和流行插件的代理定价优惠，使用 Ultimate Multisite 允许代理机构通过提供一个通用平台来利用现有投资，从该平台安装、维护和使用插件。

最有可能需要使用配置，幸运的是 Ultimate Multisite 通过与多家流行托管提供商以及 Cloudflare、cPanel 等服务的集成，使域名映射和 SSL 证书的实现变得异常简单。

因此，通过利用这些提供商之一或将 Ultimate Multisite 放在 Cloudflare 后面，域名和 SSL 证书的管理等方面变得相当简单。

倾向于严格控制站点创建的代理机构将欣赏通过 Ultimate Multisite 的简化界面轻松创建站点并将站点与客户和计划关联的便利性。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-4cYCjjZwK0DZhrlY2NLHTL4waL99PANVZmSJ4AN5MXLTxb1pVF0aAtC4dWJP2hW1pD_v6hL8X7G80LRk-NuazRQDkIPCuhuRJgIMjA4DxuQzVjWEz1Ag2RKnkqwkvmSfcgy2PLrS)

通过 Ultimate Multisite 的直观界面，按产品维度对插件和主题进行严格控制，允许在为新站点实例化时将插件和主题设为可用或隐藏，并设置其激活状态。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-VVpPcr8bvKd2qf9zPB_1SBiVpEYdtmskG_iO0tNCJOm2RXbU6kSC1czyLV1CaU5Mw2fWd-k2r1bnQV_yA4zOL6qnYKLWohnI-EDYhXcpxD_4n-rabGlxjQO8iyjtOgXhuDL5r2y7)

主题提供类似功能，允许在站点创建时激活或隐藏特定主题。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-3CEl6U5CPdKatlXAcG5B9jJux_iWOYpUTI4crCgW15EFkhh4pODF7hYlMyzc3na8QAefadz1kcnY_T7Yn6ZyxbBMJdfRfa16IFZma_-u7NHTtMbLZwJ9f7JbqG1QTh0y1l9WWj5z)

代理机构将通过 Ultimate Multisite 获得安心，能够专注于他们最擅长的工作——设计卓越的网站。

#### Case 2: Niche Provider

有一句老话说：“专注做一件事并做好”。对于许多专业人士来说，这意味着围绕单一核心理念创建产品或服务。

也许您是一名热衷高尔夫的球员，向俱乐部推广网站；或者您是一名热衷电竞的玩家，为战队提供网站；或者您是一名向餐厅推广预订服务的个人？

出于多种原因，您可能希望基于通用框架和平台提供服务。您可能已经设计或投资了定制插件以提供所需功能，或者行业最佳实践可能要求某种标准化的设计方法。

Ultimate Multisite 的一项创新功能是使用模板站点。模板站点是指已安装并激活主题、必要插件已安装并激活以及已创建示例文章或页面的站点。当客户基于模板创建新站点时，模板的内容和设置将被复制到新创建的站点。

对于细分站点和服务提供商而言，这提供了无与伦比的优势，使其能够即时创建一个准备就绪的站点，配备自定义插件和设计。客户只需提供最少的输入即可完成服务。

根据需求，_子目录_ 或 _子域名_ 配置都可能适用，在这种情况下，架构选择将是为 _子目录_ 选择简单 SSL 证书，或为 _子域名_ 选择通配符 SSL 证书。

#### Case 3: WordPress Web Hosting

托管 WordPress 站点有无数种方式，但很少像向客户提供预装 WordPress 版本的网页空间那样简单。这是因为需要将许多决策和考虑因素结合起来，以提供有意义的服务。

Ultimate Multisite 在此领域表现出色，提供了全面的一站式 WordPress 站点托管解决方案。该解决方案包括提供订阅服务、收款、结账表单、折扣券和客户沟通的核心机制。

正确安装、配置和维护 WordPress Multisite 所需的大部分核心工作由 Ultimate Multisite 促进，以至于网络管理员只需考虑与其服务或细分领域相关的方面，例如产品层级、定价和服务优惠。

对于希望与 Ultimate Multisite 集成的开发人员，该解决方案还提供了全面的 RESTful API 和 Webhooks，用于事件通知。

不依赖大量外部插件和许可证，Ultimate Multisite 提供了功能丰富且可与 Wix、Squarespace、WordPress.com 等相媲美的解决方案。

### Architecture Considerations

虽然不是全面指南，但以下项目应作为支持 Ultimate Multisite 安装的技术正确选择的指导。

#### Shared vs. Dedicated Hosting

不幸的是，并非所有托管提供商都相同，一些提供商采用极端服务器密度。低成本提供商通常通过最大化服务器密度来产生收入。因此，您的 Ultimate Multisite 安装可能只是同一服务器上数百个站点之一。

如果提供商未采取适当的安全措施，托管在共享服务器上的站点会遇到“嘈杂邻居”问题。也就是说，同一服务器上的站点消耗了大量资源，其他站点必须竞争剩余资源。通常这表现为站点缓慢或无法及时响应。

作为您自己的网络托管提供商，流量和效果将导致您的客户体验到慢速、低页面排名和高跳出率，往往导致客户流失，因为他们会寻找其他服务。

简而言之，便宜并不意味着好。

Ultimate Multisite 已知可与多家优秀托管提供商协同工作，并与其环境良好集成，提供域名映射和自动 SSL 等功能。这些提供商重视性能，并提供比共享托管更高等级的服务。

有关兼容提供商列表和每个提供商的完整设置说明，请查看兼容提供商文档。

#### Performance Considerations

Ultimate Multisite 并非慢速应用，而是相当快速。然而，它的性能仅与底层应用和基础设施相当，并且只能利用其可访问的资源。

请考虑以下情况：您是拥有 100 个站点的 Ultimate Multisite 安装的网络管理员。其中一些站点表现良好，并每天吸引大量网站访问者。

在规模较小的情况下，例如一到五个站点时，情况会不同，但不久后规模问题将显现。

如果无人监管，单个 Ultimate Multisite 站点将负责满足所有站点访问者的请求。这些请求可能是动态 PHP 页面或静态资产，例如样式表、JavaScript 或媒体文件。无论是一个还是一百个站点，这些任务都会变得重复、单调且浪费。处理 PHP 文件时不需要使用 CPU 能力和内存，因为每个请求的输出都是相同的静态信息。

同样，一个对 PHP 或 HTML 页面的请求会进一步生成多个后续请求，用于脚本、样式表和图像文件。这些请求直接针对您的 Ultimate Multisite 服务器。

可以通过升级服务器轻松解决此问题，但这并不能解决次要问题——地理延迟。只有在多个位置部署多台服务器才能正确解决此问题。

因此，大多数网络管理员使用前端缓存解决方案和内容分发网络（CDN）来满足静态页面的请求。在请求到达服务器之前完成这些请求并提供资产可节省处理资源、消除延迟、避免不必要的升级并最大化技术投资。

Ultimate Multisite 包含一个复杂的 Cloudflare 附加组件，使网络管理员能够将其安装放在 Cloudflare 后面，并利用其缓存功能、DNS 托管、SSL 证书和安全机制。

#### Backups

您可以向 50 个人询问备份建议，并获得 50 种不同的备份策略。答案是，这取决于情况。

不争议的是需要备份，并且几乎难以想象这些备份不由提供商管理，尤其是提供托管服务的提供商。因此，客户将寻求网络管理员提供并管理此服务。网络管理员寻求谁是完全不同的问题。

在本节中，我们同意备份是备份启动时系统状态的时点副本。简单来说，备份时系统的状态被捕获并锁定在备份中。

有了这种理解，如何实现备份以及最适合您环境的方案将主要取决于您的需求和托管提供商满足这些需求的能力。然而，按从最有意见到最少意见的顺序，以下选项应提供一些指导。

#### Snapshots

快照是备份的银弹，因为它们易于使用、简单（除非您想恢复）且“直接工作”。然而，它确实需要您的提供商的帮助，并且主要适用于您拥有 VPS（虚拟专用服务器）或类似环境。我们“兼容提供商”文档中列出的若干提供商提供无需网络管理员进一步干预或考虑的备份。

传统备份针对文件和数据库，而快照针对整个磁盘。这意味着快照不仅捕获站点数据，还捕获操作系统和配置。对许多人来说，这是一大优势，因为可以几乎即时从快照生成新系统，并将其投入运行以替换故障实例。同样，检索文件的恢复过程仅需将快照映像作为磁盘附加到现有实例，以便访问和复制文件。

快照可能会产生额外成本，但它是对事故的保险政策。

#### External Scripts

似乎没有缺乏外部脚本和解决方案来备份 WordPress 和 MySQL 资源，这些方案对 Ultimate Multisite 很有效，因为它是一个使用 WordPress 文件系统和数据库的 WordPress 插件。因此，备份 WordPress 站点的解决方案将充分满足 Ultimate Multisite 的需求。

我们无法推荐任何单一脚本优于其他脚本，但我们的普遍建议是运行多次备份和恢复测试，以确保结果符合预期，并通过持续评估脚本及其功能来“确保确定”，尤其是在应用某种差异备份策略时。

需要注意的是，这些脚本在运行时会增加系统负载，需予以考虑。

#### Plugins

您很可能需要额外插件为客户或网络站点提供功能。所有插件都能与 WordPress Multisite 和 Ultimate Multisite 一起使用吗？这取决于情况。

虽然大多数插件可在 WordPress Multisite 中安装，但其激活和许可因作者而异。

挑战在于某些插件需要按域名进行许可。 这意味着对于某些插件，网络管理员需要手动为每个新站点的每个插件激活许可证。

因此，最好向插件作者查询其插件如何与 WordPress Multisite 一起工作，以及任何特殊要求或许可所需的程序。

#### Domain and SSL

关于多站点 _子域名_ 模式下的域名，已经讨论了很多。网络管理员几乎通用的解决方案是使用通配符 DNS 条目。

此类 DNS 条目将成功解析 _子域名_，如 ‘site1.domain.com’ 和 ‘site2.domain.com’，到 IP 地址 1.2.3.4，从而支持 Ultimate Multisite，并在更大范围内支持使用 _子域名_ 模式的 WordPress Multisite。

这可能在 HTTP 上工作得非常好，因为目标主机是从 HTTP 标头读取的，但如今网络并不那么简单，安全的 HTTPS 事务几乎是强制性的。

幸运的是，有简单的 SSL 证书选项。在 _子目录_ 模式下，可以使用常规域名证书。这些证书可以从可能使用免费 LetsEncrypt 服务或其他来源的托管提供商那里轻松免费获得。否则，如果您能够生成证书签名请求，则可以从机构购买。

对于 _子域名_ 模式，使用通配符 SSL 证书将与通配符域名完美配合，并允许证书对根域名和所有 _子域名_ 具有权威性，而无需额外配置。

然而，需要注意的是，通配符 SSL 证书可能无法与 Cloudflare 等服务一起使用，除非您使用企业计划或将条目设置为仅 DNS，在这种情况下所有缓存和优化将被绕过。

开箱即用的 Ultimate Multisite 为此问题提供了解决方案，展示了我们在 WordPress 多站点需求方面的丰富经验。激活此简单附加组件后，Ultimate Multisite 将使用您的 Cloudflare 凭据，在 Cloudflare 中自动为网络站点添加 DNS 条目，并将其模式设置为“代理”。这样，每个网络子站点在创建时都将获得 Cloudflare 的完整保护和收益，包括 SSL。

根据您的 Ultimate Multisite 安装的性质和目的，客户可能需要使用自己的域名。在这种情况下，网络管理员需要解决两个问题：一是域名托管，二是域名的 SSL 证书。

对于许多人来说，使用 Cloudflare 是一个简单的选项。客户只需将其域名放在 Cloudflare 上，将 CNAME 指向 Ultimate Multisite 的根域名，并在 Ultimate Multisite 中映射其域名，以开始利用自定义域名。

除此之外，需要寻找替代方案，这也是 Ultimate Multisite 推荐兼容提供商列表的原因。因为设置 DNS 和 SSL 的过程可能并非微不足道。然而，借助 Ultimate Multisite 与这些提供商的集成，复杂性大大降低，流程实现自动化。

#### Plugins

您很可能需要额外插件为客户或网络站点提供功能。所有插件都能与 WordPress Multisite 和 Ultimate Multisite 一起使用吗？这取决于情况。

虽然大多数插件可在 WordPress Multisite 中安装，但其激活和许可因作者而异。

挑战在于某些插件需要按域名进行许可。 这意味着对于某些插件，网络管理员需要手动为每个新站点的每个插件激活许可证。

因此，最好向插件作者查询其插件如何与 WordPress Multisite 一起工作，以及任何特殊要求或许可所需的程序。
