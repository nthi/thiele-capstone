import { Outlet, Routes } from "react-router-dom"

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path ="/" element={
                <>
                    <h1>What Should We Do today?</h1>

                    <Outlet />
                </>
            }>
                <Route path="/main" element={
                    <MainPage />
                } />
                
                <Route path="/profile" element={
                    <ProfilePage />
                } />
                
            </Route>
        </Routes>
    )
}