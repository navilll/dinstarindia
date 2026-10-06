import Image from 'next/image';
import IMAGES from '../component/theme';

const progressData = [
    { name:'VOIP GATEWAYS', percent:'90%', },
    { name:'IP PBX AND SBC', percent:'80%', },
    { name:'IP PHONES AND SIP INTERCOMS', percent:'95%', },
];

const ProgressSection = () => {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 m-b30">
                    <div className="dz-media-1 aos-item" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
                        <Image src={IMAGES.AboutImage1} alt="" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="section-head style-1">
                        <h2 className="title">ONE-STOP <span className="text-primary">COMMUNICATION SOLUTIONS</span></h2>
                        <div className="dz-separator style-1 text-primary"></div>
                    </div>
                    <p className="m-b30">DINSTAR provides every customer with one-stop solutions, professional technical service, excellent user experience, and a high-efficient communication network.</p>
                    {progressData.map((item, i)=>(
                        <div className="progress-bx style-1 m-b40" key={i}>
                            <div className="progress-info">
                                <h6 className="title">{item.name}</h6>
                                <h4 className="progress-value">{item.percent}</h4>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" style={{width: item.percent }}></div>
                            </div>
                        </div>
                    ))}   
                    
                </div>
            </div>
        </div>
    );
};

export default ProgressSection;