import React from "react";

import { Route, Routes } from "react-router-dom"
import Component3 from "./Component3/Component3.js";
import Component3_1 from "./Component3/Component3_1.js";
import Component3_2 from "./Component3/Component3_2.js";

function Pages(){
    return (
        <Routes>
            <Route path="/" element={<Component3 />} />
            <Route path="/Component3/Component3_1" element={<Component3_1 />} />
            <Route path="/Component3/Component3_2" element={<Component3_2 />} />
        </Routes>
    )
}

export default Pages;