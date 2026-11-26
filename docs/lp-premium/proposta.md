# Despensa, site: proposta de LP premium

Cartão: brunogueira/despensa#713 (fase 1: análise e proposta). Autoria: ux.
Estado: proposta para o Bruno decidir. Nada de `src/` foi alterado.
Mockup: `docs/lp-premium/mockup.html` (hero e duas seções, claro e escuro, com o movimento principal funcionando).

Como ver o mockup: `cd docs/lp-premium && python3 -m http.server 4471`, depois abrir `http://127.0.0.1:4471/mockup.html`. Para forçar um tema: `?tema=dark` ou `?tema=light`. Para ver a leitura da nota de novo, recarregue a página.

Medições feitas em 26/11/2026 no navegador embutido (desktop 1280 px e celular 375x812, nos dois temas), mais leitura de todo o código da LP (`index.astro`, `global.css`, `Base.astro`, `Phone.astro`, `StoreButtons.astro`, `Glyph.astro`).

Referências de design engineering e movimento: repositório emilkowalski/skills (emil-design-eng, find-animation-opportunities, choreograph, review-animations, animation-performance, apple-design). Usado como referência de critério, não como regra a executar.

---

## 1. Diagnóstico seção a seção

Números: a página tem 6249 px de altura no desktop e 9585 px no celular. As cinco telas do app (lista, compra, preços, gasto, casa) aparecem em **19 molduras de celular** ao longo da página (3 no hero, 2 no destaque, 10 na vitrine, 4 nos recursos). O visitante vê o mesmo print várias vezes e a página nunca muda de assunto de forma visível.

### Hero
- O gancho ("Compre melhor.") e a explicação ("Escaneie a nota, a Despensa guarda os preços.") têm o mesmo peso, o mesmo corpo e o mesmo traço de 800. Quatro linhas iguais, sem ponto de entrada.
- O trio de celulares em leque (inclinados 5 graus, um Android de cada lado) é o arranjo mais comum das páginas de app. Não diz nada sobre a Despensa. O argumento do produto (a nota vira lista) não está em lugar nenhum do hero.
- No celular, o primeiro print só aparece em y = 540 e entra com fade enquanto o visitante já está lendo os botões. O glifo gigante em 40% de opacidade atrás dos celulares parece um erro de renderização.
- O degradê do "Compre melhor." (`background-clip: text`) não aparece: falta `-webkit-text-fill-color: transparent`, então o que se vê é a cor lisa. É código morto.
- As duas manchas que derivam por 16 e 20 segundos são movimento sem propósito: não informam nada, só ocupam a GPU.
- Os botões "Em breve" (tracejados) ocupam o lugar do CTA principal e não levam a lugar nenhum.

### Faixa de promessas (trust)
- Quatro ícones com frases curtas. Repete o que a seção de privacidade diz de novo, e o FAQ diz uma terceira vez (CPF, sem anúncios, offline, sem rastreio). É informação importante, mas diluída: a promessa mais forte do produto (o CPF) tem o mesmo tamanho que "sem anúncios".

### Como funciona
- Três cartões numerados com um ponto tracejado entre eles. Padrão genérico. Cada passo repete uma funcionalidade que o destaque e os recursos explicam de novo logo abaixo (a mesma narrativa três vezes: passos, destaque, bento).
- Os passos falam de telas do app, mas não mostram nenhuma delas. O texto e a imagem ficam em seções diferentes.

### Destaque "Leia a nota e pronto"
- A melhor ideia da página (a nota sendo lida) vira uma faixa escura com um parágrafo, três tópicos e dois celulares. A seção mostra o resultado (tela de compra) mas não a leitura. É o único lugar onde o produto deveria "acontecer" e ele fica parado.
- O marcador dos tópicos é o caractere "✓" do texto, não um ícone SVG. Aparece também em `ul.check` na página de planos. Renderiza com a fonte do sistema e fica diferente em cada aparelho.

### Vitrine iPhone / Android
- Seletor (iPhone, Android) mais uma fileira horizontal de cinco celulares: 873 px para repetir telas já vistas. No celular a fileira rola de lado com a barra escondida; só o corte do segundo celular na borda sugere que há mais.
- Os dez prints têm o mesmo tamanho, o mesmo espaço e a mesma legenda. Sem hierarquia: o que é a tela mais importante?
- O celular sobe 8 px ao passar o mouse, mas não é clicável. Movimento sem função.

