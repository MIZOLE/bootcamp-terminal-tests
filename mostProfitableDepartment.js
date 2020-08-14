module.exports = function mostProfitableDepartment(dip) {
    //you functions logic here
    var ProfitableDepartmentMap = {}
    var Deplist = dip;


    var Department = "";

    for (var i = 0; i < Deplist.length; i++) {
        var currentDepartment = Deplist[i].department;

        if (ProfitableDepartmentMap[currentDepartment] === undefined) {
            ProfitableDepartmentMap[currentDepartment] = 0;
        }
        ProfitableDepartmentMap[currentDepartment] = ProfitableDepartmentMap[currentDepartment] + Deplist[i].sales;
    }

    var dep = "x";
    for (var x in ProfitableDepartmentMap) {

        if (ProfitableDepartmentMap[x] > Department) {
            dep = x
            Department = ProfitableDepartmentMap[x]
        }
    }
    return dep;
}


















































