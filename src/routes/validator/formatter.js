const character = "      functionUP has Radon       "

// Trim 
const trim = () => {
    const Trimed = character.trim();
    console.log("Trim : " + Trimed);
}
//LowerCaseMethod
const LowerCaseMethod = () => {
    const cas = character.trim().toLowerCase();
    console.log("LowerCase : " + cas);
}

//UpperCaseMethod
const UpperCaseMethod = () => {
    const cas = character.trim().toUpperCase();
    console.log("UpperCase : " + cas);

}

//  functions Exports from here
module.exports.trim = trim;
module.exports.LowerCaseMethod = LowerCaseMethod;
module.exports.UpperCaseMethod = UpperCaseMethod;