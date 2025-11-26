import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const achievements = [
    { icon: "Award", title: "Высшая категория", description: "Педагог высшей квалификационной категории" },
    { icon: "BookOpen", title: "15+ лет опыта", description: "Успешная практика обучения детей" },
    { icon: "Users", title: "200+ учеников", description: "Выпускников начальной школы" },
    { icon: "Trophy", title: "Победы на олимпиадах", description: "Призеры городских и областных конкурсов" }
  ];

  const materials = [
    { icon: "FileText", title: "Методические разработки", description: "Авторские материалы для занятий" },
    { icon: "PenTool", title: "Рабочие тетради", description: "Дополнительные задания и упражнения" },
    { icon: "Presentation", title: "Презентации", description: "Интерактивные учебные материалы" },
    { icon: "BookMarked", title: "Учебные пособия", description: "Рекомендации по программе" }
  ];

  const testimonials = [
    {
      name: "Мария Ивановна",
      role: "Мама ученика 3 класса",
      text: "Благодаря профессионализму учителя, мой сын полюбил учиться. Индивидуальный подход и внимание к каждому ребенку - это то, что отличает настоящего педагога.",
      rating: 5
    },
    {
      name: "Алексей Петрович",
      role: "Отец ученицы 4 класса",
      text: "Дочь с радостью идет в школу каждый день. Учитель умеет заинтересовать детей, делает уроки увлекательными и познавательными. Спасибо за труд!",
      rating: 5
    },
    {
      name: "Анна, 10 лет",
      role: "Ученица 4 класса",
      text: "Наша учительница самая лучшая! Она объясняет так, что всё понятно, и всегда поддерживает нас. Уроки проходят интересно и весело!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Icon name="GraduationCap" size={32} className="text-primary" />
              <span className="text-xl font-bold text-primary">Начальная школа</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">Обо мне</a>
              <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
              <a href="#materials" className="text-foreground hover:text-primary transition-colors">Материалы</a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-accent hover:bg-accent/90">
              Записаться на консультацию
            </Button>
          </nav>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-accent text-white">Педагог начальных классов</Badge>
              <h1 className="text-5xl font-bold text-primary leading-tight">
                Елена Александровна Смирнова
              </h1>
              <p className="text-xl text-muted-foreground">
                Учитель высшей категории с 15-летним опытом работы. Помогаю детям открывать мир знаний с радостью и уверенностью.
              </p>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Mail" size={20} className="mr-2" />
                  Связаться со мной
                </Button>
                <Button size="lg" variant="outline">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/f0acdcbe-0840-4a9d-9eaf-ace46ec3e65e/files/3ab0b7ae-321e-47ca-95ef-d823b0f8bb8b.jpg" 
                alt="Елена Александровна" 
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Обо мне</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Образование и профессиональный путь
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Icon name="GraduationCap" size={32} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Образование</h3>
                    <p className="text-muted-foreground">
                      Московский педагогический государственный университет, факультет начального образования. 
                      Диплом с отличием, специальность "Учитель начальных классов".
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Icon name="Target" size={32} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Педагогическая философия</h3>
                    <p className="text-muted-foreground">
                      Верю, что каждый ребенок уникален и талантлив. Моя задача - создать комфортную среду для развития 
                      способностей каждого ученика, научить их думать самостоятельно и любить процесс познания.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Портфолио и достижения</h2>
            <p className="text-lg text-muted-foreground">
              Результаты работы и профессиональные награды
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name={achievement.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="methodology" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Методика обучения</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Современные подходы к образованию младших школьников
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Lightbulb" size={28} className="text-accent" />
                  <h3 className="text-xl font-semibold">Развивающее обучение</h3>
                </div>
                <p className="text-muted-foreground">
                  Использую методики, направленные на развитие критического мышления, творческих способностей 
                  и самостоятельности учащихся.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Users" size={28} className="text-primary" />
                  <h3 className="text-xl font-semibold">Индивидуальный подход</h3>
                </div>
                <p className="text-muted-foreground">
                  Учитываю особенности каждого ребенка, его темп освоения материала и личные интересы 
                  при планировании занятий.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Gamepad2" size={28} className="text-accent" />
                  <h3 className="text-xl font-semibold">Игровые технологии</h3>
                </div>
                <p className="text-muted-foreground">
                  Активно применяю игровые методы обучения, которые делают процесс познания увлекательным 
                  и эффективным.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Monitor" size={28} className="text-primary" />
                  <h3 className="text-xl font-semibold">ИКТ в образовании</h3>
                </div>
                <p className="text-muted-foreground">
                  Интегрирую современные информационные технологии для повышения качества и наглядности 
                  учебного процесса.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="materials" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Учебные материалы</h2>
            <p className="text-lg text-muted-foreground">
              Полезные ресурсы для учеников и родителей
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name={material.icon} size={28} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold">{material.title}</h3>
                  <p className="text-sm text-muted-foreground">{material.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="parents" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Информация для родителей</h2>
            <p className="text-lg text-muted-foreground">
              Важные сведения и рекомендации
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Calendar" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Расписание</h3>
                <p className="text-muted-foreground">График занятий и консультаций</p>
                <Button variant="link" className="text-accent">
                  Подробнее →
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="ClipboardList" size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Программа</h3>
                <p className="text-muted-foreground">Учебный план и требования</p>
                <Button variant="link" className="text-accent">
                  Подробнее →
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="HelpCircle" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">FAQ</h3>
                <p className="text-muted-foreground">Ответы на частые вопросы</p>
                <Button variant="link" className="text-accent">
                  Подробнее →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Отзывы родителей и учеников</h2>
            <p className="text-lg text-muted-foreground">
              Что говорят о моей работе
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Контакты</h2>
              <p className="text-lg text-muted-foreground">
                Свяжитесь со мной для консультации
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-semibold">elena.smirnova@school.edu</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Телефон</p>
                      <p className="font-semibold">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Адрес</p>
                      <p className="font-semibold">Школа №123, Москва</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Введите ваше имя"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Сообщение</label>
                      <textarea 
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-24 resize-none"
                        placeholder="Ваш вопрос или сообщение"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-accent hover:bg-accent/90" size="lg">
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Icon name="GraduationCap" size={28} className="text-primary-foreground" />
              <span className="text-lg font-semibold">Елена Александровна Смирнова</span>
            </div>
            <p className="text-primary-foreground/80">
              © 2024 Все права защищены
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Mail" size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Phone" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
