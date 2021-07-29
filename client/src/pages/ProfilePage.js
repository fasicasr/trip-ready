import ProfileCaption from "../Profile/ProfileCaption";
import ProfilePicture from "../Profile/ProfilePicture";
import Gallery from "../Profile/Gallery";

import Profile from "../Profile/Profile";
import Navbar from '../components/Navbar';
import TripForm from '../components/TripForm';
import SavedTrip from '../components/SavedTrip'
import TripSearch from '../components/TripSearch'
import GroupPage from '../components/GroupPage'
import { Nav } from "react-bootstrap";

function ProfilePage() {
    return (
        <div className="profile">
            {/* <ProfileCaption />
            <ProfilePicture />
            <Gallery /> */}
            <Navbar />
            <Profile />
            <TripSearch />
            <TripForm />
            <SavedTrip />
        </div>
    );
}
export default ProfilePage;