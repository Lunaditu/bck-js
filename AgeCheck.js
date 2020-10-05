var groups = [ "child", "teen", "adult" ]
/** 
 * @param {Number} age 
 */
function GetAgeGroup(age) {
    if (age < 10) return groups[0]
    if (10 < age && age <= 18) return groups[1]
    if (18 < age) return groups[2]
}