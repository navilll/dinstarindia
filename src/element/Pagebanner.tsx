import Link from "next/link";

interface bnrcontent { 
    maintitle: string;
    currenttitle: string;
    parent: string;   
} 

const Pagebanner = ({maintitle, currenttitle, parent } : bnrcontent) => {
    return (
        <>
			<div className="container">
				<div className="dz-bnr-inr-entry">
                    <h1>{maintitle}</h1>			
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/">{parent}</Link></li>
                            <li className="breadcrumb-item">{currenttitle}</li>
						</ul>
					</nav>			
				</div>
			</div>
			<div className="follow-info">
				<div className="inner-info">
					<h6 className="title text-primary">Follow Us On:</h6>
					<ul>
						<li><Link href="#" scroll={false}><i className="fab fa-facebook-f" /></Link></li>
						<li><Link href="#" scroll={false}><i className="fab fa-instagram" /></Link></li>
						<li><Link href="#" scroll={false}><i className="fab fa-twitter" /></Link></li>
						<li><Link href="#" scroll={false}><i className="fab fa-youtube" /></Link></li>
						<li><Link href="#" scroll={false}><i className="fab fa-dribbble" /></Link></li>
						<li><Link href="#" scroll={false}><i className="fab fa-pinterest-p" /></Link></li>
					</ul>
				</div>
			</div>
		</>
    );
};

export default Pagebanner;