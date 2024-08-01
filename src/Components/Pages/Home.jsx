import { NavLink } from "react-router-dom";
import image from '../../Images/image1.jpg'
import money from '../../Images/money.jpeg';
import mon from '../../Images/money-pro.jpg'
import growth from '../../Images/growth.jpg'
import business from '../../Images/business.jpg'
import bank from '../../Images/bank.avif'

export const Home = () => {
    return <>

        <section>
            <div className="container-fluid p-0 overflow-hidden">
                <div className="row">
                    <div className="col-md-12">
                        {/* <img src={image} className="image"/> */}
                        <div className="image">
                            {/* <!-- code for vertical and horizontal center --> */}
                            <div className="container d-flex justify-content-center align-items-center hv">
                                <div>
                                    <h1><b>Connecting All Your Banking Needs</b></h1>
                                    <p className="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo necessitatibus
                                        nihil repellendus harum. Beatae voluptatum eius ad pariatur ut est qui nihil,
                                        accusantium
                                        nemo? Fuga.</p>
                                    <NavLink className="btn btn-primary"><b>Find Out More</b></NavLink>
                                </div>
                                {/* <!-- end code for vertical ans horizontal center --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 py-5">
                        <div className="text-left px-4 border-left">
                            <h2>Empowering Connections: Evolving the Online Journey</h2>
                            <p className="color">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic fuga sit illo
                                modi aut aspernatur tempore laboriosam saepe dolores eveniet."Empowering Connections: Evolving the Online Journey" encapsulates the transformative power of technology to enhance connectivity, foster meaningful interactions, and expand global networks. Through innovation in AI, AR/VR, and cybersecurity, it cultivates a dynamic digital landscape that enriches user experiences, drives collaboration, and paves the way for future internet advancements.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h2><i className="fa-solid fa-desktop fav"></i></h2>
                                <h5 className="card-title">Online Business</h5>
                                <p className="card-text color">
                                Online business thrives on digital platforms, enabling global reach, scalability, efficiency, and customer engagement like never before.</p>
                                <NavLink to="#" className="card-link">Read More</NavLink>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h2><i className="fa-regular fa-thumbs-up fav"></i></h2>
                                <h5 className="card-title">Business Plan</h5>
                                <p className="card-text color">
                                A business plan outlines goals, strategies, market analysis, financial projections, and operations to guide entrepreneurial success.</p>
                                <NavLink to="#" className="card-link">Read More</NavLink>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h2><i className="fa-solid fa-mobile-screen-button fav"></i></h2>
                                <h5 className="card-title">Mobile Bank</h5>
                                <p className="card-text color">
                                Mobile banking enables convenient access to financial services anytime, anywhere, through smartphones and tablets securely.</p>
                                <NavLink to="#" className="card-link">Read More</NavLink>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h2><i className="fa-regular fa-money-bill-1 fav"></i></h2>
                                <h5 className="card-title">Online Deposit</h5>
                                <p className="card-text color">Online deposit allows users to securely and conveniently transfer funds into bank accounts through digital platforms.</p>
                                <NavLink to="#" className="card-link">Read More</NavLink>
                            </div>
                        </div>
                    </div >
                </div >
            </div>
        </section >

        <section>
            <div className="container cont">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className="text-left py-5">
                            <h4>Progressive Percentage</h4>
                            <p className="color">Mollitia placeat modi explicabo voluptatum corporis unde Dicta, provident Rem
                                adipisci
                                Mollitia placeat modi. </p>
                            <h4>Easy Documentation</h4>
                            <p className="color">Mollitia placeat modi explicabo voluptatum corporis unde Dicta, provident Rem
                                adipisci
                                Mollitia placeat modi. </p>
                            <h4>Competitive Percentage</h4>
                            <p className="color">Mollitia placeat modi explicabo voluptatum corporis unde Dicta, provident Rem
                                adipisci
                                Mollitia placeat modi. </p>
                        </div>
                    </div>
                    <div className="col-lg-6 py-5 ">
                        <img src={money}
                            className="rounded money-img" width="500px" />
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center py-3">
                            <div className="fifth">
                                <div className="back">
                                    <div className="container d-flex justify-content-center align-items-center hv">
                                        <div>
                                            <h2> We Are Here To Ease The Financial Obstacles </h2>
                                            <p>We aim to simplify financial hurdles by offering accessible solutions and personalized guidance for every individual.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="history-info">

                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h1><i className="fa-regular fa-handshake fav"></i></h1>
                                <h5 className="card-title">Innovative Solutions</h5>
                                <p className="card-text">Innovative solutions revolutionize norms, leveraging creativity and technology to tackle challenges from new angles. They inspire progress, merging bold ideas with practical implementation to redefine possibilities.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h1><i className="fa-solid fa-shield-halved fav"></i></h1>
                                <h5 className="card-title">Best Support</h5>
                                <p className="card-text">The best support empowers individuals, providing guidance and resources tailored to their needs. It fosters trust, empathy, and collaboration, ensuring challenges are met with understanding and solutions through proactive engagement and genuine care.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h1><i className="fa-solid fa-clock-rotate-left fav"></i></h1>
                                <h5 className="card-title">On Time Services</h5>
                                <p className="card-text">On-time services epitomize reliability and efficiency, honoring commitments with precision and consistency. They instill trust and satisfaction, meeting deadlines and exceeding expectations by prioritizing punctuality and quality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >

        <div className="container cont mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="py-5">
                        <div className="text-left px-4 border-left">
                            <h2><b>Making The Best Out Of Your Income</b></h2>
                            <p>Making the best out of your income involves budgeting wisely, saving diligently, investing strategically, and planning for long-term financial goals effectively.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img src={mon}
                            className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Money Protection</h5>
                            <p className="card-text">Money protection involves secure banking practices, insurance coverage, prudent investment choices, and vigilant monitoring of financial transactions for fraud prevention.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src={growth}
                            className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Growth Guranteed</h5>
                            <p className="card-text">Growth protection entails diversifying investments, monitoring market trends, adjusting strategies, and mitigating risks to sustain and enhance financial portfolio performance.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src={business}
                            className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Business Support</h5>
                            <p className="card-text">Business support encompasses providing resources, mentorship, networking opportunities, and strategic advice to foster growth and success for entrepreneurs and enterprises.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="container-fluid p-0 mt-5">
            <div className="row">
                <div className="col-md-12 ">
                    <div>
                        <div className="ninth">
                            <div className="back">
                                <div className="container d-flex justify-content-center align-items-center hv">
                                    <div>
                                        <h3 className="font"><b>Our Worldwide Integration Partner Work With Long Time
                                            Relationship</b></h3>
                                        <p className="para">
                                        A worldwide integration banking partner facilitates seamless financial transactions, offers global banking services, and ensures compliance with international regulations for diverse client needs.
                                        </p>
                                        <NavLink className="btn btn-success btn-theme2 mt-md-5 mt-4" to="/contact"> Find Out
                                            More</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    </>
}