### Recursos (bento)
- É a seção mais longa: 1442 px no desktop, 46% da página junto com a vitrine e o destaque. Quatro cartões com a mesma estrutura (ícone, título, parágrafo, lista), um deles sem imagem, deixando um buraco no desenho.
- Os cartões sobem 2 px e ganham sombra ao passar o mouse, o que sugere que são clicáveis. Não são.
- O ícone gira 6 graus ao passar o mouse: decoração.

### Privacidade
- É o conteúdo mais forte e o mais diferente de qualquer concorrente ("nunca guardamos o CPF"), mas aparece como quatro cartões iguais em fundo verde-claro. Nada mostra a promessa; só afirma.

### Planos, perguntas, CTA final
- Planos: dois cartões iguais ao resto. O preço ("R$ 0") é um número grande, mas dentro de uma moldura que o trata como mais um cartão.
- Perguntas: bom (acordeão nativo com `name`, alvos de 48 px). Manter.
- CTA final: cartão com o glifo a 8% de opacidade. Genérico e repete os botões "Em breve" do topo.

### Ritmo vertical
- Todas as seções usam `padding-block: clamp(48px, 6vw, 72px)`. Planos e perguntas ainda são apertadas à mão (`padding-bottom: 24px`, `padding-top: 0`). O ritmo é uniforme: sem respiro, sem clímax, sem mudança de escala. Os fundos alternam entre `--bg` e `--surface` (1,1:1), então a diferença quase não se vê. A única quebra real é a faixa escura do destaque e o verde da privacidade.

### Tipografia
- Só a fonte do sistema, quase sempre em 800. Uma só voz. Títulos de seção grandes e iguais; subtítulos de cartão (1,25 a 1,35 rem, 650) perto demais do corpo. Rótulos ("eyebrow") em sans maiúscula. Nada de segunda voz para os números (preços, totais), que são o assunto do produto.

### Cor
- Verde `#437059` sobre areia, sempre o mesmo. Funciona e é fiel ao app, mas não há um segundo sinal de cor com significado. No app existe: verde para "menor preço" e âmbar para "maior" (print de preços). O site não usa essa semântica.

### Microinterações
- **Sobram**: manchas que derivam, glifo fantasma, elevação de cartões não clicáveis, rotação de ícone, subida do celular da vitrine, revelação ao rolar em quase todo bloco (700 ms, 22 px, em cascata uniforme de 90 ms: o conteúdo fica invisível até a pessoa rolar e a cascata age como fila, não como onda).
- **Faltam**: retorno de toque nos botões das lojas, no seletor iPhone/Android e no botão de tema (só `.btn` tem `:active`); nenhum movimento que explique o produto; troca de tema sem transição.
- **Bom e deve ficar**: `prefers-reduced-motion` respeitado, o JS de revelação some se não há `IntersectionObserver`, alvos de 44 px, foco visível, tokens sem branco puro, textos alternativos descrevendo cada tela, prints reais nos dois temas.

---

## 2. Direção visual

### Conceito: a nota vira lista

A marca já carrega a ideia: o glifo é um rolo de nota fiscal com um check. A LP inteira passa a ser **a nota fiscal como material**, e cada recurso visual significa algo que o app faz:

| Elemento | O que é | O que significa |
|---|---|---|
| Papel térmico com borda serrilhada | A nota (o glifo ganha corpo) | A compra que entrou no app |
| Fonte mono, pontilhado entre nome e preço | Texto da impressora | Dados lidos, sem digitar |
| Feixe verde que varre a nota | O leitor de QR | A leitura da NFC-e |
| Marca-texto amarelo no preço | O preço lido (e, nos preços, o menor já pago) | Entrou no histórico |
| Tarja preta sobre o CPF, com "Descartado" | A promessa de privacidade | O CPF nunca é guardado |

Uma ideia só, repetida com disciplina: a primeira dobra mostra a nota sendo lida e entrando na lista; "Como funciona" liga cada passo à tela do app; a privacidade mostra a tarja cobrindo o CPF. Quem rola a página entende o produto sem ler.

