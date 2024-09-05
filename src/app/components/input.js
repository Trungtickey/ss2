const Input = () => {
    return (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Label
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="text"
              className="block w-full pl-3 pr-10 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              placeholder="Placeholder"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <span className="text-gray-500 sm:text-sm"></span>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-500">Helper Text</p>
        </div>
      );
    };
    
    export default Input;