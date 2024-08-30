import '../index.css'
import img from '../../src/images/file.png'
import { Link } from 'react-router-dom';
import email from "../images/email.png";
import lock from "../images/lock.png";

function Login() {
  return (
    <div className="font-mono bg-gradient-to-r from-[#fff1eb] to-[#ace0f9] h-screen">
      <div className='flex items-center justify-center h-screen'>
        <div class="flex items-center justify-center h-screen">
          <form className='h-perfect bg-white bg-opacity-40 p-6 rounded-lg shadow-md'>
            <h1 className='mt-7 flex justify-center text-3xl mb-6'>Login</h1>
            <div className='my-3 relative'>
            <img
                src={email}
                alt="Descrição da imagem"
                className="absolute inset-y-2 right-7 flex items-center h-5 w-5" // Posicionamos a imagem absolutamente no canto superior direito
              />
              <input type="email" id="email" name="email" required placeholder="Email"
                className="w-80 border border-gray-300 rounded-lg py-2 px-4 placeholder-opacity-20 bg-opacity-40"
              />
            </div>
            <div className='my-3 relative'>
            <img
                src={lock}
                alt="Descrição da imagem"
                className="absolute inset-y-2 right-7 flex items-center h-5 w-5" // Posicionamos a imagem absolutamente no canto superior direito
              />
              <input type="password" id="senha" name="senha" required placeholder="Password"
                className="w-80 border border-gray-300 rounded-lg py-2 px-4 placeholder-opacity-20 bg-opacity-40"
              />
            </div>
            <button className="bg-gray-200 hover:opacity-40 w-80 border border-gray-300 rounded-lg py-2 px-4" type="submit">Login</button>
            <div class='flex my-7'>
            <Link to="/signup">
              <p class='text-left mx-6 hover:opacity-40'>Create An Account</p>
            </Link>
              <p className='text-right hover:opacity-40'>Forgot Password?</p>
            </div>
          </form>
            <div className='flex ml-auto rounded-lg shadow-md'>
            <img
              src={img}
              alt="Descrição da imagem"
              className="h-perfect"
              />
              </div>
        </div>
      </div>
    </div>
  );
}

export default Login;