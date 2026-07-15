---
title: Exportar e Importar
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Exportação e Importação

O Ultimate Multisite 2.9.0 adiciona uma ferramenta de **Exportação e Importação** de site único em **Ferramentas > Exportação e Importação**. Use-a quando precisar empacotar um site WordPress em um arquivo ZIP, restaurar esse ZIP ou mover um site entre instalações compatíveis do Ultimate Multisite e WordPress de site único.

## Permissões necessárias {#required-permissions}

Você deve fazer login como um administrador que tenha acesso ao menu **Ferramentas** do WordPress no site que será exportado ou importado. Em uma rede multisite, use uma conta de administrador de rede ao exportar ou importar subsites usando as ferramentas do Ultimate Multisite no nível da rede.

Os downloads ZIP de exportação são servidos por um endpoint de download autenticado, portanto, mantenha a sessão de administrador ativa até que o download seja concluído e não compartilhe as URLs de download geradas publicamente.

## Exportando um site para um ZIP {#exporting-a-site-to-a-zip}

1. No painel de administração do WordPress do site que você deseja copiar, vá para **Ferramentas > Exportação e Importação**.
2. Abra a área de exportação e escolha o site que você deseja empacotar.
3. Selecione o conteúdo opcional para incluir, como uploads, plugins e temas, quando essas opções estiverem disponíveis.
4. Inicie a exportação e aguarde o processo terminar. Sites grandes podem precisar de tempo para finalizar em segundo plano antes que o ZIP esteja pronto.
5. Baixe o ZIP finalizado na lista de exportações.

Mantenha o ZIP em um local seguro. Ele pode conter conteúdo do site, configurações, arquivos de mídia e ativos de código selecionados.

## O que a exportação inclui {#what-the-export-includes}

Um ZIP de exportação pode incluir:

- O conteúdo do banco de dados e a configuração do site selecionado.
- Arquivos de mídia enviados, caso os uploads estejam incluídos.
- Plugins e temas, caso essas opções sejam selecionadas.
- Metadados de importação usados pela ferramenta Exportação e Importação para reconstruir o site na instalação de destino.

O tamanho exato do ZIP depende da quantidade de mídia, dos plugins e temas selecionados e do tamanho das tabelas de banco de dados do site.

## Importando um site de um ZIP {#importing-a-site-from-a-zip}

1. Vá para **Ferramentas > Exportação e Importação** no site de destino do WordPress.
2. Abra a área de importação e faça o upload do ZIP criado pela ferramenta Exportação e Importação.
3. Insira uma URL de substituição se o site deve usar um endereço novo, ou deixe o campo em branco para manter a URL original.
4. Escolha se deseja excluir o ZIP enviado após a conclusão da importação.
5. Clique em **Iniciar Importação**.
6. Monitore a importação pendente até que ela seja concluída. Use **Cancelar Importação** apenas se precisar interromper o processo antes da conclusão.
7. Revise o site importado antes de permitir tráfego normal ou acesso de clientes.

Em uma instalação WordPress de site único, importar um ZIP substitui o site atual pelo site importado. Crie um backup completo do site de destino antes de começar e evite iniciar múltiplas importações para o mesmo site ao mesmo tempo.

## Limitações e notas de compatibilidade {#limitations-and-compatibility-notes}

- Diretórios de upload ou bibliotecas de mídia muito grandes podem gerar arquivos ZIP grandes. Confirme os limites de upload do PHP, os limites de execução, o espaço em disco, a memória e as configurações de tempo limite do servidor antes de exportar ou importar sites grandes.
- Bibliotecas de mídia muito grandes podem precisar ser movidas durante uma janela de manutenção de baixo tráfego.
- A instalação de destino do WordPress deve rodar versões compatíveis de WordPress, PHP, Ultimate Multisite, plugin e tema.
- Uma importação de site único substitui o site de destino. Não é uma ferramenta de mesclagem.
- As movimentações de multisite para site único e de site único para multisite são suportadas apenas quando o ambiente de destino puder rodar os plugins, temas, URLs e componentes obrigatórios do Ultimate Multisite do site exportado.
- Mantenha o ZIP privado. Ele pode conter conteúdo de banco de dados, arquivos enviados e detalhes de configuração do site exportado.

Para fluxos de trabalho de exportação mais antigos no nível da rede, consulte [Site Export](/user-guide/administration/site-export).
