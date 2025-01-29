
import React from 'react';
import { motion } from 'framer-motion';

const SlideInFromRight = ({ children, className }) => {
    const variants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            variants={variants}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
};

export default SlideInFromRight;