O tom visual: editorial e quente, mais revista de bairro que app de fintech. Muito espaço em branco (areia), tipografia grande, um objeto físico (a nota) como protagonista e o celular como resposta.

### Tipografia

- **Títulos**: serifa de display com itálico. Recomendado: Fraunces (variável, eixo óptico, hospedada no próprio site via `@fontsource-variable/fraunces`, só latin, cerca de 45 a 60 KB; sem Google Fonts, para manter "sem rastreio nem neste site"). Pesos 400 a 500, `letter-spacing` de -0,03em, itálico para a palavra-chave ("melhor.", "três passos.", "o CPF.").
- **Corpo e interface**: continua a fonte do sistema (SF no iPhone e no Mac), como no app.
- **Nota e rótulos**: `ui-monospace` (SF Mono), 12 a 13 px, maiúscula com 0,06em para rótulos. Dá a voz de impressora térmica sem baixar nada.
- **Números**: sempre `font-variant-numeric: tabular-nums` (preços, totais, "01/02/03").
- No mockup, a serifa está declarada como `"Fraunces", ui-serif, "New York", Georgia`. Como a fonte ainda não está embutida, o mockup usa a New York da Apple (no Mac e no iPhone) e Georgia em outros sistemas. Em Android e Windows o resultado final com Fraunces será um pouco mais caloroso que o que se vê hoje no mockup.
- Alternativa de custo zero: `ui-serif` (New York) com Georgia de reserva. Fica ótimo no iPhone e no Mac e comum em Android e Windows. Decisão no fim.

Escala (clamp, em rem): herói 3,5 a 7; H2 2,4 a 4,75; H3 de passo 1,8 a 2,75; corpo 1,0625; rótulo mono 0,75.

### Composição

- **Alinhamento à esquerda** em tudo. Acaba a mistura de títulos centralizados com corpo à esquerda.
- **Hero** (desktop): coluna de texto (1fr) e palco de 520 px. No palco, o celular (272 px) e a nota (292 px, girada 3 graus) sobrepostos: a nota cobre a borda esquerda do celular, como se tivesse acabado de sair do caixa. A altura do hero acompanha a janela (máx. 700 px).
- **Hero** (celular): texto compacto e palco reduzido a 66% (nota e celular lado a lado), com o celular começando em y ≈ 560 (hoje y = 540, mas com o glifo gigante atrás e sem a nota). O visitante vê o produto na primeira dobra, e a varredura acontece ali.
- **Ritmo**: espaçamento de seção de 72 a 150 px (`clamp(72px, 11vw, 150px)`), com intervalos maiores antes das seções-chave. Alternância deliberada: areia, areia com passos longos, faixa de tinta (privacidade), areia.
- **Linhas finas** em vez de cartões: `border-top` de 1 px em `--divider`, pontilhado entre rótulo e valor. O cartão fica reservado ao que é de fato cartão (planos).
- **Raios**: 14 (botões), 46 (moldura do celular), sem raios intermediários. A nota tem cantos retos e borda serrilhada.

### Uso dos prints

- O print passa a ter um papel por seção, não um papel de decoração:
  - Hero: tela de lista (resultado final do que a nota alimenta).
  - Como funciona: um celular só, fixo, que troca de tela (lista, compra, preços) conforme o passo.
  - Preços e Casa (seções seguintes): um celular grande, centrado na tela.
- Chega de 19 molduras. A meta é 5 a 6 ao longo da página, em tamanhos diferentes. A vitrine iPhone/Android e o bento saem; o seletor iPhone/Android vira um botão pequeno dentro do palco fixo de "Como funciona" (troca a moldura e os prints, mesma mecânica). Android continua presente sem repetir todas as telas.
- A nota em papel complementa o print e nunca o substitui: os dados dela são os mesmos do app (Leite integral 1L, Requeijão light 400g, Pão de forma 500g, Molho de tomate 680g, total R$ 400,08). Todos os valores são de exemplo e a legenda diz isso.

### Cor

Tokens existentes, sem mudança: `--bg`, `--text`, `--text-2`, `--primary`, `--primary-strong`, `--primary-soft`, `--ink-bg`, `--ink-text`, `--ink-muted`, `--divider`, `--frame`, sombras.

