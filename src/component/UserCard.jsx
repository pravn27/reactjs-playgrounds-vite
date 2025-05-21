const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <img
        src={user.imageUrl}
        alt="User Image"
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: "50%",
        }}
      />
    </div>
  );
};

export default UserCard;
