import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Навигация */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight">ШКОЛА ВОЖАТЫХ</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#principles" className="text-muted-foreground hover:text-foreground transition-colors">
                Принципы
              </a>
              <a href="#problems" className="text-muted-foreground hover:text-foreground transition-colors">
                Трудности
              </a>
              <a href="#admin" className="text-muted-foreground hover:text-foreground transition-colors">
                Администрация
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </a>
            </div>
            <Button variant="outline" size="sm">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero секция */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[80vh]">
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-fit">
                    <Icon name="Users" className="w-3 h-3 mr-1" />
                    Взаимодействие с родителями и администрацией
                  </Badge>
                  <h1 className="text-6xl lg:text-8xl font-bold tracking-tight text-balance">
                    Строим доверие
                    <span className="text-primary block">вместе с семьёй</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-2xl text-pretty">
                    Успешная работа вожатого строится не только на общении с детьми. Умение выстраивать
                    партнёрские отношения с родителями и командой лагеря — ключ к спокойной и эффективной смене.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8">
                    Принципы общения
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                    Частые трудности
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 grid grid-cols-2 gap-2 auto-rows-fr h-fit self-center">
              <Card className="aspect-square bg-card overflow-hidden rounded-lg">
                <img
                  src="https://cdn.poehali.dev/templates/lp/acoustic-guitar-player-in-plant-filled-cafe.jpg"
                  alt="Вожатый с детьми"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-primary/20 overflow-hidden rounded-lg">
                <img
                  src="https://cdn.poehali.dev/templates/lp/lush-green-plants-and-hanging-gardens-in-cafe.jpg"
                  alt="Общение с родителями"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-accent/20 overflow-hidden rounded-lg">
                <img
                  src="https://cdn.poehali.dev/templates/lp/artisan-coffee-and-pastries-on-wooden-table.jpg"
                  alt="Планёрка"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-card overflow-hidden rounded-lg">
                <img
                  src="https://cdn.poehali.dev/templates/lp/intimate-music-venue-with-plants-and-warm-lighting.jpg"
                  alt="Командная работа"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 5 принципов */}
      <section id="principles" className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">5 ПРИНЦИПОВ ВЗАИМОДЕЙСТВИЯ С РОДИТЕЛЯМИ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Тактичность, индивидуальный подход и сотрудничество — основа доверия между вожатым и семьёй
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Smile" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">1. Доброжелательность</h3>
              <p className="text-muted-foreground">
                Позитивный настрой — фундамент работы с родителями. Исключите категоричность и требовательный тон: именно от вас зависит отношение семьи к лагерю в целом.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="UserCheck" className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">2. Индивидуальный подход</h3>
              <p className="text-muted-foreground">
                Чувствуйте ситуацию и настроение родителей. Умение успокоить, посочувствовать и вместе найти решение — бесценный навык вожатого.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Handshake" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">3. Сотрудничество</h3>
              <p className="text-muted-foreground">
                Общение «на равных» без наставлений. Создавайте атмосферу взаимопомощи и искреннего желания помочь — это работает гораздо эффективнее нотаций.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Трудности */}
      <section id="problems" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">ЧАСТЫЕ ТРУДНОСТИ</h2>
            <Button variant="outline">Все советы</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-primary/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/templates/lp/indie-folk-singer-with-acoustic-guitar-in-intimate.jpg"
                  alt="Конфликт с родителями"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4">Важно</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Неадекватные родители</h3>
                <p className="text-muted-foreground mb-4">Вежливо слушайте, не вступайте в полемику. При необходимости направляйте к психологу лагеря.</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="AlertTriangle" className="w-4 h-4" />
                    Частая ситуация
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Users" className="w-4 h-4" />
                    25+ детей в отряде
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-accent/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/templates/lp/jazz-quartet-performing-in-plant-decorated-restaua.jpg"
                  alt="Критика педагогов"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4" variant="secondary">Коммуникация</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Взаимная критика</h3>
                <p className="text-muted-foreground mb-4">Родители и педагоги нередко критикуют друг друга. Выход — сотрудничество и открытый диалог без обвинений.</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="MessageCircle" className="w-4 h-4" />
                    Диалог
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Shield" className="w-4 h-4" />
                    Без конфликтов
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-primary/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/templates/lp/electronic-ambient-musician-with-synthesizers-and-.jpg"
                  alt="Порча имущества"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4" variant="outline">
                  Имущество
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Порча имущества</h3>
                <p className="text-muted-foreground mb-4">Немедленно сообщайте старшему вожатому. Составьте акт вместе с сестрой-хозяйкой — иначе ответственность ляжет на вас.</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="ClipboardList" className="w-4 h-4" />
                    Акт сразу
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="AlertCircle" className="w-4 h-4" />
                    Не замалчивайте
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Администрация */}
      <section id="admin" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-balance">Взаимодействие с администрацией лагеря</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  На первой планёрке познакомьтесь с администрацией и уточните все правила: «что можно, что нельзя». По жалобам и предложениям первым делом обращайтесь к старшему вожатому — директор подключается только в крайних случаях.
                </p>
                <p>
                  С персоналом — вежливо и уважительно. Просите для детей, а не для себя. С медработниками — только информируйте о симптомах, не ставьте диагнозов самостоятельно.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">5</div>
                  <div className="text-muted-foreground">Принципов взаимодействия</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">6</div>
                  <div className="text-muted-foreground">Служб лагеря</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/templates/lp/lush-indoor-garden-cafe-with-hanging-plants-and-na.jpg"
                  alt="Команда лагеря"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Шпаргалка по службам */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">ШПАРГАЛКА: КТО И ЗА ЧТО</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Быстрая памятка по взаимодействию с каждой службой лагеря
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "Building2", title: "Директор", desc: "Не спорьте, сохраняйте спокойствие. Прямой контакт — редко, всё через старшего вожатого." },
              { icon: "Wrench", title: "Персонал", desc: "Просите для детей, а не для себя. Конфликты — не при детях." },
              { icon: "Sparkles", title: "Уборщицы", desc: "Выполняйте их разумные требования. Чистота в корпусе — ваша совместная ответственность." },
              { icon: "UtensilsCrossed", title: "Столовая", desc: "Следите, чтобы дети убирали за собой и уважали труд поваров." },
              { icon: "ClipboardCheck", title: "Сестра-хозяйка", desc: "При порче имущества — немедленно акт. Умолчание = ваша материальная ответственность." },
              { icon: "HeartPulse", title: "Медперсонал", desc: "Сообщайте симптомы, не ставьте диагнозов. Решение о госпитализации — только медик." },
            ].map((item) => (
              <Card key={item.title} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                    <Icon name={item.icon} className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6 text-balance">Готовы к первой планёрке?</h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Правильное взаимодействие с родителями и администрацией создаёт спокойную атмосферу для всей смены. Начните с доброжелательности — и всё получится.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Записаться на курс
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Icon name="MapPin" className="w-4 h-4 mr-2" />
              Как добраться
            </Button>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer id="contact" className="bg-secondary/50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">ШКОЛА ВОЖАТЫХ</div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Готовим вожатых к работе с детьми, родителями и командой лагеря. Принципы сотрудничества, а не наставничества.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  Телеграм
                </Button>
                <Button variant="outline" size="sm">
                  ВКонтакте
                </Button>
                <Button variant="outline" size="sm">
                  Рассылка
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Адрес</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>ул. Садовая, 123</p>
                <p>Учебный корпус</p>
                <p>Пн–Пт 9:00 — 18:00</p>
                <p>+7 (495) 123-45-67</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Темы курса</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Работа с родителями</p>
                <p>Взаимодействие с администрацией</p>
                <p>Конфликтные ситуации</p>
                <p>Безопасность детей</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Школа Вожатых. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