Tokens novos propostos (entram no `:root` e nos dois temas; nenhum é branco puro):

| Token | Claro | Escuro | Uso | Contraste medido |
|---|---|---|---|---|
| `--paper` | `#faf7ef` | `#e4dfd0` | papel da nota | em relação ao `--bg`: 1,1:1 no claro (separação por sombra e serrilha) e 13,4:1 no escuro |
| `--paper-ink` | `#2a2d27` | `#23251f` | texto da nota | 13,1:1 e 11,6:1 sobre `--paper` |
| `--paper-mute` | `#6b675b` | `#625e52` | rótulos, pontilhado | 5,3:1 e 4,9:1 |
| `--marker` | `#ead98f` | `#cdb871` | marca-texto no preço | texto `--paper-ink` sobre ele: 9,9:1 e 7,9:1 |
| `--paper-accent` | `#437059` | `#365b48` | check e "Descartado" no papel | 5,3:1 e 5,7:1 |
| `--primary-on-ink` | `#92c3a5` | `#92c3a5` | verde sobre a faixa de tinta | 6,9:1 sobre a tinta do tema claro (`#22302b`) e 6,0:1 sobre a do escuro (`#2b3a31`); o `--primary` do tema claro sobre a mesma tinta daria 2,4:1 e reprovaria |

`--marker` conversa com a semântica do app: o verde marca o menor preço e o âmbar o maior. Sugestão para a fase 2: usar `--marker` para "menor preço" também na seção de preços, para a cor significar a mesma coisa nos dois lugares. Decisão do Bruno se isso também entra em `src/theme/tokens.ts` do app.

Diferença entre os dois temas: no escuro, a nota é o objeto mais claro da página, o que a torna o foco natural; no claro, ela fica quase da cor do fundo e se destaca pela sombra e pela borda serrilhada. As duas leituras foram conferidas no mockup.

### Ícones

Todos SVG de traço de 2 px (o conjunto que o site já usa: anúncio, rastreio, offline, lixeira para "apagar"), e check desenhado em SVG (também dentro de máscara CSS nos pontos da linha do tempo). Os "✓" de texto do destaque e de `ul.check` saem. Nenhum emoji em lugar nenhum.

---

## 3. Plano de movimento

Critério (referência Emil Kowalski): cada animação responde a quatro perguntas, na ordem. Com que frequência a pessoa vê isso? Qual o propósito (feedback, consistência espacial, indicação de estado, explicação, ou deleite só no que é raro)? Cabe no orçamento de tempo? Ajuda ou atrapalha a leitura?

A LP é vista uma vez por visita (frequência "rara"), então o hero pode ter um momento de deleite. Mas só um. Todo o resto serve a uma função.

Curvas (variáveis do mockup):
- `--ease-out: cubic-bezier(.23, 1, .32, 1)` para entradas e feedback.
- `--ease-in-out: cubic-bezier(.77, 0, .175, 1)` para algo que se move dentro da tela.
- `linear` só para movimento constante (a varredura do leitor).
- Nunca `ease-in`. Nunca `scale(0)` (as marcas começam em 0,7 com opacidade).

Propriedades: só `transform`, `opacity` e `translate`. Há uma única exceção possível, declarada: o traçado da linha de preços (M13, fase seguinte).

### Movimentos no mockup (feitos e funcionando)

