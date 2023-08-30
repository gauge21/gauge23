import { User } from "./User/User";
import { Login } from "./Login"
import Gauge from "./Gauge";

export function Layout() {
    const name = User()
    return(
        <div>
            <h1>Welcome {name}</h1>
            <Login /> 
            <Gauge />
        </div>
    ) 
}