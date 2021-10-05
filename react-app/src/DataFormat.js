// userInfos contains {an id, todayScore, keyDatas{(calories/protein/lipid,carbohydrateCount} , userInfos{firstName, lastName & age}}
// userBarchart = {day, kilograms, calories}
// userHexachart = kind of exercise + value corresponding
// userAverage = average Sessions length

function dataModelling() {

    var userInfos, userHexachart, userBarchart, userAverage;
    var data = localStorage.getItem("data");
    data = JSON.parse(data);
    userInfos = data[0].data;
    userBarchart = data[1].data;
    userAverage = data[2].data;
    userHexachart = data[3].data;

    // format data to pass it down to the Hexachart
    // needed to replace numbers in data.kind by their name
    const formatHexachart = () => {
        delete data[3].data.kind;
        let values = data[3].data.data;
        let kind = ["cardio", "energy", "endurance", "strength", "speed", "intensity"];
        let i = 0;
        values.forEach((element) => {
            element.kind = kind[i];
            i++;
        });
        return (userHexachart = data[3].data);
    };
    formatHexachart();
    data = [userInfos, userBarchart, userHexachart, userAverage];
    return data;
}
export default dataModelling;
