const STORAGE_KEY = "rotaAcademica";

const questions = [
  {
    id: "subject",
    title: "Qual matéria costuma ser seu ponto forte?",
    help: "Pense na disciplina em que você se sente mais seguro ou interessado.",
    options: [
      ["Matemática e Física", { exatas: 3, engenharias: 3 }],
      ["Biologia e Química", { saude: 2, biologicas: 2 }],
      ["História, Geografia e Sociologia", { humanas: 3 }],
      ["Português, Literatura e Idiomas", { linguagens: 3, educacao: 1 }]
    ]
  },
  {
    id: "interest",
    title: "Qual assunto desperta mais sua curiosidade?",
    help: "Escolha o tema que você procuraria por vontade própria.",
    options: [
      ["Tecnologia, jogos, aplicativos ou robótica", { tecnologia: 3, exatas: 1 }],
      ["Corpo humano, saúde e bem-estar", { saude: 3, biologicas: 1 }],
      ["Sociedade, comportamento e direitos", { humanas: 2, gestao: 1 }],
      ["Arte, cultura, escrita e comunicação", { linguagens: 3 }],
      ["Empresas, dinheiro e novos negócios", { gestao: 3 }],
      ["Natureza, animais, alimentos ou sustentabilidade", { agrarias: 2, biologicas: 2 }]
    ]
  },
  {
    id: "workStyle",
    title: "Em um projeto, qual papel combina mais com você?",
    help: "Não escolha o que parece melhor, e sim o que você gosta de fazer.",
    options: [
      ["Resolver problemas com lógica e estratégia", { exatas: 2, tecnologia: 2, engenharias: 1 }],
      ["Cuidar, orientar e apoiar pessoas", { saude: 2, humanas: 2 }],
      ["Ensinar, explicar e acompanhar aprendizados", { educacao: 3, linguagens: 1 }],
      ["Criar, escrever e apresentar ideias", { linguagens: 2, artes: 2 }],
      ["Planejar, liderar e organizar tarefas", { gestao: 3, sociais: 1 }],
      ["Observar, pesquisar e experimentar", { biologicas: 2, exatas: 1, saude: 1 }]
    ]
  },
  {
    id: "impact",
    title: "Que impacto profissional você gostaria de causar?",
    help: "Pense em como seu trabalho poderia melhorar a vida das pessoas.",
    options: [
      ["Construir soluções e tecnologias úteis", { tecnologia: 2, engenharias: 2 }],
      ["Promover saúde e qualidade de vida", { saude: 3, biologicas: 1 }],
      ["Defender direitos e transformar comunidades", { juridicas: 2, sociais: 2 }],
      ["Ensinar e ampliar oportunidades", { educacao: 3, humanas: 1 }],
      ["Proteger o meio ambiente e produzir com responsabilidade", { agrarias: 2, biologicas: 1, engenharias: 1 }],
      ["Criar organizações e oportunidades", { gestao: 3 }]
    ]
  },
  {
    id: "routine",
    title: "Qual rotina de trabalho parece mais interessante?",
    help: "Sua preferência pode mudar, mas ajuda a apontar caminhos neste momento.",
    options: [
      ["Laboratórios, computadores ou ambientes técnicos", { tecnologia: 2, exatas: 2, biologicas: 1 }],
      ["Hospitais, clínicas ou atendimento direto", { saude: 3 }],
      ["Obras, cidades, máquinas ou projetos técnicos", { engenharias: 3, exatas: 1 }],
      ["Salas de aula, textos e acompanhamento de turmas", { educacao: 3, linguagens: 1 }],
      ["Reuniões, negociações e projetos de equipe", { gestao: 2, sociais: 1 }],
      ["Pesquisa de campo, fazendas ou contato com a natureza", { agrarias: 2, biologicas: 2 }]
    ]
  },
  {
    id: "challenge",
    title: "Qual desafio você gostaria de resolver?",
    help: "Escolha o tipo de problema que mais prende sua atenção.",
    options: [
      ["Entender dados, padrões e números", { exatas: 3, tecnologia: 1 }],
      ["Melhorar espaços, produtos ou experiências", { engenharias: 2, artes: 2 }],
      ["Ajudar pessoas a aprender e se desenvolver", { educacao: 3, humanas: 1 }],
      ["Mediar conflitos e garantir direitos", { juridicas: 3, humanas: 1 }],
      ["Cuidar de animais, plantas ou recursos naturais", { agrarias: 2, biologicas: 2 }],
      ["Comunicar ideias para públicos diferentes", { linguagens: 3, sociais: 1 }]
    ]
  },
  {
    id: "environment",
    title: "Em qual ambiente você se imagina trabalhando?",
    help: "Considere onde você teria mais energia para atuar no dia a dia.",
    options: [
      ["Empresa, escritório ou equipe de negócios", { gestao: 3, sociais: 1 }],
      ["Escola, universidade ou projeto educativo", { educacao: 3, humanas: 1 }],
      ["Hospital, clínica ou laboratório", { saude: 2, biologicas: 2 }],
      ["Estúdio, agência ou produção cultural", { artes: 2, linguagens: 2 }],
      ["Fórum, órgão público ou organização social", { juridicas: 2, sociais: 2 }],
      ["Campo, indústria ou canteiro de obras", { agrarias: 2, engenharias: 2 }]
    ]
  },
  {
    id: "strength",
    title: "Qual habilidade você mais quer usar na sua profissão?",
    help: "Pense em uma habilidade que gostaria de desenvolver ainda mais.",
    options: [
      ["Raciocínio analítico e precisão", { exatas: 2, tecnologia: 2 }],
      ["Escuta, empatia e cuidado", { saude: 2, humanas: 2 }],
      ["Didática e paciência para explicar", { educacao: 3, linguagens: 1 }],
      ["Criatividade visual e senso estético", { artes: 3, engenharias: 1 }],
      ["Argumentação e tomada de decisões", { juridicas: 2, gestao: 2 }],
      ["Observação da vida e do ambiente", { biologicas: 2, agrarias: 2 }]
    ]
  },
  {
    id: "future",
    title: "Qual tema você gostaria de aprofundar nos próximos anos?",
    help: "Não há compromisso: indique uma direção que lhe parece interessante agora.",
    options: [
      ["Inteligência artificial, programação e inovação", { tecnologia: 3, exatas: 1 }],
      ["Infraestrutura, energia e cidades", { engenharias: 3, exatas: 1 }],
      ["Saúde pública, corpo humano e prevenção", { saude: 3, biologicas: 1 }],
      ["Infância, aprendizagem e inclusão", { educacao: 3, humanas: 1 }],
      ["Justiça, políticas públicas e cidadania", { juridicas: 2, sociais: 2 }],
      ["Clima, alimentos e biodiversidade", { agrarias: 2, biologicas: 2 }]
    ]
  },
  {
    id: "expression",
    title: "Como você prefere transformar uma ideia em resultado?",
    help: "Escolha a forma de expressão que mais combina com você.",
    options: [
      ["Programando, calculando ou testando", { tecnologia: 2, exatas: 2 }],
      ["Projetando, desenhando ou construindo", { engenharias: 2, artes: 2 }],
      ["Escrevendo, falando ou criando conteúdo", { linguagens: 3, sociais: 1 }],
      ["Ensinando, facilitando ou orientando", { educacao: 3, humanas: 1 }],
      ["Pesquisando, cuidando ou intervindo", { saude: 2, biologicas: 2 }],
      ["Negociando, organizando ou empreendendo", { gestao: 3, juridicas: 1 }]
    ]
  },
  { id: "location", title: "Em que região você pretende estudar?", help: "Você poderá alterar estes filtros ao comparar as instituições.", type: "location" }
];

// Trilha militar: só aparece quando o perfil marca "Provas militares".
const militaryQuestions = [
  {
    id: "mil_force",
    title: "Qual carreira militar você prefere seguir?",
    help: "Pense na Força com que você mais se identifica.",
    options: [
      ["Marinha (navios, fuzileiros, submarinos)", { engenharias: 2, tecnologia: 1, gestao: 1 }],
      ["Exército (tropa, infantaria, cavalaria)", { engenharias: 1, gestao: 2, exatas: 1 }],
      ["Aeronáutica (aviões, controle, tecnologia)", { tecnologia: 2, exatas: 2, engenharias: 1 }]
    ]
  },
  {
    id: "mil_entry",
    title: "Como você quer ingressar?",
    help: "O nível define escolaridade exigida e tempo de formação.",
    options: [
      ["Praça: Marinheiro / Fuzileiro / Soldado (nível fundamental/médio)", { gestao: 1, exatas: 1 }],
      ["Sargento / Técnico: ESA, EEAR, EAM (nível médio + prova técnica)", { tecnologia: 2, engenharias: 1, exatas: 1 }],
      ["Oficial: EsPCEx/AMAN, AFA, Escola Naval (nível médio + prova densa)", { exatas: 2, engenharias: 2, linguagens: 1 }],
      ["Elite técnica: IME / ITA (engenharia militar, prova avançada)", { exatas: 3, tecnologia: 2 }]
    ]
  },
  {
    id: "mil_area",
    title: "Em qual área militar você se vê atuando?",
    help: "Isso direciona a carreira e o peso do plano de estudos.",
    options: [
      ["Combate / Operacional (tropa, embarque, campo)", { gestao: 2, exatas: 1 }],
      ["Aviação / Pilotagem e controle aéreo", { tecnologia: 2, exatas: 2 }],
      ["Saúde militar (enfermagem, medicina, odontologia)", { saude: 3, biologicas: 1 }],
      ["Engenharia / Tecnologia militar", { engenharias: 3, exatas: 1 }],
      ["Administração / Logística / Intendência", { gestao: 3, sociais: 1 }]
    ]
  },
  {
    id: "mil_study",
    title: "Qual matéria costuma ser seu ponto forte?",
    help: "Vamos montar seu plano priorizando as matérias com menor afinidade, para compensar suas dificuldades.",
    options: [
      ["Matemática e Física", { exatas: 3, engenharias: 2 }],
      ["Português, Redação e Inglês", { linguagens: 3, humanas: 1 }],
      ["História, Geografia e Atualidades", { humanas: 3, sociais: 1 }],
      ["Química e Biologia", { biologicas: 3, saude: 1 }]
    ]
  }
];

const militaryCareers = [
  { id: "EAM", name: "Aprendiz de Marinheiro (EAM)", force: "Marinha", levels: ["praca"], areas: ["combate", "admin"], description: "Curso de formação de praças da Marinha. Requer fundamental/médio.", board: "Banca Marinha (DEnsM) — estilo direto, objetiva.", style: "Português, Matemática, Ciências (Física/Química) e Inglês. Prova objetiva + TAF + inspeção de saúde.", subjects: [["Matemática", 4], ["Português", 4], ["Ciências", 3], ["Inglês", 2]], taf: "Corrida, natação, flexões e abdominais — treine 3x/semana.", links: [["Marinha — ingresso (DEnsM)", "https://www.marinha.mil.br/sspm/"]] },
  { id: "FN", name: "Fuzileiro Naval", force: "Marinha", levels: ["praca"], areas: ["combate"], description: "Tropa de combate da Marinha. Exige ótimo preparo físico.", board: "Banca Marinha — objetiva + TAF eliminatório pesado.", style: "Português e Matemática + exame físico rigoroso e inspeção de saúde.", subjects: [["Matemática", 3], ["Português", 3], ["Condicionamento físico", 5], ["Atualidades", 2]], taf: "Foco total: corrida 3km, natação 100m, barra e abdominal diários.", links: [["Corpo de Fuzileiros Navais", "https://www.marinha.mil.br/cgcfn/"]] },
  { id: "EN", name: "Escola Naval (Oficial da Marinha)", force: "Marinha", levels: ["oficial"], areas: ["combate", "engenharia", "admin"], description: "Forma oficiais da Marinha. Prova densa de exatas + inglês.", board: "Banca DEnsM — nível alto, discursivas em algumas fases.", style: "Matemática, Física, Português e Inglês em profundidade + TAF + saúde.", subjects: [["Matemática", 5], ["Física", 4], ["Português", 3], ["Inglês", 3]], taf: "Natação obrigatória + corrida e musculação 4x/semana.", links: [["Escola Naval", "https://www.marinha.mil.br/en/"]] },
  { id: "ESA", name: "Sargento do Exército (ESA)", force: "Exército", levels: ["sargento"], areas: ["combate", "admin", "saude"], description: "Principal porta de nível médio do Exército.", board: "Banca Exército/DECEx — objetiva tradicional.", style: "Matemática, Português, História, Geografia e Inglês + redação em alguns anos + TAF.", subjects: [["Matemática", 4], ["Português", 4], ["História", 3], ["Geografia", 3], ["Inglês", 2]], taf: "Corrida 3km, flexão, abdominal e barra — padrão ESA.", links: [["ESA — site oficial", "https://esa.eb.mil.br/"], ["Exército — ingresso", "https://www.eb.mil.br/web/ingresso"]] },
  { id: "ESPCEX", name: "Oficial do Exército (EsPCEx/AMAN)", force: "Exército", levels: ["oficial"], areas: ["combate", "engenharia"], description: "Caminho para oficialato: 1 ano de EsPCEx + AMAN.", board: "Banca DECEx — prova longa e conteudista.", style: "Matemática, Português, Física, Química, História, Geografia e Inglês + TAF.", subjects: [["Matemática", 5], ["Física", 4], ["Português", 3], ["Química", 3], ["História", 2]], taf: "TAF + exame médico completo; comece o físico 6 meses antes.", links: [["EsPCEx", "https://espcex.eb.mil.br/"]] },
  { id: "EEAR", name: "Sargento da Aeronáutica (EEAR)", force: "Aeronáutica", levels: ["sargento"], areas: ["tecnica", "admin", "aviacao"], description: "Forma sargentos técnicos da FAB (controle, mecânica, saúde e mais).", board: "Banca FAB/EEAR — objetiva de exatas e línguas.", style: "Português, Inglês, Matemática e Física + TAF + inspeção de saúde aeronáutica.", subjects: [["Matemática", 4], ["Física", 4], ["Português", 3], ["Inglês", 3]], taf: "Corrida, abdominal, flexão e barra — treino progressivo.", links: [["EEAR", "https://www2.fab.mil.br/eeaar/"]] },
  { id: "AFA", name: "Oficial Aviador (AFA)", force: "Aeronáutica", levels: ["oficial"], areas: ["aviacao", "engenharia"], description: "Academia da Força Aérea: pilotagem, intendência e infantaria aérea.", board: "Banca FAB — alto nível em exatas + inglês.", style: "Matemática, Física, Português e Inglês + TAF exigente + saúde aeronáutica.", subjects: [["Matemática", 5], ["Física", 5], ["Português", 3], ["Inglês", 3]], taf: "Físico de atleta + natação; avaliação médica rigorosa.", links: [["AFA", "https://www2.fab.mil.br/afa/"]] },
  { id: "IME", name: "Engenharia Militar (IME)", force: "Exército", levels: ["eng"], areas: ["engenharia"], description: "Elite da engenharia militar. Prova mais difícil do país em exatas.", board: "Banca IME — discursivas pesadas de exatas.", style: "Matemática, Física e Química avançadas + Português/Inglês + TAF básico.", subjects: [["Matemática", 6], ["Física", 6], ["Química", 4], ["Português", 2]], taf: "TAF leve, mas estude 4-6h/dia de exatas por 1-2 anos.", links: [["IME", "https://www.ime.eb.mil.br/"]] }
];

const MIL_FORCE_LABELS = ["Marinha", "Exército", "Aeronáutica"];
const MIL_ENTRY_LEVELS = [["praca"], ["sargento"], ["oficial"], ["eng"]];
const MIL_AREA_TAGS = [["combate", "admin"], ["aviacao", "tecnica"], ["saude"], ["engenharia", "tecnica"], ["admin"]];

// Soldos-base oficiais (Lei 15.167/2025, vigentes desde abr/2025; sem adicionais).
// Aprendiz R$ 1.207 · EsPCEx/EPCAR/CN R$ 1.294 (último ano 1.309) · Cadete R$ 1.457 (último ano 1.780) ·
// Aspirante/Guarda-Marinha R$ 7.988 · 3º Sgt R$ 3.997 · 2º Sgt R$ 4.985 · 1º Sgt R$ 5.730 ·
// Subtenente/Suboficial R$ 6.447 · 2º Ten R$ 7.827 · 1º Ten R$ 8.616 · Capitão R$ 9.546.
// TAF abaixo = referência das últimas edições; o índice oficial é sempre o do edital vigente.
const MIL_DETAILS = {
  EAM: { payAluno: "R$ 1.207", payFormado: "R$ 2.745", payTopo: "R$ 6.447", formacao: "Cerca de 1 ano de curso de formação (internato), com soldo de Aprendiz desde o início.", crescimento: "Marinheiro → Cabo (engajado, ~R$ 2,7 mil) → 3º Sargento por concurso interno → 2º/1º Sargento → Suboficial. Especializações (mergulho, eletrônica, saúde) aceleram a carreira.", tafDetail: "Corrida de 12 min, natação (eliminatória na Marinha!), barra fixa e abdominal. Referência: ~2.200m (M) / 1.800m (F) na corrida. Treine natação desde o 1º mês — é onde mais gente reprova.", corte: { nota: "56-68 pts (ampla, ref. 2025)", acertos: "28-34 de 50 questões", redacao: "Eliminatória — confira a nota mínima no edital" } },
  FN: { payAluno: "R$ 1.207", payFormado: "R$ 2.745", payTopo: "R$ 6.447", formacao: "Curso de Formação de Soldados Fuzileiros Navais de cerca de 6 a 8 meses, em regime militar intenso.", crescimento: "Soldado → Cabo → Sargento (concurso interno) → Suboficial. Cursos de comandos, operações anfíbias e missões de paz abrem vagas de destaque e gratificações.", tafDetail: "O TAF mais pesado das praças: corrida, natação 100m, barra, flexão e abdominal com índices altos. Comece a correr e nadar 4-5x/semana com 6 meses de antecedência.", corte: { nota: "50-60 pts (ref. edições recentes)", acertos: "~25-30 de 50 questões", redacao: "Eliminatória — confira a nota mínima no edital" } },
  EN: { payAluno: "R$ 1.574", payFormado: "R$ 7.988", payTopo: "R$ 9.546+", formacao: "5 anos na Escola Naval (4 de ciclo escolar + 1 pós-escolar), em internato no Rio de Janeiro, com remuneração desde o início.", crescimento: "Guarda-Marinha → 2º Tenente (~R$ 7,8 mil) → 1º Tenente (~R$ 8,6 mil) → Capitão-Tenente (~R$ 9,5 mil) e além, por tempo e mérito. Especializações em hidrografia, máquinas e aviação naval valorizam.", tafDetail: "Corrida, barra, abdominal, flexão e NATAÇÃO eliminatória. Exame médico rigoroso. Treine os 5 exercícios no formato exato do edital, com cronômetro.", corte: { nota: "50% mínimo por disciplina (eliminatório)", acertos: "Metade de cada matéria (20 Mat, 20 Ing, 18 Port, 22 Fis)", redacao: "Mínimo 50 de 100 — elimina abaixo disso" } },
  ESA: { payAluno: "R$ 1.150", payFormado: "R$ 3.997", payTopo: "R$ 7.827", formacao: "Cerca de 2 anos de formação (período básico + qualificação), saindo 3º Sargento.", crescimento: "3º Sgt (~R$ 4 mil) → 2º Sgt (~R$ 5 mil) → 1º Sgt (~R$ 5,7 mil) → Subtenente (~R$ 6,4 mil). Com o CHQAO dá para chegar a oficial (2º Ten ~R$ 7,8 mil). Saúde e Música têm quadros próprios.", tafDetail: "Área Geral: corrida 12min (2.450m M / 2.100m F), barra (3 M / 1 F), abdominal (30 M / 27 F) e flexão de solo (21 M / 12 F). Eliminatório por exercício — treine o ponto fraco 3x/semana.", corte: { nota: "5,0-8,0 (ampla; ref. 2024-25, varia por sexo/cota)", acertos: "~25-35 de 50 (ex.: 8 Port + 8 Mat + 3 H/G + 6 Ing)", redacao: "Eliminatória com nota mínima — confira o edital" } },
  ESPCEX: { payAluno: "R$ 1.294", payFormado: "R$ 7.988", payTopo: "R$ 9.546+", formacao: "1 ano de EsPCEx + 4 anos de AMAN = 5 anos até Aspirante a Oficial.", crescimento: "Aspirante (~R$ 8 mil) → 2º Tenente → 1º Tenente → Capitão (~R$ 9,5 mil) e generalato por mérito. Cursos ESAO e ECEME destravam comando e promoções altas.", tafDetail: "EAF em 2 dias: dia 1 corrida (2.450m M / 2.100m F) + barra (3 M / 1 F); dia 2 abdominal + flexão de solo. Prepare-se 6 meses antes conciliando com a prova escrita pesada.", corte: { nota: "7,0+ (alta concorrência; ref.)", acertos: "~70% das 100 questões", redacao: "Eliminatória — confira a nota mínima no edital" } },
  EEAR: { payAluno: "R$ 1.200*", payFormado: "R$ 3.997", payTopo: "R$ 6.447", formacao: "Cerca de 2 anos de curso técnico-militar (CFS), saindo 3º Sargento da FAB.", crescimento: "3º Sgt (~R$ 4 mil) → 2º/1º Sgt → Suboficial (~R$ 6,4 mil). Dá para virar oficial pelo EAOEAR. Especialidades (controle de tráfego, mecânica, enfermagem) definem a lotação.", tafDetail: "TACF com 2 tentativas por exercício (menos a corrida): flexão (26 M / 16 F), abdominal 1min (42 M / 34 F), salto horizontal (1,80m M / 1,40m F) e corrida 12min (2.250m M / 1.850m F). *Bolsa de aluno: confirme o valor no edital vigente.", corte: { nota: "8,3-9,0 por especialidade (ref.)", acertos: "~80-87 de 96 questões", redacao: "Confira se há redação no edital da sua edição" } },
  AFA: { payAluno: "R$ 1.176–1.842", payFormado: "R$ 10.443*", payTopo: "R$ 9.546+", formacao: "4 anos de Academia em Pirassununga (internato), nos quadros de Aviadores, Intendentes ou Infantaria.", crescimento: "Aspirante → 2º Tenente (~R$ 10,4 mil com adicionais) → 1º Tenente → Capitão e brigadeirato. Pilotos acumulam horas de voo e cursos operacionais que valorizam a carreira.", tafDetail: "Corrida, barra, abdominal, flexão e natação, com inspeção de saúde aeronáutica rigorosíssima (visão, coração, coluna). *Remuneração com adicionais; base de 2º Ten: R$ 7.827. Cuide da saúde desde já — ela elimina tanto quanto a prova.", corte: { nota: "Redação corrigida com ≥4,0 por disciplina", acertos: "Média alta (~70%+)", redacao: "Só corrige com ≥4,0 em cada matéria" } },
  IME: { payAluno: "R$ 1.457", payFormado: "R$ 8.616", payTopo: "R$ 9.546+", formacao: "5 anos de engenharia no IME (Rio de Janeiro), formando oficial engenheiro do Exército.", crescimento: "1º Tenente engenheiro (~R$ 8,6 mil) → Capitão → Major e além, com mestrado/doutorado pagos e projetos estratégicos (mísseis, cibernética, energia nuclear). Diploma também vale ouro na vida civil.", tafDetail: "TAF básico eliminatório (corrida, barra, abdominal) — o verdadeiro filtro é a prova discursiva de exatas. Estude 4-6h/dia de Matemática/Física/Química por 1-2 anos e mantenha o físico em dia com 3 treinos semanais.", corte: { nota: "7,0-8,0+ (ref.)", acertos: "Maioria das discursivas de exatas", redacao: "Peso alto na classificação — confira o edital" } }
};

