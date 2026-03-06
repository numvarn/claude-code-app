export default function About() {
  return (
    <>
      <h1 className="h2 mb-4">เกี่ยวกับเรา</h1>
      <div className="row g-4">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">ประวัติของเรา</h5>
              <p className="card-text">
                เราเป็นบริษัทที่มุ่งมั่นในการสร้างโซลูชั่นดิจิทัลที่นำเสนอคุณค่า
                และส่งผลกระทบในเชิงบวกต่อธุรกิจของลูกค้า
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">วิสัยทัศน์</h5>
              <p className="card-text">
                เป็นผู้นำด้านเทคโนโลยี และพัฒนาทีมที่มีความเชี่ยวชาญสูง
                เพื่อสร้างอนาคตที่ดีกว่า
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">พันธกิจ</h5>
              <p className="card-text">
                ให้บริการที่เป็นเลิศและมีคุณภาพสูง พร้อมสนับสนุนลูกค้า
                ในการบรรลุเป้าหมายของพวกเขา
              </p>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">ทีมของเรา</h5>
              <p className="card-text">
                ทีมของเราประกอบด้วยผู้เชี่ยวชาญจากหลายสาขาที่มีประสบการณ์
                และความรู้ลึกซึ้ง
              </p>
              <div className="row g-3">
                <div className="col-6 col-md-4">
                  <div className="text-center p-3 border rounded">
                    <h6>ผู้พัฒนา</h6>
                    <small className="text-muted">โปรแกรมเมอร์มืออาชีพ</small>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="text-center p-3 border rounded">
                    <h6>ดีไซเนอร์</h6>
                    <small className="text-muted">นักออกแบบ UI/UX</small>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="text-center p-3 border rounded">
                    <h6>แมนเจอร์</h6>
                    <small className="text-muted">ผู้บริหารโครงการ</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
