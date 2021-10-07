/** Checks if the user exists and fetch data
 * @param {string} user - id of the user
 */
const fetchData = async (user) => {
    const [userInfos, userActivity, userSessions, userPerf] = await Promise.all([
        fetch("http://localhost:3000/user/" + user),
        fetch("http://localhost:3000/user/" + user + "/activity"),
        fetch("http://localhost:3000/user/" + user + "/average-sessions"),
        fetch("http://localhost:3000/user/" + user + "/performance"),
    ]);
    var user1 = await userInfos.json();
    var userAct = await userActivity.json();
    var userAverage = await userSessions.json();
    var userPerformance = await userPerf.json();

    var data = [user1, userAct, userAverage, userPerformance]
    
    return data;   
};

export default fetchData;