// O que mais cai por matéria, por banca (baseado em editais e provas anteriores; confira o edital vigente).
const MIL_TOPICS = {
  ESA: {
    "Matemática": ["Funções (afim, quadrática, exponencial, logarítmica)", "Geometria plana e espacial", "Análise combinatória e probabilidade", "PA e PG", "Matrizes, sistemas e polinômios"],
    "Português": ["Interpretação de texto", "Sintaxe: período composto e concordância", "Morfologia: verbos e classes", "Ortografia, acentuação e crase", "Redação dissertativa (eliminatória!)"],
    "História": ["Revoltas coloniais e regenciais", "1º e 2º Reinado", "Era Vargas e Ditadura Militar", "Constituições brasileiras", "Brasil na 2ª Guerra"],
    "Geografia": ["Geografia física do Brasil (clima, relevo, hidrografia)", "População e urbanização", "Agropecuária e matriz energética", "Regionalização e Mercosul"],
    "Inglês": ["Interpretação de texto", "Tempos verbais", "Pronomes e artigos", "Preposições e conjunções"]
  },
  ESPCEX: {
    "Matemática": ["Funções (todas) e inequações", "Geometria plana, espacial e analítica", "Trigonometria", "Polinômios, complexos, matrizes e sistemas", "Combinatória e probabilidade"],
    "Física": ["Cinemática e dinâmica (Leis de Newton)", "Energia, trabalho e quantidade de movimento", "Hidrostática e termologia", "Óptica e ondulatória", "Eletrostática, eletrodinâmica e magnetismo"],
    "Português": ["Interpretação de texto", "Sintaxe e norma culta", "Morfologia e semântica", "Literatura brasileira", "Redação dissertativa"],
    "Química": ["Estequiometria e gases", "Soluções e equilíbrio químico", "Termoquímica e eletroquímica", "Funções inorgânicas e orgânica básica"],
    "História": ["Brasil Colônia ao Império", "República e Era Vargas", "História geral: guerras e revoluções"]
  },
  EEAR: {
    "Matemática": ["Funções (1º/2º grau, modular, exponencial, log)", "Trigonometria", "PA e PG", "Geometria plana e espacial", "Matrizes, sistemas, complexos e polinômios"],
    "Física": ["Cinemática (MU e MUV) e vetores", "Leis de Newton e energia", "Calorimetria e termologia", "Óptica e ondas", "Eletrostática, resistores e eletromagnetismo"],
    "Português": ["Interpretação de texto", "Sintaxe: concordância, regência e crase", "Morfologia: verbos e pronomes", "Pontuação e figuras de linguagem"],
    "Inglês": ["Interpretação de texto", "Tempos verbais", "Voz ativa/passiva e discurso", "Vocabulário técnico básico"]
  },
  AFA: {
    "Matemática": ["Funções e logaritmos", "Trigonometria", "Geometria analítica", "Polinômios e números complexos", "Combinatória e probabilidade"],
    "Física": ["Mecânica (cinemática, dinâmica, energia)", "Hidrostática e termodinâmica", "Ondulatória e óptica", "Eletrostática e eletrodinâmica", "Magnetismo"],
    "Português": ["Interpretação de texto", "Sintaxe do período composto", "Concordância e regência", "Semântica e coesão"],
    "Inglês": ["Interpretação de texto", "Tempos e modais verbais", "Conjunções e preposições"]
  },
  EAM: {
    "Matemática": ["Operações, frações e porcentagem", "Regra de três e razão/proporção", "Equações de 1º grau", "Geometria básica (áreas e volumes)"],
    "Português": ["Interpretação de texto", "Ortografia e acentuação", "Classes de palavras", "Sintaxe básica e concordância"],
    "Ciências": ["Corpo humano e saúde", "Ecologia e meio ambiente", "Noções de física (movimento, força)", "Noções de química (misturas, estados)"],
    "Inglês": ["Interpretação de texto", "Verbo to be e presente simples", "Pronomes e artigos", "Vocabulário cotidiano"]
  },
  FN: {
    "Matemática": ["Operações e porcentagem", "Razão, proporção e regra de três", "Equações de 1º e 2º grau", "Geometria básica"],
    "Português": ["Interpretação de texto", "Ortografia e pontuação", "Classes de palavras e verbos", "Concordância básica"],
    "Condicionamento físico": ["Corrida de 12 min", "Natação 100m", "Barra fixa e flexão", "Abdominal"],
    "Atualidades": ["Fatos do Brasil e do mundo", "Datas cívicas e símbolos nacionais", "Noções da Marinha do Brasil"]
  },
  EN: {
    "Matemática": ["Funções e trigonometria", "Geometria plana, espacial e analítica", "Matrizes, sistemas e complexos", "Polinômios e combinatória", "Lógica e conjuntos"],
    "Física": ["Cinemática vetorial e dinâmica", "Energia, hidrostática e gravitação", "Termodinâmica e gases", "Ondulatória e óptica", "Eletrostática, eletrodinâmica e magnetismo"],
    "Português": ["Interpretação de texto", "Orações subordinadas e pronomes", "Pontuação, reescrita e coesão", "Redação"],
    "Inglês": ["Interpretação de texto", "Verbos e tempos", "Pronomes, adjetivos e artigos", "Vocabulário"]
  },
  IME: {
    "Matemática": ["Funções, trigonometria e logaritmos", "Geometria analítica (plana e espacial)", "Polinômios, complexos e matrizes", "Combinatória, probabilidade e cálculo básico"],
    "Física": ["Mecânica completa (incl. rotações)", "Termodinâmica e gases", "Ondulatória e óptica avançada", "Eletromagnetismo completo"],
    "Química": ["Estequiometria e soluções", "Termoquímica e cinética", "Equilíbrio e eletroquímica", "Orgânica: funções e reações"],
    "Português": ["Interpretação de texto", "Gramática normativa completa", "Redação dissertativa"]
  }
};

// Redação por banca (confira sempre o edital da sua edição) + canais do YouTube por matéria.
// Os links levam à busca do YouTube para nunca quebrarem: inscreva-se e siga a playlist da sua prova.
const MIL_REDACAO = {
  EAM: "Dissertativa simples (~20 linhas). Treine estrutura básica: introdução, desenvolvimento e conclusão.",
  FN: "Geralmente dissertativa simples — confirme no edital da sua edição. Treine 1 por semana desde já.",
  EN: "Dissertativa-argumentativa com peso alto, ~20-30 linhas, além de interpretação exigente.",
  ESA: "Dissertativo-argumentativa ELIMINATÓRIA (nota mínima!) de 20-30 linhas. Zera se fugir ao tema ou à estrutura.",
  ESPCEX: "Dissertativo-argumentativa de alto nível, com grande peso na classificação final.",
  EEAR: "Dissertativa (cobrada em diversas edições — confirme no edital da sua). Treine o modelo argumentativo.",
  AFA: "Dissertativa-argumentativa + interpretação exigente de texto.",
  IME: "Dissertativa com cobrança apurada de norma culta; a prova escrita já filtra muito."
};

// Canais oficiais no YouTube, ordenados do maior para o menor (nº de inscritos).
// Cada matéria lista os canais do maior para o menor em inscritos/views.
const MIL_CHANNELS = {
  "Matemática": [
    { label: "Professor Ferretto · 3,5 mi inscritos", url: "https://www.youtube.com/@professorferretto" },
    { label: "Universo Narrado · 1,1 mi inscritos", url: "https://www.youtube.com/@UniversoNarrado" },
    { label: "Universo Narrado Militares · 150 mil inscritos", url: "https://www.youtube.com/@universomilitares" }
  ],
  "Física": [
    { label: "Professor Boaro · 1,4 mi inscritos", url: "https://www.youtube.com/@professorboaro" },
    { label: "Universo Narrado · 1,1 mi inscritos", url: "https://www.youtube.com/@UniversoNarrado" },
    { label: "Universo Narrado Militares · 150 mil inscritos", url: "https://www.youtube.com/@universomilitares" }
  ],
  "Química": [
    { label: "Universo Narrado Militares · 150 mil inscritos", url: "https://www.youtube.com/@universomilitares" },
    { label: "Marcelão da Química · 100 mil inscritos", url: "https://www.youtube.com/channel/UCHqTiCfWd6NCeXuRrD8ODAA" }
  ],
  "Português": [
    { label: "Professor Noslen · 5,7 mi inscritos", url: "https://www.youtube.com/@professornoslen" },
    { label: "Universo Narrado Militares · 150 mil inscritos", url: "https://www.youtube.com/@universomilitares" }
  ],
  "Inglês": [
    { label: "Mairo Vergara · 3,4 mi inscritos", url: "https://www.youtube.com/MairoVergara" },
    { label: "Universo Narrado Militares · 150 mil inscritos", url: "https://www.youtube.com/@universomilitares" }
  ],
  "História": [
    { label: "Débora Aladim · 4,2 mi inscritos", url: "https://www.youtube.com/channel/UCx7HKmnCIIbRBF2FjAoV0bg" },
    { label: "Estratégia Militares · 300 mil inscritos", url: "https://www.youtube.com/@estrategiamilitares" }
  ],
  "Geografia": [
    { label: "Estratégia Militares · 300 mil inscritos", url: "https://www.youtube.com/@estrategiamilitares" },
    { label: "Tudo Sobre Geografia (Prof. Bruno Barros)", url: "https://www.youtube.com/c/TudoSobreGeografia" }
  ],
  "Ciências": [
    { label: "Universo Narrado · 1,1 mi inscritos", url: "https://www.youtube.com/@UniversoNarrado" },
    { label: "Universo Narrado Militares · 150 mil inscritos", url: "https://www.youtube.com/@universomilitares" }
  ],
  "Atualidades": [
    { label: "Estratégia Militares · 300 mil inscritos", url: "https://www.youtube.com/@estrategiamilitares" }
  ],
  "Condicionamento físico": [
    { label: "Estratégia Militares · 300 mil inscritos", url: "https://www.youtube.com/@estrategiamilitares" },
    { label: "Universo Narrado Militares · 150 mil inscritos", url: "https://www.youtube.com/@universomilitares" }
  ],
  "Redação": [
    { label: "Débora Aladim · 4,2 mi inscritos", url: "https://www.youtube.com/channel/UCx7HKmnCIIbRBF2FjAoV0bg" },
    { label: "Estratégia Militares · 300 mil inscritos", url: "https://www.youtube.com/@estrategiamilitares" }
  ]
};

// O que mais cai no ENEM e vestibulares, por matéria (baseado em provas anteriores).
const ENEM_TOPICS = {
  "Matemática": ["Funções (afim, quadrática, exponencial)", "Geometria plana e espacial", "Porcentagem, razão e proporção", "Estatística (média, mediana, moda)", "Probabilidade e análise combinatória"],
  "Física": ["Cinemática (MU e MUV)", "Dinâmica (Leis de Newton) e energia", "Eletrodinâmica (resistores e potência)", "Termologia (calorimetria e gases)", "Ondulatória e óptica"],
  "Química": ["Estequiometria", "Soluções e concentração", "Orgânica (funções oxigenadas)", "Eletroquímica (pilhas)", "Termoquímica"],
  "Biologia": ["Ecologia (cadeias, impactos)", "Citologia e bioenergética", "Genética (1ª e 2ª lei de Mendel)", "Fisiologia humana", "Evolução e classificação"],
  "Português": ["Interpretação de texto", "Sintaxe: concordância e regência", "Morfologia: classes e verbos", "Semântica e coesão", "Pontuação e crase"],
  "Redação": ["Tese + proposta de intervenção", "Repertório sociocultural", "Coesão e conectivos", "Estrutura dissertativa-argumentativa"],
  "Literatura": ["Modernismo (Semana de 22)", "Romantismo e Realismo", "Barroco e Arcadismo", "Interpretação de poemas e crônicas"],
  "Idiomas": ["Interpretação de texto", "Tempos verbais", "Vocabulário por contexto", "Pronomes e conjunções"],
  "História": ["Brasil Colônia e Império", "Era Vargas e Ditadura Militar", "República e redemocratização", "Guerras mundiais e Revolução Industrial"],
  "Geografia": ["Geografia física (clima, relevo, hidrografia)", "Urbanização e população", "Agropecuária e energia", "Geopolítica e meio ambiente"],
  "Sociologia": ["Marx, Durkheim e Weber", "Cidadania e direitos", "Movimentos sociais", "Cultura e indústria cultural"],
  "Artes": ["Vanguardas europeias", "Arte moderna brasileira", "Arte contemporânea", "Elementos da linguagem visual"],
  "Lógica": ["Proposições e conectivos", "Sequências e padrões", "Porcentagem aplicada", "Leitura de gráficos e tabelas"],
  "Atualidades": ["Clima e meio ambiente", "Inteligência artificial e tecnologia", "Desigualdade e políticas públicas", "Geopolítica atual"]
};

// Ponto forte (mil_study) → matérias da prova que ele cobre: o plano reduz essas e reforça as demais.
const MIL_STRENGTH_MAP = [
  ["Matemática", "Física", "Ciências", "Química"],
  ["Português", "Inglês"],
  ["História", "Geografia", "Atualidades"],
  ["Química", "Biologia", "Ciências"]
];

