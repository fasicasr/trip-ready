import ProfileCaption from "./ProfileCaption";
import ProfilePicture from "./ProfilePicture";
import Gallery from "./Gallery";

function Profile() {
  return (
    <div className="profile">
      <ProfileCaption />
      <ProfilePicture />
      <Gallery />
    </div>
  );
}
export default Profile;
