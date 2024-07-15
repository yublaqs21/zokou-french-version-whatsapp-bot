const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'map',
        categorie: 'HALO INFINITE'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/84abf7bec58b08b513e83.jpg';
            const msg = `🗺 Map

⭕️ 𝙷𝚊𝚕𝚘 𝙸𝚗𝚏𝚒𝚗𝚒𝚝𝚎 ᗰᗩᑭ 🗺
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
𝘓𝘦 𝘜𝘯𝘪𝘵𝘦𝘥 𝘕𝘢𝘵𝘪𝘰𝘯𝘴 𝘚𝘱𝘢𝘤𝘦 𝘊𝘰𝘮𝘮𝘢𝘯𝘥 (𝘜𝘕𝘚𝘊) 𝘦𝘴𝘵 𝘭'𝘰𝘳𝘨𝘢𝘯𝘪𝘴𝘢𝘵𝘪𝘰𝘯 𝘨𝘰𝘶𝘷𝘦𝘳𝘯𝘦𝘮𝘦𝘯𝘵𝘢𝘭𝘦 𝘱𝘳𝘪𝘯𝘤𝘪𝘱𝘢𝘭𝘦 𝘥𝘦 𝘭'𝘶𝘯𝘪𝘷𝘦𝘳𝘴 𝘏𝘢𝘭𝘰. 𝘐𝘭 𝘦𝘴𝘵 𝘳𝘦𝘴𝘱𝘰𝘯𝘴𝘢𝘣𝘭𝘦 𝘥𝘦 𝘭𝘢 𝘱𝘭𝘢𝘯𝘪𝘧𝘪𝘤𝘢𝘵𝘪𝘰𝘯, 𝘥𝘦 𝘭'𝘰𝘳𝘨𝘢𝘯𝘪𝘴𝘢𝘵𝘪𝘰𝘯 𝘦𝘵 𝘥𝘦 𝘭'𝘦𝘹𝘦́𝘤𝘶𝘵𝘪𝘰𝘯 𝘥𝘦 𝘵𝘰𝘶𝘵𝘦𝘴 𝘭𝘦𝘴 𝘢𝘤𝘵𝘪𝘷𝘪𝘵𝘦́𝘴 𝘥𝘦 𝘥𝘦́𝘧𝘦𝘯𝘴𝘦 𝘮𝘪𝘭𝘪𝘵𝘢𝘪𝘳𝘦𝘴, 𝘥'𝘦𝘹𝘱𝘭𝘰𝘳𝘢𝘵𝘪𝘰𝘯 𝘴𝘱𝘢𝘵𝘪𝘢𝘭𝘦 𝘦𝘵 𝘥𝘦 𝘥𝘦́𝘷𝘦𝘭𝘰𝘱𝘱𝘦𝘮𝘦𝘯𝘵 𝘵𝘦𝘤𝘩𝘯𝘰𝘭𝘰𝘨𝘪𝘲𝘶𝘦 𝘥𝘦 𝘭'𝘩𝘶𝘮𝘢𝘯𝘪𝘵𝘦́ 𝘴𝘶𝘳 𝘛𝘦𝘳𝘳𝘦 𝘦𝘵 𝘥𝘢𝘯𝘴 𝘭'𝘦𝘴𝘱𝘢𝘤𝘦.【ᗪISTᗩᑎᑕᗴ : Au centre de la Ville de Haro】

⟡⟡⟡⟡⟡⟡⟡𝑽𝒊𝒍𝒍𝒆 𝑯𝒂𝒓𝒐 ⟡⟡⟡⟡⟡⟡⟡⟡

〽️⍚ 𝘓𝘦𝘴 𝘣𝘢𝘴𝘦𝘴 𝘮𝘪𝘭𝘪𝘵𝘢𝘪𝘳𝘦𝘴🎖 : l'UNSC possède de nombreuses bases militaires à travers l'univers Halo, notamment sur la Terre, sur Mars, sur d'autres planètes colonisées et sur les engins spatials. 【ᗪISTᗩᑎᑕᗴ :15km De UNSC】
〽️⍚ 𝘓𝘦𝘴 𝘯𝘢𝘷𝘪𝘳𝘦𝘴 🚁𝘥𝘦 𝘤𝘰𝘮𝘣𝘢𝘵 : l'UNSC dispose également de plusieurs classes de navires de combat, notamment les destroyers, les croiseurs, les navires de combat au sol, les carries et les navires de support. 【ᗪISTᗩᑎᑕᗴ : 19km De UNSC】
〽️⍚ 𝘓𝘦𝘴 𝘪𝘯𝘴𝘵𝘢𝘭𝘭𝘢𝘵𝘪𝘰𝘯𝘴 ⭕️𝘴𝘱𝘢𝘵𝘪𝘢𝘭𝘦𝘴 : l'UNSC possède également plusieurs stations spatiales, dont la station spatiale "Pilar of Autumn", qui est considérée comme l'une des plus importantes installations spatiales de l'UNSC. 【ᗪISTᗩᑎᑕᗴ : 380km De UNSC】
〽️⍚ 𝘓𝘦𝘴 𝘤𝘰𝘮𝘱𝘭𝘦𝘹𝘦𝘴 🏢𝘥𝘦 𝘳𝘦𝘤𝘩𝘦𝘳𝘤𝘩𝘦 : l'UNSC possède également plusieurs complexes de recherche, notamment sur la planète Haro et sur d'autres planètes colonisées. 【ᗪISTᗩᑎᑕᗴ : 220km De UNSC】
〽️⍚ 𝘓𝘦𝘴 𝘳𝘶𝘪𝘯𝘦𝘴 𝘥'𝘢𝘯𝘤𝘪𝘦𝘯𝘴 𝘴𝘪𝘵𝘦𝘴 𝘥𝘦 𝘤𝘰𝘯𝘴𝘵𝘳𝘶𝘤𝘵𝘪𝘰𝘯🏗 : ces ruines sont les restes d'anciens sites de construction de l'UNSC, qui sont maintenant remplis deCreatures hostiles et d'infections, ce qui en fait un endroit dangereux pour les soldats de l'UNSC et les colons. 【ᗪISTᗩᑎᑕᗴ : 180km De UNSC】
〽️⍚ 𝘓𝘦𝘴 𝘮𝘰𝘯𝘵𝘢𝘨𝘯𝘦𝘴⛰ 𝘥𝘦 𝘭'𝘦𝘹𝘵𝘳𝘦̂𝘮𝘦-𝘯𝘰𝘳𝘥 : ces montagnes sont remplies deCreatures hostiles et d'infections, ainsi que de conditions climatiques difficiles, ce qui les rendent un endroit dangereux pour les soldiers de l'UNSC. 【ᗪISTᗩᑎᑕᗴ : 410km De UNSC】
〽️⍚ 𝘓𝘦𝘴 𝘳𝘪𝘷𝘪𝘦̀𝘳𝘦𝘴 𝘴𝘰𝘶𝘵𝘦𝘳𝘳𝘢𝘪𝘯𝘦𝘴 : ces rivières souterraines sont réputées pour être un endroit dangereux pour les soldiers de l'UNSC, car elles sont remplies deCreatures hostiles et d'infections, ainsi que de courants forts qui peuvent mener à la noyade. 【ᗪISTᗩᑎᑕᗴ :170km De UNSC】
〽️⍚ 𝘓𝘦𝘴 𝘮𝘪𝘯𝘦𝘴 🧨𝘥𝘦 𝘴𝘶𝘪𝘦 : ces mines sont remplies de suie, qui est un environnement difficile et imprévisible pour les soldiers de l'UNSC. 【ᗪISTᗩᑎᑕᗴ :370km De UNSC】
〽️⍚ 𝘓𝘢 𝘤𝘰̂𝘵𝘦 𝘯𝘰𝘳𝘥-𝘰𝘶𝘦𝘴𝘵 : cette région est connue pour ses plages immaculées et ses eaux cristallines, qui en font l'endroit idéal pour une randonnée en bord de mer. 【ᗪISTᗩᑎᑕᗴ :152km De UNSC】
〽️⍚ 𝘓𝘦𝘴 𝘮𝘰𝘯𝘵𝘢𝘨𝘯𝘦𝘴 ⛰𝘥𝘶 𝘴𝘶𝘥-𝘦𝘴𝘵 : cette région est basée à proximité d'une chaîne de montagnes qui offrent une vue imprenable sur les plaines de l'Est. 【ᗪISTᗩᑎᑕᗴ : 310km De UNSC】
〽️⍚ 𝘓𝘢 𝘧𝘰𝘳𝘦̂𝘵 🌳 𝘩𝘰𝘳𝘴 𝘷𝘪𝘭𝘭𝘦 : ces forêts sont un endroit de détente pour les soldats de l'UNSC et les colons à Haro. 【ᗪISTᗩᑎᑕᗴ : 370km(superficie 11km)De UNSC】
〽️⍚ 𝘓𝘦 𝘥𝘦́𝘴𝘦𝘳𝘵 🏜 𝘥𝘦 𝘭'𝘰𝘶𝘦𝘴𝘵 : cette région du désert est connue pour sa faune et ses formations rocheuses uniques. 【ᗪISTᗩᑎᑕᗴ :270km(superficie 9km)De UNSC】
〽️⍚ 𝘓𝘦 𝘭𝘢𝘤 𝘥𝘦 𝘭'𝘌𝘴𝘵 : cette région est un endroit de détente pour les soldats de l'UNSC et les Colons, avec une vue imprenable sur le lac et les montagnes à l'est. 【ᗪISTᗩᑎᑕᗴ : 99km De UNSC】
〽️⍚ 𝘓𝘢 𝘻𝘰𝘯𝘦 𝘪𝘯𝘧𝘦𝘤𝘵𝘦́𝘦🦠 : cette région est considérée comme très dangereuse pour tous les soldats de l'UNSC et les colons en raison des infections et des créatures hostiles qui y habitent. 【ᗪISTᗩᑎᑕᗴ : 180km De UNSC】
〽️⍚ 𝘓𝘦𝘴 𝘮𝘰𝘯𝘵𝘢𝘨𝘯𝘦𝘴⛰ 𝘥𝘶 𝘯𝘰𝘳𝘥-𝘦𝘴𝘵 : ces montagnes étaient autrefois un campement de la Covenants et ils sont remplis deCreatures hostiles et d'infections. 【ᗪISTᗩᑎᑕᗴ : 390km De UNSC】
〽️⍚ 𝘓𝘦𝘴 𝘤𝘢𝘷𝘦𝘳𝘯𝘦𝘴 𝘴𝘰𝘶𝘵𝘦𝘳𝘳𝘢𝘪𝘯𝘦𝘴🕳 : ces cavernes sont réputées pour être le lieu de stockage de technologies avancées de l'UNSC, les rendant un endroit dangereux pour les soldats qui veulent les récupérer. 【ᗪISTᗩᑎᑕᗴ : 320km De UNSC】
〽️⍚ 𝘓𝘦𝘴 𝘳𝘶𝘪𝘯𝘦𝘴 𝘥𝘦 𝘭'𝘦𝘯𝘵𝘳𝘦𝘱𝘳𝘪𝘴𝘦🏢 : ces ruines sont les restes d'une entreprise autrefois puissante, qui est maintenant rempli deCreatures hostiles et d'infections, ce qui en fait un endroit dangereux pour les soldats de l'UNSC et les colons.【ᗪISTᗩᑎᑕᗴ : 220km De UNSC】
〽️⍚ 𝘓𝘢 𝘷𝘪𝘭𝘭𝘦 🌌𝘥𝘦 𝘭'𝘌𝘴𝘵 : c'est la principale ville de Haro, où les membres de l'UNSC et les colons vivent ensemble. 【ᗪISTᗩᑎᑕᗴ : 120km De UNSC】
〽️⍚ 𝘓𝘦𝘴 𝘮𝘰𝘯𝘵𝘢𝘨𝘯𝘦𝘴 ⛰𝘥𝘦 𝘭'𝘌𝘴𝘵 : situées à l'tour de la ville de l'Est, ces montagnes sont un endroit de détente pour les soldats et les civils de l'UNSC. 【ᗪISTᗩᑎᑕᗴ :420km De UNSC】
〽️⍚ 𝘓𝘢 𝘧𝘢𝘭𝘢𝘪𝘴𝘦🗻 𝘥𝘦 𝘭'𝘌𝘴𝘵 : cette falaise est un endroit populaire pour observer les aurores boréales, qui sont souvent visibles à Haro. 【ᗪISTᗩᑎᑕᗴ : 297km De UNSC】
〽️⍚ 𝘓𝘦 𝘥𝘦𝘭𝘵𝘢🏅 𝘥𝘦 𝘭'𝘌𝘴𝘵 : cette région marécageuse est considérée comme l'endroit idéal pour l'observation de la faune et de la flore locales. 【ᗪISTᗩᑎᑕᗴ : 150km De UNSC】
〽️⍚ 𝘓𝘦𝘴 𝘱𝘭𝘢𝘪𝘯𝘦𝘴🎗 𝘥𝘦 𝘭'𝘌𝘴𝘵 : ces plaines sont l'endroit idéal pour l'élevage et la culture locale, ainsi que pour l'accueil des colons et des soldats de l'UNSC. 【ᗪISTᗩᑎᑕᗴ : 490km De UNSC】
〽️La Barrière de l'UNSC, également connue sous le nom de "barrière de l'UNSC", est un projet de sécurité établi par l'UNSC pour protéger les colons et les soldats de l'UNSC d'une menace extra-terrestre. Il s'agit d'un système de défense planétaire, qui se compose de plusieurs systèmes de défenses  【ᗪISTᗩᑎᑕᗴ :500km De UNSC】

▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
◈◈◈◈𝗣𝗥𝝝𝗖𝗘𝗗𝗨𝗥𝗘𝗦 ♻️◈◈◈◈`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'add',
        categorie: 'HALO INFINITE'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/66249d65d540e8efd3240.jpg';
            const msg = `*⭕️ ★〘 𝙷𝚊𝚕𝚘 𝙸𝚗𝚏𝚒𝚗𝚒𝚝𝚎 〙★ ⭕️*
░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔

『𝙸𝚗𝚟𝚎𝚗𝚝𝚊𝚒𝚛𝚎 𝙴𝚃 𝚂𝚝𝚊𝚝𝚒𝚜𝚝𝚒𝚚𝚞𝚎』

⭕ 𝙿𝚜𝚎𝚞𝚍𝚘 : 
⭕ 𝚁𝚊𝚗𝚔 :
⭕ 𝙲𝚢𝚋𝚎𝚛 𝚌𝚊𝚙𝚊𝚌𝚒𝚝𝚎́: SPARTAN / MARINE 

❖ ❮ 𝙸𝙽𝚅𝙴𝙽𝚃𝙰𝙸𝚁𝙴 ❯
···▸▸ _L'inventaire regroupe les objets (tenues, armes, nourriture) que vous pouvez garder ou jeter dès que vous commencez le jeu._
▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭
┌───❮ 𝙲𝙾𝙽𝚃𝙴𝙽𝚄 ❯───···▸▸
│╭────────────···▸
│▸  
│▸  
│▸  
│▸  
│╰───────────···▸▸
└────────────···▸
▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭

❖ ❮ 𝚂𝚃𝙰𝚃𝙸𝚂𝚃𝙸𝚀𝚄𝙴 ❯
▔▔▔▔▔▔▔▔▔▔▔▔▔▔
> ➪ 🧠IQ : 50/♾
> ➪💰OM: 550₩
> ➪ ♦️Vie : 120%
> ➪ 💎EXP: 50/200

▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭
┌───❮*Mission*❯───···▸▸
│╭────────────···▸
* │▸  `/`/`/Mission Réussi`/`/`/ ✅ : 00
* │▸  `/`/`/Mission Fail`/`/`/ ❌ : 00
│╰───────────···▸▸
└────────────···▸

*_Fiche validée par :*_ 
* 𝒀𝒖̂ 𝑪.𝑵𝒂𝒎𝒊𝒌𝒂𝒛𝒆 ᗩ⳽եɾმι 𝑻𝒉‡ 🎭
▔▔▔▔▔▔▔▔▔▔▔▔▔▔
░░░░░░░░░░░░░░░░░`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