const courses = [
  { name: "Licenciatura em Matemática", areas: ["educacao", "exatas"], description: "Domine álgebra, geometria e didática para lecionar no fundamental, médio e cursinhos. Diferencial: falta professor — concursos e aulas particulares sobram." },
  { name: "Licenciatura em Física", areas: ["educacao", "exatas"], description: "Aprenda mecânica, eletromagnetismo e experimentação para ensinar ciências exatas. Diferencial: base forte também abre portas em tecnologia e engenharia." },
  { name: "Licenciatura em Química", areas: ["educacao", "biologicas"], description: "Estude reações, laboratório e segurança química para a sala de aula. Diferencial: atuação dupla em ensino e indústria química." },
  { name: "Pedagogia", areas: ["educacao", "humanas"], description: "Planeje alfabetização, gestão escolar e políticas de ensino infantil e fundamental. Diferencial: o curso mais versátil da educação, do classroom à coordenação." },
  { name: "Licenciatura em Artes Visuais", areas: ["educacao", "artes"], description: "Una desenho, história da arte e museologia ao ensino criativo. Diferencial: projetos culturais e editais além da escola." },
  { name: "Licenciatura em Ciências Biológicas", areas: ["educacao", "biologicas"], description: "Ensine genética, ecologia e corpo humano com aulas de campo e laboratório. Diferencial: ponte direta para saúde e meio ambiente." },
  { name: "Licenciatura em Ciências Sociais", areas: ["educacao", "sociais"], description: "Leve sociologia, política e cidadania para a escola e projetos comunitários. Diferencial: concursos na área social valorizam o diploma." },
  { name: "Licenciatura em Computação", areas: ["educacao", "tecnologia"], description: "Ensine programação, robótica e pensamento computacional, matéria em expansão nas escolas. Diferencial: mercado tech como plano B." },
  { name: "Licenciatura em Dança", areas: ["educacao", "artes"], description: "Forme-se em expressão corporal, coreografia e arte-educação. Diferencial: academias, companhias e projetos sociais." },
  { name: "Licenciatura em Educação do Campo", areas: ["educacao", "agrarias"], description: "Educação pensada para realidades rurais, assentamentos e comunidades tradicionais. Diferencial: atuação em políticas públicas do campo." },
  { name: "Licenciatura em Educação Especial", areas: ["educacao", "saude"], description: "Especialize-se em inclusão, Libras e tecnologias assistivas. Diferencial: área em alta com poucos profissionais." },
  { name: "Licenciatura em Educação Física", areas: ["educacao", "saude"], description: "Ensine esporte e saúde nas escolas, com base em fisiologia do exercício. Diferencial: soma escola + academias e personal." },
  { name: "Licenciatura em Filosofia", areas: ["educacao", "humanas"], description: "Ensine ética, lógica e pensamento crítico no ensino médio. Diferencial: base para concursos e carreiras jurídicas." },
  { name: "Licenciatura em História", areas: ["educacao", "humanas"], description: "Do Brasil Colônia à redemocratização, forme leitores críticos do presente. Diferencial: museus, turismo e concursos." },
  { name: "Licenciatura em Geografia", areas: ["educacao", "humanas"], description: "Una mapas, clima e urbanização ao ensino de território e ambiente. Diferencial: geoprocessamento amplia o mercado." },
  { name: "Licenciatura em Letras - Inglês", areas: ["educacao", "linguagens"], description: "Fluência + didática para escolas, cursos de idiomas e tradução. Diferencial: inglês abre remoto e salários maiores." },
  { name: "Licenciatura em Letras - Português", areas: ["educacao", "linguagens"], description: "Gramática, literatura e redação para formar bons leitores e escritores. Diferencial: revisão e concursos com prova discursiva." },
  { name: "Licenciatura em Letras - Libras", areas: ["educacao", "linguagens"], description: "Torne-se referência em educação bilíngue para surdos. Diferencial: lei garante demanda e faltam intérpretes." },
  { name: "Licenciatura em Música", areas: ["educacao", "artes"], description: "Teoria, instrumento e regência para escolas e projetos culturais. Diferencial: bandas, estúdios e aulas particulares." },
  { name: "Licenciatura em Teatro", areas: ["educacao", "artes"], description: "Direção, interpretação e arte-educação em palco e escola. Diferencial: produção cultural e audiovisual." },
  { name: "Licenciatura em Ciências da Religião", areas: ["educacao", "humanas"], description: "Estude diversidade de crenças, diálogo e cultura da paz. Diferencial: ensino religioso e mediação comunitária." },
  { name: "Licenciatura em Educação Intercultural Indígena", areas: ["educacao", "humanas"], description: "Educação bilíngue e comunitária em territórios indígenas. Diferencial: concursos específicos e ONGs." },
  { name: "Administração", areas: ["gestao", "sociais"], description: "Finanças, marketing e liderança para gerir qualquer negócio. Diferencial: o diploma mais versátil do mercado." },
  { name: "Ciências Contábeis", areas: ["gestao", "exatas"], description: "Auditoria, perícia e tributos com matemática aplicada. Diferencial: concursos fiscais têm os maiores salários." },
  { name: "Ciências Econômicas", areas: ["gestao", "sociais"], description: "Mercados, inflação e políticas públicas com modelagem de dados. Diferencial: bancos, consultorias e Banco Central." },
  { name: "Marketing", areas: ["gestao", "linguagens"], description: "Marcas, tráfego e conteúdo para vender no digital. Diferencial: portfólio vale mais que diploma." },
  { name: "Direito", areas: ["juridicas", "humanas"], description: "Leis, processos e argumentação + OAB. Diferencial: teto altíssimo via magistratura e MP." },
  { name: "Relações Internacionais", areas: ["juridicas", "sociais"], description: "Diplomacia, comércio exterior e organismos globais. Diferencial: idiomas + intercâmbio turbinam a carreira." },
  { name: "Medicina", areas: ["saude", "biologicas"], description: "6 anos + residência: diagnóstico, cirurgia e plantões. Diferencial: maior média salarial do país." },
  { name: "Enfermagem", areas: ["saude", "biologicas"], description: "Cuidado direto, UTI e saúde pública com piso em lei. Diferencial: emprego rápido e concursos constantes." },
  { name: "Odontologia", areas: ["saude", "biologicas"], description: "Clínica, implantes e ortodontia, do SUS ao consultório próprio. Diferencial: especialização multiplica o ticket." },
  { name: "Farmácia", areas: ["saude", "biologicas"], description: "Medicamentos, análises clínicas e indústria farmacêutica. Diferencial: farmácia hospitalar e concursos." },
  { name: "Psicologia", areas: ["saude", "humanas"], description: "Clínica, organizacional e jurídica do comportamento humano. Diferencial: consultório próprio com agenda cheia." },
  { name: "Fisioterapia", areas: ["saude", "biologicas"], description: "Reabilitação ortopédica, esportiva e respiratória. Diferencial: home care e esporte em alta." },
  { name: "Nutrição", areas: ["saude", "biologicas"], description: "Planos alimentares clínicos e esportivos. Diferencial: consultório + redes sociais geram autoridade." },
  { name: "Ciência da Computação", areas: ["tecnologia", "exatas"], description: "Algoritmos, IA e teoria da computação na raiz. Diferencial: base para pesquisa e big techs." },
  { name: "Sistemas de Informação", areas: ["tecnologia", "gestao"], description: "Software + negócios: ERP, dados e gestão de TI. Diferencial: ponte entre código e diretoria." },
  { name: "Análise e Desenvolvimento de Sistemas", areas: ["tecnologia", "exatas"], description: "Curso direto ao ponto para virar dev web e mobile. Diferencial: entrada rápida no mercado." },
  { name: "Ciência de Dados", areas: ["tecnologia", "exatas"], description: "Python, estatística e machine learning para decidir com dados. Diferencial: salários entre os maiores de TI." },
  { name: "Engenharia Civil", areas: ["engenharias", "exatas"], description: "Estruturas, obras e infraestrutura urbana. Diferencial: concursos (DNIT, Caixa) dão estabilidade." },
  { name: "Engenharia de Computação", areas: ["engenharias", "tecnologia"], description: "Hardware + software: chips, embarcados e robótica. Diferencial: indústria e automação disputam." },
  { name: "Engenharia Elétrica", areas: ["engenharias", "exatas"], description: "Geração, transmissão e eletrônica, do poste ao chip. Diferencial: setor elétrico paga bem e concursado." },
  { name: "Engenharia Mecânica", areas: ["engenharias", "exatas"], description: "Máquinas, térmicas e projetos industriais. Diferencial: indústria automotiva e petróleo." },
  { name: "Engenharia de Produção", areas: ["engenharias", "gestao"], description: "Otimize fábricas, logística e qualidade. Diferencial: o engenheiro que vira gerente." },
  { name: "Arquitetura e Urbanismo", areas: ["engenharias", "artes"], description: "Projetos, interiores e cidades com traço autoral. Diferencial: portfólio próprio supera CLT." },
  { name: "Agronomia", areas: ["agrarias", "biologicas"], description: "Solo, lavouras e precisão no coração do agro. Diferencial: interior com vagas e bons salários." },
  { name: "Medicina Veterinária", areas: ["agrarias", "saude"], description: "Clínica pet em alta + campo e vigilância sanitária. Diferencial: dois mercados em um diploma." },
  { name: "Zootecnia", areas: ["agrarias", "biologicas"], description: "Nutrição e bem-estar animal na pecuária. Diferencial: agro exportador contrata sempre." },
  { name: "Ciências Biológicas", areas: ["biologicas", "saude"], description: "Ecologia, genética e pesquisa de campo e laboratório. Diferencial: base para mestrado e concursos ambientais." },
  { name: "Química", areas: ["biologicas", "exatas"], description: "Análises, indústria e pesquisa de materiais. Diferencial: bacharel vai à indústria, licenciado à escola." },
  { name: "Física", areas: ["exatas", "tecnologia"], description: "Do quântico ao cosmos, com matemática pesada. Diferencial: físicos migram bem para dados e finanças." },
  { name: "Matemática", areas: ["exatas", "tecnologia"], description: "Modelagem, estatística e lógica pura. Diferencial: porta de entrada para dados, cripto e pesquisa." },
  { name: "Jornalismo", areas: ["linguagens", "sociais"], description: "Apuração, texto e vídeo para informar com credibilidade. Diferencial: assessoria e conteúdo pagam melhor." },
  { name: "Publicidade e Propaganda", areas: ["linguagens", "artes"], description: "Campanhas, social media e direção de arte. Diferencial: freela e agências com teto alto." },
  { name: "Design", areas: ["artes", "tecnologia"], description: "Interfaces (UI/UX), marcas e produto digital. Diferencial: TI paga os maiores salários do design." },
  { name: "Cinema e Audiovisual", areas: ["artes", "linguagens"], description: "Roteiro, direção e edição para telas e streaming. Diferencial: editais e produtoras independentes." },
  { name: "Engenharia de Software", areas: ["tecnologia", "engenharias"], description: "Ciclo completo: requisitos, arquitetura, testes e DevOps. Diferencial: o engenheiro focado só em software, queridinho das big techs." },
  { name: "Jogos Digitais", areas: ["tecnologia", "artes"], description: "Programação + arte para games e simulações. Diferencial: indústria criativa em crescimento no Brasil." },
  { name: "Segurança da Informação", areas: ["tecnologia", "juridicas"], description: "Hacking ético, perícia e LGPD. Diferencial: escassez de profissionais eleva salários." },
  { name: "Engenharia Aeroespacial", areas: ["engenharias", "tecnologia"], description: "Foguetes e satélites com aerodinâmica avançada. Diferencial: ITA, Embraer e setor espacial." },
  { name: "Engenharia Naval", areas: ["engenharias", "tecnologia"], description: "Navios e plataformas offshore. Diferencial: petróleo e Marinha como contratantes." },
  { name: "Engenharia Química", areas: ["engenharias", "biologicas"], description: "Reatores e processos da petroquímica à farma. Diferencial: indústria de base com piso CREA." },
  { name: "Engenharia Ambiental", areas: ["engenharias", "agrarias"], description: "Licenciamento, saneamento e recuperação de áreas. Diferencial: legislação garante demanda." },
  { name: "Engenharia Biomédica", areas: ["engenharias", "saude"], description: "Próteses, imagens e hospitais inteligentes. Diferencial: saúde + tecnologia, nicho premium." },
  { name: "Engenharia de Alimentos", areas: ["agrarias", "engenharias"], description: "Conservação, qualidade e fábricas de alimentos. Diferencial: agroindústria em todo interior." },
  { name: "Biomedicina", areas: ["saude", "biologicas"], description: "Análises clínicas, imagem e estética avançada. Diferencial: laboratórios próprios e concursos." },
  { name: "Fonoaudiologia", areas: ["saude", "linguagens"], description: "Voz, audição e linguagem infantil e adulta. Diferencial: pouca concorrência, agenda cheia." },
  { name: "Terapia Ocupacional", areas: ["saude", "humanas"], description: "Reabilitação para autonomia no dia a dia. Diferencial: SUS e home care em expansão." },
  { name: "Educação Física", areas: ["saude", "educacao"], description: "Treino, esporte e saúde preventiva. Diferencial: academias, personal e consultoria online." },
  { name: "Gastronomia", areas: ["artes", "gestao"], description: "Técnicas culinárias + gestão de cozinha. Diferencial: delivery e autoral como negócio próprio." },
  { name: "Serviço Social", areas: ["sociais", "humanas"], description: "CRAS, INSS e direitos sociais na ponta. Diferencial: concursos municipais constantes." },
  { name: "Sociologia", areas: ["humanas", "sociais"], description: "Pesquisa social para políticas e mercado. Diferencial: institutos de pesquisa e pós." },
  { name: "Filosofia", areas: ["humanas", "juridicas"], description: "Bacharel em crítica, ética e argumentação. Diferencial: base forte para Direito e concursos." },
  { name: "Teologia", areas: ["humanas", "sociais"], description: "Escrituras, história das religiões e capelania. Diferencial: ensino, ONGs e liderança comunitária." },
  { name: "Estatística", areas: ["exatas", "gestao"], description: "Amostragem e previsão para empresas e governo. Diferencial: alimenta a ciência de dados." },
  { name: "Logística", areas: ["gestao", "exatas"], description: "Estoques, rotas e operações globais. Diferencial: e-commerce aqueceu a área." },
  { name: "Gestão de Recursos Humanos", areas: ["gestao", "humanas"], description: "Recrutamento, cultura e desenvolvimento. Diferencial: toda empresa média precisa." },
  { name: "Comércio Exterior", areas: ["gestao", "linguagens"], description: "Aduana, câmbio e negócios entre países. Diferencial: portos e multinacionais." },
  { name: "Turismo", areas: ["sociais", "linguagens"], description: "Roteiros, hotelaria e eventos. Diferencial: idiomas + intercâmbio abrem o mundo." },
  { name: "Oceanografia", areas: ["biologicas", "agrarias"], description: "Mares, clima e petróleo offshore. Diferencial: Petrobras e pesquisa polar." },
  { name: "Geologia", areas: ["exatas", "agrarias"], description: "Mineração, água subterrânea e riscos. Diferencial: mineração paga prêmios altos." },
  { name: "Biblioteconomia", areas: ["educacao", "linguagens"], description: "Acervos físicos e digitais, dados e memória. Diferencial: concursos em universidades e tribunais." }
];

// Base demonstrativa na estrutura oficial mais recente (CPC/IGC 2023, Portaria INEP 203/2025).
// Valores por curso/campus: confirme sempre no e-MEC e no portal do INEP.
const legacyInstitutions = [
  { name: "Universidade de São Paulo", acronym: "USP", state: "SP", city: "São Paulo", type: "Estadual", course: "Licenciatura em Matemática", cpc: 5, cc: 5, igc: 5, year: 2023 },
  { name: "Universidade Federal do Rio de Janeiro", acronym: "UFRJ", state: "RJ", city: "Rio de Janeiro", type: "Federal", course: "Licenciatura em Física", cpc: 5, cc: 5, igc: 5, year: 2023 },
  { name: "Universidade Federal de Minas Gerais", acronym: "UFMG", state: "MG", city: "Belo Horizonte", type: "Federal", course: "Licenciatura em Química", cpc: 5, cc: 5, igc: 5, year: 2023 },
  { name: "Universidade Federal de Goiás", acronym: "UFG", state: "GO", city: "Goiânia", type: "Federal", course: "Pedagogia", cpc: 5, cc: 4, igc: 4, year: 2023 },
  { name: "Universidade Federal de Pernambuco", acronym: "UFPE", state: "PE", city: "Recife", type: "Federal", course: "Licenciatura em Artes Visuais", cpc: 4, cc: 4, igc: 5, year: 2023 },
  { name: "Universidade Federal do Paraná", acronym: "UFPR", state: "PR", city: "Curitiba", type: "Federal", course: "Licenciatura em Ciências Biológicas", cpc: 5, cc: 4, igc: 5, year: 2023 },
  { name: "Universidade de Brasília", acronym: "UnB", state: "DF", city: "Brasília", type: "Federal", course: "Licenciatura em Ciências Sociais", cpc: 5, cc: 4, igc: 5, year: 2023 },
  { name: "Universidade Federal de Pernambuco", acronym: "UFPE", state: "PE", city: "Recife", type: "Federal", course: "Licenciatura em Computação", cpc: 4, cc: 4, igc: 5, year: 2023 },
  { name: "Universidade Federal da Bahia", acronym: "UFBA", state: "BA", city: "Salvador", type: "Federal", course: "Licenciatura em Dança", cpc: 4, cc: 4, igc: 5, year: 2023 },
  { name: "Universidade Federal do Pará", acronym: "UFPA", state: "PA", city: "Belém", type: "Federal", course: "Licenciatura em Educação do Campo", cpc: 4, cc: 4, igc: 4, year: 2023 },
  { name: "Universidade Federal de São Carlos", acronym: "UFSCar", state: "SP", city: "São Carlos", type: "Federal", course: "Licenciatura em Educação Especial", cpc: 5, cc: 4, igc: 5, year: 2023 },
  { name: "Universidade Federal de Santa Catarina", acronym: "UFSC", state: "SC", city: "Florianópolis", type: "Federal", course: "Licenciatura em Educação Física", cpc: 5, cc: 4, igc: 5, year: 2023 },
  { name: "Universidade Federal de Ouro Preto", acronym: "UFOP", state: "MG", city: "Ouro Preto", type: "Federal", course: "Licenciatura em Filosofia", cpc: 4, cc: 4, igc: 4, year: 2023 },
  { name: "Universidade Federal Fluminense", acronym: "UFF", state: "RJ", city: "Niterói", type: "Federal", course: "Licenciatura em História", cpc: 5, cc: 4, igc: 5, year: 2023 },
  { name: "Universidade Federal do Ceará", acronym: "UFC", state: "CE", city: "Fortaleza", type: "Federal", course: "Licenciatura em Geografia", cpc: 4, cc: 4, igc: 5, year: 2023 },
  { name: "Universidade Federal de Minas Gerais", acronym: "UFMG", state: "MG", city: "Belo Horizonte", type: "Federal", course: "Licenciatura em Letras - Inglês", cpc: 5, cc: 4, igc: 5, year: 2023 },
  { name: "Universidade Federal do Rio Grande do Sul", acronym: "UFRGS", state: "RS", city: "Porto Alegre", type: "Federal", course: "Licenciatura em Letras - Português", cpc: 5, cc: 4, igc: 5, year: 2023 },
  { name: "Universidade Federal de Santa Catarina", acronym: "UFSC", state: "SC", city: "Florianópolis", type: "Federal", course: "Licenciatura em Letras - Libras", cpc: 4, cc: 4, igc: 5, year: 2023 },
  { name: "Universidade Federal do Rio de Janeiro", acronym: "UFRJ", state: "RJ", city: "Rio de Janeiro", type: "Federal", course: "Licenciatura em Música", cpc: 5, cc: 4, igc: 5, year: 2023 },
  { name: "Universidade Federal do Estado do Rio de Janeiro", acronym: "UNIRIO", state: "RJ", city: "Rio de Janeiro", type: "Federal", course: "Licenciatura em Teatro", cpc: 4, cc: 4, igc: 4, year: 2023 },
  { name: "Universidade Federal de Juiz de Fora", acronym: "UFJF", state: "MG", city: "Juiz de Fora", type: "Federal", course: "Licenciatura em Ciências da Religião", cpc: 4, cc: 4, igc: 4, year: 2023 },
  { name: "Universidade Federal de Roraima", acronym: "UFRR", state: "RR", city: "Boa Vista", type: "Federal", course: "Licenciatura em Educação Intercultural Indígena", cpc: 4, cc: 4, igc: 3, year: 2023 }
];

