const data = [

    // 1 
    { 
        user: { 
            firstName: 'Havana', 
            lastName: 'Sagrado', 
            username: 'havanalacubana', 
            gotchaData: '2018-7-10', 
            species: 'Dog',
            breed: 'Mini Blue Merle Aussie', 
            location: 'East Palo Alto, CA', 
            bio: `Lil Aussie with a big personality and a pink nose. πΈπ½π`,
        }, 
        posts: [ 
            { 
                description: `Hi everyone! I'm Havana, a blue merle mini aussie. πΆ Iβm 4 months old and my parents just adopted me! πΌπΎ One of my eyes is extra special. π  I love sitting out on our balcony on my little patch of grass. I'm supposed to use it to potty train but I'd rather lay on it. π± I also love belly rubs, naps, and cuddles! π¨βπ©βπ§ Iβm teething right now and I love chewing on my parentβs shoes. π Im a little shy and get anxious at times but Iβm working on it.`, 
                comments: [
                    `Hi Havana! π`, 
                    `Nice to meet you! βΊοΈ`, 
                    `I also have a patch of grass too!`,
                    `Your coat is so beatiful!!`,
                    `Welcome! π`, 
                    `I think I've seen you at the park!`,
                    `Welcome!!`,
                    `Hey Havana!`,
                    `hey hey! π`,
                    `You finally made an account! π€©`,
                    `About dang time! π€`,
                    `Hey pretty girl! π₯°`,
                ], 
            }, 
            { 
                description: `Rainy days got me like... π΄ `, 
                comments: [
                    `π€π€π€`, 
                    `Big shmood!`, 
                    `π΄`,
                    `Just about that time! π₯±`, 
                    `Pink nose spotted! π½`,
                    `Snoozin'!`, 
                    `Why do hoomans take these pics?! ππ₯±`, 
                    `D'awe! π₯°`, 
                    `Precious. π­`, 
                    `QT π₯°`, 
                ], 
            }, 
            { 
                description: `Just another day at the office. π©βπ»`, 
                comments: [
                    `π€£π€£π€£`, 
                    `Working hard? Hardly working! π€£`, 
                    `Boop! π½`,
                    `I spy a benebone! π₯π€€`,
                    `Get back to work! π`, 
                    `Piggy nose. π·`, 
                    `Clocking in overtime. π`, 
                    `The modern working dog. π`, 
                    `I thought work meant herding sheep for you aussies? π`,
                ], 
            }, 
            { 
                description: `Mom said we were going to Disneyland but we ended up at the vet instead. Now Iβm in this cone for 2 weeks. π­`, 
                comments: [
                    `Same thing happened to me! ππ`, 
                    `lmaoooo π`, 
                    `#notrust π`,
                    `Awe. π Hope you feel better soon Havi! βΉοΈ`,
                    `And that's why we have trust issues. π₯²`, 
                    `Hope it went well!`,
                    `Get better soon! β€οΈ`,
                    `βΉοΈβΉοΈβΉοΈ`,
                    `Wishing you a speedy recovery! β€οΈ`,
                    `I say you sue her! π€£`, 
                    `Oh no! π`,
                    `This happened to me too! They're liars! βΉοΈ`, 
                    `Awe Havi. Hope you get better soon. πβΉοΈ`,
                ], 
            }, 
            { 
                description: `My hoomans swore they wouldnβt let me on new couch but they forgot how cute I am. πΆ`, 
                comments: [
                    `All I have to do is give them sad eyes. π₯π`, 
                    `Dude same! ππ I just look at them like βΉοΈ`,
                    `They give in so quickly! π`,
                    `Mine are also softies! π`, 
                    `Mine don't know that I get on as soon as they leave the house. π`, 
                    `I don't even ask anymore! π€ͺ`, 
                    `lmaooo same!`,
                    `They love you! π₯°`, 
                    `But it's YOURS tho! Just like everything else in the house. π€ͺ`, 
                    `Same! ππ`, 
                ], 
            }, 
            { 
                description: `I LOVE visiting grandma! π΅ She lets me sample hooman food when my parents aren't looking. π This time I got to try tamales. π«π`, 
                comments: [
                    `Grandparents are the BEST! π΅π΄`, 
                    `I honestly like them more than my hoomans. π I said what I said! π€`, 
                    `They're way more fun! π€«`, 
                    `Your gm is such a cutie! π΅`, 
                    `D'aw! Y'all are too cute. π`,
                    `β€οΈβ€οΈ`,
                    `My gm got caught last time giving me taco bell! π€£`, 
                    `πππ`,
                    `My gp does the same thing!`,
                    `Tamales are lyfe. π€€`,
                    `My hoomans find out as soon as we get home. π©`,
                    `Abuelita! π΅`,
                    `Y'all are twins! πΆπ΅`,
                ], 
            }, 
            { 
                description: `Guess what everyone?! I have a baby sister! π£ Can you tell I'm so excited?! π―ββοΈ`, 
                comments: [
                    `Baby sisted?! She towers you! π`, 
                    `The family is growing! π―ββοΈ`, 
                    `Double trouble... π`,
                    `So happy for you Havi!`,
                    `D'awe. Y'all cute. π₯°`, 
                    `Twice the fun!`, 
                    `She's almost as tall as you! π`,
                    `Bring her to bowling next week! π€π³`, 
                    `Double the cuteness! π―ββοΈ`,
                    `Not sure we can handle two of you! π`, 
                    `She looks terrified! π`,
                    `Her tiny collar. π­`, 
                    `You're excited but she's terrified. π`, 
                    `Looks like she's cooler than you! π`,  
                ], 
            }, 
            { 
                description: `Y'all GOTTA try these cod cubes! They're delicious! π£`, 
                comments: [
                    `Omg these cod cubes look so amazing! π`, 
                    `Adding these to my hooman's grocery list! π€€`, 
                    `Drooling just thinking about them. π€€`,
                    `Thanks for the recommendation! π`,
                    `Now I'm hungry! π©`,
                    `You sure this isn't an ad.. π§`, 
                    `I've had these too! They're delicious! π€€`, 
                    `These are seriously game-changing!`, 
                    `Their dried salmon skin is also delicious! π£`, 
                    `You sure the serving size on these is one? π€£`, 
                    `How much are your hoomans being paid to promote this? π`, 
                ], 
            }, 
            { 
                description: `Dreaming of greenies, chew toys, and belly rubs. β¨β¨β¨`, 
                comments: [
                    `You're so at peace. β€οΈ`, 
                    `Precious. π­`, 
                    `D'awe Havi. π₯°`,
                    `So peaceful. β€οΈ`,
                    `πππ`,
                    `Sleepy girl. π΄`, 
                    `And herding sheep? π`,  
                ], 
            }, 
            { 
                description: `Mom thinks she can fool us by hiding our meds in whipped cream. She's ain't wrong. π`, 
                comments: [
                    `Just spit it out after they leave! π`, 
                    `I'll usually just hide it under my tongue and spit it out once they're gone. π€«`, 
                    `Y'all have it wrong! The trick is to spit it out in front of them so they have to give you more! π€―`,
                    `I hate when they do this. π`,
                    `Why do we need meds anyway?! π€¨`,
                    `Bamboozled! π`, 
                    `They think they're SOOO slick. π`, 
                    `This works 100% of the time unfortunately. π€ͺ`,  
                ], 
            }, 
            { 
                description: `Benebones are life! β€οΈ Especially the bacon-flavored one! π₯`, 
                comments: [
                    `Careful! I broke a tooth chewing on this! β€οΈβπ©Ή`, 
                    `The chicken one is good too! π`, 
                    `I like the cheese one more. π§`,
                    `These are so good! π©`,
                    `Agree! π€€`,
                    `I think I'm on my 6th one! π€ͺ`, 
                    `Haven't had one of these in a minute! π«`,   
                    `I mean they're alright.. π€­`, 
                    `Ooof! The bacon flavored one. π€€`, 
                    `I go through one of these a week! π€ͺ`,
                ], 
            }, 
            { 
                description: `Maybe if I get into trouble around the house my parents will never want to leave. π§ I'll start by digging out the plants. π`, 
                comments: [
                    `Try escaping for a few minutes! That also works. π`, 
                    `This is actually genius. π€―`, 
                    `Gonna try this over the weekend! π€«`,
                    `Hmmm.. π€`,
                    `Pretending to go through the chocolate drawer also works. π€ͺ`,
                    `Mine have given up having plants inside. π€£`,
                    `This worked when I was a puppy, but now they leave anyway. π­`, 
                    `You're evil! I love it! π`, 
                    `So rude. ππ`,
                ], 
            }, 
            { 
                description: `Candid moment or totally staged? π€ͺ`, 
                comments: [
                    `QT π₯§`, 
                    `Counting sheep? Or herding them? π`,
                    `Snoozin'! π₯°`,
                    `I thought the hoomans didn't want you on the furniture?! π`,
                    `So peaceful! π§ββοΈ`, 
                    `Wait you're on the bed?! ππ`,
                    `I can see your pearly whites! π¦·`, 
                    `G'night! π΄`,  
                    `I'm guessing candid. π€ͺ`, 
                    `You're always sleeping!`,
                ], 
            }, 
            { 
                description: `Peep the breakfast burrito mom was taunting me with this morning. π’ I showed a lot of restraint and wasn't rewarded in the end. π Next time I'm taking a bite! π³`, 
                comments: [
                    `Call dad ASAP! πΏ`,
                    `That's sooo savage of her! π`, 
                    `A bite?! Take the whole dang thing next time! π`, 
                    `That's so rude. π€¬`,
                    `Get an attorney stat. π‘`,
                    `I would have taken a bite. π€`, 
                    `File a claim with your local SPCA. π€`,
                    `Wow. I thought she was nice too. π`, 
                    `I'd have an "accident" inside the house. π`, 
                    `Honestly, I'd sue. π`, 
                    `Light the house on fire. π₯π§―`, 
                    `Call grandma and grandpa! π΅π΄`, 
                    `Unacceptable! Ask for a new family! π `,
                    `Report this to her boss! π`, 
                ], 
            }, 
            { 
                description: `β¨π golden hour πβ¨`, 
                comments: [
                    `So pretty! π`, 
                    `Wow! π`, 
                    `Pawtogenic! β€οΈ`,
                    `Majestic! β¨`,
                    `The light is so perfect in this one! π`,
                    `Love this one. π`, 
                    `My goodness! π₯°`, 
                    `My favorite picture of you. πΈ`, 
                    `β€οΈβ€οΈβ€οΈ`, 
                    `Literally perfect. π`,  
                ], 
            }, 
        ],
     }, 

    // 2
    { 
        user: { 
            firstName: 'Peony', 
            lastName: 'Sagrado', 
            username: 'peonythepony', 
            gotchaData: '2019-11-13',
            species: 'Dog',
            breed: 'Mini Goldendoodle', 
            location: 'East Palo Alto, CA', 
            bio: `Showy, graceful, and delicate - like peonies. πΈ Ball is life! πΎ`, 
        }, 
        posts: [
            { 
                description: `Hi everyone! I'm Peony. πΈ I'm a mini goldendoodle with a big personality. β¨ I just turned 4 months old and already almost tower over my big sister Havana π¦. I love playing fetch πΎ, eating π½, going to the beach π, sleeping under our couch π, and chewing on things around the house π€·ββοΈ! My parents think I'm part horse because I prance and gallop but I'm just elegant. π`, 
                comments: [
                    `Hello Peony! π`, 
                    `Welcome!`,
                    `Nice to meet you! βΊοΈ`, 
                    `What's up girl! πΈ`, 
                    `Hi Peony! π₯°`,
                    `Hai! π`,
                ], 
            }, 
            { 
                description: `I survived my first visit to the vet! Look at the cool sign they made just for me! π₯° Thank you Dr. Hernandez for the pets, treats, and belly rubs! πΆ`, 
                comments: [
                    `πππ`, 
                    `You're fearless!`, 
                    `Congrats!`,
                    `Woah they had a sign for you?!`,
                    `I LOVE Dr. Hernandez! She's the best!`,
                    `So awesome! π`,
                    `Dr.Hernandez is literally the best! β€οΈ`, 
                    `Can you join us at the park now?! π€`, 
                    `Woot woot! π`,
                ], 
            }, 
            { 
                description: `OMG! I love Benebones! β€οΈ π₯`, 
                comments: [
                    `You gotta try out the chicken one! π`, 
                    `I chipped a tooth with one of these and now my hoomans refuse! βΉοΈ`, 
                    `The cheese one is. π§π€€`,
                    `The bacon one is dangerously delish! π`,
                    `100% agree! π€€`,
                    `I'm probably on my tenth one! π€ͺ`, 
                ], 
            }, 
            { 
                description: `I (barely) survived my first grooming! I can finally see again! π`, 
                comments: [
                    `That glow-up! π`, 
                    `So pretty! β€οΈ`, 
                    `You look like an entirely different dog! π€£`,
                    `π`,
                    `Looks great! π`,
                    `QT π₯§`, 
                    `You're so happy! π€`,  
                ], 
            }, 
            { 
                description: `My goodness, these cod cubes are delicious! π£`, 
                comments: [
                    `They're dangerously good! π`, 
                    `Oof! Adding these to my list! π€€`, 
                    `Woah that looks delicious!`,
                    `Appreciate the rec! π`,
                    `Now I'm hungry! π© Wait I'm always hungry. π€ͺ`,
                    `Try out their sardines! Also amazing! π`, 
                    `Wouldn't have been able to tell from the picture. π€£`, 
                ], 
            }, 
            { 
                description: `Can you tell I LOVE to play fetch? πΎ`, 
                comments: [
                    `It's the golden retriver in you!`, 
                    `Ball is life!`, 
                    `Same! πΎ`,
                    `It's low key overrated. π`,
                    `Me too!`, 
                ], 
            }, 
            { 
                description: `I'm officially 3 hooman years old today! I think that makes me 21 dog years old! Cheers? ππΊ`, 
                comments: [
                    `HBD Peony! π`,
                    `Happy Birthday Peo! π`, 
                    `You're growing up so fast! Happy Birthday buddy! π₯³π`, 
                    `Happy Birthday to the one and only Peony!! π`,
                    `Happy pup day! ππ`, 
                    `Happy birthday, Peony! ππΎ`,
                    `3 already?! I can't believe how fast time flies. HBD!`, 
                    `Have a great birthday! β€οΈ`, 
                    `I hope you have an amazing day! π`, 
                ], 
            }, 
            { 
                description: `First time experiencing snow. βοΈ It was magical! β¨`, 
                comments: [
                    `I still haven't gone! π’`, 
                    `It's so much fun right?!`, 
                    `I LOVE the snow. βοΈ`,
                    `Did you make a snowman? βοΈ`,
                    `Don't forget to make a snow angel! πΌπ»`, 
                ], 
            }, 
            { 
                description: `I'm allegedly not allowed on the furniture. Keyword: allegedly. π`, 
                comments: [
                    `lmaooo my parents said the same thing and here we are!`,
                    `I jump on as soon as they leave. π€ͺ`, 
                    `I don't even ask anymore! π`, 
                    `Sounds like yours are softies like mine! π`, 
                    `Just give them puppy eyes. π₯π`, 
                    `But it's your house! π€ͺ`, 
                    `Omg same! ππ`, 
                    `Just give them sad eyes. βΉοΈπ`,
                ], 
            }, 
            { 
                description: `Rain, rain, go away. Please come back another day. π§ I miss playing fetch outside. π₯Ί`, 
                comments: [
                    `I hate the rain too. π’`,
                    `This weather sucks. π`,
                    `Just put on a rain jacket! π€`, 
                    `π©`,
                    `Who invented rain anyway. π`,
                    `Unpopular opinion, I actually love the rain! π`,
                ], 
            }, 
            { 
                description: `Embracing the chipmunk in me. πΏ`, 
                comments: [
                    `π`, 
                    `Silly girl. π`, 
                    `Chonkie cheeks! π€`,
                    `π₯°π₯°π₯°`,
                    `Doood you look hilarious! π€£`, 
                ], 
            }, 
            { 
                description: `You can see my pearly whites even when my mouth is closed. π¦·π¬`, 
                comments: [
                    `Lil teef! π`, 
                    `I have an under-bite too! π€©`, 
                    `You're so goofy! π€ͺ`,
                    `Booop! π½`,
                    `π€£`, 
                ], 
            }, 
            { 
                description: `Happy New Year everyone! πΎ`, 
                comments: [
                    `HNY Peo! πͺ`, 
                    `Happy New Year! π€`, 
                    `Happy New Year Peony! πΎ`,
                    `HNY!!! ππ`,
                    `You too Peony!`, 
                    `HNY to you and your family! β€οΈ`, 
                    `ππ₯°π€`, 
                ], 
            }, 
        ],
    },

    // 3
    { 

        user: { 
            firstName: 'Milo', 
            lastName: 'Dao', 
            username: 'milothegreat', 
            gotchaData: '2020-9-26',
            species: 'Dog',
            breed: 'Mini Labradoodle', 
            location: 'Sunnyvale, CA', 
            bio: `People judge me for my eyebrows | π«π`, 
        },
        posts: [
            { 
                description: `What's up y'all! I'm Milo. π I'm a mini labradoodle. I'm originally from Oregon but my original hoomans couldn't handle my craziness so I was rehomed. π To be fair, I was (read: am) crazy. π€ͺ That was the best thing that could've ever happened to me though because I'm now living my best life in sunny California with my forever family! π¨βπ©βπ¦ I love exploring new places, meeting new furry friends, going on walks, and woofing. Follow me for doses of cuteness, playfulness, and occasional craziness. πΆ`, 
                comments: [
                    `What up dude! π€`, 
                    `Hey Milo!`, 
                    `Hi! π`,
                    `Welcome Milo! π€`,
                    `Elo! π`,
                    `T'sup Milo! π`, 
                    `Hey Milo! Welcome! π`, 
                ], 
            }, 
            { 
                description: `I've got brows for days! π€¨`, 
                comments: [
                    `Boop! π½`, 
                    `You're so cute! π`, 
                    `Are those real?!`,
                    `For dayz! π³`,
                    `D'awe. π₯°`,
                ], 
            }, 
            { 
                description: `Itβs Friday the 13th which means Iβm going to be a demon child today. πΉ`, 
                comments: [
                    `Everyday is torment day! π`, 
                    `So mean! π`, 
                    `Get 'em! π`,
                    `lol savage! π`,
                    `Watch them kick you out. πΉ`, 
                ], 
            }, 
            { 
                description: `Went to the beach this weekend! Letβs just say the sand was delicious. π`, 
                comments: [
                    `Booop!`, 
                    `You're so filthy! π`, 
                    `You got something on your chin Milo. π€£`,
                    `Which beach is this at? We were at Newport!`,
                    `π½π½π½`, 
                ], 
            }, 
            { 
                description: `Can you tell I had a blast at the dog park?! π€©`, 
                comments: [
                    `You look like a little lion here! π¦`, 
                    `D'awe! π₯°`, 
                    `Dude you're getting so big! π³`,
                    `QT π₯§`,
                    `Looking handsome! π€`, 
                    `Woah you're so big now!`, 
                ], 
            }, 
            { 
                description: `Eyebrows on fleeeek! π`, 
                comments: [
                    `ON FLEEK! π`, 
                    `Looking good Milo! π`, 
                    `Wash your paws, ya nasty! π`,
                    `Your hair's getting a little long no? π`,
                    `Your coat. π`, 
                ], 
            }, 
            { 
                description: `Before and after my first big boy cut. It was about dang time, ma! π`, 
                comments: [
                    `About dang time!`, 
                    `Look at that glow-up! π`, 
                    `Sheeesh! π`, 
                    `You're a whole new pup! π€£`,
                    `Dang dude, you were shaggy!`,
                    `Didn't realize how long it was. π`,
                    `QT π₯§`, 
                    `You're so happy now! π€`,  
                ], 
            }, 
            { 
                description: `Tongue Out Tuesday? Tongue Out EVERYDAY! π»`, 
                comments: [
                    `Eyyy! π`, 
                    `Swut I'm sayin'!`, 
                    `Eybrows AND eyelashes for days!`,
                    `Those eyes. π`,
                ], 
            }, 
            { 
                description: `Ran into the wall this morning. I think my hair is getting a tad bit too long... π`, 
                comments: [
                    `Dude you definitely need a cut. π³`, 
                    `You think?! π`, 
                    `Milo... this is getting bad. π€£`,
                    `Ummm.. π°`,
                ], 
            }, 
            { 
                description: `Which am I more more interested in? The wet food or the kibble? π€€`, 
                comments: [
                    `Hmmm, I can't tell.. π`, 
                    `The kibble? π€ͺ`, 
                    `Boi who you playing? You know you ate both. π€£`,
                    `Unpopular opinion but the kibble looks better. π`,
                    `Hella bougie!`, 
                ], 
            }, 
            { 
                description: `They said I wasn't allowed on the bed or couch, but said nothin' about the desk. π`, 
                comments: [
                    `S'right! π`, 
                    `Tell 'em! π£`, 
                    `It's your house! π€`,
                    `Oooooo I'm telling. π`,
                    `π€«`, 
                ], 
            }, 
            { 
                description: `Hung out with my girlfriends today. Yes, that was plural. π`, 
                comments: [
                    `Who those cuties? π`, 
                    `Dang player!`, 
                    `They're probably your hoomans friend's dogs. π`,
                    `You play too much. π€£`,
                    `But Milo you have no game! π`, 
                    `Your hoomans are probably just dog-sitting. π`,
                ], 
            }, 
        ],        
    },

    // 4
    { 
        user: { 
            firstName: 'Archie', 
            lastName: 'Luna', 
            username: 'goodboyarchie', 
            gotchaData: '2021-11-24',
            species: 'Dog',
            breed: 'Australian Shepherd', 
            location: 'Los Angeles, CA', 
            bio: `The goodest boy (most of the time). πΆ`, 
        },
        posts: [
            { 
                description: `G'day, mate! I'm Archie. I'm a wild and wacky australian shepherd with a goofy grin and a wagging tail. When I'm not herding sheep π, I'm herding my big sister Arya πΊ. I love chasing my tail, rolling in the mud, and playing fetch (though I often forget to bring the ball back!). I'm a furry ball of energy who loves nothing more than a good belly rub and a tasty treat. So come along for the ride and let's have some fun together! π€ͺ`, 
                comments: [
                    `Welcome! πΆ`,
                    `Hey Archie!`,
                    `Hai! π`,
                    `Hey! Nice to meet you! βΊοΈ`, 
                    `Youre expression is so goofy! π€ͺ`,
                    `What up Arch! π€`, 
                    `About dang time Archie! π€`,
                    `Hi Archie! π`, 
                ], 
            }, 
            { 
                description: `Catchin' zZz's. π€`, 
                comments: [
                    `I'm just resting my eyes. π€ͺ`, 
                    `Rest  up! π΄`, 
                    `π€π€π€`,
                    `Now I'm sleepy! π₯±`,
                ], 
            }, 
            { 
                description: `In jail for peeing in the house. Free Archie! π`, 
                comments: [
                    `Locked up. They won't let me out. πΆ`, 
                    `Free my boi Archie! π`, 
                    `You look so sad. π­`,
                    `I'm calling the cops! π€π€£`,
                    `Free Arch!`, 
                ], 
            }, 
            { 
                description: `Mom says I'm pawtogenic! πΈ`, 
                comments: [
                    `Egh. π€£`, 
                    `QT π₯§`, 
                    `You are! π`,
                    `Idk about that one. π€ͺ`,
                    `She lyin'! πΉ`, 
                ], 
            }, 
            { 
                description: `Ruff mornings call for a puppuccino with my hooman βοΈπΆβ€οΈ`, 
                comments: [
                    `Looks like you loved it. π`, 
                    `They're so good!`,
                    `Now I'm craving one! π©`,
                    `It's all over your whiskers! π­`, 
                    `Boop! π½`, 

                ], 
            }, 
            { 
                description: `Time to Paw-tayyy! π₯³`, 
                comments: [
                    `ππππΎ`, 
                    `I've got the piΓ±ata! πͺ`, 
                    `Woot woot! π₯³`,
                    `What are we celebrating?! π€`,
                    `Paaaawtay! π`, 
                ], 
            }, 
            { 
                description: `Just out here being a good wilderness scout. π»`, 
                comments: [
                    `Aren't you supposed to be a herder? π`, 
                    `You look like a model! β¨`, 
                    `I love that trail! π₯Ύ`,
                ], 
            }, 
            { 
                description: `Happy 4th of July friends! πΊπΈππ§¨πΎ`, 
                comments: [
                    `You aren't scared of the fireworks? π±`, 
                    `I hate this holiday! Too many sounds! π°`, 
                    `'Merica! πΊπΈ`,
                    `Happy 4th Archie! ππ­`,
                ], 
            }, 
            { 
                description: `It's my first birthday and I'm feeling fur-tastic! πΎππΆ`, 
                comments: [
                    `Happy Birthday to the one and only Archie! π`,
                    `HBD friend! π€`,
                    `Hope you have a great birthday! β€οΈ`, 
                    `I hope you have an amazing day Archie! π`, 
                    `Happy birthday! πΎ`,
                    `1 already?! Time flies! HBD! π`, 
                    `Happy pup day! π`, 
                    `You're growing up so fast! π₯³`, 
                    `Happy Birthday buddy! β€οΈ`, 
                ], 
            }, 
            { 
                description: `Merry Christmas, from our pack to yours!πβ€οΈ`, 
                comments: [
                    `Merry Chrysler to you and your family! β€οΈ`,
                    `ππππππ`, 
                    `Merry Christmas Arch! π€`, 
                    `Y'all too cute! Merry Christmas! π₯°β€οΈ`, 
                    `Merry Christmas to you too! π`, 
                    `I hope you got lots of treats from Santa Archie! ππͺ`,
                ], 
            },
        ], 
    },

    // 5
    {
        user: { 
            firstName: 'Doug', 
            lastName: 'Barkowitz', 
            username: 'dougthepug',
            gotchaData: '2016-3-26',
            species: 'Dog',
            breed: 'Pug', 
            location: 'Nashville, TN', 
            bio: `π King π`, 
        },
        posts: [
            { 
                description: `Been thinking of you a latte. β€οΈ`, 
                comments: [
                    `You think you're Edgar Allan Pug now or what? π€£`, 
                    `Errrrr. π`, 
                    `Dude get over her! π`,
                    `So corny. π€’π`,
                    `Smh. π`,
                    `Fellas, we lost one. ππ`,  
                ], 
            }, 
            { 
                description: `Am I doing this meal prep thing right? π€ͺ`, 
                comments: [
                    `Looks good to me! π€£`, 
                    `Doesn't look like it's working Doug. π`, 
                    `That calorie deficit is too aggressive Doug. π€£`,
                    `Perfectly balanced imo. π€ͺ`,
                    `I think you need another slice in each. π`, 
                ], 
            }, 
            { 
                description: `Land of the furry, home of the brave! 'Merica! πΊ`, 
                comments: [
                    `π»`, 
                    `Not looking forward to those fireworks. π©`, 
                    `Cheers Doug! π»`,
                    `Happy 4th Doug!`, 
                    `This is just another excuse to eat huh? π€£ππ­`,
                ], 
            }, 
            { 
                description: `First day on the job. This would be a lot easier if I had thumbs. π₯²`, 
                comments: [
                    `ππ€£`, 
                    `Dude seriously! π`, 
                    `Bruuuuuh π€£`,
                    `Looking sharp! π`,
                    `I give it another day before you're fired. π€£`, 
                ], 
            }, 
            { 
                description: `Merry pugmas y'all! πβ€οΈ`, 
                comments: [
                    `Merry Christmas bro! β€οΈ`,
                    `Merry Christmas! π₯°`, 
                    `Likewise Dougie! β€οΈ`, 
                    `Merry Christmas to you too Doug! π`, 
                    `Merry Christmas Doug! π€`, 
                ], 
            }, 
            { 
                description: `Vibin' out here in Barbados. Jk, we at the community pool. π`, 
                comments: [
                    `Bruh you play too much! π€£`, 
                    `Dude you're a clown lmao π€‘`,
                    `Smh π€£`,
                    `Where's the invite tho? π`, 
                ], 
            }, 
            { 
                description: `MSCHF's Big Red Boots: secured. π`, 
                comments: [
                    `Sheesh! π`, 
                    `They're amazing. π€€`, 
                    `Ooof! Gonna have to cop a pair. π©`,
                    `π₯π₯π₯`,
                    `This looks ridiculous. π`,
                    `Looking fresh Doug! π`, 
                ], 
            }, 
        ], 
    },

    // 6
    { 
        user: { 
            firstName: 'Pepper', 
            lastName: 'Urchin',
            username: 'saltandpepper', 
            gotchaData: '2019-6-24',
            species: 'Hedgehog',
            breed: 'White-bellied', 
            location: 'Austin, TX', 
            bio: `Happy and smiling! π¦π»`, 
        },
        posts: [
            { 
                description: `New pair of sunnies! How do they look?! πΆ`, 
                comments: [
                    `They look great on you! π`, 
                    `So cute! π`, 
                    `They're perfect!`,
                    `You look so hip! π€©`,
                    `Def keepers!`, 
                ], 
            }, 
            { 
                description: `Sunday's are for self-care. Who doesn't love a spa day? π§ββοΈ`, 
                comments: [
                    `πππππ`, 
                    `D'awe. π`, 
                    `The little floaties. π­`,
                    `Living your best life! π`,
                ], 
            }, 
            { 
                description: `Officially a noogler! Joining the search team as an L5! π©βπ»`, 
                comments: [
                    `Congrats! π`, 
                    `Amazing news!`, 
                    `How many leetcode hards did you do? What about mediums?`,
                    `I knew you'd get it! π₯³`,
                    `How long did you grind leetcode for? π`,
                    `So awesome Pepper!`, 
                    `Woot woot! π`, 
                ], 
            }, 
            { 
                description: `Y'all, idk about this... π³`, 
                comments: [
                    `Hmmm.. idk about that either. π€£`, 
                    `This can't possibly end well Pepper. π₯`, 
                    `Don't do it! π³`,
                    `Are you kidding?! π±`,
                    `Do it! π€£`, 
                ], 
            }, 
            { 
                description: `Chipoltees on a Friday night! π―`, 
                comments: [
                    `Eyyyy! π`, 
                    `I love Chipoltees! π€€`, 
                    `π€’`,
                    `So bomb! π€€`,
                    `Chipoltees!`, 
                ], 
            }, 
        ], 
    },

    // 7
    {
        user: { 
            firstName: 'Ludwig', 
            lastName: 'Nibbles', 
            username: 'piguiea',
            gotchaData: '2022-8-16',
            species: 'Guinea Pig',
            breed: 'Cavia Porcellus (Hairless)', 
            location: 'Detroit, MI', 
            bio: `Tiny but mighty. πΉ`, 
        },
        posts: [
            { 
                description: `Greetings everyone. I'm Ludwig. I'm a hairless guinea pig. What I lack in fur, I have in spirit, wit, and charm. Follow my adventures as I explore the world, one squeak at a time. πΉβ¨`, 
                comments: [
                    `Hey Ludwig! βΊοΈ`, 
                    `Hi! Welcome! π`, 
                    `Hey friend! π€`,
                    `Hola! π`,
                    `Hey what's up!`, 
                ], 
            }, 
            { 
                description: `It's always sweater weather when you're hairless. π₯Ά`, 
                comments: [
                    `Oh no! π`, 
                    `You must be freezing rn! π₯Ά`, 
                    `Sweater weather all day every day!`,
                    `Just realized you're hairless!`,
                    `D'awe. β€οΈ`, 
                ], 
            }, 
            { 
                description: `I did not choose the chunky life, the chunky life chose me. π`, 
                comments: [
                    `It chose me too! π€£`, 
                    `Chunky life!`, 
                    `That's what I'm saying! π`,
                    `Chonkies, unite! π`, 
                ], 
            }, 
            { 
                description: `Loving this wfh policy! βοΈ`, 
                comments: [
                    `Why's the page empty? π`, 
                    `Hard at work or hardly working? π€ͺ`, 
                    `Isn't it the best?!`,
                    `I LOVE it! βΊοΈ`,
                    `It's theee best!`, 
                ], 
            }, 
        ], 
    },

    // 8
    {
        user: { 
            firstName: 'Thor', 
            lastName: 'Beardicus', 
            username: 'tailsofscales',
            gotchaData: '2021-7-18',
            species: 'Bearded Dragon',
            breed: 'Pogona Vitticeps (Inland)', 
            location: 'Jacksonville, FL', 
            bio: `Join me on my scaly journey as I conquer the world one basking spot at a time. π²`, 
        },
        posts: [
            { 
                description: `Hear ye, hear ye! π£ I am a mighty and majestic bearded dragon, revered for my strength, intellect, and unmistakable appearance. Don't let my rough scales, sharp claws, or pissy expression fool you, I'm actually gentle and friendly. βΊοΈ Follow along as I explore the world! π¦β¨ `, 
                comments: [
                    `Howdy! π`, 
                    `Hey Thor!`, 
                    `Hi you majestic dragon! π`,
                    `What's up Thor!`,
                    `Welcome Thor! π€`, 
                ], 
            }, 
            { 
                description: `Despite my RBF saying otherwise, I LOVE going to the beach! ππ§ββοΈ`, 
                comments: [
                    `I would have never guessed. π`, 
                    `You're demeanor is so misleading! π`, 
                    `But you're so pissed in the picture! π`,
                    `Wait what?! π`,
                    `Looks like you hate it. π€£`, 
                ], 
            }, 
            { 
                description: `Who wants to catch these gloves?! π₯π€ Kidding! π₯°`, 
                comments: [
                    `Lehgo π€π`, 
                    `I'll crush you tho! π`, 
                    `I do! π`, 
                    `Let's duke it out! π`,
                    `Maaaan come on. π€£`,
                ], 
            }, 
            { 
                description: `Working hard or hardly working? ππ·`, 
                comments: [
                    `I'd say the latter. π`, 
                    `Is the question rhetorical? π€ͺ`, 
                    `Doubt you're working hard. So you must be hardly working. π€£`,
                    `Why are you always mad?! π`,
                    `Thor we all know the answer to that. π€£`, 
                ], 
            }, 
            { 
                description: `Momma we made it! π`, 
                comments: [
                    `Congrats buddy! βΊοΈ`, 
                    `Don't forget me when you're famous! π€`, 
                    `So proud of you Thor! π₯²`,
                    `Proud of you man! π­`,
                    `You deserve it all Thory! β€οΈ`, 
                ], 
            }, 
            { 
                description: `People are always surprised to find out that my favorite hobby is tea-time! π«π©`, 
                comments: [
                    `I'm still shocked tbh. π€£`, 
                    `No way... π³`, 
                    `Wait what? Seriously? π`,
                    `I still can't believe it. π`,
                    `That's so awesome! π`, 
                ], 
            }, 
        ],  
    },

    // 9
    {
        user: { 
            firstName: 'Wooly', 
            lastName: 'Fluffington', 
            username: 'lambie',
            gotchaData: '2015-2-6',
            species: 'Lamb',
            breed: 'Herdwick', 
            location: 'East Berne, NY', 
            bio: `I like to frolic in the meadows, nibble on grass, and soake up the sunshine. π`, 
        },
        posts: [
            { 
                description: `Baaa! π Nice to meet you! π`, 
                comments: [
                    `Hi there! Lovely to meet you too! πβ€οΈ`, 
                    `You're the most adorable lamb I've ever seen! π`, 
                    `Aww, your little baa! π₯°`,
                    `Nice to meet you too! This just brightened up my day! π`,
                    `Too precious! I can't! π­`, 
                ], 
            }, 
            { 
                description: `Counting lambs. π`, 
                comments: [
                    `I can't! π­`, 
                    `Oh my goodness, counting lambs has never been so cute! π₯Ίπ`, 
                    `Cutest lamb in the flock! π€`,
                    `Thanks for brightening up my day! ππΌ`,
                    `So peaceful! ππΏ`, 
                ], 
            }, 
            { 
                description: `In my happy place. π`, 
                comments: [
                    `This radiates happiness! π`,
                    `You deserve all the sunshine and good vibes! π`, 
                    `I can feel the calmness and content through the screen! π`, 
                    `Nothing like some good ol' nature therapy. πΏπ`,
                    `You're a true source of joy and happiness! πΌ`,
                    `This photo is like a breath of fresh air, thank you for sharing your happy place with us! π`, 
                ], 
            }, 
            { 
                description: `Smiles all round. π Have a great weekend friends! π€`, 
                comments: [
                    `Your smile is contagious! ππ`, 
                    `This is the kind of energy I needed to start off my day! πΌ`, 
                    `So wholesome! π­`,
                    `Now you got me smilin'! β€οΈ`,
                    `Have a happy and relaxing weekend! π`, 
                ], 
            }, 
        ], 
    },

    // 10
    { 
        user: { 
            firstName: 'Hamlet', 
            lastName: 'Hogsworth',
            username: 'hammie', 
            gotchaData: '2016-6-23',
            species: 'Pig',
            breed: 'Yorkshire', 
            location: 'Charlotte, NC', 
            bio: `Mud puddles, snout scratches, and oinking adventures. π·`,
        },
        posts: [
            { 
                description: `Happy National Pie Day! π₯§πππ«`, 
                comments: [
                    `It's my favorite day of the year! π€€`, 
                    `Happy National Pie Day to you too! These look absolutely delicious! π₯§π`, 
                    `Yum! Those pies look amazing! πππ«`, 
                    `Oh my goodness, I'm drooling over here!`,
                    `Your pie game is on point! π€€`,
                    `That pie is almost too pretty to eat...almost! ππ`, 
                ], 
            }, 
            { 
                description: `Catching waves and soaking up the sun. Who says pigs can't surf?! βοΈπββοΈπ·`, 
                comments: [
                    `Look at you! πββοΈπ·`, 
                    `Diggin' the shades! π`,
                    `Summer fun and relaxation looks great on you Hammie! π`, 
                    `Cheers to living your best life! βοΈπΉ`, 
                    `This just screams out good vibes! π`,
                    `Surfs up brah! π€`,
                ], 
            }, 
            { 
                description: `Pigging out at the bar, living my best life. π»π·π`, 
                comments: [
                    `Now that's what I call pigging out! π€£`,
                    `You're glistening Hammie! β¨`, 
                    `I see you're enjoying some cold ones too! Cheers to living your best life! π»π·`, 
                    `Nothing wrong with indulging every once in a while! Enjoy! π·π`, 
                ], 
            }, 
            { 
                description: `Throwback to when I was just a little piglet. πΆ`, 
                comments: [
                    `You were an adorable piglet! π· What happened?! π€£`, 
                    `This is too precious! π­`, 
                    `The nose! I can't handle the cuteness! π₯Ίπ½`,
                    `And then life happened. π Kidding Hams! π€ͺ`, 
                ], 
            }, 
            { 
                description: `Boop! π½`, 
                comments: [
                    `Boop! Gotcha! πππ½`, 
                    `Just waiting to be booped! π₯°π`, 
                    `Boop!!! π½`, 
                    `Your boopability factor is off the charts! Boop! ππ½`, 
                ], 
            }, 
        ], 
    },

    // 11
    { 
        user: { 
            firstName: 'Gigi', 
            lastName: 'Chanel', 
            username: 'bougie',
            gotchaData: '2022-5-1',
            species: 'Dog',
            breed: 'Italian Greyhound', 
            location: 'New York, NY', 
            bio: `Fashion designer for the brands your admire. My taste is high-end and my attitude is even higher. π`, 
        }, 
        posts: [
            { 
                description: `πΈ`, 
                comments: [
                    `Bless us queen! πΈ`, 
                    `Looking fabulous as always! ππ`, 
                    `The one and only! ππΎ`, 
                    `Slay girl! π`,
                    `We are not worthy!! But seriously, you're stunning! ππΈ`,
                    `Queen of NY! Loves u! β€οΈπΎ`, 
                ], 
            }, 
            { 
                description: `Stay classy y'all. π`, 
                comments: [
                    `Classy and fab! Per usual! ππ`, 
                    `Effortlessly royal! π`,
                    `Sheesh! Taking notes. π`, 
                    `Fabulous! ππ`,
                    `Breaking the internet! β‘οΈ`,
                    `Sophistication that we all aspire to! ππ₯`,
                    `Classy, bougie, and can't forget about sassy! Slay bae! π`, 
                ], 
            }, 
            { 
                description: `Sneak peak at Szn 7. π€«`, 
                comments: [
                    `On fleek! ππ`, 
                    `π₯΅π₯π₯΅π₯π₯΅π₯`, 
                    `Sheeesh! Slay queen! π π`, 
                    `You've done it again!! π`,
                    `~fashion goddess~`, 
                    `Dying to get my paws on this collection π₯΅`, 
                    `Delivered. Like usual. π₯`,
                ], 
            }, 
            { 
                description: `Breaking necks - as usual. β€οΈ`, 
                comments: [
                    `πππ`, 
                    `Power couple of the millenia! π₯΅π₯`,
                    `Definition of couple goals. ππΎ`,
                    `Y'all so perfect it should be illegal! π`, 
                ], 
            }, 
            { 
                description: `My first cover issue hits the stands today. What an honor! πΈ`, 
                comments: [
                    `Cover girl! Couldn't be prouder! Congrats! ππ`, 
                    `Making waves and I'm here for it! π₯`, 
                    `Correction: first of many! Congrats Gigi! π₯π`,
                    `Flawless! Grats, Gi! π`,
                    `The come-up! I knew it'd happen! π₯²`,
                    `So proud Gigi!!! π­`, 
                ], 
            }, 
            { 
                description: `NY tingz. π`, 
                comments: [
                    `Tell 'em! π`, 
                    `Life in the big apple! π`,
                    `Taxi rides never looked so chic! ππ`, 
                    `Catching taxis in style, just another day in the life of a bougie pup! ππ`,
                    `NY looks good on you! Keep slaying, gorgeous! ππ `,
                    `Ou there blessing these streets! π`, 
                ], 
            }, 
        ],               
    },

    // 12
    {
       user: { 
            firstName: 'Scruffy', 
            lastName: 'Sprouts', 
            username: 'chewbarka',
            gotchaData: '2014-3-19',
            species: 'Dog',
            breed: 'Brussels Griffon', 
            location: 'Boston, MA', 
            bio: `Short king with a big personality. πΊ`, 
        },
        posts: [
            { 
                description: `First day of law school! Already over it. π€`, 
                comments: [
                    `Sending you all the good vibes on your first day of law school! π€π`, 
                    `Hang in there! The first day is always ruff πΆ, but things will get better!`,
                    `Just remember why you started! πͺπΌπ`, 
                    `I'd be over it too! ππ`,
                    `It'll be over before you know it! Just keep grinding! π¨ββοΈπΌ`, 
                    `Dude it's day one! π`, 
                    `Only three more years! π`, 
                ], 
            }, 
            { 
                description: `Me doing me. π`, 
                comments: [
                    `Eyyyy!`, 
                    `Louder for the paws in the back! π’π£`, 
                    `Preach Scruffy!`,
                    `That's right! π€π€`,
                    `Who hurt you Scruffs?! π`, 
                ], 
            }, 
            { 
                description: `Tiny boss vibes. βοΈπ»π`, 
                comments: [
                    `Schmooood! π€©`, 
                    `Small, but you are mighty! π`, 
                    `Smoll kings stand up! π€`,
                    `Tell 'em Scruffs! π£`, 
                ], 
            }, 
            { 
                description: `Esq. vibes π¨ββοΈ`, 
                comments: [
                    `Congrats! π`, 
                    `Congratulations Scruffy! π`, 
                    `Grats man! π₯³`,
                    `Congrats! Let's celebrate! πΎ`,
                    `So proud of you Scruffy! π₯²`,
                    `Always representing us well! π`, 
                    `π­β€οΈ`, 
                ], 
            }, 
        ], 
    },

    // 13
    { 
       user: { 
            firstName: 'Sam', 
            lastName: 'Patches', 
            username: 'sam.i.am',
            gotchaData: '2018-5-12',
            species: 'Cat',
            breed: 'Bengal', 
            location: 'Seattle, WA', 
            bio: `Blind, adventurous, and ready to take over the world. π±`, 
        },
        posts: [
            { 
                description: `π`, 
                comments: [
                    `Hey Patches! How are you doing today? πΈ`, 
                    `What up man! Hope you're well. πΎ`, 
                    `Looking as handsome as ever! How's life treating you these days? π»`,
                    `Hey Sam! How's it going buddy? π€`,
                    `Looking like a total boss Sam! What's new with you? π`, 
                ], 
            }, 
            { 
                description: `Aesthetic or wdyt?  π`, 
                comments: [
                    `You always look cool no matter what! πΈ`, 
                    `Aesthetic af! π`,
                    `Coolest cat on the block! π€`,
                    `Def aesthetic π₯`,
                ], 
            }, 
            { 
                description: `Just hangin' out. π¨`, 
                comments: [
                    `Bruh you're gonna fall! π°`,
                    `How's the view from up there? πΈ`, 
                    `Boy u crazy! π`, 
                    `You're the king of the world, Patches! πΈ`,
                    `Livin' life on the edge! π€`, 
                ], 
            }, 
            { 
                description: `Love me a good box! π¦`, 
                comments: [
                    `π»`, 
                    `But why? π`,
                    `So confused. π€£`, 
                    `Can someone explain? I honestly don't get this. π`,
                ], 
            }, 
            { 
                description: `Friday night. Feelin' alright. πβ¨ Poet, who didn't know it. π`, 
                comments: [
                    `π£π£π£`, 
                    `You tryna get into any trouble tonight? π`, 
                    `Coolest cat on the block! π`,
                    `We got Edgar Alan Paws over here. π€£`,
                    `Bro maybe keep your day job for a bit. π`, 
                ], 
            }, 
        ], 
    },

    // 14 
    { 
       user: { 
            firstName: 'Kiwi', 
            lastName: 'Plucky', 
            username: 'lilkiwi',
            gotchaData: '2010-10-18',
            species: 'Bird',
            breed: 'Budgerigar (Parakeet)', 
            location: 'Columbus, OH', 
            bio: `Life of a wise budgie. π¦π₯`, 
        },
        posts: [
            { 
                description: `Happy Wednesday β€`, 
                comments: [
                    `Happy Wednesday budgie! π¦`, 
                    `Have a great day Kiwi! π`, 
                    `Happy midweek budge! βΊοΈ`, 
                ], 
            }, 
            { 
                description: `Peek-a-boo! π»`, 
                comments: [
                    `I see you! π€ͺ`, 
                    `Cutie. π₯°π₯°`, 
                    `ππ`, 
                    `Peek-a-boo! I see you! π€`,
                ], 
            }, 
            { 
                description: `Not sleeping - promise! π₯΄ Just resting my eyes! π€`, 
                comments: [
                    `Lies! π`,
                    `Rest up and get some energy Kiwi. πͺ`, 
                    `Won't blame ya for taking a little nap. π΄`, 
                    `You sure you're not snoozing. π€«`,
                    `We all need out beauty sleep. π`,
                ], 
            }, 
            { 
                description: `Happy birthday to me! Officially 10! π΄π»`, 
                comments: [
                    `Looking great!`,  
                    `10 years young. πͺπΌ`, 
                    `You don't look a day over 2! π`,
                    `HBD Budgie! Keep living your best life. π`, 
                    `Here's to many more! π₯`,
                    `Happy birthday, little guy! Looking better than ever! π`,
                    `Aging like fine wine! π·`,
                    `Happy birthday Kiwi! π₯`, 
                    `HBD bud! πΎ`,
                ], 
            }, 
        ], 
    },

    // 15
    { 
       user: { 
            firstName: 'Leonardo', 
            lastName: 'Yertle', 
            username: 'ninjayertle',
            gotchaData: '1994-4-9',
            species: 'Tortoise',
            breed: 'Sulcata', 
            location: 'Tempe, AZ', 
            bio: `Roaming, eating, and country-pace living. π’`, 
        },
        posts: [
            { 
                description: `Slow mornings are my favorite. π’`, 
                comments: [
                    `Slow mornings every day! Nothing beats taking it easy and enjoying life. βοΈ`, 
                    `Keep on savoring each moment. π`, 
                    `Slow and steady wins the race, right Leo? ππͺπΌ`,
                    `The cutest couch potato! Keep on taking it easy and enjoying life. π₯°`, 
                ], 
            }, 
            { 
                description: `Couch potato forevah and evah. π₯`, 
                comments: [
                    `Couch potato? All I see if someone enjoying life! π`, 
                    `Professional couch potato! π`, 
                    `Definition of "taking it easy!" Keep on living your best life. π’`,
                    `You're the cutest little couch potato, Leonardo! Keep on being an expert in relaxation. π`,
                    `The ultimate chill tortoise!`, 
                ], 
            }, 
            { 
                description: `Basking? Tanning? Tomato tomahto. βοΈ`, 
                comments: [
                    `Keep on soaking up those rays, Leo! π`, 
                    `Bassking in the glow. βοΈ`, 
                    `Tanning, basking, self-care - whatever you want to call it. π§ββοΈ`,
                    `Sunny days ahead. π`,
                ], 
            }, 
            { 
                description: `Throwy to when I was just barely bigger than a strawberry. πΆπ`, 
                comments: [
                    `Aww, little baby Leo! π­ You were the cutest. π₯°`, 
                    `So precious! π­`,
                    `Just as adorable as you were when you were a little tortoise. π’`, 
                    `D'aww! π₯°`, 
                    `Dude what went wrong along the way? Kidding Leo! π`, 
                ], 
            }, 
        ],  
    },

    // 16 
    {  
       user: { 
            firstName: 'Arnie', 
            lastName: 'Hammie', 
            username: 'heyarnie',
            gotchaData: '2016-1-18',
            species: 'Hamster',
            breed: 'Syrian', 
            location: 'El Paso, TX', 
            bio: `Here for a good time. π€`, 
        },
        posts: [
            { 
                description: `Hi I'm Arnie. πΉ`, 
                comments: [
                    `Hi Arnie! Welcome! π`, 
                    `Hey there Arnie! πΎ`, 
                    `Welcome buddy! π€"`,
                    `πππ`,
                    `Welcome! You're gonna break the internet! π`, 
                ], 
            }, 
            { 
                description: `Bro. These "strawberry" things? DELICIOUS! π`, 
                comments: [
                    `Haha, I love your facial expression! Those strawberries must be really tasty! ππ`, 
                    `Strawberries are the best! π€€π`, 
                    `We have the same taste buds! Strawberries are the bomb! ππ`,
                    `Arnie, you're the cutest little foodie I know! ππΉ`, 
                ], 
            }, 
            { 
                description: `HBD to me! π`, 
                comments: [
                    `The cake is to tiny! π HBD Arnie!`,
                    `Happy Birthday, Arnie! ππ`, 
                    `HBD bro! π€`,
                    `You're growing up so fast! Happy Birthday buddy! π₯³π`, 
                    `Happy Birthday to the one and only Arnie!! ππΉ`,
                    `Happy b-day Arnie! ππ`, 
                ], 
            }, 
            { 
                description: `Ayo someone help me outta here! π°`, 
                comments: [
                    `Oh no, Arnie! Don't worry, we'll get you out of there in no time! π`, 
                    `Looks like you got yourself into a bit of a tight spot there! On my way! ππΉ`, 
                    `OMW to your rescue! π¦ΈββοΈ`,
                    `How'd you get stuck?! π`, 
                    `Arnie the Houdini! π`,
                ], 
            },  
        ],  
    },

    // 17
    { 
       user: { 
            firstName: 'Lily', 
            lastName: 'Floofs', 
            username: 'lilythebun',
            gotchaData: '2021-5-30',
            species: 'Rabbit',
            breed: 'Lionhead', 
            location: 'Denver, CO', 
            bio: `Hoppying and binkying with my lion-like mane. π¦`, 
        },
        posts: [
            { 
                description: `When I was just a little baby. π°`, 
                comments: [
                    `Omg you were the cutest little baby bunny ever! ππ°`, 
                    `You're still just as cute, Lily! πβ€οΈ`, 
                    `Awww, I love seeing baby pictures of you! π₯°π°`,
                    `So precious! How old were you in this picture? π`,
                    `πππππ`, 
                ], 
            }, 
            { 
                description: `You can't sit with us. πββοΈ`, 
                comments: [
                    `Haha, I love the attitude. ππββοΈ`, 
                    `Queen Lily, I would love to sit with you! π`, 
                    `Sassy girl! π`,
                    `Mean girls! π°`,
                    `Tell 'em Lily! π`, 
                ], 
            }, 
            { 
                description: `Pretending to work but secretly ordering treats online. πΈπΌ`, 
                comments: [
                    `I see you! π΅οΈββοΈπ`, 
                    `Haha, I do the same thing when I'm supposed to be working! ππͺ`, 
                    `Lily, I think you deserve all the treats you want! π°π§`,
                    `If only my work was as fun as yours! π€£πΌ`,
                    `That's genius! π`, 
                ], 
            }, 
            { 
                description: `Merry Chrysler from my family to yours! β€οΈ`, 
                comments: [
                    `Merry Christmas to you too, Lily! ππ°`, 
                    `You look so cute in your festive outfit, Lily! π₯°β€οΈ`, 
                    `Merry Chrysler to you and your family! ππ`,
                    `Wishing you and your family a wonderful holiday season, Lily! ππ`,
                    `I hope you got lots of treats from Santa, Lily! ππͺ`,
                    `Merry Christmas Lils! π€`, 
                    `ππ`
                ], 
            }, 
        ], 
    }, 

    // 18
    {
       user: { 
            firstName: 'Friz', 
            lastName: 'Boriz', 
            username: 'curlicue',
            gotchaData: '2010-1-25',
            species: 'Chihuahua',
            breed: 'Long-haired', 
            location: 'Indianapolis, IN', 
            bio: `Unruly hair rules. π€ͺ`, 
        },
        posts: [
            { 
                description: `πππ₯?`, 
                comments: [
                    `I can't decide what's better: the crunchy leaves or the pumpkin treats? πππ`, 
                    `Fall fashion is my favorite! Loving that sweater on you, Friz! ππ§‘`, 
                    `The perfect season for snuggles with my fur baby! ππΎ`,
                    `Autumn is in the hair π€£, I mean, air! Looking fabulous, Friz! ππΆ`,
                    `I'm convinced that Friz is secretly a squirrel. He's just as cute and loves the fall season! πΏοΈπ§‘`, 
                ], 
            }, 
            { 
                description: `Call me Salvador Dali from now on! π¨βπ¨`, 
                comments: [
                    `You're a true work of art, Friz! π¨πΌοΈ`, 
                    `Looks like you're ready to paint the town... or canvas, Friz! π€£π¨`, 
                    `I think you're more of a Pablo Picatso, with those paws! πΈπΎ`,
                    `A true visionary! We need to get you your own gallery opening, Friz! π€©πΆ`,
                    `If I didn't know any better, I'd say that painting was done by you, Friz! π€π¨`, 
                ], 
            }, 
            { 
                description: `I guess. A little bit. Youβre being kinda rude though. π`, 
                comments: [
                    `It's okay Friz, Chewie is a legend! Plus, you're way cuter! ππΆ`, 
                    `Can't decide if you look more like Chewie or an Ewok, but either way you're adorable! π€©π»`, 
                    `I can't help but laugh every time I see this picture! You're one hilarious pup, Friz! ππΆ`,
                    `I think you're more of a Disney prince than a Star Wars character, but I can see the resemblance! πΆπ`,
                    `I think the resemblance is uncanny, Friz! But don't worry, you're still the most handsome chihuahua in the galaxy! ππΎ`, 
                ], 
            }, 
            { 
                description: `I think someone spiked my dognog. I ain't mad about it! π¦΄πΈ`, 
                comments: [
                    `I think it's safe to say that someone's having a good time! ππΉπΆ`, 
                    `Party animal alert! You always know how to have a good time, Friz! ππΎ`, 
                    `Looks like someone's ready to hit the dance floor! πΊπΆπΆ`,
                    `I think Friz's motto is 'live every day like it's a pawty'! π₯³πΎ`,
                    `I'll have what Friz is having! πΉπ€£πΆ`, 
                ], 
            }, 
            { 
                description: `91 dog years old today! But I don't look a day over 21 right...? π°`, 
                comments: [
                    `Friz out here aging like a fine wine! πͺπΌ`, 
                    `You don't look a day older than 5! πΆ`, 
                    `You look amazing!`,
                    `Aging like fine wine! π·`,
                    `Dang Friz! Collagen game strong! π`,
                    `Tell us your routine! π§`,  
                ], 
            }, 
        ],
    },

    // 19
    { 
       user: { 
            firstName: 'Merlin', 
            lastName: 'McGrumps', 
            username: 'grumplord',
            gotchaData: '2017-9-12',
            species: 'Cat',
            breed: 'Ragdoll', 
            location: 'Oklahoma City, OK', 
            bio: `Eternally disappointed. πΎ`, 
        },
        posts: [
            { 
                description: `Hi. I'm Merlin and I'm eternally disappointed. πΎ`, 
                comments: [
                    `Aww, Merlin, cheer up! Don't be a grump!`, 
                    `You haven't changed one bit. π`, 
                    `I bet you're secretly happy on the inside. You just don't want to show it! π`,
                    `I think I've finally found someone who understands me on a spiritual level. π`,
                    `Cheer up, Merlin! You're still cuter than most humans, even when you're grumpy! πΌ`, 
                    `Merlin, if you're not careful, you might turn into the next Grumpy Cat and become a viral sensation! π`, 
                    `Merlin, I think you need a hug. Or a snack. Or both. πΈ`,
                    `Some cats just don't change. π`,
                ], 
            }, 
            { 
                description: `My birthday sucked. π€`, 
                comments: [
                    `Sorry to hear that, Merlin. Next year, let's throw you a surprise party and watch you try to act surprised. πΉ`, 
                    `Merlin, I'm pretty sure that in cat years, you're still a teenager. You at least act like one. π Don't worry about getting older! π`, 
                    `Birthdays can be disappointing, Merlin, but you know what never is? Treats. And naps. πΈ`,
                    `Maybe next year, you can demand a fancy feast instead of a regular one! πΌ`,
                    `Merlin, don't worry about it. You're like a fine wine - you only get better with age! π`, 
                    `Oh don't be a grump - grandpa! π`,
                ], 
            }, 
            { 
                description: `Happy Monday to everyone except for Monday. π€¬`, 
                comments: [
                    `Merlin, I feel like you and Garfield would get along swimmingly. π`, 
                    `Mondays are the worst! Unless it's a national holiday or a snow day, I don't want to hear about it! π`, 
                    `Right there with you! π€`,
                    `I'm pretty sure that the only good thing about Mondays is the fact that it's one day closer to Friday. π`,
                    `If it makes you feel any better, I'm pretty sure Mondays also hate Mondays. πΉ`, 
                    `I think this is the first time I agree with you! π`, 
                    `πΉπΉπΉ`, 
                ], 
            }, 
            { 
                description: `The fluff is this, human?! I said I wanted pizza! π‘`, 
                comments: [
                    `What a disapointment! π`, 
                    `If your human doesn't give you pizza soon, wreak havoc! πΉ`, 
                    `I say you throw it at them. π`,
                    `But sushi is better! π`, 
                    `Don't worry, Merlin. I'll get you a slice next time I see you! π`,
                    `Merlin, you're a cat. You don't need anyone's permission to demand pizza. Just take it!! πΉ`, 
                    `Call the cops! π`, 
                    `So disrespectful. π€ To the guillotine! πΉ`, 
                ], 
            }, 
        ],     
    },

    // 20
    { 
       user: { 
            firstName: 'Harry', 
            lastName: 'Whiskers', 
            username: 'harrycat',
            gotchaData: '2019-8-31',
            species: 'Cat',
            breed: 'Persian', 
            location: 'Louisville, KY', 
            bio: `I'm just a cat with luscious locks. π½`, 
        },
        posts: [
            { 
                description: `Mondays. Amarite? π€’`, 
                comments: [
                    `Mondays are the worst, but at least your hair is looking fabulous! π»`, 
                    `I feel you, Harry. Can we just fast forward to Friday already? π©`,
                    `You know what would make Mondays better? Catnip. Just saying. πΉπ`,
                    `Don't worry, Harry. The weekend will be here before you know it! πΈ`,
                    `Just pretend it's Sunday part 2! That's what I do. π€«`,
                    `I just sleep through it. π`,
                ], 
            }, 
            { 
                description: `I don't get it either. I just love them. π¦`, 
                comments: [
                    `You know you're a cat when a cardboard box is your favorite toy! πΉ`, 
                    `Who needs expensive cat toys when you have a good ol' corrugated box, am I right? πΈ`, 
                    `Cardboard boxes are the ultimate hide-and-seek spot! π€«`,
                    `I honestly don't understand this! π`, 
                    `Maybe we should start a cardboard box collection... π`,
                    `Harry, you're the cutest little cardboard box lover ever! π»`, 
                    `Why are you like this?! πΉ`,
                ], 
            }, 
            { 
                description: `Can you tell I'm so excited to bathe? π€¬`, 
                comments: [
                    `Look at the bright side, Harry. At least your hair will be even more fabulous after the bath! πΈ`, 
                    `Just keep telling yourself, "I am a majestic creature and I deserve this bath!" πΉ`, 
                    `Baths are overrated anyway. Who needs to be clean anyway? π€’π`,
                    `Maybe we can bribe the hooman to cancel the bath with some treats. Worth a shot, right? π`,
                    `Just remember, Harry. It's all worth it for the post-bath cuddles! π» Okay, maybe it's not. π€£`, 
                    `Run for your life!`, 
                    `I don't get how they can bathe every single day!! π°`,
                    `Protest by rolling in the mud! π`,
                ], 
            }, 
            { 
                description: `Thankful. I guess. π¦`, 
                comments: [
                    `You're not a turkey, Harry. No need to be salty about Thanksgiving! πΉ`, 
                    `I'm thankful for you, Harry. Your grumpy face always puts a smile on my face! πΈ`, 
                    `Think of all the delicious food you're going to get on Thanksgiving! Turkey, gravy, catnip... wait, scratch that last one. π`,
                    `At least we get a day off to spend with our favorite feline friend! πΎ`,
                    `You should dress up like a pilgrim for Thanksgiving. I can already picture it... π»`, 
                    `I'm ready to grub! π½`,
                ], 
            }, 
            { 
                description: `Blaming this one on the dog, again. π `, 
                comments: [
                    `You savage! Poor dog! π`, 
                    `Classic move, Harry. Always blame the dog. πΉ`, 
                    `Spare him! π You're too cute to be blamed for anything, Harry! π»`,
                    `The dog is always the easiest target. Can't blame you for being a smart cat! πΈ`,
                    `I can't believe these humans actually falls for this... π`,
                    `Poor dog. π©`, 
                    `Rude. π`,
                ], 
            }, 
        ], 
    },

    // 21
    { 
       user: { 
            firstName: 'Aura', 
            lastName: 'Purr', 
            username: 'queenragdoll',
            gotchaData: '2021-2-28',
            species: 'Cat',
            breed: 'Ragdoll', 
            location: 'Las Vegas, NV', 
            bio: `Bow to the queen. π`, 
        },
        posts: [
            { 
                description: `That's Queen Purr to you. πΈ`, 
                comments: [
                    `Aura, you remind me of a certain Regina George. π`, 
                    `Yas queen!! Rule your kingdom. π`, 
                    `All hail Queen Purr, the most regal cat on the gram. π`,
                    `Don't mess with Aura, she's got that queen energy. πͺ`,
                    `I respect the sass! π`, 
                ], 
            }, 
            { 
                description: `Same same. π`, 
                comments: [
                    `Royalty. Both of you! π`, 
                    `Identical! πΈπΈ`, 
                    `Aura, your sass is unparalleled. πββοΈ`,
                    `Your confidence is inspiring, Aura! Teach us your ways. π»`,
                    `Cut from the same fabric!`, 
                ], 
            }, 
            { 
                description: `Fall vibes. ππ`, 
                comments: [
                    `Loving the aesthetic, Aura! π§‘`, 
                    `Boss. π`, 
                    `Looking like a true fall queen, Aura! π`,
                    `Fall feels! π`, 
                ], 
            }, 
            { 
                description: `PSL szn!`, 
                comments: [
                    `Obsessed! βοΈπ`, 
                    `Pumpkin spice and everything nice! π`, 
                    `Fall looks great on you! π§‘`,
                    `Enjoy! π»`,
                    `Drink up! βοΈ`,
                ], 
            }, 
            { 
                description: `Out here watching over my kingdom. π`, 
                comments: [
                    `Protect your kingdom! π`, 
                    `Your hooman is lucky to have such a vigilant protector like you, Aura! π`,
                    `Like the boss you are! π`,
                    `Your kingdom is in good paws with you around! πΎ`, 
                    `Majestic. β¨β¨β¨`,
                ], 
            }, 
        ], 
    }, 

    // 22 
    { 
       user: { 
            firstName: 'Daisy', 
            lastName: 'Claws', 
            username: 'hellodaisy',
            gotchaData: '2020-11-28',
            species: 'Cat',
            breed: 'Scottish Fold', 
            location: 'Washington, D.C.', 
            bio: `Catching hearts with my folded ears. π»`, 
        },
        posts: [
            { 
                description: `Eyes are the window to the soul or whateva. π`, 
                comments: [
                    `Those eyes could pierce through any soul, Daisy! π³`, 
                    `Your eyes are so big, they look drawn! π`, 
                    `Daisy's eyes are like two shiny marbles staring into my soul. π`, 
                    `Wow, they almost look fake! π`, 
                    `Daisy, your eyes are so beautiful! π»`, 
                    `Stop looking at me with those things! π`, 
                ], 
            }, 
            { 
                description: `My presence is your present. ππ`, 
                comments: [
                    `Girl, relax. πΉ`,
                    `I agree Daisy. π₯°`, 
                    `Who needs material things when we have Daisy's love? β€οΈ`, 
                    `Daisy, you're the gift that keeps on giving! π`, 
                    `Every time I see Daisy, it feels like Christmas morning! π`, 
                    `I don't need any presents as long as Daisy is here to brighten up my day! π`, 
                    `Your head is getting a little big Daisy. πΉ`,
                ], 
            }, 
            { 
                description: `Halp. π€ `, 
                comments: [
                    `You're about to drift asleep! π`, 
                    `Sleepy girl? π΄`, 
                    `I think Daisy's spirit animal is a sloth! π`, 
                ], 
            }, 
            { 
                description: `Hooman, why? I already groom myself! π `, 
                comments: [
                    `Where'd all the floof go?! πΉ`,
                    `You look terrified! It's just a little water. π`, 
                    `About dang time! π`, 
                    `Stinky gang. β€οΈ`, 
                    `Oh no! π©`, 
                ], 
            }, 
            { 
                description: `Bad angle! I swear I'm not this chonky! π₯²`, 
                comments: [
                    `T-rex arms. π¦`,
                    `Daisy, you're not chunky, you're just extra fluffy! π»`, 
                    `If that's what chunky looks like, I want to be chunky too! π`, 
                    `You're perfect! β€οΈ`, 
                    `Don't worry, Daisy, you're still beautiful no matter what angle the camera is at! πΈ`, 
                    `More to love! Amarite? πΉ`, 
                ], 
            },  
        ], 
    },

    // 23
    { 
       user: { 
            firstName: 'Sadie', 
            lastName: 'Blue', 
            username: 'sadiegirl',
            gotchaData: '2011-7-23',
            species: 'Dog',
            breed: 'Blue Nose Pitbull', 
            location: 'San Diego, CA', 
            bio: `Gentle giant on a mission to break stereotypes. πΎ`, 
        },
        posts: [
            { 
                description: `Hey all! πββοΈ I'm Sadie. I'm a blue pit living in San Diego CA. π Don't let my build and stereotypes about my breed fool you, I'm actually a gentle giant and heart and love nothing more than to snuggle and cuddle with my humans. I also enjoy belly rubs, waggin' my tail, going to the beach π, and making friends at the park π€.`, 
                comments: [
                    `You're such a sweetheart, Sadie Blue! π₯°`, 
                    `Big hugs to my favorite gentle giant! π€`, 
                    `Love you, Sadie! You're a perfect example of why we shouldn't judge dogs by their breed. πΆβ€οΈ`,
                    `Aww, look at that face. You're the perfect example of how breed stereotypes are just wrong.`,
                    `Sadie, you're such a gentle soul. Don't let anyone tell you otherwise.`, 
                ], 
            }, 
            { 
                description: `84 pup years around the sun! π΅`, 
                comments: [
                    `You're getting more distinguished with age, Sadie. Like a fine wine. π·`, 
                    `You're just a wise old lady now. Happy birthday Sadie! π`, 
                    `Happy birthday, Sadie! ππΎ`,
                    `Don't worry, you're still young at heart! β€οΈ`,
                    `84 dog years young, Sadie! You're still a puppy at heart.`, 
                    `I can't believe how fast time flies. HBD!`, 
                    `Have a great birthday! β€οΈ`, 
                    `I hope you have an amazing day! π`, 
                    `Happy birthday Sadie!!`, 
                    `You look great for 84! π΅ Happy Birthday! β€οΈ`,
                ], 
            }, 
            { 
                description: `In my happy place. ππΈπΉ`, 
                comments: [
                    `QT π₯§`, 
                    `Looking beautiful as always, Sadie! π`, 
                    `That looks so relaxing! π§ββοΈ`,
                    `Bathtime looks like heaven with you, Sadie! πΎπ§Ό`,
                    `Fun!`, 
                ], 
            }, 
            { 
                description: `Happy Valentine's Day everyone! β€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈ`, 
                comments: [
                    `Love you to the moon and back, Sadie! You're the best furry friend anyone could ask for.`, 
                    `Happy Valentine's Day to the sweetest pup I know! πβ€οΈ`, 
                    `Sending you all my love today, Sadie! β€οΈπΎ`,
                    `You make every day feel like Valentine's Day, Sadie! πβ€οΈ`,
                    `Happy Valentine's Day! π₯°`, 
                ], 
            }, 
            { 
                description: `Mom. This is so embarrassing. π`, 
                comments: [
                    `OMG. πβ€οΈ`, 
                    `Don't worry, Sadie, you still look cute! ππ`, 
                    `You rock that elephant outfit, Sadie! πΎπ`,
                    `I'm sorry, but this is hilarious! ππ`,
                    `You actually pulled this off! π`, 
                    `The ears look great on you! π`,
                    `QT π₯§`,
                ], 
            }, 
        ], 
    },

    // 24 
    { 
       user: { 
            firstName: 'Acorn', 
            lastName: 'McFury', 
            username: 'squirrelyacorn',
            gotchaData: '2013-3-25',
            species: 'Squirrel',
            breed: 'Eastern Gray', 
            location: 'Chicago, IL', 
            bio: `Squirrely girl in a squirrely world. πΏ`, 
        },
        posts: [
            { 
                description: `When I was just a little baby. π£`, 
                comments: [
                    `I can't! π₯°`, 
                    `Aw, look at those tiny hands! π`, 
                    `You look the same! π₯°`,
                    `So precious! β¨`,
                    `OOMMGG π­`,
                    `You were to tiny! π­`,
                ], 
            }, 
            { 
                description: `Hai! πββοΈ`, 
                comments: [
                    `Hi cutie! π`, 
                    `Hey there! π`, 
                    `What's up Acorn? π€`,
                    `Looking fierce as always! π₯`,
                    `π`, 
                    `Elo!`, 
                    `What up Acorn! π`,
                ], 
            }, 
            { 
                description: `Soaking up the Sunday sun. ππ`, 
                comments: [
                    `Where's the kini?! π`,
                    `Living your best life I see! π`, 
                    `Suns out buns out! π­`,
                    `Soaking up the rays! ποΈ`, 
                    `βοΈβοΈβοΈ`,
                    `That looks so relaxing!`,
                    `It's officially summer! πΆ`, 
                ], 
            }, 
            { 
                description: `Remember that you are fabulous. π`, 
                comments: [
                    `Thanks for the reminder Acorn! π₯°`,
                    `As if we could forget! π`, 
                    `You're the definition of fabulous, Acorn! π`, 
                    `πππ`,
                    `I needed this today! β¨`,
                    `Needed this. π₯°`,
                    `π­`,
                ], 
            }, 
            { 
                description: `This weather is not it y'all. βοΈπ€§ `, 
                comments: [
                    `Hang in there, Acorn! Spring will come soon enough! πΈ`, 
                    `You need a cup of hot cocoa stat! β`, 
                    `I feel you, the winter blues are real! π`,
                    `Looks to me like you're secretly enjoying this. π€π`,
                    `Sending some virtual sunshine your way! βοΈπ€`, 
                    `But you look so cozy! βΊοΈ`, 
                ], 
            }, 
        ], 
    },

    // 25
    { 
       user: { 
            firstName: 'Maple', 
            lastName: 'Nibbles', 
            username: 'maplethebandit',
            gotchaData: '2017-5-29',
            species: 'Raccoon',
            breed: 'Bahamian', 
            location: 'Philadelphia, PA', 
            bio: `Mischief and adventure. π¦`, 
        },
        posts: [
            { 
                description: `No paparazzi please! πΈ`, 
                comments: [
                    `So staged! Looks like a selfie! π`,
                    `Always camera-ready! ππΈ`, 
                    `Someone get her a show! π£`, 
                    `Ain't no one following you around! π`,
                    `Next top model for sure! πΎπ`,
                    `Remember us when you're famous! π©`,
                ], 
            }, 
            { 
                description: `Avocado on erthang! π₯`, 
                comments: [
                    `Those are the nicest avocados I've ever seen! π€€`,
                    `So fancy!`, 
                    `I agree! π€€π₯`, 
                    `On graham crackers tho? π€?π`,
                    `I'm coming over for avocado toast, Maple! ππ₯`,
                    `Avocados are life!`, 
                    `I completely overlooked the graham crackers lol`, 
                ], 
            }, 
            { 
                description: `Almost got this walking thing down. πΆ`, 
                comments: [
                    `QT π₯§`,
                    `Your back looks broken haha.`,
                    `Idk about "almost". πΉ`, 
                    `You'll be running on two paws in no time π`, 
                    `πππ`,
                    `Egh. Idk. π`,
                    `You're practically a hooman. πΆββοΈ`, 
                ], 
            }, 
            { 
                description: `Halp! π`, 
                comments: [
                    `OMW, just hange on! Ha!`, 
                    `Hang on tight! π`,
                    `You're crazy!`, 
                    `Just jump! You're only a few inches off the floor... π`, 
                    `Cut your nails! π`, 
                    `Drama queen. π`,
                ], 
            }, 
            { 
                description: `What's the serving size again? π€ͺ`, 
                comments: [
                    `I'd have as much as you want, and some! π€£`, 
                    `Ayo save me a slice! π`, 
                    `One large pizza per raccoon obvi. πββοΈ And don't let anyone tell you otherwise. π`,
                    `Pizza is life! Enjoy every bite. π€€`,
                    `Can I get an invite tho? π`, 
                    `The whole dang thang! πΉ`, 
                    `As much as you can handle. π€ͺ`,
                ], 
            }, 
        ], 
    },
    
    // 26 
    { 
       user: { 
            firstName: 'Duke', 
            lastName: 'Sterling', 
            username: 'duketheghost',
            gotchaData: '2015-10-13',
            species: 'Dog',
            breed: 'Weimaraner', 
            location: 'Salt Lake City, UT', 
            bio: `Silver coat and soulful eyes.`, 
        },
        posts: [
            { 
                description: `RUN! π³`, 
                comments: [
                    `Always ready for a run! Wait for me! πββοΈπΎ`, 
                    `I hope you're not running away from bath time again Duke! It's time! ππ`, 
                    `Not a good look Duke! π`,
                    `You look terrified! π`,
                    `Shooketh. π³π€£`,
                    `When the hoomans catch you going through the snack drawer. π`,
                ], 
            }, 
            { 
                description: `π€ͺ`, 
                comments: [
                    `ππΎ`, 
                    `Freeze! π€ͺ`,
                    `Silly Duke! πΆ`, 
                    `Candid moment! πΈ`,
                    `Boy you goofy! π€ͺ`,
                    `You play too much. π`,
                ], 
            }, 
            { 
                description: `Umm.. who turned off the lights? π°`, 
                comments: [
                    `π€‘π€‘π€‘`,
                    `Silly Duke!`, 
                    `Let's go find you some light. π―οΈπΆ`, 
                    `Har har har.. π`, 
                    `Looking good!`, 
                    `Model. πΊ`,
                ], 
            }, 
            { 
                description: `Made a new friend today. π`, 
                comments: [
                    `I dare you to sneeze. π`, 
                    `Idk about that one.. π°`,
                    `D'awe. π₯°π`, 
                    `I think the ladybug likes you! π`, 
                    `What happens if it goes up your nose? π`,
                    `Getting goosebumps just thinking about it walking on my nose. π·`,
                    `Yeah I'm gonna pass on that! π±`,
                ], 
            }, 
            { 
                description: `Fireworks are coming huh? π§¨π`, 
                comments: [
                    `Take a sedative! They're game-changing!`, 
                    `Ask your vet for meds!`,
                    `Don't be a weenie! π`, 
                    `Ugh. I hate them too. βΉοΈ`,
                    `Going to light one up in front of your house! π`,
                    `What happened?! I thought you were tough! π`,
                ], 
            }, 
        ], 
    },

    // 27
    { 
       user: { 
            firstName: 'Nutmeg', 
            lastName: 'Ivy', 
            username: 'lilachilles',
            gotchaData: '2014-12-4',
            species: 'Dog',
            breed: 'Dachshund', 
            location: 'Buffalo, New York', 
            bio: `Exploring the world with my stubby legs. πΎ`, 
        },
        posts: [
            { 
                description: `Ears to the weekend! π₯`, 
                comments: [
                    `Awe Nutmeg! π`,
                    `Cheers to the weekend, Nutmeg! π»πΎ`, 
                    `Dang boi! Ears for days!`, 
                    `Cheers to the ears! π₯`,
                    `Paw-togenic! πΈ`,
                    `Cheeears! π€ͺ`,
                ], 
            }, 
            { 
                description: `Boop! π½`, 
                comments: [
                    `Got your nose! π`, 
                    `Boop boop! π½π₯°`,
                    `π½π½π½`, 
                    `Dog or pig? πΆπ·`,
                ], 
            }, 
            { 
                description: `Out here making snow angels! πΌπ»`, 
                comments: [
                    `Those are some tiny snow angels. π`,
                    `How are you not cold?!`, 
                    `So cute! π`, 
                ], 
            }, 
            { 
                description: `π»`, 
                comments: [
                    `I can barely see you! π`, 
                    `Tongue out Tuesday? Tongue out every day! π€ͺ`, 
                    `Where's the rest of you?!`,
                    `Looks like you're overheating. π`,
                ], 
            }, 
            { 
                description: `No π§’`, 
                comments: [
                    `Looking good Nutmeg! π`, 
                    `Yellow looks great on you! π`, 
                    `New profile pic? π€`,
                    `Chilly dog. βοΈπ­`, 
                ], 
            }, 
        ], 
    },

    // 28
    { 
       user: { 
            firstName: 'Speckles', 
            lastName: 'Delmar', 
            username: 'bigfoot',
            gotchaData: '2013-9-30',
            species: 'Dog',
            breed: 'Dachshund', 
            location: 'Portland, Maine', 
            bio: `Big personality in a small package. πΆ`, 
        },
        posts: [
            { 
                description: `What I look like before coffee. βοΈ`, 
                comments: [
                    `Same! It's a vice. π°`, 
                    `Man I'm also addicted!`, 
                    `Hahaha! You and me both, Speckles!`,
                    `I'm a grumpy mess before my morning coffee too! π`,
                    `You always look like this tho! π`,
                    `For real! ππ€£`, 
                ], 
            }, 
            { 
                description: `Roadtrip! π`, 
                comments: [
                    `I'd be terrified if I was your pasanger. π`, 
                    `Eyes on the road! And buckle up!`, 
                    `Major pass if you're the driver. π€£`,
                    `But the steering wheel is as big as your entire body. π`, 
                    `Idk about this one Specks. π³`,
                ], 
            }, 
            { 
                description: `Iβve fallen for you π`, 
                comments: [
                    `So romantic! Who's the lucky lady? π`, 
                    `Fall is my favorite season too! Can't wait for pumpkin spice lattes! βοΈ`, 
                    `So corny! π`,
                    `D'awe, Speckles! π₯°`,
                    `Don't steal too many hearts this season! βΊοΈ`, 
                    `So embarrassing Speckles. π`,
                ], 
            }, 
            { 
                description: `Gobble, Gobble! Happy Thanksgiving! π¦`, 
                comments: [
                    `Happy Thanksgiving, Speckles! π`, 
                    `Eat all the turkey, stuffing, and treats you can handle! π€`, 
                    `Enjoy your day Specks! And most importantly, enjoy the food! π½`, 
                    `Feast! π`,
                    `Gobble 'til you wobble! Happy Thanksgiving from our family to yours! π`, 
                ], 
            }, 
            { 
                description: `Chili dogs. βοΈ`, 
                comments: [
                    `Don't forget your warmest coat! π₯Ά`, 
                    `Where's the snowman tho?! βοΈ`, 
                    `You blend right in! π`,
                    `You look so happy! βΊοΈ`,
                    `D'awe! π₯°`, 
                    `In another life you'd be a husky! βοΈ`,
                ], 
            }, 
        ], 
    },

    // 29
    { 
       user: { 
            firstName: 'Sage', 
            lastName: 'Emerson', 
            username: 'wanderlust',
            gotchaData: '2019-4-3',
            species: 'Cat',
            breed: 'Bengal', 
            location: 'Tacoma, WA', 
            bio: `Exploring every corner of the world. β¨`, 
        },
        posts: [
            { 
                description: `Selfie game strong. π€³ `, 
                comments: [
                    `Candid or staged moment? π€¨`, 
                    `Selfie game on point! π€³`, 
                    `πππ`,
                    `Photogenic af! π`,
                    `π₯`,
                    `Slay queen. πΈ`, 
                    `Dang Sage! Way to make an appearance! π`, 
                ], 
            }, 
            { 
                description: `πΈππ`, 
                comments: [
                    `π₯ππ₯ππ₯π`,
                    `You're purrrfect! π­π₯°`,
                    `Did your ears get a little bigger? π€ͺ`, 
                    `Wow Sage! π`, 
                    `Living your best life!`,
                    `Ears for days! π`,
                    `Autumn vibes are the best vibes. π`,
                    `I'm living vicariously through you! π₯°`, 
                ], 
            }, 
            { 
                description: `Close enough. π`, 
                comments: [
                    `The hoomans set you up! π`,
                    `Tomato tomahto. πΉ`, 
                    `Idk about this hahaha`, 
                    `The leaning tower of Sage. π`,
                    `Looks like you're about to take off! βοΈ`,
                    `Send this to influencers in the wild! π`, 
                ], 
            }, 
            { 
                description: `I'm a fierce dande-lion! π»πΌ`, 
                comments: [
                    `Slay πΈ`, 
                    `Tongue out Tuesday! π`, 
                    `All you need is a dandelion crown! π`, 
                    `β¨β¨β¨`,
                    `Majestic as always. β¨`,
                    `Pawtogenic! π₯°`, 
                ], 
            }, 
            { 
                description: `Stay present friends. π§ββοΈ`, 
                comments: [
                    `Louder! π`,
                    `Looks like you're sleeping. π`,
                    `So much zen! π`,
                    `Present and calm. π`, 
                    `π£π£π£`,
                    `I usually end up falling asleep. π`,
                ], 
            }, 
        ],
    },

    // 30
    { 
       user: { 
            firstName: 'Oliver', 
            lastName: 'Catticus', 
            username: 'ollie',
            gotchaData: '2020-3-29',
            species: 'Cat',
            breed: 'British Shorthair', 
            location: 'Costa Mesa, CA', 
            bio: `π½πΈπΊπ»πΌ`, 
        },
        posts: [
            { 
                description: `Wise beyond my years. π§`, 
                comments: [
                    `Man, sit yoself down. π€£`, 
                    `According to who?! πΉ`, 
                    `If you're 1 year old, maybe! And even then! π`, 
                    `... π`,
                    `π after reading these comments.`,
                    `Ollie. Come on. π`, 
                ], 
            }, 
            { 
                description: `14-pound, apartment-range, tuna-fed fluffball. Happy Thanksgiving homies! π¦`, 
                comments: [
                    `14lbs?! Chonkie boi! π€£`, 
                    `Happy Thanksgiving Ollie! I hope you get all the turkey and tuna you want.`, 
                    `Thankful for you Oliver! β€οΈ`, 
                    `Happy Thanksgiving to you and your family! π¦`,
                    `Happy TG bruh! π€`,
                    `Happy Thanksgiving, you little turkey. π`, 
                    `That's a big ol' turkey! π€£`,
                ], 
            }, 
            { 
                description: `Nothing like starting the morning with a tuna-spice latte from Pawbucks. βοΈ`, 
                comments: [
                    `That sounds like the purrrfect way to start the day. π`, 
                    `Just realized it's the time of the year again! βοΈ`, 
                    `They should pay you to model the drink. π`,
                    `Ooof that does sound bomb! π€€`,
                    `π₯`, 
                ], 
            }, 
            { 
                description: `Found the cure for Monday scaries! π₯±`, 
                comments: [
                    `πππ`,
                    `This is GENIUS! π`, 
                    `Trying this on Tuesday. Will report back. π€ͺ`,  
                    `Monday blues. π©`, 
                    `Silly cat. πΉ`,
                    `Taking a page out of your book next Monday. π€£`,
                    `I'm gonna do this every day of the week! π€ͺ`,
                ], 
            }, 
            { 
                description: `I do wut I want! π€`, 
                comments: [
                    `You rebel!`, 
                    `On our terms! π€`, 
                    `We all know this is just a front! π`,
                    `Until you're put in timeout. π`,
                    `Tell 'em Ollie! π`, 
                    `Louder for the hoomans in the back! π£`, 
                ], 
            }, 
        ], 
    },
]; 

module.exports = data; 
