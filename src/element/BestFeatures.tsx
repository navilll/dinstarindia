"use client"

import { motion } from "framer-motion";
const featuresBlog = [
    {name:'Concept', icon:'flaticon-concept'},
    {name:'Idea', icon:'flaticon-project-management'},
    {name:'Design', icon:'flaticon-graphic-designer'},
    {name:'Excecution', icon:'flaticon-execution'},
]

const BestFeatures = () => {
    return (
        <div className="row features-wraper-1">
            {featuresBlog.map((item, i) => (
                <motion.div className="col-lg-3 col-sm-6 aos-item" key={i}
                    initial={{ opacity: 0, y: "20%" }}
                    whileInView={{ opacity: 1, y: "0%" }}
                    transition={{ duration: 1 }}
                >
                    <div className="icon-bx-wraper style-2 center m-b30">
                        <div className="icon-bx-md bg-white icon-bx">
                            <span className="icon-cell text-primary"><i className={item.icon} /></span> 
                        </div>
                        <div className="icon-content">
                            <h4 className="title m-b0">{item.name}</h4>
                            <div className="dz-separator style-2 bg-primary"></div>
                            <p>Maecenas eget commodo risus. Praesent facilisis iaculis dapibus.</p>
                        </div>
                    </div>
                </motion.div>
            ))}           
        </div>
    );
};

export default BestFeatures;