// Catálogo demonstrativo para exercitar filtros (estrutura do ciclo CPC/IGC 2023, INEP);
// confirme a oferta e os indicadores no e-MEC.
// `areas` limita os cursos gerados para a rede (ex.: SENAI não oferta Medicina).
const institutionNetworks = [
  { name: "Universidade Federal de Minas Gerais", acronym: "UFMG", state: "MG", city: "Belo Horizonte", type: "Federal", cpc: 5, cc: 5, igc: 5 },
  { name: "Universidade Federal do Rio de Janeiro", acronym: "UFRJ", state: "RJ", city: "Rio de Janeiro", type: "Federal", cpc: 5, cc: 5, igc: 5 },
  { name: "Universidade Federal do Rio Grande do Sul", acronym: "UFRGS", state: "RS", city: "Porto Alegre", type: "Federal", cpc: 5, cc: 4, igc: 5 },
  { name: "Universidade Federal de Pernambuco", acronym: "UFPE", state: "PE", city: "Recife", type: "Federal", cpc: 4, cc: 4, igc: 5 },
  { name: "Universidade Federal do Pará", acronym: "UFPA", state: "PA", city: "Belém", type: "Federal", cpc: 4, cc: 4, igc: 4 },
  { name: "Universidade de Brasília", acronym: "UnB", state: "DF", city: "Brasília", type: "Federal", cpc: 5, cc: 4, igc: 5 },
  { name: "Universidade Federal de Santa Catarina", acronym: "UFSC", state: "SC", city: "Florianópolis", type: "Federal", cpc: 5, cc: 4, igc: 5 },
  { name: "Universidade Federal do Paraná", acronym: "UFPR", state: "PR", city: "Curitiba", type: "Federal", cpc: 5, cc: 4, igc: 5 },
  { name: "Universidade Federal da Bahia", acronym: "UFBA", state: "BA", city: "Salvador", type: "Federal", cpc: 4, cc: 4, igc: 5 },
  { name: "Universidade Federal do Ceará", acronym: "UFC", state: "CE", city: "Fortaleza", type: "Federal", cpc: 4, cc: 4, igc: 5 },
  { name: "Universidade Federal de Goiás", acronym: "UFG", state: "GO", city: "Goiânia", type: "Federal", cpc: 5, cc: 4, igc: 4 },
  { name: "Universidade Federal Fluminense", acronym: "UFF", state: "RJ", city: "Niterói", type: "Federal", cpc: 5, cc: 4, igc: 5 },
  { name: "Universidade Federal do Rio Grande do Norte", acronym: "UFRN", state: "RN", city: "Natal", type: "Federal", cpc: 4, cc: 4, igc: 5 },
  { name: "Instituto Federal de São Paulo", acronym: "IFSP", state: "SP", city: "São Paulo", type: "Federal", cpc: 4, cc: 4, igc: 4, areas: ["tecnologia", "engenharias", "exatas", "educacao", "gestao"] },
  { name: "Instituto Federal do Rio de Janeiro", acronym: "IFRJ", state: "RJ", city: "Rio de Janeiro", type: "Federal", cpc: 4, cc: 4, igc: 4, areas: ["tecnologia", "saude", "biologicas", "educacao", "exatas"] },
  { name: "Instituto Federal de Minas Gerais", acronym: "IFMG", state: "MG", city: "Belo Horizonte", type: "Federal", cpc: 4, cc: 4, igc: 4, areas: ["tecnologia", "engenharias", "gestao", "educacao"] },
  { name: "Universidade de São Paulo", acronym: "USP", state: "SP", city: "São Paulo", type: "Estadual", cpc: 5, cc: 5, igc: 5 },
  { name: "Universidade Estadual de Campinas", acronym: "UNICAMP", state: "SP", city: "Campinas", type: "Estadual", cpc: 5, cc: 5, igc: 5 },
  { name: "Universidade Estadual Paulista", acronym: "UNESP", state: "SP", city: "São Paulo", type: "Estadual", cpc: 5, cc: 4, igc: 5 },
  { name: "Universidade do Estado do Rio de Janeiro", acronym: "UERJ", state: "RJ", city: "Rio de Janeiro", type: "Estadual", cpc: 4, cc: 4, igc: 4 },
  { name: "Universidade Estadual de Maringá", acronym: "UEM", state: "PR", city: "Maringá", type: "Estadual", cpc: 4, cc: 4, igc: 4 },
  { name: "Universidade Estadual de Londrina", acronym: "UEL", state: "PR", city: "Londrina", type: "Estadual", cpc: 4, cc: 4, igc: 4 },
  { name: "Universidade do Estado da Bahia", acronym: "UNEB", state: "BA", city: "Salvador", type: "Estadual", cpc: 4, cc: 4, igc: 4 },
  { name: "Universidade Estadual do Ceará", acronym: "UECE", state: "CE", city: "Fortaleza", type: "Estadual", cpc: 4, cc: 4, igc: 4 },
  { name: "Universidade do Estado do Amazonas", acronym: "UEA", state: "AM", city: "Manaus", type: "Estadual", cpc: 3, cc: 4, igc: 3 },
  { name: "Pontifícia Universidade Católica de São Paulo", acronym: "PUC-SP", state: "SP", city: "São Paulo", type: "Privada", cpc: 4, cc: 5, igc: 4 },
  { name: "Pontifícia Universidade Católica do Rio de Janeiro", acronym: "PUC-Rio", state: "RJ", city: "Rio de Janeiro", type: "Privada", cpc: 4, cc: 5, igc: 5 },
  { name: "Pontifícia Universidade Católica de Minas Gerais", acronym: "PUC-MG", state: "MG", city: "Belo Horizonte", type: "Privada", cpc: 4, cc: 4, igc: 4 },
  { name: "Pontifícia Universidade Católica de Goiás", acronym: "PUC-GO", state: "GO", city: "Goiânia", type: "Privada", cpc: 4, cc: 4, igc: 4 },
  { name: "Pontifícia Universidade Católica do Rio Grande do Sul", acronym: "PUCRS", state: "RS", city: "Porto Alegre", type: "Privada", cpc: 4, cc: 4, igc: 5 },
  { name: "Pontifícia Universidade Católica de Campinas", acronym: "PUC-Camp", state: "SP", city: "Campinas", type: "Privada", cpc: 4, cc: 4, igc: 4 },
  { name: "Pontifícia Universidade Católica do Paraná", acronym: "PUCPR", state: "PR", city: "Curitiba", type: "Privada", cpc: 4, cc: 4, igc: 4 },
  { name: "Universidade Presbiteriana Mackenzie", acronym: "Mackenzie", state: "SP", city: "São Paulo", type: "Privada", cpc: 4, cc: 4, igc: 4 },
  { name: "Fundação Getulio Vargas", acronym: "FGV", state: "SP", city: "São Paulo", type: "Privada", cpc: 5, cc: 5, igc: 5, areas: ["gestao", "juridicas", "sociais", "exatas", "tecnologia"] },
  { name: "Insper", acronym: "Insper", state: "SP", city: "São Paulo", type: "Privada", cpc: 5, cc: 5, igc: 5, areas: ["gestao", "tecnologia", "engenharias", "exatas"] },
  { name: "Universidade Anhembi Morumbi", acronym: "Anhembi", state: "SP", city: "São Paulo", type: "Privada", cpc: 4, cc: 4, igc: 4 },
  { name: "Universidade Estácio de Sá", acronym: "Estácio", state: "RJ", city: "Rio de Janeiro", type: "Privada", cpc: 3, cc: 4, igc: 3 },
  { name: "Anhanguera", acronym: "Anhanguera", state: "SP", city: "São Paulo", type: "Privada", cpc: 3, cc: 4, igc: 3 },
  { name: "Universidade Cruzeiro do Sul", acronym: "Cruzeiro", state: "SP", city: "São Paulo", type: "Privada", cpc: 4, cc: 4, igc: 4 },
  { name: "Universidade de Fortaleza", acronym: "UNIFOR", state: "CE", city: "Fortaleza", type: "Privada", cpc: 4, cc: 4, igc: 4 },
  { name: "Universidade do Vale do Rio dos Sinos", acronym: "UNISINOS", state: "RS", city: "São Leopoldo", type: "Privada", cpc: 4, cc: 4, igc: 4 },
  { name: "Universidade Paulista", acronym: "UNIP", state: "SP", city: "São Paulo", type: "Privada", cpc: 3, cc: 4, igc: 3 },
  { name: "Universidade Nove de Julho", acronym: "UNINOVE", state: "SP", city: "São Paulo", type: "Privada", cpc: 3, cc: 4, igc: 3 },
  { name: "Centro Universitário FMU", acronym: "FMU", state: "SP", city: "São Paulo", type: "Privada", cpc: 3, cc: 4, igc: 3 },
  { name: "ESPM", acronym: "ESPM", state: "SP", city: "São Paulo", type: "Privada", cpc: 4, cc: 4, igc: 4 },
  { name: "IBMEC", acronym: "IBMEC", state: "RJ", city: "Rio de Janeiro", type: "Privada", cpc: 4, cc: 5, igc: 4 },
  { name: "Universidade Veiga de Almeida", acronym: "UVA", state: "RJ", city: "Rio de Janeiro", type: "Privada", cpc: 3, cc: 4, igc: 3 },
  { name: "Universidade Feevale", acronym: "FEEVALE", state: "RS", city: "Novo Hamburgo", type: "Privada", cpc: 4, cc: 4, igc: 4 },
  { name: "Universidade de Passo Fundo", acronym: "UPF", state: "RS", city: "Passo Fundo", type: "Privada", cpc: 4, cc: 4, igc: 4 },
  { name: "Universidade do Vale do Itajaí", acronym: "UNIVALI", state: "SC", city: "Itajaí", type: "Privada", cpc: 4, cc: 4, igc: 4 },
  { name: "Centro Universitário Curitiba", acronym: "UNICURITIBA", state: "PR", city: "Curitiba", type: "Privada", cpc: 3, cc: 4, igc: 3 },
  { name: "Universidade Católica de Pernambuco", acronym: "UNICAP", state: "PE", city: "Recife", type: "Privada", cpc: 4, cc: 4, igc: 4 },
  { name: "Centro Universitário Maurício de Nassau", acronym: "UNINASSAU", state: "PE", city: "Recife", type: "Privada", cpc: 3, cc: 4, igc: 3 },
  { name: "Universidade Tiradentes", acronym: "UNIT", state: "SE", city: "Aracaju", type: "Privada", cpc: 4, cc: 4, igc: 4 },
  { name: "Universidade Potiguar", acronym: "UNP", state: "RN", city: "Natal", type: "Privada", cpc: 3, cc: 4, igc: 3 },
  { name: "Centro Universitário Christus", acronym: "UNICHRISTUS", state: "CE", city: "Fortaleza", type: "Privada", cpc: 4, cc: 4, igc: 4 },
  { name: "Universidade Católica do Salvador", acronym: "UCSAL", state: "BA", city: "Salvador", type: "Privada", cpc: 4, cc: 4, igc: 4 },
  { name: "Centro Universitário Jorge Amado", acronym: "UNIJORGE", state: "BA", city: "Salvador", type: "Privada", cpc: 3, cc: 4, igc: 3 },
  { name: "Universidade da Amazônia", acronym: "UNAMA", state: "PA", city: "Belém", type: "Privada", cpc: 3, cc: 4, igc: 3 },
  { name: "Centro Universitário do Norte", acronym: "UNINORTE", state: "AM", city: "Manaus", type: "Privada", cpc: 3, cc: 4, igc: 3 },
  { name: "Centro Universitário São Lucas", acronym: "UNISL", state: "RO", city: "Porto Velho", type: "Privada", cpc: 3, cc: 4, igc: 3 },
  { name: "Universidade de Gurupi", acronym: "UNIRG", state: "TO", city: "Gurupi", type: "Privada", cpc: 3, cc: 4, igc: 3 },
  { name: "Centro Universitário de Brasília", acronym: "CEUB", state: "DF", city: "Brasília", type: "Privada", cpc: 4, cc: 4, igc: 4 },
  { name: "Universidade Católica de Brasília", acronym: "UCB", state: "DF", city: "Brasília", type: "Privada", cpc: 4, cc: 4, igc: 4 },
  { name: "Universidade Anhanguera - UNIDERP", acronym: "UNIDERP", state: "MS", city: "Campo Grande", type: "Privada", cpc: 3, cc: 4, igc: 3 },
  { name: "Centro Universitário de Várzea Grande", acronym: "UNIVAG", state: "MT", city: "Cuiabá", type: "Privada", cpc: 3, cc: 4, igc: 3 },
  { name: "Faculdade SENAI", acronym: "SENAI", state: "SP", city: "São Paulo", type: "Privada", cpc: 4, cc: 4, igc: 4, areas: ["tecnologia", "engenharias", "gestao", "exatas"] },
  { name: "SENAI CIMATEC", acronym: "CIMATEC", state: "BA", city: "Salvador", type: "Privada", cpc: 4, cc: 5, igc: 4, areas: ["tecnologia", "engenharias", "exatas", "gestao"] },
  { name: "Faculdade SENAC", acronym: "SENAC", state: "SP", city: "São Paulo", type: "Privada", cpc: 4, cc: 4, igc: 4, areas: ["gestao", "saude", "tecnologia", "linguagens", "artes"] },
  { name: "SESC - Serviço Social do Comércio", acronym: "SESC", state: "RJ", city: "Rio de Janeiro", type: "Privada", cpc: 3, cc: 4, igc: 3, areas: ["gestao", "saude", "educacao", "linguagens"] },
  { name: "Universidade Federal de Santa Maria", acronym: "UFSM", state: "RS", city: "Santa Maria", type: "Federal", cpc: 4, cc: 4, igc: 5 },
  { name: "Universidade Federal da Paraíba", acronym: "UFPB", state: "PB", city: "João Pessoa", type: "Federal", cpc: 4, cc: 4, igc: 4 },
  { name: "Universidade Federal de Alagoas", acronym: "UFAL", state: "AL", city: "Maceió", type: "Federal", cpc: 4, cc: 4, igc: 4 },
  { name: "Universidade Federal de Mato Grosso", acronym: "UFMT", state: "MT", city: "Cuiabá", type: "Federal", cpc: 4, cc: 4, igc: 4 },
  { name: "Universidade Federal de Mato Grosso do Sul", acronym: "UFMS", state: "MS", city: "Campo Grande", type: "Federal", cpc: 4, cc: 4, igc: 4 },
  { name: "Universidade Federal de Viçosa", acronym: "UFV", state: "MG", city: "Viçosa", type: "Federal", cpc: 5, cc: 4, igc: 5 },
  { name: "Universidade Federal de Ouro Preto", acronym: "UFOP", state: "MG", city: "Ouro Preto", type: "Federal", cpc: 4, cc: 4, igc: 4 },
  { name: "Universidade Federal do Acre", acronym: "UFAC", state: "AC", city: "Rio Branco", type: "Federal", cpc: 3, cc: 4, igc: 3 },
  { name: "Universidade Federal de Rondônia", acronym: "UNIR", state: "RO", city: "Porto Velho", type: "Federal", cpc: 3, cc: 4, igc: 3 },
  { name: "Universidade Federal do Tocantins", acronym: "UFT", state: "TO", city: "Palmas", type: "Federal", cpc: 4, cc: 4, igc: 4 },
  { name: "Universidade Federal de Sergipe", acronym: "UFS", state: "SE", city: "São Cristóvão", type: "Federal", cpc: 4, cc: 4, igc: 4 },
  { name: "Universidade do Estado de Santa Catarina", acronym: "UDESC", state: "SC", city: "Florianópolis", type: "Estadual", cpc: 4, cc: 4, igc: 4 },
  { name: "Universidade de Pernambuco", acronym: "UPE", state: "PE", city: "Recife", type: "Estadual", cpc: 4, cc: 4, igc: 4 },
  { name: "Universidade Estadual do Maranhão", acronym: "UEMA", state: "MA", city: "São Luís", type: "Estadual", cpc: 3, cc: 4, igc: 3 },
  { name: "Universidade de Uberaba", acronym: "UNIUBE", state: "MG", city: "Uberaba", type: "Privada", cpc: 3, cc: 4, igc: 3 },
  { name: "Centro Universitário de Belo Horizonte", acronym: "UNIBH", state: "MG", city: "Belo Horizonte", type: "Privada", cpc: 3, cc: 4, igc: 3 },
  { name: "Centro Universitário Newton Paiva", acronym: "Newton Paiva", state: "MG", city: "Belo Horizonte", type: "Privada", cpc: 3, cc: 4, igc: 3 },
  { name: "Universidade São Judas Tadeu", acronym: "USJT", state: "SP", city: "São Paulo", type: "Privada", cpc: 4, cc: 4, igc: 4 },
  { name: "Centro Universitário FEI", acronym: "FEI", state: "SP", city: "São Bernardo do Campo", type: "Privada", cpc: 4, cc: 4, igc: 4 },
  { name: "Faculdade de Engenharia de Sorocaba", acronym: "FACENS", state: "SP", city: "Sorocaba", type: "Privada", cpc: 4, cc: 4, igc: 4 },
  { name: "Fundação Armando Alvares Penteado", acronym: "FAAP", state: "SP", city: "São Paulo", type: "Privada", cpc: 4, cc: 5, igc: 4 },
  { name: "Universidade Ritter dos Reis", acronym: "UNIRITTER", state: "RS", city: "Porto Alegre", type: "Privada", cpc: 3, cc: 4, igc: 3 },
  { name: "Universidade de Caxias do Sul", acronym: "UCS", state: "RS", city: "Caxias do Sul", type: "Privada", cpc: 4, cc: 4, igc: 4 },
  { name: "Universidade do Vale do Taquari", acronym: "UNIVATES", state: "RS", city: "Lajeado", type: "Privada", cpc: 4, cc: 4, igc: 4 },
  { name: "Universidade Luterana do Brasil", acronym: "ULBRA", state: "RS", city: "Canoas", type: "Privada", cpc: 3, cc: 4, igc: 3 },
  { name: "Centro Universitário de João Pessoa", acronym: "UNIPE", state: "PB", city: "João Pessoa", type: "Privada", cpc: 3, cc: 4, igc: 3 },
  { name: "Faculdade Pernambucana de Saúde", acronym: "FPS", state: "PE", city: "Recife", type: "Privada", cpc: 4, cc: 4, igc: 4, areas: ["saude", "biologicas"] },
  { name: "Universidade Salvador", acronym: "UNIFACS", state: "BA", city: "Salvador", type: "Privada", cpc: 3, cc: 4, igc: 3 },
  { name: "Centro Universitário Leonardo da Vinci", acronym: "UNIASSELVI", state: "SC", city: "Indaial", type: "Privada", cpc: 3, cc: 4, igc: 3 },
  { name: "Centro Universitário Internacional", acronym: "UNINTER", state: "PR", city: "Curitiba", type: "Privada", cpc: 3, cc: 4, igc: 3 },
  { name: "Universidade Evangélica de Goiás", acronym: "UNIEVANGÉLICA", state: "GO", city: "Anápolis", type: "Privada", cpc: 4, cc: 4, igc: 4 },
  { name: "Universidade Católica Dom Bosco", acronym: "UCDB", state: "MS", city: "Campo Grande", type: "Privada", cpc: 4, cc: 4, igc: 4 },
  { name: "Centro Universitário da Grande Dourados", acronym: "UNIGRAN", state: "MS", city: "Dourados", type: "Privada", cpc: 3, cc: 4, igc: 3 }
];

const nationwideLocations = [
  ["AC", "Rio Branco"], ["AC", "Cruzeiro do Sul"], ["AL", "Maceió"], ["AL", "Arapiraca"],
  ["AP", "Macapá"], ["AP", "Santana"], ["AM", "Manaus"], ["AM", "Parintins"],
  ["BA", "Salvador"], ["BA", "Feira de Santana"], ["CE", "Fortaleza"], ["CE", "Juazeiro do Norte"],
  ["DF", "Brasília"], ["DF", "Taguatinga"], ["ES", "Vitória"], ["ES", "Vila Velha"],
  ["GO", "Goiânia"], ["GO", "Anápolis"], ["MA", "São Luís"], ["MA", "Imperatriz"],
  ["MT", "Cuiabá"], ["MT", "Rondonópolis"], ["MS", "Campo Grande"], ["MS", "Dourados"],
  ["MG", "Belo Horizonte"], ["MG", "Uberlândia"], ["PA", "Belém"], ["PA", "Santarém"],
  ["PB", "João Pessoa"], ["PB", "Campina Grande"], ["PR", "Curitiba"], ["PR", "Londrina"],
  ["PE", "Recife"], ["PE", "Caruaru"], ["PI", "Teresina"], ["PI", "Parnaíba"],
  ["RJ", "Rio de Janeiro"], ["RJ", "Niterói"], ["RN", "Natal"], ["RN", "Mossoró"],
  ["RS", "Porto Alegre"], ["RS", "Caxias do Sul"], ["RO", "Porto Velho"], ["RO", "Ji-Paraná"],
  ["RR", "Boa Vista"], ["RR", "Rorainópolis"], ["SC", "Florianópolis"], ["SC", "Joinville"],
  ["SP", "São Paulo"], ["SP", "Campinas"], ["SE", "Aracaju"], ["SE", "Lagarto"],
  ["TO", "Palmas"], ["TO", "Araguaína"]
];

const nationwideInstitutions = courses.flatMap((course, courseIndex) => nationwideLocations.flatMap(([state, city], locationIndex) => {
  const cpc = 3 + ((courseIndex + locationIndex) % 3);
  return [
    { name: `Universidade Federal de ${city}`, acronym: `FED-${state}-${locationIndex}`, state, city, type: "Federal", course: course.name, cpc, cc: Math.min(cpc + 1, 5), igc: 4, year: 2023 },
    { name: `Universidade Estadual de ${city}`, acronym: `EST-${state}-${locationIndex}`, state, city, type: "Estadual", course: course.name, cpc, cc: cpc, igc: 4, year: 2023 },
    { name: `Centro Universitário Privado de ${city}`, acronym: `PRI-${state}-${locationIndex}`, state, city, type: "Privada", course: course.name, cpc, cc: cpc, igc: 3, year: 2023 }
  ];
}));

const institutions = [
  ...legacyInstitutions.map(applyRealIndicators),
  ...courses.flatMap((course) => institutionNetworks.filter((institution) => !institution.areas || course.areas.some((a) => institution.areas.includes(a))).map((institution) => {
    const { areas, ...rest } = institution;
    return applyRealIndicators({ ...rest, course: course.name, year: 2023 });
  })),
  ...nationwideInstitutions
];

// Aplica CPC/IGC oficiais (INEP 2023) quando a sigla+curso batem com a base oficial.
// Sem match: mantém o valor demonstrativo (badge "simulado").
function applyRealIndicators(entry) {
  const out = { ...entry };
  try {
    if (typeof CPC_REAL_2023 !== "undefined") {
      const cpc = CPC_REAL_2023[out.acronym + "|" + out.course];
      if (cpc) { out.cpc = cpc; out.cpcReal = true; }
    }
    if (typeof IGC_REAL_2023 !== "undefined" && IGC_REAL_2023[out.acronym]) {
      out.igc = IGC_REAL_2023[out.acronym]; out.igcReal = true;
    }
  } catch { /* base ausente: segue demonstrativo */ }
  return out;
}

const areaScheduleProfiles = {
  educacao: [["Português", 4], ["Redação", 3], ["História", 2], ["Sociologia", 2]],
  exatas: [["Matemática", 4], ["Física", 3], ["Química", 2]],
  biologicas: [["Biologia", 4], ["Química", 3], ["Física", 2]],
  humanas: [["História", 4], ["Sociologia", 3], ["Geografia", 3]],
  linguagens: [["Português", 4], ["Redação", 3], ["Literatura", 3], ["Idiomas", 2]],
  artes: [["Artes", 4], ["História", 3], ["Português", 2]],
  tecnologia: [["Matemática", 3], ["Lógica", 4], ["Física", 2]],
  engenharias: [["Matemática", 4], ["Física", 4], ["Química", 2]],
  gestao: [["Matemática", 3], ["Português", 3], ["Atualidades", 3]],
  juridicas: [["Português", 4], ["História", 3], ["Sociologia", 3]],
  sociais: [["História", 3], ["Geografia", 3], ["Sociologia", 4]],
  agrarias: [["Biologia", 4], ["Química", 3], ["Geografia", 3]],
  saude: [["Biologia", 4], ["Química", 3], ["Física", 2]]
};

function buildScheduleProfile(course) {
  const subjects = new Map();
  course.areas.forEach((area) => (areaScheduleProfiles[area] || []).forEach(([subject, hours]) => {
    subjects.set(subject, Math.max(subjects.get(subject) || 0, hours));
  }));
  return [...subjects.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
}

function getData() { return JSON.parse(localStorage.getItem(userKey()) || "{}"); }
function saveData(data) { localStorage.setItem(userKey(), JSON.stringify(data)); }

// ---- Login por usuário (dados separados por conta, neste navegador) ----
const USERS_KEY = "rotaAcademica_users";
const SESSION_KEY = "rotaAcademica_session";

function hashPass(str) {
  // Hash simples para demonstração (não é segurança real; um backend seria o ideal).
  let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (h2 >>> 0).toString(16) + (h1 >>> 0).toString(16);
}

function passStrength(pass) {
  const p = pass || "";
  let score = 0;
  if (p.length >= 8) score += 1;
  if (/[a-z]/.test(p) && /[A-Z]/.test(p)) score += 1;
  if (/\d/.test(p)) score += 1;
  if (/[^a-zA-Z0-9]/.test(p)) score += 1;
  if (p.length < 6) score = Math.min(score, 1);
  if (score <= 1) return { level: "weak", label: "Senha fraca — crie uma senha mais forte." };
  if (score === 2) return { level: "medium", label: "Senha média — dá para melhorar." };
  return { level: "strong", label: "Senha forte — muito bem!" };
}

function getUsers() { try { return JSON.parse(localStorage.getItem(USERS_KEY) || "{}"); } catch { return {}; } }
function saveUsers(u) { localStorage.setItem(USERS_KEY, JSON.stringify(u)); }
function currentUser() { return localStorage.getItem(SESSION_KEY) || null; }
function userKey() {
  const u = currentUser();
  return u ? `${STORAGE_KEY}_${u.toLowerCase()}` : STORAGE_KEY;
}
function logout() { localStorage.removeItem(SESSION_KEY); window.location.href = "login.html"; }

function getEntryPaths(profile) {
  // Compatível com contas antigas (entryPath string) e novas (entryPaths array)
  const p = profile || {};
  if (Array.isArray(p.entryPaths) && p.entryPaths.length) return p.entryPaths;
  if (typeof p.entryPath === "string" && p.entryPath) return [p.entryPath];
  return [];
}
const ENTRY_PATH_LABELS = { enem: "ENEM", vestibular: "Vestibular tradicional", militar: "Provas militares", concurso: "Concursos" };

function displayName(username) {
  // "maria.silva" → "Maria Silva" · "ana" → "Ana" · "joão pedro" → "João Pedro"
  const parts = ((username || "").split(/[._\- ]+/).filter(Boolean));
  const take = parts.slice(0, parts.length > 1 ? 2 : 1);
  const pretty = take.map((p) => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()).join(" ");
  return pretty || "estudante";
}

function maskBirthLive(value) {
  const d = ((value || "").replace(/\D/g, "")).slice(0, 8);
  let out = d.slice(0, 2);
  if (d.length > 2) out += "/" + d.slice(2, 4);
  if (d.length > 4) out += "/" + d.slice(4, 8);
  return out;
}
function validBirthdate(str) {
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(str || "");
  if (!m) return { ok: false, msg: "Data de nascimento no formato dd/mm/aaaa." };
  const day = +m[1], month = +m[2], year = +m[3];
  const dt = new Date(year, month - 1, day);
  if (dt.getFullYear() !== year || dt.getMonth() !== month - 1 || dt.getDate() !== day) return { ok: false, msg: "Data inválida. Confira dia, mês e ano." };
  const now = new Date();
  if (dt > now) return { ok: false, msg: "Data de nascimento não pode ser futura." };
  const hadBirthday = (now.getMonth() + 1 > month) || (now.getMonth() + 1 === month && now.getDate() >= day);
  const age = now.getFullYear() - year - (hadBirthday ? 0 : 1);
  if (age < 10 || age > 100) return { ok: false, msg: "Confira o ano de nascimento." };
  return { ok: true, value: str };
}

function migrateLegacyToUser(username) {
  const key = `${STORAGE_KEY}_${username.toLowerCase()}`;
  const hasUserData = localStorage.getItem(key);
  const legacy = localStorage.getItem(STORAGE_KEY);
  if (!hasUserData && legacy && legacy !== "{}") {
    localStorage.setItem(key, legacy);
  }
}

const OTP_KEY = "rotaAcademica_otp";
const OTP_TTL_MS = 5 * 60 * 1000;
const OTP_MAX_ATTEMPTS = 5;

// Envio real de e-mail via EmailJS (200 envios/mês grátis em emailjs.com).
// Preencha com suas chaves para ativar; vazio = envio desligado.
const EMAILJS_CONFIG = { publicKey: "", serviceId: "", templateId: "" };

async function deliverCodeEmail(toEmail, username, code) {
  if (!EMAILJS_CONFIG.publicKey || !EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId) return { ok: false, reason: "unconfigured" };
  try {
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: EMAILJS_CONFIG.serviceId,
        template_id: EMAILJS_CONFIG.templateId,
        user_id: EMAILJS_CONFIG.publicKey,
        template_params: { to_email: toEmail, to_name: username, code, app_name: "Rota Acadêmica" }
      })
    });
    return { ok: res.ok, reason: res.ok ? "" : "send-failed" };
  } catch { return { ok: false, reason: "network" }; }
}

function validEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test((v || "").trim()); }
function normalizePhone(v) {
  const d = ((v || "").replace(/\D/g, ""));
  const local = d.startsWith("55") && d.length > 11 ? d.slice(2) : d;
  if (local.length < 10 || local.length > 11) return null;
  return local;
}
function maskPhoneLive(value) {
  let d = (value || "").replace(/\D/g, "");
  if (d.startsWith("55") && d.length > 11) d = d.slice(2);
  d = d.slice(0, 11);
  if (!d) return "";
  if (d.length <= 2) return `(${d}`;
  const rest = d.slice(2);
  let out = `(${d.slice(0, 2)}) `;
  if (rest.length <= 4) return out + rest;
  if (d.length <= 10) return out + rest.slice(0, rest.length - 4) + "-" + rest.slice(-4);
  return out + rest.slice(0, 5) + "-" + rest.slice(5);
}
function maskEmail(email) {
  const [user, domain] = email.split("@");
  if (!domain) return "***";
  const head = user.slice(0, Math.min(2, user.length));
  return `${head}***@${domain}`;
}
function maskPhone(digits) {
  const d = digits.length === 11
    ? `(${digits.slice(0, 2)}) ${digits[2]}****-${digits.slice(7)}`
    : `(${digits.slice(0, 2)}) ****-${digits.slice(6)}`;
  return d;
}
function findAccount(users, identifier) {
  const id = (identifier || "").trim().toLowerCase();
  if (users[id]) return { username: id, acc: users[id] };
  const phone = normalizePhone(identifier);
  for (const [username, acc] of Object.entries(users)) {
    if (acc.email && acc.email.toLowerCase() === id) return { username, acc };
    if (phone && acc.phone === phone) return { username, acc };
  }
  return null;
}
function getOtps() { try { return JSON.parse(localStorage.getItem(OTP_KEY) || "{}"); } catch { return {}; } }
function saveOtps(o) { localStorage.setItem(OTP_KEY, JSON.stringify(o)); }
function issueCode(username, channel) {
  const code = String(Math.floor(100000 + Math.random() * 900000));
  const otps = getOtps();
  otps[username] = { code, channel, expiresAt: Date.now() + OTP_TTL_MS, attempts: 0 };
  saveOtps(otps);
  return code;
}
function verifyCode(username, input) {
  const otps = getOtps();
  const rec = otps[username];
  if (!rec) return { ok: false, msg: "Código expirado. Peça um novo." };
  if (Date.now() > rec.expiresAt) { delete otps[username]; saveOtps(otps); return { ok: false, msg: "Código expirado. Peça um novo." }; }
  if (rec.attempts >= OTP_MAX_ATTEMPTS) { delete otps[username]; saveOtps(otps); return { ok: false, msg: "Muitas tentativas. Peça um novo código." }; }
  rec.attempts += 1;
  saveOtps(otps);
  if (input.trim() !== rec.code) return { ok: false, msg: `Código incorreto (${OTP_MAX_ATTEMPTS - rec.attempts} tentativas restantes).` };
  delete otps[username];
  saveOtps(otps);
  return { ok: true };
}

function initLogin() {
  if (currentUser()) { window.location.href = "index.html"; return; }
  // Caixas sempre em branco ao acessar
  ["#login-user", "#login-email", "#login-phone", "#login-pass", "#login-code"].forEach((sel) => {
    const el = document.querySelector(sel);
    if (el) el.value = "";
  });
  const form = document.querySelector("#login-form");
  const modeLogin = document.querySelector("#mode-login");
  const modeRegister = document.querySelector("#mode-register");
  const title = document.querySelector("#login-title");
  const sub = document.querySelector("#login-sub");
  const submit = document.querySelector("#login-submit");
  const err = document.querySelector("#login-error");
  const labelEmail = document.querySelector("#label-login-email");
  const labelPhone = document.querySelector("#label-login-phone");
  const stepChannel = document.querySelector("#step-channel");
  const stepCode = document.querySelector("#step-code");
  const passInput = document.querySelector("#login-pass");
  const passBox = document.querySelector("#pass-meter-box");
  const passFill = document.querySelector("#pass-meter-fill");
  const passLabel = document.querySelector("#pass-label");
  let mode = "login";
  let pendingUser = null;

  function refreshMeter() {
    const r = passStrength(passInput.value);
    passFill.className = r.level === "weak" ? "pass-weak" : r.level === "medium" ? "pass-medium" : "pass-strong";
    passLabel.textContent = passInput.value ? r.label : "";
    passLabel.style.color = r.level === "weak" ? "#b3261e" : r.level === "medium" ? "#8a5a00" : "var(--green)";
  }
  passInput.addEventListener("input", refreshMeter);

  function showStep(n) {
    form.hidden = n !== 1;
    stepChannel.hidden = n !== 2;
    stepCode.hidden = n !== 3;
  }
  function fail(msg) { err.textContent = msg; err.hidden = false; }

  const contactChoice = document.querySelector("#contact-choice");
  const contactEmailBtn = document.querySelector("#contact-email-btn");
  const contactPhoneBtn = document.querySelector("#contact-phone-btn");
  const loginUserInput = document.querySelector("#login-user");
  const loginUserLabel = document.querySelector("#label-login-user");
  const emailInput = document.querySelector("#login-email");
  const phoneInput = document.querySelector("#login-phone");
  const passFieldLabel = document.querySelector("#label-login-pass");
  let contactMethod = null; // entrar: escolha única
  let regContacts = new Set(); // criar conta: pode marcar ambos

  function paintContactButtons() {
    const isActive = (m) => mode === "register" ? regContacts.has(m) : contactMethod === m;
    contactEmailBtn.classList.toggle("button-primary", isActive("email"));
    contactEmailBtn.classList.toggle("button-ghost", !isActive("email"));
    contactPhoneBtn.classList.toggle("button-primary", isActive("phone"));
    contactPhoneBtn.classList.toggle("button-ghost", !isActive("phone"));
  }

  function updatePassVisibility() {
    if (mode !== "register") return;
    const vals = [];
    if (regContacts.has("email")) vals.push(emailInput.value);
    if (regContacts.has("phone")) vals.push(phoneInput.value);
    const show = vals.some((v) => v.trim().length >= 3);
    passFieldLabel.hidden = !show;
    passBox.hidden = !show;
  }
  emailInput.addEventListener("input", updatePassVisibility);
  phoneInput.addEventListener("input", updatePassVisibility);
  phoneInput.addEventListener("input", () => {
    const masked = maskPhoneLive(phoneInput.value);
    if (masked !== phoneInput.value) phoneInput.value = masked;
  });
  loginUserInput.addEventListener("input", () => {
    // Primeira letra maiúscula em cada palavra do nome de usuário
    const fixed = loginUserInput.value.replace(/(^|[\s._-]+)(\p{L})/gu, (m, sep, ch) => sep + ch.toUpperCase());
    if (fixed !== loginUserInput.value) loginUserInput.value = fixed;
  });

  function refreshContactFields() {
    const showUser = mode === "register";
    const showEmail = mode === "register" ? regContacts.has("email") : contactMethod === "email";
    const showPhone = mode === "register" ? regContacts.has("phone") : contactMethod === "phone";
    loginUserLabel.hidden = !showUser;
    loginUserInput.required = showUser;
    labelEmail.hidden = !showEmail;
    labelPhone.hidden = !showPhone;
    emailInput.required = showEmail;
    phoneInput.required = showPhone;
    err.hidden = true;
    if (mode === "register") updatePassVisibility();
  }
  function setContact(method) {
    // Entrar: escolha única
    contactMethod = method;
    paintContactButtons();
    refreshContactFields();
  }
  function onContactBtn(method) {
    if (mode === "register") {
      // Criar conta: e-mail e/ou telefone (usuário é sempre pedido no campo próprio)
      regContacts.has(method) ? regContacts.delete(method) : regContacts.add(method);
      paintContactButtons();
      refreshContactFields();
    } else {
      setContact(method);
    }
  }
  contactEmailBtn.addEventListener("click", () => onContactBtn("email"));
  contactPhoneBtn.addEventListener("click", () => onContactBtn("phone"));

  function setMode(m) {
    mode = m;
    const isLogin = m === "login";
    modeLogin.classList.toggle("selected", isLogin);
    modeRegister.classList.toggle("selected", !isLogin);
    title.textContent = isLogin ? "Bem-vindo de volta." : "Crie sua conta.";
    sub.textContent = isLogin ? "Escolha entrar com e-mail, telefone ou usuário e confirme sua senha." : "Crie seu usuário, marque e-mail e/ou telefone e só então crie a senha.";
    submit.textContent = isLogin ? "Continuar →" : "Criar conta →";
    contactChoice.hidden = false;
    loginUserInput.required = !isLogin;
    if (isLogin) {
      setContact("email");
      passFieldLabel.hidden = false;
      passBox.hidden = true;
    } else {
      regContacts = new Set(["email"]);
      paintContactButtons();
      refreshContactFields();
      passFieldLabel.hidden = true;
      passBox.hidden = true;
    }
    loginUserInput.placeholder = "ex.: maria.silva";
    document.querySelector("#label-login-user").childNodes[0].textContent = "Nome de usuário";
    err.hidden = true;
    showStep(1);
  }
  modeLogin.addEventListener("click", () => setMode("login"));
  modeRegister.addEventListener("click", () => setMode("register"));
  setMode("login");

  function startSession(username) {
    migrateLegacyToUser(username);
    localStorage.setItem(SESSION_KEY, username);
    window.location.href = "index.html";
  }

  function goChannel(username, acc) {
    pendingUser = username;
    const opts = [];
    if (acc.email) opts.push({ channel: "email", label: `E-mail ${maskEmail(acc.email)}` });
    if (acc.phone) opts.push({ channel: "phone", label: `Telefone ${maskPhone(acc.phone)}` });
    if (!opts.length) { startSession(username); return; } // conta antiga sem contato
    document.querySelector("#channel-options").innerHTML = opts.map((o, i) => `<label class="option"><input type="radio" name="channel" value="${o.channel}" ${i === 0 ? "checked" : ""}><span class="option-mark"></span><span class="option-text">${o.label}</span></label>`).join("");
    showStep(2);
  }

  async function sendCode() {
    const users = getUsers();
    const acc = users[pendingUser];
    if (!acc) return;
    const channel = (document.querySelector('input[name="channel"]:checked') || {}).value || "email";
    const statusBox = document.querySelector("#send-status");
    const code = issueCode(pendingUser, channel);
    const dest = channel === "email" ? maskEmail(acc.email) : maskPhone(acc.phone);
    document.querySelector("#code-sent-to").textContent = `Código válido por 5 minutos para ${dest}.`;
    document.querySelector("#login-code").value = "";
    document.querySelector("#code-error").hidden = true;
    statusBox.hidden = false;
    if (channel === "phone") {
      statusBox.innerHTML = `<p class="eyebrow">CÓDIGO PARA ACESSO POR TELEFONE</p><p style="margin:0">Como o SMS ainda não está ativo, seu código aparece aqui: <strong style="font-size:1.4rem;letter-spacing:.2em">${code}</strong></p><p class="ranking-note" style="margin:8px 0 0">Válido por 5 minutos. Digite abaixo para entrar.</p>`;
      showStep(3);
      return;
    }
    statusBox.innerHTML = `<p class="eyebrow">ENVIANDO…</p><p style="margin:0">Enviando código para seu e-mail…</p>`;
    showStep(3);
    const sent = await deliverCodeEmail(acc.email, pendingUser, code);
    if (sent.ok) {
      statusBox.innerHTML = `<p class="eyebrow">CÓDIGO ENVIADO</p><p style="margin:0">Confira a caixa de entrada (e o spam) de ${dest}.</p>`;
    } else {
      statusBox.innerHTML = `<p class="eyebrow">ENVIO NÃO CONFIGURADO</p><p style="margin:0">O e-mail automático ainda não foi ativado neste site: crie uma conta grátis em <a href="https://www.emailjs.com" target="_blank" rel="noopener">emailjs.com</a> (200 envios/mês), conecte seu Gmail, crie um template com as variáveis <strong>{{to_email}}</strong>, <strong>{{to_name}}</strong> e <strong>{{code}}</strong> (campo "Para" = {{to_email}}) e preencha as 3 chaves em EMAILJS_CONFIG no script.js. Depois disso o código chega de verdade no e-mail.</p>`;
    }
  }

  document.querySelector("#channel-back").addEventListener("click", () => showStep(1));
  document.querySelector("#channel-send").addEventListener("click", sendCode);
  document.querySelector("#code-back").addEventListener("click", () => showStep(2));
  document.querySelector("#code-resend").addEventListener("click", sendCode);
  document.querySelector("#code-verify").addEventListener("click", () => {
    const codeErr = document.querySelector("#code-error");
    const res = verifyCode(pendingUser, document.querySelector("#login-code").value);
    if (!res.ok) { codeErr.textContent = res.msg; codeErr.hidden = false; return; }
    startSession(pendingUser);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    err.hidden = true;
    const users = getUsers();
    if (mode === "register") {
      const username = document.querySelector("#login-user").value.trim().toLowerCase();
      let emailRaw = document.querySelector("#login-email").value;
      let phoneRaw = document.querySelector("#login-phone").value;
      const pass = document.querySelector("#login-pass").value;
      if (!/^(?=.*[\p{L}0-9])[\p{L}0-9._~\- ]{3,}$/u.test(username)) return fail("Usuário: mínimo 3 caracteres — vale nome com espaço e acento (ex.: maria silva, josé~). Evite símbolos como @ ! # $ %.");
      if (!regContacts.size) return fail("Marque e-mail e/ou telefone para confirmar seus acessos.");
      let email = "", phone = "";
      if (regContacts.has("email")) {
        emailRaw = emailRaw.trim();
        if (!emailRaw) return fail("Informe seu e-mail.");
        if (!validEmail(emailRaw)) return fail("E-mail inválido.");
        email = emailRaw.toLowerCase();
      }
      if (regContacts.has("phone")) {
        phoneRaw = phoneRaw.trim();
        if (!phoneRaw) return fail("Informe seu telefone com DDD.");
        phone = normalizePhone(phoneRaw);
        if (!phone) return fail("Telefone inválido. Use DDD + número (10 ou 11 dígitos).");
      }
      if (pass.length < 4) return fail("Senha: mínimo 4 caracteres.");
      if (passStrength(pass).level === "weak") return fail("Senha fraca — crie uma senha mais forte: 8+ caracteres com maiúsculas, números e símbolos.");
      if (users[username]) return fail("Esse usuário já existe. Entre na aba Entrar.");
      for (const [u, a] of Object.entries(users)) {
        if (email && a.email === email) return fail("Esse e-mail já está em uso.");
        if (phone && a.phone === phone) return fail("Esse telefone já está em uso.");
      }
      users[username] = { passHash: hashPass(username + ":" + pass), email, phone: phone || "", createdAt: new Date().toISOString() };
      saveUsers(users);
      startSession(username);
    } else {
      const identifier = contactMethod === "phone" ? document.querySelector("#login-phone").value : document.querySelector("#login-email").value;
      const pass = document.querySelector("#login-pass").value;
      if (!identifier.trim()) return fail(contactMethod === "phone" ? "Informe seu telefone." : "Informe seu e-mail.");
      const found = findAccount(users, identifier);
      if (!found) return fail("Não achamos conta com esse dado. Confira ou crie a conta.");
      if (found.acc.passHash !== hashPass(found.username + ":" + pass)) return fail("Senha incorreta. Confira maiúsculas/minúsculas e tente de novo.");
      goChannel(found.username, found.acc);
    }
  });
}

function initAuthUI() {
  const user = currentUser();
  document.querySelectorAll("[data-user-chip]").forEach((el) => { el.textContent = user ? `👤 ${user}` : ""; });
  document.querySelectorAll("[data-logout]").forEach((btn) => btn.addEventListener("click", logout));
}

const THEME_KEY = "rotaAcademica_theme";
function currentTheme() { try { return localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light"; } catch { return "light"; } }
function applyTheme(t) {
  if (t === "dark") document.documentElement.dataset.theme = "dark";
  else delete document.documentElement.dataset.theme;
  document.querySelectorAll("[data-theme-toggle]").forEach((b) => { b.textContent = t === "dark" ? "☀️" : "🌙"; });
}
function initTheme() {
  applyTheme(currentTheme());
  document.querySelectorAll("[data-theme-toggle]").forEach((b) => b.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    try { localStorage.setItem(THEME_KEY, next); } catch { /* sem armazenamento */ }
    applyTheme(next);
  }));
}

function guardAuth(page) {
  if (page === "login") return true;
  if (!currentUser()) { window.location.href = "login.html"; return false; }
  return true;
}

function initQuestionnaire() {
  let current = 0;
  const data = getData();
  // Sempre começa em branco: não restaura marcas anteriores
  const answers = {};
  const isMilitar = getEntryPaths(data.profile).includes("militar");
  const locationQ = questions.find((q) => q.type === "location");
  const qlist = isMilitar ? [...militaryQuestions, locationQ] : questions;
  const content = document.querySelector("#question-content");
  const next = document.querySelector("#next-question");
  const previous = document.querySelector("#previous-question");
  const progress = document.querySelector("#progress-bar");
  const progressText = document.querySelector("#progress-text");
  if (isMilitar) {
    const g = document.querySelector("#profile-greeting");
    if (g) g.textContent = "Trilha militar: 4 perguntas objetivas.";
    const ctx = document.querySelector("#profile-context");
    if (ctx) ctx.textContent = "Só Força, ingresso, área e matéria — sem o questionário longo do ENEM. No fim, escolha a região para ver o plano no estilo da banca.";
  }

  function getSelectedArray(qid) {
    const v = answers[qid];
    if (Array.isArray(v)) return v;
    if (typeof v === "number") return [v];
    return [];
  }

  // Regiões começam vazias a cada acesso (sem restaurar marcas anteriores)
  let regionList = [];

  function saveCurrentAnswer() {
    const question = qlist[current];
    if (question.type === "location") {
      const state = document.querySelector("#location-state").value;
      const city = document.querySelector("#location-city").value;
      if (state && city && !regionList.some((r) => r.state === state && r.city === city)) regionList.push({ state, city });
      if (!regionList.length) return false;
      answers.locations = regionList;
      answers.location = regionList[0];
    } else {
      const checked = [...document.querySelectorAll(`input[name="${question.id}"]:checked`)].map((el) => Number(el.value));
      if (!checked.length) return false;
      answers[question.id] = checked;
    }
    return true;
  }

  function render() {
    const question = qlist[current];
    progress.style.width = `${((current + 1) / qlist.length) * 100}%`;
    progressText.textContent = `Pergunta ${current + 1} de ${qlist.length}${isMilitar && current < militaryQuestions.length ? " · Foco militar" : ""}`;
    previous.disabled = current === 0;
    next.textContent = current === qlist.length - 1 ? "Ver resultados →" : "Próxima →";
    if (question.type === "location") {
      const states = [...new Set(institutions.filter((institution) => courses.some((course) => course.name === institution.course)).map((institution) => institution.state))].sort();
      const location = answers.location || {};
      content.innerHTML = `<p class="question-number">PERGUNTA ${current + 1}</p><h2 class="question-title">${question.title}</h2><p class="question-help">${question.help} Adicione quantas regiões quiser.</p><div class="location-selects"><label class="field-label">Estado<select id="location-state"><option value="">Selecione</option>${states.map((state) => `<option value="${state}" ${location.state === state ? "selected" : ""}>${state}</option>`).join("")}</select></label><label class="field-label">Cidade<select id="location-city"><option value="">Selecione o estado primeiro</option></select></label></div><button id="add-region" class="button button-ghost" type="button" style="margin-top:12px;min-height:42px">＋ Adicionar esta região</button><div id="region-chips" class="source-list" style="margin-top:12px">${regionList.map((r, i) => `<span class="pill">${r.city}/${r.state} <button type="button" data-remove-region="${i}" aria-label="Remover ${r.city}" style="border:0;background:none;color:inherit;font-weight:700;cursor:pointer">×</button></span>`).join("")}</div>`;
      const stateSelect = document.querySelector("#location-state");
      const citySelect = document.querySelector("#location-city");
      const updateCities = () => {
        const cities = [...new Set(institutions.filter((item) => item.state === stateSelect.value && courses.some((course) => course.name === item.course)).map((item) => item.city))].sort();
        citySelect.innerHTML = `<option value="">Selecione</option>${cities.map((city) => `<option value="${city}" ${location.city === city ? "selected" : ""}>${city}</option>`).join("")}`;
      };
      stateSelect.addEventListener("change", updateCities);
      if (location.state) updateCities();
      document.querySelector("#add-region").addEventListener("click", () => {
        const s = stateSelect.value, c = citySelect.value;
        if (!s || !c) { alert("Escolha estado e cidade antes de adicionar."); return; }
        if (regionList.some((r) => r.state === s && r.city === c)) { alert("Essa região já foi adicionada."); return; }
        regionList.push({ state: s, city: c });
        render();
      });
      content.querySelector("#region-chips").addEventListener("click", (e) => {
        const btn = e.target.closest("[data-remove-region]");
        if (!btn) return;
        regionList.splice(Number(btn.dataset.removeRegion), 1);
        render();
      });
      return;
    }
    content.innerHTML = `<p class="question-number">PERGUNTA ${current + 1}</p><h2 class="question-title">${question.title}</h2><p class="question-help">${question.help} Você pode marcar quantas opções quiser.</p><div class="options">${question.options.map(([label], index) => `<label class="option"><input type="checkbox" name="${question.id}" value="${index}" ${getSelectedArray(question.id).includes(index) ? "checked" : ""}><span class="option-mark option-checkbox"></span><span class="option-text">${label}</span></label>`).join("")}</div>`;
  }

  next.addEventListener("click", () => {
    if (!saveCurrentAnswer()) { alert("Escolha pelo menos uma opção para continuar. Você pode marcar várias."); return; }
    if (current === qlist.length - 1) { saveData({ ...data, answers }); window.location.href = "resultados.html"; return; }
    current += 1;
    render();
  });
  previous.addEventListener("click", () => { if (current > 0) { current -= 1; render(); } });
  render();
}

function normalizeIndices(value) {
  if (Array.isArray(value)) return value.filter((v) => Number.isInteger(v) && v >= 0);
  if (typeof value === "number" && Number.isInteger(value) && value >= 0) return [value];
  return [];
}

// Pesos por pergunta: matéria e projeção futura valem mais; resto equilibra perfil.
const QUESTION_WEIGHTS = {
  subject: 3.0,
  interest: 1.6,
  future: 1.6,
  workStyle: 1.4,
  impact: 1.4,
  routine: 1.3,
  challenge: 1.3,
  environment: 1.2,
  expression: 1.2,
  strength: 1.1,
  mil_force: 1.8,
  mil_entry: 1.8,
  mil_area: 1.6,
  mil_study: 2.0
};

