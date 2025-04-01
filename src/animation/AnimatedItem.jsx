
import React from 'react'
import { motion } from 'framer-motion'

const AnimatedItem = ({ children, delay = 0 ,intial = 20 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: intial }}
            transition={{ delay, duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedItem