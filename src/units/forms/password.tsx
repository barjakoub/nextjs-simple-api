export default function PasswordField() {
    return (
        <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Your Password
            </label>
            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" id="passwords" placeholder="***************" />
            {/* <p className="text-red-500 text-xs italic">Password.</p> */}
        </div>
    );
}