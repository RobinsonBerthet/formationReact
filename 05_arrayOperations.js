
/**
 * Utiliser la fonction .map sur le tableau passé en paramètre
 * pour retourner un nouveau tableau avec les valeurs multipliées par 2
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable
 * 
  */

const multiplyByTwo = array => array.map(x=> x*2)

console.log(multiplyByTwo([2,4,8,16,32,64,128]));


/**
 * Utiliser la fonction .filter sur le tableau passé en paramètre
 * retourne un nouveau tableau avec uniquement les nom qui commencent par la lettre "A"
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const filterNameStartByA = array=> array.filter(x=> x[0] === "A")

console.log(filterNameStartByA(["abcdcd", "vdfdfg", "aaaa", "bbb"]))
/**
 * Utiliser la fonction .reduce sur le tableau passé en paramètre
 * retourne la somme des valeurs du tableau
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const sum = (array) => (array.length > 0 ? array.reduce((accumulator, currentValue) => accumulator + currentValue): 0)

console.log(sum([]));

/**
 * Utiliser la fonction .find sur le tableau passé en paramètre
 * retourne l'utilisateur qui a l'id passé en 2e paramètre
 * 
 * exemple d'entrée:
 * [
 *  {id: 1, name: 'John'},
 *  {id: 2, name: 'Doe'},
 *  {id: 3, name: 'Foo'},
 *  {id: 4, name: 'Bar'},
 * ], 3
 * retour attendu: "Foo"
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const findUserById = (array, id) => (array.find((x)=> x.id === id)?.name ?? "non trouvé")

console.log(findUserById([
 {id: 1, name: 'John'},
 {id: 2, name: 'Doe'},
 {id: 3, name: 'Foo'},
 {id: 4, name: 'Bar'},
], 3))


module.exports = {multiplyByTwo, filterNameStartByA, sum, findUserById};