// Ajuste fino por objetivo da página inicial (extrai mais sinal das respostas).
const ENTRY_PATH_AREA_BOOST = {
  militar: { engenharias: 0.18, tecnologia: 0.12, saude: 0.10, exatas: 0.08, juridicas: 0.06, gestao: 0.05 },
  concurso: { juridicas: 0.22, gestao: 0.12, educacao: 0.10, saude: 0.10, sociais: 0.08, humanas: 0.05 },
  enem: {},
  vestibular: {}
};

function computeAreaScores(answers, profile) {
  const allQs = [...militaryQuestions, ...questions];
  const areas = new Set(allQs.flatMap((question) => question.options?.flatMap(([, scores]) => Object.keys(scores)) || []));
  const scores = Object.fromEntries([...areas].map((area) => [area, 0]));
  // Teto possível por área (se marcasse tudo): corrige viés de áreas com mais opções.
  const maxPossible = Object.fromEntries([...areas].map((area) => [area, 0]));
  allQs.filter((question) => question.options).forEach((question) => {
    const w = QUESTION_WEIGHTS[question.id] || 1;
    const dilutionAll = 1 / Math.sqrt(question.options.length);
    question.options.forEach(([, pts]) => {
      Object.entries(pts).forEach(([area, points]) => {
        maxPossible[area] += points * w * dilutionAll;
      });
    });
  });
  // Para auditoria: quanto cada pergunta contribuiu para cada área
  const perQuestion = {};

  allQs.filter((question) => question.options).forEach((question) => {
    const indices = normalizeIndices(answers[question.id]).filter((i) => i < question.options.length);
    if (!indices.length) return;
    const w = QUESTION_WEIGHTS[question.id] || 1;
    // Divide o peso quando marcam várias opções (evita "marcar tudo = tudo combina").
    // Usa raiz quadrada: marcar 2 coerentes ainda soma mais que 1, mas marcar 6 dilui.
    const dilution = 1 / Math.sqrt(indices.length);
    perQuestion[question.id] = {};
    indices.forEach((idx) => {
      const opt = question.options[idx];
      if (!opt) return;
      const [, pts] = opt;
      Object.entries(pts).forEach(([area, points]) => {
        const add = points * w * dilution;
        scores[area] += add;
        perQuestion[question.id][area] = (perQuestion[question.id][area] || 0) + add;
      });
    });
  });

  // Normaliza 0..1 pelo teto possível (extrai o máximo relativo de cada resposta).
  Object.keys(scores).forEach((area) => {
    scores[area] = maxPossible[area] > 0 ? scores[area] / maxPossible[area] : 0;
  });

  // Bônus combinados dos objetivos (pega o maior por área, sem acumular em excesso)
  const pathBoosts = getEntryPaths(profile).map((k) => ENTRY_PATH_AREA_BOOST[k] || {});
  const boost = {};
  pathBoosts.forEach((b) => Object.entries(b).forEach(([area, pct]) => { boost[area] = Math.max(boost[area] || 0, pct); }));
  Object.entries(boost).forEach(([area, pct]) => {
    if (scores[area] !== undefined) scores[area] *= (1 + pct);
  });

  return { scores, perQuestion };
}

function buildReasons(course, answers, perQuestion) {
  const reasons = [];
  const allQs = [...militaryQuestions, ...questions];
  const labelById = Object.fromEntries(allQs.map((q) => [q.id, q.title]));
  allQs.filter((q) => q.options && perQuestion[q.id]).forEach((q) => {
    const contrib = course.areas.reduce((s, a) => s + (perQuestion[q.id][a] || 0), 0);
    if (contrib <= 0) return;
    const indices = normalizeIndices(answers[q.id]).filter((i) => i < q.options.length);
    const picked = indices.map((i) => q.options[i][0]).slice(0, 2).join("; ");
    if (picked) reasons.push({ qid: q.id, title: labelById[q.id], picked, contrib });
  });
  reasons.sort((a, b) => b.contrib - a.contrib);
  return reasons.slice(0, 3);
}

function calculateCourses(answers, profile) {
  const { scores, perQuestion } = computeAreaScores(answers, profile || {});
  const maxArea = Math.max(1, ...Object.values(scores));

  return courses.map((course) => {
    const [a0, a1] = course.areas;
    const s0 = scores[a0] || 0;
    const s1 = scores[a1] || 0;
    const avg = (s0 + s1) / 2;
    // Cobertura: curso que combina nas DUAS áreas ganha bônus; curso com uma área zerada é penalizado.
    const coverage = maxArea > 0 ? Math.min(s0, s1) / maxArea : 0;
    const balance = (s0 > 0 && s1 > 0) ? 1 + 0.25 * Math.min(1, coverage * 2) : 0.75;
    const raw = avg * balance;
    const reasons = buildReasons(course, answers, perQuestion);
    return { ...course, score: Math.round(raw * 100) / 100, areaScores: { [a0]: Math.round(s0 * 100) / 100, [a1]: Math.round(s1 * 100) / 100 }, reasons };
  }).sort((a, b) => b.score - a.score).map((c, _, arr) => {
    const top = Math.max(0.001, arr[0]?.score || 0.001);
    return { ...c, affinity: Math.max(1, Math.round((c.score / top) * 100)) };
  });
}

function calculateMilitary(answers) {
  const forces = normalizeIndices(answers.mil_force);
  const entries = normalizeIndices(answers.mil_entry);
  const areasSel = normalizeIndices(answers.mil_area);
  const dil = (arr) => arr.length ? 1 / Math.sqrt(arr.length) : 0;
  const fDil = dil(forces), eDil = dil(entries), aDil = dil(areasSel);

  return militaryCareers.map((career) => {
    let raw = 0;
    const why = [];
    forces.forEach((fi) => {
      if (MIL_FORCE_LABELS[fi] === career.force) { raw += 3 * fDil; why.push(MIL_FORCE_LABELS[fi]); }
    });
    entries.forEach((ei) => {
      if ((MIL_ENTRY_LEVELS[ei] || []).some((lv) => career.levels.includes(lv))) { raw += 3 * eDil; why.push(militaryQuestions[1].options[ei][0].split("(")[0].trim()); }
    });
    areasSel.forEach((ai) => {
      const tags = MIL_AREA_TAGS[ai] || [];
      const hit = tags.filter((t) => career.areas.includes(t));
      if (hit.length) { raw += 2 * hit.length * aDil; why.push(militaryQuestions[2].options[ai][0].split("(")[0].trim()); }
    });
    // Bônus leve para quem tem base de exatas quando a carreira é técnica
    return { ...career, score: Math.round(raw * 100) / 100, reasons: [...new Set(why)].slice(0, 3) };
  }).sort((a, b) => b.score - a.score).map((c, _, arr) => {
    const top = Math.max(0.01, arr[0]?.score || 0.01);
    return { ...c, affinity: Math.max(1, Math.round((c.score / top) * 100)) };
  });
}

// Faixas de referência (privadas, Brasil, 2025 — SEMPRE confirme na instituição).
const TUITION_BY_AREA = {
  saude: "R$ 1.200–2.500/mês", juridicas: "R$ 1.200–2.200/mês", engenharias: "R$ 1.500–2.800/mês",
  tecnologia: "R$ 1.000–2.000/mês", gestao: "R$ 800–1.600/mês", educacao: "R$ 700–1.400/mês",
  humanas: "R$ 800–1.500/mês", sociais: "R$ 800–1.500/mês", linguagens: "R$ 800–1.600/mês",
  artes: "R$ 1.000–1.800/mês", exatas: "R$ 800–1.500/mês", biologicas: "R$ 1.000–1.700/mês",
  agrarias: "R$ 1.200–2.200/mês"
};
const TUITION_OVERRIDE = {
  "Medicina": "R$ 8.000–13.000/mês", "Odontologia": "R$ 3.500–5.500/mês", "Medicina Veterinária": "R$ 2.500–4.000/mês",
  "Direito": "R$ 1.500–2.800/mês", "Psicologia": "R$ 1.200–2.000/mês", "Arquitetura e Urbanismo": "R$ 1.500–2.500/mês",
  "Engenharia Civil": "R$ 1.500–2.800/mês", "Engenharia Elétrica": "R$ 1.500–2.800/mês", "Engenharia Mecânica": "R$ 1.500–2.800/mês",
  "Agronomia": "R$ 1.500–2.500/mês", "Farmácia": "R$ 1.000–1.800/mês", "Enfermagem": "R$ 1.000–1.800/mês",
  "Fisioterapia": "R$ 1.200–2.000/mês", "Biomedicina": "R$ 1.200–2.000/mês", "Cinema e Audiovisual": "R$ 1.200–2.000/mês",
  "Ciência de Dados": "R$ 1.200–2.200/mês", "Ciência da Computação": "R$ 1.200–2.200/mês", "Engenharia de Software": "R$ 1.200–2.200/mês",
  "Análise e Desenvolvimento de Sistemas": "R$ 700–1.500/mês", "Jornalismo": "R$ 1.000–1.800/mês", "Publicidade e Propaganda": "R$ 1.000–1.800/mês"
};
// Nota ENEM/SISU de referência (ampla concorrência, edições recentes — varia por ano/cota).
const CUTOFF_BY_AREA = {
  saude: "620–700", juridicas: "650–720", engenharias: "640–720", tecnologia: "620–700", gestao: "580–660",
  educacao: "550–640", humanas: "580–650", sociais: "570–640", linguagens: "570–650", artes: "600–680",
  exatas: "600–680", biologicas: "600–680", agrarias: "620–700"
};
const CUTOFF_OVERRIDE = {
  "Medicina": "780–830", "Odontologia": "700–750", "Medicina Veterinária": "700–750", "Direito": "700–780",
  "Psicologia": "680–730", "Arquitetura e Urbanismo": "670–730", "Engenharia Aeroespacial": "700–760",
  "Engenharia Naval": "700–760", "Ciência da Computação": "680–740", "Ciência de Dados": "660–720",
  "Engenharia de Computação": "680–740", "Jornalismo": "650–720", "Relações Internacionais": "680–740",
  "Ciências Econômicas": "650–720", "Estatística": "640–710", "Oceanografia": "640–700", "Agronomia": "640–710"
};
// Nota de vestibular tradicional de referência (1ª fase estilo FUVEST/UNICAMP, 90 questões).
const VEST_BY_AREA = {
  saude: "60–70% da 1ª fase", juridicas: "65–75% da 1ª fase", engenharias: "60–70% da 1ª fase",
  tecnologia: "58–68% da 1ª fase", gestao: "55–65% da 1ª fase", educacao: "45–58% da 1ª fase",
  humanas: "55–65% da 1ª fase", sociais: "55–65% da 1ª fase", linguagens: "52–62% da 1ª fase",
  artes: "55–65% da 1ª fase (+ prova de habilidades em alguns)", exatas: "55–68% da 1ª fase",
  biologicas: "55–65% da 1ª fase", agrarias: "55–65% da 1ª fase"
};
const VEST_OVERRIDE = {
  "Medicina": "76–82/90 + 2ª fase discursiva pesada", "Odontologia": "65–70/90", "Medicina Veterinária": "65–70/90",
  "Direito": "68–74/90", "Psicologia": "65–72/90", "Relações Internacionais": "65–72/90",
  "Ciências Econômicas": "62–70/90", "Jornalismo": "62–68/90", "Arquitetura e Urbanismo": "60–66/90 + prova de habilidades",
  "Engenharia Civil": "60–68/90", "Engenharia Elétrica": "60–68/90", "Engenharia Mecânica": "60–68/90",
  "Engenharia de Computação": "60–68/90", "Engenharia de Produção": "58–66/90", "Engenharia Química": "60–68/90",
  "Ciência da Computação": "60–68/90", "Sistemas de Informação": "55–63/90", "Ciência de Dados": "58–66/90",
  "Administração": "58–65/90", "Enfermagem": "55–62/90", "Farmácia": "55–62/90", "Fisioterapia": "58–65/90",
  "História": "55–62/90", "Pedagogia": "45–55/90"
};
function courseVestib(course) {
  return VEST_OVERRIDE[course.name] || VEST_BY_AREA[course.areas[0]] || "Varia por instituição — consulte o edital";
}
const CPC_LABEL = { 5: "Excelente", 4: "Bom", 3: "Satisfatório", 2: "Insuficiente", 1: "Insatisfatório" };
function courseTuition(course, type) {
  if (type === "Federal" || type === "Estadual") return "Gratuita (pública)";
  const band = TUITION_OVERRIDE[course.name] || TUITION_BY_AREA[course.areas[0]] || "A consultar";
  return `${band}*`;
}
function courseCutoff(course) {
  return CUTOFF_OVERRIDE[course.name] || CUTOFF_BY_AREA[course.areas[0]] || "A consultar";
}
function courseDuration(name) {
  if (/medicina$/i.test(name)) return "6 anos";
  if (/^direito$/i.test(name)) return "5 anos";
  if (/engenharia|arquitetura/i.test(name)) return "5 anos";
  if (/análise e desenvolvimento/i.test(name)) return "2,5 anos";
  if (/licenciatura/i.test(name)) return "4 anos";
  return "4 anos (confirme na grade)";
}

