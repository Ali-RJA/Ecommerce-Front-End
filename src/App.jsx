// 修正 import 语句
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Purchase from './components/purchase';
import PaymentEntry from './components/paymentEntry';
import ShippingEntry from './components/shippingEntry';
import ViewOrder from './components/viewOrder';
import ViewConfirmation from './components/viewConfirmation';  // 注意大小写

function App() {
    return (
        <div className="App">  {/* 修正 className 的格式 */}
            <Router>
                <div className="content">
                    <Routes>
                        <Route path="/purchase" element={<Purchase />} />
                        <Route path="/" element={<Navigate replace to="/purchase" />} />
                        {/* 修正 Route 标签的格式 */}
                        <Route path="/purchase/paymentEntry" element={<PaymentEntry />} />
                        <Route path="/purchase/shippingEntry" element={<ShippingEntry />} />
                        <Route path="/purchase/viewOrder" element={<ViewOrder />} />  {/* 注意大小写 */}
                        <Route path="/purchase/viewConfirmation" element={<ViewConfirmation />} />  {/* 注意大小写 */}
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
