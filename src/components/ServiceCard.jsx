import React from 'react'

const ServiceCard = ({service, index}) => {
    return (
        <div key={index} className='w-full border border-gray-300 rounded-xl bg-warm-white px-4 py-2 space-y-2'>
            <div className="h-20 w-40">
                <img src={service.icon} alt={service.title} className='w-full h-full object-contain'/>
            </div>
            <h3 className='text-2xl font-semibold'>{service.title}</h3>
            <p className='text-gray-500 lg:text-sm text-balance'>{service.subtitle}</p>
        </div>
    )
}

export default ServiceCard