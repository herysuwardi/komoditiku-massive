const InformasiUmum = () => {
  return (
    <>
      <h4>Lengkapi Form Konsultasi</h4>
      <p>Lengkapi form berikut ini untuk mendapatkan bantuan dari kami!</p>
      <div className="row">
        <div className="col mt-2">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Nama Lengkap"
          ></input>
        </div>
        <div className="col mt-2">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="col mt-4">
          <input
            type="text"
            className="form-control"
            id="text"
            placeholder="Nomor Telepon"
          ></input>
        </div>
        <div className="col mt-4">
          <input
            type="text"
            className="form-control"
            id="text"
            placeholder="Nomor Whatshapp"
          ></input>
        </div>
      </div>
      <div className="mt-4">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Alamat Bisnis"
        ></textarea>
      </div>
    </>
  );
};

export default InformasiUmum;
