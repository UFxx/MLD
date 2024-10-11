export const Items = [
  {
    name: ['Malefic Gun', 'Губительный пулемет'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Malefic_Gun.webp',
    cost: 1940,
    stats: [
      '+45 Physical Attack +25% Attack Speed +15% Lifesteal',
      '+45 Физическая атака +25% Скорости атаки +15% Вампиризм'
    ],
    description: [
      'Unique Passive - Malefic Energy: Landing a skill increases Basic Attack range by 10% for 3 seconds (6 seconds cooldown). Unique Passive - Zeal: Basic Attacks grant 15% Movement Speed for 1 second.',
      'Уникальная пассивная способность - Malefic Energy: Приземление умения увеличивает дальность базовой атаки на 10% на 3 секунды (6 секунд кулдаун). Уникальная пассивка - Zeal: Базовые атаки дают 15% скорости передвижения на 1 секунду.'
    ]
  },
  {
    name: ['Great Dragon Spear', 'Копье Великого дракона'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Great_Dragon_Spear.webp',
    cost: 2140,
    stats: [
      '+70 Physical Attack +10% Cooldown Reduction +20% Crit Chance',
      '+70 Физическая атака +10% Уменьшение кулдауна +20% шанс крита'
    ],
    description: [
      'Unique Passive - Supreme Warrior: After casting an Ultimate, increase Movement Speed by 30% for 7.5 seconds This effect has a 15 seconds cooldown',
      'Уникальная пассивка - Supreme Warrior: После применения ультимейта увеличивает скорость передвижения на 30% на 7,5 секунды Этот эффект действует 15 секунд.'
    ]
  },
  {
    name: ['Sea Halberd', 'Трезубец'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Sea_Halberd.webp',
    cost: 2050,
    stats: [
      '+80 Physical Attack +20% Attack Speed',
      '+80 Физическая атака +20% Скорость атаки'
    ],
    description: [
      'Unique Passive - Lifebane: Dealing damage to a target will reduce the Shield and HP Regen effects on them to 50% of normal for 3 seconds. Unique Passive - Punish: Increase damage by 8% against enemy heroes with higher extra HP.',
      'Уникальная пассивная способность - Lifebane: при нанесении урона цели эффекты Shield и HP Regen снижаются до 50% от обычных на 3 секунды. Уникальная пассивка - Punish: увеличивает урон на 8 % против вражеских героев с большим количеством дополнительных HP.'
    ]
  },
  {
    name: ['Rose Gold Meteor', 'Золотой метеор'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Rose_Gold_Meteor.webp',
    cost: 1820,
    stats: [
      '+60 Physical Attack +23 Magic Defense +10% Lifesteal',
      '+60 Физическая атака +23 Магическая защита +10% Вампиризм'
    ],
    description: [
      'Unique Passive - Lifeline: When taking damage that reduces HP below 30%, gains a 770(+70*Hero Level) shield (increases with level) and 50% Movement Speed that rapidly decays over 3 seconds. This effect has a 60 seconds cooldown.',
      'Уникальная пассивная способность - Lifeline: При получении урона, снижающего HP ниже 30%, получает 770(+70*уровень героя) щита (увеличивается с уровнем) и 50% скорости передвижения, которая быстро снижается в течение 3 секунд. Этот эффект действует 60 секунд.'
    ]
  },
  {
    name: ['Hunter Strike', 'Удар охотника'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Hunter_Strike.webp',
    cost: 2010,
    stats: [
      '+80 Physical Attack +10% Cooldown Reduction',
      '+80 Физическая атака +10% уменьшение куладуна'
    ],
    description: [
      'Unique Attribute: +15 Physical Penetration Unique Passive - Retribution: Deals damage to an enemy hero or Creep for 5 times in a row and improves Movement Speed by 50% that decays rapidly over 3 seconds. This effect has 8 seconds cooldown.',
      'Уникальный атрибут: +15 Physical Penetration Уникальная пассивка - Retribution: 5 раз подряд наносит урон вражескому герою или крипу и повышает скорость передвижения на 50%, которая быстро снижается в течение 3 секунд. Этот эффект действует 8 секунд.'
    ]
  },
  {
    name: ['Blade of Despair', 'Клинок отчаяния'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Blade_of_Despair.webp',
    cost: 3010,
    stats: [
      '+160 Physical Attack +5% Movement Speed',
      '+160 Физическая атака +5% скорости передвижения'
    ],
    description: [
      'Unique Passive - Despair: Attacking enemies below 50% HP grants 25% extra Physical Attack for 2 seconds (takes effect before the damage is dealt).',
      'Уникальная пассивная способность - Отчаяние: Атакуя врагов с уровнем HP ниже 50%, вы получаете 25% дополнительной физической атаки на 2 секунды (действует до нанесения урона).'
    ]
  },
  {
    name: ['Blade of the Heptaseas', 'Клинок семи морей'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Blade_of_the_Heptaseas.webp',
    cost: 1950,
    stats: ['+70 Physical Attack +250 HP', '+70 Физическая атака +250 HP'],
    description: [
      'Unique Attribute: +15 Physical PEN Unique Passive - Ambush: If no damage is dealt or taken from enemy heroes within 5 seconds, the next Basic Attack deals 160 (40% Total Physical Attack) as extra Physical Damage and slows the target by [40% for 1.5 seconds].',
      'Уникальный атрибут: +15 Physical PEN Уникальная пассивная способность - Засада: если в течение 5 секунд вражеские герои не наносят и не получают урона, следующая базовая атака наносит 160 (40% общей физической атаки) дополнительного физического урона и замедляет цель на [40% на 1,5 секунды].'
    ]
  },
  {
    name: ['Windtalker', 'Говорящий с ветром'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Windtalker.webp',
    cost: 1820,
    stats: [
      '+20 Physical Attack +35% Attack Speed +10% Crit Chance +20 Movement Speed',
      '+20 Физическая атака +35% скорости атаки +10% шанс крита +20 Скорость передвижения'
    ],
    description: [
      'Unique Passive - Typhoon: Every 5–2 seconds (reduced by 0.2 seconds for each Basic Attack), the next Basic Attack will hit up to 3 enemy units for 150–362 Magic Damage. (This attack can critically strike and the damage increases to 200% against Minions.)',
      'Уникальная пассивная способность - "Тайфун": Каждые 5-2 секунды (уменьшается на 0,2 секунды за каждую базовую атаку) следующая базовая атака поражает до 3 врагов, нанося 150-362 ед. магического урона. (Эта атака может нанести критический удар, а урон увеличивается до 200% против миньонов).'
    ]
  },
  {
    name: ['Endless Battle', 'Бесконечная битва'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Endless_Battle.webp',
    cost: 2330,
    stats: [
      '+60 Physical Attack +250 HP +10% Cooldown Reduction +8% Hybrid Lifesteal +5% Movement Speed +5 Mana Regen',
      '+60 физической атаки +250 HP +10% уменьшение кулдауна +8% Гибридный вампиризм +5% Скорость передвижения +5 реген маны'
    ],
    description: [
      'Unique Passive - Divine Justice: After casting a skill, the next Basic Attack within 3 seconds deals 60% Physical Attack as extra True Damage (1.5 seconds cooldown). Unique Passive - Chase Fate: Triggering Divine Justice grants 10% extra Movement Speed.',
      'Уникальная пассивная способность - "Божественное правосудие": После применения умения следующая базовая атака в течение 3 секунд наносит 60% физической атаки в качестве дополнительного истинного урона (1,5 секунды кулдаун). Уникальная пассивная способность - Chase Fate: срабатывание Божественного правосудия дает 10 % дополнительной скорости передвижения.'
    ]
  },
  {
    name: ["Bersekrer's Fury", 'Ярость берсерка'],
    category: 'Attack',
    img: "assets/images/Items/Attack/Berserker's_Fury.webp",
    cost: 2390,
    stats: [
      '+65 Physical Attack +25% Crit Chance',
      '+65 Физическая атака +25% шанс крита'
    ],
    description: [
      'Unique Attribute: +40% Crit Damage Unique Passive - Doom: Critical strikes grant 5% extra Physical Attack for 2 seconds.',
      'Уникальный атрибут: +40% критического урона Уникальная пассивная способность - Doom: критические удары дают 5% дополнительной физической атаки на 2 секунды.'
    ]
  },
  {
    name: ["Haas's Claws", 'Когти Хааса'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Haass_Claws.webp',
    cost: 2020,
    stats: [
      '+30 Physical Attack +15% Attack Speed +20% Crit Chance',
      '+30 физической атаки +15% скорости атаки +20% шанс крита'
    ],
    description: [
      'Unique Attribute: +25% Lifesteal Unique Passive - Frenzy: Critical strikes grant 20% extra Attack Speed for 2 seconds.',
      'Уникальное свойство: +25% Вампиризма Уникальная пассивная способность - Frenzy: Критические удары дают 20% дополнительной скорости атаки на 2 секунды.'
    ]
  },
  {
    name: ['Malefic Roar', 'Злобный рык'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Malefic_Roar.webp',
    cost: 2060,
    stats: ['+60 Physical Attack', '+60 физической атаки'],
    description: [
      "Unique Attribute: +20% Physical Penetration Unique Passive - Armor Buster: When attacking an enemy, gains 0.125% extra Physical Penetration to each point of the enemy's Physical Defense, capped at 40%.",
      'Уникальный атрибут: +20% физического проникновения Уникальная пассивная способность - Armor Buster: Атакуя врага, получает 0,125% дополнительного физического проникновения к каждому пункту физической защиты противника, максимальное значение - 40%.'
    ]
  },
  {
    name: ['Winter Crown', 'Зимняя корона'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Winter_Crown.webp',
    cost: 1910,
    stats: [
      '+45 Adaptive Attack +400 HP +5% Cooldown Reduction',
      '+45 Адаптивная атака +400 HP +5% уменьшение кулдауна'
    ],
    description: [
      "Unique Active - Frozen: Become frozen, untarge, and immune to damage for 2 seconds (100 seconds cooldown). Cannot move or cast skills while frozen, but skills already cast won't be interrupted.",
      'Уникальная активность - "Заморозка": Станьте замороженным, незаряженным и невосприимчивым к урону на 2 секунды (100 секунд продлится). Во время заморозки нельзя двигаться и применять умения, но уже примененные умения не будут прерваны.'
    ]
  },
  {
    name: ['Fleeting Time', 'Мимолетное время'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Fleeting_Time.webp',
    cost: 2050,
    stats: [
      '+30 Adaptive Attack +600 HP +15% Cooldown Reduction',
      '+30 Адаптивная атака +600 HP +15% уменьшение кулдауна'
    ],
    description: [
      "Unique Passive - Timestream: Hero kills or assists reduce the Ultimate's current cooldown by 30%.",
      'Уникальная пассивная способность - Timestream: убийства или помощь героя уменьшают текущее время действия Ultimate на 30%.'
    ]
  },
  {
    name: ['Sky Piercer', 'Пронзающий небеса'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Sky_Piercer.webp',
    cost: 1500,
    stats: [
      '+60 Adaptive Attack +15 Movement Speed',
      '+60 Адаптивная атака +15 Скорость передвижения'
    ],
    description:
      'Уникальная пассивка - Смертоносность: После нанесения урона вражескому герою казнит его, если его HP меньше 4%. Получает 10 стаков "Смертоносности" за каждое убийство и теряет 30% текущего стака за каждую смерть. Каждый стек "Смертоносности" увеличивает порог HP для эффекта казни на 0,1% и накапливается 80 раз.'
  },
  {
    name: ['War Axe', 'Топор войны'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/War_Axe.webp',
    cost: 2100,
    stats: [
      '+60 Adaptive Attack +15 Movement Speed',
      '+35 Физическая атака +400 HP +10% уменьшение кулдауна +12% Вампиризм от навыков'
    ],
    description: [
      'Unique Passive - Lethality: After dealing damage to an enemy hero, executes the hero if their HP is lower than 4%. Gains 10 stack(s) of Lethality for each kill and loses 30% current stack(s) for each death. Each stack of Lethality increases the HP threshold of the execute effect by 0.1%, stacking up 80 times.',
      'Уникальная пассивная способность - Боевой дух: Нанесение урона дает 12 дополнительной физической атаки в секунду в течение 4 секунд, до 6 стаков. Наносит 10% дополнительного истинного урона от базового урона при полных стаках. (Этот эффект снижается до 50% для стрелков, магов и бойцов поддержки)'
    ]
  },
  {
    name: ['Wind of Nature', 'Ветер природы'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Wind_of_Nature.webp',
    cost: 1910,
    stats: [
      '+35 Physical Attack +40 HP +10% Cooldown Reduction +12% Spell Vamp',
      '+30 физической атаки +20% скорости атаки +10% Вампиризм'
    ],
    description: [
      'Unique Passive - Fighting Spirit: Dealing damage grants 12 extra Physical Attack per second for 4 seconds, up to 6 stacks. Deal 10% extra True Damage according to Base Damage at full stacks. (This effect is reduced to 50% for Marksmen, Mages, and Supports)',
      'Уникальная активность - Wind Chant: Невосприимчивость к любому физическому урону. Действует 2 секунды. (Длительность уменьшается вдвое при использовании не маркерами). Время действия 70 секунд.'
    ]
  },
  {
    name: ['Golden Staff', 'Золотой посох'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Golden_Staff.webp',
    cost: 2000,
    stats: [
      '+30 Physical Attack +20% Attack Speed +10% Lifesteal',
      '+55 Физическая атака +15% скорости атаки'
    ],
    description: [
      'Unique Passive - Swift: Unable to increase critical chance. Every 1% of critical chance gained will increase attack speed by 1%. Unique Passive - Endless Strike: After every 2 non-critical Basic Attacks. Attack Speed of the next Basic Attack is increased by 80% and its effects is triggered an extra 2 time(s).',
      'Уникальная пассивка - Swift: Невозможно увеличить критический шанс. Каждый 1% полученного критического шанса увеличивает скорость атаки на 1%. Уникальная пассивка - Бесконечный удар: После каждых 2 некритических базовых атак. Скорость атаки следующей базовой атаки увеличивается на 80%, а ее эффекты срабатывают дополнительно 2 раза(а).'
    ]
  },
  {
    name: ['Corrosion Scythe', 'Коса коррозии'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Corrosion_Scythe.webp',
    cost: 2050,
    stats: [
      '+30 Physical Attack +30% Attack Speed +5% Movement Speed',
      '+30 физической атаки +30% скорости атаки +5% скорости передвижения'
    ],
    description: [
      "Unique Passive - Corrosive: Each time a Basic Attack deals damage to enemies, gains additional 80 Physical Damage and reduces the target's Movement Speed by 8% (halved for ranged Basic Attacks) for 1.5 seconds. Stacking up to 5 times. Unique Passive - Impulse: When each Basic Attack deals damage to enemies, increase Attack Speed by 6%. Stacks up to 5 times. Lasts 3 seconds.",
      'Уникальная пассивка - Corrosive: Каждый раз, когда базовая атака наносит урон врагам, получает дополнительно 80 ед. физического урона и снижает скорость передвижения цели на 8% (вдвое для дальних базовых атак) на 1,5 секунды. Стакается до 5 раз. Уникальная пассивная способность - "Импульс": когда каждая базовая атака наносит урон врагам, скорость атаки увеличивается на 6%. Стакается до 5 раз. Действует 3 секунды.'
    ]
  },
  {
    name: ['Demon Hunter Sword', 'Меч охотника на демонов'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Demon_Hunter_Sword.webp',
    cost: 2180,
    stats: [
      '+35 Physical Attack +20% Attack Speed',
      '+35 Физическая атака +20% скорости атаки'
    ],
    description: [
      "Unique Passive - Devour: Basic attacks will deal 8% of the target's current HP as additional physical damage (up to 60 against creeps and minions). Unique Passive - Devour: Each Basic Attack grants 3% Lifesteal for 3 seconds. Stack up to 5 times.",
      'Уникальная пассивная способность - Devour: базовые атаки наносят 8% от текущего HP цели в виде дополнительного физического урона (до 60 против крипов и миньонов). Уникальная пассивная способность - Devour: каждая базовая атака дает 3% Lifesteal на 3 секунды. Стакается до 5 раз.'
    ]
  },
  {
    name: ['Swift Crossbow', 'Быстрый арбалет'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Swift_Crossbow.webp',
    cost: 1000,
    stats: ['+20% Attack Speed', '+20% скорости атаки'],
    description: [
      'Unique Passive - Crossbow: Each Basic Attack deals 40 extra Adaptive Damage. Unique Passive - Impulse: Basic Attacks grant 3% extra Attack Speed for 3 seconds, capped at 5 stacks.',
      'Уникальная пассивная способность - Арбалет: Каждая базовая атака наносит 40 единиц дополнительного адаптивного урона. Уникальная пассивная способность - "Импульс": базовые атаки дают 3% дополнительной скорости атаки на 3 секунды, максимальное количество стаков - 5.'
    ]
  },
  {
    name: ['Magic Blade', 'Магический клинок'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Magic_Blade.webp',
    cost: 1050,
    stats: [
      '+40 Physical Attack +18 Magic Defense',
      '+40 Физическая атака +18 Магическая защита'
    ],
    description: [
      'Unique Passive - Lifeline: When taking damage that reduces HP below 30%, gains a 385(+35*Hero Level) shield (increases with level) and 50% Movement Speed that rapidly decays over 3 seconds. This effect has a 60 seconds cooldown.',
      'Уникальная пассивная способность - Lifeline: При получении урона, снижающего HP ниже 30%, получает 385(+35*уровень героя) щита (увеличивается с уровнем) и 50% скорости передвижения, которые быстро снижаются в течение 3 секунд. Этот эффект действует 60 секунд.'
    ]
  },
  {
    name: ['Fury Hammer', 'Молот гнева'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Fury_Hammer.webp',
    cost: 830,
    stats: ['+35 Physical Attack', '+35 Физическая атака'],
    description: [
      'Unique Attribute: +12 Physical Penetration',
      'Уникальный атрибут: +12 Физическое проникновение'
    ]
  },
  {
    name: ['Rogue Meteor', 'Кистень грабителя'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Rogue_Meteor.webp',
    cost: 900,
    stats: [
      '+15% Attack Speed +10% Crit Chance',
      '+15% скорости атаки +10% шанс крита'
    ],
    description: ['+', '+']
  },
  {
    name: ['Ogre Tomahawk', 'Топор великана'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Ogre_Tomahawk.webp',
    cost: 650,
    stats: ['+25 Physical Attack +230 HP', '+25 Physical Attack +230 HP'],
    description: ['+', '+']
  },
  {
    name: ['Legion Sword', 'Меч легионера'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Legion_Sword.webp',
    cost: 910,
    stats: ['+60 Physical Attack', '+60 физической атаки'],
    description: ['+', '+']
  },
  {
    name: ['Regular Spear', 'Обычное копье'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Regular_Spear.webp',
    cost: 600,
    stats: [
      '+20 Physical Attack +10% Attack Speed',
      '+20 Физическая атака +10% скорости атаки'
    ],
    description: ['+', '+']
  },
  {
    name: ['Expert Gloves', 'Перчатки эксперта'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Expert_Gloves.webp',
    cost: 500,
    stats: ['+30 Adaptive Attack', '+30 Адаптивная атака'],
    description: ['+', '+']
  },
  {
    name: ['Iron Hunting Bow', 'Железный лук охотника'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Iron_Hunting_Bow.webp',
    cost: 450,
    stats: [
      '+10 Physical Attack +5% Cooldown Reduction',
      '+10 Физическая атака +5% уменьшение кулдауна'
    ],
    description: ['+', '+']
  },
  {
    name: ['Vampire Mallet', 'Булава вампира'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Vampire_Mallet.webp',
    cost: 400,
    stats: [
      '+8 Physical Attack +8% Lifesteal',
      '+8 Физическая атака +8% Вампиризм'
    ],
    description: ['+', '+']
  },
  {
    name: ['Javelin', 'Копье'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Javelin.webp',
    cost: 320,
    stats: ['+8% Crit Chance', '+8% шанс крита'],
    description: ['+', '+']
  },
  {
    name: ['Knife', 'Нож'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Knife.webp',
    cost: 280,
    stats: ['+10% Attack Speed', '+10% скорости атаки'],
    description: ['+', '+']
  },
  {
    name: ['Dagger', 'Кинжал'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Dagger.webp',
    cost: 250,
    stats: ['+15 Physical Attack', '+15 Физическая атака'],
    description: ['+', '+']
  },
  {
    name: ['Power Potion', 'Зелье силы'],
    category: 'Attack',
    img: 'assets/images/Items/Attack/Power_Potion.webp',
    cost: 1500,
    stats: ['', ''],
    description: [
      'Unique Passive - Increase Power: Automatically used after purchasing, giving 30 Physical Attack and 15% of Lifesteal for 120s. Can only have one potion effect at a time.',
      'Уникальная пассивка - Increase Power: Автоматически используется после покупки, давая 30 физической атаки и 15% Lifesteal на 120 с. Одновременно может действовать только одно зелье.'
    ]
  },
  {
    name: ['Wishing Lantern', 'Фонарь желаний'],
    category: 'Magic',
    img: 'assets/images/Items/Magic/Wishing_Lantern.webp',
    cost: 2160,
    stats: [
      '+70 Magic Power +10% Cooldown Reduction',
      '+70 Магическая сила +10% уменьшение куладуна'
    ],
    description: [
      'Unique Passive - Butterfly Goddess: For every 800 Magic Damage dealt to an enemy hero (calculated before damage reduction), a Butterfly Goddess is summoned to attack the enemy hero, dealing Magic Damage equal to 10% of their Current HP.',
      'Уникальная пассивная способность - Богиня-бабочка: За каждые 800 ед. магического урона, нанесенного вражескому герою (рассчитывается до снижения урона), вызывается богиня-бабочка, которая атакует вражеского героя, нанося ему магический урон, равный 10% от его текущих HP.'
    ]
  },
  {
    name: ['Flask of the Oasis', 'Фляга Оазиса'],
    category: 'Magic',
    img: 'assets/images/Items/Magic/Flask_of_the_Oasis.webp',
    cost: 1850,
    stats: [
      '+60 Magic Power +300 HP +10% Cooldown Reduction',
      '+60 Магическая сила +300 HP +10% уменьшение кулдауна'
    ],
    description: [
      "Unique Attribute: +12% Healing Effect Unique Passive - Blessing: When casting a healing or shielding skill, if the target's HP is below 35% or falls below 35% within 3 seconds, they will get a (100*Hero Level)) that lasts 3 seconds. When this effect triggers, it also reduces the cooldown of the caster's skills by 2 seconds. (This effect can only trigger once every 60 seconds on the same target, and will not trigger on self-onl healing and shield skills.)",
      'Уникальный атрибут: +12% эффекта исцеления Уникальная пассивная способность - Благословение: Если при применении умения исцеления или защиты от щита HP цели ниже 35% или падает ниже 35% в течение 3 секунд, она получает (100*уровень героя)), который длится 3 секунды. Когда этот эффект срабатывает, он также уменьшает время действия умений кастера на 2 секунды. (Этот эффект может срабатывать только раз в 60 секунд на одну и ту же цель и не срабатывает при использовании умений самоисцеления и щита).'
    ]
  },
  {
    name: ['Genius Wand', 'Палочка гения'],
    category: 'Magic',
    img: 'assets/images/Items/Magic/Genius_Wand.webp',
    cost: 2000,
    stats: [
      '+75 Magic Power +5% Movement Speed',
      '+75 Сила магии +5% Скорость передвижения'
    ],
    description: [
      'Unique Attribute: +10 Magic Penetration Unique Passive - Magic: Dealing damage to enemy heroes will reduce their Magic Defense by 3+(0.3*Hero Level) for 2 seconds. Stacks up to 3 times.',
      'Уникальный атрибут: +10 Проникновение магии Уникальная пассивка - Магия: Нанесение урона вражеским героям снижает их магическую защиту на 3+(0,3*уровень героя) на 2 секунды. Стакается до 3 раз.'
    ]
  },
  {
    name: ['Lightning Truncheon', 'Жезл молний'],
    category: 'Magic',
    img: 'assets/images/Items/Magic/Lightning_Truncheon.webp',
    cost: 2250,
    stats: [
      '+75 Magic Power +400 Mana +10% Cooldown Reduction',
      '+75 Магическая сила +400 маны +10% уменьшение кулдауна'
    ],
    description: [
      'Unique Passive - Resonate: Every 6 seconds, the next skill that deals damage will resonate, dealing (120% Magic Power) extra Magic Damage to up to 3 enemies and speeding up the hero by 30%, which decays over 2 seconds.',
      'Уникальная пассивка - Резонанс: Каждые 6 секунд следующее умение, наносящее урон, резонирует, нанося (120% магической силы) дополнительный магический урон до 3 врагов и ускоряя героя на 30%, который снижается в течение 2 секунд.'
    ]
  },
  {
    name: ['Blood Wings', 'Кровавые крылья'],
    category: 'Magic',
    img: 'assets/images/Items/Magic/Blood_Wings.webp',
    cost: 2100,
    stats: ['+90 Magic Power', '+90 Магическая сила'],
    description: [
      'Unique Passive - Guard: Gains a (800 +100% Magic Power) Shield that will regenerate 20 seconds after being damaged. The Shield also grants 30 Movement Speed while it lasts and 150 Movement Speed for 1 second after it breaks.',
      'Уникальная пассивка - Страж: Получает щит (800 +100% магической силы), который регенерирует через 20 секунд после получения урона. Щит также дает 30 скорости передвижения, пока длится, и 150 скорости передвижения в течение 1 секунды после разрушения.'
    ]
  },
  {
    name: ['Starlium Scythe', 'Старлиумовая коса'],
    category: 'Magic',
    img: 'assets/images/Items/Magic/Starlium_Scythe.webp',
    cost: 2220,
    stats: [
      '+70 Magic Power +10% Cooldown Reduction +8% Hybrid Lifesteal +6 Mana Regen',
      '+70 Магическая сила +10% уменьшение кулдауна +8% Гибридная кража жизни +6 реген маны'
    ],
    description: [
      "Unique Passive - Crisis: In 3 seconds after using the skill, the caster's next Basic Attack will apply additional 100 (+100% Total Magic Power) True Damage with a cooldown of 1.5 seconds. Then briefly gains 10% Movement Speed",
      'Уникальная пассивная способность - Кризис: После применения умения следующая базовая атака в течение 3 секунд наносит 100% магической силы в качестве дополнительного истинного урона и дает 10% дополнительной скорости передвижения. (1,5 секунды кулдаун).'
    ]
  },
  {
    name: ['Glowing Wand', 'Пылающий жезл'],
    category: 'Magic',
    img: 'assets/images/Items/Magic/Glowing_Wand.webp',
    cost: 2150,
    stats: [
      '+75 Magic Power +400 HP +5% Movement Speed',
      '+75 Магическая сила +400 HP +5% скорости передвижения'
    ],
    description: [
      "Unique Passive - Scorch: Burn targets for 3 seconds, dealing Magic Damage equal to 1.5% of the target's Max HP per second. Unique Passive - Lifebane: Upon dealing damage to the target, reduces Shield and HP Regen of the target by 50% for 3 seconds.",
      'Уникальная пассивная способность - Scorch: Сжигает цели на 3 секунды, нанося магический урон, равный 1,5% от максимального HP цели в секунду. Уникальная пассивная способность - Lifebane: при нанесении урона цели уменьшает реген щита и HP цели на 50% на 3 секунды.'
    ]
  },
  {
    name: ['Ice Queen Ward', 'Жезл снежной королевы'],
    category: 'Magic',
    img: 'assets/images/Items/Magic/Ice_Queen_Wand.webp',
    cost: 2240,
    stats: [
      '+75 Magic Power +10% Spell Vamp +300 HP +7% Movement Speed',
      '+75 Магическая сила +10% Вампиризм от навыков +300 HP +7% Скорость передвижения'
    ],
    description: [
      'Unique Passive - Ice Bound: When a skill deals damage to an enemy hero, it will also slow them by 10% for 2 seconds (stacks up to 3 times). This effect has a 1 second cooldown.',
      'Уникальная пассивка - Ice Bound: Когда умение наносит урон вражескому герою, оно также замедляет его на 10% на 2 секунды (стакается до 3 раз). Этот эффект действует в течение 1 секунды.'
    ]
  },
  {
    name: ['Concentrated Energy', 'Концентрированная энергия'],
    category: 'Magic',
    img: 'assets/images/Items/Magic/Concentrated_Energy.webp',
    cost: 2020,
    stats: ['+70 Magic Power +400 HP', '+70 Магическая сила +400 HP'],
    description: [
      'Unique Attribute: +20% Hybrid Lifesteal Unique Passive - Recharge: Increases Magic Power by 5 after dealing Magic Damage (this effect stacks up to 6 times and can only gain 1 stack every 0.4 second). When reaching full stacks, increases Magic Damage by 12% for 3 seconds.',
      'Уникальное свойство: +20% Гибридная кража жизни Уникальная пассивная способность - Recharge: Увеличивает магическую силу на 5 после нанесения магического урона (этот эффект стакается до 6 раз и может набирать только 1 стак каждые 0,4 секунды). При достижении полного стака увеличивает магический урон на 12% на 3 секунды.'
    ]
  },
  {
    name: ['Holy Crystal', 'Священный кристалл'],
    category: 'Magic',
    img: 'assets/images/Items/Magic/Holy_Crystal.webp',
    cost: 3000,
    stats: ['+185 Magic Power', '+185 Магическая сила'],
    description: [
      'Unique Passive - Mystery: Increases Magic Power by 21%-35% (Scales with level).',
      'Уникальная пассивка - Тайна: увеличивает силу магии на 21%-35% (зависит от уровня).'
    ]
  },
  {
    name: ['Divine Glaive', 'Божественный меч'],
    category: 'Magic',
    img: 'assets/images/Items/Magic/Divine_Glaive.webp',
    cost: 1970,
    stats: ['+65 Magic Power', '+65 Магическая сила'],
    description: [
      "Unique Attribute: +40% Magic Penetration Unique Passive - Spellbreaker: Each point of the enemy's Magic Defense increases Magic Penetration by 0.1% when dealing damage to it, capped at 20%.",
      'Уникальный атрибут: +40% проникновения магии Уникальная пассивная способность - Spellbreaker: Каждое очко магической защиты противника увеличивает проникновение магии на 0,1% при нанесении ему урона, максимальное значение - 20%.'
    ]
  },
  {
    name: ['Clock of Destiny', 'Часы судьбы'],
    category: 'Magic',
    img: 'assets/images/Items/Magic/Clock_of_Destiny.webp',
    cost: 1950,
    stats: [
      '+45 Magic Power +400 HP +800 Mana',
      '+45 Магическая сила +400 HP +800 маны'
    ],
    description: [
      'Unique Passive - Destiny: Gains 4.5(+0.5*Hero Level) Hybrid Defense for 5 seconds when dealing Magic Damage to enemy heroes, stacking up to 6 times (can gain 1 stack every 0.4 second). Unique Passive - Gift: When HP drops below 50%, recovers 15% of HP over the next 3 seconds. When Mana drops below 50%, restores 15% of Mana over the next 3 seconds. Cooldown: 60 seconds.',
      'Уникальная пассивка - Судьба: Получает 4,5(+0,5*уровень героя) гибридной защиты на 5 секунд при нанесении магического урона вражеским героям, стакается до 6 раз (может получить 1 стак каждые 0,4 секунды). Уникальная пассивка - Подарок: Когда HP падает ниже 50%, восстанавливает 15% HP в течение следующих 3 секунд. Когда количество маны падает ниже 50%, восстанавливает 15% маны в течение следующих 3 секунд. Время действия: 60 секунд.'
    ]
  },
  {
    name: ['Winter Crown', 'Зимняя корона'],
    category: 'Magic',
    img: 'assets/images/Items/Magic/Winter_Crown.webp',
    cost: 1910,
    stats: [
      '+45 Adaptive Attack +400 HP +5% Cooldown Reduction',
      '+45 Адаптивная атака +400 HP +5% уменьшение кулдауна'
    ],
    description: [
      "Unique Active - Frozen: Become frozen, untarge, and immune to damage for 2 seconds (100 seconds cooldown). Cannot move or cast skills while frozen, but skills already cast won't be interrupted.",
      'Уникальная активность - "Заморозка": Станьте замороженным, незаряженным и невосприимчивым к урону на 2 секунды (100 секунд продлится). Во время заморозки нельзя двигаться и применять умения, но уже примененные умения не будут прерваны.'
    ]
  },
  {
    name: ['Fleeting Time', 'Мимолетное время'],
    category: 'Magic',
    img: 'assets/images/Items/Magic/Fleeting_Time.webp',
    cost: 2050,
    stats: [
      '+30 Adaptive Attack +600 HP +15% Cooldown Reduction',
      '+30 Адаптивная атака +600 HP +15% уменьшение кулдауна'
    ],
    description: [
      "Unique Passive - Timestream: Hero kills or assists reduce the Ultimate's current cooldown by 30%.",
      'Уникальная пассивная способность - Timestream: убийства или помощь героя уменьшают текущее время действия Ultimate на 30%.'
    ]
  },
  {
    name: ['Sky Piercer', 'Пронзающий небеса'],
    category: 'Magic',
    img: 'assets/images/Items/Magic/Sky_Piercer.webp',
    cost: 1500,
    stats: [
      '+60 Adaptive Attack +15 Movement Speed',
      '+60 Адаптивная атака +15 Скорость передвижения'
    ],
    description: [
      'Unique Passive - Lethality: After dealing damage to an enemy hero, executes the hero if their HP is lower than 4%. Gains 10 stack(s) of Lethality for each kill and loses 30% current stack(s) for each death. Each stack of Lethality increases the HP threshold of the execute effect by 0.1%, stacking up 80 times.',
      'Уникальная пассивка - Смертоносность: После нанесения урона вражескому герою казнит его, если его HP меньше 4%. Получает 10 стаков "Смертоносности" за каждое убийство и теряет 30% текущего стака за каждую смерть. Каждый стек "Смертоносности" увеличивает порог HP для эффекта казни на 0,1% и накапливается 80 раз.'
    ]
  },
  {
    name: ['Feather of Heaven', 'Райское перо'],
    category: 'Magic',
    img: 'assets/images/Items/Magic/Feather_of_Heaven.webp',
    cost: 2030,
    stats: [
      '+55 Magic Power +20% Attack Speed +10% Lifesteal +5% Cooldown Reduction',
      '+55 Магическая сила +20% скорости атаки +10% Вампиризм +5% уменьшение кулдауна'
    ],
    description: [
      'Unique Passive - Affliction: Basic Attacks deal extra 50 (+30% Magic Power) Magic Damage. Unique Passive - Impulse: When each Basic Attack deals damage to enemies, increase Attack Speed by 6%. Stacks up to 5 times. Lasts 3 seconds.',
      'Уникальная пассивная способность - Affliction: Базовые атаки наносят дополнительно 50 (+30% магической силы) магического урона. Уникальная пассивная способность - Impulse: когда каждая базовая атака наносит урон врагам, скорость атаки увеличивается на 6%. Стакается до 5 раз. Действует 3 секунды.'
    ]
  },
  {
    name: ['Enchanted Talisman', 'Зачарованный талисман'],
    category: 'Magic',
    img: 'assets/images/Items/Magic/Enchanted_Talisman.webp',
    cost: 1870,
    stats: [
      '+50 Magic Power +250 HP +20% Cooldown Reduction',
      '+50 Магическая сила +250 HP +20% уменьшение кулдауна'
    ],
    description: [
      'Unique Passive - Mana Spring: Regenerates 15% of Max Mana every 10 seconds in total. Unique Passive - Magic Mastery: Max CD Reduction increased by 5%.',
      'Уникальная пассивка - Mana Spring: Регенерирует 15% максимальной маны каждые 10 секунд. Уникальная пассивка - Magic Mastery: Максимальное снижение КД увеличено на 5%.'
    ]
  },
  {
    name: ['Elegant Gem', 'Элегантный самоцвет'],
    category: 'Magic',
    img: 'assets/images/Items/Magic/Elegant_Gem.webp',
    cost: 700,
    stats: ['+300 HP +380 Mana', '+300 HP +380 мана'],
    description: [
      'Unique Passive - Gift: When HP drops below 50%, recovers 15% of HP over the next 3 seconds. When Mana drops below 50%, restores 15% of Mana over the next 3 seconds. Cooldown: 60 seconds.',
      'Уникальная пассивная способность - Подарок: Когда HP падает ниже 50%, восстанавливает 15% HP в течение следующих 3 секунд. Когда количество маны падает ниже 50%, восстанавливает 15% маны в течение следующих 3 секунд. Время действия: 60 сек.'
    ]
  },
  {
    name: ['Exotic Veil', 'Книга мудрости'],
    category: 'Magic',
    img: 'assets/images/Items/Magic/Exotic_Veil.webp',
    cost: 600,
    stats: [
      '+30 Magic Power +5% Movement Speed',
      '+30 Магическая сила +5% Скорость передвижения'
    ],
    description: ['+', '+']
  },
  {
    name: ['Azure Blade', 'Лазурный клинок'],
    category: 'Magic',
    img: 'assets/images/Items/Magic/Azure_Blade.webp',
    cost: 600,
    stats: [
      '+25 Mana Regen +5% Cooldown Reduction',
      '+25 регенерация маны +5% уменьшение кулдауна'
    ],
    description: [
      "Unique Passive - Judgement: In 3 seconds after using the skill, the caster's next Basic Attack will deal additional 50 True Damage with a cooldown of 1.5 seconds.",
      'Уникальная пассивная способность - "Суждение": Через 3 секунды после использования умения следующая базовая атака кастера нанесет дополнительные 50 единиц истинного урона с периодом ожидания 1,5 секунды.'
    ]
  },
  {
    name: ['Tome of Evil', 'Книга зла'],
    category: 'Magic',
    img: 'assets/images/Items/Magic/Tome_of_Evil.webp',
    cost: 950,
    stats: [
      '+35 Magic Power +20 Mana Regen +8% Cooldown Reduction',
      '+35 Магическая сила +20 Реген маны +8% уменьшение кулдауна'
    ],
    description: ['+', '+']
  },
  {
    name: ['Magic Wand', 'Волшебная палочка'],
    category: 'Magic',
    img: 'assets/images/Items/Magic/Magic_Wand.webp',
    cost: 820,
    stats: ['+45 Magic Power', '+45 Магическая сила'],
    description: ['+', '+']
  },
  {
    name: ['Mystic Container', 'Загадочный сосуд'],
    category: 'Magic',
    img: 'assets/images/Items/Magic/Mystic_Container.webp',
    cost: 500,
    stats: [
      '+15 Magic Power +8% Spell Vamp',
      '+15 Магическая сила +8% Вампиризм от навыков'
    ],
    description: ['+', '+']
  },
  {
    name: ['Expert Gloves', 'Перчатки эксперта'],
    category: 'Magic',
    img: 'assets/images/Items/Magic/Expert_Gloves.webp',
    cost: 500,
    stats: ['+30 Adaptive Attack', '+30 Адаптивная атака'],
    description: ['+', '+']
  },
  {
    name: ['Book of Sages', 'Книга мудрости'],
    category: 'Magic',
    img: 'assets/images/Items/Magic/Book_of_Sages.webp',
    cost: 450,
    stats: [
      '+8 Magic Power +5% Cooldown Reduction',
      '+8 Магическая сила +5% уменьшение кулдауна'
    ],
    description: ['+', '+']
  },
  {
    name: ['Magic Necklace', 'Магическое ожерелье'],
    category: 'Magic',
    img: 'assets/images/Items/Magic/Magic_Necklace.webp',
    cost: 120,
    stats: ['+2 Mana Regen', '+2 регенерации маны'],
    description: ['+', '+']
  },
  {
    name: ['Power Crystal', 'Кристалл силы'],
    category: 'Magic',
    img: 'assets/images/Items/Magic/Power_Crystal.webp',
    cost: 220,
    stats: ['+280 Mana', '+280 маны'],
    description: ['+', '+']
  },
  {
    name: ['Mystery Codex', 'Магическая книга'],
    category: 'Magic',
    img: 'assets/images/Items/Magic/Mystery_Codex.webp',
    cost: 300,
    stats: ['+15 Magic Power', '+15 Магическая сила'],
    description: ['+', '+']
  },
  {
    name: ['Magic Potion', 'Зелье магии'],
    category: 'Magic',
    img: 'assets/images/Items/Magic/Magic_Potion.webp',
    cost: 1500,
    stats: ['', ''],
    description: [
      'Unique Passive - Increase Power: Automatically used after purchasing, increases Magic Power by 30 and Cooldown Reduction by 10% for 120s. Can only have one potion effect at a time.',
      'Уникальная пассивка - Increase Power: Автоматически используется после покупки, увеличивает силу магии на 30 и уменьшает время действия на 10% на 120 с. Одновременно может действовать только один эффект зелья.'
    ]
  },
  {
    name: ['Fleeting Time', 'Мимолетное время'],
    category: 'Defense',
    img: 'assets/images/Items/Defense/Fleeting_Time.webp',
    cost: 2050,
    stats: [
      '+30 Adaptive Attack +600 HP +15% Cooldown Reduction',
      '+30 Адаптивная атака +600 HP +15% уменьшение кулдауна'
    ],
    description: [
      "Unique Passive - Timestream: Hero kills or assists reduce the Ultimate's current cooldown by 30%.",
      'Уникальная пассивная способность - Timestream: убийства или помощь героя уменьшают текущее время действия Ultimate на 30%.'
    ]
  },
  {
    name: ['Radiant Armor', 'Сияющая броня'],
    category: 'Defense',
    img: 'assets/images/Items/Defense/Radiant_Armor.webp',
    cost: 1880,
    stats: [
      '+950 HP +40 Magic Defense +12 HP Regen',
      '+950 HP +40 Магическая защита +12 Регенерация HP'
    ],
    description: [
      'Unique Passive - Holy Blessing: Taking Magic Damage grants 6-20 Magic Defense (scales with level) for 5 seconds, capped at 6 stacks (1 stack only every 0.6 second).',
      'Уникальная пассивная способность - Святое благословение: Получение магического урона дает 6-20 единиц магической защиты (зависит от уровня) на 5 секунд, максимальное количество стаков - 6 (1 стак каждые 0,6 секунды).'
    ]
  },
  {
    name: ['Twilight Armor', 'Сумеречная броня'],
    category: 'Defense',
    img: 'assets/images/Items/Defense/Twilight_Armor.webp',
    cost: 2100,
    stats: ['+1200 HP +15 Physical Defense', '+1200 HP +15 Физическая защита'],
    description: [
      'Unique Passive - Twilight: Upon taking more than 800 damage in a single instance, the excess damage beyond that amount is reduced by (0.4% Total HP)%.',
      'Уникальная пассивная способность - "Сумерки": Если за один раз вы получаете более 800 ед. урона, дополнительный урон сверх этой суммы уменьшается на (0,4% от общего количества HP)%.'
    ]
  },
  {
    name: ['Brute Force Breastplate', 'Кираса грубой силы'],
    category: 'Defense',
    img: 'assets/images/Items/Defense/Brute_Force_Breastplate.webp',
    cost: 1870,
    stats: [
      '+600 HP +23 Physical Defense +10% Cooldown Reduction',
      '+600 HP +23 Физическая защита +10% уменьшение куладуна'
    ],
    description: [
      'Unique Passive - Brute Force: Each second after dealing damage, gain 6 Adaptive Attack and 2% extra Movement Speed for 4 seconds, up to 6 stacks. Gain 15% extra Control Duration Reduction at full stacks.',
      'Уникальная пассивная способность - Brute Force: Каждую секунду после нанесения урона получайте 6 адаптивной атаки и 2% дополнительной скорости передвижения на 4 секунды, до 6 стаков. При полных стаках вы получаете 15% дополнительного сокращения длительности контроля.'
    ]
  },
  {
    name: ['Immortality', 'Бессмертие'],
    category: 'Defense',
    img: 'assets/images/Items/Defense/Immortality.webp',
    cost: 2120,
    stats: ['+800 HP +15 Physical Defense', '+800 HP +15 Физическая защита'],
    description: [
      'Unique Passive - Immortal: Resurrect 2.5 seconds upon death and gets 16% Max HP and 220-1200 shield that lasts for 3 seconds. (Scales with level) This effect has a cooldown of 210 seconds.',
      'Уникальная пассивка - Бессмертный: Воскресает через 2,5 секунды после смерти и получает 16% максимального HP и 220-1200 щита, которые действуют в течение 3 секунд. (Зависит от уровня) Время действия этого эффекта составляет 210 секунд.'
    ]
  },
  {
    name: ['Dominance Ice', 'Господство льда'],
    category: 'Defense',
    img: 'assets/images/Items/Defense/Dominance_Ice.webp',
    cost: 2010,
    stats: [
      '+500 Mana +55 Physical Defense +5% Movement Speed',
      '+500 маны +55 Физическая защита +5% Скорость передвижения'
    ],
    description: [
      'Unique Passive - Artic Cold: Taking damage will reduce the Attack Speed of the atacker to 80% of normal for 1 second. Unique Passive - Lifebane: Taking damage will reduce the Shield and HP Regen effects of the attacker to 50% of normal for 1 second.',
      'Уникальная пассивка - Artic Cold: Получение урона снижает скорость атаки атакующего до 80% от обычной на 1 секунду. Уникальная пассивка - Lifebane: при получении урона эффекты Shield и HP Regen атакующего снижаются до 50% от обычных на 1 секунду.'
    ]
  },
  {
    name: ["Athena's Shiled", 'Щит Афины'],
    category: 'Defense',
    img: 'assets/images/Items/Defense/Athenas_Shield.webp',
    cost: 2150,
    stats: [
      '+900 HP +48 Magic Defense +2 HP Regen',
      '+900 HP +48 Магическая защита +2 регенерация HP'
    ],
    description: [
      'Unique Passive - Shield: Can be triggered when taking Magic Damage. Reduces Magic Damage taken by 25% for 3 seconds (including the Magic Damage that triggers this effect). You will be able to trigger this effect again only after leaving combat for 5 seconds.',
      'Уникальная пассивка - Щит: Может быть вызвана при получении магического урона. Снижает получаемый магический урон на 25% на 3 секунды (включая магический урон, вызвавший этот эффект). Вы сможете снова вызвать этот эффект только после выхода из боя на 5 секунд.'
    ]
  },
  {
    name: ['Oracle', 'Оракул'],
    category: 'Defense',
    img: 'assets/images/Items/Defense/Oracle.webp',
    cost: 1850,
    stats: [
      '+850 HP +20 Physical Defense +20 Magic Defense +10% Cooldown Reduction',
      '+850 HP +20 Физическая защита +20 Магическая защита +10% уменьшение кулдауна'
    ],
    description: [
      'Unique Passive - Bless: Raise shield absorption and HP regen effect by 30%.',
      'Уникальная пассивная способность - Bless: Повышает эффект поглощения щита и регенерации HP на 30%.'
    ]
  },
  {
    name: ['Antique Cuirass', 'Древняя кираса'],
    category: 'Defense',
    img: 'assets/images/Items/Defense/Antique_Cuirass.webp',
    cost: 2170,
    stats: [
      '+920 HP +40 Physical Defense +4 HP Regen',
      '+920 HP +40 Физическая защита +4 HP Regen'
    ],
    description: [
      "Unique Passive - Deter: When hit by a skill, reduces the attacker's Physical Damage by 6% for 2 seconds (up to 3 stacks).",
      'Уникальная пассивка - Сдерживание: При попадании умением снижает физический урон атакующего на 6% на 2 секунды (до 3 стаков).'
    ]
  },
  {
    name: ['Guardian Helmet', 'Защитный шлем'],
    category: 'Defense',
    img: 'assets/images/Items/Defense/Guardian_Helmet.webp',
    cost: 2200,
    stats: ['+1550 HP +20 HP Regen', '+1550 HP +20 HP Regen'],
    description: [
      'Unique Passive - Recovery: Regenerates 2.5% Max HP per second (reduced to 0.5% Max HP per second over 5 seconds after taking damage).',
      'Уникальная пассивка - Восстановление: Регенерирует 2,5% Max HP в секунду (снижается до 0,5% Max HP в секунду в течение 5 секунд после получения урона).'
    ]
  },
  {
    name: ['Cursed Helmet', 'Проклятый шлем'],
    category: 'Defense',
    img: 'assets/images/Items/Defense/Cursed_Helmet.webp',
    cost: 1760,
    stats: ['+1200 HP +20 Magic Defense', '+1200 HP +20 Магическая защита'],
    description: [
      "Unique Passive - Burning Soul: Deals Magic Damage equal to 1.2% of hero's Max HP per second to nearby enemies. This damage is increased by 140% to 350% against creeps and minions (scales with level).",
      'Уникальная пассивная способность - Burning Soul: наносит ближайшим врагам магический урон, равный 1,2% от максимального HP героя в секунду. Этот урон увеличивается на 140-350% против крипов и миньонов (зависит от уровня).'
    ]
  },
  {
    name: ['Thunder Belt', 'Штормовой пояс'],
    category: 'Defense',
    img: 'assets/images/Items/Defense/Thunder_Belt.webp',
    cost: 1820,
    stats: [
      '+800 HP +15 Physical Defense +15 Magic Defense +20 Movement Speed',
      '+800 HP +15 Физическая защита +15 Магическая защита +20 Скорость передвижения'
    ],
    description: [
      'Unique Passive - Thunderbolt: Every 4 seconds, the next Basic Attack deals 50 (+100% Total Physical Defense) (+100% Total Magic Defense) extra True Damage to the target and enemies around them, and briefly slows them by 99%. Hybrid Defense permanently increases by 1 each time the attack hits an enemy hero. (This effect is reduced to 50% for Marksmen and Mages)',
      'Уникальная пассивная способность - "Громовой удар": Каждые 4 секунды следующая базовая атака наносит 50 (+100% общей физической защиты) (+100% общей магической защиты) дополнительного истинного урона цели и врагам вокруг нее, а также ненадолго замедляет их на 99%. Гибридная защита постоянно увеличивается на 1 каждый раз, когда атака попадает по вражескому герою. (Этот эффект снижается до 50% для стрелков и магов)'
    ]
  },
  {
    name: ["Queen's Wings", 'Крылья королевы'],
    category: 'Defense',
    img: 'assets/images/Items/Defense/Queens_Wings.webp',
    cost: 2250,
    stats: [
      '+40 Adaptive Attack +600 HP +10% Cooldown Reduction +10% Spell Vamp',
      '+40 Адаптивная атака +600 HP +10% Уменьшение кулдауна +10% Spell Vamp'
    ],
    description: [
      'Unique Passive - Demonize: When HP drops below 40%, gains 30% Damage Reduction for 3 seconds and reduces the skill cooldown by 2 seconds. This effect has a 60 seconds cooldown. Unique Passive - Defiance: For every 1% HP lost, damage is increased by 0.25%, up to 15%.',
      'Уникальная пассивная способность - Demonize: Когда HP падает ниже 40%, он получает 30% снижения урона на 3 секунды и сокращает время действия умения на 2 секунды. Этот эффект действует 60 секунд. Уникальная пассивка - Defiance: За каждый потерянный 1% HP урон увеличивается на 0,25%, до 15%.'
    ]
  },
  {
    name: ['Blade Armor', 'Шипованная броня'],
    category: 'Defense',
    img: 'assets/images/Items/Defense/Blade_Armor.webp',
    cost: 1910,
    stats: ['+70 Physical Defense', '+70 Физическая защита'],
    description: [
      "Unique Attribute: +20% Crit Damage Reduction Unique Passive - Bladed Armor: When struck by a Basic Attack, deals Physical Damage equal to 30% of the incoming damage (calculated before Damage) plus 25% of the hero's Physical Defense to the attacker and slows them by 15% for 1 second.",
      'Уникальный атрибут: +20% снижение критического урона Уникальная пассивная способность - Bladed Armor: при нанесении базовой атаки наносит атакующему физический урон, равный 30% от входящего урона (рассчитывается до урона) плюс 25% физической защиты героя, и замедляет его на 15% на 1 секунду.'
    ]
  },
  {
    name: ['Steel Legplates', 'Стальные ножные латы'],
    category: 'Defense',
    img: 'assets/images/Items/Defense/Steel_Legplates.webp',
    cost: 630,
    stats: ['+35 Physical Defense', '+35 Физическая защита'],
    description: ['+', '+']
  },
  {
    name: ['Dreadnaught Armor', 'Броня неустрашимости'],
    category: 'Defense',
    img: 'assets/images/Items/Defense/Dreadnaught_Armor.webp',
    cost: 730,
    stats: ['+30 Physical Defense', '+30 Физическая защита'],
    description: [
      "Unique Passive - Deter: When hit by a skill, reduces the attacker's Physical Damage by 4% for 2 seconds (up to 3 stacks).",
      'Уникальная пассивная способность - "Сдерживание": При попадании умением снижает физический урон атакующего на 4% на 2 секунды (до 3 стаков).'
    ]
  },
  {
    name: ['Black Ice Shield', 'Щит из черного льда'],
    category: 'Defense',
    img: 'assets/images/Items/Defense/Black_Ice_Shield.webp',
    cost: 880,
    stats: [
      '+400 Mana +18 Physical Defense',
      '+400 маны +18 Физическая защита'
    ],
    description: [
      'Unique Passive - Artic Cold: Taking damage will reduce the Attack Speed of the atacker to 90% of normal for 1 second.',
      'Уникальная пассивка - Artic Cold: Получение урона снижает скорость атаки атакующего до 90% от обычной на 1 секунду.'
    ]
  },
  {
    name: ['Silence Robe', 'Роба тишины'],
    category: 'Defense',
    img: 'assets/images/Items/Defense/Silence_Robe.webp',
    cost: 1020,
    stats: ['+540 HP +23 Magic Defense', '+540 HP +23 Магическая защита'],
    description: ['+', '+']
  },
  {
    name: ['Molten Essence', 'Расплавленная субстанция'],
    category: 'Defense',
    img: 'assets/images/Items/Defense/Molten_Essence.webp',
    cost: 800,
    stats: ['+540 HP', '+540 HP'],
    description: [
      "Unique Passive - Burning Soul: Deals Magic Damage equal to 0.6% of hero's Max HP per second to nearby enemies. This damage is increased by 140% to 350% against creeps and minions (scales with level).",
      'Уникальная пассивная способность - Burning Soul: наносит ближайшим врагам магический урон, равный 0,6% от максимального HP героя в секунду. Этот урон увеличивается на 140-350% против крипов и миньонов (зависит от уровня).'
    ]
  },
  {
    name: ['Ares Belt', 'Пояс Ареса'],
    category: 'Defense',
    img: 'assets/images/Items/Defense/Ares_Belt.webp',
    cost: 900,
    stats: ['+770 HP', '+770 HP'],
    description: ['+', '+']
  },
  {
    name: ["Hero's Ring", 'Кольцо героя'],
    category: 'Defense',
    img: 'assets/images/Items/Defense/Heros_Ring.webp',
    cost: 450,
    stats: [
      '+150 HP +5% Cooldown Reduction',
      '+150 HP +5% уменьшение кулдауна'
    ],
    description: ['+', '+']
  },
  {
    name: ['Healing Necklace', 'Исцеляющее ожерелье'],
    category: 'Defense',
    img: 'assets/images/Items/Defense/Healing_Necklace.webp',
    cost: 140,
    stats: ['+4 HP Regen', '+4 регенерация HP'],
    description: ['+', '+']
  },
  {
    name: ['Magic Resist Cloak', 'Плащ сопротивления магии'],
    category: 'Defense',
    img: 'assets/images/Items/Defense/Magic_Resist_Cloak.webp',
    cost: 220,
    stats: ['+14 Magic Defense', '+14 Магическая защита'],
    description: ['+', '+']
  },
  {
    name: ['Leather Jerkin', 'Кожанная броня'],
    category: 'Defense',
    img: 'assets/images/Items/Defense/Leather_Jerkin.webp',
    cost: 220,
    stats: ['+14 Physical Defense', '+14 Физическая защита'],
    description: ['+', '+']
  },
  {
    name: ['Vitality Crystal', 'Кристалл здоровья'],
    category: 'Defense',
    img: 'assets/images/Items/Defense/Vitality_Crystal.webp',
    cost: 300,
    stats: ['+230 HP', '+230 HP'],
    description: ['+', '+']
  },
  {
    name: ['Rock Potion', 'Зелье стойкости'],
    category: 'Defense',
    img: 'assets/images/Items/Defense/Rock_Potion.webp',
    cost: 1500,
    stats: ['', ''],
    description: [
      'Unique Passive - Increase Power: Automatically used after purchasing, increases Max HP by 500 and reduces duration of being controlled by 25% for 120s. Can only have one potion effect at a time.',
      'Уникальная пассивка - Increase Power: Автоматически используется после покупки, увеличивает максимальное количество HP на 500 и уменьшает время нахождения под контролем на 25% на 120 с. Одновременно может действовать только одно зелье.'
    ]
  },
  {
    name: ['Demon Shoes', 'Ботинки демона'],
    category: 'Movement',
    img: 'assets/images/Items/Movement/Demon_Shoes.webp',
    cost: 720,
    stats: [
      '+40 Movement Speed +10 Mana Regen',
      '+40 Скорость передвижения +10 Реген маны'
    ],
    description: [
      'Unique Passive - Mysticism: Getting a kill or assist on an enemy Minion will restore 4% Mana. (An assist occurs when a Minion dies within 2 seconds after taking damage from the hero.)',
      'Уникальная пассивка - Мистицизм: Убийство или помощь вражескому миньону восстанавливает 4% маны. (Ассист происходит, когда миньон умирает в течение 2 секунд после получения урона от героя).'
    ]
  },
  {
    name: ['Rapid Boots', 'Сапоги-скороходы'],
    category: 'Movement',
    img: 'assets/images/Items/Movement/Rapid_Boots.webp',
    cost: 750,
    stats: [
      '+65 Movement Speed +35% Slow Reduction',
      '+65 Скорость передвижения +35% уменьшение замедления'
    ],
    description: [
      'Unique Passive - Side Effect: Loses 25 Movement Speed for 5 seconds upon dealing or taking damage.',
      'Уникальная пассивка - Побочный эффект: При нанесении или получении урона теряет 25 скорости передвижения на 5 секунд.'
    ]
  },
  {
    name: ['Swift Boots', 'Сапоги спешки'],
    category: 'Movement',
    img: 'assets/images/Items/Movement/Swift_Boots.webp',
    cost: 710,
    stats: [
      '+40 Movement Speed +15% Attack Speed',
      '+40 Скорость передвижения +15% скорости атаки'
    ],
    description: ['+', '+']
  },
  {
    name: ['Arcane Boots', 'Сапоги заклинателя'],
    category: 'Movement',
    img: 'assets/images/Items/Movement/Arcane_Boots.webp',
    cost: 690,
    stats: [
      '+40 Movement Speed +10 Magic Penetration',
      '+40 Скорость передвижения +10 Проникновение магии'
    ],
    description: ['+', '+']
  },
  {
    name: ['Magic Shoes', 'Магические ботинки'],
    category: 'Movement',
    img: 'assets/images/Items/Movement/Magic_Shoes.webp',
    cost: 710,
    stats: [
      '+40 Movement Speed +10% Cooldown Reduction',
      '+40 Скорость передвижения +10% уменьшение кулдауна'
    ],
    description: ['+', '+']
  },
  {
    name: ['Tough Boots', 'Прочные сапоги'],
    category: 'Movement',
    img: 'assets/images/Items/Movement/Tough_Boots.webp',
    cost: 700,
    stats: [
      '+40 Movement Speed +22 Magic Defense',
      '+40 Скорость передвижения +22 Магическая защита'
    ],
    description: [
      'Unique Passive - Fortitude: Reduces time controlled 30%.',
      'Уникальная пассивка - Fortitude: Уменьшает время контроля на 30%.'
    ]
  },
  {
    name: ['Warrior Boots', 'Сапоги воина'],
    category: 'Movement',
    img: 'assets/images/Items/Movement/Warrior_Boots.webp',
    cost: 720,
    stats: [
      '+40 Movement Speed +22 Physical Defense',
      '+40 Скорость передвижения +22 Физическая защита'
    ],
    description: [
      'Unique Passive - Valor: Gains 4 extra Physical Defense for 3 seconds when taking Physical Damage, up to 20.',
      'Уникальная пассивная способность - Valor: Получает 4 дополнительные единицы физической защиты на 3 секунды при получении физического урона, до 20.'
    ]
  },
  {
    name: ['Boots', 'Ботинки'],
    category: 'Movement',
    img: 'assets/images/Items/Movement/Boots.webp',
    cost: 250,
    stats: ['+20 Movement Speed', '+20 Скорость передвижения'],
    description: ['+', '+']
  }
];

export const Heroes = [
  {
    name: ['Miya', 'Мия'],
    role: 'Marksman',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/miya.png'
  },
  {
    name: ['Balmond', 'Бальмонд'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/balmond.png'
  },
  {
    name: ['Saber', 'Сабер'],
    role: 'Assassin',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/saber.png'
  },
  {
    name: ['Alice', 'Алиса'],
    role: 'Mage',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/alice.png'
  },
  {
    name: ['Nana', 'Нана'],
    role: 'Mage',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/nana.png'
  },
  {
    name: ['Tigreal', 'Тигрил'],
    role: 'Tank',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/tigreal.png'
  },
  {
    name: ['', ''],
    role: '',
    img: ''
  },
  {
    name: ['Alucard', 'Алукард'],
    role: 'Assassin',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/alucard.png'
  },
  {
    name: ['Karina', 'Карина'],
    role: 'Assassin',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/karina.png'
  },
  {
    name: ['Akai', 'Акай'],
    role: 'Tank',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/akai.png'
  },
  {
    name: ['Franco', 'Франко'],
    role: 'Tank',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/franco.png'
  },
  {
    name: ['Bane', 'Бейн'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/bane.png'
  },
  {
    name: ['Bruno', 'Бруно'],
    role: 'Marksman',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/bruno.png'
  },
  {
    name: ['Clint', 'Клинт'],
    role: 'Marksman',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/clint.png'
  },
  {
    name: ['Rafaela', 'Рафаэль'],
    role: 'Support',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/rafaela.png'
  },
  {
    name: ['Eudora', 'Эйдора'],
    role: 'Mage',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/eudora.png'
  },
  {
    name: ['Zilong', 'Зилонг'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/zilong.png'
  },
  {
    name: ['Fanny', 'Фанни'],
    role: 'Assassin',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/fanny.png'
  },
  {
    name: ['Layla', 'Лейла'],
    role: 'Marksman',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/layla.png'
  },
  {
    name: ['Minotaur', 'Минотавр'],
    role: 'Tank',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/minotaur.png'
  },
  {
    name: ['Lolita', 'Лолита'],
    role: 'Support',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/lolita.png'
  },
  {
    name: ['Hayabusa', 'Хаябуса'],
    role: 'Assassin',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/hayabusa.png'
  },
  {
    name: ['Freya', 'Фрейя'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/freya.png'
  },
  {
    name: ['Gord', 'Горд'],
    role: 'Mage',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/gord.png'
  },
  {
    name: ['Natalia', 'Наталья'],
    role: 'Assassin',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/natalia.png'
  },
  {
    name: ['Kagura', 'Кагура'],
    role: 'Mage',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/kagura.png'
  },
  {
    name: ['Chou', 'Чу'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/chou.png'
  },
  {
    name: ['Sun', 'Сан'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/sun.png'
  },
  {
    name: ['Alpha', 'Альфа'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/alpha.png'
  },
  {
    name: ['Ruby', 'Руби'],
    role: 'Tank',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/ruby.png'
  },
  {
    name: ['Yi Sun-shin', 'Ли Сун-Син'],
    role: 'Marksman',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/yisunshin.png'
  },
  {
    name: ['Moscov', 'Москов'],
    role: 'Marksman',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/moskov.png'
  },
  {
    name: ['Johnson', 'Джонсон'],
    role: 'Tank',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/johnson.png'
  },
  {
    name: ['Cyclops', 'Циклоп'],
    role: 'Mage',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/cyclops.png'
  },
  {
    name: ['Estes', 'Эстес'],
    role: 'Support',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/estes.png'
  },
  {
    name: ['Hilda', 'Хильда'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/hilda.png'
  },
  {
    name: ['Aurora', 'Аврора'],
    role: 'Mage',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/aurora.png'
  },
  {
    name: ['Lapu-Lapu', 'Лапу-Лапу'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/lapulapu.png'
  },
  {
    name: ['Vexana', 'Вексана'],
    role: 'Mage',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/vexana.png'
  },
  {
    name: ['Roger', 'Роджер'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/roger.png'
  },
  {
    name: ['Karrie', 'Кэрри'],
    role: 'Marksman',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/karrie.png'
  },
  {
    name: ['Gatotkaca', 'Гатоткача'],
    role: 'Tank',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/gatotkaca.png'
  },
  {
    name: ['Harley', 'Харли'],
    role: 'Assassin',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/harley.png'
  },
  {
    name: ['Irithel', 'Иритель'],
    role: 'Marksman',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/irithel.png'
  },
  {
    name: ['Grock', 'Грок'],
    role: 'Tank',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/grock.png'
  },
  {
    name: ['Argus', 'Аргус'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/argus.png'
  },
  {
    name: ['Odette', 'Одетта'],
    role: 'Mage',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/odette.png'
  },
  {
    name: ['Lancelot', 'Ланселот'],
    role: 'Assassin',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/lancelot.png'
  },
  {
    name: ['Diggie', 'Дигги'],
    role: 'Support',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/diggie.png'
  },
  {
    name: ['Hylos', 'Хилос'],
    role: 'Tank',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/hylos.png'
  },
  {
    name: ['Zhask', 'Заск'],
    role: 'Mage',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/zhask.png'
  },
  {
    name: ['Helcurt', 'Хелкарт'],
    role: 'Assassin',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/helcurt.png'
  },
  {
    name: ['Pharsa', 'Фаша'],
    role: 'Mage',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/pharsa.png'
  },
  {
    name: ['Lesley', 'Лесли'],
    role: 'Marksman',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/lesley.png'
  },
  {
    name: ['Jawhead', 'Кусака'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/jawhead.png'
  },
  {
    name: ['Angela', 'Ангела'],
    role: 'Support',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/angela.png'
  },
  {
    name: ['Gusion', 'Госсен'],
    role: 'Assassin',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/gusion.png'
  },
  {
    name: ['Valir', 'Валир'],
    role: 'Mage',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/valir.png'
  },
  {
    name: ['Martis', 'Мартис'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/martis.png'
  },
  {
    name: ['Uranus', 'Уранус'],
    role: 'Tank',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/uranus.png'
  },
  {
    name: ['Hanabi', 'Ханаби'],
    role: 'Marksman',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/hanabi.png'
  },
  {
    name: ['Chang-e', "Чан'Э"],
    role: 'Mage',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/change.png'
  },
  {
    name: ['Kaja', 'Кайя'],
    role: 'Support',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/kaja.png'
  },
  {
    name: ['Selena', 'Селена'],
    role: 'Assassin',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/selena.png'
  },
  {
    name: ['Aldous', 'Алдос'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/aldous.png'
  },
  {
    name: ['Claude', 'Клауд'],
    role: 'Marksman',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/claude.png'
  },
  {
    name: ['Vale', 'Валир'],
    role: 'Mage',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/vale.png'
  },
  {
    name: ['Leomord', 'Леоморд'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/leomord.png'
  },
  {
    name: ['Lunox', 'Люнокс'],
    role: 'Mage',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/lunox.png'
  },
  {
    name: ['Hanzo', 'Ханзо'],
    role: 'Assassin',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/hanzo.png'
  },
  {
    name: ['Belerick', 'Белерик'],
    role: 'Tank',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/belerick.png'
  },
  {
    name: ['Kimmy', 'Кимми'],
    role: 'Marksman',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/kimmy.png'
  },
  {
    name: ['Thamuz', 'Тамуз'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/thamuz.png'
  },
  {
    name: ['Harith', 'Харит'],
    role: 'Mage',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/harith.png'
  },
  {
    name: ['Minsitthar', 'Минситтар'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/minsitthar.png'
  },
  {
    name: ['Kadita', 'Кадита'],
    role: 'Mage',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/kadita.png'
  },
  {
    name: ['Faramis', 'Фарамис'],
    role: 'Support',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/faramis.png'
  },
  {
    name: ['Badang', 'Баданг'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/badang.png'
  },
  {
    name: ['Khufra', 'Хуфра'],
    role: 'Tank',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/khufra.png'
  },
  {
    name: ['Granger', 'Грейнджер'],
    role: 'Marksman',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/granger.png'
  },
  {
    name: ['Guinevere', 'Гвиневра'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/guinevere.png'
  },
  {
    name: ['Esmeralda', 'Эсмеральда'],
    role: 'Mage',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/esmeralda.png'
  },
  {
    name: ['Terizla', 'Теризла'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/terizla.png'
  },
  {
    name: ['X-Borg', 'Икс.Борг'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/xborg.png'
  },
  {
    name: ['Ling', 'Линг'],
    role: 'Assassin',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/ling.png'
  },
  {
    name: ['Dyrroth', 'Дариус'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/dyrroth.png'
  },
  {
    name: ['Lylia', 'Лилия'],
    role: 'Mage',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/lylia.png'
  },
  {
    name: ['Zhuxin', 'Чжусинь'],
    role: 'Mage',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/zhuxin.png'
  },
  {
    name: ['Baxia', 'Баксий'],
    role: 'Tank',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/baxia.png'
  },
  {
    name: ['Masha', 'Маша'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/masha.png'
  },
  {
    name: ['Wanwan', 'Ванван'],
    role: 'Marksman',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/wanwan.png'
  },
  {
    name: ['Silvanna', 'Сильвана'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/silvanna.png'
  },
  {
    name: ['Cecilion', 'Сесилион'],
    role: 'Mage',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/cecilion.png'
  },
  {
    name: ['Carmilla', 'Кармилла'],
    role: 'Support',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/carmilla.png'
  },
  {
    name: ['Atlas', 'Атлас'],
    role: 'Tank',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/atlas.png'
  },
  {
    name: ['Popol and Kupa', 'Пополь и Купа'],
    role: 'Marksman',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/popolandkupa.png'
  },
  {
    name: ['Yu Zhong', 'Чонг'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/yuzhong.png'
  },
  {
    name: ['Luo Yi', 'Ло Йи'],
    role: 'Mage',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/luoyi.png'
  },
  {
    name: ['Benedetta', 'Бенедетта'],
    role: 'Assassin',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/benedetta.png'
  },
  {
    name: ['Khaleed', 'Халид'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/khaleed.png'
  },
  {
    name: ['Barats', 'Бартс'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/barats.png'
  },
  {
    name: ['Brody', 'Броуди'],
    role: 'Marksman',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/brody.png'
  },
  {
    name: ['Yve', 'Ив'],
    role: 'Mage',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/yve.png'
  },
  {
    name: ['Mathilda', 'Матильда'],
    role: 'Support',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/mathilda.png'
  },
  {
    name: ['Paquito', 'Пакито'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/paquito.png'
  },
  {
    name: ['Gloo', 'Глу'],
    role: 'Tank',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/gloo.png'
  },
  {
    name: ['Beatrix', 'Беатрис'],
    role: 'Marksman',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/beatrix.png'
  },
  {
    name: ['Phoveus', 'Фовиус'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/phoveus.png'
  },
  {
    name: ['Natan', 'Натан'],
    role: 'Marksman',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/natan.png'
  },
  {
    name: ['Aulus', 'Аулус'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/aulus.png'
  },
  {
    name: ['Aamon', 'Эймон'],
    role: 'Assassin',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/aamon.png'
  },
  {
    name: ['Valentina', 'Валентина'],
    role: 'Mage',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/valentina.png'
  },
  {
    name: ['Edith', 'Эдит'],
    role: 'Tank',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/edith.png'
  },
  {
    name: ['Floryn', 'Флорин'],
    role: 'Support',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/floryn.png'
  },
  {
    name: ['Yin', 'Инь'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/yin.png'
  },
  {
    name: ['Melissa', 'Мелисса'],
    role: 'Marksman',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/melissa.png'
  },
  {
    name: ['Xavier', 'Ксавьер'],
    role: 'Mage',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/xavier.png'
  },
  {
    name: ['Julian', 'Джулиан'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/julian.png'
  },
  {
    name: ['Fredrinn', 'Фредерин'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/fredrinn.png'
  },
  {
    name: ['Joy', 'Джой'],
    role: 'Assassin',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/joy.png'
  },
  {
    name: ['Arlott', 'Арлот'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/arlott.png'
  },
  {
    name: ['Novaria', 'Новария'],
    role: 'Mage',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/novaria.png'
  },
  {
    name: ['Ixia', 'Иксия'],
    role: 'Marksman',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/ixia.png'
  },
  {
    name: ['Nolan', 'Нолан'],
    role: 'Assassin',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/nolan.png'
  },
  {
    name: ['Cici', 'Чичи'],
    role: 'Fighter',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/cici.png'
  },
  {
    name: ['Chip', 'Чип'],
    role: 'Tank',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/chip.png'
  },
  {
    name: ['Suyou', 'Су ё'],
    role: 'Assassin',
    img: 'https://www.mlbb.site/MLBB-DraftPickSimulator/img/heroes/suyou.png'
  }
];

export const Spells = [
  { name: 'Execute', img: './assets/images/Spells/Execute.webp' },
  { name: 'Inspire', img: './assets/images/Spells/Inspire.webp' },
  { name: 'Sprint', img: './assets/images/Spells/Sprint.webp' },
  { name: 'Revitalize', img: './assets/images/Spells/Revitalize.webp' },
  { name: 'Aegis', img: './assets/images/Spells/Aegis.webp' },
  { name: 'Petrify', img: './assets/images/Spells/Petrify.webp' },
  { name: '', img: '' },
  { name: 'Purify', img: './assets/images/Spells/Purify.webp' },
  { name: 'Flameshot', img: './assets/images/Spells/Flameshot.webp' },
  { name: 'Flicker', img: './assets/images/Spells/Flicker.webp' },
  { name: 'Arrival', img: './assets/images/Spells/Arrival.webp' },
  { name: 'Vengeance', img: './assets/images/Spells/Vengeance.webp' },
  {
    name: 'Retribution',
    img: './assets/images/Spells/Retributions/Retribution.webp'
  },
  {
    name: 'Flame Retribution',
    img: './assets/images/Spells/Retributions/Flame_Retribution.webp'
  },
  {
    name: 'Ice Retribution',
    img: './assets/images/Spells/Retributions/Ice_Retribution.webp'
  },
  {
    name: 'Bloody Retribution',
    img: './assets/images/Spells/Retributions/Bloody_Retribution.webp'
  }
];

export const Emblems = [
  [
    { name: 'Agility', img: './assets/images/Emblems/FirstSlot/Agility.webp' },
    { name: 'Fatal', img: './assets/images/Emblems/FirstSlot/Fatal.webp' },
    {
      name: 'Firmness',
      img: './assets/images/Emblems/FirstSlot/Firmness.webp'
    },
    { name: 'Inspire', img: './assets/images/Emblems/FirstSlot/Inspire.webp' },
    { name: 'Rupture', img: './assets/images/Emblems/FirstSlot/Rupture.webp' },
    { name: 'Swift', img: './assets/images/Emblems/FirstSlot/Swift.webp' },
    { name: 'Thrill', img: './assets/images/Emblems/FirstSlot/Thrill.webp' },
    {
      name: 'Vitality',
      img: './assets/images/Emblems/FirstSlot/Vitality.webp'
    }
  ],
  [
    {
      name: 'Bargain Hunter',
      img: './assets/images/Emblems/SecondSlot/Bargain_Hunter.webp'
    },
    {
      name: 'Festival Of Blood',
      img: './assets/images/Emblems/SecondSlot/Festival_Of_Blood.webp'
    },
    {
      name: 'Master Assassin',
      img: './assets/images/Emblems/SecondSlot/Master_Assassin.webp'
    },
    {
      name: 'Pull Yourself Together',
      img: './assets/images/Emblems/SecondSlot/Pull_Yourself_Together.webp'
    },
    {
      name: 'Seasoned Hunter',
      img: './assets/images/Emblems/SecondSlot/Seasoned_Hunter.webp'
    },
    {
      name: 'Tenacity',
      img: './assets/images/Emblems/SecondSlot/Tenacity.webp'
    },
    {
      name: 'Weapon Master',
      img: './assets/images/Emblems/SecondSlot/Weapon_Master.webp'
    },
    {
      name: 'Wilderness Blessing',
      img: './assets/images/Emblems/SecondSlot/Wilderness_Blessing.webp'
    }
  ],
  [
    {
      name: 'Brave Smite',
      img: './assets/images/Emblems/ThirdSlot/Brave_Smite.webp'
    },
    {
      name: 'Concussive Blast',
      img: './assets/images/Emblems/ThirdSlot/Concussive_Blast.webp'
    },
    {
      name: 'Focusing Mark',
      img: './assets/images/Emblems/ThirdSlot/Focusing_Mark.webp'
    },
    {
      name: 'Impure Rage',
      img: './assets/images/Emblems/ThirdSlot/Impure_Rage.webp'
    },
    {
      name: 'Killing Spree',
      img: './assets/images/Emblems/ThirdSlot/Killing_Spree.webp'
    },
    {
      name: 'Lethal Ignition',
      img: './assets/images/Emblems/ThirdSlot/Lethal_Ignition.webp'
    },
    {
      name: 'Quantum Charge',
      img: './assets/images/Emblems/ThirdSlot/Quantum_Charge.webp'
    },
    {
      name: 'Temporal Reign',
      img: './assets/images/Emblems/ThirdSlot/Temporal_Reign.webp'
    },
    {
      name: 'War Cry',
      img: './assets/images/Emblems/ThirdSlot/War_Cry.webp'
    },
    {
      name: 'Weakness Finder',
      img: './assets/images/Emblems/ThirdSlot/Weakness_Finder.webp'
    }
  ]
];

export const translation = {
  ranks: [
    ['Epic', 'Эпик'],
    ['Legend', 'Легенда'],
    ['Mythic', 'Мифик']
  ],
  roles: [
    ['All', 'Все'],
    ['Fighter', 'Боец'],
    ['Mage', 'Маг'],
    ['Marksman', 'Стрелок'],
    ['Assassin', 'Убийца'],
    ['Tank', 'Танк'],
    ['Support', 'Поддержка']
  ],
  categories: [
    ['All', 'Все'],
    ['Atrack', 'Атака'],
    ['Magic', 'Магия'],
    ['Defense', 'Защита'],
    ['Movement', 'Движение']
  ],
  searches: [
    ['Enter hero name', 'Введите имя героя'],
    ['Enter item name', 'Введите название предмета']
  ],
  mapSettings: {
    arrowsMode: [['Arrows mode', 'Режим стрелок']],
    arrowsModeInputs: [
      ['Arrow body width: ', 'Ширина тела стрелки: '],
      ['Arrow headlen width: ', 'Ширина головы стрелки: ']
    ],
    buttons: [
      ['Clear arrows', 'Очистить стрелки'],
      ['Reset positions', 'Сбросить позиции'],
      ['Clear heroes', 'Очистить героев'],
      ['Clear all', 'Очистить всё']
    ],
    instructions: [
      'Pull on a character to drag it. Hold down ALT, press LMB and move the mouse to select players (all selected characters can be moved). When arrow mode is enabled, you can draw arrows by pressing LMB (start of arrow), then releasing LMB (end of arrow). You can deselect a character by pressing the RMB button',
      'Тяните за персонажа, чтобы перетащить его. Зажмите ALT, нажмите ЛКМ и перемещайте мышь, чтобы выделять игроков (всех выделенных персонажей можно перемещать). Когда режим стрелок включен, можно рисовать стрелки нажимая ЛКМ (начало стрелки), затем отпуская ЛКМ (конец стрелки). Отменить выделение героя можно нажав на ПКМ'
    ]
  },
  buildsCharacteristics: [
    'Add an item to see the<br> characteristics',
    'Добавьте предмет, чтобы<br> увидеть характеристики'
  ]
};
