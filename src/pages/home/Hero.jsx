import React from 'react';
import HeroIllustration from '../../assets/Illustration.png';
import SlideInFromLeft from '../../animation/SlideInFromLeft';
import SlideInFromRight from '../../animation/SlideInFromRight';
import GrowIn from '../../animation/GrowIn';

import hpue from '../../assets/brands/hpuebla.png';
import cmun from '../../assets/brands/Colegio Mexicano de Urología Nacional.png';
import logo from '../../assets/brands/logo.svg';

    const brands = [
        { src: hpue, alt: 'logo' },
        { src: cmun, alt: 'logo' },
        { src: logo, alt: 'logo' },
    ];

    const Hero = () => {
    return (
        <>
            <div className='flex flex-col sm:flex-row items-start gap-[35px] py-[70px]'>
                <SlideInFromRight className='w-full sm:order-2'>
                    <img src={HeroIllustration} alt="hero image" />
                </SlideInFromRight>
                <SlideInFromLeft className='flex flex-col items-start gap-[35px] sm:order-1'>
                    <h2 className='font-semibold text-[35px] sm:text-[40px] md:text-[50px] lg:text-[60px]'>Dr. Ivo Humberto <br /> Pineda Somodevilla</h2>
                    <h3 className='font-semibold text-[15px] sm:text-[20px] md:text-[30px] lg:text-[40px]'>Urólogo</h3>
                    <p className='text-[20px]'>Me distingue la discreción, profesionalismo, trato amable, así como conocimientos actualizados y tecnología de última generación para el tratamiento de su padecimiento.</p>
                   <a href="https://wa.me/5212222696218?text=Hola%20doctor,%20encontré%20su%20contacto%20en%20su%20sitio%20web%20y%20me%20gustaría%20agendar%20una%20cita" target='_blank'> <button className='bg-[#0284C7] text-white text-[20px] px-4 py-2 rounded-lg'>Agendar Cita</button></a>
                </SlideInFromLeft>
            </div>
           
            <div className='flex gap-4 flex-wrap justify-between'>
                {brands.map((brand, index) => (
                    <GrowIn key={index}>
                        <img
                            src={brand.src}
                            alt={brand.alt}
                            className="h-16 w-auto"
                        />
                    </GrowIn>
                ))}
            </div>
           
        </>
    );
}

export default Hero;