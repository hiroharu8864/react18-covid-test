import { FC, memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../components/pages/Home";

export const Router: FC = memo(() => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
});