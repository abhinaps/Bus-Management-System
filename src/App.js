// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchBus from './components/SearchBus';
import BookTicket from './components/BookTicket';
import MyBooking from './components/MyBooking';
import AdminLogin from './components/AdminLogin';
import DeleteEntity from './components/DeleteEntity';
import AdminService from './services/AdminService';
import AddEntity from './components/AddEntity';
import ViewBooking from './components/ViewBooking';
import AdminDashBoard from './components/AdminDashBoard';
import OperatorDashboard from './components/OperatorDashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>

          <Route path='/' element={<SearchBus />} />
          <Route path='/bookTicket' element={<BookTicket />} />
          <Route path='/myBooking' element={<MyBooking />} />

          <Route path='/adminLogin' element={<AdminLogin />} />
          <Route path='/welcomeAdmin' element={<AdminDashBoard />} />
          <Route path='/addCustomer' element={<AddEntity addFuntion={AdminService.addCustomer} />} />
          <Route path='/addOperator' element={<AddEntity addFuntion={AdminService.addOperator} />} />
          <Route path='/deleteOperator' element={<DeleteEntity deleteFuntion={AdminService.deleteOperator} />} />
          <Route path='/deleteCustomer' element={<DeleteEntity deleteFuntion={AdminService.deleteCustomer} />} />

          <Route path='/welcomeOperator' element={<OperatorDashboard />} />
          <Route path='/viewBooking' element={<ViewBooking />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
