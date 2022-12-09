import HomeTitle from "./HomeTitle"
import HomeTextField from './HomeTextField.js'
import MainAppBar from "../AppBarConponents/MainAppBar";

const HomePage = () => {
    return(
        <>
            <MainAppBar></MainAppBar>
            <HomeTitle></HomeTitle>
            <HomeTextField></HomeTextField>
        </>
    )
}

export default HomePage;