"use client"
import { motion } from "framer-motion";
import CountUp from "react-countup";

const counterData = [
    {number:7849, title:'SQURE AREA COMPLEX', icon:'flaticon-parquet'},
    {number:8749, title:'SATISFIED CLIENTS', icon:'flaticon-happy'},
    {number:4157, title:'COMPLETED PROJECTS', icon:'flaticon-briefing'},
    {number:2458, title:'CUP OF COFFEE', icon:'flaticon-coffee-cup'},
];


const CounterBlog = () => {
    return (
        <>
            <div className="row">
                {counterData.map((item, i) => (                    
                    <div className="col-lg-3 col-sm-6" key={i}>
                        <motion.div className="icon-bx-wraper style-6 center m-b30"
                            initial={{ opacity: 0, y: "-20%" }}
                            whileInView={{ opacity: 1, y: "0%" }}
                            transition={{ duration: 1 }}
                        >
                            <div className="icon-content">
                                <h2 className="counter m-b10 text-primary">
                                    <CountUp end={item.number} duration={5}/>                                    
                                </h2>
                                <h6 className="title m-b20">{item.title}</h6>
                            </div>
                            <div className="icon-lg">
                                <span className="icon-cell text-primary"><i className={ item.icon } /></span> 
                            </div>
                        </motion.div>
                    </div>
                ))}                
            </div>   
        </>
    );
};

export default CounterBlog;