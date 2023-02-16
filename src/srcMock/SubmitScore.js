import { light } from "@mui/material/styles/createPalette";
import { addDoc, collection, doc, getDoc, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { db } from "../firebase";

const SubmitScore = (props) => {
    // const { totalScore, podRank, podCount } = props;

    // スコアを送信
    // sessionStorage.removeItem("addDcoID");
    // addDoc(collection(db, "ranking"), {
    //     podCount: podCount,
    //     podRank: podRank,
    //     totalScore: totalScore,
    //     userName: "匿名"
    // }).then((res) => {
    //     sessionStorage.setItem("addDocID",res.id);
    //     console.log("debug");
    //     }
    // )

    // 1つのドキュメントを入手
    // getDoc(doc(db, "ranking","y3YBIZJe0nApiRn9jBnL"))
    // .then((res) => {
    //     console.log(res.data());
    // })

    // トップ10を収集
    // const querys = query(collection(db, "ranking"), orderBy("totalScore", "desc"), limit(10));
    // getDocs(querys).then((queryItem) => {
    //     queryItem.forEach((res) => {
    //         console.log(queryItem);
    //         console.log(res.data());
    //     });
    // })




    // const rankNum = Math.round(Math.random()*100);
    // console.log(`ランダムなランキングを返却：${rankNum}`);

    // const status = 200;
    // console.log(`ステータス：${status}`)

    return(
        {
            // status:status,
            // rankNum:rankNum
        }
    )
}

export default SubmitScore;