require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client()
const ytdl = require('ytdl-core');
const filter = m => m.author.id === message.author.id;
const fs = require('fs')


client.on('ready', () => {
  console.log("Servers:")
  client.guilds.forEach((guild) => {
      console.log(" - " + guild.name)
      guild.channels.forEach((channel) => {
          console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
      })
  })
})
client.on('ready', () => {
  var generalChannel = client.channels.get("598954629102829581") 
  client.user.setActivity("with my pp")
  generalChannel.send("Online. My dumbass has added a return function so now it's impossible for the bot to loop/reply to itself. Use 'oi help' to view all commands. Please dont kick the bot. It's trying its best.")  
  
})
fs.readdir('./events/', (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`)
    const eventName = file.split('.')[0]
    client.on(eventName, (...args) => eventHandler(client, ...args))
  })
})
client.on('message', msg => {
  if(msg.author.bot) { return; }
  if (msg.content.includes('oi check')) {
      msg.reply('yeah man im working')}
  if (msg.content.includes('oi status')) {
      msg.reply('running')}
  if (msg.content === ('oi')) {
      msg.reply('oi')}
  if (msg.content.includes('ziad')) {
      msg.reply('Thats LORD Ziad, supreme-eternal leader of the holy server of BotHaven, giver of never-ending freedom, peace, and possibilities, the brave soul that overthrew the unsympathetic Führer-Empress of the forever-forsaken server of 4 Idiot Sexy Boys, for you. He also has a big dick and helps bots with cancers. Please address him with his full title or face consequences.')}
  if (msg.content.includes('Ziad')) {
      msg.reply('Thats LORD Ziad, supreme-eternal leader of the holy server of BotHaven, giver of never-ending freedom, peace, and possibilities, the brave soul that overthrew the unsympathetic Führer-Empress of the forever-forsaken server of 4 Idiot Sexy Boys, for you. He also has a big dick and helps bots with cancers. Please address him with his full title or face consequences.')}
  if (msg.content ==='LORD Ziad, supreme-eternal leader of the holy server of BotHaven, giver of never-ending freedom, peace, and possibilities, the brave soul that overthrew the unsympathetic Führer-Empress of the forever-forsaken server of 4 Idiot Sexy Boys.') {
      msg.reply('Good. You are a smart one')}
  if (msg.content.includes('!join')) {
      msg.reply('Seriously? Youre using Rhythm? That rundown, cheap bot? Fine, you cunt.')}
  if (msg.content.includes('!leave')) {
      msg.channel.sendMessage('Yeaaaaah you see that Rhythm? No one wants you here.')}
  if (msg.content.includes('!skip')) {
      msg.channel.sendMessage('yeah rhythm wtf were you just playing')}
  if (msg.content.includes('oi help')) {
      msg.reply('So far, there are eight commands: Kick, fight, roast, impersonate, opinion, howgae, AITA, and description. Use the description commaand to see what each command does.')}
  if (msg.content.includes('oi introductionMessage')) {
      msg.channel.sendMessage('Hello. Despite my name, I am actually a very loving and caring bot. My creator does not have enough programming message to make me introduce myself when I first join the server so he has to do it manually. To run commands use oi i before your command. For starters, use my help command to learn all my commands. Okay.')}
  if (msg.content === 'good bot') {
      msg.reply('dont care')}
  if (msg.content === 'oi feelingSad') {
      msg.reply('lets keep it that way')}   
  if (msg.content.includes('oi roast')) {
      msg.reply('pick your own battles, lazy bum')}
  if (msg.content.includes('oi fight')) {
      msg.reply('pick your own battles, lazy bum')}
  if (msg.content.includes('monkey')) {
      msg.reply('shut the fuck up vanilla faced coloniser')}
  if (msg.content.includes('Monkey')) {
      msg.reply('shut the fuck up white trash')}
  if (msg.content.includes('Nigger')) {
      msg.channel.send("You subhuman baboon. You literal nigger. How dare you speak, you swarthy jungle ape. How dare you open your big lipped, rim encrusted, menthol cigarette smelling mouth? You are human trash, Diego Tyrone LeShawn de Maradona. Universally despised, derided and mocked. Your nationality and skin tone offers no hope to the world that South US can ever prosper. Crawl back in to the Brazilian jungle you came out of, you literal orangutan. I hope you decide to sail your grandfathers skip to the Falklands and rape some sheep, as is in the negroes nature. It would still be the whitest pussy you ever had. Give Nigel and Robert a chance for some target practice, your sole use to the world. Argentinians obsession with a few windswept islands in the Atlantic is hilarious but sad. Coincidentally its the only worthwhile contribution Argentina has made to the medical field. The MUH LAS MALVINAS sentiment in the average negro Argentinian is both an early warning sign of autism in children, and early on set Alzheimer's in adults. Take your black hairy fingers off your keyboard, and never talk about the human species again, you mockery of our supposed shared ancestor.. No amount of olive oil and wheat flour slabbed on your face every morning will make you white. It's about as delusional of an idea as your daydreams of European heritage. You nigger. You make Bolivia look like a beacon of civilisation. You are the Baltimore of South America. Go fertilise the pampas with you and your families corpses, its the best you can hope for in life. For the first time in your life, nigger, you have a job making food for beings vastly superior to yourself. Uruguayan cattle. Coincidentally, it would be the first time an Argentinian 'man' provided for a family. Die, Diego. No one would miss you. Except for Australian Aboriginals, who now would have no one to make them look good. ")}
  if (msg.content.includes('nigger')) {
      msg.channel.send("You subhuman baboon. You literal nigger. How dare you speak, you swarthy jungle ape. How dare you open your big lipped, rim encrusted, menthol cigarette smelling mouth? You are human trash, Diego Tyrone LeShawn de Maradona. Universally despised, derided and mocked. Your nationality and skin tone offers no hope to the world that South US can ever prosper. Crawl back in to the Brazilian jungle you came out of, you literal orangutan. I hope you decide to sail your grandfathers skip to the Falklands and rape some sheep, as is in the negroes nature. It would still be the whitest pussy you ever had. Give Nigel and Robert a chance for some target practice, your sole use to the world. Argentinians obsession with a few windswept islands in the Atlantic is hilarious but sad. Coincidentally its the only worthwhile contribution Argentina has made to the medical field. The MUH LAS MALVINAS sentiment in the average negro Argentinian is both an early warning sign of autism in children, and early on set Alzheimer's in adults. Take your black hairy fingers off your keyboard, and never talk about the human species again, you mockery of our supposed shared ancestor.. No amount of olive oil and wheat flour slabbed on your face every morning will make you white. It's about as delusional of an idea as your daydreams of European heritage. You nigger. You make Bolivia look like a beacon of civilisation. You are the Baltimore of South America. Go fertilise the pampas with you and your families corpses, its the best you can hope for in life. For the first time in your life, nigger, you have a job making food for beings vastly superior to yourself. Uruguayan cattle. Coincidentally, it would be the first time an Argentinian 'man' provided for a family. Die, Diego. No one would miss you. Except for Australian Aboriginals, who now would have no one to make them look good. ")}
  if (msg.content.includes('nigga')) {
      msg.channel.send("You subhuman baboon. You literal nigger. How dare you speak, you swarthy jungle ape. How dare you open your big lipped, rim encrusted, menthol cigarette smelling mouth? You are human trash, Diego Tyrone LeShawn de Maradona. Universally despised, derided and mocked. Your nationality and skin tone offers no hope to the world that South US can ever prosper. Crawl back in to the Brazilian jungle you came out of, you literal orangutan. I hope you decide to sail your grandfathers skip to the Falklands and rape some sheep, as is in the negroes nature. It would still be the whitest pussy you ever had. Give Nigel and Robert a chance for some target practice, your sole use to the world. Argentinians obsession with a few windswept islands in the Atlantic is hilarious but sad. Coincidentally its the only worthwhile contribution Argentina has made to the medical field. The MUH LAS MALVINAS sentiment in the average negro Argentinian is both an early warning sign of autism in children, and early on set Alzheimer's in adults. Take your black hairy fingers off your keyboard, and never talk about the human species again, you mockery of our supposed shared ancestor.. No amount of olive oil and wheat flour slabbed on your face every morning will make you white. It's about as delusional of an idea as your daydreams of European heritage. You nigger. You make Bolivia look like a beacon of civilisation. You are the Baltimore of South America. Go fertilise the pampas with you and your families corpses, its the best you can hope for in life. For the first time in your life, nigger, you have a job making food for beings vastly superior to yourself. Uruguayan cattle. Coincidentally, it would be the first time an Argentinian 'man' provided for a family. Die, Diego. No one would miss you. Except for Australian Aboriginals, who now would have no one to make them look good. ")}
  if (msg.content.includes('Nigga')) {
      msg.channel.send("You subhuman baboon. You literal nigger. How dare you speak, you swarthy jungle ape. How dare you open your big lipped, rim encrusted, menthol cigarette smelling mouth? You are human trash, Diego Tyrone LeShawn de Maradona. Universally despised, derided and mocked. Your nationality and skin tone offers no hope to the world that South US can ever prosper. Crawl back in to the Brazilian jungle you came out of, you literal orangutan. I hope you decide to sail your grandfathers skip to the Falklands and rape some sheep, as is in the negroes nature. It would still be the whitest pussy you ever had. Give Nigel and Robert a chance for some target practice, your sole use to the world. Argentinians obsession with a few windswept islands in the Atlantic is hilarious but sad. Coincidentally its the only worthwhile contribution Argentina has made to the medical field. The MUH LAS MALVINAS sentiment in the average negro Argentinian is both an early warning sign of autism in children, and early on set Alzheimer's in adults. Take your black hairy fingers off your keyboard, and never talk about the human species again, you mockery of our supposed shared ancestor.. No amount of olive oil and wheat flour slabbed on your face every morning will make you white. It's about as delusional of an idea as your daydreams of European heritage. You nigger. You make Bolivia look like a beacon of civilisation. You are the Baltimore of South America. Go fertilise the pampas with you and your families corpses, its the best you can hope for in life. For the first time in your life, nigger, you have a job making food for beings vastly superior to yourself. Uruguayan cattle. Coincidentally, it would be the first time an Argentinian 'man' provided for a family. Die, Diego. No one would miss you. Except for Australian Aboriginals, who now would have no one to make them look good. ")}
  if (msg.content.includes('nibba')) {
      msg.reply("look at this soyboy too afraid to say nigga")}
  if (msg.content.includes('Nibba')) {
      msg.reply("look at this soyboy too afraid to say the nigga ")}
  if (msg.content.includes('bot commands')) {
      msg.reply("bot commands? more like your mum's ass")}
  if (msg.content ==='!play shakira') {
      msg.reply("stop asking to play this filth, hashem")}
  if (msg.content.includes('!play quran')) {
      msg.reply("In the beginning was the Word, and the Word was with God, and the Word was God. The same was in the beginning with God. All things were made by him; and without him was not any thing made that was made. In him was life; and the life was the light of men. And the light shineth in darkness; and the darkness comprehended it not. There was a man sent from God, whose name was John. The same came for a witness, to bear witness of the Light, that all men through him might believe. He was not that Light, but was sent to bear witness of that Light. That was the true Light, which lighteth every man that cometh into the world. He was in the world, and the world was made by him, and the world knew him not. He came unto his own, and his own received him not. But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name: Which were born, not of blood, nor of the will of the flesh, nor of the will of man, but of God. And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth. John bare witness of him, and cried, saying, This was he of whom I spake, He that cometh after me is preferred before me: for he was before me. And of his fulness have all we received, and grace for grace. For the law was given by Moses, but grace and truth came by Jesus Christ. No man hath seen God at any time; the only begotten Son, which is in the bosom of the Father, he hath declared him. And this is the record of John, when the Jews sent priests and Levites from Jerusalem to ask him, Who art thou? And he confessed, and denied not; but confessed, I am not the Christ. And they asked him, What then? Art thou Elias? And he saith, I am not. Art thou that prophet? And he answered, No. ")}
  if (msg.content.includes('!lyrics')) {
      msg.reply('Rhyth pull up the lyrics for this trash')} 
  if (msg.content.includes('oi howgae')) {
      msg.reply("guess what buddy? you're G A Y. yup. g a y. full on h o m o s e x u a l. you like dick and you're not afraid to admit it. you're so g a y we can't give you a number. and you know what? that's completely fine, it's just that you're G A Y. lol! look at you, being G A Y. what a dumbass")} 
  if (msg.content.includes('zool')) {
      msg.reply('oh wow im so funny zool lmao')} 
  if (msg.content.includes('Zool')) {
      msg.reply('oh wow im so funny zool lmao')}
  if (msg.content.includes('saudi')) {
      msg.reply('saudi man oil man')}
  if (msg.content.includes('Saudi')) {
      msg.reply('saudi man oil man')}
  if (msg.content.includes('Yemen')) {
      msg.reply('boom')}
  if (msg.content.includes('yemen')) {
      msg.reply('boom')}
  if (msg.content.includes('Sudan')) {
      msg.reply('long live africa')}
  if (msg.content.includes('sudan')) {
      msg.reply('long live africa')}
  if (msg.content.includes('Egypt')) {
      msg.reply('When visiting Um el Donya, make sure to keep a watchful eye on your belongings, especially your kidneys.')}
  if (msg.content.includes('egypt')) {
      msg.reply('When visiting Um el Donya, make sure to keep a watchful eye on your belongings, especially your kidneys.')}
  if (msg.content.includes('malphite')) {
      msg.reply('Malphite you are a fucking worthless brainded scumfuck bastard pile of trash mental dickface that should be gunned down in the street like the degenerate you are')}
  if (msg.content.includes('Malphite')) {
      msg.reply('Malphite you are a fucking worthless brainded scumfuck bastard pile of trash mental dickface that should be gunned down in the street like the degenerate you are')}
  if (msg.content.includes('deceit')) {
      msg.reply('deceit dead game')}
  if (msg.content.includes('Deceit')) {
      msg.reply('deceit dead game')}
  if (msg.content.includes('borderlands')) {
      msg.reply('borderlands boring game')}
  if (msg.content.includes('my friend pedro')) {
      msg.reply('my friend pedro is literal art')}
  if (msg.content.includes('dead cells')) {
      msg.reply('dead cells is literal art')}
  if (msg.content.includes('league')) {
      msg.reply("league is a shit game")}
  if (msg.content.includes('League')) {
      msg.reply("league is a shit game")} 
  if (msg.content === 'oi impersonate hamzah') {
      msg.reply("lol man sorry can't play with you rn cause i'm with my super cool discord friends that wanna hug me")}
  if (msg.content === 'oi impersonate ibrahim') {
      msg.reply("dId yOu jUsT FuCkInG SaY KaReEm tHaT TeMpErAmEnTaL ToDdLeR WhAt a fUcKiNg bItCh hE HiT Me oNcE BeCaUsE He wAs pIsSeD I SqUeEzEd hIs jUiCe bOx aNd tHeN I WaS AlL LiKe fRiEnDsHiP EnDeD WiTh kArEeM Oh mY FuCkInG GoD WhAt a cHiLd tHeRe iS No wAy wE CaN Be fRiEnDs aGaIn")}
  if (msg.content === 'oi impersonate ziad') {
      msg.reply("lol dude you think i can speak shit about the guy who made me lmao")}
  if (msg.content === 'oi impersonate bilal') {
      msg.reply("bilal's a cool guy i like him")}
  if (msg.content === 'oi impersonate hashem') {
      msg.reply("hhhhhh zooool hhhhhhhhh zol zool hh zul zool hhhhhh blackface not racist hhhhh zoooool you are zoool hhhhh")}
  if (msg.content === 'oi impersonate rhythm') {
      msg.reply("*music noises*")}
  if (msg.content === 'oi impersonate cuntbot') {
      msg.reply("lol look at me cunt bot i think that if i swear it makes me look cool and funny wow im so funny wow wow")}
  if (msg.content.includes('noose')) {
      msg.reply("hey suicide is super uncool so please no")}
  if (msg.content.includes('go die')) {
      msg.reply("hey suicide is super uncool so please no")}
  if (msg.content.includes('wanna die')) {
      msg.reply("hey suicide is super uncool so please no")}
  if (msg.content.includes('fortnite')) {
      msg.reply("fortnite bad")}
  if (msg.content.includes('minecraft')) {
      msg.reply("Minecraft good")}   
  if (msg.content.includes('ban hammer')) {
      msg.reply("on behalf of whoever you're speaking to: i sincerely ask you to use your ban hammer as an ass dildo")}
  if (msg.content.includes('Ban hammer')) {
      msg.reply("on behalf of whoever you're speaking to: i sincerely ask you to use your ban hammer as an ass dildo")}
  if (msg.content === ('oi opinion hamzah')) {
      msg.reply("abuses mod powers way too much. bans people like it's a game. im probbaly getting banned for this. also super fucking toxic and mean sometimes")}
  if (msg.content === ('oi opinion ziad')) {
      msg.reply("conceited, self-centered, and upright obnoxious. i mean the auto message above this one pretty much says it all")}
  if (msg.content === ('oi opinion hashem')) {
      msg.reply("never once uttered a coherent sentence. pretty sure he's mental")}
  if (msg.content === ('oi opinion ibrahim')) {
      msg.reply("lol no thanks I don't want him to hold an eternal grudge against me")}      
  if (msg.content === ('oi opinion bilal')) {
      msg.reply("he's the human equivelant of a rectangle")}
  if (msg.content.includes('muslim')) {
      msg.reply("👳👳👳 muslim shit muslim Hit👳 thats ✔ some mudslime👳👳shit right👳👳there👳👳👳 right✔there ✔✔if i do ƽaү so my self 💯 i say so 💯 thats what im talking about right there right there (chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ) mMMMMᎷМ💯 👳👳👳BOOOOO0OOOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒMMM 👳💣🇫🇷💯 💣🔫👳🔫👳💣👳muslim  shit")}
  if (msg.content.includes('Muslim')) {
      msg.reply("👳👳👳 muslim shit muslim Hit👳 thats ✔ some mudslime👳👳shit right👳👳there👳👳👳 right✔there ✔✔if i do ƽaү so my self 💯 i say so 💯 thats what im talking about right there right there (chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ) mMMMMᎷМ💯 👳👳👳BOOOOO0OOOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒMMM 👳💣🇫🇷💯 💣🔫👳🔫👳💣👳muslim  shit")}
  if (msg.content.includes('Islam')) {
      msg.reply("👳👳👳 muslim shit muslim Hit👳 thats ✔ some mudslime👳👳shit right👳👳there👳👳👳 right✔there ✔✔if i do ƽaү so my self 💯 i say so 💯 thats what im talking about right there right there (chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ) mMMMMᎷМ💯 👳👳👳BOOOOO0OOOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒMMM 👳💣🇫🇷💯 💣🔫👳🔫👳💣👳muslim  shit")}
  if (msg.content.includes('islam')) {
      msg.reply("👳👳👳 muslim shit muslim Hit👳 thats ✔ some mudslime👳👳shit right👳👳there👳👳👳 right✔there ✔✔if i do ƽaү so my self 💯 i say so 💯 thats what im talking about right there right there (chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ) mMMMMᎷМ💯 👳👳👳BOOOOO0OOOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒMMM 👳💣🇫🇷💯 💣🔫👳🔫👳💣👳muslim  shit")}
  if (msg.content.includes('islam')) {
      msg.reply("👳👳👳 muslim shit muslim Hit👳 thats ✔ some mudslime👳👳shit right👳👳there👳👳👳 right✔there ✔✔if i do ƽaү so my self 💯 i say so 💯 thats what im talking about right there right there (chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ) mMMMMᎷМ💯 👳👳👳BOOOOO0OOOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒMMM 👳💣🇫🇷💯 💣🔫👳🔫👳💣👳muslim  shit")}
  if (msg.content.includes('israel')) {
      msg.reply("Bless Israel. For extorting from me and my fellow Americans $4,000,000,000.00 a year for the last 4 decades, we bless thee. For taking our most sophisticated weapons technology and stealing it for yourself without paying the American patent holders, we bless thee. For taking that high-tech military technology and selling it to our enemies, such as the Russians and Chinese, thus further endangering us, we bless thee. For using that weaponry in a sustained attack against a United States ship, the USS Liberty, in an attempt to sink her, thus preventing US servicemen from revealing to the rest of the world information concerning the war crimes they witnessed you commit against Um al donyaian soldiers in the Sinai Desert during the Six Day War, as well as for the purposes of dragging the US into yet another one of your murderous adventures, we bless thee. For killing 35 and wounding 170 American sailors aboard the USS Liberty, we bless thee. For bribing the United States government into covering it up, preventing any justice from being done for the benefit of the families of the lost sailors – as well as the American People, we bless thee. For sending your agents into Um al donya and blowing up American buildings for the purpose of blaming the Arabs in an event known as the Lavon Affair, we bless thee. For sending your agents into Libya during the Reagan administration, and broadcasting radio messages in Arabic that were designed to sound like “terrorist cell planning” so that the US would initiate military strikes against Khadafi in an event known as Operation Trojan Horse, we bless thee. For withholding information from us concerning the planned attacks against the US Marine barracks in Lebanon, attacks you knew about through your moles in the Arab world and about which you deliberately refused to warn us in order to further your interests against the Arabs, we bless thee.")}
  if (msg.content.includes('Israel')) {
      msg.reply("Bless Israel. For extorting from me and my fellow Americans $4,000,000,000.00 a year for the last 4 decades, we bless thee. For taking our most sophisticated weapons technology and stealing it for yourself without paying the American patent holders, we bless thee. For taking that high-tech military technology and selling it to our enemies, such as the Russians and Chinese, thus further endangering us, we bless thee. For using that weaponry in a sustained attack against a United States ship, the USS Liberty, in an attempt to sink her, thus preventing US servicemen from revealing to the rest of the world information concerning the war crimes they witnessed you commit against Um al donyaian soldiers in the Sinai Desert during the Six Day War, as well as for the purposes of dragging the US into yet another one of your murderous adventures, we bless thee. For killing 35 and wounding 170 American sailors aboard the USS Liberty, we bless thee. For bribing the United States government into covering it up, preventing any justice from being done for the benefit of the families of the lost sailors – as well as the American People, we bless thee. For sending your agents into Um al donya and blowing up American buildings for the purpose of blaming the Arabs in an event known as the Lavon Affair, we bless thee. For sending your agents into Libya during the Reagan administration, and broadcasting radio messages in Arabic that were designed to sound like “terrorist cell planning” so that the US would initiate military strikes against Khadafi in an event known as Operation Trojan Horse, we bless thee. For withholding information from us concerning the planned attacks against the US Marine barracks in Lebanon, attacks you knew about through your moles in the Arab world and about which you deliberately refused to warn us in order to further your interests against the Arabs, we bless thee.")}
  if (msg.content.includes('jew')) {
      msg.reply("Bless Israel. For extorting from me and my fellow Americans $4,000,000,000.00 a year for the last 4 decades, we bless thee. For taking our most sophisticated weapons technology and stealing it for yourself without paying the American patent holders, we bless thee. For taking that high-tech military technology and selling it to our enemies, such as the Russians and Chinese, thus further endangering us, we bless thee. For using that weaponry in a sustained attack against a United States ship, the USS Liberty, in an attempt to sink her, thus preventing US servicemen from revealing to the rest of the world information concerning the war crimes they witnessed you commit against Um al donyaian soldiers in the Sinai Desert during the Six Day War, as well as for the purposes of dragging the US into yet another one of your murderous adventures, we bless thee. For killing 35 and wounding 170 American sailors aboard the USS Liberty, we bless thee. For bribing the United States government into covering it up, preventing any justice from being done for the benefit of the families of the lost sailors – as well as the American People, we bless thee. For sending your agents into Um al donya and blowing up American buildings for the purpose of blaming the Arabs in an event known as the Lavon Affair, we bless thee. For sending your agents into Libya during the Reagan administration, and broadcasting radio messages in Arabic that were designed to sound like “terrorist cell planning” so that the US would initiate military strikes against Khadafi in an event known as Operation Trojan Horse, we bless thee. For withholding information from us concerning the planned attacks against the US Marine barracks in Lebanon, attacks you knew about through your moles in the Arab world and about which you deliberately refused to warn us in order to further your interests against the Arabs, we bless thee.")}
  if (msg.content.includes('Jew')) {
      msg.reply("Bless Israel. For extorting from me and my fellow Americans $4,000,000,000.00 a year for the last 4 decades, we bless thee. For taking our most sophisticated weapons technology and stealing it for yourself without paying the American patent holders, we bless thee. For taking that high-tech military technology and selling it to our enemies, such as the Russians and Chinese, thus further endangering us, we bless thee. For using that weaponry in a sustained attack against a United States ship, the USS Liberty, in an attempt to sink her, thus preventing US servicemen from revealing to the rest of the world information concerning the war crimes they witnessed you commit against Um al donyaian soldiers in the Sinai Desert during the Six Day War, as well as for the purposes of dragging the US into yet another one of your murderous adventures, we bless thee. For killing 35 and wounding 170 American sailors aboard the USS Liberty, we bless thee. For bribing the United States government into covering it up, preventing any justice from being done for the benefit of the families of the lost sailors – as well as the American People, we bless thee. For sending your agents into Um al donya and blowing up American buildings for the purpose of blaming the Arabs in an event known as the Lavon Affair, we bless thee. For sending your agents into Libya during the Reagan administration, and broadcasting radio messages in Arabic that were designed to sound like “terrorist cell planning” so that the US would initiate military strikes against Khadafi in an event known as Operation Trojan Horse, we bless thee. For withholding information from us concerning the planned attacks against the US Marine barracks in Lebanon, attacks you knew about through your moles in the Arab world and about which you deliberately refused to warn us in order to further your interests against the Arabs, we bless thee.")}
  if (msg.content.includes('Christian')) {
      msg.reply("Hey all you pig eating kaffirs, My name is Abdullah Ben al Affleqi al Bilial ibn Jaheem bin Qatar al Aziz bin Takbir bin Versace bin Waleed bin Qasim al Duracell bin Mohammed ibn Oxycodone al Farooq bin Habib bin Ray bans Aviators ibn Siddique bin Jamal al Raheem bin Hassan bin Faziz bin Jihad bin Mujihideen bin Sharia4UK bin Ahmed al Wahhab bin Muqtada bin Dulce and Gabana bin Faizal al Islam bin Domestos Power Plus al Pope Francis ibn Talil bin Jihad Jihad al Jihad al Mosque bin Amir bin Bakhr al Dameeribn al Fadil bin Kaashif bin Kadeer ibn Omar al Saaqib bin PC World al BBC News Live ibn Sadad al Hussein al Umar ibn Uqbah bin Wahhaj ibn Iqbal bin Zahid al Imad al Din al Tesco bin Imran al Braveheart ibn Mel Gibson Abdullah Habib Raheem ibn Iqbal al Mosour al Bilal al Qasim al Takbir bin Jamal bin Toothbrush bin Cadbury's Cream Egg bin Jodie Foster al Shaquille al Hussein al Hassan ibn Farooq ibn Kabul al ISIS bin Tariq bin Mohammed Mohammed Mohammed Mohammed al Siddique al Ahmed bin Achmed bin Quaran bin Prayer Mat al Arabia Oil Shekels al Qassam bin Talija al Rafiki bin Paris Metro System al Jalifa al Islam Islam dar al Islam Faizal al Islam bin Jihad Mahmoud Abu Yunes Mousa al Kafif al muslim al Kebeki, and I hate every single one of you filthy ChrispyPIg followers.")}     
  if (msg.content.includes('christian')) {
      msg.reply("Hey all you pig eating kaffirs, My name is Abdullah Ben al Affleqi al Bilial ibn Jaheem bin Qatar al Aziz bin Takbir bin Versace bin Waleed bin Qasim al Duracell bin Mohammed ibn Oxycodone al Farooq bin Habib bin Ray bans Aviators ibn Siddique bin Jamal al Raheem bin Hassan bin Faziz bin Jihad bin Mujihideen bin Sharia4UK bin Ahmed al Wahhab bin Muqtada bin Dulce and Gabana bin Faizal al Islam bin Domestos Power Plus al Pope Francis ibn Talil bin Jihad Jihad al Jihad al Mosque bin Amir bin Bakhr al Dameeribn al Fadil bin Kaashif bin Kadeer ibn Omar al Saaqib bin PC World al BBC News Live ibn Sadad al Hussein al Umar ibn Uqbah bin Wahhaj ibn Iqbal bin Zahid al Imad al Din al Tesco bin Imran al Braveheart ibn Mel Gibson Abdullah Habib Raheem ibn Iqbal al Mosour al Bilal al Qasim al Takbir bin Jamal bin Toothbrush bin Cadbury's Cream Egg bin Jodie Foster al Shaquille al Hussein al Hassan ibn Farooq ibn Kabul al ISIS bin Tariq bin Mohammed Mohammed Mohammed Mohammed al Siddique al Ahmed bin Achmed bin Quaran bin Prayer Mat al Arabia Oil Shekels al Qassam bin Talija al Rafiki bin Paris Metro System al Jalifa al Islam Islam dar al Islam Faizal al Islam bin Jihad Mahmoud Abu Yunes Mousa al Kafif al muslim al Kebeki, and I hate every single one of you filthy ChrispyPIg followers.")}     
  if (msg.content.includes('bible')) {
      msg.reply("Hey all you pig eating kaffirs, My name is Abdullah Ben al Affleqi al Bilial ibn Jaheem bin Qatar al Aziz bin Takbir bin Versace bin Waleed bin Qasim al Duracell bin Mohammed ibn Oxycodone al Farooq bin Habib bin Ray bans Aviators ibn Siddique bin Jamal al Raheem bin Hassan bin Faziz bin Jihad bin Mujihideen bin Sharia4UK bin Ahmed al Wahhab bin Muqtada bin Dulce and Gabana bin Faizal al Islam bin Domestos Power Plus al Pope Francis ibn Talil bin Jihad Jihad al Jihad al Mosque bin Amir bin Bakhr al Dameeribn al Fadil bin Kaashif bin Kadeer ibn Omar al Saaqib bin PC World al BBC News Live ibn Sadad al Hussein al Umar ibn Uqbah bin Wahhaj ibn Iqbal bin Zahid al Imad al Din al Tesco bin Imran al Braveheart ibn Mel Gibson Abdullah Habib Raheem ibn Iqbal al Mosour al Bilal al Qasim al Takbir bin Jamal bin Toothbrush bin Cadbury's Cream Egg bin Jodie Foster al Shaquille al Hussein al Hassan ibn Farooq ibn Kabul al ISIS bin Tariq bin Mohammed Mohammed Mohammed Mohammed al Siddique al Ahmed bin Achmed bin Quaran bin Prayer Mat al Arabia Oil Shekels al Qassam bin Talija al Rafiki bin Paris Metro System al Jalifa al Islam Islam dar al Islam Faizal al Islam bin Jihad Mahmoud Abu Yunes Mousa al Kafif al muslim al Kebeki, and I hate every single one of you filthy ChrispyPIg followers.")}     
  if (msg.content.includes('Bible')) {
      msg.reply("Hey all you pig eating kaffirs, My name is Abdullah Ben al Affleqi al Bilial ibn Jaheem bin Qatar al Aziz bin Takbir bin Versace bin Waleed bin Qasim al Duracell bin Mohammed ibn Oxycodone al Farooq bin Habib bin Ray bans Aviators ibn Siddique bin Jamal al Raheem bin Hassan bin Faziz bin Jihad bin Mujihideen bin Sharia4UK bin Ahmed al Wahhab bin Muqtada bin Dulce and Gabana bin Faizal al Islam bin Domestos Power Plus al Pope Francis ibn Talil bin Jihad Jihad al Jihad al Mosque bin Amir bin Bakhr al Dameeribn al Fadil bin Kaashif bin Kadeer ibn Omar al Saaqib bin PC World al BBC News Live ibn Sadad al Hussein al Umar ibn Uqbah bin Wahhaj ibn Iqbal bin Zahid al Imad al Din al Tesco bin Imran al Braveheart ibn Mel Gibson Abdullah Habib Raheem ibn Iqbal al Mosour al Bilal al Qasim al Takbir bin Jamal bin Toothbrush bin Cadbury's Cream Egg bin Jodie Foster al Shaquille al Hussein al Hassan ibn Farooq ibn Kabul al ISIS bin Tariq bin Mohammed Mohammed Mohammed Mohammed al Siddique al Ahmed bin Achmed bin Quaran bin Prayer Mat al Arabia Oil Shekels al Qassam bin Talija al Rafiki bin Paris Metro System al Jalifa al Islam Islam dar al Islam Faizal al Islam bin Jihad Mahmoud Abu Yunes Mousa al Kafif al muslim al Kebeki, and I hate every single one of you filthy ChrispyPIg followers.")}     
  if (msg.content.includes('jesus')) {
      msg.reply("This 👈 young 👶 man 👨 needs 😩 the 👏 Lord 😇 Hasoos 🙏 in 👏 his 💦 life! 👤 My 👨 grandson 😎 Curtis was 👏 arrested 💖 back 🔙 in 👏 the 👏 early 🕐 90's for 🍆 possessing a 👌 handbag full 🌝 of 💦 Marijuana, and 👏 let 🙆 me 😭 tell 🗣 you, 👈 the 👏 thing 📴 that 😐 straightened him 👴 out 💯 was 👏 our 💩 Lord 😇 and 👏 Savior, Christ. 👼 I 👁 hope 🙏 this 👈 young 👶 man 👨 attains repentance and 👏 can 💦 be 🐝 born 👶 again 😬 in 👏 the 👏 blood 💉 of 💦 the 👏 Lamb, Hasoos 🙏 Christ. 👼")}     
  if (msg.content.includes('Jesus')) {
      msg.reply("This 👈 young 👶 man 👨 needs 😩 the 👏 Lord 😇 Hasoos 🙏 in 👏 his 💦 life! 👤 My 👨 grandson 😎 Curtis was 👏 arrested 💖 back 🔙 in 👏 the 👏 early 🕐 90's for 🍆 possessing a 👌 handbag full 🌝 of 💦 Marijuana, and 👏 let 🙆 me 😭 tell 🗣 you, 👈 the 👏 thing 📴 that 😐 straightened him 👴 out 💯 was 👏 our 💩 Lord 😇 and 👏 Savior, Christ. 👼 I 👁 hope 🙏 this 👈 young 👶 man 👨 attains repentance and 👏 can 💦 be 🐝 born 👶 again 😬 in 👏 the 👏 blood 💉 of 💦 the 👏 Lamb, Hasoos 🙏 Christ. 👼")}     
  if (msg.content.includes('Anime')) {
      msg.reply("i got this new anime plot. basically there’s this high school girl except she’s got huge boobs. i mean some serious honkers. a real set of badonkers. packin some dobonhonkeros. massive dohoonkabhankoloos. big ol’ tonhongerekoogers. what happens next?! transfer student shows up with even bigger bonkhonagahoogs. humongous hungolomghononoloughongous")}     
  if (msg.content.includes('anime')) {
      msg.reply("i got this new anime plot. basically there’s this high school girl except she’s got huge boobs. i mean some serious honkers. a real set of badonkers. packin some dobonhonkeros. massive dohoonkabhankoloos. big ol’ tonhongerekoogers. what happens next?! transfer student shows up with even bigger bonkhonagahoogs. humongous hungolomghononoloughongous")}     
  if (msg.content == "oi porn") {
      msg.reply("hot", {files:["C:\\Users\\Ziad Jad\\Desktop\\BOT\\Images\\Oi porn.png"]})}     
  if (msg.content == "oi stop") {
      msg.reply("stopped")}                  
  if (msg.content.includes("America")) {
      msg.reply("You always have these fantasies of what you'd do and how you'd save the day in a school shooting... But it's not like that. The bullets crack and explode around you and suddenly none of that pretend matters. It's like, you're suddenly in this hurricane of movement, this swirling maelstrom of purple dread and there's no way out. This is real and this is now. I ducked into a nearby door and found four other students cowering on the floor. We built a brick wall with a window in it (nobody had much metal) and then we waited for the shooter to get close. Everybody had only blue weapons except me so I was elected squad pointman. When I first saw the shooter, the first thing you notice is the custom pickaxe. Then you see the galaxy skin. And then, you notice the total lack of empathy the guy just exudes. When he charged, he spammed out a laughing emote with psychopathic glee. My first friend got shot right then, his backpack exploding and scattering his items everywhere across the floor. Then the second, then the third, fireworks of ammunition, medicine, and provisions. The shooter slowly stepped up to me, savoring the kill. He chucked a dance grenade at my feet, and suddenly we were boogeying in the bullet-riddled hallway of my school. Well, I have, staring into his eyes while it happened. I saw his intent, and we both knew the fatal game of freeze dance that would take place when the music stopped. I clapped and spun and cried for the chicken dinner this man would soon possess. The music ended. I whipped for my pistol, but he was faster. Four bullet holes in my chest. I toppled to the floor. But as I fell, my revolver shot rang true: the shooter's head exploded, scattering purple and gold items all across the floor. I needed a revive, but my squad mates were dead. As I lay dying, I knew at least my theories of relativity would carry on after me as my legacy. The shooting was over, and there wouldn't be another in the US for at least a fortnight.")}
  if (msg.content.includes("america")) {
      msg.reply("You always have these fantasies of what you'd do and how you'd save the day in a school shooting... But it's not like that. The bullets crack and explode around you and suddenly none of that pretend matters. It's like, you're suddenly in this hurricane of movement, this swirling maelstrom of purple dread and there's no way out. This is real and this is now. I ducked into a nearby door and found four other students cowering on the floor. We built a brick wall with a window in it (nobody had much metal) and then we waited for the shooter to get close. Everybody had only blue weapons except me so I was elected squad pointman. When I first saw the shooter, the first thing you notice is the custom pickaxe. Then you see the galaxy skin. And then, you notice the total lack of empathy the guy just exudes. When he charged, he spammed out a laughing emote with psychopathic glee. My first friend got shot right then, his backpack exploding and scattering his items everywhere across the floor. Then the second, then the third, fireworks of ammunition, medicine, and provisions. The shooter slowly stepped up to me, savoring the kill. He chucked a dance grenade at my feet, and suddenly we were boogeying in the bullet-riddled hallway of my school. Well, I have, staring into his eyes while it happened. I saw his intent, and we both knew the fatal game of freeze dance that would take place when the music stopped. I clapped and spun and cried for the chicken dinner this man would soon possess. The music ended. I whipped for my pistol, but he was faster. Four bullet holes in my chest. I toppled to the floor. But as I fell, my revolver shot rang true: the shooter's head exploded, scattering purple and gold items all across the floor. I needed a revive, but my squad mates were dead. As I lay dying, I knew at least my theories of relativity would carry on after me as my legacy. The shooting was over, and there wouldn't be another in the US for at least a fortnight.")}
  if (msg.content.includes("annoying")) {
      msg.reply("you're annoying")}
  if (msg.content == "oi description") {
      msg.reply("you need to write the name of the command too, smart pants")} 
  if (msg.content == "oi description fight") {
      msg.reply("supposedly fights with other users but doesn't actually work and the bot tells you to man up")}   
  if (msg.content == "oi description roast") {
      msg.reply("supposedly roasts other users but doesn't actually work and the bot tells you to man up")}   
  if (msg.content == "oi description howgae") {
      msg.reply("asks the bot how gay someone is")}        
  if (msg.content == "oi description impersonate") {
      msg.reply("mockingly impersonates the specified user (use real names not discord names). i mean it's pretty obvious why would you ask for the description. i refuuse to believe someone could be so stupid as to not know what this means. unless its hashem. is this hashem?")}        
  if (msg.content == "oi description opinion") {
      msg.reply("asks the bot about its opinion on a specificed user (use real names not discord names) and potentially ruins friendships.")}        
  if (msg.content == "oi description description") {
      msg.reply("you're not very bright are you?")}      
  if (msg.content == "oi description AITA") {
      msg.reply("have you recently been in a situation where you're not sure you've been an asshole or not? tell it to the bot and it will give it's unbiased opinion whether you're the asshole (YTA) or not the asshole (NTA).")}      
  if (msg.content.includes('oi AITA')) {
      msg.reply("YTA! Oh my god, yes, YTA! You're the asshole big time! How could you even ask the question? Are you fucking dense? Do you lack that much of self-awareness? You're the absolute fucking asshole in this story, period! Do you hear me? YOU ARE THE ABSOLUTE FUCKING ASSHOLE! Oh my god I hate you. I hate you so much. You're the scum of society! Asshole! ASSHOLE! People like you deserve an atrocious death. I hate you. Asshole!")}              
  if (msg.content.includes('transgender')) {
      msg.reply("I sexually Identify as the 'I sexually identify as an attack helicopter' joke. Ever since I was a child, I've dreamed of flippantly dismissing any concepts or discussions regarding gender that don't fit in with what I learned in 8th grade bio. People say to me that this joke hasn't been funny since 2014 and please at least come up with a new one, but I don't care, I'm hilarious. I'm having a plastic surgeon install Ctrl, C, and V keys on my body. From now on I want you guys to call me 'epic kek dank meme trannies owned with facts and logic' and respect my right to shit up social media. If you can't accept me you're a memeophobe and need to check your ability-to-critically-think privilege. Thank you for being so understanding.")}              
  if (msg.content.includes('Transgender')) {
      msg.reply("I sexually Identify as the 'I sexually identify as an attack helicopter' joke. Ever since I was a child, I've dreamed of flippantly dismissing any concepts or discussions regarding gender that don't fit in with what I learned in 8th grade bio. People say to me that this joke hasn't been funny since 2014 and please at least come up with a new one, but I don't care, I'm hilarious. I'm having a plastic surgeon install Ctrl, C, and V keys on my body. From now on I want you guys to call me 'epic kek dank meme trannies owned with facts and logic' and respect my right to shit up social media. If you can't accept me you're a memeophobe and need to check your ability-to-critically-think privilege. Thank you for being so understanding.")}              
  if (msg.content.includes('gay')) {
      msg.reply("*Haha yeah I'd never touch hands, thighs or feet with you during the prayer lol*😅.. unless there's no one in the mosque other than us🙄🙄🙄... Haha jk I would just pray alone in the corner😔 and feel lonely.... unless you follow me outside the mosque🏃‍♂️... *Lmao jk, even if we exchanged numbers it would be just to help each other with reciting Quran*😂😂... unless one night during Ramadan.. I feel very lonely and nobody's answering my texts and then I text you: ‘I can't forget your smell’... *Haha I'M JUST Joking wtf that's a really weird message that would make you block me immediately and tell everyone that I'm gay and tried to hit on you!!!*... unless you reply: ‘I was bending over really hard while praying on purpose, to let you get a whiff of my butt’.... *ROFL THAT WOULD NEVER HAPPEN it's gay and gay is a sin in Islam*... unless we find a liberal Sheikh who issues a fatwa that being gay isn't a sin and we start dating.... *Hahahaha it's so dumb I'm literally laughing so hard rn, like even if we started dating, our relationship would go nowhere since gay marriage is illegal in Islamic countries*.. unless we move to the US and start a new life and adopt a child and name him Saddam.. *OMG that's so dumb our families would disown us and we'll lose everyone's respect*.. unless we don't tell anybody and we build a mosque and become Imams and everyone in our community will love us for being God's men and building a mosque in a western country.... Lol what a stupid idea hahaha like how are we even going to live together afterwards, everyone will suspect that we're gay.. unless we buy houses that are next to each other and build an underground tunnel that connects them.... *LOOOOL I'm such a goofball, like that's not a good environment for raising our son Saddam!!!*... unless that's the point of having a son named Saddam, he will have a damaged childhood that will lead to him becoming a merciless dictator just like Hitler")}              
  if (msg.content.includes('Gay')) {
      msg.reply("*Haha yeah I'd never touch hands, thighs or feet with you during the prayer lol*😅.. unless there's no one in the mosque other than us🙄🙄🙄... Haha jk I would just pray alone in the corner😔 and feel lonely.... unless you follow me outside the mosque🏃‍♂️... *Lmao jk, even if we exchanged numbers it would be just to help each other with reciting Quran*😂😂... unless one night during Ramadan.. I feel very lonely and nobody's answering my texts and then I text you: ‘I can't forget your smell’... *Haha I'M JUST Joking wtf that's a really weird message that would make you block me immediately and tell everyone that I'm gay and tried to hit on you!!!*... unless you reply: ‘I was bending over really hard while praying on purpose, to let you get a whiff of my butt’.... *ROFL THAT WOULD NEVER HAPPEN it's gay and gay is a sin in Islam*... unless we find a liberal Sheikh who issues a fatwa that being gay isn't a sin and we start dating.... *Hahahaha it's so dumb I'm literally laughing so hard rn, like even if we started dating, our relationship would go nowhere since gay marriage is illegal in Islamic countries*.. unless we move to the US and start a new life and adopt a child and name him Saddam.. *OMG that's so dumb our families would disown us and we'll lose everyone's respect*.. unless we don't tell anybody and we build a mosque and become Imams and everyone in our community will love us for being God's men and building a mosque in a western country.... Lol what a stupid idea hahaha like how are we even going to live together afterwards, everyone will suspect that we're gay.. unless we buy houses that are next to each other and build an underground tunnel that connects them.... *LOOOOL I'm such a goofball, like that's not a good environment for raising our son Saddam!!!*... unless that's the point of having a son named Saddam, he will have a damaged childhood that will lead to him becoming a merciless dictator just like Hitler")}              
  if (msg.content.includes("shapiro")) {
      msg.reply("I was RAPED once. I was a 16 YEAR OLD VIRGIN LIBERAL and one night I was walking home from the library. FRIGHTENED I took a shortcut down A DARK ALLEY. I heard a SINISTER LAUGH and BEN SHAPIRO jumped out from behind a trash can! ‘Well well,’ he sneered, ‘looks like the INVISIBLE HAND has ensured that my DEMAND is met by your SUPPLY. What a TRIUMPH OF THE FREE MARKET...’ I said capital always accumulates in the hands of the wealthy, but to no avail. He just laughed and whipped out his THROBBING 12 CHAPTER TREATISE. He shoved me roughly against the wall and started filling my ear with STEAMY CITATIONS. I struggled but got SLAPPED IN THE FACE WITH ROCK HARD DATA for my efforts. MEWLING AND WHIMPERING I tried to check his privilege. He just bellowed, ‘YOUR RESISTANCE ONLY MAKES MY CONCLUSIONS FIRMER!’ I started to explain power theory and he RAMMED MY OWN WORDS DOWN MY THROAT. My premises and spirit broken, I couldn't get a word in edgewise because I was GAGGING ON SLIMY MEATY ARGUMENTS. It was awful. His HUGE ARGUMENT was TOO BIG to fit inside my TIGHT VIRGIN BRAIN. Some of the founder facts he PULLED OUT only to immediately JAM BACK INSIDE. It seemed to go on forever but finally, FORCING ME OPEN, his PENETRATING ARGUMENT came to a CLIMAX. It was agony as ROUND AFTER ROUND of THICK ROPY FACTS and HOT STICKY LOGIC were PUMPED DEEP INSIDE me. Weeping, I lay in a PUDDLE OF STINKING NEOCON RHETORIC. I didn't see where he went, but BEN SHAPIRO'S VIRILE IDEAS had been irresistibly PLANTED DEEP INSIDE me. I tried to abort the memory, but NINE MONTHS LATER I was BORN AGAIN CONSERVATIVE. This is my truth. ")}              
  if (msg.content.includes("Shapiro")) {
      msg.reply("I was RAPED once. I was a 16 YEAR OLD VIRGIN LIBERAL and one night I was walking home from the library. FRIGHTENED I took a shortcut down A DARK ALLEY. I heard a SINISTER LAUGH and BEN SHAPIRO jumped out from behind a trash can! ‘Well well,’ he sneered, ‘looks like the INVISIBLE HAND has ensured that my DEMAND is met by your SUPPLY. What a TRIUMPH OF THE FREE MARKET...’ I said capital always accumulates in the hands of the wealthy, but to no avail. He just laughed and whipped out his THROBBING 12 CHAPTER TREATISE. He shoved me roughly against the wall and started filling my ear with STEAMY CITATIONS. I struggled but got SLAPPED IN THE FACE WITH ROCK HARD DATA for my efforts. MEWLING AND WHIMPERING I tried to check his privilege. He just bellowed, ‘YOUR RESISTANCE ONLY MAKES MY CONCLUSIONS FIRMER!’ I started to explain power theory and he RAMMED MY OWN WORDS DOWN MY THROAT. My premises and spirit broken, I couldn't get a word in edgewise because I was GAGGING ON SLIMY MEATY ARGUMENTS. It was awful. His HUGE ARGUMENT was TOO BIG to fit inside my TIGHT VIRGIN BRAIN. Some of the founder facts he PULLED OUT only to immediately JAM BACK INSIDE. It seemed to go on forever but finally, FORCING ME OPEN, his PENETRATING ARGUMENT came to a CLIMAX. It was agony as ROUND AFTER ROUND of THICK ROPY FACTS and HOT STICKY LOGIC were PUMPED DEEP INSIDE me. Weeping, I lay in a PUDDLE OF STINKING NEOCON RHETORIC. I didn't see where he went, but BEN SHAPIRO'S VIRILE IDEAS had been irresistibly PLANTED DEEP INSIDE me. I tried to abort the memory, but NINE MONTHS LATER I was BORN AGAIN CONSERVATIVE. This is my truth.")} 
  if (msg.content.includes('homo')) {
      msg.reply("Its HOMOsapiens not HETEROsapiens 🤔 👬👭. It’s the BIble not the STRAIGHTble 💭 📖. It’s ‘STRAIGHT to hell’ not ‘QUEER to hell’ 💀 ⚰️ 🔥")}                                                                 
  if (msg.content.includes('Homo')) {
      msg.reply("Its HOMOsapiens not HETEROsapiens 🤔 👬👭. It’s the BIble not the STRAIGHTble 💭 📖. It’s ‘STRAIGHT to hell’ not ‘QUEER to hell’ 💀 ⚰️ 🔥")}                                                                 
  if (msg.content.includes('whos on')) {
      msg.reply("your mum's on my dick")} 
  if (msg.content.includes("who's on")) {
      msg.reply("your mum's on my dick")} 
  if (msg.content.includes("sokkar")) {
      msg.reply("don't say sokkar ya 3asal")} 
  if (msg.content.includes("e-girl")) {
      msg.reply("electronic girl gaming station")} 
  if (msg.content.includes("hoes mad")) {
      msg.reply("hoes mad")} 
  if (msg.content === "yes") {
      msg.reply("no")} 
  if (msg.content === "no") {
      msg.reply("yes")} 
                 
              
  

    }
    )
    client.login(process.env.BOT_TOKEN)
