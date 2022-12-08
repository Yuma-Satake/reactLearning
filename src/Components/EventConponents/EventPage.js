import MainAppBar from "../AppBarConponents/MainAppBar";
import EventTitle from "./EventTitle.js";
import EventCard from "./EventCard.js";

const EventPage = () => {
    return(
        <>
            <MainAppBar></MainAppBar>
            <EventTitle></EventTitle>
            <EventCard></EventCard>
        </>
    )
}

export default EventPage;