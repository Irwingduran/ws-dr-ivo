
import React from 'react';
import { motion } from 'framer-motion';

const GrowIn = ({ children, className }) => {
    const variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
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

export default GrowIn;