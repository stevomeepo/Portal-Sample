import { useSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (session) {
        router.push("/dashboard");
      }
    }
  }, [session, loading, router]);

  const handleSubmit = async (event) => {
    event.preventDefault();
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
  };

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
        <div className="w-full max-w-xs">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pb-8 mb-4 flex flex-col space-y-4">
                <div className="text-center mb-4">
                </div>
                <div className="text-center font-bold text-2xl">Employee Portal</div>
                {errorMessage && <div className="text-red-500 text-center mb-2">{errorMessage}</div>}
                <input name="email" type="email" placeholder="Email" required className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <div className="mb-4">
                    <input name="password" type={showPassword ? "text" : "password"} placeholder="Password" required className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
                    <div className="flex items-center">
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
                    </div>
                </div>
                <button type="submit" className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
                <img src="/enerlites.jpg" alt="Logo" className="mx-auto" style={{ width: '100px', height: 'auto' }} />
            </form>
        </div>
  </div>
  );
}