| # | Momento | O que comunica | Duração e curva | Propriedades | Menos movimento |
|---|---|---|---|---|---|
| M1 | Linhas do título entram por baixo de uma máscara | Ordem de leitura: primeiro o gancho, depois a explicação | 640 ms ease-out; atrasos de 60 e 170 ms (as duas linhas têm pesos diferentes, a cascata não é uniforme) | `transform` | Título já no lugar |
| M2 | Celular e nota entram | O produto chega junto com a mensagem | 700 ms ease-out; celular em 120 ms, nota em 260 ms; sobem 10 e 26 px | `opacity`, `transform` | Já no lugar |
| M3 | Feixe verde varre a nota de cima a baixo | Explicação: é assim que a leitura acontece | 1400 ms linear, começa em 1000 ms; some no fim | `transform`, `opacity` | Feixe não aparece |
| M4 | Cada linha reage quando o feixe passa: marca-texto no preço e check | Cada item foi lido. O atraso vem da posição real da linha (medida em JS, uma vez) | 300 ms e 240 ms, ease-out | `transform` (scaleX da marca, scale 0,7 a 1 do check), `opacity` | Marcas já visíveis |
| M5 | A tarja preta cobre o CPF e aparece "Descartado" | Estado e promessa: o CPF aparece na nota e é descartado | tarja 380 ms ease-out; texto 300 ms, 260 ms depois | `transform` (scaleX), `opacity` | Tarja já coberta |
| M6 | Nota e celular se deslocam em sentidos opostos com o ponteiro (até 14 px e 6 px), com suavização | Profundidade; só decoração, então só onde é inofensivo | lerp de 0,08 por quadro, em `requestAnimationFrame` apenas enquanto se move | `translate` | Desligado; também desligado em toque |
| M7 | Tela do celular fixo troca ao mudar de passo | Consistência espacial: o texto da esquerda comanda o celular da direita | 260 ms ease-out | `opacity`, `transform` (8 px, escala 0,99) | Fade de 120 ms, sem deslocamento |
| M8 | No passo 2, o feixe varre a tela de compra | A leitura da nota, de novo, agora na tela do app | 1300 ms linear, uma vez a cada ativação | `transform`, `opacity` | Não aparece |
| M9 | Fio da linha do tempo se preenche e o ponto fecha com check; passos não ativos ficam a 38% | Indicação de estado e foco: onde estou nos três passos | fio 600 ms ease-in-out; ponto 300 ms; texto 400 ms ease-out | `transform` (scaleY), `opacity`, cor | Sem transição |
| M10 | Na privacidade, a tarja cobre o CPF quando a seção entra | A promessa, demonstrada (uma vez na página) | tarja 520 ms ease-in-out, 250 ms depois de entrar; "Descartado" 300 ms em 800 ms | `transform`, `opacity` | Tarja já coberta |
| M11 | Retorno de toque em botões e seletores | Feedback: a interface ouviu | `scale(.97)` em `:active`, 160 ms ease-out | `transform` | Sem escala |
| M12 | Botão de tema muda de fundo | Feedback de hover/pressão | 160 ms | cor de fundo | Sem transição |

Coreografia do hero (um só pico de atenção, cerca de 2,4 s de ponta a ponta):
`0 a 640 ms` título; `120 a 820 ms` celular; `260 a 960 ms` nota; `1000 a 2400 ms` varredura e reações; `~2000 ms` tarja do CPF. O líder é a nota (o que o visitante precisa notar), o celular e o título são apoio, o fundo não se move. Tudo é interativo desde o primeiro quadro: nada espera a animação acabar.

### Movimentos propostos para a fase seguinte (não estão no mockup)

| # | Momento | Comunica | Duração e curva | Observação |
|---|---|---|---|---|
| M13 | Seção de preços: a linha do gráfico se desenha e o ponto do "menor já pago" ganha o marca-texto | Tendência: o preço mudou ao longo do tempo | 900 ms ease-out, uma vez ao entrar; marca em 200 ms depois | `stroke-dashoffset` é a única propriedade que não é composta; o SVG tem um único caminho e roda uma vez. Alternativa sem exceção: revelar por máscara (`clip-path: inset`, só `clip-path`, também não composto) ou mostrar o gráfico parado. |
| M14 | Seção da casa: um item é marcado num celular e, 400 ms depois, aparece marcado no outro | Explicação: a casa vê na hora | 200 ms de check em cada, ease-out; atraso de 400 ms | Precisa de uma montagem em HTML dos dois celulares (os prints reais não têm esse estado). Deleite no tier "raro". Opcional. |

### O que fica de fora de propósito

- Revelação ao rolar em todos os blocos (fade + 22 px). Substituída por: conteúdo sempre legível desde o primeiro quadro e movimento só onde ele explica.
- Manchas à deriva, glifo gigante fantasma, rotação de ícone, elevação de cartões não clicáveis, subida do celular ao passar o mouse.
- Cascata uniforme de atraso. Quando há cascata (título), os atrasos são diferentes.
- Parallax de rolagem, cursores personalizados, preloader, texto que se digita, contadores de número (o total é um dado a ser lido: não deve se mexer).
- Nada animado com o teclado (navegação, abrir o FAQ já é nativo).

