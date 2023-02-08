export default {
    state: {
        profile: {
            username: "kenken2426",
            fullName: "Kenneth P. Relatores",
        },

        items: [
            {
                question: "You hear on the radio that an invasion of zombies is coming. What would you do first?",
                choices: {
                    A: "Board up the house and stock up on supplies",
                    B: "Wait for them to come and blast them full of lead.",
                    C: "Flee to the forest in terror."
                },
                correct: "B"
            },

            {
                question: "Zombies break into your base and are attacking your friends. What do you do?",
                choices: {
                    A: "Sacrifice yourself to save your friends",
                    B: "Leave them and escape to save yourself",
                    C: "Kill the zombies then check your group for bites",
                },
                correct: "C"
            },
            
            
            {
                question: "Your sister has been bitten. What do you do?",
                choices: {
                     A: "Say your sorry then kill her without hesitation",
                     B: "Leave her behind",
                     C: "Stay with her, knowing there has to be a cure",
               },
               correct: "C"
            },

            {
                question: "How big would your group be?",
                choices: {
                    A: "2-4 people. Easier to move around.",
                    B: "4-6 people. More people = more protection",
                    C: "Anything that would work out well for me.",
                },
                correct: "C"
            },    

            {
                question: "You've been bitten and are turning to a zombie. What would you do?",
                choices: {
                    A: "Don't tell anyone",
                    B: "Kill myself",
                    C: "Wait for the symptoms to take place",
                },
                correct: "C"
            },

            {
                question: "True or False? There is a cure to the Zombie Infection",
                choices: {
                    A: "True",
                    B: "False",
                },
                correct: "B"
            },

            {
                question: "You walk into a gun store but can only carry three weapons. What would you choose?",
                choices: {
                    A: "Anything that would kill",
                    B: "Nothing, I'm set",
                    C: "Pistol",
                },
                correct: "A"
            },

            {
                questiion: "The apocalypse is coming to an end but your whole group has died and now you're surrounded. What would you do?",
                choices: {
                    A: "I would fight to the death",
                    B: "Try my hardest to escape, knowing this ordeal is coming to an end",
                    C: "Give up and let them eat me",
                },
                correct: "B"
            },
              
            {
                quewstion: "In case of a zombie outbreak, the city with ______ number of people is the safest",
                choioces: {
                    A: "Highest",
                    B: "Least",
                    C: "None of the above"
                },
                correct: "C"
            },

            {
                question: "Suppose that you have survived the Apocalypse but have become unstable. You're walking outside when you notice somone pale and feverish. You know it is coming again. What would you do?",
                choices: {
                    A: "Kill the man right then and there",
                    B: "Kill myself.",
                    C: "Scream then go on a vacation",
                },
                correct: "C"
            },
          
        ]
    },



    getters: {
        profile: state => state.profile,
        items  : state => state.items
    },

    namespaced: true
};