import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from 'firebase/auth'
import { authorization } from '../../services/firebase';

import { InputField } from '../../components/InputField';
import { SignInButton } from "../../components/SignInButton";

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmitForm (event: FormEvent) {
    event.preventDefault()

    signInWithEmailAndPassword(authorization, email, password)
      .then(() => navigate('/admin', { replace: true}))
      .catch(error => {
        console.log('error: ', error)
      })
  }
 
  return (
    <main className="flex w-full h-screen items-center justify-center flex-col">
      <Link to="/">
        <h1 className="mt-11 mb-7 text-gray-200 font-bold text-5xl">
          Sign
          <span className="bg-gradient-to-r from-purple-800 to-purple-400 bg-clip-text text-transparent">
            In
          </span>
        </h1>
      </Link>

      <form className="w-full max-w-lg flex flex-col px-2" onSubmit={handleSubmitForm}>
        <InputField 
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <InputField 
          placeholder="Password"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <SignInButton 
          type="submit"
        />
      </form>
    </main>
  );
}
