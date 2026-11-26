export default function ProfileInformation({ profile, onEdit }) {
  const initials = profile.name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <section className="panel profile-card">
      <div className="profile-avatar">{initials}</div>
      <div className="profile-details">
        <p className="eyebrow">Owner</p>
        <h2>{profile.name}</h2>
        <p>{profile.email}</p>
        <p>{profile.phone}</p>
      </div>
      <button className="secondary-btn" onClick={onEdit}>Edit Profile</button>
    </section>
  );
}
