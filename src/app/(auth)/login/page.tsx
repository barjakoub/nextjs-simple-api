import Password from "@/units/forms/password"
import EmailField from "@/units/forms/email"
import Link from "next/link";

export default function LoginForm() {
    return (
        <>
            <div className="container flex justify-center items-center bg-gray-500 h-screen">
                <div className="w-full max-w-xs border-gray-300">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <EmailField />
                        <Password />
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Sign In
                            </button>
                            {/* <a className="" href="#">
                                Register
                            </a> */}
                            <Link href="/register" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Register</Link>
                        </div>
                    </form>
                    <p className="text-center text-gray-500 text-xs">
                        &copy;2020 Acme Corp. All rights reserved.
                    </p>
                </div>
            </div>
        </>
    )
}