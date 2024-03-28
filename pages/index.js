import { useSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (session) {
        router.push("/dashboard");
      }
    }
  }, [session, loading, router]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSigningIn(true);
    setErrorMessage('');
    const email = event.target.email.value;
    const password = event.target.password.value;

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!result.error) {
        router.push("/dashboard");
    } else {
        console.error(result.error);
        setErrorMessage('Invalid email or password.');
    }
    setIsSigningIn(false);
  };

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/backgroundDesign.jpg')" }}>
        <div className="w-full max-w-xs px-4 py-8">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input name="email" type="email" placeholder="Email" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input name="password" type={showPassword ? "text" : "password"} placeholder="************" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
              <input id="showPasswordCheckbox" type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} className="opacity-0 absolute h-4 w-4" />
              <label htmlFor="showPasswordCheckbox" className="flex items-center cursor-pointer">
                <span className="flex items-center justify-center h-4 w-4 border border-gray-300 rounded bg-white mr-2">
                  {showPassword && (
                    <svg className="fill-current text-white h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="20" fill="#6b46c1"/>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </span>
                Show Password
              </label>
              {errorMessage && <div className="text-red-500 text-center mt-2">{errorMessage}</div>}
            </div>
            <div className="flex items-center justify-between">
              <button 
                type="submit" 
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex justify-center items-center relative"  
                disabled={isSigningIn}
                style={{ minWidth: "100px", minHeight: "40px" }}
              >
                {isSigningIn ? <div className="spinner"></div> : "Sign In"}
              </button>
              <a className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800" href="#">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center bg-black text-white px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to</h2>
          <h2 className="text-4xl font-bold mb-4">Enerlites Employee Portal</h2>
          <p className="text-xl">Login to access your account!</p>
        </div>
        <div>
          <img src="/enerlites.jpg" alt="Logo" className="mx-auto" style={{ width: '100px', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
}