---

## 4. Desempenho e bibliotecas

- **Zero bibliotecas.** O mockup inteiro é CSS e cerca de 60 linhas de JS: tema, medição das linhas da nota (uma vez), `IntersectionObserver` para o passo ativo e para a privacidade, parallax com `requestAnimationFrame`. Nenhuma biblioteca de movimento se paga aqui. `GSAP`, `Lenis` (rolagem suave) e `Framer Motion` somam dezenas de KB para fazer o que `transform` e `IntersectionObserver` já fazem, e rolagem suave por biblioteca atrapalha quem usa teclado e leitor de tela. Se um dia a fase M14 (sincronização da casa) pedir uma sequência complexa, a opção pequena é o `motion` mini (Web Animations, cerca de 2 KB), mas hoje não é necessária.
- **Opcional, não necessária**: `animation-timeline: view()` (CSS scroll-driven) para ligar o fio da linha do tempo ao progresso real da rolagem, como melhoria progressiva dentro de `@supports`. Nesta proposta o fio usa o passo ativo (mais simples e funciona em qualquer navegador). Se o Bruno quiser a versão ligada à rolagem, é um ajuste de CSS, sem JS.
- **Fonte**: Fraunces variável hospedada no site, `font-display: swap`, subconjunto latin (com acentos do português), `preload` só do arquivo do título. Custo estimado de 45 a 60 KB uma vez, em cache depois. Sem pedidos a terceiros.
- **Imagens**: o `Phone.astro` já gera WebP em duas larguras; segue igual. A tela do celular fixo carrega as três telas na primeira visita da seção (lazy). Com menos molduras na página inteira (de 19 para 5 ou 6), há menos imagens para baixar.
- **Camadas**: `will-change: translate` só nas duas camadas de parallax, que se movem. Os demais movimentos têm duração curta e não precisam. A sombra da nota está num elemento estático (`filter: drop-shadow` no pai, `transform` animado no filho), para o filtro não ser recalculado a cada quadro.
- **Fora da tela, parado**: o parallax só roda enquanto o ponteiro se move; o resto são animações únicas que terminam sozinhas. Some a deriva contínua que existe hoje. A página deixa de gastar bateria parada.
- **Não medido**: o mockup foi verificado em um navegador de desktop. A fluidez em um celular intermediário (com tela de 120 Hz, o orçamento é de 8 ms por quadro) precisa de uma gravação em aparelho real na fase de implementação.

---

## 5. Acessibilidade

- **Menos movimento**: o estado-base de todo elemento animado é o estado final. O movimento só existe dentro de `@media (prefers-reduced-motion: no-preference)`. Com "reduzir movimento", nada se desloca, a varredura não aparece e a troca de tela do celular fixo vira um fade de 120 ms.
- **A nota é decorativa para quem usa leitor de tela**: `role="img"` com `aria-label` que descreve o conteúdo ("Nota fiscal de exemplo sendo lida: itens com preço e o CPF coberto por uma tarja, com a indicação de descartado"); os filhos ficam `aria-hidden`. O título (`h1`) continua com o texto atual, íntegro.
- **O celular fixo de "Como funciona" é `aria-hidden`** porque os três textos já descrevem as telas; em telas pequenas cada passo mostra o seu próprio celular, com `alt`.
- **Contraste**: tabela da seção 2. Verde sobre a faixa escura corrigido no mockup (o `--primary` do claro daria 2,4:1; passa para `--primary-on-ink`, 6,9:1).
- **Alvos de 44 px** em botões, links e no botão de tema; foco visível de 3 px mantido.
- **Texto grande**: títulos em `clamp`, grade que empilha; a nota tem largura fixa mas encolhe como bloco (escala via `transform`, só em telas estreitas).
- **A serifa muda o tom de leitura**: o corpo continua em sans do sistema, então a leitura longa não sofre.

---

## 6. Estrutura proposta da página

Ordem e papel de cada seção (o mockup cobre as três primeiras partes marcadas com asterisco):

