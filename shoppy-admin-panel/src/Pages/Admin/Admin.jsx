import Sidebar from '../../Components/Sidebar/Sidebar'
import AddProduct from '../../Components/addProduct/AddProduct'
import Listproduct from '../../Components/listProduct/Listproduct'
import './Admin.css'
import { Routes, Route } from 'react-router-dom'
const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
      <Routes>
        <Route path='/addproduct'element={<AddProduct/>} />
        <Route path='/listproduct'element={<Listproduct/>} />
      </Routes>
    </div>
  )
}

export default Admin