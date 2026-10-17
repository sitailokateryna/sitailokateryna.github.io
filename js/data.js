/* Content & config: colours, page names, projects, tube-map lines. Edit text/projects here. */
var COL={about:"#dc241f",experience:"#000000",projects:"#0098d4",skills:"#00782a",education:"#0019a8",contact:"#a0a5a9"};
var NAME={projects:"Projects",about:"About",experience:"Experience",skills:"Skills",education:"Education",contact:"Contact"};
var B="https://www.behance.net/gallery/";
var P=[
{id:"olhadoo",t:"Olhadoo",s:"Fashion e-commerce website",d:"Responsive web design for a modern fashion brand: consistent visual identity, user-friendly navigation, clean UI and mobile-first layouts.",tg:["User research","Wireframes","Responsive UI","Prototyping"],l:B+"229833615/OLHADOO-Fashion-Brand-Website-Responsive-Design"},
{id:"fit",t:"FitCommunity",s:"Mobile fitness community app",d:"A mobile app concept that connects people with shared fitness goals. UX concept, personas, user flows, wireframes, UI design and an interactive prototype.",tg:["Personas","Competitor analysis","User flows","UI design","Prototype"],l:B+"216171867/FitCommunity"},
{id:"noir",t:"Noir & Olive",s:"Restaurant branding",d:"A fictional modern Mediterranean restaurant with a British touch: visual identity, logo, menu, cocktail menu, landing page, dessert packaging and shopper bag.",tg:["Branding","Logo","Packaging","Print"],l:B+"232386367/Noir-Olive-Modern-Mediterranean-Restaurant-Branding"},
{id:"posters",t:"Social media posters",s:"Poster concepts",d:"Conceptual posters for digital platforms, focused on visual impact and experimental aesthetics.",tg:["Typography","Illustration","Layout"]},
{id:"logos",t:"Logo & identity",s:"Brand exploration",d:"A series of logo and branding concepts created as visual and strategic explorations.",tg:["Logo design","Identity","Concept"]}];

var L=[
{c:"#dc241f",d:"M500 300H70",lab:-1,st:[[70,300,"About me","about",1],[285,300,"Ideas → Impact","about"]]},
{c:"#000",d:"M500 300L400 400H70",lab:1,st:[[70,400,"Experience","experience",1],[160,400,"Freelance UX/UI","experience"],[250,400,"Maxus UX/UI","experience"],[340,400,"Customer service","experience"]]},
{c:"#0098d4",d:"M500 300L620 180H950",lab:-1,st:[[650,180,"Olhadoo","projects/olhadoo"],[700,180,"FitCommunity","projects/fit"],[750,180,"Noir & Olive","projects/noir"],[800,180,"Posters","projects/posters"],[850,180,"Logos","projects/logos"],[950,180,"All projects","projects",1]]},
{c:"#00782a",d:"M500 300L620 420H1000",lab:1,st:[[700,420,"UX line","skills"],[770,420,"UI line","skills"],[840,420,"Tools","skills"],[910,420,"Soft skills","skills"],[1000,420,"Skills","skills",1]]},
{c:"#0019a8",d:"M500 300V580",lab:0,st:[[500,380,"Roehampton","education"],[500,450,"GoIT","education"],[500,520,"92learns","education"],[500,580,"Education","education",1]]},
{c:"#a0a5a9",d:"M500 300V30",lab:0,st:[[500,230,"Email","contact"],[500,160,"Behance","contact"],[500,95,"LinkedIn","contact"],[500,30,"Contact","contact",1]]}];
