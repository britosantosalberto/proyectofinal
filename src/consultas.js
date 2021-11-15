/*Mi padre me preguntó si conociá futbolistas que rondaran la misma edad que tiene él. La consulta busca a jugadores que tengan entre 30 y 50 años*/ 
db.futbolistas.find( { edad: { $gte : 35, $lte : 45 } } )

/*Consulta de futbolistas españoles*/ 
 db.futbolistas.find( { nacionalidad: "Español" } )

/*Mi abuelo conoce a muchos futbolistas españoles y quiere ver futbolistas extranjeros */  
db.futbolistas.find( { nacionalidad: { $not: { $eq: "Español" } } } )

/*Consulta de futbolistas retirados que hayan fallecido*/ 
db.futbolistas.find( { $and: [ {fechafallecimiento:{$lt:new Date(15-11-2021)}}, { retirado: true } ] } ).pretty()

/*Mi primo me quiere enseñar un futbolista que tiene los siguientes datos pero no se acuerda del nombre.
-Está retirado
-Es brasileño
-Nació antes de 1950*/
db.futbolistas.find( { $and: [ { retirado:true }, { nacionalidad: "Brasileño" }, { fechanacimiento: { $lt:new Date ("01-01-1950") } } ] } ).pretty()

/*Vi un futbolista por la tele, pero no me acuero de su nombre. Solo recuerdo que su nombre empieza por la letra "C" */
db.futbolistas.find( { nombre: { $regex: /^C/  } } )

/*Mi hermana quiere saber cuáles son los futbolistas que siguen jugando actualmente.Consulta de futbolistas que no estén retirados */ 
db.futbolistas.find( { $or: [ { retirados: { $exists: false } } ] } )

