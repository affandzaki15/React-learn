function UserInfo({name, job}){
    return (
        <div className="user-info">
            <h2>{name}</h2>
            <p>{job}</p>
            {/* <p className="location">Malang,Indo</p> */}
        </div>
    );
}

export default UserInfo