var grammar = tracery.createGrammar({
    'origin':                   'You, #protagonist#, were raised by #your parents# #in your childhood home#. #Now you live somewhere#, where you #do an activity#. #fact about you#',
    'protagonist':              '#dragon name# the #dragon species#',
    'your parents':             ['#two parents#', '#two parents#', '#two parents#', '#your parents sub#'],
    'two parents':              '#your parent# and #your parent#',
    'your parents sub':         ['#your parent#', '#your parent#, #your parent#, and #your parent#', 'a commune of #commune species#'],
    'commune species':          ['fire lizards', 'gnomes', 'humans', 'kobolds'],
    'your parent':              '#dragon name# the #dragon species#',
    'Now you live somewhere':  ['Now you live #in your lair#', 'Now you live #in your lair#', 'Now you live #in your lair#', 'You remain there still'],
    'in your childhood home':   '#in a place#',
    'in your lair':             '#in a place#',

    /* Species */

    'dragon species': [
        '#color# dragon',
        '#mineral# dragon',
        '#unusual dragon species#',
    ],
    'color': [
        '<span class="black">black</span>',
        '<span class="blue">blue</span>',
        '<span class="brown">brown</span>',
        '<span class="cyan">cyan</span>',
        '<span class="grey">grey</span>',
        '<span class="green">green</span>',
        '<span class="magenta">magenta</span>',
        '<span class="purple">purple</span>',
        '<span class="red">red</span>',
        '<span class="yellow">yellow</span>',
        '<span class="white">white</span>',
    ],
    'mineral': [
        '#gem#',
        '#metal#',
    ],
    'gem': [
        '<span class="amethyst">amethyst</span>',
        '<span class="diamond">diamond</span>',
        '<span class="emerald">emerald</span>',
        '<span class="ruby">ruby</span>',
        '<span class="sapphire">sapphire</span>',
        '<span class="topaz">topaz</span>',
        '#unusual gem#',
    ],
    'unusual gem': [
        '<span class="agate">agate</span>',
        '<span class="aquamarine">aquamarine</span>',
        '<span class="bismuth">b</span><span class="bismuth">i</span><span class="bismuth">s</span><span class="bismuth">m</span><span class="bismuth">u</span><span class="bismuth">t</span><span class="bismuth">h</span>',
        '<span class="bloodstone">bloodstone</span>',
        '<span class="coal">coal</span>',
        '<span class="garnet">garnet</span>',
        '<span class="jade">jade</span>',
        '<span class="jasper">jasper</span>',
        '<span class="lapislazuli">lapislazuli</span>',
        '<span class="moonstone">moonstone</span>',
        '<span class="obsidian">obsidian</span>',
        '<span class="onyx">onyx</span>',
        '<span class="opal">opal</span>',
        '<span class="pearl">pearl</span>',
        '<span class="peridot">peridot</span>',
        '<span class="quartz">quartz</span>',
        '<span class="spinel">spinel</span>',
        '<span class="turqoise">turquoise</span>',
    ],
    'metal': [
        'brass',
        'bronze',
        'copper',
        'gold',
        'iron',
        'silver',
        'steel',
        '#unusual metal#',
    ],
    'unusual metal': [
        'adamantium',
        'mercury',
        'mithryl',
        'platinum',
        'titanium',
    ],
    'unusual dragon species': [
        'fairy dragon',
        'fire lizard',
        'galaxy dragon',
        '#color# glitter dragon',
        'pseudodragon',
        '<span class="rainbow">r</span><span class="rainbow">a</span><span class="rainbow">i</span><span class="rainbow">n</span><span class="rainbow">b</span><span class="rainbow">o</span><span class="rainbow">w</span><span class="rainbow"> </span><span class="rainbow">d</span><span class="rainbow">r</span><span class="rainbow">a</span><span class="rainbow">g</span><span class="rainbow">o</span><span class="rainbow">n</span>',
        'translucent dragon',
    ],

    /* Names */

    'dragon name': '#dragon name sub.capitalize#',
    'dragon name sub': [
        '#dragon name part##dragon name final vowel#',
        '#dragon name part##dragon name final part#',
        '#dragon name part##dragon name sub#',
    ],
    'dragon name part':             '#dragon name vowel##dragon name consonant#',
    'dragon name final part':       '#dragon name vowel##dragon name final consonant#',
    'dragon name consonant':        ['b', 'c', 'm', 'r', 's', 'sh', 't', 'th', 'v', 'w', 'y', 'z'],
    'dragon name final consonant':  ['b', 'c', 'm', 'r', 's', 'sh', 't', 'th'],
    'dragon name vowel':            ['a', 'aa', 'æ', 'au', 'e', 'ea', 'i', 'ii', 'o', 'u', 'y'],
    'dragon name final vowel':      ['a',       'æ',       'e', 'ea',                 'u'],

    /* Places */

    'in a place':       'in #prefixed place.a#',
    'prefixed place':   '#place prefix# #place#',
    'place prefix': [
        'abandoned',
        'burnt',
        'flooded',
        'forgotten',
        'frozen',
        'haunted',
        'remote',
        'uncharted',
    ],
    'place': [
        'cave',
        '#dungeon#',
        '#forest#',
        'grotto',
        '#house#',
        'mountain',
        'swamp',
        '#town#',
        'valley',
        '#active or inactive# volcano',
    ],
    'dungeon': [
        'dungeon',
        'shrine',
        'temple',
    ],
    'forest': [
        'clearing',
        'forest',
        'grove',
        'mushroom forest',
        'wood',
    ],
    'house': [
        'cottage',
        'house',
        'hut',
        'mansion',
        'shack',
    ],
    'town': [
        'city',
        'hamlet',
        'metropolis',
        'thorp',
        'town',
        'village',
    ],
    'active or inactive': [
        'active',
        'inactive',
    ],

    /* Activities */

    'do an activity': 'guard your hoard of #hoard items# and #do another activity#',
    'hoard items': [
        '#art items#',
        'gems',
        'gold',
        'magical artifacts',
        '#unusual hoard items#',
    ],
    'art items': [
        'dolls',
        'figurines',
        'paintings',
        'statues',
    ],
    'unusual hoard items': [
        'baked goods',
        '#pet species# clothing',
        'cutlery',
        'napkins',
        'plushies',
        'rocks',
    ],
    'do another activity': [
        '#make something#',
        'study #subject of study#',
    ],
    'make something': [
        'knit #knitted items#',
        'sculpt #sculpting material#',
    ],
    'knitted items': [
        'blankets',
        'hats',
        'rugs',
        'scarves',
        'shawls',
        'socks',
        'sweaters',
        'tapestries',
    ],
    'sculpting material': [
        'clay',
        'dirt',
        'flesh',
        'ice',
        'wood',
        '#mineral#',
    ],
    'subject of study': [
        'art',
        'botany',
        '#combat#',
        'history',
        '#magic#',
        'mathematics',
        'music',
        'philosophy',
        'tinkering',
        '#unusual subject of study#',
    ],
    'combat': [
        'archery',
        'martial arts',
        'siegecraft',
        'swordsmanship',
    ],
    'magic': [
        'abjuration',
        'alchemy',
        'arcana',
        'blood magic',
        'conjuration',
        'curses',
        'dark magic',
        'demon summoning',
        'divination',
        'elemental magic',
        'enchantment',
        'glamor',
        'healing',
        'herbalism',
        'hexes',
        'illusion',
        'magic',
        'necromancy',
        'poisons',
        'prayer magic',
        'protection magic',
        'runes',
        'shadow magic',
        'transmutation',
    ],
    'unusual subject of study': [
        'agriculture',
        'animal training',
        'architecture',
        'astrology',
        'astronomy',
        'blacksmithing',
        'calligraphy',
        'cartography',
        'chemistry',
        'falconry',
        'haberdashery',
        'heraldry',
        'husbandry',
        'physics',
        'psychology',
        'surgery',
    ],

    /* Facts */

    'fact about you': [
        'You are known for your #reknowned quality#.',
        'You keep #pet species.a# as a pet.',
        'Your most prized possession is #your most prized possession#.',
        'Your scales are #scale quality#.',
    ],
    'reknowned quality': [
        'appetite',
        'cunning',
        'ferocity',
        'greed',
        'immense size',
        'kindheartedness',
        'knowledge of forgotten lore',
        'liking of #hoard items#',
        'magnanimity',
        'mercy',
        'mighty roar',
        'penchant for violence',
        'reclusiveness',
        'sense of justice',
        'short-temperedness',
        'swift retribution',
        'talkativeness',
        'unpredictability',
    ],
    'pet species': [
        'cat',
        'fire lizard',
        'gnome',
        'human',
        'kobold',
        '#element# weird',
    ],
    'element': [
        'air',
        'earth',
        'fire',
        'water',
        '#unusual element#',
    ],
    'unusual element': [
        'cloud',
        'lightning',
        'magma',
        'mud',
        'smog',
        'steam',
    ],
    'your most prized possession': [
        'a finely cut #gem#',
        'a tome of lost knowledge',
        'the skull of #slayer species.a# who failed to slay you',
        'your wits',
    ],
    'slayer species': [
        '#dragon species#',
        'human',
    ],
    'scale quality': [
        'as hard as #mineral#',
        'scarred from many battles',
        'smooth to the touch',
    ],
})

grammar.addModifiers(baseEngModifiers)
