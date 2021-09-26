import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import Amplify from "aws-amplify"
import awsExports from "./aws-exports"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import App from "./App"
import { createReduxStore } from "./createReduxStore"

Amplify.configure(awsExports)

const store = createReduxStore()

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
)
