import React from 'react';

const NewsletterBox = () => {
  
  const onSubmitHandler = (event) => {
    event.preventDefault();
    alert("Thank you for subscribing to Local Link!");
  };

  return (
    <div className='bg-gray-100 py-10 px-5 md:px-20 text-center rounded-md shadow-md'>
      
      {/* Heading */}
      <h2 className='text-2xl md:text-3xl font-semibold text-gray-800'>
        Join <span className='text-blue-500'>Local Link</span> & Get <span className='text-red-500'>20% Off!</span>
      </h2>
      
      {/* Subheading */}
      <p className='text-gray-600 mt-2'>
        Subscribe to receive exclusive discounts and updates on home essentials & services.
      </p>

      {/* Subscription Form */}
      <form 
        onSubmit={onSubmitHandler} 
        className='flex flex-col sm:flex-row items-center justify-center gap-3 mt-5 mx-auto w-full sm:w-3/4 md:w-1/2'
      >
        <input 
          type="email" 
          placeholder='Enter your email' 
          className='w-full sm:flex-1 border border-gray-300 px-4 py-2 rounded-md outline-none focus:border-blue-500' 
          required
        />
        <button 
          type='submit' 
          className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition duration-300'
        >
          Subscribe
        </button>
      </form>

    </div>
  );
};

export default NewsletterBox;
