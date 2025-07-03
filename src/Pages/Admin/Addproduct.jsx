import Layout from "../../Layouts/Layout";

function AddProduct(){
    return (
        <div>
            <Layout>
            <section  className="py-12">
                <div className="max-w-md mx-auto mt-8 bg-white p-7">
                    <h2 className="mb-4 text-2xl font-semibold">
                        Add Product
                    </h2>

                        

                    <form >

                          {/** Product name */}
                        <div className="mb-4">
                            <label 
                            htmlFor="productName"
                            className="block text-sm font-medium text-gray-700">
                                Product Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                required
                                minLength={5}
                                maxLength={20}
                                name="productName"
                                id="productName"
                                className="mt-1  p-2 w-full  border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm-text-sm"
                                placeholder="Enter product name"
                            />
                        </div>

                            {/** Description */}
                            <div className="mb-4">
                            <label 
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <input
                                type="text"
                                required
                                minLength={5}
                                maxLength={60}
                                name="description"
                                id="description"
                                className="mt-1  p-2 w-full  border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm-text-sm"
                                placeholder="Enter product description"
                            />
                        </div>

                            {/** Price */}
                             <div className="mb-4">
                            <label 
                            htmlFor="price"
                            className="block text-sm font-medium text-gray-700">
                                Price 
                            </label>
                            <input
                                type="text"
                                required
                           
                                name="price"
                                id="price"
                                className="mt-1  p-2 w-full  border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm-text-sm"
                                placeholder="Enter product price"
                            />
                        
                        </div>

                        {/** Quantity */}
                           <div className="mb-4">
                            <label 
                            htmlFor="quantity"
                            className="block text-sm font-medium text-gray-700">
                                    Product  Quantity
                            </label>
                            <input
                                type="number"
                                required
                                name="quantity"
                                id="quantity"
                                className="mt-1  p-2 w-full  border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm-text-sm"
                                placeholder="Enter product quantity"
                            />
                        </div>


                        {/** Category */}

                            <div className="mb-2">
                            <label 
                            htmlFor="category"
                            className="block text-sm font-medium text-gray-700">
                                Select Category <span className="text-red-500">*</span>
                            </label>
                            <select
                                      
                                name="category"
                                id="category"
                                className="mt-1  p-2 w-full  border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm-text-sm"
                            >
                              
                                <option value="veg">Vegeterian</option>
                                <option value="non-veg">Non-Vegeterian</option>
                                <option value="drinks">Soft drinks</option>
                                <option value="sides">Sides</option>
                            </select>
                        </div>

                        {/** Image  */}
                     <div className="mb-4">
                            <label 
                                htmlFor="productImage" 
                                className="block text-sm font-medium text-gray-700"
                            >
                                Product image <span className="text-red-600">(.jpg, .png, .jpeg )</span>
                            </label>
                            <input 
                                type="file" 
                                required
                                name="productImage" 
                                id="productImage" 
                                accept=".jpg, .jpeg, .png"
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                
                            /> 
                        </div>

                     <button
                            type="submit"
                            className="w-full bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
                        >
                            Add product
                        </button>

                    </form>
                </div>
            </section>
            </Layout>
          
        </div>
    )
}

export default AddProduct;