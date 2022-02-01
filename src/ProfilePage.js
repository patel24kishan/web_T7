import './ProfilePage.css';

function ProfilePage({FirstName,emailValue,LastName}) {

  return (
    <div>
          <br />
          <h2> Profile Page </h2>
          <h3>Full Name :{FirstName} {LastName}</h3> 
          <br />
          <h4>Email Address: {emailValue}</h4>
    </div>
  );
}

export default ProfilePage;