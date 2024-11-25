import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const initialOptions = {
    clientId: "test",
    currency: "USD",
    intent: "capture",
};
export default function App() {
    return (
        <PayPalScriptProvider options={{ initialOptions }}>
            <div style={{ textAlign: "center" , width: "200px"}}>
                <h1>This is where can pay</h1>
            <PayPalButtons style={{ layout: "horizontal" }} />
            </div>
        </PayPalScriptProvider>
    );
}