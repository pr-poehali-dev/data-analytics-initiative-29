import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const principles = [
  {
    num: "01",
    icon: "Smile",
    title: "Доброжелательный стиль общения",
    desc: "Позитивный настрой — прочный фундамент работы с родителями. В общении неуместны категоричность и требовательный тон. Педагог общается с родителями ежедневно, и именно от него зависит, каким будет отношение семьи к лагерю в целом.",
  },
  {
    num: "02",
    icon: "UserCheck",
    title: "Индивидуальный подход",
    desc: "Необходим не только в работе с детьми, но и с родителями. Воспитатель должен чувствовать ситуацию и настроение. Умение успокоить родителя, посочувствовать и вместе найти выход — важнейший педагогический навык.",
  },
  {
    num: "03",
    icon: "Handshake",
    title: "Сотрудничество, а не наставничество",
    desc: "Современные родители — грамотные и осведомлённые люди. Позиция наставления редко даёт результат. Эффективнее — атмосфера взаимопомощи, поддержки и искреннего желания разобраться в ситуации вместе.",
  },
  {
    num: "04",
    icon: "ClipboardList",
    title: "Серьёзная подготовка",
    desc: "Любое мероприятие по работе с родителями требует тщательной подготовки. Главное — качество, а не количество несвязанных между собой встреч и мероприятий.",
  },
  {
    num: "05",
    icon: "Zap",
    title: "Динамичность",
    desc: "Лагерь должен быстро реагировать на изменения социального состава родителей, их образовательные потребности и воспитательные запросы. В зависимости от этого меняются формы и направления работы с семьёй.",
  },
];

const parentCriticisms = [
  "Недостаточное внимание к физическому и интеллектуальному развитию ребёнка",
  "Отсутствие веры в способности ребёнка",
  "Слабая подготовка к школе",
  "Пассивность в установлении социокультурных контактов с семьёй",
  "Растущие требования материальной поддержки со стороны семьи",
];

const teacherCriticisms = [
  "Низкий культурный и педагогический уровень родителей",
  "Преобладание материальных ценностей над духовными",
  "Отсутствие заинтересованности в личностном развитии ребёнка",
  "Перекладывание ответственности за воспитание на лагерь",
  "Пассивность в установлении контактов с учреждением",
];

