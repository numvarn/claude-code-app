export default function Home() {
  return (
    <>
      <h1 className="h2 mb-4">Welcome to Dashboard</h1>
      <div className="row g-4">
        <div className="col-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">🏠 Home</h5>
              <p className="card-text">
                ยินดีต้อนรับสู่หน้าแรก ที่นี่คือศูนย์กลางของแอปพลิเคชัน
              </p>
              <a href="/" className="btn btn-primary btn-sm">
                ดูเพิ่มเติม
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">ℹ️ About</h5>
              <p className="card-text">
                เรียนรู้เพิ่มเติมเกี่ยวกับเรา และประวัติของบริษัท
              </p>
              <a href="/about" className="btn btn-primary btn-sm">
                ดูเพิ่มเติม
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">📧 Contact</h5>
              <p className="card-text">
                ติดต่อเราได้ผ่านหลากหลายช่องทาง เราพร้อมช่วยเหลือ
              </p>
              <a href="/contact" className="btn btn-primary btn-sm">
                ติดต่อเลย
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
