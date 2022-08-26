import { Outlet, Routes, Route } from "react-router-dom"
import { ActivityForm } from "../activitiesform/ActivitiesForm"
import { MainPage } from "../mainpage/MainPage"
import { ProfilePage } from "../profilepage/ProfilePage"

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

                <Route path="/activities" element={
                    <ActivityForm />
                } />
                
            </Route>
        </Routes>
    )
}