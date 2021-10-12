// userInfos contains {an id, todayScore, keyDatas{(calories/protein/lipid,carbohydrateCount} , userInfos{firstName, lastName & age}}
// userBarchart = {day, kilograms, calories}
// userHexachart = kind of exercise + value corresponding
// userAverage = average Sessions length

function dataModelling(d) {
    var userInfos, userHexachart, userBarchart, userAverage;
    userInfos = d[0].data;
    // condtionnal rendering to check is the user is found, if not return the 404 page
    // if the user is found in the data : return formated data in the localstorage + the Userpage
    if (userInfos !== undefined) {
        let id = userInfos.id;
        userBarchart = d[1].data;
        userAverage = d[2].data;
        userHexachart = d[3].data;

        // format data to pass it down to the Hexachart
        // needed to replace numbers in data.kind by their name
        const formatHexachart = () => {
            delete d[3].data.kind;
            let values = d[3].data.data;
            let kind = ["Cardio", "Energy", "Endurance", "Strength", "Speed", "Intensity"];
            let i = 0;
            values.forEach((element) => {
                element.kind = kind[i];
                i++;
            });
            return (userHexachart = d[3].data);
        };
        const formatDate = () => {
            let values = d[2].data.sessions
            let weekDays = ["L","M","M","J","V","S","D"]
            let i = 0
            values.forEach((element) => {
                element.day = weekDays[i];
                i++;
            })
            return (userAverage = d[2].data)
        }
        formatHexachart();
        formatDate()
        var data = [userInfos, userBarchart, userHexachart, userAverage];
        window.location.href = "http://localhost:3001/user/" + id;
        localStorage.setItem("data", JSON.stringify(data));
    }
    else{
        window.location.href ="http://localhost:3001/404/"
    }
}
export default dataModelling;
