import React from 'react'

const LoadingSkeliton = () => {
  return (
    <div>
      {[...new Array(2)].map((_, index) => (
        <div
          className={
            10 - 1 === index
              ? "flex justify-between items-center pt-4 pb-5"
              : "flex justify-between items-center pt-4 pb-5 bordercolor"
          }
          key={index}
        >
          <div className="flex justify-center items-center gap-[14px]">
           
              // Skeleton for image
              <div className="w-12 h-12 bg-gray-300 rounded-full animate-pulse"></div>
          

            <div>
             
                
                  {/* Skeleton for heading */}
                  <div className="w-32 h-4 bg-gray-300 rounded-md animate-pulse mb-2"></div>
                  {/* Skeleton for subheading */}
                  <div className="w-24 h-3 bg-gray-300 rounded-md animate-pulse"></div>
              
           
            </div>
          </div>

         
            <div className="w-16 h-6 bg-gray-300 rounded-md animate-pulse"></div>
         
        
            <div className="w-20 h-3 bg-gray-300 rounded-md animate-pulse"></div>
          
        </div>
      ))}
    </div>
  );
}

export default LoadingSkeliton