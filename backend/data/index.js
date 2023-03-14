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
            bio: `Lil Aussie with a big personality and a pink nose. 👸🐽🎀`,
        }, 
        posts: [ 
            { 
                description: `Hi everyone! I'm Havana, a blue merle mini aussie. 🐶 I’m 4 months old and my parents just adopted me! 🍼🐾 One of my eyes is extra special. 👁  I love sitting out on our balcony on my little patch of grass. I'm supposed to use it to potty train but I'd rather lay on it. 🌱 I also love belly rubs, naps, and cuddles! 👨‍👩‍👧 I’m teething right now and I love chewing on my parent’s shoes. 🙊 Im a little shy and get anxious at times but I’m working on it.`, 
                comments: [
                    `Hi Havana! 👋`, 
                    `Nice to meet you! ☺️`, 
                    `I also have a patch of grass too!`,
                    `Your coat is so beatiful!!`,
                    `Welcome! 👋`, 
                    `I think I've seen you at the park!`,
                    `Welcome!!`,
                    `Hey Havana!`,
                    `hey hey! 👋`,
                    `You finally made an account! 🤩`,
                    `About dang time! 🤗`,
                    `Hey pretty girl! 🥰`,
                ], 
            }, 
            { 
                description: `Rainy days got me like... 😴 `, 
                comments: [
                    `💤💤💤`, 
                    `Big shmood!`, 
                    `😴`,
                    `Just about that time! 🥱`, 
                    `Pink nose spotted! 🐽`,
                    `Snoozin'!`, 
                    `Why do hoomans take these pics?! 😂🥱`, 
                    `D'awe! 🥰`, 
                    `Precious. 😭`, 
                    `QT 🥰`, 
                ], 
            }, 
            { 
                description: `Just another day at the office. 👩‍💻`, 
                comments: [
                    `🤣🤣🤣`, 
                    `Working hard? Hardly working! 🤣`, 
                    `Boop! 🐽`,
                    `I spy a benebone! 🥓🤤`,
                    `Get back to work! 😂`, 
                    `Piggy nose. 🐷`, 
                    `Clocking in overtime. 💃`, 
                    `The modern working dog. 😂`, 
                    `I thought work meant herding sheep for you aussies? 🐑`,
                ], 
            }, 
            { 
                description: `Mom said we were going to Disneyland but we ended up at the vet instead. Now I’m in this cone for 2 weeks. 😭`, 
                comments: [
                    `Same thing happened to me! 😂💀`, 
                    `lmaoooo 💀`, 
                    `#notrust 😂`,
                    `Awe. 💔 Hope you feel better soon Havi! ☹️`,
                    `And that's why we have trust issues. 🥲`, 
                    `Hope it went well!`,
                    `Get better soon! ❤️`,
                    `☹️☹️☹️`,
                    `Wishing you a speedy recovery! ❤️`,
                    `I say you sue her! 🤣`, 
                    `Oh no! 😂`,
                    `This happened to me too! They're liars! ☹️`, 
                    `Awe Havi. Hope you get better soon. 💔☹️`,
                ], 
            }, 
            { 
                description: `My hoomans swore they wouldn’t let me on new couch but they forgot how cute I am. 🐶`, 
                comments: [
                    `All I have to do is give them sad eyes. 😥😂`, 
                    `Dude same! 😂💀 I just look at them like ☹️`,
                    `They give in so quickly! 💀`,
                    `Mine are also softies! 😂`, 
                    `Mine don't know that I get on as soon as they leave the house. 😈`, 
                    `I don't even ask anymore! 🤪`, 
                    `lmaooo same!`,
                    `They love you! 🥰`, 
                    `But it's YOURS tho! Just like everything else in the house. 🤪`, 
                    `Same! 💀😂`, 
                ], 
            }, 
            { 
                description: `I LOVE visiting grandma! 👵 She lets me sample hooman food when my parents aren't looking. 🙊 This time I got to try tamales. 🫔😂`, 
                comments: [
                    `Grandparents are the BEST! 👵👴`, 
                    `I honestly like them more than my hoomans. 😂 I said what I said! 🤐`, 
                    `They're way more fun! 🤫`, 
                    `Your gm is such a cutie! 👵`, 
                    `D'aw! Y'all are too cute. 😍`,
                    `❤️❤️`,
                    `My gm got caught last time giving me taco bell! 🤣`, 
                    `😂😂😂`,
                    `My gp does the same thing!`,
                    `Tamales are lyfe. 🤤`,
                    `My hoomans find out as soon as we get home. 💩`,
                    `Abuelita! 👵`,
                    `Y'all are twins! 🐶👵`,
                ], 
            }, 
            { 
                description: `Guess what everyone?! I have a baby sister! 🐣 Can you tell I'm so excited?! 👯‍♀️`, 
                comments: [
                    `Baby sisted?! She towers you! 😆`, 
                    `The family is growing! 👯‍♀️`, 
                    `Double trouble... 👀`,
                    `So happy for you Havi!`,
                    `D'awe. Y'all cute. 🥰`, 
                    `Twice the fun!`, 
                    `She's almost as tall as you! 😂`,
                    `Bring her to bowling next week! 🤗🎳`, 
                    `Double the cuteness! 👯‍♀️`,
                    `Not sure we can handle two of you! 😂`, 
                    `She looks terrified! 😅`,
                    `Her tiny collar. 😭`, 
                    `You're excited but she's terrified. 😂`, 
                    `Looks like she's cooler than you! 😜`,  
                ], 
            }, 
            { 
                description: `Y'all GOTTA try these cod cubes! They're delicious! 🍣`, 
                comments: [
                    `Omg these cod cubes look so amazing! 😍`, 
                    `Adding these to my hooman's grocery list! 🤤`, 
                    `Drooling just thinking about them. 🤤`,
                    `Thanks for the recommendation! 🙌`,
                    `Now I'm hungry! 😩`,
                    `You sure this isn't an ad.. 🧐`, 
                    `I've had these too! They're delicious! 🤤`, 
                    `These are seriously game-changing!`, 
                    `Their dried salmon skin is also delicious! 🎣`, 
                    `You sure the serving size on these is one? 🤣`, 
                    `How much are your hoomans being paid to promote this? 😂`, 
                ], 
            }, 
            { 
                description: `Dreaming of greenies, chew toys, and belly rubs. ✨✨✨`, 
                comments: [
                    `You're so at peace. ❤️`, 
                    `Precious. 😭`, 
                    `D'awe Havi. 🥰`,
                    `So peaceful. ❤️`,
                    `💕💕💕`,
                    `Sleepy girl. 😴`, 
                    `And herding sheep? 🐑`,  
                ], 
            }, 
            { 
                description: `Mom thinks she can fool us by hiding our meds in whipped cream. She's ain't wrong. 😅`, 
                comments: [
                    `Just spit it out after they leave! 😂`, 
                    `I'll usually just hide it under my tongue and spit it out once they're gone. 🤫`, 
                    `Y'all have it wrong! The trick is to spit it out in front of them so they have to give you more! 🤯`,
                    `I hate when they do this. 🙄`,
                    `Why do we need meds anyway?! 🤨`,
                    `Bamboozled! 😆`, 
                    `They think they're SOOO slick. 😒`, 
                    `This works 100% of the time unfortunately. 🤪`,  
                ], 
            }, 
            { 
                description: `Benebones are life! ❤️ Especially the bacon-flavored one! 🥓`, 
                comments: [
                    `Careful! I broke a tooth chewing on this! ❤️‍🩹`, 
                    `The chicken one is good too! 🍗`, 
                    `I like the cheese one more. 🧀`,
                    `These are so good! 😩`,
                    `Agree! 🤤`,
                    `I think I'm on my 6th one! 🤪`, 
                    `Haven't had one of these in a minute! 😫`,   
                    `I mean they're alright.. 🤭`, 
                    `Ooof! The bacon flavored one. 🤤`, 
                    `I go through one of these a week! 🤪`,
                ], 
            }, 
            { 
                description: `Maybe if I get into trouble around the house my parents will never want to leave. 🧐 I'll start by digging out the plants. 😈`, 
                comments: [
                    `Try escaping for a few minutes! That also works. 😂`, 
                    `This is actually genius. 🤯`, 
                    `Gonna try this over the weekend! 🤫`,
                    `Hmmm.. 🤔`,
                    `Pretending to go through the chocolate drawer also works. 🤪`,
                    `Mine have given up having plants inside. 🤣`,
                    `This worked when I was a puppy, but now they leave anyway. 😭`, 
                    `You're evil! I love it! 😂`, 
                    `So rude. 💀😆`,
                ], 
            }, 
            { 
                description: `Candid moment or totally staged? 🤪`, 
                comments: [
                    `QT 🥧`, 
                    `Counting sheep? Or herding them? 🐑`,
                    `Snoozin'! 🥰`,
                    `I thought the hoomans didn't want you on the furniture?! 😂`,
                    `So peaceful! 🧘‍♀️`, 
                    `Wait you're on the bed?! 💀😂`,
                    `I can see your pearly whites! 🦷`, 
                    `G'night! 😴`,  
                    `I'm guessing candid. 🤪`, 
                    `You're always sleeping!`,
                ], 
            }, 
            { 
                description: `Peep the breakfast burrito mom was taunting me with this morning. 😢 I showed a lot of restraint and wasn't rewarded in the end. 💔 Next time I'm taking a bite! 🍳`, 
                comments: [
                    `Call dad ASAP! 👿`,
                    `That's sooo savage of her! 😂`, 
                    `A bite?! Take the whole dang thing next time! 😝`, 
                    `That's so rude. 🤬`,
                    `Get an attorney stat. 😡`,
                    `I would have taken a bite. 😤`, 
                    `File a claim with your local SPCA. 😤`,
                    `Wow. I thought she was nice too. 😒`, 
                    `I'd have an "accident" inside the house. 😏`, 
                    `Honestly, I'd sue. 😒`, 
                    `Light the house on fire. 🔥🧯`, 
                    `Call grandma and grandpa! 👵👴`, 
                    `Unacceptable! Ask for a new family! 😠`,
                    `Report this to her boss! 😒`, 
                ], 
            }, 
            { 
                description: `✨🌈 golden hour 🌈✨`, 
                comments: [
                    `So pretty! 😍`, 
                    `Wow! 😍`, 
                    `Pawtogenic! ❤️`,
                    `Majestic! ✨`,
                    `The light is so perfect in this one! 🌞`,
                    `Love this one. 😍`, 
                    `My goodness! 🥰`, 
                    `My favorite picture of you. 📸`, 
                    `❤️❤️❤️`, 
                    `Literally perfect. 😍`,  
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
            bio: `Showy, graceful, and delicate - like peonies. 🌸 Ball is life! 🎾`, 
        }, 
        posts: [
            { 
                description: `Hi everyone! I'm Peony. 🌸 I'm a mini goldendoodle with a big personality. ✨ I just turned 4 months old and already almost tower over my big sister Havana 🦒. I love playing fetch 🎾, eating 🍽, going to the beach 🌊, sleeping under our couch 🛋, and chewing on things around the house 🤷‍♀️! My parents think I'm part horse because I prance and gallop but I'm just elegant. 🐎`, 
                comments: [
                    `Hello Peony! 👋`, 
                    `Welcome!`,
                    `Nice to meet you! ☺️`, 
                    `What's up girl! 🌸`, 
                    `Hi Peony! 🥰`,
                    `Hai! 👋`,
                ], 
            }, 
            { 
                description: `I survived my first visit to the vet! Look at the cool sign they made just for me! 🥰 Thank you Dr. Hernandez for the pets, treats, and belly rubs! 🐶`, 
                comments: [
                    `🙌🙌🙌`, 
                    `You're fearless!`, 
                    `Congrats!`,
                    `Woah they had a sign for you?!`,
                    `I LOVE Dr. Hernandez! She's the best!`,
                    `So awesome! 🙌`,
                    `Dr.Hernandez is literally the best! ❤️`, 
                    `Can you join us at the park now?! 🤗`, 
                    `Woot woot! 👏`,
                ], 
            }, 
            { 
                description: `OMG! I love Benebones! ❤️ 🥓`, 
                comments: [
                    `You gotta try out the chicken one! 🐓`, 
                    `I chipped a tooth with one of these and now my hoomans refuse! ☹️`, 
                    `The cheese one is. 🧀🤤`,
                    `The bacon one is dangerously delish! 😋`,
                    `100% agree! 🤤`,
                    `I'm probably on my tenth one! 🤪`, 
                ], 
            }, 
            { 
                description: `I (barely) survived my first grooming! I can finally see again! 🙈`, 
                comments: [
                    `That glow-up! 😍`, 
                    `So pretty! ❤️`, 
                    `You look like an entirely different dog! 🤣`,
                    `😍`,
                    `Looks great! 👏`,
                    `QT 🥧`, 
                    `You're so happy! 🤗`,  
                ], 
            }, 
            { 
                description: `My goodness, these cod cubes are delicious! 🍣`, 
                comments: [
                    `They're dangerously good! 😍`, 
                    `Oof! Adding these to my list! 🤤`, 
                    `Woah that looks delicious!`,
                    `Appreciate the rec! 🙌`,
                    `Now I'm hungry! 😩 Wait I'm always hungry. 🤪`,
                    `Try out their sardines! Also amazing! 🐟`, 
                    `Wouldn't have been able to tell from the picture. 🤣`, 
                ], 
            }, 
            { 
                description: `Can you tell I LOVE to play fetch? 🎾`, 
                comments: [
                    `It's the golden retriver in you!`, 
                    `Ball is life!`, 
                    `Same! 🎾`,
                    `It's low key overrated. 👀`,
                    `Me too!`, 
                ], 
            }, 
            { 
                description: `I'm officially 3 hooman years old today! I think that makes me 21 dog years old! Cheers? 👀🍺`, 
                comments: [
                    `HBD Peony! 🎈`,
                    `Happy Birthday Peo! 🎂`, 
                    `You're growing up so fast! Happy Birthday buddy! 🥳🎁`, 
                    `Happy Birthday to the one and only Peony!! 🎈`,
                    `Happy pup day! 🎂🎉`, 
                    `Happy birthday, Peony! 🎉🐾`,
                    `3 already?! I can't believe how fast time flies. HBD!`, 
                    `Have a great birthday! ❤️`, 
                    `I hope you have an amazing day! 😊`, 
                ], 
            }, 
            { 
                description: `First time experiencing snow. ☃️ It was magical! ✨`, 
                comments: [
                    `I still haven't gone! 😢`, 
                    `It's so much fun right?!`, 
                    `I LOVE the snow. ❄️`,
                    `Did you make a snowman? ☃️`,
                    `Don't forget to make a snow angel! 👼🏻`, 
                ], 
            }, 
            { 
                description: `I'm allegedly not allowed on the furniture. Keyword: allegedly. 😂`, 
                comments: [
                    `lmaooo my parents said the same thing and here we are!`,
                    `I jump on as soon as they leave. 🤪`, 
                    `I don't even ask anymore! 🙊`, 
                    `Sounds like yours are softies like mine! 😂`, 
                    `Just give them puppy eyes. 😥😂`, 
                    `But it's your house! 🤪`, 
                    `Omg same! 💀😂`, 
                    `Just give them sad eyes. ☹️😆`,
                ], 
            }, 
            { 
                description: `Rain, rain, go away. Please come back another day. 🌧 I miss playing fetch outside. 🥺`, 
                comments: [
                    `I hate the rain too. 😢`,
                    `This weather sucks. 😐`,
                    `Just put on a rain jacket! 🤔`, 
                    `😩`,
                    `Who invented rain anyway. 😒`,
                    `Unpopular opinion, I actually love the rain! 😅`,
                ], 
            }, 
            { 
                description: `Embracing the chipmunk in me. 🐿`, 
                comments: [
                    `😂`, 
                    `Silly girl. 😆`, 
                    `Chonkie cheeks! 🤗`,
                    `🥰🥰🥰`,
                    `Doood you look hilarious! 🤣`, 
                ], 
            }, 
            { 
                description: `You can see my pearly whites even when my mouth is closed. 🦷😬`, 
                comments: [
                    `Lil teef! 😁`, 
                    `I have an under-bite too! 🤩`, 
                    `You're so goofy! 🤪`,
                    `Booop! 🐽`,
                    `🤣`, 
                ], 
            }, 
            { 
                description: `Happy New Year everyone! 🍾`, 
                comments: [
                    `HNY Peo! 🪅`, 
                    `Happy New Year! 🤗`, 
                    `Happy New Year Peony! 🍾`,
                    `HNY!!! 🎊🎊`,
                    `You too Peony!`, 
                    `HNY to you and your family! ❤️`, 
                    `🎉🥰🤗`, 
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
            bio: `People judge me for my eyebrows | 🍫🐕`, 
        },
        posts: [
            { 
                description: `What's up y'all! I'm Milo. 👋 I'm a mini labradoodle. I'm originally from Oregon but my original hoomans couldn't handle my craziness so I was rehomed. 😖 To be fair, I was (read: am) crazy. 🤪 That was the best thing that could've ever happened to me though because I'm now living my best life in sunny California with my forever family! 👨‍👩‍👦 I love exploring new places, meeting new furry friends, going on walks, and woofing. Follow me for doses of cuteness, playfulness, and occasional craziness. 🐶`, 
                comments: [
                    `What up dude! 🤙`, 
                    `Hey Milo!`, 
                    `Hi! 👋`,
                    `Welcome Milo! 🤗`,
                    `Elo! 👋`,
                    `T'sup Milo! 😊`, 
                    `Hey Milo! Welcome! 😊`, 
                ], 
            }, 
            { 
                description: `I've got brows for days! 🤨`, 
                comments: [
                    `Boop! 🐽`, 
                    `You're so cute! 😍`, 
                    `Are those real?!`,
                    `For dayz! 😳`,
                    `D'awe. 🥰`,
                ], 
            }, 
            { 
                description: `It’s Friday the 13th which means I’m going to be a demon child today. 👹`, 
                comments: [
                    `Everyday is torment day! 😈`, 
                    `So mean! 😂`, 
                    `Get 'em! 💀`,
                    `lol savage! 😆`,
                    `Watch them kick you out. 😹`, 
                ], 
            }, 
            { 
                description: `Went to the beach this weekend! Let’s just say the sand was delicious. 🏖`, 
                comments: [
                    `Booop!`, 
                    `You're so filthy! 😜`, 
                    `You got something on your chin Milo. 🤣`,
                    `Which beach is this at? We were at Newport!`,
                    `🐽🐽🐽`, 
                ], 
            }, 
            { 
                description: `Can you tell I had a blast at the dog park?! 🤩`, 
                comments: [
                    `You look like a little lion here! 🦁`, 
                    `D'awe! 🥰`, 
                    `Dude you're getting so big! 😳`,
                    `QT 🥧`,
                    `Looking handsome! 🤗`, 
                    `Woah you're so big now!`, 
                ], 
            }, 
            { 
                description: `Eyebrows on fleeeek! 😎`, 
                comments: [
                    `ON FLEEK! 😎`, 
                    `Looking good Milo! 😍`, 
                    `Wash your paws, ya nasty! 😂`,
                    `Your hair's getting a little long no? 😆`,
                    `Your coat. 😍`, 
                ], 
            }, 
            { 
                description: `Before and after my first big boy cut. It was about dang time, ma! 💈`, 
                comments: [
                    `About dang time!`, 
                    `Look at that glow-up! 😍`, 
                    `Sheeesh! 😎`, 
                    `You're a whole new pup! 🤣`,
                    `Dang dude, you were shaggy!`,
                    `Didn't realize how long it was. 😆`,
                    `QT 🥧`, 
                    `You're so happy now! 🤗`,  
                ], 
            }, 
            { 
                description: `Tongue Out Tuesday? Tongue Out EVERYDAY! 👻`, 
                comments: [
                    `Eyyy! 😎`, 
                    `Swut I'm sayin'!`, 
                    `Eybrows AND eyelashes for days!`,
                    `Those eyes. 😍`,
                ], 
            }, 
            { 
                description: `Ran into the wall this morning. I think my hair is getting a tad bit too long... 🙈`, 
                comments: [
                    `Dude you definitely need a cut. 😳`, 
                    `You think?! 😂`, 
                    `Milo... this is getting bad. 🤣`,
                    `Ummm.. 😰`,
                ], 
            }, 
            { 
                description: `Which am I more more interested in? The wet food or the kibble? 🤤`, 
                comments: [
                    `Hmmm, I can't tell.. 😂`, 
                    `The kibble? 🤪`, 
                    `Boi who you playing? You know you ate both. 🤣`,
                    `Unpopular opinion but the kibble looks better. 👀`,
                    `Hella bougie!`, 
                ], 
            }, 
            { 
                description: `They said I wasn't allowed on the bed or couch, but said nothin' about the desk. 😏`, 
                comments: [
                    `S'right! 😎`, 
                    `Tell 'em! 🗣`, 
                    `It's your house! 😤`,
                    `Oooooo I'm telling. 🙄`,
                    `🤫`, 
                ], 
            }, 
            { 
                description: `Hung out with my girlfriends today. Yes, that was plural. 😏`, 
                comments: [
                    `Who those cuties? 😉`, 
                    `Dang player!`, 
                    `They're probably your hoomans friend's dogs. 😒`,
                    `You play too much. 🤣`,
                    `But Milo you have no game! 😂`, 
                    `Your hoomans are probably just dog-sitting. 💀`,
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
            bio: `The goodest boy (most of the time). 🐶`, 
        },
        posts: [
            { 
                description: `G'day, mate! I'm Archie. I'm a wild and wacky australian shepherd with a goofy grin and a wagging tail. When I'm not herding sheep 🐑, I'm herding my big sister Arya 🐺. I love chasing my tail, rolling in the mud, and playing fetch (though I often forget to bring the ball back!). I'm a furry ball of energy who loves nothing more than a good belly rub and a tasty treat. So come along for the ride and let's have some fun together! 🤪`, 
                comments: [
                    `Welcome! 🐶`,
                    `Hey Archie!`,
                    `Hai! 👋`,
                    `Hey! Nice to meet you! ☺️`, 
                    `Youre expression is so goofy! 🤪`,
                    `What up Arch! 🤗`, 
                    `About dang time Archie! 🤗`,
                    `Hi Archie! 👋`, 
                ], 
            }, 
            { 
                description: `Catchin' zZz's. 💤`, 
                comments: [
                    `I'm just resting my eyes. 🤪`, 
                    `Rest  up! 😴`, 
                    `💤💤💤`,
                    `Now I'm sleepy! 🥱`,
                ], 
            }, 
            { 
                description: `In jail for peeing in the house. Free Archie! 🚔`, 
                comments: [
                    `Locked up. They won't let me out. 🎶`, 
                    `Free my boi Archie! 🙏`, 
                    `You look so sad. 😭`,
                    `I'm calling the cops! 😤🤣`,
                    `Free Arch!`, 
                ], 
            }, 
            { 
                description: `Mom says I'm pawtogenic! 📸`, 
                comments: [
                    `Egh. 🤣`, 
                    `QT 🥧`, 
                    `You are! 😍`,
                    `Idk about that one. 🤪`,
                    `She lyin'! 😹`, 
                ], 
            }, 
            { 
                description: `Ruff mornings call for a puppuccino with my hooman ☕️🐶❤️`, 
                comments: [
                    `Looks like you loved it. 😆`, 
                    `They're so good!`,
                    `Now I'm craving one! 😩`,
                    `It's all over your whiskers! 🐭`, 
                    `Boop! 🐽`, 

                ], 
            }, 
            { 
                description: `Time to Paw-tayyy! 🥳`, 
                comments: [
                    `🎈🎊🎁🍾`, 
                    `I've got the piñata! 🪅`, 
                    `Woot woot! 🥳`,
                    `What are we celebrating?! 🤔`,
                    `Paaaawtay! 🎉`, 
                ], 
            }, 
            { 
                description: `Just out here being a good wilderness scout. 🐻`, 
                comments: [
                    `Aren't you supposed to be a herder? 🐑`, 
                    `You look like a model! ✨`, 
                    `I love that trail! 🥾`,
                ], 
            }, 
            { 
                description: `Happy 4th of July friends! 🇺🇸🎇🧨🐾`, 
                comments: [
                    `You aren't scared of the fireworks? 😱`, 
                    `I hate this holiday! Too many sounds! 😰`, 
                    `'Merica! 🇺🇸`,
                    `Happy 4th Archie! 🍔🌭`,
                ], 
            }, 
            { 
                description: `It's my first birthday and I'm feeling fur-tastic! 🐾🎂🐶`, 
                comments: [
                    `Happy Birthday to the one and only Archie! 🎈`,
                    `HBD friend! 🤗`,
                    `Hope you have a great birthday! ❤️`, 
                    `I hope you have an amazing day Archie! 😊`, 
                    `Happy birthday! 🐾`,
                    `1 already?! Time flies! HBD! 🎉`, 
                    `Happy pup day! 🎂`, 
                    `You're growing up so fast! 🥳`, 
                    `Happy Birthday buddy! ❤️`, 
                ], 
            }, 
            { 
                description: `Merry Christmas, from our pack to yours!🎄❤️`, 
                comments: [
                    `Merry Chrysler to you and your family! ❤️`,
                    `🎄🎅🎄🎅🎄🎅`, 
                    `Merry Christmas Arch! 🤗`, 
                    `Y'all too cute! Merry Christmas! 🥰❤️`, 
                    `Merry Christmas to you too! 🎄`, 
                    `I hope you got lots of treats from Santa Archie! 🎅🍪`,
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
            bio: `👑 King 👑`, 
        },
        posts: [
            { 
                description: `Been thinking of you a latte. ❤️`, 
                comments: [
                    `You think you're Edgar Allan Pug now or what? 🤣`, 
                    `Errrrr. 😂`, 
                    `Dude get over her! 😂`,
                    `So corny. 🤢😆`,
                    `Smh. 😆`,
                    `Fellas, we lost one. 💔😆`,  
                ], 
            }, 
            { 
                description: `Am I doing this meal prep thing right? 🤪`, 
                comments: [
                    `Looks good to me! 🤣`, 
                    `Doesn't look like it's working Doug. 💀`, 
                    `That calorie deficit is too aggressive Doug. 🤣`,
                    `Perfectly balanced imo. 🤪`,
                    `I think you need another slice in each. 😝`, 
                ], 
            }, 
            { 
                description: `Land of the furry, home of the brave! 'Merica! 🍺`, 
                comments: [
                    `🍻`, 
                    `Not looking forward to those fireworks. 😩`, 
                    `Cheers Doug! 🍻`,
                    `Happy 4th Doug!`, 
                    `This is just another excuse to eat huh? 🤣🍔🌭`,
                ], 
            }, 
            { 
                description: `First day on the job. This would be a lot easier if I had thumbs. 🥲`, 
                comments: [
                    `💀🤣`, 
                    `Dude seriously! 😆`, 
                    `Bruuuuuh 🤣`,
                    `Looking sharp! 😎`,
                    `I give it another day before you're fired. 🤣`, 
                ], 
            }, 
            { 
                description: `Merry pugmas y'all! 🎄❤️`, 
                comments: [
                    `Merry Christmas bro! ❤️`,
                    `Merry Christmas! 🥰`, 
                    `Likewise Dougie! ❤️`, 
                    `Merry Christmas to you too Doug! 🎄`, 
                    `Merry Christmas Doug! 🤗`, 
                ], 
            }, 
            { 
                description: `Vibin' out here in Barbados. Jk, we at the community pool. 😂`, 
                comments: [
                    `Bruh you play too much! 🤣`, 
                    `Dude you're a clown lmao 🤡`,
                    `Smh 🤣`,
                    `Where's the invite tho? 👀`, 
                ], 
            }, 
            { 
                description: `MSCHF's Big Red Boots: secured. 😎`, 
                comments: [
                    `Sheesh! 😎`, 
                    `They're amazing. 🤤`, 
                    `Ooof! Gonna have to cop a pair. 😩`,
                    `🔥🔥🔥`,
                    `This looks ridiculous. 😂`,
                    `Looking fresh Doug! 😎`, 
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
            bio: `Happy and smiling! 🦔🌻`, 
        },
        posts: [
            { 
                description: `New pair of sunnies! How do they look?! 🕶`, 
                comments: [
                    `They look great on you! 😍`, 
                    `So cute! 😍`, 
                    `They're perfect!`,
                    `You look so hip! 🤩`,
                    `Def keepers!`, 
                ], 
            }, 
            { 
                description: `Sunday's are for self-care. Who doesn't love a spa day? 🧖‍♀️`, 
                comments: [
                    `👏👏👏👏👏`, 
                    `D'awe. 😍`, 
                    `The little floaties. 😭`,
                    `Living your best life! 💅`,
                ], 
            }, 
            { 
                description: `Officially a noogler! Joining the search team as an L5! 👩‍💻`, 
                comments: [
                    `Congrats! 🎉`, 
                    `Amazing news!`, 
                    `How many leetcode hards did you do? What about mediums?`,
                    `I knew you'd get it! 🥳`,
                    `How long did you grind leetcode for? 👀`,
                    `So awesome Pepper!`, 
                    `Woot woot! 🙌`, 
                ], 
            }, 
            { 
                description: `Y'all, idk about this... 😳`, 
                comments: [
                    `Hmmm.. idk about that either. 🤣`, 
                    `This can't possibly end well Pepper. 😥`, 
                    `Don't do it! 😳`,
                    `Are you kidding?! 😱`,
                    `Do it! 🤣`, 
                ], 
            }, 
            { 
                description: `Chipoltees on a Friday night! 🌯`, 
                comments: [
                    `Eyyyy! 😎`, 
                    `I love Chipoltees! 🤤`, 
                    `🤢`,
                    `So bomb! 🤤`,
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
            bio: `Tiny but mighty. 🐹`, 
        },
        posts: [
            { 
                description: `Greetings everyone. I'm Ludwig. I'm a hairless guinea pig. What I lack in fur, I have in spirit, wit, and charm. Follow my adventures as I explore the world, one squeak at a time. 🐹✨`, 
                comments: [
                    `Hey Ludwig! ☺️`, 
                    `Hi! Welcome! 😊`, 
                    `Hey friend! 🤗`,
                    `Hola! 👋`,
                    `Hey what's up!`, 
                ], 
            }, 
            { 
                description: `It's always sweater weather when you're hairless. 🥶`, 
                comments: [
                    `Oh no! 😆`, 
                    `You must be freezing rn! 🥶`, 
                    `Sweater weather all day every day!`,
                    `Just realized you're hairless!`,
                    `D'awe. ❤️`, 
                ], 
            }, 
            { 
                description: `I did not choose the chunky life, the chunky life chose me. 🍕`, 
                comments: [
                    `It chose me too! 🤣`, 
                    `Chunky life!`, 
                    `That's what I'm saying! 😂`,
                    `Chonkies, unite! 👏`, 
                ], 
            }, 
            { 
                description: `Loving this wfh policy! ☕️`, 
                comments: [
                    `Why's the page empty? 😂`, 
                    `Hard at work or hardly working? 🤪`, 
                    `Isn't it the best?!`,
                    `I LOVE it! ☺️`,
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
            bio: `Join me on my scaly journey as I conquer the world one basking spot at a time. 🐲`, 
        },
        posts: [
            { 
                description: `Hear ye, hear ye! 🗣 I am a mighty and majestic bearded dragon, revered for my strength, intellect, and unmistakable appearance. Don't let my rough scales, sharp claws, or pissy expression fool you, I'm actually gentle and friendly. ☺️ Follow along as I explore the world! 🦎✨ `, 
                comments: [
                    `Howdy! 👋`, 
                    `Hey Thor!`, 
                    `Hi you majestic dragon! 🖐`,
                    `What's up Thor!`,
                    `Welcome Thor! 🤗`, 
                ], 
            }, 
            { 
                description: `Despite my RBF saying otherwise, I LOVE going to the beach! 🌞🧘‍♂️`, 
                comments: [
                    `I would have never guessed. 😂`, 
                    `You're demeanor is so misleading! 😆`, 
                    `But you're so pissed in the picture! 😂`,
                    `Wait what?! 😐`,
                    `Looks like you hate it. 🤣`, 
                ], 
            }, 
            { 
                description: `Who wants to catch these gloves?! 🥊😤 Kidding! 🥰`, 
                comments: [
                    `Lehgo 😤😆`, 
                    `I'll crush you tho! 🙊`, 
                    `I do! 😈`, 
                    `Let's duke it out! 😂`,
                    `Maaaan come on. 🤣`,
                ], 
            }, 
            { 
                description: `Working hard or hardly working? 🚜👷`, 
                comments: [
                    `I'd say the latter. 😂`, 
                    `Is the question rhetorical? 🤪`, 
                    `Doubt you're working hard. So you must be hardly working. 🤣`,
                    `Why are you always mad?! 😝`,
                    `Thor we all know the answer to that. 🤣`, 
                ], 
            }, 
            { 
                description: `Momma we made it! 🎓`, 
                comments: [
                    `Congrats buddy! ☺️`, 
                    `Don't forget me when you're famous! 🤗`, 
                    `So proud of you Thor! 🥲`,
                    `Proud of you man! 😭`,
                    `You deserve it all Thory! ❤️`, 
                ], 
            }, 
            { 
                description: `People are always surprised to find out that my favorite hobby is tea-time! 🫖🎩`, 
                comments: [
                    `I'm still shocked tbh. 🤣`, 
                    `No way... 😳`, 
                    `Wait what? Seriously? 😂`,
                    `I still can't believe it. 😂`,
                    `That's so awesome! 😂`, 
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
            bio: `I like to frolic in the meadows, nibble on grass, and soake up the sunshine. 💕`, 
        },
        posts: [
            { 
                description: `Baaa! 👋 Nice to meet you! 🐑`, 
                comments: [
                    `Hi there! Lovely to meet you too! 🐑❤️`, 
                    `You're the most adorable lamb I've ever seen! 😍`, 
                    `Aww, your little baa! 🥰`,
                    `Nice to meet you too! This just brightened up my day! 🌞`,
                    `Too precious! I can't! 😭`, 
                ], 
            }, 
            { 
                description: `Counting lambs. 🐑`, 
                comments: [
                    `I can't! 😭`, 
                    `Oh my goodness, counting lambs has never been so cute! 🥺🐑`, 
                    `Cutest lamb in the flock! 🤗`,
                    `Thanks for brightening up my day! 😊🌼`,
                    `So peaceful! 🐑🌿`, 
                ], 
            }, 
            { 
                description: `In my happy place. 😌`, 
                comments: [
                    `This radiates happiness! 💕`,
                    `You deserve all the sunshine and good vibes! 🌞`, 
                    `I can feel the calmness and content through the screen! 💛`, 
                    `Nothing like some good ol' nature therapy. 🌿🐑`,
                    `You're a true source of joy and happiness! 🌼`,
                    `This photo is like a breath of fresh air, thank you for sharing your happy place with us! 😊`, 
                ], 
            }, 
            { 
                description: `Smiles all round. 😊 Have a great weekend friends! 🤗`, 
                comments: [
                    `Your smile is contagious! 😊🌞`, 
                    `This is the kind of energy I needed to start off my day! 🌼`, 
                    `So wholesome! 😭`,
                    `Now you got me smilin'! ❤️`,
                    `Have a happy and relaxing weekend! 😊`, 
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
            bio: `Mud puddles, snout scratches, and oinking adventures. 🐷`,
        },
        posts: [
            { 
                description: `Happy National Pie Day! 🥧🍎🍑🫐`, 
                comments: [
                    `It's my favorite day of the year! 🤤`, 
                    `Happy National Pie Day to you too! These look absolutely delicious! 🥧😍`, 
                    `Yum! Those pies look amazing! 🍎🍑🫐`, 
                    `Oh my goodness, I'm drooling over here!`,
                    `Your pie game is on point! 🤤`,
                    `That pie is almost too pretty to eat...almost! 😜👌`, 
                ], 
            }, 
            { 
                description: `Catching waves and soaking up the sun. Who says pigs can't surf?! ☀️🏄‍♀️🐷`, 
                comments: [
                    `Look at you! 🏄‍♀️🐷`, 
                    `Diggin' the shades! 😎`,
                    `Summer fun and relaxation looks great on you Hammie! 🌞`, 
                    `Cheers to living your best life! ☀️🍹`, 
                    `This just screams out good vibes! 😎`,
                    `Surfs up brah! 🤙`,
                ], 
            }, 
            { 
                description: `Pigging out at the bar, living my best life. 🍻🐷🍔`, 
                comments: [
                    `Now that's what I call pigging out! 🤣`,
                    `You're glistening Hammie! ✨`, 
                    `I see you're enjoying some cold ones too! Cheers to living your best life! 🍻🐷`, 
                    `Nothing wrong with indulging every once in a while! Enjoy! 🐷👌`, 
                ], 
            }, 
            { 
                description: `Throwback to when I was just a little piglet. 👶`, 
                comments: [
                    `You were an adorable piglet! 🐷 What happened?! 🤣`, 
                    `This is too precious! 😭`, 
                    `The nose! I can't handle the cuteness! 🥺🐽`,
                    `And then life happened. 😂 Kidding Hams! 🤪`, 
                ], 
            }, 
            { 
                description: `Boop! 🐽`, 
                comments: [
                    `Boop! Gotcha! 😜👉🐽`, 
                    `Just waiting to be booped! 🥰👃`, 
                    `Boop!!! 🐽`, 
                    `Your boopability factor is off the charts! Boop! 😜🐽`, 
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
            bio: `Fashion designer for the brands your admire. My taste is high-end and my attitude is even higher. 💅`, 
        }, 
        posts: [
            { 
                description: `👸`, 
                comments: [
                    `Bless us queen! 👸`, 
                    `Looking fabulous as always! 👑😍`, 
                    `The one and only! 👑🐾`, 
                    `Slay girl! 💅`,
                    `We are not worthy!! But seriously, you're stunning! 😍👸`,
                    `Queen of NY! Loves u! ❤️🐾`, 
                ], 
            }, 
            { 
                description: `Stay classy y'all. 💅`, 
                comments: [
                    `Classy and fab! Per usual! 💅😎`, 
                    `Effortlessly royal! 👑`,
                    `Sheesh! Taking notes. 📝`, 
                    `Fabulous! 💄👗`,
                    `Breaking the internet! ⚡️`,
                    `Sophistication that we all aspire to! 💅🥂`,
                    `Classy, bougie, and can't forget about sassy! Slay bae! 💃`, 
                ], 
            }, 
            { 
                description: `Sneak peak at Szn 7. 🤫`, 
                comments: [
                    `On fleek! 😍👗`, 
                    `🥵🔥🥵🔥🥵🔥`, 
                    `Sheeesh! Slay queen! 👠👜`, 
                    `You've done it again!! 👗`,
                    `~fashion goddess~`, 
                    `Dying to get my paws on this collection 🥵`, 
                    `Delivered. Like usual. 🔥`,
                ], 
            }, 
            { 
                description: `Breaking necks - as usual. ❤️`, 
                comments: [
                    `😍😍😍`, 
                    `Power couple of the millenia! 🥵🔥`,
                    `Definition of couple goals. 👏🐾`,
                    `Y'all so perfect it should be illegal! 😍`, 
                ], 
            }, 
            { 
                description: `My first cover issue hits the stands today. What an honor! 📸`, 
                comments: [
                    `Cover girl! Couldn't be prouder! Congrats! 🎉👏`, 
                    `Making waves and I'm here for it! 🥂`, 
                    `Correction: first of many! Congrats Gigi! 🔥🙌`,
                    `Flawless! Grats, Gi! 😍`,
                    `The come-up! I knew it'd happen! 🥲`,
                    `So proud Gigi!!! 😭`, 
                ], 
            }, 
            { 
                description: `NY tingz. 💋`, 
                comments: [
                    `Tell 'em! 💄`, 
                    `Life in the big apple! 🍎`,
                    `Taxi rides never looked so chic! 🚕😎`, 
                    `Catching taxis in style, just another day in the life of a bougie pup! 😜👌`,
                    `NY looks good on you! Keep slaying, gorgeous! 💋👠`,
                    `Ou there blessing these streets! 🙌`, 
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
            bio: `Short king with a big personality. 🕺`, 
        },
        posts: [
            { 
                description: `First day of law school! Already over it. 🤓`, 
                comments: [
                    `Sending you all the good vibes on your first day of law school! 🤗🎉`, 
                    `Hang in there! The first day is always ruff 🐶, but things will get better!`,
                    `Just remember why you started! 💪🏼📚`, 
                    `I'd be over it too! 😂💀`,
                    `It'll be over before you know it! Just keep grinding! 👨‍⚖️💼`, 
                    `Dude it's day one! 😂`, 
                    `Only three more years! 😅`, 
                ], 
            }, 
            { 
                description: `Me doing me. 💅`, 
                comments: [
                    `Eyyyy!`, 
                    `Louder for the paws in the back! 📢🗣`, 
                    `Preach Scruffy!`,
                    `That's right! 🤜🤛`,
                    `Who hurt you Scruffs?! 😂`, 
                ], 
            }, 
            { 
                description: `Tiny boss vibes. ☕️💻😎`, 
                comments: [
                    `Schmooood! 🤩`, 
                    `Small, but you are mighty! 😎`, 
                    `Smoll kings stand up! 😤`,
                    `Tell 'em Scruffs! 🗣`, 
                ], 
            }, 
            { 
                description: `Esq. vibes 👨‍⚖️`, 
                comments: [
                    `Congrats! 🎉`, 
                    `Congratulations Scruffy! 🙌`, 
                    `Grats man! 🥳`,
                    `Congrats! Let's celebrate! 🍾`,
                    `So proud of you Scruffy! 🥲`,
                    `Always representing us well! 👊`, 
                    `😭❤️`, 
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
            bio: `Blind, adventurous, and ready to take over the world. 🐱`, 
        },
        posts: [
            { 
                description: `👋`, 
                comments: [
                    `Hey Patches! How are you doing today? 😸`, 
                    `What up man! Hope you're well. 🐾`, 
                    `Looking as handsome as ever! How's life treating you these days? 😻`,
                    `Hey Sam! How's it going buddy? 🤘`,
                    `Looking like a total boss Sam! What's new with you? 😎`, 
                ], 
            }, 
            { 
                description: `Aesthetic or wdyt?  😎`, 
                comments: [
                    `You always look cool no matter what! 😸`, 
                    `Aesthetic af! 😎`,
                    `Coolest cat on the block! 🤘`,
                    `Def aesthetic 🔥`,
                ], 
            }, 
            { 
                description: `Just hangin' out. 🐨`, 
                comments: [
                    `Bruh you're gonna fall! 😰`,
                    `How's the view from up there? 😸`, 
                    `Boy u crazy! 🙀`, 
                    `You're the king of the world, Patches! 😸`,
                    `Livin' life on the edge! 🤘`, 
                ], 
            }, 
            { 
                description: `Love me a good box! 📦`, 
                comments: [
                    `😻`, 
                    `But why? 😂`,
                    `So confused. 🤣`, 
                    `Can someone explain? I honestly don't get this. 😆`,
                ], 
            }, 
            { 
                description: `Friday night. Feelin' alright. 🌚✨ Poet, who didn't know it. 🖌`, 
                comments: [
                    `🗣🗣🗣`, 
                    `You tryna get into any trouble tonight? 👀`, 
                    `Coolest cat on the block! 😎`,
                    `We got Edgar Alan Paws over here. 🤣`,
                    `Bro maybe keep your day job for a bit. 😂`, 
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
            bio: `Life of a wise budgie. 🦜🥝`, 
        },
        posts: [
            { 
                description: `Happy Wednesday ❤`, 
                comments: [
                    `Happy Wednesday budgie! 🦜`, 
                    `Have a great day Kiwi! 😃`, 
                    `Happy midweek budge! ☺️`, 
                ], 
            }, 
            { 
                description: `Peek-a-boo! 👻`, 
                comments: [
                    `I see you! 🤪`, 
                    `Cutie. 🥰🥰`, 
                    `🙈🙉`, 
                    `Peek-a-boo! I see you! 🐤`,
                ], 
            }, 
            { 
                description: `Not sleeping - promise! 🥴 Just resting my eyes! 💤`, 
                comments: [
                    `Lies! 😂`,
                    `Rest up and get some energy Kiwi. 💪`, 
                    `Won't blame ya for taking a little nap. 😴`, 
                    `You sure you're not snoozing. 🤫`,
                    `We all need out beauty sleep. 😍`,
                ], 
            }, 
            { 
                description: `Happy birthday to me! Officially 10! 👴🏻`, 
                comments: [
                    `Looking great!`,  
                    `10 years young. 💪🏼`, 
                    `You don't look a day over 2! 😍`,
                    `HBD Budgie! Keep living your best life. 😎`, 
                    `Here's to many more! 🥂`,
                    `Happy birthday, little guy! Looking better than ever! 🎂`,
                    `Aging like fine wine! 🍷`,
                    `Happy birthday Kiwi! 🥝`, 
                    `HBD bud! 🍾`,
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
            bio: `Roaming, eating, and country-pace living. 🐢`, 
        },
        posts: [
            { 
                description: `Slow mornings are my favorite. 🐢`, 
                comments: [
                    `Slow mornings every day! Nothing beats taking it easy and enjoying life. ☕️`, 
                    `Keep on savoring each moment. 🌅`, 
                    `Slow and steady wins the race, right Leo? 🏆💪🏼`,
                    `The cutest couch potato! Keep on taking it easy and enjoying life. 🥰`, 
                ], 
            }, 
            { 
                description: `Couch potato forevah and evah. 🥔`, 
                comments: [
                    `Couch potato? All I see if someone enjoying life! 😊`, 
                    `Professional couch potato! 🛋`, 
                    `Definition of "taking it easy!" Keep on living your best life. 🐢`,
                    `You're the cutest little couch potato, Leonardo! Keep on being an expert in relaxation. 😍`,
                    `The ultimate chill tortoise!`, 
                ], 
            }, 
            { 
                description: `Basking? Tanning? Tomato tomahto. ☀️`, 
                comments: [
                    `Keep on soaking up those rays, Leo! 🌞`, 
                    `Bassking in the glow. ☀️`, 
                    `Tanning, basking, self-care - whatever you want to call it. 🧖‍♂️`,
                    `Sunny days ahead. 👑`,
                ], 
            }, 
            { 
                description: `Throwy to when I was just barely bigger than a strawberry. 👶🍓`, 
                comments: [
                    `Aww, little baby Leo! 😭 You were the cutest. 🥰`, 
                    `So precious! 😭`,
                    `Just as adorable as you were when you were a little tortoise. 🐢`, 
                    `D'aww! 🥰`, 
                    `Dude what went wrong along the way? Kidding Leo! 😂`, 
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
            bio: `Here for a good time. 🤙`, 
        },
        posts: [
            { 
                description: `Hi I'm Arnie. 🐹`, 
                comments: [
                    `Hi Arnie! Welcome! 👋`, 
                    `Hey there Arnie! 🐾`, 
                    `Welcome buddy! 🤗"`,
                    `👋👋👋`,
                    `Welcome! You're gonna break the internet! 😍`, 
                ], 
            }, 
            { 
                description: `Bro. These "strawberry" things? DELICIOUS! 🍓`, 
                comments: [
                    `Haha, I love your facial expression! Those strawberries must be really tasty! 😂🍓`, 
                    `Strawberries are the best! 🤤🍓`, 
                    `We have the same taste buds! Strawberries are the bomb! 😋🍓`,
                    `Arnie, you're the cutest little foodie I know! 🍓🐹`, 
                ], 
            }, 
            { 
                description: `HBD to me! 🎉`, 
                comments: [
                    `The cake is to tiny! 😆 HBD Arnie!`,
                    `Happy Birthday, Arnie! 🎂🎈`, 
                    `HBD bro! 🤗`,
                    `You're growing up so fast! Happy Birthday buddy! 🥳🎁`, 
                    `Happy Birthday to the one and only Arnie!! 🎈🐹`,
                    `Happy b-day Arnie! 🎂🎉`, 
                ], 
            }, 
            { 
                description: `Ayo someone help me outta here! 😰`, 
                comments: [
                    `Oh no, Arnie! Don't worry, we'll get you out of there in no time! 😅`, 
                    `Looks like you got yourself into a bit of a tight spot there! On my way! 🙏🐹`, 
                    `OMW to your rescue! 🦸‍♀️`,
                    `How'd you get stuck?! 😂`, 
                    `Arnie the Houdini! 😂`,
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
            bio: `Hoppying and binkying with my lion-like mane. 🦁`, 
        },
        posts: [
            { 
                description: `When I was just a little baby. 🐰`, 
                comments: [
                    `Omg you were the cutest little baby bunny ever! 😍🐰`, 
                    `You're still just as cute, Lily! 😊❤️`, 
                    `Awww, I love seeing baby pictures of you! 🥰🐰`,
                    `So precious! How old were you in this picture? 🐇`,
                    `😍😍😍😍😍`, 
                ], 
            }, 
            { 
                description: `You can't sit with us. 💁‍♀️`, 
                comments: [
                    `Haha, I love the attitude. 😂💁‍♀️`, 
                    `Queen Lily, I would love to sit with you! 👑`, 
                    `Sassy girl! 😂`,
                    `Mean girls! 🐰`,
                    `Tell 'em Lily! 💅`, 
                ], 
            }, 
            { 
                description: `Pretending to work but secretly ordering treats online. 👸🏼`, 
                comments: [
                    `I see you! 🕵️‍♀️😜`, 
                    `Haha, I do the same thing when I'm supposed to be working! 😂🍪`, 
                    `Lily, I think you deserve all the treats you want! 🐰🧁`,
                    `If only my work was as fun as yours! 🤣💼`,
                    `That's genius! 😂`, 
                ], 
            }, 
            { 
                description: `Merry Chrysler from my family to yours! ❤️`, 
                comments: [
                    `Merry Christmas to you too, Lily! 🎄🐰`, 
                    `You look so cute in your festive outfit, Lily! 🥰❤️`, 
                    `Merry Chrysler to you and your family! 😘🐇`,
                    `Wishing you and your family a wonderful holiday season, Lily! 🎁🎉`,
                    `I hope you got lots of treats from Santa, Lily! 🎅🍪`,
                    `Merry Christmas Lils! 🤗`, 
                    `🎄🎅`
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
            bio: `Unruly hair rules. 🤪`, 
        },
        posts: [
            { 
                description: `🍂🍁🥮`, 
                comments: [
                    `I can't decide what's better: the crunchy leaves or the pumpkin treats? 😍🍁🎃`, 
                    `Fall fashion is my favorite! Loving that sweater on you, Friz! 🍂🧡`, 
                    `The perfect season for snuggles with my fur baby! 😘🐾`,
                    `Autumn is in the hair 🤣, I mean, air! Looking fabulous, Friz! 😍🐶`,
                    `I'm convinced that Friz is secretly a squirrel. He's just as cute and loves the fall season! 🐿️🧡`, 
                ], 
            }, 
            { 
                description: `Call me Salvador Dali from now on! 👨‍🎨`, 
                comments: [
                    `You're a true work of art, Friz! 🎨🖼️`, 
                    `Looks like you're ready to paint the town... or canvas, Friz! 🤣🎨`, 
                    `I think you're more of a Pablo Picatso, with those paws! 😸🐾`,
                    `A true visionary! We need to get you your own gallery opening, Friz! 🤩🐶`,
                    `If I didn't know any better, I'd say that painting was done by you, Friz! 🤔🎨`, 
                ], 
            }, 
            { 
                description: `I guess. A little bit. You’re being kinda rude though. 🐒`, 
                comments: [
                    `It's okay Friz, Chewie is a legend! Plus, you're way cuter! 😍🐶`, 
                    `Can't decide if you look more like Chewie or an Ewok, but either way you're adorable! 🤩🐻`, 
                    `I can't help but laugh every time I see this picture! You're one hilarious pup, Friz! 😂🐶`,
                    `I think you're more of a Disney prince than a Star Wars character, but I can see the resemblance! 🐶🌟`,
                    `I think the resemblance is uncanny, Friz! But don't worry, you're still the most handsome chihuahua in the galaxy! 😍🐾`, 
                ], 
            }, 
            { 
                description: `I think someone spiked my dognog. I ain't mad about it! 🦴🍸`, 
                comments: [
                    `I think it's safe to say that someone's having a good time! 😂🍹🐶`, 
                    `Party animal alert! You always know how to have a good time, Friz! 🎉🐾`, 
                    `Looks like someone's ready to hit the dance floor! 🕺🎶🐶`,
                    `I think Friz's motto is 'live every day like it's a pawty'! 🥳🐾`,
                    `I'll have what Friz is having! 🍹🤣🐶`, 
                ], 
            }, 
            { 
                description: `91 dog years old today! But I don't look a day over 21 right...? 😰`, 
                comments: [
                    `Friz out here aging like a fine wine! 💪🏼`, 
                    `You don't look a day older than 5! 👶`, 
                    `You look amazing!`,
                    `Aging like fine wine! 🍷`,
                    `Dang Friz! Collagen game strong! 😂`,
                    `Tell us your routine! 🧖`,  
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
            bio: `Eternally disappointed. 😾`, 
        },
        posts: [
            { 
                description: `Hi. I'm Merlin and I'm eternally disappointed. 😾`, 
                comments: [
                    `Aww, Merlin, cheer up! Don't be a grump!`, 
                    `You haven't changed one bit. 😂`, 
                    `I bet you're secretly happy on the inside. You just don't want to show it! 😜`,
                    `I think I've finally found someone who understands me on a spiritual level. 😂`,
                    `Cheer up, Merlin! You're still cuter than most humans, even when you're grumpy! 😼`, 
                    `Merlin, if you're not careful, you might turn into the next Grumpy Cat and become a viral sensation! 😎`, 
                    `Merlin, I think you need a hug. Or a snack. Or both. 😸`,
                    `Some cats just don't change. 😂`,
                ], 
            }, 
            { 
                description: `My birthday sucked. 😤`, 
                comments: [
                    `Sorry to hear that, Merlin. Next year, let's throw you a surprise party and watch you try to act surprised. 😹`, 
                    `Merlin, I'm pretty sure that in cat years, you're still a teenager. You at least act like one. 😆 Don't worry about getting older! 😜`, 
                    `Birthdays can be disappointing, Merlin, but you know what never is? Treats. And naps. 😸`,
                    `Maybe next year, you can demand a fancy feast instead of a regular one! 😼`,
                    `Merlin, don't worry about it. You're like a fine wine - you only get better with age! 😎`, 
                    `Oh don't be a grump - grandpa! 😂`,
                ], 
            }, 
            { 
                description: `Happy Monday to everyone except for Monday. 🤬`, 
                comments: [
                    `Merlin, I feel like you and Garfield would get along swimmingly. 😂`, 
                    `Mondays are the worst! Unless it's a national holiday or a snow day, I don't want to hear about it! 😒`, 
                    `Right there with you! 😤`,
                    `I'm pretty sure that the only good thing about Mondays is the fact that it's one day closer to Friday. 😜`,
                    `If it makes you feel any better, I'm pretty sure Mondays also hate Mondays. 😹`, 
                    `I think this is the first time I agree with you! 😂`, 
                    `😹😹😹`, 
                ], 
            }, 
            { 
                description: `The fluff is this, human?! I said I wanted pizza! 😡`, 
                comments: [
                    `What a disapointment! 😂`, 
                    `If your human doesn't give you pizza soon, wreak havoc! 👹`, 
                    `I say you throw it at them. 😆`,
                    `But sushi is better! 👀`, 
                    `Don't worry, Merlin. I'll get you a slice next time I see you! 😜`,
                    `Merlin, you're a cat. You don't need anyone's permission to demand pizza. Just take it!! 😹`, 
                    `Call the cops! 😂`, 
                    `So disrespectful. 😤 To the guillotine! 😹`, 
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
            bio: `I'm just a cat with luscious locks. 😽`, 
        },
        posts: [
            { 
                description: `Mondays. Amarite? 🤢`, 
                comments: [
                    `Mondays are the worst, but at least your hair is looking fabulous! 😻`, 
                    `I feel you, Harry. Can we just fast forward to Friday already? 😩`,
                    `You know what would make Mondays better? Catnip. Just saying. 😹👀`,
                    `Don't worry, Harry. The weekend will be here before you know it! 😸`,
                    `Just pretend it's Sunday part 2! That's what I do. 🤫`,
                    `I just sleep through it. 😂`,
                ], 
            }, 
            { 
                description: `I don't get it either. I just love them. 📦`, 
                comments: [
                    `You know you're a cat when a cardboard box is your favorite toy! 😹`, 
                    `Who needs expensive cat toys when you have a good ol' corrugated box, am I right? 😸`, 
                    `Cardboard boxes are the ultimate hide-and-seek spot! 🤫`,
                    `I honestly don't understand this! 😂`, 
                    `Maybe we should start a cardboard box collection... 😂`,
                    `Harry, you're the cutest little cardboard box lover ever! 😻`, 
                    `Why are you like this?! 😹`,
                ], 
            }, 
            { 
                description: `Can you tell I'm so excited to bathe? 🤬`, 
                comments: [
                    `Look at the bright side, Harry. At least your hair will be even more fabulous after the bath! 😸`, 
                    `Just keep telling yourself, "I am a majestic creature and I deserve this bath!" 😹`, 
                    `Baths are overrated anyway. Who needs to be clean anyway? 🤢😂`,
                    `Maybe we can bribe the hooman to cancel the bath with some treats. Worth a shot, right? 😂`,
                    `Just remember, Harry. It's all worth it for the post-bath cuddles! 😻 Okay, maybe it's not. 🤣`, 
                    `Run for your life!`, 
                    `I don't get how they can bathe every single day!! 😰`,
                    `Protest by rolling in the mud! 😉`,
                ], 
            }, 
            { 
                description: `Thankful. I guess. 🦃`, 
                comments: [
                    `You're not a turkey, Harry. No need to be salty about Thanksgiving! 😹`, 
                    `I'm thankful for you, Harry. Your grumpy face always puts a smile on my face! 😸`, 
                    `Think of all the delicious food you're going to get on Thanksgiving! Turkey, gravy, catnip... wait, scratch that last one. 😂`,
                    `At least we get a day off to spend with our favorite feline friend! 🐾`,
                    `You should dress up like a pilgrim for Thanksgiving. I can already picture it... 😻`, 
                    `I'm ready to grub! 🍽`,
                ], 
            }, 
            { 
                description: `Blaming this one on the dog, again. 😂 `, 
                comments: [
                    `You savage! Poor dog! 😂`, 
                    `Classic move, Harry. Always blame the dog. 😹`, 
                    `Spare him! 😂 You're too cute to be blamed for anything, Harry! 😻`,
                    `The dog is always the easiest target. Can't blame you for being a smart cat! 😸`,
                    `I can't believe these humans actually falls for this... 😂`,
                    `Poor dog. 😩`, 
                    `Rude. 🙄`,
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
            bio: `Bow to the queen. 👑`, 
        },
        posts: [
            { 
                description: `That's Queen Purr to you. 👸`, 
                comments: [
                    `Aura, you remind me of a certain Regina George. 😂`, 
                    `Yas queen!! Rule your kingdom. 🙌`, 
                    `All hail Queen Purr, the most regal cat on the gram. 👑`,
                    `Don't mess with Aura, she's got that queen energy. 💪`,
                    `I respect the sass! 😝`, 
                ], 
            }, 
            { 
                description: `Same same. 💅`, 
                comments: [
                    `Royalty. Both of you! 👑`, 
                    `Identical! 👸👸`, 
                    `Aura, your sass is unparalleled. 💁‍♀️`,
                    `Your confidence is inspiring, Aura! Teach us your ways. 😻`,
                    `Cut from the same fabric!`, 
                ], 
            }, 
            { 
                description: `Fall vibes. 🍁🍂`, 
                comments: [
                    `Loving the aesthetic, Aura! 🧡`, 
                    `Boss. 😍`, 
                    `Looking like a true fall queen, Aura! 😍`,
                    `Fall feels! 🍂`, 
                ], 
            }, 
            { 
                description: `PSL szn!`, 
                comments: [
                    `Obsessed! ☕️🎃`, 
                    `Pumpkin spice and everything nice! 😍`, 
                    `Fall looks great on you! 🧡`,
                    `Enjoy! 😻`,
                    `Drink up! ☕️`,
                ], 
            }, 
            { 
                description: `Out here watching over my kingdom. 👑`, 
                comments: [
                    `Protect your kingdom! 👑`, 
                    `Your hooman is lucky to have such a vigilant protector like you, Aura! 👏`,
                    `Like the boss you are! 😎`,
                    `Your kingdom is in good paws with you around! 🐾`, 
                    `Majestic. ✨✨✨`,
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
            bio: `Catching hearts with my folded ears. 😻`, 
        },
        posts: [
            { 
                description: `Eyes are the window to the soul or whateva. 👁`, 
                comments: [
                    `Those eyes could pierce through any soul, Daisy! 😳`, 
                    `Your eyes are so big, they look drawn! 😍`, 
                    `Daisy's eyes are like two shiny marbles staring into my soul. 😂`, 
                    `Wow, they almost look fake! 😜`, 
                    `Daisy, your eyes are so beautiful! 😻`, 
                    `Stop looking at me with those things! 😂`, 
                ], 
            }, 
            { 
                description: `My presence is your present. 🎄🎁`, 
                comments: [
                    `Girl, relax. 😹`,
                    `I agree Daisy. 🥰`, 
                    `Who needs material things when we have Daisy's love? ❤️`, 
                    `Daisy, you're the gift that keeps on giving! 🎁`, 
                    `Every time I see Daisy, it feels like Christmas morning! 🎄`, 
                    `I don't need any presents as long as Daisy is here to brighten up my day! 💖`, 
                    `Your head is getting a little big Daisy. 😹`,
                ], 
            }, 
            { 
                description: `Halp. 💤 `, 
                comments: [
                    `You're about to drift asleep! 😂`, 
                    `Sleepy girl? 😴`, 
                    `I think Daisy's spirit animal is a sloth! 😜`, 
                ], 
            }, 
            { 
                description: `Hooman, why? I already groom myself! 🛀 `, 
                comments: [
                    `Where'd all the floof go?! 😹`,
                    `You look terrified! It's just a little water. 😂`, 
                    `About dang time! 😝`, 
                    `Stinky gang. ❤️`, 
                    `Oh no! 😩`, 
                ], 
            }, 
            { 
                description: `Bad angle! I swear I'm not this chonky! 🥲`, 
                comments: [
                    `T-rex arms. 🦖`,
                    `Daisy, you're not chunky, you're just extra fluffy! 😻`, 
                    `If that's what chunky looks like, I want to be chunky too! 😂`, 
                    `You're perfect! ❤️`, 
                    `Don't worry, Daisy, you're still beautiful no matter what angle the camera is at! 📸`, 
                    `More to love! Amarite? 😹`, 
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
            bio: `Gentle giant on a mission to break stereotypes. 🐾`, 
        },
        posts: [
            { 
                description: `Hey all! 🙋‍♀️ I'm Sadie. I'm a blue pit living in San Diego CA. 🌞 Don't let my build and stereotypes about my breed fool you, I'm actually a gentle giant and heart and love nothing more than to snuggle and cuddle with my humans. I also enjoy belly rubs, waggin' my tail, going to the beach 🌊, and making friends at the park 🤗.`, 
                comments: [
                    `You're such a sweetheart, Sadie Blue! 🥰`, 
                    `Big hugs to my favorite gentle giant! 🤗`, 
                    `Love you, Sadie! You're a perfect example of why we shouldn't judge dogs by their breed. 🐶❤️`,
                    `Aww, look at that face. You're the perfect example of how breed stereotypes are just wrong.`,
                    `Sadie, you're such a gentle soul. Don't let anyone tell you otherwise.`, 
                ], 
            }, 
            { 
                description: `84 pup years around the sun! 👵`, 
                comments: [
                    `You're getting more distinguished with age, Sadie. Like a fine wine. 🍷`, 
                    `You're just a wise old lady now. Happy birthday Sadie! 😂`, 
                    `Happy birthday, Sadie! 🎉🐾`,
                    `Don't worry, you're still young at heart! ❤️`,
                    `84 dog years young, Sadie! You're still a puppy at heart.`, 
                    `I can't believe how fast time flies. HBD!`, 
                    `Have a great birthday! ❤️`, 
                    `I hope you have an amazing day! 😊`, 
                    `Happy birthday Sadie!!`, 
                    `You look great for 84! 👵 Happy Birthday! ❤️`,
                ], 
            }, 
            { 
                description: `In my happy place. 🛁🌸🌹`, 
                comments: [
                    `QT 🥧`, 
                    `Looking beautiful as always, Sadie! 💕`, 
                    `That looks so relaxing! 🧖‍♀️`,
                    `Bathtime looks like heaven with you, Sadie! 🐾🧼`,
                    `Fun!`, 
                ], 
            }, 
            { 
                description: `Happy Valentine's Day everyone! ❤️❤️❤️❤️❤️❤️`, 
                comments: [
                    `Love you to the moon and back, Sadie! You're the best furry friend anyone could ask for.`, 
                    `Happy Valentine's Day to the sweetest pup I know! 😍❤️`, 
                    `Sending you all my love today, Sadie! ❤️🐾`,
                    `You make every day feel like Valentine's Day, Sadie! 😘❤️`,
                    `Happy Valentine's Day! 🥰`, 
                ], 
            }, 
            { 
                description: `Mom. This is so embarrassing. 🙈`, 
                comments: [
                    `OMG. 😂❤️`, 
                    `Don't worry, Sadie, you still look cute! 🐘😍`, 
                    `You rock that elephant outfit, Sadie! 🐾👌`,
                    `I'm sorry, but this is hilarious! 😂🙈`,
                    `You actually pulled this off! 💀`, 
                    `The ears look great on you! 😂`,
                    `QT 🥧`,
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
            bio: `Squirrely girl in a squirrely world. 🐿`, 
        },
        posts: [
            { 
                description: `When I was just a little baby. 🐣`, 
                comments: [
                    `I can't! 🥰`, 
                    `Aw, look at those tiny hands! 😍`, 
                    `You look the same! 🥰`,
                    `So precious! ✨`,
                    `OOMMGG 😭`,
                    `You were to tiny! 😭`,
                ], 
            }, 
            { 
                description: `Hai! 🙋‍♀️`, 
                comments: [
                    `Hi cutie! 😍`, 
                    `Hey there! 👋`, 
                    `What's up Acorn? 🤗`,
                    `Looking fierce as always! 🔥`,
                    `👋`, 
                    `Elo!`, 
                    `What up Acorn! 👋`,
                ], 
            }, 
            { 
                description: `Soaking up the Sunday sun. 🌞👙`, 
                comments: [
                    `Where's the kini?! 😂`,
                    `Living your best life I see! 😎`, 
                    `Suns out buns out! 🌭`,
                    `Soaking up the rays! 🏖️`, 
                    `☀️☀️☀️`,
                    `That looks so relaxing!`,
                    `It's officially summer! 🕶`, 
                ], 
            }, 
            { 
                description: `Remember that you are fabulous. 💖`, 
                comments: [
                    `Thanks for the reminder Acorn! 🥰`,
                    `As if we could forget! 😘`, 
                    `You're the definition of fabulous, Acorn! 👑`, 
                    `💕💕💕`,
                    `I needed this today! ✨`,
                    `Needed this. 🥰`,
                    `😭`,
                ], 
            }, 
            { 
                description: `This weather is not it y'all. ⛄️🤧 `, 
                comments: [
                    `Hang in there, Acorn! Spring will come soon enough! 🌸`, 
                    `You need a cup of hot cocoa stat! ☕`, 
                    `I feel you, the winter blues are real! 😔`,
                    `Looks to me like you're secretly enjoying this. 🤔😂`,
                    `Sending some virtual sunshine your way! ☀️🤗`, 
                    `But you look so cozy! ☺️`, 
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
            bio: `Mischief and adventure. 🦝`, 
        },
        posts: [
            { 
                description: `No paparazzi please! 📸`, 
                comments: [
                    `So staged! Looks like a selfie! 😆`,
                    `Always camera-ready! 😍📸`, 
                    `Someone get her a show! 🗣`, 
                    `Ain't no one following you around! 😂`,
                    `Next top model for sure! 🐾💃`,
                    `Remember us when you're famous! 😩`,
                ], 
            }, 
            { 
                description: `Avocado on erthang! 🥑`, 
                comments: [
                    `Those are the nicest avocados I've ever seen! 🤤`,
                    `So fancy!`, 
                    `I agree! 🤤🥑`, 
                    `On graham crackers tho? 🤮😂`,
                    `I'm coming over for avocado toast, Maple! 😋🥑`,
                    `Avocados are life!`, 
                    `I completely overlooked the graham crackers lol`, 
                ], 
            }, 
            { 
                description: `Almost got this walking thing down. 🚶`, 
                comments: [
                    `QT 🥧`,
                    `Your back looks broken haha.`,
                    `Idk about "almost". 😹`, 
                    `You'll be running on two paws in no time 😂`, 
                    `👏👏👏`,
                    `Egh. Idk. 😂`,
                    `You're practically a hooman. 🚶‍♂️`, 
                ], 
            }, 
            { 
                description: `Halp! 🙀`, 
                comments: [
                    `OMW, just hange on! Ha!`, 
                    `Hang on tight! 🙀`,
                    `You're crazy!`, 
                    `Just jump! You're only a few inches off the floor... 😂`, 
                    `Cut your nails! 😂`, 
                    `Drama queen. 😆`,
                ], 
            }, 
            { 
                description: `What's the serving size again? 🤪`, 
                comments: [
                    `I'd have as much as you want, and some! 🤣`, 
                    `Ayo save me a slice! 👀`, 
                    `One large pizza per raccoon obvi. 💁‍♀️ And don't let anyone tell you otherwise. 😂`,
                    `Pizza is life! Enjoy every bite. 🤤`,
                    `Can I get an invite tho? 👀`, 
                    `The whole dang thang! 😹`, 
                    `As much as you can handle. 🤪`,
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
                description: `RUN! 😳`, 
                comments: [
                    `Always ready for a run! Wait for me! 🏃‍♂️🐾`, 
                    `I hope you're not running away from bath time again Duke! It's time! 😂🛁`, 
                    `Not a good look Duke! 😆`,
                    `You look terrified! 😂`,
                    `Shooketh. 😳🤣`,
                    `When the hoomans catch you going through the snack drawer. 😂`,
                ], 
            }, 
            { 
                description: `🤪`, 
                comments: [
                    `😍🐾`, 
                    `Freeze! 🤪`,
                    `Silly Duke! 🐶`, 
                    `Candid moment! 📸`,
                    `Boy you goofy! 🤪`,
                    `You play too much. 😂`,
                ], 
            }, 
            { 
                description: `Umm.. who turned off the lights? 😰`, 
                comments: [
                    `🤡🤡🤡`,
                    `Silly Duke!`, 
                    `Let's go find you some light. 🕯️🐶`, 
                    `Har har har.. 😒`, 
                    `Looking good!`, 
                    `Model. 🕺`,
                ], 
            }, 
            { 
                description: `Made a new friend today. 🐞`, 
                comments: [
                    `I dare you to sneeze. 😂`, 
                    `Idk about that one.. 😰`,
                    `D'awe. 🥰🐞`, 
                    `I think the ladybug likes you! 💕`, 
                    `What happens if it goes up your nose? 😂`,
                    `Getting goosebumps just thinking about it walking on my nose. 😷`,
                    `Yeah I'm gonna pass on that! 😱`,
                ], 
            }, 
            { 
                description: `Fireworks are coming huh? 🧨🙀`, 
                comments: [
                    `Take a sedative! They're game-changing!`, 
                    `Ask your vet for meds!`,
                    `Don't be a weenie! 😂`, 
                    `Ugh. I hate them too. ☹️`,
                    `Going to light one up in front of your house! 😂`,
                    `What happened?! I thought you were tough! 😆`,
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
            bio: `Exploring the world with my stubby legs. 🐾`, 
        },
        posts: [
            { 
                description: `Ears to the weekend! 🥂`, 
                comments: [
                    `Awe Nutmeg! 😍`,
                    `Cheers to the weekend, Nutmeg! 🍻🐾`, 
                    `Dang boi! Ears for days!`, 
                    `Cheers to the ears! 🥂`,
                    `Paw-togenic! 📸`,
                    `Cheeears! 🤪`,
                ], 
            }, 
            { 
                description: `Boop! 🐽`, 
                comments: [
                    `Got your nose! 😂`, 
                    `Boop boop! 🐽🥰`,
                    `🐽🐽🐽`, 
                    `Dog or pig? 🐶🐷`,
                ], 
            }, 
            { 
                description: `Out here making snow angels! 👼🏻`, 
                comments: [
                    `Those are some tiny snow angels. 😂`,
                    `How are you not cold?!`, 
                    `So cute! 😊`, 
                ], 
            }, 
            { 
                description: `👻`, 
                comments: [
                    `I can barely see you! 😂`, 
                    `Tongue out Tuesday? Tongue out every day! 🤪`, 
                    `Where's the rest of you?!`,
                    `Looks like you're overheating. 😆`,
                ], 
            }, 
            { 
                description: `No 🧢`, 
                comments: [
                    `Looking good Nutmeg! 😎`, 
                    `Yellow looks great on you! 💛`, 
                    `New profile pic? 🤔`,
                    `Chilly dog. ❄️🌭`, 
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
            bio: `Big personality in a small package. 🐶`, 
        },
        posts: [
            { 
                description: `What I look like before coffee. ☕️`, 
                comments: [
                    `Same! It's a vice. 😰`, 
                    `Man I'm also addicted!`, 
                    `Hahaha! You and me both, Speckles!`,
                    `I'm a grumpy mess before my morning coffee too! 😂`,
                    `You always look like this tho! 💀`,
                    `For real! 💀🤣`, 
                ], 
            }, 
            { 
                description: `Roadtrip! 🚗`, 
                comments: [
                    `I'd be terrified if I was your pasanger. 😂`, 
                    `Eyes on the road! And buckle up!`, 
                    `Major pass if you're the driver. 🤣`,
                    `But the steering wheel is as big as your entire body. 😂`, 
                    `Idk about this one Specks. 😳`,
                ], 
            }, 
            { 
                description: `I’ve fallen for you 🍁`, 
                comments: [
                    `So romantic! Who's the lucky lady? 😏`, 
                    `Fall is my favorite season too! Can't wait for pumpkin spice lattes! ☕️`, 
                    `So corny! 😂`,
                    `D'awe, Speckles! 🥰`,
                    `Don't steal too many hearts this season! ☺️`, 
                    `So embarrassing Speckles. 😂`,
                ], 
            }, 
            { 
                description: `Gobble, Gobble! Happy Thanksgiving! 🦃`, 
                comments: [
                    `Happy Thanksgiving, Speckles! 😃`, 
                    `Eat all the turkey, stuffing, and treats you can handle! 🤗`, 
                    `Enjoy your day Specks! And most importantly, enjoy the food! 🍽`, 
                    `Feast! 🍗`,
                    `Gobble 'til you wobble! Happy Thanksgiving from our family to yours! 😌`, 
                ], 
            }, 
            { 
                description: `Chili dogs. ❄️`, 
                comments: [
                    `Don't forget your warmest coat! 🥶`, 
                    `Where's the snowman tho?! ⛄️`, 
                    `You blend right in! 😆`,
                    `You look so happy! ☺️`,
                    `D'awe! 🥰`, 
                    `In another life you'd be a husky! ❄️`,
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
            bio: `Exploring every corner of the world. ✨`, 
        },
        posts: [
            { 
                description: `Selfie game strong. 🤳 `, 
                comments: [
                    `Candid or staged moment? 🤨`, 
                    `Selfie game on point! 🤳`, 
                    `😍😍😍`,
                    `Photogenic af! 😍`,
                    `🔥`,
                    `Slay queen. 👸`, 
                    `Dang Sage! Way to make an appearance! 💃`, 
                ], 
            }, 
            { 
                description: `😸🍁🍂`, 
                comments: [
                    `🔥😍🔥😍🔥😍`,
                    `You're purrrfect! 😭🥰`,
                    `Did your ears get a little bigger? 🤪`, 
                    `Wow Sage! 😍`, 
                    `Living your best life!`,
                    `Ears for days! 😆`,
                    `Autumn vibes are the best vibes. 🍂`,
                    `I'm living vicariously through you! 🥰`, 
                ], 
            }, 
            { 
                description: `Close enough. 😂`, 
                comments: [
                    `The hoomans set you up! 😆`,
                    `Tomato tomahto. 😹`, 
                    `Idk about this hahaha`, 
                    `The leaning tower of Sage. 😂`,
                    `Looks like you're about to take off! ✈️`,
                    `Send this to influencers in the wild! 😂`, 
                ], 
            }, 
            { 
                description: `I'm a fierce dande-lion! 😻🌼`, 
                comments: [
                    `Slay 👸`, 
                    `Tongue out Tuesday! 😋`, 
                    `All you need is a dandelion crown! 👑`, 
                    `✨✨✨`,
                    `Majestic as always. ✨`,
                    `Pawtogenic! 🥰`, 
                ], 
            }, 
            { 
                description: `Stay present friends. 🧘‍♀️`, 
                comments: [
                    `Louder! 👏`,
                    `Looks like you're sleeping. 😆`,
                    `So much zen! 🕊`,
                    `Present and calm. 😌`, 
                    `🗣🗣🗣`,
                    `I usually end up falling asleep. 😅`,
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
            bio: `😽😸😺😻😼`, 
        },
        posts: [
            { 
                description: `Wise beyond my years. 🧐`, 
                comments: [
                    `Man, sit yoself down. 🤣`, 
                    `According to who?! 😹`, 
                    `If you're 1 year old, maybe! And even then! 😂`, 
                    `... 👀`,
                    `💀 after reading these comments.`,
                    `Ollie. Come on. 😂`, 
                ], 
            }, 
            { 
                description: `14-pound, apartment-range, tuna-fed fluffball. Happy Thanksgiving homies! 🦃`, 
                comments: [
                    `14lbs?! Chonkie boi! 🤣`, 
                    `Happy Thanksgiving Ollie! I hope you get all the turkey and tuna you want.`, 
                    `Thankful for you Oliver! ❤️`, 
                    `Happy Thanksgiving to you and your family! 🦃`,
                    `Happy TG bruh! 🤗`,
                    `Happy Thanksgiving, you little turkey. 😂`, 
                    `That's a big ol' turkey! 🤣`,
                ], 
            }, 
            { 
                description: `Nothing like starting the morning with a tuna-spice latte from Pawbucks. ☕️`, 
                comments: [
                    `That sounds like the purrrfect way to start the day. 😉`, 
                    `Just realized it's the time of the year again! ☕️`, 
                    `They should pay you to model the drink. 💃`,
                    `Ooof that does sound bomb! 🤤`,
                    `🔥`, 
                ], 
            }, 
            { 
                description: `Found the cure for Monday scaries! 🥱`, 
                comments: [
                    `💀💀💀`,
                    `This is GENIUS! 😂`, 
                    `Trying this on Tuesday. Will report back. 🤪`,  
                    `Monday blues. 😩`, 
                    `Silly cat. 😹`,
                    `Taking a page out of your book next Monday. 🤣`,
                    `I'm gonna do this every day of the week! 🤪`,
                ], 
            }, 
            { 
                description: `I do wut I want! 😤`, 
                comments: [
                    `You rebel!`, 
                    `On our terms! 😤`, 
                    `We all know this is just a front! 😂`,
                    `Until you're put in timeout. 💀`,
                    `Tell 'em Ollie! 😈`, 
                    `Louder for the hoomans in the back! 🗣`, 
                ], 
            }, 
        ], 
    },
]; 

module.exports = data; 