1. **Hero*** com a nota sendo lida.
2. **Como funciona*** (linha do tempo + celular fixo). Substitui a faixa de promessas, o destaque "Leia a nota", os três passos e a vitrine iPhone/Android.
3. **Preços**: "O arroz subiu?" Número grande em serifa, o celular de preços e o gráfico se desenhando (M13).
4. **A casa**: lista compartilhada e convite por lista. Um celular grande; opcionalmente a demonstração de sincronização (M14). Substitui os blocos "uma lista só para a casa" e "convide só para uma lista" do bento.
5. **Privacidade*** (faixa de tinta, tarja do CPF) com as promessas curtas (sem anúncios, sem rastreio, offline, apague tudo). Substitui a faixa de promessas e os quatro cartões.
6. **Planos** em formato de recibo (itens e "R$ 0,00"), com o plano completo como "em breve".
7. **Perguntas** (mantém o acordeão nativo).
8. **Chamada final** simples e rodapé.

Resultado esperado: de 10 blocos para 8; de 19 molduras de celular para 5 a 6; altura menor, já que o bento e a vitrine (juntos, 2315 px no desktop hoje) saem. O mockup, com hero, como funciona e privacidade, mede 4564 px no celular; a página atual inteira mede 9585 px. A altura final só se confirma na implementação.

Os textos não mudam de tom nem de promessa: título, subtítulo, passos, privacidade e perguntas reaproveitam o que já está no site. Cada afirmação continua verdadeira (`Sem rastreio nem neste site`, `Nunca guardamos o CPF`, estados atendidos na linha "Lê notas do PR, PE, RJ, RS e SP").

---

## 7. Plano de implementação (fase 2, para o frontend)

Cartões sugeridos, em ordem:

1. **Tokens e tipografia**: tokens novos no `global.css` (claro, escuro e `data-theme`), fonte Fraunces hospedada, escala tipográfica, correção do degradê morto do título.
2. **Hero com a nota**: componente `Nota.astro` (papel, linhas, tarja) com os dados de exemplo; M1 a M6; leitura de posição das linhas em JS curto; versão estreita; remove manchas, glifo fantasma e o trio em leque.
3. **Como funciona com celular fixo**: passos, fio, troca de tela, seletor iPhone/Android dentro do palco; remove destaque, vitrine e faixa de promessas.
4. **Privacidade com a tarja**: M10; remove os quatro cartões.
5. **Preços e casa** (M13, opcional M14), planos em recibo, chamada final.
6. **Limpeza**: tira revelação ao rolar, elevação de cartões, rotação de ícone e `✓` de texto; passa a verificação de `lint:colors`.
7. **QA**: tema claro e escuro, "reduzir movimento", leitor de tela, 320 px, texto grande, gravação em aparelho real para fluidez.

---

## 8. Decisões (26/11/2026)

O Bruno aprovou a direção. A coordenação fechou o resto com o padrão mais simples; qualquer item pode mudar a pedido dele.

1. **Direção**: aprovada (a nota como material, serifa com itálico, tom editorial).
2. **Fonte**: Fraunces hospedada no site (licença OFL), só os pesos usados, com `font-display: swap`.
3. **Tokens**: os novos ficam só no site por enquanto. Levar o marca-texto para o app vira cartão no Backlog.
4. **Botões "Em breve"**: ficam como estão. Nada de lista de espera, para não coletar e-mail.
5. **iPhone/Android**: vira alternador dentro do celular fixo; a vitrine de dez prints sai.
6. **Demonstração da casa (M14)**: fica para depois, no Backlog. Por ora, print real.
7. **Planos**: no formato de recibo.

---

## 9. O que o mockup mostra e o que não mostra

- **Mostra**: hero completo (título, subtítulo, lojas "Em breve", estados atendidos, nota, celular, parallax, repetir leitura); "Como funciona" com fio, passos ativos e celular fixo que troca de tela com o feixe no passo 2; privacidade com a tarja; cabeçalho e botão de tema; claro e escuro; largura de celular (empilha, com um celular por passo).
- **Não mostra**: preços, casa, planos, perguntas, chamada final, rodapé; o seletor iPhone/Android dentro do palco; a fonte Fraunces; versão em Android dos prints; o ciclo de três estados do botão de tema (o mockup alterna claro e escuro).
- Os prints são os reais do site (iOS, claro e escuro), convertidos para WebP em `docs/lp-premium/img/`.
