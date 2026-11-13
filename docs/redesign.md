# Despensa, site: validação de UX/UI e proposta de redesign

Autoria: ux. Estado: proposta para o frontend implementar. Nada de `src/` foi alterado.
Medições feitas em 13/11/2026 em https://despensa.brunocnog.com.br, no navegador embutido (desktop 1024 px; celular 375x812), nos temas claro e escuro, mais leitura do código (`src/pages/index.astro`, `src/layouts/Base.astro`, `src/components/StoreButtons.astro`, `src/styles/global.css`) e das sete capturas em `public/telas/`.

---

## 1. Validação

### 1.1 O que já funciona (manter)

- **Paleta e tokens**: verde `#437059` e areia `#f3f1ec` espelham o app. Nenhum branco puro. Temas claro e escuro completos.
- **Contraste dos tokens**: medido. Texto/fundo 12,2:1 (claro) e 14,9:1 (escuro); `--text-2` sobre `--surface` 5,6:1 e 6,9:1; botão primário 5,0:1 e 9,0:1. Tudo AA.
- **Acessibilidade de base**: link "Pular para o conteúdo", foco de 3 px, alvos de 44 px, `prefers-reduced-motion`, `lang="pt-BR"`, `theme-color` por tema, JSON-LD.
- **Sem scroll horizontal** no celular (`scrollWidth` = 375).
- **Peso**: HTML/CSS minúsculos, zero JS, zero terceiros. É uma vantagem de marca ("sem rastreio") que dá para mostrar.
- **Copy**: honesta e direta. O bloco "Seus dados são seus" é o ponto mais forte da página.
- **Capturas reais** do app (em vez de mockup inventado) e dados de exemplo plausíveis.
- **/planos** é transparente (tabela comparativa, "Nada é apagado").

### 1.2 Problemas reais

**Hierarquia e hero**
- O H1 ("Compre melhor. Escaneie a nota, a Despensa guarda os preços.") ocupa 4 linhas em 3,4 rem e 700. Duas ideias com o mesmo peso, sem ponto de entrada. A primeira frase é o gancho e perde para a segunda.
- Hero de desktop: a coluna do texto tem 5 blocos pequenos empilhados (H1, subtítulo, botões, nota, link, linha de UFs) e a coluna da imagem tem um só celular de 280 px, no canto. Sobra área morta ao redor dele. O produto, que é o argumento, é o elemento menor da tela.
- **Celular (375x812)**: o primeiro celular do app só aparece a partir de y = 702. Na primeira dobra o visitante vê só texto e dois botões cinza. Hero inteiro = 1305 px, mais que uma tela e meia.
- O hero usa `escuro.png` nos dois temas: no tema claro é um celular escuro sobre areia, e as demais telas (todas claras) não conversam com ele.

**Botões das lojas**
- Os dois botões "Em breve" têm `opacity: .78`, fundo `--text` e cursor `default`: parecem desabilitados e ocupam o lugar do CTA principal. Não há nenhuma ação possível na página hoje.
- "Em breve" aparece **8 vezes** (selo de cada loja no hero e no CTA final, nota do hero, nota do CTA, título do plano completo, FAQ do Android, e na /planos). Redundante e vira ruído.

**Ritmo vertical e espaçamento**
- Todas as seções usam o mesmo `padding: 64px 0` e o mesmo título centralizado; as faixas alternam `--bg` e `--surface` quase sem diferença (contraste entre os dois, ~1,1:1). A página não tem pontos de respiro nem de ênfase: tudo tem o mesmo volume.
- **"Recursos" tem 3946 px no desktop e 6264 px no celular: 55% da página.** São 5 blocos idênticos (celular de 280 px + h3 + 3 ou 4 marcadores), alternando esquerda e direita. No celular, cada um custa ~1200 px (o celular sozinho tem 608 px de altura).
- Página total: **7014 px no desktop, 11 423 px no celular** (~14 telas de 812 px).

**Repetição de conteúdo** (mesma informação dita várias vezes)
- Lista da casa: passo 1, feature 1, "E mais" (3x). Leitura da nota: passo 2, feature 2, hero (3x). Preços: passo 3, feature 3 (2x). Convite por lista: passo 4, feature 5 (2x).
- CPF nunca guardado: marcador da feature 2, card de privacidade, FAQ (3x). "Sem anúncios": "E mais", privacidade (e /planos). Offline: privacidade e "E mais". SP e RJ: hero, marcador da feature 2, FAQ (3x). Apagar a conta: privacidade e "E mais".
- "Como funciona" (4 cards) e "O que a Despensa faz" repetem a mesma narrativa em seguida, e o visitante lê duas vezes o que o hero já disse.

