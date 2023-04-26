const pieces=[100,50,20,10,5,2,1];
const rendu_glouton=function(arendre,solution=[],i=0){
    const retour=[];
    let reste= arendre;
    


    pieces.forEach((piece,i))=>{
        retour.push(math.ceil(reste/piece));
        reste = reste % pieces;
        
    }
    return retour;
}
console.log(rendu(68))
const rendu= pieces.reduce (acc,piece)=>{
    const nbpice= math.floor(acc.arendre/piece)
    if(arendre==0){
    return solution; 


}
acc.aRendre = acc.aRendre%piece;
   acc[piece] = nbPiece;
   return acc;
}, {aRendre:151})
 
delete rendu.aRendre
const r = Object.assign( {100:0,50:0,20:0,10:0,5:0,2:0,1:0}, rendu.aRendre)


