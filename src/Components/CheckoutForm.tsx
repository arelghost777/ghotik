export default function CheckoutForm() {
  const handleSubmit=(e: { preventDefault: () => void; })=>{
    e.preventDefault()
  }
  
  return (
    <>
      <div className='flex flex-col max-w-sm outline outline-black/5 rounded p-5'>
        <fieldset className="mt-5 p-5 border border-gray-200 rounded-lg">
          <legend className="text-md font-semibold">YOUR INFORMATION</legend>
          <form className="space-y-4">
            <label className="block">
              <span className="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*']">
                Email
              </span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </label>
            {/* Add more fields as needed */}
          </form>
        </fieldset>
        <form onSubmit={handleSubmit} className="space-y-5 flex flex-col justify-center items-center my-5">
          <fieldset className="w-full border border-gray-200 p-5 rounded-lg">
            <legend className="text-lg font-semibold mb-3">Choose Payment Method</legend>
        
            {/* Google Pay */}
            <label className="flex items-center justify-between p-5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer peer-checked:bg-indigo-50 dark:peer-checked:bg-indigo-900 has-checked:bg-indigo-50 has-checked:text-indigo-900 has-checked:ring-indigo-200 dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-200 dark:has-checked:ring-indigo-900">
              <div className="flex items-center space-x-3">
                <i className="fa-brands fa-google-pay text-2xl"></i>
                <span className="text-gray-700 dark:text-gray-200">Google Pay</span>
              </div>
              <input
                type="radio"
                name="paymentMethod"
                className="form-radio h-5 w-5 text-indigo-500 border-gray-300 focus:ring-indigo-500 peer checked:border-indigo-500"
              />
            </label>
        
            {/* Apple Pay */}
            <label className="flex items-center justify-between p-5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer peer-checked:bg-indigo-50 dark:peer-checked:bg-indigo-900 has-checked:bg-indigo-50 has-checked:text-indigo-900 has-checked:ring-indigo-200 dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-200 dark:has-checked:ring-indigo-900">
              <div className="flex items-center space-x-3">
                <i className="fa-brands fa-apple-pay text-2xl"></i>
                <span className="text-gray-700 dark:text-gray-200">Apple Pay</span>
              </div>
              <input
                type="radio"
                name="paymentMethod"
                className="form-radio h-5 w-5 text-indigo-500 border-gray-300 focus:ring-indigo-500 peer checked:border-indigo-500"
              />
            </label>
        
            {/* Visa */}
            <label className="flex items-center justify-between p-5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer peer-checked:bg-indigo-50 dark:peer-checked:bg-indigo-900 has-checked:bg-indigo-50 has-checked:text-indigo-900 has-checked:ring-indigo-200 dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-200 dark:has-checked:ring-indigo-900">
              <div className="flex items-center space-x-3">
                <i className="fa-brands fa-cc-visa text-2xl"></i>
                <span className="text-gray-700 dark:text-gray-200">Visa</span>
              </div>
              <input
                type="radio"
                name="paymentMethod"
                className="form-radio h-5 w-5 bg-indigo-500 text-indigo-500 border-gray-300 focus:ring-indigo-500 peer checked:border-indigo-500"
              />
            </label>
          </fieldset>
        
          {/* Bouton "Buy now" */}
          <button
            type="submit"
            className="bg-green-500 active:bg-green-700 text-white rounded-lg w-full py-3 font-semibold hover:bg-green-600 transition-colors"
          >
            Buy now
          </button>
        </form>
      </div>
    </>
  );
};