const adminCards = [
  {
    icon: "Building2",
    title: "Директор",
    badge: "Редкий контакт",
    badgeVariant: "secondary" as const,
    points: [
      "Прямой контакт между директором и вожатым — редкость",
      "Все проблемы решаются через старшего вожатого",
      "Если всё же пришлось говорить — сохраняйте спокойствие",
      "Не спорьте, даже если не согласны",
    ],
  },
  {
    icon: "Wrench",
    title: "Персонал лагеря",
    badge: "Уважение",
    badgeVariant: "outline" as const,
    points: [
      "Уважение почти гарантировано, если вы работаете искренне",
      "Просите «для детей», а не «для себя»",
      "Конфликты с персоналом — только не при детях",
      "Иногда встречаются изначально негативные люди — не зацикливайтесь",
    ],
  },
  {
    icon: "Sparkles",
    title: "Уборщицы",
    badge: "Чистота",
    badgeVariant: "secondary" as const,
    points: [
      "Выполняйте их разумные требования",
      "Следите за чистотой в корпусе совместно с детьми",
      "Приучайте отряд убирать за собой",
      "Благодарите за труд — это простой путь к хорошим отношениям",
    ],
  },
  {
    icon: "UtensilsCrossed",
    title: "Столовая",
    badge: "Порядок",
    badgeVariant: "outline" as const,
    points: [
      "Следите, чтобы дети убирали за собой",
      "Воспитывайте уважение к труду поваров и официантов",
      "Приходите организованно, без толпы",
      "Объясняйте детям ценность чужого труда",
    ],
  },
  {
    icon: "ClipboardCheck",
    title: "Сестра-хозяйка",
    badge: "Важно!",
    badgeVariant: "destructive" as const,
    points: [
      "При порче имущества — немедленно сообщайте старшему вожатому",
      "Пригласите сестру-хозяйку составить акт в вашем присутствии",
      "Не умалчивайте — иначе материальная ответственность ляжет на вас",
      "Акт составляется при старшем вожатом обязательно",
    ],
  },
  {
    icon: "HeartPulse",
    title: "Медицинский персонал",
    badge: "Безопасность",
    badgeVariant: "secondary" as const,
    points: [
      "Не пытайтесь «учить» медработников",
      "Не ставьте диагнозы самостоятельно",
      "Ваша задача — информировать о симптомах и изменениях самочувствия",
      "Решение о госпитализации принимает только медик",
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Навигация */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold tracking-tight">ШКОЛА ВОЖАТЫХ</div>
            <div className="hidden md:flex items-center space-x-8 text-sm">
              <a href="#principles" className="text-muted-foreground hover:text-foreground transition-colors">Принципы</a>
              <a href="#problems" className="text-muted-foreground hover:text-foreground transition-colors">Проблемы</a>
              <a href="#important" className="text-muted-foreground hover:text-foreground transition-colors">Важно</a>
              <a href="#admin" className="text-muted-foreground hover:text-foreground transition-colors">Администрация</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[75vh]">
            <div className="lg:col-span-7 space-y-8">
              <Badge variant="secondary" className="w-fit text-sm px-4 py-1">
                <Icon name="BookOpen" className="w-4 h-4 mr-2" />
                Методическое пособие для вожатых
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
                Взаимодействие с<br />
                <span className="text-primary">родителями</span> и<br />
                <span className="text-accent">администрацией</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                В процессе работы вожатому пригодится умение общаться не только с детьми, но и с их родителями.
                Каждый родитель имеет свой характер и по-разному реагирует на ту или иную ситуацию.
                В общении с родителями воспитанников необходимо проявлять тактичность, вежливость и внимательность.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground border border-border rounded-full px-4 py-2">
                  <Icon name="CheckCircle" className="w-4 h-4 text-primary" />
                  5 принципов взаимодействия
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground border border-border rounded-full px-4 py-2">
                  <Icon name="CheckCircle" className="w-4 h-4 text-primary" />
                  Типичные конфликты и решения
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground border border-border rounded-full px-4 py-2">
                  <Icon name="CheckCircle" className="w-4 h-4 text-primary" />
                  6 служб лагеря — как общаться
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <Card className="aspect-square overflow-hidden rounded-xl">
                <img src="https://cdn.poehali.dev/templates/lp/acoustic-guitar-player-in-plant-filled-cafe.jpg" alt="" className="w-full h-full object-cover" />
              </Card>
              <Card className="aspect-square overflow-hidden rounded-xl mt-6">
                <img src="https://cdn.poehali.dev/templates/lp/lush-green-plants-and-hanging-gardens-in-cafe.jpg" alt="" className="w-full h-full object-cover" />
              </Card>
              <Card className="aspect-square overflow-hidden rounded-xl -mt-6">
                <img src="https://cdn.poehali.dev/templates/lp/artisan-coffee-and-pastries-on-wooden-table.jpg" alt="" className="w-full h-full object-cover" />
              </Card>
              <Card className="aspect-square overflow-hidden rounded-xl">
                <img src="https://cdn.poehali.dev/templates/lp/intimate-music-venue-with-plants-and-warm-lighting.jpg" alt="" className="w-full h-full object-cover" />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 5 принципов */}
      <section id="principles" className="py-24 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <Badge variant="outline" className="mb-4">Раздел 1</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Принципы взаимодействия<br />вожатых с родителями</h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Пять ключевых принципов, которые помогают выстроить доверительные и эффективные отношения с семьями воспитанников
            </p>
          </div>

          <div className="space-y-6">
            {principles.map((p) => (
              <Card key={p.num} className="p-8 hover:border-primary/50 transition-colors">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-5xl font-bold text-primary/30">{p.num}</span>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name={p.icon} className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Проблемы */}
      <section id="problems" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <Badge variant="outline" className="mb-4">Раздел 2</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Основные проблемы<br />и трудности</h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Три главных симптома конфликтного взаимодействия педагогов и родителей
            </p>
          </div>

          {/* Три симптома */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: "EarOff", text: "Говорят, обращаются, но не слышат друг друга и не откликаются" },
              { icon: "Scale", text: "Требуют ответственности от другого, но желают снять ответственность с себя" },
              { icon: "Flame", text: "Критика превалирует, напряжение нарастает — неизбежны жалобы и конфликты" },
            ].map((item, i) => (
              <Card key={i} className="p-8 border-destructive/30 bg-destructive/5">
                <div className="w-14 h-14 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
                  <Icon name={item.icon} className="w-7 h-7 text-destructive" />
                </div>
                <p className="text-lg leading-relaxed">{item.text}</p>
              </Card>
            ))}
          </div>

          {/* Причины */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
                <Icon name="GraduationCap" className="w-6 h-6 text-accent" />
                Причины трудностей — по мнению педагогов
              </h3>
              <p className="text-muted-foreground mb-6 text-sm">Что педагоги называют источниками проблем</p>
              <ul className="space-y-3">
                {[
                  "Низкий социальный статус профессии воспитателя в обществе",
                  "Недостаточно высокий уровень психолого-педагогической культуры родителей",
                  "Недостаточная компетентность многих воспитателей",
                  "Неполная информированность воспитателей об условиях жизни ребёнка дома",
                  "Отношение воспитателей к родителям как к объектам воспитания",
                  "Стремление избегать «живого» общения, подменяя его анкетами и стендами",
                  "«Закрытость» лагеря и его организации",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <Icon name="ChevronRight" className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <div className="space-y-8">
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-3">
                  <Icon name="UserX" className="w-5 h-5 text-destructive" />
                  Родители критикуют педагогов за:
                </h3>
                <ul className="space-y-3 mt-4">
                  {parentCriticisms.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <Icon name="Minus" className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-3">
                  <Icon name="UserX" className="w-5 h-5 text-destructive" />
                  Педагоги критикуют родителей за:
                </h3>
                <ul className="space-y-3 mt-4">
                  {teacherCriticisms.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <Icon name="Minus" className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>

          {/* Решение */}
          <Card className="p-10 border-primary/40 bg-primary/5">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                <Icon name="Lightbulb" className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Решение — правильное сотрудничество</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Сотрудничество</strong> — это общение «на равных», где никому не принадлежит привилегия указывать, контролировать и оценивать.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Взаимодействие</strong> — способ организации совместной деятельности, которая осуществляется через общение.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Важное предупреждение */}
      <section id="important" className="py-16 bg-accent/10">
        <div className="max-w-5xl mx-auto px-6">
          <Card className="p-10 border-accent/50">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
                <Icon name="AlertTriangle" className="w-8 h-8 text-accent" />
              </div>
              <div>
                <Badge className="bg-accent text-accent-foreground mb-4">Важно запомнить</Badge>
                <h3 className="text-2xl font-bold mb-4">При общении с «неадекватными» родителями</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Старайтесь абстрагироваться от оценок и ярлыков, которые такие родители начнут раздавать направо и налево.
                  <strong className="text-foreground"> Вежливо, с лёгкой улыбкой, слушайте</strong> — но не вступайте в полемику и рассуждения.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Такие разговоры могут длиться бесконечно, а у вас в отряде как минимум <strong className="text-foreground">25 детей</strong>, которые
                  объективно требуют вашего внимания и участия.
                </p>
                <div className="flex items-center gap-3 bg-background/50 rounded-lg px-5 py-4 border border-accent/30">
                  <Icon name="ArrowRight" className="w-5 h-5 text-accent shrink-0" />
                  <p className="text-muted-foreground">
                    Таких родителей можно перенаправить к <strong className="text-foreground">психологу лагеря</strong> — скорее всего им просто нужны свободные уши или есть потребность решить родительские сомнения.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Администрация */}
      <section id="admin" className="py-24 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <Badge variant="outline" className="mb-4">Раздел 3</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Взаимодействие<br />с администрацией</h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              На первой планёрке — познакомьтесь с администрацией, определитесь с порядками и уточните все «тонкости» отношений.
              По всем жалобам и предложениям обращайтесь сначала к <strong className="text-foreground">старшему вожатому</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminCards.map((card) => (
              <Card key={card.title} className="p-8 hover:border-primary/40 transition-colors">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={card.icon} className="w-7 h-7 text-primary" />
                  </div>
                  <Badge variant={card.badgeVariant}>{card.badge}</Badge>
                </div>
                <h3 className="text-xl font-bold mb-5">{card.title}</h3>
                <ul className="space-y-3">
                  {card.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Icon name="ChevronRight" className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Итоговая памятка */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Итоговая памятка вожатого</h2>
            <p className="text-xl text-muted-foreground">Главное — в одном блоке</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "Heart", color: "text-primary", text: "Всегда проявляй тактичность, вежливость и внимательность в общении с родителями" },
              { icon: "Users", color: "text-primary", text: "Взаимодействие ограничивай до минимума с администрацией — через старшего вожатого" },
              { icon: "MessageCircle", color: "text-accent", text: "Не вступай в бесконечные споры с неадекватными родителями — у тебя 25 детей, которые ждут" },
              { icon: "FileWarning", color: "text-destructive", text: "При порче имущества — немедленно составляй акт. Молчание = твоя материальная ответственность" },
              { icon: "Stethoscope", color: "text-accent", text: "Медицинские решения принимает только медперсонал. Твоя роль — информировать о симптомах" },
              { icon: "Handshake", color: "text-primary", text: "Сотрудничество, а не наставничество — ключ к успешным отношениям с родителями" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-border hover:border-primary/40 transition-colors">
                <Icon name={item.icon} className={`w-6 h-6 shrink-0 mt-0.5 ${item.color}`} />
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-secondary/50 py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-2xl font-bold">ШКОЛА ВОЖАТЫХ</div>
            <p className="text-muted-foreground text-center">
              Методическое пособие по взаимодействию с родителями и администрацией лагеря
            </p>
            <p className="text-muted-foreground text-sm">© 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