function initResults() {
  const data = getData();
  if (!data.answers) { window.location.href = "questionario.html"; return; }
  const isMilitar = getEntryPaths(data.profile).includes("militar");
  const ranked = calculateCourses(data.answers, data.profile);
  const milRanked = isMilitar ? calculateMilitary(data.answers) : [];
  let selectedMilitary = data.selectedMilitary || null;
  const TOP_N = 9;
  let expanded = false;
  const container = document.querySelector("#course-results");
  const section = document.querySelector("#institution-section");
  const stateFilter = document.querySelector("#state-filter");
  const cityFilter = document.querySelector("#city-filter");
  const typeFilter = document.querySelector("#type-filter");
  let chosenCourse = data.selectedCourse || null;
  const COMPARE_MAX = 4;
  let compareKeys = Array.isArray(data.compareKeys) ? [...data.compareKeys] : [];
  const instKey = (item) => `${item.acronym}|${item.city}|${item.state}`;

  // Trilha militar: só carreiras militares, sem cursos nem faculdades
  if (isMilitar) {
    const milBox = document.querySelector("#military-results");
    const milSection = document.querySelector("#military-section");
    const coursesSection = document.querySelector("#courses-section");
    if (coursesSection) coursesSection.hidden = true;
    if (section) section.hidden = true;
    const introNote = document.querySelector(".results-intro .ranking-note");
    if (introNote) introNote.hidden = true;
    if (milBox && milSection) {
      milSection.hidden = false;
      const top3 = milRanked.slice(0, 3);
      document.querySelector("#profile-summary").textContent = top3.length ? `Trilha militar: seu pódio é ${top3.map((m) => m.name).join(" • ")}. Escolha uma carreira para ver o plano no estilo da banca.` : "Responda às perguntas militares para ver sua carreira ideal.";
      milBox.innerHTML = milRanked.slice(0, 6).map((m) => `<button class="course-card ${selectedMilitary === m.id ? "selected" : ""}" type="button" data-military="${m.id}"><span class="course-score">${m.force.toUpperCase()} · ${m.affinity}% AFINIDADE</span><h3>${m.name}</h3><p>${m.description}</p><p class="match-why"><strong>Banca:</strong> ${m.board}</p><strong>${selectedMilitary === m.id ? "Selecionada ✓" : "Escolher esta carreira →"}</strong></button>`).join("");
      milBox.onclick = (event) => {
        const card = event.target.closest("[data-military]");
        if (!card) return;
        selectedMilitary = card.dataset.military;
        saveData({ ...getData(), selectedMilitary });
        milBox.querySelectorAll(".course-card").forEach((c) => c.classList.toggle("selected", c.dataset.military === selectedMilitary));
      };
      const goBtn = document.querySelector("#military-continue");
      if (goBtn) goBtn.onclick = () => {
        if (!selectedMilitary) { alert("Escolha uma carreira militar para continuar."); return; }
        saveData({ ...getData(), selectedMilitary });
        window.location.href = "carreira.html";
      };
    }
    return;
  }

  const strong = ranked.filter((c) => c.affinity >= 35);
  const goals = getEntryPaths(data.profile).map((k) => ENTRY_PATH_LABELS[k] || k).join(" + ");
  document.querySelector("#profile-summary").textContent = `Cruzamos suas 10 respostas (matéria, interesse, rotina, ambiente e mais)${goals ? ` + seus objetivos (${goals})` : ""}: ${strong.slice(0, 3).map((course) => course.name).join(", ") || ranked.slice(0, 3).map((c) => c.name).join(", ")} lideram. ${strong.length} de ${ranked.length} cursos têm afinidade relevante (≥35%).`;

  function renderCourses() {
    // Ordem SEMPRE do maior para o menor afinidade (vitrine e ranking completo).
    // Na vitrine, no máximo 3 cursos da mesma área principal, sem furar fila:
    // o escolhido também entra na posição real dele.
    let list;
    if (expanded) {
      list = ranked;
    } else {
      const perArea = {};
      list = [];
      for (const c of ranked) {
        if (c.name !== chosenCourse) {
          const k = c.areas[0];
          perArea[k] = (perArea[k] || 0) + 1;
          if (perArea[k] > 3) continue;
        }
        list.push(c);
        if (list.length >= TOP_N) break;
      }
      list = list.slice(0, TOP_N);
    }
    container.innerHTML = list.map((course) => {
      const rank = ranked.indexOf(course) + 1;
      const why = (course.reasons || []).map((r) => `${r.picked}`).slice(0, 2).join(" • ");
      return `<button class="course-card ${chosenCourse === course.name ? "selected" : ""}" type="button" data-course="${course.name}"><span class="course-score">${rank}ª · ${course.affinity}% AFINIDADE</span><h3>${course.name}</h3><p>${course.description}</p>${why ? `<p class="match-why"><strong>Por que combina:</strong> ${why}</p>` : ""}<div class="affinity-bar"><span style="width:${course.affinity}%"></span></div><strong>Comparar instituições →</strong></button>`;
    }).join("") + (ranked.length > TOP_N ? `<button class="button button-ghost courses-toggle" type="button" data-expand="${expanded ? "less" : "more"}">${expanded ? "Ver menos ↑" : `Ver ranking completo (${ranked.length} cursos) ↓`}</button>` : "");
  }
  renderCourses();

  function populateStates() {
    const states = [...new Set(institutions.filter((item) => item.course === chosenCourse).map((item) => item.state))].sort();
    const preferred = data.answers.location?.state || "";
    stateFilter.innerHTML = `<option value="">Todos os estados</option>${states.map((state) => `<option value="${state}" ${preferred === state ? "selected" : ""}>${state}</option>`).join("")}`;
    if (preferred && states.includes(preferred)) stateFilter.value = preferred;
  }
  function populateCities() {
    const cities = [...new Set(institutions.filter((item) => item.course === chosenCourse && (!stateFilter.value || item.state === stateFilter.value)).map((item) => item.city))].sort();
    const preferred = data.answers.location?.city || "";
    cityFilter.innerHTML = `<option value="">Todas as cidades</option>${cities.map((city) => `<option value="${city}" ${preferred === city ? "selected" : ""}>${city}</option>`).join("")}`;
    if (preferred && cities.includes(preferred)) cityFilter.value = preferred;
  }
  function renderRegionQuick() {
    const box = document.querySelector("#region-quick");
    if (!box) return;
    const regions = Array.isArray(data.answers.locations) && data.answers.locations.length ? data.answers.locations : (data.answers.location ? [data.answers.location] : []);
    if (regions.length < 2) { box.hidden = true; box.innerHTML = ""; return; }
    box.hidden = false;
    box.innerHTML = `<span class="hint">Suas regiões:</span> ` + regions.map((r, i) => `<button class="official-link" type="button" data-region="${i}" style="cursor:pointer">${r.city}/${r.state}</button>`).join(" ");
    box.onclick = (e) => {
      const btn = e.target.closest("[data-region]");
      if (!btn) return;
      const r = regions[Number(btn.dataset.region)];
      stateFilter.value = r.state;
      populateCities();
      cityFilter.value = [...cityFilter.options].some((o) => o.value === r.city) ? r.city : "";
      renderInstitutions();
    };
  }
  function renderInstitutions() {
    const filtered = institutions.filter((item) => item.course === chosenCourse && (!stateFilter.value || item.state === stateFilter.value) && (!cityFilter.value || item.city === cityFilter.value) && (!typeFilter.value || item.type === typeFilter.value)).sort((a, b) => b.cpc - a.cpc || b.cc - a.cc || b.igc - a.igc);
    const countEl = document.querySelector("#institution-count");
    if (countEl) {
      const region = [cityFilter.value, stateFilter.value].filter(Boolean).join(" / ") || "todo o Brasil";
      countEl.textContent = filtered.length ? `${filtered.length} instituição(ões) com ${chosenCourse} em ${region}, ordenadas por CPC → CC → IGC.` : "";
    }
    document.querySelector("#institution-results").innerHTML = filtered.length ? filtered.map((item, index) => {
      const key = instKey(item);
      const checked = compareKeys.includes(key) ? "checked" : "";
      return `<article class="institution-card"><div><h3>${index + 1}. ${item.name} <span class="grade-label">(${item.acronym})</span></h3><p>${item.city}, ${item.state}</p><div class="institution-meta"><span class="pill">${item.type}</span><span class="pill">${item.cpcReal ? `CPC ${item.year} · INEP` : `CPC ${item.year}* simulado`}</span></div><label class="hint" style="display:inline-flex;gap:6px;align-items:center;margin-top:10px;cursor:pointer"><input type="checkbox" data-compare="${key}" ${checked}> Comparar</label><br><a class="official-link" href="https://emec.mec.gov.br/" target="_blank" rel="noopener">Consultar no e-MEC ↗</a></div><div class="grade-set"><div><span class="grade-label">CPC</span><strong class="grade">${item.cpc}</strong></div><div><span class="grade-label">CC</span><strong class="grade">${item.cc}</strong></div><div><span class="grade-label">IGC</span><strong class="grade">${item.igc}</strong></div></div><button class="button button-primary" type="button" data-institution="${item.acronym}" data-city="${item.city}" data-state="${item.state}">Ver carreira e salário →</button></article>`;
    }).join("") : `<p class="no-results">Não encontramos instituições com esses filtros. Tente ampliar a busca (limpe cidade/estado).</p>`;
    renderCompare();
  }
  function resolveCompare() {
    return compareKeys
      .map((key) => institutions.find((item) => item.course === chosenCourse && instKey(item) === key))
      .filter(Boolean);
  }
  function renderCompare() {
    const bar = document.querySelector("#compare-bar");
    const sec = document.querySelector("#compare-section");
    const grid = document.querySelector("#compare-grid");
    if (!bar || !sec || !grid) return;
    const list = resolveCompare();
    // Remove chaves obsoletas (troca de curso/filtros)
    if (list.length !== compareKeys.length) {
      compareKeys = list.map(instKey);
      saveData({ ...getData(), compareKeys });
    }
    if (!list.length) {
      bar.style.display = "none";
      sec.hidden = true;
      grid.innerHTML = "";
      return;
    }
    bar.style.display = "flex";
    document.querySelector("#compare-bar-text").textContent = `${list.length} selecionada${list.length > 1 ? "s" : ""} para comparar`;
    const best = (f) => Math.max(...list.map(f));
    grid.innerHTML = list.map((item) => {
      const hl = (v, b) => v === b ? ' style="color:var(--green)"' : "";
      const course = courses.find((c) => c.name === chosenCourse) || { name: chosenCourse, areas: [] };
      return `<div class="course-card"><span class="course-score">${item.acronym} · ${item.type.toUpperCase()}</span><h3>${item.name}</h3><p>${item.city}, ${item.state} · ${item.cpcReal || item.igcReal ? "Indicadores INEP 2023" : `CPC ${item.year}* simulado`}</p>`
        + `<div style="margin:8px 0;font-size:.86rem;line-height:1.9">`
        + `<div>💰 <strong>Mensalidade:</strong> ${courseTuition(course, item.type)}</div>`
        + `<div>🎓 <strong>Nível (CPC ${item.cpc}):</strong> ${CPC_LABEL[item.cpc] || "—"}</div>`
        + `<div>📝 <strong>ENEM p/ entrar:</strong> ~${courseCutoff(course)}</div>`
        + `<div>🎯 <strong>Vestibular:</strong> ${courseVestib(course)} <small>(ref.)</small></div>`
        + `<div>⏳ <strong>Duração:</strong> ${courseDuration(course.name)}</div>`
        + `</div>`
        + `<div class="grade-set" style="margin:10px 0"><div><span class="grade-label">CPC</span><strong class="grade"${hl(item.cpc, best((x) => x.cpc))}>${item.cpc}</strong></div><div><span class="grade-label">CC</span><strong class="grade"${hl(item.cc, best((x) => x.cc))}>${item.cc}</strong></div><div><span class="grade-label">IGC</span><strong class="grade"${hl(item.igc, best((x) => x.igc))}>${item.igc}</strong></div></div>`
        + `<a class="official-link" href="https://emec.mec.gov.br/" target="_blank" rel="noopener">Consultar no e-MEC ↗</a><br><br>`
        + `<button class="button button-primary" type="button" data-pick="${instKey(item)}" style="width:100%">Escolher esta →</button></div>`;
    }).join("")
    + `<p class="ranking-note" style="grid-column:1/-1">Selo <strong>INEP</strong> = valor oficial do ciclo 2023 importado da base do INEP; <strong>*simulado</strong> = demonstrativo (sem match oficial). Valores reais completos de cada curso/campus no <a class="official-link" href="https://emec.mec.gov.br/" target="_blank" rel="noopener">e-MEC ↗</a> e no <a class="official-link" href="https://www.gov.br/inep/pt-br/areas-de-atuacao/pesquisas-estatisticas-e-indicadores/indicadores-de-qualidade-da-educacao-superior/conceito-preliminar-de-curso-cpc" target="_blank" rel="noopener">INEP/CPC ↗</a>. Notas de corte reais: <a class="official-link" href="https://sisu.mec.gov.br/" target="_blank" rel="noopener">SISU ↗</a>. *Mensalidades são faixas estimadas — variam por campus e turno. Federais/estaduais são gratuitas. <strong>Acessibilidade:</strong> confira rampa, elevador, banheiros adaptados, Libras e núcleo de acessibilidade no site da instituição ou numa visita — e confirme turnos e grade no e-MEC.</p>`;
  }
  function clearCompare(silent) {
    compareKeys = [];
    saveData({ ...getData(), compareKeys });
    document.querySelectorAll('input[data-compare]:checked').forEach((c) => { c.checked = false; });
    renderCompare();
    if (!silent) document.querySelector("#compare-section").hidden = true;
  }
  function chooseCourse(courseName) {
    chosenCourse = courseName;
    compareKeys = [];
    saveData({ ...getData(), selectedCourse: chosenCourse, selectedInstitution: null, compareKeys });
    renderCourses();
    section.hidden = false;
    document.querySelector("#selected-course-name").textContent = chosenCourse;
    populateStates();
    populateCities();
    renderInstitutions();
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  container.addEventListener("click", (event) => {
    const toggle = event.target.closest("[data-expand]");
    if (toggle) { expanded = toggle.dataset.expand === "more"; renderCourses(); return; }
    const card = event.target.closest("[data-course]"); if (card) chooseCourse(card.dataset.course);
  });
  stateFilter.addEventListener("change", () => { cityFilter.value = ""; populateCities(); cityFilter.value = ""; renderInstitutions(); });
  cityFilter.addEventListener("change", renderInstitutions);
  typeFilter.addEventListener("change", renderInstitutions);
  function pickInstitution(acronym, city, state) {
    const selectedInstitution = institutions.find((item) => item.acronym === acronym && item.course === chosenCourse && item.city === city && item.state === state) || institutions.find((item) => item.acronym === acronym && item.course === chosenCourse);
    if (!selectedInstitution) return;
    saveData({ ...getData(), selectedCourse: chosenCourse, selectedInstitution });
    window.location.href = "carreira.html";
  }
  document.querySelector("#institution-results").addEventListener("click", (event) => {
    const button = event.target.closest("[data-institution]");
    if (!button) return;
    pickInstitution(button.dataset.institution, button.dataset.city, button.dataset.state);
  });
  document.querySelector("#institution-results").addEventListener("change", (event) => {
    const box = event.target.closest("[data-compare]");
    if (!box) return;
    const key = box.dataset.compare;
    if (box.checked) {
      if (compareKeys.length >= COMPARE_MAX) {
        box.checked = false;
        alert(`Compare até ${COMPARE_MAX} por vez. Desmarque uma para trocar.`);
        return;
      }
      if (!compareKeys.includes(key)) compareKeys.push(key);
    } else {
      compareKeys = compareKeys.filter((k) => k !== key);
    }
    saveData({ ...getData(), compareKeys });
    renderCompare();
  });
  document.querySelector("#compare-clear").addEventListener("click", () => clearCompare());
  document.querySelector("#compare-go").addEventListener("click", () => {
    renderCompare();
    const sec = document.querySelector("#compare-section");
    sec.hidden = false;
    sec.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.querySelector("#compare-grid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-pick]");
    if (!button) return;
    const [acronym, city, state] = button.dataset.pick.split("|");
    pickInstitution(acronym, city, state);
  });
  if (chosenCourse && ranked.some((course) => course.name === chosenCourse)) chooseCourse(chosenCourse);
}

const careerByArea = {
  educacao: { inicial: "R$ 2.800", medio: "R$ 4.500", teto: "R$ 11.000", cargoBusca: "Professor", mercado: "Escolas públicas e privadas concentram a maior parte das vagas. Há também espaço em cursos livres, EAD, ONGs, empresas (treinamento) e, com pós-graduação, no ensino superior.", atua: ["Escola pública (concurso municipal/estadual)", "Escola particular e cursos livres", "Educação a distância e produção de material", "Ensino superior (com mestrado/doutorado)"], comoEntrar: "Diploma de licenciatura + registro. Na rede pública, concurso. Piso nacional do magistério definido em lei — confira o valor atualizado no MEC." },
  exatas: { inicial: "R$ 3.500", medio: "R$ 6.500", teto: "R$ 15.000", cargoBusca: "Analista", mercado: "Indústria, bancos, tecnologia e pesquisa. Quem domina dados e programação amplia muito a empregabilidade.", atua: ["Indústria e laboratórios", "Bancos, seguros e análise de dados", "Pesquisa e ensino superior", "Tecnologia e consultorias"], comoEntrar: "Graduação na área + portfólio com projetos, estágio e certificações (dados, programação)." },
  biologicas: { inicial: "R$ 3.000", medio: "R$ 5.500", teto: "R$ 12.000", cargoBusca: "Biólogo", mercado: "Laboratórios, meio ambiente, saúde e pesquisa. Concursos ambientais e sanitários são uma via estável.", atua: ["Laboratórios e análises clínicas", "Meio ambiente e licenciamento", "Pesquisa e universidades", "Saúde pública"], comoEntrar: "Graduação + CRBio quando exigido. Pós e experiência de campo contam muito." },
  humanas: { inicial: "R$ 2.800", medio: "R$ 5.000", teto: "R$ 12.000", cargoBusca: "Professor de História", mercado: "Ensino, cultura, ONGs, setor público e pesquisa. Concursos para áreas sociais e culturais são frequentes.", atua: ["Ensino básico e superior", "Museus, cultura e turismo", "ONGs e projetos sociais", "Setor público e pesquisa"], comoEntrar: "Graduação + concursos, pós e produção acadêmica para avançar." },
  linguagens: { inicial: "R$ 2.800", medio: "R$ 5.200", teto: "R$ 12.000", cargoBusca: "Professor de Português", mercado: "Ensino, tradução, revisão, comunicação e marketing de conteúdo. Idiomas (inglês) aumentam o teto.", atua: ["Ensino de idiomas e escolas", "Tradução, revisão e editoração", "Comunicação e marketing", "Concursos com prova de língua"], comoEntrar: "Graduação + certificação de proficiência (ex.: TOEFL/IELTS para inglês) e portfólio." },
  artes: { inicial: "R$ 2.500", medio: "R$ 4.800", teto: "R$ 12.000", cargoBusca: "Designer", mercado: "Mercado misto: CLT em agências e estúdios + muito freela. Portfólio vale mais que diploma na contratação.", atua: ["Agências, estúdios e produtoras", "Freela e criação autoral", "Ensino de arte", "Editais de cultura"], comoEntrar: "Portfólio forte + presença digital. Editais (Rouanet, estaduais) financiam projetos." },
  tecnologia: { inicial: "R$ 4.000", medio: "R$ 8.000", teto: "R$ 18.000", cargoBusca: "Desenvolvedor", mercado: "Um dos mercados mais aquecidos: empresas contratam júnior a sênior, remoto e presencial. Inglês e projetos no GitHub aceleram o salário.", atua: ["Empresas de software e startups", "Bancos e indústria (TI interna)", "Freela e remoto internacional", "Concursos de TI (bancos públicos, tribunais)"], comoEntrar: "Graduação ou tecnólogo + portfólio, estágio e certificações. Inglês amplia vagas remotas." },
  engenharias: { inicial: "R$ 6.000", medio: "R$ 10.000", teto: "R$ 22.000", cargoBusca: "Engenheiro", mercado: "Construção, indústria, energia e infraestrutura. Piso profissional (CREA/CONFEA) referencia 8,5 salários-mínimos para 8h — verifique a legislação vigente.", atua: ["Obras, indústria e energia", "Projetos e consultorias", "Setor público e concursos", "Gestão e vendas técnicas"], comoEntrar: "Graduação + CREA. Estágio e obra supervisionada contam muito no início." },
  gestao: { inicial: "R$ 3.000", medio: "R$ 6.500", teto: "R$ 16.000", cargoBusca: "Analista Administrativo", mercado: "Toda empresa precisa: vagas em empresas privadas, bancos e setor público. Carreira cresce para coordenação e gerência.", atua: ["Empresas privadas (todas as áreas)", "Bancos e financeiras", "Setor público e concursos", "Empreender e consultoria"], comoEntrar: "Graduação + Excel/dados, inglês e estágio. Concursos bancários e administrativos são porta de entrada estável." },
  juridicas: { inicial: "R$ 4.000", medio: "R$ 9.000", teto: "R$ 35.000+", cargoBusca: "Advogado", mercado: "Advocacia privada + concursos (magistratura, MP, defensoria, delegacias, cartórios) que puxam o teto para cima. Aprovação na OAB é obrigatória para advogar.", atua: ["Escritórios e advocacia autônoma", "Magistratura, MP e defensoria (concurso)", "Delegacias e carreiras policiais", "Empresas (jurídico interno)"], comoEntrar: "Graduação + OAB. Para o topo salarial, concursos de alto nível com estudo de longo prazo." },
  sociais: { inicial: "R$ 3.000", medio: "R$ 5.500", teto: "R$ 13.000", cargoBusca: "Assistente Social", mercado: "Setor público (CRAS, saúde, INSS), ONGs e organismos internacionais. Concursos municipais/estaduais são a via mais estável.", atua: ["Assistência social (CRAS/CREAS)", "Saúde e previdência", "ONGs e cooperação", "Pesquisa e ensino"], comoEntrar: "Graduação + registro profissional quando exigido + concursos." },
  agrarias: { inicial: "R$ 3.500", medio: "R$ 7.000", teto: "R$ 16.000", cargoBusca: "Engenheiro Agrônomo", mercado: "Agro é um dos maiores empregadores do país: fazendas, cooperativas, indústria de alimentos e pesquisa (Embrapa). Interior concentra vagas.", atua: ["Fazendas e cooperativas", "Indústria de alimentos", "Pesquisa e extensão rural", "Crédito rural e consultoria"], comoEntrar: "Graduação + estágio no campo, CNH e disponibilidade para interior contam muito." },
  saude: { inicial: "R$ 3.800", medio: "R$ 6.000", teto: "R$ 14.000", cargoBusca: "Enfermeiro", mercado: "Hospitais, clínicas, SUS e home care. Pisos de enfermagem definidos em lei — confira valores atualizados. Plantões elevam a renda.", atua: ["Hospitais e clínicas", "SUS e UBSs (concurso)", "Home care e saúde ocupacional", "Ensino e pesquisa"], comoEntrar: "Graduação + COREN/CRP/CRO conforme a profissão + residência e concursos." }
};

const courseCareerOverrides = {
  "Medicina": { inicial: "R$ 12.000", medio: "R$ 18.500", teto: "R$ 40.000+", cargoBusca: "Médico Clínico", mercado: "Residência, plantões e concursos puxam a renda para cima rapidamente. SUS, hospitais privados e consultório compõem a carreira. Residência médica é a principal porta para especialidades bem pagas.", atua: ["SUS e hospitais (plantão e concurso)", "Clínicas e consultório próprio", "Residência e especialização", "Telemedicina e perícias"] },
  "Odontologia": { inicial: "R$ 5.000", medio: "R$ 8.000", teto: "R$ 18.000", cargoBusca: "Dentista", mercado: "Consultório próprio + clínicas e concursos (SUS, Forças Armadas). Especializações (implante, ortodontia) elevam o teto.", atua: ["Consultório próprio", "Clínicas e redes", "SUS e concursos", "Docência e especialização"] },
  "Enfermagem": { inicial: "R$ 4.200", medio: "R$ 6.000", teto: "R$ 12.000", cargoBusca: "Enfermeiro", mercado: "Piso nacional da enfermagem definido em lei. Hospitais, SUS e home care concentram vagas. Plantões e concursos elevam a renda.", atua: ["Hospitais e UTIs", "SUS e concursos", "Home care", "Saúde ocupacional"] },
  "Farmácia": { inicial: "R$ 4.000", medio: "R$ 6.200", teto: "R$ 13.000", cargoBusca: "Farmacêutico", mercado: "Drogarias, indústria farmacêutica, análises clínicas e concursos (SUS, Anvisa). Farmácia clínica e hospitalar pagam melhor.", atua: ["Drogarias e farmácias", "Indústria e laboratórios", "Farmácia hospitalar", "Concursos e vigilância sanitária"] },
  "Psicologia": { inicial: "R$ 3.200", medio: "R$ 5.500", teto: "R$ 13.000", cargoBusca: "Psicólogo", mercado: "Clínica particular + SUS, empresas (RH) e concursos (saúde, educação, tribunais). Pós em áreas clínicas e organizacionais eleva o valor da sessão.", atua: ["Clínica particular", "SUS e CAPS (concurso)", "Empresas e RH", "Jurídica e escolar"] },
  "Direito": { inicial: "R$ 4.000", medio: "R$ 9.000", teto: "R$ 35.000+", cargoBusca: "Advogado", mercado: "Base na advocacia + topo nos concursos (juiz, promotor, delegado, defensor). OAB obrigatória. Quem mira tribunais precisa de rotina de concurso de 2-4 anos.", atua: ["Advocacia privada", "Magistratura e MP (concurso)", "Delegado e policial", "Jurídico de empresas"] },
  "Ciência da Computação": { inicial: "R$ 4.500", medio: "R$ 9.000", teto: "R$ 20.000", cargoBusca: "Desenvolvedor back-end", mercado: "Software, bancos e indústria disputam profissionais. Remoto nacional e internacional eleva o teto. Base sólida em algoritmos + GitHub conta muito.", atua: ["Software e startups", "Bancos e fintechs", "Remoto internacional", "Concursos de TI"] },
  "Sistemas de Informação": { inicial: "R$ 4.200", medio: "R$ 8.500", teto: "R$ 19.000", cargoBusca: "Analista de Desenvolvimento de Sistemas", mercado: "Ponte entre negócio e tecnologia: ERP, dados e gestão de TI. Vagas em empresas de todos os portes + concursos.", atua: ["TI de empresas e bancos", "Consultorias e ERP", "Dados e produto", "Concursos de TI"] },
  "Análise e Desenvolvimento de Sistemas": { inicial: "R$ 4.000", medio: "R$ 8.000", teto: "R$ 18.000", cargoBusca: "Programador", mercado: "Curso rápido e direto ao mercado dev. Foco em portfólio e estágio desde o 1º ano acelera o primeiro emprego.", atua: ["Desenvolvimento web e mobile", "Suporte e QA", "Freela e remoto", "Concursos técnicos"] },
  "Ciência de Dados": { inicial: "R$ 5.000", medio: "R$ 10.000", teto: "R$ 22.000", cargoBusca: "Cientista de Dados", mercado: "Bancos, varejo e indústria pagam bem por dados. Python, SQL e estatística são o trio de entrada. Inglês abre remoto.", atua: ["Bancos e varejo", "Indústria e saúde (dados)", "Consultorias", "Pesquisa"] },
  "Engenharia Civil": { inicial: "R$ 6.500", medio: "R$ 10.500", teto: "R$ 22.000", cargoBusca: "Engenheiro Civil", mercado: "Obras, infraestrutura e concursos (DNIT, prefeituras, Caixa). Piso CREA referencia a remuneração. Ciclos da construção oscilam — concurso dá estabilidade.", atua: ["Obras e construtoras", "Projetos e perícias", "Setor público", "Incorporação"] },
  "Engenharia Elétrica": { inicial: "R$ 6.500", medio: "R$ 11.000", teto: "R$ 23.000", cargoBusca: "Engenheiro Eletricista", mercado: "Energia (geração, transmissão, solar), indústria e concessões. Setor elétrico tem concursos fortes (Petrobras, Eletrobras, ANEEL).", atua: ["Energia e concessões", "Indústria", "Solar e automação", "Concursos"] },
  "Arquitetura e Urbanismo": { inicial: "R$ 4.500", medio: "R$ 7.500", teto: "R$ 16.000", cargoBusca: "Arquiteto", mercado: "Escritórios, incorporadoras e concursos (prefeituras, IPHAN). Autônomo com portfólio pode superar a média CLT.", atua: ["Escritórios e incorporadoras", "Interiores e autônomo", "Setor público", "Patrimônio e urbanismo"] },
  "Administração": { inicial: "R$ 3.000", medio: "R$ 6.800", teto: "R$ 16.000", cargoBusca: "Administrador", mercado: "A porta mais versátil: empresas, bancos e concursos administrativos. Gestão + dados leva à gerência mais rápido.", atua: ["Empresas (operações, vendas)", "Bancos", "Concursos administrativos", "Empreender"] },
  "Medicina Veterinária": { inicial: "R$ 4.000", medio: "R$ 7.000", teto: "R$ 15.000", cargoBusca: "Medico Veterinário", mercado: "Clínicas pet (mercado urbano aquecido) + agro (campo) + concursos (MAPA, vigilância). Especialização cirúrgica eleva o ticket.", atua: ["Clínicas pet", "Agro e campo", "Vigilância e MAPA (concurso)", "Indústria de alimentos"] }
};

const entryPathInfo = {
  enem: { title: "Seu caminho: ENEM → SISU / ProUni / FIES", text: "Com a nota do ENEM você concorre a vagas públicas pelo SISU, bolsas pelo ProUni e financiamento pelo FIES. O cronograma do ENEM sai no edital do INEP todo ano.", links: [["Edital e provas — INEP/ENEM", "https://enem.inep.gov.br/"], ["SISU — vagas públicas", "https://sisu.mec.gov.br/"], ["ProUni e FIES", "https://www.gov.br/mec/pt-br"]] },
  vestibular: { title: "Seu caminho: Vestibular tradicional", text: "Cada universidade tem edital próprio (Fuvest, Unicamp, UERJ e outras). Dá para combinar vestibular + ENEM no mesmo ano para dobrar as chances.", links: [["e-MEC — confira se o curso é autorizado", "https://emec.mec.gov.br/"], ["Guia de cursos — MEC", "https://www.gov.br/mec/pt-br"]] },
  militar: { title: "Seu caminho: Carreiras militares", text: "ESA (sargento), EsPCEx/AMAN (oficial do Exército), AFA (FAB), Escola Naval e EEAR estão entre as principais portas. Há soldo durante a formação, estabilidade e progressão por patente. Exigem TAF e limites de idade/altura por edital.", links: [["Exército — concursos (ESA/EsPCEx)", "https://www.eb.mil.br/web/ingresso"], ["Marinha — SMar/SSPM", "https://www.marinha.mil.br/sspm/"], ["FAB — EEAR/AFA", "https://www2.fab.mil.br/eeaar/"]] },
  concurso: { title: "Seu caminho: Concursos públicos", text: "Estabilidade + progressão por tempo e títulos. Nível médio abre vagas administrativas, policiais e técnicas; nível superior abre tribunais, fisco, saúde, educação e áreas-fim. Estude por editais anteriores e acompanhe o Portal Nacional de Concursos.", links: [["Portal Nacional de Concursos", "https://www.gov.br/concursos/pt-br"], ["CBO — descrições oficiais de cargos", "https://cbo.mte.gov.br/"], ["Novo CAGED — mercado formal", "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/caged"]] }
};

function getCareerForCourse(courseName) {
  const course = courses.find((c) => c.name === courseName);
  if (!course) return null;
  const primaryArea = course.areas[0] || "gestao";
  const base = careerByArea[primaryArea] || careerByArea.gestao;
  const override = courseCareerOverrides[courseName] || {};
  return { course, base: { ...base, ...override } };
}

function initCareer() {
  const data = getData();
  const mil = data.selectedMilitary ? militaryCareers.find((c) => c.id === data.selectedMilitary) : null;
  const isMilitar = getEntryPaths(data.profile).includes("militar");
  // Trilha militar: carreira direta, sem curso/faculdade
  if (isMilitar) {
    if (!mil) { window.location.href = "resultados.html"; return; }
    const det = MIL_DETAILS[mil.id] || {};
    const profile = data.profile || {};
    const firstName = (displayName(profile.name));
    const set = (sel, txt) => { const el = document.querySelector(sel); if (el) el.textContent = txt; };
    set("#career-greeting", firstName ? `${firstName}, seu plano para ${mil.name}.` : `Seu plano para ${mil.name}.`);
    set("#career-course", `${mil.name} · ${mil.force}`);
    set("#career-institution", `${mil.board} — ${mil.style}`);
    // Soldos reais por nível (soldo-base, sem adicionais)
    set("#salary-hint", "Soldo-base oficial por nível (sem adicionais)");
    set("#salary-label-initial", "NA FORMAÇÃO");
    set("#salary-sub-initial", "Aluno — bolsa/soldo");
    set("#salary-label-average", "FORMADO");
    set("#salary-sub-average", "Primeiro posto/graduação");
    set("#salary-label-ceiling", "TOPO DA CARREIRA");
    set("#salary-sub-ceiling", "Com progressão + adicionais");
    set("#salary-initial", det.payAluno || "—");
    set("#salary-average", det.payFormado || "—");
    set("#salary-ceiling", det.payTopo || "—");
    set("#salary-note", "Soldos-base oficiais (Lei 15.167/2025, vigentes desde abr/2025; reajuste em jan/2026). Na prática entra mais: adicional militar, disponibilidade e gratificações. Confira a tabela completa e o edital vigente nos links.");
    set("#market-text", `${mil.description} ${det.formacao || ""} Mercado: estabilidade, progressão por tempo e mérito, especializações pagas pela Força e possibilidade de missões e cursos no exterior.`);
    const acts = document.querySelector("#market-acts");
    if (acts) acts.innerHTML = mil.subjects.map(([s, h]) => `<li>${s} — ${h}h/semana na prova</li>`).join("");
    set("#market-entry", det.crescimento || "");
    const linksBox = document.querySelector("#salary-links");
    if (linksBox) linksBox.innerHTML = mil.links.map(([label, href]) => `<a class="official-link" href="${href}" target="_blank" rel="noopener">${label} ↗</a>`).join("") + `<a class="official-link" href="https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/l15167.htm" target="_blank" rel="noopener">Tabela oficial de soldos (Lei 15.167/2025) ↗</a>` + `<a class="official-link" href="https://www.gov.br/defesa/pt-br" target="_blank" rel="noopener">Ministério da Defesa ↗</a>`;
    // Jornada detalhada: formação, crescimento, o que mais cai e TAF
    const milDetail = document.querySelector("#mil-detail");
    if (milDetail) {
      milDetail.hidden = false;
      set("#mil-training", det.formacao || "—");
      set("#mil-growth", det.crescimento || "—");
      set("#mil-taf", `${mil.taf} ${det.tafDetail || ""}`);
      const topicsBox = document.querySelector("#mil-topics");
      const topics = MIL_TOPICS[mil.id] || {};
      if (topicsBox) topicsBox.innerHTML = Object.entries(topics).map(([subj, items]) => `<p style="margin:8px 0"><strong>${subj}:</strong> ${items.join(" · ")}</p>`).join("");
    }
    const entryCard = document.querySelector("#entry-path-card");
    if (entryCard) {
      entryCard.hidden = false;
      const corte = det.corte || {};
      entryCard.innerHTML = `<p class="eyebrow">SUA CARREIRA MILITAR · ${mil.force.toUpperCase()}</p><h2>${mil.name}</h2><p>${mil.description}</p><p><strong>Estilo da banca:</strong> ${mil.board} ${mil.style}</p><p><strong>TAF:</strong> ${mil.taf}</p>`
        + `<div class="salary-grid" style="margin-top:14px">`
        + `<div class="salary-card"><span>NOTA DE CORTE</span><strong style="font-size:1.15rem">${corte.nota || "—"}</strong><small>Referência de edições recentes</small></div>`
        + `<div class="salary-card"><span>ACERTOS NECESSÁRIOS</span><strong style="font-size:1.15rem">${corte.acertos || "—"}</strong><small>Varia por sexo/cota</small></div>`
        + `<div class="salary-card highlight"><span>REDAÇÃO</span><strong style="font-size:1.15rem">${corte.redacao || "—"}</strong><small>Confira o mínimo no edital</small></div>`
        + `</div>`
        + `<div class="source-list">${mil.links.map(([label, href]) => `<a class="official-link" href="${href}" target="_blank" rel="noopener">${label} ↗</a>`).join("")}</div>`;
    }
    const go = document.querySelector("#go-schedule");
    if (go) go.onclick = () => { window.location.href = "cronograma.html"; };
    return;
  }
  if (!data.selectedCourse) { window.location.href = "resultados.html"; return; }
  const info = getCareerForCourse(data.selectedCourse);
  if (!info) return;
  const profile = data.profile || {};
  const pathKeys = getEntryPaths(profile).filter((k) => entryPathInfo[k]);
  const entries = (pathKeys.length ? pathKeys : ["enem"]).map((k) => entryPathInfo[k]);
  const firstName = (displayName(profile.name));

  const set = (sel, txt) => { const el = document.querySelector(sel); if (el) el.textContent = txt; };
  set("#career-greeting", firstName ? `${firstName}, veja como é o mercado de ${info.course.name}.` : `Veja como é o mercado de ${info.course.name}.`);
  set("#career-course", info.course.name);
  set("#career-institution", data.selectedInstitution ? `${data.selectedInstitution.name} (${data.selectedInstitution.acronym}) · ${data.selectedInstitution.city}/${data.selectedInstitution.state}` : "Instituição a definir — volte aos resultados para comparar.");
  set("#salary-initial", info.base.inicial);
  set("#salary-average", info.base.medio);
  set("#salary-ceiling", info.base.teto);
  set("#market-text", info.base.mercado);
  set("#market-entry", info.base.comoEntrar);

  const acts = document.querySelector("#market-acts");
  if (acts) acts.innerHTML = (info.base.atua || []).map((a) => `<li>${a}</li>`).join("");

  const cargo = info.base.cargoBusca || info.course.name;
  const linksBox = document.querySelector("#salary-links");
  if (linksBox) {
    linksBox.innerHTML = ""
      + `<a class="official-link" href="https://www.salario.com.br/tabela-salarial/" target="_blank" rel="noopener">Tabela salarial (CAGED) — busque por “${cargo}” ↗</a>`
      + `<a class="official-link" href="https://www.salario.com.br/" target="_blank" rel="noopener">Portal Salário — pesquisa por cargo/CBO ↗</a>`
      + `<a class="official-link" href="https://www.glassdoor.com.br/Salários/index.htm" target="_blank" rel="noopener">Salários no Glassdoor ↗</a>`
      + `<a class="official-link" href="https://www.vagas.com.br/cargos/" target="_blank" rel="noopener">Cargos no Vagas.com ↗</a>`
      + `<a class="official-link" href="https://cbo.mte.gov.br/" target="_blank" rel="noopener">CBO oficial (MTE) ↗</a>`
      + `<a class="official-link" href="https://emec.mec.gov.br/" target="_blank" rel="noopener">Confirmar curso no e-MEC ↗</a>`;
  }

  const entryCard = document.querySelector("#entry-path-card");
  if (entryCard) {
    const onMilitarTrack = getEntryPaths(data.profile).includes("militar");
    const milSel = onMilitarTrack && data.selectedMilitary ? militaryCareers.find((c) => c.id === data.selectedMilitary) : null;
    const entryBlocks = entries.map((e) => `<div style="margin-bottom:14px"><p class="eyebrow">SEU OBJETIVO DE INGRESSO</p><h2>${e.title}</h2><p>${e.text}</p><div class="source-list">${e.links.map(([label, href]) => `<a class="official-link" href="${href}" target="_blank" rel="noopener">${label} ↗</a>`).join("")}</div></div>`).join("");
    if (milSel) {
      entryCard.hidden = false;
      entryCard.innerHTML = `<p class="eyebrow">SUA CARREIRA MILITAR · ${milSel.force.toUpperCase()}</p><h2>${milSel.name}</h2><p>${milSel.description}</p><p><strong>Estilo da banca:</strong> ${milSel.board} ${milSel.style}</p><p><strong>TAF:</strong> ${milSel.taf}</p><div class="source-list">${milSel.links.map(([label, href]) => `<a class="official-link" href="${href}" target="_blank" rel="noopener">${label} ↗</a>`).join("")}</div><hr style="margin:16px 0;border:0;border-top:1px solid var(--line)">${entryBlocks}`;
    } else {
      entryCard.hidden = false;
      entryCard.innerHTML = entryBlocks;
    }
  }

  const go = document.querySelector("#go-schedule");
  if (go) go.addEventListener("click", () => {
    const fresh = getData();
    if (!fresh.selectedInstitution) { alert("Escolha uma instituição nos resultados para montar o cronograma."); window.location.href = "resultados.html"; return; }
    window.location.href = "cronograma.html";
  });
}

// Semana detalhada: distribui as horas em blocos com atividade e tópico específico.
// Cada ocorrência da matéria alterna: teoria → questões → revisão → simulado.
function buildWeekSessions(profile, topicsMap, options) {
  const opts = options || {};
  const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  const activities = ["Teoria + resumo ativo", "Questões cronometradas", "Revisão + caderno de erros", "Simulado temático"];
  const blocks = profile.flatMap(([subject, hours]) => Array(Math.max(1, Math.round(hours))).fill(subject));
  const perDay = days.map(() => []);
  blocks.forEach((subject, i) => { perDay[i % days.length].push(subject); });
  const counters = {};
  const tafDays = { "Terça": 1, "Quinta": 1, "Sábado": 1 };
  return days.map((day, di) => {
    const items = perDay[di].map((subject) => {
      const n = counters[subject] || 0;
      counters[subject] = n + 1;
      const topics = (topicsMap && topicsMap[subject]) || [];
      const topic = topics.length ? topics[n % topics.length] : null;
      return `${subject} · ${activities[n % activities.length]}${topic ? ` (${topic})` : ""} · 1h`;
    });
    if (opts.taf && tafDays[day]) items.push("TAF · treino no formato do edital · 45min");
    return [day, items];
  }).filter(([, items]) => items.length);
}

function initSchedule() {
  const data = getData();
  const isMilitarSched = getEntryPaths(data.profile).includes("militar");
  const milSched = isMilitarSched ? militaryCareers.find((c) => c.id === data.selectedMilitary) : null;
  if (isMilitarSched && !milSched) {
    const h = document.querySelector("#empty-schedule h2");
    if (h) h.textContent = "Escolha sua carreira militar primeiro.";
    const p = document.querySelector("#empty-schedule p");
    if (p) p.textContent = "Volte aos resultados da trilha militar para escolher entre Marinha, Exército e Aeronáutica.";
    return;
  }
  // Trilha militar direta: só precisa da carreira, sem curso/faculdade.
  // Compensa o ponto forte: reduz as matérias de afinidade e reforça as demais.
  if (milSched) {
    const strongIdx = normalizeIndices(data.answers?.mil_study);
    const hasStrong = strongIdx.length > 0;
    const strongSubjects = new Set(strongIdx.flatMap((i) => MIL_STRENGTH_MAP[i] || []));
    const strongLabel = strongIdx.map((i) => militaryQuestions[3].options[i]?.[0]).filter(Boolean).join("; ");
    const topics = MIL_TOPICS[milSched.id] || {};
    const profile = milSched.subjects.map(([subject, hours]) => {
      const isStrong = hasStrong && [...strongSubjects].some((s) => subject.toLowerCase().includes(s.toLowerCase()) || s.toLowerCase().includes(subject.toLowerCase()));
      const adjusted = !hasStrong ? hours : (isStrong ? Math.max(2, Math.round(hours * 0.7)) : Math.min(8, Math.round(hours * 1.3)));
      return [subject, adjusted, isStrong];
    });
    const total = profile.reduce((sum, [, hours]) => sum + hours, 0);
    document.querySelector("#empty-schedule").hidden = true;
    document.querySelector("#schedule-content").hidden = false;
    document.querySelector("#choice-summary").textContent = strongLabel ? `Plano no estilo ${milSched.board}, priorizando suas dificuldades: reduzimos ${strongLabel} (seu ponto forte) e reforçamos o restante. Inclui TAF: ${milSched.taf}` : `Plano focado na ${milSched.name} (${milSched.board}). Inclui TAF: ${milSched.taf}`;
    document.querySelector("#schedule-course").textContent = milSched.name;
    document.querySelector("#schedule-institution").textContent = `${milSched.force} · estilo ${milSched.board}`;
    document.querySelector("#weekly-total").textContent = `${total} horas`;
    const focusLabel = document.querySelector("#schedule-focus-label");
    if (focusLabel) focusLabel.textContent = "CARREIRA MILITAR";
    const locLabel = document.querySelector("#schedule-location-label");
    if (locLabel) locLabel.textContent = "FORÇA · BANCA";
    document.querySelector("#subject-weights").innerHTML = profile.map(([subject, hours, isStrong]) => {
      const top = (topics[subject] || []).slice(0, 3).join(" · ");
      const badge = hasStrong ? (isStrong ? ' <span class="pill">manutenção</span>' : ' <span class="pill">reforço</span>') : "";
      return `<div class="weight-row"><div><div class="weight-name">${subject}${badge}</div>${top ? `<div class="hint" style="margin-top:4px">O que mais cai: ${top}</div>` : ""}<div class="weight-bar"><span style="width:${Math.min(100, (hours / 6) * 100)}%"></span></div></div><div class="weight-hours">${hours}h</div></div>`;
    }).join("");
    // Semana montada a partir das prioridades acima: cada hora vira 1 bloco de 1h,
    // com atividade (teoria → questões → revisão → simulado) e tópico do "o que mais cai".
    const sessions = buildWeekSessions(profile, topics, { taf: true });
    document.querySelector("#weekly-schedule").innerHTML = sessions.map(([day, subjects]) => `<div class="day-row"><div class="day-name">${day}</div><div class="day-content">${subjects.join("<br>")}</div></div>`).join("") + `<div class="day-row"><div class="day-name">Domingo</div><div class="day-content">Redação · 1 redação completa no modelo da banca (${(MIL_REDACAO[milSched.id] || "dissertativa").split(".")[0]}) · 1h30<br>Revisão geral da semana + caderno de erros · 1h</div></div>`;
    // Aviso sobre questões + guias de redação e YouTube
    const tip = document.querySelector(".schedule-tip");
    if (tip) tip.textContent = "A prova é conteudista, mas só ler teoria reprova: resolva questões de TODAS as matérias toda semana — principalmente exatas, onde o padrão da banca só aparece na questão. Anote cada erro em caderno dedicado e revise no domingo junto com a redação.";
    const guides = document.querySelector("#mil-guides");
    if (guides) {
      const chanSeen = new Set();
      const chanGroups = [];
      [...profile.map(([s]) => s), "Redação"].forEach((subj) => {
        const list = (MIL_CHANNELS[subj] || []).filter((ch) => !chanSeen.has(ch.url));
        list.forEach((ch) => chanSeen.add(ch.url));
        if (list.length) chanGroups.push({ subj, list });
      });
      const chanHtml = chanGroups.map(({ subj, list }) => `<p style="margin:8px 0"><strong>${subj}:</strong> ${list.map((ch) => `<a class="official-link" href="${ch.url}" target="_blank" rel="noopener">${ch.label} ↗</a>`).join(" ")}</p>`).join("");
      guides.innerHTML = `<div class="market-grid" style="margin-top:22px">`
        + `<div class="market-card"><h3>Redação da sua banca</h3><p>${MIL_REDACAO[milSched.id] || "Dissertativa — confirme o modelo no edital vigente."}</p><p><strong>Regra de ouro:</strong> domingo é dia de redação — no mínimo 1 completa por semana, cronometrada e corrigida (troque com colegas ou use correção de cursinho).</p></div>`
        + `<div class="market-card"><h3>Estude no YouTube</h3><p>Canais oficiais por matéria, do maior para o menor em inscritos — clique e inscreva-se:</p>${chanHtml}</div>`
        + `</div>`;
    }
    return;
  }
  if (!data.selectedCourse || !data.selectedInstitution) return;
  const course = courses.find((item) => item.name === data.selectedCourse);
  if (!course) return;
  // Trilha comum (ENEM/vestibular): plano pelas matérias do curso + o que mais cai.
  const g0 = document.querySelector("#mil-guides");
  if (g0) g0.innerHTML = "";
  const profile = buildScheduleProfile(course);
  const total = profile.reduce((sum, [, hours]) => sum + hours, 0);
  document.querySelector("#empty-schedule").hidden = true;
  document.querySelector("#schedule-content").hidden = false;
  document.querySelector("#choice-summary").textContent = "Plano no estilo ENEM/vestibular: teoria + questões de todas as matérias, com foco no que mais cai.";
  document.querySelector("#schedule-course").textContent = data.selectedCourse;
  document.querySelector("#schedule-institution").textContent = `${data.selectedInstitution.acronym} · ${data.selectedInstitution.city}/${data.selectedInstitution.state}`;
  document.querySelector("#weekly-total").textContent = `${total} horas`;
  document.querySelector("#subject-weights").innerHTML = profile.map(([subject, hours]) => {
    const top = (ENEM_TOPICS[subject] || []).slice(0, 3).join(" · ");
    return `<div class="weight-row"><div><div class="weight-name">${subject}</div>${top ? `<div class="hint" style="margin-top:4px">O que mais cai: ${top}</div>` : ""}<div class="weight-bar"><span style="width:${(hours / 4) * 100}%"></span></div></div><div class="weight-hours">${hours}h</div></div>`;
  }).join("");
  // Semana montada a partir das prioridades acima: cada hora vira 1 bloco de 1h,
  // com atividade (teoria → questões → revisão → simulado) e tópico do ENEM.
  const sessions = buildWeekSessions(profile, ENEM_TOPICS, {});
  document.querySelector("#weekly-schedule").innerHTML = sessions.map(([day, subjects]) => `<div class="day-row"><div class="day-name">${day}</div><div class="day-content">${subjects.join("<br>")}</div></div>`).join("") + `<div class="day-row"><div class="day-name">Domingo</div><div class="day-content">Redação ENEM · 1 dissertativa-argumentativa completa · 1h30<br>Revisão geral da semana + caderno de erros · 1h</div></div>`;
  const tipC = document.querySelector(".schedule-tip");
  if (tipC) tipC.textContent = "No ENEM, todas as áreas contam e a TRI premia constância: resolva questões de todas as matérias toda semana, treine gestão de tempo com simulados e faça 1 redação por semana com proposta de intervenção.";
}

function initLanding() {
  const form = document.querySelector("#student-profile-form");
  if (!form) return;
  const username = currentUser() || "estudante";
  const hello = document.querySelector("#profile-hello");
  if (hello) hello.textContent = displayName(username);
  const birthInput = document.querySelector("#student-birthdate");
  const profileErr = document.querySelector("#profile-error");
  birthInput.addEventListener("input", () => {
    const masked = maskBirthLive(birthInput.value);
    if (masked !== birthInput.value) birthInput.value = masked;
    if (profileErr) profileErr.hidden = true;
  });
  // Só a data de nascimento é mantida entre acessos; o resto abre em branco
  const savedBirth = (getData().profile || {}).birthdate;
  if (savedBirth) birthInput.value = savedBirth;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const check = validBirthdate(birthInput.value);
    if (!check.ok) {
      if (profileErr) { profileErr.textContent = check.msg; profileErr.hidden = false; }
      birthInput.focus();
      return;
    }
    const entryPaths = [...form.querySelectorAll('input[name="entryPath"]:checked')].map((el) => el.value);
    if (!entryPaths.length) {
      if (profileErr) { profileErr.textContent = "Marque ao menos um objetivo principal (ENEM, vestibular e/ou militar)."; profileErr.hidden = false; }
      return;
    }
    const data = getData();
    const profile = {
      name: username,
      birthdate: check.value,
      grade: document.querySelector("#student-grade").value,
      school: document.querySelector("#student-school").value,
      entryPaths
    };
    // Trocou de trilha? Limpa resíduos da outra para não vazar conteúdo.
    const nextData = { ...data, profile };
    if (!entryPaths.includes("militar")) {
      delete nextData.selectedMilitary;
      if (nextData.answers) {
        Object.keys(nextData.answers).forEach((k) => { if (k.startsWith("mil_")) delete nextData.answers[k]; });
      }
    }
    saveData(nextData);
    window.location.href = "questionario.html";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  initTheme();
  if (!guardAuth(page)) return;
  initAuthUI();
  if (page === "login") initLogin();
  if (page === "landing") initLanding();
  if (page === "questionnaire") initQuestionnaire();
  if (page === "results") initResults();
  if (page === "career") initCareer();
  if (page === "schedule") initSchedule();
});
