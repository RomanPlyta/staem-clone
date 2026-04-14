import './Profile.scss';

const Profile = () => {
  return (
    <div className="page-profile">
      <div className="profile-header">
        <div className="avatar-placeholder">Avatar</div>
        <div className="user-info">
          <h1>Username</h1>
          <p>Online</p>
        </div>
      </div>
      
      <section className="recent-activity">
        <h2>Recent Activity</h2>
      </section>
    </div>
  );
};

export default Profile;
