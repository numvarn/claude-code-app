"use client";

import { Facebook, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-white pt-5 pb-3">
            <div className="container">
                <div className="row g-4 mb-4">
                    <div className="col-lg-4 col-md-6">
                        <h3 className="h4 fw-bold mb-4 text-white">SL CONCRETE</h3>
                        <p className="text-secondary opacity-75 pe-lg-4 lh-lg mb-4">
                            ผู้ผลิตและจำหน่ายผลิตภัณฑ์คอนกรีตมาตรฐาน ม.อ.ก. รายใหญ่ที่สุดในจังหวัดศรีสะเกษ
                            ที่มีประสบการณ์ยาวนานกว่า 20 ปี พร้อมให้บริการคุณ
                        </p>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <h4 className="h5 fw-bold mb-4 text-white">ลิงก์ที่เป็นประโยชน์</h4>
                        <ul className="list-unstyled d-flex flex-column gap-3">
                            <li><a href="#hero" className="text-secondary opacity-75 text-decoration-none hover-opacity-100 transition-colors">หน้าแรก</a></li>
                            <li><a href="#about" className="text-secondary opacity-75 text-decoration-none hover-opacity-100 transition-colors">เกี่ยวกับเรา</a></li>
                            <li><a href="#services" className="text-secondary opacity-75 text-decoration-none hover-opacity-100 transition-colors">สินค้าและบริการ</a></li>
                            <li><a href="#contact" className="text-secondary opacity-75 text-decoration-none hover-opacity-100 transition-colors">ติดต่อเรา</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <h4 className="h5 fw-bold mb-4 text-white">ติดต่อด่วน</h4>
                        <ul className="list-unstyled d-flex flex-column gap-3">
                            <li className="d-flex align-items-center gap-3 text-secondary opacity-75">
                                <Phone size={18} className="text-primary" />
                                <span>045-611-909</span>
                            </li>
                            <li className="d-flex align-items-center gap-3 text-secondary opacity-75">
                                <Mail size={18} className="text-primary" />
                                <span>phisan.shukkhi@gmail.com</span>
                            </li>
                            <li className="d-flex align-items-center gap-3 text-secondary opacity-75">
                                <Facebook size={18} className="text-primary" />
                                <span>เอส แอล คอนกรีต (SlConcrete)</span>
                            </li>
                            <li className="d-flex align-items-center gap-3 text-secondary opacity-75">
                                <MapPin size={18} className="text-primary" />
                                <span>อ.เมือง จังหวัดศรีสะเกษ 33000 (โดยนายพิศาล สุขขี)</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="border-secondary opacity-25 my-4" />

                <div className="row align-items-center">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="text-secondary opacity-50 small mb-0">
                            &copy; {currentYear} หจก. เอส แอล คอนกรีต. สงวนลิขสิทธิ์ทั้งหมด.
                        </p>
                    </div>
                    <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
                        <div className="d-flex gap-3 justify-content-center justify-content-md-end">
                            <a href="#" className="text-secondary opacity-50 hover-opacity-100 transition-colors"><Facebook size={20} /></a>
                            <a href="mailto:phisan.shukkhi@gmail.com" className="text-secondary opacity-50 hover-opacity-100 transition-colors"><Mail size={20} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
