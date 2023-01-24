const Profil = () => {
  return (
    <>
      <div className="d-flex">
        <h4>Profil</h4>
        <a href="#" className="ms-auto edit-data">
          <h5>Edit Profile</h5>
        </a>
      </div>
      <hr />
      <div className="list-dataprofile">
        <h6>Nama</h6>
        <h5>Salman Fardinan</h5>
        <h6>Nomor Telepon</h6>
        <h5>+62 8123 4567 890</h5>
        <h6>Email</h6>
        <h5>salmanfardinan@gmail.com</h5>
        <h6>Jenis Kelamin</h6>
        <h5>Laki-laki</h5>
        <h6>Tanggal Lahir</h6>
        <h5>17 Januari 2000</h5>
        <h6>Alamat</h6>
        <h5>Kota, Jakarta Selatan</h5>
      </div>
    </>
  );
};

export default Profil;
