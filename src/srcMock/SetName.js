import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const SetName = (props) => {
    const { userName } = props;
    const addDocID = localStorage.getItem('addDocID');
    console.log(addDocID);
    // updateDoc(doc(db,"ranking",addDocID),{
    //     userName: userName
    // }).then(() => {
    //     localStorage.clear();
    // })

    return(
        {
        //     status:200
        }
    )
}

export default SetName;