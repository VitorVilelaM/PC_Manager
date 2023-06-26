import React from "react";
import { Navbar } from "../../layout/Navbar/Navbar";
import { Footer } from "../../layout/Footer/Footer";
import { FormsIP } from "../../components/FormIP/Forms";

export function Home(){
    return(
        <div className="app">
            <Navbar />
            <FormsIP />
            <Footer />
       </div>
    )
}   