import { Outlet, createBrowserRouter, RouterProvider} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Products from "./components/Products"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { allProduct } from "./api/api"
import CartItem from "./components/CartItem"
import { ToastContainer } from "react-toastify"
import { useSelector } from "react-redux"
import Login from "./pages/Login"
// import Cart

const Layout = ()=>{
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                    loader: allProduct
                },{
                    path: 'cart',
                    element: <Cart />
                },
                {
                    path: 'product/:title',
                    element: <CartItem />
                },
                {
                    path: 'login',
                    element: <Login />
                }
            ]
        }
    ])

    // const {productData} = useSelector(state => state.ecomm)
    // console.log(productData);

    return(
        <>
            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <RouterProvider router={router} />
        </>
    )

  
}

export default App