**Tipografia**
- Pilha de sistema é a escolha certa, mas o uso é tímido: só pesos 400/700; `letter-spacing: -0.01em` em títulos de 54 px é pouco (fica frouxo); `line-height: 1.15` nos títulos grandes é alto; h3 de 1,5 rem não se distingue do corpo de 17 px.
- Títulos de seção centralizados com corpo alinhado à esquerda dentro dos cards: dois eixos de leitura.
- Sem "eyebrow" (rótulo curto acima do título), sem número tabular no gráfico/comparativo, sem escala definida (tamanhos soltos: 1.2, 1.4, 1.5, 1.6, 2.2 rem).

**Cartões e formas**
- Cinco estilos de cartão diferentes (passos: 20 px sem borda; privacidade: `--bg` sobre `--primary-soft`; "E mais": 14 px; plano: 20 px com borda 2 px; FAQ: 14 px). Raios misturados: 10, 12, 14, 20, 26, 34, 40, 999. Sensação de montagem, não de sistema.
- Sombras: uma só (`0 18px 40px`), genérica; nenhuma elevação para cartões.
- Nenhum elemento ilustrativo da marca (o pote e a nota do ícone) além do logo de 26 px no cabeçalho.

**Uso das capturas**
- Todas na mesma largura (280 px), moldura de 2 px com raio 34: parece um print recortado, não um aparelho. Ficam pequenas no desktop (280 de 1080 px).
- **No tema escuro, as 5 telas claras viram caixas brilhantes (#f3f1ec) sobre `#191712`**: é o ponto mais agressivo visualmente da página escura. Só existe uma captura escura (`escuro.png`).
- `ler-nota.png` mostra a tela "Digitar chave de acesso": 70% vazia, botão desabilitado, é a pior captura para vender a função-estrela. Existe uma captura muito melhor sem uso: `compra-detalhe.png` (a nota já lida, com mercado, total e itens).
- Todas as capturas têm no rodapé o vidro do app ("Escanear nota" + barra de abas) cortando conteúdo (`casa.png`, `compra-detalhe.png`, `lista.png`), e `precos.png` tem fantasma de conteúdo no topo. Em recortes isso some; usadas inteiras, parecem falhas.
- Todas as `alt` descrevem bem a tela. Mantê-las.

**FAQ**
- Duas colunas de `<details>` com `align-items: start`: alturas diferentes geram degraus irregulares. Fundo `--bg` sobre faixa `--surface` (sem separação perceptível). Corpo de 15 px. Marcador padrão do navegador, sem affordance de abrir/fechar. 4 das 6 respostas repetem o que já está na página (CPF, custo, quem vê, UF).

**Cabeçalho**
- Não é fixo. **Abaixo de 640 px os 4 links somem e fica só o logo**: no celular não há como ir para Planos nem Perguntas sem rolar 11 000 px. Não há CTA no cabeçalho.
- Âncoras `#recursos` etc. não têm `scroll-margin`, então quando o cabeçalho virar fixo, vai cobrir o título.

**Outros**
- `link` (`--primary`) sobre `--primary-soft` mede **4,32:1** (reprova AA em texto pequeno). Hoje não há link dentro de `.privacy`, mas qualquer link futuro ali reprova.
- `.store.soon` usa `opacity` para parecer inativo: o contraste final depende do que está atrás e não é garantido. Trocar por tokens explícitos.
- `og.png` ainda diz "A lista da casa que aprende os preços sozinha", diferente do título atual. Regerar com `npm run og` e a frase nova.
- A afirmação "Hoje: São Paulo e Rio de Janeiro" aparece em 3 lugares. Os commits recentes do app falam em leitores de 15 UFs "fora do registro". **Pergunta para o pm** (seção 5): a frase está atual? Se mudar, vira um lugar só.

---

## 2. Direção visual proposta

Nome da ideia: **"nota fiscal na cozinha"**. Papel quente, verde-pote, cantos generosos, tipografia grande e justa. Sem gradiente chamativo, sem vidro pesado, sem ilustração genérica. A graça vem de (1) celulares reais bem emoldurados e em cena, (2) escala tipográfica corajosa, (3) pouco ruído, (4) a borda serrilhada da nota usada **uma vez** e com intenção.

### 2.1 Tipografia

- **Só fontes do sistema, zero arquivo**: `font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;`. No iPhone (público principal) renderiza SF, igual ao app. Não adicionar fonte local: ganho pequeno, custo de peso e de bagunça entre plataformas. Se o Bruno quiser fonte própria depois, decisão à parte.
- Pesos: 400 corpo, 600 rótulos e botões, **800 só em H1/H2**. (SF e Segoe/Roboto têm 800; fallback vira 700, aceitável.)
- Escala fluida (base 17 px):

| Papel | Tamanho | Peso | Altura de linha | Espaçamento |
|---|---|---|---|---|
| Display (H1 hero) | `clamp(2.5rem, 1.5rem + 4.4vw, 4.5rem)` | 800 | 1.03 | -0.035em |
| H2 | `clamp(1.85rem, 1.3rem + 2.3vw, 3rem)` | 800 | 1.08 | -0.025em |
| H3 | 1.25rem | 650 (cai para 600) | 1.25 | -0.01em |
| Lead (subtítulo) | `clamp(1.15rem, 1rem + .7vw, 1.4rem)` | 400 | 1.45 | 0 |
| Corpo | 1.0625rem | 400 | 1.55 | 0 |
| Eyebrow | .8125rem, caixa alta | 700 | 1.2 | +0.08em |
| Pequeno | .9rem | 400 | 1.45 | 0 |

- `text-wrap: balance` em H1, H2, H3 e lead; `text-wrap: pretty` em parágrafos.
- Números de preço sempre com `font-variant-numeric: tabular-nums`.
- Alinhamento: **títulos de seção à esquerda**, no mesmo eixo do corpo (exceto hero final e planos, centralizados). Elimina os dois eixos de leitura.

### 2.2 Grade, espaçamento, raios, sombras

- Container: `--wrap: min(1120px, 100% - 2*var(--gutter))`; gutter 16 px (< 600), 24 px (≥ 600), 32 px (≥ 1200). Grade de 12 colunas só em desktop (hero 7/5, bento 12).
- Escala de espaço (4 px): 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. Seções: `padding-block: clamp(56px, 8vw, 104px)`. Hero: `clamp(40px, 6vw, 88px)` em cima, `clamp(48px, 7vw, 96px)` embaixo.
- **Raios (só estes)**: 10 (chips pequenos, ícone), 14 (botões, inputs), 20 (cartões), 28 (cartões grandes e faixas), 999 (pílulas), moldura de celular 46 externo / 36 interno.
- **Sombras (derivadas do `--shadow`, nenhum preto/branco novo)**: `--shadow-1: 0 1px 2px var(--shadow-soft)`; `--shadow-2: 0 14px 30px -14px var(--shadow)`; `--shadow-phone: 0 40px 60px -28px var(--shadow), 0 14px 26px -14px var(--shadow)`.
- Borda de cartão sempre `1px solid var(--divider)`. Cartões em `--card` (um passo acima de `--bg`), não mais `--surface` chapado.

### 2.3 Cor

- Verde só para **ação e destaque**: botão primário, frase de destaque do H1, números dos passos, ícones, ✓, links. Areia para superfícies. Nada de segundo matiz.
- **Faixa "ink"** (uma só, para a seção de destaque da nota): claro = fundo `#22302b` (o `--text`) com texto `#efeadf`; escuro = fundo `#2b3a31` (o `--primary-soft`) com o mesmo texto. Dá o único momento de contraste forte da página.
- Mais um tom de areia só decorativo (`--sand-deep`) para formas de fundo, nunca para texto.

### 2.4 Fundo do hero

Três camadas, tudo CSS/SVG inline, zero imagem:
1. Fundo `--bg`.
2. `radial-gradient(60% 55% at 72% 38%, var(--hero-glow), transparent 70%)`: um brilho verde suave atrás dos celulares (claro: verde 16%; escuro: verde 14%).
3. **Marca d'água do glifo** (o pote/nota do logo, `src/assets/glyph.svg`), 560 px, `--primary-soft`, opacidade .55, `aria-hidden`, posicionado atrás do celular central e cortado pela borda direita. Reforça a marca sem competir.

### 2.5 Molduras dos celulares

Componente `Phone`:
- Moldura = `padding: 9px; background: var(--frame); border-radius: 46px; box-shadow: var(--shadow-phone), inset 0 0 0 1px var(--frame-edge)`; a imagem dentro com `border-radius: 37px`, `display: block`, `aspect-ratio: 600/1304`. `--frame` claro `#2a2f2c`, escuro `#0e0d0a` (grafite, sem preto puro).
- Sem notch desenhado (a captura já traz hora e status).
- Recorte opcional (`.phone--crop`): `aspect-ratio: 600/820`, `object-fit: cover; object-position: top`, para **cortar o vidro do rodapé** (barra de abas e botão "Escanear nota") que atrapalha nas capturas. O rodapé da moldura fica reto (celular "saindo" do cartão por baixo, estilo Apple).
- `width`/`height` intrínsecos mantidos para evitar salto de layout. `loading="lazy"` e `decoding="async"` em tudo, exceto a imagem central do hero (`fetchpriority="high"`).

### 2.6 Cartões e microinterações

- **Cartão base** (`.card`): `--card`, borda de 1 px, raio 20, padding 24 (20 no celular). Um só estilo para passos, privacidade, planos, "E mais" e FAQ.
- **Ícones**: manter os traços atuais (24 px, 2 px) dentro de quadrado de 44 px, raio 12, `--primary-soft` com ícone `--primary-strong`.
- Hover (só ponteiro fino): cartões sobem 2 px e a sombra passa de `--shadow-1` para `--shadow-2` (180 ms). Botões: fundo `--primary-strong` no hover, `scale(.98)` no `:active`.
- Entrada do hero: cada celular faz `translateY(18px) + opacity 0 -> 1` em 600 ms, defasado 80 ms (centro, esquerda, direita). Âncora de rolagem: `scroll-behavior: smooth` já existe.
- Revelação ao rolar, **progressiva e sem JS**: `@supports (animation-timeline: view())` aplica `fade+translateY(12px)` nos cartões e títulos. Fora do suporte, tudo aparece normal.
- **Tudo isso dentro de `@media (prefers-reduced-motion: no-preference)`**; com `reduce`, nenhum movimento (já existe o freio global; manter e testar).
- FAQ: chevron que gira 180° (150 ms); `<details name="faq">` torna o grupo exclusivo (só uma aberta) sem JS.

### 2.7 Destaque, ilustração e prova social honesta

- **Seção de destaque** (faixa ink): "Leia a nota e pronto" com `compra-detalhe.png` (a nota lida) ao lado de `precos.png`. É a função-estrela: ganha o único fundo escuro/colorido da página, tela grande (320 px) e frase de apoio.
- **Ilustração**: o glifo como marca d'água no hero e como selo no CTA final; opcional **borda serrilhada de nota** (zigue-zague de 10 px, CSS `mask` ou `conic-gradient`) **só na base da faixa ink**. Uma vez só, para ser memorável e não vira tema.
- **Prova social honesta (nada inventado)**: a página ainda não tem usuários públicos, avaliações nem números. Em vez disso, uma **faixa de promessas verificáveis** logo após o hero: "Sem anúncios", "Sem rastreio: este site também não usa cookies nem scripts de terceiros", "Nunca guardamos o CPF", "Funciona sem internet". Cada uma é checável (o próprio site é a prova). Depois do lançamento nas lojas, reservar espaço para a nota da App Store e depoimentos **reais**, com permissão por escrito; até lá, nada de "milhares de famílias", estrelas ou citações.
- Rótulo discreto "Dados de exemplo" sob as capturas (os nomes e valores das telas são fictícios).

---

## 3. Estrutura da página, em ordem

Meta de altura: **desktop ≤ 5200 px (hoje 7014); celular ≤ 8500 px (hoje 11 423)**.

### Cabeçalho (fixo)
- Logo + "Despensa" | links **Como funciona, Recursos, Planos, Perguntas** | botão `sm` "Em breve nas lojas" (pílula, não clicável, `--primary-soft`). Fixo (`position: sticky; top: 0`), fundo `--bg` a 88% com `backdrop-filter: blur(14px) saturate(1.2)` (se não houver suporte, `--bg` sólido), borda inferior só após rolar (`border-bottom: 1px solid var(--divider)` sempre; sutil).
- **Celular (< 640 px)**: logo + 2 links ("Planos", "Perguntas") em texto, alvo de 44 px. Os dois cabem em 375 px (logo ~130 px + links ~170 px). "Como funciona" e "Recursos" ficam só no corpo da página.
- `scroll-padding-top: 72px` no `html` para as âncoras.

### 1. Hero (3 opções; recomendada: A)

Texto comum às três (mantém o atual):
- Eyebrow: *(sem eyebrow no hero; o H1 é o gancho)*
- H1: **"Compre melhor."** em `--primary`, seguido de "Escaneie a nota, a Despensa guarda os preços." em `--text`. Mesmo H1, só dois `<span>`.
- Lead: "Lista de compras da casa que lê a nota fiscal."
- Ações: botão primário **"Quero ser avisado"** (ver decisão 5.2) e, ao lado, os dois selos das lojas **menores** (altura 44 px), cada um com o "Em breve" dentro do selo. **Sai** a nota "Em breve nas lojas. Estamos terminando os últimos detalhes.", o link "Conhecer o app" e a linha solta das UFs (vão para a faixa de promessas e o FAQ).
- Se o Bruno não aprovar o "Quero ser avisado": os dois selos "Em breve" ficam como única ação, mas **em estilo de selo (borda 1 px, fundo `--card`), não de botão desabilitado**, e a nota vira só uma linha de 1 frase.

**Opção A, recomendada: "Trio de celulares"**
```
 desktop (>=900)                                    celular (<600)
+--------------------------------------------+    +------------------+
| Despensa   Como... Recursos Planos Pergunt.|    | Despensa  Planos |
|                                            |    |                  |
| Compre melhor.            .--.  .---. .--. |    | Compre melhor.   |
| Escaneie a nota,         |nota| |LISTA||pre||    | Escaneie a nota, |
| a Despensa guarda        |    | |     ||ços||    | a Despensa ...   |
| os preços.               '--'  |     |'--' |    | lead             |
| lead                           '-----'     |    | [Quero ser avis.]|
| [Quero ser avisado] [App][Play]            |    | [App][Play]      |
+--------------------------------------------+    |  .--. .----. .--.|
                                                  | |nota||LISTA||pre||
                                                  |  (recortado)     |
```
- Três telas sobrepostas contam a história inteira (nota → lista → preços) numa imagem: esquerda `compra-detalhe.png` (nota lida), centro `lista.png` (claro) / `escuro.png` (escuro), direita `precos.png`.
- Centro: 280 px de largura (desktop), z-index 3. Laterais: 232 px, rotação ±5°, deslocadas 150 px, z-index 1 e 2, `translateY(28px)`, escurecidas só por sombra. Lado a lado ocupa ~620 px, cabe em 5/12 colunas.
- Celular: a composição vira recorte (`.phone--crop`, ~ 340 px de altura visível) com os laterais cortados pela borda da tela (`overflow: clip` no hero). **O topo dos celulares aparece na primeira dobra** (começa por volta de y = 540 em 375x812). Sem scroll horizontal.
- Prós: mostra o produto grande e a narrativa certa; nenhum código novo além de CSS. Contras: depende de capturas escuras para o tema escuro (ver 4.6).

**Opção B: "Um celular + cartões flutuantes"**
- Um celular grande (320 px) com 2 cartões HTML flutuando nas bordas, com dados que já estão na captura: "Mais barato: Empório da Esquina, R$ 21,91" e "12 produtos lidos da nota".
- Prós: dá para destacar dois "momentos mágicos" com texto legível; leve. Contras: parece UI falsa (cartões não são o app), duplicação de dados de exemplo, mais manutenção, e no celular os cartões sobrepõem o aparelho.

**Opção C: "Palco centralizado"**
- H1 centralizado, CTA e, abaixo, a mesma trinca de celulares em linha, cortada por baixo, estilo Apple.
- Prós: simétrica, forte no celular. Contras: no desktop os celulares ficam abaixo da dobra (a altura do texto consome ~420 px de ~700), e o H1 centralizado em 4,5 rem fica longo.

**Recomendação: A.** É a que melhor equilibra impacto, honestidade (telas reais) e custo, e resolve de uma vez o problema "produto pequeno e abaixo da dobra".

### 2. Faixa de promessas (nova, substitui repetições)
- Linha de 4 itens com ícone de 24 px e rótulo curto: **Sem anúncios** · **Sem rastreio** (subtexto: "nem neste site") · **Nunca guardamos o CPF** · **Funciona sem internet**.
- Desktop: 4 colunas, sem cartões, separadas por `--divider`. Celular: grade 2x2.
- Fundo `--bg`, `padding-block: 24px`, borda superior e inferior de 1 px.
- Responde a "por que confiar" logo no início. O detalhe longo continua na seção de privacidade.

### 3. Como funciona (3 passos, antes eram 4)
- Eyebrow "COMO FUNCIONA"; H2: "Do mercado para a lista, em três passos." *(texto novo, curto; se preferir, manter "Como funciona")*.
- Passos (textos atuais, encurtados no limite do possível): **1. A lista da casa**, **2. Leia a nota fiscal**, **3. Veja os preços**. "Compartilhe uma lista" **sai** daqui: já tem seu bloco em Recursos.
- Desktop: 3 cartões com número grande (`--primary`, 2.25 rem, 800) e linha pontilhada ligando os números. Celular: lista vertical com o número à esquerda e linha vertical de 2 px (`--divider`) ligando.
- Alvo: ≤ 520 px no celular (hoje 1188).

### 4. Destaque: "Leia a nota e pronto" (faixa ink)
- Eyebrow "O CORAÇÃO DO APP"; H2: **"Leia a nota e pronto."** Texto: "Aponte a câmera para o QR da nota fiscal (NFC-e), ou cole o link ou a chave. A Despensa busca os itens e os preços na Fazenda do estado."
- Três marcadores (em vez de quatro): "Mercado, itens, valores e forma de pagamento, sem digitar nada." / "Você confere antes de salvar." / "O CPF que aparece na nota é descartado, nunca guardado."
- Visual: `compra-detalhe.png` (320 px, recorte) e `precos.png` (270 px, recorte, atrás e deslocada), sobre a faixa ink. Borda serrilhada na base da faixa (opcional, ver 2.7).
- A frase "Hoje: SP e RJ" **sai daqui** e fica **só** no FAQ ("Quais notas o app lê?") e em uma linha pequena sob o botão do hero.
- Celular: texto primeiro, celulares recortados abaixo (altura 380 px).

### 5. Recursos (grade bento, antes eram 5 blocos de 780 px)
H2: "O que a Despensa faz por você" (eyebrow "RECURSOS"). Quatro cartões:
1. **Uma lista só para a casa toda** (largo): texto atual + 3 marcadores (sai "Cor e fundo..." para "E mais"). Visual: `lista.png` recortado.
2. **Preços que contam uma história**: texto atual + 2 marcadores. Visual: recorte do gráfico de `precos.png` (se o destaque já o usa, usar aqui só texto e ícone).
3. **Suas compras, num só lugar**: texto atual + 2 marcadores. Visual: `compras.png` recortado.
4. **Convide só para uma lista**: texto atual + 3 marcadores. Visual: `casa.png` recortado.

- Desktop: grade 12 colunas, linha 1 = 7/5, linha 2 = 5/7 (assimetria suave); cada cartão tem o recorte do celular saindo pela base. Celular: cartões empilhados, recorte de 300 px de altura. Alvo: ≤ 3000 px no celular no total da seção (hoje 6264) e ≤ 1500 px no desktop (hoje 3946).
- **E mais** (dentro da seção): em vez de 7 mini-cartões, uma linha de **chips** (pílulas, `--card`): "Tema claro e escuro", "Texto grande e VoiceOver", "Sincroniza entre aparelhos", "Deslize para agir", "Mercados organizados", "Exportar em CSV, de graça", "Cor e fundo da lista". Saem os que repetem a faixa de promessas e a privacidade ("Funciona sem internet", "Sem anúncios", "Apague tudo quando quiser").

### 6. Privacidade ("Seus dados são seus.")
- Fundo `--primary-soft`. Desktop: 1 cartão grande à esquerda (**"Nunca guardamos o CPF."** com texto completo e ícone grande) e 3 menores à direita ("Funciona sem internet", "Sem anúncios e sem venda de dados", "Você manda"). Celular: 4 cartões empilhados, o do CPF primeiro e maior.
- Os links, se houver, usam `--primary-strong` (contraste 6,1:1 neste fundo), nunca `--primary`.
- Linha final: "Veja a [Política de Privacidade](/privacidade)."

### 7. Planos ("Comece de graça")
- Dois cartões lado a lado: **Grátis** e **Completo** (este com selo "Em breve" e borda de 2 px `--primary`). Mesmo texto atual; adicionar "R$ 0" grande no grátis e "a partir de R$ 7,49 por mês" no completo (já existem em /planos). Um botão-texto "Ver planos e preços" abaixo.
- Celular: empilhados, Grátis primeiro.

### 8. Perguntas
- **Uma coluna**, 720 px, centralizada no desktop; H2 à esquerda. Cartões `--card` de 20 px de raio, `summary` com chevron. Mantêm-se as 6 perguntas atuais (Android, quais notas, conta, custo, quem vê a lista, CPF), em coluna única e com corpo de 1 rem. "CPF" e "quem vê a lista" ficam porque são os medos reais. A repetição cai porque o resto da página perde os marcadores duplicados.
- Primeira pergunta aberta por padrão (`open`) no desktop; todas fechadas no celular (evita altura inicial).

### 9. CTA final
- Faixa `--card` com glifo grande ao fundo (marca d'água, 320 px). H2 centralizado: "Leve a Despensa para o mercado." Botão "Quero ser avisado" + selos "Em breve". **Uma** linha de apoio, sem repetir "Em breve" (já está no selo).

### 10. Rodapé
- Desktop: 3 colunas ("Despensa" + frase; "Produto": Como funciona, Recursos, Planos, Perguntas; "Legal": Termos, Privacidade, Fale com a gente). Celular: 1 coluna. Mantém o "© 2026 Despensa. Feito em São Paulo."

**/planos, /privacidade, /termos**: herdam cabeçalho fixo, tokens, `.card`, tipografia e rodapé. Em /planos, usar `.card` para os 3 cartões de preço e a tabela, e a faixa de promessas como "Nossas promessas" (já existe em /planos). Sem redesenho extra além do herdado.

---

## 4. Especificação para o frontend

### 4.1 Tokens novos (em `:root`, derivados da paleta; nenhum branco)

Claro:
```css
--card: #efece6;            /* um passo acima de --bg */
--primary-strong: #365b48;  /* hover/pressed, links em fundo --primary-soft; 6,8:1 sobre --bg */
--hero-glow: rgba(67,112,89,.16);
--sand-deep: #cfc8b8;       /* só decoração */
--ink-bg: #22302b;
--ink-text: #efeadf;
--ink-muted: #b3ac9b;       /* 6,1:1 sobre --ink-bg */
--frame: #2a2f2c;
--frame-edge: rgba(239,234,223,.18);
--shadow-soft: rgba(34,48,43,.10);
--shadow-1: 0 1px 2px var(--shadow-soft);
--shadow-2: 0 14px 30px -14px var(--shadow);
--shadow-phone: 0 40px 60px -28px var(--shadow), 0 14px 26px -14px var(--shadow);
```
Escuro:
```css
--card: #1f1c17;            /* 7,5:1 com --text-2 */
--primary-strong: #a9d3b9;  /* 10,8:1 sobre --bg */
--hero-glow: rgba(146,195,165,.14);
--sand-deep: #3d382d;
--ink-bg: #2b3a31;
--ink-text: #efeadf;
--ink-muted: #b3ac9b;       /* 5,3:1 sobre --ink-bg */
--frame: #0e0d0a;
--frame-edge: rgba(239,234,223,.12);
--shadow-soft: rgba(0,0,0,.30);
```
Usar `--on-primary` sobre `--primary` e sobre `--primary-strong` (6,8:1 no claro).
Raios como variáveis: `--r-sm:10px; --r-md:14px; --r-lg:20px; --r-xl:28px; --r-phone:46px`. Espaço: `--s-1:4px … --s-10:128px`.
Rodar `npm run build` (inclui `lint:colors`) a cada etapa: o lint também lê os PNG, então capturas novas **não podem** ter branco puro (`#fff`) nem pixels brancos de teclado; conferir ao gerar.

### 4.2 Componentes

| Componente | Descrição | Observações |
|---|---|---|
| `Header.astro` | fixo, logo, links, pílula "Em breve" | celular: 2 links; `aria-label="Principal"`; `scroll-padding-top` |
| `Phone.astro` | props: `src`, `srcDark?`, `alt`, `size` (`sm/md/lg`), `crop?`, `tilt?` | moldura 2.5; `<picture>` com `source media="(prefers-color-scheme: dark)"`; `width/height` sempre |
| `PhoneTrio.astro` | hero: 3 `Phone` sobrepostos | `overflow: clip` no pai; ordem de leitura: centro primeiro no DOM, `aria-hidden` nas laterais **não**: cada uma tem `alt` próprio |
| `TrustStrip.astro` | faixa de 4 promessas | `<ul>`, ícone `aria-hidden` |
| `Steps.astro` | 3 passos com número e linha | `<ol>`; número visível, texto lido na ordem |
| `Spotlight.astro` | faixa ink com texto e 2 telas | borda serrilhada opcional por classe |
| `Bento.astro` / `BentoCard` | grade de recursos | `h3` em cada cartão; recorte do celular `aria-hidden` se a `alt` repetir o texto: **não repetir**, usar `alt` descritivo |
| `Chips.astro` | linha de pílulas "E mais" | `<ul>` com `role` nativo |
| `PrivacyGrid.astro` | cartão do CPF + 3 | |
| `Faq.astro` | `<details name="faq">` + chevron | `summary` 44 px mínimo, foco visível |
| `Cta.astro` | CTA final | |
| `StoreButtons.astro` | já existe; passar a selo 44 px, estado "em breve" por tokens (sem `opacity`) | com `url` vira `<a>`, sem "Em breve"; manter a lógica atual |
| `Footer.astro` | 3 colunas | |

### 4.3 Breakpoints

`--bp-sm: 600px` (gutter 24, cartões em 2 colunas), `--bp-md: 900px` (hero em 2 colunas, bento 12 col), `--bp-lg: 1200px` (gutter 32, hero maior). Mobile-first (`min-width`). O limite atual de 640/800/960 sai.

### 4.4 Estados

- Botão: padrão, `:hover` (`--primary-strong`), `:active` (`scale(.98)`), `:focus-visible` (3 px `--primary`, offset 3), "Em breve" (sem ação, `aria-disabled="true"`, texto "Em breve" visível).
- Cartão: padrão, `:hover` (ponteiro fino), foco (se for link).
- FAQ: fechado, aberto, foco; chevron gira.
- Imagem: carregando (`aspect-ratio` reservado, `background: var(--surface)` por trás), falha (`alt` visível, sem borda quebrada).
- Cabeçalho: topo da página e rolado (apenas a borda aparece).

### 4.5 Acessibilidade, desempenho e privacidade

- Todos os pares de cor ≥ 4,5:1 (texto) e ≥ 3:1 (borda de componente). Medir os novos antes de fechar.
- Ordem do DOM = ordem visual. H1 único; H2 por seção; H3 por cartão.
- `prefers-reduced-motion`: sem entrada, sem hover animado, sem scroll suave.
- Texto em 200% e "texto maior" do navegador sem perda: nenhuma altura fixa em contêineres de texto; `min-height` em vez de `height`.
- Zero JS próprio, zero cookie, zero terceiro; sem imagem remota. Opcional: gerar WebP das capturas no build (`sharp`, já instalado) com PNG como fallback, **sem** alterar o PNG-fonte (o lint lê o PNG).
- Orçamento: HTML+CSS da home ≤ 30 KB comprimidos; imagens acima da dobra (trio do hero) ≤ 300 KB; demais `loading="lazy"`.

### 4.6 Dependências de capturas (cartões à parte, não do frontend)

- **D1 (QA/devops, simulador)**: versões **escuras** de `lista`, `compra-detalhe`, `precos`, `compras`, `casa` (`xcrun simctl ui booted appearance dark`), mesmos dados de exemplo, 600x1304, salvas como `<nome>-escuro.png`. Verificar `lint:colors`.
- **D2**: refazer as capturas **sem o vidro do rodapé** onde der (ou aceitar o recorte `.phone--crop`).
- **Provisório** enquanto D1 não existe: no tema escuro mostrar só `escuro.png` central, sem laterais, com os demais recortes em tema claro (aceitável, mas não é o alvo). Não usar `filter` para escurecer capturas.
- Regerar `og.png` com `npm run og` usando "Compre melhor. Escaneie a nota, a Despensa guarda os preços." (hoje diz "A lista da casa que aprende os preços sozinha").

### 4.7 Critérios de aceite (verificáveis)

1. `npm run build` passa, incluindo `lint:colors` (inclui PNG novos).
2. Em 375x812, `document.documentElement.scrollWidth === 375` na home, /planos, /privacidade e /termos.
3. Em 375x812, ao carregar a home, o topo de pelo menos um celular do hero está visível sem rolar (`getBoundingClientRect().top < 760`).
4. Altura da home: ≤ 5200 px em 1280x800 e ≤ 8500 px em 375x812.
5. Hero em 375: H1 em no máximo 4 linhas; o botão primário está dentro da primeira dobra.
6. Cabeçalho fixo; em 375 mostra "Planos" e "Perguntas" e ambos funcionam; clicar em âncora não deixa o título escondido sob o cabeçalho.
7. Contraste: todos os pares de texto da página ≥ 4,5:1 nos dois temas (verificar com a tabela da seção 4.1 e com uma passada de ferramenta); nenhum `opacity` abaixo de 1 em texto.
8. Alvos interativos ≥ 44x44 px (cabeçalho, botões, selos, `summary`, links do rodapé).
9. Foco visível em todos os controles (tab por toda a página, nos dois temas).
10. Com `prefers-reduced-motion: reduce` (emulado), nenhum `animation`/`transition` ativo (`getAnimations().length === 0`).
11. Texto em 200% (zoom do navegador) sem cortes nem sobreposição, sem scroll horizontal.
12. "Em breve" aparece no máximo 3 vezes na home (selos do hero, selos do CTA, selo do plano completo); a frase "São Paulo e Rio de Janeiro" aparece no máximo 2 vezes.
13. Nenhuma requisição a outro domínio (aba Rede só com `despensa.brunocnog.com.br`); nenhum cookie.
14. Tema escuro: nenhuma captura clara sobre fundo escuro **depois de D1**; antes, o provisório da 4.6.
15. Lighthouse (celular): Acessibilidade 100, Boas práticas ≥ 95, Desempenho ≥ 95, SEO 100.
16. `og.png` regerada com a frase nova.

---

## 5. Decisões e perguntas abertas

1. **UFs atuais (pm)**: "São Paulo e Rio de Janeiro" ainda vale para o lançamento, ou os leitores de mais estados já entram? Se mudou, atualizar a frase única (hero e FAQ) e a descrição meta.
2. **CTA principal enquanto não há loja (Bruno / pm / segurança)**: proposta "Quero ser avisado" abrindo `mailto:despensa.lista@gmail.com` com assunto pré-preenchido. Zero rastreio, sem formulário, sem backend. Implica receber e-mails de pessoas: ver base legal e retenção (LGPD). Se não aprovado, usar a variante do hero só com selos "Em breve".
3. **Prova social (Bruno)**: há alguém para citar (testadores reais do TestFlight, com permissão por escrito)? Sem isso, fica só a faixa de promessas. Não inventar números nem depoimentos.
4. **Fonte própria (Bruno)**: a proposta usa só a fonte do sistema. Uma fonte local de marca (~40 KB) é possível depois, mas não é necessária.
5. **Borda serrilhada de nota**: manter como detalhe de marca ou cortar por simplicidade? A proposta a usa uma vez, opcional.

Ordem sugerida de entrega ao frontend: (1) tokens + `Phone` + hero trio + cabeçalho; (2) faixa de promessas + passos + destaque; (3) bento + chips + privacidade; (4) planos + FAQ + CTA + rodapé; (5) capturas escuras (D1) e `og.png`.
