const LookRankig = () => {

    console.log('ランダムランキング要素10個の入った配列を返却');

    const rankingList = [1,2,3,4,5,6,7,8,9,10];

    const status = 200;

    return(
        [
            rankingList.map((listNum) => {
                return(
                    {
                        status: status,
                        rankNum: listNum,
                        userName: "testName",
                        totalScore: Math.round(Math.random()*1000*listNum),
                        podRank: "A",
                        podCount: Math.round(Math.random()*20*listNum)
                    }
                )
            })
        ]
    )
}

export default LookRankig;