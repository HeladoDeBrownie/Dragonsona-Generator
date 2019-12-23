var grammar = tracery.createGrammar({
    'origin':                   'You, #protagonist#, were raised by #your parents# #in your childhood home#. Now you live #in your lair#, where you #do an activity#. #fact about you#',
    'protagonist':              '#dragon name# the #dragon species#',
    'your parents':             ['#two parents#', '#two parents#', '#two parents#', '#your parents sub#'],
    'two parents':              '#your parent# and #your parent#',
    'your parents sub':         ['#your parent#', '#your parent#, #your parent#, and #your parent#', 'a commune of #commune species#'],
    'commune species':          ['gnomes', 'humans', 'kobolds'],
    'your parent':              '#dragon name# the #dragon species#',
    'in your childhood home':   '#in a place#',
    'in your lair':             '#in a place#',

    /* Species */

    'dragon species': [
        '#color# dragon',
        '#gem# dragon',
        '#metal# dragon',
        '#unusual dragon type#',
    ],
    'color': [
        'black',
        'blue',
        'brown',
        'cyan',
        'grey',
        'green',
        'magenta',
        'purple',
        'red',
        'yellow',
        'white',
    ],
    'gem': [
        'amethyst',
        'diamond',
        'emerald',
        'ruby',
        'sapphire',
        'topaz',
        '#unusual gem#',
    ],
    'unusual gem': [
        'aquamarine',
        'bismuth',
        'bloodstone',
        'fluorite',
        'garnet',
        'jade',
        'jasper',
        'lapislazuli',
        'malachite',
        'moonstone',
        'obsidian',
        'onyx',
        'opal',
        'pearl',
        'peridot',
        'spinel',
        'turquoise',
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
    'unusual dragon type': [
        'fairy dragon',
        'fire lizard',
        'galaxy dragon',
        '#color# glitter dragon',
        'pseudodragon',
        'rainbow dragon',
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

    'do an activity': 'TODO',

    /* Facts */

    'fact about you': [
        'You are known for your #reknowned quality#.',
        'Your scales are #scale quality#.',
    ],
    'reknowned quality': [
        'ferocity',
        'greed',
        'kindheartedness',
        'magnanimity',
        'mercy',
        'reclusiveness',
        'short-temperedness',
    ],
    'scale quality': [
        'as hard as diamond',
        'scarred from many battles',
        'smooth to the touch',
    ],
})

grammar.addModifiers(baseEngModifiers)
