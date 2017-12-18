# Namez #

Useful for projectz or codez or namez.

You have two options:

* format : 'lower', 'upper', 'title'
* separator : any string you like, e.g. '-' (default), ':', '@', '~-~-~-~'

```
const namez = require('namez')

// default: lower with dash
console.log(namez())
console.log(namez({ format : 'lower', separator : '-' }))

// upper
console.log(namez({ format : 'upper' }))

// title
console.log(namez({ format : 'title' }))

// spaces
console.log(namez({ separator : ' ' }))

// colon
console.log(namez({ separator : ':' }))
```

Examples:

```
--- Defaults ---

awful-black-damselfly
doubtful-cinnamon-mealworm
hurt-charcoal-platypus
large-saffron-bass
huge-taupe-shark
talented-buff-perissodactyls
crooked-scarlet-ekaltadelta
adorable-cerise-tanager
flaky-sienna-agouti
dull-tint-hamster

--- UpperCase ---

LIVELY-CRIMSON-YELLOWJACKET
ANCIENT-PEWTER-STARFISH
TENDER-AQUA-SQUIRREL
PETITE-CELADON-ELK
EMBARRASSED-BEIGE-ALPACA
HELPLESS-AMBER-KARAKUL
STALE-CORAL-MAMBA
HOT-RUST-MONGOOSE
COURAGEOUS-ORANGE-MOOSE
EARLY-COPPER-SHARK

--- Title ---

Colossal-Rust-Mantid
Voiceless-Amethyst-Crocodile
Dead-Pink-Clownfish
Wandering-Sienna-Puffin
Beautiful-Amethyst-Hippopotamus
Cooing-Jet-Platybelodon
Faithful-Terracotta-Deinonychus
Damaged-Cream-Quaesitosaurus
Quick-Persimmon-Monkey
Hollow-Vermilion-Dhole

--- Title + Spaces ---

Abundant Ruby Hawk
Gifted Ebony Penguin
Fair Wheat Hyena
Mute Mustard Basilisk
Selfish Lilac Crayfish
Quiet Persimmon Kinkajou
Ill Crimson Bullfrog
Innocent Buff Antelope
Cute Pewter Parrot
Screeching Blue Bison

--- Lower + Colon ---

tasteless:taupe:scallop
frail:goldenrod:stonefly
energetic:ultramarine:bluebird
cruel:lime:leghorn
proud:rose:gnat
brief:gold:nuthatch
calm:complementary:puma
chilly:peach:edmontosaurus
lively:buff:fox
careful:pale:rat
```

## Author ##

Andrew Chilton

## License ##

ISC.
