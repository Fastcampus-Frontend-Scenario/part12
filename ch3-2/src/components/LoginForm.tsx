import { Dispatch, SetStateAction, useDebugValue, useState } from "react";

const usePassword = (defValue: string): [string, Dispatch<SetStateAction<string>>] => {
    const [password, setPassword] = useState(defValue);
    useDebugValue(password);
    return [password, setPassword];
}
type Props = {
    defaultUsername?: string;
}
const LoginForm: React.FC<Props> = ({ defaultUsername }) => {
    const [username, setUsername] = useState(defaultUsername ?? '');
    const [password, setPassword] = usePassword("");
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <form
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px 0",
                padding: 16,
            }}
        >
            <input
                name="username"
                placeholder="Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.currentTarget.value)}
            />
            <input
                name="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
            />

            <div>
                <input
                    id="rememberMe"
                    name="remember_me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                />
                <label htmlFor="rememberMe">Remember me</label>
            </div>

            <input type="submit" name="login" value="Log in" />
        </form>
    );
};

export default LoginForm;