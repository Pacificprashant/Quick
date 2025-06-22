import React from "react";
import Navbar from "./components/Navbar";
import { Routes,Route ,useLocation} from "react-router-dom";
import Home from "./pages/Home";
import Seatlayout from "./pages/Seatlayout";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import MyBookings from "./pages/MyBookings";
import Favor from "./pages/Favor";
import Footer from "./components/Footer";
import{Toaster} from "react-hot-toast";
import Layout from "./pages/admin/Layout";
import AddShows from "./pages/admin/AddShows";
import ListShows from "./pages/admin/ListShows";
import ListBooking from "./pages/admin/ListBooking";
import Dashboard from "./pages/admin/Dashboard";




function App() {
  const isAdminRoute = useLocation().pathname.startsWith('/admin');
  return (
  <> 
        <Toaster/>
       {!isAdminRoute && <Navbar/>}
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/movies/:id" element={<MovieDetails/>} />
          <Route path="/movies/:id/:date" element={<Seatlayout/>} />
          <Route path="/my-bookings" element={<MyBookings/>} />
          <Route path="Favor" element={<Favor/>} />
          <Route path="/admin/*" element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="add-shows" element={<AddShows/>}/>
          <Route path="list-shows" element={<ListShows/>}/>
          <Route path="list-bookings" element={<ListBooking/>}/>


          </Route>
       </Routes>
        {!isAdminRoute && <Footer/>}

  </>

  )
}
export default App;