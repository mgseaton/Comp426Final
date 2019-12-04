/*
    id: the id of the card
    name: the name of the card
    cardimg: the display image for the card
    visualeffect: the visual affect that is made when the card is played
    attack: how much damage the card does
    defense: the health points of the card before the card is destroyed
    cost: how much mana the card costs
    abilityName: the name of the ability of the card
    ability: the generic typing of an ability
    abilityDescription: the special ability a card has if it has one
    abilityNumber: the ID of the given ability
        ability number may be useless if everyone has a unique ability and there aren't many repeats
    type: the type of the card, creature or spell.
    author: who created the card

 {
        id:0,
        name:"temp",
        cardimg: "link here",
        visualeffect:"link here",
        attack:0,
        defense:0,
        cost:0,
        ability:"temp",
        abilityName:"temp",
        abilityNumber:0,
        type:"temp",
        author:"temp",
    },
 */
//Add in a configuration with the deck that You can have at least 3 TA type cards in your deck (maximum of 3)
//This will allow us to fluff up the deck numberes without being a little extreme on anything else

const cardData = [
    {
        id: 0,
        name: "Kris Jordan",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 3,
        defense: 15,
        cost: 10,
        abilityName: "First Year Hope",
        abilityDescription: "Heals 2 per turn",
        ability: "Heal",
        abilityNumber: 0,
        type: "legendary creature",
        author: "Molly",
    },
    {
        id: 1,
        name: "Departmental King, KMP",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 4,
        defense: 5,
        cost: 10,
        ability: "Attack",
        abilityDescription: "Reflects damage back",
        abilityName: "Defense",
        abilityNumber: 1,
        type: "legendary creature",
        author: "Molly",
    },
    {
        id: 2,
        name: "The Eternal One: David Plaisted",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 0,
        ability: "temp",
        abilityName: "temp",
        abilityDescription: "",
        abilityNumber: 3,
        type: "legendary creature",
        author: "Molly",
    },
    {
        id: 3,
        name: "COMP110 TA",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 0,
        ability: "temp",
        abilityName: "temp",
        abilityDescription: "",
        abilityNumber: 0,
        type: "creature",
        author: "Molly",
    },
    {
        id: 4,
        name: "Office Hours",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 0,
        ability: "temp",
        abilityName: "temp",
        abilityDescription: "",
        abilityNumber: 0,
        type: "temp",
        author: "Molly",
    },
    {
        id: 5,
        name: "Curve",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 0,
        ability: "temp",
        abilityName: "temp",
        abilityDescription: "",
        abilityNumber: 0,
        type: "temp",
        author: "Molly",
    },
    {
        id: 6,
        name: "Stack Overflow",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 0,
        ability: "temp",
        abilityName: "temp",
        abilityDescription: "",
        abilityNumber: 0,
        type: "temp",
        author: "Molly",
    },
    {
        id: 7,
        name: "Exam",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 0,
        ability: "temp",
        abilityName: "temp",
        abilityDescription: "",
        abilityNumber: 0,
        type: "temp",
        author: "Billy",
    },
    {
        id: 8,
        name: "Snoeyink the Origami Lord",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 1,
        defense: 1,
        cost: 1,
        ability: "Prof of Origami",
        abilityName: "Prof of Origami",
        abilityDescription: "Spawns two 2 attack, 2 defense origami cranes",
        abilityNumber: 0,
        type: "legendary creature",
        author: "Alan",
    },
    {
        id: 9,
        name: "Anish, the Prankster",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 0,
        ability: "temp",
        abilityName: "temp",
        abilityDescription: "",
        abilityNumber: 0,
        type: "creature",
        author: "Alan",
    },
    {
        id: 10,
        name: "Comp Sci Overcrowding!",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 0,
        ability: "Status",
        abilityName: "Weed out",
        abilityDescription: "3 random cards are discarded from the enemy's hand and 2 are discarded from yours",
        abilityNumber: 0,
        type: "temp",
        author: "Alan",
    },
    //alan go up from here and finish writing the specifics of the card.
    {
        id: 11,
        name: "Sitterson Pizza Event",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 0,
        ability: "Heal",
        abilityName: "Free Za Dude",
        abilityDescription: "Heal both players by 10",
        abilityNumber: 0,
        type: "spell",
        author: "Alan",
    },
    {
        id: 12,
        name: "Legendary TA Rosh",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 2,
        defense: 10,
        cost: 0,
        ability: "Heal",
        abilityName: "Tireless",
        abilityDescription: "Never faltering, always there to help.",
        abilityNumber: 0,
        type: "legendary creature",
        author: "Alan",
    },
    {
        id: 13,
        name: "Robotics Lord Ron Alterovitz",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 2,
        defense: 4,
        cost: 0,
        ability: "Attack",
        abilityName: "attacks 3 random enemies instead of one",
        abilityDescription: "Robot army",
        abilityNumber: 0,
        type: "legendary creature",
        author: "Alan",
    },
    {
        id: 14,
        name: "Legendary Professor Bishop: Destroyer of Worlds",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 0,
        ability: "Status",
        abilityName: "Destroy Students",
        abilityDescription: "Destroy all creatures on the board, rip the 411 homies last semester.",
        abilityNumber: 0,
        type: "legendary creature",
        author: "Alan",
    },
    {
        id: 15,
        name: "WeedOut Classes",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 0,
        ability: "Attack",
        abilityName: "We all have to take them",
        abilityDescription: "Both Players take 5 Damage",
        abilityNumber: 0,
        type: "spell",
        author: "Alan",
    },
    {
        //
        id: 16,
        name: "BS to BA",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 1,
        ability: "Heal",
        abilityName: "",
        abilityDescription: "Discard 2 cards, gain 5 health.",
        abilityNumber: 0,
        type: "spell",
        author: "Alan",
    },
    {
        id: 17,
        name: "Caffeine Addiction",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 0,
        ability: "Heal",
        abilityName: "heal 2",
        abilityDescription: "You heal 2 hp",
        abilityNumber: 0,
        type: "spell",
        author: "Alan",
    },
    {
        id: 18,
        name: "Mips Rush",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 4,
        ability: "Attack",
        abilityName: "AOE Hurt",
        abilityDescription: "deal 2 damage to every creature on the board (and your opponent)",
        abilityNumber: 0,
        type: "spell",
        author: "Alan",
    },
    {
        id: 19,
        name: "Sitterson: Home",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 1,
        defense: 3,
        cost: 2,
        ability: "Heal",
        abilityName: "Heal",
        abilityDescription: "Heal 1 hp every turn",
        abilityNumber: 0,
        type: "temp",
        author: "Alan",
    },
    {
        id: 20,
        name: "Procrastinate",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 2,
        ability: "Status",
        abilityName: "stun",
        abilityDescription: "Cast on an enemy creature, It does not attack next turn.",
        abilityNumber: 0,
        type: "spell",
        author: "Alan",
    },
    {
        id: 21,
        name: "Coding Passion",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 3,
        ability: "Heal",
        abilityName: "Enjoying What You're Coding",
        abilityDescription: "You're doing a project you're having fun with, Gain 10 hp",
        abilityNumber: 0,
        type: "temp",
        author: "Alan",
    },
    {
        id: 21,
        name: "Djisktras Algorithm",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 3,
        ability: "Attack",
        abilityName: "Graph Theory Incoming",
        abilityDescription: "Deals 5 damage to the opponent",
        abilityNumber: 0,
        type: "spell",
        author: "Alan",
    },
    {
        //Talk to someone who has taken a class with Montek
        id: 22,
        name: "Legendary Professor: Montek",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 0,
        ability: "",
        abilityName: "temp",
        abilityDescription: "",
        abilityNumber: 0,
        type: "legendary creature",
        author: "Alan",
    },
    {
        id: 23,
        name: "Legendary Professor: McMillan the Villain",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 0,
        ability: "",
        abilityName: "Bioalgorithm Mastery",
        abilityDescription: "Create 4 1/1 living computers as allies.",
        abilityNumber: 0,
        type: "legendary creature",
        author: "Alan",
    },
    {
        id: 24,
        name: "Echoes of the Past: Pozefsky",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 0,
        ability: "",
        abilityName: "Never Retired",
        abilityDescription: "Other Creatures can't die while shes on the field alive.",
        abilityNumber: 0,
        type: "legendary creature",
        author: "Alan",
    },
    {
        id: 25,
        name: "Classmates in Genome 100",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 5,
        defense: 5,
        cost: 3,
        ability: "",
        abilityName: "Every Semester",
        abilityDescription: "",
        abilityNumber: 0,
        type: "creature",
        author: "Alan",
    },
    {
        id: 26,
        name: "Internship",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 2,
        ability: "",
        abilityName: "",
        abilityDescription: "Gain 10hp",
        abilityNumber: 0,
        type: "spell",
        author: "Alan",
    },
    {
        id: 27,
        name: "BA to BS",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 5,
        defense: 0,
        cost: 1,
        ability: "",
        abilityName: "",
        abilityDescription: "Lose 5 Health, Draw 2",
        abilityNumber: 0,
        type: "spell",
        author: "Alan",
    },
    {
        //Higher health, lower attack monster
        id: 28,
        name: "Computer Science Friends",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 2,
        defense: 6,
        cost: 4,
        ability: "",
        abilityName: "",
        abilityDescription: "",
        abilityNumber: 0,
        type: "creature",
        author: "Alan",
    },
    {
        //Higher attack, lower health monster
        id: 29,
        name: "Computer Science Enemies",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 6,
        defense: 2,
        cost: 4,
        ability: "",
        abilityName: "",
        abilityDescription: "",
        abilityNumber: 0,
        type: "creature",
        author: "Alan",
    },
    {
        id: 30,
        name: "COMP401 TA",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 4,
        defense: 2,
        cost: 3,
        ability: "temp",
        abilityName: "temp",
        abilityDescription: "",
        abilityNumber: 0,
        type: "creature",
        author: "Alan",
    },
    {
        id: 31,
        name: "COMP410 TA",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 4,
        defense: 4,
        cost: 4,
        ability: "temp",
        abilityName: "temp",
        abilityDescription: "",
        abilityNumber: 0,
        type: "creature",
        author: "Alan",
    },
    {
        id: 32,
        name: "COMP411 TA",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 4,
        defense: 4,
        cost: 4,
        ability: "temp",
        abilityName: "temp",
        abilityDescription: "",
        abilityNumber: 0,
        type: "creature",
        author: "Alan",
    },
    {
        id: 33,
        name: "COMP283 TA",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 3,
        defense: 3,
        cost: 3,
        ability: "temp",
        abilityName: "temp",
        abilityDescription: "",
        abilityNumber: 0,
        type: "creature",
        author: "Alan",
    },
    {
        id: 34,
        name: "COMP455 TA",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 5,
        defense: 5,
        cost: 4,
        ability: "temp",
        abilityName: "temp",
        abilityDescription: "",
        abilityNumber: 0,
        type: "creature",
        author: "Alan",
    },
    {
        id: 35,
        name: "COMP550 TA",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 5,
        defense: 5,
        cost: 4,
        ability: "temp",
        abilityName: "temp",
        abilityDescription: "",
        abilityNumber: 0,
        type: "creature",
        author: "Alan",
    },
    //Go to do more down below
    {
        id: 36,
        name: "temp",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 0,
        ability: "temp",
        abilityName: "temp",
        abilityNumber: 0,
        type: "temp",
        author: "Alan",
    },
    {
        id: 37,
        name: "temp",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 0,
        ability: "temp",
        abilityName: "temp",
        abilityNumber: 0,
        type: "temp",
        author: "Alan",
    },
    {
        id: 38,
        name: "temp",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 0,
        ability: "temp",
        abilityName: "temp",
        abilityNumber: 0,
        type: "temp",
        author: "Alan",
    },
    {
        id: 39,
        name: "temp",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 0,
        ability: "temp",
        abilityName: "temp",
        abilityNumber: 0,
        type: "temp",
        author: "Alan",
    },
    {
        id: 40,
        name: "temp",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 0,
        ability: "temp",
        abilityName: "temp",
        abilityNumber: 0,
        type: "temp",
        author: "Alan",
    },
    {
        id: 41,
        name: "temp",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 0,
        ability: "temp",
        abilityName: "temp",
        abilityNumber: 0,
        type: "temp",
        author: "Alan",
    },
    {
        id: 42,
        name: "temp",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 0,
        ability: "temp",
        abilityName: "temp",
        abilityNumber: 0,
        type: "temp",
        author: "Alan",
    },
    {
        id: 43,
        name: "temp",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 0,
        ability: "temp",
        abilityName: "temp",
        abilityNumber: 0,
        type: "temp",
        author: "Alan",
    },
    {
        id: 45,
        name: "temp",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 0,
        ability: "temp",
        abilityName: "temp",
        abilityNumber: 0,
        type: "temp",
        author: "Alan",
    },
    {
        id: 46,
        name: "temp",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 0,
        ability: "temp",
        abilityName: "temp",
        abilityNumber: 0,
        type: "temp",
        author: "Alan",
    },
    {
        id: 47,
        name: "temp",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 0,
        ability: "temp",
        abilityName: "temp",
        abilityNumber: 0,
        type: "temp",
        author: "Alan",
    },
    {
        id: 48,
        name: "temp",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 0,
        ability: "temp",
        abilityName: "temp",
        abilityNumber: 0,
        type: "temp",
        author: "Alan",
    },
    {
        id: 49,
        name: "temp",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 0,
        ability: "temp",
        abilityName: "temp",
        abilityNumber: 0,
        type: "temp",
        author: "Alan",
    },
    {
        id: 50,
        name: "temp",
        cardimg: "link here",
        visualeffect: "link here",
        attack: 0,
        defense: 0,
        cost: 0,
        ability: "temp",
        abilityName: "temp",
        abilityNumber: 0,
        type: "temp",
        author: "Alan",
    },

];