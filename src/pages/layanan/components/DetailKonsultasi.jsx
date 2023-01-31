const DetailKonsultasi = () => {
  return (
    <>
      <h4>Lengkapi Form Konsultasi</h4>
      <p>Lengkapi form berikut ini untuk mendapatkan bantuan dari kami!</p>
      <h6>Pilih Media Konsultasi</h6>
      <div className="row">
        <div className="col-4 mt-2 mb-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
            />
            <label className="form-check-label">Video Conference</label>
          </div>
        </div>
        <div className="col-3 mt-2 mb-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
            />
            <label className="form-check-label">Whatsapp</label>
          </div>
        </div>
      </div>
      <h6>Darimana anda mengetahui tentang komoditiku?</h6>
      <div className="row">
        <div className="col-2 mt-2">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label">Facebook</label>
          </div>
        </div>
        <div className="col-2 mt-2">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label">Twitter</label>
          </div>
        </div>
        <div className="col-2 mt-2">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label">Linkedin</label>
          </div>
        </div>
        <div className="col-2 mt-2">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label">Internet</label>
          </div>
        </div>
        <div className="col-3 mt-2">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label">Orang Lain</label>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Jelaskan gambaran besar permasalahan produk anda!"
        ></textarea>
      </div>
    </>
  );
};

export default DetailKonsultasi;
