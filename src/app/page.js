import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "./components/navbar";
import FeaturedProperties from "./components/featuredProperties";
import ClientOne from "./components/clientOne";
import Broker from "./components/broker";
import AboutUs from "./components/about";
import GetInTuch from "./components/getInTuch";
import Footer from "./components/footer";

import SelectThree from "./components/select/selectThree";
import TextAnimation from "./components/textAnimation";
import ScrollTop from "./components/scrollTop";
import Categories from "./components/categories";
import ClientTwo from "./components/clientTwo";
import VideoTwo from "./components/modalVideo/videoTwo";
import SelectTwo from "./components/select/selectTwo";
import AboutCounter from "./components/counter/aboutCounter";
import Featuredproperties from "./components/featuredProperties";
import PropertyType from "./components/propertyTypes";
import Blog from "./components/blog";
import LogoNavbar from './assets/imgTerritorial/logoTerritorial.svg';
import ImgHeader from '/public/images/Territorial/imgHeader.svg';

export default function Home() {
    return (
        <>
        <Navbar navClass="defaultscroll sticky" logolight={true} menuClass="navigation-menu nav-left nav-light" />
        
        <section className="bg-half-170 d-table align-items-center w-100" style={{backgroundImage: `url('/images/Territorial/imgHeader.svg')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="bg-overlay bg-linear-gradient-2"></div>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-12 text-center">
                        <div className="title-heading text-center">
                            <h4 className="heading fw-bold text-white title-dark mb-3">Una manera fácil de encontrar la <br/> propiedad de sus sueños</h4>
                            <p className="para-desc text-white-50 title-dark mx-auto mb-0">Una gran plataforma para comprar, vender y alquilar tus propiedades sin ningún agente ni comisiones.</p>
                        </div>
                        <SelectTwo/>
                    </div>
                </div>
            </div>
        </section>
       
        <section className="section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <Image src='/images/Territorial/imgPortal.svg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded-top-pill rounded-5" alt="Towntor"/>
                    </div>

                    <div className="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <h6 className="text-primary fw-medium mb-2">Our story: Towntor</h6>
                            <h4 className="title mb-3">Efficiency. <br/> Transparency. Control.</h4>
                            <p className="text-muted para-desc mb-0">Towntor developed a platform for the Real Estate marketplace that allows buyers and sellers to easily execute a transaction on their own. The platform drives efficiency, cost transparency and control into the hands of the consumers. Towntor is Real Estate Redefined.</p>
                            <AboutCounter/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-3">Property Types</h4>
                            <p className="text-muted para-desc mb-0">A great platform to buy, sell and rent your properties without any agent or commissions.</p>
                        </div>
                    </div>
                </div>
                <PropertyType/>
            </div>

            <div className="container mt-100 mt-60">
                <Featuredproperties/>
            </div>

            <div className="container mt-100 mt-60">
                <AboutUs/>
            </div>

            <div className="container mt-100 mt-60">
                <Broker/>
                
            </div>

            <div className="container mt-100 mt-60 client">
                <ClientTwo/>
            </div>

            <div className="container mt-100 mt-60">
                <Blog/>
            </div>
        </section>
        
        <Footer/>
        <ScrollTop/>
        </>
    );
}
