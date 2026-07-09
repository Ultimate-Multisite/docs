---
title: Exportar e Importar
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Exportar e Importar {#export--import}

O Ultimate Multisite 2.9.0 adiciona uma ferramenta única de **Exportar e Importar** em **Ferramentas > Exportar e Importar**. Use-a quando precisar empacotar um site WordPress como um arquivo ZIP, restaurar esse ZIP ou mover um site entre instalações compatíveis do Ultimate Multisite e WordPress single-site.

## Permissões necessárias {#required-permissions}

Você deve fazer login como administrador que tenha acesso ao menu **Ferramentas** do WordPress no site que está sendo exportado ou importado. Em uma rede multisite, use uma conta de administrador da rede ao exportar ou importar subsites usando as ferramentas de nível de rede do Ultimate Multisite.

Os downloads ZIP de exportação são servidos através de um endpoint de download autenticado, então mantenha a sessão de administrador ativa até que o download termine e não compartilhe publicamente os URLs de download gerados.

## Exportando um site para um ZIP {#exporting-a-site-to-a-zip}

1. No painel administrativo do site que você deseja copiar, vá para **Ferramentas > Exportar e Importar**.
2. Abra a área de exportação e escolha o site que você deseja empacotar.
3. Selecione o conteúdo opcional a incluir, como uploads, plugins e temas, quando essas opções estiverem disponíveis.
4. Inicie a exportação e aguarde o processo terminar. Sites grandes podem precisar terminar em segundo plano antes que o ZIP esteja pronto.
5. Baixe o ZIP final da lista de exportações.

Mantenha o ZIP em um local seguro. Ele pode conter conteúdo do site, configurações, arquivos de mídia e ativos de código selecionados.

## O que a exportação inclui {#what-the-export-includes}

Um ZIP de exportação pode incluir:

- O conteúdo do banco de dados e a configuração do site selecionado.
- Arquivos de mídia enviados quando os uploads estiverem incluídos.
- Plugins e temas quando essas opções forem selecionadas.
- Metadados de importação usados pela ferramenta Exportar e Import para reconstruir o site na instalação de destino.

O tamanho exato do ZIP depende da quantidade de mídia, dos plugins e temas selecionados, e do tamanho das tabelas do banco de dados do site.

## Importando um site a partir de um ZIP {#importing-a-site-from-a-zip}

1. Vá para **Ferramentas > Exportar e importar** no site WordPress de destino.
2. Abra a área de importação e faça o upload do ZIP criado pela ferramenta Exportar e importar.
3. Insira uma URL de substituição se o site deve usar um novo endereço, ou deixe o campo em branco para manter a URL original.
4. Escolha se deseja excluir o ZIP enviado após a conclusão da importação.
5. Clique em **Iniciar Importação**.
6. Monitore a importação pendente até que ela termine. Use **Cancelar Importação** apenas se precisar parar o processo antes da conclusão.
7. Revise o site importado antes de permitir o tráfego normal ou o acesso dos clientes.

Em uma instalação WordPress de site único, importar um ZIP substitui o site atual pelo site importado. Crie um backup completo do site de destino antes de começar e evite iniciar múltiplas importações para o mesmo site ao mesmo tempo.

## Limitações e notas de compatibilidade {#limitations-and-compatibility-notes}

Diretórios de upload muito grandes ou bibliotecas de mídia podem gerar arquivos ZIP grandes. Confirme os limites de upload do PHP, os limites de execução, o espaço em disco, a memória e as configurações de tempo limite do servidor antes de exportar ou importar sites grandes.
Bibliotecas de mídia muito grandes podem precisar ser movidas durante uma janela de manutenção com pouco tráfego.
A instalação do WordPress de destino deve executar versões compatíveis do WordPress, PHP, Ultimate Multisite, plugin e tema.
Uma importação de site único substitui o site de destino. Não é uma ferramenta de mesclagem (merge).
As migrações de Multisite para site único e de site único para Multisite são suportadas apenas quando o ambiente de destino pode executar os plugins, temas, URLs e componentes do Ultimate Multisite necessários do site exportado.
Mantenha o ZIP privado. Ele pode conter conteúdo do banco de dados, arquivos enviados e detalhes de configuração do site exportado.

Para fluxos de trabalho de exportação de nível de rede mais antigos, consulte [Exportar Site](/user-guide/administration/site-export).
