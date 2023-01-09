const DetailKonsultasi = () => {
  return (
    <>
      <h4>Lengkapi Form Konsultasi</h4>
      <p>Lengkapi form berikut ini untuk mendapatkan bantuan dari kami!</p>
      <h6>Pilih Media Konsultasi</h6>
      <div className="row">
        <div className="col-4 mt-2 mb-4">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" forHtml="flexRadioDefault1">
              Video Conference
            </label>
          </div>
        </div>
        <div className="col-3 mt-2 mb-4">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" forHtml="flexRadioDefault1">
              Whatsapp
            </label>
          </div>
        </div>
      </div>
      <h6>Darimana anda mengetahui tentang komoditiku?</h6>
      <div className="row">
        <div className="col-2 mt-2">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Facebook
            </label>
          </div>
        </div>
        <div className="col-2 mt-2">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Twitter
            </label>
          </div>
        </div>
        <div className="col-2 mt-2">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Linkedin
            </label>
          </div>
        </div>
        <div className="col-2 mt-2">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Internet
            </label>
          </div>
        </div>
        <div className="col-3 mt-2">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Orang Lain
            </label>
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
