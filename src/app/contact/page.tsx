export default function Contact() {
  return (
    <>
      <h1 className="h2 mb-4">ติดต่อเรา</h1>
      <div className="row g-4">
        <div className="col-12 col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">ข้อมูลติดต่อ</h5>
              <div className="mb-3">
                <h6 className="text-muted small mb-1">ที่อยู่</h6>
                <p className="mb-3">
                  123 หมู่ 4 ถนนพระราม 9<br />
                  กรุงเทพ 10110<br />
                  ประเทศไทย
                </p>
              </div>

              <div className="mb-3">
                <h6 className="text-muted small mb-1">เบอร์โทรศัพท์</h6>
                <p className="mb-3">
                  <a href="tel:+66123456789" className="text-decoration-none">
                    +66 (2) 123-4567
                  </a>
                </p>
              </div>

              <div className="mb-3">
                <h6 className="text-muted small mb-1">อีเมล</h6>
                <p className="mb-3">
                  <a href="mailto:info@example.com" className="text-decoration-none">
                    info@example.com
                  </a>
                </p>
              </div>

              <div className="mb-0">
                <h6 className="text-muted small mb-1">เวลาทำการ</h6>
                <p className="mb-0">
                  จันทร์ - ศุกร์: 09:00 - 18:00<br />
                  เสาร์ - อาทิตย์: ปิด
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">ส่งข้อความถึงเรา</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    ชื่อ
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="กรอกชื่อของคุณ"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    อีเมล
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="กรอกอีเมลของคุณ"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    หัวข้อ
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="กรอกหัวข้อ"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    ข้อความ
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows={5}
                    placeholder="กรอกข้อความของคุณ"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  ส่งข้อความ
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">ติดตามเรา</h5>
              <div className="d-flex gap-3">
                <a href="#" className="btn btn-outline-primary btn-sm">
                  Facebook
                </a>
                <a href="#" className="btn btn-outline-info btn-sm">
                  Twitter
                </a>
                <a href="#" className="btn btn-outline-danger btn-sm">
                  Instagram
                </a>
                <a href="#" className="btn btn-outline-secondary btn-sm">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
