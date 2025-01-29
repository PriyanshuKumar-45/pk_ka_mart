import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';
import customer1 from '../../assets/images/customer1.jpeg';
import customer2 from '../../assets/images/customer2.jpeg';
import customer3 from '../../assets/images/customer3.jpeg';

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;

    // Conditional classes
    const containerClass = mode === 'dark' ? 'bg-gray-900' : 'bg-gray-100';
    const headingClass = mode === 'dark' ? 'text-white' : 'text-black';
    const subheadingClass = mode === 'dark' ? 'text-white' : 'text-gray-700';
    const textClass = mode === 'dark' ? 'text-white' : 'text-gray-500';
    const nameClass = mode === 'dark' ? 'text-[#ff4162]' : 'text-gray-900';

    return (
        <section className={`body-font mb-10 ${containerClass}`}>
            <div className="container px-5 py-10 mx-auto">
                <h1 className={`text-center text-3xl font-bold ${headingClass}`}>Testimonial</h1>
                <h2 className={`text-center text-2xl font-semibold mb-10 ${subheadingClass}`}>
                    What our <span className="text-pink-500">customers</span> are saying
                </h2>
                <div className="flex flex-wrap -m-4">
                    {[customer1, customer2, customer3].map((customer, index) => (
                        <div key={index} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src={customer}
                                />
                                <p className={`leading-relaxed ${textClass}`}>
                                    {index === 0 && "I found exactly what I was looking for at an unbeatable price. The checkout process was smooth, and my order arrived earlier than expected."}
                                    {index === 1 && "Absolutely love this store! The quality of the products exceeded my expectations. Fast shipping and excellent customer service!"}
                                    {index === 2 && "Customer support was incredibly helpful with my order. The item was top-notch, and the overall shopping experience was fantastic!"}
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className={`font-medium title-font tracking-wider text-sm uppercase ${nameClass}`}>
                                    {index === 0 && "Srivastava"}
                                    {index === 1 && "Shreya Ghoshal"}
                                    {index === 2 && "Aarohi"}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
