"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, ThumbsUp, Truck } from "lucide-react";

export default function AboutSection() {
    const features = [
        {
            icon: <Award className="text-primary mb-3" size={40} />,
            title: "มาตรฐาน ม.อ.ก.",
            desc: "ผลิตภัณฑ์คอนกรีตคุณภาพสูง ได้รับการรับรองมาตรฐาน",
        },
        {
            icon: <Briefcase className="text-primary mb-3" size={40} />,
            title: "ประสบการณ์ 20+ ปี",
            desc: "สั่งสมความเชี่ยวชาญด้านคอนกรีตมาอย่างยาวนาน",
        },
        {
            icon: <ThumbsUp className="text-primary mb-3" size={40} />,
            title: "ผู้ผลิตรายใหญ่",
            desc: "ผู้ผลิตและจำหน่ายรายใหญ่ที่สุดในจังหวัดศรีสะเกษ",
        },
        {
            icon: <Truck className="text-primary mb-3" size={40} />,
            title: "บริการจัดส่ง-เครื่องจักร",
            desc: "พร้อมบริการเครื่องจักรขนส่งครอบคลุมพื้นที่อีสานตอนใต้",
        },
    ];

    return (
        <section id="about" className="bg-light position-relative" style={{ zIndex: 1, padding: "100px 0" }}>
            <div className="container">
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-lg-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="section-title h1 fw-bold text-dark mb-4">
                                เกี่ยวกับเรา
                            </h2>
                            <p className="lead text-muted lh-lg">
                                ห้างหุ้นส่วนจำกัด เอส แอล คอนกรีต ก่อตั้งขึ้นในปี พ.ศ. 2535
                                ภายใต้วิสัยทัศน์ของผู้บริหารที่เล็งเห็นถึงการเติบโตของงานพัฒนาโครงสร้างพื้นฐานของประเทศ
                                เพื่อรองรับความต้องการผลิตภัณฑ์คอนกรีตที่มีคุณภาพและได้มาตรฐาน
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className="row g-4 mt-4">
                    {features.map((feature, index) => (
                        <div className="col-md-6 col-lg-3" key={index}>
                            <motion.div
                                className="card h-100 border-0 shadow-sm text-center p-4 hover-shadow transition-all"
                                style={{ borderRadius: "1rem" }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="card-body">
                                    {feature.icon}
                                    <h4 className="card-title fw-bold h5 mb-3 text-dark">{feature.title}</h4>
                                    <p className="card-text text-muted mb-0">{feature.desc}</p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
