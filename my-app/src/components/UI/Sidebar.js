import "./Sidebar.css";
import Dropbox from "../UI/dropbox.svg";
import HomeLogo from "../UI/eva_home-fill.svg";
import FileLogo from "../UI/eva_file-text-outline.svg";
import ShareLogo from "../UI/eva_share-outline.svg";
import StarLogo from "../UI/eva_star-outline.svg";
import TrashLogo from "../UI/eva_trash-2-outline.svg";
function Sidebar() {
  return (
    <div>
      <div className="flex-wrapper">
        <img src={Dropbox} alt="dropbox" />
        <h4>Dropbox</h4>
      </div>
      <div>
        <div className="link-active">
          <ListItem src={HomeLogo} name="Home"></ListItem>
        </div>
        <ListItem src={FileLogo} name="All files"></ListItem>
        <ListItem src={StarLogo} name="Starred"></ListItem>
        <ListItem src={ShareLogo} name="Shared"></ListItem>
        <ListItem src={TrashLogo} name="Shared"></ListItem>
      </div>
    </div>
  );
}

function ListItem(props) {
  return (
    <div className="flex-wrapper">
      <img src={props.src} alt="" />
      <h4>{props.name}</h4>
    </div>
  );
}
export default Sidebar;
