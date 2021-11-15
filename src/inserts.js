db.futbolistas.insertMany([{
        nombre: "Cristiano Ronaldo Dos Santos Aveiro", 
        posición: "Delantero centro", 
        edad: 36, 
        fechanacimiento: new Date(1985-02-05),
        nacionalidad:"Portugués",
        equipos:[{
            nombre: "Sporting C.P",
            fechainicio: new Date(2002-08-01),
            fechafinal: new Date(2003-07-31),
            goles:5
        },{
            nombre: "Manchester United F.C",
            fechainicio: new Date(2003-08-01),
            fechafinal: new Date(2009-07-31),
            goles:118
        }, {
            nombre: "Real Madrid C.F",
            fechainicio: new Date(01-08-2009),
            fechafinal: new Date(31-07-2018),
            goles: 450
        },{
            nombre: "Juventus F.C",
            fechainicio: new Date(2018-08-01),
            fechafinal: new Date(2021-07-31),
            goles: 101
        },{
            nombre: "Manchester United F.C",
            fechainicio: new Date(2021-08-01),
            goles: 7
        }],
        trofeos:[{
            indivuales:{
                balóndeoro:5,
                botadeoro:4,
                thebest:2,
                otrostrofeos:["jugador siglo xxi", "premio Puskás", "jugador mundial de la FIFA", "once histórico del balón de oro"]
            }
        },{
            colectivos:{
                champions:5,
                mundialdeclubes:4,
                eurocopa:1,
                otrostrofeos:["liga de las naciones", "supercopa de españa", "premier league", "liga española", "liga italiana"]
            }
        }],
        retirado:false 
    },
    {nombre:"Lionel Andrés Messi Cuccittini", posición:"Delantero centro", edad:34, fechanacimiento:new Date(1987-06-24), nacionalidad:"Argentino", equipos:[{nombre:"F.C. Barcelona", fechainicio:new Date(2004-08-01), fechafinal:new Date(2021-07-31), goles:672},{nombre:"Paris Saint-Germain F.C.", fechainicio:new Date(2021-08-01), goles:3 }],trofeos:[{individuales: {balóndeoro:6, botadeoro:6, thebest:1, otrostrofeos:["balón de oro de la copa américa", "premio Laureus","once histórico balón de oro"]}},{colectivos:{champions:4,mundialdeclubes:3,copaamérica:1,otrostrofeos:["copa mundial sub-20", "torneo olímpico de fútbol", "supercopa de europa"]}}],retirado:false },
    {nombre:"Edson Arantes do Nascimento", posición:"Delantero centro", edad:81, fechanacimiento:new Date(1940-10-23), nacionalidad:"Brasileño", equipos:[{nombre:"Santos F.C.", fechainicio:new Date(1956-08-01), fechafinal:new Date(1975-07-31), goles:1091},{nombre:"New York Cosmos", fechainicio:new Date(1975-08-01),fechafinal:new Date(1977-07-31) , goles:77 }],trofeos:[{individuales:{goleadorcampeonatopaulista:11, mejorjugadorjoven:1, otrostrofeos:["goleador de la copa de brasil, goleador libertadores"]}},{colectivos:{mundiales:3,libertadores:2,serieAbrasileña:6,otrostrofeos:["nasl", "copa intercontinental", "campeonato paulista"]}}],retirado:true },
    {nombre:"Sergio Ramos García", posición:"Defensa central", edad:35, fechanacimiento:new Date(1986-03-30), nacionalidad:"Español", equipos:[{nombre:"Sevilla F.C", fechainicio:new Date(2003-08-01), fechafinal:new Date(2005-07-31), goles:3},{nombre:"Real Madrid C.F", fechainicio:new Date(2005-08-01), fechafinal:new Date(2021-07-31), goles:100 },{nombre:"Paris Saint-Germain F.C",fechainicio:new Date(2021-08-01),goles:0}],trofeos:[{individuales:{nominacionesbalóndeoro:6, mejordefensadelaliga:5, equipodelaño:8, otrostrofeos:["mejor defensa del mundo","equipo ideal mundial"]}},{colectivos:{champions:4,mundialdeclubes:4,eurocopa:2,otrostrofeos:["mundial", "supercopa europa", "liga española"]}}],retirado:false },
    {nombre:"Xavier Hernández Creus", posición:"Mediocentro", edad:41, fechanacimiento:new Date(1980-01-25), nacionalidad:"Español", equipos:[{nombre:"F.C. Barcelona", fechainicio:new Date(1998-08-01), fechafinal:new Date(2015-07-31), goles:85},{nombre:"Al-Sadd S.C", fechainicio:new Date(201-08-01), fechafinal:new Date(2019-07-31), goles:13 }],trofeos:[{individuales:{equipodelaño:5, mejormediocentroliga:3, oncemundialfifa:6, otrostrofeos:["mejor jugador de la eurocopa", "balón de bronce fifa" ,"marca leyenda"]}},{colectivos:{champions:4,mundialdeclubes:2,eurocopa:2,otrostrofeos:["plata olímpica", "mundial", "supercopa de europa"]}}],retirado:true },
    {nombre:"Iker Casillas Fernández", posición:"Portero", edad:40, fechanacimiento:new Date(1981-05-20), nacionalidad:"Español", equipos:[{nombre:"Real Madrid C.F.", fechainicio:new Date(1999-08-01), fechafinal:new Date(2015-07-31), goles:0},{nombre:"F.C. Porto", fechainicio:new Date(2015-08-01),fechafinal:new Date(2020-07-31), goles:0 }],trofeos:[{individuales:{ equipodelaño:6, mejorporteroliga:2, oncemundialfifa:5, otrostrofeos:["zamora", "guante de oro del mundial", "golden foot "]} } , {colectivos:{champions:3,mundialdeclubes:4,eurocopa:2,otrostrofeos:["supercopa de europa", "liga portuguesa", "liga española"]}}],retirado:true },
    {nombre:"Diego Armando Maradona", posición:"Delantero centro", fechanacimiento:new Date(1960-10-30), fechafallecimiento:new Date(25-11-2020), nacionalidad:"argentino", equipos:[{nombre:"Argentinos Juniors", fechainicio:new Date(1976-08-01), fechafinal:new Date(1981-07-31), goles:34},{nombre:"Boca Juniors", fechainicio:new Date(1981-08-01),fechafinal:new Date(1982-07-31), goles:34},{nombre:"F.C. Barcelona", fechainicio:new Date(1982-08-01),fechafinal:new Date(1984-07-31), goles:47 },{nombre:"S.S.C. Napoli", fechainicio:new Date(1984-08-01),fechafinal:new Date(1992-07-31), goles:115},{nombre:"Sevilla F.C.", fechainicio:new Date(1992-08-01),fechafinal:new Date(1993-07-31), goles:6},{nombre:"Newell`s Old Boy", fechainicio:new Date(1993-08-01),fechafinal:new Date(1994-07-31), goles:0},{nombre:"Boca Juniors", fechainicio:new Date(1995-08-01),fechafinal:new Date(1997-07-01), goles:7}],trofeos:[{individuales:{Balóndeoro:3, mejorfutbolistaamérica:6, mejordeportistaargentino:2, otrostrofeos:["balón de oro del mundial", "máximo goleador liga italiana", "konex de platino"]}},{colectivos:{mundial:1,mundialsub20:1,serieA:2,otrostrofeos:["copa de la uefa", "liga española", "copa italiana"]}}],retirado:true },
    {nombre:"Ronaldo de Assis Moreira", posición:"Extremo Izquierda",edad:41, fechanacimiento:new Date(1980-03-21),nacionalidad:"Brasileño", equipos:[{nombre:"Gremio F.B.P.A", fechainicio:new Date(1995-08-01), fechafinal:new Date(2000-07-31), goles:72},{nombre:"Paris Saint-Germain F.C.", fechainicio:new Date(2000-08-01),fechafinal:new Date(2003-07-31), goles:25 },{nombre:"F.C. Barcelona", fechainicio:new Date(2003-08-01),fechafinal:new Date(2008-07-31), goles:95 },{nombre:"A.C. Milan", fechainicio:new Date(2008-08-01),fechafinal:new Date(2011-07-31), goles:33},{nombre:"Fluminense F.C.", fechainicio:new Date(2011-08-01),fechafinal:new Date(2018-07-31), goles:0 }],trofeos:[{individuales:{Balóndeoro:1, jugadormundialdelafifa:1, equipodelañouefa:1, otrostrofeos:["mejor delantero liga campeones", "once de oro", "mejor deportista américa latina"]}},{colectivos:{champions:1,mundialdeclubes:1,mundial:1,otrostrofeos:["copa confederaciones", "juegos olípicos", "mundialsub-17"]}}],retirado:true },
    {nombre:"Kylian Mbappé", posición:"Delantero centro", edad:22, fechanacimiento:new Date(1998-12-20),nacionalidad:"Francés", equipos:[{nombre:"A.S. Monaco", fechainicio:new Date(2015-08-01), fechafinal:new Date(2018-07-31), goles:23},{nombre:"Paris Saint-Germain F.C.", fechainicio:new Date(2018-08-01), goles:116 }],trofeos:[{individuales:{nominacionesbalondeoro:2, mejorjugadorjovendelmundial:1, trofeokopa:1, otrostrofeos:["once mundial de la fifa, jugador francés del año, máximo goleador ligue 1"]}},{colectivos:{mundial:1,ligadenaciones:1,ligue1:4,otrostrofeos:["europeo sub-19", "supercopa de francia", "copa de francia"]}}],retirado:false },
    {nombre:"Neymar da Silva Santos Júnior", posición:"Extremo izquierda", edad:29, fechanacimiento:new Date(1992-02-05), nacionalidad:"Brasileño", equipos:[{nombre:"Santos F.C.", fechainicio:new Date(2019-08-01), fechafinal:new Date(2013-07-31), goles:70},{nombre:"F.C. Barcelona", fechainicio:new Date(2013-08-01), fechafinal:new Date(2017-07-31), goles:68},{nombre:"Paris Saint-Germain F.C.", fechainicio:new Date(2017-08-01), goles:64 }],trofeos:[{individuales:{oncemundialfifa:2, sambadeoro:3, futbolistaamericanodelaño:2, otrostrofeos:["máximo goleador liga de campeones", "máximo goleador copa del rey", "once ideal del mundial"]}},{colectivos:{champions:1,mundialdeclubes:1,olimpiadas:1,otrostrofeos:["libertadores, supercopa de europa, recopa sudamericana"]}}],retirado:false },
   ])