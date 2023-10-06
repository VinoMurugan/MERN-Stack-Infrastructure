
import LoginForm from "./LogInForm"
import SignUpForm from "./SignUpForm";


export default function AuthPage({setUser}) {
  return (
    <main>
    <h1>AuthPage</h1>
   <SignUpForm setUser={setUser} />
   <LoginForm setUser={setUser}/>
    </main>
  )
}
